import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  todo_header: {
    backgroundColor: '#7DA453',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  todo_text: {
    color: 'white',
    margin: 10,
    fontSize: 16,
  },
  todo_header_deactive: {
    backgroundColor: '#37474F',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  todo_text_deactive: {
    color: '#808080',
    margin: 10,
    fontSize: 16,
    textDecorationLine:'line-through'
  },
});
