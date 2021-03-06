import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  FlatList,
} from 'react-native'

import { useTheme } from '@/Theme'
import { Config } from '@/Config'

import { BottomSheet } from 'react-native-elements'
import icons from './icons'
import Ionicons from 'react-native-vector-icons/Ionicons'
var Common, Fonts, Gutters, Layout

export const darkMode = Config.darkMode

export function getTheme() {
  Fonts = useTheme()['Fonts']
  Common = useTheme()['Common']
  //console.log('getTheme')
}

export const ZText = props => {
  return <Text style={[useTheme()['Fonts'].textSmall, props.style]}>{props.children}</Text>
}

export const ZIcon = props => {
  return (
    <Ionicons
      name={props.name}
      size={props.size || 20}
      color={props.color || useTheme()['Common'].icon.color}
    />
  )
}

/*  
  icon,name,option  
  last modified
  */

export const FItem = ({ fyle, toggleBSheet }) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Image
          style={{ height: 20, width: 20 }}
          source={{ uri: icons[fyle.ftype] || icons.file }}
        />
        <View style={{ marginLeft: 15 }}>
          <ZText style={{}}>{fyle.fname}</ZText>
          <ZText style={{ marginTop: 5, fontSize: 12, color: 'grey' }}>
            Modified {fyle.modi}
          </ZText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleBSheet}>
        {/* <Image
          style={{ marginHorizontal: 5, height: 15, width: 15 }}
          source={require('./more-icon.png')}
        /> */}
        <ZIcon name={'ellipsis-vertical-outline'}/>
      </TouchableOpacity>
    </View>
  )
}

/*  
share person,icon,name,option  
shared time
*/
//sharred file item
export const FItem2 = ({ fyle, toggleBSheet }) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Image
          style={{ borderRadius: 15, height: 30, width: 30 }}
          source={{ uri: fyle.sperson }}
        />
        <Image
          style={{ height: 25, width: 25 }}
          source={{ uri: icons[fyle.ftype] }}
        />
        <View style={{ marginLeft: 15 }}>
          <ZText style={Fonts.textSmall}>{fyle.fname}</ZText>
          <View
            style={{ marginTop: 5, alignItems: 'center', flexDirection: 'row' }}
          >
            <Ionicons name={'people'} size={15} color={'grey'} />
            <ZText style={{ marginLeft: 5, fontSize: 12, color: 'grey' }}>
              Shared {fyle.modi}
            </ZText>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleBSheet}>
        <Image
          style={{ marginHorizontal: 0, height: 15, width: 15 }}
          source={require('./more-icon.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export const AddNew = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const uimg =
    'https://cdn0.iconfinder.com/data/icons/flat-security-icons/512/plus-blue.png'

  const list2 = [
    {
      title: 'Folder',
      img: 'https://img.icons8.com/ios/452/opened-folder.png',
    },
    {
      title: 'Upload',
      img: 'https://img.icons8.com/pastel-glyph/2x/upload.png',
    },
    {
      title: 'Scan',
      img: 'https://static.thenounproject.com/png/1935395-200.png',
    },
    { title: 'Google Docs', img: icons.docs },
    { title: 'Google Sheets', img: icons.xlsx },
    {
      title: 'Google Slides',
      img: 'https://e7.pngegg.com/pngimages/500/650/png-clipart-google-docs-google-slides-google-drive-presentation-slide-g-suite-google-angle-text.png',
    },
  ]

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
      //margin: 10,
      //marginBottom: 0,
      //alignSelf: 'flex-end',
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
      justifyContent: 'center',
      //padding: 20,
    },
    itemText: {
      marginTop: 7,
      fontSize: 12,
    },
  })

  const fileUpload = type => {
    setTimeout(() => {
      setIsVisible(false)
      alert(type + ' uploaded sucessfully !')
    }, 500)
  }

  const addFiles = () => {
    setIsVisible(true)
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={addFiles}>
        <Image style={{ height: 50, width: 50 }} source={{ uri: uimg }} />
      </TouchableOpacity>

      <BottomSheet
        onRequestClose={() => setIsVisible(false)}
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
      >
        <View style={styles.bsheet}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10,
            }}
          >
            <View />
            <Text style={{ fontSize: 20 }}>Create New</Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                setIsVisible(false)
              }}
            >
              <Text style={{ fontSize: 20 }}> x </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.uitems}>
            {list2.map((l, i) => (
              <TouchableOpacity
                key={i}
                style={styles.item}
                onPress={() => fileUpload(l.title)}
              >
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
  )
}

export const ViewType = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
  })

  return (
    <View style={styles.container}>
      <ZText> Name ??? </ZText>
      <TouchableOpacity onPress={() => showToast('No Action written !')}>
        <Image
          style={{ height: 30, width: 30 }}
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/rounded-basics/24/svg-rounded_grid-512.png',
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export function showToast(msg = '') {
  ToastAndroid.show(msg, ToastAndroid.SHORT)
}

export const FList = props => {
  console.log(props.data)

  const styles = StyleSheet.create({
    container: {
      /* flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', */
    },
    sep: {
      alignSelf: 'center',
      height: 1,
      width: '90%',
      backgroundColor: 'silver',
      borderRadius: 0.5,
    },
  })

  const renderItem = ({ item }) => {
    return <FItem toggleBSheet={props.toggleBSheet} fyle={item} />
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item, index) => '' + index}
    />
  )
}
