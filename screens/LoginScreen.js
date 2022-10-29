import React from 'react';
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts} from '@expo-google-fonts/inter';
import { auth } from '../firebase';
import AppLoading from 'expo-app-loading';



const LoginScreen = () => {

    

    const fonts = useFonts ({
        Inter_400Regular, 
        Inter_500Medium, 
        Inter_600SemiBold
    });

    if (!fonts){
        return <AppLoading />;
    }

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const navigation = useNavigation();
    
    const verifica = () =>{
    if ((email, password) !== '' ) {
        handleSingIn()
        } else{
            Alert.alert(
            "Oops!",
            "Os campos não foram preenchidos.",
            )
        }
    }

    const handleSingIn = () =>{
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('logado!', user.email)
            })
            .catch(error => ( 
                Alert.alert(
                "Login incorreto",
                "Por favor, verifique as informações digitadas.",
                )
    ))
}
    

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

        <KeyboardAvoidingView keyboardVerticalOffset = { -600 } style={ styles.container } behavior="padding">

        <SafeAreaView>
        <ScrollView>

        <View style={ styles.HelpMeWrapper }>
            <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Login</Text>
            <Text style={ styles.sectionText}>Preencha as informações abaixo para realizar o login.</Text>
            </View>

            <View style={ styles.inputContainer }>

                <Text style={ styles.text }>Email</Text>
                <TextInput placeholder="exemplo@email.com" style={ styles.input } value={email} onChangeText={text => SetEmail(text)}></TextInput>

                <Text style={ styles.text }>Senha</Text>
                <TextInput placeholder="Digite sua senha" style={ styles.input } value={password} onChangeText={text => SetPassword(text)} secureTextEntry></TextInput>

                <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('ResetPassword');
                } catch (err) {
                    console.error(err);
                }}} style={ styles.esqueciButton }>

                    <Text style={ styles.esqueciButton }>Esqueci minha senha.</Text>

                </TouchableOpacity>
            
            </View>
        
            <View style={ styles.buttonContainer }>

                <TouchableOpacity onPress={verifica}
                style={ styles.button }>
                    
                    <Text style={ styles.button }>Login</Text>

                </TouchableOpacity>

            </View>
            <StatusBar style="auto" />
        </View>
        </ScrollView>
        </SafeAreaView>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    HelpMeWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle:{
        fontSize: 24,
        fontFamily: "Inter_600SemiBold",
    },
    sectionText:{
        fontSize: 20,
        fontFamily: 'Inter_500Medium',
    },
    text:{
        fontSize: 25,
        padding: '2%',
        fontFamily: 'Inter_600SemiBold',
    },
    inputContainer:{
        width:'100%',
        marginTop: 150  
    },
    esqueciButton:{
        fontSize: 16,
        fontFamily: "Inter_600SemiBold",
        marginTop: 8
    },
    input:{
        backgroundColor: '#d9d9d9',
        height: 70,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
    },
    buttonContainer:{
        width: '100%',
        marginTop: 40,
        justifyContent: 'center',
    },
    button:{
        backgroundColor: '#0c72c4',
        width: '100%',
        height: 70,
        fontFamily: 'Inter_500Medium',
        fontSize: 27,
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
        paddingBottom: 5,
        marginBottom: 10,
        borderRadius: 10
    },
})
