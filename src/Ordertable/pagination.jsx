import PropTypes from 'prop-types';

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
   ordersPerPage: PropTypes.string.isRequired,
   };
   Pagination.propTypes = {
    totalOrders: PropTypes.string.isRequired,
     };
     Pagination.propTypes = {
          paginate: PropTypes.string.isRequired,
          };

export default Pagination;
