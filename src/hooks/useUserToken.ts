import axios from 'axios';
import { UserCredential } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { URL } from '../api/Api';

type UserProps = UserCredential | undefined;

const useUserToken = (user: UserProps) => {
   const [token, setToken] = useState('');
   useEffect(() => {
      const getToken = async () => {
         const info = user?.user;
         const email = info?.email;
         const userInfo = {
            email,
            name: info?.displayName,
         };

         if (email) {
            const { data } = await axios.put(`${URL}/users/${email}`, userInfo);
            // set token to state to get access
            setToken(data.accessToken);
            localStorage.setItem('accessToken', data.accessToken);
         }
      };
      getToken();
   }, [user]);
   return [token];
};

export default useUserToken;
