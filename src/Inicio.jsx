import './Inicio.css';
import HeaderComponent from './components/HeaderComponent';

function Inicio() {
  return (
    <>
      <HeaderComponent/>
      <main>
        <div className="navigation-buttons">
          <button className="nav-button" onClick={() => window.location.href = '/Peliculas'}>
            <img src="/assets/placeholder.png" alt="Películas" />
            <span>Películas</span>
          </button>
          <button className="nav-button" onClick={() => window.location.href = '/Series'}>
            <img src="/assets/placeholder.png" alt="Series" />
            <span>Series</span>
          </button>
        </div>
      </main>
    </>
  );
}

export default Inicio;