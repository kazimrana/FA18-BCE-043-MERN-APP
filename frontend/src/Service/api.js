import axios from "axios";

const url = "http://localhost:5000";

export const addProduct = async (data) => {
  return await axios.post(`${url}/addProduct`, data);
};

export const addForm = async (data) => {
  return await axios.post(`${url}/addForm`, data);
};

export const getForm = async () => {
  return await axios.get(`${url}/show`);
};

export const delForm = async (id) => {
  return await axios.post(`${url}/delForm`,id)
}

export const Updateapi = async (FormData) => {
  return await axios.put(`${url}/updateform`, FormData );
}