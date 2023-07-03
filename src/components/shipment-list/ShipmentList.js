import './ShipmentList.scss';
import ShipmentListItem from '../shipment-list-item/ShipmentListItem';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


function ShipmentList(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  const shipmentItems = props.data.map(item => (
    <ShipmentListItem
      key={item.orderNo}
      {...item}
      onDelete={() => handleDelete(item.orderNo)}
      onShowModal={() => handleShowModal(item)}
    />
  ));

  return (
    <Container className='shipment-list'>
      <Row className="labels">
        <Col>orderNo</Col>
        <Col>customer</Col>
        <Col>consignee</Col>
        <Col>date</Col>
        <Col>trackingNo</Col>
        <Col>status</Col>
        <Col></Col>
        <Col></Col>
      </Row>
      {shipmentItems}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shipment Details</Modal.Title>
        </Modal.Header>
        {selectedItem && (
          <Modal.Body>
            <p>Order No: {selectedItem.orderNo}</p>
            <p>Customer: {selectedItem.customer}</p>
            <p>Consignee: {selectedItem.consignee}</p>
            <p>Date: {selectedItem.date}</p>
            <p>Tracking No: {selectedItem.trackingNo}</p>
            <p>Status: {selectedItem.status}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}


export default ShipmentList;