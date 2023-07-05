import './ShipmentListItem.scss';
import { Row, Col, Button } from 'react-bootstrap';

function ShipmentListItem(props) {
    const { orderNo, customer, consignee, date, trackingNo, status, onDelete, onShowModal } = props;
  
    const handleDelete = () => {
      onDelete(orderNo);
    };
  
    return (
      <Row>
        <Col><p>{orderNo}</p></Col>
        <Col><p>{customer}</p></Col>
        <Col><p>{consignee}</p></Col>
        <Col><p>{date}</p></Col>
        <Col><p>{trackingNo}</p></Col>
        <Col><p>{status}</p></Col>
        <Col>
          <Button variant="primary" onClick={onShowModal}>
            View Details
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    );
  }
  

export default ShipmentListItem;