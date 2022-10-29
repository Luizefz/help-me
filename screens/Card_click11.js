import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>I EXPOR ARTE DA EDUCAÇÃO INCLUSIVA - 2021</Text>
        <Card_content text={'Data: 11/08\n\nHorário: 09h\n\nLocal: GRE metropolitana Sul\n\nQuantitativo de pessoas: 30 (aproximadamente)\n\n\nOBJETIVO:\n\n\nTrazer à tona as potencialidades artísticas dos alunos com deficiência das escolas da Gerência Regional de Educação Metropolitana Sul. Mostrar, por meio da arte: dança, canto, poesia, desenho, pintura, origami e artesanato a capacidade e talento daqueles que, muitas vezes, são esquecidos, vistos como incapazes por conta das suas diferenças.\n\n\nCRONOGRAMA/PROGRAMÇÃO:\n\n\nO evento aconteceu em três ambientes: rol de entrada, rol do primeiro piso e sala Maria do Rosário.\n\nA abertura foi na sala Maria do Rosário. Em seguida todos os alunos foram para espaços de exposições: dança, poesia e canto ficaram na sala Maria do Rosário; desenho, pintura, origami e artesanato no rol do primeiro piso; fotos ampliadas no rol de entrada.\n\nOs alunos foram acompanhados por seus professores e fiseram juntos a apresentação da(s) obra(s).\n\nAs escolas foram responsáveis pelos custos de seus respectivos representantes: locomoção, lanche etc.\n\n\nRECURSOS:\n\n\nFaixa ou banner com tema do evento;\n\nCard de divulgação; \n\nConvite;\n\nDecoração;'} ></Card_content>

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
        backgroundColor: '#ffe665',
        borderRadius: 8,
        textAlign: 'center'
      },
})
