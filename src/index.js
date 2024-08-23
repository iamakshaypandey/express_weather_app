
const express = require('express')
const path = require('path')
const { dataFatch } = require('./nav')
const { log } = require('console')
const app = express()
const port = 3000


const staticpath = (path.join(__dirname,'../public'));

app.use(express.static(staticpath))

// to set view engin like hbs or bug or ejs templlate engine

app.set("view engine","hbs")
app.set('views',path.join(__dirname,'../views'))

// tmplate engin route


const dataObj = async function (){

    const data = await dataFatch()    
    return {
        location:data.name,
        tempstatus:data.weather[0].main,
        country:data.sys.country,
        tempval:data.main.feels_like,
        mintemp:data.main.temp_min,
        maxtemp:data.main.temp_max
    }
}



let dataLocation
let dataContry
let dataMintemp
let dataMaxtemp
let dataTemval
let dataTempstatus
dataObj().then(res=>{
    dataLocation = res.location
    dataContry = res.country
    dataTemval=res.tempval
    dataTempstatus=res.tempstatus
    dataMintemp=res.mintemp
    dataMaxtemp=res.maxtemp
});

app.get('',(req,res)=>{  
        res.render('index',{
            location:dataLocation,
            country:dataContry,
            mintemp:dataMintemp,
            maxtemp:dataMaxtemp,
            tempval:dataTemval,
            tempstatus:dataTempstatus
        });
})


app.listen(port,()=>{
    console.log('listen',port);
})