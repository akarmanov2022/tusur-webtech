function reg() {
    var errors = ""
    var regName = /^\D{3}/;
    var regPhone = /\d/g;
    var regEmail = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/
    var regPassword = /^\w{8}/
    var lastnameBool = regName.test(document.regForm.lastname.value);
    var firstnameBool = regName.test(document.regForm.firstname.value);
    var fathersnameBool = regName.test(document.regForm.fathersname.value);
    var nicknameBool = regName.test(document.regForm.nickname.value);
    var birthdayBool = regName.test(document.regForm.birthday.value);
    var phonenumberBool = document.regForm.phonenumber.value.match(regPhone)
    var emailBool = regEmail.test(document.regForm.email.value);
    var passwordBool = regPassword.test(document.regForm.password.value);

    if (phonenumberBool == null) {
        phonenumberBool = false;
    }
    else if (phonenumberBool.length == 11) {
        phonenumberBool = true;
    }
    else {
        phonenumberBool = false;
    }

    if (!lastnameBool) errors += "\nФамилия должна состоять от 3 букв или более.";
    if (!firstnameBool) errors += "\nИмя должно состоять от 3 букв или более.";
    if (!fathersnameBool) errors += "\nОтчество должно состоять от 3 букв или более.";
    if (!nicknameBool) errors += "\nПсевдоним должен состоять от 3 букв и более.";
    if (!birthdayBool) errors += "\nНеправильный формат даты рождения. Необходим DD.MM.YYYY.";
    if (!phonenumberBool) errors += "\nНомер телефона должен состоять из 11 цифр.";
    if (!emailBool) errors += "\nНеверный формат электронного адреса.";
    if (!passwordBool) errors += "\nПароль должен состоять минимум из 8 символов.";
    else if (passwordBool == true &&
        document.regForm.password.value !=
        document.regForm.passwordtwo.value)
        errors += "\nПароли не совпадают.";

    if (errors == "") errors = "Успешно";

    alert(errors);
}