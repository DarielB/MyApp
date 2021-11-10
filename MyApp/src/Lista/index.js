import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Button, Linking, Alert } from 'react-native';


const openUrl = async(url) => {
    if(await Linking.canOpenURL(url)) {
      await Linking.openURL(url)
    }
    else {
      ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
    }
  }

class Lista extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.bloco}>
                    <View style={styles.flex}>
                        <Image source={{ uri: this.props.data.avatar_url}} style={styles.avatar} />
                        <Text style={styles.slogin}>
                            Login: {this.props.data.login} {"\n"}
                            Id: {this.props.data.id}.     Type: {this.props.data.type}       
                        
                        </Text>
                    </View>
                        <Button
                            title = 'More Information'
                            onPress = {() => openUrl(this.props.data.html_url)}
                            color = '#2AB0E5'

                        />

                </View>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2AB0E5",

    },
    bloco: {

        height: 100,
        backgroundColor: "#FFF",
        marginBottom: 10,
        borderRadius: 20,
        margin: 10,

    },
    flex: {
        flex: 1,
        flexDirection: 'row',
    },
    
    slogin: {
      backgroundColor: '#FFF',
      fontSize: 15,
      color: '#000',
      margin: 10,
    },

    
    avatar: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#000",
   
    },

    button: {
        flexDirection: 'column',
        marginVertical: 7,
    }


  });



export default Lista;