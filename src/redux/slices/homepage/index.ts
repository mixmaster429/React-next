import { createSlice } from '@reduxjs/toolkit';

interface IHomepage {
  popupActive: boolean;
  offerNumber: number;
}

const initialState: IHomepage = {
  popupActive: true,
  offerNumber: 0,
};

const counterSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setPopupActive: (state, action) => {
      state.popupActive = action.payload;
    },
    setOfferNumber: (state, action) => {
      state.offerNumber = action.payload;
    },
  },
});

export const { setPopupActive, setOfferNumber } = counterSlice.actions;

export default counterSlice.reducer;
