import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from '../Slices/ticketSlice';

const ticketStore = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export {ticketStore};
