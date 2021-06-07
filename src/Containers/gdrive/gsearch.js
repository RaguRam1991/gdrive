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
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:"black",
      //alignItems: 'center',
      //justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <SrchBar />
      <SFList />
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

const SFList = () => {
  const styles = StyleSheet.create({
    container: {},
  });

  const renderItem = ({item}) => {
    return <FItem fyle={item} />;
  };

  return (
    <FlatList
      data={results}
      renderItem={renderItem}
      keyExtractor={(item, index) => '' + index}
    />
  );
};

/*  
   icon,name,option  
   last modified
   */
const FItem = ({fyle}) => {
  const fimg =
    'https://i.pinimg.com/originals/2b/a7/7d/2ba77de4c93153606635928e5686cc44.png';

  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <Image
          style={{height: 20, width: 20}}
          source={{uri: icons[fyle.ftype] || fimg}}
        />
        <View style={{marginLeft: 15}}>
          <Text style={{color: 'black'}}>{fyle.fname}</Text>
          <Text style={{marginTop: 5, fontSize: 12, color: 'grey'}}>
            Modified {fyle.modi}
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <Image
          style={{height: 15, width: 15}}
          source={require('./more-icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
