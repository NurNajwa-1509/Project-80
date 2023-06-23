import React, { Component } from "react";
import { Text, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

export default class SpaceCraftScreen extends Component{
    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text>Space Craft Screen</Text>
            </View>
        )
    }

    getData=()=>{
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft')
              .then(response => {

                this.setState({aircrfats:response.data.results})
                console.log(response.data.results)
              })
              .catch(error => {
                console.log(error.message)
              })
    }

    

    renderItem = ({item}) =>{
        return(
            <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom
        :10,elevation:10}}>
            <Image
            source={{uri:item.agency.image_url}} style={{width:'100',height:200,marginTop:15,
        marginRight:10}}></Image>

        <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
        <Text style={{color:'#696969'}}>{item.agency.name}</Text>
        <Text>DESCRIPTION</Text>
        <Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>

        <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    }}>
     <View styles={{flex:0.25}}>
        <Text>Space craft</Text>
     </View>
     <View styles={{flex:0.75}}>
        <FlatList
           keyExtractor={this.keyExtractor}
           data={this.state.aircrafts}
           renderItem={this.renderItem}
           />
     </View>
        </View>
        </View>
        )
        
    }

    
}