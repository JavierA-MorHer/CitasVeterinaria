
import { useEffect, useState } from 'react'
import './App.css'
import { Form, Header, ListadoPacientes } from './components'

function App() {
  
  const pacientesLocalStorage = JSON.parse(localStorage.getItem('Pacientes'));
  
  const [pacientes, setPacientes] = useState( pacientesLocalStorage || []);
  const [paciente, setPaciente] = useState({});
  
  useEffect(() => {
    localStorage.setItem('Pacientes', JSON.stringify(pacientes));
  }, [pacientes])
  

  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )

    setPacientes(pacientesActualizados);
  }

  return (
   <div className=' container mx-auto mt-20'>
      <Header
        
      />
      <div className='mt-12 md:flex'>
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        /> 
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
   </ div>
  )
}

export default App