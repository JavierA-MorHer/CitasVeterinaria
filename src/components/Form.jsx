import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {

const [nombreMascota, setNombreMascota] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [alta, setAlta] = useState('');
const [sintomas, setSintomas] = useState('');

useEffect(() => {
  if( Object.keys(paciente).length > 0){
    setNombreMascota(paciente.nombreMascota);
    setPropietario(paciente.propietario);
    setEmail(paciente.email);
    setAlta(paciente.alta);
    setSintomas(paciente.sintomas)
  }else{
    console.log('first')
  }
}, [paciente])


  const generarId = ()=>{
    const first = Date.now().toString(36);
    const second = Math.random().toString(36).substring(2);
    const id = first + second;
    return id;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    //Validacion de formulario
    if( [nombreMascota, propietario, email, alta, sintomas].includes('') ){
      Swal.fire('Error','Todos los campos son obligatorios', 'error');
      return;
    }

    //Obj paciente
    const objPaciente = {
      nombreMascota, 
      propietario, 
      email, 
      alta, 
      sintomas,
    }

    if(paciente.id){
      //Editando registro
      objPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ? objPaciente : pacienteState
      )

      setPacientes(pacientesActualizados);
      setPaciente({});
    }else{
      //Nuevo registro
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
    }

    //Resetear form
    setNombreMascota('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('')
  }

  


  return (
    <div className=' md:w-1/2 lg:w-2/5'>
      <h2 className=' font-black text-3xl text-center'> Seguimiento pacientes </h2> 
        <p className='text-lg mt-5 text-center mb-10'>
          Agrega pacientes y
          <span className=' text-indigo-600 font-bold '> administralos</span>
        </p>

        <form 
          className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10 ml-5'
          onSubmit={handleSubmit}
          >
          <div className=' mb-5'>
            <label 
              className='block text-gray-700 uppercase font-bold' 
              htmlFor="mascota">Nombre mascota</label>
            <input 
              id='mascota'
              className=' border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-lg' type="text" 
              placeholder='Nombre de la mascota'
              value={nombreMascota}
              onChange={ ({target}) => setNombreMascota(target.value)}
              />
          </div>

          <div className=' mb-5'>
            <label 
              className='block text-gray-700 uppercase font-bold' 
              htmlFor="propietario">Nombre propietario</label>
            <input 
              id='propietario'
              className=' border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-lg' type="text" 
              placeholder='Nombre de la mascota'
              value={propietario}
              onChange={ ({target}) => setPropietario(target.value)}

              />
          </div>

          <div className=' mb-5'>
            <label 
              className='block text-gray-700 uppercase font-bold' 
              htmlFor="email">Email</label>
            <input 
              id='email'
              className=' border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-lg' type="email" 
              placeholder='Ingresa tu email'
              value={email}
              onChange={ ({target}) => setEmail(target.value)}
              
              />
          </div>

          <div className=' mb-5'>
            <label 
              className='block text-gray-700 uppercase font-bold' 
              htmlFor="alta">Alta</label>
            <input 
              id='alta'
              className=' border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-lg' type="date"
              value={alta}
              onChange={ ({target}) => setAlta(target.value)}

              />
          </div>

          <div className=' mb-5'>
            <label 
              className='block text-gray-700 uppercase font-bold' 
              htmlFor="sintomas">Sintomas</label>
            <textarea 
              id='sintomas'
              className=' border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-lg' type="text" 
              placeholder='Describe los sintomas'
              value={sintomas}
              onChange={ ({target}) => setSintomas(target.value)}
              />
          </div>

          <input type="submit" className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold transition-all hover:bg-indigo-700 cursor-pointer'
                 value={paciente.id ? 'Editar paciente' : 'Agregar Paciente'}
            />
        </form>
    </div>
  )
}
