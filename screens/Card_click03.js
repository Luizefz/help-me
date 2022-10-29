import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Papel do Professor de Apoio Pedagógico (Em Sala)</Text>
        <Card_content text={'LEI Nº 9.394, DE 20 DE DEZEMBRO DE 1996\n\nEstabelece as diretrizes e bases da educação nacional.\n\n\nCAPÍTULO V\n\nDA EDUCAÇÃO ESPECIAL\n\n\n   Art. 59.  Os sistemas de ensino assegurarão aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:\n\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n\n III - professores com especialização adequada em nível médio ou superior, para atendimento especializado, bem como professores do ensino regular capacitados para a integração desses educandos nas classes comuns;\n\n\nLEI Nº 13.146, DE 6 DE JULHO DE 2015\n\nInstitui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).\n\n\nCAPÍTULO I\n\nDISPOSIÇÕES GERAIS\n\n\n   Art. 3º Para fins de aplicação desta Lei, consideram-se:\n\n  XIII - profissional de apoio escolar: pessoa que exerce atividades de alimentação, higiene e locomoção do estudante com deficiência e atua em todas as atividades escolares nas quais se fizer necessária, em todos os níveis e modalidades de ensino, em instituições públicas e privadas, excluídas as técnicas ou os procedimentos identificados com profissões legalmente estabelecidas;\n\n\nGOVERNO DO ESTADO DE PERNAMBUCO\n\nGERÊNCIA REGIONAL DE EDUCAÇÃO METROPOLITANA SUL (GRE METRO SUL)\n\nCOORDENAÇÃO GERAL DE DESENVOLVIMENTO DA EDUCAÇÃO (CGDE)\n\nEDUCAÇÃO ESPECIAL/INCLUSIVA\n\n\nDe acordo com as necessidades vivenciadas no dia-a-dia das escolas jurisdicionadas a essa Gerência Regional de Educação Metropolitana Sul – (GRE Metro Sul), ficou estabelecido, para a prática pedagógica, que é de responsabilidade do Professor de Apoio Pedagógico, em sala:\n\n 1 – Facilitar a inclusão e participação do aluno nas aulas, bem como adaptar, simplificar, mediar e instigar as potencialidades do mesmo junto ao professor regente;\n\n  2 – Acompanhar o processo de ensino aprendizagem do aluno através de DIÁRIO DE BORDO (registro diário de desenvolvimento individual);\n\n   3 – Fazer relatório descritivo sobre as dificuldades e potencialidades apresentadas no dia-a-dia do aluno para o professor do Atendimento Educacional Especializado (AEE), caso a escola disponha, em tempo combinado entre ambos;\n\n 4 – Participar das avaliações formativas do aluno, podendo criar parceria com o professor regente para elaborarem estratégias que garantam a participação de igualdade e equidade;\n\n 5 – Participar do conselho de classe, podendo, junto com o professor regente, opinar pela progressão ou não do aluno;\n\n 6 – Replicar a importância da inclusão, do direito do aluno com deficiência, junto com a equipe gestora da escola, professor do atendimento educacional especializado (AEE) e demais envolvidos, através de ações de mobilização e sensibilização;\n\n 7 – Participar das formações continuadas ofertadas pela coordenação de Educação Especial/Inclusiva da Gerência Regional de Educação Metropolitana Sul (GRE Metro Sul);'} ></Card_content>

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
        backgroundColor: '#f3eee8',
        borderRadius: 8,
        textAlign: 'center'
      },
})
