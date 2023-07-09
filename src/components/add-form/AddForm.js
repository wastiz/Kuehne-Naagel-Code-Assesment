import './AddForm.scss';
import { useState } from 'react';

function AddForm(props) {
    const [addedItem, setAddedItem] = useState({
        orderNo: '',
        customer: '',
        consignee: '',
        date: '',
        trackingNo: '',
        status: ''
    });

    const onValueChange = (e) => {
        const { name, value } = e.target;
        setAddedItem((prevItem) => ({
          ...prevItem,
          [name]: value,
        }));
      };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(addedItem);
        setAddedItem({
            orderNo: '',
            customer: '',
            consignee: '',
            date: '',
            trackingNo: '',
            status: ''
        })
    }

    return (
        <div className="add-form">
            <h3>Add order</h3>
            <br />
            <form className='form'>
                <div className="row">
                    <div className='col'>
                        <label htmlFor="orderNo">Order number</label>
                        <input type="text" placeholder="orderNo" name='orderNo' id='orderNo' onChange={onValueChange}/>
                        <label htmlFor="customer">Customer</label>
                        <input type="text" placeholder="customer" name='customer' id='customer' onChange={onValueChange}/>
                        <label htmlFor="consignee">Consignee</label>
                        <input type="text" placeholder="consignee" name='consignee' id='consignee' onChange={onValueChange}/>
                    </div>
                    <div className='col'>
                        <label htmlFor="date">Date</label>
                        <input type="text" placeholder="date" name='date' id='date' onChange={onValueChange}/>
                        <label htmlFor="trackingNo">Tracking number</label> 
                        <input type="text" placeholder="trackingNo" id='trackingNo' onChange={onValueChange}/>
                        <label htmlFor="status">Status</label>
                        <select placeholder="status" name="status" id="status" onChange={onValueChange}>
                            <option value="'Shipped'">Shipped</option>
                            <option value="'In transit'">In transit</option>
                            <option value="'Delivered'">Delivered</option>
                        </select>
                    </div>
                </div>
                <br />
                <button className='form-button' type="submit" onClick={onSubmit}>Add</button>
            </form>
        </div>
    );
}

export default AddForm;