/**
listing files 
 each file has options  
 show name and last modified
 */

/**
 file item
 file icon,name,modified,options
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,    
} from 'react-native';

import GFOptions from './gfoptions';
import { fyles } from './data';
import { AddNew,ViewType,FList } from './comps';

import {  BottomSheet } from 'react-native-elements';

const GMyDrive = () => {
  const [isVisible, setIsVisible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:"black",
      //alignItems: 'center',
      //justifyContent: 'center',
    },
  });

  const toggleBSheet = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <ViewType />
      <FList data={fyles} toggleBSheet={toggleBSheet} />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{
          backgroundColor: 'silver' /*'rgba(0.5, 0.25, 0, 0.5)'*/,
        }}>
        <GFOptions onClose={toggleBSheet} />
      </BottomSheet>
      <AddNew />
    </View>
  );
};

export default GMyDrive;