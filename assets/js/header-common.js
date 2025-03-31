document.addEventListener('DOMContentLoaded', function() {
  // デバッグ用のコンソールログを追加
  console.log('DOM loaded, attempting to load header');
  
  // ヘッダーの読み込み
  fetch('assets/includes/header.html')
    .then(response => {
      console.log('Header fetch response:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Header loaded successfully');
      document.getElementById('header-container').innerHTML = data;
      
      // ハンバーガーメニューの機能を初期化
      initHamburgerMenu();
    })
    .catch(error => {
      console.error('ヘッダーの読み込みに失敗しました:', error);
      // エラー時のフォールバック
      document.getElementById('header-container').innerHTML = `
        <header>
          <div class="logo">Nexoria</div>
          <div class="hamburger-menu">
            <div class="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav>
            <a href="#works">Works</a>
            <a href="/wordpress">blog</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      `;
      initHamburgerMenu();
    });
  
  // ハンバーガーメニューの機能
  function initHamburgerMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('nav');
    
    if (hamburgerIcon && nav) {
      hamburgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
      });
      
      // ナビゲーションリンクをクリックしたらメニューを閉じる
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          hamburgerIcon.classList.remove('active');
          nav.classList.remove('active');
        });
      });
    }
  }
});
