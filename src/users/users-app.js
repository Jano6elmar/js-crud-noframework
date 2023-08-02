import { renderTable } from "./presentation/render-table/render-table";
import userStore from "./store/user-store";




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

    element.innerHTML = 'Loading...';
    await userStore.loadNextPage();
    element.innerHTML = '';

    renderTable( element )

}