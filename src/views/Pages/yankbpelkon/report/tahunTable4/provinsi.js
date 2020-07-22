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

class Provinsi extends Component {	
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
                { id: 1, kode: 11,provinsi: 'ACEH SELATAN',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40},
                { id: 2, kode: 12,provinsi:'ACEH UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40}
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    CellFormatter(cell, row) {
    return (<div><Link to={`/lap/DetailYankb/tahun/table4/kabupaten?kabupaten=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
    
        const title = "Tempat pelayanan KB Pemerintah Berdasarkan Kepemilikan";

        const headers = [
            [
                { content: 'Kode', rowSpan: 4, styles: { halign: 'center' } },
                { content: 'Kabupaten', rowSpan: 4, styles: { halign: 'center' } },
                { content: 'Tempat Pelayanan KB Pemerintah Berdasarkan Kepemilikan', colSpan: 12, styles: { halign: 'center' } },
            ],[
                { content: 'FKRTL', colSpan: 4, styles: { halign: 'center' } },
                { content: 'FKTP', colSpan: 5, styles: { halign: 'center' } },
                { content: 'Jaringan', colSpan: 3, styles: { halign: 'center' } },
            ],[
                { content: 'Rumah Sakit Umum', colSpan: 3, styles: { halign: 'center' } },
                { content: 'Rumah Sakit \n Khusus', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Puskesmas', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Klnik Pratama', colSpan: 3, styles: { halign: 'center' } },
                { content: 'RS Tipe \n D Pratama', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Pustu', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Pusling', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Poskendes / \n Polindes', rowSpan: 2, styles: { halign: 'center' } },

            ],[
                { content: 'Kemenkes/ \n Pusat/Dinkes/ \n Provinsi/Kab/Kota', styles: { halign: 'center' } },
                { content: 'TNI', styles: { halign: 'center' } },
                { content: 'Polri', styles: { halign: 'center' } },
                { content: 'Kemenkes/ \n Pusat/Dinkes/ \n Provinsi/Kab/Kota', styles: { halign: 'center' } },
                { content: 'TNI', styles: { halign: 'center' } },
                { content: 'Polri', styles: { halign: 'center' } },
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
        
    
        doc.text(title, 300, 40);
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
    
    goBack(){
        this.props.history.goBack();
    }
    
    setHead() {
        var headerColumns = [
        { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Kabupaten", row: '0', rowSpan: '4', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
        { width:"100", title: "Jumlah Tempat Pelayanan KB Pemerintah Berdasrakan Kepemilikan", row: '0', colSpan: '12', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100", title: "FKRTL", row: '1', colSpan: '4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100", title: "FKTP", row: '1', colSpan: '5', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100", title: "Jaringan", row: '1', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100", title: "Rumah Sakit Umum", row: '2', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt1', title: "Kemenkes Pusat/Dinkes/Provinsi/Kota", row: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt2', title: "TNI", row: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt3', title: "Polri", row: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt4', title: "Rumah Sakit Khusus", row: '2',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt5', title: "Puskesmas", row: '2',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",title: "Klinik Pratama", row: '2',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt6', title: "Kemenkes Pusat/Dinkes/Provinsi/Kota", row: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt7', title: "TNI", row: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt8', title: "Polri", row: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt9', title: "RS Tipe D Pratama", row: '2',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt10', title: "Pustu", row: '2',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt11', title: "Pusling", row: '2',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"100",dataField:'dt12', title: "Poskesdes / Polindes", row: '2',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
    
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
        

        let url = this.props.location.search;
        let params = queryString.parse(url);

        return (
            
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan YANKB Tempat pelayanan KB Pemerintah Berdasarkan Kepemilikan di {params.provinsi}</div>
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
                                        <button className="btn btn-primary" onClick={this.goBack}>Kembali</button>
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