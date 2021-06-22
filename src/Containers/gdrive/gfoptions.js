import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

import icons from './icons'

import { ZIcon } from './comps'

const fname = {
  name: 'My File Name',
  icon: icons.xlsx,
}

const GFOptions = ({ onClose }) => {
  const img =
    'https://logodownload.org/wp-content/uploads/2020/04/google-drive-logo-2-1.png'

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sep: {
      marginVertical: 10,
      height: 0.5,
      backgroundColor: 'grey',
      width: '98%',
    },
    img: {
      //alignSelf: 'flex-start',
      //backgroundColor: 'green',
      resizeMode: 'contain',
      marginVertical: 10,
      height: 30,
    },
  })

  return (
    <View style={styles.container}>
      <FName opt={fname} onClose={onClose} />
      <View style={styles.sep} />
      <Options />
      <View style={{ height: 10 }} />
    </View>
  )
}

export default GFOptions

const options_data = [
  {
    name: 'Share',
    icon2: 'share-social-outline',
    icon: 'https://static.thenounproject.com/png/771244-200.png',
  },
  {
    name: 'Add to Starred',
    icon2: 'star-outline',
    icon: 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png',
  },
  {
    name: 'Make available offline',
    icon2:"cloud-offline-outline",
    icon: 'https://static.thenounproject.com/png/2263783-200.png',
  },
  {
    name: 'Link sharing on',
    icon2:"link-outline",
    icon: 'https://www.materialui.co/materialIcons/editor/insert_link_grey_192x192.png',
  },
  {
    name: 'Copy link',
    icon2:"copy-outline",
    icon: 'https://image.flaticon.com/icons/png/512/88/88026.png',
  },
  {
    name: 'Make a copy',
    icon2:"file-tray-outline",
    icon: 'https://static.thenounproject.com/png/3319514-200.png',
  },
  {
    name: 'Send a copy',
    icon2:"arrow-redo-outline",
    icon: 'https://www.searchpng.com/wp-content/uploads/2019/02/Forward-Icon-PNG-715x715.png',
  },
  {
    name: 'Open with',
    icon2:"move-outline",
    icon: 'https://static.thenounproject.com/png/50342-200.png',
  },
  {
    name: 'Download',
    icon2:"download-outline",
    icon: 'http://cdn.onlinewebfonts.com/svg/img_71049.png',
  },
  {
    name: 'Rename',
    icon2:"create-outline",
    icon: 'https://static.thenounproject.com/png/3053734-200.png',
  },
  {
    name: 'Show file location',
    icon2:"folder-outline",
    icon: 'https://img.icons8.com/ios/452/opened-folder.png',
  },
  {
    name: 'Details & Activity',
    icon2:"information-circle-outline",
    icon: 'https://img.icons8.com/pastel-glyph/2x/info.png',
  },
  {
    name: 'Print',
    icon2:"print-outline",
    icon: 'https://freeiconshop.com/wp-content/uploads/edd/print-outline.png',
  },
  {
    name: 'Add to Home screen',
    icon2:"home-outline",
    icon: 'http://simpleicon.com/wp-content/uploads/mobile-1.png',
  },
  {
    name: 'Report abuse',
    icon2:"alert-circle-outline",
    icon: 'https://cdn2.iconfinder.com/data/icons/flaticons-stroke/16/exclamation-point-1-512.png',
  },
]

const Options = () => {
  const styles = StyleSheet.create({
    container: {
      //backgroundColor: 'yellow',
    },
    sep: {
      //alignSelf: 'center',
      marginLeft: 30,
      height: 1,
      width: '95%',
      backgroundColor: 'silver',
      borderRadius: 0.5,
    },
  })

  const renderItem = ({ item, index }) => {
    if ((index + 1) % 3 == 0) {
      return (
        <>
          <OItem opt={item} />
          <Separator />
        </>
      )
    }
    return <OItem opt={item} />
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingLeft: 10 }}>
      <FlatList
        style={{}}
        contentContainerStyle={{ flexGrow: 1 }}
        data={options_data}
        renderItem={renderItem}
        keyExtractor={(item, index) => '' + index}
      />
    </SafeAreaView>
  )
}

const OItem = ({ opt }) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      padding: 10,
      alignItems: 'center',
      //justifyContent: 'space-between',
      flexDirection: 'row',
    },
  })

  return (
    <TouchableOpacity style={styles.container}>
      {opt.icon2 ? (
        <ZIcon color={"black"} name={opt.icon2} />
      ) : (
        <Image style={{ height: 20, width: 20 }} source={{ uri: opt.icon }} />
      )}
      <Text style={{ marginLeft: 15, color: 'black' }}>{opt.name}</Text>
    </TouchableOpacity>
  )
}

const FName = ({ opt, onClose }) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      //padding: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      //justifyContent: 'space-between',
      flexDirection: 'row',
    },
  })

  return (
    <View style={styles.container}>
      <Image style={{ height: 25, width: 25 }} source={{ uri: opt.icon }} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginLeft: 20,
          color: 'black',
        }}
      >
        {opt.name}
      </Text>
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        onPress={onClose}
        style={{ padding: 10, marginRight: 10 }}
      >
        <Text> X </Text>
      </TouchableOpacity>
    </View>
  )
}

const Separator = () => {
  return (
    <View
      style={{
        //alignSelf: 'center',
        marginLeft: 40,
        marginRight: 2,
        height: 1,
        width: '95%',
        backgroundColor: 'silver',
        borderRadius: 0.5,
      }}
    />
  )
}
