import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Pressable,
} from 'react-native';
import {Colors} from '../utils/consts';

export const SignUp = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.GRAY}
        placeholder="Имя"
        maxLength={40}
        style={{padding: 10}}
      />
      <TextInput
        placeholderTextColor={Colors.GRAY}
        placeholder="Описание"
        maxLength={200}
        style={{padding: 10}}
        multiline
        numberOfLines={3}
      />

      <Button
        onPress={() => {
          console.log('alala');
        }}
        title="Далее"
      />
      <Pressable
        onPress={() => {
          navigation.navigate('Choice');
        }}>
        <View style={styles.vpoisk}>
          <Text>В поиск</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {},
  vpoisk: {
    padding: 30,
    color: 'blue',
  },
});
