const sidebar = $('.sidebar');
const mainContent = $('.main-content');
$('button').onclick(() => {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large')
});