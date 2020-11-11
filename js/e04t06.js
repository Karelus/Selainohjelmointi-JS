const initialize = () => {

    document.addEventListener('keydown', checkKey);

    function checkKey(e) {

        e = e || window.event;

        // checks if the arrow key is up
        if (e.keyCode == '38') {
            var ele = document.getElementById('balloon')
            // graps font-size property value and convert it into float
            var style = window.getComputedStyle(ele, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);

            // increases font-size by 10%
            ele.style.fontSize = (fontSize + ((fontSize / 100) * 10)) + 'px';

            // if too big, change emoji to an explosion emoji
            if (fontSize > 120) {
                ele.innerHTML = "&#x1F4A5";
                document.removeEventListener('keydown', checkKey);
            }
        }

        // checks if the arrow key is down
        if (e.keyCode == '40') {
            var ele = document.getElementById('balloon')
            // graps font-size property value and convert it into float
            var style = window.getComputedStyle(ele, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);

            // decreases font-size by 10%
            ele.style.fontSize = (fontSize - ((fontSize / 100) * 10)) + 'px';
        }
    }
}

window.addEventListener('load', () => {
    initialize();
});
