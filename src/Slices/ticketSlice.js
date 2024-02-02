import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    Gcount: 1,
    Vcount: 0,
  },
  reducers: {
    Gincrement: (state) => {
      state.Gcount += 1;
    },
    Gdecrement: (state) => {
      state.Gcount -= 1;
    },
    Vincrement: (state) => {
      state.Vcount += 1;
    },
    Vdecrement: (state) => {
      state.Vcount -= 1;
    },
    setCount: (state, action) => {
      state.Gcount = action.payload;
    },
  },
});

export const { Gincrement, Gdecrement, Vdecrement, Vincrement, setCount } = ticketSlice.actions;
export default ticketSlice.reducer;
