import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
        //   SESSION STORAGE GET
        // const tokenString = sessionStorage.getItem('token');
        //   LOCAL STORAGE GET
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };
//   const [token, setToken] = useState();
     const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    //   SESSION STORAGE SET
    // sessionStorage.setItem('token', JSON.stringify(userToken));
    //   LOCAL STORAGE SET
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}