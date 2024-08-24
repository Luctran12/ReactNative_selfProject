//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({ navigation }) {

    const [postList,setPostList] = useState([]);

const fetchData = async(limit = 10) => {
    const respone = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await respone.json();
    setPostList(data);
  }

  useEffect(() => {
    fetchData();
  },[]);

    return (
      <View style={{ flex: 1,backgroundColor:'#373b3d' }}>
      <StatusBar/>
        <SafeAreaView style={styles.header}>
            <Text style={{marginRight:10,color:'white',fontSize:25,letterSpacing:4,alignSelf:'center'}}>NETTROM</Text>
            <Text style={{color:'white',alignSelf:'center',fontSize:4}}>trom truyen nhanh nhat vietnam</Text>
        </SafeAreaView>

        <View style={styles.topComic} >
            <Text style={[styles.textWhite,{fontSize:25,marginTop:10,marginBottom:10,fontWeight:'600'}]}>Boku no pico</Text>
           
            <View style={{flexDirection:'row'}}>
            <Text style={styles.textWhite} >Chapter 2</Text>
                <TouchableOpacity style={{borderWidth:1,width:110,borderWidth:1.4, borderColor:'gray',borderRadius:7,alignItems:'center',marginLeft:35}}> 
                    <Text style={{fontSize:19, color:'gray'}} >Xem Ngay</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={[styles.textWhite,{marginTop:10,fontSize:15,fontWeight:'500'}]}>Truyện Nổi Bật</Text>
        </View>
        <Text style={[styles.textWhite,{fontSize:30,fontWeight:'bold',alignSelf:'center',marginTop:40}]}>Truyện Phổ Biến</Text>
        <Text style={[styles.textWhite,{fontSize:15,fontWeight:'450',alignSelf:'center',marginTop:10}]} >Xem thêm</Text>

        <View style={styles.ComicView}>
            {/* <View style={styles.Card}>
                <Image source={require('../assets/download.jpg')} />
                <Text>Lượt xem 2.4M</Text>
                <Text>Chap 201</Text>
                <Text>SÁT THỦ PETER</Text>
            </View> */}
            <FlatList  style={{backgroundColor:'black'}}
       data={postList}
       renderItem={({item}) => {
        return (
        
          <View style={[styles.comicItem,{borderRightWidth:1,borderBottomWidth:1,borderLeftWidth:1,borderColor:'gray',borderRadius:10,marginHorizontal:10}]}>
            
            
            <Image source={{
          uri: item.url
        }} 
        style={{width:'100%',height:250,resizeMode:'cover',borderTopLeftRadius:8,borderTopRightRadius:8}}
        />
        <Text style={[{color:'blue',fontSize:20,textAlign:'left',textAlignVertical:'bottom'},styles.textWhite]} numberOfLines={2}>Title: {item.title}</Text>
        <Text style={styles.textWhite}>2.3M View</Text>
          </View>
        )
       }}
       
       keyExtractor={(item) =>item.id.toString()}
       numColumns={2}
       ListEmptyComponent={<Text>No Posts Found</Text>}
       ListHeaderComponent={<Text style={{textAlignVertical:'center',textAlign:'center',fontSize:17,fontWeight:'bold'}}>Post List</Text>}
       ListFooterComponent={<Text style={{textAlignVertical:'center',textAlign:'center',fontSize:17,fontWeight:'bold'}}>End of List</Text>}
       
       />
        </View>
      </View>
    
    );
  }

  const styles = StyleSheet.create({
    header: {
        backgroundColor:'black',
        marginTop:33,
        height:60,
        justifyContent:'center',
        flexDirection:'row'
    },
    topComic: {
        marginTop:20,
        backgroundColor:'black',
        color:'white',
        height:'15%',
        marginHorizontal:20,
        borderRadius:10,
    },
    textWhite:{
        color:'white',marginLeft:10
    },
    comicItem: {
        width:'45%',
        height:340,
        //backgroundColor:'red',
        alignItems:'center',
        marginBottom:20,
        backgroundColor:'#606262',
        flexWrap:'wrap',
        
        
    },
    ComicView: {
        justifyContent:'center'
    }
  })