const express = require('express')
const mongodb = require ('mongodb').MongoClient
const cookieParser = require('cookie-parser')
const app = express()
const bodyParser = require('body-parser');
// import localStorage from 'localStorage'
let db

const conn = 'mongodb+srv://Amin1919:vdLL01KfAKmWOllv@cluster0.zpk7j.mongodb.net/scheduler?retryWrites=true&w=majority'
mongodb.connect(conn,{useNewUrlParser: true},(err, client)=>{
    db = client.db()
    app.listen(3000)

})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(cookieParser())

let cookieString
let cookieData
const weeks = 
        
    [
        {
        id: 1,
        week: '01/11',
        topic: 'Campaign',

        day: 'Monday',
        theme: 'Is This World Going to End?',
        ref: "-wp21 No. 2 p. 4 ",
        overseers: 'A Osafo/ D Griffiths',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=1',
        themeTitle: '"And this good news of the Kingdom will be preached...and then the end will come.” - Matt 24:14"'} ,

        {
        id: 2,
        day: 'Wednesday',
        theme: 'What Will End?',
        ref: '-wp21 No. 2 p. 5',
        overseers: 'S Baccas / D Moore',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=11'},

        {        
        id: 3,
        day: 'Friday',
        theme: 'Witnessing to Relatives',
        ref: '-km 12/04 p. 8',
        overseers: 'D Grant / C Yalley',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202004451'},

        {
        id: 4,
        day: 'Saturday',
        theme: '',
        ref: '',
        overseers: 'D Moore',
        link: ''},
    
// WEEK 2
        {
        id: 5,
        week: '08/11',
        topic: 'Campaign',
        day: 'Monday',
        theme: 'An End to Human Rulership',
        ref: '-wp21 No. 2 p. 6',
        overseers: 'D Grant / W Davies',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=16'},

        {
        id: 6,
        day: 'Wednesday',
        theme: 'Informal Witnessing',
        ref: '-od chap. 9 p.96-97 para 26-29',
        overseers: 'S Baccas / D Moore',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102014939#h=34'},

        {

        id: 7,
        day: 'Friday',
        theme: "When Will the End Come?",
        ref: '-wp21 No. 2 p. 7',
        overseers: 'R Santiago / T Boland Jr',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=1'},
  
        {
            
        id: 8,
        day: 'Saturday',
        theme: '',
        ref: '',
        overseers: 'S Baccas',
        link: ''},
// WEEK 3    
        {
            
        id: 9,
        week: '15/11',
        topic: 'Campaign',
        day: 'Monday',
        theme: 'Making Return Visits',
        ref: '-od chap. 9 p.91-92 para 14-15',
        overseers: 'D Grant / D Griffiths',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102014939#h=18'} ,

        {
            
        id: 10,
            day: 'Wednesday',
        theme: '“The Last Days”',
        ref: '-wp21 No. 2 p. 8',
        overseers: 'S Baccas / W Davies',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=10'},

        {
            
        id: 11,
        day: 'Friday',
        theme: "The Paradise Earth Is Near!",
        ref: "-wp21 No. 2 p. 9 (incl. box)",
        overseers: 'C Yalley / T Boland Jnr  ',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=13'},

        {
            
        id: 12,
        day: 'Saturday',
        theme: '',
        ref: '',
        overseers: 'D Grant',
        link: ''},

// WEEK 4
        {
            
        id: 13,
        week: '22/11',
        topic: 'Campaign',
        day: 'Monday',
        theme: 'How You Can Live in a New World',
        ref: "-wp21 No. 2 p. 10",
        overseers: 'D Grant / D Moore',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=1'},

        {
            
        id: 14,
        day: 'Wednesday',
        theme: 'Truths We Learn From the Bible',
        ref: "-wp21 No. 2 p. 11",
        overseers: 'S Baccas / D Grant',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=9'},

        {
            
        id: 15,
        day: 'Friday',
        theme: 'Read God’s Word, The Bible, Daily',
        ref: "-wp21 No. 2 p. 12",
        overseers: 'R Santiago / D Grant',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=18'},
  
        {
            
        id: 16,
        day: 'Saturday',
        theme: '',
        ref: '',
        overseers: 'D Moore',
        link: ''},
// WEEK 5
        {
            
        id: 17,
        week: '29/11',
        topic: 'Campaign',

        day: 'Monday',
        theme: 'Campaign Experiences!',
        ref: '',
        overseers: 'A Osafo / D Griffiths',
        link: ''},

        {
            
        id: 18,
        day: 'Wednesday',
        theme: 'The Fields Are White for Harvesting',
        ref: 'km 11/10 p. 1',
        overseers: 'S Baccas / D Grant',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202010401'},

        {
            
        id: 19,
        day: 'Friday',
        theme: 'A Help for Telephone Witnessing',
        ref: 'km 1/10 pp. 4-6',
        overseers: 'D Grant / W Davies',
        link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202009451'},
  
        {
            
        id: 19,
        day: 'Saturday',
        theme: '',
        ref: '',
        overseers: 'R Santiago',
        link: ''}
    ]

// create database array 
const dbArray = []

app.get('/', (req,res)=>{
    // res.redirect('/schedule')
    let data
    let week = []
    let weeksArr
    db.collection('data').find().toArray((err, items)=>{
        data = items

        // res.send(data)
    })
    db.collection('weeks').find().toArray((err, items)=>{    

  
        items.forEach((item, i)=> {
            week.push(item.week)
        })
        weeksArr = week[0]
        // console.log(weeks)
        console.log(data)
    })

        // res.render('home', {data})

})

app.post('/schedule/initialize', (req, res)=>{
    const date = new Date()
    res.send(req.body.startdate + '/' + req.body.create)
})
app.post('/schedule/edit', (req,res)=>{
    db.collection('weeks').insertOne({theme: req.body.theme}, ()=>{
        // res.send('One record submitted')
    })
    res.redirect('/schedule/edit')
})
app.post('/schedule/live', (req, res)=>{
    data = JSON.parse(req.body.storeddata)
    weeksArr = JSON.parse(req.body.storedweeks)
    // res.render('home', {data, weeksArr})
    db.collection('data').deleteMany({})
    db.collection('data').insertMany(data)
    db.collection('weeks').deleteMany({})
    db.collection('weeks').insertOne({week: weeksArr})

    // console.log(y)
    res.redirect('/schedule/edit')
})
app.get('/schedule/edit', (req, res)=>{
    // cookieString = req.cookies['cookieData']
    // cookieData = JSON.parse(cookieString)
    // console.log(JSON.parse(cookieData))
    // res.cookie('data', `${weeks}`)
    // console.log(localStorage.getItem('day-data'))
    res.render('edit',{title: 'Edit'})
})
app.get ('/cookies', (req, res)=>{
    // res.render('cookies',{title: 'Edit', data: JSON.parse(req.cookies['cookieData']) })
})
app.get('/schedule', (req, res)=>{
    const month = parseInt(weeks[0].week.substring(weeks[0].week.indexOf('/')+1))
    const today = new Date();
    const yearTitle = today.getFullYear();
    
    const dateArr = []; /* dates will be pushed to this array if key exists */
    switch(month) {
        case 1: monthTitle = 'January'
                break
        case 2: monthTitle = 'Feburary'
                break
        case 3: monthTitle = 'March'
                break
        case 4: monthTitle = 'April'
                break
        case 5: monthTitle = 'May'
                break
        case 6: monthTitle = 'June'
                break
        case 7: monthTitle = 'July'
                break
        case 8: monthTitle = 'August'
                break
        case 9: monthTitle = 'September'
                break
        case 10: monthTitle = 'October'
                break
        case 11: monthTitle = 'November'
                break
        case 12: monthTitle = 'December'
                break   
    }
    // check to see if week property exists and push it's value to array
    weeks.forEach((week)=>{
        if ('week'in week) {
            dateArr.push(week.week)
        }
    })

    const timeArr = ['11am/ 6.30pm','11am/ 6.30pm','11am/ 6.30pm','2pm',''];
    const dayArr = ['Monday','Wednesday','Friday','Saturday','Sunday',];
    let isSunday = false;

//     push variables and objects to views
    res.render('index',{monthTitle, yearTitle, dateArr, dayArr, isSunday, weeks})
})
app.get('/api/weeks', (req, res)=>{
    res.send(weeks)
})
app.get('/api/weeks/:id', (req, res)=>{
    const week = weeks.find(w => w.id === parseInt(req.params.id))
    if (!week) res.status(404).send(`Course ID doesn't exist`)
    res.send(week)
})


// wk1: [
//     {week: '01/11'},
//     {topic: 'Campaign'},

//     {day: 'Monday'},
//     {theme: 'Is This World Going to End?'},
//     {ref: "-wp21 No. 2 p. 4 "},
//     {overseers: 'A Osafo/ D Griffiths'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=1'} ,

//     {day: 'Wednesday'},
//     {theme: 'What Will End?'},
//     {ref: '-wp21 No. 2 p. 5'},
//     {overseers: 'S Baccas / D Moore'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=11'},

//     {day: 'Friday'},
//     {theme: 'Witnessing to Relatives'},
//     {ref: '-km 12/04 p. 8'},
//     {overseers: 'D Grant / C Yalley'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202004451'},

//     {day: 'Saturday'},
//     {theme: ''},
//     {ref: ''},
//     {overseers: 'D Moore'},
//     {link: ''}
// ],
// wk2:  [
//     {week: '08/11'},
//     {topic: 'Campaign'},

//     {day: 'Monday'},
//     {theme: 'An End to Human Rulership'},
//     {ref: '-wp21 No. 2 p. 6'},
//     {overseers: 'D Grant / W Davies'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021084#h=16'},

//     {day: 'Wednesday'},
//     {theme: 'Informal Witnessing'},
//     {ref: '-od chap. 9 p.96-97 para 26-29'},
//     {overseers: 'S Baccas / D Moore'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102014939#h=34'},

//     {day: 'Friday'},
//     {theme: "When Will the End Come?"},
//     {ref: '-wp21 No. 2 p. 7'},
//     {overseers: 'R Santiago / T Boland Jr'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=1'},

//     {day: 'Saturday'},
//     {theme: ''},
//     {ref: ''},
//     {overseers: 'S Baccas'},
//     {link: ''}
// ],
// wk3: [
//     {week: '15/11'},
//     {topic: 'Campaign'},

//     {day: 'Monday'},
//     {theme: 'Making Return Visits'},
//     {ref: '-od chap. 9 p.91-92 para 14-15'},
//     {overseers: 'D Grant / D Griffiths'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102014939#h=18'} ,

//     {day: 'Wednesday'},
//     {theme: '“The Last Days”'},
//     {ref: '-wp21 No. 2 p. 8'},
//     {overseers: 'S Baccas / W Davies'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=10'},

//     {day: 'Friday'},
//     {theme: "The Paradise Earth Is Near!"},
//     {ref: "-wp21 No. 2 p. 9 (incl. box)"},
//     {overseers: 'C Yalley / T Boland Jnr  '},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021085#h=13'},

//     {day: 'Saturday'},
//     {theme: ''},
//     {ref: ''},
//     {overseers: 'D Grant'},
//     {link: ''}
// ],
// wk4:  [
//     {week: '22/11'},
//     {topic: 'Campaign'},

//     {day: 'Monday'},
//     {theme: 'How You Can Live in a New World'},
//     {ref: "-wp21 No. 2 p. 10"},
//     {overseers: 'D Grant / D Moore'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=1'},

//     {day: 'Wednesday'},
//     {theme: 'Truths We Learn From the Bible'},
//     {ref: "-wp21 No. 2 p. 11"},
//     {overseers: 'S Baccas / D Grant'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=9'},

//     {day: 'Friday'},
//     {theme: 'Read God’s Word, The Bible, Daily'},
//     {ref: "-wp21 No. 2 p. 12"},
//     {overseers: 'R Santiago / D Grant'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021086#h=18'},

//     {day: 'Saturday'},
//     {theme: ''},
//     {ref: ''},
//     {overseers: 'D Moore'},
//     {link: ''}
// ],
// wk5:  [
//     {week: '29/11'},
//     {topic: 'Campaign'},

//     {day: 'Monday'},
//     {theme: 'Campaign Experiences!'},
//     {ref: ''},
//     {overseers: 'A Osafo / D Griffiths'},
//     {link: ''},

//     {day: 'Wednesday'},
//     {theme: 'The Fields Are White for Harvesting'},
//     {ref: 'km 11/10 p. 1'},
//     {overseers: 'S Baccas / D Grant'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202010401'},

//     {day: 'Friday'},
//     {theme: 'A Help for Telephone Witnessing'},
//     {ref: 'km 1/10 pp. 4-6'},
//     {overseers: 'D Grant / W Davies'},
//     {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202009451'},

//     {day: 'Saturday'},
//     {theme: ''},
//     {ref: ''},
//     {overseers: 'R Santiago'},
//     {link: ''}
// ]
