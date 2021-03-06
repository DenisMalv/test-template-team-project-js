export default teaser;

import { fetchTeaser,options } from './fetchApi';

let video;
let href;




// ==============
// (video.official || video.type === 'trailer') &&
//       video.site === 'YouTube' && video.iso_639_1 === options.language
// ================

async function teaser(id) {
  const videos = await fetchTeaser(id);
  video = videos.results.filter(
    video => video.iso_639_1 === options.language && video.site === 'YouTube'  && (video.official || video.type === 'Trailer') 
  )[0];
  console.log('video',video);
  href = document.querySelector('.js-teaser');
  href.addEventListener('click', onCardClick);
}

function onCardClick() {
  event.preventDefault();
  if (!video) {
    return;
  }
  // this.href = `https://www.youtube.com/watch?v=${video.key}`;
  // this.target = '_blank';
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="backdrop js-youtube">
    <iframe style="position:absolute;top:50%;left:50%; transform: translate(-50%,-50%)"
    width="560"
    height="315"
    <iframe class="modal-iframe iframe" style="position:absolute;top:50%;left:50%; transform: translate(-50%,-50%)"
    // width="560"
    // height="315"
    src="https://www.youtube.com/embed/${video.key}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
  </div>
  `,
  );
  const div = document.querySelector('.js-youtube');
  div.addEventListener('click', onDivClick);
}

function onDivClick() {
  this.remove();
  this.removeEventListener('click', onDivClick);
}
