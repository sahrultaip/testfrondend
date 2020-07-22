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
        this.goBack = this.goBack.bind(this); // i think you are missing this

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            tableHead: [],
            datas: [
                { id: 1, kode: 11,provinsi: 'Bakongan',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:23},
                { id: 2, kode: 12,provinsi:'Kluet Utara',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:23}
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);

        
    }

    goBack(){
        this.props.history.goBack();
    }
    
    CellFormatter(cell, row) {
    return (<div><Link to={`/lap/DetailYankb/tahun/table2/kabupaten?kabupaten=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
    
        const title = "YANKB Laporan Tempat Pelayanan KB Pemerintah";
        const headers = [
            [
                { content: 'Kode', rowSpan: 3, styles: { halign: 'center' } },
                { content: 'Kecamatan', rowSpan: 3, styles: { halign: 'center' } },
                { content: 'Jumlah Tempat Pelayanan KB Pemerintah', rowSpan:3, styles: { halign: 'center' } },
                { content: 'Faskes KB Pemerintahan', colSpan:7, styles: { halign: 'center' } },
                { content: 'Jaringan',rowSpan:2,colSpan:4, styles: { halign: 'center' } },
            ],[
                { content: 'Jumlah Fkrtl Pemerintahan',rowSpan:2, styles: { halign: 'center' } },
                { content: 'FKRTL',colSpan:2, styles: { halign: 'center' } },
                { content: 'Jumlah FKTP Pemerintahan',rowSpan:2, styles: { halign: 'center' } },
                { content: 'FKTP',colSpan:3,rowSpan:1, styles: { halign: 'center' } },
            ],[
                { content: 'Rumah Sakit Umum',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Rumah Sakit Khusus',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Puskesmas',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Klinik Pratama',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Rs tipe D Pratama',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Jumlah Jaringan',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Pustu',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Pusling',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Puskesmas / Polindes',colSpan: 1, styles: { halign: 'center' } },
            
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
        
    
        doc.text(title, marginLeft, 40);
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
        { width:"150",dataField:'dt1',title: "Jumlah Tempat Pelayanan KB Pemerintah", row: '0',rowSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100", title: "Faskes KB Pemerintahan", row: '0', colSpan: '7', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt2', title: "Jumlah FKRTL Pemerintahan", row: '1', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", title: "FKRTL", row: '1', colSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt3', title: "Rumah Sakit Umum", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt4', title: "Rumah Sakit Khusus", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt5', title: "Jumlah FKTP Pemerintahan", row: '1', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'kode', title: "FKTP", row: '1', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"90",dataField:'dt6', title: "Puskesmas", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt7', title: "Klinik Pratama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt8', title: "Rs Tipe D Pratama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt9', title: "Jaringan", row: '0',rowSpan:"2",colSpan:"4", headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt10', title: "Jumlah Jaringan", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt11', title: "Pustu", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt12', title: "Pusling", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80",dataField:'dt13', title: "Poskendes / Polindes", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
    
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
                },{
                    columnIndex: 14,
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
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan Yankb Tempat Pelayanan KB Pemerintah di {params.kabupaten}</div>
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
                                        <button className="btn btn-primary" onClick={this.goBack}>Go Back</button>
                                        {/* <Link to={`/lap/DetailYankb/tahun/table2/provinsi?provinsi=${params.kabupaten}`} className="btn btn-primary">Kembali</Link>                                         */}
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