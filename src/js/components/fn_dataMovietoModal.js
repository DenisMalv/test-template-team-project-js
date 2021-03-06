export { modalWindowMarkup };

import {modalGenresMarkup } from './genres';

import folder from '../../images/placeholder.bmp'
import { addListenerOnGalleryCardButtons} from './modal'

const refs = {
  gallery: document.querySelector('.gallery-list'),
  modal: document.querySelector('.modal__wrapper'),
};

function modalWindowMarkup({
  poster_path,
  original_title,
  title,
  vote_average,
  vote_count,
  popularity,
  genre_ids,
  overview,
}) {
  const markupFilm = `
            <div class="modal__image-wrapper">
                <a class="js-teaser" href="#">

                    <img class="modal__image" src="${poster_path?'https://image.tmdb.org/t/p/w500'+poster_path:folder}" alt="original_title" width="396 "/>

                </a>
            </div>
            <div class="modal__info-wrapper">
                <h2 class="modal__film-titel">${title?title:original_title}</h2>
                <table>
                    <tr class="modal__param">
                        <td class="modal__param-titel">Vote / Votes</td>
                        <td class="modal__param-value">
                            <div class="modal__film-votes"><span class="param__value-vote">${vote_average?vote_average:'&#129335;&#8205;&#9794;&#65039;'}</span> / <span
                                    class="param__value-votes">${vote_count?vote_count:'&#129335;&#8205;&#9792;&#65039;'}</span></div>
                        </td>
                    </tr>

                    <tr class="modal__param">
                        <td class="modal__param-titel">Popularity</td>
                        <td class="modal__param-value">${popularity}</td>
                    </tr>
                    <tr class="modal__param">
                        <td class="modal__param-titel">Original Title</td>
                        <td class="modal__param-value ">${title?title:'no information'}</td>
                    </tr>
                    <tr class="modal__param">
                        <td class="modal__param-titel">Genre</td>
                        <td class="modal__param-value">${modalGenresMarkup(genre_ids)?modalGenresMarkup(genre_ids):'no information'}</td>
                    </tr>
                </table>
                <span class="modal__film-owervier">ABOUT</span>
                <div class="film__owervier">
                    <p class="modal__film-owervier-text">${overview?overview:'no information'}</p>
                </div>

                <div class="modal__buttons">
                    <button name="button-watched" type="submit" class="modal__button watched js-button-add-watched"><span class="add-button-watched-text"></span></button>
                    <button name="button-queue" type="submit" class="modal__button queue js-button-add-queue"><span
                            class="add-button-queue-text"></span></button>
                </div>
            </div>
        </div>`;
  refs.modal.innerHTML = '';
    refs.modal.insertAdjacentHTML('beforeend', markupFilm);
    
    addListenerOnGalleryCardButtons()
}
