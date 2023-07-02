import './ShipmentListItem.scss';

function ShipmentListItem(props) {
    const {orderNo, date, customer, consignee, trackingNo, status, onDelete} = props;
    return (
        <li className="shipment-list-item row">
            <p>{orderNo}</p>
            <p>{date}</p>
            <p>{customer}</p>
            <p>{consignee}</p>
            <p>{trackingNo}</p>
            <p>{status}</p>
            <button>update</button>
            <button onClick={onDelete}>delete</button>
        </li>
    )
}

export default ShipmentListItem;