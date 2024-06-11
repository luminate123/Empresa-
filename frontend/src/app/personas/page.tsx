"use client"
import React, { useEffect, useState } from 'react';

function TalleresPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/personas', { next: { revalidate: 3600 } })
      .then(response => response.json())
      .then(data => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className='grid justify-items-center text-2xl font-semibold'>
      <div className='text-4xl mb-6'>Personas Page</div>
      <div className='flex gap-2'>
        {services.map(service => (
          <div key={service.nPerCodigo} className='card bg-slate-300 p-2 rounded-lg shadow-lg'>
            <h2 className='text-base mb-2'>Apellido: {service.cPerApellido}</h2>
            <p className='text-base mb-2'>Nombre: {service.cPerNombre}</p>
            <p className='text-base mb-2'>Dirección: {service.cPerDireccion}</p>
            <p className='text-base mb-2'>Fecha de Nacimiento: {service.dPerFecNac}</p>
            <p className='text-base mb-2'>Edad: {service.nPerEdad}</p>
            <p className='text-base mb-2'>Sexo: {service.cPerSexo}</p>
            <p className='text-base mb-2'>Sueldo: {service.nPerSueldo}</p>
            <p className='text-base mb-2'>Rnd: {service.cPerRnd}</p>
            <p className='text-base mb-2'>Estado: {service.nPerEstado}</p>
            <p className='text-base mb-2'>Remember Token: {service.remember_token}</p>
            <p className='text-base mb-2'>Created At: {service.created_at}</p>
            <p className='text-base mb-2'>Updated At: {service.updated_at}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TalleresPage;
