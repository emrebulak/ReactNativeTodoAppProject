import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './task.style';

const Task = ({setList, list, data}) => {
  return (
    <View>
      {data.isDone == true ? (
        <View style={styles.todo_header_deactive}>
          <TouchableOpacity
            delayPressIn={500}
            onLongPress={removeTask}
            onPress={chanceToDone}>
            <Text style={styles.todo_text_deactive}>{data.title}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.todo_header}>
          <TouchableOpacity
            delayPressIn={500}
            onLongPress={removeTask}
            onPress={chanceToDone}>
            <Text style={styles.todo_text}>{data.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  function removeTask() {
    let tempArr = [];
    list.forEach(item => {
      if (item.id == data.id) {
        tempArr.splice(item.id, 1);
      } else {
        tempArr.push(item);
      }
    });

    setList(tempArr);
  }

  function chanceToDone() {
    let tempArr = [];
    list.forEach(item => {
      if (item.id == data.id) {
        item.isDone = !item.isDone;
        tempArr.push(item);
      } else {
        tempArr.push(item);
      }
    });

    setList(tempArr);
  }
};

export default Task;
