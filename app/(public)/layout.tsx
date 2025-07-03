import React from 'react'
import Navbar from './_components/Navbar'

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className='container mx-auto md:px-6 lg:px-8'>
                {children}
            </main>
        </div>
    )
}

export default PublicLayout