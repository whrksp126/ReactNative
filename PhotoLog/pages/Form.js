import React from 'react'
import styled from 'styled-components/native'
import {  PermissionsAndroid} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const Title = styled.Text`
  font-size: 36px;
`;

const Button = styled.Button``;

const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  padding: 4px;
  border: 1px solid #e5e5e5;
`;

function Component() {
  // const [imageUri, setImageUri] = React.useState('');
  // const [keyword, setKeyword] = React.useState('')

  // const openCamera = () => {
  //   let options={
  //     storageOption : {
  //       path: 'images',
  //       mediaType: 'photo',
  //       quality: 1,

  //     },
  //     includeBase64: true,
  //   };

  //   launchCamera(options, response => {
  //     console.log('Response =', response);
  //     if (response.didCancel){
  //       console.log('User cancelled image picker');
  //     } else if (response.error){
  //       console.log('ImagePicker Error:', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button:', response.customButton);
  //     } else {
  //       const source = {uri: 'data:image/jpeg;base64' + response.base64 };
  //       setImageUri(source);
  //     }
  //   });
  // }

  // const openGallery = () => {
  //   let options={
  //     storageOption : {
  //       mediaType: 'photo',
  //       path: 'images',
  //     },
  //     includeBase64: true,
  //   };

  //   launchImageLibrary(options, response => {
  //     console.log('Response =', response);
  //     if (response.didCancel){
  //       console.log('User cancelled image picker');
  //     } else if (response.error){
  //       console.log('ImagePicker Error:', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button:', response.customButton);
  //     } else {
  //       const source = {uri: 'data:image/jpeg;base64' + response.base64 };
  //       setImageUri(source);
  //     }
  //   });
  // }

 
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>

      <Button title="Open Camera" onPress={ //openCamera
        async () => {
          await launchCamera({
            mediaType:'photo', 
            quality:1, 
            saveToPhotos: true
          }, 
          response => {
            requestCameraPermission
              .then
                if (response) {
                console.log('response',response);
          
        
      }})}}/>

      {/* <Image 
        source={imageUri}
        style={{ 
          height: 100,
          width: 100,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: 'black',
        }}
      />

      <Input 
        placeholder="#해시태그" 
        value={keyword} 
        onChangeText={value => setKeyword(value)} 
      />
      <Button title="저장" onPress={() => {}}/> */}
    </>
  )
}

export default Component
