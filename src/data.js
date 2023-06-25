// api.js
const fakeOrders = [
     {
       id: 1,
       customerName: 'John Doe',
       deliveryType: 'regular',
       // Add more fields as needed
     },
     {
       id: 2,
       customerName: 'Jane Smith',
       deliveryType: 'express',
       // Add more fields as needed
     },
     // Add more fake orders
   ];
   
   export const getOrders = () =>
     new Promise((resolve) => {
       // Simulate an asynchronous API call
       setTimeout(() => {
         resolve(fakeOrders);
       }, 1000); // Delay of 1 second (adjust as needed)
     });
   