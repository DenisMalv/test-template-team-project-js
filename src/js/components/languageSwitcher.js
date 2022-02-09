import { options,fetchMovie, discoverGenres, fetchTrandingMovie,fetchMoviesTestValidator,fetchTrandingMovieForSlider } from './fetchApi'

import {
  markupPages,
  togglePainationAllButtons,
  addTestPaginationListeners,
  hideFirstPageBtn,
  hideLastPageBtn,
  togglePaginationBtn,
  fetchTrandingMovieorReadLS
} from './pagination';


import {
  genresMarkup,
  galleryGenresMarkup,
  toggleGenres,
  toggleYear,
  removeAllChekedGenres,
  toggleTrands,
} from './genres';

import { showErrorText, hideErrorText } from './errorText';

import { sliderMarkup,onLoadMainPageShowSlider} from './slider';
import { showFetchLoader, hideFetchLoader } from './fetchLoader'

import { galleryArrayMarkup, ress, onLoadTranding, checkFetchLink,currentFetch, ratingAddIshidden } from './gallery'

const throttle = require('lodash.throttle');

export {addEventListenerOnLanguageButtons}


const refs = {
    languageButtons: document.querySelectorAll('.button-language'),
    gallery: document.querySelector('.gallery-list'),
    pages: document.querySelector('.pages'),
    topTrands: document.querySelector('.top-trands'),
    genres: document.querySelector('.genres'),
}

function addEventListenerOnLanguageButtons() {
    refs.languageButtons.forEach(button => {
        button.addEventListener('click', onClickSwitchLanguage)
    })
}

async function onClickSwitchLanguage(event) {
    let ress
    console.log('currentFEtch',currentFetch);
    refs.gallery.innerHTML = ''
    refs.pages.innerHTML = ''
    refs.languageButtons.forEach(button=>button.classList.remove('is-active'))
    localStorage.removeItem('allGenresList')

    event.currentTarget.classList.add('is-active')
    options.language = event.currentTarget.name 
    console.log('options.language', options.language);
    try {
        
    // toggleTrands(e.target.id);
    // ==== chech input ====
        genresMarkup();
        await showFetchLoader()
        
        if (currentFetch === 'search') {
        ress= await fetchMovie()
        }
        if (currentFetch === 'genres') {
        ress= await discoverGenres()
        }
        if (currentFetch === 'tranding') {
        ress= await fetchTrandingMovie()
        }
        if (currentFetch === 'year') {
        ress= await discoverYear()
        }
        
    galleryArrayMarkup(ress);
    markupPages(ress);
    ratingAddIshidden();
    hideFirstPageBtn();
    hideLastPageBtn();
    // togglePaginationBtn();
    togglePainationAllButtons(ress);
    // onClickMovieCard()
    // modalOpenOnClick();
    await hideFetchLoader()
    
  } catch (e) {
    console.log(e);
  }

}