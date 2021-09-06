import React from 'react'
import styled from 'styled-components/native'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from "react-native";
import storage from '../net/storage';

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
  const [hashtags, setHashtags] = React.useState('');
  const [imageUri, setImageUri] = React.useState(null);

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

  const openCamera = () => {
    // requestCameraPermission(),

    launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
      includeBase64: true,
    }, res => {
      console.log('res', res);
      if(res.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const source = {uri: res.assets[0].uri };
        console.log('source', source)
        setImageUri(source)
      }
    })
  };

  return (
    <>
      <Button 
        title="이미지 선택" 
        onPress={openCamera} 
      />
        <Image source={imageUri}/>
      <Input 
        placeholder="#해시태그"
        value={ hashtags }
        onChangeText={ value => setHashtags( value ) }
      />
      <Button 
        title="저장" 
        onPress={ () => {console.log(imageUri)
          const uri = imageUri.uri
          storage.append( {
            uri,
            hashtags,
          })
          .then( () => {
            props.navigation.goBack();
          });
        }}
      />
    </>
  )
}

export default Component