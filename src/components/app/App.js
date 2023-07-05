import './App.scss';
import { useState, useEffect } from 'react';
//import ShipmentServiceTxt from '../../services/ShipmentServiceTxt';
import ShipmentService from '../../services/ShipmentService';
import AppInfo from '../app-info/AppInfo';
import AddForm from '../add-form/AddForm';
import ShipmentList from '../shipment-list/ShipmentList';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const shipmentService = new ShipmentService();

    shipmentService.getAllShipments().then(result => {
      setData(result);
    });
  }, []);

  const deleteItem = (id) => {
    setData(prevData => prevData.filter(item => item.orderNo !== id));
  };

  const updateData = (updatedData, id, dataArray) => {
    const newArray = dataArray.map(item => {
      if (item.orderNo === id) {
        console.log('Object updated successfully!');
        return updatedData;
      } else {
        console.log('Object updated unsuccessfully!');
        return item;
      }
    });

    setData(newArray);
  };

  const addItem = (formArray) => {
    if (formArray.orderNo === '') {
      return false;
    }
    const newItem = formArray;
    setData((prevData) => {
      const newArr = [...prevData, newItem];
      console.log(newArr);
      return newArr;
    });
  };
  
  
  return (
    <div className='app'>
      <header>
        <h1>Kuehne-Naagel Shipment system</h1>
      </header>
      <AppInfo/>
      <AddForm onAdd={addItem}/>
      <ShipmentList data={data} onDelete={deleteItem} onUpdate={updateData}/>
    </div>
  );
}


export default App;
