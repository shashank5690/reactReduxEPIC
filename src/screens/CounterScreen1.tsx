import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByTwo } from '../redux/slices/firstPageSlice';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import styles from './styles/styles';

const CounterScreen1 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.firstPage.count);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Counter Screen 1</Text>
      <Text style={styles.count}>Count: {count}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => dispatch(incrementByTwo())}
      >
        <Text style={styles.buttonText}>Increment by 2</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('CounterScreen2')}
      >
        <Text style={styles.buttonText}>Go to Counter Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CounterScreen1;
