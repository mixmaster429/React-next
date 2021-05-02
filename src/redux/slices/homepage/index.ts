import { createSlice } from '@reduxjs/toolkit';

interface IHomepage {
  popupActive: boolean;
}

const initialState: IHomepage = {
  popupActive: true,
};

const counterSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setPopupActive: (state, action) => {
      state.popupActive = action.payload;
    },
  },
});

export const { setPopupActive } = counterSlice.actions;

export default counterSlice.reducer;
