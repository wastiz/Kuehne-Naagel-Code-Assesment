import './ShipmentList.scss';
import ShipmentListItem from '../shipment-list-item/ShipmentListItem';

function ShipmentList() {
    return (
        <div className="shipment-list">
            <div className='row labels'>
                <p>orderNo</p>
                <p>customer</p>
                <p>consignee</p>
                <p>date</p>
                <p>trackingNo</p>
                <p>status</p>
            </div>
            <ShipmentListItem/>
        </div>
    );
}

export default ShipmentList;