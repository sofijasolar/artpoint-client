import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type FeedItemProps = {
  id: string;
  userName: string;
  artwork: string;
};

const FeedItem = ({ id, userName, artwork }: FeedItemProps) => {
  const handleLike = () => {
    // Handle like action
    console.log(`Liked artwork ${id}`);
  };

  const handleTip = () => {
    // Handle tip action
    console.log(`Tipped artwork ${id}`);
  };

  const handleBookmark = () => {
    // Handle bookmark action
    console.log(`Bookmarked artwork ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text>{userName}'s artwork: {artwork}</Text>
      <TouchableOpacity onPress={handleLike}>
        <Text>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTip}>
        <Text>Tip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBookmark}>
        <Text>Bookmark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default FeedItem;
