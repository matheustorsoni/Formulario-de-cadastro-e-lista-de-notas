import React from 'react';
import {ListaDeNotas} from './componentes/listaDeNotas';

function App() {
  return (
    <section>
    <form>
      <input type="text" placeholder="titulo"/>
      <textarea placeholder="escreva sua nota..."/>
      <button>Criar nota</button>
    </form>
    <ListaDeNotas/>
  </section>
  );
}

export default App;
