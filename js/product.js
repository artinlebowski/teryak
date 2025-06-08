const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src;
  });
});
