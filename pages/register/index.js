// Next/React imports
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation';

// Component imports
import RegistrationForm from "@/Components/registrationForm/registrationForm";

/*
    Register page
*/
export default function Register({ query }) {

    // Clears the query strings on reload
    const router = useRouter()
    useEffect(() => {
        router.replace('/register', undefined, { shallow: true })
    }, [router.isReady])

    return(
        <>
        <main className={'container my-5'}>
            <RegistrationForm valid={query.valid} alertMessage={query.message}/>
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