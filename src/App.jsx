import { useState } from 'react';
import  "./App.css";
import OrderTable from './Ordertable/Ordertable';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='root-div'> 
      <div className="tab">
        <button
          className={selectedTab === 'all' ? 'active' : ''}
          onClick={() => handleTabClick('all')}
        >
          All Orders
        </button>
        <button
          className={selectedTab === 'regular' ? 'active' : ''}
          onClick={() => handleTabClick('regular')}
        >
          Regular Delivery
        </button>
        <button
          className={selectedTab === 'express' ? 'active' : ''}
          onClick={() => handleTabClick('express')}
        >
          Express Delivery
        </button>
      </div>
      <OrderTable selectedTab={selectedTab} />
    </div>
  );
};

export default App;
