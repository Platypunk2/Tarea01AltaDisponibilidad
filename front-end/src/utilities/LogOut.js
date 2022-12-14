import {useAuth0} from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LogOut = () =>{
  const { logout } = useAuth0();
    
    return (
      <Button variant="dark" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out  
    </Button>
    )
}

export default LogOut