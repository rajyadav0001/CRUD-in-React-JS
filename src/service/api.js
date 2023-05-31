import axios from "axios";


const API_URL = "http://localhost:3002/users";
export const addUser = async (data)=>{
      try {
         return await axios.post(API_URL,data);
      } catch (error) {
        console.log("error while calling api", error.message);
      }
}

export const getUsers = async () =>{
   try {
         return await axios.get(API_URL);
   } catch (error) {
      console.log("error while calling getUsers api ", error.message);
   }
}

export const getUser = async (data) =>{
  try {
        return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
     console.log("error while calling getUser api ", error.message);
  }
}
export const EditUser = async (data,id) =>{
  try {
        return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
     console.log("error while calling getUser api ", error.message);
  }
}