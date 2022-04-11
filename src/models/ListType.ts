export interface DateType {
    date: string,
    id: Number,
    list: ListType[]
}


export interface ListType {
    content?: string,
    list_id?: Number,
    completed?: boolean
}


