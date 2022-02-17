import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


const data = [
  { title: 'Zelder girls college', rating: 5, body: 'hello how are you doing', key: '1' },
  { title: 'Hello sharp shooters ', rating: 4, body: 'hello how are you cooking', key: '2' },
  { title: 'Sup with you bro', rating: 3, body: 'hello how are you travelling', key: '3' }
]
const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);

  const pressHandler = (screen, datum) => {
    navigation.navigate(screen, datum)
  }

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prev) => {
      return [...prev, review]
      // return [...prev, review] to add the reviews to the end of the array
      // return [...review, prev] to add the reviews to the beginning of the array
    })
    setModalVisible(false);
  }

  // const removeReview = (id) => {
  //   reviews.filter(reviews.id !== id)
  // }
  return (
    <View style={globalStyles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setModalVisible(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        onPress={() => setModalVisible(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  )
};

export default Home;


const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#f4f4f4'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 20
  },
  modalContent: {
    flex: 1,
    margin: 20
  }
});