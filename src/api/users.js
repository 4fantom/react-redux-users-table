import axios from "axios";

export const UsersClient = axios.create({
  baseURL: "https://63d978e0baa0f79e09bcbc89.mockapi.io/api/v1/users",
});

export const getUsers = async () => {
  return await UsersClient.get("/").then((resp) => resp.data);
};

export const deleteUserById = async (id) => {
  return await UsersClient.delete(`/${id}`).then((resp) => resp.data);
};

export const updateUserById = async (id, body) => {
  return await UsersClient.put(`/${id}`, body).then((resp) => resp.data);
};

export const addNewUser = async (body) => {
  return await UsersClient.post(`/`, body).then((resp) => resp.data);
};
