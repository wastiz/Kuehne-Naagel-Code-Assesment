import './ShipmentList.scss';
import ShipmentListItem from '../shipment-list-item/ShipmentListItem';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// function useInputInfo(initialValue) {
// 	const [value, setValue] = useState(initialValue)

// 	const onChange = (e) => {
// 		setValue({
//       ...value,
//       [e.target.name]: e.target.value
//     })
// 	}
	
// 	return {value, onChange}
// }

function ShipmentList(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [updateItem, setUpdateItem] = useState({});

  useEffect(() => {
    setUpdateItem(selectedItem);
  }, [selectedItem]);

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

  const onValueChange = (e) => {
    setUpdateItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    props.onUpdate(updateItem);
    handleCloseModal();
  };

  const shipmentItems = props.data.map((item) => (
    <ShipmentListItem
      key={item.orderNo}
      {...item}
      onDelete={() => handleDelete(item.orderNo)}
      onShowModal={() => handleShowModal(item)}
    />
  ));

  return (
    <Container className="shipment-list">
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
            <div className="column-view">
              <label htmlFor="orderNo">Order No:</label>
              <input
                type="text"
                value={updateItem.orderNo}
                id="orderNo"
                onChange={onValueChange}
                name="orderNo"
              />
              <label htmlFor="customer">Customer:</label>
              <input
                type="text"
                value={updateItem.customer}
                id="customer"
                onChange={onValueChange}
                name="customer"
              />
              <label htmlFor="consignee">Consignee:</label>
              <input
                type="text"
                value={updateItem.consignee}
                id="consignee"
                onChange={onValueChange}
                name="consignee"
              />
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                value={updateItem.date}
                id="date"
                onChange={onValueChange}
                name="date"
              />
              <label htmlFor="trackingNo">Tracking No:</label>
              <input
                type="text"
                value={updateItem.trackingNo}
                id="trackingNo"
                onChange={onValueChange}
                name="trackingNo"
              />
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                value={updateItem.status}
                id="status"
                onChange={onValueChange}
                name="status"
              />
            </div>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate} type="submit">
            Update
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}


export default ShipmentList;