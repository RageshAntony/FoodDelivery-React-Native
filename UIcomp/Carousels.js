import React, { Component } from "react";

import { StyleSheet,FlatList,ActivityIndicator,Image,TouchableOpacity,Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollView, Switch,InteractionManager} from 'react-native';
import { Button,Rating,Avatar, Header,Icon,Tile ,Text as EText,Divider,SearchBar} from 'react-native-elements';
import { FlatGrid as SFlatGrid } from 'react-native-super-grid';
import { List, Checkbox } from 'react-native-paper'

export  class TopPicksCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            foodList: null,
        };

       
}

render() 
{
    return (
<View>
<FlatList
        data={this.props.foodList}
        style={{marginBottom: 10}}
        horizontal
        renderItem={({ item }) => (
            <View style = {{ margin :15, flexDirection : "column"} } >
            <Image style={{borderRadius: 20,height: 100, width: 190}} source = {{uri : item.imgURL}} />
            <EText h4>{item.name}</EText>
            <EText style = {{ fontSize : 15}} >{item.availableHotels} Venues</EText>
</View>
        )}
        
      />
      </View>
    )
}


}

export default class PopularRestCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            popRestList: null,
            
        };
    }
        render() 
{
    return (
<View>
<FlatList
        data={this.props.popRestList}
        style={{marginBottom: 10 }}
        horizontal
        renderItem={({ item }) => (
            <View style = {{ margin :15, flexDirection : "column" ,  width: 260} } >
            <Image style={{borderRadius: 20,height: 150, width: 250}} source = {{uri : item.imgURL}} />
            <EText h4>{item.name}</EText>
            <View style={{flexDirection : "row"}} >
            <Rating
  imageSize={18}
  readonly
  startingValue={4.4}
  ratingCount={5}
  
  
/>
<EText style = {{ fontSize : 15, marginStart: 5}} >{item.rating} </EText>
<EText style = {{ fontSize : 15}} >({item.noReviews} reviews) </EText>

</View>
</View>
        )}
        
      />
      </View>
    )
}


    
}

export class OffersCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            couponsList: null,
            
        };
    }

    render()
    {
        return (
<View>
<FlatList
        data={this.props.couponsList}
        style={{marginBottom: 10 }}
        horizontal
        renderItem={({ item }) => (
            <Image  style={{ borderRadius: 20, margin:10, height: 230, width: 260}} source = {{uri : item}} />
            
        )}
        
      />
      </View>

        )
    }
}

export class QuickSuggestionsCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            restList: null,
        };
      
}

render ()
{

    return (
   <View>
    <FlatList
        data={this.props.restList}
        style={{marginBottom: 5 }}
        horizontal
        renderItem={({ item }) => (
            <View style={{   width: 260 ,margin: 10, flexDirection : "column" ,alignItems : "center"}} >
                         
            <Image  style={{ borderRadius: 20, margin:10, height: 230, width: 260}} source = {{uri : item.imgURL}} />
            <EText h4 style= {{textAlign : "center", marginTop: 1}}>{item.name}</EText>
          <EText >_______</EText>
         <EText style = {{ fontSize : 18 , marginTop: 5, marginBottom: 10, justifyContent: "center"}} >{item.type}</EText>
            </View>

        )}
        
      />           
             </View>   
    )             


}
}

export class CuisineSelectCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            foodList: null,
        };}

render()
{
    return (
        <View>
<FlatList
        data={this.props.foodList}
        style={{marginBottom: 10 }}
        horizontal
        renderItem={({ item }) => (
            <View style={{   width: 180 ,height: 220, margin: 10, flexDirection : "column" ,alignItems : "center"}} >
            <Avatar
  rounded
  size ="xlarge"
  source={{
    uri:
      item.imgURL,
  }}
/>

<EText h4 style= {{textAlign : "center", marginTop: 1}}>{item.type}</EText>
<EText  style={{fontSize: 15}}> {item.availableHotels} Restaurants</EText>
            </View>
        )}
        
      />
      </View>
    )
}

}

export class QuickOrderCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            foodList: null,
        };}

        render()
        {
            return (
                <View>
<FlatList
        data={this.props.foodList}
        style={{marginBottom: 10 }}
        horizontal
        renderItem={({ item }) => (
            <View style={{margin: 15, flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
    <EText style= {{fontSize: 14}}>{item.dishType}</EText>

    <Image  style={{height:100,width:150, flex: 2, alignItems : "flex-start"}} source={{uri: item.imgURL }} />

  <EText style= {{fontSize: 18}}>{item.name}</EText>
<Rating
  imageSize={13}
  readonly
  startingValue={4.4}
  ratingCount={5}
  
  style={{marginEnd:90}}
  
/>
<View style={{height: 20}} /> 

<View style={{flex: 1,marginEnd:24,flexDirection: 'row',justifyContent: 'space-between'}} >
  <EText style={{alignContent: "flex-start",marginTop:10, alignItems: "center", fontSize: 17}}>{item.price}</EText>
<Button
style={{fontSize: 14,marginBottom:10, alignContent: "flex-end"}}
  title="ADD +"
  type="outline"
/>

</View>
     </View>
        )}
        
      />
      </View>
            )
        }
}

export class AllRestaurantsCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            restList: null,
        };}

        render()
        {
            return (
                <View>
                    <FlatList
        data={this.props.restList}
        style={{marginBottom: 10}}
        renderItem={({ item }) => (

          <View style={{ margin:20,  width: 240, flexDirection: "row",justifyContent : "flex-start"}} >
          <Image  style={{height:100,width:100,  alignItems : "flex-start"}} source={{uri: item.imgURL }} />
         
           <View style={{flexDirection: "column",marginStart: 10,marginBottom: 10}} >
             <EText style={{fontSize: 18 , textAlign : "left"}} >{item.name} </EText>
        <EText style={{marginTop: 10,fontSize: 15}}>Briyani,Chinise,Chettinad </EText>
        <EText style={{marginTop: 10,fontSize: 15 , color : "#8A655D"}}>50 % off | Use SuperIT</EText>
        <Divider style={{ backgroundColor: '#CDCDCD',marginEnd:10,marginStart:10 }} />


         
           </View>
         
          </View>
        )}
        
      />

                </View>
            )
        }
}

export class FilterCarousel extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            filterList: null,
        };}

        render ()
        {
            return (
                <View>
                <FlatList
                        data={this.props.filterList}
                        style={{marginBottom: 10 }}
                        horizontal
                        renderItem={({ item }) => (
<Button

containerViewStyle={{borderRadius:10}}
buttonStyle={{borderRadius:10 , marginStart: 10}}
       style={{    borderRadius: 10,resizeMode: 'contain',alignItems: 'center',justifyContent: 'center' , alignContent: "center"}}
       title= {item}
       
       type="outline"/>                            
                        )}
                        
                      />
                      </View>  
            )
        }
}

