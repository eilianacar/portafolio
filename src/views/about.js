import React from 'react';
import { Layout } from '../componets/Layout';
import OnlySkill from '../img/OnlySkill.png';
import FundaciónAriel from '../img/FundaciónAriel.png';
import Pokemania from '../img/Pokemania.png'
import pincelBook from '../img/pincelBook.png'
import TheCakeHouse from '../img/TheCakeHouse.png'
import hotieHoo from '../img/hotieHoo.png'


export const AboutPage = () => {
  return (
    <Layout>
      <div className="AllSkill">
        
        <div className="front">
          <h1>Skills Front-End</h1>
          <img className='skillFront' src={OnlySkill} alt="skills" />
          <h1>Soft Skills</h1>
        </div>

        
        
        <div className="SoftSkill">
          
          <ul> Trabajo en equipo</ul>
          <ul> Auto aprendizaje</ul>
          <ul> Trabajo Metodolía agiles</ul> <br></br> <br></br>
          <ul> Responsable</ul>
          <ul> Facilidad de comunicación</ul>
          <ul> Redacción y escritura creativa</ul>
          <ul> Honesta</ul>
        </div>

        <div className="allProyects">
        <br></br>
          <h1>Mis proyectos</h1>

          
          <div className="imagens">
            <a href="https://arielatolosasilva.github.io/SCL013-cipher/" target="_blank"><img className='ariel' src={FundaciónAriel} alt="ariel" /></a>
            <a href="https://andreasilvam.github.io/SCL013-data-lovers/src/index.html" target="_blank"><img className='pokemania' src={Pokemania} alt="pokemania" /></a>
            <a href="https://red-social-36807.firebaseapp.com/" target="_blank"><img className='pincelbook' src={pincelBook} alt="pincelbook" /></a>
            <a href="https://burger-queen-13.web.app/ " target="_blank"><img className='hotiehoo' src={TheCakeHouse} alt="hotiehoo" /></a>
            <a href="https://hootie-hoo1.web.app/" target="_blank"><img className='hotiehoo' src={hotieHoo} alt="hotiehoo" /></a>
          </div>
        </div>

      </div>
    </Layout>
  )
}