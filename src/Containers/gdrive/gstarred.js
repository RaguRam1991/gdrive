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
import { FItem, AddNew } from './comps';

import { BottomSheet } from 'react-native-elements';
//import { FAB, BottomSheet, ListItem } from 'react-native-elements';

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

const ViewType = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text> Name ↑ </Text>
      <Image
        style={{ height: 30, width: 30 }}
        source={{
          uri:
            'https://cdn0.iconfinder.com/data/icons/rounded-basics/24/svg-rounded_grid-512.png',
        }}
      />
    </View>
  );
};

/*  
  icon,name,option  
  last modified
  */

/*const FItem = ({ fyle, toggleBSheet }) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal:20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems: "center", flexDirection: 'row' }}>
        <Image
          style={{ height: 20, width: 20 }}
          source={{ uri: icons[fyle.ftype], }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ color: 'black' }}>{fyle.fname}</Text>
          <Text style={{ marginTop: 5, fontSize: 12, color: 'grey' }}>
            Modified {fyle.modi}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleBSheet}>
        <Image
          style={{ marginHorizontal: 5, height: 15, width: 15 }}
          source={require('./more-icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};*/

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
