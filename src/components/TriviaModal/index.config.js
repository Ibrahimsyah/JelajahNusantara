import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const owlBenar = require('../../assets/images/owl_benar.png')
const owlSalah = require('../../assets/images/owl_salah.png')
const owlSelesai = require('../../assets/images/owl_selesai.png')
const owlHitung = require('../../assets/images/owlHitung.png')
const owlBeli = require('../../assets/images/owlBeli.png')

export default {
    carousel: {
        style: { width: width * 0.6, height: '100%', flex: 8 },
        autoplay: false,
        isLooped: true,
        swipe: false
    },
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
        },
        beli: {
            color: '#F2C94C',
            title: 'BELI PULAU',
            subtitle: 'Apakah kamu yakin ingin membeli pulau ini?',
            picture: owlBeli,
            action: 'Beli'
        },
        gagalBeli: {
            color: '#60A2D7',
            title: 'SAYANG SEKALI',
            subtitle: ' Mohon maaf kamu belum bisa membeli pulau ini. Yuk kumpulkan lebih banyak bintang',
            picture: owlHitung,
            action: 'Tutup'
        },
    }
}