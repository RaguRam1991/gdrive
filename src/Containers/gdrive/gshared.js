/**
listing starred files 
 each file has options  
 show name and shared time
 */

/**
 file item
 shared person profile, file icon,name,shared,options
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import icons from './icons';
import GFOptions from './gfoptions';
import {fyles2} from './data';
import {FItem2,AddNew} from './comps';

import { BottomSheet } from 'react-native-elements';

const GShared = () => {
    const [isVisible, setIsVisible] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    });

    const toggleBSheet = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={styles.container}>
            <ViewType />
            <FList toggleBSheet={toggleBSheet} />
            <AddNew />
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{
                    backgroundColor: 'silver' /*'rgba(0.5, 0.25, 0, 0.5)'*/,
                }}>
                <GFOptions onClose={toggleBSheet} />
            </BottomSheet>
        </View>
    );
};

export default GShared;

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
  share person,icon,name,option  
  shared time
  */

/*const FItem = ({ fyle, toggleBSheet }) => {
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
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignItems: "center", flexDirection: 'row' }}>
                <Image
                    style={{ borderRadius: 15, height: 30, width: 30 }}
                    source={{ uri: fyle.sperson }}
                />
                <Image
                    style={{ height: 25, width: 25 }}
                    source={{ uri: icons[fyle.ftype], }}
                />
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: 'black' }}>{fyle.fname}</Text>
                    <View style={{ marginTop: 5, alignItems: "center", flexDirection: 'row' }}>
                        <Ionicons name={'people'} size={15} color={'grey'} />
                        <Text style={{ marginLeft: 5, fontSize: 12, color: 'grey' }}>
                            Shared {fyle.modi}
                        </Text>
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
    );
};*/

const FList = ({ toggleBSheet }) => {
    const styles = StyleSheet.create({
        container: {

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
        return <FItem2 toggleBSheet={toggleBSheet} fyle={item} />;
    };

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={fyles2}
            renderItem={renderItem}
            keyExtractor={(item, index) => '' + index}
        />
    );
};
