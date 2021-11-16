const startdate = document.getElementById('startdate');
const selectWeek = document.getElementById('select-week')
const selectDate = document.getElementById('select-date')
const selectDay = document.getElementById('select-day')
const weekTheme = document.getElementById('week-theme')
const dayTheme = document.getElementById('day-theme')
const dayRef = document.getElementById('day-ref')
const dayOverseers = document.getElementById('day-overseers')
const dayLink = document.getElementById('day-link')
const weekOf = document.getElementById('week-of')
const updateWeek = document.getElementById('update-week')
const saveDay = document.getElementById('save-day')
const tbodyWeek = document.getElementById('tbody-week')
const tbodyDay = document.getElementById('tbody-day')
const weeksRemaining = document.getElementById('weeks-remaining')
const warning = document.querySelector('.warning')
const href = document.getElementById('href')
const goLive = document.getElementById('go-live')
const storedData = document.getElementById('stored-data')
const storedWeeks = document.getElementById('stored-weeks')
const selectMonth = document.getElementById('select-month')
const monthText = document.getElementById('month-text')
const clearWeek = document.getElementById('clear-week')
const clearDay = document.getElementById('clear-day')


let isEdit = false;
let editIndex;
let edit
let weeksLeft 
// let dayData = []
let weekTable = []
let dayTable = []
let weeksArr = []
let x = 0;
let date;
let currDate
let currDay
// Initialise month array 
let monthArr = [];
let dateFormat
let dayData
let weekData
let startdateData
// Initialize locally stored data 
if (localStorage.getItem('startdate-data')) {
    startdateData = JSON.parse(localStorage.getItem('startdate-data'))
    startdateData = JSON.stringify(monthArr[0])
    

}

if (localStorage.getItem('week-data')) {
    weekData = localStorage.getItem('week-data')

    weekTable = JSON.parse(weekData)
    index = 0
    weekTable.forEach((table)=>{
        tbodyWeek.innerHTML+= /*html*/ `
        <tr data-id =${index}>
        <td style='color:#fff; background-color:#A0AEC0;border-right:1px solid #fff'>${table.weekOf}</td>
        <td style='color:#fff; background-color:#A0AEC0;border-right:1px solid #fff'>${table.weekTheme}</td>
        <td class='d-flex justify-content-between' style='background-color: #d3dbe6' >
            <i class="bi bi-pencil-square edit px-4 text-success" onclick='editFunc(this)' style='cursor:pointer'></i>
            <i class="bi bi-trash delete text-danger" onclick='delFunc(this)' style='cursor:pointer'></i>
        </td>
    </tr>
    `
        index++
    })
} 

if (localStorage.getItem('day-data')) {
    dayData = localStorage.getItem('day-data')
    // dayStored.value = dayData
    dayTable = JSON.parse(dayData)
    document.cookie = /*html*/ `cookieData=${JSON.stringify(dayTable)}; Fri, 31 Dec 9999 23:59:59 GMT`;

    index = 0
    dayTable.forEach((table)=>{
        tbodyDay.innerHTML+= /*html*/ `
        <tr data-id =${index}>
            <td style='color:#fff; background-color:#5E6C83;border-right:1px solid #fff'>${table.week}</td>
            <td style='color:#fff;background-color:#2a4365;border-right:1px solid #fff'>${table.day.substring(0,3)}</td>
            <td style='color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.theme}</td>
            <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.ref}</td>
            <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.link.substring(0,10)}</td>
            <td style='font-size: 14px;color:#000;background-color:#F29D45;border-right:1px solid #fff'>${table.overseers}</td>
            <td class='d-flex justify-content-between' style='background-color: #d3dbe6'>
            <i class="bi bi-pencil-square edit px-4" onclick='dayEditFunc(this)' style='cursor:pointer'></i>
                <i class="bi bi-trash delete text-danger" onclick='dayDelFunc(this)' style='cursor:pointer'></i>
            </td>
        </tr>
        `
        index++
    })
} 
if (localStorage.getItem('monthtitle-data')) {
    selectMonth.value = localStorage.getItem('monthtitle-data')
} else {
    selectMonth.focus()
}
if (localStorage.getItem('monthtext-data')) {
    monthText.value = localStorage.getItem('monthtext-data')
} 
selectMonth.addEventListener('change', ()=>{
    localStorage.setItem('monthtitle-data',selectMonth.value)
    monthText.focus()
})
monthText.addEventListener('change',()=>{
    localStorage.setItem('monthtext-data',monthText.value)
    startdate.focus()
})
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

