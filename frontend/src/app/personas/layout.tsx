"use client"
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tallereslayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()
    return <>
        <div>
            <Button as={Link} color="primary" href="/personas/nuevaPersona" variant="flat">
                Crear Servicio
            </Button>
        </div>
    
        <div className="grid justify-items-center">
            {children}
        </div>

    </>
}