// Next/React imports
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation';

// Component imports
import LoginForm from "../../Components/loginForm/loginForm";

/*
    Login page component
*/
export default function Login({ query }) {

    // Clears the query strings on reload
    const router = useRouter()
    useEffect(() => {
        router.replace('/login', undefined, { shallow: true })
    }, [router.isReady])

    return(
        <>
        <main className={'container my-5'}>
            <LoginForm valid={query.valid} alertMessage={query.message}/>
        </main>
        </>
    )
}

/*
    getServerSideProps funcion
*/
export async function getServerSideProps({ query }) {
    return { props: { query: query } }
}