import { Forbidden } from "../components/fobidden";
import { useAuth } from "../hooks/auth";

export default function Admin() {
    const { isAdmin } = useAuth();
    
    return (
        <>
            { !isAdmin ? <Forbidden/> : (
                <div>
                    
                </div>
            )
            }
        </>
    )
};