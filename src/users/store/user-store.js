import { loadUsersByPage } from "../use-cases/load-users-by-page"


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {

    const users = await loadUsersByPage( state.currentPage + 1)
    if ( users.length === 0 ) return;
    state.currentPage += 1;
    state.users = users;

};

const loadPreviousPage = async() => {
    throw new Error ('No implemented yet')
   
}


const onUserChanged = (updatedUser) => {}

//TODO
const reloadPage = async() => {
   throw new Error ('No implemented yet')
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,


    /**
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}
