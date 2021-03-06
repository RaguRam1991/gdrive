/**
 showing recent files
 display file preview
 each file has options 
 each file type has icon
 */

/**
 file item
 name,type,picture,last opened
 */

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import icons from './icons'
import GFOptions from './gfoptions'

import { BottomSheet } from 'react-native-elements'
import { rec_files } from './data'
import { AddNew, ZText, ZIcon } from './comps'

import { useTheme } from '@/Theme'
var fonts2 = {}
var Common2 = null

const GRecent = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  fonts2 = Fonts
  Common2 = Common

  const [isVisible, setIsVisible] = React.useState(false)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:"black",
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  })

  const reed = async () => {
    alert('this is home')
  }

  const toggleBSheet = () => {
    setIsVisible(!isVisible)
  }

  return (
    <View style={styles.container}>
      {/* <ZText style={{color:"yellow"}}>Good</ZText> */}
      <FList toggleBSheet={toggleBSheet} />
      <AddNew />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{
          backgroundColor: 'silver' /*'rgba(0.5, 0.25, 0, 0.5)'*/,
        }}
      >
        <GFOptions onClose={toggleBSheet} />
      </BottomSheet>
    </View>
  )
}

export default GRecent

/*  
 icon,name,option
 preview
 last opened
 */

const FItem = ({ fyle, toggleBSheet }) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      padding: 10,
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    filename: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    prevu: {
      marginVertical: 20,
      padding: 20,
      paddingBottom: 0,
      borderRadius: 10,
      backgroundColor: 'gainsboro',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ficon: {
      height: 20,
      width: 20,
    },
    prevuimg: {
      height: 150,
      width: '90%',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.filename}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.ficon} source={{ uri: icons[fyle.ftype] }} />
          <ZText style={{ marginLeft: 10 }}>{fyle.fname}</ZText>
        </View>
        <View>
          <TouchableOpacity onPress={toggleBSheet}>
            {/* <Image
              style={{ height: 15, width: 15 }}
              source={require('./more-icon.png')}
            /> */}
            {/* <Ionicons
              name={'ellipsis-vertical-outline'}
              size={20}
              color={Common2.icon.color}
            /> */}
            <ZIcon name={'ellipsis-vertical-outline'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.prevu}>
        <Image style={styles.prevuimg} source={{ uri: fyle.prevu }} />
      </View>

      <View>
        <Text style={{ color: 'grey' }}>Last opened in {fyle.lasto}</Text>
      </View>
    </View>
  )
}

const FList = ({ toggleBSheet }) => {
  const styles = StyleSheet.create({
    container: {
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    sep: {
      alignSelf: 'center',
      height: 1,
      width: '90%',
      backgroundColor: 'silver',
      borderRadius: 0.5,
    },
  })

  const seperator = () => {
    return <View style={styles.sep} />
  }

  const renderItem = ({ item }) => {
    return <FItem toggleBSheet={toggleBSheet} fyle={item} />
  }

  return (
    <FlatList
      data={rec_files}
      renderItem={renderItem}
      ItemSeparatorComponent={seperator}
      keyExtractor={(item, index) => '' + index}
    />
  )
}
