import BotomDelete from "@/components/BotomDelete";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

async function load(id: any) {
    try {
        const res = await fetch(`http://localhost:3000/personas/${id}`, { next: { revalidate: 0 } });
        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json();
        console.log('Fetched data:', data);
        return data;  // Return the fetched data
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;  // Return null in case of an error
    }
}


async function page({ params }: { params: { personaId: number } }) {
    const service = await load(params.personaId);

    if (!service) {
        return <div>Error: Unable to load service data.</div>;
    }
    return (
        <div key={service.nPerCodigo}>
            <h2 className='text-base mb-2'>Apellido: {service.cPerApellido}</h2>
            <p className='text-base mb-2'>Nombre: {service.cPerNombre}</p>
            <p className='text-base mb-2'>Dirección: {service.cPerDireccion}</p>
            <p className='text-base mb-2'>Fecha de Nacimiento: {service.dPerFecNac}</p>
            <p className='text-base mb-2'>Edad: {service.nPerEdad}</p>
            <p className='text-base mb-2'>Sexo: {service.cPerSexo}</p>
            <p className='text-base mb-2'>Sueldo: {service.nPerSueldo}</p>
            <p className='text-base mb-2'>Rnd: {service.cPerRnd}</p>
            <p className='text-base mb-2'>Estado: {service.nPerEstado}</p>
            <p className='text-base mb-2'>Created At: {service.created_at}</p>
            <p className='text-base mb-2'>Updated At: {service.updated_at}</p>
            <img src={`http://localhost:3000/${service.imagen}`} alt="Imagen" />
            <Button as={Link} href={`/personas/actualizarPersona/${service.nPerCodigo}`}>Actualizar Servicio</Button>
            <BotomDelete />

        </div>
    );
}

export default page;