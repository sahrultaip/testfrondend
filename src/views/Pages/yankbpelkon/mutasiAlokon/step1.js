import React, { Component } from 'react';
import { CardBody, Col, Button, Row, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const bulan = [
            { value: 1, label: 'Januari' },
            { value: 2, label: 'Februari' },
            { value: 3, label: 'Maret' },
            { value: 4, label: 'April' },
            { value: 5, label: 'Mei' },
            { value: 6, label: 'Juni' },
            { value: 7, label: 'Juli' },
            { value: 8, label: 'Agustus' },
            { value: 9, label: 'September' },
            { value: 10, label: 'Oktober' },
            { value: 11, label: 'November' },
            { value: 11, label: 'Desember' }
        ]

        const tahun = [
            { value: 2019, label: '2019' },
            { value: 2020, label: '2020' },
        ]

        return (
            <>
                <container-fluid>
                    <Row>
                        <Col sm="12">
                            <h6>&nbsp; </h6>
                            <div style={{ position: 'absolute', right: '15px', marginTop: '-25px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <CardBody className="card-body-nopad mt-3">
                                <FormGroup>
                                    <Row>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" name="text-input" value="Puskesmas Marga I" disabled />
                                            <Label className="labelHeader">Nama Faskes KB/Jaringan/Jejaring</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" name="text-input" value="51" disabled />
                                            <Label className="labelHeader">Kode Provinsi</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" name="text-input" value="02" disabled />
                                            <Label className="labelHeader">Kode Kabupapten/Kota</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" name="text-input" value="004" disabled />
                                            <Label className="labelHeader">No. Register Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" name="text-input" value="01" disabled />
                                            <Label className="labelHeader">No. Jaringan/Jejaring Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <div style={{ float: 'left', width: '50%' }}>
                                                <Select options={bulan}
                                                    defaultValue={{ label: "Juli", value: 7 }}
                                                />
                                            </div>
                                            <div style={{ float: 'left', width: '50%' }}>
                                                <Select options={tahun}
                                                    defaultValue={{ label: "2020", value: 2020 }}
                                                />
                                            </div>
                                            <Label className="labelHeader">Bulan Lapor</Label>
                                        </Col>
                                        <Col xs="6" lg="8">
                                            &nbsp;
                                    </Col>
                                        <Col xs="3" lg="2">
                                            <Label className="labelHeaderRight mt-3">Lembar Ke</Label>
                                        </Col>
                                        <Col xs="3" lg="2">
                                            <Input className="mt-3" type="text" id="text-input" name="text-input" value="001" disabled />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button>
                        <Button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</Button>
                    </div>
                </container-fluid>
            </>
        )
    }
}

export default Step1;