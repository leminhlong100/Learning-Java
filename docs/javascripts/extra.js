/* ===========================================================
   Tương tác cho nội dung lộ trình:
   - Nút Copy code
   - Toggle Q&A (Xem/ẩn đáp án)
   - Checklist + thanh tiến độ, lưu localStorage theo từng tuần
   Theme / nav / scroll-top do MkDocs Material lo sẵn.
   =========================================================== */
function initLearningWidgets() {
  // ── COPY CODE ──
  document.querySelectorAll('.copy-btn').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', function () {
      const wrap = this.closest('.code-wrap');
      const code = wrap && wrap.querySelector('code');
      if (!code) return;
      navigator.clipboard.writeText(code.textContent).then(() => {
        this.textContent = '✓ Copied!';
        setTimeout(() => (this.textContent = 'Copy'), 1800);
      }).catch(() => {
        this.textContent = 'Error';
        setTimeout(() => (this.textContent = 'Copy'), 1800);
      });
    });
  });

  // ── Q&A TOGGLE ──
  document.querySelectorAll('.qa-toggle').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', function () {
      const item = this.closest('.qa-item');
      const answer = (this.nextElementSibling && this.nextElementSibling.classList.contains('qa-answer'))
        ? this.nextElementSibling
        : item && item.querySelector('.qa-answer');
      if (!answer) return;
      const open = answer.classList.toggle('open');
      this.textContent = open ? 'Ẩn đáp án ▲' : 'Xem đáp án ▼';
    });
  });

  // ── CHECKLIST + PROGRESS (localStorage theo data-week) ──
  function updateProgressFor(cl) {
    const cbs = cl.querySelectorAll('input[type=checkbox]');
    const done = [...cbs].filter(c => c.checked).length;
    const pct = cbs.length ? (done / cbs.length * 100) : 0;
    const outer = cl.closest('.progress-wrap-outer') || cl.parentElement;
    if (!outer) return;
    const bar = outer.querySelector('.progress-bar');
    const txt = outer.querySelector('.progress-text');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = done + '/' + cbs.length;
  }
  function initChecklist(cl, key) {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    cl.querySelectorAll('input[type=checkbox]').forEach((cb, i) => {
      if (cb.dataset.bound) return;
      cb.dataset.bound = '1';
      if (saved[i]) { cb.checked = true; cb.closest('.check-item').classList.add('done'); }
      cb.addEventListener('change', function () {
        this.closest('.check-item').classList.toggle('done', this.checked);
        const s = JSON.parse(localStorage.getItem(key) || '{}');
        s[i] = this.checked; localStorage.setItem(key, JSON.stringify(s));
        updateProgressFor(cl);
      });
    });
    updateProgressFor(cl);
  }
  document.querySelectorAll('.checklist[data-week]').forEach(cl => {
    initChecklist(cl, 'week' + cl.dataset.week + '_progress');
  });
}

/* Material bật instant navigation => dùng document$ nếu có,
   nếu không thì chạy khi DOM sẵn sàng. */
if (typeof document$ !== 'undefined' && document$.subscribe) {
  document$.subscribe(initLearningWidgets);
} else if (document.readyState !== 'loading') {
  initLearningWidgets();
} else {
  document.addEventListener('DOMContentLoaded', initLearningWidgets);
}
