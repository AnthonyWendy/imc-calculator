import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateimc } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {

  const [ heigthField, setHeigthField ] = useState<number>(0); //useState<number>(0) = não podera setar outro tipo de argumento, somente number.
  const [weightFiled, setWeightFiled] = useState<number>(0);

  const hancleCalculateButton = () => {
    if(heigthField && weightFiled){

    } else {
      alert("Ainda falta informações....")
    }
  }


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>Criado no século 19 pelo matemático Lambert Quételet, o Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.</p>



          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 mts"
            value={heigthField > 0 ? heigthField : ''}
            onChange={e => setHeigthField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 60.5 kg"
            value={weightFiled > 0 ? weightFiled : ''}
            onChange={e => setWeightFiled(parseFloat(e.target.value))}
          />

          <button onClick={hancleCalculateButton}>Calcular</button>


        </div>
        <div className={styles.rightSide}>
        <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key}  item={item}/>
            )
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;