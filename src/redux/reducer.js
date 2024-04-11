import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  users: [],
  loading: false,
  error: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addUser(state,{payload}){
       const filteredUsers = state.users.filter(user => user.id !== payload.id);
       state.users = [...filteredUsers,payload].sort((a,b)=>b.id-a.id);
    },
    deleteUser(state,{payload}){
        const filteredUsers = state.users.filter(user => !payload.includes(user.id));
        console.log('payload:',filteredUsers)
        state.users = filteredUsers.length>0?[...filteredUsers]:[];
     }
  },
});
export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure ,addUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;
