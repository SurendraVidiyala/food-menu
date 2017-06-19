export function filterByType(items, type) {
    return items.filter(item => item.type === type);
}
export function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}
export function filterByType(map, type) {
    return Object.keys(map)
        .filter(key => map[key].type === type)
        .map(key => map[key]);
}
export function $(query) {
    const elements = Array.prototype.slice.call(document.querySelectorAll(query));

    function children(toAdd) {
        elements.forEach(ele => {
            while (ele.firstChild) {
                ele.removeChild(ele.firstChild);
            }

            ele.appendChild(toAdd);
        });
    }

    return {
        children,
    };
}