import React, { ReactNode, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

interface Artwork {
  likes: ReactNode;
  id: string;
  userName: string;
  artwork: { uri: string; width: number; height: number };
}

const Leaderboard = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([
    { id: '1', userName: '1. TommyTommy', artwork: { uri: 'https://pyxis.nymag.com/v1/imgs/783/7d4/1f37907ef1e50323c302294a7d3ab235e1-17-yesterdaynite-black-history-memes.rsquare.w330.jpg', width: 150, height: 200 }, likes: 2001 },
    { id: '2', userName: '2. MondayLisa', artwork: { uri: 'https://brignews.com/wp-content/uploads/2020/12/meme-article-picture-3.jpg', width: 150, height: 200 }, likes: 1901 },
    { id: '3', userName: '3. Ohkey', artwork: { uri: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/2-nicolas-cage-a-vampires-kiss-watercolor-art-olga-shvartsur.jpg', width: 150, height: 200 }, likes: 1849 },
    { id: '4', userName: '4. PeteCasso', artwork: { uri: 'https://s.yimg.com/ny/api/res/1.2/MiJoXmmpPQM25moPdksu6A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05NzE-/https://media.zenfs.com/en-US/homerun/time_72/a23c1927a7a9878a5fcd57c776c3af13', width: 150, height: 200 }, likes: 1020 },
  ]);

  const renderArtwork = ({ item }: { item: Artwork }) => {
    return (
      <View style={styles.item}>
        <Text style={{ color: '#ffffff', marginBottom: 10 }}>{item.userName}</Text>
        <Text style={styles.likes}>{item.likes} likes</Text>
        <Image source={{ uri: item.artwork.uri }} style={styles.artworkImage} />
      </View>
    );
  };

  const sortedArtworks = artworks.slice().sort((a, b) => a.userName.localeCompare(b.userName));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Leaderboard</Text>
      <FlatList
        data={sortedArtworks}
        renderItem={renderArtwork}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    color: '#EA4C2B',
    fontSize: 30,
    top: 50,
    marginBottom: 60,
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'black',
    padding: 70,
    marginVertical: 5,
    borderRadius: 10,
    
  },
  likes: {
    color: 'grey',
    fontSize: 14,
    left:40, 
  },
  artworkImage: {
    width: 150,
    height: 200,
    marginRight: 20,
    borderRadius: 20,
  },


}); 

export default Leaderboard;



