import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

class DallapLaporan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        console.log('selected' + key);
        this.setState({ key: key });
    }

    handleChange(e, tab) {
        this.setState({ activeTab: tab });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody className="card-body-nopad">
                            <div style={{marginTop:'15px'}}>
                                <AppBar position="static">
                                    <Tabs value={this.state.activeTab} onChange={this.handleChange} 
                                        aria-label="simple tabs example">
                                        <Tab label="Laporan Tahunan" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
                                        <Tab label="Laporan Bulanan" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
                                    </Tabs>
                                </AppBar>
                                <div
                                    role="tabpanel"
                                    hidden={this.state.activeTab !== 0}
                                    id="simple-tabpanel-0"
                                    aria-labelledby="simple-tab-0"
                                    >
                                    {this.state.activeTab === 0 && (
                                        <Row>
                                            <Col sm="12">
                                                <div className="namaLaporan">Nama Laporan</div>
                                            </Col>
                                            <Col sm="12" style={{height:'calc(100vh - 200px)', overflow:'auto'}}>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 1 - Cakupan Data Potensi Wilayah</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 2A - Penyuluh Kkbpk (Pkb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 2B - Pelatihan Yang Pernah Diikuti Dan Perlengkapan Penyuluh Kkbpk (Pkb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 2C - Petugas Lapangan Kkbpk (Plkb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 2D - Pelatihan Yang Pernah Diikuti Dan Perlengkapan Petugas Lapangan Kkbpk (Plkb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 3 - Pembantu Pembina Keluarga Berencana Desa (Ppkbd)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 4 - Sub Pembantu Pembina Keluarga Berencana Desa (Sub Ppkbd)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 5 - Kelompok Kb (Pok-Kb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 6 - Perbandingan Jumlah Seluruh Desa/Kelurahan Dengan Desa/Kelurahan Yang Memiliki Kelompok Kegiatan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 7A - Bina Keluarga Balita (Bkb) </Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 7B - Kader Dan Sarana Dalam Bina Keluarga Balita (Bkb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 8 - Bina Keluarga Remaja (Bkr)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 9 - Bina Keluarga Lansia (Bkl)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 10A -  Usaha Peningkatan Pendapatan Keluarga Sejahtera (Uppks)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 10B - Pengelola Dan Sarana Dalam Usaha Peningkatan Pendapatan Keluarga Sejahtera (Uppks)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 11A - Pusat Informasi Dan Konseling Remaja/Mahasiswa (Pik Remaja)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 11B - Sarana Dalam Pusat Informasi Dan Konseling Remaja/Mahasiswa (Pik Remaja)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 11C - Jaringan Dan Kemitraan Serta Pendidik Sebaya Dan Konselor Sebaya Dalam Pusat Informasi Dan Konseling Remaja/Mahasiswa (Pik Remaja)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 12A - Mobil Unit Penerangan (Mupen) Kb Provinsi</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 12B - Sarana Dan Perlengkapan Mobil Unit Penerangan (Mupen) Kb Provinsi Yang Bisa Dipakai</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 12C - Mobil Unit Penerangan (Mupen) Kb Kabupaten/Kota</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 12D - Sarana Dan Perlengkapan Mobil Unit Penerangan (Mupen) Kb Kabupaten/Kota Yang Bisa Dipakai</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 13A - Balai Penyuluhan Kkbpk</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 13B - Ketersediaan Sarana Informasi Balai Penyuluhan Kkbpk</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 13C - Ketersediaan Alat Bantu Penyuluhan Balai Penyuluhan Kkbpk</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 14A - Media Production Centre (Mpc)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 14B - Ketersediaan Sarana Media Production Centre (Mpc)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 14B Lanjutan - Ketersediaan Sarana Media Production Centre (Mpc)</Link></div>
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                                <div
                                    role="tabpanel"
                                    hidden={this.state.activeTab !== 1}
                                    id="simple-tabpanel-1"
                                    aria-labelledby="simple-tab-1"
                                    >
                                    {this.state.activeTab === 1 && (
                                        <Row>
                                            <Col sm="12">
                                                <div className="namaLaporan">Nama Laporan</div>
                                            </Col>
                                            <Col sm="12" style={{height:'calc(100vh - 200px)', overflow:'auto'}}>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap/table1">Tabel 1 - Cakupan Laporan Data Wilayah Dan Institusi KB DI Lapangan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap/table2">Tabel 2 - Frekuensi Operasional Mupen Provinsi</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap/table3">Tabel 3 - Frekuensi Operasional Mupen Kabupaten/Kota</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 4 - Pemanfaatan Balai Penyuluhan Program Kkbpk</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 5 - Pemanfaatan Media Production Centre (Mpc)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 6  - Pembinaan Kelompok Bina Keluarga Balita (Bkb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 6 Lanjutan - Pembinaan Kelompok Bina Keluarga Balita (Bkb)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 7 - Pembinaan Kelompok Bina Keluarga Remaja (Bkr)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 7 Lanjutan - Pembinaan Kelompok Bina Keluarga Remaja (Bkr)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 8 - Pembinaan Kelompok Bina Keluarga Lansia (Bkl)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 8 Lanjutan - Pembinaan Kelompok Bina Keluarga Lansia (Bkl)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 9A - Pembinaan Kelompok Usaha Peningkatan Pendapatan Keluarga Sejahtera (Uppks)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 9A Lanjutan - Pembinaan Kelompok Usaha Peningkatan Pendapatan Keluarga Sejahtera (Uppks)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 9B - Status Pus Dan Kesertaan Ber-Kb Berdasarkan Tahapan Ks Anggota Kelompok Usaha Peningkatan Pendapatan Keluarga Sejahtera (Uppks)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 10 - Pelayanan Informasi/Penyuluhan Pusat Informasi Dan Konseling Remaja Dan Mahasiswa (Pik Remaja)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 11 - Peserta Kb Aktif Menurut Metode Kontrasepsi</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 12 - Peserta Kb Aktif Menurut Tempat Pelayanan Kb Dan Kesertaan Jkn</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Tabel 13 - Pasangan Usia Subur (Pus) Dan Pus Bukan Peserta Kb Karena Alasan Hamil</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Daftar Individu Baru DALLAP</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Rekap DALAP Desa/Kelurahan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Rekap DALAP Kecamatan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Rekap DALAP Kabupaten/Kota</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Rekap DALAP Provinsi</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Cakupan Laporan Proyek Prioritas Nasional Bina Keluarga Remaja (BKR)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Cakupan Laporan Proyek Prioritas Nasional Pusat Informasi dan Konseling Remaja dan Mahasiswa (PIK-R/M)</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailDallap">Cakupan Program KKBPK Di Desa/Kelurahan Binaan</Link></div>
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default DallapLaporan;