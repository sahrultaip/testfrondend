import React, { Component } from 'react';
import { Col, Row, Label, Input } from 'reactstrap';

class Step4 extends Component {

    render() {
    
        return (
            <div style={{ position: 'relative' }}>
                <h6>IV. PERSETUJUAN </h6>
                <div style={{position:'absolute', right: '0', marginTop:'-30px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row>
                    <Col md="1">
                        <Label>Tempat : </Label>
                    </Col>
                    <Col md="2">
                        <Input type="read-only" id="text-input" name="text-input" value="Tababan" />
                    </Col>
                    <Col md="1">
                        <Label>Tanggal</Label>
                    </Col>
                    <Col md="2">
                        <Input type="date" id="text-input" name="text-input" />
                    </Col>
                </Row>
                <Row>
                    <Col md="6" style={{ marginTop: '20px' }}>
                        <Row>
                            <Col md="12">
                                <Label>Kepala SKPD KB Kabupaten/Kota/Pimpinan Faskes KB Induk,</Label>
                            </Col>
                        </Row>
                        <Row md="6" style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>Nama : </Label>
                            </Col>
                            <Col md="3">
                                <Input type="text" id="text-input" name="text-input" />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>NIP : </Label>
                            </Col>
                            <Col md="3">
                                <Input type="number" id="text-input" name="text-input" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6" style={{ marginTop: '20px' }}>
                        <Row>
                            <Col md="12">
                                <Label>Pimpinan Faskes KB/Jaringan/Jejaring,</Label>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>Nama : </Label>
                            </Col>
                            <Col md="3">
                                <Input type="text" id="text-input" name="text-input" />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>NIP : </Label>
                            </Col>
                            <Col md="3">
                                <Input type="number" id="text-input" name="text-input" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <div style={{display:'flex', justifyContent:'space-between', marginTop: '20px'}}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-danger">Simpan</button>
                </div>
            </div>
        )
    }
}

export default Step4;