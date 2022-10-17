import {useAuth0} from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LoginButton = () =>{
    const {loginWithRedirect } = useAuth0();
    const {user, isAuthenticated, isLoading } = useAuth0();
    
    return (
        isAuthenticated ? <Button disabled variant="dark" onClick={() => loginWithRedirect ()}>
        {user.name}  
      </Button> :
        <Button variant="dark" onClick={() => loginWithRedirect ()}>
        Login  
      </Button>
    )
}

export default LoginButton