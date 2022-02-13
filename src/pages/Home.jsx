import styles from "../styles/Home.module.css"
import logo from "../assets/logo.png"
import marca from "../assets/marca.png"

import Gallery from "../components/Gallery";
import Photos from "../components/Photos";

import image1 from '../assets/ima1.jpg';
import image2 from '../assets/ima2.jpg';
import image3 from '../assets/ima3.jpg';
import image4 from '../assets/ima4.jpg';
import image5 from '../assets/ima5.jpg';

import photo1 from '../assets/carrusel_1.jpg';
import photo2 from '../assets/carrusel_2.jpg';
import photo3 from '../assets/carrusel_3.jpg';
import photo4 from '../assets/carrusel_4.jpg';
import photo5 from '../assets/carrusel_5.jpg';
import photo6 from '../assets/carrusel_6.jpg';
import photo7 from '../assets/carrusel_7.jpg';
import photo8 from '../assets/carrusel_8.jpg';
import photo9 from '../assets/carrusel_9.jpg';
import photo10 from '../assets/carrusel_10.jpg';
import photo11 from '../assets/carrusel_11.jpg';
import photo12 from '../assets/carrusel_12.jpg';
import photo13 from '../assets/carrusel_13.jpg';
import photo14 from '../assets/carrusel_14.jpg';



const Home = () =>{
    const imagesBanner = [
        {id: 1, imagen: image1, url: "#"},
        {id: 2, imagen: image2, url: "#"},
        {id: 3, imagen: image3, url: "#"},
        {id: 4, imagen: image4, url: "#"},
        {id: 5, imagen: image5, url: "#"},
    ];
    
    const carruselPhotos = [
        {id: 1, imagen: photo1, url: "#"},
        {id: 2, imagen: photo2, url: "#"},
        {id: 3, imagen: photo3, url: "#"},
        {id: 4, imagen: photo4, url: "#"},
        {id: 5, imagen: photo5, url: "#"},
        {id: 6, imagen: photo6, url: "#"},
        {id: 7, imagen: photo7, url: "#"},
        {id: 8, imagen: photo8, url: "#"},
        {id: 9, imagen: photo9, url: "#"},
        {id: 10, imagen: photo10, url: "#"},
        {id: 11, imagen: photo11, url: "#"},
        {id: 12, imagen: photo12, url: "#"},
        {id: 13, imagen: photo13, url: "#"},
        {id: 14, imagen: photo14, url: "#"},
    ];
    

    return(
        <div className={styles.home}>
            <div>
                <Gallery images={imagesBanner} />
            </div>

            <div className={styles.text}>
            <h1> Productos Destacados </h1>
            </div>

            <div>
                <Photos images={carruselPhotos} />
            </div>

           <div>  

           <div className={styles.boxinfo}>

                    <div>
                    <img src={logo} className={styles.logo} alt="Store " />
                    <h1 className={styles.letter1}>
                    Deslumbra y marca pauta con nuestros diseños únicos, cautiva y llena de arte en cada paso.
                    Primera marca de medias alternatives en la ciudad.¿Y tú? ¿Ya eres parte de nuestro team?
                    Contamos con +50 modelos, + delivery.
                    </h1>
                    </div>
                    
                
                    <div>
                    <img src={marca} className={styles.marca} alt="marca" />
                    </div>  
            </div>

            
           </div>
              
        </div>
    )
    
}

export default Home