import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  
  // const[person,setPerson] = useState({name,age});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todoList,setTodoList] = useState([]);
  const [todoText,setTodoText] = useState('');
  const [press,setPress] = useState(0);
  
 

  function pressHandle() {
    setPress(press+1);
  }

  function resetHandle() {
    setPress(0);
  }

  function todoChange(props) {
    setTodoText(props);
    
  }

  // function addTodo() {
  //   if(todoText!=='') {
  //   setTodoList(todo => [...todo,todoText]);
  //   setTodoText(""); 
  //   }
  // }
  const addTodo = () => {
    if (todoText.trim()) {
      setTodoList([...todoList, { key: Date.now().toString(), name: todoText }]);
      setTodoText('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <View style={styles.menu}>
          <Text>Menu</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.mainComponent}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={{backgroundColor:'red', height:50,width:50,position:'absolute'}}></View>
        </View>
      </View>
     
      
      
      <StatusBar backgroundColor='lightgreen'  />
      <View style={styles.todoInput}>
        <TextInput style={styles.todo} placeholder='todo' onChangeText={todoChange}  value={todoText} />
        <Button title='add' onPress={addTodo}/>
      </View>
      {/* {todoList.map((todo,key )=> <Text key={key} value={todo}>{todo}</Text>)} */}
      
      
      <FlatList data={todoList} 
      renderItem={({item}) => ( 
      <Text style={{margin:5,textAlign:'center',width:200,backgroundColor:'ghostwhite',borderWidth:1}}>{item.name}</Text>)}
      ListHeaderComponent={<Text style={{justifyContent:'center', backgroundColor:'plum'}}>Todo list</Text>}
      />

      <Button title='Press me' onPress={()=>setIsModalVisible(true)}/>

      <Modal visible={isModalVisible} animationType='fade' presentationStyle='fullScreen'>
        <View style={{backgroundColor:'plum',flex:1}}>
        <Text>Modal content</Text>
        <Button title='close' color="midnightblue" onPress={()=>setIsModalVisible(false)}/>
          <Text>content</Text>
          <ActivityIndicator size='large' color='midnightblue'/>
          <ActivityIndicator size='large' color='midnightblue'/>
        </View>
        
      </Modal>
      <Button title='dont press me' onPress={() => Alert.alert("dont press this button","your privacy can be release")} />
    </View>
  );
}



const MyButton = () => {
  return(
    <Button title='click' onPress={pressHandle}></Button>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dogderblue',
    alignItems: 'center',
    
  },
  header: {
    height:'10%',
    width:'100%',
    backgroundColor:'gray',
    marginTop:34,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  menu:{
    alignSelf:'flex-start'
  },
  body:{
    height:'30%',
    width:'100%',
    backgroundColor:'gray',
    marginTop:5,
    
  },
  mainComponent:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
    
  },
  box:{
    height:100,
    width:100,
    backgroundColor:'white',
    alignSelf:'center'
    
  },
  todoInput: {
    height:50,
    width:200,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  todo: {
    borderWidth:1,
    height:'100%',
    width:'100%',
    backgroundColor:'lightgray',
    margin:5
  }
});
