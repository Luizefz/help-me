import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { StatusBar } from 'expo-status-bar';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';


const HomeScreen = () => {

    const fonts = useFonts ({
        Inter_400Regular, 
        Inter_500Medium, 
        Inter_600SemiBold
    });

    if (!fonts){
        return <AppLoading />;
    }

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                try {
                    navigation.replace('Main');
                } catch (err) {
                    console.error(err);
            }}
            })
        return unsubscribe
    }, [])

    
    return (
    
    <ScrollView>

    <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Help me!</Text>

        </View>
        <View style={ styles.sectionImage}>
            <Image source={require('../assets/Home-image.png')} style={styles.sectionImage}/>
        </View>
        
        <View>
            <Text style={ styles.text}>Instruções e informações de modo fácil e acessível à todos.</Text>
        </View>

            <View style={ styles.buttonContainer }>

                <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Login');
                } catch (err) {
                    console.error(err);
                }}}
                style={[ styles.button, {backgroundColor:'#0c72c4'} ]}>
    
                    <Text style={[ styles.button, {color: '#ffffff'} ]}>Login</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('SingUp');
                } catch (err) {
                    console.error(err);
                }}}
                style={ styles.buttonR }>
    
                    <Text style={[ styles.button, {color: '#0c72c4'} ]}>Cadastrar</Text>

                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
    </View>
    </ScrollView>

    )
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    HelpMeWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle:{
        fontSize: 24,
        fontFamily: "Inter_600SemiBold",
        marginBottom: 30,
        color: '#000000'
    },
    text:{
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8
    },
    buttonContainer:{
        width: '100%',
        marginTop: 40,
        marginBottom: 40,
        justifyContent: 'center',
    },
    button:{
        width: '100%',
        height: 70,
        fontFamily: 'Inter_500Medium',
        fontSize: 27,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 5,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonR:{
        borderColor: '#087fd3',
        borderWidth: 2,
        borderRadius: 10,
        height: 70,
    },
    sectionImage:{
        width: '100%',
        height: 395,
        resizeMode: 'contain',
        /*width: 300,
        height: 300,
        padding: '50%',
        paddingBottom: 0,
        paddingTop: 0,
        marginBottom: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, */

    },

})
