// import ImagePicker from 'react-native-image-picker';
// import axios from 'axios';
// import React from 'react'

// import {
//   PermissionsAndroid
// } from "react-native";
// import {
//   launchCamera,
//   launchImageLibrary
// } from 'react-native-image-picker';

// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA, {
//         title: "Cool Photo App Camera Permission",
//         message: "Cool Photo App needs access to your camera " +
//           "so you can take awesome pictures.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the Camera");
//     } else {
//       console.log("Camera permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };
// // requestCameraPermission()

// const config = {
//   headers: {
//     Authorization: 'Client-ID f08d16ebbbd26d2',
//   }
// }
// async function uploadImage() {
//   return new Promise((resolve) => {
//     const config = {
//       headers: {
//         Authorization: 'Client-ID 21e459cc3b8bb2c',
//       }
//     }
//     launchImageLibrary({
//         mediaType: 'photo',
//         quality: 1,
//         saveToPhotos: true,
//         includeBase64: true,
//     },
//       res => {
//         const params = new FormData();
//         params.append('image', res)
//         axios.post('https://api.imgur.com/3/image', params, config)
//           .then(res => {
//             resolve( response.data.data.link );
//           })
//         console.log(res);
//       }
//     )
//   })
// }
// export default uploadImage;
