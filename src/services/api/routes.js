import { getRes } from "./calls";
export const BASE_URI = "https://stormy-reef-43017.herokuapp.com";
// export const BASE_URI = "http://localhost:3001";
export const ALL_STATES = `${BASE_URI}/states`;
export const ALL_SEASONS = `${BASE_URI}/seasons`;
// const seasons_path = "/seasons";
// const states_path = "/states";

// export const getSeasons = (setSeasons, setSeason) => {
//   getData(BASE_URI + seasons_path, "seasonName", setSeasons, setSeason);
// };

// export const getStates = (setStates, setState) => {
//   getData(BASE_URI + states_path, "stateName", setStates, setState);
// };

export const getProduce = (setProduce, state, season) => {
  getRes(`${BASE_URI}/${state}/${season}`, "fruits", setProduce);
};
