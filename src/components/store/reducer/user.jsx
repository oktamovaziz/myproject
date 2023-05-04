const initalState = {
    card: JSON.parse(localStorage.getItem('card')) || []
}


function setCArd (state = initalState, action){
    if(action.type === 'add_user'){
        let current = [...state.card]
        current.push(action.payload)
        let currentState = {
            ...state,
            card: current
        }
        state = currentState
        localStorage.setItem('card', JSON.stringify(state))
        return state
    }
    return state
}

export {setCArd}