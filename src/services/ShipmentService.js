class ShipmentService {
    url = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

    getResource = async () => {
        let res = await fetch(this.url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this.url}, status: ${res.status}`);
        } else {
            return await res.json();
        }
    }

    getAllShipments = async () => {
        const res = await this.getResource(this.url);
        return res
    }
}

export default ShipmentService;