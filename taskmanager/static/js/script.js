document.addEventListener('DOMContentLoaded', function () {
  // sidenav initialisation
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  M.Modal.init();
});