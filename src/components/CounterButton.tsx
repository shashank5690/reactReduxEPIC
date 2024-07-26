import React from 'react';
import { Button } from 'react-native'

interface CounterButtonProps {
  title: string;
  onPress: () => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ title, onPress }) => {
  return (
    <Button title={title} onPress={onPress} />
  );
};

export default CounterButton;