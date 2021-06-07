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
import { FItem,AddNew } from './comps';

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
      padding: 10,
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
          source={{ uri: icons[fyle.ftype] }}
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
          style={{ marginHorizontal: 10, height: 15, width: 15 }}
          source={require('./more-icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};*/

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

/*const AddNew = () => {
  const [isVisible, setIsVisible] = useState(false);

  const uimg = "https://cdn.iconscout.com/icon/free/png-512/add-new-create-plus-insert-append-interface-2503.png";

  React.useEffect(() => {
    const backAction = () => {
      console.log('fired');
      setIsVisible(false);
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const list2 = [
    { title: 'Folder', img: 'https://img.icons8.com/ios/452/opened-folder.png' },
    { title: 'Upload', img: 'https://img.icons8.com/pastel-glyph/2x/upload.png' },
    {
      title: 'Scan', img: 'https://static.thenounproject.com/png/1935395-200.png',
    },
    { title: 'Google Docs', img: icons.docs },
    { title: 'Google Sheets', img: icons.xlsx },
    {
      title: 'Google Slides', img:
        'https://e7.pngegg.com/pngimages/500/650/png-clipart-google-docs-google-slides-google-drive-presentation-slide-g-suite-google-angle-text.png',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      alignSelf: 'flex-end',
      bottom: 20,
      right: 20,
      height: 50,
      width: 50,
      borderRadius: 25,
      //elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      position: 'absolute',
    },
    close: {
      margin: 10,
      marginBottom: 0,
      alignSelf: 'flex-end',
      padding: 5,
    },
    bsheet: {
      backgroundColor: 'white',
    },
    uitems: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    item: {
      alignItems: 'center',
      margin: 20,
    },
    itemImg: {
      height: 25,
      width: 25,
    },
    itemIcon: {
      height: 50,
      width: 50,
      borderRadius: 25,
      borderWidth: 0.5,
      borderColor: 'silver',
      alignItems: 'center',
      justifyContent: "center",
      //padding: 20,
    },
    itemText: {
      marginTop: 7,
      fontSize: 12,
    },
  });

  const fileUpload = (type) => {
    setTimeout(() => {
      setIsVisible(false);
      alert(type + ' uploaded sucessfully !');
    }, 500);
  };

  const addFiles = () => {
    setIsVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={addFiles}>
        <Image
          style={{ height: 50, width: 50 }}
          source={{ uri: uimg, }}
        />
      </TouchableOpacity>

      <BottomSheet
        onRequestClose={() => setIsVisible(false)}
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
        <View style={styles.bsheet}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              setIsVisible(false);
            }}>
            <Text style={{ fontSize: 20 }}> x </Text>
          </TouchableOpacity>
          <View style={styles.uitems}>
            {list2.map((l, i) => (
              <TouchableOpacity
                key={i}
                style={styles.item}
                onPress={() => fileUpload(l.title)}>
                <View style={styles.itemIcon}>
                  <Image source={{ uri: l.img }} style={styles.itemImg} />
                </View>
                <Text style={styles.itemText}>{l.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </BottomSheet>
    </>
  );
};*/
