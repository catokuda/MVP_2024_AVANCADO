import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  const navigate = useNavigate();

  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <img
          src="./logo.png"
          alt="Logo da Loja"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>

      
      <nav style={navStyles}>
        <button onClick={() => navigate('/')} style={linkStyles}>Início</button>
        <button onClick={() => navigate('/store')} style={linkStyles}>Loja</button>
        <div style={cartStyles}>          
        {/* Ícone do carrinho */}
        <IconButton 
          color="primary" 
          aria-label="add to shopping cart"
          onClick={() => navigate('/payment')}  // Redireciona para a página 'payment'
        >
          <ShoppingCartIcon />
</IconButton>
        </div>
      </nav>
    </header>
  );
}

const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };
  
const logoStyles = {
  display: 'flex',
  alignItems: 'center',
};

const navStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  };


const cartStyles = {
  marginLeft: 'auto',
  cursor: 'pointer',
};

export default Header;

