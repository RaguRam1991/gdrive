/**
listing search files 
 each file has options  
 show name and last modified
 */

/**
 file item
 file icon,name,modified,options
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {SearchBar} from 'react-native-elements';
import icons from './icons';
import { BottomSheet } from 'react-native-elements';
import GFOptions from './gfoptions';
import { FItem} from './comps';

var results = [
  {
    fname: 'RN_Text_Book',
    ftype: 'xlsx',
    modi: '21 Jul 2018',
  },
  {
    fname: '20210401 profile',
    ftype: 'pdf',
    modi: 'today 2.30 pm',
  },
  {
    fname: 'untitled 2',
    ftype: 'txt',
    modi: '12 Apr 2020',
  },
  {
    fname: '4k abstract wall green',
    ftype: 'jpg',
    modi: '12 Mar',
  },
  {
    fname: 'My presentation 2',
    ftype: 'pptx',
    modi: '8 Dec 2020',
  },
];

const GSearch = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  
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
      <SrchBar />
      <SFList toggleBSheet={toggleBSheet} />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'silver' }}>
        <GFOptions onClose={toggleBSheet} />
      </BottomSheet>
    </View>
  );
};

export default GSearch;

const SrchBar = () => {
  const [search, setSearch] = useState('');

  const styles = StyleSheet.create({
    container: {backgroundColor: 'transparent'},
    inpContainer: {backgroundColor: 'snow'},
  });

  const updateSearch = (srch) => {
    setSearch(srch);
  };

  return (
    <SearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inpContainer}
      placeholder="Search in Drive..."
      onChangeText={updateSearch}
      value={search}
    />
  );
};

const SFList = ({toggleBSheet}) => {
  const styles = StyleSheet.create({
    container: {},
  });

  /*
  const renderItem = ({item}) => {
    return <FItem fyle={item} />;
  };
  */

  const renderItem = ({ item }) => {
    return <FItem toggleBSheet={toggleBSheet} fyle={item} />;
  };

  return (
    <FlatList
      data={results}
      renderItem={renderItem}
      keyExtractor={(item, index) => '' + index}
    />
  );
};