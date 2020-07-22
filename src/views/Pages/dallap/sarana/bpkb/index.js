import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class BPKB extends Component {
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
                                Filter Data : K/0/KB/15 Pendaftaran Tempat Pelayanan KB
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
                                                        <th>Kode Provinsi</th>
                                                        <th>Kode Kabupaten</th>
                                                        <th>Nomor Registrasi Faskes</th>
                                                        <th>Nomor Jejaring</th>
                                                        <th>Nama Tempat Pelayanan KB</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>31</td>
                                                        <td>22</td>
                                                        <td>16</td>
                                                        <td>5533</td>
                                                        <td>Puskesmas</td>
                                                    </tr>
                                                    <tr>
                                                        <td>14</td>
                                                        <td>21</td>
                                                        <td>16</td>
                                                        <td>9856</td>
                                                        <td>Puskesmas</td>
                                                    </tr>
                                                    <tr>
                                                        <td>44</td>
                                                        <td>15</td>
                                                        <td>07</td>
                                                        <td>1111</td>
                                                        <td>Rumah Sakit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>34</td>
                                                        <td>01</td>
                                                        <td>5467</td>
                                                        <td>Puskesmas</td>
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

export default BPKB;
