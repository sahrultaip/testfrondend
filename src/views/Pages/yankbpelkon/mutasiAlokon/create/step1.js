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
        const monthNames = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember"
        ];

        const bulan = monthNames[new Date().getMonth()]

        const tahun = new Date().getFullYear()

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
                                            <Input type="text" id="text-input" name="text-input" value={this.props.nama_faskes} disabled />
                                            <Label className="labelHeader">Nama Faskes KB/Jaringan/Jejaring</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="text" id="text-input" name="text-input" value={this.props.kd_prov} disabled />
                                            <Label className="labelHeader">Kode Provinsi</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="text" id="text-input" name="text-input" value={this.props.kd_kab} disabled />
                                            <Label className="labelHeader">Kode Kabupapten/Kota</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="number" id="text-input" name="text-input" value={this.props.no_faskes} disabled />
                                            <Label className="labelHeader">No. Register Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" name="text-input" value={this.props.no_jaringan} disabled />
                                            <Label className="labelHeader">No. Jaringan/Jejaring Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <div style={{ float: 'left', width: '48%', marginRight: '4%' }}>
                                                <Input type="text" id="bulan" name="bulan" value={bulan} disabled />
                                            </div>
                                            <div style={{ float: 'left', width: '48%' }}>
                                                <Input type="text" id="bulan" name="bulan" value={tahun} disabled />
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
                                            <Input className="mt-3" type="text" id="text-input" name="text-input" value={this.nomorLembar} disabled />
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