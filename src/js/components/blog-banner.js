
const blogBanners = [...document.querySelectorAll('.blog-banner')];


blogBanners.forEach(banner => {
  const button = banner.querySelector('.blog-banner__button');
  button.addEventListener('mouseover', function() {
    banner.classList.add('blog-banner_button-hover');
  })
  button.addEventListener('mouseout', function() {
    banner.classList.remove('blog-banner_button-hover');
  })
});