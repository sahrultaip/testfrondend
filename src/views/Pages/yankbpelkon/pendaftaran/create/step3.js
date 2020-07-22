import React, { Component } from 'react';
import { Card, CardBody, Col, Row, FormGroup, Label, Input, Button, Collapse, Modal, ModalHeader, ModalBody, Form, Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            datas: [],
            modal: false,
            nestedModal: false,
            activeTab: '1',
            currentProfesi: [],
            profesi: [
                { value: '1', label: 'Dokter Kebidanan dan Kandungan' },
                { value: '2', label: 'Dokter Bedah/Urologi' },
                { value: '3', label: 'Dokter Umum' },
                { value: '4', label: 'Bidan' },
                { value: '5', label: 'Perawat' },
                { value: '6', label: 'Administrasi' },
            ],
            checkbox: [
                {label: 'Tubektomi', value: '11', name: ''},
                {label: 'Vasektomi', value: '12', name: ''},
                {label: 'IUD', value: '12', name: ''},
                {label: 'Implan 1/2 Batang', value: '', name: ''},
                {label: 'KIP/Konseling', value: '', name: ''},
                {label: 'R/R', value: '', name: ''},
            ],
            show_checkbox: [],
            data_checkbox: [],
            dataPenduduk: [
                {nik: '1234567890987654', nama: 'Albertus'},
                {nik: '1987654321234567', nama: 'David'},
            ],
            show_dataPenduduk: [],
            show_nik: null,
        }
    }

    callData = (e) =>{
        if (e.keyCode === 13) {
            this.setState({
                show_dataPenduduk: this.state.dataPenduduk.filter(item => item.nik === e.target.value)
            })
          }
        
    }

    reset = () => {
        document.getElementById('input-nik').value = ''
        this.setState({
            currentProfesi: null, show_checkbox: [], show_dataPenduduk: [], show_nik: null,
        })
    }

    simpan = () => {

        this.setState({
            datas: [...this.state.datas,{
                dt2: this.state.show_dataPenduduk.map(item => item.nik), 
                dt3: this.state.show_dataPenduduk.map(item => item.nama), 
                dt4: this.state.currentProfesi.label,
                dt5: this.state.data_checkbox.map(item => [item, ', '])
            }],  
            show_checkbox: [], show_dataPenduduk: [], show_nik: null, currentProfesi: [], data_checkbox: [],
        })
        document.getElementById('input-nik').value = ''
    }

    inputcheckbox = (e) => {
        
        if(e.target.checked === true){
            this.setState({
                data_checkbox: [...this.state.data_checkbox, e.target.value]
            })
        }
        else {
            this.setState({
                data_checkbox: this.state.data_checkbox.filter(item => item !== e.target.value)
            })
        }
    }

    changeProfesi = (e) => {
        if(e){
            if(e.value === '1'){
                this.setState({
                    show_checkbox: [{label: 'Tubektomi', value: 'tubektomi', name: ''}], currentProfesi: e,
                })
            }
            else if (e.value === '2'){
                this.setState({
                    show_checkbox: [{label: 'Vasektomi', value: 'vasektomi', name: ''}], currentProfesi: e,
                })
            }
            else if (e.value === '3'){
                this.setState({
                    show_checkbox: [
                        {label: 'IUD', value: 'iud', name: ''}, {label: 'Vasektomi', value: 'vasektomi', name: ''},
                        {label: 'KIP/Konseling', value: 'kip_konseling', name: ''}, {label: 'R/R', value: 'rr', name: ''},
                        {label: 'Implan 1/2 Batang', value: 'implan1/2batang', name: ''}, 
                    ],
                    currentProfesi: e,
                })
            }
            else if (e.value === '4'){
                this.setState({
                    show_checkbox: [
                        {label: 'IUD', value: 'iud', name: ''}, {label: 'KIP/Konseling', value: 'kip_konseling', name: ''}, 
                        {label: 'R/R', value: 'rr', name: ''}, {label: 'Implan 1/2 Batang', value: 'implan1/2batang', name: ''},
                    ], 
                    currentProfesi: e,
                })
            }
            else if (e.value === '5'){
                this.setState({
                    show_checkbox: [
                        {label: 'KIP/Konseling', value: 'kip_konseling', name: ''}, {label: 'R/R', value: 'rr', name: ''},
                    ], 
                    currentProfesi: e,
                })
            }
            else if (e.value === '6') {
                this.setState({
                    show_checkbox: [{label: 'R/R', value: 'rr', name: ''}], currentProfesi: e,
                })
            }
        }
        else {
            this.setState({
                show_checkbox: [], currentProfesi: null
            })
        }
    }

    onInputNik = (e) =>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
        
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    toggleModal = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested = () => {
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

    toggleActiveTab = (param) => {
        // alert(param)
        this.setState({
            activeTab: param
        })
    }

    render() {

        console.log(" Data Penduduk : "+this.state.dataPenduduk)

        const options = [
            { value: 'opt1', label: 'Option 1' },
            { value: 'opt2', label: 'Option 2' },
            { value: 'opt3', label: 'Option 3' },
            { value: 'opt4', label: 'Option 4' }
        ]

        const jenis_kelamin = [
            { value: 'laki_laki', label: 'Laki-laki' },
            { value: 'perempuan', label: 'Perempuan' },
        ]

        const columns1 = [
            {
                dataField: 'data1',
                text: 'NIK',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'data2',
                text: 'NOMOR KKI',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data3',
                text: 'NAMA LENGKAP',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data4',
                text: 'TGL.LAHIR',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data5',
                text: 'PUS',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data6',
                text: 'KESERTAAN ASURANSI',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data7',
                text: 'KESERTAAN BERKB',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data8',
                text: 'NO. RUMAH',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
        ]

        const columns2 = [
            {
                dataField: 'data1',
                text: 'NOMOR KKI',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'data2',
                text: 'NIK',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data3',
                text: 'NAMA LENGKAP',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data4',
                text: 'TGL.LAHIR',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data5',
                text: 'HUB DGN KK',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data6',
                text: 'PUS',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data7',
                text: 'PERIODE',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data8',
                text: 'KESERTAAN BERKB',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data9',
                text: 'METODE KONTRASEPSI',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data10',
                text: 'KESERTAAN ASURANSI',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'data11',
                text: 'NO. RUMAH',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
        ]


        const columns = [
            {
                dataField: 'dt1',
                text: 'No',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'NIK',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Nama Lengkap',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Profesi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'Pelatihan Teknis Pelayanan dan R/R',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'dt6',
                text: 'Aksi',
                headerAlign: 'center',
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
                                <i className="icon-pencil" style={{ fontSize: '0.875rem' }}> </i>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <i className="icon-cross2"  style={{ fontSize: '0.875rem' }}> </i>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        // console.log('element',e)
                        // console.log('column',column)
                        // console.log('columIndex',columnIndex)
                        // console.log('row',row)
                        // console.log('row index',rowIndex)
                        // console.log(row.dt2)
                        // console.log(row)
                        //   this.setState({modalTitle: row.plant})
                        //   this.toggleModal();
                    },
                }
            },
        ];
        
        return (
            <div>
                <h6> III. TENAGA </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <CardBody style={{ padding: '10px 0' }}>
                    <FormGroup row>
                        <Col md="4" lg="2">
                            <Label htmlFor="text-input">Input Tenaga</Label>
                            <Button className="btn btn-info ml-5" onClick={this.toggle} ><i className="icon-plus2"></i></Button>
                        </Col>
                    </FormGroup>
                    <Collapse isOpen={this.state.open}>
                        <Card>
                            <CardBody>
                                <FormGroup>
                                    <Row>
                                        <Col xs="6" md="2" style={{ marginTop: '15px' }} >
                                            <Label htmlFor="text-input">Nomor Induk Kependudukan (NIK)</Label>
                                        </Col>
                                        <Col xs="6" md="4" style={{ marginTop: '15px' }}>
                                            <Input type="number" id="input-nik" onInput={this.onInputNik} value={this.state.show_nik} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs={{ size: 3, offset: 6 }} md={{size: 1, offset: 0}} style={{ marginTop: '15px' }}>
                                            <Button className="btn btn-info btnFilter"
                                             onClick={this.toggleModal}
                                             > Cari</Button>
                                        </Col>
                                    </Row>
        

                                    <Row>
                                    <Modal isOpen={this.state.modal} size="lg" style={{ padding: '10px', width: '100%'  }}>
                                    <ModalHeader>Data Individu</ModalHeader>
                                        <ModalBody>
                                            <Row>
                                            <Card>
                                                <CardBody>
                                                    <Row style={{ paddingLeft: '15px' }}>
                                                        <Nav tabs>
                                                            <NavItem>
                                                                <NavLink
                                                                    onClick={() => { this.toggleActiveTab('1'); }}>
                                                                    Keluarga
                                                                </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    onClick={() => { this.toggleActiveTab('2'); }}>
                                                                    Non BDKI
                                                                </NavLink>
                                                            </NavItem>
                                                        </Nav>
                                                    </Row>
                                                    <TabContent activeTab={this.state.activeTab}>
                                                    <TabPane tabId="1">
                                                        <Row>
                                                            <Col md="12">
                                                                <div className="titleFilter"><i className="icon-filter4"></i> Filter Dan Parameter Pencarian Data Keluarga</div>
                                                            </Col>
                                                        </Row>
                                                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                                        <Row>
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
                                                            </Col>
                                                            <Col md="1">
                                                                <Row>
                                                                    <Col xs="6" md="12">
                                                                        <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter"><i className="icon-cross2"></i> Refresh</Button></div>
                                                                    </Col>
                                                                    <Col xs="6" md="12">
                                                                        <Button className="btn btn-success btnFilter"><i className="icon-search4"></i> Cari</Button>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange' }} /></Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="12">
                                                                <div className="titleFilter"><i className="icon-clipboard3"></i> Daftar Tempat Pelayanan KB</div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="12">
                                                                <Table2Edit
                                                                    caption=''
                                                                    tableHead={columns2}
                                                                    datas={this.state.datas}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                    <Row>
                                                        <Col md="4"></Col>
                                                        <Col md="4" xs="12" style={{ textAlign: 'center' }}>
                                                            <Button color="secondary" style={{ marginRight: '5px' }}>Pilih</Button>
                                                            <Button color="secondary" style={{ marginRight: '5px' }}>Hapus</Button>
                                                            <Button color="secondary" onClick={this.toggleModal}>Tutup</Button>
                                                        </Col>
                                                        <Col md="4">
                                                        </Col>
                                                    </Row>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <Row>
                                                            <Col md="12">
                                                                <div className="titleFilter"><i className="icon-filter4"></i> Filter Dan Parameter Pencarian Data Non BDKI </div>
                                                            </Col>
                                                        </Row>
                                                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                                        <Row>
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
                                                            </Col>
                                                            <Col md="1">
                                                                <Row>
                                                                    <Col xs="6" md="12">
                                                                        <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter"><i className="icon-cross2"></i> Refresh</Button></div>
                                                                    </Col>
                                                                    <Col xs="6" md="12">
                                                                        <Button className="btn btn-success btnFilter"><i className="icon-search4"></i> Cari</Button>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="12" lg="12" md="12"><hr style={{ borderBottom: '1px solid orange' }} /></Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="12" lg="12" xs="12">
                                                                <div className="titleFilter"><i className="icon-clipboard3"></i> Daftar Tempat Pelayanan KB</div>
                                                            </Col>
                                                            <Col md="12" lg="12" xs="12">
                                                                <Button className="btn btn-info btn-add" onClick={this.toggleNested} > <i className="icon-plus3 d-inline mr-1"></i></Button>
                                                                
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="12">
                                                                <Table2Edit
                                                                    caption=''
                                                                    tableHead={columns1}
                                                                    datas={this.state.datas}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                    <Row>
                                                        <Col md="4"></Col>
                                                        <Col md="4" xs="12" style={{ textAlign: 'center' }}>
                                                            <Button color="secondary" style={{ marginRight: '5px', marginTop: '5px' }}>Tambah</Button>
                                                            <Button color="secondary" style={{ marginRight: '5px', marginTop: '5px' }}>Ubah</Button>
                                                            <Button color="secondary" style={{ marginRight: '5px', marginTop: '5px' }}>Hapus</Button>
                                                            <Button color="secondary" style={{ marginRight: '5px', marginTop: '5px' }}>Pilih</Button>
                                                            <Button color="secondary" onClick={this.toggleModal}>Tutup</Button>
                                                        </Col>
                                                        <Col md="4">
                                                        </Col>
                                                    </Row>
                                                    </TabPane>
                                                    </TabContent>
                                                </CardBody>
                                            </Card>
                                            </Row>
                                        </ModalBody>
                                    </Modal>
                                    </Row>

                                    <Row>
                                        <Modal isOpen={ this.state.nestedModal} size="lg" style={{ padding: '10px', width: '100%'  }} >
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
                                                                <Input type="text" value={this.state.show_dataPenduduk.nama} id="text-input" name="text-input" />
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
                                                                <Select options={jenis_kelamin} isClearable={jenis_kelamin}  />
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
                                                                <Select options={options} isClearable={options} placeholder="Provinsi"  />
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
                                                                <Select options={options} isClearable={options} placeholder="Kecamatan"  />
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
                                                                <Select options={options} isClearable={options} placeholder="Dusun/RW"  />
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
                                                            <Col xs="6" md="2" lg="2" className="my-2"  style={{ marginTop: '10px' }}>
                                                                <Button className="btn btn-info btnFilter" onClick={this.toggleNested}> Simpan</Button>
                                                            </Col>
                                                            <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                                                <Button className="btn btn-danger btnFilter"  > Reset</Button>
                                                            </Col>
                                                            <Col md="4"></Col>
                                                        </Row>
                                                    </FormGroup>
                                                </Col>
                                            </ModalBody>
                                        </Modal>
                                    </Row>

                                    <Row>
                                        <Col xs="6" lg="2" style={{ marginTop: '15px' }}>
                                            <Label htmlFor="text-input">Nama</Label>
                                        </Col>
                                        <Col xs="6" lg="4" style={{ marginTop: '15px' }}>
                                            <Input type="text" value={this.state.show_dataPenduduk.map(item => item.nama)} id="text-input" name="text-input" />
                                        </Col>
                                    </Row>
    
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="6" md="2" lg="2">
                                        <Label htmlFor="text-input">Profesi</Label>
                                    </Col>
                                    <Col  xs="6" md="3" lg="2">
                                        <Select options={this.state.profesi} onChange={this.changeProfesi} value={this.state.currentProfesi} isClearable placeholder="Profesi" />
                                    </Col>
                                    <Col xs="12" md="3" lg="2">
                                        <Label htmlFor="text-input">Pelatihan Teknis Pelayanan dan R/R</Label>
                                    </Col>
                                    <Col md="2">
                                        <Row>
                                            {this.state.show_checkbox.map((item) => 
                                                <Col md="6">
                                                    <FormGroup check className="checkbox">
                                                        <Input className="form-check-input" width="10px" type="checkbox" id="checkbox1" name="pilihan" onClick={this.inputcheckbox} value={item.label} />
                                                        <Label check className="form-check-label" htmlFor="checkbox1">{item.label}</Label>
                                                    </FormGroup>
                                                </Col>
                                            )}
                                        </Row>
                                    </Col>
                                    {/* <Col xs="6" md="2" lg="2">
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" width="10px" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                            <Label check className="form-check-label" htmlFor="checkbox1">IUD</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                            <Label check className="form-check-label" htmlFor="checkbox1">Tubektomi</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox1">Vasektomi</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox4" name="checkbox4" value="option4" />
                                            <Label check className="form-check-label" htmlFor="checkbox2">Implan 1 Batang</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6" md="2" lg="2">
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox5" name="checkbox5" value="option5" />
                                            <Label check className="form-check-label" htmlFor="checkbox2">Implan 2 Batang</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox6" name="checkbox6" value="option6" />
                                            <Label check className="form-check-label" htmlFor="checkbox2">KIP/Konseling</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox7" name="checkbox7" value="option7" />
                                            <Label check className="form-check-label" htmlFor="checkbox1">R/R</Label>
                                        </FormGroup>
                                    </Col> */}
                                    <Col xs="6" md="6" lg="1" className="my-2">
                                        <Button className="btn btn-info btnFilter" onClick={this.simpan}> Simpan</Button>
                                    </Col>
                                    <Col xs="6" md="6" lg="1" className="my-2">
                                        <Button className="btn btn-danger btnFilter" onClick={this.reset}> Reset</Button>
                                    </Col>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>

                    <FormGroup row>
                        <Col sm="12">
                            <Table2Edit
                                caption=''
                                tableHead={columns}
                                datas={this.state.datas}
                            />
                        </Col>
                    </FormGroup>

                </CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step3;