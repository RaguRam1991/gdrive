import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {ZText} from './comps';

const GComputer = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    img: {
      height: 150,
      width: 150,
    },
  });

  const imgsync = 'https://image.flaticon.com/icons/png/512/59/59884.png';
  const info = "To Sync folders on your computer with Google Drive, install Backup and Sync on your computer.";

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgsync }} style={styles.img} />
      <View style={{ alignItems: 'center', width: '80%' }}>
        <ZText style={{ fontSize: 18 }}>No Computers Syncing</ZText>
        <ZText style={{ marginTop: 10, marginBottom: 3, textAlign: "center" }}>
          {info}
        </ZText>
        <TouchableOpacity>
          <Text style={{ color: 'blue' }}>LEARN MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GComputer;
