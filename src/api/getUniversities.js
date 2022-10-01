import { fetchUniversitiesError, fetchUniversitiesPending, fetchUniversitiesSuccess } from "../redux/actions/university.actions";

function fetchUniversities(searchValue) {
    return function (dispatch) {
        dispatch(fetchUniversitiesPending());
        let baseURL = "http://universities.hipolabs.com/search";
        if (searchValue) {
            baseURL = `${baseURL}?name=${searchValue}`
        }
        fetch(baseURL)
            .then(res => res.json())
            .then(res => {
                dispatch(fetchUniversitiesSuccess(res))
                return res;
            })
            .catch(error => {
                dispatch(fetchUniversitiesError(error));
            })
    }

}

export default fetchUniversities;