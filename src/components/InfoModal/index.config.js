const owlBenar = require('../../assets/images/owl_benar.png')
const owlSalah = require('../../assets/images/owl_salah.png')
const owlSelesai = require('../../assets/images/owl_selesai.png')

export default {
    profile: {
        selesai: {
            color: '#03AA6F',
            title: 'HEBAT SEKALI',
            subtitle: 'Kamu telah menyelesaikan cerita, lanjutkan petulanganmu',
            picture: owlSelesai,
            action: 'Kembali ke Peta'
        },
        benar: {
            color: '#FFA100',
            title: 'SELAMAT KAMU BENAR',
            subtitle: 'Tambahan Bintang Untukmu',
            picture: owlBenar,
            action: 'Lanjutkan Membaca'
        },
        salah: {
            color: '#60A2D7',
            title: 'SAYANG SEKALI',
            subtitle: 'Jawabanmu kurang tepat, Jangan sedih dan tetap semangat ya',
            picture: owlSalah,
            action: 'Lanjutkan Membaca'
        }
    }
}