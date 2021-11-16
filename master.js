// INITIALIZE
const month = document.getElementById('month');
const verse = document.getElementById('text');
const weekOf = document.getElementById('week-of');
const main = document.querySelector('main header');
const desktop = document.querySelector('#desktop header');
const topBar = document.querySelector('.topbar');
const monday = document.querySelector('.monday');
const weekArr = ['wk1','wk2','wk3','wk4','wk5',];
const timeArr = ['11am/ 6.30pm','11am/ 6.30pm','11am/ 6.30pm','2pm'];
const dayArr = [2,7,12,17];
const themeArr = [3,8,13,18];
const refArr = [4,9,14,19];
const overseersArr = [5,10,15,20];
const linkArr = [6,11,16,21];
let timeStr;
const weekTime = '11am / 6.30pm';
const weekEnd = '2pm';
// Media Query
let mq = window.matchMedia('(min-width: 920px)');



const heading = [
    {month: "November 2021"},
    {text: '“And this good news of the Kingdom will be preached...and then the end will come.” - Matt 24:14'}
];
// DATES - The number of date entries dictates the number of weeks looped! 
const dates = [
    '01/11','08/11','15/11','22/11', '29/11'
];

// const info = [
//     {topic: 'Bible Studies'},
//     {title: 'Campaign Experiences'}
// ];

