import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icon} from '@rneui/themed';

import {Colors} from '../../utils/consts';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="face" color={Colors.GRAY} size={32} />
      <Image
        alt="logo"
        source={{
          uri: 'https://cdn.m2.ru/assets/file-upload-server/99409582be87eee615cabf4fff5cf58c.png',
        }}
        style={{width: 93, height: 48}}
      />
      <Icon name="forum" color={Colors.GRAY} size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    paddingTop: 2,
  },
});
