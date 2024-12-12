import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';

function Store() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

    // Função para adicionar ao carrinho
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Loja</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onOpenModal={openModal}
          />
        ))}
      </div>
      <Modal
        isOpen={!!selectedProduct}
        onRequestClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default Store;