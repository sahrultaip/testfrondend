import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Label, Input, FormGroup, Button } from 'reactstrap';
// import Step1 from './step1';
// import Step2 from './step2';
// import Step3 from './step3';
// import Step4 from './step4';

class CreatePPLKB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
            open: false,
        }
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Pendafataran PPLKB</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange', marginTop: '5px' }} /></Col>
                                    <Col sm="12">
                                        <h6>IDENTITAS PPLKB</h6>
                                        <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep} {this.props.totalSteps}</div>
                                        <CardBody>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <Label>1. NAMA</Label>
                                                    </Col>
                                                    <Col md="8">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col md="12" xs="12">
                                                        <Label>2. ALAMAT</Label>
                                                        <Row>
                                                            <Col md="4" xs="12" style={{ paddingTop: '10px' }}>
                                                                <Label>a. Jalan :</Label>
                                                            </Col>
                                                            <Col md="4" style={{ paddingTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" />
                                                            </Col>
                                                            <Col md="2" xs="4" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="4" xs="4"><Label>RT :</Label></Col>
                                                                    <Col md="8" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md="2" xs="4" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="4" xs="4"><Label>RW :</Label></Col>
                                                                    <Col md="8" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>b. Desa/Kelurahan :</Label>
                                                            </Col>
                                                            <Col md="4" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" />
                                                            </Col>
                                                            <Col md="3" xs="6" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="4" xs="4"><Label>Kode :</Label></Col>
                                                                    <Col md="8" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>c. Kecamatan :</Label>
                                                            </Col>
                                                            <Col md="4" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                            <Col md="3" xs="6" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="4" xs="4"><Label>Kode :</Label></Col>
                                                                    <Col md="8" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>d. Kabupaten :</Label>
                                                            </Col>
                                                            <Col md="4" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                            <Col md="3" xs="6" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="4" xs="4"><Label>Kode :</Label></Col>
                                                                    <Col md="8" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>e. Provinsi :</Label>
                                                            </Col>
                                                            <Col md="4" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                            <Col md="3" xs="6" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="4" xs="4"><Label>Kode :</Label></Col>
                                                                    <Col md="8" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>f. Telepon :</Label>
                                                            </Col>
                                                            <Col md="4" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="number" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                            <Col md="3" xs="6" style={{ marginTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="4" xs="4"><Label>e-Mail :</Label></Col>
                                                                    <Col md="8" xs="8"><Input type="email" id="text-input" name="text-input" value="" /></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col md="4" >
                                                        <Label>3. JENIS KELAMIN :</Label><br />
                                                    </Col>
                                                    <Col md="7" style={{ paddingLeft: '35px' }}>
                                                        <Row>
                                                            <Col md="4" xs="6">
                                                                <Input type="radio" name="jenis-kelamin" />{' '} 1. Laki-laki
                                                            </Col>
                                                            <Col md="4" xs="6">
                                                                <Input type="radio" name="jenis-kelamin" />{' '} 2. Perempuan
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col md="4">
                                                        <Label>4. NAMA JABATAN PETUGAS KB : <i>(Pilih Salah Satu)</i></Label><br />
                                                        <Label>Tingkat Kecamatan</Label>
                                                    </Col>
                                                    <Col md="7" style={{ paddingLeft: '35px' }}>
                                                        <Row>
                                                            <Col md="4" xs="6">
                                                                <Input type="radio" name="radio7" />{' '} 1. PPLKB
                                                            </Col>
                                                            <Col md="4" xs="6">
                                                                <Input type="radio" name="radio7" />{' '} 2. Ka. UPT
                                                            </Col>
                                                            <Col md="4" xs="6">
                                                                <Input type="radio" name="radio7" />{' '} 3. Koordinator PLKB
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col>
                                                        <Row>
                                                            <Col md="4" xs="12">
                                                                <Label>5. Angka Kredit PKB</Label>
                                                            </Col>
                                                            <Col md="3" xs="5">
                                                                <Input type="number" id="text-input" name="text-input" value="Bali" />
                                                            </Col>
                                                            <Col md="2" xs="3" className="d-flex justify-content-end">
                                                                <Label>TMT :</Label>
                                                            </Col>
                                                            <Col md="3" xs="4">
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col>
                                                        <Row>
                                                            <Col md="4" xs="12">
                                                                <Label>6. NIP</Label>
                                                            </Col>
                                                            <Col md="3">
                                                                <Input type="number" id="text-input" name="text-input" value="Bali" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col>
                                                        <Row>
                                                            <Col md="4" xs="12">
                                                                <Label>7. NIK</Label>
                                                            </Col>
                                                            <Col md="3" xs="10">
                                                                <Input type="number" id="text-input" name="text-input" value="Bali" />
                                                            </Col>
                                                            <Col md="1" xs="1">
                                                                <Button className="btn btn-dark"> <i className="icon-search4"></i> </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col>
                                                        <Label>8. PENDIDIKAN TERAKHIR </Label>
                                                        <FormGroup>
                                                            <Row style={{ paddingLeft: '50px' }}>
                                                                <Col md="6" xs="6">
                                                                    <Row>
                                                                        <Col md="4">
                                                                            <Input type="radio" name="radio10" />{' '} 1. SMA
                                                                        </Col>
                                                                        <Col md="4">
                                                                            <Input type="radio" name="radio10" />{' '} 2. D1
                                                                        </Col>
                                                                        <Col md="4">
                                                                            <Input type="radio" name="radio10" />{' '} 3. D2
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="6" xs="6">
                                                                    <Row>
                                                                        <Col md="4">
                                                                            <Input type="radio" name="radio10" />{' '} 4. D3
                                                                        </Col>
                                                                        <Col md="4">
                                                                            <Input type="radio" name="radio10" />{' '} 5. S1
                                                                        </Col>
                                                                        <Col md="4">
                                                                            <Input type="radio" name="radio10" />{' '} 6. S2
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row >
            </div >
        )
    }
}

export default CreatePPLKB;