import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>II FESTIVAL DE BRINCADEIRAS, JOGOS POPULARES E DE SALÃO INCLUSIVOS</Text>
        <Card_content text={'APRESENTAÇÃO\n\n\n	 Os jogos e as brincadeiras são elementos indispensáveis no âmbito da formação da criança, pois oferece alicerce para suprir suas necessidades mais acentuadas da ação. No ato da criança jogar, ela opera com o significado das suas ações, implicando em desenvolver as suas vontades e ao mesmo tempo conscientizar-se das suas decisões e escolhas.\n\n     Desse modo, a ideia é oportunizar às crianças do ensino fundamental da rede pública estadual, um trato teórico metodológico das brincadeiras e dos Jogos (populares e de salão), propiciando a estas, um espaço em que utilizem suas experiências, criando e/ou recriando, com prazer as brincadeiras e os jogos, a partir do dado de sua realidade.\n\n\nOBJETIVO:\n\n\n	 Proporcionar o resgate das brincadeiras, dos jogos populares e de salão, através de um festival, envolvendo os alunos das escolas estaduais do município de Jaboatão da GRE Metropolitana Sul.\n\n\nOFICINAS:\n\n\nCABO DE GUERRA\n\nFUTEBOL DE DUPLAS\n\nBARRA BANDEIRA\n\nBOLICHE\n\nQUEIMADO\n\nESTAFETAS\n\nJOGO DA TRILHA\n\nJOGOS DE SALÃO\n\n\nPROGRAMAÇÃO:\n\n\n08h:00\nACOLHIMENTO DOS ALUNOS\n\n08h:30min\nABERTURA E APRESENTAÇÃO CULTURAL\n\n09h:00\nINÍCIO DAS OFICINAS\n\n11h:00\nENCERRAMENTO\n\nLOCAL\nETE MAXIMIANO, JABOATÃO DOS GUARARAPES\n\nDATA\n16/08/2019\n\nHORÁRIO\n08h:00 ÀS 11h:30min'} ></Card_content>

        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    HelpMeWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20,
      },
      sectionTitle:{
        fontSize: 23,
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 30,
        backgroundColor: '#eb9250',
        borderRadius: 8,
        textAlign: 'center'
      },
})
