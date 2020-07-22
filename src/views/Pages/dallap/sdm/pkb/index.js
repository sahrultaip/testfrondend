import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Form, Label, Row } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';

class PKB extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            open: false,
            collapse: true,
            fadeIn: true,
            datas: [
                { id: 1, dt1: '3115', dt2: '16715373', dt3: '3125871234560001', dt4: 'Gusion', dt5: 'Supervisor' },
                { id: 2, dt1: '3116', dt2: '16715374', dt3: '3125871234560002', dt4: 'Lancelot', dt5: 'Supervisor' },
                { id: 3, dt1: '3117', dt2: '16715375', dt3: '3125871234560003', dt4: 'Alucard', dt5: 'Supervisor' },
                { id: 4, dt1: '3118', dt2: '16715376', dt3: '3125871234560004', dt4: 'Chou', dt5: 'Supervisor' },
                { id: 5, dt1: '3119', dt2: '16715377', dt3: '3125871234560005', dt4: 'Granger', dt5: 'Supervisor' },
            ],
            datas2: [
                { id: 1, dt1: '6102004', dt2: 'Puskesmas Marga 1', dt3: 'Mei 2020', dt4: '001' },
            ],
        };
    }

    handleClickOpen = () => {
        // this.setState({ open: true });
        this.props.history.push('/sdm/pkb/create');
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
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
                    return { width: '80px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'NIP',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'NIK',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Nama',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
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
                                            <div className="titleFilter"><i className="icon-clipboard3"></i> Pendaftaran PKB / PLKB</div>
                                        </Col>
                                        <Col md="12">
                                            <Button className="btn btn-info btn-add" onClick={this.handleClickOpen}> <i className="icon-plus3 d-inline mr-1"></i> Tambah </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Table2Edit
                                                caption=''
                                                tableHead={columns}
                                                datas={this.state.datas}
                                            />
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

export default PKB;
