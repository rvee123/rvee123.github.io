const form = document.querySelector(".screen_form")
const input = document.querySelector(".screen_input")
let active = false

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(active === false){
        myCountdown(input.value)
        active = true
    }
})

function myCountdown(tid){
    let countdown = tid
    let h = hours(countdown)
    let m = minutes(countdown)
    let s = seconds(countdown)
    const screen = document.querySelector('.screen')

    function seconds(timer){
            switch(true){
                case timer >= 60:
                    return timer % 60
                    break
                default:
                    return timer
            }
    }

    function minutes(timer){
            switch(true){
                case timer >= 3600:
                    return (timer / 60) % 60
                    break
                default:
                    return Math.floor(timer/60)
            }
    }

    function hours(timer){
            switch(true){
                default:
                    return Math.floor(timer/3600)
            }
    }

    const myTimer = setInterval(() => {
        if(countdown == 0){
            clearInterval(myTimer)
            active = false
        }
        countdown--
        switch(true){
            case s < 10 && m < 10 && h < 10:
                screen.innerText = `0${h}:0${m}:0${s}`
                break
            case s < 10 && m < 10:
                screen.innerText = `${h}:0${m}:0${s}`
                break
            case s < 10 && h < 10:
                screen.innerText = `0${h}:${m}:0${s}`
                break
            case m < 10 && h < 10:
                screen.innerText = `0${h}:0${m}:${s}`
                break
            case s < 10:
                screen.innerText = `${h}:${m}:0${s}`
                break
            case m < 10:
                screen.innerText = `${h}:0${m}:${s}`
                break
            case h < 10:
                screen.innerText = `0${h}:${m}:${s}`
                break
            default:
                screen.innerText = `${h}:${m}:${s}`
        }
        switch(true){
            case m == 0:
                h = hours(countdown)
            case s == 0:
                m = minutes(countdown)
            default:
                s = seconds(countdown)
        }
    }, 1000);
}