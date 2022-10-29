import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Professor Tradutor e Intérprete de Libras</Text>
        <Card_content text={'LEI Nº 9.394, DE 20 DE DEZEMBRO DE 1996\n\nEstabelece as diretrizes e bases da educação nacional.\n\n\nCAPÍTULO V\n\nDA EDUCAÇÃO ESPECIAL\n\n\nArt. 59.  Os sistemas de ensino assegurarão aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:\n\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n\n		III - professores com especialização adequada em nível médio ou superior, para atendimento especializado, bem como professores do ensino regular capacitados para a integração desses educandos nas classes comuns;\n\n\nLEI Nº 13.146, DE 6 DE JULHO DE 2015\n\nInstitui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).\n\n\nCAPÍTULO I\n\nDISPOSIÇÕES GERAIS\n\n\n		Art. 3º Para fins de aplicação desta Lei, consideram-se:\n\n		XIII - profissional de apoio escolar: pessoa que exerce atividades de alimentação, higiene e locomoção do estudante com deficiência e atua em todas as atividades escolares nas quais se fizer necessária, em todos os níveis e modalidades de ensino, em instituições públicas e privadas, excluídas as técnicas ou os procedimentos identificados com profissões legalmente estabelecidas;\n\n\n\GOVERNO DO ESTADO DE PERNAMBUCO\n\nGERÊNCIA REGIONAL DE EDUCAÇÃO METROPOLITANA SUL (GRE METRO SUL)\n\nCOORDENAÇÃO GERAL DE DESENVOLVIMENTO DA EDUCAÇÃO (CGDE)\n\nEDUCAÇÃO ESPECIAL/INCLUSIVA\n\n\n		De acordo com as necessidades vivenciadas no dia-a-dia das escolas jurisdicionadas a essa Gerência Regional de Educação Metropolitana Sul – (GRE Metro Sul), ficou estabelecido, para a prática pedagógica, que é de responsabilidade do Professor Tradutor e Intérprete de Libras: \n\n		1 – Efetuar comunicação entre surdos e ouvintes, surdo e surdo, por meio da Libras para a língua oral e vice-versa;\n\n		2 – Interpretar nos eventos da escola ou da Gerência de Educação, quando for solicitado (a);\n\n		3 – Replicar a importância da inclusão, do direito do aluno com deficiência, junto com a equipe gestora da escola, professor do atendimento educacional especializado (AEE) e demais envolvidos, através de ações de mobilização e sensibilização;\n\n		4 – Participar das formações continuadas ofertadas pela coordenação de Educação Especial/Inclusiva da Gerência Regional de Educação Metropolitana Sul – GRE;'}></Card_content>

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
        backgroundColor: '#fcc002',
        borderRadius: 8,
        textAlign: 'center'
      },
})
