import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, FormText, Badge, Input, InputGroupText, Label, Row, Table, InputGroup, InputGroupAddon, Button, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';

class Pendaftaran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
            open: false,
            collapse: false,
            accordion: [true, false, false, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };

        this.toggle = this.toggle.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            accordion: state,
        });
    }

    toggleFade() {
        this.setState({ fadeIn: !this.state.fadeIn });
    }

    handleChange = (e, panel) => {
        e.preventDefault();
        this.setState({ expanded: panel });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const options1 = [
            { value: 'fkrtl', label: 'Statis - FKRTL' },
            { value: 'fktp', label: 'Statis - FKTP' },
            { value: 'jaringan', label: 'Statis - Jaringan' },
            { value: 'jejaring', label: 'Statis - Jejaring' }
        ]

        const options2 = [
            { value: 'klinik-utama', label: 'FKRTL - Klinik Utama' },
            { value: 'rs-umum', label: 'FKRTL - RS Umum' },
            { value: 'rs-khusus', label: 'FKRTL - RS Khusus' }
        ]

        const kepemilikan = [
            { value: 'bumn-bumd', label: 'BUMN / BUMD' },
            { value: 'swasta', label: 'Swasta' },
            { value: 'lsom', label: 'LSOM' }
        ]

        const kerjasama = [
            { value: 'ya-langsung', label: 'Ya - Langsung' },
            { value: 'ya-tidakLangsung', label: 'Ya - Tidak Langsung' },
            { value: 'tidak', label: 'Tidak' }
        ]

        const satuan = [
            { value: 'set', label: 'Set' },
            { value: 'unit', label: 'Unit' },
            { value: 'ruang', label: 'Ruang' }
        ]



        const jenisPerlengkapan = [
            { value: 'iud-kit', label: 'IUD Kit' },
            { value: 'implan-removal-kit', label: 'Implan Removal Kit' },
            { value: 'vasektomi-kit', label: 'Vasektomi Kit' },
            { value: 'minilaparotomi-kit', label: 'Minilaparotomi Kit' }
        ]

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
                                        <Col md="11">
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
                                        </Col>
                                        <Col md="1" className="d-flex align-items-end mb-4">
                                            <div>
                                                <Link className="ml-2"><i className="fa fa-search fa-lg mt-4"></i></Link>
                                                <Link className="ml-2"><i className="fa fa-remove fa-lg mt-4"></i></Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col md="2">
                                            Daftar Tempat Pelayanan KB
                                        </Col>
                                        <Col md="2">
                                            <Link className="ml-2 mr-4" onClick={this.handleClickOpen}> <i className="fa fa-plus-square fa-lg d-inline mr-1"></i> Tambah </Link>
                                        </Col>
                                        <Col md="2">
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                                                </InputGroupAddon>
                                                <Input type="text" id="" name="" placeholder="" />
                                            </InputGroup>
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
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>31</td>
                                                        <td>22</td>
                                                        <td>16</td>
                                                        <td>5533</td>
                                                        <td>Puskesmas</td>
                                                        <td>
                                                            <Link className="mx-1"> <i className="fa fa-download fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-search fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-pencil fa-lg d-inline mr-1"></i></Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>14</td>
                                                        <td>21</td>
                                                        <td>16</td>
                                                        <td>9856</td>
                                                        <td>Puskesmas</td>
                                                        <td>
                                                            <Link className="mx-1"> <i className="fa fa-download fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-search fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-pencil fa-lg d-inline mr-1"></i></Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>44</td>
                                                        <td>15</td>
                                                        <td>07</td>
                                                        <td>1111</td>
                                                        <td>Rumah Sakit</td>
                                                        <td>
                                                            <Link className="mx-1"> <i className="fa fa-download fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-search fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-pencil fa-lg d-inline mr-1"></i></Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>34</td>
                                                        <td>01</td>
                                                        <td>5467</td>
                                                        <td>Puskesmas</td>
                                                        <td>
                                                            <Link className="mx-1"> <i className="fa fa-download fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-search fa-lg d-inline mr-1"></i></Link>
                                                            <Link className="mx-1"> <i className="fa fa-pencil fa-lg d-inline mr-1"></i></Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Form>
                                
                                
                                <Dialog
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    fullWidth='true'
                                    maxWidth={'md'}
                                >
                                    <DialogTitle id="alert-dialog-title">Kartu Pendaftaran Tempat Pelayanan KB</DialogTitle>
                                    <DialogContent>
                                        <Form className="form-horizontal">
                                            <div id="accordion">
                                                <Card className="mb-0">
                                                    <CardHeader id="headingOne">
                                                        <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                                                            <h5 className="m-0 p-0">I. IDENTITAS</h5>
                                                        </Button>
                                                    </CardHeader>
                                                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                                                        <CardBody>
                                                            <FormGroup row>
                                                                <Col md="4">
                                                                    <Label htmlFor="text-input">1. Nama Tempat Pelayanan KB</Label>
                                                                </Col>
                                                                <Col xs="12" md="8">
                                                                    <Input type="text" id="text-input" name="text-input" />
                                                                </Col>
                                                            </FormGroup>

                                                            <FormGroup row>
                                                                <Col md="12">
                                                                    <Label htmlFor="text-input">2. Alamat</Label>
                                                                </Col>
                                                                <Col md="12">
                                                                    <FormGroup row className="justify-content-end">
                                                                        <Col md="3">
                                                                            <Label htmlFor="text-input">a. Jalan : </Label>
                                                                        </Col>
                                                                        <Col xs="12" md="8">
                                                                            <Input type="text" id="text-input" name="text-input" />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col md="12">
                                                                    <FormGroup row className="justify-content-end">
                                                                        <Col md="3">
                                                                            <Label htmlFor="text-input">b. Desa/Kel</Label>
                                                                        </Col>
                                                                        <Col xs="12" md="8">
                                                                            <Input type="text" id="text-input" name="text-input" />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </FormGroup>

                                                            <FormGroup row>
                                                                <Col md="4">
                                                                    <Label htmlFor="text-input">3. Jenis</Label>
                                                                </Col>
                                                                <Col xs="12" md="4">
                                                                    <Select options={options1} isClearable={options1} placeholder="Option 1" />
                                                                </Col>
                                                                <Col xs="12" md="4">
                                                                    <Select options={options2} isClearable={options2} placeholder="Option 2" />
                                                                </Col>
                                                            </FormGroup>

                                                            <FormGroup row>
                                                                <Col md="4">
                                                                    <Label htmlFor="text-input">4. Kepemilikan</Label>
                                                                </Col>
                                                                <Col xs="12" md="4">
                                                                    <Select options={kepemilikan} isClearable={kepemilikan} placeholder="Kepemilikan" />
                                                                </Col>
                                                            </FormGroup> 

                                                            <FormGroup row>
                                                                <Col md="4">
                                                                    <Label htmlFor="text-input">5. Kerja Sama Dengan BPJS Kesehatan</Label>
                                                                </Col>
                                                                <Col xs="12" md="4">
                                                                    <Select options={kerjasama} isClearable={kerjasama} placeholder="Kerjasama dengan BPJS" />
                                                                </Col>
                                                            </FormGroup>

                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                                <Card className="mb-0">
                                                    <CardHeader id="headingTwo">
                                                        <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                                                            <h5 className="m-0 p-0">II. SARANA DAN PERLENGKAPAN</h5>
                                                        </Button>
                                                    </CardHeader>
                                                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                                                        <CardBody>

                                                            <FormGroup row>
                                                                <Col md="4">
                                                                    <Label htmlFor="text-input">Jenis Perlengkapan</Label>
                                                                </Col>
                                                                <Col xs="12" md="8">
                                                                    <Select options={jenisPerlengkapan} isClearable={jenisPerlengkapan} placeholder="Jenis Perlengkapan" />
                                                                </Col>
                                                            </FormGroup>

                                                            <FormGroup row>
                                                                <Col md="4">
                                                                    <Label htmlFor="text-input">Jumlah Yang Bisa Dipakai</Label>
                                                                </Col>
                                                                <Col xs="4" md="2">
                                                                    <Input type="number" id="text-input" name="text-input" />
                                                                </Col>
                                                                <Col xs="8" md="6">
                                                                    <Select options={satuan} isClearable={satuan} placeholder="Jenis Satuan" />
                                                                </Col>
                                                            </FormGroup>
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                                <Card className="mb-0">
                                                    <CardHeader id="headingThree">
                                                        <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                                                            <h5 className="m-0 p-0">III. TENAGA</h5>
                                                        </Button>
                                                    </CardHeader>
                                                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                                                        <CardBody>
                                                            3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                                <Card className="mb-0">
                                                    <CardHeader id="headingFour">
                                                        <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseFour">
                                                            <h5 className="m-0 p-0">IV. PERSETUJUAN</h5>
                                                        </Button>
                                                    </CardHeader>
                                                    <Collapse isOpen={this.state.accordion[3]} data-parent="#accordion" id="collapseFour">
                                                        <CardBody>
                                                            4. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                                <div className="form-actions my-3">
                                                    <Button type="submit" color="primary">Save changes</Button>
                                                </div>
                                            </div>
                                        </Form>
                                    </DialogContent>
                                </Dialog>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Pendaftaran;
