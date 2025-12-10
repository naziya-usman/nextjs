'use client';

interface Props {
    error: Error
    retry: () => void
}


const ErrorPage = ({ error, retry }: Props) => {
 

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-10 mx-auto my-20">
            <p> an unexpected error an occurrede</p>
            <div >{error?.message ?? String(error)} </div>
            <button className="btn m-5" onClick={() => { retry() }}>Retry</button>
        </div>
    )
}

export default ErrorPage
