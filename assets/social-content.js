
(() => {
  const fmt = new Intl.NumberFormat('cs-CZ');
  fetch('/assets/social-content.json', {cache:'no-store'})
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      document.querySelectorAll('[data-platform-key]').forEach(header => {
        const p = data.profiles?.[header.dataset.platformKey];
        const el = header.querySelector('[data-followers]');
        if (p?.followers != null && el) {
          el.textContent = `${fmt.format(p.followers)} sledujících`;
          if (p.followers_as_of) el.title = `Stav k ${p.followers_as_of}`;
          el.hidden = false;
        }
      });
      document.querySelectorAll('[data-video-url]').forEach(card => {
        const item = data.videos?.[card.dataset.videoUrl];
        if (!item) return;
        const title = card.querySelector('[data-video-title]');
        const desc = card.querySelector('[data-video-description]');
        const views = card.querySelector('[data-video-views]');
        if (item.title && title) {
          title.textContent = item.title;
          title.hidden = false;
        }
        if (item.description && desc) {
          desc.textContent = item.description;
          desc.hidden = false;
        }
        if (item.views != null && views) {
          views.textContent = `${fmt.format(item.views)} zhlédnutí`;
          if (item.views_as_of) views.title = `Stav k ${item.views_as_of}`;
          views.hidden = false;
        }
      });
    })
    .catch(() => {});
})();
