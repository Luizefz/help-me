import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Professor AEE - Atendimento Educacional Especializado</Text>
        <Card_content text={'LEI Nº 9.394, DE 20 DE DEZEMBRO DE 1996\n\nEstabelece as diretrizes e bases da educação nacional.\n\nCAPÍTULO V\n\nDA EDUCAÇÃO ESPECIAL\n\n Art. 58.  Entende-se por educação especial, para os efeitos desta Lei, a modalidade de educação escolar oferecida preferencialmente na rede regular de ensino, para educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação.\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n   1º Haverá, quando necessário, serviços de apoio especializado, na escola regular, para atender às peculiaridades da clientela de educação especial.\n\n   Art. 59.  Os sistemas de ensino assegurarão aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n III - professores com especialização adequada em nível médio ou superior, para atendimento especializado, bem como professores do ensino regular capacitados para a integração desses educandos nas classes comuns;\n\nGOVERNO DO ESTADO DE PERNAMBUCO\n\nGERÊNCIA REGIONAL DE EDUCAÇÃO METROPOLITANA SUL (GRE METRO SUL)\n\nCOORDENAÇÃO GERAL DE DESENVOLVIMENTO DA EDUCAÇÃO (CGDE)\n\nEDUCAÇÃO ESPECIAL/INCLUSIVA\n\n\n    De acordo com as necessidades vivenciadas no dia-a-dia das escolas jurisdicionadas a essa Gerência Regional de Educação Metropolitana Sul – (GRE Metro Sul), ficou estabelecido, para a prática pedagógica, que é de responsabilidade do Professor do AEE (Atendimento Educacional Especializado):\n\n 1 - Identificar, elaborar e organizar recursos pedagógicos, tecnológicos e de acessibilidade que eliminem as barreiras para a plena participação dos alunos, nas salas comuns regulares, considerando suas necessidades específicas;\n\n 2 – Elaborar o Plano de Desenvolvimento Individual (PDI) dos alunos atendidos;\n\n   3 – Solicitar do Professor de Apoio Pedagógico em Sala o relatório descritivo sobre as dificuldades e potencialidades apresentadas no dia-a-dia do aluno, em tempo combinado entre ambos;\n\n  4 – Articular, junto à gestão da escola, estratégias pedagógicas que aproximem as famílias de alunos com deficiência para acompanhamento e orientações com relação ao processo de inclusão, ensino aprendizagem, e o seu papel como responsável;\n\n    5 – Promover, junto à gestão da escola, Professor de Apoio em Sala e Professor Regente ações de orientação, mobilização, sensibilização em prol do direito da pessoa com deficiência para toda a comunidade escolar;\n\n   6 – Participar das formações continuadas ofertadas pela coordenação de Educação Especial/Inclusiva da Gerência Regional de Educação Metropolitana Sul (GRE Metro Sul);'} ></Card_content>

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
        backgroundColor: '#cb8eff',
        borderRadius: 8,
        textAlign: 'center'
      },
})
