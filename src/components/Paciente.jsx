import React from 'react'
import Swal from 'sweetalert2';

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombreMascota, propietario, email, alta, sintomas, id} = paciente;

  const handleEliminar= ()=>{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras deshacer esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id)
        Swal.fire(
          'Eliminado',
          'La cita ha sido eliminada',
          'success'
        )
      }
    })
  }

  return (
    <div className='mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: 
      <span className='font-normal normal-case'> {nombreMascota}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: 
      <span className='font-normal normal-case'> {propietario} </span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: 
      <span className='font-normal normal-case'> {email}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: 
      <span className='font-normal normal-case'> {alta}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: 
      <span className='font-normal normal-case'> {sintomas}</span>
    </p>

    <div className='flex justify-between mt-10'>
      <button 
        type='button'
        className='py-2 px-10 bg-indigo-600 transition-all hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
        onClick={ ()=>setPaciente(paciente) }
        >
          Editar
        </button>

        <button 
        type='button'
        className='py-2 px-10 bg-red-600 transition-all hover:bg-red-700 text-white font-bold uppercase rounded-lg'
        onClick={handleEliminar}
        >
          Eliminar
        </button>
    </div>
  </div>
  )
}
