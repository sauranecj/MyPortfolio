$('.settings-btn').on('click', function() {
  $('body').toggleClass('dark');
  $(this).text($('body').hasClass('dark') ? '☀' : '⚙');
});