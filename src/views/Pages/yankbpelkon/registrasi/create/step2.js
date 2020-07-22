import React, { Component } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';
import Table2EditNoSearch from '../../../../Commons/Table/Table2EditNoSearch';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import API014 from '../../../../../services/API014';
import API015 from '../../../../../services/API015';
import FormInput from './formInput';

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

            dataKeluarga: [],
            dataNonBdki: [],
            nestedModal: false,

            // Wilayah
            opt_prov: [], id_provinsi: '', provinsi: '',
            opt_kab: [], id_kabupaten: '', kabupaten: '', dis_kab: true,
            opt_kec: [], id_kecamatan: '', kecamatan: '', dis_kec: true,
            opt_des: [], id_des: '', desa: '', dis_des: true,
            opt_rw: [], id_rw: '', rw: '', dis_rw: true,
            opt_rt: [], id_rt: '', rt: '', dis_rt: true,

            bdkiModal: false,
            nama: '',
            no_kki: '',
            dataPeserta: [],

            show_dataPenduduk: [],
            show_nik: null,
        }
    }

    componentDidMount() {
        this.setPesertaKB(this.props.id);
    }

    setPesertaKB(id) {
        this.setState({ blocking: true });
        this.setState({ dataKeluarga: [] });
        API014.get('siga/reg-yan-kb/getListById/' + id)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ dataPeserta: this.state.dataPeserta.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });

            });
    }

    setNonBdki() {
        this.setState({ blocking: true });
        this.setState({ dataNonBdki: [] });
        API014.get('siga/reg-yan-kb/getListPesertaNonBdki')
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ dataNonBdki: this.state.dataNonBdki.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });

            });
    }

    setKeluarga() {
        this.setState({ blocking: true });
        this.setState({ dataKeluarga: [] });
        API014.get('siga/reg-yan-kb/getListBdkiKeluarga')
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ dataKeluarga: this.state.dataKeluarga.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });

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
                    const obj = { 'value': data.id_provinsi, 'label': data.nama_provinsi };
                    newData.push(obj);
                });

                // const nama = res.data.map(res => res.nama_kabupaten)
                this.setState({ opt_prov: newData });
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
                    const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten };
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
                provinsi: e, id_provinsi: e.value,
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kab: false, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_provinsi) {
                        this.setKab(this.state.id_provinsi);
                    }
                })
        }
        else {
            this.setState({
                provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            })
        }
    }

    handleKab = (e) => {
        if (e) {
            this.setState({
                kabupaten: e, id_kabupaten: e.value,
                kecamatan: null, desa: null, rw: null, rt: null,
                dis_kec: false, dis_des: true, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kabupaten) {
                        this.setKec(this.state.id_kabupaten);
                    }
                })
        }
        else {
            this.setState({
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            })
        }
    }

    handleKec = (e) => {
        if (e) {
            this.setState({
                kecamatan: e, id_kecamatan: e.value,
                desa: null, rw: null, rt: null,
                dis_des: false, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kecamatan) {
                        this.setDes(this.state.id_kecamatan);
                    }
                })
        }
        else {
            this.setState({
                kecamatan: null, desa: null, rw: null, rt: null,
                dis_des: true, dis_rw: true, dis_rt: true,
            })
        }
    }

    handleDes = (e) => {
        if (e) {
            this.setState({
                desa: e, id_des: e.value,
                rw: null, rt: null,
                dis_rw: false, dis_rt: true,
            },
                () => {
                    if (this.state.id_des) {
                        this.setRW(this.state.id_des);
                    }
                })
        }
        else {
            this.setState({
                desa: null, rw: null, rt: null,
                dis_rw: true, dis_rt: true,
            })
        }
    }

    handleRW = (e) => {
        if (e) {
            this.setState({
                rw: e, id_rw: e.value,
                rt: null, dis_rt: false,
            },
                () => {
                    if (this.state.id_rw) {
                        this.setRT(this.state.id_rw);
                    }
                })
        }
        else {
            this.setState({
                rw: null, rt: null, dis_rt: true,
            })
        }
    }

    handleRT = (e) => {
        if (e) {
            this.setState({ rt: e, id_rt: e.value })
        }
        else {
            this.setState({ rt: null })
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
        }, () => {

            this.setNonBdki();
            this.setProv();
            this.setKeluarga();
        })
    };

    handleClickAction = (row, action) => {
        this.setState({}, () => {
            if (action === 'pilih') {
                this.setState({
                    nama: row.nama,
                    no_kki: row.kki,
                    modal: !this.state.modal
                })
            }
        });
    }

    handleChange = (e, tab) => {
        this.setState({ activeTab: tab });
    }

    showModalBdki = e => {
        this.setState({
            bdkiModal: !this.state.bdkiModal
        })
        console.log("Masuk atau Engga : " + this.state.bdkiModal)
    }

    callData = (e) => {
        if (e.keyCode === 13) {
            this.setState({
                show_dataPenduduk: this.state.dataKeluarga.filter(item => item.nik === e.target.value)
            })
        }

    }

    render() {

        function tglFormat(cell) {
            const today = new Date(cell)
            var dd = today.getDate();

            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }
            return mm + ' - ' + dd + ' - ' + yyyy;
        }

        const columnPeserta = [
            {
                dataField: 'no',
                text: 'No',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'tanggal',
                formatter: tglFormat,
                text: 'Tanggal',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'nik',
                text: 'NIK',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'kki',
                text: 'KKI',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'namaPesertaKB',
                text: 'Nama',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'jenisKunjungan',
                text: 'Jenis Kunjungan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'keluhan',
                text: 'Keluhan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'jenisTindakan',
                text: 'Jenis Tindakan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'penggunaanAsuransi',
                text: 'Penggunaan Asuransi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'sumberAlokon',
                text: 'Sumber Alokon',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'Action',
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
                                <Button color="link" onClick={() => this.handleClickAction(row, 'pilih')}> <i className="icon-checkmark" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"> <i className="icon-trash" style={{ fontSize: '0.875rem' }}> </i> </Button>
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

        const columnKeluarga = [
            {
                dataField: 'kki',
                text: 'No KKI',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'nik',
                text: 'NIK',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'nama',
                text: 'Nama Lengkap',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'tanggalLahir',
                formatter: tglFormat,
                text: 'Tgl. Lahir',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'hubunganDenganKKID',
                text: 'Hub Dg KK',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'pus',
                text: 'PUS',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'periodeID',
                text: 'Periode',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'kesertaanBerKBID',
                text: 'Kesertaan Ber-KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'metodeKontrasepsiDigunakanID',
                text: 'Metode Kontrasepsi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'jaminanKesehatanNasionalID',
                text: 'Kesertaan Asuransi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'nomorRumah',
                text: 'No. Rumah',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'Action',
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
                                <Button color="link" onClick={() => this.handleClickAction(row, 'pilih')}> <i className="icon-checkmark" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"> <i className="icon-trash" style={{ fontSize: '0.875rem' }}> </i> </Button>
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


        const columnNonBdki = [
            {
                dataField: 'nik',
                text: 'NIK',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'no_kki',
                text: 'No KKI',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'nama_lengkap',
                text: 'Nama Lengkap',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'tgl_lahir',
                formatter: tglFormat,
                text: 'Tgl. Lahir',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'pus',
                text: 'PUS',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'kesertaan_asuransi',
                text: 'Kesertaan Asuransi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'kesertaan_berkb',
                text: 'Kesertaan Ber-KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'no_urutrmh',
                text: 'No Rumah',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'Action',
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
                                <Button color="link"> <i className="icon-checkmark" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"> <i className="icon-pencil" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"> <i className="icon-trash" style={{ fontSize: '0.875rem' }}> </i> </Button>
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
                                                <input type="text" class="form-control" placeholder="Nomor Induk Kependudukan" value={this.state.show_nik} onKeyDown={this.callData} />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default" type="submit"
                                                        onClick={this.toggle}
                                                        style={{ border: '1px solid #e4e7ea', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderLeft: 'none' }}>
                                                        <i class="icon-search4"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">KKI </Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <Input type="text" id="text-input" name="text-input" value={this.state.show_dataPenduduk.map(item => item.kki)} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <Input type="text" id="text-input" name="text-input" value={this.state.show_dataPenduduk.map(item => item.nama)} disabled />
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
                                        <Col xs="8" lg="4" align="right">
                                            <button className="btn btn-primary">Tambah</button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <Row>
                        <Table2EditNoSearch
                            caption=''
                            tableHead={columnPeserta}
                            datas={this.state.dataPeserta}
                        />
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                        <button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</button>
                    </div>
                </container-fluid>

                <Modal isOpen={this.state.bdkiModal} size="lg" style={{ padding: '10px', width: '100%' }} >
                    <FormInput bdkiModal={this.state.bdkiModal} saveBdki={this.showModalBdki} />
                </Modal>

                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" style={{ maxWidth: '1000px' }}>
                    <ModalHeader> <i className="icon-list-alt"> </i> Data Peserta KB</ModalHeader>
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
                                                            <Table2EditNoSearch
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
                                                            <Table2EditNoSearch
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

                    <ModalFooter style={{ padding: '5px 30px' }}
                        role="tabpanel"
                        hidden={this.state.activeTab !== 1}
                        id="simple-tabpanel-1"
                        aria-labelledby="simple-tab-1">
                        {this.state.activeTab === 1 && (
                            <Row>
                                <Button className="mx-1" color="primary" onClick={this.showModalBdki} >Tambah</Button>{' '}
                                <Button className="mx-1" color="dark" onClick={this.toggle}>Tutup</Button>{' '}
                            </Row>
                        )}
                    </ModalFooter>

                    <ModalFooter style={{ padding: '5px 30px' }}
                        role="tabpanel"
                        hidden={this.state.activeTab !== 0}
                        id="simple-tabpanel-0"
                        aria-labelledby="simple-tab-0">
                        {this.state.activeTab === 0 && (
                            <Row>
                                <Button className="mx-1" color="dark" onClick={this.toggle}>Tutup</Button>{' '}
                            </Row>
                        )}
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Step2;