$('head style[type="text/css"]').attr('type', 'text/less');
less.refreshStyles();
window.randomize = function() {
  $('.radial-progress').attr('data-progress', Math.abs(16));
}
setTimeout(window.randomize, 200);
$('.radial-progress').click(window.randomize);