/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const logo = require('./assets/logo.png');

const App = () => {
  const playSound = sound => {
    //if required is not used
    // const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, error => {
    //   if (error) {
    //     console.log('NOT ABLE TO PLAY SOUND');
    //   }
    // });

    //if required is used to access the sound files second argument must be a callback
    const soundVar = new Sound(sound, error => {
      if (error) {
        console.log('NOT ABLE TO PLAY SOUND');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 1000);

    soundVar.release();
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <ScrollView
        contentContainerStyle={tw`flex-1 justify-center items-center`}>
        <Image source={logo} />

        <View
          style={tw`flex-1 flex-row flex-wrap items-start justify-around m-2 p-2`}>
          {soundList.map((sound, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => playSound(sound)}
              style={tw`h-24 border-2 border-slate-400 bg-slate-400 items-center rounded-full justify-center w-5/12 mx-2 my-2`}>
              <Text style={tw`text-4xl font-bold text-slate-900`}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
