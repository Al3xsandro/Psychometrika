import { useAuth } from "../hooks/auth";
import Head from "next/head";

import { Forbidden } from "../components/fobidden";

export default function Dashboard() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <Head>
                <title>Psychometrika | home</title>
            </Head>

            { !isAuthenticated ?  <Forbidden/> :
            <div className="container">
                <h1>Logado</h1>
            </div>
            }
        </>
    )
};