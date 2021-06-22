import ReactModal, { useContext } from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionContext';

export function Summary() {
  const data = useContext(TransactionContext);

  console.log(data);
  return (
    <Container>
  {/* <TransactionContext.Consumer>
    {
      (data) => {
        console.log(data)
        return <h1>teste</h1>
      }
    }

  </TransactionContext.Consumer> */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 100000</strong>
      </div>
      
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>R$ 100000</strong>
      </div>
      
      <div className="green">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$ 100000</strong>
      </div>
      
      
    </Container>
  )
}