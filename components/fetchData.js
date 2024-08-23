// const[person,setPerson] = useState({name,age});
  // const [postList,setPostList] = useState([]);
  // const[isloading,setIsLoading] = useState(true);
  // const[refreshing,setRefreshing] = useState(false);

  // const handleRefresh = () => {
  //   setRefreshing(true);
  //   fetchData(20);
  //   setRefreshing(false);
  // }

  // const fetchData = async(limit = 10) => {
  //   const respone = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await respone.json();
  //   setPostList(data);
  //   setIsLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[]);

  // if(isloading) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large" color="lightblue"/>
  //       <Text>Loading</Text>
  //     </View>
  //   )
  // }

  
    // <SafeAreaView style={styles.container}>
      

    //   <Text style={{fontSize:20}}>ABC</Text>
    //   <FlatList
    //    data={postList}
    //    renderItem={({item}) => {
    //     return (
    //       <View style={{borderWidth:1,borderRadius:5,margin:5}}>
            
    //         <Text>Title: {item.title}</Text>
    //         <Text>Content: {item.body}</Text>
    //       </View>
    //     )
    //    }}
    //    ListEmptyComponent={<Text>No Posts Found</Text>}
    //    ListHeaderComponent={<Text style={{textAlignVertical:'center',textAlign:'center',fontSize:17,fontWeight:'bold'}}>Post List</Text>}
    //    ListFooterComponent={<Text style={{textAlignVertical:'center',textAlign:'center',fontSize:17,fontWeight:'bold'}}>End of List</Text>}
    //    refreshing={refreshing}
    //    onRefresh={handleRefresh}
    //    />
    // </SafeAreaView>