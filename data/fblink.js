const RE_REDIRECT = new RegExp('[?|&]u=([^&;]+?)(&|#|;|$)');

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
  var links = document.querySelectorAll('a');

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
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
