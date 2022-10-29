import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card_content from '../components/Card_content'

export default function Card_click() {

    return (
        <ScrollView>
            
                        
            
        <View style={ styles.HelpMeWrapper }>
        <View style={ styles.containerTop }>
          
            <Text style={styles.sectionTitle}>Gestão Escolar</Text>
        <Card_content text={'LEI Nº 9.394, DE 20 DE DEZEMBRO DE 1996\n\nEstabelece as diretrizes e bases da educação nacional.\n\nDA EDUCAÇÃO ESPECIAL\n\nArt. 58.\n\nEntende-se por educação especial, para os efeitos desta Lei, a modalidade de educação escolar oferecida preferencialmente na rede regular de ensino, para educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação.\n\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n\n  1º Haverá, quando necessário, serviços de apoio especializado, na escola regular, para atender às peculiaridades da clientela de educação especial.\n\n  2º O atendimento educacional será feito em classes, escolas ou serviços especializados, sempre que, em função das condições específicas dos alunos, não for possível a sua integração nas classes comuns de ensino regular.\n\nArt. 59.\n\n  Os sistemas de ensino assegurarão aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:\n\n\n(Redação dada pela Lei nº 12.796, de 2013)\n\n\n  I - currículos, métodos, técnicas, recursos educativos e organização específicos, para atender às suas necessidades;\n\n  II - terminalidade específica para aqueles que não puderem atingir o nível exigido para a conclusão do ensino fundamental, em virtude de suas deficiências, e aceleração para concluir em menor tempo o programa escolar para os superdotados;\n\nIII - professores com especialização adequada em nível médio ou superior, para atendimento especializado, bem como professores do ensino regular capacitados para a integração desses educandos nas classes comuns.\n\n\nDe acordo com as necessidades vivenciadas no dia-a-dia das escolas jurisdicionadas a essa Gerência Regional de Educação Metropolitana Sul – (GRE Metro Sul), ficou estabelecido, para a prática pedagógica, que é de responsabilidade da Equipe Gestora da Escola:\n\n   1 – Receber e efetivar matricula de alunos com deficiência;\n\n  2 – Solicitar, através de ofício, professor de apoio pedagógico, ao aluno, especificando: nome, matrícula, série, turma, turno e anexar cópia do laudo, à Unidade de Departamento Pessoal (UDP);\n\n 3 – Apresentar, através de planilha o quantitativo de alunos e professores público-alvo da Educação Especial/Inclusiva, quando solicitado;\n\n   4 – Devolver, através de ofício, para Unidade de Departamento Pessoal (UDP), o professor que estiver sem carga horária em função de saída do aluno da escola;   \n\n    5 – Articular, junto à equipe da Educação Especial/Inclusiva, o atendimento aos estudantes com deficiência, a fim de atender todas as demandas da escola;   \n\n  6 – Participar ao técnico da Educação Especial/Inclusiva os casos que ferem o direito do aluno com deficiência, exemplo: professor x aluno, família x escola, aluno x aluno. Para as devidas orientações e encaminhamentos;\n\n  7 - Promover, junto à equipe da Educação Especial/Inclusiva, ações de orientação, mobilização, sensibilização em prol da inclusão, do direito da pessoa com deficiência para toda a comunidade escolar;'} ></Card_content>

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
        backgroundColor: '#93d4ea',
        borderRadius: 8,
        textAlign: 'center'
      },
})
