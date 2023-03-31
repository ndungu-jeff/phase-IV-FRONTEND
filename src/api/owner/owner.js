import { backendAxios } from "../axios";

export const registerOwner = async (
  full_name,
  username,
  phone_number,
  password,
  password_confirmation,
) => {
  return await backendAxios.post("/owners", {
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
  });
};

export const fetchOwner= async (owner_id) => {
  return await backendAxios.get(`/owners/${owner_id}`);
};

export const logInOwner = async (
  username,
  password
) => {
  return await backendAxios.post("/login", {
    username,
    password
  });
};

export const createHouse = async (
  name,
  location,
  description,
  price,
  image_url,
  owner_id,
) => {
  return await backendAxios.post("/houses", {
    name,
    location,
    description,
    price,
    image_url,
    owner_id
  });
};

export const ownerHouses = async (owner_id) => {
  return await backendAxios.get(`/owner-houses/${owner_id}`);
};
// TODO: REMOVE HARDCODED OWNER_ID
// let owner_id = 2;
export const myClients = async (owner_id) => {
  return await backendAxios.get(`/client_houses/clients/${owner_id}`);
};
export const riderDetails = async (rider_id) => {
  return await backendAxios.get(`/riders/${rider_id}`);
};

export const editOwnerAccount = async (
  owner_id,
  full_name,
  username,
  phone_number,
  password,
  password_confirmation,
  ) => {
  return await backendAxios.patch(`/owners/${owner_id}`, {
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
  });
};

export const logOut = async () => {
  return await backendAxios.delete("/logout");
};
