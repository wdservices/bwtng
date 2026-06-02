import { useEffect, useState } from 'react';
import { getActiveCohort, getPopupSettings, countRegistrations } from '@/services/academyService';
import type { Cohort } from '@/types/academy';

export function useActiveCohort() {
  const [cohort, setCohort] = useState<Cohort | null>(null);
  const [popupEnabled, setPopupEnabled] = useState<boolean>(true);
  const [registered, setRegistered] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      const [c, s] = await Promise.all([getActiveCohort(), getPopupSettings()]);
      if (!alive) return;
      setCohort(c);
      setPopupEnabled(s.enabled);
      if (c) {
        const n = await countRegistrations(c.id);
        if (alive) setRegistered(n);
      }
      setLoading(false);
    })();
    return () => { alive = false; };
  }, []);

  return { cohort, popupEnabled, registered, loading };
}