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
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

import GFOptions from './gfoptions';
import { fyles } from './data';
import { FItem, AddNew,ViewType } from './comps';

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
      <FList toggleBSheet={toggleBSheet} />
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

const FList = ({ toggleBSheet }) => {
  const styles = StyleSheet.create({
    container: {

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