startdate.addEventListener('change', ()=>{
    // localStorage.setItem('unformattedDate', startdate.value)
    // reset montharray 
    monthArr = [];
    currDay = 0
    selectDate.innerHTML = '';
    selectWeek.innerHTML = '';
    dateFormat = new Date(startdate.value)
    dateFormat.setMonth(dateFormat.getMonth() +1)
    if (dateFormat.getMonth() != 0) {
        currDate = dateFormat.getDate()+'/'+ Number(dateFormat.getMonth())
    } 
    else {
        currDate = dateFormat.getDate()+'/'+ '12'
    }
    currDay = dateFormat.getDate()
    totalDays = daysInMonth(dateFormat.getMonth(),dateFormat.getFullYear()) 
    for (let i = 0; i < 5; i++) {
        if (currDay <= totalDays) {
            monthArr.push(currDate)
            currDay+= 7
            if (dateFormat.getMonth() != 0) {
                currDate = currDay + '/' + dateFormat.getMonth()
            } else {
                currDate = currDay + '/' + '12'
            }
            
        } else {
            monthArr.push()
        }
    }
    localStorage.setItem('monthArr', monthArr)
    console.log(localStorage.getItem('monthArr'))
    // Populate forms 
    monthArr.forEach((date)=>{
        selectDate.innerHTML += /*html*/`
        <option value="${date}">${date}</option>`

        selectWeek.innerHTML += /*html*/`
        <option value="${date}">${date}</option>`
    })
    startdateData = JSON.stringify(monthArr[0])
    localStorage.setItem('startdate-data', startdateData)
})

startdate.addEventListener('mouseenter',()=>{
    if (startdate.value != '') {
        warning.innerHTML = 'WARNING: This is the MONTH start date, not the "week of" date!'
    } 
})   
startdate.addEventListener('mouseleave',()=>{
        warning.innerHTML = ''
})

selectWeek.addEventListener('change',()=>{
    selectDate.value = selectWeek.value
}) 

