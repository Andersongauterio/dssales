import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard name="Lojas" labels={['Dois Irmãos', 'Morro Reuter', 'Picada Café']} series={[40, 30, 30]} />
          <PieChartCard name="Pagamento" labels={['Crédito', 'Débito', 'Dinheiro']} series={[20, 50, 30]} />
        </div>
      </div>
    </>
  );
}

export default App;
