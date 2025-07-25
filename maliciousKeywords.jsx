const maliciousKeywords = [
  'eval', 'Function', 'setTimeout', 'setInterval', 'execScript',
  'document.write', 'document.writeln', 'innerHTML', 'outerHTML',
  'insertAdjacentHTML', 'createElement("script")', 'appendChild(script)',
  'iframe', 'srcdoc', 'window.location', 'location.href', 'location.replace',
  'history.pushState', 'history.replaceState', 'XMLHttpRequest', 'fetch',
  'WebSocket', 'navigator.sendBeacon', 'localStorage', 'sessionStorage',
  'IndexedDB', 'cookie', 'atob', 'btoa', 'unescape', 'escape',
  'decodeURIComponent', 'encodeURIComponent', 'Object.constructor',
  'Object.defineProperty', 'crypto.subtle', 'navigator.userAgent',
  'navigator.plugins', 'navigator.languages', 'screen.width', 'screen.height',
  'canvas.toDataURL', 'navigator.clipboard.writeText',
  'navigator.clipboard.readText', 'alert', 'prompt', 'confirm',
  'new Image', 'new Audio', 'Image.src', 'window.open',
  'data:text/javascript', 'stealData', 'keylogger', 'varshit'
];

export default maliciousKeywords;
