// let random = Math.random()*4+1
// let num = Math.floor(random)
// console.log(num)
// switch(num){
//     case 1:
//         console.log(`num: ${num}`)
//         break
//     case 2:
//         console.log(`num: ${num}`)
//         break
//     case 3:
//         console.log(`num: ${num}`)
//         break
//     case 4:
//         console.log(`num: ${num}`)
//         break
// }

// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }

// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

// let answer = prompt('How old are you?')
// switch(true){
//     case answer < 18:
//         console.log('You are not old enough to drive!')
//         break
//     case answer >= 18:
//         console.log('You are old enough to drive!')
//         break
//     default:
//         console.log('Invalid input!')
// }

// let myAge = 20
// let yourAge = prompt('How old are you?')

// if(myAge == yourAge){
//     console.log('We are the same age')
// }else if(myAge < yourAge){
//     console.log('You are older than me')
// }else if(myAge > yourAge){
//     console.log('You are younger than me')
// }else{
//     console.log('Invalid!')
// }

// let a = 4
// let b = 3
// if(a>b){
//     console.log(`a is greater than b`)
// }else{
//     console.log(`b is greater than a`)
// }

// let answer = prompt('enter a number')
// if(answer % 2 == 0){
//     console.log(`${answer} is even`)
// }else{
//     console.log(`${answer} is odd`)
// }

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let points = prompt("Enter points");
// switch (true) {
//   case points < 0:
//     console.log("Invalid input! (0-100)");
//     break;
//   case points <= 49:
//     console.log("Your grade is F");
//     break;
//   case points <= 59:
//     console.log("Your grade is D");
//     break;
//   case points <= 69:
//     console.log("Your grade is C");
//     break;
//   case points <= 89:
//     console.log("Your grade is B");
//     break;
//   case points <= 100:
//     console.log("Your grade is A");
//     break;
//   default:
//     console.log("Invalid input! (0-100)");
// }

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let now = new Date()
// let day = now.getDay()
// let year = now.getFullYear()
// console.log(day)
// let answer = prompt('Month?')
// switch(answer.toLowerCase()){
//     case answer = 'january':
//         console.log('January has 31 days.')
//         break
//     case answer = 'february':
//         switch(true){
//             case year % 4 === 0:
//                 console.log('February has 29 days.')
//                 break
//             default:
//                 console.log('February has 28 days.')
//         }
//         break
//     case answer = 'march':
//         console.log('March has 31 days.')
//         break
//     case answer = 'april':
//         console.log('April has 30 days.')
//         break
//     case answer = 'may':
//         console.log('may has 31 days.')
//         break
//     case answer = 'june':
//         console.log('June has 30 days.')
//         break
//     case answer = 'july':
//         console.log('July has 31 days.')
//         break
//     case answer = 'august':
//         console.log('August has 31 days.')
//         break
//     case answer = 'september':
//         console.log('September has 30 days.')
//         break
//     case answer = 'october':
//         console.log('October has 31 days.')
//         break
//     case answer = 'november':
//         console.log('November has 30 days.')
//         break
//     case answer = 'december':
//         console.log('December has 31 days.')
//         break
//     default:
//         console.log('Spelled wrong or not a month!')
// }
// let total = prompt('countdown: seconds')
// let hours = Math.floor(timer/3600)
// let minutes = Math.floor(timer/60)

// function timer(timer){

//     if(timer < 3600){
//         h = Math.floor(timer/360)

//             switch(true){
//                 case s < 24:
//                     h--
//                     break
//                 default:
//                     break
//             }

//     }
    
//     if(timer < 600){
//         m = Math.floor(timer/60)

//             switch(true){
//                 case m < 60:
//                     m--
//                     break
//                 default:
//                     break
//             }

//     }
    
//     if(timer < 60){
//         s = timer

//             switch(true){
//                 case s < 60:
//                     s--
//                     break
//                 default:
//                     break
//             }

//     }
//     return console.log(`${h}:${m}:${s}`)
// }

// function seconds(timer){
//     let s = 59
//     if(timer < 60){
//         setInterval(() => {
//             switch(true){
//                 case s < 10:
//                     return console.log(`0${s}`)
//                     s--
//                     break
//                 case s < 60:
//                     return console.log(`${s}`)
//                     s--
//                     break
//                 default:
//                     break
//             }
//         }, 1000);
//     }
// }
function myCountdown(tid){
    let countdown = tid

    let h = hours(countdown)
    let m = minutes(countdown)
    let s = seconds(countdown)

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
        if(countdown == 0){clearInterval(myTimer)}
        countdown--
        switch(true){
            case s < 10 && m < 10 && h < 10:
                console.log(`0${h}:0${m}:0${s}`)
                break
            case s < 10 && m < 10:
                console.log(`${h}:0${m}:0${s}`)
                break
            case s < 10 && h < 10:
                console.log(`0${h}:${m}:0${s}`)
                break
            case m < 10 && h < 10:
                console.log(`0${h}:0${m}:${s}`)
                break
            case s < 10:
                console.log(`${h}:${m}:0${s}`)
                break
            case m < 10:
                console.log(`${h}:0${m}:${s}`)
                break
            case h < 10:
                console.log(`0${h}:${m}:${s}`)
                break
            default:
                console.log(`${h}:${m}:${s}`)
                return `${h}:${m}:${s}`
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
// setInterval(() => {
//     console.log(`${h}:${m}:${s}`)
//     countdown--
// }, 1000);

// if(timer > 0){
//     setInterval(() => {
//         --timer
//         switch(true){
//             case timer < 10:
//                 console.log(`00:0${seconds}`)
//                 break
//             case timer < 60:
//                 console.log(`00:${seconds}`)
//                 break
//             case timer < 600:
//                 console.log(`0${minutes}:${seconds}`)
//                 break
//             case timer < 3600:
//                 console.log(`${minutes}:${seconds}`)
//                 break
//         }
//     }, 1000);
// }