import { useAuth } from "../../Auth"
import ButtonRedirect from "./ButtonRedirect.jsx";

// Functionality to log a user out of their account
export default function Logout() {

    const { logout } = useAuth();

    // Logs user out on click
    async function handleLogout(event) {
        console.log(event);
        await logout();
    }

    return (
        <ButtonRedirect onClick={() => { handleLogout() }} route="/" content="Logout" />
    )
}