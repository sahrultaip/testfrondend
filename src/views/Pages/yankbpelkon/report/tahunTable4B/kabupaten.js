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

class Kabupaten extends Component {	
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
                { id: 1, kode: 11,provinsi: 'BAKONGAN',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16},
                { id: 2, kode: 12,provinsi:'KLUET UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16}
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    CellFormatter(cell, row) {
    return (<div>{row.provinsi}</div>);
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
    
        const title = "Tempat pelayanan KB Swasta Berdasarkan Kepemilikan";

        const headers = [
            [
                { content: 'Kode', rowSpan: 4, styles: { halign: 'center' } },
                { content: 'Kabupaten', rowSpan: 4, styles: { halign: 'center' } },
                { content: 'FKRTL', colSpan: 9, styles: { halign: 'center' } },
                { content: 'FKTP', colSpan: 5, styles: { halign: 'center' } },
                { content: 'Jejaring', styles: { halign: 'center' } },
            ],[
                { content: 'Klinik Utama', colSpan: 3, styles: { halign: 'center' } },
                { content: 'Rumah Sakit Umum', colSpan: 3, styles: { halign: 'center' } },
                { content: 'Rumah Sakit Khusus', colSpan: 3, styles: { halign: 'center' } },
                { content: 'Praktik Dokter', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Klinik Pratama', colSpan: 3, styles: { halign: 'center' } },
                { content: 'RS Tipe D \n Pratama', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Jumlah Jejaring \n Praktik Bidan',rowSpan:2, styles: { halign: 'center' } },
            ],[
                { content: 'BUMD/ \n BUMN', styles: { halign: 'center' } },
                { content: 'Swasta', styles: { halign: 'center' } },
                { content: 'Lsom', styles: { halign: 'center' } },
                { content: 'BUMD/ \n BUMN', styles: { halign: 'center' } },
                { content: 'Swasta', styles: { halign: 'center' } },
                { content: 'Lsom', styles: { halign: 'center' } },
                { content: 'BUMD/ \n BUMN', styles: { halign: 'center' } },
                { content: 'Swasta', styles: { halign: 'center' } },
                { content: 'Lsom', styles: { halign: 'center' } },
                { content: 'BUMD/ \n BUMN', styles: { halign: 'center' } },
                { content: 'Swasta', styles: { halign: 'center' } },
                { content: 'Lsom', styles: { halign: 'center' } },
            ]
        ];
    
        const data = this.state.datas.map(
                elt=> [elt.kode, elt.provinsi,elt.dt1,elt.dt2,elt.dt3,elt.dt4,elt.dt5,elt.dt6,elt.dt7,elt.dt8,elt.dt9,elt.dt10,elt.dt11,elt.dt12,elt.dt13,elt.dt14,elt.dt15,]
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
        { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Kabupaten", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
        { width:"80", title: "FKRTL", row: '0', colSpan: '9', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", title: "FKTP", row: '0', colSpan: '5', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", title: "Jejaring", row: '0', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", title: "Klinik Utama", row: '1', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", title: "Rumah Sakit Umum", row: '1', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", title: "Rumah Sakit Khusus", row: '1', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt1",title: "BUMD / BUMN", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt2",title: "Swasta", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt3",title: "LSOM", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt4",title: "BUMD / BUMN", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt5",title: "Swasta", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt6",title: "LSOM", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt7",title: "BUMD / BUMN", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt8",title: "Swasta", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt9",title: "LSOM", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt10",title: "Praktik Dokter", row: '1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt11",title: "Klinik Pratama", row: '1', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt12",title: "BUMD / BUMN", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt13",title: "Swasta", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt14",title: "LSOM", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt15",title: "RS Tipe D Pratama", row: '1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"80", dataField:"dt16",title: "Jumlah Jejaring Praktik Bidan", row: '1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },

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
                }
                ,{
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
                }
                ,{
                    columnIndex: 10,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].dt9;
                            }
                            return (
                                <strong> {label} </strong> 
                            );
                        }
                },
                {
                    columnIndex: 11,
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
                },
                {
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
                            label += tableData[i].dt14;
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
                            label += tableData[i].dt15;
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
                            label += tableData[i].dt16;
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
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan YANKB Tempat pelayanan KB Swasta Berdasarkan Kepemilikan di {params.kabupaten}</div>
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

export default Kabupaten;