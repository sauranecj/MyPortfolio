$('.settings-btn').on('click', function () {
    $('body').toggleClass('dark');
    const isDark = $('body').hasClass('dark');
    $(this).text(isDark ? '☀' : '⚙');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    $('body').addClass('dark');
    $('.settings-btn').text('☀');
}