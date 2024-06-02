import React, { useState } from 'react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrders = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showModal, setShowModal] = useState(false);
  const [editOrder, setEditOrder] = useState(null);
  const [saleOrders, setSaleOrders] = useState([ ]);
 
 

  const handleCreateOrder = (order) => {
    setSaleOrders([...saleOrders, { ...order, id: saleOrders.length + 1 }]);
  };

  const handleEditOrder = (order) => {
    setSaleOrders(saleOrders.map(o => o.id === order.id ? order : o));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal) {
      setEditOrder(null);
    }
  };

  const handleEdit = (order) => {
    setEditOrder(order);
    toggleModal();
  };

  const renderOrders = (orders) => {
    return orders.map(order => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.invoice_no}</td>
        <td>{order.customer_id}</td>
        <td>{order.invoice_date}</td>
        <td>{order.paid ? 'Yes' : 'No'}</td>
        <td>
          <button onClick={() => handleEdit(order)}>...</button>
        </td>
      </tr>
    ));
  };

  const activeOrders = saleOrders.filter(order => !order.paid);
  const completedOrders = saleOrders.filter(order => order.paid);

  return (
    <div className=" px-10 mx-auto py-10 ">
      <button onClick={toggleModal} className=" bg-blue-400 p-2 rounded">+ Sale order</button>
      <div className="tabs">
        <button onClick={() => setActiveTab('active')} className={`tab ${activeTab === 'active' ? 'active' : ''}`}>Active Sale Orders</button>
        <button onClick={() => setActiveTab('completed')} className={`tab ${activeTab === 'completed' ? 'active' : ''}`}>Completed Sale Orders</button>
      </div>
      <div className="orders">
        {activeTab === 'active' ? (
          <table>
            <thead>
              <tr>
              <th>customer ID</th>
                <th>Invoice No</th>
                <th>customer No.</th>
                <th>Invoice Date</th>
                <th>Paid</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {renderOrders(activeOrders)}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>customer ID</th>
                <th>Invoice No</th>
                <th>customer No.</th>
                <th>Invoice Date</th>
                <th>Paid</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {renderOrders(completedOrders)}
            </tbody>
          </table>
        )}
      </div>
      {showModal && (
        <SaleOrderForm
          order={editOrder}
          onClose={toggleModal}
          onCreate={handleCreateOrder}
          onEdit={handleEditOrder}
        />
      )}
    </div>
  );
};

export default SaleOrders;
