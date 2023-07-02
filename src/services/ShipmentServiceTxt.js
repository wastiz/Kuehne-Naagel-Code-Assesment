class ShipmentServiceTxt {
    url = '../Shipments.txt';
  
    getResource = async () => {
      let res = await fetch(this.url);
      if (!res.ok) {
        throw new Error(`Could not fetch ${this.url}, status: ${res.status}`);
      } else {
        return await res.text();
      }
    }
  
    getAllShipments = async () => {
      const textData = await this.getResource();
      const arrayData = JSON.parse(textData);
      return arrayData;
    }
  }
  
  export default ShipmentServiceTxt;
  