import React, {useState} from 'react';

const ComponenteMsg = () =>{
 const [hidden, setHidden] = useState (false);
  return(
    <>
    {hidden? null : <h2>Hola Soy un nuevo Componente</h2>}
    <button className='button' onClick={() => setHidden(true)}>Hide Component</button>
    
    </>
  );

};

export default ComponenteMsg;