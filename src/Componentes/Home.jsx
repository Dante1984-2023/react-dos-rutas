
import React from 'react'

//Importamos Css para darle estilos 
import '../Css/Home.css'

//importamos datos
import datos from '../Data/datos'

const Home = () => {
  return (
    <div className="container fluid m-5 fondo">
        <hr></hr>
        <h1 className='m5 text-center'>Home</h1>
        <hr></hr>

       <div>
        {/* map es un blucle como FOR */}
      {/* return para retornar en los componentes */}
      
       {datos.map( (datos)=>{
        return(
          <article key={datos.id} className="margenes">  {/* La llave va a ser el id para recorrer el arreglo */}
          <h3>
            {datos.name}
          </h3>
          <img src={datos.image}alt={datos.name}></img>
          
          </article>
       )
       })} 

       </div>

    </div>
  )
}

export default Home;
