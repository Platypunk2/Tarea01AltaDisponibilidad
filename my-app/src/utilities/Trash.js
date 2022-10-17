function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
  }

  

/*
              <hr className="my-0" />

              <MDBCardBody className="p-4">
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Alexa Bennett
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        March 30, 2021
                        <span className="badge bg-primary">Pending</span>
                      </p>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="pencil-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="redo-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="heart ms-2" />
                      </a>
                    </div>
                    <p className="mb-0">
                      It uses a dictionary of over 200 Latin words, combined
                      with a handful of model sentence structures, to generate
                      Lorem Ipsum which looks reasonable. The generated Lorem
                      Ipsum is therefore always free from repetition, injected
                      humour, or non-characteristic words etc.
                    </p>
                  </div>
                </div>
              </MDBCardBody>
*/ 