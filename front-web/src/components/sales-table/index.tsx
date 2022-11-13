import './styles.css';

const SalesTable = () => {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/1994</td>
            <td>Feminino</td>
            <td>Roupas de acessórios</td>
            <td>Dois Irmãos</td>
            <td>Crédito</td>
            <td>R$ 540.00,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default SalesTable;