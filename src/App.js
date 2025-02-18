import img from './Img/Favicon.png';
import Facebook from './Img/Facebook.png';
import Google from './Img/Google.png';
import Apple from './Img/Apple.png';
import './index.css';

function App() {
  return (

    <div className="container">
      <div className="left">
        <div className="frame">
          <ion-icon name="arrow-back-circle-outline" className="back"></ion-icon>
          <h1>Iniciar Sesión</h1>
        </div>

        <h2>Da el primer paso hacia una vida financiera sin preocupaciones.</h2>
        <img src={img} alt="No" className="logo" />
      </div>
      <div className="right">
        <button className="Primario">Correo</button>
        <button className="Primario">Contraseña</button>
        <h3><a href="">Olvidaste tu contraseña?</a></h3>
        <button className="Terciario">Ingresar</button>
        {/* <!-- --- o --- --> */}
        <div className='Item-line'>
          <div className='line'></div>
          <div className='oval'></div>
          <div className='line-2'></div>
        </div>
        {/* <!-- Iconos --> */}
        <div className="Iconos">
          <div className="Icon">
            <a href=""><img src={Facebook} alt="" /></a>
          </div>
          <div className="Icon">
            <a href=""><img src={Google} alt="" /></a>
          </div>
          <div className="Icon">
            <a href=""><img src={Apple} alt="" /></a>
          </div>
        </div>
        <p>No estas registrado?<a href=""> Registrate Aquí.</a></p>
      </div>
    </div >
  );
}

export default App;
