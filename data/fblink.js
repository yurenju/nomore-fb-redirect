const RE_REDIRECT = new RegExp('[?|&]u=([^&;]+?)(&|#|;|$)');

function removeRedirect() {
  var links = (!navigator.userAgent.contains('Mobile'))
    ? document.querySelectorAll('a[rel=nofollow]')
    : document.querySelectorAll('a[target=_blank]');

  Array.prototype.forEach.call(links, function(link) {
    if (!link.href.contains('facebook.com/l.php')) {
      return;
    }

    var matched = link.search.match(RE_REDIRECT);
    if (matched) {
      link.removeAttribute('onclick');
      link.href = decodeURIComponent(matched[1]);
    }
  });
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(removeRedirect);
removeRedirect();

observer.observe(document, {
  subtree: true,
  attributes: true
});
