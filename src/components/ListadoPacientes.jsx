import React, { useEffect } from "react";
import { Paciente } from "./";

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">

    {pacientes && pacientes.length 
    ?(
      <>
       <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-lg mb-10 mt-5 text-center">Administra tus{" "}
              <span className=" text-indigo-600 font-bold"> pacientes y citas </span>
          </p>
            <div className="overflow-y-auto md:h-screen">
                {pacientes.map((paciente) => (
                  <Paciente 
                    key={paciente.id} 
                    paciente={paciente} 
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    />
                ))}
            </div>  
      </>
       ):
          <>
            <h2 className=" font-black text-3xl text-center">Aun no hay pacientes</h2>
              <p className="text-lg mb-10 mt-5 text-center">Comienza a agregarlos y{" "}
                <span className=" text-indigo-600 font-bold"> apareceran en este panel </span>
              </p>
          </>
  }

      
    </div>
  );
};
