// //api.Services.ts
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// import api from "./apiClient";
// const EndPoint = {
//     login: 'doner/auth/login',
//     signUp: 'doner/auth/signup',
//     get_user: 'user/profile',
//     // get_otp: 'doner/auth/send-doner-otp',
//     get_otp: `${api.baseURL}doner/auth/send-doner-otp`,
//     verify_otp: 'verify-otp',
//     reset_password: 'doner/auth/reset-pass',
//     get_all_ngo: 'getallNgos?',
//     ngo_signUp: 'ngo/auth/signup',
//     update_ngo_profile: 'update-ngo/?',

//   };


// export { EndPoint };

// api.Services.ts

import api from "./apiClient";

// You could extract the baseURL from the api client if needed
const baseURL = api.defaults.baseURL || 'https://noblegivingbackend.azurewebsites.net/';

const EndPoint = {
    login: 'doner/auth/login',
    signUp: 'doner/auth/signup',
    get_user: 'user/profile',
    get_otp: 'doner/auth/send-doner-otp',  // No need to concatenate with baseURL
    verify_otp: 'verify-otp',
    reset_password: 'doner/auth/reset-pass',
    get_all_ngo: 'getallNgos?',
    ngo_signUp: 'ngo/auth/signup',
    update_ngo_profile: 'update-ngo/?',
};

export { EndPoint, baseURL };