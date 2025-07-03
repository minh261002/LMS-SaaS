import React from 'react'
import Navbar from './_components/Navbar'

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className=''>
                {children}
            </main>
        </div>
    )
}

export default PublicLayout