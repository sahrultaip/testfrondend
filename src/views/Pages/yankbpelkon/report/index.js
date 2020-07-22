import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

class YankbLaporan extends Component {
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
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Tabel 1 - Tempat Pelayanan KB Berdasarkan Jenis</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table2">Tabel 2 - Tempat Pelayanan KB Pemerintah</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table3">Tabel 3 - Tempat Pelayanan KB Swasta</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table4">Tabel 4A - Tempat Pelayanan KB Berdasarkan Kepemilikan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table4B">Tabel 4B - Tempat Pelayanan KB Swasta Berdasarkan Kepemilikan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table5A">Tabel 5A - Tempat Pelayanan KB Berdasarkan Status Kerjasama Dengan Bpjs Kesehatan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table5B">Tabel 5B - Tempat Pelayanan Kb Pemerintah Berdasarkan Status Kerjasama Dengan Bpjs Kesehatan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table5C">Tabel 5C - Tempat Pelayanan Kb Swasta Berdasarkan Status Kerjasama Dengan Bpjs Kesehatan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table8A">Tabel 8A - Tempat Pelayanan Kb Berdasarkan Klasifikasi Pelayanan Kb</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/tahun/table8B">Tabel 8B - Faskes Kb Berdasarkan Status Kerjasama Dengan Bpjs Kesehatan Dan Klasifikasi Pelayanan Kb</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Tabel 9A  - Sarana Dan Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan Kb</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Tabel 10 - Tenaga Pada Tempat Pelayanan Kb</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Tabel 15A - Tempat Pelayanan Kb Berdasarkan Jenis Di Wilayah Miskin Perkotaan</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Tabel 15B - Tempat Pelayanan Kb Berdasarkan Jenis Di Wilayah Daerah Terpencil, Perbatasan Dan Kepulauan</Link></div>
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
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/table1">Tabel 1 - Cakupan Laporan Tempat Pelayanan Kb</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/bulan/table2">Tabel 2 - Hasil Pelayanan Peserta Kb Baru Dan Peserta Kb Ulang Pemberian Informed Consent</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb/bulan/table3">Tabel 3 - Pencapaian Peserta Kb Baru (Pb) Berdasarkan Metode Kontrasepsi</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Daftar Individu Baru YANKB</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Rekap Faskes</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Rekap Faskes Kabupaten</Link></div>
                                                <div className="isiLaporan"><Link to="/lap/DetailYankb">Rekap Faskes Provinsi</Link></div>
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                                {/* <Nav tabs>
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={(e)=>this.toggle(e, '1')}
                                    >
                                        Tahunan
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={(e)=>this.toggle(e, '2')}
                                    >
                                        Bulanan
                                    </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                        <Table>
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th>Nama Laporan</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">1</th>
                                                <td><Link to="/lap/DetailDallap">Tabel 1 - Tempat Pelayanan KB Berdasarkan Jenis</Link></td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                        <Table>
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                    </TabPane>
                                </TabContent> */}
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default YankbLaporan;