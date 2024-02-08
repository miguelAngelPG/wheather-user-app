import { monthNames, weekDayNames } from '../types/consts'

/**
 *
 * @param dateUnix Unix date in seconds
 * @param timezone Timezone shift from UTC in seconds
 * @returns Date in format "WeekDay 10, Month"
 */
export const getDate = (dateUnix: number, timezone: number): string => {
    const date = new Date((dateUnix + timezone) * 1000)
    const weekDayName = weekDayNames[date.getUTCDay()]
    const monthName = monthNames[date.getUTCMonth()]

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}. ${date.getUTCFullYear()}`
}

/**
 *
 * @param dateUnix
 * @param timezone
 * @returns Date in format "10 Month"
 */
export const getSimpleDate = (dateUnix: number, timezone: number): string => {
    const date = new Date((dateUnix + timezone) * 1000)
    const monthName = monthNames[date.getUTCMonth()]

    return `${monthName} ${date.getUTCDate()} `
}

/**
 *
 * @param dateUnix Unix date in seconds
 * @param timezone Timezone shift from UTC in seconds
 * @returns Weekday name
 */
export const getDay = (dateUnix: number, timezone: number): string => {
    const date = new Date((dateUnix + timezone) * 1000)
    return weekDayNames[date.getUTCDay()]
}

/**
 *
 * @param timeUnix Unix time in seconds
 * @param timezone Timezone shift from UTC in seconds
 * @returns Time in format "HH:MM AM/PM"
 */
export const getTime = (timeUnix: number, timezone: number): string => {
    const date = new Date((timeUnix + timezone) * 1000)
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    const period = hours < 12 ? 'AM' : 'PM'
    return `${ hours % 12 || 12 }:${ minutes < 10 ? `0${minutes}` : minutes } ${period}`
}

/**
 *
 * @param mps Speed in meters per second
 * @returns Speed in kilometers per hour
 */
export const mps_to_kmph = (mps: number): number => {
    return mps * 3.6
}

export const getTemp = (temp: number) => {
    return `${ Math.round(temp) }°C`
}

export const getVisibity = (visibility: number) => {
    return `${visibility / 1000} km`
}

export const getPressure = (pressure: number) => {
    return `${ pressure } hPa`
}

export const getHumidity = (humidity: number) => {
    return `${humidity}%`
}

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}