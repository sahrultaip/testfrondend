import React, { Component } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../Commons/Table/Table2Edit';
import { AppBar, Tab, Tabs } from '@material-ui/core';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            modal: false,
            activeTab: 0,

            // Jenis Kunjungan
            show_jk: [
                { value: 'informed-consent', label: 'Informed Consent' },
                { value: 'tanpa-informed-consent', label: 'Tanpa Informed Consent' }
            ],
            value_jk: null,
            kd_jk: '',

            //Keluhan
            show_keluhan: [],
            dt_keluhan: [
                { value: 'pasca-persalinan', label: 'Pasca Persalinan', kd_jk: 'informed-consent' },
                { value: 'pasca-keguguran', label: 'Pasca Keguguran', kd_jk: 'informed-consent' },

                { value: 'pasca-persalinan', label: 'Pasca Persalinan', kd_jk: 'tanpa-informed-consent' },
                { value: 'pasca-keguguran', label: 'Pasca Keguguran', kd_jk: 'tanpa-informed-consent' },
                { value: 'komplikasi-berat', label: 'Komplikasi Berat', kd_jk: 'tanpa-informed-consent' },
                { value: 'kegagalan', label: 'Kegagalan', kd_jk: 'tanpa-informed-consent' }
            ],
            disKeluhan: true,
            value_keluhan: null,

            // Jenis Tindakan
            show_jt: [],
            dt_jt: [
                { value: 'pemberian-suntikan-1bulan', label: 'Pemberian Suntikan 1 bulanan', kd_jk: 'informed-consent' },
                { value: 'pemberian-suntikan-3bulan', label: 'Pemberian Suntikan 3 bulanan', kd_jk: 'informed-consent' },
                { value: 'pemasangan-implan-1batang', label: 'Pemasangan Implan 1 batang', kd_jk: 'informed-consent' },
                { value: 'pemasangan-implan-2batang', label: 'Pemasangan implan 2 batang', kd_jk: 'informed-consent' },
                { value: 'pemasangan-iud-cut3804', label: 'Pemasangan IUD Cut 3804', kd_jk: 'informed-consent' },
                { value: 'pemasangan-iud-lain', label: 'Pemasanagn IUD lain lain', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-implan-1batang', label: 'Pencabutan dan Pemasangan Implan 1 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-implan-2batang', label: 'Pencabutan dan Pemasangan implan 2 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-iud-cut3804', label: 'Pencabutan dan Pemasangan IUD Cut 3804', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-iud-lain', label: 'Pencabutan dan Pemasangan IUD lain lain ', kd_jk: 'informed-consent' },
                { value: 'operatif-tubektomi', label: 'Operatif Tubektomi', kd_jk: 'informed-consent' },
                { value: 'operatif-vasektomi', label: 'Operatif Vasektomi', kd_jk: 'informed-consent' },
                { value: 'pencabutan-implan-1batang', label: 'Pencabutan Implan 1 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-implan-2batang', label: 'Pencabutan implan 2 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-iud-cut3804', label: 'Pencabutan IUD Cut 3804', kd_jk: 'informed-consent' },
                { value: 'pencabutan-iud-lain', label: 'Pencabutan IUD lain lain', kd_jk: 'informed-consent' },

                { value: 'pemasangan-implan-1batang', label: 'Pemasangan Implan 1 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pemasangan-implan-2batang', label: 'Pemasangan implan 2 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pemasangan-iud-cut3804', label: 'Pemasangan IUD Cut 3804', kd_jk: 'tanpa-informed-consent' },
                { value: 'pemasangan-iud-lain', label: 'Pemasanagn IUD lain lain', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-implan-1batang', label: 'Pencabutan dan Pemasangan Implan 1 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-implan-2batang', label: 'Pencabutan dan Pemasangan implan 2 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-iud-cut3804', label: 'Pencabutan dan Pemasangan IUD Cut 3804', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-iud-lain', label: 'Pencabutan dan Pemasangan IUD lain lain ', kd_jk: 'tanpa-informed-consent' },
                { value: 'operatif-tubektomi', label: 'Operatif Tubektomi', kd_jk: 'tanpa-informed-consent' },
                { value: 'operatif-vasektomi', label: 'Operatif Vasektomi', kd_jk: 'tanpa-informed-consent' }
            ],
            disJt: true,
            value_jt: '',

            datas: [
                { id: 1, dt1: '1', dt2: '10/06/2020', dt3: '1234567890123456', dt4: '1234567890123456', dt5: 'Nama Tenaga 1', dt6: 'Informed Consent', dt7: 'Pasca Persalinan', dt8: 'Pemberian Suntikan 1 Bulanan', dt9: 'BPJS', dt10: 'APBN' },
            ],
            dataKeluarga: [
                { id: 1, dt1: '5102072001-00001', dt2: '1234567890123456', dt3: 'I Ketut Subawa', dt4: '31-12-1963', dt5: 'KK', dt6: 'Tidak', dt7: '4', dt8: 'Sedang', dt9: 'IUD', dt10: 'Non-BPJS', dt11: '00001' },
                { id: 1, dt1: '5102072001-00001', dt2: '1234567895678901', dt3: 'Ni Made Sukaniti', dt4: '31-12-1963', dt5: 'Istri', dt6: 'Tidak', dt7: '4', dt8: 'Sedang', dt9: 'IUD', dt10: 'Non-BPJS', dt11: '00001' },
            ],
            dataNonBdki: [
                { id: 1, dt1: '1234567890123456', dt2: '5102072001-00001', dt3: 'Ni Kadek Santiasih', dt4: '13-11-1996', dt5: 'Ya', dt6: '-', dt7: '-', dt8: ' ' },
                { id: 1, dt1: '1234567890123456', dt2: '5102072001-00001', dt3: 'Komang Sri Tresnindi', dt4: '11-09-1987', dt5: 'Ya', dt6: '-', dt7: '-', dt8: '10' },
            ],
            nestedModal: false,
        }
    }

    setValue = (value) => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value
            }
        }));
    };

    optionJk = (e) => {
        if (e) {
            this.setState({
                kd_jk: e.value,
                value_jk: e,
                show_keluhan: this.state.dt_keluhan.filter(item => item.kd_jk === e.value),
                show_jt: this.state.dt_jt.filter(item => item.kd_jk === e.value),
                value_keluhan: null,
                value_jt: null,
                disKeluhan: false,
                disJt: true
            })
        }
        else {
            this.setState({
                value_jk: null,
                show_keluhan: [],
                show_jt: [],
                value_keluhan: null,
                value_jt: null,
                disKeluhan: true,
                disJt: true
            })
        }
    }

    optionKeluhan = (e) => {
        if (e) {
            this.setState({
                value_keluhan: e,
                value_jt: null,
                disJt: false
            })
        }
        else {
            this.setState({
                value_keluhan: null,
                value_jt: null,
                disJt: true
            })
        }
    }

    optionJt = (e) => {
        if (e) {
            this.setState({
                value_jt: e
            })
        }
        else {
            this.setState({
                value_jt: null
            })
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };

    toggleNested = () => {
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

    handleChange = (e, tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const options = [
            { value: 'opt1', label: 'Option 1' },
            { value: 'opt2', label: 'Option 2' },
            { value: 'opt3', label: 'Option 3' },
            { value: 'opt4', label: 'Option 4' }
        ]

        const columnKeluarga = [
            {
                dataField: 'dt1',
                text: 'No KKI',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'NIK',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Nama Lengkap',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Tgl. Lahir',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'Hub Dg KK',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'dt6',
                text: 'PUS',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'dt7',
                text: 'Periode',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'dt8',
                text: 'Kesertaan Ber-KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt9',
                text: 'Metode Kontrasepsi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt10',
                text: 'Kesertaan Asuransi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'dt11',
                text: 'No. Rumah',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
        ];

        const columnNonBdki = [
            {
                dataField: 'dt1',
                text: 'NIK',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'No KKI',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Nama Lengkap',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Tgl. Lahir',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'PUS',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'dt6',
                text: 'Kesertaan Asuransi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt7',
                text: 'Kesertaan Ber-KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt8',
                text: 'No Rumah',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
        ];

        const pa = [
            { value: '0', label: 'BPJS Kesehatan' },
            { value: '1', label: 'Tidak Memiliki' },
            { value: '2', label: 'Asuransi Lainnya' }
        ]

        const xsa = [
            { value: 'apbn', label: 'APBN' },
            { value: 'apbd', label: 'APBD' },
            { value: 'mandiri', label: 'Mandiri' }
        ]

        const jenis_kelamin = [
            { value: 'laki_laki', label: 'Laki-laki' },
            { value: 'perempuan', label: 'Perempuan' },
        ]

        console.log(this.state.jk);

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
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Tanggal </Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <Input
                                                type="date"
                                                name="date"
                                                id="exampleDate"
                                                placeholder="date placeholder"
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK </Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Nomor Induk Kependudukan" />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default" type="submit"
                                                        onClick={this.toggle}
                                                        style={{ border: '1px solid #e4e7ea', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderLeft: 'none' }}>
                                                        <i class="icon-search4"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">KKI </Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <Input type="text" id="text-input" name="text-input" disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <Input type="text" id="text-input" name="text-input" disabled />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Jenis Kunjungan</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Select options={this.state.show_jk} onChange={this.optionJk} value={this.state.value_jk} isClearable />
                                        </Col>
                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Keluhan</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Select options={this.state.show_keluhan} onChange={this.optionKeluhan} value={this.state.value_keluhan} isDisabled={this.state.disKeluhan} isClearable />
                                        </Col>

                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Jenis Tindakan</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Select options={this.state.show_jt} onChange={this.optionJt} value={this.state.value_jt} isDisabled={this.state.disJt} isClearable />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Jenis Asuransi</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Select options={pa} isClearable={pa} />
                                        </Col>
                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Sumber Alokon</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Select options={xsa} isClearable={xsa} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                        <button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</button>
                    </div>
                </container-fluid>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" style={{ maxWidth: '1000px' }}>
                    <ModalHeader toggle={this.toggle}> <i className="icon-list-alt"> </i> Data Peserta KB</ModalHeader>
                    <ModalBody style={{ padding: '0' }}>
                        <Card>
                            <CardBody className="card-body-nopad">
                                <div>
                                    <AppBar position="static">
                                        <Tabs value={this.state.activeTab} onChange={this.handleChange}
                                            aria-label="simple tabs example">
                                            <Tab label="Keluarga" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
                                            <Tab label="Non BDKI" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
                                        </Tabs>
                                    </AppBar>

                                    <Row>
                                        <Col sm="12">
                                            <div className="namaLaporan">Filter Dan Parameter Pencarian Data</div>
                                        </Col>
                                        <Col sm="12" style={{ height: 'calc(100vh - 200px)', overflow: 'auto', padding: '0 30px' }}>
                                            <Row className="mt-4">
                                                <Col md="11">
                                                    <Row>
                                                        <Col md="4 mb-2">
                                                            <Row>
                                                                <Col xs="3">
                                                                    <Label className="labelForm" htmlFor="provinsi">Provinsi</Label>
                                                                </Col>
                                                                <Col xs="9">
                                                                    <Select options={options} isClearable />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md="4 mb-2">
                                                            <Row>
                                                                <Col xs="3">
                                                                    <Label className="labelForm" htmlFor="kabupaten">Kabupaten</Label>
                                                                </Col>
                                                                <Col xs="9">
                                                                    <Select options={options} isClearable />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md="4 mb-2">
                                                            <Row>
                                                                <Col xs="3">
                                                                    <Label className="labelForm" htmlFor="kecamatan">kecamatan</Label>
                                                                </Col>
                                                                <Col xs="9">
                                                                    <Select options={options} isClearable />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md="4 mb-2">
                                                            <Row>
                                                                <Col xs="3">
                                                                    <Label className="labelForm" htmlFor="desa">Desa/Kel</Label>
                                                                </Col>
                                                                <Col xs="9">
                                                                    <Select options={options} isClearable />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md="4 mb-2">
                                                            <Row>
                                                                <Col xs="3">
                                                                    <Label className="labelForm" htmlFor="dusun">Dusun/RW</Label>
                                                                </Col>
                                                                <Col xs="9">
                                                                    <Select options={options} isClearable />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md="4 mb-2">
                                                            <Row>
                                                                <Col xs="3">
                                                                    <Label className="labelForm" htmlFor="rt">RT</Label>
                                                                </Col>
                                                                <Col xs="9">
                                                                    <Select options={options} isClearable />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs="12" md="2" style={{ marginBottom: '10px' }}>
                                                            <Label className="labelForm" htmlFor="rt">Cari Peserta</Label>
                                                        </Col>
                                                        <Col xs="10" md="4" style={{ marginBottom: '10px' }}>
                                                            <Input type="text" id="text-input" name="text-input" />
                                                        </Col>
                                                        <Col xs="2" md="1" style={{ marginBottom: '10px' }}>
                                                            <span style={{ background: 'paleturquoise', padding: '4px', borderRadius: '2px', cursor: 'pointer' }}>
                                                                <Button color="link"><i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i></Button>
                                                            </span>
                                                        </Col>
                                                        <Col xs="4" md="2" className="ml-auto" style={{ marginBottom: '10px' }}>
                                                            <Button className="btn btn-success btnFilter"> Refresh</Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <div
                                                role="tabpanel"
                                                hidden={this.state.activeTab !== 0}
                                                id="simple-tabpanel-0"
                                                aria-labelledby="simple-tab-0"
                                            >
                                                {this.state.activeTab === 0 && (
                                                    <Row>
                                                        <Col md="12">
                                                            <Table2Edit
                                                                caption=''
                                                                tableHead={columnKeluarga}
                                                                datas={this.state.dataKeluarga}
                                                            />
                                                        </Col>
                                                    </Row>
                                                )}
                                            </div>

                                            <div
                                                role="tabpanel"
                                                hidden={this.state.activeTab !== 1}
                                                id="simple-tabpanel-1"
                                                aria-labelledby="simple-tab-1"
                                            >
                                                {this.state.activeTab === 1 && (
                                                    <Row>
                                                        <Col md="12">
                                                            <Table2Edit
                                                                caption=''
                                                                tableHead={columnNonBdki}
                                                                datas={this.state.dataNonBdki}
                                                            />
                                                        </Col>
                                                    </Row>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </ModalBody>

                    <ModalFooter style={{ padding: '5px 30px' }}>
                        <Row>
                            {/* <Button className="mx-1" color="primary" onClick={this.toggleNested} >Tambah</Button>{' '} */}
                            <Button className="mx-1" color="success" onClick={this.toggle}>Ubah</Button>{' '}
                            <Button className="mx-1" color="danger" onClick={this.toggle}>Hapus</Button>{' '}
                            <Button className="mx-1" color="info" onClick={this.toggle}>Pilih</Button>{' '}
                        </Row>
                    </ModalFooter>
                </Modal>

                {/* <Row>
                    <Modal isOpen={this.state.nestedModal} size="lg" style={{ padding: '10px', width: '100%' }} >
                        <ModalHeader>Entri Non BDKI</ModalHeader>
                        <ModalBody>
                            <Col md="12">
                                <FormGroup>
                                    <Row>
                                        <Col md="12">
                                            <Label>Identitas</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12">
                                            <Label>1. Nama Lengkap : </Label>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <Input type="text" id="text-input" name="text-input" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>2. Tanggal Lahir : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="date" id="text-input" name="text-input" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>3. Jenis Kelamin :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={jenis_kelamin} isClearable={jenis_kelamin} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>4. NIK :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="number" id="text-input" name="text-input" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>5. Jenis Peserta :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="read-only" id="text-input" name="text-input" value="Peserta Baru" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" style={{ marginTop: '10px' }}>
                                            <Label>Wilayah Alamat</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Provinsi : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={options} isClearable={options} placeholder="Provinsi" />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Kabupaten/Kota : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={options} isClearable={options} placeholder="Kabupaten/Kota" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Kecamatan : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={options} isClearable={options} placeholder="Kecamatan" />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Desa/Kelurahan : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={options} isClearable={options} placeholder="Desa/Kelurahan" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Dusun/RW : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={options} isClearable={options} placeholder="Dusun/RW" />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>RT : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={options} isClearable={options} placeholder="RT" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Nomor Rumah</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="number" id="text-input" name="text-input" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4"></Col>
                                        <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                            <Button className="btn btn-info btnFilter" onClick={this.toggleNested}> Simpan</Button>
                                        </Col>
                                        <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                            <Button className="btn btn-danger btnFilter"> Reset</Button>
                                        </Col>
                                        <Col md="4"></Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </ModalBody>
                    </Modal>
                </Row> */}
            </>
        )
    }
}

export default Step2;