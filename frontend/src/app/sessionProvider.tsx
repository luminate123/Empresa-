// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export function SessionaProvider({ children }: { children: React.ReactNode }) {
  return (

    <SessionProvider>
      {children}
    </SessionProvider>
  )
}