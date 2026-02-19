import React {useMemo, useState} from 'react';
import {  StatusBar,StyleSheet, Text, Pressable, View } from 'react-native';

import CalcButton from './components/CalcButton';
import Display from 
import { themes } from './components/theme/token';
import { createEngime}

export default function App() {
  const [mode,setMode] =useState ("dark");
  const theme =themes[mode]

  return (
    <View style={styles.container},{ backgroungColor: theme,bg})>
      <Text>CALCULADORA!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2aaaabb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
