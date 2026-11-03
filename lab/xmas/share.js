// XMAS LAB 共通：シェアボタンとアクセス解析
// 各ページの <head> で <script src="../share.js" defer></script> と読み込む
(() => {
  const GA_ID = 'G-7W9P1Q79KJ';
  const ORIGIN = 'https://nexoria.lomo.jp';

  // ── アクセス解析（本番ドメインのときだけ動かす。ローカル確認では計測しない）──
  const live = location.hostname.endsWith('lomo.jp');
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  if (live) {
    const s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  const track = (name, params) => { if (live) gtag('event', name, params); };

  // ── 共有する中身 ──
  const meta = n => document.querySelector(`meta[property="${n}"], meta[name="${n}"]`)?.content || '';
  const url = meta('og:url') || ORIGIN + location.pathname;
  const title = meta('og:title') || document.title;
  const desc = meta('description');
  const slug = location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  const text = `${desc}\n\n${title}`;

  const ICON_X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
  const ICON_LINK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0zM8.5 19a4.5 4.5 0 0 1-3.2-7.7l2-2a1 1 0 1 1 1.4 1.4l-2 2a2.5 2.5 0 0 0 3.6 3.6l2-2a1 1 0 0 1 1.4 1.4l-2 2A4.5 4.5 0 0 1 8.5 19zm7.5-5a1 1 0 0 1-.7-1.7l2-2a2.5 2.5 0 0 0-3.6-3.6l-2 2a1 1 0 0 1-1.4-1.4l2-2a4.5 4.5 0 0 1 6.4 6.4l-2 2A1 1 0 0 1 16 14z"/></svg>';
  const ICON_SHARE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6 7.3 7.3a1 1 0 0 0 1.4 1.4L11 6.4V15a1 1 0 1 0 2 0V6.4l2.3 2.3a1 1 0 0 0 1.4-1.4zM5 13a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1z"/></svg>';

  const css = document.createElement('style');
  css.textContent = `
    .xl-share { position: fixed; z-index: 50; display: flex; gap: 6px; }
    .xl-share.inline { position: static; margin-top: 18px; }
    .xl-share button { all: unset; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
      height: 32px; min-width: 32px; padding: 0 11px; border-radius: 999px; cursor: pointer;
      font: 400 11px/1 'Outfit', system-ui, sans-serif; letter-spacing: .12em; color: rgba(255,255,255,.82);
      background: rgba(10,12,20,.38); border: 1px solid rgba(255,255,255,.2);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); transition: background .2s, color .2s; }
    .xl-share button:hover { background: rgba(255,255,255,.16); color: #fff; }
    .xl-share button:focus-visible { outline: 2px solid rgba(255,255,255,.7); outline-offset: 2px; }
    .xl-share svg { width: 13px; height: 13px; fill: currentColor; }
    .xl-toast { position: fixed; left: 50%; top: 22px; transform: translate(-50%, -12px); z-index: 60; opacity: 0; pointer-events: none;
      font: 400 12px/1 'Outfit', system-ui, sans-serif; letter-spacing: .1em; color: #fff; background: rgba(10,12,20,.75);
      padding: 10px 16px; border-radius: 999px; transition: opacity .3s, transform .3s; }
    .xl-toast.on { opacity: 1; transform: translate(-50%, 0); }`;
  document.head.appendChild(css);

  const box = document.createElement('div');
  box.className = 'xl-share';
  const native = navigator.share && matchMedia('(pointer: coarse)').matches;
  box.innerHTML = `<button type="button" data-k="x" aria-label="Xでポストする">${ICON_X}<span>POST</span></button>`
    + (native
      ? `<button type="button" data-k="native" aria-label="共有する">${ICON_SHARE}</button>`
      : `<button type="button" data-k="copy" aria-label="リンクをコピーする">${ICON_LINK}</button>`);

  const toast = document.createElement('div');
  toast.className = 'xl-toast';
  const say = m => { toast.textContent = m; toast.classList.add('on'); clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove('on'), 1600); };

  box.addEventListener('pointerdown', e => e.stopPropagation());
  box.addEventListener('click', async e => {
    e.stopPropagation();
    const k = e.target.closest('button')?.dataset.k;
    if (k === 'x') {
      open('https://x.com/intent/post?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank', 'noopener,width=600,height=520');
      track('share', { method: 'x', content_type: 'xmas_lab', item_id: slug });
    } else if (k === 'copy') {
      try { await navigator.clipboard.writeText(url); say('リンクをコピーしました'); } catch (_) { say(url); }
      track('share', { method: 'copy', content_type: 'xmas_lab', item_id: slug });
    } else if (k === 'native') {
      try { await navigator.share({ title, text: desc, url }); track('share', { method: 'native', content_type: 'xmas_lab', item_id: slug }); } catch (_) {}
    }
  });

  // 置き場所：一覧ページは見出しの下、各作品ページは「← 戻る」リンクのすぐ下
  function place() {
    const back = document.querySelector('a[href="../"]');
    if (!back) return;
    const r = back.getBoundingClientRect();
    let top = r.bottom + 10;
    box.style.right = Math.round(innerWidth - r.right) + 'px';
    // 見出しや説明文と重なる幅なら、その下へずらす
    const w = box.offsetWidth || 90, left = r.right - w;
    for (const el of document.querySelectorAll('.head, .top h1')) {
      const h = el.getBoundingClientRect();
      if (h.right > left && h.left < r.right && h.bottom > top - 4) top = Math.max(top, h.bottom + 12);
    }
    box.style.top = Math.round(top) + 'px';
  }
  function mount() {
    if (location.search.includes('og') || window !== window.top) return;   // OGP画像の撮影時と、一覧のサムネイル内では出さない
    const slot = document.querySelector('[data-share-slot]');
    if (slot) { box.classList.add('inline'); slot.appendChild(box); }
    else { document.body.appendChild(box); place(); addEventListener('resize', place); }
    document.body.appendChild(toast);
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', mount) : mount();
})();
