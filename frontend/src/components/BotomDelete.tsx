"use client"
import { Button } from '@nextui-org/react'
import React from 'react'
import {useRouter, usePathname } from "next/navigation";

function botomDelete() {
    const pathname = usePathname();
    const router = useRouter();
    const serviceId = pathname.split('/').pop(); // Obtener el ID del servicio de la URL
    return (
        <Button color='danger' onClick={async () => {
            const res = await fetch(`http://localhost:3000/personas/${serviceId}`, { method: 'DELETE' });
            const data = await res.json();
            console.log(data);
            // Redirigir a la página de servicios
            router.push('/personas');
            // Refrescar la página después de un pequeño retraso
            setTimeout(() => {
                window.location.reload();
            }, 500); // Ajusta el retraso según sea necesario
        }}>
            Delete
        </Button>
    )
}

export default botomDelete