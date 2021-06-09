import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw">- R$ 123123</td>
            <td> Web site</td>
            <td> 21/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$ 123123</td>
            <td> Web site</td>
            <td> 21/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw">- R$ 123123</td>
            <td> Web site</td>
            <td> 21/12/2021</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  );
}