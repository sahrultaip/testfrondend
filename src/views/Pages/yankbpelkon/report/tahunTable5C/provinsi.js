import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Link } from 'react-router-dom';
import { POSITION } from '../../../../Constants/Position';
import 'jspdf-autotable';
import queryString from 'query-string';
import CommonReport from '../CommonReport';

class Provinsi extends Component {	
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    CellFormatter(cell, row) {
        return (<div><Link to={`/table5C/kabupaten?kabupaten=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }
    goBack(){
        this.props.history.goBack();
    }
    render() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        
        return (
            
            <CommonReport 
            datas =  {
                [
                    { id: 1, kode: 11,provinsi: 'ACEH SELATAN',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16},
                    { id: 2, kode: 12,provinsi: 'ACEH UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16}
                ]
            }
            title = {"YANKB Laporan Tempat Pelayanan KB Swasta Berdasarkan Status Kerjasama Dengan BPJS Kesehatan"}
            namaLaporan = {`YANKB Laporan Tempat Pelayanan KB Swasta Berdasarkan Status Kerjasama Dengan BPJS Kesehatan di ${params.provinsi}`}
            marginLeft = {200}
            header = {
                [
                    [
                        { content: 'Kode', rowSpan: 3, styles: { halign: 'center' } },
                        { content: 'Kabupaten', rowSpan: 3, styles: { halign: 'center' } },
                        { content: 'Jumlah Tempat Pelayanan KB Swasta Kerjasama Dengan BPJS Kesehatan', colSpan: 7, styles: { halign: 'center' } },
                        { content: 'Jumlah Tempat Pelayanan KB Swasta Tidak Kerjasama Dengan BPJS Kesehatan', colSpan: 7, styles: { halign: 'center' } },
                    ],[
                        { content: 'FKRTL', colSpan: 3, styles: { halign: 'center' } },
                        { content: 'FKTP', colSpan: 3, styles: { halign: 'center' } },
                        { content: 'Jejaring', styles: { halign: 'center' } },
                        { content: 'FKRTL', colSpan: 3, styles: { halign: 'center' } },
                        { content: 'FKTP', colSpan: 3, styles: { halign: 'center' } },
                        { content: 'Jejaring', styles: { halign: 'center' } },
                    
                    ],[
                        { content: 'Klinik Utama', styles: { halign: 'center' } },
                        { content: 'Rumah Sakit Umum', styles: { halign: 'center' } },
                        { content: 'Rumah Sakit Khusus', styles: { halign: 'center' } },
                        { content: 'Praktik Dokter', styles: { halign: 'center' } },
                        { content: 'Klinik Pratama', styles: { halign: 'center' } },
                        { content: 'RS Tipe D Pratama', styles: { halign: 'center' } },
                        { content: 'Praktik Bidan', styles: { halign: 'center' } },
                        { content: 'Klinik Utama', styles: { halign: 'center' } },
                        { content: 'Rumah Sakit Umum', styles: { halign: 'center' } },
                        { content: 'Rumah Sakit Khusus', styles: { halign: 'center' } },
                        { content: 'Praktik Dokter', styles: { halign: 'center' } },
                        { content: 'Klinik Pratama', styles: { halign: 'center' } },
                        { content: 'RS Tipe D Pratama', styles: { halign: 'center' } },
                        { content: 'Praktik Bidan', styles: { halign: 'center' } },
                    ]
                ]
            }
            column = {
                [
                    { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Kabupaten", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100",title: "Jumlah Tempat Pelayanan KB Swasta Kerjasama Dengan BPJS", row: '0',colSpan:'7', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "Jumlah Tempat Pelayanan KB Swasta Tidak Kerjasama Dengan BPJS", row: '0',colSpan:'7', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "FKRTL", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "FKTP", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "Jejaring", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "FKRTL", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "FKTP", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "Jejaring", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt1",title: "Klinik Utama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt2",title: "Rumah Sakit Umum", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt3",title: "Rumah Sakit Khusus", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt4",title: "Rumah Sakit Khusus", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt5",title: "Klinik Pratama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt6",title: "RS Tipe D Pratama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt7",title: "Praktik Bidan", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt8",title: "Klinik Utama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt9",title: "Rumah Sakit Umum", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt10",title: "Rumah Sakit Khusus", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt11",title: "Rumah Sakit Khusus", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt12",title: "Klinik Pratama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt13",title: "RS Tipe D Pratama", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField:"dt14",title: "Praktik Bidan", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                ]
            }
            back = {
                <button className="btn btn-primary" onClick={this.goBack}>Kembali</button>
            }
            />
        );
	}
}

export default Provinsi;