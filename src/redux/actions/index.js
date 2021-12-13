import axios from "axios";
import types from "./types.js";
import { URL_BANDS, URL_ALBUMS } from "../../constantUrl/index";

/**
 * This function returns bands by gender
 * @param {string} genre is the genre by which to filter
 * @returns
 */
export function getBandsByGenre(genre) {
  return async function (dispatch) {
    try {
      let res;
      if (genre.length) res = await axios(`${URL_BANDS}?genreCode=${genre}`);
      else res = await axios(URL_BANDS);
      dispatch({ type: types.GET_BANDS_BY_GENRE, payload: res.data });
    } catch (err) {
      alert(err);
    }
  };
}

/**
 * This function adds a new user
 * @param {object} user contains "username" and "password" fields
 * @returns
 */
export function addUser(user) {
  return { type: types.ADD_USER, payload: user };
}

/**
 * This function returns albums of a band
 * @param {number} bandId
 * @returns
 */
export function getAlbums(bandId) {
  return async function (dispatch) {
    try {
      let res = await axios(`${URL_ALBUMS}?bandId=${bandId}`);
      dispatch({ type: types.GET_ALBUMS, payload: res.data });
    } catch (err) {
      alert(err);
    }
  };
}

/**
 * This function searches band by name
 * @param {string} name
 * @returns
 */
export function searchBand(name) {
  return async function (dispatch) {
    try {
      let res = await axios(`${URL_BANDS}?name=${name}`);
      dispatch({ type: types.SEARCH_BAND, payload: res.data });
    } catch (err) {
      alert(err);
    }
  };
}

/**
 * This function sorts bands by name or year of creation
 * @param {string} value define ascending or descending order
 * @param {string} sortBy define order by name or year
 * @returns
 */
export function sortData(value, sortBy) {
  let obj = { sort: sortBy, order: value };
  return { type: types.SORT_DATA, payload: obj };
}
