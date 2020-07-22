import React from 'react';
import CreatePPLKB from './views/Pages/dallap/sdm/pplkb/create';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Icon = React.lazy(() => import('./views/Base/Icon'));
const Table = React.lazy(() => import('./views/Base/Table'));

// YAN KB PELKON
const Pendaftaran = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/index'));
const CreateYankbpelkon = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/create/create'));
const LihatYankbpelkon = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/lihat/lihat'));
const EditYankbpelkon = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/edit/edit'));
const RegistrasiYAN = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/index'));
const CreateRegistrasi = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/create/create'));
const EditRegistrasi = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/edit/edit'));
const LihatRegistrasi = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/lihat/lihat'));
const MutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon'));
const CreateMutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon/create/create'));
const EditMutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon/edit/edit'));
const LihatMutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon/lihat/lihat'));

// Dallap Laporan
const DallapLaporan = React.lazy(() => import('./views/Pages/dallap/report/index'))
const DetailDallap = React.lazy(() => import('./views/Pages/dallap/report/detail'))
const DetailDallapProvinsi = React.lazy(() => import('./views/Pages/dallap/report/provinsi'))
const DetailDallapKabupaten = React.lazy(() => import('./views/Pages/dallap/report/kabupaten'))
const BulanTable1 = React.lazy(() => import('./views/Pages/dallap/report/bulanTable1/detail'))
const BulanTable1Provinsi = React.lazy(() => import('./views/Pages/dallap/report/bulanTable1/provinsi'))
const BulanTable1Kabupaten = React.lazy(() => import('./views/Pages/dallap/report/bulanTable1/kabupaten'))
const BulanTable2 = React.lazy(() => import('./views/Pages/dallap/report/bulanTable2/detail'))
const BulanTable2Provinsi = React.lazy(() => import('./views/Pages/dallap/report/bulanTable2/provinsi'))
const BulanTable2Kabupaten = React.lazy(() => import('./views/Pages/dallap/report/bulanTable2/kabupaten'))
const BulanTable3 = React.lazy(() => import('./views/Pages/dallap/report/bulanTable3/detail'))
const BulanTable3Provinsi = React.lazy(() => import('./views/Pages/dallap/report/bulanTable3/provinsi'))
const BulanTable3Kabupaten = React.lazy(() => import('./views/Pages/dallap/report/bulanTable3/kabupaten'))


// YANKB Laporan
const YanKBLaporan = React.lazy(() => import('./views/Pages/yankbpelkon/report/index'))
const DetailYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/detail'))
const DetailYankbProvinsi = React.lazy(() => import('./views/Pages/yankbpelkon/report/provinsi'))
const DetailYankbKabupaten = React.lazy(() => import('./views/Pages/yankbpelkon/report/kabupaten'))
const BulanTable1YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable1/detail'))
const BulanTable1ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable1/provinsi'))
const BulanTable1KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable1/kabupaten'))
const BulanTable2YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable2/detail'))
const BulanTable2ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable2/provinsi'))
const BulanTable2KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable2/kabupaten'))
const BulanTable3YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable3/detail'))
const BulanTable3ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable3/provinsi'))
const BulanTable3KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable3/kabupaten'))

const TahunTable2YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable2/detail'))
const TahunTable2ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable2/provinsi'))
const TahunTable2KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable2/kabupaten'))
const TahunTable3YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable3/detail'))
const TahunTable3ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable3/provinsi'))
const TahunTable3KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable3/kabupaten'))
const TahunTable4YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4/detail'))
const TahunTable4ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4/provinsi'))
const TahunTable4KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4/kabupaten'))
const TahunTable4BYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4B/detail'))
const TahunTable4BProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4B/provinsi'))
const TahunTable4BKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4B/kabupaten'))
const TahunTable5AYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5A/detail'))
const TahunTable5AProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5A/provinsi'))
const TahunTable5AKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5A/kabupaten'))
const TahunTable5BYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5B/detail'))
const TahunTable5BProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5B/provinsi'))
const TahunTable5BKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5B/kabupaten'))
const TahunTable5CYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5C/detail'))
const TahunTable5CProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5C/provinsi'))
const TahunTable5CKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5C/kabupaten'))
const TahunTable8AYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8A/detail'))
const TahunTable8AProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8A/provinsi'))
const TahunTable8AKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8A/kabupaten'))
const TahunTable8BYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8B/detail'))
const TahunTable8BProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8B/provinsi'))
const TahunTable8BKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8B/kabupaten'))

