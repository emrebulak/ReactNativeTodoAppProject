import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.style';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.todoText}>Yapılacaklar</Text>
      <Text style={styles.todoText}>{props.counter}</Text>
    </View>
  );
};

export default Header;
