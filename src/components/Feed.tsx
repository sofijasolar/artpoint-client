
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { launchImageLibrary, MediaType, PhotoQuality, ImageLibraryOptions } from 'react-native-image-picker';


interface Artwork {
    id: string;
    userName: string;
    artwork: {uri: string, width: number, height: number};
  }

const ArtworkFeed = () => {
  const [search, setSearch] = useState('');
  const [uploadedImages, setUploadedImages] = useState<Artwork[]>([]);


  const data: Artwork[] = [
    { id: '1', userName: '@ArtsyJim', artwork: {uri: 'https://pyxis.nymag.com/v1/imgs/783/7d4/1f37907ef1e50323c302294a7d3ab235e1-17-yesterdaynite-black-history-memes.rsquare.w330.jpg', width: 400, height: 400} },
    { id: '2', userName: '@ShenayaArt', artwork: {uri: 'https://brignews.com/wp-content/uploads/2020/12/meme-article-picture-3.jpg', width: 400, height: 400} },
    { id: '1', userName: '@Calvin01', artwork: {uri: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/2-nicolas-cage-a-vampires-kiss-watercolor-art-olga-shvartsur.jpg', width: 400, height: 400} },
    { id: '2', userName: '@PeteCasso', artwork: {uri: 'https://s.yimg.com/ny/api/res/1.2/MiJoXmmpPQM25moPdksu6A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05NzE-/https://media.zenfs.com/en-US/homerun/time_72/a23c1927a7a9878a5fcd57c776c3af13', width: 400, height: 400} },

  ];

  const uploadImage = async () => {
    const options = {
        mediaType: 'photo' as MediaType,
        maxWidth: 400,
        maxHeight: 400,
        quality: 1 as PhotoQuality,
      };

      
  
      try {
        const response = await launchImageLibrary(options);

        console.log('ImagePicker Response: ', response);
    
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets[0].uri) { // Check if assets and assets[0].uri are not undefined
          const sourceUri = response.assets[0].uri;
    
          setUploadedImages([
            ...uploadedImages,
            { id: Math.random().toString(), userName: 'User3', artwork: {uri: sourceUri, width: 400, height: 400} },
          ]);
        } else {
          console.log('No image URI found');
        }
      } catch (error) {
        console.log('Error picking image: ', error);
      }
      
  };

  const FeedItem: React.FC<Artwork> = ({ userName, artwork }) => {
    return (
      <View style={styles.item}>
        <Text style={{color: '#ffffff', marginBottom: 10}}>{userName}</Text>
        <Image source={{ uri: artwork.uri }} style={{ width: artwork.width, height: artwork.height }} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Liked')}>
            <Text style={{color: '#ffffff'}}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Bookmarked')}>
            <Text style={{color: '#ffffff'}}>Bookmark</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Tipped')}>
            <Text style={{color: '#ffffff'}}>Tip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Munch ArtPoint</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={text => setSearch(text)}
        defaultValue={search}
      />
      <FlatList
        data={[...uploadedImages, ...data.filter(({ userName }) => userName.includes(search))]}
        renderItem={({ item }) => <FeedItem {...item} />}
        keyExtractor={item => item.id}
/>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => console.log('Navigate to Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to Competition')}>
          <Text>Competition</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={uploadImage}>
          <Text>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to Leaderboard')}>
          <Text>Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  headerText: {
    color: '#EA4C2B',
    fontSize: 30,
    height: 35,
    left: 80,

  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  item: {
    backgroundColor: 'black',
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#EA4C2B',
    padding: 10,
    width: '32%',
    borderRadius: 50,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 50, 
    borderTopColor: 'grey',
    margin: 3, 

    
  }}
  );

export default ArtworkFeed;
