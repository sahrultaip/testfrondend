import React, { Component } from 'react';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import { tableOptions } from '../../../Commons/Table/TableOptions';
import { Link } from 'react-router-dom';
import TableEditCell from '../../../../Commons/Table/TableFooter';
import { POSITION } from '../../../../Constants/Position';
import { Row,Col,Card,CardBody } from 'reactstrap';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import queryString from 'query-string';

class kabupaten extends Component {	
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
                { id: 1, kode: 11,provinsi: 'ACEH SELATAN',adaKab:32,laporKab:213,persenKab:0,fkrtlJenisAda:21,fkrtlJenisLapor:55,fkrtlJenisPersen:0,fkrtlPemerintahAda:65,fkrtlPemerintahLapor:33,fkrtlPemerintahPersen:0,fktpPemerintahAda:2134,fktpPemerintahLapor:90,fktpPemerintahPersen:34,jaringanAda:30,jaringanLaporan:50,jaringanPersen:80,fkrtlSwastaAda:64,fkrtlSwastaLaporan:30,fkrtlSwastaPersen:99,fktpSwastaAda:75,fktpSwastaLaporan:89,fktpSwastaPersen:95,jejaringAda:23,jejaringLaporan:45,jejaringPersen:10},
                { id: 2, kode: 12,provinsi:'ACEH TENGGARA',adaKab:32,laporKab:213,persenKab:0,fkrtlJenisAda:21,fkrtlJenisLapor:55,fkrtlJenisPersen:0,fkrtlPemerintahAda:65,fkrtlPemerintahLapor:33,fkrtlPemerintahPersen:0,fktpPemerintahAda:2134,fktpPemerintahLapor:90,fktpPemerintahPersen:34,jaringanAda:30,jaringanLaporan:50,jaringanPersen:80,fkrtlSwastaAda:64,fkrtlSwastaLaporan:30,fkrtlSwastaPersen:99,fktpSwastaAda:75,fktpSwastaLaporan:89,fktpSwastaPersen:95,jejaringAda:23,jejaringLaporan:45,jejaringPersen:10}
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    CellFormatter(cell, row) {
    return (<div><Link to={`/lap/DetailYankb/table1/kabupaten?kabupaten=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
    
        const title = "YANKB Laporan CAKUPAN LAPORAN DATA WILAYAH DAN INSTITUSI KB DI LAPANGAN";
        const headers = [
            [
                { content: 'Kode', rowSpan: 3, styles: { halign: 'center' } },
                { content: 'Kecamatan', rowSpan: 3, styles: { halign: 'center' } },
                { content: 'Tempat Pelayanan KB', colSpan: 24, styles: { halign: 'center' } },
            ],[
                { content: 'Yang Ada',colSpan: 1,rowSpan:2, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1,rowSpan:2, styles: { halign: 'center' } },
                { content: '%',colSpan: 1,rowSpan:2, styles: { halign: 'center' } },
                { content: 'Fkrtl Jenis',colSpan: 3, styles: { halign: 'center' } },
                { content: 'Fkrtl Pemerintah',colSpan: 3, styles: { halign: 'center' } },
                { content: 'Fktp Pemerintah',colSpan: 3, styles: { halign: 'center' } },
                { content: 'Jaringan',colSpan: 3, styles: { halign: 'center' } },
                { content: 'Fkrtl Swasta',colSpan: 3, styles: { halign: 'center' } },
                { content: 'Fktp Swasta',colSpan: 3, styles: { halign: 'center' } },
                { content: 'Jejaring',colSpan: 3, styles: { halign: 'center' } },
            
            ],[
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },                
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },                
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },                
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },                
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },                
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },                
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },
            ]
        ];
    
        const data = this.state.datas.map(
                elt=> [elt.kode, elt.provinsi, elt.adaKab,elt.laporKab,elt.persenKab,elt.fkrtlJenisAda,elt.fkrtlJenisLapor,elt.fkrtlJenisPersen,elt.fkrtlPemerintahAda,elt.fkrtlPemerintahLapor,elt.fkrtlPemerintahPersen,elt.fktpPemerintahAda,elt.fktpPemerintahLapor,elt.fktpPemerintahPersen,elt.jaringanAda,elt.jaringanLaporan,elt.jaringanPersen,elt.fkrtlSwastaAda,elt.fkrtlSwastaLaporan,elt.fkrtlSwastaPersen,elt.fktpSwastaAda,elt.fktpSwastaLaporan,elt.fktpSwastaPersen,elt.jejaringAda,elt.jejaringLaporan,elt.jejaringPersen,]
            );

        const styles = {
            overflow: 'linebreak',
            font: 'arial',
            fontSize: 9,
            // cellPadding: 0,
            lineWidth:1,
            overflowColumns: 'linebreak'
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

    componentDidMount() {
        this.setHead();
        this.setBody();
    }
    
    
    setHead() {
        var headerColumns = [
        { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"150",dataField:'provinsi',title: "Kecamatan", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
        { title: "Tempat Pelayanan KB", row: '0',colSpan:'24', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'adaKab',title: "Yang Ada", row: '1',colSpan:'1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'laporKab',title: "Yang Lapor", row: '1',colSpan:'1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'persenKab',title: "%", row: '1',colSpan:'1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",title: "FKRTL BERDASARKAN JENIS", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        { width:"100",title: "FKRTL Pemerintah", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        { width:"100",title: "FKTP Pemerintah", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        { width:"100",title: "Jaringan", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        { width:"100",title: "FKRTL Swasta", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        { width:"100",title: "FKTP Swasta", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        { width:"100",title: "Jejaring", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        { width:"100",dataField:'fkrtlJenisAda',title: "Yang Ada", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlJenisLapor',title: "Yang Lapor", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlJenisPersen',title: "%", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlPemerintahAda',title: "Yang Ada", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlPemerintahLapor',title: "Yang Lapor", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlPemerintahPersen',title: "%", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fktpPemerintahAda',title: "Yang Ada", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fktpPemerintahLapor',title: "Yang Lapor", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fktpPemerintahPersen',title: "%", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'jaringanAda',title: "Yang Ada", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'jaringanLaporan',title: "Yang Lapor", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'jaringanPersen',title: "%", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlSwastaAda',title: "Yang Ada", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlSwastaLaporan',title: "Yang Lapor", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fkrtlSwastaPersen',title: "%", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fktpSwastaAda',title: "Yang Ada", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fktpSwastaLaporan',title: "Yang Lapor", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'fktpSwastaPersen',title: "%", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'jejaringAda',title: "Yang Ada", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'jejaringLaporan',title: "Yang Lapor", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'jejaringPersen',title: "%", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
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

        const footerData = [
            [
                {
                columnIndex: 1,
                align: 'right',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                        label += tableData[i].adaKab;
                        }
                        return (
                            <strong>Jumlah : </strong> 
                        );
                    }
                },
                {
                    columnIndex: 2,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].adaKab;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 3,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].laporKab;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 4,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].persenKab;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 5,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlJenisAda;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 6,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlJenisLapor;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 7,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlJenisPersen;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 8,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlPemerintahAda;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 9,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlPemerintahLapor;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 10,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlPemerintahPersen;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 11,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fktpPemerintahAda;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 12,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fktpPemerintahLapor;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 13,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fktpPemerintahPersen;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },,{
                    columnIndex: 14,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].jaringanAda;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 15,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].jaringanLaporan;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 16,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].jaringanPersen;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 17,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlSwastaAda;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 18,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlSwastaLaporan;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 19,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fkrtlSwastaPersen;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 20,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fktpSwastaAda;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 21,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fktpSwastaLaporan;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },{
                    columnIndex: 22,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].fktpSwastaPersen;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },
            ]
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
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan Yankb CAKUPAN LAPORAN DATA WILAYAH DAN INSTITUSI KB DI LAPANGAN</div>
                                    </Col>
                                    <Col xs="12" md="12" className='text-right'>
                                        {/* <Link className="btn btn-primary">PDF</Link>&nbsp; */}
                                        <button className="btn btn-primary" onClick={() => this.exportPDF()}>Generate PDF</button>&nbsp;
                                        <div className="btn btn-primary">Excel</div>&nbsp;
                                        <div className="btn btn-success" onClick={ refreshPage }>Refresh <i className="fa fa-refresh"></i></div>&nbsp;
                                    </Col>
                                </Row>
                                    <div md="12" xs="12">&nbsp;</div>
                                    <Row>
                                        <Col md="12" xs="12">
                                        <TableEditCell 
                                            tableHead={ this.state.tableHead }
                                            datas={ this.state.datas }
                                            footerData={footerData}
                                        />
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Col xs="4">
                                        <Link to={`/lap/DetailYankb/table1/provinsi?provinsi=${params.kabupaten}`} className="btn btn-primary">Kembali</Link>
                                    </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
	}
}

export default kabupaten;