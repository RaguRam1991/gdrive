import * as React from 'react';
import {  useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import {darkMode} from './comps';

import GComputer from './gcomputer';
import GMyDrive from './gmydrive';

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: 'myfiles', title: 'My Files' },
    { key: 'computer', title: 'Computer' },
  ]);  

  const renderScene2 = SceneMap({
    myfiles: GMyDrive,
    computer: GComputer,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'royalblue' }}
      style={{ 
        backgroundColor: 'transparent', 
        //borderWidth: 0, 
        //borderBottomWidth: 0.5, 
        //borderColor: "transparent" ,
        //borderBottomColor:"silver"
      }}
      activeColor={"royalblue"}
      inactiveColor={darkMode ? "silver" : "black"}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene2}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width * 0.8 }}
    />
  );
}