class ShipmentServiceTxt {
  url = './Shipments.txt';

  fetchData = async () => {
    try {
      const response = await fetch(this.url);
      const text = await response.text();
      const dataArray = text.split('\n'); 
      return dataArray;
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; 
    }
  };
}

export default ShipmentServiceTxt;

  