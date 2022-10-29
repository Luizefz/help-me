import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts} from '@expo-google-fonts/inter';
import { auth } from '../firebase';
import AppLoading from 'expo-app-loading';


const SingUpScreen = () => {

    const fonts = useFonts ({
        Inter_400Regular, 
        Inter_500Medium, 
        Inter_600SemiBold
    });

    if (!fonts){
        return <AppLoading />;
    }

    const navigation = useNavigation();

    const [shouldShow, setShouldShow] = useState(true);

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    /*const [verifypassword, SetVerifyPassword] = useState('')
    const [municipio, SetMunicipio] = useState('')
    const [nome, SetNome] = useState('')*/

    
    const verifica = () =>{
        if ((email, password) !== '' ) {
            handleSingUp()
            } else{
                Alert.alert(
                "Oops!",
                "Os campos não foram preenchidos.",
                )
            }
        }

    const handleSingUp = () =>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Novo usuário criado', user.email)
            Alert.alert(
                "Sucesso!",
                "O usuário foi criado.",
                );
            {
                try {
                    navigation.navigate('Home');
                } catch (err) {
                    console.error(err);
            }}
            })
            .catch(error => alert(error.message))
            }

/*
    function InsertData(){
        set(ref(db, "usuarios/"+ email), {
            Nome: nome,
            Municipio : municipio,
        })
        .then(() => {
            console.log('Informações salvas no banco');
        })
        .cath(error => console.log(error.message))
        }

            
    function writeUserData(email,nome,municipio){
        firebase.database().ref('Usuarios/').set({
            email,
            nome,
            municipio
            }).then((data)=>{
                //success callback
                 console.log('data ' , data)
            }).catch((error)=>{
                //error callback
                console.log('error ' , error)
            })
        }*/

    return (
        
        <KeyboardAvoidingView keyboardVerticalOffset = { -600 } style={ styles.container } behavior="padding">

        <SafeAreaView>
        <ScrollView>
        <View style={ styles.HelpMeWrapper }>
            <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Cadastro</Text>
            <Text style={ styles.sectionText}>Preencha as informações abaixo para realizar o cadastro.</Text>
            </View>

            <View style={ styles.inputContainer }>
{/*
               {shouldShow ? (

                <Text style={ styles.text }>Nome</Text>) : null}
                
                {shouldShow ? (

                <TextInput placeholder="ex: Gabriel" style={ styles.input } value={nome} onChangeText={text => SetNome(text)}></TextInput>) : null}
                */}
                {shouldShow ? (

                <Text style={ styles.text }>Email</Text>) : null}

                {shouldShow ? (
                <TextInput placeholder="exemplo@email.com" style={ styles.input } value={email} onChangeText={text => SetEmail(text)}></TextInput>) : null}
{/*
                {shouldShow ? (
                <Text style={ styles.text }>Município</Text>) : null}

                {shouldShow ? (
                <TextInput placeholder="Digite o seu município" style={ styles.input } value={municipio} onChangeText={text => SetMunicipio(text)}></TextInput>) : null}
                */}
                {!shouldShow ? (
                <Text style={ styles.text }>Senha</Text>) : null}

                {!shouldShow ? (
                <TextInput placeholder="Digite a sua senha" style={ styles.input } value={password} onChangeText={text => SetPassword(text)} secureTextEntry></TextInput>) : null}
{/*
                {!shouldShow ? (
                <Text style={ styles.text }>Confirmar Senha</Text>) : null}

                {!shouldShow ? (
                <TextInput placeholder="Redigite a sua senha" style={ styles.input } value={verifypassword} onChangeText={text => SetVerifyPassword(text)} secureTextEntry></TextInput>) : null}
                */}

                {shouldShow ? (
                <TouchableOpacity onPress={() => {setShouldShow(!shouldShow)}} style={[ styles.arrowButton, styles.button, styles.buttonArrowContainer ]}>

                    <Image source={require('../assets/arrow_forward.png')} style={ styles.arrowButton } />

                </TouchableOpacity>) : null}
            
            </View>
            
            
            <View style={ styles.buttonContainer }>

                {!shouldShow ? (
                <TouchableOpacity onPress={verifica}
                style={ styles.button }>
                    
                    <Text style={ styles.button }>Cadastrar</Text>

                </TouchableOpacity>) : null}

            </View>
            <StatusBar style="auto" />
        </View>
        </ScrollView>
        </SafeAreaView>

        </KeyboardAvoidingView>

    )
}

export default SingUpScreen

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
        marginTop: '30%'
    },
    arrowButton:{
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
    buttonArrowContainer:{
        width: '100%',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
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
        marginBottom: 10,
        paddingBottom: 5,
        borderRadius: 10
    },
})
