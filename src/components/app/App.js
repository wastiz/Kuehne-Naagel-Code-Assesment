import './App.scss';
import { useState, useEffect } from 'react';
import '../../services/ShipmentService';
import ShipmentServiceTxt from '../../services/ShipmentServiceTxt';
import AppInfo from '../app-info/AppInfo';
import AddForm from '../add-form/AddForm';
import ShipmentList from '../shipment-list/ShipmentList';


function App() {

  const shipmentService = new ShipmentServiceTxt();

  const [data, setData] = useState(() => []);

  
  console.log(shipmentService.getAllShipments());

  console.log(data);

  function deleteItem (id) {
    setData(({data}) => {
      return {
        data: data.filter(item => item.orderNo !== id)
      }
    })
  }
  return (
    <div className='app'>
      <header>
        <h1>Kuehne-Naagel Shipment system</h1>
      </header>
      <AppInfo/>
      <AddForm/>
      <ShipmentList data={data} onDelete={deleteItem}/>
    </div>
  );
}


export default App;
