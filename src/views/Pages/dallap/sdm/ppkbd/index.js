import React, { Component } from 'react';
import { Card, CardBody, Col, Form, Label, Row, Button } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';

class PPKBD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            datas: [
                { id: 1, dt1: ' ', dt2: ' ', dt3: ' ', dt4: ' ', dt5: ' ' },
                { id: 2, dt1: ' ', dt2: ' ', dt3: ' ', dt4: ' ', dt5: ' ' },
                { id: 3, dt1: ' ', dt2: ' ', dt3: ' ', dt4: ' ', dt5: ' ' },
                { id: 4, dt1: ' ', dt2: ' ', dt3: ' ', dt4: ' ', dt5: ' ' },
                { id: 5, dt1: ' ', dt2: ' ', dt3: ' ', dt4: ' ', dt5: ' ' },
            ],
        };
    }

    handleClickOpen = () => {
        // this.setState({ open: true });
        this.props.history.push('/sdm/ppkbd/create');
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
                text: 'Nomor PPKBD',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'Nama PPKBD',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Kecamatan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'SK Pengukuhan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'Sumber Dana',
                headerAlign: 'center',
                align: 'left',
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
                    return { width: '120px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"><i className="icon-download4" style={{ fontSize: '0.875rem' }}> </i></Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"><i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i></Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"><i className="icon-pencil7" style={{ fontSize: '0.875rem' }}> </i></Button>
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
                                                    <div style={{ height: '50px' }}> <Button className="btn btn-danger btnFilter"><i className="icon-cross2"></i> Hapus</Button></div>
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
                                            <div className="titleFilter"><i className="icon-clipboard3"></i> Daftar PPKBD</div>
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

export default PPKBD;
