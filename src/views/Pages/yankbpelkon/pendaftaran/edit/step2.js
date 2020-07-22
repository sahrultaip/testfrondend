import React, { Component } from 'react'
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';
// import Table2Edit from '../../../../Commons/Table/Table2Edit';

class Step2 extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        return(
            <div>
                <h6>II. SARANA DAN PERLENGKAPAN </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row >
                    <Col md="12">
                        <CardBody style={{ padding: '10px 0',  }}>
                        <FormGroup row>
                            <Col md="4" lg="2">
                                <Label htmlFor="text-input">Input Data</Label>
                                <Button className="btn btn-info ml-5" onClick={this.toggle} ><i className="icon-plus2"></i></Button>
                            </Col>
                        </FormGroup>
                            <Collapse isOpen={this.state.open}>
                                <FormGroup row>
                                    <Col md="2">
                                        <Label htmlFor="text-input">Jenis Perlengkapan</Label>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <Select isClearable id="jenis" placeholder="Jenis Perlengkapan" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row >
                                    
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Label htmlFor="text-input">Jumlah Yang Bisa Dipakai</Label>
                                    </Col>
                                    <Col xs="6" md="2" style={{ paddingTop: '10px' }}>
                                        <Input type="number" id="jumlah" name="text-input" />
                                    </Col>
                                    <Col xs="6" md="1" lg="1" className="my-2">
                                        <Input type="submit" className="btn btn-info btnFilter" value="Simpan" />
                                    </Col>
                                    <Col xs="6" md="1" lg="1" className="my-2">
                                        <Button className="btn btn-danger btnFilter" >Reset</Button>
                                    </Col>
                                </FormGroup>
                            </Collapse>
                            <FormGroup row>
                                <Col md="8">
                                    {/* <Table2Edit
                                        caption=''
                                        tableHead={columns}
                                        datas={this.state.datas}
                                    /> */}
                                </Col>
                            </FormGroup>
                            
                        </CardBody>
                    </Col>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step2