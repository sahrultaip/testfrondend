import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class PUSDAK extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Filter Data : K/0/KB/15 PUSDAK
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label htmlFor="provinsi">Provinsi</Label>
                                                <Input type="select" name="provinsi" id="provinsi">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label htmlFor="kabupaten">Kabupaten</Label>
                                                <Input type="select" name="kabupaten" id="kabupaten">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label htmlFor="kecamatan">Kecamatan</Label>
                                                <Input type="select" name="kecamatan" id="kecamatan">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label htmlFor="desa">Desa / Kel</Label>
                                                <Input type="select" name="desa" id="desa">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label htmlFor="dusun">Dusun / RW</Label>
                                                <Input type="select" name="dusun" id="dusun">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label htmlFor="rt">RT</Label>
                                                <Input type="select" name="rt" id="rt">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="11"></Col>
                                        <Col md="1">
                                            <a href="_blank">
                                                <i className="cui-trash icons font-2xl d-inline"></i> Clear
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <i className="cui-monitor icons font-2xl d-inline"></i>Tempat Pelayanan KB
                                        </Col>
                                    </Row>
                                    <Row className="my-5">
                                        <Col md="12" >
                                            <Link className="ml-2 mr-4"> <i className="fa fa-refresh fa-lg d-inline mr-1"></i> Refresh</Link>
                                            <Link className="mr-4"> <i className="fa fa-trash fa-lg d-inline mr-1"></i> Hapus</Link>
                                            <Link className="mr-4"> <i className="fa fa-search fa-lg d-inline mr-1"></i>Lihat</Link>
                                            <Link className="mr-4"><i className="fa fa-download fa-lg d-inline mr-1"></i>Download</Link>
                                            <Link className="mr-4"><i className="fa fa-download fa-lg d-inline mr-1"></i>Download Wilayah</Link>
                                            <Link className="mr-4"><i className="fa fa-file-pdf-o fa-lg d-inline mr-1"></i>Buat PDF</Link>
                                            <Link className="mr-4"><i className="fa fa-file-pdf-o fa-lg d-inline mr-1"></i>Buat PDF Wilayah</Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                        <Table responsive striped>
                                                <thead>
                                                    <tr>
                                                        <th>Nomor Register</th>
                                                        <th>NIP</th>
                                                        <th>NIK</th>
                                                        <th>Nama</th>
                                                        <th>Pangkat/Golongan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>131</td>
                                                        <td>16715373</td>
                                                        <td>17261358721538</td>
                                                        <td>Roni</td>
                                                        <td>Supervisor</td>
                                                    </tr>

                                                    <tr>
                                                        <td>132</td>
                                                        <td>16715373</td>
                                                        <td>17261358721538</td>
                                                        <td>Joni</td>
                                                        <td>Supervisor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>133</td>
                                                        <td>16715373</td>
                                                        <td>17261358721538</td>
                                                        <td>Budi</td>
                                                        <td>Supervisor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>134</td>
                                                        <td>16715373</td>
                                                        <td>17261358721538</td>
                                                        <td>Laras</td>
                                                        <td>Supervisor</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default PUSDAK;
