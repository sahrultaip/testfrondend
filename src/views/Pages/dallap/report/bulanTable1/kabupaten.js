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

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            tableHead: [],
            datas: [
                { id: 1, kode: 11,provinsi: 'Bakongan',adaKab:32,laporKab:213,persenKab:0,adaKec:21,laporKec:55,persenKec:0,adaDes:65,laporDes:33,persenDes:0},
                { id: 2, kode: 12,provinsi:'KLUET UTARA',adaKab:32,laporKab:213,persenKab:0,adaKec:21,laporKec:55,persenKec:0,adaDes:65,laporDes:33,persenDes:0}
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
    
        const title = "Dallap Laporan CAKUPAN LAPORAN DATA WILAYAH DAN INSTITUSI KB DI LAPANGAN";
        const headers = [
            [
                { content: 'Kode', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Kecamatan', rowSpan: 2, styles: { halign: 'center' } },
                { content: 'Kelurahan',colSpan: 3, styles: { halign: 'center' } },
            ],
            [
                { content: 'Yang Ada',colSpan: 1, styles: { halign: 'center' } },
                { content: 'Yang Lapor',colSpan: 1, styles: { halign: 'center' } },
                { content: '%',colSpan: 1, styles: { halign: 'center' } },
            ]
        ];
    
        const data = this.state.datas.map(elt=> [elt.kode, elt.provinsi,  elt.adaDes, elt.laporDes, elt.persenDes]);

        const styles = {
            overflow: 'linebreak',
            font: 'arial',
            lineWidth: 1,
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
        { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"85",dataFormat: this.CellFormatter,dataField:'Kecamatan',title: "Kecamatan", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
        { width:"50",title: "Kelurahan", row: '0',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"50",dataField:'adaDes' ,title: "Yang Ada", row: '1',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"50",dataField:'laporDes' ,title: "Yang Lapor", row: '1',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
        { width:"50",dataField:'persenDes' ,title: "%", row: '1',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },

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
                    columnIndex: 2,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].adaDes;
                            }
                            return (
                                <strong>Jumlah : { label }</strong>
                            );
                        }
                },
                {
                    columnIndex: 3,
                    align: 'right',
                        formatter: (tableData) => {
                            let label = 0;
                            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                            label += tableData[i].laporDes;
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
                            label += tableData[i].persenDes;
                            }
                            return (
                                <strong>{ label }</strong>
                            );
                        }
                },
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
                                        <div className="titleFilter"><i className="icon-filter4"></i> Laporan Dallap CAKUPAN LAPORAN DATA WILAYAH DAN INSTITUSI KB DI LAPANGAN Kecamatan {params.kabupaten}</div>
                                    </Col>
                                    <Col xs="12" md="7" className='text-right'>
                                        {/* <Link className="btn btn-primary">PDF</Link>&nbsp; */}
                                        <button className="btn btn-primary" onClick={() => this.exportPDF()}>Generate PDF</button>&nbsp;
                                        <div className="btn btn-primary">Excel</div>&nbsp;
                                        <div className="btn btn-success" onClick={ refreshPage }>Refresh <i className="fa fa-refresh"></i></div>&nbsp;
                                    </Col>
                                </Row>
                                    <div md="7" xs="12">&nbsp;</div>
                                    <Row>
                                        <Col md="7" xs="12">
                                        <TableEditCell 
                                            tableHead={ this.state.tableHead }
                                            datas={ this.state.datas }
                                            footerData={footerData}
                                        />
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Col xs="4">
                                    <Link to={`/lap/DetailDallap/table1/provinsi?provinsi=${params.kabupaten}`} className="btn btn-primary">Kembali</Link>
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