import {getAuth} from "firebase/auth";

export const getMeetingsBasedOnUserId = async (userId) => {
  const link = 'http://localhost:3001/users/' + userId + "/meetings";
  const response = await fetch(link, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + await getAuth().currentUser.getIdToken()
    }
  });
  return response.json();
};

export const getUserBasedOnUserId = async (userId) => {
  const link = 'http://localhost:3001/users/' + userId;
  const response = await fetch(link, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + await getAuth().currentUser.getIdToken()
    }
  });
  return response.json();
};

export const deleteUserBasedOnUserId = async (userId) => {
  const link = 'http://localhost:3001/users/' + userId;
  const response = await fetch(link, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + await getAuth().currentUser.getIdToken()
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
  const link = 'http://localhost:3001/users/' + content.userId;
  const response = await fetch(link, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + await getAuth().currentUser.getIdToken()
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