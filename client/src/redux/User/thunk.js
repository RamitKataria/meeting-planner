import { createAsyncThunk } from '@reduxjs/toolkit';
import {actionTypes} from './actionTypes';
import userService from './userService';

export const addUserAsync = createAsyncThunk(
    actionTypes.ADD_USER,
    async({userName,email,Password})=>{
        return await userService.addUser(userName,email,Password)
    }
);

export const loginAsync = createAsyncThunk(
    actionTypes.Login,
    async({email,Password})=>{
        return await userService.userLogin(email,Password);
    }
)