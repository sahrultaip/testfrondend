import React, { Component } from 'react';
import { Card, CardBody, Col, Form, Label, Row, Button, Collapse} from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';

class PPLKB extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            open: false,
            collapse: true,
            fadeIn: true,
            datas: [
                { id: 1, dt1: '3115', dt2: 'Gusion', dt3: '16715373', dt4: 'Jabatan 1', dt5: 'Supervisor', dt6: 'Sarjana' },
                { id: 2, dt1: '3116', dt2: 'Lancelot', dt3: '16715374', dt4: 'Jabatan 2', dt5: 'Supervisor', dt6: 'Sarjana' },
                { id: 3, dt1: '3117', dt2: 'Alucard', dt3: '16715375', dt4: 'Jabatan 3', dt5: 'Supervisor', dt6: 'Sarjana' },
                { id: 4, dt1: '3118', dt2: 'Chou', dt3: '16715376', dt4: 'Jabatan 4', dt5: 'Supervisor', dt6: 'Sarjana' },
                { id: 5, dt1: '3119', dt2: 'Granger', dt3: '16715377', dt4: 'Jabatan 5', dt5: 'Supervisor', dt6: 'Sarjana' },
            ],
            datas2: [
                { id: 1, dt1: '6102004', dt2: 'Puskesmas Marga 1', dt3: 'Mei 2020', dt4: '001' },
            ],
        };
    }

    handleClickOpen = () => {
        // this.setState({ open: true });
        this.props.history.push('/sdm/pplkb/create');
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
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
                text: 'No. Register',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'Nama',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'NIP',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Jabatan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'Pangkat & Golongan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'dt6',
                text: 'Pendidikan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'dt7',
                text: 'Aksi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={this.toggle}> <i className="icon-download4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
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

        const columns2 = [
            {
                dataField: 'dt1',
                text: 'No. Tempat YAN KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'Nama Tempat YAN KB',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Tahun Bulan Lapor',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Lembar Ke',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'dt5',
                text: '',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={this.toggle}> <i className="icon-download4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={this.toggle}> <i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={this.toggle}> <i className="icon-pencil" style={{ fontSize: '0.875rem' }}> </i> </Button>
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
                                        <div className="titleFilter"><i className="icon-filter4"></i> Filter Data</div>
                                    </Col>
                                </Row>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <Row>
                                        <Col md="10">
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
                                                            <Label className="labelForm" htmlFor="kecamatan">Kecamatan</Label>
                                                        </Col>
                                                        <Col xs="9">
                                                            <Select options={options} isClearable />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md="2">
                                            <Row>
                                                <Col xs="6" md="6">
                                                    <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter"><i className="icon-cross2"></i> Hapus</Button></div>
                                                </Col>
                                                <Col xs="6" md="6">
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
                                            <div className="titleFilter"><i className="icon-clipboard3"></i> Pendaftaran PPLKB</div>
                                        </Col>
                                        <Col md="12">
                                            <Button className="btn btn-info btn-add" onClick={this.handleClickOpen}> <i className="icon-plus3 d-inline mr-1"></i> Tambah </Button>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col md="12">
                                            <Collapse isOpen={this.state.open}>
                                                <Table2Edit
                                                    caption=''
                                                    tableHead={columns2}
                                                    datas={this.state.datas2}
                                                />
                                            </Collapse>
                                        </Col>

                                        <Col md="12">
                                            <Collapse isOpen={!this.state.open}>
                                                <Table2Edit
                                                    caption=''
                                                    tableHead={columns}
                                                    datas={this.state.datas}
                                                />
                                            </Collapse>
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

export default PPLKB;
