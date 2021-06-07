import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import GComputer from './gcomputer';
import GMyDrive from './gmydrive';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes2] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const [routes] = React.useState([
    { key: 'myfiles', title: 'My Files' },
    { key: 'computer', title: 'Computer' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

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
      inactiveColor={"black"}
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