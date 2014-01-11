MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
  var links = document.querySelectorAll('a[rel=nofollow]');

  Array.prototype.forEach.call(links, function(link) {
    if (!link.href.contains('www.facebook.com/l.php')) {
      return;
    }

    var matched = link.search.match(new RegExp('[?|&]u=([^&;]+?)(&|#|;|$)'));
    if (matched) {
      link.removeAttribute('onclick');
      link.href = decodeURIComponent(matched[1]);
    }
  });
})

observer.observe(document, {
  subtree: true,
  attributes: true
})