export type TItem = {
    text: string
    id: number
}

const DEFAULT_STATE: TItem[] = []

type TCreateAction = {
    type: 'create'
    payload: string
}

type TDeleteAction = {
    type: 'delete'
    payload: number 
}

type TAction = TCreateAction | TDeleteAction

let lastId = 0;

export const listReducer = (state: TItem[] = DEFAULT_STATE, action: TAction): TItem[] => {
    switch (action.type) {
        case "create":
            return [
                ...state,
                {
                    text: action.payload,
                    id: lastId++
                }
            ]
        case 'delete':
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}

export const createItem = (text: string): TCreateAction=> ({
    type: 'create',
    payload: text
})

export const deleteItem = (id: number): TDeleteAction=> ({
    type: 'delete',
    payload: id
})