import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities = createAsyncThunk('get_cities', async ()=> {
    try{
        const response = await axios.get('http://localhost:7000/api/cities?name=')
        return {
            cities: response.data.cities
        }
    } catch (error){
        console.log(error);
    }
})

export const filter_cities = createAsyncThunk('filter_cities', async (obj)=> {
    try{
        const response = await axios.get(`http://localhost:7000/api/cities?name=${obj.name}`)
        return {
            cities: response.data.cities
        }
    } catch (error){
        console.log(error);
        
        return {
            cities: []
        }
    }
})