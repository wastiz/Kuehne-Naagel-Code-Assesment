import './AddForm.scss';

function AddForm() {
    return (
        <div className="add-form">
            <h3>Add order</h3>
            <form className='form'>
                <div className="row">
                    <div className='col'>
                        <label htmlFor="orderNo">Order number</label>
                        <input type="text" placeholder="orderNo" name='orderNo'/>
                        <label htmlFor="customer">Customer</label>
                        <input type="text" placeholder="customer" name='customer'/>
                        <label htmlFor="consignee">Consignee</label>
                        <input type="text" placeholder="consignee" name='consignee'/>
                    </div>
                    <div className='col'>
                        <label htmlFor="date">Date</label>
                        <input type="text" placeholder="date" name='date'/>
                        <label htmlFor="trackingNo">Tracking number</label>
                        <input type="text" placeholder="trackingNo" name='trackingNo'/>
                        <label htmlFor="status">Status</label>
                        <input type="text" placeholder="status" name='status'/>
                    </div>
                </div>
                <br />
                <button className='form-button' type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddForm;