import './App.css';
import { Component} from 'react';
import '../../services/ShipmentService';
import ShipmentService from '../../services/ShipmentService';
import AppInfo from '../app-info/AppInfo';


class App extends Component {

  shipmentService = new ShipmentService();

  method2 = () => {
    console.log('hahaha')
  }

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <AppInfo/> 
      </>
    );
  }
}

export default App;
