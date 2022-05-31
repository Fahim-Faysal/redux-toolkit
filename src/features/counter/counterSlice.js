import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk('counter/fetchuser',
      async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            return res.data;
      }
)

const initialState = {
      value: 0,
      isLoading: false,
      users: [],
      name: 'fahim faysal siyam',
}

const counterSlice = createSlice({
      name: "counter",
      initialState,
      reducers: {
            increment: (state) => {
                  state.value += 1
            },
            decrement: state => {
                  state.value -= 1
            },
            printName: state => {
                  state.name = 'siyam'
            }
      },
      extraReducers: builder => {
            builder.addCase(fetchUser.pending, (state) => {
                  state.isLoading = true;
            });
            builder.addCase(fetchUser.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.users = action.payload
            });

      }
})

export const { increment, decrement, printName } = counterSlice.actions
export default counterSlice.reducer