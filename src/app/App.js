import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './App.style';

//Componenets
import Header from './components/header';
import Task from './components/task';
import Footer from './components/footer';

//Data
import jsondatas from '../assets/json/data.json';

const App = () => {
  const [list, setList] = useState(jsondatas);
  const renderTask = ({item}) => (<Task setList={setList} list={list} data={item} /> );

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderTask}
        ListHeaderComponent={() => (
          <Header counter={list.filter(x => x.isDone == false).length} />
        )}
      />

      <Footer setList={setList} list={list} />
    </View>
  );
};

export default App;
