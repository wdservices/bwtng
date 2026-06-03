import {
  collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
  setDoc, query, where, orderBy, limit, serverTimestamp, writeBatch
} from 'firebase/firestore';
import { db } from '@/firebase';
import type { Cohort, Registration, PopupSettings, Payment } from '@/types/academy';

const COHORTS = 'cohorts';
const REGISTRATIONS = 'registrations';
const SETTINGS = 'popup_settings';

/* ---------- Cohorts ---------- */
export async function listCohorts(): Promise<Cohort[]> {
  const snap = await getDocs(query(collection(db, COHORTS), orderBy('number', 'desc')));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Cohort));
}

export async function getActiveCohort(): Promise<Cohort | null> {
  try {
    const snap = await getDocs(
      query(collection(db, COHORTS), where('status', '==', 'active'), limit(1))
    );
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as Cohort;
  } catch (e) {
    console.error('getActiveCohort error', e);
    return null;
  }
}

export async function getCohort(id: string): Promise<Cohort | null> {
  const s = await getDoc(doc(db, COHORTS, id));
  return s.exists() ? ({ id: s.id, ...s.data() } as Cohort) : null;
}

export async function createCohort(data: Omit<Cohort, 'id'>): Promise<string> {
  const ref = await addDoc(collection(db, COHORTS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  if (data.status === 'active') await enforceSingleActive(ref.id);
  return ref.id;
}

export async function updateCohort(id: string, data: Partial<Cohort>): Promise<void> {
  await updateDoc(doc(db, COHORTS, id), { ...data, updatedAt: serverTimestamp() });
  if (data.status === 'active') await enforceSingleActive(id);
}

export async function deleteCohort(id: string): Promise<void> {
  await deleteDoc(doc(db, COHORTS, id));
}

async function enforceSingleActive(keepId: string): Promise<void> {
  const snap = await getDocs(query(collection(db, COHORTS), where('status', '==', 'active')));
  const batch = writeBatch(db);
  snap.docs.forEach(d => {
    if (d.id !== keepId) batch.update(d.ref, { status: 'closed', updatedAt: serverTimestamp() });
  });
  await batch.commit();
}

/* ---------- Registrations ---------- */
export async function createRegistration(
  data: Omit<Registration, 'id' | 'createdAt'>
): Promise<string> {
  const ref = await addDoc(collection(db, REGISTRATIONS), {
    ...data,
    createdAt: serverTimestamp(),
  });
  
  // Increment seatsTaken for the cohort
  if (data.cohortId) {
    try {
      const cohortRef = doc(db, COHORTS, data.cohortId);
      const cohortSnap = await getDoc(cohortRef);
      if (cohortSnap.exists()) {
        const cohortData = cohortSnap.data();
        const currentSeatsTaken = cohortData.seatsTaken || 0;
        await updateDoc(cohortRef, { 
          seatsTaken: currentSeatsTaken + 1,
          updatedAt: serverTimestamp()
        });
      }
    } catch (error) {
      console.error('Error updating seatsTaken:', error);
      // Don't fail the registration if seatsTaken update fails
    }
  }
  
  return ref.id;
}

export async function listRegistrations(cohortId?: string): Promise<Registration[]> {
  const base = collection(db, REGISTRATIONS);
  const q = cohortId
    ? query(base, where('cohortId', '==', cohortId), orderBy('createdAt', 'desc'))
    : query(base, orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Registration));
}

export async function countRegistrations(cohortId: string): Promise<number> {
  const snap = await getDocs(query(collection(db, REGISTRATIONS), where('cohortId', '==', cohortId)));
  return snap.size;
}

/* ---------- Popup settings ---------- */
export async function getPopupSettings(): Promise<PopupSettings> {
  try {
    const s = await getDoc(doc(db, SETTINGS, 'main'));
    if (s.exists()) return s.data() as PopupSettings;
  } catch (e) {
    console.error('getPopupSettings', e);
  }
  return { enabled: true };
}

export async function setPopupSettings(settings: PopupSettings): Promise<void> {
  await setDoc(doc(db, SETTINGS, 'main'), settings, { merge: true });
}