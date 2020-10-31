import {
  DETAIL_PAGE_REQUEST,
  DETAIL_PAGE_SUCCESS,
  DETAIL_PAGE_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const detailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_PAGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case DETAIL_PAGE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case DETAIL_PAGE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default detailPageReducer;
