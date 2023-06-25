
import Pagination from './pagination';
import { getOrders } from '../data'; // Assume a function to fetch orders from an API
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const OrderTable = ({ selectedTab }) => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders(); // Fetch orders from the API
      setOrders(data);
    } catch (error) {
      console.log('Error fetching orders:', error);
    }
  };

  const filteredOrders = selectedTab === 'all'
    ? orders
    : orders.filter((order) => order.deliveryType === selectedTab);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Delivery Type</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.deliveryType}</td>
              {/* Add more table cells with order details as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        ordersPerPage={ordersPerPage}
        totalOrders={filteredOrders.length}
        paginate={paginate}
      />
    </div>
  );
};
OrderTable.propTypes = {
     selectedTab: PropTypes.string.isRequired,
   };

export default OrderTable;