// Sumber Daya Manusia
const PPLKB = React.lazy(() => import('./views/Pages/dallap/sdm/pplkb'));
const PKB = React.lazy(() => import('./views/Pages/dallap/sdm/pkb/index'));
const CreatePKB = React.lazy(() => import('./views/Pages/dallap/sdm/pkb/create'));
const PPKBD = React.lazy(() => import('./views/Pages/dallap/sdm/ppkbd/index'));
const CreatePPKBD = React.lazy(() => import('./views/Pages/dallap/sdm/ppkbd/create'));
const SubPPKBD = React.lazy(() => import('./views/Pages/dallap/sdm/subPpkbd'));
const KelompokKB = React.lazy(() => import('./views/Pages/dallap/sdm/kelompokKb'));
const PUSDAK = React.lazy(() => import('./views/Pages/dallap/sdm/pusdak'));

// Sarana
const BPKB = React.lazy(() => import('./views/Pages/dallap/sarana/bpkb'));
const PendaftaranMPC = React.lazy(() => import('./views/Pages/dallap/sarana/mpc'));
const PendaftaranMUPEN = React.lazy(() => import('./views/Pages/dallap/sarana/mupen'));
const Penyuluhan = React.lazy(() => import('./views/Pages/dallap/sarana/penyuluhan'));
const RegistrasiMPC = React.lazy(() => import('./views/Pages/dallap/sarana/rog-mpc'));
const RegistrasiMUPEN = React.lazy(() => import('./views/Pages/dallap/sarana/rog-mupen'));

// Sarana
const KelompokBKB = React.lazy(() => import('./views/Pages/dallap/kelompok/kelompok_bkb'));
const RegisterBKB = React.lazy(() => import('./views/Pages/dallap/kelompok/register_bkb'));

// Administrasi
const Umfaskes = React.lazy(() => import('./views/Pages/administrasi/Umfaskes'));

