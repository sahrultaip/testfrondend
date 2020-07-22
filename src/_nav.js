export default {
    items: [
        {
            name: 'Beranda',
            url: '/beranda',
            icon: 'icon-home2',
            // badge: {
            //   variant: 'info',
            //   text: 'NEW',
            // },
        },
        {
            title: true,
            name: 'YAN KB / PELKON',
            wrapper: {
                element: '',
                attributes: {}
            },
            class: ''
        },
        {
            name: 'Pendaftaran Tempat Pelayanan KB',
            url: '/pendaftaran',
            icon: 'icon-office',
        },
        {
            name: 'Register Pelayanan KB',
            url: '/register',
            icon: 'icon-man-woman',
        },
        {
            name: 'Mutasi Alokon',
            url: '/alokon',
            icon: 'icon-truck',
        },
        {
            title: true,
            name: 'DALLAP',
            icon: ''
        },
        {
            name: 'Sumber Daya Manusia',
            url: '/sdm',
            icon: 'icon-accessibility',
            children: [
                {
                    name: 'Pendaftaran PPLKB',
                    url: '/sdm/pplkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'Pendaftaran PKB/PLKB',
                    url: '/sdm/pkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'Pendaftaran PPKBD',
                    url: '/sdm/ppkbd',
                    icon: 'icon-dash',
                },
                {
                    name: 'Pendaftaran Sub PPKBD',
                    url: '/sdm/subPpkbd',
                    icon: 'icon-dash',
                },
                {
                    name: 'Pendaftaran Kelompok KB',
                    url: '/sdm/kelompokKb',
                    icon: 'icon-dash',
                },
                {
                    name: 'Register PUSDAK',
                    url: '/sdm/pusdak',
                    icon: 'icon-dash',
                },
            ]
        },
        {
            name: 'Sarana',
            url: '/sarana',
            icon: 'icon-direction',
            children: [
                {
                    name: 'Pendaftaran BP KB',
                    url: '/sarana/bpkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'Register Kegiatan Penyuluhan',
                    url: '/sarana/penyuluhan',
                    icon: 'icon-dash',
                },
                {
                    name: 'Pendaftaran MUPEN',
                    url: '/sarana/mupen',
                    icon: 'icon-dash',
                },
                {
                    name: 'Register Operasional Gerak MUPEN',
                    url: '/sarana/rog-mupen',
                    icon: 'icon-dash',
                },
                {
                    name: 'Pendaftaran MPC',
                    url: '/sarana/mpc',
                    icon: 'icon-dash',
                },
                {
                    name: 'Register Operasional Gerak MPC',
                    url: '/sarana/rog-mpc',
                    icon: 'icon-dash',
                },
            ]
        },
        {
            name: 'Kelompok Kegiatan',
            url: '#',
            icon: 'icon-microscope',
            children: [
                {
                    name: 'Kelompok BKB',
                    url: '/kegiatan/kelompok_bkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'Register Kegiatan BKB',
                    url: '/kegiatan/register_bkb',
                    icon: 'icon-dash',
                },
            ]
        },
        {
            title: true,
            name: 'Laporan',
            icon: ''
        },
        {
            name: 'YAN KB',
            url: '/lap/yankb',
            icon: 'icon-clipboard2',
        },
        {
            name: 'DALLAP',
            url: '/lap/dallap',
            icon: 'icon-clipboard3',
        },
        {
            title: true,
            name: 'Administrasi',
            icon: ''
        },
        {
            name: 'Batas Waktu Entri/Ralat/Approval Data',
            url: '/adm/bwe',
            icon: 'icon-alarm',
        },
        {
            name: 'User Managemen Faskes',
            url: '/adm/umfaskes',
            icon: 'icon-users2',
        },
        {
            name: 'Approval/Monitoring Data Cakupan',
            url: '/adm/adc',
            icon: 'icon-shield-check',
        },
        {
            name: 'Aktif/Non Aktif K/0 YAN KB',
            url: '#',
            icon: 'icon-star-full2',
            children: [
              {
                name: 'Induk',
                url: '/adm/yankb/induk',
                icon: 'icon-dash',
              },
              {
                name: 'Jejaring/Jaringan',
                url: '/adm/yankb/jaringan',
                icon: 'icon-dash',
              },
            ]
          },
          {
            name: 'Aktif/Non Aktif K/0 DALLAP',
            url: '#',
            icon: 'icon-sun3',
            children: [
                {
                    name: 'SDM PPLKB',
                    url: '/adm/dallap/sdmpplkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'SDM PKB',
                    url: '/adm/dallap/sdmpkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'SDM PPKBD',
                    url: '/adm/dallap/sdmppkbd',
                    icon: 'icon-dash',
                },
                {
                    name: 'SDM SUBPPKBD',
                    url: '/adm/dallap/sdmsppkbd',
                    icon: 'icon-dash',
                },
                {
                    name: 'SDM POKKB',
                    url: '/adm/dallap/sdmpokkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'Sarana BP',
                    url: '/adm/dallap/srnbp',
                    icon: 'icon-dash',
                },
                {
                    name: 'Sarana MUPEN',
                    url: '/adm/dallap/srnmupen',
                    icon: 'icon-dash',
                },
                {
                    name: 'Sarana MPC',
                    url: '/adm/dallap/srnmpc',
                    icon: 'icon-dash',
                },
                {
                    name: 'Kegiatan BKB',
                    url: '/adm/dallap/kbkb',
                    icon: 'icon-dash',
                },
                {
                    name: 'Kegiatan BKR',
                    url: '/adm/dallap/kbkr',
                    icon: 'icon-dash',
                },
                {
                    name: 'Kegiatan BKL',
                    url: '/adm/dallap/kbkl',
                    icon: 'icon-dash',
                },
                {
                    name: 'Kegiatan UPPKS',
                    url: '/adm/dallap/kuppks',
                    icon: 'icon-dash',
                },
                {
                    name: 'Kegiatan PIK-R/M',
                    url: '/adm/dallap/kpikrm',
                    icon: 'icon-dash',
                },
            ]
        },
        {
            name: 'Wilayah Miskin Perkotaan dan Galciltas',
            url: '/adm/wmpg',
            icon: 'icon-sphere',
        },
        {
            name: 'Keluarga Baduta',
            url: '/adm/kbaduta',
            icon: 'icon-users4',
        },
    ],
};
