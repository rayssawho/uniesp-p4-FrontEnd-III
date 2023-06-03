import Aluno from "./components/Aluno"

function App() {
  return (
    <div>
      <Aluno>
      {
        [{nome: "Rayssa", email: "rayssarte@gmail.com", curso: "Sistemas para Internet", media: 10.00},
         {nome: "Marina", email: "marina@gmail.com", curso: "Engenharia de dados", media: 10.00},
         {nome: "Sophia", email: "shop14@gmail.com", curso: "Engenharia da computação", media: 6.00}
        ].map((aluno, i) => 
         <>
         <p>Nome: {aluno.nome}</p>
         <p>Email: {aluno.email}</p>
         <p>Curso: {aluno.curso}</p>
         <p>Média: {aluno.media}</p>
         <p>Status: {aluno.media >= 7.00 ? "Aprovado" : "Reprovado" }</p>
         </>
         )
      }

      </Aluno>
      
    </div>
  )
}

export default App
