import Adicao from "./components/Adicao";
import Divisao from "./components/Divisao";
import Multiplicacao from "./components/Multiplicacao";
import PrecisoEstudar from "./components/PrecisoEstudar";
import Subtracao from "./components/Subtracao";

function App() {
  return (
    <div>
      <Adicao num1={1} num2={2} />
      <Subtracao num1={3} num2={2} />
      <Divisao num1={6} num2={2} />
      <Multiplicacao num1={3} num2={3} />
      <PrecisoEstudar nomeDaTecnologia = "React" />
    </div>
  );
}

export default App;
