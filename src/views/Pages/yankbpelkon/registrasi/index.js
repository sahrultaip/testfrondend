import React, { Component } from 'react';
import { Card, CardBody, Col, Label, Row, Button, Collapse, Fade, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../Commons/Table/Table2Edit';
import API013 from '../../../../services/API013';
import API014 from '../../../../services/API014';
import API015 from '../../../../services/API015';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
// import { set } from 'core-js/fn/dict';

class Registrasi extends Component {
    constructor(props) {
        super(props);

        this.handleClickIcon = this.handleClickIcon.bind(this);
        this.setDetail = this.setDetail.bind(this);

        this.state = {
            blocking: true,
            open: false,
            collapse: true,
            fadeIn: true,
            tableHead: [],
            datas1: [],
            datas2: [],
            detailDatas2: [],

            // Wilayah
            opt_prov: [], id_provinsi: '', provinsi: '', depdagriProv: '',
            opt_kab: [], id_kabupaten: '', kabupaten: '', dis_kab: true, depdagriKab: '',
            opt_kec: [], id_kecamatan: '', kecamatan: '', dis_kec: true,
            opt_des: [], id_des: '', desa: '', dis_des: true,
            opt_rw: [], id_rw: '', rw: '', dis_rw: true,
            opt_rt: [], id_rt: '', rt: '', dis_rt: true,

            pdfModal: false
        };
    }

    componentDidMount() {
        // this.setBody();
        this.setProv();
    }

    //API 013
    setBody(idProv, idKab, idKec, idDes, idRW, idRT) {
        this.setState({ blocking: true });
        this.setState({ datas1: [] });
        // API013.get(`siga/pelayanankb/getlistbylocation?provinsiId=${idProv}&kabupatenId=${idKab}&kecamatanId=${idKec}&kelurahanId=${idDes}&rwId=${idRW}&rtId=${idRT}`)
        API013.get('siga/pelayanankb/getlistbylocation?provinsiId=' + idProv + '&kabupatenId=' + idKab + '&kecamatanId=' + idKec + '&kelurahanId=' + idDes + '&rwId=' + idRW + '&rtId=' + idRT)
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    this.setState({ datas1: this.state.datas1.concat(res.data) });
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

    //API 014
    setDetail = (id) => {
        this.setState({ blocking: true });
        this.setState({ datas2: [] });
        API014.get('siga/reg-yan-kb/getListDatPelayananKbById/' + id)
            // API014.get('siga/reg-yan-kb/getListDatPelayananKbById/1101005')
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ datas2: this.state.datas2.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });
                // Swal.fire({
                //     title: 'Error',
                //     icon: 'error',
                //     text: 'Please Check Your Network Connection.',
                // });
            });
    }

    //API 015 (Wilayah)
    setProv() {
        this.setState({ blocking: true });
        this.setState({ opt_prov: [] });
        var newData = [];
        API015.get('siga/location/getListProvinsi')
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);

                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_provinsi, 'label': data.nama_provinsi, 'kode': data.kodeDepdagri };
                    newData.push(obj);
                });

                // const nama = res.data.map(res => res.nama_kabupaten)
                this.setState({
                    opt_prov: newData
                });
                //   }
                // console.log("nama" + nama);
                // console.log("opt_prov" + this.state.opt_prov);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setKab(id) {
        this.setState({ blocking: true });
        this.setState({ opt_kab: [] });
        var newData = [];
        API015.get('siga/location/getListKabupatenByIdProvinsi?id_provinsi=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten, 'kode': data.kodeDepdagri };
                    newData.push(obj);
                });
                this.setState({ opt_kab: newData });
                // console.log("opt_kab" + this.state.opt_kab);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setKec(id) {
        this.setState({ blocking: true });
        this.setState({ opt_kec: [] });
        var newData = [];
        API015.get('siga/location/getListKecamatanByIdKabupaten?id_kabupaten=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kecamatan, 'label': data.nama_kecamatan };
                    newData.push(obj);
                });
                this.setState({ opt_kec: newData });
                // console.log("opt_kec" + this.state.opt_kec);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setDes(id) {
        this.setState({ blocking: true });
        this.setState({ opt_des: [] });
        var newData = [];
        API015.get('siga/location/getListKelurahanByIdKecamatan?id_kecamatan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kelurahan, 'label': data.nama_kelurahan };
                    newData.push(obj);
                });
                this.setState({ opt_des: newData });
                // console.log("opt_des" + this.state.opt_des);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setRW(id) {
        this.setState({ blocking: true });
        this.setState({ opt_rw: [] });
        var newData = [];
        API015.get('siga/location/getListRwByIdKelurahan?id_kelurahan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rw, 'label': data.nama_rw };
                    newData.push(obj);
                });
                this.setState({ opt_rw: newData });
                // console.log("opt_rw" + this.state.opt_rw);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setRT(id) {
        this.setState({ blocking: true });
        this.setState({ opt_rt: [] });
        var newData = [];
        API015.get('/siga/location/getListRtByIdRw?id_rw=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rt, 'label': data.nama_rt };
                    newData.push(obj);
                });
                this.setState({ opt_rt: newData });
                // console.log("opt_rt" + this.state.opt_rt);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    handleProv = (e) => {
        if (e) {
            this.setState({
                provinsi: e, id_provinsi: e.value, depdagriProv: e.kode,
                id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kab: false, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
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
                })
        }
        else {
            this.setState({
                provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                id_provinsi: 0, id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
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

    handleKab = (e) => {
        if (e) {
            this.setState({
                kabupaten: e, id_kabupaten: e.value, depdagriKab: e.kode,
                id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                kecamatan: null, desa: null, rw: null, rt: null,
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
                id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
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

    handleKec = (e) => {
        if (e) {
            this.setState({
                kecamatan: e, id_kecamatan: e.value,
                id_desa: 0, id_rw: 0, id_rt: 0,
                desa: null, rw: null, rt: null,
                dis_des: false, dis_rw: true, dis_rt: true,
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
                id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_des: true, dis_rw: true, dis_rt: true,
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

    handleDes = (e) => {
        if (e) {
            this.setState({
                desa: e, id_des: e.value,
                id_rw: 0, id_rt: 0,
                rw: null, rt: null,
                dis_rw: false, dis_rt: true,
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
                })
        }
        else {
            this.setState({
                desa: null, rw: null, rt: null,
                id_rw: 0, id_rt: 0,
                dis_rw: true, dis_rt: true,
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

    handleRW = (e) => {
        if (e) {
            this.setState({
                rw: e, id_rw: e.value, id_rt: 0,
                rt: null, dis_rt: false,
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
                rw: null, rt: null, dis_rt: true, id_rw: 0, id_rt: 0,
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

    handleRT = (e) => {
        if (e) {
            this.setState({ rt: e, id_rt: e.value },
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
            this.setState({ rt: null, id_rt: 0 },
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

    handleDeleteWilayah = () => {
        this.setState({
            provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
            id_provinsi: 0, id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
            dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true, datas1: [],
        })
    }

    handleSearchWilayah = () => {
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
        this.setBody(idProv, idKab, idKec, idDes, idRW, idRT);
        console.log(idProv, idKab, idKec, idDes, idRW, idRT)
    }

    handleClickIcon = (e, row, action) => {
        e.preventDefault();
        this.setState({}, () => {
            if (action === 'lihat') {
                this.setState({
                    open: !this.state.open,
                    detailDatas2: [
                        row.namaTempatPelayananKB,
                        row.kodeProvinsi,
                        row.kodeKabupaten,
                        row.nomorRegisterFaskesKB,
                        row.nomorJaringanJejaringFaskesKB,
                        row.menyetujuiTempat,
                        row.menyetujuiPimpinanNama,
                        row.menyetujuiPimpinanNIP
                    ]
                })
                this.setDetail(row.tempatPelayananKBId);
            }
            else if (action === 'download') {
                this.setState({
                    pdfModal: !this.state.pdfModal
                })
            }
        });
    }

    handleClickAction = (row, action) => {
        this.props.history.push('/register/' + action);
        sessionStorage.setItem('id', row.tempatPelayananKBID);
        sessionStorage.setItem('kd_prov', this.state.detailDatas2[1]);
        sessionStorage.setItem('kd_kab', this.state.detailDatas2[2]);
        sessionStorage.setItem('nama_faskes', row.namaTempatPelayananKB);
        sessionStorage.setItem('bulan', [" ", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][row.bulan]);
        sessionStorage.setItem('tahun', row.tahun);
        sessionStorage.setItem('no_faskes', row.nomorRegisterFaskesKB);
        sessionStorage.setItem('no_jaringan', row.nomorJaringanJejaringFaskesKB);
        sessionStorage.setItem('lembar', row.lembar);
        sessionStorage.setItem('menyetujui_tempat', row.menyetujuiTempat);
        sessionStorage.setItem('menyetujui_tanggal', row.menyetujuiTanggal);
        sessionStorage.setItem('menyetujui_nama', row.menyetujuiPimpinanNama);
        sessionStorage.setItem('menyetujui_nip', row.menyetujuiPimpinanNIP);
        console.log('Masuk ' + action);
    }

    handleCreate = () => {
        this.props.history.push('/register/create');
        sessionStorage.setItem('nama_faskes', this.state.detailDatas2[0]);
        sessionStorage.setItem('kd_prov', this.state.detailDatas2[1]);
        sessionStorage.setItem('kd_kab', this.state.detailDatas2[2]);
        sessionStorage.setItem('no_faskes', this.state.detailDatas2[3]);
        sessionStorage.setItem('no_jaringan', this.state.detailDatas2[4] ? this.state.detailDatas2[4] : '');
        sessionStorage.setItem('menyetujui_tempat', this.state.detailDatas2[5]);
        sessionStorage.setItem('menyetujui_nama', this.state.detailDatas2[6]);
        sessionStorage.setItem('menyetujui_nip', this.state.detailDatas2[7]);
        sessionStorage.setItem('open', this.state.open);
        console.log('Masuk create')
    }

    clickBack = () => {
        this.setState({
            open: !this.state.open
        })
        console.log('Back');
    }

    closeModal = () => {
        this.setState({
            pdfModal: false
        })
    }

    render() {

        const columns1 = [
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
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={(e) => this.handleClickIcon(e, row, 'download')}> <i className="icon-download4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={(e) => this.handleClickIcon(e, row, 'lihat')}> <i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                        </div>
                    );
                }
            }
        ];

        function monthFormatter(cell, row) {
            let bulan;
            let month = cell;
            switch (month) {
                case 1: bulan = "Januari"; break;
                case 2: bulan = "Februari"; break;
                case 3: bulan = "Maret"; break;
                case 4: bulan = "April"; break;
                case 5: bulan = "Mei"; break;
                case 6: bulan = "Juni"; break;
                case 7: bulan = "Juli"; break;
                case 8: bulan = "Agustus"; break;
                case 9: bulan = "September"; break;
                case 10: bulan = "Oktober"; break;
                case 11: bulan = "November"; break;
                case 12: bulan = "Desember"; break;
                default: bulan = "-";
            }
            return bulan + " " + row.tahun;
        }

        const columns2 = [
            {
                dataField: 'tempatPelayananKBID',
                text: 'No. Tempat YAN KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'namaTempatPelayananKB',
                text: 'Nama Tempat YAN KB',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'bulan',
                formatter: monthFormatter,
                text: 'Tahun Bulan Lapor',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'lembar',
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
                                <Button color="link" onClick={(e) => this.handleClickIcon(e, row, 'download')}> <i className="icon-download4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={() => this.handleClickAction(row, 'lihat')}> <i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={() => this.handleClickAction(row, 'edit')}> <i className="icon-pencil" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        // console.log(row)
                    },
                }
            },
        ];

        const rowEvents = {
            onClick: (e, row) => {
                console.log("ini e" + e);
                console.log("ini row" + row);
            }
        }

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
                                            <Col md="11">
                                                <Row>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="provinsi">Provinsi</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.opt_prov} onChange={this.handleProv} value={this.state.provinsi} isClearable />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="kabupaten">Kabupaten</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.opt_kab} onChange={this.handleKab} value={this.state.kabupaten} isDisabled={this.state.dis_kab} isClearable />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="kecamatan">Kecamatan</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.opt_kec} onChange={this.handleKec} value={this.state.kecamatan} isDisabled={this.state.dis_kec} isClearable />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="desa">Desa/Kel</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.opt_des} onChange={this.handleDes} value={this.state.desa} isDisabled={this.state.dis_des} isClearable />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="dusun">Dusun/RW</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.opt_rw} onChange={this.handleRW} value={this.state.rw} isDisabled={this.state.dis_rw} isClearable />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="rt">RT</Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Select options={this.state.opt_rt} onChange={this.handleRT} value={this.state.rt} isDisabled={this.state.dis_rt} isClearable />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="1">
                                                <Row>
                                                    <Col xs="6" md="12">
                                                        <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter" onClick={this.handleDeleteWilayah}><i className="icon-trash-alt"></i>  Hapus</Button></div>
                                                    </Col>
                                                    <Col xs="6" md="12">
                                                        <Button className="btn btn-success btnFilter" onClick={() => this.handleSearchWilayah()}><i className="icon-reload-alt"></i>  Refresh</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <Row>
                                        <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange' }} /></Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <div className="titleFilter"><i className="icon-clipboard3"></i> Register Pelayanan KB</div>
                                        </Col>
                                        <Col md="12">
                                            <Fade in={this.state.open}>
                                                <Button className="btn btn-info btn-add" onClick={this.handleCreate}> <i className="icon-plus3 d-inline mr-1"></i> Tambah </Button>
                                            </Fade>
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
                                            <Fade in={this.state.open}>
                                                <Button className="btn btn-warning" onClick={this.clickBack}>Sebelumnya</Button>
                                            </Fade>
                                        </Col>

                                        <Col md="12">
                                            <Collapse isOpen={!this.state.open}>
                                                <Table2Edit
                                                    caption=''
                                                    tableHead={columns1}
                                                    datas={this.state.datas1}
                                                    rowEvents={rowEvents}
                                                />
                                            </Collapse>
                                        </Col>
                                    </Row>

                                    <Modal isOpen={this.state.pdfModal} toggle={this.closeModal}>
                                        <ModalHeader toggle={this.closeModal}>Download PDF</ModalHeader>
                                        <ModalBody>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </ModalBody>
                                    </Modal>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </BlockUi>
            </div >
        );
    }
}

export default Registrasi;
