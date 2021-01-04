import React from 'react'
import {View,Image,Picker,Text, StyleSheet, ImageBackground, SafeAreaView} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"
import { FontAwesome5 } from '@expo/vector-icons';
import Product from '../components/Product';
import main from '../images/main.png';


export default class Home extends React.Component{
    state={
        city:"Poza Rica"
    }
    
    render(){
        return(
            <ScrollView style={{backgroundColor:"#FFF"}}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:40,
                    marginHorizontal:20
                    }}>
                        <View>
                            <SafeAreaView style={{flex:1}}>
                                <TouchableOpacity
                                    style={{alignItems: 'flex-start', margin:5, marginTop:15}}
                                    onPress={this.props.navigation.openDrawer}>
                                    <FontAwesome5 name="bars" size={25} color="#161924"/>
                                </TouchableOpacity>
{/*                                 <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={styles.textSlider}>{this.props.name}Screen</Text>
                                </View> */}
                            </SafeAreaView>
                        </View>

                        <View style={{
                            width:"80%",
                            alignItems:"center"
                            }}>
                                <Picker
                                    selectedValue={this.state.city}
                                    style={{height:50,width:160}}
                                    onValueChange={(itemValue,itemIndex)=> this.setState({city:itemValue})}>

                                    <Picker.Item
                                        label="POZA RICA, VER."
                                        value="POZA RICA, VER."
                                        style={{fontWeight:"bold"}}/>
                                </Picker>
                        </View>

                        <View style={{width:"10%"}}><Image 
                            source={require('../images/logo.png')}
                            style = {{height:60,width:60}}/>
                        </View>

                </View>
                              
                <View style={{
                    paddingHorizontal:20,
                    borderRadius:30,
                    margin:20,
                    padding:20,
                    alignItems: 'center',
                    backgroundColor:'black'}}>
                        <Text style={{
                            fontSize:30,
                            fontWeight:"bold",
                            color:'white'
                        }}>Bienvenido a</Text>
                        <Text style={{
                            fontSize:50,
                            fontWeight:"bold",
                            color:'white'
                        }}>CallWaiter</Text>
                        <Text style={{
                            fontSize:15,
                            fontWeight:"bold",
                            color:'white',
                            opacity:0.8
                        }}>-App by WebLand-</Text>

                </View> 

                <View style={{
                    alignItems:"center",
                    marginHorizontal:20,
                    flexDirection:"row", 
                    marginTop:40,
                    marginBottom:20
                    }}>                       
                        <View style={{
                           width:"50%"
                        }}>
                            <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                            }}>Restaurantes</Text>
                        </View>
{                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                        }}>
                           <Icon
                            name="dots-three-horizontal"
                            size={25}
                            color="#848385"/>
                        </View>}
                </View>
                  
                <ImageBackground source={main} style={styles.cards}>  
                    <View style={styles.restaurantCard}>
                            <Product
                                image={require("../images/4.png")}
                                title="TOKS"
                                onPress={() => this.props.navigation.navigate('Detail')}
                            />
                            
                            <Product
                                image={require("../images/9.png")}
                                title="VIPS"
                                onPress={() => this.props.navigation.navigate('Detail')}
                                marginTop={25}
                            />
                    </View>

                    <View style={styles.restaurantCard}>
                            <Product
                                image={require("../images/6.png")}
                                title="CAVA"
                                onPress={() => this.props.navigation.navigate('Detail')}
                            />
                            <Product
                                image={require("../images/10.png")}
                                title="ESPADAS DE BRASIL"
                                onPress={() => this.props.navigation.navigate('Detail')}
                                marginTop={25}
                            />
                    </View>

                    <View style={styles.restaurantCard}>
                            <Product
                                image={require("../images/4.png")}
                                title="FAJA DE ORO"
                                onPress={() => this.props.navigation.navigate('Detail')}
                            />
                            <Product
                                image={require("../images/9.png")}
                                title="EL PESCADOR"
                                onPress={() => this.props.navigation.navigate('Detail')}
                                marginTop={25}
                            />
                    </View>
                </ImageBackground>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    },
    restaurantCard: {
        flexDirection:"row",
        /* marginHorizontal:15, */
        marginTop:30,
        marginBottom:20
    },
    cards: {
        height: '100%',
        width:'100%',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    },
    slider: {
        flex:1,
        backgroundColor: "#FFF"
    },
    textSlider: {
        color: '#161924', fontSize:20, fontWeight:"500"
    }
  });