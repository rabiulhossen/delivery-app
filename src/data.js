// api.js
const fakeOrders = [
     {
       id: 1,
       customerName: 'John Doe',
       deliveryType: 'regular',
       deliveryDays: '7 days'
 
     },
     {
       id: 2,
       customerName: 'Jane Smith',
       deliveryType: 'express',
       deliveryDays: '3 days'
     
     },
     {
      id: 3,
      customerName: 'Ben Stoke',
      deliveryType: 'regular',
      deliveryDays: '7 days'

    },
    {
      id: 4,
      customerName: 'John sina',
      deliveryType: 'regular',
      deliveryDays: '7 days'

    },
    {
      id: 5,
      customerName: 'Alex Doe',
      deliveryType: 'express',
      deliveryDays: '3 days'

    },
    {
      id: 6,
      customerName: 'John Doe',
      deliveryType: 'regular',
      deliveryDays: '7 days'

    },
    {
      id: 7,
      customerName: 'Jane Smith',
      deliveryType: 'express',
      deliveryDays: '3 days'
    
    },
    {
     id: 8,
     customerName: 'Ben Stoke',
     deliveryType: 'regular',
     deliveryDays: '7 days'

   },
   {
     id: 9,
     customerName: 'John sina',
     deliveryType: 'regular',
     deliveryDays: '7 days'

   },
   {
     id: 10,
     customerName: 'Alex Doe',
     deliveryType: 'express',
     deliveryDays: '3 days'

   },
    
   ];
   
   export const getOrders = () =>
     new Promise((resolve) => {
       // Simulate an asynchronous API call
       setTimeout(() => {
         resolve(fakeOrders);
       }, 1000); // Delay of 1 second (adjust as needed)
     });
   