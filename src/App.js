import React from 'react';
import téléchargement from './imgs/téléchargement.jpg'
import './App.css'
import Header from './component/header.js';
import About from './component/about.js';
import Contact from './component/contact.js';
import Footer from './component/footer.js';

import List from './component/List'

const data=[
  {img:'https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj1.jpg?raw=true',para:' Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.',
   a:'#'},
  {img:'https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj2.jpg?raw=true',title:'Project 2' , para:' Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.',
   a:'#'}
   ,{img:'https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj3.jpg?raw=true',title:'Project 3',para:' Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.',
   a:'#'},
   {img:'https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj4.jpg?raw=true',title:'Project 4',para:' Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.',
   a:'#'}

];



  function App() {


    return(
      <>
      
      <Header name={'John Doe'}/>
      <About greet={'Hello, my name is'} N={'John doe'} P={'and i make horrible websites.'}/>
        
      <List data={data} />
     
    
     <Contact/>
     <Footer par={'Copyritghts &copy; GOMYCODE 2020'}/>
    </>
    )
  }
  export default App
