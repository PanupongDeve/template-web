import React, { Component } from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
  } from "reactstrap";

class MainBody extends Component {

    render() {
        const { header } = this.props;

        return (
            <Container className=" mt--7" fluid>
                <Row>
                    <div className=" col">
                    <Card className=" shadow">
                        <CardHeader className=" bg-transparent">
                            <h3 className=" mb-0">{header}</h3>
                        </CardHeader>
                        <CardBody>
                            {this.props.children}
                        </CardBody>
                    </Card>
                    </div>
                </Row>
            </Container>
        );
    }
}


export default MainBody;