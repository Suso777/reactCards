import './App.css';
import Dogs from './components/Dogs';
import perro1 from './assets/img/perro1.jpg';
import perro2 from './assets/img/perro2.jpg';
import perro3 from './assets/img/perro3.jpg';
import perro4 from './assets/img/perro4.jpg';

function App() {
  return (
    <div className="App">
      <h1>Perros disponibles</h1>
      <div style={{display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center'}}>
        <Dogs nombre='Firulais' raza='Labrador' edad='3 años' descripcion='Muy juguetón y cariñoso.' imagen={perro1} />
        <Dogs nombre='Luna' raza='Pastor' edad='2 años' descripcion='Le encanta correr.' imagen={perro2} />
        <Dogs nombre='Max' raza='Beagle' edad='4 años' descripcion='Tranquilo y obediente.' imagen={perro3} />
        <Dogs nombre='Nala' raza='Bulldog' edad='1 año' descripcion='Ideal para familia.' imagen={perro4} />
      </div>
    </div>
  );
}

export default App;