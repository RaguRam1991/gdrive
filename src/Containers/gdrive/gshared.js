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
    FlatList,    
} from 'react-native';

import GFOptions from './gfoptions';
import {fyles2} from './data';
import {FItem2,AddNew,ViewType} from './comps';

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
