import SalesSummaryCard from './sales-summary-card';
import './styles.css';

const SalesSummary = () => {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard />
      <SalesSummaryCard />
      <SalesSummaryCard />
      <SalesSummaryCard />
    </div>
  )
}

export default SalesSummary;
