import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {
    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Professor Da Classe Especial</Text>
        <Card_content text={'LEI Nº 9.394, DE 20 DE DEZEMBRO DE 1996\n\nEstabelece as diretrizes e bases da educação nacional.\n\n\nCAPÍTULO V\n\nDA EDUCAÇÃO ESPECIAL\n\n\n	Art. 58.  Entende-se por educação especial, para os efeitos desta Lei, a modalidade de educação escolar oferecida preferencialmente na rede regular de ensino, para educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação.\n\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n\n	1º Haverá, quando necessário, serviços de apoio especializado, na escola regular, para atender às peculiaridades da clientela de educação especial.\n\n	2º O atendimento educacional será feito em classes, escolas ou serviços especializados, sempre que, em função das condições específicas dos alunos, não for possível a sua integração nas classes comuns de ensino regular.\n\n	Art. 59.  Os sistemas de ensino assegurarão aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:\n\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n\n	III - professores com especialização adequada em nível médio ou superior, para atendimento especializado, bem como professores do ensino regular capacitados para a integração desses educandos nas classes comuns;\n\n\nGOVERNO DO ESTADO DE PERNAMBUCO\n\nGERÊNCIA REGIONAL DE EDUCAÇÃO METROPOLITANA SUL (GRE METRO SUL)\n\nCOORDENAÇÃO GERAL DE DESENVOLVIMENTO DA EDUCAÇÃO (CGDE)\n\nEDUCAÇÃO ESPECIAL/INCLUSIVA\n\n\n	De acordo com as necessidades vivenciadas no dia-a-dia das escolas jurisdicionadas a essa Gerência Regional de Educação Metropolitana Sul – (GRE Metro Sul), ficou estabelecido, para a prática pedagógica, que é de responsabilidade do Professor da Classe Especial:\n\n\n	1 – Ministrar as aulas a todos os alunos da turma, composta por alunos com deficiências;\n\n	2 - Articular, junto à gestão da escola, estratégias pedagógicas que aproximem as famílias de alunos com deficiência para acompanhamento e orientações com relação ao processo de inclusão, ensino aprendizagem, e o seu papel como responsável por esse processo;\n\n	3 - Facilitar a inclusão e participação do aluno nas aulas, bem como adaptar, simplificar, mediar e instigar as suas potencialidades;\n\n	4 – Participar, junto à gestão da escola, Professor do AEE (Atendimento Educacional Especializado, Professor de Apoio em Sala e Professor Regente das ações de orientação, mobilização, sensibilização em prol do direito da pessoa com deficiência para toda a comunidade escolar;\n\n	5 – Participar das formações continuadas ofertadas pela coordenação de Educação Especial/Inclusiva da Gerência Regional de Educação Metropolitana Sul – GRE;  '} ></Card_content>

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
        backgroundColor: '#0facc9',
        borderRadius: 8,
        textAlign: 'center'
      },
})
