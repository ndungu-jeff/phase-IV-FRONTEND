import { backendAxios } from "../axios";

export const registerClient = async (
  full_name,
  username,
  phone_number,
  password,
  password_confirmation,
  email,
) => {
  return await backendAxios.post("/clients", {
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
    email,
  });
};

export const fetchClient = async (client_id) => {
  return await backendAxios.get(`/clients/${client_id}`);
};

export const allHouses = async () => {
  return await backendAxios.get("/houses");
};
export const clientHouses = async (client_id) => {
  return await backendAxios.get(`/client_houses/houses/${client_id}`);
};
export const houseDeatils = async (house_id) => {
  return await backendAxios.get(`/houses/${house_id}`);
};
export const bookHouse = async (client_id, house_id, owner_id) => {
  return await backendAxios.post(`/client_houses`, {
    client_id,
    house_id,
    owner_id,
  });
};

export const editClientAccount = async (
  client_id,
  full_name,
  username,
  phone_number,
  password,
  password_confirmation,
  email,
  ) => {
  return await backendAxios.patch(`/clients/${client_id}`, {
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
    email,
  });
};
