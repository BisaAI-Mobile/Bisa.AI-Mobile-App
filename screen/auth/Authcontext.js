import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from './config';
import { URLREG } from './config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  // const [token, setToken]= useState(null)

  const register = (email, name, password, agree) => {
    setIsLoading(true);
    
    axios
      .post(`${URLREG}/register`, {
        email,
        password,
        name,
        agree
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = async (username, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth`, {
        username,
        password,
      })
      .then(async res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log("simpan:" + userInfo.access_token);
        //program menyimpan session react
        AsyncStorage.setItem("token", JSON.stringify(userInfo));
        // dataToken = AsyncStorage.getItem("token");
        // const token = dataToken.access_token;
        // console.log('hasil:'+token)
        // console.log()
        // const userToken = await AsyncStorage.getItem("token")
        // setUserInfo(userToken)
        console.log('hasil:'+userInfo)
        // console.log('hasil:'+userInfo)
        // console.log(JSON.parse(AsyncStorage.getItem('token')))
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };
  getToken = async () => {
  let tokkk= AsyncStorage.getItem('token')
  return tokkk
  // console.log(token)
  }
  ;
  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};