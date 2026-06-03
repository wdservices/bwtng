import {
  collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
  setDoc, query, where, orderBy, limit, serverTimestamp, writeBatch
} from 'firebase/firestore';
import { db } from '@/firebase';
import type { Payment } from '@/types/academy';

const PAYMENTS = 'payments';

export async function createPaymentRecord(
  data: Omit<Payment, 'id' | 'createdAt'>
): Promise<string> {
  const ref = await addDoc(collection(db, PAYMENTS), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getPaymentByReference(reference: string): Promise<Payment | null> {
  try {
    const q = query(collection(db, PAYMENTS), where('reference', '==', reference), limit(1));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as Payment;
  } catch (e) {
    console.error('getPaymentByReference error', e);
    return null;
  }
}

export async function updatePaymentStatus(reference: string, status: 'success' | 'failed'): Promise<void> {
  try {
    const q = query(collection(db, PAYMENTS), where('reference', '==', reference), limit(1));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const docRef = snap.docs[0].ref;
      await updateDoc(docRef, { status, updatedAt: serverTimestamp() });
    }
  } catch (e) {
    console.error('updatePaymentStatus error', e);
    throw e;
  }
}

export async function listPayments(): Promise<Payment[]> {
  try {
    const snap = await getDocs(query(collection(db, PAYMENTS), orderBy('createdAt', 'desc')));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Payment));
  } catch (e) {
    console.error('listPayments error', e);
    return [];
  }
}