// const MasterFormula = React.lazy(() => import('./views/Master/Formula/Formula'));
// const MasterUser = React.lazy(() => import('./views/Master/User/User'));
// const MasterMenu = React.lazy(() => import('./views/Master/Menu/Menu'));
// const Daily = React.lazy(() => import('./views/Transaction/Planning/Daily'));
// const Dds = React.lazy(() => import('./views/Transaction/Planning/Dds'));
// const SampleColor = React.lazy(() => import('./views/Transaction/Planning/SampleColor'));
// const Po = React.lazy(() => import('./views/Report/Po'));
// const Performance = React.lazy(() => import('./views/Report/Performance'));
// const Monthly = React.lazy(() => import('./views/Report/Monthly'));
// const Yearly = React.lazy(() => import('./views/Report/Yearly'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/beranda', exact: true, name: 'Beranda', component: Dashboard},
    // { path: '/beranda', name: 'Beranda', component: Dashboard },
    { path: '/icon', name: 'Icon', component: Icon },
    { path: '/table', name: 'Sample Table', component: Table },

    // { path: '/planning', exact: true, name: 'Planning', component: Daily },
    // { path: '/planning/dp', name: 'Distribution Plan', component: Daily },
    // { path: '/planning/dds', name: 'Daily Distribution Schedule', component: Dds },
    // { path: '/planning/samplecolor', name: 'Sample Color', component: SampleColor },
    // { path: '/report', exact: true, name: 'Report', component: Po },
    // { path: '/report/po', name: 'PO Completeness', component: Po },
    // { path: '/report/performance', name: 'Distribution Performance', component: Performance },
    // { path: '/report/monthly', name: 'Monthly View', component: Monthly },
    // { path: '/report/yearly', name: 'Yearly View', component: Yearly },
    // { path: '/master', exact: true, name: 'Master Data', component: MasterFormula },
    // { path: '/master/formula', name: 'Formula', component: MasterFormula },
    // { path: '/master/user', name: 'User', component: MasterUser },
    // { path: '/master/menu', name: 'Menu', component: MasterMenu },
    // { path: '/um', exact: true, name: 'User Management', component: MasterUser },
    // Start Router Project

    //YAN KB / PELKON
    { path: '/pendaftaran', exact: true, name: 'Pendaftaran Tempat Pelayanan KB', component: Pendaftaran },
    { path: '/pendaftaran/create', name: 'Tambah', component: CreateYankbpelkon },
    { path: '/pendaftaran/lihat', name: 'lihat', component: LihatYankbpelkon },
    { path: '/pendaftaran/edit', name: 'edit', component: EditYankbpelkon },
    { path: '/register', exact: true, name: 'Register Pelayanan KB', component: RegistrasiYAN },
    { path: '/register/create', name: 'Tambah', component: CreateRegistrasi },
    { path: '/register/edit', name: 'Edit', component: EditRegistrasi },
    { path: '/register/lihat', name: 'Lihat', component: LihatRegistrasi },
    { path: '/alokon', exact: true, name: 'Mutasi Alokon', component: MutasiAlokon },
    { path: '/alokon/create', name: 'Tambah', component: CreateMutasiAlokon },
    { path: '/alokon/edit', name: 'Edit', component: EditMutasiAlokon },
    { path: '/alokon/lihat', name: 'Lihat', component: LihatMutasiAlokon },

    //Sumber Daya Manusia
    { path: '/sdm', exact: true, name: 'Sumber Daya Manusia', component: PPLKB },
    { path: '/sdm/pplkb', exact: true, name: 'Pendaftaran PPLKB', component: PPLKB },
    { path: '/sdm/pplkb/create', name: 'Tambah', component: CreatePPLKB },
    { path: '/sdm/pkb', exact: true, name: 'Pendaftaran PKB/PLKB', component: PKB },
    { path: '/sdm/pkb/create', name: 'Tambah', component: CreatePKB },
    { path: '/sdm/ppkbd', exact: true, name: 'Pendaftaran PPKBD', component: PPKBD },
    { path: '/sdm/ppkbd/create', name: 'Tambah', component: CreatePPKBD },
    { path: '/sdm/subPpkbd', name: 'Pendaftaran Sub PPKBD', component: SubPPKBD },
    { path: '/sdm/kelompokKb', name: 'Pendaftaran Kelompok KB', component: KelompokKB },
    { path: '/sdm/pusdak', name: 'Register PUSDAK', component: PUSDAK },

    //Sarana
    { path: '/sarana', exact: true, name: 'SARANA', component: BPKB },
    { path: '/sarana/bpkb', name: 'Pendaftaran BP KB', component: BPKB },
    { path: '/sarana/penyuluhan', name: 'Register Kegiatan Penyuluhan', component: Penyuluhan },
    { path: '/sarana/mupen', name: 'Pendaftaran MUPEN', component: PendaftaranMUPEN },
    { path: '/sarana/mpc', name: 'Pendaftaran MPC', component: PendaftaranMPC },
    { path: '/sarana/rog-mupen', name: 'Register Operasional Gerak MUPEN', component: RegistrasiMUPEN },
    { path: '/sarana/rog-mpc', name: 'Register Operasional Gerak MPC', component: RegistrasiMPC },

    //Kelompok Kegiatan
    { path: '/kegiatan', exact: true, name: 'Kelompok Kegiatan', component: KelompokBKB },
    { path: '/kegiatan/kelompok_bkb', name: 'Kelompok BKB', component: KelompokBKB },
    { path: '/kegiatan/register_bkb', name: 'Register Kegiatan BKB', component: RegisterBKB },

    //Report
    { path: '/lap/dallap', exact: true, name: 'Laporan Dallap', component: DallapLaporan },
    { path: '/lap/DetailDallap', exact: true, name: 'Detail Laporan Dallap', component: DetailDallap },
    { path: '/lap/DetailDallap/provinsi', exact: true, name: 'Detail Laporan Provinsi', component: DetailDallapProvinsi },
    { path: '/lap/DetailDallap/kabupaten', exact: true, name: 'Detail Laporan Kabupaten', component: DetailDallapKabupaten },

    //DallapReport
    { path: '/lap/DetailDallap/table1', exact: true, name: 'Wilayah institusi KB di lapangan', component: BulanTable1 },
    { path: '/lap/DetailDallap/table1/provinsi', exact: true, name: '', component: BulanTable1Provinsi },
    { path: '/lap/DetailDallap/table1/kabupaten', exact: true, name: '', component: BulanTable1Kabupaten },
    { path: '/lap/DetailDallap/table2', exact: true, name: 'Frekuensi Operasional Mupen Provinsi', component: BulanTable2 },
    { path: '/lap/DetailDallap/table2/provinsi', exact: true, name: '', component: BulanTable2Provinsi },
    { path: '/lap/DetailDallap/table2/kabupaten', exact: true, name: '', component: BulanTable2Kabupaten },
    { path: '/lap/DetailDallap/table3', exact: true, name: 'Frekuensi Operasional Mupen Kab/Kota', component: BulanTable3 },
    { path: '/lap/DetailDallap/table3/provinsi', exact: true, name: '', component: BulanTable3Provinsi },
    { path: '/lap/DetailDallap/table3/kabupaten', exact: true, name: '', component: BulanTable3Kabupaten },

    //YankbReport
    { path: '/lap/DetailYankb/table1', exact: true, name: 'Cakupan tempat pelayanan KB', component: BulanTable1YanKb },
    { path: '/lap/DetailYankb/table1/provinsi', exact: true, name: '', component: BulanTable1ProvinsiYanb },
    { path: '/lap/DetailYankb/table1/kabupaten', exact: true, name: '', component: BulanTable1KabupatenYanKb },
    { path: '/lap/DetailYankb/bulan/table2', exact: true, name: 'Hasil Pelayanan KB Baru Dan Daftar Ulang', component: BulanTable2YanKb },
    { path: '/lap/DetailYankb/bulan/table2/provinsi', exact: true, name: '', component: BulanTable2ProvinsiYanb },
    { path: '/lap/DetailYankb/bulan/table2/kabupaten', exact: true, name: '', component: BulanTable2KabupatenYanKb },
    { path: '/lap/DetailYankb/bulan/table3', exact: true, name: 'Pencapaian Peserta KB Baru Berdasarkan Metode Kontrasepsi', component: BulanTable3YanKb },
    { path: '/lap/DetailYankb/bulan/table3/provinsi', exact: true, name: '', component: BulanTable3ProvinsiYanb },
    { path: '/lap/DetailYankb/bulan/table3/kabupaten', exact: true, name: '', component: BulanTable3KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table2', exact: true, name: 'Tempat pelayanan KB Pemerintah', component: TahunTable2YanKb },
    { path: '/lap/DetailYankb/tahun/table2/provinsi', exact: true, name: '', component: TahunTable2ProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table2/kabupaten', exact: true, name: '', component: TahunTable2KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table3', exact: true, name: 'Tempat pelayanan KB Swasta', component: TahunTable3YanKb },
    { path: '/lap/DetailYankb/tahun/table3/provinsi', exact: true, name: '', component: TahunTable3ProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table3/kabupaten', exact: true, name: '', component: TahunTable3KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table4', exact: true, name: 'Tempat pelayanan KB Pemerintah Berdasarkan Kepemilikan', component: TahunTable4YanKb },
    { path: '/lap/DetailYankb/tahun/table4/provinsi', exact: true, name: '', component: TahunTable4ProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table4/kabupaten', exact: true, name: '', component: TahunTable4KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table4B', exact: true, name: 'Tempat pelayanan KB Swasta Berdasarkan Kepemilikan', component: TahunTable4BYanKb },
    { path: '/lap/DetailYankb/tahun/table4B/provinsi', exact: true, name: '', component: TahunTable4BProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table4B/kabupaten', exact: true, name: '', component: TahunTable4BKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table5A', exact: true, name: 'Tempat pelayanan KB Swasta Berdasarkan Kepemilikan', component: TahunTable5AYanKb },
    { path: '/lap/DetailYankb/tahun/table5A/provinsi', exact: true, name: '', component: TahunTable5AProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table5A/kabupaten', exact: true, name: '', component: TahunTable5AKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table5B', exact: true, name: 'YANKB Laporan Tempat Pelayanan KB Pemerintah Berdasarkan Status Kerjasama Dengan BPJS Kesehatan', component: TahunTable5BYanKb },
    { path: '/lap/DetailYankb/tahun/table5B/provinsi', exact: true, name: '', component: TahunTable5BProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table5B/kabupaten', exact: true, name: '', component: TahunTable5BKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table5C', exact: true, name: 'YANKB Laporan Tempat Pelayanan KB Pemerintah Berdasarkan Status Kerjasama Dengan BPJS Kesehatan', component: TahunTable5CYanKb },
    { path: '/lap/DetailYankb/tahun/table5C/provinsi', exact: true, name: '', component: TahunTable5CProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table5C/kabupaten', exact: true, name: '', component: TahunTable5CKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table8A', exact: true, name: 'Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB', component: TahunTable8AYanKb },
    { path: '/table8A/provinsi', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB', component: TahunTable8AProvinsiYanb },
    { path: '/table8A/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB', component: TahunTable8AKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table8B', exact: true, name: 'Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB', component: TahunTable8BYanKb },
    { path: '/table8B/provinsi', exact: true, name: 'Detail Laporan YAN KB / Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB', component: TahunTable8BProvinsiYanb },
    { path: '/table8B/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB', component: TahunTable8BKabupatenYanKb },

    { path: '/lap/yankb', exact: true, name: 'Laporan YAN KB', component: YanKBLaporan },
    { path: '/lap/DetailYankb', exact: true, name: 'Detail Laporan YAN KB', component: DetailYankb },
    { path: '/lap/DetailYankb/provinsi', exact: true, name: 'Laporan YAN KB Provinsi', component: DetailYankbProvinsi },
    { path: '/lap/DetailYankb/kabupaten', exact: true, name: 'Laporan YAN KB Kabupaten', component: DetailYankbKabupaten },


    //Administrasi
    { path: '/adm/umfaskes', exact: true, name: 'User Manajemen Faskes', component: Umfaskes },

];

export default routes;