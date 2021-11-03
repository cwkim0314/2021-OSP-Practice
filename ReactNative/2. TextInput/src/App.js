import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import EventInput from './EventInput'

const App = () => {
 return (
 <View 
 style={{
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     }}
     >
     <EventInput />
     </View>
 );
};

export default App;
