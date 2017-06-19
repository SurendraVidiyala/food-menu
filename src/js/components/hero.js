import { addClass, div, img, p, section, text } from '../builders';

export default function hero() {
    const logo = addClass(img('static/fancybear_white.png'), 'logo');
    const the = addClass(p(text('The')), 'hero-text-light');
    const southIndian = addClass(p(text('South Indian')), 'hero-text-bold');
    const cuisine = addClass(p(text('Cuisine')), 'hero-text-light');

    const container = addClass(div(logo, the, southIndian, cuisine), 'container');

    const heroContent = addClass(div(container), 'hero-content');

    return addClass(section(heroContent), 'hero', 'splash');
}