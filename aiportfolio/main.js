/* =============================================
   PLACEHOLDER THUMBNAILS (グラデーション背景)
   各作品のダミーサムネイル色パターン
   ============================================= */

/* カラーパレット定義 (Sleek Minimalist / Monochrome Tones) */
const PALETTES = [
  ['#18181b', '#27272a'],
  ['#1c1917', '#292524'],
  ['#0f172a', '#1e293b'],
  ['#171717', '#262626'],
  ['#111827', '#1f2937'],
  ['#1e1b4b', '#312e81'],
  ['#052e16', '#14532d'],
  ['#2e1065', '#4c1d95'],
  ['#1e293b', '#334155'],
  ['#27272a', '#3f3f46'],
  ['#292524', '#44403c'],
  ['#09090b', '#18181b'],
];

/* =============================================
   WORKS DATA
   ============================================= */
const WORKS = [
  {
    id: 24, cat: 'cm', tool: 'Renoise',
    title: 'Just Create',
    desc: "Don't wait for Inspiration, Don't ask Permission. Just Create ",
    date: '2026-04', dur: '0:15',
    palette: 0, wide: true, tall: false,
    hasSound: true, tags: ['CM', 'ad']
  },
  {
    id: 1, cat: 'mv', tool: 'flova',
    title: 'ラムネ',
    desc: 'SUNOで生成した楽曲のミュージックビデオ。楽曲はSpotify他各種サービスで配信中。',
    date: '2025-04', dur: '0:38',
    palette: 0, wide: false, tall: false,
    hasSound: false, tags: ['Emotional', 'music']
  },
  {
    id: 2, cat: 'anime', tool: 'OiiOii',
    title: '春の一瞬',
    desc: '桜舞い散る季節の一枚を取ろうとする少女の物語。',
    date: '2026-04', dur: '0:22',
    palette: 1, wide: false, tall: false,
    hasSound: true, tags: ['Character', 'Nature']
  },
  {
    id: 3, cat: 'anime', tool: 'Sora2',
    title: '初めてのお手前',
    desc: '和のテイストを入れたアニメ',
    date: '2026-04', dur: '0:45',
    palette: 2, wide: false, tall: false,
    hasSound: true, tags: ['Traditional', 'Japan']
  },
  {
    id: 4, cat: 'cinema', tool: 'renoise',
    title: 'Coffee',
    desc: '窓辺でコーヒーを飲む女性',
    date: '2026-04', dur: '0:31',
    palette: 3, wide: false, tall: true,
    hasSound: true, tags: ['Daily Life']
  },
  {
    id: 5, cat: 'CM', tool: 'Flova',
    title: '架空CM',
    desc: 'くりえみ AIフィルムコンテスト 応募作品。スポンサーのGoogle Cloudの架空CM',
    date: '2026-03', dur: '0:28',
    palette: 4, wide: true, tall: false,
    hasSound: true, tags: ['Commercial', 'Google Cloud']
  },
  {
    id: 6, cat: 'anime', tool: 'Pollo',
    title: '通知',
    desc: '驚きの表情を浮かべ笑みを浮かべるエージェント',
    date: '2026-02', dur: '0:52',
    palette: 5, wide: false, tall: false,
    hasSound: false, tags: ['Emotion', 'Character']
  },
  {
    id: 7, cat: 'cinematic', tool: 'Sora2',
    title: '予定外から人生は動き出す',
    desc: '社会のレールではないところに道はあるのかもしれない。くりえみ AIフィルムコンテスト 応募作品。',
    date: '2025-04', dur: '0:41',
    palette: 6, wide: false, tall: true,
    hasSound: true, tags: ['Life', 'Street']
  },
  {
    id: 8, cat: 'abstract', tool: 'OiiOii',
    title: 'ハリウッド猫カーチェイス',
    desc: 'AI猫の日にゃんにゃんにゃん 応募作品',
    date: '2026-02', dur: '1:02',
    palette: 7, wide: false, tall: false,
    hasSound: true, tags: ['Space', 'Fractal']
  },
  {
    id: 9, cat: 'anime', tool: 'OiiOii',
    title: '再会',
    desc: 'ピクスタ株式会社 Neo Anime Award 応募作品',
    date: '2026-02', dur: '0:36',
    palette: 8, wide: false, tall: true,
    hasSound: true, tags: ['Sci-Fi', 'Sound']
  },
  {
    id: 10, cat: 'anime', tool: 'OiiOii',
    title: 'DISC',
    desc: 'ピクスタ株式会社 Neo Anime Award 応募作品',
    date: '2026-02', dur: '0:48',
    palette: 9, wide: false, tall: false,
    hasSound: true, tags: ['Memory', 'Reflections']
  },
  {
    id: 11, cat: 'nature', tool: 'Sora2',
    title: '転機',
    desc: '向いている場所',
    date: '-', dur: '0:29',
    palette: 10, wide: false, tall: false,
    hasSound: true, tags: ['job', 'sora2']
  },
  {
    id: 12, cat: 'cinematic', tool: 'Sora2',
    title: '日本',
    desc: '日本の都市巡り',
    date: '-', dur: '0:55',
    palette: 11, wide: false, tall: false,
    hasSound: true, tags: ['japan', 'city']
  },
  {
    id: 13, cat: 'illust', tool: 'Flova',
    title: '絵本',
    desc: '空に祈りを',
    date: '-', dur: '0:33',
    palette: 0, hasSound: false,
  },
  {
    id: 14, cat: 'MV', tool: 'Sora2',
    title: 'キャラクターMV',
    desc: 'Sora2を使ったMusic Video',
    date: '-', dur: '0:44',
    palette: 5, hasSound: true,
  },
  {
    id: 15, cat: 'nature', tool: 'Veo3',
    title: 'Butterfly',
    desc: '湖の中の女性映像。',
    date: '-', dur: '0:57',
    palette: 3, wide: false, hasSound: false,
  },
  {
    id: 16, cat: 'nature', tool: 'Higgsfield',
    title: 'Child',
    desc: '線路を歩く子供',
    date: '-', dur: '0:50',
    palette: 2, hasSound: false,
  },
  {
    id: 17, cat: 'anime', tool: 'OiiOii',
    title: 'MV',
    desc: 'MV',
    date: '-', dur: '0:42',
    palette: 4, wide: false, tall: false,
    hasSound: true, tags: ['Anime Style', 'Ghibli']
  },
  {
    id: 18, cat: 'anime', tool: 'OiiOii',
    title: 'house',
    desc: '新年の馬',
    date: '2026-01', dur: '0:51',
    palette: 7, wide: false, tall: false,
    hasSound: false, tags: ['Dragon', 'Fantasy']
  },
  {
    id: 19, cat: 'anime', tool: 'Vidu',
    title: 'BIKE',
    desc: 'Viduコンテスト応募作品',
    date: '2026-03', dur: '0:35',
    palette: 1, wide: false, tall: false,
    hasSound: true, tags: ['Cyberpunk', 'Festival']
  },
  {
    id: 20, cat: 'cinematic', tool: 'Flova',
    title: '視線の先に',
    desc: 'くりえみAIFilmCONTEST応募作品',
    date: '2026-03', dur: '0:15',
    palette: 6, hasSound: true, wide: true, tall: false,
  },
  {
    id: 21, cat: 'anime', tool: 'Pollo',
    title: '架空のゲームオープニング',
    desc: 'AIが生成した高品質なゲームオープニング映像作品。',
    date: '2026-03', dur: '0:15',
    palette: 7, hasSound: true,
  },
  {
    id: 22, cat: 'abstract', tool: 'Pollo',
    title: 'ShibuyaCrossing',
    desc: 'Polloコンテスト応募作品',
    date: '2026-04', dur: '0:15',
    palette: 8, hasSound: true,
  },
  {
    id: 23, cat: 'nature', tool: 'OiiOiii',
    title: '春の夜',
    desc: '桜の中歩く道',
    date: '2025-08', dur: '0:15',
    palette: 9, hasSound: true,
  },
  {
    id: 25, cat: 'game', tool: 'Seedance2.0',
    title: 'FPS',
    desc: 'FPSをするVtuber　Renoise',
    date: '2026-04', dur: '0:15',
    palette: 1, hasSound: true,
  },
  {
    id: 26, cat: 'cinematic', tool: 'Sora2',
    title: 'Japan',
    desc: 'AIが生成した高品質な映像作品。',
    date: '2025-08', dur: '0:15',
    palette: 2, hasSound: true,
  },
  {
    id: 27, cat: 'anime', tool: 'Sora2',
    title: '作品 27',
    desc: 'AIが生成した高品質な映像作品。',
    date: '2025-09', dur: '0:15',
    palette: 3, hasSound: true,
  },
  {
    id: 28, cat: 'abstract', tool: 'Sora2',
    title: '作品 28',
    desc: 'AIが生成した高品質な映像作品。',
    date: '2025-09', dur: '0:15',
    palette: 4, hasSound: true,
  },
  {
    id: 29, cat: 'anime', tool: 'LTX',
    title: 'Beyond the Horizon',
    desc: 'Projectodyssey AI Film Competition応募作品',
    date: '2025-01', dur: '0:15',
    palette: 5, hasSound: true,
  },
  {
    id: 30, cat: 'cinema', tool: 'Flova',
    title: '作品 30',
    desc: 'AIが生成した高品質な映像作品。',
    date: '2026-04', dur: '0:15',
    palette: 6, hasSound: true,
  },
];

