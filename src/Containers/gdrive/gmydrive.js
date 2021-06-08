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
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  BackHandler,
} from 'react-native';

import icons from './icons';
import GFOptions from './gfoptions';
import { fyles } from './data';
import { FItem,AddNew,ViewType } from './comps';

import { FAB, BottomSheet, ListItem } from 'react-native-elements';

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
      <FList toggleBSheet={toggleBSheet} />
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

const FList = ({ toggleBSheet }) => {
  const styles = StyleSheet.create({
    container: {
      //backgroundColor: 'yellow',
    },
    sep: {
      alignSelf: 'center',
      height: 1,
      width: '90%',
      backgroundColor: 'silver',
      borderRadius: 0.5,
    },
  });

  const renderItem = ({ item }) => {
    return <FItem toggleBSheet={toggleBSheet} fyle={item} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={fyles}
      renderItem={renderItem}
      keyExtractor={(item, index) => '' + index}
    />
  );
};