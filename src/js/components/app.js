import { div, addId } from '../builders';
import navbar from './navbar';
import hero from './hero';
export default function app() {
    const navbarEle = navbar();
    const heroEle = hero();
    const appEle = addId(div(navbarEle), 'app-container');
    return appEle;
}