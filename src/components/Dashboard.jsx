import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, deleteProduct } from '../firebase/firestore';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemDashboard from '../components/ItemDashboard';
import ModalAddProduct from '../components/ModalAddProduct';


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState(0);
  const [categoryProduct, setCategoryProduct] = useState('');
  const [descriptionProduct, setDescriptionProduct] = useState('');
  const [imgProduct, setImgProduct] = useState('');
  

  const addProductList = (event) => {
    event.preventDefault();

    const newProduct = {
      name: nameProduct,
      price: priceProduct,
      category: categoryProduct,
      description: descriptionProduct,
      img: imgProduct,
      date: new Date(),
    };
  

    addProduct(newProduct)
      .then(() => {
        console.log('Producto agregado.');

        setModalShow(false);
      }).catch(() => {
        console.log('Error.');
      });
  };

  const productDeleteList = product => deleteProduct(product.id)
  .then(() => {
    console.log('Producto eliminado.');
  }).catch((error) => {
    console.error('Error: ', error);
  });


  useEffect (() => {
    getProducts()
      .then(data => {
        setProducts(data)});
  }, [products]);


  return (
    <div data-testid="view-dashboard">
      <Header />
      <main role="main" className="Dashboard">
        <p>View Dashboard</p>
        <button type="button" onClick={() => setModalShow(true)}>Agregar producto</button>
        {
          (modalShow) && <ModalAddProduct
          show={modalShow}
          onHide={() => setModalShow(false)}
          nameProduct={nameProduct}
          setNameProduct={setNameProduct}
          priceProduct={priceProduct}
          setPriceProduct={setPriceProduct}
          categoryProduct={categoryProduct}
          setCategoryProduct={setCategoryProduct}
          descriptionProduct={descriptionProduct}
          setDescriptionProduct={setDescriptionProduct}
          imgProduct={imgProduct}
          setImgProduct={setImgProduct}
          addProductList={addProductList}
        />
        }
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
                (products.length > 0) && products.map((product, index) => <ItemDashboard product={product} key={index} index={index} productDeleteList={productDeleteList}/>)
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
