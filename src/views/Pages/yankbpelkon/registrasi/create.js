import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import StepWizard from 'react-step-wizard';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

class CreateRegistrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    changeDate = date => this.setState({ date })

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Tambah Data Pelayanan KB</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange', marginTop: '5px' }} /></Col>
                                    <Col md="12">
                                        <StepWizard>
                                            <Step1 />
                                            <Step2 />
                                            <Step3 />
                                        </StepWizard>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CreateRegistrasi;