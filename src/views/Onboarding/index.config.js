import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const screen1 = require('../../assets/backgrounds/onboarding1.png')
const screen2 = require('../../assets/backgrounds/onboarding2.png')
const screen3 = require('../../assets/backgrounds/onboarding3.png')
export default {
    carousel: {
        style: { width: width, height: '90%' },
        autoplay: false,
        isLooped: false,
        bullets: true,
        bulletStyle: {
            backgroundColor: '#DBECF4'
        },
        chosenBulletStyle: {
            backgroundColor: '#6C9EBF'
        },
        swipe: false
    },
    screen: [
        {
            image: screen1,
            title: 'CERITA RAKYAT',
            subtitle: 'Baca dongeng cerita rakyat dari seluruh indonesia dengan  berpetualangan ke setiap pulau '
        },
        {
            image: screen2,
            title: 'TRIVIA',
            subtitle: 'Tahukah kamu? Indonesia memiliki banyak sekali budaya dan keanekaragaman yang perlu kamu ketahui'
        },
        {
            image: screen3,
            title: 'BINTANG',
            subtitle: 'Dapatkan bintang dengan mengikuti kuis yang diberikan dan jadilah pemenang'
        }
    ]
}