// the id's of the input field, button and details
let userInputDate = document.getElementById('inputdate');
let dateBTN = document.getElementById('datebtn');
let resultText = document.getElementById('details');

const calculateAge = () => {
    //we need to get the value of the input of the user(i.e the date the user put in)
    let birthDate = new Date(userInputDate.value);

    // we get the value of the birthDay
    let birthDay = birthDate.getDate();

     // we get the value of the birthMonth
    let birthMonth = birthDate.getMonth() + 1;

     // we get the value of the birthYear
    let birthYear = birthDate.getFullYear();

    //we need to get today's date
    let todayDate = new Date();

    //we need to get present day
    let presentDay = todayDate.getDate();

    //we need to get present Month
    let presentMonth = todayDate.getMonth() + 1;

    //we need to get present Year
    let presentYear = todayDate.getFullYear();

    let dayDiff, monthDiff, yearDiff;

    //we need to get the difference betweeen the presentYear and the Today's Year
    yearDiff = presentYear - birthYear;

    //situation when the presentMonth is greater than the birthMonth
    if(presentMonth >= birthMonth){
        monthDiff = presentMonth - birthMonth
    //situation when the birthMonth is greater than the  presentMonth 
    }else{
        yearDiff--;
        monthDiff = 12 + presentMonth - birthMonth;
    }

    //situation when the presentDay is greater than the birthDay
    if(presentDay >= birthDay){
        dayDiff = presentDay - birthDay
    //situation when the birthtDay is greater than the presentDay
    }else{
        monthDiff--;
        dayDiff = getDaysinMonth(birthYear, birthMonth) + presentDay - birthDay
    }
    //when we have a negative month which is wrong
    if(monthDiff < 0){
        monthDiff = 11;
        yearDiff--;
    }

    resultText.innerHTML = `You are <span>${yearDiff}</span> years, <span>${monthDiff}</span> months and <span>${dayDiff}</span> days old`
}

//we need to get the total number of days in the birthdate of the user as we have 31, 30 and 28 & 29 days in a calendar
const getDaysinMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
}

dateBTN.addEventListener('click', calculateAge)