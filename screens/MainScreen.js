import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cards from '../components/Cards';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts} from '@expo-google-fonts/inter';
import { auth } from '../firebase';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {

  const fonts = useFonts ({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold
  });
  
  if (!fonts){
    return <AppLoading />;
  }

  const navigation = useNavigation();

  const handleSingOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('Deslogado!')
        navigation.replace('Home')
      })
  }

  return (
  
    <SafeAreaView>
    <ScrollView>


    <View style={styles.container}>
    
    {/* Header do Help me! */}
      
    

    <View style={styles.HelpMeWrapper}>
      <View style={styles.containerTop}>
        
        <Text style={styles.sectionTitle}>Help me!</Text>

        <TouchableOpacity onPress={handleSingOut}>
        <Image source={require('../assets/logout-icon.png')} style={styles.sectionImage}/>
        </TouchableOpacity>
      </View>
      
      

      <View style={styles.items}>

        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen06');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'I EXPO\nArte Inclusiva'} image={require('../assets/I-expo.png')} color={'#ffe665'}/>

        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen08');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'II Festival de\nJogos\nInclusivos'} image={require('../assets/II-festival-brincadeiras.png')} color={'#eb9250'}/>

        </TouchableOpacity> 

        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen09');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Semana da\nPessoa com\nDeficiência'} image={require('../assets/semana-nacional.png')} color={'#d095e7'}/>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen01');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Gestora\nEscolar'} image={require('../assets/gestão-escolar02.png')} color={'#93d4ea'}/>

        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen10');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Professor\nTradutor e\nIntérprete de\nLibras'} image={require('../assets/interprete-libras.png')} color={'#fcc002'}/>

        </TouchableOpacity>
        




        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen02');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Professor\nRegente'} image={require('../assets/professor-regente.png')} color={'#f8eee3'}/>

        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen05');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Professor do\nAEE'} image={require('../assets/AEE03.png')} color={'#cb8eff'}/>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen03');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Professor de\nApoio'} image={require('../assets/professor-apoio03.png')} color={'#f3eee8'}/>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen04');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Professor\nBrailista'} image={require('../assets/professor-brailista03.png')} color={'#f1f3c2'}/>

        </TouchableOpacity>

      <TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen07');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Professor\nClasse Especial'} image={require('../assets/classe-especial.png')} color={'#0facc9'}/>

        </TouchableOpacity>

      {/*<TouchableOpacity onPress={() => {
                try {
                    navigation.navigate('Card_Screen07');
                } catch (err) {
                    console.error(err);
                }}}>

          <Cards text={'Professor\nClasse Especial'} image={require('../assets/classe-especial.png')} color={'#0facc9'}/>

        </TouchableOpacity>*/}


        </View>



    </View>
    <StatusBar style="auto" />
    </View>
    
    </ScrollView>
     </SafeAreaView>
  );
}

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
    fontSize: 23,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 30
  },
  sectionImage:{
    width: 29,
    height: 29,
  },
  containerTop:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  items:{},
});
