import React, { useEffect, useState } from 'react';
import WelcomePopup from './WelcomePopup';
import AcademyPopup from './AcademyPopup';
import { useActiveCohort } from '@/hooks/useActiveCohort';

export default function PopupController() {
  const { cohort, popupEnabled, registered, loading } = useActiveCohort();
  const [showAcademy, setShowAcademy] = useState(false);
  const [showDefault, setShowDefault] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (cohort && popupEnabled) setShowAcademy(true);
    else setShowDefault(true);
  }, [cohort, popupEnabled, loading]);

  if (loading) return null;

  if (showAcademy && cohort) {
    return <AcademyPopup cohort={cohort} registered={registered} onClose={() => setShowAcademy(false)} />;
  }
  if (showDefault) return <WelcomePopup />;
  return null;
}