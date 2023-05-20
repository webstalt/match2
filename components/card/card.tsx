import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  Animated,
} from 'react-native';
import {Profile} from '../../types/profile';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const Card = ({
  profile: {name, age, description, photos},
}: {
  profile: Profile;
}) => {
  console.log('photos', photos);

  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        alt="logo"
        source={{
          uri: photos[0].downloadUrl,
        }}
      />
      <Image
        alt="logo"
        source={{
          uri: 'https://cdn.m2.ru/assets/file-upload-server/ba900969a256cb78f3ca0f86d004698e.jpeg',
        }}
      />
      <Text style={styles.name}>
        {name}
        {age ? `, ${age}` : ''}
      </Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    width: '100%',
    height: '100%',
    position: 'relative',
    boxShadow: '0 3px 6px rgba(#000, 0.16), 0 3px 6px rgba(#000, 0.23)',
  },
  name: {
    padding: 16,
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: '800',
    position: 'absolute',
    bottom: 70,
  },
  photo: {
    height: '100%',
    width: 'auto',
    flex: 1,
    borderRadius: 10,
  },
  desc: {
    padding: 18,
    fontSize: 20,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 50,
  },
});
