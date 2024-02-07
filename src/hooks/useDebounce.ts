import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay: number): [ debouncedValue: string, reset: () => void ] => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    const reset = () => {
        setDebouncedValue('')
    }

    return [ debouncedValue, reset ]
}