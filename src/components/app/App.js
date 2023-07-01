import './App.scss';
import { Component} from 'react';
import '../../services/ShipmentService';
import ShipmentService from '../../services/ShipmentService';
import AppInfo from '../app-info/AppInfo';
import AddForm from '../add-form/AddForm';
import ShipmentList from '../shipment-list/ShipmentList';


class App extends Component {

  shipmentService = new ShipmentService();

  method2 = () => {
    console.log('hahaha')
  }

  render() {
    return (
      <div className='app'>
        <header>
          <h1>Kuehne-Naagel Shipment system</h1>
        </header>
        <AppInfo/> 
        <AddForm/> 
        <ShipmentList/>
      </div>
    );
  }
}

export default App;
