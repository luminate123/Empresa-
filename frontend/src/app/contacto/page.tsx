"use client"
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

function ContactoPage() {
  // Estado para almacenar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construyendo el objeto de datos para la API
    const emailData = {
      to: formData.email, // Asumiendo que 'email' es el destinatario
      subject: formData.nombre,
      content: formData.mensaje,
    };

    try {
      const response = await fetch('http://localhost:3000/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Algo salió mal al enviar el formulario');
      }

      // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
      console.log('Formulario enviado con éxito');
      // Opcional: resetear el formulario
      setFormData({
        nombre: '',
        email: '',
        mensaje: '',
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error
    }
  };

  return (
    <div className='grid justify-center'>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Subject:</label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.email}
              onChange={handleChange}
            />

          </div>
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <textarea
              id="mensaje"
              name="mensaje"
              required
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </div>

        </div>
        <Button className='bg-blue-600 text-white mt-5' type="submit">Enviar</Button>
      </form>
    </div>
  );
}

export default ContactoPage;