import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Link } from 'react-router-dom';
import { POSITION } from '../../../../Constants/Position';
import 'jspdf-autotable';
import queryString from 'query-string';
import CommonReport from '../CommonReport';

class Detail extends Component {	
    
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    CellFormatter(cell, row) {
        return (<div>{row.provinsi}</div>);
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
                    { id: 1, kode: 11,provinsi: 'BAKONGAN',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16},
                    { id: 2, kode: 12,provinsi: 'KLUET UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16}
                ]
            }
            title = {"Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB"}
            namaLaporan = {`Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB di ${params.kabupaten}`}
            marginLeft = {230}
            header = {
                [
                    [
                        { content: 'Kode',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Kecamatan',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Jumlah Faskes KB Yang Bekerjasama Langsung dengan BPJS Kesehatan Berdasarkan Klasifikasi Pelayanan KB', colSpan: 4, styles: { halign: 'center' } },
                        { content: 'Jumlah Faskes KB Yang Tidak Bekerjasama Langsung dengan BPJS Kesehatan Berdasarkan Klasifikasi Pelayanan KB', colSpan: 4, styles: { halign: 'center' } },
                    ],[
                        { content: 'Sederhana', styles: { halign: 'center' } },
                        { content: 'Lengkap', styles: { halign: 'center' } },
                        { content: 'Sempurna',styles: { halign: 'center' } },
                        { content: 'Paripurna', styles: { halign: 'center' } },
                        { content: 'Sederhana', styles: { halign: 'center' } },
                        { content: 'Lengkap', styles: { halign: 'center' } },
                        { content: 'Sempurna',styles: { halign: 'center' } },
                        { content: 'Paripurna', styles: { halign: 'center' } },                    
                    ]
                ]
            }
            column = {
                [
                    { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Kecamatan", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100",title: "Jumlah Faskes KB Yang Bekerjasama Langsung dengan BPJS Kesehatan Berdasarkan Klasifikasi Pelayanan KB", row: '0',colSpan:'4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "Jumlah Faskes KB Yang Tidak Bekerjasama Langsung dengan BPJS Kesehatan Berdasarkan Klasifikasi Pelayanan KB", row: '0',colSpan:'4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt1",title: "Sederhana", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt2",title: "Lengkap", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt3",title: "Sempurna", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt4",title: "Paripurna", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt5",title: "Sederhana", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt6",title: "Lengkap", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt7",title: "Sempurna", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt8",title: "Paripurna", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                ]
            }
            back = {
                <button className="btn btn-primary" onClick={this.goBack}>Kembali</button>
            }
            />
        );
	}
}

export default Detail;