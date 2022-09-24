const submitBtn = document.querySelector('.submitBtn')
const d = document.querySelector('.d')
const t = document.querySelector('.t')
const resultArea = document.querySelector('.resultArea')

const today = new Date()
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var date = today.getDate()
var month = months[today.getMonth()]
var day = days[today.getDay()]
var time = ''
today.getHours() > 12 ? time = `${today.getHours() - 12} PM` : time = `${today.getHours()} AM`

d.innerText = `${day} - ${date} ${month}`
t.innerText = time

submitBtn.onclick = async () => {
    const city = document.querySelector('.cityName').value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=332d720dfd838ca3d6591c58c427cf35`)
    const data = await response.json()
    console.log(data)
    resultArea.innerHTML = `<p>${data.name}, ${data.sys.country}</p><p>${data.main.temp}°C</p>`
}