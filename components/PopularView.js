import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PopularView() {


    return(
        
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
    );
}

const styles = StyleSheet.create({
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
})