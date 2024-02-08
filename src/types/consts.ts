import { AqiText } from './@types'

export const weekDayNames = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
]

export const monthNames = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
]

export const aqiText: AqiText = {
    1: {
        title: 'Bueno',
        titleEn: 'Good',
        color: 'green',
        description: 'Air quality is considered satisfactory, and air pollution poses little or no risk.'
    },
    2: {
        title: 'Regular',
        titleEn: 'Fair',
        color: 'yellow',
        description: 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'
    },
    3: {
        title: 'Moderado',
        titleEn: 'Moderate',
        color: 'orange',
        description: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.'
    },
    4: {
        title: 'Malo',
        titleEn: 'Poor',
        color: 'red',
        description: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.'
    },
    5: {
        title: 'Muy Malo',
        titleEn: 'Very Poor',
        color: 'purple',
        description: 'Health alert: everyone may experience more serious health effects.'
    },
}