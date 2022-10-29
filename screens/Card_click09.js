import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Semana Nacional da Pessoa com Deficiência 2021</Text>
        <Card_content text={'É TEMPO DE TRANSFORMAR CONHECIMENTO EM AÇÃO \n\n\n“Incluir é garantir o direito de pertencimento à educação”\n\n\n“Sentir, conhecer e reconhecer”\n\n\n\Local: sala Maria do Rosário\n\nData: 25/08\n\nHorário: 10h às 12h e 14h às 16h\n\nPúblico Alvo:\nProfissionais da Gerência\n\nRegional de Educação Metropolitana Sul\n\n\nOBJETIVO:\n\n\nSensibilizar os funcionários da Gerência Regional de Educação Metropolitana Sul acerca da importância da luta pelos direitos, respeito e inclusão da pessoa com deficiência. Apresentar, para disseminação do conhecimento, as necessidades específicas através de palestra, depoimento, vídeo, folder, cartaz, banner e oficina, chamando a atenção para o necessário combate ao preconceito e descriminação.\n\n\nJUSTIFICATIVA:\n\n\nA Lei Federal n° 13.585, de 26 de dezembro de 2017, instituiu a Semana Nacional da pessoa com deficiência Intelectual e Múltipla a ser comemorada de 21 a 28 de agosto de cada ano.\n\nDe acordo com a legislação, as comemorações da Semana Nacional da Pessoa com Deficiência Intelectual e Múltipla visam ao desenvolvimento de conteúdos para conscientizar a sociedade sobre as necessidades específicas de organização social e de políticas para promover a inclusão social desse segmento populacional e para combater o preconceito e a discriminação.\n\nInstituída em 1964, com o nome da Semana Nacional da Criança Excepcional, foi pensada para elucidar a condição dessas pessoas de forma a contribuir para a desconstrução de preconceitos, divulgar quais são as necessidades destas pessoas, cada uma com sua excepcionalidade e colocar a sociedade em reflexão no dever de igualdade para inclusão.\n\nA semana também tem a função de sensibilizar governos e comunidades em relação às potencialidades das pessoas com deficiência e chamar a atenção para suas necessidades, tanto para a definição de políticas públicas quanto para o combate ao preconceito.\n\n\nCRONOGRAMA:\n\n\nManhã\n\n10h - 11h\nPalestra e vídeo\nFelipe Gervásio\n\n11h - 11:30\nOficina de Libras\nProfessor Técnico Klelber Vieira\n\n11:30 - 12h\nOficina de Braille\nProfessor Técnico Oberdan Mota\n\nTarde\n\n14h - 15h\nPalestra e vídeo\nOberdan Mota\n\n15h - 15:30 - Oficina de Braille\nProfessor Técnico Oberdan Mota\n\n15:30 - 16h\nOficina de Libras Professor Técnico Klelber Vieira\n\n\nRECURSOS PEDAGÓGICOS E TECNOLÓGICOS:\n\n\nBanners;\n\nFolder;\n\nFrases em adesivo;\n\nÁudio e Mídia;'} ></Card_content>

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
        backgroundColor: '#d095e7',
        borderRadius: 8,
        textAlign: 'center'
      },
})
