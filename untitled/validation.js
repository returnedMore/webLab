function ValidMail(){
    let re = /^[\w - \.] + @[\w - ] + \.[a-z]{2,4}$/i;
    let myMail = document.getElementById('mail').value;
    let valid = re.test(myMail);
    if(valid)
        output = 'Адрес эл.почты введён правильно!';
    else
        output = 'Адрес эл.почты введён не правильно!';
    document.getElementById('mail').innerHTML = output;
    return valid;
}

function ValidPhone(){
    let re = /^\d[\d\(\)\ - ]{4,14}\d$/;
    let myPhone = document.getElementById('tel').value;
    let valid = re.test(myPhone);
    if(valid)
        output = 'Номер телефона введён правильно!';
    else
        output = 'Номер телефона введён не правильно!';
    document.getElementById('tel').innerHTML = document.getElementById('tel').innerHTML + '<br />' + output;
    return valid;
}