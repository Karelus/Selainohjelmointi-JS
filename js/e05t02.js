const isRequiredValueMissing = (fieldObject) => {

    if (fieldObject.hasAttribute('required') && fieldObject.value == '') {
        return true;
    }
    return false;

};

const isEmailAddressInvalid = (fieldObject) => {

    const re = /[a-z0-9!#$%&'*+/=?^_`{​​|}​​~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{​​|}​​~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    let isInvalid = !re.test(String(fieldObject.value).toLowerCase());

    return isInvalid;

};

const isDoorSelectionMissing = (fieldObject) => {

    for (let i = 0; i < fieldObject.length; i++) {
        if (fieldObject[i].checked) {
            return false;
        }
    }
    return true;

};

const isCarColorMissing = (selectObject) => {

    if (selectObject.value == '') {
        return true;
    }
    return false;
    
}

window.addEventListener('load', () => {
    
    const carForm = document.querySelector('#carform');

    document.querySelector('#validationinfo').innerHTML= '';

    carForm.addEventListener('submit', (anEvent) => {

        let errorsMessage = '';
        
        if (isRequiredValueMissing(carForm.mailaddr)){
            errorsMessage += 'You must give an email address. <br>';
        } else if (isEmailAddressInvalid(carForm.mailaddr)) {
            errorsMessage += 'You must give a valid email address. <br>';
        }

        if (isDoorSelectionMissing(carForm.doors)) {
            errorsMessage += 'You must select the number of doors. <br>';
        }

        if (isCarColorMissing(carForm.carcolor)) {
            errorsMessage += 'You must select a color. <br>';
        }

        if (errorsMessage.length > 0) {
            document.querySelector('#validationinfo').innerHTML = errorsMessage;
            anEvent.preventDefault();
        }

    });

});