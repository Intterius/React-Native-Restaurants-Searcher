import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/styles';
import React, { useState } from 'react';

interface IProps {
  setCategory: (value: string) => void;
}

const Search: React.FC<IProps> = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleSubmitCategory = () => {
    if (!inputValue) {
      return;
    }
    setInputValue('');
    setCategory(inputValue);
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name='search' size={25} />
      <TextInput
        value={inputValue}
        onChangeText={handleInputChange}
        style={styles.input}
        placeholder='Restaurants, food'
        onEndEditing={handleSubmitCategory}
      />
    </View>
  );
};

export default React.memo(Search);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    marginLeft: 6,
    fontSize: 20,
  },
});
