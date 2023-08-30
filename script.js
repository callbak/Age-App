//! getting today's date
let current_date = new Date();
let cy = current_date.getFullYear(); // current year
let cm = 0;                          // current month
let cd = 0;                          // current day
//! Global Variables
let yy = undefined; // year input
let mm = undefined; // month input
let dd = undefined; // days input

let yry = 0; // your calculated years
let yrm = 0; // your calculated months
let yrd = 0; // your calculated days

//! Selection Procedure 

//* Upper Section
let lD = document.querySelector('#inputSEC label:nth-of-type(1)'); // first label , label of days .
let lM = document.querySelector('#inputSEC label:nth-of-type(2)'); // second label , label of months .
let lY = document.querySelector('#inputSEC label:nth-of-type(3)'); // third label , label of years .

let dT = document.querySelector('#inputSEC label:nth-of-type(1) span:nth-of-type(1)'); // first label , `days` actual text
let mT = document.querySelector('#inputSEC label:nth-of-type(2) span:nth-of-type(1)'); // second label , `months` actual text
let yT = document.querySelector('#inputSEC label:nth-of-type(3) span:nth-of-type(1)'); // third label , `years` actual text

let li1 = document.querySelector('#day_i'); // first label , days input
let li2 = document.querySelector('#month_i'); // second label , months input
let li3 = document.querySelector('#year_i'); // third label , years input

let bt = document.querySelector('#upperSEC button');

let spn11 = document.querySelector('#inputSEC label:nth-of-type(1) span:nth-of-type(2)'); // first label , added span
let spn22 = document.querySelector('#inputSEC label:nth-of-type(2) span:nth-of-type(2)'); // second label , added span
let spn33 = document.querySelector('#inputSEC label:nth-of-type(3) span:nth-of-type(2)'); // third label , added span

//* Lower Section
let d1 = document.querySelector('#d1'); // dash days 1
let d2 = document.querySelector('#d2'); // dash days 2

let m1 = document.querySelector('#m1'); // dash months 1
let m2 = document.querySelector('#m2'); // dash months 2

let y1 = document.querySelector('#y1'); // dash years 1
let y2 = document.querySelector('#y2'); // dash years 2

//* -------------------------------------------------- 1 

//! Checking + insuring we get a Valid Input **FUNCTIONS**
function ifDD_isEMPTY() {
    dd = undefined;
    li1.style.borderColor = `hsl(0, 100%, 67%)`;
    dT.style.color = `hsl(0, 100%, 67%)`;
    spn11.innerText = `Field Required`;
    spn11.style.fontSize = `16px`;
    spn11.style.color = `hsl(0, 100%, 67%)`;
    dashing();
}
function ifDD_isWRONG() {
    dd = undefined;
    li1.style.borderColor = `hsl(0, 100%, 67%)`;
    dT.style.color = `hsl(0, 100%, 67%)`;
    spn11.innerText = `Must be a valid day`;
    spn11.style.fontSize = `12px`;
    spn11.style.color = `hsl(0, 100%, 67%)`;
    dashing();
}
function ifDD_isCORRECT() {
    dd = parseInt(li1.value);
    li1.style.borderColor = `hsl(0, 0%, 86%)`;
    dT.style.color = `hsl(0, 1%, 55%)`;
    spn11.innerText = ``;
}

function ifMM_isEMPTY() {
    mm = undefined;
    li2.style.borderColor = `hsl(0, 100%, 67%)`;
    mT.style.color = `hsl(0, 100%, 67%)`;
    spn22.innerText = `Field Required`;
    spn22.style.fontSize = `16px`;
    spn22.style.color = `hsl(0, 100%, 67%)`;
    dashing();
}
function ifMM_isWRONG() {
    mm = undefined;
    li2.style.borderColor = `hsl(0, 100%, 67%)`;
    mT.style.color = `hsl(0, 100%, 67%)`;
    spn22.innerText = `Must be a valid month`;
    spn22.style.fontSize = `12px`;
    spn22.style.color = `hsl(0, 100%, 67%)`;
    dashing();
}
function ifMM_isCORRECT() {
    mm = parseInt(li2.value);
    li2.style.borderColor = `hsl(0, 0%, 86%)`;
    mT.style.color = `hsl(0, 1%, 55%)`;
    spn22.innerText = ``;
}

