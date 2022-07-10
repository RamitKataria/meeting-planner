import {createSlice} from "@reduxjs/toolkit";
import {addUserAsync} from "./thunk";

const REQUEST_STATE = {
    IDLE: 'IDLE',
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
};