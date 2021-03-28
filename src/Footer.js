import React, { Component } from 'react';
import { Navbar, Container} from 'react-bootstrap';

export default class Footer extends Component {
  render(){
    return (
        <div className="fixed-bottom">  
        <Navbar color="dark" dark>
            <Container className="justify-content-md-center">
                <h6>Development by dlittleriver</h6>
            </Container>
        </Navbar>
    </div>
    );
  }
}