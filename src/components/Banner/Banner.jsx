import React from "react";
import "./Banner.css";
import astronauta from '../../assets/images/banner1.webp'

const Banner = () => {
    return (
        <section className="banner-container text-white py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="banner-content text-center text-md-start">
            <h1 className="banner-title fw-bold">
              Fundamentos de la<br /> Investigación Científica
            </h1>
            <p className="banner-text mt-3">
              Aprende a tu ritmo y potencia tu carrera desde cualquier lugar del universo, con nuestros cursos en
              línea de frontend y backend de la mano de expertos.
            </p>
          </div>
          <div className="banner-image mt-4 mt-md-0">
            <div className="image-container position-relative">
              <img src={astronauta} alt="Astronauta" className="astronaut img-fluid" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;