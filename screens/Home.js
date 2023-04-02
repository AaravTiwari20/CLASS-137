import React,{Component} from "react"
import {View,Text,Flatlist,StyleSheet,Alert,SafeAreaView} from "react-native"
import {ListItem} from "react-native-elements"
import axios from "axios"

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            listData:[],
            url:"http://localhost:5000/"
        }
    }
    componentDidMount(){
        this.getPlanets()
    }
    getPlanet=()=>{
        const {url}= this.state
        axios
        .get(url)
        .then(response=>{
            return this.setState({
                listData:response.data.data
            })
        })
        .catch(error=>{
        Alert.alert(error.message)
        })
    }
    renderItem = ({item,index})=>(
        <ListItem
        key = {index}
        title = {`planet:${item.name}`}
        subtitle = {`distanceFromEarth:${item.distance_from_Earth}`}
        titleStyle = {styles.title}
        containerStyle = {styles.ListContainer}
        bottomDivider
        chevron
        onPress = {()=>
        this.props.navigation.navigate("Details",{planet_name:item.name})
        }
        />
    )
    keyExtractor = (item,index)=>index.toString()
    render(){
        const{listData}=this.state
        if (listData.length===0){
            return(
                <View
                style = {styles.container}
                ><Text>Loading...</Text></View>
            )
        }
        return(
            <View 
            style = {styles.container}
            >
            <SafeAreaView/>
            <View style = {styles.upperContainer}>
                <Text style = {styles.headerText}>Planets World</Text>
            </View>
            <View style = {styles.lowerContainer}>
                <Flatlist
                keyExtractor = {this.keyExtractor}
                data = {this.state.listData}
                renderItem = {this.renderItem}
                />
            </View>
            <Text>Home Screen</Text>
            </View>
        )   
    }

}const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#edc988"
    },
    upperContainer: {
      flex: 0.1,
      justifyContent: "center",
      alignItems: "center"
    },
    headerText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#132743"
    },
    lowerContainer: {
      flex: 0.9
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    emptyContainerText: {
      fontSize: 20
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#d7385e"
    },
    listContainer: {
      backgroundColor: "#eeecda"
    }
  });