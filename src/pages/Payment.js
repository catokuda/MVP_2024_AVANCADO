import React, { useState, useEffect } from "react";
import Button from '@mui/joy/Button';

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {

    // Simula carregamento de dados de API
    setTimeout(() => {
      setPaymentInfo({
        total: "R$ 400,00",
        method: "Cartão de Crédito",
      });
    }, 2000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pagamento</h1>
      {!paymentInfo ? (
        <p>Carregando informações de pagamento...</p>
      ) : (
        <div style={paymentStyle}>
          <p><strong>Total:</strong> {paymentInfo.total}</p>
          <p><strong>Método:</strong> {paymentInfo.method}</p>
          <Button
            variant="solid"
            size="lg"
            color="primary"
            sx={{ fontWeight: 600 }}
            >Confirmar pagamento
        </Button>  
        </div>
      )}
    </div>
  );
}

const paymentStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "10px",
  display: "inline-block",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};



export default Payment;