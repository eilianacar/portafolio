import React from 'react';
import { Layout } from '../componets/Layout';
import '../index.css'
import EilianaAguilar from '../img/EilianaAguilar.png'

export const HomePage = () => {
  return (
    <Layout>
      <div className="inicio">
        <img className='logoEA' src={EilianaAguilar} alt="Eiliana" />
          <div className="frist">
             <p className="description"> Egresada de Laboratoria y Periodista, estudié Comunicación Social en Venezuela, ahora he transferido con éxito mi pasión por comunicarme a los lenguajes de programación, en el bootcamp Laboratoria desarrollé programas con HTML, CSS, JavaScript, Github, React, Node.JS.<br></br>
          En este momento, mi principal objetivo profesional es encontrar empleo que me permita compatibilizar mi experiencia como periodista y al mismo tiempo profundizar y mejorar mis habilidades de programación.
          Tengo facilidad para comunicarme y me adapto muy rápidamente al trabajo en equipo, me gusta aprender, he desarrollado mis habilidades de autoaprendizaje.<br></br> Soy una mujer responsable, amable y divertida. Me encanta viajar, hacer ejercicios, bailar.</p>
          </div>
      </div>
    </Layout>
  )
}