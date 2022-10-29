import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card_content = (props) => {

    return (
        <View style={styles.item}>
        
            <View style={ styles.itemLeft}>
                <Text style={ styles.itemText }>{props.text}</Text>   
            </View>      
        </View>

    )
}

const styles = StyleSheet.create({
    itemText:{
        fontSize:20,
        fontFamily: 'Inter_500Medium',
        marginBottom: '40%',
        textAlign: 'justify',
    }
    
})

export default Card_content;
