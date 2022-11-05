import { Component } from "react";
import { Container } from "react-bootstrap";
import EditProfileBox from "../components/EditProfile/EditProfileBox";
import Navbar from "../components/layout/nav/Navbar";

class EditProfile extends Component{
    render (){
        return(
            <div>
                <Navbar/>
                <Container>
                    <EditProfileBox/>
                </Container>
            </div>
        )
    }
}

export default EditProfile;