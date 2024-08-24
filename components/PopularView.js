import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function PopularView() {
    
    const items = [{name:'Quân Đoàn Xác Sống',view:12020},
        {name:'Bắc Hàn Kiếm Thần',view:92881},
        {name:'Solo Leveling',view:278188},
        {name:'Người Chơi Mới Cấp Tối Đa',view:41356}
    ]
    
    //item.map(item => console.log(item));
    

    return(
        <View style={{height:'15%',marginTop:20}} >
        <FlatList 
        horizontal={true}
        data={items}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
            <View style={styles.itemContainer} >
            <Text style={[styles.textWhite,{fontSize:25,marginTop:10,marginBottom:10,fontWeight:'600'}]}>{item.name}</Text>
           
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textWhite} >{item.view} views</Text>
                <TouchableOpacity  style={{borderWidth:1,width:110,borderWidth:1.4, borderColor:'gray',borderRadius:7,alignItems:'center',marginLeft:35}}> 
                    <Text style={{fontSize:19, color:'gray'}} >Xem Ngay</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={[styles.textWhite,{marginTop:10,fontSize:15,fontWeight:'500'}]}>Truyện Nổi Bật</Text>
            </View>
        )}
        />
         </View>
    );
}

const styles = StyleSheet.create({
    topComic: {
        
       
        color:'white',
        height:'15%',
        //marginHorizontal:20,
        borderRadius:10,
        paddingBottom:10
    },
    textWhite:{
        color:'white',marginLeft:10
    },
    itemContainer:{
        backgroundColor:'black',
        marginHorizontal:5,
        width:300,
        borderWidth:3,
        borderRadius:10
    }
})