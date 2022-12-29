const sidebar = $('.sidebar');
const mainContent = $('.main-content');
$('button').click(() => {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large')
});