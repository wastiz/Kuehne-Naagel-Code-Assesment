import './AppFilter.scss';

import React, { useState } from 'react';
import { Button } from'react-bootstrap';

const AppFilter = ({ items, onSearch }) => {
  const [searchKey, setSearchKey] = useState('');
  const [selectedKey, setSelectedKey] = useState('orderNo');

  const handleSearchKeyChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSelectedKeyChange = (e) => {
    setSelectedKey(e.target.value);
  };

  const handleSearch = () => {
    const filteredItems = items.filter((item) => {
      const itemValue = item[selectedKey].toString().toLowerCase();
      const searchValue = searchKey.toLowerCase();
      return itemValue.includes(searchValue);
    });

    onSearch(filteredItems);
  };

  return (
    <div className='app-filter'>
      <h4>Search by:</h4>
      <select value={selectedKey} onChange={handleSelectedKeyChange}>
        <option value="orderNo">Order No</option>
        <option value="customer">Customer</option>
        <option value="date">Date</option>
        <option value="consignee">Consignee</option>
        <option value="trackingNo">Tracking No</option>
        <option value="status">Status</option>
      </select>
      <input
        type="text"
        value={searchKey}
        onChange={handleSearchKeyChange}
        placeholder="Enter search keyword"
      />
      <Button onClick={handleSearch} variant='info'>Search</Button>
    </div>
  );
};

export default AppFilter;