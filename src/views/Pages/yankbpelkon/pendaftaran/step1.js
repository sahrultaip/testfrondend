import React, { Component } from 'react';
import {CardBody, Col, Row, FormGroup, Label, Input, TabPane, TabContent, Button } from 'reactstrap';
import Select from 'react-select';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noRegisterFaskesKb: null,
            hidden_noRegisterFaskesKb: false,
            noJaringanJejaring: null,
            jenisFaskesKb: [
                {value: '1', label: 'STATIS'},
                {value: '2', label: 'BERGERAK'},
            ],
            select1: null,
            show_jenisFaskesKb: [],
            hidden_jenisFaskesKb: true,
            tingkatFaskesKb : [
                {value: '11', label: 'FKRTL', kd_jenisFaskesKb: '1' },
                {value: '12', label: 'FKTP', kd_jenisFaskesKb: '1' },
                {value: '13', label: 'JARINGAN', kd_jenisFaskesKb: '2' },
                {value: '14', label: 'JEJARING', kd_jenisFaskesKb: '2' },
                {value: '15', label: 'MUYAN', kd_jenisFaskesKb: '3'},
                {value: '16', label: 'KAPAL LAUT', kd_jenisFaskesKb: '3'},
            ],
            select2: null,
            show_tingkatFaskesKb: [],
            hidden_tingkatFaskesKb: true,
            tingkatPelayanan: [
                {value: '21', label: 'KLINIK UTAMA', kd_tingkatFaskesKb: '11' },
                {value: '22', label: 'RS UMUM', kd_tingkatFaskesKb: '11'},
                {value: '23', label: 'RS KHUSUS', kd_tingkatFaskesKb: '11'},
                {value: '24', label: 'PUSKESMAS', kd_tingkatFaskesKb: '12'},
                {value: '25', label: 'PRAKTIK DOKTER', kd_tingkatFaskesKb: '12'},
                {value: '26', label: 'KLINIK PRATAMA', kd_tingkatFaskesKb: '12'},
                {value: '27', label: 'RS TIPE D PRATAMA', kd_tingkatFaskesKb: '12'},
                {value: '28', label: 'PUSTU', kd_tingkatFaskesKb: '13'},
                {value: '29', label: 'PUSLING', kd_tingkatFaskesKb: '13'},
                {value: '30', label: 'POSKESDES/POLINDES', kd_tingkatFaskesKb: '13'},
                {value: '31', label: 'PRAKTEK BIDAN', kd_tingkatFaskesKb: '14'},
            ],
            select3: null,
            show_tingkatPelayanan: [],
            hidden_tingkatPelayanan: true,
            select4: null,
            statusKepemilikan : [],
            hidden_statusKepemilikan: true,

            show_kbPerusahaan: [{ value: 'ya', label: 'Ya' }, { value: 'tidak', label: 'TIDAK' },],
            kbPerusahaan: null,
            hidden_kbPerusahaan: true,
            show_pkbrs: [{ value: 'ya', label: 'Ya' },{ value: 'tidak', label: 'TIDAK' },],
            pkbrs: null,
            hidden_pkbrs: true,

            kerjasamaBpjs: [{ value: 'ya', label: 'Ya' },{ value: 'tidak', label: 'TIDAK' },],
            kerjasamaBpjsLsngTdk: [],
            selKerjasamaBpjs: true,
            valKerjasamaBpjs: null,
            selKerjasamaBpjsLsngTdk: true,
            valKerjasamaBpjsLsngTdk: null,
            activeTab: '',
            
        }
    }

    // input nomor faskes kb
    inputFaskeskb = (e) => {
        if(e.target.value){
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
            this.setState({
                noRegisterFaskesKb: e.target.value,
                show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '1'),
                hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan : [],
                hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''


            })
        }
        else{
            this.setState({
                show_jenisFaskesKb: [], select1: null, hidden_jenisFaskesKb: true, 
                show_tingkatFaskesKb: [], select2: null, hidden_tingkatFaskesKb: true,
                show_tingkatPelayanan: [], select3: null, hidden_tingkatPelayanan: true,
                select4: null, statusKepemilikan : [], hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
            })
        }
    }
    

    // input jaringan jejaring
    JaringanJejaring = (e) => {
        if(e.target.value){
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
            this.setState({
                hidden_noRegisterFaskesKb: true,
                noJaringanJejaring: e.target.value,
                show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '1'),
                hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan : [],
                hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
            })
        }
        else {
            this.setState({
                hidden_noRegisterFaskesKb: false, noJaringanJejaring: null,
                select1: null, show_tingkatFaskesKb: [], select2: null, hidden_tingkatFaskesKb: true,
                show_tingkatPelayanan: [], statusKepemilikan : [], select3: null, hidden_tingkatPelayanan: true, select4: null,
                hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
                 
 
            })
        }
    }

    // Jenis Faskes KB
    changeSel1 = (e) => {
        if(e){
            if(this.state.noRegisterFaskesKb){
                if(this.state.noJaringanJejaring){
                    this.setState({
                        show_tingkatFaskesKb: this.state.tingkatFaskesKb.filter(item => item.kd_jenisFaskesKb === '2'),
                        hidden_tingkatFaskesKb: false, hidden_tingkatPelayanan: true, select1: e, select2: null, select3: null
                    })
                }
                else {
                    this.setState({
                        show_tingkatFaskesKb: this.state.tingkatFaskesKb.filter(item => item.kd_jenisFaskesKb === '1'),
                        hidden_tingkatFaskesKb: false, hidden_tingkatPelayanan: true, select1: e, select2: null, select3: null
                    })
                }
            }
            
        } else {
            this.setState({
                show_tingkatFaskesKb: [], hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, select1: null, select2: null, select3: null,
                select4: null, hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: '', hidden_pkbrs: true, hidden_kbPerusahaan: true,
            })
        }
    }

    // Jenis tinggkat faskes kb
    changeSel2 = (e) => {
        if (e) {
            if(e.kd_jenisFaskesKb === '1' || e.kd_jenisFaskesKb === '2'){
                this.setState({
                    show_tingkatPelayanan: this.state.tingkatPelayanan.filter(item => item.kd_tingkatFaskesKb === e.value),
                    hidden_tingkatPelayanan: false, select2: e, select3: null
                })
            } else {
                this.setState({
                    show_tingkatPelayanan: [], select2: e, select3: null, select4: null, hidden_statusKepemilikan: true,
                    kbPerusahaan: null, pkbrs: null, 
                })   
            }
        }
        else {
            this.setState({
                show_tingkatPelayanan: [], select2: null, hidden_tingkatPelayanan: true, select3: null, select4: null, 
                hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: '', hidden_pkbrs: true, hidden_kbPerusahaan: true,
            })
        }
    }

    // Jenis tingkat pelayan
    changeSel3 = (e) => {
        if(e){
            if(e.value === '21'){
                this.setState({
                    statusKepemilikan: [{value: '', label: 'BUMN/BUMD'}, {value: '', label: 'SWASTA'},{value: '', label: 'LSOM'},],
                    select3: e,  hidden_statusKepemilikan: false, 
                })
            }
            else if(e.value === '22' || e.value === '23'){
                this.setState({
                    statusKepemilikan: [{value: '', label: 'KEMENKES PUSAT'}, {value: '', label: 'DINKES PROVINSI'},
                                        {value: '', label: 'DINKES KAB/KOTA'}, {value: '', label: 'TNI'}, {value: '', label: 'POLRI'},
                                        {value: '', label: 'BUMN/BUMD'}, {value: '', label: 'SWASTA'}, {value: '', label: 'LSOM'},],
                    select3: e, hidden_statusKepemilikan: false, 
                })
            }
            else if (e.value === '24') {
                this.setState({
                    statusKepemilikan: [{value: '', label: 'DINKES KABUPATEN/KOTA'}], select3: e, hidden_statusKepemilikan: false,
                })
            }
            else if (e.value === '25'){
                this.setState({
                    statusKepemilikan: [{value: '', label: 'SWASTA'}], select3: e, hidden_statusKepemilikan: false,
                })
            }
            else if (e.value === '26'){
                this.setState({
                    statusKepemilikan: [{value: '', label: 'KEMENKES PUSAT'}, {value: '', label: 'DINKES PROVINSI'}, 
                                        {value: '', label: 'DINKES KAB/KOTA'},{value: '', label: 'TNI'}, {value: '', label: 'POLRI'}, 
                                        {value: '', label: 'BUMN/BUMD'}, {value: '', label: 'SWASTA'}, {value: '', label: 'LSOM'},],
                    select3: e, hidden_statusKepemilikan: false,
                })
                
            }
            else if (e.value === '27'){
                this.setState({
                    statusKepemilikan: [{value: '', label: 'KEMENKES PUSAT'}, {value: '', label: 'DINKES PROVINSI'}, 
                                        {value: '', label: 'DINKES KAB/KOTA'},{value: '', label: 'TNI'}, {value: '', label: 'POLRI'}, 
                                        {value: '', label: 'BUMN/BUMD'}, {value: '', label: 'SWASTA'}, {value: '', label: 'LSOM'},],
                    select3: e, hidden_statusKepemilikan: false,
                })
            }
            else if (e.value === '28' || e.value === '29' || e.value === '30') {
                this.setState({
                    statusKepemilikan: [{value: '', label: 'DINKES KAB/KOTA'}], select3: e, hidden_statusKepemilikan: false,
                })
            }
            else if (e.value === '31') {
                this.setState({
                    statusKepemilikan: [{value: '', label: 'SWASTA'}], select3: e, hidden_statusKepemilikan: false,
                })
            }
        }
        else {
            this.setState({
                statusKepemilikan: [], select3: null, select4: null, hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: '', hidden_pkbrs: true, hidden_kbPerusahaan: true,
            })
        }
    }

    changeSel4 = (e) => {
        if(e){
            if(this.state.select3.value === '21'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if (this.state.select3.value === '22' || this.state.select3.value === '23'){
                this.setState({
                    select4: e, 
                    kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], 
                    // pkbrs: [{ value: 'ya', label: 'Ya' }],
                    hidden_pkbrs: false,
                    // selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '24'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '25'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '26'){
                // if(e.label === 'KEMENKES PUSAT' || e.label === 'DINKES PROVINSI' || e.label === 'DINKES KAB/KOTA' || e.label === 'TNI' || e.label === 'POLRI'){
                    this.setState({
                        select4: e, 
                        // kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], 
                        pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                        hidden_kbPerusahaan: false,
                    })
                // }
                // else if(e.label === 'BUMN/BUMD' || e.label === 'SWASTA' || e.label === 'LSOM'){
                //     this.setState({
                //         select4: e, kbPerusahaan: [{ value: 'ya', label: 'Ya' }], pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                //         selKerjasamaBpjs: false
                //     })
                // }
            }
            else if(this.state.select3.value === '27'){
                this.setState({
                    select4: e, 
                    kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], 
                    // pkbrs: [{ value: 'ya', label: 'Ya' }],
                    hidden_pkbrs: false,
                })
            } 
            else if(this.state.select3.value === '28' || this.state.select3.value === '29' || this.state.select3.value === '30') {
                this.setState({
                    select4: e, kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '31'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
        }
        else {
            this.setState({
                select4: null, kbPerusahaan: null, pkbrs: null, 
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, hidden_pkbrs: true, hidden_kbPerusahaan: true, activeTab: ''
            })
        }
    }

    // selKerjasamaBpjs: true,
    // selKerjasamaBpjsLsngTdk: true,

    changeKbPerusahaan = (e) => {
        if(e){
            if(this.state.select3.value === '26'){
                this.setState({
                    kbPerusahaan: e, selKerjasamaBpjs: false
                })
            }
        }
        else {
            this.setState({
                kbPerusahaan: [], selKerjasamaBpjs: true
            })
        }
    }

    changeSelPkbrs = (e) => {
        if(e){
            if(this.state.select3.value === '22' || this.state.select3.value === '23') {
                this.setState({
                    pkbrs: e, selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '27') {
                this.setState({
                    pkbrs: e, selKerjasamaBpjs: false
                })
            }
        }
        else{
            this.setState({
                pkbrs: [], selKerjasamaBpjs: true, selKerjasamaBpjsLsngTdk: true, kerjasamaBpjsLsngTdk: [],
                valKerjasamaBpjs: null, valKerjasamaBpjsLsngTdk: null, activeTab: ''
            })
        }
        console.log(e)
    }

    option4 = (e) => {
        // console.log(e.value)
        if(e){
            if(e.value === 'ya'){
                if(this.state.noJaringanJejaring){
                    this.setState({
                        kerjasamaBpjsLsngTdk: [{ value: 'tidak_langsung', label: 'Tidak Langsung' }], selKerjasamaBpjsLsngTdk: false, valKerjasamaBpjs: e
                    })
                }
                else if (this.state.noRegisterFaskesKb) {
                    this.setState({
                        kerjasamaBpjsLsngTdk: [{ value: 'langsung', label: 'Langsung' }], selKerjasamaBpjsLsngTdk: false, valKerjasamaBpjs: e
                    })
                }
            }
            else if(e.value === 'tidak') {
                this.setState({
                    kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: e, valKerjasamaBpjsLsngTdk: null, activeTab: ''
                })
            }
        }
        else{
            this.setState({
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, valKerjasamaBpjsLsngTdk: null, activeTab: ''
            })
        }
    }

    option5 = (e) => {
        if (e === null){
            this.setState({
                activeTab: '', valKerjasamaBpjsLsngTdk: null
            })
        } else if (e.value === 'langsung'){
            this.setState({
                activeTab: '1', valKerjasamaBpjsLsngTdk: e
            })
        } else if (e.value === 'tidak_langsung'){
            this.setState({
                activeTab: '2', valKerjasamaBpjsLsngTdk: e
            })
        }
    }


    render() {
        return (
            <div>
                <Row>
                    <Col sm="12">
                        <Row>
                            <Col md="3"></Col>
                            
                            <Col md="6" style={{ textAlign: 'center' }}>
                            <CardBody>
                                <h6>KARTU PENDAFTARAN TEMPAT PELAYANAN KB</h6>
                                <Row>
                                    <Col md="3" xs="6" style={{ textAlign: 'center' }} >
                                        <Row>
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" value={this.props.kd_prov} disabled/>
                                        </Row>
                                        <Row >
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>Kode Provinsi</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" value={this.props.kd_kab} disabled/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>Kode Kabupaten/Kota</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input type="number" 
                                            // onInput = {(e) =>{
                                            //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
                                            // }}
                                            onInput={this.inputFaskeskb}
                                            disabled={this.state.hidden_noRegisterFaskesKb}
                                            style={{ marginRight: '5px', textAlign: 'center' }} id="text-input" name="text-input" />
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>No. Register Faskes KB</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input type="number" 
                                            // onInput = {(e) =>{
                                            //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                                            // }}
                                            onInput={this.JaringanJejaring}
                                            style={{ marginRight: '5px', textAlign: 'center' }} id="text-input" name="text-input"/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>No. Jaringan/Jejaring Faskes KB</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                        <CardBody className="card-body-nopad">
                        <h6>I. Identitas </h6>
                        <div style={{position:'absolute', right: '20px', marginTop:'-30px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label className="labelForm">1. Nama Tempat Pelayan KB</Label>
                                    </Col>
                                    <Col md="4">
                                        <Input type="text" id="text-input" name="text-input" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <Label style={{ marginTop: '10px' }} className="labelForm">2. Alamat</Label>
                                        <Row>
                                            <Col md="4" xs="12" style={{ paddingTop: '10px' }}>
                                                <Label className="labelForm">a. Jalan :</Label>
                                            </Col>
                                            <Col md="4" style={{ paddingTop: '10px' }}>
                                                <Input type="text" id="text-input" name="text-input" />
                                            </Col>
                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                <Row>
                                                    <Col md="3" xs="4"><Label className="labelForm">RT</Label></Col>
                                                    <Col md="9" xs="8"><Input type="read-only" id="text-input" name="text-input" value={this.props.rt} /></Col>
                                                </Row>
                                            </Col>
                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                <Row>
                                                    <Col md="3" xs="4"><Label className="labelForm">RW</Label></Col>
                                                    <Col md="9" xs="8"><Input type="read-only" id="text-input" name="text-input" value={this.props.rw} /></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>b. Desa/Kelurahan :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.desa} />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.kd_des} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>c. Kecamatan :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.kecamatan} />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.kd_kec} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>d. Kabupaten :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.kabupaten} />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.kd_kab} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>e. Provinsi :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.provinsi} />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.props.kd_prov} />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{ paddingTop: '20px' }}>
                                    <Col md="4" style={{ paddingTop: '10px' }}>
                                        <Label>3. Jenis</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.show_jenisFaskesKb} onChange={this.changeSel1} placeholder="Jenis Faskes KB" value={this.state.select1} isDisabled={this.state.hidden_jenisFaskesKb} isClearable />
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.show_tingkatFaskesKb} onChange={this.changeSel2} placeholder="Jenis Tingkat Faskes KB" value={this.state.select2} isDisabled={this.state.hidden_tingkatFaskesKb} isClearable />
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.show_tingkatPelayanan} onChange={this.changeSel3} placeholder="Jenis Tingkat Pelayanan" value={this.state.select3} isDisabled={this.state.hidden_tingkatPelayanan} isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md='4' style={{ paddingTop: '10px' }}>
                                        <Label>4. Kepemilikan</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.statusKepemilikan} onChange={this.changeSel4} value={this.state.select4} isDisabled={this.state.hidden_statusKepemilikan} placeholder="Status Kepemilikan" isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md='4' style={{ paddingTop: '10px' }}>
                                        <Label>5. Apakah faskes KB termasuk pada:</Label>
                                    </Col>
                                    <Col md="1" style={{ paddingTop: '10px' }}>
                                        <Label>KB Perusahaan</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.show_kbPerusahaan} isDisabled={this.state.hidden_kbPerusahaan} onChange={this.changeKbPerusahaan} value={this.state.kbPerusahaan} isClearable />
                                    </Col>
                                    <Col md="1" style={{ paddingTop: '10px' }}>
                                        <Label>PKBRS</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.show_pkbrs} isDisabled={this.state.hidden_pkbrs} onChange={this.changeSelPkbrs} value={this.state.pkbrs} isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md="4" xs="12" style={{ paddingTop: '10px' }}>
                                        <Label>6. Kerjasama Dengan BPJS Kesehatan </Label>
                                        <Label style={{ paddingLeft: '10px'}}>(pilih Ya atau Tidak, jika Ya, maka pilih Langsung atau Tidak Langsung, selanjutnya isi No. PKS, masa berlaku PKS dan no. registernya pada BPJS Kesehatan)</Label>
                                    </Col>
                                    <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.kerjasamaBpjs} isDisabled={this.state.selKerjasamaBpjs} value={this.state.valKerjasamaBpjs} onChange={this.option4} isClearable />    
                                    </Col>
                                    <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.kerjasamaBpjsLsngTdk} isDisabled={this.state.selKerjasamaBpjsLsngTdk} value={this.state.valKerjasamaBpjsLsngTdk} onChange={this.option5} onSele isClearable />    
                                    </Col>
                                </Row>

                                <TabContent style={{ border: 'none' }} activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row style={{ marginTop: '5px' }}>
                                            <Col md="4"></Col>
                                            <Col md="4">
                                                <Label>Langsung</Label>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. PKS : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Awal : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Akhir : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. Register : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row style={{ marginTop: '5px' }}>
                                            <Col md="4"></Col>
                                            <Col md="4">
                                                <Label>Tidak Langsung</Label>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. PKS : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Awal : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Akhir : </Label>
                                                    </Col>
                                                    <Col md="5">
                                                        <Input type="text" id="text-input" name="text-input" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>

                            </FormGroup>
                        </CardBody>
                    </Col>
                </Row>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button>
                    <Button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</Button>
                </div>
            </div>
        )
    }
}

export default Step1;