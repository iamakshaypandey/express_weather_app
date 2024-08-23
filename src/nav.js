const Api_link = 'https://api.openweathermap.org/data/2.5/weather?q=Kannod&appid=b7406c322eaf624a78db29b8ec1c37ca'

 const dataFatch = async function(){
    const data = await fetch(Api_link)
    const dataList = await data.json()
    return dataList
}
module.exports={dataFatch};

