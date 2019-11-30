import './styles/main.scss';
import './static/descarga.jpeg'

function isValidJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  }
  
  console.log(isValidJSON('test'))
  
console.log("works!!!")