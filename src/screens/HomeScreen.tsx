import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Restaurants from '../components/Restaurants';
import Search from '../components/Search';

const Home = () => {
  const [category, setCategory] = useState('Burger');

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Search setCategory={setCategory} />
      <Categories setCategory={setCategory} category={category} />
      <Restaurants term={category} />
      <StatusBar style='auto' />
    </View>
  );
};

export default Home;
