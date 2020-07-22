import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../Commons/Table/Table2Edit';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [
                { id: 1, dt1: 1, dt2: 'Alat Bantu Pengambilan Keputusan (APBK)', dt3: '0', dt4: 'SET' },
                { id: 2, dt1: 2, dt2: 'Buku Panduan Praktis Pelayanan Kontrasepsi (BP3K)', dt3: '0', dt4: 'SET' },
                { id: 3, dt1: 3, dt2: 'Tensimeter', dt3: '0', dt4: 'SET' },
                { id: 4, dt1: 4, dt2: 'Meja Ginekologi', dt3: '0', dt4: 'UNIT' },
                { id: 5, dt1: 5, dt2: 'IUD Kit', dt3: '0', dt4: 'SET' },
                { id: 6, dt1: 6, dt2: 'Implan Removal Kit', dt3: '0', dt4: 'SET' },
                { id: 7, dt1: 7, dt2: 'Vasektomi Kit', dt3: '0', dt4: 'SET' },
                { id: 8, dt1: 8, dt2: 'Minilaparotomi Kit', dt3: '0', dt4: 'SET' },
                { id: 9, dt1: 9, dt2: 'Laparoskopi', dt3: '0', dt4: 'SET' },
                { id: 10, dt1: 10, dt2: 'Ruang Operasi', dt3: '0', dt4: 'Ruang' },
                { id: 11, dt1: 11, dt2: 'Sterilisator', dt3: '0', dt4: 'Unit' },
                { id: 12, dt1: 12, dt2: 'Lampu Periksa', dt3: '0', dt4: 'Unit' },
                { id: 13, dt1: 13, dt2: 'Ruang Konseling KB dan Kesehatan Reproduksi', dt3: '0', dt4: 'Ruang' },
                { id: 14, dt1: 14, dt2: 'Materi Kesehatan Reproduksi', dt3: '0', dt4: 'Buah' },
                { id: 15, dt1: 15, dt2: 'Sarana Komputer/Leptop', dt3: '0', dt4: 'Unit' },
            ],
            open: false,
            jenisCurrent: '',
            satuanCurrent: '',
            jumlahCurrent: '',
            satuanOpt: [
                { value: 'Set', label: 'Set' },
                { value: 'Unit', label: 'Unit' },
                { value: 'Ruang', label: 'Ruang' },
                { value: 'Buah', label: 'Buah' },
            ],
            jenisOpt: [
                { id: 1, value: 'Alat Bantu Pengambilan Keputusan', label: 'Alat Bantu Pengambilan Keputusan' },
                { id: 2, value: 'Buku Panduan Praktis Pelayanan Kontrasepsi', label: 'Buku Panduan Praktis Pelayanan Kontrasepsi'},
                { id: 3, value: 'Tensimeter', label: 'Tensimeter'},
                { id: 4, value: 'Meja Ginekologi', label: 'Meja Ginekologi'},
                { id: 5, value: 'IUD Kit', label: 'IUD Kit' },
                { id: 6, value: 'Implan Removal Kit', label: 'Implan Removal Kit' },
                { id: 7, value: 'Vasektomi Kit', label: 'Vasektomi Kit' },
                { id: 8, value: 'minilaparotomi-kit', label: 'Minilaparotomi Kit' },
                { id: 9, value: 'Laparoskopi', label: 'Laparoskopi' },
                { id: 10, value: 'Ruang Operasi', label: 'Ruang Operasi' },
                { id: 11, value: 'Sterilisator', label: 'Sterilisator' },
                { id: 12, value: 'Lampu Periksa', label: 'Lampu Periksa' },
                { id: 13, value: 'Ruang Konseling KB dan Kesehatan Reproduksi', label: 'Ruang Konseling KB dan Kesehatan Reproduksi' },
                { id: 14, value: 'Materi Kesehatan Reproduksi', label: 'Materi Kesehatan Reproduksi' },
                { id: 15, value: 'Sarana Komputer/Leptop', label: 'Sarana Komputer/Leptop' },
            ], 
            valOpt: [],
        }
    }


    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    changeOption = (e) => {
        if(e){
            console.log(e)
            this.setState({
                valOpt: e, 
            })
        }
        else {
            this.setState({
                valOpt: []
            })
        }
    }

    inputJumlah = (e) => {
        // console.log(e.target.value)
        if(e){
            this.setState({
                jumlahCurrent: e.target.value
            })
        }
        else {
            this.setState({
                jumlahCurrent: ''
            })
        }
    }

    handleSubmit = () => {
        if(this.state.valOpt){
            var jmlh = document.getElementById('jumlah').value;
            var newArr = [...this.state.datas]
            var index = newArr.findIndex(obj => obj.id === this.state.valOpt.id);
            newArr[index].dt3 = jmlh
            this.setState({
                newArr,
                valOpt: []
            })
            document.getElementById('jumlah').value = '';
        }
    }

    deleteJumlah = (e) => {
        console.log('e', e)
        console.log('e target', e.altKey)
    }

    updateData = () => {}

    resetData = () => {
        document.getElementById('jumlah').value='';
        this.setState({
            valOpt: []
        })
    }

    render() {

        // const satuan = [
        //     { value: 'set', label: 'Set' },
        //     { value: 'unit', label: 'Unit' },
        //     { value: 'ruang', label: 'Ruang' },
        //     { value: 'buah', label: 'Buah' },
        // ]

        // const satuan = this.state.satuanOpt.map((data) =>
        //         <option value={data.value} >{data.label}</option>
        //     )

        // const jenis = this.state.jenisOpt.map((data) =>
        //     <option value={data.value} >{data.label}</option>
        // ) 

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
            {
                dataField: 'dt5',
                text: 'Aksi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '90px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <i className="icon-pencil" style={{ fontSize: '0.875rem' }}> </i>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <i className="icon-cross2" onClick={this.deleteJumlah} style={{ fontSize: '0.875rem' }}> </i>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        // console.log(row)
                        //   this.setState({modalTitle: row.plant})
                        //   this.toggleModal();
                    },
                }
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
                            <Col md="4" lg="2">
                                <Label htmlFor="text-input">Input Data</Label>
                                <Button className="btn btn-info ml-5" onClick={this.toggle} ><i className="icon-plus2"></i></Button>
                            </Col>
                        </FormGroup>
                            <Collapse isOpen={this.state.open}>
                                <FormGroup row>
                                    <Col md="2">
                                        <Label htmlFor="text-input">Jenis Perlengkapan</Label>
                                    </Col>
                                    <Col xs="12" md="6">
                                        {/* <Input type="select" name="select" id="jenis" defaultValue={ this.state.jenisCurrent }>
                                            <option value="">Jenis Satuan</option>
                                            {jenis}
                                        </Input> */}
                                        <Select options={this.state.jenisOpt} value={this.state.valOpt} onChange={this.changeOption} isClearable
                                        // isClearable={} 
                                        id="jenis" placeholder="Jenis Perlengkapan" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row >
                                    
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Label htmlFor="text-input">Jumlah Yang Bisa Dipakai</Label>
                                    </Col>
                                    <Col xs="6" md="2" style={{ paddingTop: '10px' }}>
                                        <Input type="number" onChange={this.inputJumlah} Value={this.state.jumlahCurrent} id="jumlah" name="text-input" />
                                    </Col>
                                    {/* <Col xs="6" md="2" style={{ paddingTop: '10px' }}>
                                        <Input type="select" name="select" id="satuan" defaultValue={ this.state.satuanCurrent }>
                                            <option value="">Jenis Satuan</option>
                                            {satuan}
                                        </Input>
                                    </Col> */}
                                    <Col xs="6" md="1" lg="1" className="my-2">
                                        <Input type="submit" onClick={ this.handleSubmit } className="btn btn-info btnFilter" value="Simpan" />
                                    </Col>
                                    <Col xs="6" md="1" lg="1" className="my-2">
                                        <Button className="btn btn-danger btnFilter" onClick={this.resetData}>Reset</Button>
                                        {/* <Input type="reset" onClick={this.resetData} className="btn btn-danger btnFilter" value="Reset" /> */}
                                    </Col>
                                </FormGroup>
                            </Collapse>
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