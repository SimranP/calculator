
const initialState = {
    f1: 0,
    f2: 0,
    ops: "Addition",
    result: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FIELD1": return { ...state, f1: parseInt(action.value) }

        case "SET_FIELD2": return { ...state, f2: parseInt(action.value) }

        case "SET_OPS": return { ...state, ops: action.value }

        case "CALCULATE": return { ...state, result: operations[state.ops](state.f1, state.f2) }

        default: return state;
    }

}

let operations = {
    Addition: (a, b) => a + b,
    Subtraction: (a, b) => a - b,
    Multiplication: (a, b) => a * b,
    Division: (a, b) => a / b
}


export default reducer;