updateWeek.addEventListener('click', (e)=>{
    e.defaultPrevented
    if (!isEdit) {
        weekTable.push({weekOf: selectWeek.value, weekTheme: weekTheme.value })
        weekData = JSON.stringify(weekTable)
        localStorage.setItem('week-data', weekData)
        tbodyWeek.innerHTML = ''
        let index = 0;
        weekTable.forEach((table)=>{
            tbodyWeek.innerHTML+= /*html*/ `
            <tr data-id =${index}>
                <td style='color:#fff; background-color:#A0AEC0;border-right:1px solid #fff'>${table.weekOf}</td>
                <td style='color:#fff; background-color:#A0AEC0;border-right:1px solid #fff'>${table.weekTheme}</td>
                <td class='d-flex justify-content-between' style='background-color: #d3dbe6' >
                    <i class="bi bi-pencil-square edit px-4 text-success" onclick='editFunc(this)' style='cursor:pointer'></i>
                    <i class="bi bi-trash delete text-danger" onclick='delFunc(this)' style='cursor:pointer'></i>
                </td>
            </tr>
            `
            index++
        })
        // edit = document.querySelectorAll('.edit')
        
        // Array.of(edit).addEventListener('click', (e)=>{
        //     console.log(e.target.parentElement.parentElement.getAttribute("data-id"))
        // })
        
        selectWeek.value=''
        weekTheme.value=''

        if (weekTable.length <= monthArr.length) {
            weeksLeft = monthArr.length - weekTable.length
            weeksRemaining.innerHTML = `${weeksLeft} week(s) remaining`
        }
    } else {
        weekTable[editIndex].weekOf = selectWeek.value;
        weekTable[editIndex].weekTheme = weekTheme.value;

        weekData = JSON.stringify(weekTable)
        localStorage.setItem('week-data', weekData)

        selectWeek.value=''
        weekTheme.value=''
        index = 0;
        tbodyWeek.innerHTML = ''
        weekTable.forEach((table)=>{
            tbodyWeek.innerHTML+= /*html*/ `
            <tr data-id =${index}>
                <td style='color:#fff; background-color:#A0AEC0;border-right:1px solid #fff' >${table.weekOf}</td>
                <td style='color:#fff; background-color:#A0AEC0;border-right:1px solid #fff'>${table.weekTheme}</td>
                <td class='d-flex justify-content-between' style='background-color: #d3dbe6'>
                <i class="bi bi-pencil-square edit px-4 text-success" onclick='editFunc(this)' style='cursor:pointer'></i>
                    <i class="bi bi-trash delete text-danger" onclick='delFunc(this)' style='cursor:pointer'></i>
                </td>
            </tr>
            `
            index++
        })
        isEdit = false;
    }
    // window.location.href = '#href'
})


saveDay.addEventListener('click', ()=>{
    if(!isEdit) {
        dayTable.push({
            week: selectDate.value, 
            day: selectDay.value, 
            theme: dayTheme.value,
            ref: dayRef.value,
            overseers: dayOverseers.value,
            link: dayLink.value
        })
            // data = dayTable
            // localStorage.removeItem('data')
            dayData = JSON.stringify(dayTable)
            localStorage.setItem('day-data', dayData)
            tbodyDay.innerHTML = ''
            let index = 0;
        dayTable.forEach((table)=>{
            tbodyDay.innerHTML+= /*html*/ `
            <tr data-id =${index}>
                <td style='color:#fff; background-color:#5E6C83;border-right:1px solid #fff'>${table.week}</td>
                <td style='color:#fff;background-color:#2a4365;border-right:1px solid #fff'>${table.day.substring(0,3)}</td>
                <td style='color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.theme}</td>
                
                <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.ref}</td>
                <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.link.substring(0,10)}</td>
                <td style='font-size: 14px;color:#000;background-color:#F29D45;border-right:1px solid #fff'>${table.overseers}</td>
                <td class='d-flex justify-content-between'style='background-color: #d3dbe6'>
                    <i class="bi bi-pencil-square edit px-4 text-success" onclick='dayEditFunc(this)' style='cursor:pointer'></i>
                    <i class="bi bi-trash delete text-danger px-4 text-danger" onclick='dayDelFunc(this)' style='cursor:pointer'></i>
                </td>
            </tr>
            `
            index++
        })
        selectDate.value=''
        selectDay.value=''
        dayTheme.value=''
        dayRef.value=''
        dayOverseers.value=''
        dayLink.value=''
    } else {
        dayTable[editIndex].week = selectDate.value;
        dayTable[editIndex].day = selectDay.value;
        dayTable[editIndex].theme = dayTheme.value;
        dayTable[editIndex].ref = dayRef.value;
        dayTable[editIndex].link = dayLink.value;
        dayTable[editIndex].overseers = dayOverseers.value;

        dayData = JSON.stringify(dayTable)
        localStorage.setItem('day-data', dayData)

  
        // selectDate.value=''
        selectDay.value=''
        dayTheme.value=''
        dayRef.value=''
        dayLink.value=''
        dayOverseers.value=''

        index = 0;
        tbodyDay.innerHTML = ''
        dayTable.forEach((table)=>{
            tbodyDay.innerHTML+= /*html*/ `
            <tr data-id =${index}>
                <td style='color:#fff; background-color:#5E6C83;border-right:1px solid #fff'>${table.week}</td>
                <td style='color:#fff;background-color:#2a4365;border-right:1px solid #fff'>${table.day.substring(0,3)}</td>
                <td style='color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.theme}</td>
                <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.ref}</td>
                <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.link.substring(0,10)}</td>
                <td style='font-size: 14px;color:#000;background-color:#F29D45;border-right:1px solid #fff'>${table.overseers}</td>
                <td class='d-flex justify-content-between' style='background-color: #d3dbe6'>
                <i class="bi bi-pencil-square edit px-4 text-success" onclick='dayEditFunc(this)' style='cursor:pointer'></i>
                    <i class="bi bi-trash delete text-danger" onclick='dayDelFunc(this)' style='cursor:pointer'></i>
                </td>
            </tr>
            `
            index++
        })
        isEdit = false;
    }

})



