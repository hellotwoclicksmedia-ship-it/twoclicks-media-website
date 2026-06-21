/* @ds-bundle: {"format":3,"namespace":"AccessibleFoundationsDesignSystem_87ff79","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Chip","sourcePath":"components/chips/Chip.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"List","sourcePath":"components/lists/List.jsx"},{"name":"ListItem","sourcePath":"components/lists/List.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"MenuItem","sourcePath":"components/overlays/Menu.jsx"},{"name":"Menu","sourcePath":"components/overlays/Menu.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"},{"name":"TierPill","sourcePath":"components/status/TierPill.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Divider","sourcePath":"components/surfaces/Divider.jsx"}],"sourceHashes":{"assets/icons.js":"0adaee824e24","components/buttons/Button.jsx":"716d592ce026","components/buttons/IconButton.jsx":"cb8f44feffc4","components/chips/Chip.jsx":"455653fa2c77","components/disclosure/Accordion.jsx":"254fedda242f","components/feedback/Modal.jsx":"83b70538ea36","components/feedback/Progress.jsx":"bc8143d66d5a","components/feedback/Toast.jsx":"3fbbfec6a148","components/forms/Checkbox.jsx":"d009567e4a85","components/forms/Input.jsx":"aebefd2ca4df","components/forms/Radio.jsx":"98dcd384fbba","components/forms/Select.jsx":"f42880b636ae","components/forms/Toggle.jsx":"41edfedfdb56","components/lists/List.jsx":"f89c6d241a86","components/media/Icon.jsx":"154e092fc780","components/navigation/Tabs.jsx":"c0c77cc5de55","components/overlays/Menu.jsx":"2fffce2e5f4f","components/overlays/Tooltip.jsx":"06c2445c12ea","components/status/TierPill.jsx":"35f0b019e41e","components/surfaces/Card.jsx":"ec7bf07789ee","components/surfaces/Divider.jsx":"d5748bd027a6","design-system/gallery.jsx":"a09287129bbe","portfolio/image-slot.js":"9309434cb09c","portfolio/portfolio.js":"18efe3d1c3df","site/design-system/gallery.jsx":"a09287129bbe","site/portfolio/image-slot.js":"9309434cb09c","site/portfolio/portfolio.js":"18efe3d1c3df","ui_kits/my-library/App.jsx":"554e4c756da6","ui_kits/my-library/ItemGrid.jsx":"6e72364ab045","ui_kits/my-library/LibraryHeader.jsx":"6d462250be64","ui_kits/my-library/SettingsPanel.jsx":"40ec9df767c1","ui_kits/my-library/Sidebar.jsx":"5d6ba48a6b31","ui_kits/my-library/WelcomeScreen.jsx":"c9a12fbae6ba"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/media/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.AccessibleFoundationsDesignSystem_87ff79 = window.AccessibleFoundationsDesignSystem_87ff79 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons.js
try { (() => {
/* Accessible Foundations — Icon registry (non-React contexts)
 * Outline / stroke style, 24×24 viewBox, colored via currentColor.
 * Mirrors components/media/Icon.jsx. Usage:
 *   <span class="af-ico">${afIcon('home')}</span>
 *   afIcon('search', { size: 20, stroke: 2 })
 */
(function () {
  // Inner markup only (paths). Wrapped by afIcon() in a stroke <svg>.
  var P = {
    home: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    folderOff: '<path d="M20 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v1M2 2l20 20"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    people: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    hourglass: '<path d="M5 22h14M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
    puzzle: '<path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5a2.5 2.5 0 0 1 0 5H2V20a2 2 0 0 0 2 2h3.8v-1.5a2.5 2.5 0 0 1 5 0V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"/>',
    save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
    autoSave: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M9 8l3 3 3-3"/>',
    stop: '<rect x="3" y="3" width="18" height="18" rx="2"/>',
    addCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    moreVertical: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    play: '<polygon points="5 3 19 12 5 21 5 3"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    chevronDown: '<polyline points="6 9 12 15 18 9"/>',
    chevronUp: '<polyline points="18 15 12 9 6 15"/>',
    chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
    chevronRight: '<polyline points="9 18 15 12 9 6"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
  };

  // moreVertical / star / play read better filled.
  var FILLED = {
    star: false
  };
  function afIcon(name, opts) {
    opts = opts || {};
    var size = opts.size || 24;
    var stroke = opts.stroke != null ? opts.stroke : 1.8;
    var inner = P[name] || '';
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="' + stroke + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }
  window.AFIcons = P;
  window.afIcon = afIcon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons.js", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Progress (linear + circular)
 * Determinate (value 0–100) or indeterminate. Brand fill on neutral track.
 */

const CSS = `
.af-prog { display: flex; flex-direction: column; gap: 6px; }
.af-prog__top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.af-prog__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-prog__pct { font-size: 14px; color: var(--neutral-500); font-variant-numeric: tabular-nums; }
.af-prog__track { position: relative; height: 8px; border-radius: var(--radius-full); background: var(--neutral-200); overflow: hidden; }
.af-prog__bar { position: absolute; inset: 0 auto 0 0; height: 100%; border-radius: var(--radius-full); background: var(--brand-700); transition: width var(--t-slow); }
.af-prog__track--indet .af-prog__bar { width: 40%; animation: af-prog-slide 1.4s ease-in-out infinite; }
@keyframes af-prog-slide { 0% { left: -40%; } 100% { left: 100%; } }
.af-prog__ring { display: inline-flex; }
.af-prog__ring svg { transform: rotate(-90deg); }
.af-prog__ring--indet svg { animation: af-prog-spin 1.1s linear infinite; transform: none; }
@keyframes af-prog-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .af-prog__track--indet .af-prog__bar { animation: none; left: 0; width: 100%; opacity: 0.4; }
  .af-prog__ring--indet svg { animation: none; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('af-progress-css')) {
  const s = document.createElement('style');
  s.id = 'af-progress-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Progress({
  variant = 'linear',
  value,
  label,
  showValue = false,
  size = 44,
  thickness = 5,
  className = ''
}) {
  const indeterminate = value == null;
  const pct = indeterminate ? 0 : Math.max(0, Math.min(100, value));
  const aria = {
    role: 'progressbar',
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    'aria-valuenow': indeterminate ? undefined : pct,
    'aria-label': label || 'Progress'
  };
  if (variant === 'circular') {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("span", _extends({
      className: 'af-prog__ring' + (indeterminate ? ' af-prog__ring--indet' : '') + (className ? ' ' + className : '')
    }, aria), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--neutral-200)",
      strokeWidth: thickness
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--brand-700)",
      strokeWidth: thickness,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: indeterminate ? c * 0.7 : c * (1 - pct / 100)
    })));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'af-prog' + (className ? ' ' + className : '')
  }, aria), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "af-prog__top"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "af-prog__label"
  }, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "af-prog__pct"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: 'af-prog__track' + (indeterminate ? ' af-prog__track--indet' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "af-prog__bar",
    style: indeterminate ? undefined : {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Radio & RadioGroup
 * Circular control in a 44px touch row. Brand dot when selected. Always grouped + labelled.
 */

const CSS = `
.af-radio { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; user-select: none; }
.af-radio--disabled { cursor: not-allowed; }
.af-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
.af-radio__ring {
  position: relative; flex-shrink: 0; width: 22px; height: 22px; border-radius: var(--radius-full);
  border: 1.5px solid var(--neutral-500); background: var(--white); transition: border-color var(--t-fast);
}
.af-radio__ring::after {
  content: ''; position: absolute; inset: 0; margin: auto; width: 11px; height: 11px; border-radius: var(--radius-full);
  background: var(--brand-700); transform: scale(0); transition: transform var(--t-fast);
}
.af-radio input:checked + .af-radio__ring { border-color: var(--brand-700); }
.af-radio input:checked + .af-radio__ring::after { transform: scale(1); }
.af-radio input:focus-visible + .af-radio__ring { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-radio:hover input:not(:checked):not(:disabled) + .af-radio__ring { border-color: var(--neutral-800); }
.af-radio input:disabled + .af-radio__ring { border-color: var(--neutral-300); background: var(--neutral-200); }
.af-radio input:disabled:checked + .af-radio__ring::after { background: var(--disabled-primary); }
.af-radio__label { font-size: 15px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-radiogroup { display: flex; flex-direction: column; gap: 4px; }
.af-radiogroup__legend { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); margin-bottom: 4px; }
.af-radiogroup--row { flex-direction: row; gap: 20px; flex-wrap: wrap; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-radio-css')) {
  const s = document.createElement('style');
  s.id = 'af-radio-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _rc = 0;
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const rid = id || `af-radio-${++_rc}`;
  const cls = ['af-radio', disabled ? 'af-radio--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: rid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "af-radio__ring"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "af-radio__label"
  }, label));
}
function RadioGroup({
  legend,
  name,
  value,
  defaultValue,
  onChange,
  options = [],
  row = false,
  children
}) {
  const gname = React.useMemo(() => name || `af-rg-${++_rc}`, [name]);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const handle = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "af-radiogroup",
    role: "radiogroup",
    "aria-label": legend
  }, legend && /*#__PURE__*/React.createElement("span", {
    className: "af-radiogroup__legend"
  }, legend), /*#__PURE__*/React.createElement("div", {
    className: 'af-radiogroup' + (row ? ' af-radiogroup--row' : '')
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: gname,
    value: o.value,
    label: o.label,
    disabled: o.disabled,
    checked: current === o.value,
    onChange: () => handle(o.value)
  })), children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Toggle (switch)
 * Pill track + circular thumb. Always labelled; never convey state by the switch alone.
 */

const CSS = `
.af-toggle { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; user-select: none; }
.af-toggle__control {
  position: relative; flex-shrink: 0; width: 44px; height: 26px;
  background: #9E9E9E; border-radius: var(--radius-full);
  transition: background var(--t-normal);
}
.af-toggle__thumb {
  position: absolute; top: 3px; left: 3px; width: 20px; height: 20px;
  background: var(--white); border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm); transition: transform var(--t-normal), background var(--t-normal);
}
.af-toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
.af-toggle input:checked + .af-toggle__control { background: #C3BEF5; }
.af-toggle input:checked + .af-toggle__control .af-toggle__thumb { transform: translateX(18px); background: var(--brand-700); }
.af-toggle input:focus-visible + .af-toggle__control { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-toggle input:disabled + .af-toggle__control { opacity: 0.45; }
.af-toggle--disabled { cursor: not-allowed; }
.af-toggle__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-toggle__state { font-size: 14px; color: var(--neutral-500); margin-left: 2px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-toggle-css')) {
  const s = document.createElement('style');
  s.id = 'af-toggle-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _tc = 0;
function Toggle({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  showState = false,
  id,
  className = '',
  ...rest
}) {
  const tid = id || `af-toggle-${++_tc}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const cls = ['af-toggle', disabled ? 'af-toggle--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: tid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: tid,
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: handle,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__control"
  }, /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__label"
  }, label), showState && /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__state"
  }, on ? 'On' : 'Off'));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Icon
 * Outline / stroke icons, 24×24 viewBox, colored via currentColor.
 * Canonical React registry (mirrors assets/icons.js for non-React contexts).
 */

const PATHS = {
  home: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  folderOff: '<path d="M20 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v1M2 2l20 20"/>',
  list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  people: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  hourglass: '<path d="M5 22h14M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  puzzle: '<path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5a2.5 2.5 0 0 1 0 5H2V20a2 2 0 0 0 2 2h3.8v-1.5a2.5 2.5 0 0 1 5 0V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
  stop: '<rect x="3" y="3" width="18" height="18" rx="2"/>',
  addCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  moreVertical: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  chevronUp: '<polyline points="18 15 12 9 6 15"/>',
  chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
};

