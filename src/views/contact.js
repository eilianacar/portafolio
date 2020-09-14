import React from 'react';
import { Layout } from '../componets/Layout';
import '../style/main.css'


export const ContactsPage = () =>{
  return(
    <Layout>
      <div className='information'>
        <i class="fas fa-id-card-alt"></i>
        <h3 className='contact' >¿Quieres trabajar juntos a mi?</h3>
        <h3 className='contact' >¡Contáctame!</h3>
      <p class="fas fa-envelope-open-text"> eilianacar@gmail.com</p>
      <p class="fas fa-map-marker-alt"> Santiago centro, Santiago</p>
      <p class="fas fa-phone-volume"> +56-936-948-766</p>
      <ul><a class="fab fa-github" href='https://github.com/eilianacar' target="_blank" > eilianacar</a></ul>
      <ul><a class="fab fa-linkedin" href='https://www.linkedin.com/in/eilianaaguilar/' target="_blank" > eilianaaguilar</a></ul>

      </div>    
      </Layout>
  )
}

