import React from 'react';

import {Container, Row, Col, Jumbotron} from 'reactstrap';

export default class Modal extends React.Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col sm={{ size: '12', offset: 0 }} className="content-modal">
                        <Jumbotron>
                            {this.props.children}
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}