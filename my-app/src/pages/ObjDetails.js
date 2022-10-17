import React, { useState, useEffect } from 'react'
import RecentComments from '../utilities/RecentComments'
import Add from '../utilities/Add'
import Update from '../utilities/Update'
import {useLocation} from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import {useAuth0} from "@auth0/auth0-react";
const ObjDetails = () => {

    const {user} = useAuth0();
    const location = useLocation()
    const [Prod, setProdt] = useState(false)
    const [Comment, setComment] = useState(false)
    var userCommnet = true;
    useEffect(() => {
        //console.log(location);
        fetch('http://localhost:5000/productos/'+location.state.id)
           .then((response) => response.json())
           .then((data) => {
              //console.log(data_js);
              console.log(data);
              setProdt(data);
              //console.log(Prod[0]);
           })
           .catch((err) => {
              console.log(err.message);
           });

        fetch('http://localhost:5000/reseneas/'+location.state.id)
           .then((response) => response.json())
           .then((data) => {
              //console.log(data_js);
              console.log(data);
              setComment(data);
              //console.log(Prod[0]);
           })
           .catch((err) => {
              console.log(err.message);
           });
      }, [])
        
    return (
        <>
        <div className="ObjDetails">
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={Prod ? Prod[0].nombre+".png": null} alt="..." /></div>
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bolder">{Prod ? Prod[0].nombre: null}</h1>
                            <div className="fs-5 mb-5">
                                <span>${Prod ? Prod[0].precio: null}</span>
                            </div>
                            <p className="lead">{Prod ? Prod[0].descripcion: null}</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
        <section>
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
            <MDBRow className="justify-content-center">
            <MDBCol md="12" lg="10">
                <MDBCard className="text-dark">
                <MDBCardBody>
                    <MDBTypography tag="h4" className="mb-0">
                    Reseñas
                    </MDBTypography>
                </MDBCardBody>
                {Comment ? Comment.map((comment) => (
                    comment.correo === (user ? user.email : null) ? userCommnet = false:null,
                    <RecentComments key={comment.correo} data={comment}></RecentComments>
                )):null}
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </section>
        {Prod && userCommnet ? <Add data={Prod}></Add>: <Update data={Prod}></Update>}
        
            
        
        </>
    )
}
export default ObjDetails;