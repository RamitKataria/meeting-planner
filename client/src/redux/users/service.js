import {getAuth} from "firebase/auth";
import {getAuthHeader} from "../../authHeader";

const url = 'http://localhost:3001/users/';

export const getMeetingsBasedOnUserId = async (userId) => {
  const link =  url + userId + "/meetings";
  const response = await fetch(link, {
    method: 'GET',
    headers: {
      'Authorization': await getAuthHeader()
    }
  });
  return response.json();
};

export const getUserBasedOnUserId = async (userId) => {
  const link = url + userId;
  const response = await fetch(link, {
    method: 'GET',
    headers: {
      'Authorization': await getAuthHeader()
    }
  });
  return response.json();
};

export const deleteUserBasedOnUserId = async (userId) => {
  const link = url + userId;
  const response = await fetch(link, {
    method: 'DELETE',
    headers: {
      'Authorization': await getAuthHeader()
    }
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};

export const updateUserBasedOnUserId = async (content) => {
  const link = url + content.userId;
  const response = await fetch(link, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': await getAuthHeader()
    },
    body: JSON.stringify(content.updateContents)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};

export default {
  getMeetingsBasedOnUserId: getMeetingsBasedOnUserId,
  getUserBasedOnUserId: getUserBasedOnUserId,
  deleteUserBasedOnUserId: deleteUserBasedOnUserId,
  updateUserBasedOnUserId: updateUserBasedOnUserId
};