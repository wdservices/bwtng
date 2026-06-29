import { useState, useEffect } from 'react';

export function useBlogViews(slug: string) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const key = `blog-viewed-${slug}`;
    const alreadyViewed = sessionStorage.getItem(key);

    fetch(`/api/blog-views/${slug}`)
      .then(r => r.json())
      .then(data => setViews(data.views ?? 0))
      .catch(() => {});

    if (!alreadyViewed) {
      fetch(`/api/blog-views/${slug}`, { method: 'POST' })
        .then(r => r.json())
        .then(data => {
          setViews(data.views ?? 0);
          sessionStorage.setItem(key, '1');
        })
        .catch(() => {});
    }
  }, [slug]);

  return views;
}
