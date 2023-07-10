import './App.scss';
import { useState, useEffect } from 'react';
//import ShipmentServiceTxt from '../../services/ShipmentServiceTxt';
import ShipmentService from '../../services/ShipmentService';
import AppInfo from '../app-info/AppInfo';
import AddForm from '../add-form/AddForm';
import ShipmentList from '../shipment-list/ShipmentList';
import AppFilter from '../app-filter/AppFilter';


function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const shipmentService = new ShipmentService();

    shipmentService.getAllShipments().then(result => {
      setData(result);
      setFilteredData(result); // Set the initial filteredData
    });
  }, []);

  const deleteItem = (id) => {
    setData(prevData => prevData.filter(item => item.orderNo !== id));
    setFilteredData(prevData => prevData.filter(item => item.orderNo !== id)); // Update filteredData
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
    setFilteredData(newArray); // Update filteredData
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
    setFilteredData((prevData) => {
      const newArr = [...prevData, newItem];
      return newArr;
    });
  };

  const handleSearch = (filteredItems) => {
    setFilteredData(filteredItems);
  };

  const total = data.length;
  const shipped = data.filter(item => item.status === "'Shipped'").length;
  const inTransit = data.filter(item => item.status === "'In Transit'").length;
  const delivered = data.filter(item => item.status === "'Delivered'").length;

  return (
    <div className='app'>
      <header>
        <h1>Kuehne-Naagel Shipment system</h1>
      </header>
      <AppInfo total={total} shipped={shipped} inTransit={inTransit} delivered={delivered}/>
      <AddForm onAdd={addItem}/>
      <AppFilter items={data} onSearch={handleSearch}/>
      <ShipmentList data={filteredData} onDelete={deleteItem} onUpdate={updateData}/>
    </div>
  );
}



export default App;
