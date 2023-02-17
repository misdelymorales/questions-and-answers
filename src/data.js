const questions = [
  {
    id: 1,
    title: "¿Cómo agrego clases CSS a los componentes?",
    info: "Pasa una string como la prop className",
  },
  {
    id: 2,
    title: "¿Puedo usar estilos en línea?",
    info: "Sí, El atributo style acepta un objeto de Javascript con propiedades escritas en formato camelCase, en lugar de un string CSS. Esto es consistente con la propiedad DOM style en Javascript, es más eficiente y previene vulnerabilidades XSS.",
  },
  {
    id: 3,
    title: "¿Los estilos en línea son malos?",
    info: "Las clases CSS son generalmente mejores para el rendimiento que los estilos en línea.",
  },
  {
    id: 4,
    title: "¿Qué es CSS-in-JS?",
    info: "'CSS-in-JS' se refiere a un patrón donde el CSS se compone usando JavaScript en lugar de definirlo en archivos externos. Ten en cuenta que esta funcionalidad no es parte de React, sino que es proporcionada por bibliotecas de terceros. React no tiene una opinión sobre cómo se definen los estilos; en caso de dudas, un buen punto de partida es definir tus estilos en un archivo *.css separado como de costumbre y referirse a ellos usando className.",
  },
  {
    id: 5,
    title: "¿Puedo hacer animaciones en React?",
    info: "React puede usarse para potenciar animaciones. Revisa React Transition Group, React Motion, React Spring o Framer Motion, por ejemplo.",
  },
];
export default questions;
