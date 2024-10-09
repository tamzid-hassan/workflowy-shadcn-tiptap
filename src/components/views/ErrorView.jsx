import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorView() {

    const error = useRouteError();
    console.log("🚀 ~ ErrorView ~ error:", error)


    return (
        <div id="error-page" className='flex flex-col items-center justify-center w-full h-screen mx-auto'>
            <h4 className='mb-2 text-5xl font-bold'>Oops!</h4>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorView