import React from 'react'

function Container({ children }) {//bu yöntem başka bir 
    // companent içinde kullanma yöntemi
    console.log({children})
    return (
        <>
            <div>Childiren olarak aldık diğer componenti</div>
            {children}
        </>
    )
}

export default Container