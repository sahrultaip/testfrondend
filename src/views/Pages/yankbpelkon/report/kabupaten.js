import React, { Component } from 'react';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import { tableOptions } from '../../../Commons/Table/TableOptions';
import { Link } from 'react-router-dom';
import TableEditCell from '../../../Commons/Table/TableFooter';
import { POSITION } from '../../../Constants/Position';
import { Row,Col,Card,CardBody } from 'reactstrap';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import queryString from 'query-string';

class Kabupaten extends Component {	
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.CellFormatter = this.CellFormatter.bind(this);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            tableHead: [],
            datas: [
                { id: 1, kode: 11,provinsi: 'BAKONGAN',jmlhTempatPelKb:2323,jmlhFKTRL:310,klinikUtama:291,rsUmum:300,rsKhusus:400,jumlahFKTP:289,puskesmas:192,praktekDokter:255,klinikPratama:90,rsTipeD:400,jumlahJaringan:120,pustu:301,pusling:532,praktikBidan:90,poskendes:34},
                { id: 2, kode: 12,provinsi:'KLUET UTARA',jmlhTempatPelKb:2323,jmlhFKTRL:310,klinikUtama:291,rsUmum:300,rsKhusus:400,jumlahFKTP:289,puskesmas:192,praktekDokter:255,klinikPratama:90,rsTipeD:400,jumlahJaringan:120,pustu:301,pusling:532,praktikBidan:90,poskendes:34}
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    CellFormatter(cell, row) {
    return (<div><Link to={`/lap/DetailYankb/provinsi?=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
        
        const title = "YANKB Laporan Tempat Pelayanan KB Berdasarkan Jenis";
        const headers = [
            [
                { content: 'Kode', rowSpan: 3, styles: { halign: 'center' } },
                { content: 'Kabupaten', rowSpan: 3, styles: { halign: 'center' } },
                { content: 'Tempat Pelayanan KB', rowSpan: 3, styles: { halign: 'center' } },
                { content: 'TEMPAT PELAYANAN KB BERDASARKAN JENIS', colSpan: 14, styles: { halign: 'center' } },
            ],[
                { content: 'FKRTL Berdasarkan Jenis',colSpan: 4, styles: { halign: 'center' } },
                { content: 'FKTP Berdasarkan Jenis', colSpan: 4, styles: { halign: 'center' } },
                { content: 'Jaringan Berdasarkan Jenis',colSpan: 5, styles: { halign: 'center' } },
                { content: 'Jejaring',colSpan: 1, styles: { halign: 'center' } },
            ],[
                { content: 'Jumlah FKRTL',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Klinik Utama',colSpan: 1, styles: { halign: 'center' } },
                { content: 'RS Umum',colSpan: 1, styles: { halign: 'center' } },
                { content: 'RS Khusus',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Jumlah FKTP',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Puskesmas',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Praktek Dokter',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Klinik Pratama',colSpan: 1, styles: { halign: 'center' } },
                { content: 'RS Tipe D Pratama',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Jumlah Jaringan',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Pustru',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Pusling',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Poskendes / Polindes',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Praktik Bidan',colSpan: 1, styles: { halign: 'center' } },
            ]
        ];
    
        const data = this.state.datas.map(elt=> [elt.kode, elt.provinsi, elt.jmlhTempatPelKb, elt.jmlhFKTRL, elt.klinikUtama, elt.rsUmum, elt.rsKhusus, elt.jumlahFKTP, elt.puskesmas, elt.praktekDokter, elt.klinikPratama, elt.rsTipeD, elt.jumlahJaringan, elt.pustu, elt.pusling, elt.praktikBidan, elt.poskendes]);
    
        const styles = {
            overflow: 'linebreak',
            font: 'arial',
            fontSize: 9,
            lineWidth: 1,
            // cellPadding: 0,
            overflowColumns: 'linebreak'
        };
        
        let content = {
        startY: 50,
        head: headers,
        body: data,
        styles: styles
        };
    
        doc.text(title, 280, 40);
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

    componentDidMount() {
        this.setHead();
        this.setBody();
    }
    
    
    setHead() {
        var headerColumns = [
            { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
            { width:"140",dataField:'provinsi',title: "Kabupaten", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
            { width:"130",dataField:'jmlhTempatPelKb',title: "Jumlah Tempat Pelayanan KB", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
            { width:"80",title: "TEMPAT PELAYANAN KB BERDASARKAN JENIS", row: '0', colSpan: '14', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width:"80",title: "FKRTL BERDASARKAN JENIS", row: '1',colSpan:'4', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width:"75",title: "FKTP BERDASARKAN JENIS", row: '1',colSpan:'4', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width:"80",title: "JARINGAN BERDASARKAN JENIS", row: '1',colSpan:'5', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width:"80",title: "Jejaring", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width:"100",dataField:'jmlhFKTRL',title: "Jumlah FKRTL", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
            { width:"90",dataField:'klinikUtama',title: "Klinik Utama", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"80",dataField:'rsUmum',title: "RS Umum", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"80",dataField:'rsKhusus',title: "RS Khusus", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"100",dataField:'jumlahFKTP',title: "Jumlah FKTP", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"90",dataField:'puskesmas',title: "Puskesmas", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"100",dataField:'praktekDokter',title: "Praktek Dokter", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"100",dataField:'klinikPratama',title: "Klinik Pratama", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"80",dataField:'rsTipeD',title: "RS Tipe D Pratama", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"80",dataField:'jumlahJaringan',title: "Jumlah Jaringan", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"65",dataField:'pustu',title: "Pustu", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"65",dataField:'pusling',title: "Pusling", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"100",dataField:'poskendes',title: "Poskendes / Polindes", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
            { width:"100",dataField:'praktikBidan',title: "Praktik Bidan", row: '2',colSpan:'1', headerAlign: POSITION.RIGHT, dataAlign: POSITION.RIGHT },
        ];
        this.setState({ tableHead: this.state.tableHead.concat(headerColumns) });
    }

    setBody() {
        this.setState({blocking: true});
        // this.setState({ datas: [] });
    }


    render() {                
        let url = this.props.location.search;
        let params = queryString.parse(url);

        function refreshPage(){ 
            window.location.reload(); 
        }
    
        const footerData = [
            [
                {
                columnIndex: 2,
                align: 'right',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                        label += tableData[i].jmlhTempatPelKb;
                        }
                        return (
                            <strong>Total : { label }</strong> 
                        );
                    }
                },
                {
                    columnIndex: 3,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].jmlhFKTRL;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 4,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].klinikUtama;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 5,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].rsUmum;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 6,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].rsKhusus;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 7,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].jumlahFKTP;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 8,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].puskesmas;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 9,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].praktekDokter;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 10,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].klinikPratama;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 11,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].rsTipeD;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 12,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].jumlahJaringan;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 13,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].pustu;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 14,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].pusling;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 15,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].poskendes;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 16,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].praktikBidan;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
                
            ]
		];
		
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan YANKB Kabupaten {params.kabupaten}</div>
                                    </Col>
                                    <Col xs="12" className='text-right'>
                                        {/* <Link className="btn btn-primary">PDF</Link>&nbsp; */}
                                        <button className="btn btn-primary" onClick={() => this.exportPDF()}>Generate PDF</button>&nbsp;
                                        <Link className="btn btn-primary">Excel</Link>&nbsp;
                                        <div className="btn btn-success" onClick={ refreshPage }>Refresh <i className="fa fa-refresh"></i></div>&nbsp;
                                    </Col>
                                    &nbsp;<br />
                                </Row>
                                    <Row>
                                        <Col md="12">
                                        <TableEditCell 
                                            tableHead={ this.state.tableHead }
                                            datas={ this.state.datas }
                                            footerData={footerData}
                                        />
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Col xs="4">
                                        <Link to={`/lap/DetailYankb/provinsi?provinsi=${params.kabupaten}`} className="btn btn-primary">Kembali</Link>
                                    </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
	}
}

export default Kabupaten;