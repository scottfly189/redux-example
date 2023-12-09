export type stateTye = {
    desc: string,
    count:number
}

export type actionItemType = 'INCREMENT'

export type actionType = {
    type: actionItemType,
    payload: number
}
