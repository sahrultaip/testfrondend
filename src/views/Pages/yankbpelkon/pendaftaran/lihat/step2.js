import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup} from 'reactstrap';
// import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [
                { val: 'jumlahAlatBantuPengambilanKeputusan', dt1: 1, dt2: 'Alat Bantu Pengambilan Keputusan (APBK)', dt3: '0', dt4: 'SET' },
                { val: 'jumlahBukuPanduanPraktisPelayananKontrasepsi', dt1: 2, dt2: 'Buku Panduan Praktis Pelayanan Kontrasepsi (BP3K)', dt3: '0', dt4: 'SET' },
                { val: 'jumlahTensiMeter', dt1: 3, dt2: 'Tensimeter', dt3: '0', dt4: 'SET' },
                { val: 'jumlahMejaGinekologi', dt1: 4, dt2: 'Meja Ginekologi', dt3: '0', dt4: 'UNIT' },
                { val: 'jumlahIUDKit', dt1: 5, dt2: 'IUD Kit', dt3: '0', dt4: 'SET' },
                { val: 'jumlahImplanRemovalKit', dt1: 6, dt2: 'Implan Removal Kit', dt3: '0', dt4: 'SET' },
                { val: 'jumlahVasektomiKit', dt1: 7, dt2: 'Vasektomi Kit', dt3: '0', dt4: 'SET' },
                { val: 'jumlahMinilaparotomiKit', dt1: 8, dt2: 'Minilaparotomi Kit', dt3: '0', dt4: 'SET' },
                { val: 'jumlahLaparoskopi', dt1: 9, dt2: 'Laparoskopi', dt3: '0', dt4: 'SET' },
                { val: 'jumlahRuangOperasi', dt1: 10, dt2: 'Ruang Operasi', dt3: '0', dt4: 'Ruang' },
                { val: 'jumlahSterillisator', dt1: 11, dt2: 'Sterilisator', dt3: '0', dt4: 'Unit' },
                { val: 'jumlahLampuPeriksa', dt1: 12, dt2: 'Lampu Periksa', dt3: '0', dt4: 'Unit' },
                { val: 'jumlahRuangKonselingKBdanKesehatanReproduksi', dt1: 13, dt2: 'Ruang Konseling KB dan Kesehatan Reproduksi', dt3: '0', dt4: 'Ruang' },
                { val: 'jumlahMateriKesehatanReporduksi', dt1: 14, dt2: 'Materi Kesehatan Reproduksi', dt3: '0', dt4: 'Buah' },
                { val: 'jumlahSaranaKomputerLaptop', dt1: 15, dt2: 'Sarana Komputer/Leptop', dt3: '0', dt4: 'Unit' },
            ],
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        var  data = JSON.parse(this.props.lihat)
        var newArr = [...this.state.datas]

        for (let index = 0; index < newArr.length; index++) {
            var element = newArr[index].val
            newArr[index].dt3 = data[element]
            this.setState({
                newArr
            })
        }
        
    }

    render() { 

        const columns = [
            {
                dataField: 'dt1',
                text: 'No.',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'Jenis Perlengkapan',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Jumlah Yang Dipakai',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Satuan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
        ];

        return (
            <div>
                <h6>II. SARANA DAN PERLENGKAPAN </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row >
                    <Col md="12">
                        <CardBody style={{ padding: '10px 0',  }}>
                        <FormGroup row>
                            <Col md="8">
                                <Table2Edit
                                    caption=''
                                    tableHead={columns}
                                    datas={this.state.datas}
                                />
                            </Col>
                        </FormGroup>
                            
                        </CardBody>
                    </Col>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step2;