import './ShipmentListItem.scss';
import { Row, Col, Button } from 'react-bootstrap';

function ShipmentListItem(props) {
  const { orderNo, customer, consignee, date, trackingNo, status, onShowModal } = props;

  return (
    <Row>
      <Col><p>{orderNo}</p></Col>
      <Col><p>{customer}</p></Col>
      <Col><p>{consignee}</p></Col>
      <Col><p>{date}</p></Col>
      <Col><p>{trackingNo}</p></Col>
      <Col><p>{status}</p></Col>
      <Col>
        <Button variant="primary" onClick={() => onShowModal(orderNo, 1)}>
          View Details
        </Button>
      </Col>
      <Col>
        <Button variant="danger" onClick={() => onShowModal(orderNo, 2)}>
          Delete
        </Button>
      </Col>
    </Row>
  );
}

export default ShipmentListItem;