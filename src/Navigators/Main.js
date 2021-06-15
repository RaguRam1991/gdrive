import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { ZText } from '../Containers/gdrive/comps'
import { Config } from '@/Config'

import {
  //IndexExampleContainer,
  GHome,
  GStarred,
  GShared,
  GMyFiles,
  GDrawer,
  GSearch,
  GAccount,
} from '@/Containers'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const MyTabItems = () => {
  const tabs = {
    home: 'home',
    starred: 'star',
    shared: 'people',
    files: 'folder',
  }
  const tcolor = 'royalblue'

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused
            ? tabs[route.name]
            : tabs[route.name] + '-outline'

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: tcolor,
        inactiveTintColor: tcolor,
      }}
    >
      {/* <Tab.Screen name="Home2" component={IndexExampleContainer} /> */}
      <Tab.Screen name="home" component={GHome} />
      <Tab.Screen name="starred" component={GStarred} />
      <Tab.Screen name="shared" component={GShared} />
      <Tab.Screen name="files" component={GMyFiles} />
    </Tab.Navigator>
  )
}

const MyTabs = props2 => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: props => (
          <SearchBar1
            onMenuPress={() => props2.navigation.toggleDrawer()}
            onAcPress={() => {
              navigation.navigate('account')
            }}
            onSearchPress={() => {
              navigation.navigate('search')
            }}
          />
        ),
        headerStyle: {
          backgroundColor: 'transparent',
          height: 70,
        },
        headerTitleStyle: {
          //height:"20%",
          //backgroundColor: 'skyblue',
        },
      })}
    >
      <Stack.Screen name="Startup" component={MyTabItems} />
      <Stack.Screen
        name="search"
        component={GSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="account"
        component={GAccount}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

// @refresh reset
const MainNavigator = () => {
  //getTheme()

  return (
    <Drawer.Navigator
      drawerStyle={
        {
          /*width:300*/
        }
      }
      drawerContent={props => <GDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={MyTabs} />
    </Drawer.Navigator>
  )
}

export default MainNavigator

const SearchBar1 = props => {
  const icon_menu =
    'https://pics.freeicons.io/uploads/icons/png/15211315791553239378-512.png'
  const icon_profile =
    'https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png'

  const [search, setSearch] = React.useState('')

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: 'transparent',
    },
    bar: {
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Config.darkMode ? "#404040" : 'snow',
      padding: 5,
      borderRadius: 5,
      borderWidth: 0.5,
    },
    img: {
      height: 30,
      width: 30,
    },
  })

  const updateSearch = srch => {
    setSearch(srch)
  }

  return (
    <View style={styles.bar}>
      <TouchableOpacity onPress={props.onMenuPress}>
        <Image source={{ uri: icon_menu }} style={styles.img} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.onSearchPress}
        style={{ flex: 1, marginLeft: 10 }}
      >
        <ZText style={{color:"snow"}}>Search in Drive</ZText>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onAcPress}>
        <Image source={{ uri: icon_profile }} style={styles.img} />
      </TouchableOpacity>
    </View>
  )

  /*
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <TouchableOpacity onPress={props.onMenuPress}>
          <Image source={{ uri: icon_menu }} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onSearchPress} style={{ flex: 1, marginLeft: 10 }} >
          <Text style={{}}>Search in Drive</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onAcPress}>
          <Image source={{ uri: icon_profile }} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );*/
}
