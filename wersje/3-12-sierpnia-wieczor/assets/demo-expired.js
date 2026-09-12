/* Blokada wersji demonstracyjnej — pełnoekranowy komunikat po 3 s.
   Do wycięcia (plik + tag <script>) przed przekazaniem strony klientowi. */
(function () {
  var DELAY = 3000;
  var OPIEKUN = { imie: 'Adam', tel: '+48 791 510 111', telHref: '+48791510111' };
  if (window.__dxShown) return;
  window.__dxShown = true;

  var CSS = [
    '.dx-root{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;',
      'padding:24px;opacity:0;transition:opacity .5s cubic-bezier(.25,.46,.45,.94)}',
    '.dx-root.is-on{opacity:1}',
    '.dx-back{position:absolute;inset:0;background:rgba(15,29,18,.55);',
      '-webkit-backdrop-filter:blur(10px) saturate(.9);backdrop-filter:blur(10px) saturate(.9)}',
    '@supports not (backdrop-filter:blur(2px)){.dx-back{background:rgba(15,29,18,.86)}}',
    '.dx-modal{position:relative;width:min(520px,100%);background:var(--paper,#F3F1E9);',
      'border-radius:var(--r-lg,10px);padding:clamp(28px,5vw,44px);text-align:center;',
      'box-shadow:0 26px 70px -18px rgba(9,18,11,.5);transform:translateY(12px) scale(.985);',
      'transition:transform .5s cubic-bezier(.16,.84,.44,1)}',
    '.dx-root.is-on .dx-modal{transform:none}',
    '.dx-badge{display:inline-block;font-family:var(--font-body,sans-serif);font-size:.72rem;',
      'letter-spacing:.14em;text-transform:uppercase;color:var(--accent,#5E6A28);',
      'border:1px solid rgba(94,106,40,.3);border-radius:999px;padding:6px 14px;margin-bottom:20px}',
    '.dx-modal h2{font-family:var(--font-display,serif);font-size:clamp(1.6rem,1.3rem + 1.4vw,2.2rem);',
      'line-height:1.12;letter-spacing:-.025em;color:var(--ink,#1B231A);margin:0 0 12px}',
    '.dx-modal p{font-family:var(--font-body,sans-serif);font-size:1rem;line-height:1.6;',
      'color:var(--muted,#7C8177);margin:0 auto 26px;max-width:38ch}',
    '.dx-card{border-top:1px solid var(--line,rgba(27,35,26,.12));',
      'border-bottom:1px solid var(--line,rgba(27,35,26,.12));padding:20px 0;margin-bottom:24px}',
    '.dx-label{display:block;font-family:var(--font-body,sans-serif);font-size:.7rem;',
      'letter-spacing:.14em;text-transform:uppercase;color:var(--muted,#7C8177);margin-bottom:8px}',
    '.dx-name{display:block;font-family:var(--font-display,serif);font-size:1.28rem;',
      'color:var(--ink,#1B231A);margin-bottom:4px}',
    '.dx-tel{display:inline-block;font-family:var(--font-body,sans-serif);font-size:1.5rem;',
      'font-weight:700;letter-spacing:-.01em;color:var(--accent-d,#4A5420);text-decoration:none}',
    '.dx-tel:hover{text-decoration:underline}',
    '.dx-btn{display:inline-flex;align-items:center;gap:10px;background:var(--accent,#5E6A28);',
      'color:#F3F1E9;font-family:var(--font-body,sans-serif);font-size:.95rem;font-weight:600;',
      'letter-spacing:.01em;text-decoration:none;padding:15px 30px;border-radius:var(--r-md,6px);',
      'transition:background .24s cubic-bezier(.25,.46,.45,.94)}',
    '.dx-btn:hover{background:var(--accent-d,#4A5420)}',
    'body.dx-lock{overflow:hidden}'
  ].join('');

  function show() {
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var root = document.createElement('div');
    root.className = 'dx-root';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.innerHTML =
      '<div class="dx-back"></div>' +
      '<div class="dx-modal">' +
        '<span class="dx-badge">Wersja demonstracyjna</span>' +
        '<h2>Twoje demo się przedawniło</h2>' +
        '<p>Dostęp do wersji demonstracyjnej wygasł. Skontaktuj się ze swoim opiekunem, ' +
        'aby przedłużyć prezentację lub uruchomić stronę na własnej domenie.</p>' +
        '<div class="dx-card">' +
          '<span class="dx-label">Twój opiekun</span>' +
          '<span class="dx-name">' + OPIEKUN.imie + '</span>' +
          '<a class="dx-tel" href="tel:' + OPIEKUN.telHref + '">' + OPIEKUN.tel + '</a>' +
        '</div>' +
        '<a class="dx-btn" href="tel:' + OPIEKUN.telHref + '">Zadzwoń teraz</a>' +
      '</div>';

    document.body.appendChild(root);
    document.body.classList.add('dx-lock');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { root.classList.add('is-on'); });
    });
  }

  setTimeout(show, DELAY);
})();
