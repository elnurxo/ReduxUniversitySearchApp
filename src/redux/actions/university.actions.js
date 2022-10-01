export const FETCH_UNIVERSITIES_PENDING = 'FETCH_UNIVERSITIES_PENDING';
export const FETCH_UNIVERSITIES_SUCCESS = 'FETCH_UNIVERSITIES_SUCCESS';
export const FETCH_UNIVERSITIES_ERROR = 'FETCH_UNIVERSITIES_ERROR';

export function fetchUniversitiesPending() {
    return {
        type: FETCH_UNIVERSITIES_PENDING
    }
}

export function fetchUniversitiesSuccess(universities) {
    return {
        type: FETCH_UNIVERSITIES_SUCCESS,
        universities
    }
}

export function fetchUniversitiesError(error) {
    return {
        type: FETCH_UNIVERSITIES_ERROR,
        error
    }
}