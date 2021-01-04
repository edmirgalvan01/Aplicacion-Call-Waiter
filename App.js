import React from 'react'
import View from 'react-native'
import Stack from './src/navigations/Navigator'
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation'
import Profile from './src/screens/ProfileScreen'
import Prueba from './src/screens/pruebaMenu'
import Services from './src/screens/Services'


export default class App extends React.Component{

  //Estos son los valores del tag de navegación
  tabs = [
    {
      key: 'Home',
      icon: 'Home',
      label: 'Home',
      screen: <Prueba navigation = {this.props.navigation}/>,
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Services',
      icon: 'Call',
      label: 'Services',
      screen: <Services navigation = {this.props.navigation}/>,
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'LoginScreen',
      icon: 'User',
      label: 'Login',
      screen: <Profile navigation = {this.props.navigation}/>,
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  //Este es el tag que se mostrará activo por defecto
  state = {
    activeTab: 'Home'
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  renderScreen = () => (
    this.state.activeTab == 'Login' && this.tabs[0].screen ||
    this.state.activeTab == 'Home' && this.tabs[1].screen ||
    this.tabs[2].screen
  )

  render(){
    return (
      <Stack/>
    )
  }
}
