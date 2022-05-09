import React from 'react';
import Order from './components/Order';

class App extends React.Component {
  render() {
    const orders = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        },
      },
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      }
    ];

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        {orders.map((order) => 
          <li key={order.id}>
          <Order order={order} />
          </li>
        )}
      </div>
    );
  }
}

export default App;