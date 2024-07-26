import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementbyOne } from '../redux/slices/secondPageSlice';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';

const CounterScreen2 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.secondPage.count);
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>Counter Screen 2</Text>
      <Text>Value: {count}</Text>
      <Button title="Decrement by 1" onPress={() => dispatch(decrementbyOne())} />
      <Button title="Go to Counter Screen 1" onPress={() => navigation.navigate('CounterScreen1')} />
    </View>
  );
};

export default CounterScreen2;
