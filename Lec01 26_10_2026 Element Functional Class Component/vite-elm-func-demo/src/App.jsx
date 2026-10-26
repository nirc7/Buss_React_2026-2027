import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './Elements/EHeader';
import EHeader from './Elements/EHeader'
//import EHeader from './Elements/EHeader'


function App() {

  return (
    <>
      <section id="center">
        
        <div>

          {EHeader}
          {/* {EHeader} */}

          <h1>Get started</h1>
          <p>
           Ruppin
          </p>
        </div>
        
        {/* {EHeader} */}

      </section>
     
    </>
  )
}

export default App
