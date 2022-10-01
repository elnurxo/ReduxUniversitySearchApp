import { FETCH_UNIVERSITIES_PENDING, FETCH_UNIVERSITIES_SUCCESS, FETCH_UNIVERSITIES_ERROR } from "../actions/university.actions"

const initialState = {
    pending: false,
    universities: [],
    error: null
}

export function universityReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_UNIVERSITIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_UNIVERSITIES_SUCCESS:
            return {
                ...state,
                pending: false,
                universities: action.universities
            }
        case FETCH_UNIVERSITIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getUniversities = state => state.universityReducer.universities;
export const getUniversitiesPending = state => state.universityReducer.pending;
export const getUniversitiesError = state => state.universityReducer.error;