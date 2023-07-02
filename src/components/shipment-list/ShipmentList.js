import './ShipmentList.scss';
import ShipmentListItem from '../shipment-list-item/ShipmentListItem';


function ShipmentList(props) {


  const elements = props.data.map(item => (
    <ShipmentListItem key={item.orderNo} 
                      {...item}
                      onDelete={()=> props.onDelete(item.id)} />
  ));

  return (
    <ul className="shipment-list">
      <li className="row labels">
        <p>orderNo</p>
        <p>customer</p>
        <p>consignee</p>
        <p>date</p>
        <p>trackingNo</p>
        <p>status</p>
      </li>
      {elements}
    </ul>
  );
}

export default ShipmentList;