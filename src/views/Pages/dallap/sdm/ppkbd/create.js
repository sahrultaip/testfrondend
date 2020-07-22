import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
// import Step1 from './step1';
// import Step2 from './step2';
// import Step3 from './step3';
// import Step4 from './step4';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';

class CreatePPKBD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
            open: false,
            modal: false,
            datas: [
                { id: 1, dt1: '1.', dt2: ' ', dt3: ' ', d4: ' ' },
                { id: 2, dt1: '2.', dt2: ' ', dt3: ' ', d4: ' ' },
                { id: 3, dt1: '3.', dt2: ' ', dt3: ' ', d4: ' ' },
                { id: 4, dt1: '4.', dt2: ' ', dt3: ' ', d4: ' ' },
                { id: 5, dt1: '5.', dt2: ' ', dt3: ' ', d4: ' ' },
            ],
        }
    }

    handleToggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {

        const options = [
            { value: 'opt1', label: 'Option 1' },
            { value: 'opt2', label: 'Option 2' },
            { value: 'opt3', label: 'Option 3' },
            { value: 'opt4', label: 'Option 4' }
        ]

        const columns = [
            {
                dataField: 'dt1',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt2',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt3',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt4',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt5',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={this.toggle}> <i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        console.log(row)
                        //   this.setState({modalTitle: row.plant})
                        //   this.toggleModal();
                    },
                }
            },
        ];

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Pendafataran PPKBD</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange', marginTop: '5px' }} /></Col>
                                    <FormGroup>
                                        <Col sm="12">
                                            <h6>A. IDENTITAS PPKBD </h6>
                                            <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}{this.props.totalSteps}</div>
                                            <CardBody>
                                                <Row>
                                                    <Col md="4">
                                                        <Label>1. NAMA PPKBD</Label>
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
                                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="3" xs="4"><Label>RT</Label></Col>
                                                                    <Col md="9" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                                <Row>
                                                                    <Col md="3" xs="4"><Label>RW</Label></Col>
                                                                    <Col md="9" xs="8"><Input type="text" id="text-input" name="text-input" /></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>b. Desa/Kelurahan :</Label>
                                                            </Col>
                                                            <Col md="7" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" />
                                                            </Col>
                                                            <Col md="1" xs="3" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>c. Kecamatan :</Label>
                                                            </Col>
                                                            <Col md="7" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                            <Col md="1" xs="3" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>d. Kabupaten :</Label>
                                                            </Col>
                                                            <Col md="7" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                            <Col md="1" xs="3" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4" style={{ marginTop: '10px' }}>
                                                                <Label>e. Provinsi :</Label>
                                                            </Col>
                                                            <Col md="7" xs="9" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                            <Col md="1" xs="3" style={{ marginTop: '10px' }}>
                                                                <Input type="text" id="text-input" name="text-input" value="" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </CardBody>

                                            <h6>B. INFORMASI INSTITUSI </h6>
                                            <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}{this.props.totalSteps}</div>
                                            <CardBody>
                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col md="4" >
                                                        <Label>3. JENIS KELAMIN</Label><br />
                                                    </Col>
                                                    <Col md="8" style={{ paddingLeft: '35px' }}>
                                                        <Row>
                                                            <Col md="2" xs="6">
                                                                <Input type="radio" name="jenis-kelamin" />{' '} 1. Laki-laki
                                                            </Col>
                                                            <Col md="2" xs="6">
                                                                <Input type="radio" name="jenis-kelamin" />{' '} 2. Perempuan
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                    <Col>
                                                        <Label>4. NAMA JABATAN PETUGAS KB TINGKAT DESA/KELURAHAN </Label>
                                                        <FormGroup>
                                                            <Row style={{ paddingLeft: '50px' }}>
                                                                <Input type="radio" name="radio7" />{' '} 1. PKB
                                                            </Row>
                                                            <Row style={{ paddingLeft: '50px' }}>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio8" />{' '} a. Pertama
                                                                </Col>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio8" />{' '} b. Muda
                                                                </Col>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio8" />{' '} c. Madya
                                                                </Col>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio8" />{' '} d. Pelaksana Pemula
                                                                </Col>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio8" />{' '} e. Pelaksana
                                                                </Col>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio8" />{' '} f. Pelaksana Lanjutan
                                                                </Col>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio8" />{' '} g. Penyelia
                                                                </Col>
                                                            </Row>
                                                            <Row style={{ paddingLeft: '50px', marginTop: '10px' }}>
                                                                <Input type="radio" name="radio7" />{' '} 2. PLKB
                                                            </Row>
                                                            <Row style={{ paddingLeft: '50px' }}>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio9" />{' '} a. PNS
                                                                </Col>
                                                                <Col md="4">
                                                                    <Input type="radio" name="radio9" />{' '} b. Bukan PNS
                                                                </Col>
                                                            </Row>
                                                        </FormGroup>
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

                                                            <Row>
                                                                <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                                <Col md="4">
                                                                    <Label>9. Pangkat dan Golongan</Label>
                                                                </Col>
                                                                <Col md="4">
                                                                    <Select options={options} isClearable />
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                                <Col md="4">
                                                                    <Label>10. Pelatihan Fungsional</Label>
                                                                </Col>
                                                                <Col md="8" style={{ paddingLeft: '35px' }}>
                                                                    <Row>
                                                                        <Col md="3" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">1. LDU</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="3" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">2. Refreshing</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="3" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">3. Perjenjangan</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                                <Col md="4">
                                                                    <Label>11. Pelatihan Teknis</Label>
                                                                </Col>
                                                                <Col md="6" style={{ paddingLeft: '35px' }}>
                                                                    <Row>
                                                                        <Col md="4" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">1. Pencatatan Laporan</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="4" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">2. KIP/Konseling</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="4" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">3. Advokasi</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="4" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">4. E-Learning</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="4" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">5. KIE</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="4" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">6. Substansi Lainnya</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                                <Col md="4">
                                                                    <Label>12. Perlengkapan</Label>
                                                                </Col>
                                                                <Col md="8" style={{ paddingLeft: '35px' }}>
                                                                    <Row>
                                                                        <Col md="3" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">1. PLKB Kit</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="3" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">2. KIE Kit</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="3" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">3. Sepeda Motor</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col md="3" xs="12">
                                                                            <FormGroup check className="checkbox">
                                                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                                                <Label check className="form-check-label" htmlFor="checkbox1">4. Android</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col md="12" style={{ paddingTop: '20px' }}></Col>
                                                                <Col md="4">
                                                                    <Label>13. Kelurahan / Desa Binaan</Label>
                                                                </Col>
                                                                <Col md="12">
                                                                    <Table2Edit
                                                                        caption=''
                                                                        tableHead={columns}
                                                                        datas={this.state.datas}
                                                                    />
                                                                </Col>
                                                            </Row>

                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <button className="btn btn-danger" onClick={this.handleToggle}>Simpan</button>
                                            </div>
                                        </Col>
                                    </FormGroup>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row >

                <Modal isOpen={this.state.modal} toggle={this.handleToggle}>
                    <ModalHeader toggle={this.handleToggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleToggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.handleToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div >
        )
    }
}

export default CreatePPKBD;