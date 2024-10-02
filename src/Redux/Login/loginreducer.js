import { LOADING, PASSWORDERROR, SUCCESS } from "./actiontype";

const initialState = {
  ISLOGIN: false,
  isLoading: false,
  data: null,
  isError: false,
};

export const loginreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        ISLOGIN: true,
        data: payload,
      };
    case PASSWORDERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
