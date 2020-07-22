import React, { Component } from 'react';
import {CardBody, Col, Row, FormGroup, Label, Input, TabPane, TabContent, Button } from 'reactstrap';
import Select from 'react-select';

class Step1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: '',
            datas: []
        }
    }

    
    componentDidMount(){
        this.getData();
    }

    getData = () => {
        var  data = JSON.parse(this.props.lihat)
        this.setState({
            datas: data
        })
    }

    render(){
        console.log('get data', this.state.datas)
        return(
            <div>
                <Row>
                    <Col sm="12">
                        <Row>
                            <Col md="3"></Col>
                            
                            <Col md="6" style={{ textAlign: 'center' }}>
                            <CardBody>
                                <h6>KARTU PENDAFTARAN TEMPAT PELAYANAN KB</h6>
                                <Row>
                                    <Col md="3" xs="6" style={{ textAlign: 'center' }} >
                                        <Row>
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" disabled/>
                                        </Row>
                                        <Row >
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>Kode Provinsi</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" disabled/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>Kode Kabupaten/Kota</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input type="number" style={{ marginRight: '5px', textAlign: 'center' }} id="text-input" name="text-input" disabled/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>No. Register Faskes KB</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input type="number" style={{ marginRight: '5px', textAlign: 'center' }} id="text-input" name="text-input" disabled/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>No. Jaringan/Jejaring Faskes KB</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                        <CardBody className="card-body-nopad">
                        <h6>I. Identitas </h6>
                        <div style={{position:'absolute', right: '20px', marginTop:'-30px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label className="labelForm">1. Nama Tempat Pelayan KB</Label>
                                    </Col>
                                    <Col md="4">
                                        <Input type="text" id="text-input" name="text-input" disabled />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <Label style={{ marginTop: '10px' }} className="labelForm">2. Alamat</Label>
                                        <Row>
                                            <Col md="4" xs="12" style={{ paddingTop: '10px' }}>
                                                <Label className="labelForm">a. Jalan :</Label>
                                            </Col>
                                            <Col md="4" style={{ paddingTop: '10px' }}>
                                                <Input type="text" id="text-input" name="text-input" disabled />
                                            </Col>
                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                <Row>
                                                    <Col md="3" xs="4"><Label className="labelForm">RT</Label></Col>
                                                    <Col md="9" xs="8"><Input type="read-only" id="text-input" name="text-input"  /></Col>
                                                </Row>
                                            </Col>
                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                <Row>
                                                    <Col md="3" xs="4"><Label className="labelForm">RW</Label></Col>
                                                    <Col md="9" xs="8"><Input type="read-only" id="text-input" name="text-input" /></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>b. Desa/Kelurahan :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>c. Kecamatan :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input"  />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>d. Kabupaten :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>e. Provinsi :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{ paddingTop: '20px' }}>
                                    <Col md="4" style={{ paddingTop: '10px' }}>
                                        <Label>3. Jenis</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Jenis Faskes KB" isClearable />
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Jenis Tingkat Faskes KB" isClearable />
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Jenis Tingkat Pelayanan" isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md='4' style={{ paddingTop: '10px' }}>
                                        <Label>4. Kepemilikan</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Status Kepemilikan" isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md='4' style={{ paddingTop: '10px' }}>
                                        <Label>5. Apakah faskes KB termasuk pada:</Label>
                                    </Col>
                                    <Col md="1" style={{ paddingTop: '10px' }}>
                                        <Label>KB Perusahaan</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select isClearable />
                                    </Col>
                                    <Col md="1" style={{ paddingTop: '10px' }}>
                                        <Label>PKBRS</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md="4" xs="12" style={{ paddingTop: '10px' }}>
                                        <Label>6. Kerjasama Dengan BPJS Kesehatan </Label>
                                        <Label style={{ paddingLeft: '10px'}}>(pilih Ya atau Tidak, jika Ya, maka pilih Langsung atau Tidak Langsung, selanjutnya isi No. PKS, masa berlaku PKS dan no. registernya pada BPJS Kesehatan)</Label>
                                    </Col>
                                    <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                        <Select  isClearable />    
                                    </Col>
                                    <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                        <Select  isClearable />    
                                    </Col>
                                </Row>

                                <TabContent style={{ border: 'none' }} activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row style={{ marginTop: '5px' }}>
                                            <Col md="4"></Col>
                                            <Col md="4">
                                                <Label>Langsung</Label>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. PKS : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Awal : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="date" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Akhir : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="date" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. Register : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row style={{ marginTop: '5px' }}>
                                            <Col md="4"></Col>
                                            <Col md="4">
                                                <Label>Tidak Langsung</Label>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. PKS : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Awal : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="date" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Akhir : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="date" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>

                            </FormGroup>
                        </CardBody>
                    </Col>
                </Row>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button>
                    <Button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</Button>
                </div>
            </div>
        )
    }
}

export default Step1;