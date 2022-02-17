import React from 'react';
import  {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

const Header = (props) => {
  return (
      <ImageBackground style={styles.header} source={require('../assets/assets/game_bg.png')}>
          <View style={styles.headerTitle}>
            <Image source={require('../assets/assets/heart_logo.png')} style={styles.headerImage}/>
              <Text style={styles.headerText}>{props.title}</Text>
          </View>
      </ImageBackground>
  )
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row'
    }
})
