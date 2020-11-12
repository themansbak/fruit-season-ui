import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { getAllData } from "../../services/api/calls";
import { BASE_URI } from "../../services/api/routes";
import { useSelector } from "react-redux";
import { selectAllStates } from "../states/statesSlice";

const produceAdapter = createEntityAdapter();

export const fetchProduce = createAsyncThunk(
  "produce/fetchProduce",
  async (produce) => {
    const response = await getAllData(BASE_URI, produce.state, produce.season);
    const image_base_uri =
      "https://raw.githubusercontent.com/markvong/seasonal-fruits/master/api/src/data/fruit_images";

    const newResponse = response.fruits.map((fruit, idx) => {
      return {
        id: idx,
        name: fruit["name"],
        description: fruit["description"],
        image: `${image_base_uri}/${fruit["name"]
          .toLowerCase()
          .replace("'", "")
          .replace(/(\s|-)/g, "_")}.jpg`
      };
    });
    console.log(newResponse);
    return newResponse;
  }
);

const produceSlice = createSlice({
  name: "produce",
  initialState: produceAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchProduce.fulfilled]: produceAdapter.setAll
  }
});

export default produceSlice.reducer;

export const {
  selectAll: selectAllProduce,
  selectById: selectProduceById
} = produceAdapter.getSelectors((state) => state.produce);
