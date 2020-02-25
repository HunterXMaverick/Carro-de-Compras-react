import React from 'react';
import {StyleSheet} from 'react-native'

import Localitation from '../movil/components/localitation'


export default function App() {

  return (
    <Localitation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#367698',
    color: 'white'
  }
});
