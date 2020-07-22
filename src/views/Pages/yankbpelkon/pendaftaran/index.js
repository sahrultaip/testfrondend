import React, { Component } from 'react';
import { Card, CardBody, Col, Form, Label, Row, Button, Alert } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../Commons/Table/Table2Edit';
import API013 from '../../../../services/API013';
import API015 from '../../../../services/API015';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';

class Pendaftaran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
            alertProv: false,
            alertKab: false,
            alertKec: false,
            alertDes: false,
            alertRw: false,
            alertRt: false,
            dt_prov: [],
            provinsi: '',
            id_provinsi: '',
            dt_kab: [],
            kabupaten: '',
            id_kabupaten: '',
            dis_kab: true,
            dt_kec: [],
            kecamatan: '',
            id_kecamatan: '',
            dis_kec: true,
            dt_des: [],
            desa: '',
            id_des: '',
            dis_des: true,
            dt_rw: [],
            rw: '',
            id_rw: '',
            dis_rw: true,
            dt_rt: [],
            rt: '',
            id_rt: '',
            dis_rt: true,
            datas: [],
        };
    }

    componentDidMount() {
        // this.setBody();
        this.setProv();
    }

    setBody(idProv, idKab, idKec, idDes, idRW, idRT) {
        if(idProv !== 0){
            this.setState({ blocking: true });
            this.setState({ datas: [] });
            // API013.get('siga/daf-yan-kb/getlist')
            API013.get('siga/pelayanankb/getlistbylocation?provinsiId=' + idProv + '&kabupatenId=' + idKab + '&kecamatanId=' + idKec + '&kelurahanId=' + idDes + '&rwId=' + idRW + '&rtId=' + idRT)
                .then(res => {
                    if(res.status === 200){ 
                    console.log('tabel',res);
                    this.setState({ datas: this.state.datas.concat(res.data) });
                    }
                    this.setState({ blocking: false });
                }).catch((error) => {
                    this.setState({ blocking: false });
                    Swal.fire({
                        title: 'Error',
                        icon: 'error',
                        text: 'Please Check Your Network Connection.',
                    });
                });
        }
        else {
            this.setState({
                datas: []
            })
        }
    }

     //API 015 (Wilayah)
     setProv() {
        this.setState({ blocking: true });
        this.setState({ dt_prov: [] });
        var newData = [];
        API015.get('siga/location/getListProvinsi')
            .then(res => {
                  if(res.status === 200){ 
                console.log('result', res);

                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_provinsi, 'label': data.nama_provinsi };
                    newData.push(obj);
                });

                // const nama = res.data.map(res => res.nama_kabupaten)
                this.setState({ dt_prov: newData });
                  }
                // console.log("nama" + nama);
                console.log("opt_prov" + this.state.dt_prov);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    // get kabupaten
    setKab(id) {
        this.setState({ blocking: true });
        this.setState({ dt_kab: [] });
        var newData = [];
        API015.get('siga/location/getListKabupatenByIdProvinsi?id_provinsi=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten };
                    newData.push(obj);
                });
                this.setState({ dt_kab: newData });
                console.log("opt_kab" + this.state.dt_kab);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    // get kecamatan
    setKec(id) {
        this.setState({ blocking: true });
        this.setState({ dt_kec: [] });
        var newData = [];
        API015.get('siga/location/getListKecamatanByIdKabupaten?id_kabupaten=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kecamatan, 'label': data.nama_kecamatan };
                    newData.push(obj);
                });
                this.setState({ dt_kec: newData });
                console.log("opt_kec" + this.state.dt_kec);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    // get desa
    setDes(id) {
        this.setState({ blocking: true });
        this.setState({ dt_des: [] });
        var newData = [];
        API015.get('siga/location/getListKelurahanByIdKecamatan?id_kecamatan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kelurahan, 'label': data.nama_kelurahan };
                    newData.push(obj);
                });
                this.setState({ dt_des: newData });
                console.log("opt_des" + this.state.dt_des);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    // get rw
    setRW(id) {
        this.setState({ blocking: true });
        this.setState({ dt_rw: [] });
        var newData = [];
        API015.get('siga/location/getListRwByIdKelurahan?id_kelurahan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rw, 'label': data.nama_rw };
                    newData.push(obj);
                });
                this.setState({ dt_rw: newData });
                console.log("opt_rw" + this.state.dt_rw);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    // get rt
    setRT(id) {
        this.setState({ blocking: true });
        this.setState({ dt_rt: [] });
        var newData = [];
        API015.get('/siga/location/getListRtByIdRw?id_rw=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rt, 'label': data.nama_rt };
                    newData.push(obj);
                });
                this.setState({ dt_rt: newData });
                console.log("opt_rt" + this.state.dt_rt);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    handleSeacrh = () => {
        var idProv = 0
        var idKab = 0
        var idKec = 0
        var idDes = 0
        var idRW = 0
        var idRT = 0
        this.setState({
            idProv: (this.state.id_provinsi) ? idProv = this.state.id_provinsi : idProv = 0,
            idKab: (this.state.id_kabupaten) ? idKab = this.state.id_kabupaten : idKab = 0,
            idKec: (this.state.id_kecamatan) ? idKec = this.state.id_kecamatan : idKec = 0,
            idDes: (this.state.id_desa) ? idDes = this.state.id_desa : idDes = 0,
            idRW: (this.state.id_rw) ? idRW = this.state.id_rw : idRW = 0,
            idRT: (this.state.id_rt) ? idRT = this.state.id_rt : idRT = 0
        }, () => {

        });
        if (idProv) {
            this.setBody(idProv, idKab, idKec, idDes, idRW, idRT);
        }
        console.log(idProv, idKab, idKec, idDes, idRW, idRT)
    }

    handleHapus = () => {
        this.setState({
            provinsi: '',
            id_provinsi: '',
            dt_kab: [],
            kabupaten: '',
            id_kabupaten: '',
            dis_kab: true,
            dt_kec: [],
            kecamatan: '',
            id_kecamatan: '',
            dis_kec: true,
            dt_des: [],
            desa: '',
            id_des: '',
            dis_des: true,
            dt_rw: [],
            rw: '',
            id_rw: '',
            dis_rw: true,
            dt_rt: [],
            rt: '',
            id_rt: '',
            dis_rt: true,
        })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
        this.props.history.push('/pendaftaran/create');
        sessionStorage.setItem('kd_prov', this.state.id_provinsi);
        sessionStorage.setItem('kd_kab', this.state.id_kabupaten);
        sessionStorage.setItem('kd_kec', this.state.id_kecamatan);
        sessionStorage.setItem('kd_des', this.state.id_des);
        sessionStorage.setItem('rt', this.state.rt ? this.state.rt.label : '');
        sessionStorage.setItem('rw', this.state.rw ? this.state.rw.label : '');
        sessionStorage.setItem('desa', this.state.desa  ? this.state.desa.label : '');
        sessionStorage.setItem('kecamatan', this.state.kecamatan ? this.state.kecamatan.label : '');
        sessionStorage.setItem('kabupaten', this.state.kabupaten ? this.state.kabupaten.label : '');
        sessionStorage.setItem('provinsi', this.state.provinsi ? this.state.provinsi.label : '');
    }

    handleClickAction = (e, row, action) =>{
        if (action === 'lihat') {
            var data = row
            // console.log('tes', data)
            this.setState({ open: true });
            this.props.history.push('/pendaftaran/lihat');
            sessionStorage.setItem('action_lihat', JSON.stringify(data))
        }
        else if (action === 'edit'){
            this.props.history.push('/pendaftaran/edit');
        }
    }
    
    // setValue = (value) => {
    //     this.setState(prevState => ({
    //         select: {
    //             ...prevState.select,
    //             value
    //         }
    //     }));
    // };

    sel_prov = (e) => {
            if (e) {
                this.setState({
                    provinsi: e, id_provinsi: e.value, kabupaten: null, kecamatan: null, desa: null, rw: null,
                    rt: null, dis_kab: false, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
                },
                    () => {
                        if (this.state.id_provinsi) {
                            this.setKab(this.state.id_provinsi);
                            var idProv = this.state.id_provinsi
                            var idKab = 0
                            var idKec = 0
                            var idDes = 0
                            var idRw = 0
                            var idRt = 0
                            this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                        }
                    }
                    )
            }
            else {
                this.setState({
                    provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                    dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
                    id_provinsi: '', id_kabupaten: '', id_kecamatan: '', id_des: '', id_rw: '', id_rt: ''
                },
                () => {
                    if (e === null) {
                        var idProv = 0
                        var idKab = 0
                        var idKec = 0
                        var idDes = 0
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
                )
            }
    }

    sel_kab = (e) => {
        if (e) {
            this.setState({
                kabupaten: e, id_kabupaten: e.value, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kec: false, dis_des: true, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kabupaten) {
                        this.setKec(this.state.id_kabupaten);
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = 0
                        var idDes = 0
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
                id_kabupaten: '', id_kecamatan: '', id_des: '', id_rw: '', id_rt: ''
            },
                () => {
                    if (e === null) {
                        var idProv = this.state.id_provinsi
                        var idKab = 0
                        var idKec = 0
                        var idDes = 0
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
            )
        }
    }

    sel_kec = (e) => {
        if (e) {
            this.setState({
                kecamatan: e, id_kecamatan: e.value, desa: null, rw: null,
                rt: null, dis_des: false, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kecamatan) {
                        this.setDes(this.state.id_kecamatan);
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = this.state.id_kecamatan
                        var idDes = 0
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                kecamatan: null, desa: null, rw: null, rt: null,
                dis_des: true, dis_rw: true, dis_rt: true,
                id_kecamatan: '', id_des: '', id_rw: '', id_rt: ''
            },
            () => {
                    if (e === null) {
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = 0
                        var idDes = 0
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
            )
        }
    }

    sel_des = (e) => {
        if (e) {
            this.setState({
                desa: e, id_des: e.value, rw: null,rt: null, dis_rw: false, dis_rt: true,
            },
                () => {
                    if (this.state.id_des) {
                        this.setRW(this.state.id_des);
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = this.state.id_kecamatan
                        var idDes = this.state.id_des
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
            )
        }
        else {
            this.setState({
                desa: null, rw: null, rt: null, dis_rw: true, dis_rt: true,
                id_des: '', id_rw: '', id_rt: ''
            },
                () => {
                    if (e === null) {
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = this.state.id_kecamatan
                        var idDes = 0
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
            )
        }
    }

    sel_rw = (e) => {
        if (e) {
            this.setState({
                rw: e, id_rw: e.value, rt: null, dis_rt: false,
            },
                () => {
                    if (this.state.id_rw) {
                        this.setRT(this.state.id_rw);
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = this.state.id_kecamatan
                        var idDes = this.state.id_des
                        var idRw = this.state.id_rw
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                rw: null, rt: null, dis_rt: true, id_rw: '', id_rt: ''
            },
                () => {
                    if (e === null) {
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = this.state.id_kecamatan
                        var idDes = this.state.id_des
                        var idRw = 0
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
            )
        }
    }
    
    sel_rt = (e) => {
        if (e) {
            this.setState({
                rt: e, id_rt: e.value
            },
                () => {
                    if (e) {
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = this.state.id_kecamatan
                        var idDes = this.state.id_des
                        var idRw = this.state.id_rw
                        var idRt = this.state.id_rt
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
            )
        }
        else {
            this.setState({
                rt: null, id_rt: ''
            },
                () => {
                    if (e === null) {
                        var idProv = this.state.id_provinsi
                        var idKab = this.state.id_kabupaten
                        var idKec = this.state.id_kecamatan
                        var idDes = this.state.id_des
                        var idRw = this.state.id_rw
                        var idRt = 0
                        this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
            )
        }
    }

    render() {

        const columns = [
            {
                dataField: 'kodeProvinsi',
                text: 'Kode Provinsi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'kodeKabupaten',
                text: 'Kode Kabupaten',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'nomorRegisterFaskesKB',
                text: 'Nomor Register Faskes',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'nomorJaringanJejaringFaskesKB',
                text: 'Nomor Jaring/Jejaring',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'namaTempatPelayananKB',
                text: 'Nama Tempat Pelayanan KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '220px' };
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
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px 5px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={this.handleClickAction}><i className="icon-download4" style={{ fontSize: '0.875rem' }}> </i></Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px 5px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={(e) => this.handleClickAction(e, row, 'lihat')}><i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i></Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px 5px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={(e) => this.handleClickAction(e, row, 'edit')}><i className="icon-pencil7" style={{ fontSize: '0.875rem' }}> </i></Button>
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
                        //   this.setState({modalTitle: row.plant})
                        //   this.toggleModal();
                    },
                }
            },
        ];

        return (
            <div className="animated fadeIn">
                <BlockUi tag="div" blocking={this.state.blocking}>
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
                                                                <Select options={this.state.dt_prov} id="prov" name="provinsi" onChange={this.sel_prov} value={this.state.provinsi} isClearable />
                                                                <Alert color="danger" isOpen={this.state.alertProv} style={{ padding: '5px', marginTop: '5px'}} >
                                                                    Provinsi tidak boleh kosong
                                                                </Alert>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="kabupaten">Kabupaten/kota</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.dt_kab} isClearable onChange={this.sel_kab} value={this.state.kabupaten} isDisabled={this.state.dis_kab} />
                                                                <Alert color="danger" isOpen={this.state.alertKab} style={{ padding: '5px', marginTop: '5px'}} >
                                                                    Kabupaten/kota tidak boleh kosong
                                                                </Alert>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="kecamatan">kecamatan</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.dt_kec} isClearable onChange={this.sel_kec} value={this.state.kecamatan} isDisabled={this.state.dis_kec} />
                                                                <Alert color="danger" isOpen={this.state.alertKec} style={{ padding: '5px', marginTop: '5px'}} >
                                                                    Kecamatan tidak boleh kosong
                                                                </Alert>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="desa">Desa/Kel</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.dt_des} isClearable onChange={this.sel_des} value={this.state.desa} isDisabled={this.state.dis_des} />
                                                                <Alert color="danger" isOpen={this.state.alertDes} style={{ padding: '5px', marginTop: '5px'}} >
                                                                    Desa/Kel tidak boleh kosong
                                                                </Alert>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="dusun">Dusun/RW</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.dt_rw} isClearable onChange={this.sel_rw} value={this.state.rw} isDisabled={this.state.dis_rw} />
                                                                <Alert color="danger" isOpen={this.state.alertRw} style={{ padding: '5px', marginTop: '5px'}} >
                                                                    Dusun/RW tidak boleh kosong
                                                                </Alert>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="rt">RT</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.dt_rt} isClearable onChange={this.sel_rt} value={this.state.rt} isDisabled={this.state.dis_rt} />
                                                                <Alert color="danger" isOpen={this.state.alertRt} style={{ padding: '5px', marginTop: '5px'}} >
                                                                    RT tidak boleh kosong
                                                                </Alert>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="2">
                                                <Row>
                                                    <Col xs="3" md="6">
                                                        <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter" onClick={this.handleHapus}><i className="icon-trash-alt"></i> Hapus</Button></div>
                                                    </Col>
                                                    <Col xs="3" md="6">
                                                        <div style={{ height: '54px' }}> <Button className="btn btn-warning btnFilter" onClick={this.handleSeacrh}><i className="icon-cross2"></i> Refresh</Button></div>
                                                    </Col>
                                                    {/* <Col xs="3" md="6">
                                                        <Button className="btn btn-success btnFilter"><i className="icon-search4"></i> Lihat</Button>
                                                    </Col> */}
                                                    <Col xs="3" md="6">
                                                        <Button className="btn btn-info btnFilter" onClick={this.handleClickOpen}><i className="icon-cross2"></i> Tambah</Button>
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
                                            <Col md="12">
                                                {/* <Button className="btn btn-info btn-add" onClick={this.handleClickOpen}> <i className="icon-plus3 d-inline mr-1"></i> Tambah </Button> */}
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
                </BlockUi>
            </div >
        );
    }
}

export default Pendaftaran;
