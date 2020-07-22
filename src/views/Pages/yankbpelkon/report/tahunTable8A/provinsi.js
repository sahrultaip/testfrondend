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
        return (<div><Link to={`/table8A/kabupaten?kabupaten=${row.provinsi}`}>{row.provinsi}</Link></div>);
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
            title = {"Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB"}
            namaLaporan = {`Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB di ${params.provinsi}`}
            marginLeft = {300}
            header = {
                [
                    [
                        { content: 'Kode', rowSpan: 3, styles: { halign: 'center' } },
                        { content: 'Kecamatan', rowSpan: 3, styles: { halign: 'center' } },
                        { content: 'Jumlah Tempat Pelayanan KB Berdasarkan Klasifikasi KB', colSpan: 5, styles: { halign: 'center' } },
                    ],[
                        { content: 'Sederhana', colSpan: 2, styles: { halign: 'center' } },
                        { content: 'Lengkap', rowSpan: 2, styles: { halign: 'center' } },
                        { content: 'Sempurna', rowSpan: 2,styles: { halign: 'center' } },
                        { content: 'Paripurna', rowSpan: 2, styles: { halign: 'center' } },                    
                    ],[
                        { content: 'Faskes KB', styles: { halign: 'center' } },
                        { content: 'Jaringan Dan Jejaring', styles: { halign: 'center' } },
                    ]
                ]
            }
            column = {
                [
                    { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Kecamatan", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100",title: "Jumlah Tempat Pelayanan KB Berdasarkan Klasifikasi KB", row: '0',colSpan:'5', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt1",title: "Faskes KB", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt2",title: "Jaringan Dan Jejaring", row: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt3",title: "Sederhana", row: '1',colSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt4",title: "Lengkap", row: '1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt5",title: "Sempurna", row: '1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt6",title: "Paripurna", row: '1',rowSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
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