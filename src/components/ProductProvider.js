import React, { useEffect, useState } from 'react';
import { storeProducts, detailProduct } from '../data';

// making a globle variable
const ProductContext = React.createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newProducts = storeProducts.map((product) => ({ ...product }));
    setProducts(newProducts);
  }, []);
  useEffect(() => {
    addTotals();
  }, [cart]);

  // functions
  const getItem = (id) => {
    const product = products.find((product) => product.id === id);
    return product;
  };
  const addTotals = () => {
    const subTotal = cart.reduce((sum, currently) => sum + currently.total, 0);
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };
  const addCart = (id) => {
    const newProducts = [...products];
    const indexProduct = newProducts.indexOf(getItem(id));
    const product = newProducts[indexProduct];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    setProducts(newProducts);
    setCart((cart) => [...cart, product]);
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setDetail(product);
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const increment = (id) => {
    const newCart = [...cart];
    const selectedProduct = newCart.findIndex((item) => item.id === id);
    const product = newCart[selectedProduct];
    product.count += 1;
    product.total = product.count * product.price;
    setCart(newCart);
  };
  const decrement = (id) => {
    const newCart = [...cart];
    const selectedProduct = newCart.findIndex((item) => item.id === id);
    const product = newCart[selectedProduct];
    product.count -= 1;
    if (product.count === 0) {
      removeProductItem(id);
    } else {
      product.total = product.count * product.price;
      setCart(newCart);
    }
  };
  const removeProductItem = (id) => {
    const newProducts = [...products];
    const newCart = cart.filter((item) => item.id !== id);
    const indexRemove = products.indexOf(getItem(id));
    const product = newProducts[indexRemove];
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    setProducts(newProducts);
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
    const newProducts = [...storeProducts];
    setProducts(newProducts);
  };

  const values = {
    products,
    detail,
    addCart,
    handleDetail,
    modalOpen,
    openModal,
    closeModal,
    modalProduct,
    cart,
    cartSubTotal,
    cartTotal,
    cartTax,
    increment,
    decrement,
    clearCart,
    removeProductItem,
  };

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
