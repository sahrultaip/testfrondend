import React, { Component } from 'react';
import { CardBody, Col, FormGroup } from 'reactstrap';
// import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';
import API013 from '../../../../../services/API013';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            datas: [],
            data: '',
            profesi: [
                { value: 'dokterKebidananDanKandungan', label: 'Dokter Kebidanan dan Kandungan' },
                { value: 'dokterBedahUrologi', label: 'Dokter Bedah/Urologi' },
                { value: 'profesiUmum', label: 'Dokter Umum' },
                { value: 'profesiBidan', label: 'Bidan' },
                { value: 'profesiPerawat', label: 'Perawat' },
                { value: 'profesiAdministrasi', label: 'Administrasi' },
            ],
            checkbox: [
                {label: 'Tubektomi', value: 'pelatihanTubektomi', name: ''},
                {label: 'Vasektomi', value: 'pelatihanVasektomi', name: ''},
                {label: 'IUD', value: 'pelatihanIUD', name: ''},
                {label: 'Implan 1 Batang', value: 'pelatihanImplan1Batang', name: ''},
                {label: 'Implan 2 Batang', value: 'pelatihanImplan2Batang', name: ''},
                {label: 'KIP/Konseling', value: 'pelatihanKIPKonseling', name: ''},
                {label: 'R/R', value: 'pelatihanRR', name: ''},
            ],
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        var data = JSON.parse(this.props.lihat)
        API013.get('siga/pelayanankb/getTenagaKbByTempatId?tempatPelayananKBId=' + data.tempatPelayananKBId)
        .then(res => {
            console.log('tenaga', res)
            // var arr = [...this.state.datas]
            // var arr = {dt1: JSON.stringify(res.data.map(item => item.nomor)), dt2: JSON.stringify(res.data.map(item => item.tenagaPendaftaranNIK))}
            this.setState({
                datas: [
                    {
                        dt1: res.data.map(item => item.nomor),
                        dt2: res.data.map(item => item.tenagaPendaftaranNIK),
                        dt3: res.data.map(item => item.tenagaPendaftaranNama),
                        // dt4: res.data.map(item => item.tenagaPendaftaranNIK),
                        // dt5: res.data.map(item => item.tenagaPendaftaranNIK),
                    }
                ]
            })
            var profesi = this.state.profesi
            // var cekcok = profesi.map(item => item.value[res.data.filter( item => item === 1) ])
            // console.log('cekcok', cekcok)
            // var cekcok = profesi.filter(item => item.value === 'profesiAdministrasi')
            // var cekcok = profesi.filter(item => item.value === res.data.map( profesi.map(item1 => item1.value) === 1) )
            // console.log('cekcok', cekcok)
            // for (let index = 0; index < profesi.length; index++) {
            //     // const element = array[index];
            //     // var cekcok = res.data.map(item => item[profesi[index].value])
                
            // }
            
            // for (let index = 0; index < res.length; index++) {
            //     // const element = array[index];
            //     var arr = 'tes'
            //     this.setState({
            //         datas: arr
            //     })
                
            //     }
            }
        )
        
    }

    render() {

        console.log('tes123', this.state.data)

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
        ];
        
        return (
            <div>
                <h6> III. TENAGA </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <CardBody style={{ padding: '10px 0' }}>
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