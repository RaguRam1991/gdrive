/**
display current account and option to manage 
display google accounts
 */

/**
 display current account and list other accounts
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {showToast,ZText,darkMode} from './comps';

const GAccounts = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    sep: {
      marginVertical: 10,
      width: '100%',
      height: 1,
      backgroundColor:darkMode ? 'silver':"black",
    },
  });

  React.useEffect(() => {
    showToast("No Action written on this page!");
  },[]);

  return (
    <View style={styles.container}>
      <AcCurrent />
      <View style={styles.sep} />
      <AcOthers />
      <View style={styles.sep} />
      <View style={{flex:1}} />
      <Privacy />
    </View>
  );
};

export default GAccounts;

var accounts_list = [
  {
    name: 'My Name R',
    email: 'email1@gmail.com',
    img:
      'https://lh3.googleusercontent.com/-vCtHcZnoaVY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reAXUOpNEGrmEyTS8Z69DQ6EXaaYQ/photo.jpg',
  },
  {
    name: 'My Name C',
    email: 'email2@gmail.com',
    img:
      'https://lh5.googleusercontent.com/-gz71igzvLuE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfxCx3rUFXkackPBHMYG0klBWkEhw/mo/photo.jpg',
  },
  {
    name: 'My Name D',
    email: 'email3@gmail.com',
    img:
      'https://lh3.googleusercontent.com/-Hu1GcMupzRs/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnpkq3TNjQhe8a7ZTpXGAzvC8CLVg/photo.jpg',
  },
];

const AcCurrent = () => {
  const img1 =
    'https://i.pinimg.com/236x/d1/0f/76/d10f76f0c3c2baa372457aca1cd24e20.jpg';
  const img2 =
    'https://www.pngkey.com/png/detail/942-9428675_google-apps-computer-help-documents-oregon-state-ios.png';

  const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      padding: 10,
      alignItems: 'center',
      //justifyContent: 'center',
    },
    ac: {
      width: '90%',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    manage: {
      marginVertical: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: darkMode ? 'silver':"black",
    },
    img1: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.ac}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.img1} source={{uri: img1}} />
          <View style={{marginLeft: 15}}>
            <ZText>Ragu Main</ZText>
            <Text style={{marginTop: 5, fontSize: 12, color: 'grey'}}>
              ragu.main@gmail.com
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image style={{height: 30, width: 30}} source={{uri: img2}} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.manage}>
        <ZText>Manage your Google Account</ZText>
      </TouchableOpacity>
    </View>
  );
};

const AcOthers = () => {
  const addac = 'https://static.thenounproject.com/png/28726-200.png';
  const manageac = 'https://static.thenounproject.com/png/20344-200.png';

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    icon: {
      height: 25,
      width: 25,
    },
  });

  return (
    <View style={styles.container}>
      <AcList />

      <View style={{marginVertical:5, flexDirection: 'row',alignItems:"center"}}>
        <Image style={styles.icon} source={{uri: addac}} />
        <ZText style={{marginLeft: 15}}>
          Add another account
        </ZText>
      </View>

      <View style={{marginVertical:5,flexDirection: 'row',alignItems:"center"}}>
        <Image style={styles.icon} source={{uri: manageac}} />
        <ZText style={{marginLeft: 15}}>
          Manage accounts on this device
        </ZText>
      </View>

    </View>
  );
};

const AcList = () => {
  const styles = StyleSheet.create({
    container: {},
    sep: {
      alignSelf: 'center',
      height: 1,
      width: '90%',
      backgroundColor: 'silver',
      borderRadius: 0.5,
    },
  });

  const seperator = () => {
    return null;
    return <View style={styles.sep} />;
  };

  const renderItem = ({item}) => {
    return <AcItem acnt={item} />;
  };

  return (
    <FlatList
      data={accounts_list}
      renderItem={renderItem}
      ItemSeparatorComponent={seperator}
      keyExtractor={(item, index) => '' + index}
    />
  );
};

const AcItem = ({acnt}) => {
  const styles = StyleSheet.create({
    container: {
      //padding:10,
      marginVertical: 10,
      alignItems: 'center',
      flexDirection: 'row',
      //justifyContent: 'center',
    },
    img1: {
      height: 30,
      width: 30,
      borderRadius: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={{uri: acnt.img}} />
      <View style={{marginLeft: 15}}>
        <ZText>{acnt.name}</ZText>
        <Text style={{marginTop: 0, fontSize: 12, color: 'grey'}}>
          {acnt.email}
        </Text>
      </View>
    </View>
  );
};

const Privacy = () => {
  const styles = StyleSheet.create({
    container: {
      marginVertical:20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ZText> Privacy Policy </ZText>
      </TouchableOpacity>
      <ZText style={{marginHorizontal: 10}}> ☼ </ZText>
      <TouchableOpacity>
        <ZText> Terms of Service </ZText>
      </TouchableOpacity>
    </View>
  );
};
