import React from 'react'
import { ImageBackgroundBase } from 'react-native'
import {
    View,
    Image,
    TouchableOpacity, 
    Text,
    ImageBackground,} from 'react-native'

import fondo from '../images/restaurant.jpg'

export default class Product extends React.Component{
    render(){
        return(
            <ImageBackground
            onPress={this.props.onPress}
            style={{
                /* backgroundColor:"#FFE045", */
                height:120,
                width:300,
                margin:20,
                justifyContent:'flex-start',
                flexDirection:'row',
                marginTop:5,
            }}
            source={fondo}>
            <View style={{
                marginLeft:15,
                justifyContent:'center'
                }}>
                <Text style={{
                    fontSize:30,
                    textTransform:'uppercase',
                    fontWeight:"bold",
                    paddingHorizontal:10,
                    margin: 10,
                    marginBottom:1,
                    marginLeft:15,
                    alignSelf:'center',
                    color:'black',
                    backgroundColor:'#FFE045',
                    borderRadius:10,
                    padding:5,
                    opacity:0.9
                }}>
                    {this.props.title}
                </Text>
                <Text style={{
                  fontSize:15,
                  textTransform:'uppercase',
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  marginTop:5,
                  margin: 10,
                  marginLeft:15,
                  alignSelf:'center',
                  color:'black',
                  backgroundColor:'#B2ACAC',
                  borderRadius:10,
                  padding:5,
                  opacity:0.9
                }}>
                    {this.props.filter}
                </Text>
            </View>
            <View style={{
                justifyContent:'flex-end',
                flexDirection:'row',
                alignItems:'center',
                width:'50%'}}>
                <Image 
                    source={this.props.logo} 
                    style={{
                        resizeMode:'contain',
                        height:90,
                        width:90,
                    }}/>
            </View>

          </ImageBackground>
        )
    }
}