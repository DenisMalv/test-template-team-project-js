
export { onClickMovieCard, addListenerOnGalleryCardButtons }

import { currentFilm, getGalleryTargetMovieFromLS } from './fn_searchGalleryTargetInLS'
import { renderFromLibraryWatched,renderFromLibraryQueue,onClickDataMovieAddLibrary} from './fn_dataMovieAddToLS'



const refs = {
        modalCloseBtn:document.querySelector('[data-modal-close]'),
        modal:document.querySelector('[data-modal]'),
        mainBody:document.querySelector('body'),
}

function onClickMovieCard(event) {
        
    console.log('exports currentfFilm', currentFilm)
        
    event.preventDefault()
    refs.modalCloseBtn.addEventListener('click', onClickCloseModal)
    refs.modal.addEventListener('click', onClickBacrdropModalClose)
    refs.mainBody.addEventListener('keydown', onEscapeBtnClick)
    refs.modal.classList.toggle('visually-hidden');

    console.log(event.target);
    console.log(event.currentTarget);
    console.dir(event.currentTarget);

    getGalleryTargetMovieFromLS()
    renderFromLibraryWatched()
    renderFromLibraryQueue()
    bodyScroll()
  
};

function onSliderMovieCard(event) {
        
    console.log('exports currentfFilm', currentFilm)
        
    event.preventDefault()
    refs.modalCloseBtn.addEventListener('click', onClickCloseModal)
    refs.modal.addEventListener('click', onClickBacrdropModalClose)
    refs.mainBody.addEventListener('keydown', onEscapeBtnClick)
    refs.modal.classList.toggle('visually-hidden');

    console.log(event.target);
    console.log(event.currentTarget);
    console.dir(event.currentTarget);

    getGalleryTargetMovieFromLS()
    renderFromLibraryWatched()
    renderFromLibraryQueue()
    bodyScroll()
  
};





// ==========================================================
function onClickCloseModal() {
    
    refs.modal.classList.toggle('visually-hidden');
    refs.modalCloseBtn.removeEventListener('click', onClickCloseModal)
    refs.mainBody.removeEventListener('keydown', onEscapeBtnClick)
    refs.modal.removeEventListener('click', onClickBacrdropModalClose)

    bodyScroll();
  
};

function onEscapeBtnClick(event) {
    if (event.key === 'Escape') {
        onClickCloseModal();
    };
    console.log(event.key)
};


function onClickBacrdropModalClose(e) {
    if (e.target === e.currentTarget) {
        onClickCloseModal();
    };
};
    
    

function bodyScroll() {
    const modalClose = refs.modal.classList.contains('visually-hidden')
    const scrollLockMethod = !modalClose
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
};


function addListenerOnGalleryCardButtons() {
    const buttons = document.querySelectorAll('.modal__button')
    buttons.forEach(btn=>btn.addEventListener('click',onClickDataMovieAddLibrary))
}