const data = {
        
        wk1: [
            {week: '01/11'},
            {topic: 'Campaign'},

            {day: 'Monday'},
            {theme: 'Is This World Going to End?'},
            {ref: "-wp21 No. 2 p. 4 "},
            {overseers: 'A Osafo/ D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=1'} ,

            {day: 'Wednesday'},
            {theme: 'What Will End?'},
            {ref: '-wp21 No. 2 p. 5'},
            {overseers: 'S Baccas / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=11'},

            {day: 'Friday'},
            {theme: 'Witnessing to Relatives'},
            {ref: '-km 12/04 p. 8'},
            {overseers: 'D Grant / C Yalley'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202004451'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Moore'},
            {link: ''}
        ],
        wk2:  [
            {week: '08/11'},
            {topic: 'Campaign'},

            {day: 'Monday'},
            {theme: 'An End to Human Rulership'},
            {ref: '-wp21 No. 2 p. 6'},
            {overseers: 'D Grant / W Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=16'},
 
            {day: 'Wednesday'},
            {theme: 'Informal Witnessing'},
            {ref: '-od chap. 9 p.96-97 para 26-29'},
            {overseers: 'S Baccas / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102014939#h=34'},
  
            {day: 'Friday'},
            {theme: "When Will the End Come?"},
            {ref: '-wp21 No. 2 p. 7'},
            {overseers: 'R Santiago / T Boland Jr'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=1'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'S Baccas'},
            {link: ''}
        ],
        wk3: [
            {week: '15/11'},
            {topic: 'Campaign'},

            {day: 'Monday'},
            {theme: 'Making Return Visits'},
            {ref: '-od chap. 9 p.91-92 para 14-15'},
            {overseers: 'D Grant / D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102014939#h=18'} ,

            {day: 'Wednesday'},
            {theme: '“The Last Days”'},
            {ref: '-wp21 No. 2 p. 8'},
            {overseers: 'S Baccas / W Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=10'},

            {day: 'Friday'},
            {theme: "The Paradise Earth Is Near!"},
            {ref: "-wp21 No. 2 p. 9 (incl. box)"},
            {overseers: 'C Yalley / T Boland Jnr  '},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=13'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Grant'},
            {link: ''}
        ],
        wk4:  [
            {week: '22/11'},
            {topic: 'Campaign'},

            {day: 'Monday'},
            {theme: 'How You Can Live in a New World'},
            {ref: "-wp21 No. 2 p. 10"},
            {overseers: 'D Grant / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=1'},
 
            {day: 'Wednesday'},
            {theme: 'Truths We Learn From the Bible'},
            {ref: "-wp21 No. 2 p. 11"},
            {overseers: 'S Baccas / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=9'},
  
            {day: 'Friday'},
            {theme: 'Read God’s Word, The Bible, Daily'},
            {ref: "-wp21 No. 2 p. 12"},
            {overseers: 'R Santiago / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=18'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Moore'},
            {link: ''}
        ],
        wk5:  [
            {week: '29/11'},
            {topic: 'Campaign'},

            {day: 'Monday'},
            {theme: 'Campaign Experiences!'},
            {ref: ''},
            {overseers: 'A Osafo / D Griffiths'},
            {link: ''},
 
            {day: 'Wednesday'},
            {theme: 'The Fields Are White for Harvesting'},
            {ref: 'km 11/10 p. 1'},
            {overseers: 'S Baccas / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202010401'},
  
            {day: 'Friday'},
            {theme: 'A Help for Telephone Witnessing'},
            {ref: 'km 1/10 pp. 4-6'},
            {overseers: 'D Grant / W Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202009451'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'R Santiago'},
            {link: ''}
        ]

    
}
// DEVELOPER MODE - Prevents mobile ver on lg screen
if (mq.matches){
    document.querySelector('#mobile').style.display = 'none'; 
}

localStorage.setItem('dataJanHeading', JSON.stringify(heading));
localStorage.setItem('dataJan', JSON.stringify(data));

/*ASSIGN LOCAL STORAGE VALUES*/
const outputArray = JSON.parse(localStorage.getItem('dataJan'))

// MONTH & TEXT
month.textContent = heading[0].month.toUpperCase();
verse.textContent = heading[1].text;

// WEEKOF
dates.forEach((week, i)=>{
    weekOf.innerHTML += `<a href="#id-${i}"><span>${week}</span></a>`
});

// MAIN
dates.forEach((weekNumber, w)=>{

main.innerHTML += 
    `<div class="topbar">
    <!-- MAIN -->
    <div class='week'>Week - ${data[weekArr[w]][0].week}</div>
    <h4 class='theme'>${data[weekArr[w]][1].topic}</h4>
    <a href="#"><i class="fa fa-angle-double-up " aria-hidden="true"></i></a>
</div>`;

for (x = 0; x < 4; x++) {
    if (x != 3){
        timeStr = weekTime;
    } else 
    {
        timeStr = weekEnd;
    }
    main.innerHTML += `<div class="wrapper">
        <div class="monday">
            <p>${data[weekArr[w]][dayArr[x]].day}</p>
            <p>${timeStr}</p>
        </div>
        <div class="theme">
            <a href='${data[weekArr[w]][linkArr[x]].link}'><h3>${data[weekArr[w]][themeArr[x]].theme}</h3>
            <div class="ref">${data[weekArr[w]][refArr[x]].ref}</div>
            <a/>
            <footer>
                <p>${data[weekArr[w]][overseersArr[x]].overseers}</p>
            </footer>
        </div>
    </div>`
}

main.innerHTML += `
<div class="monday mb-60">
            <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" style='color: white'><p>Sunday</p></a>
            <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" style='color: white'><span style='font-size: 1rem; display:block'>Group Overseers</span></a>
        </div>`
      
});
// DESKTOP
desktop.innerHTML+= `<div class="grids bg-blue mb-8">
    <span style='background: #fff;'></span>
    <span>Monday<br>11am / 6.30pm</span>
    <span>Tuesday</span>
    <span>Wednesday<br>11am / 6.30pm</span>
    <span>Thursday</span>
    <span>Friday<br>11am / 6.30pm</span>
    <span>Saturday<br>2pm</span>
    <span>Sunday</span>
</div>`
desktop.innerHTML += ` <div class="grids ">
    <span class='bg-green'>Group focus</span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'></span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'></span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'>Review</span>
    <span class='bg-green'>Group<br>Overseers</span>
</div>`

dates.forEach((weekNumber, w)=>{

    desktop.innerHTML += `<div class="grids mt">
    <div class="bg-grey align-items">
        <span class='bold'>Week ${weekNumber}</span>
        <span style='color: var(--grey-light)'>${data[weekArr[w]][1].topic}</span>
    </div>
    <div class="bg-orange text-16 flex-align ">
        <a href="${data[weekArr[w]][6].link}"><p >${data[weekArr[w]][3].theme}</p></a>
        <a href=""><em>${data[weekArr[w]][4].ref}</em></a>
        <footer>${data[weekArr[w]][5].overseers}</footer>
    </div>
    <div class="bg-grey-light"></div>
    <div class="bg-orange flex-align text-16">
        <a href="${data[weekArr[w]][11].link}"><p >${data[weekArr[w]][8].theme}</p></a>
       <a href="${data[weekArr[w]][11].link}"><em>${data[weekArr[w]][9].ref}</em></a>
        <footer>${data[weekArr[w]][10].overseers}</footer>
    </div>
    <div class="bg-grey-light"></div>
    <div class="bg-orange spacing flex-align flex-align text-16">
        <a href="${data[weekArr[w]][16].link}"><p >${data[weekArr[w]][13].theme}</p></a>
        <a href="${data[weekArr[w]][16].link}"><em>${data[weekArr[w]][14].ref}</em></a>
    <footer>${data[weekArr[w]][15].overseers}</footer>
    </div>
    <div class="bg-orange flex-align">
        <p >${data[weekArr[w]][18].theme}</p>
        <em>${data[weekArr[w]][19].ref}</em>
        <footer>${data[weekArr[w]][20].overseers}</footer>
    </div>
        <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" class='combined bg-orange'>
          
        </a>`
});
// DYNAMICALLY INSERT ID'S
let allClasses = document.getElementsByClassName('topbar');
let all = [...allClasses]
all.forEach((classy, i)=>{
    classy.id = `id-${i}`
});
document.querySelector('body').style.marginBottom = '200px';



// JS MEDIA QUERIES
window.addEventListener('resize', ()=>{

    if (mq.matches){
        document.querySelector('#mobile').style.display = 'none';
        document.querySelector('#desktop').style.display = 'block';
    } else {
        document.querySelector('#desktop').style.display = 'none';
        document.querySelector('#mobile').style.display = 'block';
    }
});








<div class="bg-grey-light"></div>
            <div class="bg-orange flex-align text-16">
                <a href="${data[weekArr[w]][11].link}"><p >${data[weekArr[w]][8].theme}</p></a>
            <a href="${data[weekArr[w]][11].link}"><em>${data[weekArr[w]][9].ref}</em></a>
                <footer>${data[weekArr[w]][10].overseers}</footer>
            </div>
            <div class="bg-grey-light"></div>
            <div class="bg-orange spacing flex-align flex-align text-16">
                <a href="${data[weekArr[w]][16].link}"><p >${data[weekArr[w]][13].theme}</p></a>
                <a href="${data[weekArr[w]][16].link}"><em>${data[weekArr[w]][14].ref}</em></a>
            <footer>${data[weekArr[w]][15].overseers}</footer>
            </div>
            <div class="bg-orange flex-align">
                <p >${data[weekArr[w]][18].theme}</p>
                <em>${data[weekArr[w]][19].ref}</em>
                <footer>${data[weekArr[w]][20].overseers}</footer>
            </div>
                <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" class='combined bg-orange'>
                
                </a>


// <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" class='combined bg-orange'></a>