/* =============================================
   PAGINATION / LIMIT LOGIC (Mobile optimization)
   ============================================= */
const getInitialLimit = () => window.innerWidth < 768 ? 8 : 1000;
let itemsLimit = getInitialLimit();

const loadMoreBtn = document.getElementById('load-more');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', function () {
    // スマホ時は8件ずつ追加、PC時は全表示なので基本ここは通らない
    itemsLimit += 8;
    applyFilterSort();
  });
}


/* =============================================
   THUMBNAIL CANVAS Generator
   ============================================= */
function generateThumbDataURL(palette, title, width = 640, height = 360) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // background gradient
  const [c1, c2] = PALETTES[palette] || PALETTES[0];
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, c1);
  grad.addColorStop(1, c2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // noise overlay (subtle)
  addNoise(ctx, width, height);

  // dark vignette
  const vig = ctx.createRadialGradient(width / 2, height / 2, height * .2, width / 2, height / 2, height * .9);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,.45)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, width, height);

  // abstract shapes
  drawShapes(ctx, width, height, c1, c2);

  // title text watermark
  ctx.font = `bold ${Math.floor(width * .025)}px Inter, sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,.18)';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText('AI VIDEO', width / 2, height / 2);

  return canvas.toDataURL('image/jpeg', .85);
}

function addNoise(ctx, w, h) {
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const n = (Math.random() - .5) * 30;
    data[i] = Math.min(255, Math.max(0, data[i] + n));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + n));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + n));
  }
  ctx.putImageData(imgData, 0, 0);
}

function drawShapes(ctx, w, h, c1, c2) {
  ctx.save();
  ctx.globalAlpha = .18;

  // circle 1
  ctx.beginPath();
  ctx.arc(w * .2, h * .3, h * .5, 0, Math.PI * 2);
  ctx.fillStyle = c1;
  ctx.fill();

  // circle 2
  ctx.beginPath();
  ctx.arc(w * .8, h * .7, h * .4, 0, Math.PI * 2);
  ctx.fillStyle = c2;
  ctx.fill();

  // horizontal lines
  ctx.globalAlpha = .1;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  for (let y = 0; y < h; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  ctx.restore();
}

/* =============================================
   BUILD TILE
   ============================================= */
function buildTile(work) {
  const thumb = generateThumbDataURL(work.palette, work.title);

  const tile = document.createElement('article');
  tile.className = 'tile';
  if (work.heroTile) tile.classList.add('hero-tile');
  else if (work.wide) tile.classList.add('wide');
  else if (work.tall) tile.classList.add('tall');

  tile.dataset.cat = work.cat;
  tile.innerHTML = `
    <div class="tile-preview">
      <img class="tile-thumb fallback-thumb" src="${thumb}" alt="${work.title} のサムネイル" loading="lazy" style="position:absolute; inset:0; z-index:1;" />
      <video class="tile-video" src="videos/work-${work.id}.mp4#t=0.001" muted loop playsinline preload="metadata" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2; opacity:0; transition: opacity 0.5s;"></video>
      <div class="tile-overlay" style="z-index:3;"></div>
      <button class="play-btn" aria-label="${work.title} を再生" style="z-index:4;">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <span class="cat-badge" style="z-index:4;">${catLabel(work.cat)}</span>
      <span class="dur-badge" style="z-index:4;">${work.dur}</span>
      <span class="tool-badge" style="z-index:4;">${work.tool}</span>
      ${work.hasSound ? `<span class="sound-badge" style="z-index:4;" title="音声あり"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></span>` : ''}
    </div>
    <div class="tile-info">
      <div class="tile-meta">
        <span class="tile-date">${formatDate(work.date)}</span>
      </div>
      <h2 class="tile-title">${work.title}</h2>
      <p class="tile-desc">${work.desc}</p>
    </div>
  `;

  const videoEl = tile.querySelector('.tile-video');
  const durBadge = tile.querySelector('.dur-badge');

  videoEl.addEventListener('loadeddata', () => {
    // 動画が見つかったら自動的にサムネイルとして表示
    videoEl.style.opacity = '1';

    // 動画の実際の再生時間を取得して表示を自動更新
    if (videoEl.duration && !isNaN(videoEl.duration)) {
      const m = Math.floor(videoEl.duration / 60);
      const s = Math.floor(videoEl.duration % 60).toString().padStart(2, '0');
      durBadge.textContent = `${m}:${s}`;
    }
  });

  // hover時の再生機能（PC等ホバー可能な端末向け）
  tile.addEventListener('mouseenter', () => {
    if (window.matchMedia('(hover: hover)').matches && videoEl.readyState >= 2) {
      videoEl.play().catch(() => { });
    }
  });
  tile.addEventListener('mouseleave', () => {
    if (window.matchMedia('(hover: hover)').matches) {
      videoEl.pause();
    }
  });

  tile.addEventListener('click', () => openLightbox(work, thumb));
  return tile;
}

function catLabel(cat) {
  const map = { cinematic: 'Cinematic', abstract: 'Abstract', nature: 'Nature', scifi: 'Sci-Fi', portrait: 'Portrait', anime: 'Anime' };
  return map[cat] || cat;
}

function formatDate(ym) {
  const [y, m] = ym.split('-');
  return `${y}年${parseInt(m)}月`;
}

/* =============================================
   LIGHTBOX
   ============================================= */
const lightbox = document.getElementById('lightbox');
const overlay = document.getElementById('lightbox-overlay');
const lbContent = document.getElementById('lightbox-content');
const lbInfo = document.getElementById('lightbox-info');
const lbClose = document.getElementById('lightbox-close');

function openLightbox(work, thumb) {
  const videoFileName = `work-${work.id}.mp4`; // 例: work-1.mp4

  lbContent.innerHTML = `
    <div id="lb-video-container" style="position:absolute;inset:0;width:100%;height:100%;z-index:10;background:#000;">
      <video id="lb-video" controls autoplay loop playsinline style="width:100%;height:100%;object-fit:contain;outline:none;">
        <source src="videos/${videoFileName}" type="video/mp4" onerror="document.getElementById('lb-video-container').style.display='none';" />
      </video>
    </div>
    <div class="lightbox-placeholder">
      <div class="play-icon">▶</div>
      <span>${work.tool} で生成<br /><small style="opacity:0.7;margin-top:8px;display:block;">videosフォルダに <b>${videoFileName}</b> を配置すると再生されます</small></span>
    </div>
    <img src="${thumb}" alt="${work.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.35;" />
  `;

  lbInfo.innerHTML = `
    <h3>${work.title}</h3>
    <p>${work.desc}<br /><br />
    <div class="lb-tags">
      ${(work.tags || []).map(t => `<span class="lb-tag">#${t}</span>`).join('')}
    </div>
    <div style="margin-top:16px; display:flex; gap:16px; font-size:0.85rem; color:var(--text-secondary);">
      <span><strong>ツール:</strong> ${work.tool}</span>
      <span><strong>カテゴリ:</strong> ${catLabel(work.cat)}</span>
      <span><strong>制作:</strong> ${formatDate(work.date)}</span>
      ${work.hasSound ? `<span><strong>音声:</strong> <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-bottom:2px;"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></span>` : ''}
    </div>
    </p>
  `;
  lightbox.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';

  // 閉じた時に動画の再生を止める
  const video = lbContent.querySelector('video');
  if (video) video.pause();
}

lbClose.addEventListener('click', closeLightbox);
overlay.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* =============================================
   FILTER & SORT
   ============================================= */
let currentFilter = 'all';
let visibleWorks = [...WORKS];

const grid = document.getElementById('works-grid');

function renderGrid(works) {
  grid.innerHTML = '';
  works.forEach((w, i) => {
    const tile = buildTile(w);
    tile.style.animationDelay = `${i * 0.05}s`;
    grid.appendChild(tile);
  });
}

function applyFilterSort() {
  let result = currentFilter === 'all'
    ? [...WORKS]
    : WORKS.filter(w => w.cat === currentFilter);

  const sort = document.getElementById('sort-select').value;
  if (sort === 'name') {
    result.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
  }

  const totalCount = result.length;
  const slicedResult = result.slice(0, itemsLimit);

  renderGrid(slicedResult);

  // Load More ボタンの制御
  if (loadMoreBtn) {
    if (itemsLimit < totalCount) {
      loadMoreBtn.style.display = 'inline-flex';
      loadMoreBtn.textContent = 'さらに読み込む';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }
}

// Filter chips
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    // フィルター切り替え時は初期表示数にリセット
    itemsLimit = getInitialLimit();
    applyFilterSort();
  });
});

// Sort
document.getElementById('sort-select').addEventListener('change', applyFilterSort);

/* =============================================
   HEADER SCROLL
   ============================================= */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* =============================================
   MOBILE MENU
   ============================================= */
const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.getElementById('header-nav');
menuToggle.addEventListener('click', () => {
  headerNav.classList.toggle('open');
  const open = headerNav.classList.contains('open');
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  const spans = menuToggle.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
// Close nav on link click
headerNav.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    headerNav.classList.remove('open');
    menuToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* （カウンターアニメーションのコードは末尾に移動しました） */

// Extended works removed as they are now merged into WORKS


/* =============================================
   HERO PARALLAX & VIDEO
   ============================================= */
const hero = document.getElementById('hero');
const heroContent = document.querySelector('.hero-content');
const heroVideo = document.getElementById('hero-bg-video');

if (hero && heroContent) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    heroContent.style.transform = `translate(${x}px, ${y}px)`;
    if (heroVideo) {
      heroVideo.style.transform = `scale(1.02) translate(${-x * 0.5}px, ${-y * 0.5}px)`;
    }
  });

  // Scroll parallax
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.5;
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });

  // スマホでの自動再生ブロックを強制解除する処理
  const forcePlayVideo = () => {
    if (heroVideo && heroVideo.paused) {
      heroVideo.play().catch(err => {
        console.log("Autoplay blocked, waiting for interaction.");
      });
    }
  };

  // ページ読み込み時と、ユーザーの最初の操作時に再生を試みる
  window.addEventListener('load', forcePlayVideo);
  document.addEventListener('touchstart', forcePlayVideo, { once: true });
  document.addEventListener('click', forcePlayVideo, { once: true });
}

/* =============================================
   INIT
   ============================================= */
applyFilterSort();

// 統計の数値を動的に設定
const statWorksNum = document.querySelector('#stat-works .stat-num');
if (statWorksNum) {
  statWorksNum.dataset.target = WORKS.length;
}

const statMonthsNum = document.querySelector('#stat-months .stat-num');
if (statMonthsNum) {
  const startYear = 2025;
  const startMonth = 7; // 8月
  const now = new Date();
  const diffMonths = (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonth);
  statMonthsNum.dataset.target = Math.max(1, diffMonths);
}

const statDurationNum = document.querySelector('#stat-duration .stat-num');
if (statDurationNum) {
  let totalSeconds = 0;
  WORKS.forEach(w => {
    if (w.dur) {
      const [m, s] = w.dur.split(':').map(Number);
      totalSeconds += (m * 60) + s;
    }
  });
  statDurationNum.dataset.target = Math.floor(totalSeconds / 60);
}

/* =============================================
   STAT COUNTER ANIMATION
   ============================================= */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();
  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(ease * target);
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('.stat-num[data-target]');
if (counterEls.length > 0) {
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: .5 });
  counterEls.forEach(el => counterObs.observe(el));
}