function ifYY_isEMPTY() {
    yy = undefined;
    li3.style.borderColor = `hsl(0, 100%, 67%)`;
    yT.style.color = `hsl(0, 100%, 67%)`;
    spn33.innerText = `Field Required`;
    spn33.style.fontSize = `16px`;
    spn33.style.color = `hsl(0, 100%, 67%)`;
    dashing();
}
function ifYY_isWRONG() {
    yy = undefined;
    li3.style.borderColor = `hsl(0, 100%, 67%)`;
    yT.style.color = `hsl(0, 100%, 67%)`;
    spn33.innerText = `Must be a valid year`;
    spn33.style.fontSize = `12px`;
    spn33.style.color = `hsl(0, 100%, 67%)`;
    dashing();
}
function ifYY_isCORRECT() {
    yy = parseInt(li3.value);
    li3.style.borderColor = `hsl(0, 0%, 86%)`;
    yT.style.color = `hsl(0, 1%, 55%)`;
    spn33.innerText = ``;
}

function dashing() {
    d1.textContent = `-`;
    d2.textContent = `-`;
    m1.textContent = `-`;
    m2.textContent = `-`;
    y1.textContent = `-`;
    y2.textContent = `-`;
}
//! Input check
function eaf() {
    //* first label   ------------------------------------------------------------
    if (li1.value.length === 0) ifDD_isEMPTY();
    else
        if (isNaN(parseInt(li1.value)) || parseInt(li1.value) < 1 || parseInt(li1.value) > 31) ifDD_isWRONG();
        else ifDD_isCORRECT();
    //* second label  ------------------------------------------------------------  
    if (li2.value.length === 0) ifMM_isEMPTY();
    else
        if (isNaN(parseInt(li2.value)) || parseInt(li2.value) < 1 || parseInt(li2.value) > 12) ifMM_isWRONG();
        else ifMM_isCORRECT();
    //* third label   ------------------------------------------------------------
    if (li3.value.length === 0) ifYY_isEMPTY();
    else
        if (isNaN(parseInt(li3.value)) || parseInt(li3.value) < 1 || parseInt(li3.value) > cy) ifYY_isWRONG();
        else ifYY_isCORRECT();
}

//! is it a Leap year ?
function isLEAPyEAR(yr) {
    return (yr % 4 === 0 && yr % 100 != 0 || yr % 400 === 0);
}


//* -------------------------------------------------- 2
//! Calculation Process
function ymdCP(startingDate, endingDate) {
    let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
        endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
    }
    let endDate = new Date(endingDate);
    if (startDate > endDate) {
        const swap = startDate;
        startDate = endDate;
        endDate = swap;
    }
    const startYear = startDate.getFullYear();
    const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28; // if it's a leap year , then feb will have 29 , otherwise 28 .
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dd > daysInMonth[mm - 1] || (dd === undefined)) ifDD_isWRONG();

    let yearDiff = endDate.getFullYear() - startYear;         // year difference
    let monthDiff = endDate.getMonth() - startDate.getMonth();// month difference
    if (monthDiff < 0) { // if the difference is negative , then we didn't reach the birth day yet .
        yearDiff--;
        monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) { // if we didn't reach the turn day ( example : birth-date day is 20 , and we're 10 , we can't say we completed a month .)
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
    }
    yry = yearDiff;
    yrm = monthDiff;
    yrd = dayDiff;
    //*------------------------- Printing Procedure
    //* Year print out 
    if (yry >= 0 && yry <= 9) {
        let y = yry.toString();
        y1.innerText = `0`;
        y2.innerText = `${y}`;
    }
    else {
        y = yry.toString();
        y1.innerText = `${y[0]}`;
        y2.innerText = `${y[1]}`;
    }
    //* Month print out 
    if (yrm >= 0 && yrm <= 9) {
        let m = yrm.toString();
        m1.innerText = `0`;
        m2.innerText = `${m}`;
    }
    else {
        m = yrm.toString();
        m1.innerText = `${m[0]}`;
        m2.innerText = `${m[1]}`;
    }
    //* Day print out 
    if (yrd >= 0 && yrd <= 9) {
        let d = yrd.toString();
        d1.innerText = `0`;
        d2.innerText = `${d}`;
    }
    else {
        d = yrd.toString();
        d1.innerText = `${d[0]}`;
        d2.innerText = `${d[1]}`;
    }
}

//! The center of All the Process Calls 'Event Listener' 
bt.addEventListener('click', (event) => {
    event.preventDefault();
    //* Checking Input Procedure 
    eaf();
    //* Calculation Procedure
    if (!(dd === undefined) && !(mm === undefined) && !(yy === undefined)) { ymdCP(current_date, (new Date(`${yy}-${mm}-${dd}`))); }
    else dashing();
});