function editFunc(e){
    editIndex = e.parentNode.parentNode.getAttribute("data-id")
    // selectWeek.value = weekTable[editIndex].weekOf
    selectWeek.innerHTML = /*html*/`
    <option value="${weekTable[editIndex].weekOf}">${weekTable[editIndex].weekOf}</option>`
    weekTheme.value = weekTable[editIndex].weekTheme
    isEdit = true
    window.location.href ='#near-top'
}
function delFunc(e) {
    editIndex = e.parentNode.parentNode.getAttribute("data-id")
    weekTable.splice(editIndex, 1)
    weekData = JSON.stringify(weekTable)
    localStorage.setItem('week-data', weekData)
    index = 0;
        tbodyWeek.innerHTML = ''
        weekTable.forEach((table)=>{
            tbodyWeek.innerHTML+= /*html*/ `
            <tr data-id =${index}>
                <td style='color:#fff; background-color:#cad1da;border-right:1px solid #fff'>${table.weekOf}</td>
                <td style='color:#fff; background-color:#cad1da;border-right:1px solid #fff'>${table.weekTheme}</td>
                <td class='d-flex justify-content-between' style='background-color: #d3dbe6'>
                <i class="bi bi-pencil-square edit px-4 text-success" onclick='editFunc(this)' style='cursor:pointer'></i>
                <i class="bi bi-trash delete text-danger" onclick='delFunc(this)' style='cursor:pointer'></i>
                </td>
            </tr>
            `
            index++
        })
        weeksLeft+=1
        weeksRemaining.innerHTML = `${weeksLeft} week(s) remaining`
}
function dayEditFunc(e){
    editIndex = e.parentNode.parentNode.getAttribute("data-id")
    // selectDate.value = dayTable[editIndex].week
    selectDate.innerHTML = /*html*/`
    <option value="${dayTable[editIndex].week}">${dayTable[editIndex].week}</option>`
    selectDay.value= dayTable[editIndex].day
    dayTheme.value= dayTable[editIndex].theme
    dayRef.value= dayTable[editIndex].ref
    dayLink.value= dayTable[editIndex].link
    dayOverseers.value= dayTable[editIndex].overseers
    isEdit = true
    window.location.href ='#near-top'
}
function dayDelFunc(e) {
    editIndex = e.parentNode.parentNode.getAttribute("data-id")
    dayTable.splice(editIndex, 1)
    dayData = JSON.stringify(dayTable)
    localStorage.setItem('day-data', dayData)
    index = 0;
        tbodyDay.innerHTML = ''
        dayTable.forEach((table)=>{
            tbodyWeek.innerHTML+= /*html*/ `
            <tr data-id =${index}>
                <td style='color:#fff; background-color:#5E6C83;border-right:1px solid #fff'>${table.week}</td>
                <td style='color:#fff;background-color:#2a4365;border-right:1px solid #fff'>${table.day}</td>
                <td style='color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.theme}</td>
                <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.ref}</td>
                <td style='font-size: 13px;color:#000;background-color:#F9CA7A;border-right:1px solid #fff'>${table.link}</td>
                <td style='font-size: 14px;color:#000;background-color:#F29D45;border-right:1px solid #fff'>${table.overseers}</td>
                <td class='d-flex justify-content-between' >
                <i class="bi bi-pencil-square edit px-4 text-success" onclick='dayEditFunc(this)' style='cursor:pointer'></i>
                <i class="bi bi-trash delete text-danger" onclick='dayDelFunc(this)' style='cursor:pointer'></i>
                </td>
            </tr>
            `
            index++
        })
}
function goLiveFunc(){
    let dataArr = []
    let errors = [];
    if (!localStorage.getItem('week-data')) errors.push(`Weeks data doesn't exist!`)
    if (!localStorage.getItem('day-data')) errors.push(`Day data doesn't exist!`)
    if (!localStorage.getItem('monthtitle-data')) errors.push(`Month title data doesn't exist!`)
    if (!localStorage.getItem('startdate-data')) errors.push(`Start Date  data doesn't exist!`)
    if (!localStorage.getItem('monthtext-data')) errors.push(`Start Date  data doesn't exist!`)
    if (errors) {
        errors.forEach((err)=>{
            console.log(err)
        })
    } 
    if (errors.length == 0) {
        let wd = JSON.parse(localStorage.getItem('week-data'))
        let dd = JSON.parse(localStorage.getItem('day-data'))
        let mt = localStorage.getItem('monthtitle-data')
        let tx = localStorage.getItem('monthtext-data')
        let sd = JSON.parse(localStorage.getItem('startdate-data'))

        let dataObj = {}
        let isNewMonth = true
        let mondayIndex = 0;
        dd.forEach((dayData)=>{
            if (isNewMonth) {
                dataObj.month = mt;
                dataObj.text = tx
                isNewMonth = false;
            }
            if (dayData.day == 'Monday') {
                dataObj.week = dayData.week;
                dataObj.day = dayData.day;
                dataObj.theme = dayData.theme;
                dataObj.ref = dayData.ref;
                dataObj.overseers = dayData.overseers;
                dataObj.link = dayData.link;
                dataObj.topic = wd[mondayIndex].weekTheme
                dataArr.push (dataObj)
                dataObj = {}
                mondayIndex++
            } else if (dayData.day == 'Saturday') {
                dataObj.day = dayData.day
                dataObj.overseers = dayData.overseers
                dataArr.push(dataObj)
                dataObj = {} 
            } else {
                dataObj.day = dayData.day;
                dataObj.theme = dayData.theme;
                dataObj.ref = dayData.ref;
                dataObj.overseers = dayData.overseers;
                dataObj.link = dayData.link;
                dataArr.push (dataObj)
                dataObj = {}
            }

            
        })

    }
    storedWeeks.value = ''
    weeksArr = []
    JSON.parse(weekData).forEach((week)=>{
        weeksArr.push(week.weekOf)
     })
     console.log(weeksArr)
    storedWeeks.value = JSON.stringify(weeksArr)
    storedData.value = JSON.stringify(dataArr)
    document.getElementById('edit-form').submit()
}
function populateList() {
    Array.of(localStorage.getItem('monthArr')).forEach((date)=>{
        selectDate.innerHTML += /*html*/`
        <option value="${date}">${date}</option>`

        selectWeek.innerHTML += /*html*/`
        <option value="${date}">${date}</option>`
    })
}
function clearFunc(e) {
    if (e.id == 'clear-week') {
        selectWeek.value=''
        weekTheme.value=''
    } else {
        selectDate.value=''
        selectDay.value=''
        dayTheme.value=''
        dayRef.value=''
        dayLink.value=''
        dayOverseers.value='' 
    }
}

