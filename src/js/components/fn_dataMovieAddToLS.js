export {renderFromLibraryWatched,renderFromLibraryQueue,onClickDataMovieAddLibrary,deleteFromWatchW,deleteFromWatchQ}


import {currentFilm} from './fn_searchGalleryTargetInLS'
import { markup } from "./library";

const refs = {
     modalButtonWatched: document.querySelector('.js-button-add-watched'),
    modalButtonQueue: document.querySelector('.js-button-add-queue'),
    // watchedArray: JSON.parse(localStorage.getItem('watched')),
    // queueArray:JSON.parse(localStorage.getItem('queue')),
}

const watchedArray = JSON.parse(localStorage.getItem('watched'))
const queueArray = JSON.parse(localStorage.getItem('queue'))

console.log('localStorage',JSON.parse(localStorage.getItem('watched')))
console.log('localStorage',JSON.parse(localStorage.getItem('queue')))

function renderFromLibraryWatched() {
    const modalButtonWatched = document.querySelector('.js-button-add-watched')
    const modalButtonQueue = document.querySelector('.js-button-add-queue')
    console.log('refs.modalButtonWatched', refs.modalButtonWatched);
   

    console.log('watchedArray', watchedArray);
    console.log('queueArray', queueArray);
    
            if (watchedArray.results.length === 0) {
               modalButtonWatched.textContent = 'ADD TO WATCHED' 
                
            };
            const indexWatchedMovieOnLS = watchedArray.results.findIndex(movieWatched => {
                if (movieWatched.id === currentFilm.id) {

                    console.log('renderFromLibrary estb');
                    modalButtonWatched.textContent = 'DELETE FROM WATCHED'
                    modalButtonQueue.textContent = 'ADD TO WATCHED'
                    modalButtonWatched.classList.add('cheked')
                    return movieWatched
                };
                modalButtonWatched.textContent = 'ADD TO WATCHED'

            });
            return indexWatchedMovieOnLS
};

function renderFromLibraryQueue() {
    const modalButtonQueue = document.querySelector('.js-button-add-queue')
    const modalButtonWatched = document.querySelector('.js-button-add-watched')
            if (queueArray.results.length === 0) {
                modalButtonQueue.textContent = 'ADD TO QUEUE';
            };
            const indexQueueMovieOnLS = queueArray.results.findIndex(movieQueue => {
                if (movieQueue.id === currentFilm.id) {
                    console.log('renderFromLibrary estb');
                    modalButtonQueue.textContent = 'DELETE FROM QUEUE'
                    modalButtonWatched.textContent = 'ADD TO WATCHED'
                    modalButtonQueue.classList.add('cheked')
                    return movieQueue
                };
                modalButtonQueue.textContent = 'ADD TO QUEUE'
               
            });
            return indexQueueMovieOnLS;
}


function onClickDataMovieAddLibrary(e) {
const modalButtonWatched = document.querySelector('.js-button-add-watched')
const modalButtonQueue = document.querySelector('.js-button-add-queue')
            const watchedIdx= renderFromLibraryWatched()
            const queueIdx = renderFromLibraryQueue()
            const lsKey = localStorage.getItem('isActive')
            console.log('watchedIdx', watchedIdx);
            console.log('queueIdx', queueIdx);
    
            if (e.currentTarget === modalButtonWatched) {
                
                if (watchedIdx !== -1 && watchedIdx !== undefined) {
                    // console.log('не пушим', www);
                    modalButtonWatched.textContent = 'ADD TO WATCHED';
                    modalButtonWatched.classList.remove('cheked');
                    deleteFromWatchW(currentFilm);
                    console.log('удалили Wtched', watchedArray.results);
                    localStorage.setItem('watched', JSON.stringify(watchedArray));
                    console.log(lsKey);
                    
                    if (lsKey === 'watched') {
                        markup(watchedArray)
                    };
                    if (lsKey === 'queue') {
                        markup(queueArray)
                    };
                    return 
                };

                
                if (queueIdx !== -1 && queueIdx !== undefined) {
                    
                    modalButtonQueue.textContent = 'ADD TO QUEUE'
                    modalButtonQueue.classList.remove('cheked')
                    deleteFromWatchQ(currentFilm)
                    console.log('удалили Queue', queueArray.results)
                    localStorage.setItem('queue', JSON.stringify(queueArray))
                    console.log(lsKey);

                };
                modalButtonWatched.textContent = 'DELETE FROM WATCHED'
                modalButtonWatched.classList.add('cheked')
                    console.log('watchedIdx',watchedIdx);
                    console.log('мы пушим Watched');
                    watchedArray.results.push(currentFilm)
                console.log('watchedArray.results', watchedArray.results);
                localStorage.setItem('watched', JSON.stringify(watchedArray))
                if (lsKey === 'watched') {
                        markup(watchedArray)
                };
                if (lsKey === 'queue') {
                        markup(queueArray)
                };
              
            };
            if (e.currentTarget === modalButtonQueue) {
                if (queueIdx !== -1 && queueIdx !== undefined) {
                    
                    modalButtonQueue.textContent = 'ADD TO QUEUE'
                    modalButtonQueue.classList.remove('cheked')
                    deleteFromWatchQ(currentFilm)
                    console.log('удалили Queue', queueArray.results)
                    localStorage.setItem('queue', JSON.stringify(queueArray))
                    console.log(lsKey);
                    if (lsKey === 'queue') {
                        markup(queueArray)
                    };
                    if (lsKey === 'watched') {
                        markup(watchedArray)
                    };
                    return 
                };
                
                modalButtonQueue.textContent = 'DELETE FROM QUEUE'
                modalButtonQueue.classList.add('cheked')
                    console.log('queueIdx ',queueIdx);
                    console.log('мы пушим Queue');
                    queueArray.results.push(currentFilm)
                    console.log('queueArray.results', queueArray.results);
                localStorage.setItem('queue', JSON.stringify(queueArray))  
                if (watchedIdx !== -1 && watchedIdx !== undefined) {
                    // console.log('не пушим', www);
                    modalButtonWatched.textContent = 'ADD TO WATCHED'
                    modalButtonWatched.classList.remove('cheked')
                    deleteFromWatchW(currentFilm)
                    console.log('удалили Wtched', watchedArray.results)
                    localStorage.setItem('watched', JSON.stringify(watchedArray))
                    console.log(lsKey);

                };
                
                if (lsKey === 'queue') {
                        markup(queueArray)
                };
                if (lsKey === 'watched') {
                        markup(watchedArray)
                };
                            
            };
            
}

function deleteFromWatchW(currentFilm) {
        watchedArray.results.forEach(elem => {
            // console.log(elem.id)
            // console.log(currentFilm.id)
            if (elem.id === currentFilm.id) {
                const idx = watchedArray.results.indexOf(elem)
                console.log(idx)
                watchedArray.results.splice(idx, 1);
                return;
            };
        });
    };
    function deleteFromWatchQ(currentFilm) {
        queueArray.results.forEach(elem => {
            // console.log(elem.id)
            // console.log(currentFilm.id)
            if (elem.id === currentFilm.id) {
                const idx = queueArray.results.indexOf(elem)
                console.log(idx)
                queueArray.results.splice(idx, 1);
                return;
            };
        });
    };