export enum Mode {
    New = 'new',
    Edit = 'edit',
    WithoutStatus = 'withoutStatus'
}

export interface AqiText {
    [key: number]: {
        title: string
        color: string
        description: string
        titleEn: string
    }
}