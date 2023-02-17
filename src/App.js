import React, {useState} from 'react';
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
      <h3>Sección de Preguntas y respuestas</h3>
      <section className='info'>
        
      </section>
      </div>
    </main>
  );
}

export default App;
