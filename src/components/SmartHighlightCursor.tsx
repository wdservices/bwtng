import React, { useEffect, useState } from 'react';

/**
 * Smart cursor highlight system:
 * Dynamically reacts and animates differently based on what the cursor touches:
 * - Button / Interactive CTA: Pulsing electric target ring with magnetic snap
 * - Card / Container: Broad soft ambient spotlight lens
 * - Text / Nav link: Precision focus laser dot
 * - Input / Textarea: Cyber bracket indicator
 * Disabled on touchscreens and when prefers-reduced-motion is true.
 */
export default function SmartHighlightCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hoverType, setHoverType] = useState<'default' | 'button' | 'card' | 'link' | 'input'>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('button, [role="button"], a[class*="button"], .btn')) {
        setHoverType('button');
      } else if (target.closest('input, textarea, select')) {
        setHoverType('input');
      } else if (target.closest('article, .interactive-card, [class*="card"]')) {
        setHoverType('card');
      } else if (target.closest('a, [role="link"], .interactive-link')) {
        setHoverType('link');
      } else {
        setHoverType('default');
      }
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const lerp = () => {
      const speed = hoverType === 'button' ? 0.35 : 0.22;
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;
      setPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(lerp);
    };
    rafId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [visible, hoverType]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9997] will-change-transform transition-opacity duration-300"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      {/* 1. BUTTON HOVER: Snappy electric ring */}
      {hoverType === 'button' && (
        <div className="relative -top-6 -left-6 w-12 h-12 rounded-full border-2 border-primary bg-primary/20 shadow-[0_0_20px_rgba(37,99,235,0.6)] animate-pulse transition-all duration-200" />
      )}

      {/* 2. CARD HOVER: Broad soft ambient spotlight */}
      {hoverType === 'card' && (
        <div className="relative -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-2xl transition-all duration-300" />
      )}

      {/* 3. LINK / NAV HOVER: Crisp pure white precision dot */}
      {hoverType === 'link' && (
        <div className="relative -top-2.5 -left-2.5 w-5 h-5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)] border border-white/80 scale-125 transition-all duration-150" />
      )}

      {/* 4. INPUT HOVER: Cyber bracket indicator */}
      {hoverType === 'input' && (
        <div className="relative -top-3.5 -left-3.5 w-7 h-7 border border-primary/80 rounded bg-primary/15 shadow-[0_0_14px_rgba(37,99,235,0.4)] transition-all duration-200" />
      )}

      {/* 5. DEFAULT AMBIENT AURA */}
      {hoverType === 'default' && (
        <div className="relative -top-2.5 -left-2.5 w-5 h-5 rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_10px_rgba(37,99,235,0.25)] transition-all duration-200" />
      )}
    </div>
  );
}
