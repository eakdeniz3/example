import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
const user= localStorage.getItem("user");
const userList= localStorage.getItem("users");

const initialState = {
    isLogin:true,
    loading: false,
    users:JSON.parse(userList),
    userInfo: JSON.parse(user),
    userToken: null, 
    error: null,
    message:null,
    success: false, 
  }
  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

  const login = createAsyncThunk(
    'auth/login',
    async ({ email, password },thunkAPI) => {
      try {
        await delay(3000);
        const state = thunkAPI.getState();
        let users=[];
        if(state.auth.users){
         users=[...state.auth.users];}
         const user=users?.find(user=>user.email==email && user.password==password)
          if(user){
          
              return user;
          }else{
          return  thunkAPI.rejectWithValue("Email adresi veya parola hatalı");
          }
        
      } catch (error) {
      }
    }
  )



  const register = createAsyncThunk(
    'auth/register',
    async ({ email, password,confirmPassword }, thunkAPI) => {
      try {
if(password!==confirmPassword){
    return  thunkAPI.rejectWithValue("Parolalar uyuşmamaktadır.");
}

  const state = thunkAPI.getState();
  console.log(state.auth.users)
  let users=[];
  if(state.auth.users){
   users=[...state.auth.users];}
const user=users?.find(user=>user.email==email)
if(user == null){
    if(users !=null){
        users.push({               
                email,password  
              });
              return users;
    }else{
return [{               
    email  
  }]
    }
   
              
}else{       
          return  thunkAPI.rejectWithValue("kullanıcı zaten var");
         } 
        
      } catch (error) {
      }
    }
  )

  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { 
        logout: (state) => {
        localStorage.removeItem('user')
        state.loading = false
        state.success=false
        state.userInfo = null
        state.userToken = null
        state.error = null
      },
    switcLogin:(state)=>{
        state.isLogin=!state.isLogin
    }
    
    },
    extraReducers: {
      [login.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [login.fulfilled]: (state, { payload }) => {

        state.loading = false
        state.success = true 
        state.userInfo=payload;
        localStorage.setItem("user",JSON.stringify(payload))
      },
      [login.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },



      [register.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [register.fulfilled]: (state, { payload }) => {

        state.loading = false
        state.success = false 
        state.users=payload;
        state.message="Kayıt işlemi başarılı."
        state.isLogin=true;
        localStorage.setItem("users",JSON.stringify(payload))
      },
      [register.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
    },
  })
const { logout,switcLogin } = authSlice.actions
const authSliceReducer=authSlice.reducer;



export {authSliceReducer,login,register,logout,switcLogin}