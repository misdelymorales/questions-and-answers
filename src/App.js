import React, {useState} from 'react';
import data from './data';
import Question from './Question';

function App() {
  // const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
      <h3>Sección de Preguntas y respuestas</h3>
      <section className='info'>
        <p>hola mundo</p>
        <Question/>
      </section>
      </div>
    </main>
  );
}

export default App;
