import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Card from '../shared/card';
import  {globalStyles, images} from '../styles/global';

const ReviewDetails = ({navigation, route}) => {
  return (
    <View style={globalStyles.container}>
    <Card>
    <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text style={globalStyles.titleText}>{route.params.body}</Text>
      <Text style={globalStyles.titleText}>{route.params.rating}</Text>
      <View style={styles.rating}>
        <Text>GameZone rating:</Text>
        <Image source={images.ratings[route.params.rating]}/>
      </View>
    </Card>
      
  </View>
  )
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});