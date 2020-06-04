import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemDashboard from '../components/ItemDashboard';
import { getProducts } from '../firebase/get-set';


const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    getProducts()
      .then(data => {
        setProducts(data)});
  }, []);

  return (
    <div data-testid="view-dashboard">
      <Header />
      <main role="main" className="Dashboard">
        <p>View Dashboard</p>
        <button type="button">Agregar producto</button>
        <section>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Imagen</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              { 
                (products.length > 0) && products.map((product, index) => <ItemDashboard product={product} key={product.id} index={index} />)
              }
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </div>
  )
};


export default Dashboard;
