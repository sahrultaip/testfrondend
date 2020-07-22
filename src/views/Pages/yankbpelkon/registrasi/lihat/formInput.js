import React, { Component } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
import API014 from '../../../../../services/API014';
import API015 from '../../../../../services/API015';

export class FormInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // Wilayah
            opt_prov: [], id_provinsi: '', provinsi: null,
            opt_kab: [], id_kabupaten: '', kabupaten: null, dis_kab: true,
            opt_kec: [], id_kecamatan: '', kecamatan: null, dis_kec: true,
            opt_des: [], id_des: '', desa: null, dis_des: true,
            opt_rw: [], id_rw: '', rw: null, dis_rw: true,
            opt_rt: [], id_rt: '', rt: null, dis_rt: true,

            //Input BDKI
            bdkiNama: '', bdkiTgl: '', bdkiJk: '', bdkiNIK: '', bdkiJp: '',
            bdkiWil_prov: '', bdkiWil_kab: '', bdkiWil_kec: '', bdkiWil_des: '', bdkiWil_rw: '', bdkiWil_rt: '', bdkiWil_rumah: '',

        }
    }

    componentDidMount() {
        this.setProv();
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

    createBdki() {
        this.setState({ blocking: true });
        API014.post('/siga/reg-yan-kb/inputDataPesertaNonBdki', {
            "nama_lengkap": this.state.bdkiNama,
            "tgl_lahir": "2020-07-20",
            "jenis_kelamin": this.state.bdkiJk,
            "nik": this.state.bdkiNIK,
            "jenis_peserta": "1",
            "id_provinsi": this.state.id_provinsi,
            "id_kabupaten": this.state.id_kabupaten,
            "id_kecamatan": this.state.id_kecamatan,
            "id_desa": this.state.id_desa,
            "id_rw": this.state.id_rw,
            "id_rt": this.state.id_rt,
            "no_urutrmh": this.state.bdkiWil_rumah,
            "no_kki": "",
            "pus": "1",
            "kesertaan_asuransi": "1",
            "kesertaan_berkb": "1"
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        console.log(
            "nama_lengkap"+ this.state.bdkiNama,
            "tgl_lahir"+ "2020-07-20",
            "jenis_kelamin"+ this.state.bdkiJk,
            "nik"+ this.state.bdkiNIK,
            "jenis_peserta"+ "1",
            "id_provinsi"+ this.state.provinsi,
            "id_kabupaten"+ this.state.kabupaten,
            "id_kecamatan"+ this.state.kecamatan,
            "id_desa"+ this.state.desa,
            "id_rw"+ this.state.rw,
            "id_rt"+ this.state.rt,
            "no_urutrmh"+ this.state.bdkiWil_rumah,
            "no_kki"+ "",
            "pus"+ "1",
            "kesertaan_asuransi"+ "1",
            "kesertaan_berkb"+ "1"
        )
    }

    bdkiChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveBdki = e => {
        this.props.saveBdki && this.props.saveBdki(e);
        // this.createBdki();
    }


    render() {

        const jenis_kelamin = [
            { value: '1', label: 'Laki-laki' },
            { value: '2', label: 'Perempuan' },
        ]

        if (!this.props.bdkiModal) {
            return null;
        }

        return (
            <div>
                <Row>
                    <Modal isOpen={this.props.bdkiModal} size="lg" style={{ padding: '10px', width: '100%' }} >
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
                                            <Input type="text" id="text-input" name="bdkiNama" onChange={this.bdkiChange} value={this.state.bdkiNama} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>2. Tanggal Lahir : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="date" id="text-input" name="bdkiTgl" onChange={this.bdkiChange} value={this.state.bdkiTgl} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>3. Jenis Kelamin :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={jenis_kelamin} name="bdkiJk" onChange={this.bdkiChange} value={this.state.bdkiJk} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>4. NIK :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="number" id="text-input" name="bdkiNIK" onChange={this.bdkiChange} value={this.state.bdkiNIK} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>5. Jenis Peserta :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="read-only" id="text-input" name="bdkiJp" onChange={this.bdkiChange} value={this.state.bdkiJp} placeholder="Peserta Baru" />
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
                                            <Select options={this.state.opt_prov} onChange={this.handleProv} value={this.state.provinsi} isClearable />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Kabupaten/Kota : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_kab} onChange={this.handleKab} value={this.state.kabupaten} isDisabled={this.state.dis_kab} isClearable />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Kecamatan : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_kec} onChange={this.handleKec} value={this.state.kecamatan} isDisabled={this.state.dis_kec} isClearable />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Desa/Kelurahan : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_des} onChange={this.handleDes} value={this.state.desa} isDisabled={this.state.dis_des} isClearable />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Dusun/RW : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_rw} onChange={this.handleRW} value={this.state.rw} isDisabled={this.state.dis_rw} isClearable />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>RT : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_rt} onChange={this.handleRT} value={this.state.rt} isDisabled={this.state.dis_rt} isClearable />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Nomor Rumah</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="number" id="text-input" name="bdkiWil_rumah" onChange={this.bdkiChange} value={this.state.bdkiWil_rumah} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4"></Col>
                                        <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                            <Button className="btn btn-info btnFilter" onClick={e => { this.saveBdki(e) }}> Simpan</Button>
                                        </Col>
                                        <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                            <Button className="btn btn-danger btnFilter" onClick={this.toggleNested}> Reset</Button>
                                        </Col>
                                        <Col md="4"></Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </ModalBody>
                    </Modal>
                </Row>
            </div>
        )
    }
}

export default FormInput
