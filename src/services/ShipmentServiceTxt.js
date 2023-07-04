class ShipmentServiceTxt {
  url = './Shipments.json';

  constructor() {
    this.orders = [];
    this.isLoading = true;
    this.error = null;
  }

  getAllShipments() {
    return fetch(this.url)
      .then(response => response.json())
      .then(data => {
        this.orders = data;
        this.isLoading = false;
        return this.orders;
      })
      .catch(error => {
        this.error = error;
        this.isLoading = false;
        throw error;
      });
  }
}


export default ShipmentServiceTxt;

  