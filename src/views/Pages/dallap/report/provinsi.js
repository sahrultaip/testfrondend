import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Table2Edit from '../../../Commons/Table/Table2Edit';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

class Provinsi extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            datas: [
                { id: 1, dt1: '11', dt2: <Link to="/lap/DetailDallap/kabupaten?kabupaten=ACEH TENGGARA&provinsi=ACEH">ACEH TENGGARA</Link>, dt3: 23, dt4: 12, dt5: 33, dt6: 99, dt7:23,dt8:7.92 },
                { id: 2, dt1: '12', dt2: <Link to="/lap/DetailDallap/kabupaten?kabupaten=ACEH SELATAN">ACEH SELATAN</Link>, dt3: 31, dt4: 54, dt5: 92, dt6: 55,dt7:45,dt8:6.55 },
            ],
            datas2: [
                { id: 1, dt1: '11', dt2: "ACEH TENGGARA", dt3: 23, dt4: 12, dt5: 33, dt6: 99, dt7:7.92 },
                { id: 2, dt1: '12', dt2: "ACEH SELATAN", dt3: 31, dt4: 54, dt5: 92, dt6: 55,dt7:6.55 },
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
    
        const title = "Dallap Laporan Cakupan Potensi Wilayah";

        const headers = [
            ["KODE", "Kabupaten","Kecamatan","Desa / Kelurahan","Dusun / RW","RT","Rasio PKB dan PLKB terhadap Desan / Kelurahan"]
        ];
    
        const data = this.state.datas2.map(elt=> [elt.dt1, elt.dt2, elt.dt3, elt.dt4, elt.dt5, elt.dt6, elt.dt7]);
    
        const styles = {
            lineWidth: 1,
        };
        
        let content = {
        startY: 50,
        head: headers,
        body: data,
        styles: styles
        };
        
        doc.text(title, 200, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }
    
    handleSelect(key) {
        console.log('selected' + key);
        this.setState({ key: key });
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        

        const columns = [
            {
                dataField: 'dt1',
                text: 'Kode',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                footer: '',
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'Kabupaten',
                headerAlign: 'center',
                editable: false,
                footer: 'JUMLAH',
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Kecamatan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                footer: columnData => columnData.reduce
                (
                    (acc, item) =>  acc+item, 0
                ),
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'Desa / Kelurahan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                footer: columnData => columnData.reduce
                (
                    (acc, item) =>  acc+item, 0
                ),
                headerStyle: (colum, colIndex) => {
                    return { width: '90px' };
                },
            },
            {
                dataField: 'dt6',
                text: 'Dusun/RW',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                footer: columnData => columnData.reduce
                (
                    (acc, item) =>  acc+item, 0
                ),
                headerStyle: (colum, colIndex) => {
                    return { width: '80px' };
                },
            },
            {
                dataField: 'dt7',
                text: 'RT',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                footer: columnData => columnData.reduce
                (
                    (acc, item) =>  acc+item, 0
                ),
                headerStyle: (colum, colIndex) => {
                    return { width: '130px' };
                },
            },
            {
                dataField: 'dt8',
                text: 'Rasio PKB dan PLKB Terhadap Desan/Kel',
                headerAlign: 'center',
                align: 'left',
                // footer: 'Rasio : 0.5',
                footer: columnData => columnData.reduce
                (
                    (acc, item) => 'Rasio : ' + ((acc+item) / columnData.length).toFixed(1)
                ),
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
        ];
        
        function refreshPage(){ 
            window.location.reload(); 
        }
        
        return (
            
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan Dallap Provinsi</div>
                                    </Col>
                                    <Col xs="12" md="8" className='text-right'>
                                        <button className="btn btn-primary" onClick={() => this.exportPDF()}>Generate PDF</button>&nbsp;
                                        <Link className="btn btn-primary">Excel</Link>&nbsp;
                                        <div className="btn btn-success" onClick={ refreshPage }>Refresh <i className="fa fa-refresh"></i></div>&nbsp;
                                    </Col>
                                    <Col xs="12" md="8" className='text-right'>
                                        &nbsp;
                                    </Col>
                                </Row>
                                    <Row>
                                        <Col md="8">
                                            <Table2Edit
                                                caption=''
                                                tableHead={columns}
                                                datas={this.state.datas}
                                            />
                                        </Col>
                                </Row>
                                <Col xs="4">
                                    <Link to="/lap/DetailDallap" className="btn btn-primary">Kembali</Link>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Provinsi;
