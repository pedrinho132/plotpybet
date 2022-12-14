
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import Menu from './components/Menu.js';

import HomeProfessor from './components/Professores/HomeProfessor/HomeProfessor.js';
import FinanceiroProfessor from './components/Professores/HomeProfessor/FinanceiroProfessor.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Configurar from './components/Professores/HomeProfessor/Configurar';
import ProfessoresList from './components/Professores/AcheUmProfessor/ProfessoresList';
import PaginadoProfessor from './components/Professores/AcheUmProfessor/PaginaDoProfessor'
import EntrarTurma from './components/Professores/AcheUmProfessor/EntrarTurma.js';
import TurmaDoDia from './components/Professores/HomeProfessor/TurmaDoDia.js';
import CriarTurma from './components/Professores/HomeProfessor/CriarTurma.js';
import TurmaSelecionada from './components/Professores/HomeProfessor/TurmaSelecionada.js';
import HorariosDiponiveis from './components/Professores/AcheUmProfessor/HorariosDisponiveis.js';
import PaginaAluno from './components/PaginaAluno.js';
import JogosLista from './components/EcontreJogos/JogosLista.js';
import AdicionarComentario from './components/Professores/HomeProfessor/AdicionarComentario.js';
import AlterarNivel from './components/Professores/HomeProfessor/AlterarNivel.js';
import MembroNovo from './components/Cadastro/MembroNovo.js';
import TelaDePassagem from './components/TelaDePassagem.js';
import Login from './components/Login.js';
import Menutabnaviation from './components/TabNavigation.js';
import TabNavigationuser from './components/TabNavigationUser.js';
import EncontreDupla from './components/Dupla/EncontreDupla.js';
import TurmasAluno from './components/Aluno/Turmas.js';
import InfoAlunoTurma from './components/Aluno/InfoAlunoTurma.js';
import EditarPagina from './components/Professores/HomeProfessor/EditarPagina.js';
import ConfirmarEdi??ao from './components/Professores/HomeProfessor/ConfirmarEdi??ao.js';
import MinhaTurma from './components/Aluno/MinhaTurma.js';
import PerfilOuContaBancaria from './components/Professores/HomeProfessor/PerfilOuContaBancaria.js';
import ExcluirTurma from './components/Professores/HomeProfessor/ExcluirTurma.js';
import Comprovantes from './components/Comprovantes/Comprovantes';
import Relatorios from './components/Professores/HomeProfessor/Relatorios.js';
import RelatorioDoMes from './components/Professores/HomeProfessor/RelatorioDoMes.js';
import ReservarHorario from './components/Professores/AcheUmProfessor/ReservarHorario';
import AdicionarItemServ from './components/Professores/HomeProfessor/AdicionarItemServ.js';
import Funcionario from './components/Professores/HomeProfessor/Funcionario.js';
import VerificarItens from './components/Professores/AcheUmProfessor/VerificarItens.js';
import VerificarFuncionarios from './components/Professores/AcheUmProfessor/VerificarFuncionarios.js';
import ConfirmarHorario from './components/Professores/AcheUmProfessor/ConfirmarHorario.js';
import AdicionarItem from './components/Professores/HomeProfessor/adicionarItem.js';
import AdicionarFuncionario from './components/Professores/HomeProfessor/AdicionarFuncionario.js';
import ConfigurarHorario from './components/Professores/HomeProfessor/configurarHorario.js';
import AdicionarHorario from './components/Professores/HomeProfessor/AdicionarHorario.js';
import ConfirmarPagamento from './components/Professores/HomeProfessor/ConfirmarPagamento.js';
import infoServi??o from './components/Professores/HomeProfessor/infoServi??o.js';
import ExcluirServi??o from './components/Professores/HomeProfessor/excluirServi??o.js';
import ExcluirFuncionario from './components/Professores/HomeProfessor/ExcluirFuncionario.js';
import infoFuncionario from './components/Professores/HomeProfessor/informa????esFunconario.js';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation }) {
  return <Login navigation={navigation} />
}

