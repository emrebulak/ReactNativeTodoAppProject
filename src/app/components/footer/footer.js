import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './footer.style';

const Footer = ({setList, list}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.footer}>
      <TextInput
        onChangeText={newText => setText(newText)}
        style={styles.textinput}
        value={text}
        placeholder="Yapılacak..."
      />

      <TouchableOpacity onPress={saveTask} style={styles.touchableopacity}>
        <Text style={styles.touchtext}>KAYDET</Text>
      </TouchableOpacity>
    </View>
  );

  function saveTask() {
    if (text != '') {
      const newData = [
        {
          id: list.length.toString(),
          title: text,
          isDone: false,
        },
      ];

      let tempArr = list.concat(newData);
      setList(tempArr);
      setText('');
    }
  }
};

export default Footer;
