console.log('its working.')

let theme = localStorage.getItem('theme')
if(theme==null){
    setTheme('light')
}else{
    setTheme(theme)
}


let themeDots=document.getElementsByClassName('theme-dot')

for (let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click',function () {
        let mode = this.dataset.mode
        console.log('option clicked',mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode=='light') {
        document.getElementById('themeId').href='default.css'
    }

    if (mode=='blue') {
        document.getElementById('themeId').href='blue.css'
    }

    if (mode=='green') {
        document.getElementById('themeId').href='green.css'
    }

    if (mode=='purple') {
        document.getElementById('themeId').href='purple.css'
    }

    localStorage.setItem('theme',mode)
}