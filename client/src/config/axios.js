import axios from 'axios';
import {appConfig} from "./config";


const instance = axios.create({
   baseURL: appConfig.apiBaseUrl,
   timeout: 1000,
   headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
   }
});


export {instance};
