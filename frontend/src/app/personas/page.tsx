"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/react";
import Link from 'next/link';

function TalleresPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/personas', { next: { revalidate: 0 } })
      .then(response => response.json())
      .then(data => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className='grid justify-items-center text-2xl font-semibold'>
      <div className='text-4xl mb-6'>Personas Page</div>
      <div className='grid grid-cols-4 gap-2'>
        {services.map(service => (
          
          <Button key={service.nPerCodigo} as={Link} href={`/personas/${service.nPerCodigo}`} className='h-100 flex-col bg-slate-300 p-2 rounded-lg shadow-lg'>
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
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TalleresPage;
