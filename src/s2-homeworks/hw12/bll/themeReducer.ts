type initStateType={
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: initStateType = initState, action: changeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
