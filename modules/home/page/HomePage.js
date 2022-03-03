import * as React from 'react';
import { Button, View, Alert, Text } from 'react-native';
const HomePage = ({ navigation }) => {
   return (
      <Button title="Click Here" onPress={() => navigation.navigate('About', { name: 'About Page' })}/>
   );
};
export default HomePage;