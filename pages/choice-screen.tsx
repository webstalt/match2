import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Header} from '../components/header/header';
import {ActionButtons} from '../components/action-buttons/action-buttons';
import {Card} from '../components/card/card';
import {Profile} from '../types/profile';

export const ChoiceScreen = () => {
  const mock = {
    id: 'werwer',
    name: 'Name',
    age: 25,
    description: 'DDDDDDescription',
    photos: [
      {
        downloadUrl:
          'https://cdn.m2.ru/assets/file-upload-server/ba900969a256cb78f3ca0f86d004698e.jpeg',
      },
    ],
  };
  const [profiles, setProfiles] = useState<Profile[] | []>([mock]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    fetch('https:dev-m2.ru/api/match2/listprofiles?page=0&size=20')
      .then(res => res.json())
      .then(res => {
        console.log(res, 'profiles list result');
        setProfiles(res.profiles);
      });
  }, []);

  const onLike = () => {
    setCurrentIndex(prev => prev + 1);
    fetch(
      `https:dev-m2.ru/api/match2/profiles/${profiles[currentIndex].id}/likes`,
      {},
    );
  };

  const onDislike = () => {
    console.log('onDislike');

    setCurrentIndex(prev => prev + 1);
    fetch(
      `https:dev-m2.ru/api/match2/profiles/${profiles[currentIndex].id}/dislikes`,
      {},
    );
  };

  return (
    <View style={styles.container}>
      {profiles[currentIndex] && (
        <>
          <Header />
          <Card profile={profiles[currentIndex]} />
          <ActionButtons onLike={onLike} onDislike={onDislike} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
