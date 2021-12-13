import types from "../actions/types";

const initialState = {
  bands: [],
  users: [{ username: "improvein", password: "1234" }],
  albums: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BANDS_BY_GENRE:
      return {
        ...state,
        bands: action.payload,
      };
    case types.ADD_USER:
      let find = state.users.find(
        (user) => user.username === action.payload.username
      );
      if (find) {
        alert("There is already a registered user with this data");
        return {
          ...state,
        };
      } else {
        alert("Successful registration");

        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }
    case types.GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case types.SEARCH_BAND:
      return {
        ...state,
        bands: action.payload,
      };
    case types.SORT_DATA:
      let { sort, order } = action.payload;
      let sorted =
        order === "asc"
          ? state.bands.sort(function (a, b) {
              if (a[sort] > b[sort]) {
                return 1;
              }
              if (b[sort] > a[sort]) {
                return -1;
              }
              return 0;
            })
          : state.bands.sort(function (a, b) {
              if (a[sort] > b[sort]) {
                return -1;
              }
              if (b[sort] > a[sort]) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        bands: [...sorted],
      };
    default:
      return state;
  }
}
