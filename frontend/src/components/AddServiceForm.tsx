"use client";
import { Button } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPersonaForm = () => {
  const [cPerApellido, setApellido] = useState('');
  const [cPerNombre, setNombre] = useState('');
  const [cPerDireccion, setDireccion] = useState('');
  const [dPerFecNac, setFecNac] = useState('');
  const [nPerEdad, setEdad] = useState('');
  const [cPerSexo, setSexo] = useState('Masculino');
  const [nPerSueldo, setSueldo] = useState('');
  const [nPerEstado, setEstado] = useState('1');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const router = useRouter();
  const pathname = usePathname();
  const isUpdate = pathname.includes('actualizarPersona');
  const personaId = pathname.split('/').pop();

  useEffect(() => {
    if (isUpdate && personaId) {
      const fetchPersona = async () => {
        const response = await fetch(`http://localhost:3000/personas/${personaId}`);
        if (response.ok) {
          const data = await response.json();
          setApellido(data.cPerApellido);
          setNombre(data.cPerNombre);
          setDireccion(data.cPerDireccion);
          setFecNac(data.dPerFecNac);
          setEdad(data.nPerEdad.toString());
          setSexo(data.cPerSexo);
          setSueldo(data.nPerSueldo.toString());
          setEstado(data.nPerEstado.toString());
        } else {
          setError('Failed to fetch persona data.');
        }
      };

      fetchPersona();
    }
  }, [isUpdate, personaId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isUpdate ? `http://localhost:3000/personas/${personaId}` : 'http://localhost:3000/personas';
    const method = isUpdate ? 'PATCH' : 'POST';

    const formData = new FormData();
    formData.append('cPerApellido', cPerApellido);
    formData.append('cPerNombre', cPerNombre);
    formData.append('cPerDireccion', cPerDireccion);
    formData.append('dPerFecNac', dPerFecNac);
    formData.append('nPerEdad', nPerEdad);
    formData.append('cPerSexo', cPerSexo);
    formData.append('nPerSueldo', nPerSueldo);
    formData.append('nPerEstado', nPerEstado);
    if (file) {
      formData.append('file', file);
    }

    const response = await fetch(url, {
      method,
      body: formData,
    });

    if (response.ok) {
      // Clear form and reset state
      setApellido('');
      setNombre('');
      setDireccion('');
      setFecNac('');
      setEdad('');
      setSexo('Masculino');
      setSueldo('');
      setEstado('1');
      setFile(null);
      setError('');
      toast.success(`Persona ${isUpdate ? 'actualizada' : 'guardada'} con éxito!`);
      router.push('/personas');
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="apellido" className="block text-sm font-medium leading-6 text-gray-900">
              Apellido
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="apellido"
                value={cPerApellido}
                onChange={(e) => setApellido(e.target.value)}
                required
                className="block flex-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="González"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="nombre"
                value={cPerNombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="block flex-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Juan"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="direccion" className="block text-sm font-medium leading-6 text-gray-900">
              Dirección
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="direccion"
                value={cPerDireccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
                className="block w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Calle Falsa 123"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="fecha-nacimiento" className="block text-sm font-medium leading-6 text-gray-900">
              Fecha de Nacimiento
            </label>
            <div className="mt-2">
              <input
                type="date"
                id="fecha-nacimiento"
                value={dPerFecNac}
                onChange={(e) => setFecNac(e.target.value)}
                required
                className="block flex-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="edad" className="block text-sm font-medium leading-6 text-gray-900">
              Edad
            </label>
            <div className="mt-2">
              <input
                type="number"
                id="edad"
                value={nPerEdad}
                onChange={(e) => setEdad(e.target.value)}
                required
                className="block flex-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="34"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="sexo" className="block text-sm font-medium leading-6 text-gray-900">
              Sexo
            </label>
            <div className="mt-2">
              <select
                id="sexo"
                value={cPerSexo}
                onChange={(e) => setSexo(e.target.value)}
                required
                className="block flex-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="sueldo" className="block text-sm font-medium leading-6 text-gray-900">
              Sueldo
            </label>
            <div className="mt-2">
              <input
                type="number"
                step="0.01"
                id="sueldo"
                value={nPerSueldo}
                onChange={(e) => setSueldo(e.target.value)}
                required
                className="block flex-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="2500.50"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="estado" className="block text-sm font-medium leading-6 text-gray-900">
              Estado
            </label>
            <div className="mt-2">
              <select
                id="estado"
                value={nPerEstado}
                onChange={(e) => setEstado(e.target.value)}
                required
                className="block flex-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
              </select>
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="file" className="block text-sm font-medium leading-6 text-gray-900">
              Imagen
            </label>
            <div className="mt-2">
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
                accept="image/*" // Add accept attribute to only allow image files
                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" className="mt-4">{isUpdate ? 'Actualizar Persona' : 'Agregar Persona'}</Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddPersonaForm;
