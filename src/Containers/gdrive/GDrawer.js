import React from 'react';
import {StyleSheet,ToastAndroid, View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

const GDrawer = () => {
  const img =
    'https://logodownload.org/wp-content/uploads/2020/04/google-drive-logo-2-1.png';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sep: {
      marginVertical: 10,
      height: 2,
      backgroundColor: 'black',
      width: '100%',
    },
    img: {
      //alignSelf: 'flex-start',
      //backgroundColor: 'green',
      resizeMode: 'contain',
      marginVertical: 10,
      height: 30,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: img}} />
      <View style={styles.sep} />
      <Options />
    </View>
  );
};

export default GDrawer;

const options_data = [
  {
    name: 'Recent',
    icon:
      'https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-4/24/5064-512.png',
  },
  {
    name: 'Offline',
    icon:
      'https://cdn1.iconfinder.com/data/icons/basic-ui-7/100/Artboard_79-512.png',
  },
  {
    name: 'Bin',
    icon:
      'https://cdn3.iconfinder.com/data/icons/office-269/32/Office_Expanded_32pxl_Trash-512.png',
  },
  {
    name: 'Notifications',
    icon:
      'https://www.seekpng.com/png/detail/130-1304578_notification-comments-notification-icon-svg.png',
  },
  {
    name: 'Backups',
    icon:
      'https://cdn.iconscout.com/icon/premium/png-512-thumb/cloud-synchronization-9-739696.png',
  },
  {
    name: 'Settings',
    icon: 'https://image.flaticon.com/icons/png/512/126/126472.png',
  },
  {
    name: 'Help & feedback',
    icon: 'https://img.icons8.com/ios/452/help.png',
  },
];

const Options = () => {
  const renderItem = ({item}) => {
    return <OItem opt={item} />;
  };

  return (
    <View style={{paddingLeft:10}}>
      <FlatList
        data={options_data}
        renderItem={renderItem}
        keyExtractor={(item, index) => '' + index}
      />
      <Storage />
    </View>
  );
};

const OItem = ({opt}) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      padding: 10,
      alignItems: 'center',
      //justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });

  const showToast = () => {
    ToastAndroid.show("No Action written !", ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity onPress={showToast} style={styles.container}>
      <Image style={{height: 20, width: 20}} source={{uri: opt.icon}} />
      <Text style={{marginLeft: 15, color: 'black'}}>{opt.name}</Text>
    </TouchableOpacity>
  );
};

const Storage = () => {
  const total_space = '15 GB';
  const used_space = '12.0 GB';
  const usage = used_space + ' of ' + total_space + ' used';

  const img =
    'https://cdn4.iconfinder.com/data/icons/computers-3/32/61-01-512.png';

  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      padding: 10,
      alignItems: 'center',
      //justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <Image style={{height: 20, width: 20}} source={{uri: img}} />
      <View style={{marginLeft: 15}}>
        <Text style={{color: 'black'}}>Storage</Text>
        <Text style={{color: 'grey'}}>{usage}</Text>
      </View>
    </TouchableOpacity>
  );
};
