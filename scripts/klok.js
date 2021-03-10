var today = new Date();
document.getElementById('clock').innerHTML = today.getHours() + ':' + addLeadingZero(today.getMinutes()) + ':' + addLeadingZero(today.getSeconds());

function addLeadingZero(getal){​​
    if(getal < 10){​​
        getal = '0' + getal;
    }​​
    return getal;
}​​