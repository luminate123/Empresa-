"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function functionNavbarComponent() {
    const pathname = usePathname()
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Empresa</p>
            </NavbarBrand>
            <NavbarContent justify="end" >
                <NavbarItem >
                    <Link href="/" className={`${pathname === '/' ? 'text-blue-600' : ''}`}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/personas" className={`${pathname === '/personas' ? 'text-blue-600' : ''}`}>
                        Personas
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/contacto" className={`${pathname === '/contacto' ? 'text-blue-600' : ''}`}>
                        Contacto
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

