"use client"
import React from 'react'
import { signIn, useSession } from "next-auth/react";

function HomePage() {
  const { data: session } = useSession()
  return (
    <div>
      {session?.user ?
        <div>
          {session.user.email}
          <div>
            {session.user.name}
          </div>
        </div>
        :
        null
      }
    </div>
  )
}

export default HomePage