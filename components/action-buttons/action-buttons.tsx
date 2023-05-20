import React, {useCallback} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {Icon} from '@rneui/themed';

import {Colors} from '../../utils/consts';

export const ActionButtons = ({
  onLike,
  onDislike,
}: {
  onLike: () => void;
  onDislike: () => void;
}) => {
  const handleSuperLike = useCallback(() => {
    onLike();
  }, [onLike]);

  return (
    <View style={styles.container}>
      <View style={styles.actionButtons}>
        <Pressable onPress={onDislike} style={styles.actionButton}>
          <Icon name="thumb-down" color={Colors.PEACH} size={34} />
        </Pressable>
        <Pressable onPress={handleSuperLike} style={styles.superLikeButton}>
          <Icon name="bolt" color={Colors.BLUE} />
        </Pressable>
        <Pressable onPress={onLike} style={styles.actionButton}>
          <Icon name="thumb-up" color={Colors.GREEN} size={34} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  actionButton: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    boxShadow: '0 3px 6px rgba(#000, 0.16), 0 3px 6px rgba(#000, 0.23)',
  },
  superLikeButton: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    boxShadow: '0 3px 6px rgba(#000, 0.16), 0 3px 6px rgba(#000, 0.23)',
  },
});
