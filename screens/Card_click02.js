import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Professor Regente</Text>
        <Card_content text={'LEI Nº 9.394, DE 20 DE DEZEMBRO DE 1996\n\nEstabelece as diretrizes e bases da educação nacional.\n\n\nCAPÍTULO V\n\nDA EDUCAÇÃO ESPECIAL\n\n\n    Art. 59. Os sistemas de ensino assegurarão aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:\n\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n\nIII - professores com especialização adequada em nível médio ou superior, para atendimento especializado, bem como professores do ensino regular capacitados para a integração desses educandos nas classes comuns;\n\nLEI Nº 13.146, DE 6 DE JULHO DE 2015\n\nInstitui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).\n\n\nCAPÍTULO I\nDISPOSIÇÕES GERAIS\n\n\n   Art. 3º Para fins de aplicação desta Lei, consideram-se:\n\n  XIII - profissional de apoio escolar: pessoa que exerce atividades de alimentação, higiene e locomoção do estudante com deficiência e atua em todas as atividades escolares nas quais se fizer necessária, em todos os níveis e modalidades de ensino, em instituições públicas e privadas, excluídas as técnicas ou os procedimentos identificados com profissões legalmente estabelecidas;\n\nGOVERNO DO ESTADO DE PERNAMBUCO\nGERÊNCIA REGIONAL DE EDUCAÇÃO METROPOLITANA SUL (GRE METRO SUL)\n\nCOORDENAÇÃO GERAL DE DESENVOLVIMENTO DA EDUCAÇÃO (CGDE)\n\nEDUCAÇÃO ESPECIAL/INCLUSIVA\n\n\n   De acordo com as necessidades vivenciadas no dia-a-dia das escolas jurisdicionadas a essa Gerência Regional de Educação Metropolitana Sul – (GRE Metro Sul), ficou estabelecido, para a prática pedagógica, que é de responsabilidade do professor regente:\n\n  1 – Promover o processo de ensino aprendizagem de seu aluno com deficiência, em parceria com a gestão escolar, Professor de Apoio Pedagógico e Professor do Atendimento Educacional Especializado (AEE), caso a escola disponha;\n\n    2 – Garantir, junto a equipe de Educação Especial/inclusiva, a participação integral do aluno nas aulas, de acordo com suas necessidades e limitações apresentadas;\n\n  3 - Proporcionar a inclusão do aluno, bem como adaptar, simplificar, mediar e instigar as potencialidades do mesmo, junto ao Professor de Apoio Pedagógico;\n\n  4 – Solicitar do Professor de Apoio Pedagógico, parceria nas adaptações e acompanhamento nas atividades no dia-a-dia, nas avaliações e na participação do conselho de classe;\n\n 5 – Lançar nota, bem como preencher todos os critérios exigidos no SIEPE, em parceria com o Professor de Apoio Pedagógico, levando em consideração as limitações apresentadas pelo aluno;\n\n 6 – Manter uma convivência harmoniosa e natural com o aluno, de forma que não transpareça e evidencie que tem deficiência;\n\n  7 – Dialogar com a família sobre o processo de inclusão e ensino aprendizagem do aluno;\n\n 8 – Dialogar com o Professor do Atendimento Educacional Especializado (AEE) sobre as necessidades gerais apresentadas no dia-a-dia do aluno e fortalecer parceria para a prática pedagógica;\n\n 9 – Envolver-se nas ações referentes à inclusão, mobilização, sensibilização e do direito do aluno com deficiência, junto com a equipe gestora da escola, Professor de Apoio Pedagógico, Professor do Atendimento Educacional Especializado (AEE) e demais envolvidos;'} ></Card_content>

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
        backgroundColor: '#f8eee3',
        borderRadius: 8,
        textAlign: 'center'
      },
})
