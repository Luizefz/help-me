import React from 'react'
import { StyleSheet, Text, TextInput, View, Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import * as firebase from 'firebase';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts} from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

const ResetPassScreen = () => {
    
    const fonts = useFonts ({
        Inter_400Regular, 
        Inter_500Medium, 
        Inter_600SemiBold
    });

    if (!fonts){
        return <AppLoading />;
    }

    const navigation = useNavigation();

    const [email, SetEmail] = useState('')

    
    const verifica = () =>{
        if ((email) !== '' ) {
            forgotPassword()
            } else{
                Alert.alert(
                "Oops!",
                "O campo email não foi preenchido.",
                )
            }
        }

    //redefinir Senha
    async function forgotPassword(){
        //redefinir Senha
        await firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert(
                "Redefinição enviada!",
                "Por favor, verifique o seu email.",
                );
            {
                try {
                    navigation.navigate('Home');
                } catch (err) {
                    console.error(err);
            }}
            })
        .catch((error) => {
            alert(error.message)
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset = { -600 } style={ styles.container } behavior="padding">

        <SafeAreaView>
        <ScrollView>

        <View style={ styles.HelpMeWrapper }>
            <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Redefinir Senha</Text>
            <Text style={ styles.sectionText}>Preencha as informações abaixo para redefinir sua senha.</Text>
            </View>

            <View style={ styles.inputContainer }>

                <Text style={ styles.text }>Email</Text>
                <TextInput placeholder="exemplo@email.com" style={ styles.input } value={email} onChangeText={text => SetEmail(text)}></TextInput>
            </View>
        </View>

        <View style={ styles.buttonContainer }>

            <TouchableOpacity onPress={verifica} style={ styles.button }>
    
            <Text style={ styles.button }>Redefinir</Text>

            </TouchableOpacity>

        </View>

        </ScrollView>
        </SafeAreaView>

        </KeyboardAvoidingView>
    )
}

export default ResetPassScreen

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
        marginTop: 20,
        padding: 18,
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