// You can import from local files


const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="HomeProfessor" component={Menutabnaviation} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Financeiro" component={FinanceiroProfessor} />
        <Stack.Screen name="ProfessoresList" component={ProfessoresList} options={{ title: 'Nossa Rede' }} />
        <Stack.Screen name="PaginaDoProfessor" component={PaginadoProfessor} options={{ title: 'Parceiro PayP', headerTintColor: "purple" }} />
        <Stack.Screen name="EntrarTurma" component={EntrarTurma} options={{ title: 'Assinar Plataforma' }} />
        <Stack.Screen name="TurmaDoDia" component={TurmaDoDia} />
        <Stack.Screen name="CriarTurma" component={CriarTurma} />
        <Stack.Screen name="TurmaSelecionada" component={TurmaSelecionada} />
        <Stack.Screen name="HorariosDisponiveis" component={HorariosDiponiveis} />
        <Stack.Screen name="PaginaAluno" component={PaginaAluno} />
        <Stack.Screen name="JogosLista" component={JogosLista} />
        <Stack.Screen name="Comentario" component={AdicionarComentario} />
        <Stack.Screen name="AlterarNivel" component={AlterarNivel} />
        <Stack.Screen name="MembroNovo" component={MembroNovo} options={{ title: 'Membro Novo', headerTintColor: "#AC08A4", headerStyle: { backgroundColor: 'black' } }} />
        <Stack.Screen name="TelaDePassagem" component={TelaDePassagem} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="MenuTabnavigation" component={Menutabnaviation} options={{ headerShown: false }} />
        <Stack.Screen name="MenuTabnavigationUser" component={TabNavigationuser} options={{ headerShown: false }} />
        <Stack.Screen name="EncontreDupla" component={EncontreDupla} options={{ title: 'Encontre a sua dupla' }} />
        <Stack.Screen name="TurmasAluno" component={TurmasAluno} />
        <Stack.Screen name="infoAlunoTurma" component={InfoAlunoTurma} />
        <Stack.Screen name="EditarPagina" component={EditarPagina} />
        <Stack.Screen name="ConfirmarEdi??ao" component={ConfirmarEdi??ao} />
        <Stack.Screen name="MinhaTurma" component={MinhaTurma} />
        <Stack.Screen name="PerfilOuContaBancaria" component={PerfilOuContaBancaria} />
        <Stack.Screen name="ExcluirTurma" component={ExcluirTurma} />
        <Stack.Screen name="Comprovantes" component={Comprovantes} />
        <Stack.Screen name="Relatorios" component={Relatorios} />
        <Stack.Screen name="RelatorioDoMes" component={RelatorioDoMes} />
        <Stack.Screen name="ReservarHorario" component={ReservarHorario} />
        <Stack.Screen name="AdicionarItemServ" component={AdicionarItemServ} />
        <Stack.Screen name="Funcionario" component={Funcionario} />
        <Stack.Screen name="VerificarItens" component={VerificarItens} />
        <Stack.Screen name="VerificarFuncionarios" component={VerificarFuncionarios} />
        <Stack.Screen name="ConfirmarHorario" component={ConfirmarHorario} />
        <Stack.Screen name="AdicionarItem" component={AdicionarItem} />
        <Stack.Screen name="AdicionarFuncionario" component={AdicionarFuncionario} />
        <Stack.Screen name="ConfigurarHorario" component={ConfigurarHorario} />
        <Stack.Screen name="AdicionarHorario" component={AdicionarHorario} />
        <Stack.Screen name="ConfirmarPagamento" component={ConfirmarPagamento} />
        <Stack.Screen name="InfoServi??o" component={infoServi??o} />
        <Stack.Screen name="ExcluirServi??o" component={ExcluirServi??o} />
        <Stack.Screen name="ExcluirFuncionario" component={ExcluirFuncionario} />
        <Stack.Screen name="InformacaoFuncionario" component={infoFuncionario} />







      </Stack.Navigator>

    </NavigationContainer>

  );
}

export default App;
