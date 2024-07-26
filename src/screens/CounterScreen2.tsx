import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementbyOne } from '../redux/slices/secondPageSlice';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import styles from './styles/styles';


const CounterScreen2 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.secondPage.count);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Counter Screen 2</Text>
      <Text style={styles.count}>Value: {count}</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrementbyOne())}
       >
        <Text style={styles.buttonText}>Increment by 2</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('CounterScreen1')}
      >
        <Text style={styles.buttonText}>Go to Counter Screen 1</Text>
      </TouchableOpacity>
  
      {/* <Button title="Go to Counter Screen 1" onPress={() => navigation.navigate('CounterScreen1')} /> */}
    </View>
  );
};

export default CounterScreen2;
