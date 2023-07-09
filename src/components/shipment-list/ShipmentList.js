import './ShipmentList.scss';
import ShipmentListItem from '../shipment-list-item/ShipmentListItem';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

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

  const handleShowModal = (item) => {
    setSelectedItem({ ...item });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  const handleUpdate = () => {
    props.onUpdate(selectedItem, selectedItem.orderNo, props.data);
    handleCloseModal();
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
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
        <Col><b>orderNo</b></Col>
        <Col><b>customer</b></Col>
        <Col><b>consignee</b></Col>
        <Col><b>date</b></Col>
        <Col><b>trackingNo</b></Col>
        <Col><b>status</b></Col>
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
            <Container>
              <Row>
                <Col>
                  <label htmlFor="orderNo">Order No:</label>
                  <input
                    type="text"
                    value={selectedItem.orderNo}
                    id="orderNo"
                    onChange={onValueChange}
                    name="orderNo"
                  />
                  <label htmlFor="customer">Customer:</label>
                  <input
                    type="text"
                    value={selectedItem.customer}
                    id="customer"
                    onChange={onValueChange}
                    name="customer"
                  />
                  <label htmlFor="consignee">Consignee:</label>
                  <input
                    type="text"
                    value={selectedItem.consignee}
                    id="consignee"
                    onChange={onValueChange}
                    name="consignee"
                  />
                </Col>
                <Col>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="text"
                    value={selectedItem.date}
                    id="date"
                    onChange={onValueChange}
                    name="date"
                  />
                  <label htmlFor="trackingNo">Tracking No:</label>
                  <input
                    type="text"
                    value={selectedItem.trackingNo}
                    id="trackingNo"
                    onChange={onValueChange}
                    name="trackingNo"
                  />
                  <label htmlFor="status">Status:</label>
                  <select defaultValue={selectedItem.status}  placeholder="status" name="status" id="status" onChange={onValueChange}>
                      <option value="'Shipped'">Shipped</option>
                      <option value="'In transit'">In transit</option>
                      <option value="'Delivered'">Delivered</option>
                  </select>
                </Col>
              </Row>
            </Container>
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