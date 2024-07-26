import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByTwo } from '../redux/slices/firstPageSlice';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';


const CounterScreen1 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.firstPage.count);
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>Counter Screen 1</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment by 2" onPress={() => dispatch(incrementByTwo())} />
      <Button title="Go to Counter Screen 2" onPress={() => navigation.navigate('CounterScreen2')} />
    </View>
  );
};

export default CounterScreen1;
