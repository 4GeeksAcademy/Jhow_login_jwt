import React from "react";
import imageSample from "../../img/Image-sample.jpg";

// 2. Crear el componente JSX
function Jumbotron() {
    return (
        <div className="Div-grande-que-encierra-todo flex row m-1">
            <div className="Izquierda-Texto d-inline row justify-content-center py-5 col-sm-12 col-md-6 col-lg-6">
                    <h1 className="display-5 mx-auto p-4 col-sm-12 col-md-12 col-lg-12"><strong>We are looking for you!</strong></h1>
                    <p className="lead mx-auto p-4 d-flex justify-content-center col-sm-12 col-md-12 col-lg-12">You have the talent, we have the hub!</p>
                    <a className="btn bg-300 text-white p-4 btn-lg mx-auto d-flex justify-content-center col-sm-12 col-md-12 col-lg-5" href="#" role="button">Join events</a>
            </div>
            <div className="Derecha-Imagen mt-4 flex col-sm-12 col-md-6 col-lg-6">
                <img class="img-thumbnail rounded-circle float-end border-0" src={imageSample} alt="" />
            </div>
        </div>
    );
}

export default Jumbotron


// style={{paddingTop: "50px", paddingBottom: "50px"}}