/** Names available in the Accessible Foundations icon set. */
const iconNames = Object.keys(PATHS);
function Icon({
  name,
  size = 24,
  strokeWidth = 1.8,
  title,
  style,
  className,
  ...rest
}) {
  const inner = PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    className: className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : '') + inner
    }
  }, rest));
}
Object.assign(__ds_scope, { iconNames, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Button
 * One interactive hue. Five variants, two sizes. Height ≥36px, explicit font-family.
 */

const CSS = `
.af-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  border-radius: var(--radius-btn); border: 1.5px solid transparent;
  cursor: pointer; white-space: nowrap; text-decoration: none;
  transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast);
}
.af-btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-btn--lg { height: 44px; padding: 0 20px; font-size: 16px; font-weight: var(--fw-bold); }
.af-btn--sm { height: 36px; padding: 0 14px; font-size: 14px; font-weight: var(--fw-semibold); }
.af-btn--full { width: 100%; }
.af-btn[disabled] { cursor: not-allowed; }

/* primary */
.af-btn--primary { background: var(--brand-700); color: var(--white); }
.af-btn--primary:hover:not([disabled]) { background: var(--brand-900); }
.af-btn--primary[disabled] { background: var(--disabled-primary); }

/* secondary — neutral outline (white, never transparent) */
.af-btn--secondary { background: var(--white); color: var(--neutral-500); border-color: var(--neutral-300); }
.af-btn--secondary:hover:not([disabled]) { background: var(--surface-hover); color: var(--neutral-800); border-color: var(--border-strong); }
.af-btn--secondary[disabled] { opacity: 0.4; }

/* outline — brand outline */
.af-btn--outline { background: var(--white); color: var(--brand-700); border-color: var(--brand-700); }
.af-btn--outline:hover:not([disabled]) { background: var(--surface-outline-hover); }
.af-btn--outline[disabled] { opacity: 0.4; }

/* tertiary — text / link */
.af-btn--tertiary { background: transparent; color: var(--brand-700); border-color: transparent; padding-left: 8px; padding-right: 8px; }
.af-btn--tertiary:hover:not([disabled]) { color: var(--brand-900); text-decoration: underline; }
.af-btn--tertiary[disabled] { opacity: 0.4; }

/* danger — destructive only */
.af-btn--danger { background: var(--danger); color: var(--white); border-color: var(--danger); }
.af-btn--danger:hover:not([disabled]) { background: var(--danger-hover); border-color: var(--danger-hover); }
.af-btn--danger[disabled] { opacity: 0.4; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-button-css')) {
  const s = document.createElement('style');
  s.id = 'af-button-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'lg',
  iconLeft,
  iconRight,
  fullWidth = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['af-btn', `af-btn--${variant}`, `af-btn--${size}`, fullWidth ? 'af-btn--full' : '', className].filter(Boolean).join(' ');
  const icoSize = size === 'lg' ? 18 : 16;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: icoSize,
    strokeWidth: 2
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: icoSize,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — IconButton
 * Square icon-only control. Always pass aria-label. ≥44px touch target via padding.
 */

const CSS = `
.af-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border: none; background: none; cursor: pointer; color: var(--neutral-800);
  border-radius: var(--radius-sm); flex-shrink: 0;
  transition: background var(--t-fast), color var(--t-fast), transform var(--t-fast);
}
.af-iconbtn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-iconbtn:hover:not([disabled]) { background: var(--surface-hover); color: var(--brand-700); }
.af-iconbtn:active:not([disabled]) { transform: scale(0.94); }
.af-iconbtn[disabled] { color: rgba(26,26,46,0.25); cursor: not-allowed; }
.af-iconbtn--sm { width: 36px; height: 36px; }
.af-iconbtn--md { width: 44px; height: 44px; }
.af-iconbtn--lg { width: 48px; height: 48px; }
/* solid: filled interactive variant */
.af-iconbtn--solid { background: var(--brand-700); color: var(--white); }
.af-iconbtn--solid:hover:not([disabled]) { background: var(--brand-900); color: var(--white); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-iconbutton-css')) {
  const s = document.createElement('style');
  s.id = 'af-iconbutton-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  icon,
  size = 'md',
  solid = false,
  strokeWidth = 2,
  className = '',
  'aria-label': ariaLabel,
  ...rest
}) {
  const px = size === 'sm' ? 18 : size === 'lg' ? 24 : 20;
  const cls = ['af-iconbtn', `af-iconbtn--${size}`, solid ? 'af-iconbtn--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": ariaLabel
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: px,
    strokeWidth: strokeWidth
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/chips/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Chip
 * Compact, labelled tokens. assist · filter (selectable) · input (removable) · suggestion.
 * Pill radius (8px), 36px tall. Selected filter uses the active surface + brand text.
 */

const CSS = `
.af-chip {
  display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px;
  border-radius: var(--radius-pill); border: 1.5px solid var(--neutral-300); background: var(--white);
  font-family: var(--font-sans); font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body);
  cursor: pointer; white-space: nowrap; transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast);
}
.af-chip:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-chip[disabled] { opacity: 0.4; cursor: not-allowed; }
.af-chip:hover:not([disabled]) { background: var(--surface-hover); border-color: var(--border-strong); }
.af-chip--static { cursor: default; }
.af-chip--selected { background: var(--surface-active); border-color: var(--surface-active); color: var(--brand-900); }
.af-chip--selected:hover:not([disabled]) { background: var(--surface-active); border-color: var(--brand-700); }
.af-chip__remove {
  display: inline-flex; align-items: center; justify-content: center; margin: 0 -6px 0 0;
  width: 22px; height: 22px; border: none; background: none; color: inherit; cursor: pointer;
  border-radius: var(--radius-full); flex-shrink: 0; transition: background var(--t-fast);
}
.af-chip__remove:hover { background: rgba(0,0,0,0.08); }
.af-chip__remove:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 1px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-chip-css')) {
  const s = document.createElement('style');
  s.id = 'af-chip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Chip({
  variant = 'assist',
  selected = false,
  icon,
  onRemove,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const isFilter = variant === 'filter';
  const isInput = variant === 'input';
  const showCheck = isFilter && selected;
  const cls = ['af-chip', selected ? 'af-chip--selected' : '', isInput && !onRemove ? 'af-chip--static' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    disabled: disabled,
    "aria-pressed": isFilter ? selected : undefined
  }, rest), showCheck ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.5
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, children, isInput && onRemove && /*#__PURE__*/React.createElement("span", {
    className: "af-chip__remove",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 14,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Chip.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
/* Accessible Foundations — Accordion
 * Collapsible sections. Single-open by default; allowMultiple for independent panels.
 */

const CSS = `
.af-accordion { display: flex; flex-direction: column; border: 1px solid var(--neutral-300); border-radius: var(--radius-btn); overflow: hidden; background: var(--white); }
.af-acc-item + .af-acc-item { border-top: 1px solid var(--neutral-300); }
.af-acc-header {
  display: flex; align-items: center; gap: 14px; width: 100%; min-height: 56px; padding: 12px 18px;
  background: none; border: none; cursor: pointer; text-align: left; font-family: var(--font-sans);
  font-size: 16px; font-weight: var(--fw-semibold); color: var(--neutral-950);
  transition: background var(--t-fast);
}
.af-acc-header:hover { background: var(--surface-hover); }
.af-acc-header:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.af-acc-header__lbl { flex: 1; }
.af-acc-header__lead { color: var(--neutral-700); display: flex; flex-shrink: 0; }
.af-acc-header__chev { color: var(--neutral-500); transition: transform var(--t-normal); flex-shrink: 0; }
.af-acc-header[aria-expanded="true"] .af-acc-header__chev { transform: rotate(180deg); }
.af-acc-header[aria-expanded="true"] { color: var(--brand-900); }
.af-acc-header[aria-expanded="true"] .af-acc-header__lead { color: var(--brand-700); }
.af-acc-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--t-slow); }
.af-acc-panel--open { grid-template-rows: 1fr; }
.af-acc-panel__inner { overflow: hidden; min-height: 0; }
.af-acc-panel__pad { padding: 0 18px 18px; font-size: 15px; line-height: var(--lh-body); color: var(--text-body); }
@media (prefers-reduced-motion: reduce) { .af-acc-panel { transition: none; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-accordion-css')) {
  const s = document.createElement('style');
  s.id = 'af-accordion-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _ac = 0;
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = ''
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const baseId = React.useMemo(() => `af-acc-${++_ac}`, []);
  const toggle = id => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(id)) {
      if (allowMultiple) next.delete(id); /* else next already empty */
    } else next.add(id);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: 'af-accordion ' + className
  }, items.map((it, i) => {
    const id = it.id || `${baseId}-${i}`;
    const isOpen = open.has(id);
    return /*#__PURE__*/React.createElement("div", {
      className: "af-acc-item",
      key: id
    }, /*#__PURE__*/React.createElement("button", {
      className: "af-acc-header",
      "aria-expanded": isOpen,
      "aria-controls": `${id}-panel`,
      onClick: () => toggle(id)
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      className: "af-acc-header__lead"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      className: "af-acc-header__lbl"
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevronDown",
      size: 20,
      className: "af-acc-header__chev"
    })), /*#__PURE__*/React.createElement("div", {
      id: `${id}-panel`,
      className: 'af-acc-panel' + (isOpen ? ' af-acc-panel--open' : ''),
      role: "region"
    }, /*#__PURE__*/React.createElement("div", {
      className: "af-acc-panel__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "af-acc-panel__pad"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/* Accessible Foundations — Modal / Dialog
 * Backdrop blur, radius 14px. role=dialog aria-modal. Close on Esc, backdrop, button.
 * Footer: cancel (neutral) left, confirm (primary/danger) right.
 */

const CSS = `
.af-modal-overlay {
  position: fixed; inset: 0; z-index: var(--z-modal);
  display: flex; align-items: center; justify-content: center; padding: 20px;
  background: var(--backdrop); backdrop-filter: blur(2px);
  animation: af-modal-fade var(--t-slow);
}
@keyframes af-modal-fade { from { opacity: 0; } to { opacity: 1; } }
.af-modal {
  width: 420px; max-width: 100%; background: var(--white);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-modal); overflow: hidden;
  animation: af-modal-rise var(--t-slow);
}
@keyframes af-modal-rise { from { transform: translateY(8px) scale(0.98); } to { transform: none; } }
.af-modal__header {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 18px 20px 16px; border-bottom: 1px solid var(--neutral-300);
}
.af-modal__title { font-size: 16px; font-weight: var(--fw-semibold); color: var(--neutral-950); letter-spacing: var(--ls-heading); }
.af-modal__body { padding: 20px; font-size: 14px; color: var(--text-body); line-height: var(--lh-body); }
.af-modal__footer { display: flex; align-items: center; justify-content: flex-end; gap: 10px; padding: 16px 20px 18px; }
@media (prefers-reduced-motion: reduce) {
  .af-modal-overlay, .af-modal { animation: none; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('af-modal-css')) {
  const s = document.createElement('style');
  s.id = 'af-modal-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _mc = 0;
function Modal({
  open = true,
  title,
  onClose,
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  danger = false,
  showFooter = true,
  children,
  width
}) {
  const titleId = React.useMemo(() => `af-modal-title-${++_mc}`, []);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "af-modal-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "af-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    style: width ? {
      width
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "af-modal__header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "af-modal__title",
    id: titleId
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    size: "sm",
    "aria-label": "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "af-modal__body"
  }, children), showFooter && /*#__PURE__*/React.createElement("div", {
    className: "af-modal__footer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onClose
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: danger ? 'danger' : 'primary',
    size: "sm",
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/* Accessible Foundations — Toast / Snackbar
 * Brief, low-emphasis feedback. Light surface by default (matches the light
 * theme); pass tone="dark" for the inverse-surface variant. role=status (polite).
 */

const CSS = `
.af-toast-wrap { position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); z-index: var(--z-modal); display: flex; flex-direction: column; gap: 10px; align-items: center; pointer-events: none; }
.af-toast {
  pointer-events: auto; display: flex; align-items: center; gap: 14px;
  min-width: 280px; max-width: min(92vw, 520px); padding: 12px 12px 12px 16px;
  border-radius: var(--radius-btn); box-shadow: var(--shadow-lg); font-size: 14px; line-height: 1.4;
  animation: af-toast-in var(--t-slow);
}
@keyframes af-toast-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
.af-toast__icon { flex-shrink: 0; display: flex; }
.af-toast__msg { flex: 1; }
.af-toast__action {
  flex-shrink: 0; border: none; background: none; cursor: pointer; padding: 6px 10px; border-radius: var(--radius-item);
  font-family: var(--font-sans); font-size: 14px; font-weight: var(--fw-bold); transition: background var(--t-fast);
}
.af-toast__close {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;
  border: none; background: none; cursor: pointer; border-radius: var(--radius-full);
  transition: background var(--t-fast), color var(--t-fast);
}

/* light (default) — on the white theme */
.af-toast--light { background: var(--white); color: var(--neutral-700); border: 1px solid var(--neutral-300); }
.af-toast--light .af-toast__icon--success { color: #1F8A5B; }
.af-toast--light .af-toast__icon--danger { color: var(--danger); }
.af-toast--light .af-toast__icon--info { color: var(--brand-700); }
.af-toast--light .af-toast__action { color: var(--brand-700); }
.af-toast--light .af-toast__action:hover { background: var(--surface-hover); }
.af-toast--light .af-toast__action:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 1px; }
.af-toast--light .af-toast__close { color: var(--neutral-500); }
.af-toast--light .af-toast__close:hover { background: var(--neutral-200); color: var(--neutral-800); }
.af-toast--light .af-toast__close:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 1px; }

/* dark — inverse surface, for use over busy / media backgrounds */
.af-toast--dark { background: var(--neutral-950); color: var(--white); }
.af-toast--dark .af-toast__icon--success { color: #8FE3B0; }
.af-toast--dark .af-toast__icon--danger { color: #FF9B95; }
.af-toast--dark .af-toast__icon--info { color: #C3BEF5; }
.af-toast--dark .af-toast__action { color: #C3BEF5; }
.af-toast--dark .af-toast__action:hover { background: rgba(255,255,255,0.12); }
.af-toast--dark .af-toast__action:focus-visible { outline: 2px solid #C3BEF5; outline-offset: 1px; }
.af-toast--dark .af-toast__close { color: rgba(255,255,255,0.8); }
.af-toast--dark .af-toast__close:hover { background: rgba(255,255,255,0.12); color: var(--white); }
.af-toast--dark .af-toast__close:focus-visible { outline: 2px solid var(--white); outline-offset: 1px; }

@media (prefers-reduced-motion: reduce) { .af-toast { animation: none; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-toast-css-2')) {
  const s = document.createElement('style');
  s.id = 'af-toast-css-2';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const TOAST_ICON = {
  success: 'checkCircle',
  danger: 'help',
  info: 'bell'
};
function Toast({
  open = true,
  message,
  status,
  actionLabel,
  onAction,
  onClose,
  duration = 0,
  fixed = true,
  tone = 'light'
}) {
  React.useEffect(() => {
    if (!open || !duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);
  if (!open) return null;
  const card = /*#__PURE__*/React.createElement("div", {
    className: `af-toast af-toast--${tone === 'dark' ? 'dark' : 'light'}`,
    role: "status",
    "aria-live": "polite"
  }, status && /*#__PURE__*/React.createElement("span", {
    className: `af-toast__icon af-toast__icon--${status}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TOAST_ICON[status] || 'bell',
    size: 20,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "af-toast__msg"
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    className: "af-toast__action",
    onClick: onAction
  }, actionLabel), onClose && /*#__PURE__*/React.createElement("button", {
    className: "af-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18,
    strokeWidth: 2.2
  })));
  if (!fixed) return card;
  return /*#__PURE__*/React.createElement("div", {
    className: "af-toast-wrap"
  }, card);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Checkbox
 * 20px box in a 44px touch row. Brand fill when checked. Always labelled.
 */

const CSS = `
.af-check { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; user-select: none; }
.af-check--disabled { cursor: not-allowed; }
.af-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.af-check__box {
  position: relative; flex-shrink: 0; width: 22px; height: 22px; border-radius: var(--radius-sm);
  border: 1.5px solid var(--neutral-500); background: var(--white); color: var(--white);
  display: grid; place-items: center; transition: background var(--t-fast), border-color var(--t-fast);
}
.af-check__box svg, .af-check__dash { opacity: 0; transition: opacity var(--t-fast); }
.af-check__dash { width: 11px; height: 2.5px; border-radius: 2px; background: currentColor; }
.af-check input:checked + .af-check__box,
.af-check input:indeterminate + .af-check__box { background: var(--brand-700); border-color: var(--brand-700); }
.af-check input:checked + .af-check__box svg,
.af-check input:indeterminate + .af-check__box .af-check__dash { opacity: 1; }
.af-check input:focus-visible + .af-check__box { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-check:hover input:not(:checked):not(:disabled) + .af-check__box { border-color: var(--neutral-800); }
.af-check input:disabled + .af-check__box { border-color: var(--neutral-300); background: var(--neutral-200); }
.af-check input:disabled:checked + .af-check__box { background: var(--disabled-primary); border-color: var(--disabled-primary); }
.af-check--error .af-check__box { border-color: var(--danger); }
.af-check__label { font-size: 15px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-check__label--err { color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-checkbox-css')) {
  const s = document.createElement('style');
  s.id = 'af-checkbox-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _cc = 0;
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  indeterminate = false,
  error = false,
  id,
  className = '',
  ...rest
}) {
  const cid = id || `af-check-${++_cc}`;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate, checked]);
  const cls = ['af-check', disabled ? 'af-check--disabled' : '', error ? 'af-check--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: cid
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: cid,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": error || undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "af-check__box"
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    className: "af-check__dash"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    className: 'af-check__label' + (error ? ' af-check__label--err' : '')
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Input / Search field
 * 48px tall, radius 14px. Label above, helper/error below. Errors pair text + icon.
 */

const CSS = `
.af-field { display: flex; flex-direction: column; gap: 8px; }
.af-field__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); letter-spacing: var(--ls-label); }
.af-field__wrap {
  display: flex; align-items: center; gap: 10px;
  height: 48px; padding: 0 14px;
  background: var(--white); border: 1.5px solid var(--neutral-300);
  border-radius: var(--radius-lg);
  transition: border-color var(--t-normal), box-shadow var(--t-normal);
}
.af-field__wrap:hover { box-shadow: var(--shadow-sm); }
.af-field__wrap:focus-within { border-color: var(--brand-700); border-width: 2px; box-shadow: var(--shadow-md); padding: 0 13.5px; }
.af-field__icon { color: var(--neutral-500); flex-shrink: 0; display: flex; }
.af-field__input {
  flex: 1; min-width: 0; height: 100%; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: 14px; font-weight: var(--fw-regular); color: var(--neutral-950);
}
.af-field__input::placeholder { color: var(--neutral-500); }
.af-field__msg { display: flex; align-items: center; gap: 6px; font-size: 14px; color: var(--neutral-500); }
.af-field__msg--error { color: var(--danger); }
.af-field--error .af-field__wrap { border-color: var(--danger); }
.af-field--error .af-field__wrap:focus-within { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(224,58,58,0.12); }
.af-field--disabled .af-field__wrap { background: var(--neutral-200); opacity: 0.7; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-input-css')) {
  const s = document.createElement('style');
  s.id = 'af-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _idc = 0;
function Input({
  label,
  helper,
  error,
  icon,
  id,
  disabled = false,
  className = '',
  ...rest
}) {
  const fid = id || `af-input-${++_idc}`;
  const msgId = `${fid}-msg`;
  const cls = ['af-field', error ? 'af-field--error' : '', disabled ? 'af-field--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "af-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "af-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "af-field__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "af-field__input",
    disabled: disabled,
    "aria-invalid": !!error,
    "aria-describedby": error || helper ? msgId : undefined
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-field__msg af-field__msg--error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "help",
    size: 16,
    strokeWidth: 2
  }), " ", error) : helper ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-field__msg"
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Select
 * A styled NATIVE <select> (most accessible for the audience). Label above, helper/error below.
 */

const CSS = `
.af-select { display: flex; flex-direction: column; gap: 8px; }
.af-select__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); letter-spacing: var(--ls-label); }
.af-select__wrap { position: relative; display: flex; align-items: center; }
.af-select__el {
  appearance: none; -webkit-appearance: none; width: 100%; height: 48px;
  padding: 0 44px 0 14px; background: var(--white); border: 1.5px solid var(--neutral-300); border-radius: var(--radius-lg);
  font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-medium); color: var(--neutral-950); cursor: pointer;
  transition: border-color var(--t-normal), box-shadow var(--t-normal);
}
.af-select__el:hover { box-shadow: var(--shadow-sm); }
.af-select__el:focus-visible { outline: none; border-color: var(--brand-700); border-width: 2px; box-shadow: var(--shadow-md); padding-left: 13.5px; }
.af-select__el:disabled { background: var(--neutral-200); color: var(--neutral-500); cursor: not-allowed; }
.af-select__el--placeholder { color: var(--neutral-500); }
.af-select__chev { position: absolute; right: 14px; pointer-events: none; color: var(--neutral-500); display: flex; }
.af-select--error .af-select__el { border-color: var(--danger); }
.af-select__msg { display: flex; align-items: center; gap: 6px; font-size: 14px; color: var(--neutral-500); }
.af-select__msg--error { color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-select-css')) {
  const s = document.createElement('style');
  s.id = 'af-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _sc = 0;
function Select({
  label,
  helper,
  error,
  options = [],
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const sid = id || `af-select-${++_sc}`;
  const msgId = `${sid}-msg`;
  const isPlaceholder = (value ?? defaultValue ?? '') === '' && !!placeholder;
  const cls = ['af-select', error ? 'af-select--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "af-select__label",
    htmlFor: sid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "af-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    className: 'af-select__el' + (isPlaceholder ? ' af-select__el--placeholder' : ''),
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": !!error,
    "aria-describedby": error || helper ? msgId : undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "af-select__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 20
  }))), error ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-select__msg af-select__msg--error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "help",
    size: 16,
    strokeWidth: 2
  }), " ", error) : helper ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-select__msg"
  }, helper) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/lists/List.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — List & ListItem
 * Scannable rows: leading visual, primary + secondary text, trailing slot.
 * Interactive rows are ≥56px and behave like buttons.
 */

const CSS = `
.af-list { display: flex; flex-direction: column; background: var(--white); }
.af-list--bordered { border: 1px solid var(--neutral-300); border-radius: var(--radius-btn); overflow: hidden; }
.af-list--divided .af-listitem + .af-listitem { border-top: 1px solid var(--neutral-300); }

.af-listitem { display: flex; align-items: center; gap: 14px; width: 100%; min-height: 56px; padding: 10px 16px;
  background: none; border: none; text-align: left; font-family: var(--font-sans); color: var(--text-body); }
button.af-listitem { cursor: pointer; transition: background var(--t-fast); }
button.af-listitem:hover { background: var(--surface-hover); }
button.af-listitem:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.af-listitem--selected { background: var(--surface-active); box-shadow: inset 3px 0 0 var(--brand-700); }
.af-listitem--selected:hover { background: var(--surface-active); }

.af-listitem__lead { flex-shrink: 0; display: grid; place-items: center; width: 40px; height: 40px;
  border-radius: var(--radius-item); background: var(--neutral-200); color: var(--neutral-700); }
.af-listitem__lead--bare { width: auto; height: auto; background: none; color: var(--neutral-700); }
.af-listitem__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.af-listitem__title { font-size: 15px; font-weight: var(--fw-semibold); color: var(--neutral-950);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-listitem--selected .af-listitem__title { color: var(--brand-900); }
.af-listitem__desc { font-size: 14px; color: var(--neutral-500); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-listitem__trail { flex-shrink: 0; display: flex; align-items: center; gap: 10px; color: var(--neutral-500); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-list-css')) {
  const s = document.createElement('style');
  s.id = 'af-list-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function List({
  bordered = false,
  divided = true,
  className = '',
  children,
  ...rest
}) {
  const cls = ['af-list', bordered ? 'af-list--bordered' : '', divided ? 'af-list--divided' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "list"
  }, rest), children);
}
function ListItem({
  title,
  description,
  leading,
  trailing,
  bareLeading = false,
  onClick,
  selected = false,
  chevron = false,
  className = '',
  ...rest
}) {
  const interactive = !!onClick;
  const Tag = interactive ? 'button' : 'div';
  const cls = ['af-listitem', selected ? 'af-listitem--selected' : '', className].filter(Boolean).join(' ');
  const lead = leading != null && /*#__PURE__*/React.createElement("span", {
    className: 'af-listitem__lead' + (bareLeading ? ' af-listitem__lead--bare' : '')
  }, typeof leading === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leading,
    size: bareLeading ? 22 : 20
  }) : leading);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    role: "listitem",
    onClick: onClick,
    "aria-current": selected ? 'true' : undefined
  }, rest), lead, /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__title"
  }, title), description && /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__desc"
  }, description)), (trailing || chevron) && /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__trail"
  }, trailing, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 20
  })));
}
Object.assign(__ds_scope, { List, ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/List.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/* Accessible Foundations — Tabs (segmented control)
 * White container, 4px pad, shadow. Active tab = ink fill + white text.
 */

const CSS = `
.af-tabs { display: inline-flex; gap: 4px; padding: 4px; background: var(--white); border-radius: var(--radius-btn); box-shadow: var(--shadow-md); }
.af-tabs--full { display: flex; width: 100%; }
.af-tab {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  flex: 1; min-height: 48px; padding: 0 18px;
  border: none; background: transparent; cursor: pointer;
  font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-semibold);
  color: var(--neutral-800); border-radius: var(--radius-item);
  transition: background var(--t-fast), color var(--t-fast);
  white-space: nowrap;
}
.af-tab:hover:not(.af-tab--active) { background: var(--surface-hover); color: var(--brand-900); }
.af-tab:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-tab--active { background: var(--neutral-950); color: var(--white); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'af-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  fullWidth = false,
  className = ''
}) {
  const [internal, setInternal] = React.useState(value ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  const cls = ['af-tabs', fullWidth ? 'af-tabs--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      className: 'af-tab' + (on ? ' af-tab--active' : ''),
      onClick: () => select(it.id)
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18,
      strokeWidth: 2
    }), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Menu
 * Dropdown of actions anchored to a trigger. Closes on outside-click, Esc, or selection.
 * Pass a `trigger` element and either `items` or <MenuItem> children.
 */

const CSS = `
.af-menu { position: relative; display: inline-flex; }
.af-menu__pop {
  position: absolute; z-index: var(--z-menu); min-width: 200px; padding: 6px;
  background: var(--white); border: 1px solid var(--neutral-300); border-radius: var(--radius-btn);
  box-shadow: var(--shadow-lg); display: flex; flex-direction: column; gap: 2px;
  animation: af-menu-in var(--t-fast);
}
@keyframes af-menu-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
.af-menu__pop--start { left: 0; } .af-menu__pop--end { right: 0; }
.af-menu__pop--top { bottom: calc(100% + 6px); } .af-menu__pop--bottom { top: calc(100% + 6px); }
.af-menuitem {
  display: flex; align-items: center; gap: 12px; width: 100%; min-height: 44px; padding: 0 12px;
  background: none; border: none; border-radius: var(--radius-item); cursor: pointer; text-align: left;
  font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-medium); color: var(--text-body);
  transition: background var(--t-fast), color var(--t-fast);
}
.af-menuitem:hover { background: var(--surface-hover); color: var(--brand-700); }
.af-menuitem:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.af-menuitem__lbl { flex: 1; }
.af-menuitem--danger { color: var(--danger); }
.af-menuitem--danger:hover { background: #FDECEC; color: var(--danger-hover); }
.af-menuitem:disabled { color: var(--neutral-300); cursor: not-allowed; }
.af-menuitem:disabled:hover { background: none; }
.af-menu__sep { height: 1px; background: var(--neutral-300); margin: 4px 0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-menu-css')) {
  const s = document.createElement('style');
  s.id = 'af-menu-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function MenuItem({
  icon,
  danger = false,
  children,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: 'af-menuitem' + (danger ? ' af-menuitem--danger' : ''),
    role: "menuitem",
    onClick: onClick
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "af-menuitem__lbl"
  }, children));
}
function Menu({
  trigger,
  items,
  align = 'start',
  side = 'bottom',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const triggerEl = React.cloneElement(trigger, {
    onClick: e => {
      trigger.props.onClick && trigger.props.onClick(e);
      setOpen(o => !o);
    },
    'aria-haspopup': 'menu',
    'aria-expanded': open
  });
  const close = () => setOpen(false);
  const renderedItems = items ? items.map((it, i) => it.separator ? /*#__PURE__*/React.createElement("div", {
    key: 'sep' + i,
    className: "af-menu__sep"
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    key: it.label + i,
    icon: it.icon,
    danger: it.danger,
    disabled: it.disabled,
    onClick: () => {
      it.onClick && it.onClick();
      close();
    }
  }, it.label)) : React.Children.map(children, child => child && child.type === MenuItem ? React.cloneElement(child, {
    onClick: e => {
      child.props.onClick && child.props.onClick(e);
      close();
    }
  }) : child);
  return /*#__PURE__*/React.createElement("span", {
    className: "af-menu",
    ref: ref
  }, triggerEl, open && /*#__PURE__*/React.createElement("div", {
    className: `af-menu__pop af-menu__pop--${align} af-menu__pop--${side}`,
    role: "menu"
  }, renderedItems));
}
Object.assign(__ds_scope, { MenuItem, Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
/* Accessible Foundations — Tooltip
 * Dark label on hover/focus. Short, supplementary text only — never essential content.
 */

const CSS = `
.af-tip { position: relative; display: inline-flex; }
.af-tip__pop {
  position: absolute; z-index: var(--z-menu); pointer-events: none;
  background: var(--neutral-950); color: var(--white);
  font-size: 13px; font-weight: var(--fw-medium); line-height: 1.35;
  padding: 7px 10px; border-radius: var(--radius-item); max-width: 220px; width: max-content;
  box-shadow: var(--shadow-lg); opacity: 0; transform: translateY(2px);
  transition: opacity var(--t-fast), transform var(--t-fast); white-space: normal;
}
.af-tip:hover .af-tip__pop, .af-tip:focus-within .af-tip__pop { opacity: 1; transform: none; }
.af-tip__pop--top { bottom: calc(100% + 8px); left: 50%; transform: translate(-50%, 2px); }
.af-tip:hover .af-tip__pop--top, .af-tip:focus-within .af-tip__pop--top { transform: translateX(-50%); }
.af-tip__pop--bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%) translateY(2px); }
.af-tip:hover .af-tip__pop--bottom, .af-tip:focus-within .af-tip__pop--bottom { transform: translateX(-50%); }
.af-tip__pop--left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%) translateX(2px); }
.af-tip:hover .af-tip__pop--left, .af-tip:focus-within .af-tip__pop--left { transform: translateY(-50%); }
.af-tip__pop--right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%) translateX(-2px); }
.af-tip:hover .af-tip__pop--right, .af-tip:focus-within .af-tip__pop--right { transform: translateY(-50%); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-tooltip-css')) {
  const s = document.createElement('style');
  s.id = 'af-tooltip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _tt = 0;
function Tooltip({
  label,
  placement = 'top',
  children,
  className = ''
}) {
  const id = React.useMemo(() => `af-tip-${++_tt}`, []);
  const child = React.Children.only(children);
  const trigger = React.cloneElement(child, {
    'aria-describedby': id
  });
  return /*#__PURE__*/React.createElement("span", {
    className: 'af-tip ' + className
  }, trigger, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: id,
    className: `af-tip__pop af-tip__pop--${placement}`
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/status/TierPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — TierPill & Badge
 * Non-interactive status indicators. Cohesive, brand-harmonious tones (no stray hues).
 * Always pair the swatch with a text label.
 */

const CSS = `
.af-pill {
  display: inline-flex; align-items: center; gap: 6px;
  height: 24px; padding: 0 10px; border-radius: var(--radius-pill);
  font-family: var(--font-sans); font-size: 13px; font-weight: var(--fw-semibold);
  white-space: nowrap; line-height: 1;
}
.af-pill svg { flex-shrink: 0; }
/* solid + brand + neutral form the core; success/warning are soft, desaturated to harmonise */
.af-pill--tier0, .af-pill--solid { background: var(--neutral-950); color: #FFFFFF; }
.af-pill--tier1, .af-pill--brand { background: var(--surface-active); color: var(--brand-900); }
.af-pill--tier2, .af-pill--neutral { background: var(--neutral-200); color: var(--neutral-700); }
.af-pill--tier3, .af-pill--success { background: #E6F0EA; color: #1F7A52; }
.af-pill--warning { background: #F4ECDD; color: #8A5A12; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-pill-css-2')) {
  const s = document.createElement('style');
  s.id = 'af-pill-css-2';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function TierPill({
  tier = 'tier0',
  icon,
  children,
  className = '',
  ...rest
}) {
  const cls = ['af-pill', `af-pill--${tier}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    strokeWidth: 2
  }), children);
}
Object.assign(__ds_scope, { TierPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/TierPill.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Card
 * White surface; separation from border + spacing, not tint. Optional hover lift.
 */

const CSS = `
.af-card {
  display: flex; flex-direction: column;
  background: var(--surface-card); border: 1px solid var(--neutral-300);
  border-radius: var(--radius-btn); overflow: hidden;
  transition: box-shadow var(--t-normal), border-color var(--t-normal), transform var(--t-normal);
}
.af-card--interactive { cursor: pointer; }
.af-card--interactive:hover { box-shadow: var(--shadow-md); border-color: var(--border-strong); }
.af-card--interactive:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-card__media {
  display: flex; align-items: center; justify-content: center;
  aspect-ratio: 16 / 9; background: var(--neutral-200); color: var(--neutral-500);
}
.af-card__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.af-card__body { display: flex; flex-direction: column; gap: 4px; padding: 16px; }
.af-card__title { font-size: 16px; font-weight: var(--fw-semibold); color: var(--neutral-950); letter-spacing: var(--ls-heading); }
.af-card__meta { font-size: 14px; color: var(--neutral-500); }
.af-card__footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; border-top: 1px solid var(--neutral-300); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-card-css')) {
  const s = document.createElement('style');
  s.id = 'af-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  title,
  meta,
  media,
  footer,
  interactive = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['af-card', interactive ? 'af-card--interactive' : '', className].filter(Boolean).join(' ');
  const interactiveProps = interactive ? {
    tabIndex: 0,
    role: 'button'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, interactiveProps, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "af-card__media"
  }, media), (title || meta || children) && /*#__PURE__*/React.createElement("div", {
    className: "af-card__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "af-card__title"
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    className: "af-card__meta"
  }, meta), children), footer && /*#__PURE__*/React.createElement("div", {
    className: "af-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Divider
 * 1px hairline separator. Horizontal or vertical; optional centered label; optional inset.
 */

const CSS = `
.af-divider { border: none; background: var(--neutral-300); }
.af-divider--h { height: 1px; width: 100%; margin: 0; }
.af-divider--h.af-divider--inset { width: auto; margin-left: 16px; margin-right: 16px; }
.af-divider--v { width: 1px; align-self: stretch; min-height: 16px; margin: 0; }
.af-divider-labelled { display: flex; align-items: center; gap: 14px; width: 100%; }
.af-divider-labelled::before, .af-divider-labelled::after { content: ''; flex: 1; height: 1px; background: var(--neutral-300); }
.af-divider-labelled__txt { font-size: 12px; font-weight: var(--fw-semibold); letter-spacing: 0.04em; text-transform: uppercase; color: var(--neutral-500); white-space: nowrap; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-divider-css')) {
  const s = document.createElement('style');
  s.id = 'af-divider-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Divider({
  orientation = 'horizontal',
  inset = false,
  label,
  className = '',
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: 'af-divider-labelled ' + className,
      role: "separator"
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "af-divider-labelled__txt"
    }, label));
  }
  const vertical = orientation === 'vertical';
  const cls = ['af-divider', vertical ? 'af-divider--v' : 'af-divider--h', inset ? 'af-divider--inset' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "separator",
    "aria-orientation": vertical ? 'vertical' : 'horizontal'
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Divider.jsx", error: String((e && e.message) || e) }); }

// design-system/gallery.jsx
try { (() => {
/* Accessible Foundations site — live gallery. Each block has three tabs:
 * Overview (the live demo) · Specs (the basics) · Accessibility (how it's handled). */
const AF = window.AccessibleFoundationsDesignSystem_87ff79;
const {
  Button,
  IconButton,
  Input,
  Select,
  Toggle,
  Checkbox,
  Radio,
  RadioGroup,
  Tabs,
  Chip,
  TierPill,
  Card,
  Divider,
  Tooltip,
  Menu,
  MenuItem,
  Modal,
  Toast,
  Progress,
  List,
  ListItem,
  Accordion,
  Icon
} = AF;
const ICON_NAMES = ['home', 'heart', 'folder', 'folderOff', 'list', 'grid', 'globe', 'people', 'hourglass', 'puzzle', 'save', 'stop', 'addCircle', 'plus', 'search', 'settings', 'close', 'check', 'checkCircle', 'trash', 'edit', 'moreVertical', 'user', 'bell', 'star', 'clock', 'download', 'upload', 'eye', 'logOut', 'help', 'bookOpen', 'image', 'play', 'lock', 'mail', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight', 'sun'];
function SpecList({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-speclist"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "dss-specrow",
    key: i
  }, /*#__PURE__*/React.createElement("b", null, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]))));
}
function A11yList({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-a11y"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "dss-a11y__row",
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 20,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, r[0]), /*#__PURE__*/React.createElement("span", null, r[1])))));
}
function Block({
  id,
  title,
  count,
  specs,
  a11y,
  children
}) {
  const [t, setT] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-group",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-group__h"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("span", null, count)), /*#__PURE__*/React.createElement("div", {
    className: "dss-tabwrap"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: t,
    onChange: setT,
    items: [{
      id: 'overview',
      label: 'Overview',
      icon: 'eye'
    }, {
      id: 'specs',
      label: 'Specs',
      icon: 'list'
    }, {
      id: 'a11y',
      label: 'Accessibility',
      icon: 'checkCircle'
    }]
  })), t === 'overview' && children, t === 'specs' && /*#__PURE__*/React.createElement(SpecList, {
    rows: specs
  }), t === 'a11y' && /*#__PURE__*/React.createElement(A11yList, {
    rows: a11y
  }));
}
function ContactForm() {
  const [f, setF] = React.useState({
    name: '',
    email: '',
    subject: '',
    reason: 'project',
    msg: '',
    news: true,
    consent: false
  });
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setF(s => ({
    ...s,
    [k]: v
  }));
  const emailOk = /^\S+@\S+\.\S+$/.test(f.email);
  const emailErr = f.email && !emailOk ? 'Enter a valid email address.' : undefined;
  const valid = f.name.trim() && emailOk && f.subject && f.msg.trim() && f.consent;
  const autofill = () => setF({
    name: 'Kushagra Sharan',
    email: 'sharan.kushagra@gmail.com',
    subject: 'hire',
    reason: 'referral',
    msg: "Hi Kushagra — we're hiring a senior product designer and your design-system work stood out. Could we set up a quick call this week?",
    news: true,
    consent: true
  });
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dss-thanks"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dss-thanks__badge"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 40,
      strokeWidth: 1.8
    })), /*#__PURE__*/React.createElement("h4", {
      className: "dss-thanks__title"
    }, "Thank you", f.name ? ', ' + f.name.trim().split(' ')[0] : '', " \u2014 message received."), /*#__PURE__*/React.createElement("p", {
      className: "dss-thanks__copy"
    }, "Genuinely, thank you for taking the time to write. I read every message myself and I'll get back to you within a couple of days. In the meantime, feel free to keep exploring the system."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      type: "button",
      iconLeft: "chevronLeft",
      onClick: () => setSent(false)
    }, "Back to the form"));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "dss-form",
    onSubmit: e => {
      e.preventDefault();
      if (valid) setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-form__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Send me a message"), /*#__PURE__*/React.createElement("p", null, "Tell me about a role, a project, or just say hi \u2014 I usually reply within two days.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    type: "button",
    iconLeft: "user",
    onClick: autofill,
    title: "Fill from your saved details"
  }, "Autofill")), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Kushagra Sharan",
    value: f.name,
    onChange: e => set('name', e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@email.com",
    value: f.email,
    onChange: e => set('email', e.target.value),
    error: emailErr
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__row"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Subject",
    placeholder: "Choose a topic",
    value: f.subject,
    onChange: e => set('subject', e.target.value),
    options: [{
      value: 'hire',
      label: 'Hiring / a role'
    }, {
      value: 'freelance',
      label: 'Freelance project'
    }, {
      value: 'system',
      label: 'Design-system help'
    }, {
      value: 'hello',
      label: 'Just saying hi'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dss-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dss-field__lab"
  }, "How did you hear about me?"), /*#__PURE__*/React.createElement(RadioGroup, {
    row: true,
    value: f.reason,
    onChange: v => set('reason', v),
    options: [{
      value: 'project',
      label: 'A project'
    }, {
      value: 'referral',
      label: 'Referral'
    }, {
      value: 'social',
      label: 'Social'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dss-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "dss-field__lab",
    htmlFor: "cf-msg"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "cf-msg",
    className: "dss-textarea",
    rows: "4",
    placeholder: "Tell me a little about what you need\u2026",
    value: f.msg,
    onChange: e => set('msg', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__opts"
  }, /*#__PURE__*/React.createElement(Toggle, {
    label: "Email me product updates",
    checked: f.news,
    onChange: e => set('news', e.target.checked),
    showState: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to be contacted about my enquiry",
    checked: f.consent,
    onChange: e => set('consent', e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "checkCircle",
    type: "submit",
    disabled: !valid
  }, "Send message"), /*#__PURE__*/React.createElement("span", {
    className: "dss-form__note"
  }, valid ? 'Typically replies within 2 days.' : 'Fill in your name, a valid email, subject, message & consent to send.')));
}
function IconPlayground() {
  const [sel, setSel] = React.useState({});
  const count = Object.values(sel).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dss-iconwrap"
  }, ICON_NAMES.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    title: n,
    className: 'dss-iconbtn' + (sel[n] ? ' is-on' : ''),
    "aria-pressed": !!sel[n],
    onClick: () => setSel(s => ({
      ...s,
      [n]: !s[n]
    }))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 24
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dss-iconfoot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dss-iconfoot__hint"
  }, count ? count + ' selected — hover, click, then reset.' : 'Hover and click an icon to select it.'), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    type: "button",
    iconLeft: "close",
    disabled: !count,
    onClick: () => setSel({})
  }, "Reset")));
}
function Gallery() {
  const [tab, setTab] = React.useState('all');
  const [view, setView] = React.useState('grid');
  const [chips, setChips] = React.useState({
    recipes: true,
    photos: false
  });
  const [tags, setTags] = React.useState(['Family', 'Garden']);
  const [modal, setModal] = React.useState(false);
  const [toast, setToast] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Block, {
    id: "g-buttons",
    title: "Buttons",
    count: "Button \xB7 IconButton",
    specs: [['Height', '44px (lg) · 36px (sm)'], ['Radius', '--radius-btn · 6px'], ['Variants', 'primary · secondary · outline · tertiary · danger'], ['Font', '15–16px / 600–700']],
    a11y: [['44px touch target', 'The default control height equals the touch-target minimum — no reliance on invisible padding.'], ['Visible focus', 'A 2px brand ring with 2px offset on every button.'], ['Icon-only buttons', 'IconButton requires an aria-label so screen readers announce the action.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-bgrid"
  }, /*#__PURE__*/React.createElement(Cell, {
    label: "primary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "plus"
  }, "Create New")), /*#__PURE__*/React.createElement(Cell, {
    label: "secondary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Secondary")), /*#__PURE__*/React.createElement(Cell, {
    label: "outline"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Reset")), /*#__PURE__*/React.createElement(Cell, {
    label: "tertiary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary"
  }, "Learn more")), /*#__PURE__*/React.createElement(Cell, {
    label: "danger"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    iconLeft: "trash"
  }, "Delete")), /*#__PURE__*/React.createElement(Cell, {
    label: "small"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Small")), /*#__PURE__*/React.createElement(Cell, {
    label: "disabled"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: true
  }, "Disabled")), /*#__PURE__*/React.createElement(Cell, {
    label: "icon \xB7 solid"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    solid: true,
    "aria-label": "Add"
  })), /*#__PURE__*/React.createElement(Cell, {
    label: "icon \xB7 ghost"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    "aria-label": "Settings"
  }))))), /*#__PURE__*/React.createElement(Block, {
    id: "g-forms",
    title: "Forms",
    count: "Input \xB7 Select \xB7 Toggle \xB7 Checkbox \xB7 Radio \xB7 Button",
    specs: [['Field height', '48px'], ['Radius', '--radius-lg · 14px'], ['Label', 'above the field · 14 / 500'], ['Error', 'danger text + icon, never colour alone']],
    a11y: [['Labels', 'Every field is tied to a programmatic <label>.'], ['Errors', 'Pair text with an icon and set aria-invalid — never colour alone.'], ['Native Select', 'Uses the OS picker: fully keyboard- and screen-reader-friendly.'], ['44px rows', 'Checkbox, Radio and Toggle each sit in a ≥44px hit row.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(ContactForm, null))), /*#__PURE__*/React.createElement(Block, {
    id: "g-nav",
    title: "Navigation",
    count: "Tabs",
    specs: [['Tab height', '≥48px'], ['Active', 'ink fill, white text'], ['Radius', 'container --radius-btn · tab --radius-item']],
    a11y: [['Roles', 'role="tablist" / "tab" with aria-selected on the active tab.'], ['Focus', 'Visible focus ring on each tab.'], ['Not colour-only', 'The active tab is a solid fill + weight, not just a hue change.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'all',
      label: 'All',
      icon: 'list'
    }, {
      id: 'active',
      label: 'Active',
      icon: 'hourglass'
    }, {
      id: 'done',
      label: 'Archived',
      icon: 'stop'
    }]
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: view,
    onChange: setView,
    items: [{
      id: 'grid',
      label: 'Grid',
      icon: 'grid'
    }, {
      id: 'list',
      label: 'List',
      icon: 'list'
    }]
  })))), /*#__PURE__*/React.createElement(Block, {
    id: "g-chips",
    title: "Chips & Status",
    count: "Chip \xB7 TierPill",
    specs: [['Chip height', '44px'], ['Radius', '--radius-pill · 8px'], ['Pill tones', 'solid · brand · neutral · success (cohesive, brand-harmonised)']],
    a11y: [['Filter state', 'Selectable chips report aria-pressed.'], ['Pill + label', 'Status pills always pair colour with a text label.'], ['Contrast', 'Every tone meets AA text contrast on its surface.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "assist",
    icon: "download"
  }, "Save offline"), Object.keys(chips).map(k => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    variant: "filter",
    selected: chips[k],
    onClick: () => setChips(c => ({
      ...c,
      [k]: !c[k]
    }))
  }, k[0].toUpperCase() + k.slice(1))), tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    variant: "input",
    icon: "folder",
    onRemove: () => setTags(l => l.filter(x => x !== t))
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "dss-row"
  }, /*#__PURE__*/React.createElement(TierPill, {
    tier: "solid",
    icon: "check"
  }, "Pro"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "brand"
  }, "Plus"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "neutral",
    icon: "stop"
  }, "Archived"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "success",
    icon: "checkCircle"
  }, "Active")))), /*#__PURE__*/React.createElement(Block, {
    id: "g-surfaces",
    title: "Surfaces",
    count: "Card \xB7 Divider \xB7 List",
    specs: [['Card radius', '--radius-btn · 6px'], ['Border', '1px --neutral-300, no shadow at rest'], ['List row', '≥56px when interactive']],
    a11y: [['Roles', 'List uses role="list" / "listitem".'], ['Hit area', 'Interactive rows are full-width buttons ≥44px tall.'], ['Focus', 'Cards and rows show the focus ring when interactive.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-cols"
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Morning Crossword",
    meta: "Edited 2 days ago",
    media: /*#__PURE__*/React.createElement(Icon, {
      name: "puzzle",
      size: 40
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "af-card__meta"
    }, "15 items"), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      size: "sm"
    }, "Open"))
  }), /*#__PURE__*/React.createElement(List, {
    bordered: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    leading: "folder",
    title: "Recipes",
    description: "6 items \xB7 shared",
    trailing: /*#__PURE__*/React.createElement(TierPill, {
      tier: "brand"
    }, "Shared"),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListItem, {
    leading: "image",
    title: "Photos",
    description: "128 photos",
    onClick: () => {},
    chevron: true
  }), /*#__PURE__*/React.createElement(ListItem, {
    leading: "clock",
    title: "Recently viewed",
    onClick: () => {},
    chevron: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "or"
  })))), /*#__PURE__*/React.createElement(Block, {
    id: "g-overlays",
    title: "Overlays",
    count: "Tooltip \xB7 Menu \xB7 Modal",
    specs: [['Tooltip', 'dark label, on hover + focus'], ['Menu item', '≥44px rows'], ['Modal', 'radius 14px · backdrop blur']],
    a11y: [['Keyboard', 'Tooltip shows on focus; Menu and Modal close on Esc.'], ['Dialog', 'Modal uses role="dialog" aria-modal, labelled by its title.'], ['Trigger', 'Menu trigger exposes aria-haspopup and aria-expanded.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Collapse sidebar"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevronLeft",
    "aria-label": "Collapse"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Auto-saved 2 min ago",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "checkCircle",
    "aria-label": "Saved"
  })), /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "chevronDown"
    }, "Folder options"),
    items: [{
      label: 'Rename',
      icon: 'edit',
      onClick: () => {}
    }, {
      label: 'Share',
      icon: 'people',
      onClick: () => {}
    }, {
      separator: true
    }, {
      label: 'Delete',
      icon: 'trash',
      danger: true,
      onClick: () => {}
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setModal(true)
  }, "Open dialog")), modal && /*#__PURE__*/React.createElement(Modal, {
    title: "Delete Folder",
    danger: true,
    confirmLabel: "Delete",
    onClose: () => setModal(false),
    onConfirm: () => setModal(false)
  }, "Are you sure you want to delete ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--neutral-950)'
    }
  }, "\"Recipes\""), "? Items inside will not be deleted."))), /*#__PURE__*/React.createElement(Block, {
    id: "g-feedback",
    title: "Feedback",
    count: "Toast \xB7 Progress",
    specs: [['Toast', 'light surface (default) · tone="dark" inverse'], ['Action', 'one optional action + dismiss'], ['Progress', 'linear / circular · determinate or indeterminate']],
    a11y: [['Announce', 'Toast is role="status" aria-live="polite" — announced without stealing focus.'], ['Progress value', 'role="progressbar" with aria-valuenow.'], ['Reduced motion', 'Indeterminate animation respects prefers-reduced-motion.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-stack",
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    fixed: false,
    status: "success",
    message: "Item saved to Recipes",
    actionLabel: "Undo",
    onAction: () => {},
    onClose: () => setToast(false),
    open: toast
  }), /*#__PURE__*/React.createElement(Progress, {
    variant: "linear",
    value: 64,
    label: "Uploading photos",
    showValue: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    variant: "circular",
    value: 72
  }), /*#__PURE__*/React.createElement(Progress, {
    variant: "circular"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-500)'
    }
  }, "Determinate & indeterminate"))))), /*#__PURE__*/React.createElement(Block, {
    id: "g-disclosure",
    title: "Disclosure",
    count: "Accordion",
    specs: [['Header', '≥56px, rotating chevron'], ['Mode', 'single-open (default) or allowMultiple'], ['Motion', 'grid-rows height animation']],
    a11y: [['ARIA', 'Headers are buttons with aria-expanded and aria-controls.'], ['Region', 'Each panel uses role="region".'], ['Reduced motion', 'Height animation is disabled under prefers-reduced-motion.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: ['a'],
    items: [{
      id: 'a',
      icon: 'help',
      title: 'How do I create an item?',
      content: 'Tap Create New in the sidebar, give it a clear name, and it appears in your library right away.'
    }, {
      id: 'b',
      icon: 'people',
      title: 'Sharing & permissions',
      content: 'Anything you share stays read-only for others unless you invite them to edit.'
    }, {
      id: 'c',
      icon: 'lock',
      title: 'Privacy',
      content: 'Your library is private by default.'
    }]
  }))), /*#__PURE__*/React.createElement(Block, {
    id: "g-icons",
    title: "Iconography",
    count: "Outline set \xB7 interactive",
    specs: [['Grid', '24×24, currentColor'], ['Stroke', '1.8 (nav) · 2 (utility)'], ['Targets', 'interactive icons sit in ≥44px hit areas']],
    a11y: [['currentColor', 'Icons inherit text colour so contrast is controlled by context.'], ['Labels', 'Standalone icons take a title / aria-label; decorative ones are aria-hidden.'], ['Focus', 'Interactive icons show the focus ring and report aria-pressed.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(IconPlayground, null))));
}
function Cell({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-cell__demo"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "dss-cell__lab"
  }, label));
}
ReactDOM.createRoot(document.getElementById('dss-components')).render(/*#__PURE__*/React.createElement(Gallery, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-system/gallery.jsx", error: String((e && e.message) || e) }); }

// portfolio/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/image-slot.js", error: String((e && e.message) || e) }); }

// portfolio/portfolio.js
try { (() => {
/* KS portfolio — behavior: scrollspy nav, theme switcher, mobile nav, copy. */
(function () {
  'use strict';

  /* ---- Theme (accent) switcher, persisted ---- */
  var ACCENTS = ['clay', 'indigo', 'forest', 'ink'];
  var stored = null;
  try {
    stored = localStorage.getItem('ks-accent-v2');
  } catch (e) {}
  var accent = ACCENTS.indexOf(stored) >= 0 ? stored : 'indigo';
  applyAccent(accent);
  function applyAccent(a) {
    document.documentElement.setAttribute('data-accent', a);
    try {
      localStorage.setItem('ks-accent-v2', a);
    } catch (e) {}
    document.querySelectorAll('.swatch-btn').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-accent') === a);
    });
  }
  document.addEventListener('click', function (e) {
    var sw = e.target.closest('.swatch-btn');
    if (sw) {
      applyAccent(sw.getAttribute('data-accent'));
      return;
    }

    /* copy install command */
    var cp = e.target.closest('.install__copy');
    if (cp) {
      var txt = cp.getAttribute('data-copy') || '';
      if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(function () {});
      var old = cp.textContent;
      cp.textContent = 'copied';
      setTimeout(function () {
        cp.textContent = old;
      }, 1400);
      return;
    }

    /* mobile nav: open/close + close on link click */
    if (e.target.closest('.navtoggle')) {
      setNav(true);
      return;
    }
    if (e.target.closest('.scrim')) {
      setNav(false);
      return;
    }
    if (e.target.closest('.docnav__link')) {
      if (window.innerWidth <= 940) setNav(false);
    }
  });
  function setNav(open) {
    var nav = document.querySelector('.docnav');
    var scrim = document.querySelector('.scrim');
    if (nav) nav.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-open', open);
  }

  /* ---- Scrollspy: highlight the nav link for the section in view ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.docnav__link'));
  var byId = {};
  links.forEach(function (l) {
    var id = (l.getAttribute('href') || '').replace('#', '');
    if (id) byId[id] = l;
  });
  var sections = links.map(function (l) {
    return document.getElementById((l.getAttribute('href') || '').replace('#', ''));
  }).filter(Boolean);
  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle('is-active', (l.getAttribute('href') || '') === '#' + id);
    });
  }
  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0;
      });
      var best = null,
        bestR = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestR) {
          bestR = visible[id];
          best = id;
        }
      });
      if (best) setActive(best);
    }, {
      rootMargin: '-45% 0px -50% 0px',
      threshold: [0, 0.25, 0.6, 1]
    });
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  /* ---- Year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/portfolio.js", error: String((e && e.message) || e) }); }

// site/design-system/gallery.jsx
try { (() => {
/* Accessible Foundations site — live gallery. Each block has three tabs:
 * Overview (the live demo) · Specs (the basics) · Accessibility (how it's handled). */
const AF = window.AccessibleFoundationsDesignSystem_87ff79;
const {
  Button,
  IconButton,
  Input,
  Select,
  Toggle,
  Checkbox,
  Radio,
  RadioGroup,
  Tabs,
  Chip,
  TierPill,
  Card,
  Divider,
  Tooltip,
  Menu,
  MenuItem,
  Modal,
  Toast,
  Progress,
  List,
  ListItem,
  Accordion,
  Icon
} = AF;
const ICON_NAMES = ['home', 'heart', 'folder', 'folderOff', 'list', 'grid', 'globe', 'people', 'hourglass', 'puzzle', 'save', 'stop', 'addCircle', 'plus', 'search', 'settings', 'close', 'check', 'checkCircle', 'trash', 'edit', 'moreVertical', 'user', 'bell', 'star', 'clock', 'download', 'upload', 'eye', 'logOut', 'help', 'bookOpen', 'image', 'play', 'lock', 'mail', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight', 'sun'];
function SpecList({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-speclist"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "dss-specrow",
    key: i
  }, /*#__PURE__*/React.createElement("b", null, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]))));
}
function A11yList({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-a11y"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "dss-a11y__row",
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 20,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, r[0]), /*#__PURE__*/React.createElement("span", null, r[1])))));
}
function Block({
  id,
  title,
  count,
  specs,
  a11y,
  children
}) {
  const [t, setT] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-group",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-group__h"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("span", null, count)), /*#__PURE__*/React.createElement("div", {
    className: "dss-tabwrap"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: t,
    onChange: setT,
    items: [{
      id: 'overview',
      label: 'Overview',
      icon: 'eye'
    }, {
      id: 'specs',
      label: 'Specs',
      icon: 'list'
    }, {
      id: 'a11y',
      label: 'Accessibility',
      icon: 'checkCircle'
    }]
  })), t === 'overview' && children, t === 'specs' && /*#__PURE__*/React.createElement(SpecList, {
    rows: specs
  }), t === 'a11y' && /*#__PURE__*/React.createElement(A11yList, {
    rows: a11y
  }));
}
function ContactForm() {
  const [f, setF] = React.useState({
    name: '',
    email: '',
    subject: '',
    reason: 'project',
    msg: '',
    news: true,
    consent: false
  });
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setF(s => ({
    ...s,
    [k]: v
  }));
  const emailOk = /^\S+@\S+\.\S+$/.test(f.email);
  const emailErr = f.email && !emailOk ? 'Enter a valid email address.' : undefined;
  const valid = f.name.trim() && emailOk && f.subject && f.msg.trim() && f.consent;
  const autofill = () => setF({
    name: 'Kushagra Sharan',
    email: 'sharan.kushagra@gmail.com',
    subject: 'hire',
    reason: 'referral',
    msg: "Hi Kushagra — we're hiring a senior product designer and your design-system work stood out. Could we set up a quick call this week?",
    news: true,
    consent: true
  });
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dss-thanks"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dss-thanks__badge"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 40,
      strokeWidth: 1.8
    })), /*#__PURE__*/React.createElement("h4", {
      className: "dss-thanks__title"
    }, "Thank you", f.name ? ', ' + f.name.trim().split(' ')[0] : '', " \u2014 message received."), /*#__PURE__*/React.createElement("p", {
      className: "dss-thanks__copy"
    }, "Genuinely, thank you for taking the time to write. I read every message myself and I'll get back to you within a couple of days. In the meantime, feel free to keep exploring the system."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      type: "button",
      iconLeft: "chevronLeft",
      onClick: () => setSent(false)
    }, "Back to the form"));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "dss-form",
    onSubmit: e => {
      e.preventDefault();
      if (valid) setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-form__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Send me a message"), /*#__PURE__*/React.createElement("p", null, "Tell me about a role, a project, or just say hi \u2014 I usually reply within two days.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    type: "button",
    iconLeft: "user",
    onClick: autofill,
    title: "Fill from your saved details"
  }, "Autofill")), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Kushagra Sharan",
    value: f.name,
    onChange: e => set('name', e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@email.com",
    value: f.email,
    onChange: e => set('email', e.target.value),
    error: emailErr
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__row"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Subject",
    placeholder: "Choose a topic",
    value: f.subject,
    onChange: e => set('subject', e.target.value),
    options: [{
      value: 'hire',
      label: 'Hiring / a role'
    }, {
      value: 'freelance',
      label: 'Freelance project'
    }, {
      value: 'system',
      label: 'Design-system help'
    }, {
      value: 'hello',
      label: 'Just saying hi'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dss-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dss-field__lab"
  }, "How did you hear about me?"), /*#__PURE__*/React.createElement(RadioGroup, {
    row: true,
    value: f.reason,
    onChange: v => set('reason', v),
    options: [{
      value: 'project',
      label: 'A project'
    }, {
      value: 'referral',
      label: 'Referral'
    }, {
      value: 'social',
      label: 'Social'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dss-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "dss-field__lab",
    htmlFor: "cf-msg"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "cf-msg",
    className: "dss-textarea",
    rows: "4",
    placeholder: "Tell me a little about what you need\u2026",
    value: f.msg,
    onChange: e => set('msg', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__opts"
  }, /*#__PURE__*/React.createElement(Toggle, {
    label: "Email me product updates",
    checked: f.news,
    onChange: e => set('news', e.target.checked),
    showState: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to be contacted about my enquiry",
    checked: f.consent,
    onChange: e => set('consent', e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "checkCircle",
    type: "submit",
    disabled: !valid
  }, "Send message"), /*#__PURE__*/React.createElement("span", {
    className: "dss-form__note"
  }, valid ? 'Typically replies within 2 days.' : 'Fill in your name, a valid email, subject, message & consent to send.')));
}
function IconPlayground() {
  const [sel, setSel] = React.useState({});
  const count = Object.values(sel).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dss-iconwrap"
  }, ICON_NAMES.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    title: n,
    className: 'dss-iconbtn' + (sel[n] ? ' is-on' : ''),
    "aria-pressed": !!sel[n],
    onClick: () => setSel(s => ({
      ...s,
      [n]: !s[n]
    }))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 24
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dss-iconfoot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dss-iconfoot__hint"
  }, count ? count + ' selected — hover, click, then reset.' : 'Hover and click an icon to select it.'), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    type: "button",
    iconLeft: "close",
    disabled: !count,
    onClick: () => setSel({})
  }, "Reset")));
}
function Gallery() {
  const [tab, setTab] = React.useState('all');
  const [view, setView] = React.useState('grid');
  const [chips, setChips] = React.useState({
    recipes: true,
    photos: false
  });
  const [tags, setTags] = React.useState(['Family', 'Garden']);
  const [modal, setModal] = React.useState(false);
  const [toast, setToast] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Block, {
    id: "g-buttons",
    title: "Buttons",
    count: "Button \xB7 IconButton",
    specs: [['Height', '44px (lg) · 36px (sm)'], ['Radius', '--radius-btn · 6px'], ['Variants', 'primary · secondary · outline · tertiary · danger'], ['Font', '15–16px / 600–700']],
    a11y: [['44px touch target', 'The default control height equals the touch-target minimum — no reliance on invisible padding.'], ['Visible focus', 'A 2px brand ring with 2px offset on every button.'], ['Icon-only buttons', 'IconButton requires an aria-label so screen readers announce the action.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-bgrid"
  }, /*#__PURE__*/React.createElement(Cell, {
    label: "primary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "plus"
  }, "Create New")), /*#__PURE__*/React.createElement(Cell, {
    label: "secondary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Secondary")), /*#__PURE__*/React.createElement(Cell, {
    label: "outline"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Reset")), /*#__PURE__*/React.createElement(Cell, {
    label: "tertiary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary"
  }, "Learn more")), /*#__PURE__*/React.createElement(Cell, {
    label: "danger"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    iconLeft: "trash"
  }, "Delete")), /*#__PURE__*/React.createElement(Cell, {
    label: "small"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Small")), /*#__PURE__*/React.createElement(Cell, {
    label: "disabled"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: true
  }, "Disabled")), /*#__PURE__*/React.createElement(Cell, {
    label: "icon \xB7 solid"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    solid: true,
    "aria-label": "Add"
  })), /*#__PURE__*/React.createElement(Cell, {
    label: "icon \xB7 ghost"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    "aria-label": "Settings"
  }))))), /*#__PURE__*/React.createElement(Block, {
    id: "g-forms",
    title: "Forms",
    count: "Input \xB7 Select \xB7 Toggle \xB7 Checkbox \xB7 Radio \xB7 Button",
    specs: [['Field height', '48px'], ['Radius', '--radius-lg · 14px'], ['Label', 'above the field · 14 / 500'], ['Error', 'danger text + icon, never colour alone']],
    a11y: [['Labels', 'Every field is tied to a programmatic <label>.'], ['Errors', 'Pair text with an icon and set aria-invalid — never colour alone.'], ['Native Select', 'Uses the OS picker: fully keyboard- and screen-reader-friendly.'], ['44px rows', 'Checkbox, Radio and Toggle each sit in a ≥44px hit row.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(ContactForm, null))), /*#__PURE__*/React.createElement(Block, {
    id: "g-nav",
    title: "Navigation",
    count: "Tabs",
    specs: [['Tab height', '≥48px'], ['Active', 'ink fill, white text'], ['Radius', 'container --radius-btn · tab --radius-item']],
    a11y: [['Roles', 'role="tablist" / "tab" with aria-selected on the active tab.'], ['Focus', 'Visible focus ring on each tab.'], ['Not colour-only', 'The active tab is a solid fill + weight, not just a hue change.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'all',
      label: 'All',
      icon: 'list'
    }, {
      id: 'active',
      label: 'Active',
      icon: 'hourglass'
    }, {
      id: 'done',
      label: 'Archived',
      icon: 'stop'
    }]
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: view,
    onChange: setView,
    items: [{
      id: 'grid',
      label: 'Grid',
      icon: 'grid'
    }, {
      id: 'list',
      label: 'List',
      icon: 'list'
    }]
  })))), /*#__PURE__*/React.createElement(Block, {
    id: "g-chips",
    title: "Chips & Status",
    count: "Chip \xB7 TierPill",
    specs: [['Chip height', '44px'], ['Radius', '--radius-pill · 8px'], ['Pill tones', 'solid · brand · neutral · success (cohesive, brand-harmonised)']],
    a11y: [['Filter state', 'Selectable chips report aria-pressed.'], ['Pill + label', 'Status pills always pair colour with a text label.'], ['Contrast', 'Every tone meets AA text contrast on its surface.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "assist",
    icon: "download"
  }, "Save offline"), Object.keys(chips).map(k => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    variant: "filter",
    selected: chips[k],
    onClick: () => setChips(c => ({
      ...c,
      [k]: !c[k]
    }))
  }, k[0].toUpperCase() + k.slice(1))), tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    variant: "input",
    icon: "folder",
    onRemove: () => setTags(l => l.filter(x => x !== t))
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "dss-row"
  }, /*#__PURE__*/React.createElement(TierPill, {
    tier: "solid",
    icon: "check"
  }, "Pro"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "brand"
  }, "Plus"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "neutral",
    icon: "stop"
  }, "Archived"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "success",
    icon: "checkCircle"
  }, "Active")))), /*#__PURE__*/React.createElement(Block, {
    id: "g-surfaces",
    title: "Surfaces",
    count: "Card \xB7 Divider \xB7 List",
    specs: [['Card radius', '--radius-btn · 6px'], ['Border', '1px --neutral-300, no shadow at rest'], ['List row', '≥56px when interactive']],
    a11y: [['Roles', 'List uses role="list" / "listitem".'], ['Hit area', 'Interactive rows are full-width buttons ≥44px tall.'], ['Focus', 'Cards and rows show the focus ring when interactive.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-cols"
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Morning Crossword",
    meta: "Edited 2 days ago",
    media: /*#__PURE__*/React.createElement(Icon, {
      name: "puzzle",
      size: 40
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "af-card__meta"
    }, "15 items"), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      size: "sm"
    }, "Open"))
  }), /*#__PURE__*/React.createElement(List, {
    bordered: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    leading: "folder",
    title: "Recipes",
    description: "6 items \xB7 shared",
    trailing: /*#__PURE__*/React.createElement(TierPill, {
      tier: "brand"
    }, "Shared"),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListItem, {
    leading: "image",
    title: "Photos",
    description: "128 photos",
    onClick: () => {},
    chevron: true
  }), /*#__PURE__*/React.createElement(ListItem, {
    leading: "clock",
    title: "Recently viewed",
    onClick: () => {},
    chevron: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "or"
  })))), /*#__PURE__*/React.createElement(Block, {
    id: "g-overlays",
    title: "Overlays",
    count: "Tooltip \xB7 Menu \xB7 Modal",
    specs: [['Tooltip', 'dark label, on hover + focus'], ['Menu item', '≥44px rows'], ['Modal', 'radius 14px · backdrop blur']],
    a11y: [['Keyboard', 'Tooltip shows on focus; Menu and Modal close on Esc.'], ['Dialog', 'Modal uses role="dialog" aria-modal, labelled by its title.'], ['Trigger', 'Menu trigger exposes aria-haspopup and aria-expanded.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Collapse sidebar"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevronLeft",
    "aria-label": "Collapse"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Auto-saved 2 min ago",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "checkCircle",
    "aria-label": "Saved"
  })), /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "chevronDown"
    }, "Folder options"),
    items: [{
      label: 'Rename',
      icon: 'edit',
      onClick: () => {}
    }, {
      label: 'Share',
      icon: 'people',
      onClick: () => {}
    }, {
      separator: true
    }, {
      label: 'Delete',
      icon: 'trash',
      danger: true,
      onClick: () => {}
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setModal(true)
  }, "Open dialog")), modal && /*#__PURE__*/React.createElement(Modal, {
    title: "Delete Folder",
    danger: true,
    confirmLabel: "Delete",
    onClose: () => setModal(false),
    onConfirm: () => setModal(false)
  }, "Are you sure you want to delete ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--neutral-950)'
    }
  }, "\"Recipes\""), "? Items inside will not be deleted."))), /*#__PURE__*/React.createElement(Block, {
    id: "g-feedback",
    title: "Feedback",
    count: "Toast \xB7 Progress",
    specs: [['Toast', 'light surface (default) · tone="dark" inverse'], ['Action', 'one optional action + dismiss'], ['Progress', 'linear / circular · determinate or indeterminate']],
    a11y: [['Announce', 'Toast is role="status" aria-live="polite" — announced without stealing focus.'], ['Progress value', 'role="progressbar" with aria-valuenow.'], ['Reduced motion', 'Indeterminate animation respects prefers-reduced-motion.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-stack",
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    fixed: false,
    status: "success",
    message: "Item saved to Recipes",
    actionLabel: "Undo",
    onAction: () => {},
    onClose: () => setToast(false),
    open: toast
  }), /*#__PURE__*/React.createElement(Progress, {
    variant: "linear",
    value: 64,
    label: "Uploading photos",
    showValue: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    variant: "circular",
    value: 72
  }), /*#__PURE__*/React.createElement(Progress, {
    variant: "circular"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-500)'
    }
  }, "Determinate & indeterminate"))))), /*#__PURE__*/React.createElement(Block, {
    id: "g-disclosure",
    title: "Disclosure",
    count: "Accordion",
    specs: [['Header', '≥56px, rotating chevron'], ['Mode', 'single-open (default) or allowMultiple'], ['Motion', 'grid-rows height animation']],
    a11y: [['ARIA', 'Headers are buttons with aria-expanded and aria-controls.'], ['Region', 'Each panel uses role="region".'], ['Reduced motion', 'Height animation is disabled under prefers-reduced-motion.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: ['a'],
    items: [{
      id: 'a',
      icon: 'help',
      title: 'How do I create an item?',
      content: 'Tap Create New in the sidebar, give it a clear name, and it appears in your library right away.'
    }, {
      id: 'b',
      icon: 'people',
      title: 'Sharing & permissions',
      content: 'Anything you share stays read-only for others unless you invite them to edit.'
    }, {
      id: 'c',
      icon: 'lock',
      title: 'Privacy',
      content: 'Your library is private by default.'
    }]
  }))), /*#__PURE__*/React.createElement(Block, {
    id: "g-icons",
    title: "Iconography",
    count: "Outline set \xB7 interactive",
    specs: [['Grid', '24×24, currentColor'], ['Stroke', '1.8 (nav) · 2 (utility)'], ['Targets', 'interactive icons sit in ≥44px hit areas']],
    a11y: [['currentColor', 'Icons inherit text colour so contrast is controlled by context.'], ['Labels', 'Standalone icons take a title / aria-label; decorative ones are aria-hidden.'], ['Focus', 'Interactive icons show the focus ring and report aria-pressed.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(IconPlayground, null))));
}
function Cell({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-cell__demo"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "dss-cell__lab"
  }, label));
}
ReactDOM.createRoot(document.getElementById('dss-components')).render(/*#__PURE__*/React.createElement(Gallery, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/design-system/gallery.jsx", error: String((e && e.message) || e) }); }

// site/portfolio/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/portfolio/image-slot.js", error: String((e && e.message) || e) }); }

// site/portfolio/portfolio.js
try { (() => {
/* KS portfolio — behavior: scrollspy nav, theme switcher, mobile nav, copy. */
(function () {
  'use strict';

  /* ---- Theme (accent) switcher, persisted ---- */
  var ACCENTS = ['clay', 'indigo', 'forest', 'ink'];
  var stored = null;
  try {
    stored = localStorage.getItem('ks-accent-v2');
  } catch (e) {}
  var accent = ACCENTS.indexOf(stored) >= 0 ? stored : 'indigo';
  applyAccent(accent);
  function applyAccent(a) {
    document.documentElement.setAttribute('data-accent', a);
    try {
      localStorage.setItem('ks-accent-v2', a);
    } catch (e) {}
    document.querySelectorAll('.swatch-btn').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-accent') === a);
    });
  }
  document.addEventListener('click', function (e) {
    var sw = e.target.closest('.swatch-btn');
    if (sw) {
      applyAccent(sw.getAttribute('data-accent'));
      return;
    }

    /* copy install command */
    var cp = e.target.closest('.install__copy');
    if (cp) {
      var txt = cp.getAttribute('data-copy') || '';
      if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(function () {});
      var old = cp.textContent;
      cp.textContent = 'copied';
      setTimeout(function () {
        cp.textContent = old;
      }, 1400);
      return;
    }

    /* mobile nav: open/close + close on link click */
    if (e.target.closest('.navtoggle')) {
      setNav(true);
      return;
    }
    if (e.target.closest('.scrim')) {
      setNav(false);
      return;
    }
    if (e.target.closest('.docnav__link')) {
      if (window.innerWidth <= 940) setNav(false);
    }
  });
  function setNav(open) {
    var nav = document.querySelector('.docnav');
    var scrim = document.querySelector('.scrim');
    if (nav) nav.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-open', open);
  }

  /* ---- Scrollspy: highlight the nav link for the section in view ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.docnav__link'));
  var byId = {};
  links.forEach(function (l) {
    var id = (l.getAttribute('href') || '').replace('#', '');
    if (id) byId[id] = l;
  });
  var sections = links.map(function (l) {
    return document.getElementById((l.getAttribute('href') || '').replace('#', ''));
  }).filter(Boolean);
  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle('is-active', (l.getAttribute('href') || '') === '#' + id);
    });
  }
  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0;
      });
      var best = null,
        bestR = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestR) {
          bestR = visible[id];
          best = id;
        }
      });
      if (best) setActive(best);
    }, {
      rootMargin: '-45% 0px -50% 0px',
      threshold: [0, 0.25, 0.6, 1]
    });
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  /* ---- Year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/portfolio/portfolio.js", error: String((e && e.message) || e) }); }

// ui_kits/my-library/App.jsx
try { (() => {
/* My Library — app orchestrator. Owns items + folders + all overlays so they
 * render at app root (never clipped) and stay in sync. Exposes window.MLApp. */
const ML_DS = window.AccessibleFoundationsDesignSystem_87ff79;
const {
  Modal: MLModal,
  Input: MLAppInput
} = ML_DS;
const ML_APP_CSS = `
.ml-app { position: absolute; inset: 0; display: flex; background: var(--neutral-200); overflow: hidden; }
.ml-main { flex: 1; display: flex; flex-direction: column; min-width: 0; background: var(--white); overflow-y: auto; }
.ml-create-body { display: flex; flex-direction: column; gap: 4px; }
.ml-del-body { font-size: 15px; line-height: 1.55; color: var(--neutral-700); }
.ml-del-body strong { color: var(--neutral-950); }
`;
if (!document.getElementById('ml-app-css')) {
  const s = document.createElement('style');
  s.id = 'ml-app-css';
  s.textContent = ML_APP_CSS;
  document.head.appendChild(s);
}
const ML_INITIAL_ITEMS = [{
  id: 'i1',
  title: 'Morning Crossword',
  icon: 'puzzle',
  folders: [],
  recent: true,
  kind: 'Puzzle',
  updated: 'Edited 2 days ago'
}, {
  id: 'i2',
  title: 'Garden Notes',
  icon: 'bookOpen',
  folders: [],
  recent: true,
  kind: 'Note',
  updated: 'Edited yesterday'
}, {
  id: 'i3',
  title: 'Sunday Roast',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: 'Recipe',
  updated: 'Edited last week',
  badge: 'Shared',
  shared: true
}, {
  id: 'i4',
  title: 'Banana Bread',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: 'Recipe',
  updated: 'Edited 3 weeks ago'
}, {
  id: 'i5',
  title: 'Lemon Cake',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: 'Recipe',
  updated: 'Auto-saved',
  badge: 'Auto'
}, {
  id: 'i6',
  title: 'Grandkids Visit',
  icon: 'image',
  folders: ['photos'],
  kind: '42 photos',
  updated: 'Edited today',
  recent: true
}, {
  id: 'i7',
  title: 'Coast Trip',
  icon: 'image',
  folders: ['photos'],
  kind: '128 photos',
  updated: 'Edited last month',
  badge: 'Shared',
  shared: true
}, {
  id: 'i8',
  title: 'Old Letters',
  icon: 'mail',
  folders: [],
  kind: '23 scans',
  updated: 'Edited 2 months ago'
}, {
  id: 'i9',
  title: 'Medication Times',
  icon: 'clock',
  folders: [],
  kind: 'Checklist',
  updated: 'Edited today',
  badge: 'Pro'
}, {
  id: 'i10',
  title: 'Phone Numbers',
  icon: 'people',
  folders: [],
  kind: '31 contacts',
  updated: 'Edited last week',
  shared: true
}, {
  id: 'i11',
  title: 'Birthday List',
  icon: 'star',
  folders: [],
  kind: '12 dates',
  updated: 'Edited yesterday',
  recent: true
}, {
  id: 'i12',
  title: 'Knitting Patterns',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: '9 patterns',
  updated: 'Edited 5 days ago'
}];
const ML_INITIAL_FOLDERS = [{
  id: 'recipes',
  label: 'Recipes',
  icon: 'bookOpen'
}, {
  id: 'photos',
  label: 'Photos',
  icon: 'image'
}];
function MLApp() {
  const [userName, setUserName] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const [activeId, setActiveId] = React.useState('all');
  const [view, setView] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [items, setItems] = React.useState(ML_INITIAL_ITEMS);
  const [folders, setFolders] = React.useState(ML_INITIAL_FOLDERS);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [prefs, setPrefs] = React.useState({
    largeText: true,
    highContrast: false,
    reduceMotion: false
  });

  // overlays
  const [createFor, setCreateFor] = React.useState(null); // folderId | '' (uncategorized) | null (closed)
  const [newName, setNewName] = React.useState('');
  const [folderModal, setFolderModal] = React.useState(false);
  const [folderName, setFolderName] = React.useState('');
  const [delFolder, setDelFolder] = React.useState(null); // {id,label} | null

  const isFolder = id => folders.some(f => f.id === id);
  const folderLabel = id => (folders.find(f => f.id === id) || {}).label;
  const labelFor = id => {
    if (id === 'all') return 'All Items';
    if (id === 'uncategorized') return 'Uncategorized';
    if (isFolder(id)) return folderLabel(id);
    for (const n of window.ML_NAV) {
      if (n.id === id) return n.label;
      for (const c of n.children || []) if (c.id === id) return c.label;
    }
    return 'My Library';
  };
  const baseFilter = it => {
    if (activeId === 'all' || activeId === 'library') return true;
    if (activeId === 'uncategorized') return it.folders.length === 0;
    if (isFolder(activeId)) return it.folders.includes(activeId);
    if (activeId === 'favorites') return !!it.favorite || !!it.badge;
    if (activeId === 'recent') return !!it.recent;
    if (activeId === 'shared') return !!it.shared;
    if (activeId === 'community') return !!it.community;
    return true;
  };

  // dynamic counts so creates/removes reflect live
  const systemItems = [{
    id: 'all',
    label: 'All Items',
    icon: 'list',
    count: items.length
  }, {
    id: 'uncategorized',
    label: 'Uncategorized',
    icon: 'folderOff',
    count: items.filter(i => i.folders.length === 0).length
  }];
  const folderItems = folders.map(f => ({
    ...f,
    count: items.filter(i => i.folders.includes(f.id)).length
  }));
  const visible = items.filter(baseFilter).filter(it => view === 'all' ? true : view === 'recent' ? it.recent : it.shared).filter(it => it.title.toLowerCase().includes(search.trim().toLowerCase()));
  const title = labelFor(activeId);
  const subtitle = `${visible.length} item${visible.length === 1 ? '' : 's'}` + (search ? ` matching “${search}”` : '');
  const navigate = id => {
    setActiveId(id);
    setView('all');
  };

  // create item — targets the folder it was launched from (or the active folder)
  const openCreate = folderId => {
    setCreateFor(folderId != null ? folderId : isFolder(activeId) ? activeId : '');
    setNewName('');
  };
  const doCreate = () => {
    const name = newName.trim();
    if (!name) return;
    const target = createFor && isFolder(createFor) ? createFor : '';
    const icon = target === 'recipes' ? 'bookOpen' : target === 'photos' ? 'image' : 'save';
    setItems(list => [{
      id: 'n' + Date.now(),
      title: name,
      icon,
      folders: target ? [target] : [],
      recent: true,
      kind: 'New',
      updated: 'Just now'
    }, ...list]);
    setCreateFor(null);
    setNewName('');
    setActiveId(target || 'all');
    setView('all');
  };
  const addFolder = () => {
    const name = folderName.trim();
    if (!name) return;
    const id = 'folder-' + Date.now();
    setFolders(f => [...f, {
      id,
      label: name,
      icon: 'folder'
    }]);
    setFolderModal(false);
    setFolderName('');
    setActiveId(id);
    setView('all');
  };
  const confirmRemoveFolder = () => {
    const id = delFolder.id;
    setFolders(f => f.filter(x => x.id !== id));
    setItems(list => list.map(i => i.folders.includes(id) ? {
      ...i,
      folders: i.folders.filter(x => x !== id)
    } : i));
    if (activeId === id) setActiveId('all');
    setDelFolder(null);
  };
  if (!userName) return /*#__PURE__*/React.createElement(window.MLWelcome, {
    onContinue: n => setUserName(n)
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-app"
  }, /*#__PURE__*/React.createElement(window.MLSidebar, {
    open: open,
    onToggle: () => setOpen(o => !o),
    activeId: activeId,
    onNavigate: navigate,
    systemItems: systemItems,
    folders: folderItems,
    onCreate: () => openCreate(null),
    onAddFolder: () => {
      setFolderName('');
      setFolderModal(true);
    },
    onAddToFolder: fid => openCreate(fid),
    onRemoveFolder: f => setDelFolder(f),
    onOpenSettings: () => setSettingsOpen(true),
    userName: userName
  }), /*#__PURE__*/React.createElement("main", {
    className: "ml-main"
  }, /*#__PURE__*/React.createElement(window.MLHeader, {
    title: title,
    subtitle: subtitle,
    search: search,
    onSearch: setSearch,
    view: view,
    onView: setView,
    onOpenSettings: () => setSettingsOpen(true)
  }), /*#__PURE__*/React.createElement(window.MLGrid, {
    items: visible.map(it => ({
      ...it,
      loc: it.folders.length ? 'In ' + folderLabel(it.folders[0]) : 'Uncategorized'
    })),
    onCreate: () => openCreate(null),
    onOpen: () => {}
  })), settingsOpen && /*#__PURE__*/React.createElement(window.MLSettings, {
    onClose: () => setSettingsOpen(false),
    prefs: prefs,
    onPref: (k, v) => setPrefs(p => ({
      ...p,
      [k]: v
    })),
    onSignOut: () => {
      setSettingsOpen(false);
      setUserName(null);
    }
  }), createFor !== null && /*#__PURE__*/React.createElement(MLModal, {
    title: "Create New Item",
    confirmLabel: "Create",
    onClose: () => setCreateFor(null),
    onConfirm: doCreate
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-create-body"
  }, /*#__PURE__*/React.createElement(MLAppInput, {
    label: "Name",
    placeholder: "e.g. Weekly Shopping List",
    autoFocus: true,
    value: newName,
    onChange: e => setNewName(e.target.value),
    helper: createFor && isFolder(createFor) ? 'Will be added to ' + folderLabel(createFor) + '.' : 'Will be added to Uncategorized.',
    onKeyDown: e => {
      if (e.key === 'Enter') doCreate();
    }
  }))), folderModal && /*#__PURE__*/React.createElement(MLModal, {
    title: "New Folder",
    confirmLabel: "Create Folder",
    onClose: () => setFolderModal(false),
    onConfirm: addFolder
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-create-body"
  }, /*#__PURE__*/React.createElement(MLAppInput, {
    label: "Folder name",
    placeholder: "e.g. Travel",
    autoFocus: true,
    value: folderName,
    onChange: e => setFolderName(e.target.value),
    helper: "Group related items together.",
    onKeyDown: e => {
      if (e.key === 'Enter') addFolder();
    }
  }))), delFolder && /*#__PURE__*/React.createElement(MLModal, {
    title: "Remove folder?",
    danger: true,
    confirmLabel: "Remove folder",
    onClose: () => setDelFolder(null),
    onConfirm: confirmRemoveFolder
  }, /*#__PURE__*/React.createElement("p", {
    className: "ml-del-body"
  }, "Remove ", /*#__PURE__*/React.createElement("strong", null, "\u201C", delFolder.label, "\u201D"), " from your library? The items inside won't be deleted \u2014 they'll move back to ", /*#__PURE__*/React.createElement("strong", null, "Uncategorized"), ".")));
}
window.MLApp = MLApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/ItemGrid.jsx
try { (() => {
/* My Library — item grid. Composes DS Card, TierPill, Icon, Button. Exposes window.MLGrid. */
const {
  Card: MLCard,
  TierPill: MLTierPill,
  Icon: MLGridIcon,
  Button: MLButton
} = window.AccessibleFoundationsDesignSystem_87ff79;
const ML_GRID_CSS = `
.ml-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;
  padding: 24px 32px 40px; align-content: start; }
.ml-grid__mediabox { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
.ml-grid__badges { position: absolute; top: 12px; left: 12px; display: flex; gap: 6px; }
.ml-card-media { position: relative; }
.ml-empty { padding: 64px 32px; display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center; color: var(--neutral-500); }
.ml-empty__icon { width: 72px; height: 72px; border-radius: 18px; background: var(--neutral-200); display: grid; place-items: center; color: var(--neutral-500); }
.ml-empty__title { font-size: 18px; font-weight: 600; color: var(--neutral-950); }
.ml-card__date { font-size: 13px; color: var(--neutral-500); }
`;
if (!document.getElementById('ml-grid-css')) {
  const s = document.createElement('style');
  s.id = 'ml-grid-css';
  s.textContent = ML_GRID_CSS;
  document.head.appendChild(s);
}
const ML_TIERS = {
  Pro: 'solid',
  Shared: 'brand',
  Auto: 'neutral'
};
function MLGrid({
  items,
  onCreate,
  onOpen
}) {
  if (!items.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ml-empty"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ml-empty__icon"
    }, /*#__PURE__*/React.createElement(MLGridIcon, {
      name: "search",
      size: 32
    })), /*#__PURE__*/React.createElement("div", {
      className: "ml-empty__title"
    }, "Nothing here yet"), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 360,
        lineHeight: 1.55,
        margin: 0
      }
    }, "Try a different search, or create your first item to get started."), /*#__PURE__*/React.createElement(MLButton, {
      variant: "primary",
      iconLeft: "plus",
      onClick: onCreate
    }, "Create New"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-grid"
  }, items.map(it => /*#__PURE__*/React.createElement(MLCard, {
    key: it.id,
    interactive: true,
    onClick: () => onOpen(it),
    title: it.title,
    meta: it.kind,
    media: /*#__PURE__*/React.createElement("div", {
      className: "ml-card-media ml-grid__mediabox",
      style: {
        background: 'var(--neutral-200)',
        color: 'var(--neutral-500)'
      }
    }, /*#__PURE__*/React.createElement(MLGridIcon, {
      name: it.icon,
      size: 44
    }), it.badge && /*#__PURE__*/React.createElement("div", {
      className: "ml-grid__badges"
    }, /*#__PURE__*/React.createElement(MLTierPill, {
      tier: ML_TIERS[it.badge] || 'neutral'
    }, it.badge))),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ml-card__date"
    }, it.loc), /*#__PURE__*/React.createElement(MLButton, {
      variant: "tertiary",
      size: "sm"
    }, "Open"))
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-card__date"
  }, it.updated))));
}
window.MLGrid = MLGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/ItemGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/LibraryHeader.jsx
try { (() => {
/* My Library — content header: title, search, view tabs, utility actions.
 * Composes DS Input, Tabs, IconButton. Exposes window.MLHeader.
 */
const {
  Input: MLInput,
  Tabs: MLTabs,
  IconButton: MLIconButton
} = window.AccessibleFoundationsDesignSystem_87ff79;
const ML_HEADER_CSS = `
.ml-header { display: flex; flex-direction: column; gap: 18px; padding: 24px 32px 0; }
.ml-header__top { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; }
.ml-header__titles { display: flex; flex-direction: column; gap: 2px; }
.ml-header__title { font-size: 28px; font-weight: 700; color: var(--neutral-950); letter-spacing: -0.02em; line-height: 1.2; }
.ml-header__sub { font-size: 15px; color: var(--neutral-500); }
.ml-header__actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.ml-header__search { width: 300px; max-width: 36vw; }
.ml-header__bar { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  flex-wrap: wrap; padding-bottom: 18px; border-bottom: 1px solid var(--neutral-300); }
`;
if (!document.getElementById('ml-header-css')) {
  const s = document.createElement('style');
  s.id = 'ml-header-css';
  s.textContent = ML_HEADER_CSS;
  document.head.appendChild(s);
}
function MLHeader({
  title,
  subtitle,
  search,
  onSearch,
  view,
  onView,
  onOpenSettings
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "ml-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-header__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-header__titles"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ml-header__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "ml-header__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "ml-header__actions"
  }, /*#__PURE__*/React.createElement(MLIconButton, {
    icon: "bell",
    "aria-label": "Notifications"
  }), /*#__PURE__*/React.createElement(MLIconButton, {
    icon: "help",
    "aria-label": "Help"
  }), /*#__PURE__*/React.createElement(MLIconButton, {
    icon: "settings",
    "aria-label": "Settings",
    onClick: onOpenSettings
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-header__bar"
  }, /*#__PURE__*/React.createElement(MLTabs, {
    value: view,
    onChange: onView,
    items: [{
      id: 'all',
      label: 'All',
      icon: 'grid'
    }, {
      id: 'recent',
      label: 'Recent',
      icon: 'clock'
    }, {
      id: 'shared',
      label: 'Shared',
      icon: 'people'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "ml-header__search"
  }, /*#__PURE__*/React.createElement(MLInput, {
    icon: "search",
    placeholder: "Search your library",
    "aria-label": "Search your library",
    value: search,
    onChange: e => onSearch(e.target.value)
  }))));
}
window.MLHeader = MLHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/LibraryHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/SettingsPanel.jsx
try { (() => {
/* My Library — settings drawer. Composes DS Toggle, Button, IconButton, Icon. Exposes window.MLSettings. */
const {
  Toggle: MLToggle,
  Button: MLSetBtn,
  IconButton: MLSetIconBtn,
  Icon: MLSetIcon
} = window.AccessibleFoundationsDesignSystem_87ff79;
const ML_SETTINGS_CSS = `
.ml-drawer-scrim { position: absolute; inset: 0; background: var(--backdrop); backdrop-filter: blur(2px);
  z-index: var(--z-modal); animation: ml-fade var(--t-slow); }
@keyframes ml-fade { from { opacity: 0; } to { opacity: 1; } }
.ml-drawer { position: absolute; top: 0; right: 0; bottom: 0; width: 380px; max-width: 92vw; background: var(--white);
  box-shadow: var(--shadow-lg); display: flex; flex-direction: column; animation: ml-slide var(--t-slow); }
@keyframes ml-slide { from { transform: translateX(24px); opacity: 0.6; } to { transform: none; opacity: 1; } }
.ml-drawer__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
  padding: 20px 20px 18px; border-bottom: 1px solid var(--neutral-300); }
.ml-drawer__title { font-size: 18px; font-weight: 700; color: var(--neutral-950); letter-spacing: -0.01em; }
.ml-drawer__sub { font-size: 13px; color: var(--neutral-500); margin-top: 2px; }
.ml-drawer__body { flex: 1; overflow-y: auto; padding: 8px 0; }
.ml-set-group { padding: 14px 20px 6px; }
.ml-set-group__label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--neutral-500); }
.ml-set-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 20px;
  border-bottom: 1px solid var(--neutral-200); }
.ml-set-row__text { display: flex; flex-direction: column; gap: 2px; }
.ml-set-row__name { font-size: 15px; font-weight: 600; color: var(--neutral-950); }
.ml-set-row__desc { font-size: 13px; color: var(--neutral-500); max-width: 200px; line-height: 1.4; }
.ml-set-nav { display: flex; align-items: center; gap: 14px; width: 100%; min-height: 48px; padding: 0 20px;
  background: none; border: none; font-family: var(--font-sans); font-size: 15px; font-weight: 500;
  color: var(--neutral-800); cursor: pointer; text-align: left; transition: background var(--t-fast), color var(--t-fast); }
.ml-set-nav:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-set-nav__lbl { flex: 1; }
.ml-drawer__foot { padding: 16px 20px; border-top: 1px solid var(--neutral-300); display: flex; flex-direction: column; gap: 10px; }
`;
if (!document.getElementById('ml-settings-css')) {
  const s = document.createElement('style');
  s.id = 'ml-settings-css';
  s.textContent = ML_SETTINGS_CSS;
  document.head.appendChild(s);
}
function MLSettings({
  onClose,
  prefs,
  onPref,
  onSignOut
}) {
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer-scrim",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ml-drawer",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__title"
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__sub"
  }, "Adjust how My Library looks and behaves.")), /*#__PURE__*/React.createElement(MLSetIconBtn, {
    icon: "close",
    size: "sm",
    "aria-label": "Close settings",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-set-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-set-group__label"
  }, "Accessibility")), [{
    key: 'largeText',
    name: 'Larger text',
    desc: 'Increase the base text size across the app.'
  }, {
    key: 'highContrast',
    name: 'High contrast',
    desc: 'Boost contrast for titles and controls.'
  }, {
    key: 'reduceMotion',
    name: 'Reduce motion',
    desc: 'Minimise animations and transitions.'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    className: "ml-set-row",
    key: r.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-set-row__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-set-row__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-row__desc"
  }, r.desc)), /*#__PURE__*/React.createElement(MLToggle, {
    checked: !!prefs[r.key],
    onChange: e => onPref(r.key, e.target.checked),
    "aria-label": r.name,
    showState: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-set-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-set-group__label"
  }, "Account")), /*#__PURE__*/React.createElement("button", {
    className: "ml-set-nav"
  }, /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "user",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-nav__lbl"
  }, "Profile"), /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "chevronRight",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "ml-set-nav"
  }, /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "bell",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-nav__lbl"
  }, "Notifications"), /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "chevronRight",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "ml-set-nav"
  }, /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "lock",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-nav__lbl"
  }, "Privacy & security"), /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "chevronRight",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__foot"
  }, /*#__PURE__*/React.createElement(MLSetBtn, {
    variant: "secondary",
    iconLeft: "logOut",
    onClick: onSignOut,
    fullWidth: true
  }, "Sign out"))));
}
window.MLSettings = MLSettings;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/SettingsPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/Sidebar.jsx
try { (() => {
/* My Library — collapsible navigation sidebar.
 * System items + user folders (props-driven). Kebab + collapsed-rail flyouts
 * are portalled to <body> so the scroll container can't clip or hide them.
 * Exposes window.MLSidebar.
 */
const {
  Icon
} = window.AccessibleFoundationsDesignSystem_87ff79;
const ML_SIDEBAR_CSS = `
.ml-sb { position: relative; flex-shrink: 0; width: 280px; height: 100%; background: var(--white);
  border-right: 1px solid var(--neutral-300); display: flex; flex-direction: column; transition: width var(--t-slow); }
.ml-sb--closed { width: 76px; }
.ml-sb__head { display: flex; align-items: center; justify-content: space-between; gap: 8px;
  min-height: 64px; padding: 0 14px 0 18px; border-bottom: 1px solid var(--neutral-300); }
.ml-sb__brand { display: flex; align-items: center; gap: 12px; overflow: hidden; }
.ml-sb__glyph { width: 36px; height: 36px; border-radius: 10px; background: var(--brand-700); display: grid; place-items: center; flex-shrink: 0; }
.ml-sb__glyph::before { content: ''; width: 15px; height: 15px; border: 3px solid #fff; border-radius: 5px; }
.ml-sb__name { font-size: 16px; font-weight: 700; color: var(--neutral-950); white-space: nowrap; letter-spacing: -0.01em; }
.ml-sb__collapse { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;
  border: none; background: none; border-radius: 6px; color: var(--neutral-800); cursor: pointer; flex-shrink: 0; transition: background var(--t-fast), color var(--t-fast); }
.ml-sb__collapse:hover { background: var(--neutral-200); color: var(--brand-700); }
.ml-sb__body { flex: 1; overflow-y: auto; overflow-x: hidden; padding: 12px 0 16px; }
.ml-sb__create { display: flex; align-items: center; justify-content: center; gap: 8px;
  width: calc(100% - 28px); height: 44px; margin: 4px 14px 8px; background: var(--brand-700); color: #fff;
  border: none; border-radius: var(--radius-btn); font-family: var(--font-sans); font-size: 15px; font-weight: 700; cursor: pointer; white-space: nowrap; transition: background var(--t-fast); }
.ml-sb__create:hover { background: var(--brand-900); }
.ml-sb__create--rail { width: 56px; height: 52px; flex-direction: column; gap: 3px; margin: 8px auto 6px; font-size: 11px; font-weight: 600; border-radius: 12px; }

.ml-nav { list-style: none; margin: 0; padding: 4px 0 0; }
.ml-nav__item { display: flex; align-items: center; gap: 16px; width: 100%; min-height: 44px; padding: 0 18px;
  background: none; border: none; font-family: var(--font-sans); font-size: 15px; font-weight: 500; color: var(--neutral-500); cursor: pointer; text-align: left; transition: background var(--t-fast), color var(--t-fast); }
.ml-nav__item:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-nav__item .ml-nav__lbl { flex: 1; white-space: nowrap; }
.ml-nav__item--active { color: var(--brand-700); box-shadow: inset 3px 0 0 var(--brand-700); }
.ml-nav__chev { transition: transform var(--t-normal); color: var(--neutral-500); }
.ml-nav__item--open .ml-nav__chev { transform: rotate(180deg); }
.ml-nav__item:hover .ml-nav__chev { color: var(--brand-700); }

.ml-children { list-style: none; margin: 0; padding: 0; overflow: hidden; display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--t-slow); }
.ml-children--open { grid-template-rows: 1fr; }
.ml-children__in { overflow: hidden; min-height: 0; }
.ml-child { display: flex; align-items: center; gap: 14px; margin: 0 8px 0 40px; width: calc(100% - 48px);
  min-height: 38px; padding: 0 12px; border-radius: var(--radius-item); background: none; border: none;
  font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: var(--neutral-500); cursor: pointer; text-align: left; transition: background var(--t-fast), color var(--t-fast); }
.ml-child:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-child .ml-child__lbl { flex: 1; white-space: nowrap; }
.ml-child__count { font-size: 13px; color: var(--neutral-500); min-width: 18px; text-align: right; }
.ml-child--active { background: var(--surface-active); color: var(--brand-900); }
.ml-child--active .ml-child__count { color: var(--brand-900); }

.ml-foldhdr { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 12px 8px 6px 40px; }
.ml-foldhdr__lbl { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--neutral-500); }
.ml-addfold { display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px; background: var(--white);
  border: 1.5px solid var(--neutral-300); border-radius: 8px; color: var(--neutral-700); font-family: var(--font-sans);
  font-size: 12px; font-weight: 600; cursor: pointer; transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast); }
.ml-addfold:hover { border-color: var(--brand-700); color: var(--brand-700); background: var(--surface-hover); }

.ml-folder { display: flex; align-items: center; margin: 0 8px 0 40px; width: calc(100% - 48px);
  min-height: 38px; border-radius: var(--radius-item); color: var(--neutral-500); transition: background var(--t-fast), color var(--t-fast); }
.ml-folder:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-folder--active { background: var(--surface-active); color: var(--brand-900); }
.ml-folder__nav { flex: 1; min-width: 0; display: flex; align-items: center; gap: 14px; min-height: 38px; padding: 0 0 0 12px;
  background: none; border: none; font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: inherit; cursor: pointer; text-align: left; }
.ml-folder__nav .lbl { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ml-folder__count { font-size: 13px; min-width: 16px; text-align: right; color: inherit; }
.ml-folder__kebab { width: 28px; height: 28px; margin: 0 4px; display: grid; place-items: center; border: none; background: none;
  border-radius: 6px; color: inherit; cursor: pointer; opacity: 0; flex-shrink: 0; transition: opacity var(--t-fast), background var(--t-fast); }
.ml-folder:hover .ml-folder__kebab, .ml-folder--active .ml-folder__kebab, .ml-folder__kebab[aria-expanded="true"] { opacity: 1; }
.ml-folder__kebab:hover { background: var(--neutral-300); }

/* portalled overlays (kebab + rail flyout) — top of everything */
.ml-pop { position: fixed; z-index: 9000; background: var(--white); border: 1px solid var(--neutral-300);
  border-radius: 12px; box-shadow: var(--shadow-lg); padding: 8px; min-width: 200px; font-family: var(--font-sans); }
.ml-pop__h { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--neutral-500); padding: 6px 12px 8px; }
.ml-pop__item { display: flex; align-items: center; gap: 12px; width: 100%; min-height: 40px; padding: 0 12px; background: none;
  border: none; border-radius: 8px; font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: var(--neutral-800); cursor: pointer; text-align: left; }
.ml-pop__item .c { margin-left: auto; font-size: 13px; color: var(--neutral-500); }
.ml-pop__item:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-pop__item--active { background: var(--surface-active); color: var(--brand-900); }
.ml-pop__item.danger { color: var(--danger); }
.ml-pop__item.danger:hover { background: #FDECEC; color: var(--danger-hover); }
.ml-pop__sep { height: 1px; background: var(--neutral-300); margin: 5px 0; }
.ml-pop__add { display: flex; align-items: center; justify-content: center; gap: 6px; width: calc(100% - 16px); margin: 6px 8px 2px;
  height: 36px; background: var(--white); border: 1.5px solid var(--neutral-300); border-radius: 8px; color: var(--neutral-700);
  font-family: var(--font-sans); font-size: 13px; font-weight: 600; cursor: pointer; }
.ml-pop__add:hover { border-color: var(--brand-700); color: var(--brand-700); }

.ml-rail { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 6px; }
.ml-rail__btn { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
  width: 64px; padding: 9px 2px; background: none; border: none; border-radius: 12px; color: var(--neutral-800); cursor: pointer; transition: background var(--t-fast), color var(--t-fast); }
.ml-rail__btn:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-rail__btn--active { color: var(--brand-700); background: var(--surface-active); }
.ml-rail__lbl { font-size: 10px; font-weight: 600; line-height: 1.15; text-align: center; white-space: nowrap; }

.ml-sb__foot { border-top: 1px solid var(--neutral-300); padding: 10px; }
.ml-user { display: flex; align-items: center; gap: 12px; width: 100%; padding: 8px 10px; border-radius: var(--radius-item); background: none; border: none; cursor: pointer; text-align: left; transition: background var(--t-fast); }
.ml-user:hover { background: var(--neutral-200); }
.ml-user__av { width: 36px; height: 36px; border-radius: 50%; background: var(--surface-active); color: var(--brand-900); display: grid; place-items: center; font-weight: 700; font-size: 15px; flex-shrink: 0; }
.ml-user__meta { display: flex; flex-direction: column; overflow: hidden; }
.ml-user__name { font-size: 14px; font-weight: 600; color: var(--neutral-950); white-space: nowrap; }
.ml-user__sub { font-size: 12px; color: var(--neutral-500); white-space: nowrap; }
`;
if (!document.getElementById('ml-sidebar-css-5')) {
  const s = document.createElement('style');
  s.id = 'ml-sidebar-css-5';
  s.textContent = ML_SIDEBAR_CSS;
  document.head.appendChild(s);
}
const ML_NAV = [{
  id: 'library',
  label: 'My Library',
  icon: 'home',
  expandable: true
}, {
  id: 'favorites',
  label: 'Favorites',
  icon: 'heart',
  expandable: false
}, {
  id: 'recent',
  label: 'Recently Viewed',
  icon: 'clock',
  expandable: false
}, {
  id: 'shared',
  label: 'Shared With Me',
  icon: 'people',
  expandable: true,
  children: [{
    id: 'sh-github',
    label: 'GitHub',
    icon: 'grid',
    count: 4
  }, {
    id: 'sh-gdrive',
    label: 'Google Drive',
    icon: 'folder',
    count: 12
  }, {
    id: 'sh-onedrive',
    label: 'OneDrive',
    icon: 'save',
    count: 3
  }, {
    id: 'sh-dropbox',
    label: 'Dropbox',
    icon: 'download',
    count: 0
  }]
}, {
  id: 'community',
  label: 'Community',
  icon: 'globe',
  expandable: false
}];
const ML_RAIL_LABEL = {
  library: 'My',
  favorites: 'Favorites',
  recent: 'Recent',
  shared: 'Shared',
  community: 'Community'
};
function MLSidebar({
  open,
  onToggle,
  activeId,
  onNavigate,
  systemItems = [],
  folders = [],
  onCreate,
  onAddFolder,
  onAddToFolder,
  onRemoveFolder,
  onOpenSettings,
  userName
}) {
  const [expanded, setExpanded] = React.useState({
    library: true,
    shared: false
  });
  const [menu, setMenu] = React.useState(null); // folder kebab { folder, x, y }
  const [fly, setFly] = React.useState(null); // collapsed-rail flyout { id, x, y }
  const flyTimer = React.useRef(null);
  const initial = (userName || 'You').trim().charAt(0).toUpperCase();
  React.useEffect(() => {
    if (!menu && !fly) return;
    const close = e => {
      if (!e.target.closest('.ml-folder__kebab') && !e.target.closest('.ml-pop')) setMenu(null);
      if (!e.target.closest('.ml-rail__btn') && !e.target.closest('.ml-pop')) setFly(null);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menu, fly]);
  const openMenu = (e, folder) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMenu(m => m && m.folder.id === folder.id ? null : {
      folder,
      x: r.right,
      y: r.bottom
    });
  };
  const sharedKids = ML_NAV.find(n => n.id === 'shared').children;

  // ---- collapsed rail ----
  if (!open) {
    const railActive = item => item.id === activeId || item.id === 'library' && [...systemItems, ...folders].some(c => c.id === activeId) || (item.children || []).some(c => c.id === activeId);
    const clearFlyTimer = () => {
      if (flyTimer.current) {
        clearTimeout(flyTimer.current);
        flyTimer.current = null;
      }
    };
    const scheduleClose = () => {
      clearFlyTimer();
      flyTimer.current = setTimeout(() => setFly(null), 180);
    };
    const onRailHover = (e, item) => {
      if (item.id === 'library' || item.id === 'shared') {
        clearFlyTimer();
        const r = e.currentTarget.getBoundingClientRect();
        setFly({
          id: item.id,
          x: r.right,
          y: r.top
        });
      } else scheduleClose();
    };
    const onRailClick = item => {
      if (item.id !== 'shared') {
        onNavigate(item.id === 'library' ? 'all' : item.id);
      }
    };
    return /*#__PURE__*/React.createElement("nav", {
      className: "ml-sb ml-sb--closed",
      "aria-label": "Main navigation"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ml-sb__head",
      style: {
        justifyContent: 'center',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "ml-sb__collapse",
      onClick: onToggle,
      "aria-label": "Expand sidebar"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ml-sb__body"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ml-sb__create ml-sb__create--rail",
      onClick: onCreate,
      "aria-label": "Create new item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 20,
      strokeWidth: 2.4
    }), /*#__PURE__*/React.createElement("span", null, "Create")), /*#__PURE__*/React.createElement("div", {
      className: "ml-rail"
    }, ML_NAV.map(item => /*#__PURE__*/React.createElement("button", {
      key: item.id,
      className: 'ml-rail__btn' + (railActive(item) ? ' ml-rail__btn--active' : ''),
      "aria-label": item.label,
      "aria-expanded": fly && fly.id === item.id,
      onMouseEnter: e => onRailHover(e, item),
      onMouseLeave: scheduleClose,
      onClick: () => onRailClick(item)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      className: "ml-rail__lbl"
    }, ML_RAIL_LABEL[item.id] || item.label))))), fly && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      className: "ml-pop",
      style: {
        top: Math.min(fly.y, window.innerHeight - 360),
        left: fly.x + 8
      },
      role: "menu",
      onMouseEnter: clearFlyTimer,
      onMouseLeave: scheduleClose
    }, fly.id === 'library' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__h"
    }, "My Library"), systemItems.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: 'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : ''),
      onClick: () => {
        onNavigate(c.id);
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 18
    }), " ", c.label, " ", /*#__PURE__*/React.createElement("span", {
      className: "c"
    }, c.count))), /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__sep"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__h"
    }, "Folders"), folders.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: 'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : ''),
      onClick: () => {
        onNavigate(c.id);
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 18
    }), " ", c.label, " ", /*#__PURE__*/React.createElement("span", {
      className: "c"
    }, c.count))), /*#__PURE__*/React.createElement("button", {
      className: "ml-pop__add",
      onClick: () => {
        onAddFolder();
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14,
      strokeWidth: 2.4
    }), " Add folder")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__h"
    }, "Shared With Me"), sharedKids.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: 'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : ''),
      onClick: () => {
        onNavigate(c.id);
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 18
    }), " ", c.label, " ", /*#__PURE__*/React.createElement("span", {
      className: "c"
    }, c.count))))), document.body));
  }

  // ---- open sidebar ----
  const childBtn = c => /*#__PURE__*/React.createElement("li", {
    key: c.id
  }, /*#__PURE__*/React.createElement("button", {
    className: 'ml-child' + (c.id === activeId ? ' ml-child--active' : ''),
    "aria-current": c.id === activeId ? 'page' : undefined,
    onClick: () => onNavigate(c.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-child__lbl"
  }, c.label), c.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "ml-child__count"
  }, c.count)));
  return /*#__PURE__*/React.createElement("nav", {
    className: "ml-sb",
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__glyph"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-sb__name"
  }, "My Library")), /*#__PURE__*/React.createElement("button", {
    className: "ml-sb__collapse",
    onClick: onToggle,
    "aria-label": "Collapse sidebar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__body"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ml-sb__create",
    onClick: onCreate
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    strokeWidth: 2.4
  }), " Create New"), /*#__PURE__*/React.createElement("ul", {
    className: "ml-nav"
  }, ML_NAV.map(item => {
    const isOpen = !!expanded[item.id];
    if (!item.expandable) {
      const active = item.id === activeId;
      return /*#__PURE__*/React.createElement("li", {
        key: item.id
      }, /*#__PURE__*/React.createElement("button", {
        className: 'ml-nav__item' + (active ? ' ml-nav__item--active' : ''),
        "aria-current": active ? 'page' : undefined,
        onClick: () => onNavigate(item.id)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: item.icon,
        size: 22
      }), /*#__PURE__*/React.createElement("span", {
        className: "ml-nav__lbl"
      }, item.label)));
    }
    const isLibrary = item.id === 'library';
    const kids = isLibrary ? [...systemItems, ...folders] : item.children;
    const sectionActive = item.id === activeId || kids.some(c => c.id === activeId);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, /*#__PURE__*/React.createElement("button", {
      className: 'ml-nav__item' + (sectionActive ? ' ml-nav__item--active' : '') + (isOpen ? ' ml-nav__item--open' : ''),
      "aria-expanded": isOpen,
      onClick: () => setExpanded(e => ({
        ...e,
        [item.id]: !e[item.id]
      }))
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      className: "ml-nav__lbl"
    }, item.label), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronDown",
      size: 18,
      className: "ml-nav__chev"
    })), /*#__PURE__*/React.createElement("ul", {
      className: 'ml-children' + (isOpen ? ' ml-children--open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "ml-children__in"
    }, isLibrary ? /*#__PURE__*/React.createElement(React.Fragment, null, systemItems.map(childBtn), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
      className: "ml-foldhdr"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ml-foldhdr__lbl"
    }, "Folders"), /*#__PURE__*/React.createElement("button", {
      className: "ml-addfold",
      onClick: onAddFolder,
      "aria-label": "Add folder"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 13,
      strokeWidth: 2.4
    }), " Add folder"))), folders.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.id
    }, /*#__PURE__*/React.createElement("div", {
      className: 'ml-folder' + (c.id === activeId ? ' ml-folder--active' : '')
    }, /*#__PURE__*/React.createElement("button", {
      className: "ml-folder__nav",
      "aria-current": c.id === activeId ? 'page' : undefined,
      onClick: () => onNavigate(c.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      className: "lbl"
    }, c.label), /*#__PURE__*/React.createElement("span", {
      className: "ml-folder__count"
    }, c.count)), /*#__PURE__*/React.createElement("button", {
      className: "ml-folder__kebab",
      "aria-label": 'Options for ' + c.label,
      "aria-expanded": menu && menu.folder.id === c.id,
      onClick: e => openMenu(e, c)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "moreVertical",
      size: 16
    })))))) : item.children.map(childBtn))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ml-user",
    onClick: onOpenSettings
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-user__av"
  }, initial), /*#__PURE__*/React.createElement("span", {
    className: "ml-user__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-user__name"
  }, userName || 'You'), /*#__PURE__*/React.createElement("span", {
    className: "ml-user__sub"
  }, "Settings & account")))), menu && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "ml-pop",
    role: "menu",
    style: {
      top: menu.y + 4,
      left: Math.max(12, menu.x - 196)
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ml-pop__item",
    onClick: () => {
      onAddToFolder(menu.folder.id);
      setMenu(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " Add item to folder"), /*#__PURE__*/React.createElement("button", {
    className: "ml-pop__item",
    onClick: () => {
      onNavigate(menu.folder.id);
      setMenu(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 16
  }), " Open folder"), /*#__PURE__*/React.createElement("div", {
    className: "ml-pop__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "ml-pop__item danger",
    onClick: () => {
      onRemoveFolder(menu.folder);
      setMenu(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 16
  }), " Remove folder")), document.body));
}
window.MLSidebar = MLSidebar;
window.ML_NAV = ML_NAV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/WelcomeScreen.jsx
try { (() => {
/* My Library — welcome / sign-in screen. Composes DS Input, Button, Icon. Exposes window.MLWelcome. */
const {
  Input: MLWInput,
  Button: MLWButton,
  Icon: MLWIcon
} = window.AccessibleFoundationsDesignSystem_87ff79;
const ML_WELCOME_CSS = `
.ml-welcome { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: var(--white); padding: 24px; }
.ml-welcome__card { width: 440px; max-width: 100%; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
.ml-welcome__glyph { width: 64px; height: 64px; border-radius: 18px; background: var(--brand-700); display: grid; place-items: center;
  box-shadow: var(--shadow-md); margin-bottom: 8px; }
.ml-welcome__glyph::before { content: ''; width: 26px; height: 26px; border: 5px solid #fff; border-radius: 8px; }
.ml-welcome__title { font-size: 40px; font-weight: 700; color: var(--neutral-950); letter-spacing: -0.02em; line-height: 1.1; }
.ml-welcome__sub { font-size: 17px; color: var(--neutral-700); line-height: 1.5; max-width: 380px; margin-bottom: 16px; }
.ml-welcome__form { width: 100%; display: flex; flex-direction: column; gap: 16px; text-align: left; }
.ml-welcome__hint { font-size: 13px; color: var(--neutral-500); text-align: center; margin-top: 4px; }
`;
if (!document.getElementById('ml-welcome-css')) {
  const s = document.createElement('style');
  s.id = 'ml-welcome-css';
  s.textContent = ML_WELCOME_CSS;
  document.head.appendChild(s);
}
function MLWelcome({
  onContinue
}) {
  const [name, setName] = React.useState('');
  const submit = () => onContinue(name.trim() || 'Friend');
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome__glyph"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "ml-welcome__title"
  }, "Welcome to My Library"), /*#__PURE__*/React.createElement("p", {
    className: "ml-welcome__sub"
  }, "Keep everything you save in one calm, easy-to-read place."), /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome__form"
  }, /*#__PURE__*/React.createElement(MLWInput, {
    label: "What should we call you?",
    placeholder: "Type your name",
    icon: "user",
    value: name,
    onChange: e => setName(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') submit();
    }
  }), /*#__PURE__*/React.createElement(MLWButton, {
    variant: "primary",
    fullWidth: true,
    iconRight: "chevronRight",
    onClick: submit
  }, "Continue"), /*#__PURE__*/React.createElement("p", {
    className: "ml-welcome__hint"
  }, "No account needed \u2014 this is a guided demo."))));
}
window.MLWelcome = MLWelcome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/WelcomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.List = __ds_scope.List;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.TierPill = __ds_scope.TierPill;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

})();
