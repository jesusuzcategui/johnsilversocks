import styles from "../styles/Home.module.css"
import logo from "../assets/logo.png"
import marca from "../assets/marca.png"
import styled from 'styled-components';
import products from '../api/Api';

import Gallery from "../components/Gallery";
import Photos from "../components/Photos";

import image1 from '../assets/ima1.jpg';
import image2 from '../assets/ima2.jpg';
import image3 from '../assets/ima3.jpg';
import image4 from '../assets/ima4.jpg';
import image5 from '../assets/ima5.jpg';





const Home = () =>{
    const imagesBanner = [
        {id: 1, imagen: image1, url: "#"},
        {id: 2, imagen: image2, url: "#"},
        {id: 3, imagen: image3, url: "#"},
        {id: 4, imagen: image4, url: "#"},
        {id: 5, imagen: image5, url: "#"},
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
                <Photos images={products} />
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