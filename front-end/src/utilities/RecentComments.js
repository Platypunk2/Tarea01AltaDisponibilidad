import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import {useAuth0} from "@auth0/auth0-react";

/*
{isAuthenticated && user.email==props.data.correo ?
    <MDBCardBody className="p-4">
      <div className="d-flex flex-start">
        <div>
          <MDBTypography tag="h6" className="fw-bold mb-1">
            Lara Stewart
          </MDBTypography>
          <p className="mb-0">
            Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites.
          </p>
        </div>
      </div>
    </MDBCardBody>: <></>}
*/ 




export default function RecentComments(props) {
  console.log(props.data)
  const {isAuthenticated,user} = useAuth0();


  const  DeleteReview = async (correo, id) => {
    const Data = JSON.stringify({
      correo: correo,
      idProd: id,
    })
    console.log(Data);
    await fetch(process.env.WDS_SOCKET_HOST+'deletereseneas', {
      method: 'DELETE',
      body: Data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      
      })
      .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(false);
    
    
      
  }
  
  
  return (
    <>
    <hr className="my-0" />
    <MDBCardBody className="p-4">
      <p className="fw-light mb-2 pb-2"></p>
      <div className="d-flex flex-start">
        <div>
          <MDBTypography tag="h6" className="fw-bold mb-1">
            {props.data.user}
          </MDBTypography>
          <div className="d-flex align-items-center mb-3">
          </div>
          <p className="mb-0">
            {props.data.texto}
          </p>
        </div>
        
      </div>
      <p className="fw-light mb-2 pb-2"></p>
      {isAuthenticated && user.email===props.data.correo ?
      <>
      <MDBBtn className='mx-2 ' color='danger' onClick={() => {DeleteReview(props.data.correo,props.data.idProd)}}>
        Eliminar
      </MDBBtn></>:null}
    </MDBCardBody>
    
    </>

  );
}