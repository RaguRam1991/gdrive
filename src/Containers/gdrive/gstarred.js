/**
listing starred files 
 each file has options  
 show name and last modified
 */

/**
 file item
 file icon,name,modified,options
 */

import React from 'react';
import {
  StyleSheet,
  View,  
} from 'react-native';

import GFOptions from './gfoptions';
import { fyles } from './data';
import {  AddNew,ViewType,FList } from './comps';

import { BottomSheet } from 'react-native-elements';

const GStarred = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const toggleBSheet = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <ViewType />
      <FList data={fyles} toggleBSheet={toggleBSheet} />
      <AddNew />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'silver' }}>
        <GFOptions onClose={toggleBSheet} />
      </BottomSheet>
    </View>
  );
};

export default GStarred;