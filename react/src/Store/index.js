import { configureStore } from '@reduxjs/toolkit';
import HeaderReducer from "./Slice/HeaderSlice";
import  WishReducer  from './Slice/AllWishSlice';
import OneWishReducer from './Slice/OneWishSlice';
import InActiveReducer from './Slice/InActiveSlice';
import ActiveReducer from "./Slice/ActiveSlice";
import BenevolentReducer from "./Slice/BenevolentSlice";
import ActivityReducer from "./Slice/ActivitySlice"
const initialState = {
  sidebarShow:window?.innerWidth>=768? true:false,

}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
      default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    Header:HeaderReducer,
    Wish:WishReducer,
    OneWish:OneWishReducer,
    InActive:InActiveReducer,
    Active:ActiveReducer,
    Benevolent:BenevolentReducer,
    changeState:changeState,
    Activity:ActivityReducer,
  }
})

export {store};
