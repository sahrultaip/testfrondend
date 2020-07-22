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

class Detail extends Component {	
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
                { id: 1, kode: 11,provinsi: 'ACEH',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:44},
                { id: 2, kode: 12,provinsi:'SUMATERA UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:76}
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    CellFormatter(cell, row) {
    return (<div><Link to={`/lap/DetailYankb/bulan/table2/provinsi?provinsi=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
    
        const title = "Jumlah Pelayanan Peserta Baru Dan Peserta KB ULang Pemberian Informed Consent";

        const headers = [
            [
                { content: 'Kode', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Provinsi', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Jumlah Peserta KB Baru Yang Diberi Informed Consent Berdasarkan Metode Kontrasepsi', colSpan:6, styles: { halign: 'center' } },
                { content: 'Jumlah Peserta KB Ulang Yang Diberi Informed Consent Berdasarkan Metode Kontrasepsi',colSpan:6, styles: { halign: 'center' } },
            ],[
                { content: 'Suntikan', styles: { halign: 'center' } },
                { content: 'Implan', styles: { halign: 'center' } },
                { content: 'IUD', styles: { halign: 'center' } },
                { content: 'Tubekomi', styles: { halign: 'center' } },
                { content: 'Vastekomi', styles: { halign: 'center' } },
                { content: 'Jumlah', styles: { halign: 'center' } },
                { content: 'Suntikan', styles: { halign: 'center' } },
                { content: 'Implan', styles: { halign: 'center' } },
                { content: 'IUD', styles: { halign: 'center' } },
                { content: 'Tubekomi', styles: { halign: 'center' } },
                { content: 'Vastekomi', styles: { halign: 'center' } },
                { content: 'Jumlah', styles: { halign: 'center' } },
            ]
        ];
    
        const data = this.state.datas.map(
                elt=> [elt.kode, elt.provinsi,elt.dt1,elt.dt2,elt.dt3,elt.dt4,elt.dt5,elt.dt6,elt.dt7,elt.dt8,elt.dt9,elt.dt10,elt.dt11,elt.dt12,elt.dt13,]
            );

        const styles = {
            overflow: 'linebreak',
            font: 'arial',
            fontSize: 9,
            // cellPadding: 0,
            lineWidth: 1,
            overflowColumns: 'linebreak'
        };
        
        let content = {
        startY: 50,
        head: headers,
        body: data,
        styles: styles
        };
        
    
        doc.text(title, 250, 40);
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
        { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"120",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Provinsi", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
        { width:"100",title: "Jumlah Peserta KB Baru Yang Diberi Informed Consent Berdasarkan Metode Kontrasepsi", row: '0',colSpan:'6', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt1', title: "Suntikan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt2', title: "Implan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt3', title: "IUD", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt4', title: "Tubekomi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt5', title: "Vastekomi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt6', title: "Jumlah", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",title: "Jumlah Peserta KB Ulang Yang Diberi Informed Consent Berdasarkan Metode Kontrasepsi", row: '0',colSpan:'6', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt7', title: "Suntikan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt8', title: "Implan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt9', title: "IUD", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt10', title: "Tubekomi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt11', title: "Vastekomi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt12', title: "Jumlah", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        
    ];
        this.setState({ tableHead: this.state.tableHead.concat(headerColumns) });
    }

    setBody() {
        this.setState({blocking: true});
        // this.setState({ datas: [] });
    }

    render() {
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
                            label += tableData[i].dt1;
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
                            label += tableData[i].dt2;
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
                            label += tableData[i].dt3;
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
                            label += tableData[i].dt4;
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
                            label += tableData[i].dt5;
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
                            label += tableData[i].dt6;
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
                            label += tableData[i].dt7;
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
                            label += tableData[i].dt8;
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
                            label += tableData[i].dt10;
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
                            label += tableData[i].dt11;
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
                            label += tableData[i].dt12;
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
                            label += tableData[i].dt13;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                }
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
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan YANKB Hasil Pelayanan Peserta KB Baru dan Peserta Ulang Pemberian Informed Consent</div>
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
                                        <Link to={`/lap/yankb`} className="btn btn-primary">Kembali</Link>
                                    </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
	}
}

export default Detail;