import React, { useState, useEffect } from 'react';

const SaleOrderForm = ({ order, onClose, onCreate, onEdit }) => {
  const [formData, setFormData] = useState({
    customer_id: '',
    paid: false,
    invoice_no: '',
    invoice_date: ''
  });

  useEffect(() => {
    if (order) {
      setFormData(order);
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order) {
      onEdit(formData);
    } else {
      onCreate(formData);
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className=" p-20 rounded dark:text-black shadow-2xl shadow-blue-300 bg-white">
        <span className="p-2 text-blue-500 text-4xl cursor-pointer" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          
          <div className='p-2 rounded mt-8 m-2 bg-blue-100'>
            <label>Invoice No :</label>
            <input
              className='bg-blue-100 outline-none ml-2'
              type="text"
              name="invoice_no"
              value={formData.invoice_no}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className='p-2 rounded m-2 bg-blue-100'>
            <label>customer No :</label>
            <input
              className='bg-blue-100 outline-none ml-2'
              type="text"
              name="customer_id"
              value={formData.customer_id}
              onChange={handleChange}
              required
            />
          </div>
          <div className='p-2 rounded m-2 bg-blue-100'>
            <label>Invoice Date</label>
            <input
              className='bg-blue-100 ml-8 outline-none'
              type="date"
              name="invoice_date"
              value={formData.invoice_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className='p-2 rounded m-2 bg-blue-100'>
            <label>Paid</label>
            <input
              className='bg-blue-100 ml-48 w-5 h-5'
              type="checkbox"
              name="paid"
              checked={formData.paid}
              onChange={handleChange}
            />
          </div>
          <button className='text-white block w-[310px] rounded mt-12 bg-blue-700 p-2 shadow-2xl shadow-blue-300' type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default SaleOrderForm;
