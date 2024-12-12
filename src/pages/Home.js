import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',  // Organiza os itens na horizontal
      alignItems: 'center',  // Alinha os itens no centro verticalmente
      justifyContent: 'space-between',  // Coloca o conteúdo à esquerda e a imagem à direita
      backgroundColor: '#f7f7f7',
      padding: '20px',
    }}>
      <div style={{ maxWidth: '50%', textAlign: 'center' }}>
        <h1>Bem-vindo à Nossa Loja de Acessórios para Gatos!</h1>
        <p>Explore produtos incríveis para o seu amigo felino.</p>

     
        <Button
            variant="solid"
            size="lg"
            color="primary"
            sx={{ fontWeight: 600 }}
            onClick={() => navigate('/store')}>Acessar a loja
        </Button>    
      </div>   

      <img 
        src="MIAUZIM.svg"
        alt="Imagem do miauzim"
        style={{ maxWidth: '40%', height: 'auto' }}
      />
    </div>
  );
}

export default Home;
