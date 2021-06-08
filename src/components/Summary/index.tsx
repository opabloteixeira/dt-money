import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
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