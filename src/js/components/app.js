import { div, addId } from '../builders';
import modal from './modal';
import navbar from './navbar';
import hero from './hero';
import menu from './menu';
import bottom from './bottom';

//export default function app(items) {
export default function app(store) {
    const modalEle = modal(store);
    //const modalEle = modal(items);
    const navbarEle = navbar();
    const heroEle = hero();
    //const menuEle = menu(items);
    const menuEle = menu(store);
    const bottomEle = bottom();
    const appEle = addId(div(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');
    return appEle;
}