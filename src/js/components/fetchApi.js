import axios from 'axios';

export const options = {
  queryTestValidator: '',
  query: '',
  pageNumberTest: 1,
  pageNumber: 1,
  pageNumberSlider: 1,
  pageItemCount: 20,
  allGenresList: [],
  genresId: [],
  yearId: [],
  maxPage: 0,
  trand: 'day',
  language:'ru',
  // listofFilmforSlider:[]
};


console.log(!JSON.parse(localStorage.getItem('listofFilmforSlider')));

// const listofFilmforSliderSet = localStorage.setItem('listofFilmforSlider',JSON.stringify([]))
// const listofFilmforSliderGet = JSON.parse(localStorage.getItem('listofFilmforSlider'))


// async function fetchMovie() {
//   const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?`;
//   const params = {
//     params: {
//       api_key: '6dae1a863e182d2e5c972909bcd1e575',
//       language: `en-US`,
//       query: options.query,
//       page: options.pageNumber,
//     },

//   };
//   const { data } = await axios.get(SEARCH_URL, params);
//   return data;

// }

async function fetchMovie() {
  // const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?`;
  // const params = {
  //   params: {
  //     api_key: '6dae1a863e182d2e5c972909bcd1e575',
  //     language: `en-US`,
  //     query: options.query,
  //     page: options.pageNumber,
  //   },

  // };
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6dae1a863e182d2e5c972909bcd1e575&language=${options.language}&append_to_response=images&include_image_language=${options.language},null&query=${options.query}&page=${options.pageNumber}`);
    return data;
  } catch (error) {
    console.log(error);
  }

}

async function fetchGenres() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=6dae1a863e182d2e5c972909bcd1e575&language=${options.language}&append_to_response=images&include_image_language=${options.language},null`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchTrandingMovie() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${options.trand}?api_key=6dae1a863e182d2e5c972909bcd1e575&&page=${options.pageNumber}&language=${options.language}&append_to_response=images&include_image_language=${options.language},null`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}


// async function fetchTrandingMovieForSlider() {
//   try {
//     // options.language = 'ru-RU'
//     if (JSON.parse(localStorage.getItem('listofFilmforSlider'))) {
//       return
//     }
//     localStorage.setItem('listofFilmforSlider', JSON.stringify({ page:1, results:[],total_pages:0}))
    
//     for (let pageNum = 0; pageNum <= 5, pageNum += 1;) {
      
//       if (options.pageNumberSlider >= 5) {
//         options.pageNumberSlider = 1
//         return
//       }
//       let listofFilmforSliderInLS = JSON.parse(localStorage.getItem('listofFilmforSlider'))
//       console.log('options.language',options.language);
//       const { data } = await axios.get(
//         `https://api.themoviedb.org/3/trending/movie/${options.trand}?api_key=6dae1a863e182d2e5c972909bcd1e575&&page=${options.pageNumberSlider}&language=${options.language}&append_to_response=images&include_image_language=${options.language},null`,
//       );
//       listofFilmforSliderInLS = {page:options.pageNumber, results:[...listofFilmforSliderInLS.results, ...data.results], total_pages:data.total_pages}
//       localStorage.setItem('listofFilmforSlider', JSON.stringify(listofFilmforSliderInLS))
//       options.pageNumberSlider += 1
      
//       console.log('listofFilmforSliderInLS', listofFilmforSliderInLS);
//       console.log('pageNum',pageNum)
//       console.log('options.pageNumberSlider',options.pageNumberSlider)
//       console.log('options.pageNumber',options.pageNumber)
       
//     }
//     console.log('я закончил ')
//    return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function fetchTrandingMovieForSlider() {
  try {
    
    const { data } = await axios.get(
      // https://api.themoviedb.org/3/movie/top_rated?api_key=11111111111111111&language=en-US&page=1
        `https://api.themoviedb.org/3/movie/popular?api_key=6dae1a863e182d2e5c972909bcd1e575&page=${options.pageNumber}&language=${options.language}&append_to_response=images&include_image_language=${options.language},null`,
      );
      localStorage.setItem('listofFilmforSlider1',JSON.stringify(data))
       
    console.log('я закончил ')
   return data;
  } catch (error) {
    console.log(error);
  }
}



// ===================old discover year =================
async function discoverGenres() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=6dae1a863e182d2e5c972909bcd1e575&language=${options.language}&append_to_response=images&include_image_language=${options.language},null&sort_by=popularity.desc&include_adult=false&include_video=false&page=${options.pageNumber}&primary_release_year=${options.yearId}&with_genres=${options.genresId}&with_watch_monetization_types=flatrate`,
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function fetchTeaser(idMovie) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=6dae1a863e182d2e5c972909bcd1e575&language=${options.language}&append_to_response=videos&include_video_language=${options.language},null`,
    );
      console.log('teaser',data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { fetchMovie, fetchGenres, discoverGenres, fetchTrandingMovie,fetchTrandingMovieForSlider, fetchTeaser,fetchMoviesTestValidator};


async function fetchMoviesTestValidator() {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6dae1a863e182d2e5c972909bcd1e575&language=${options.language}&append_to_response=images&include_image_language=${options.language},null&query=${options.queryTestValidator}&page=${options.pageNumber}`);
    return data;
  } catch (error) {
    console.log(error);
  }

}