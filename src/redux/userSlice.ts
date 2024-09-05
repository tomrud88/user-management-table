import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, FullUser, UserState} from '../types';
import { RootState } from "./store";



const initialState: UserState = {
    users: [],
    filters: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
    status: 'idle'
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json: FullUser[] = await response.json();
    return json.map(({ name, username, email, phone }) => ({
        name, username, email, phone
    }))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<{ field: keyof User; value: string }>) {
            state.filters[action.payload.field] = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'idle';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'failed';
        })
    }
})

export const { setFilter } = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;
export const selectFilters = (state: RootState) => state.user.filters;
export const selectStatus = (state: RootState) => state.user.status
 export default userSlice.reducer;