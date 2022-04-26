import { useEffect, useState } from 'react';
import { axiosMainUser } from './urls';

export const ApiCalls = () => {
  const [key, setKey] = useState('');
  const [token, setToken] = useState('');

  // TODO: figure out better solution for gradual api calls
  useEffect(() => {
    // get api key

    // const postTenantApi = async () => {
    //   const url = '/tenants';

    //   const body = {
    //     name: 'ivca',
    //     password: 'holes',
    //   };

    //   const headers = {
    //     'Content-Type': 'application/json',
    //   };

    //   try {
    //     const res = await axiosMainUser.post(url, body, { headers });
    //     console.log(res.data.apiKey);
    //     setKey(res.data.apiKey);
    //   } catch (err) {
    //     console.warn(`An error "${err}" has occured during postTenantApi()`);
    //     throw err;
    //   }
    // };

    // get access token

    const postLoginApi = async () => {
      const url = '/login';

      const body = {
        username: 'ivca',
        password: 'holes',
      };

      const headers = {
        'Content-Type': 'application/json',
        // 'X-API-KEY': `${key}`,
        'X-API-KEY': '38f9067a-c5a4-412e-b3ef-5eeb189447bf',
      };

      try {
        const token = await axiosMainUser.post(url, body, { headers });
        console.log(token.data.access_token);
        setToken(token.data.access_token);
      } catch (err) {
        console.warn(`An error "${err}" has occured during postLoginApi()`);
      }
    };
    // postTenantApi();
    postLoginApi();
  }, []);
};
