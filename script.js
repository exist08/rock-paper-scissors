/*   Modal Show-Hide   */
const modalBackdrop = document.getElementById('backdrop')


const closeModal = document.getElementById('close')
closeModal.addEventListener('click',()=>{
    modalBackdrop.classList.add('not-active')
})

const openModal=document.getElementById('open')
openModal.addEventListener('click',()=>{
    // alert('hiiii')
    modalBackdrop.classList.remove('not-active')
})

/**********************************/

/*    Odds Logic    */
const outcomes = [
    {
        outcome:'paper',
        winsfrom:'rock',
        lossfrom:'scissors',
    },
    {
        outcome:'scissors',
        winsfrom:'paper',
        lossfrom:'rock',
    },
    {
        outcome:'rock',
        winsfrom:'scissors',
        lossfrom:'paper',
    }
]

const getRandInt = (max) =>{
    return Math.floor(Math.random()*max)
}

// console.log(getRandInt(3))

// const user1 = outcomes[getRandInt(3)]
// const user2 = outcomes[getRandInt(3)]
// let winuser
// if(user1.outcome===user2.lossfrom){
//     winuser=user1
//     console.log("User 1 has Won")
//     console.log('User 1 outcome : ', user1.outcome)
//     console.log('User 2 outcome : ', user2.outcome)
// }
// else if(user1.outcome===user2.winsfrom){
//     winuser=user2
//     console.log("User 2 has Won")
//     console.log('User 1 outcome : ', user1.outcome)
//     console.log('User 2 outcome : ', user2.outcome)
// }
// else{
//     console.log('Results as Draw')
//     console.log('User 1 outcome : ', user1.outcome)
//     console.log('User 2 outcome : ', user2.outcome)
// }


/*    Step 2 btn's Images,Colors     */
const userChoice = document.getElementById('user-choice')
const houseChoice = document.getElementById('house-choice')

const decorate=[
    'background-image: url(./images/icon-paper.svg);color: hsl(230, 89%, 62%);',
    'background-image: url(./images/icon-scissors.svg);color: hsl(40, 84%, 53%);',
    'background-image: url(./images/icon-rock.svg);color: hsl(349, 70%, 56%);'
]


/*    Move to Step 2 Logic    */
const step1=document.getElementById('step1')      // Step 1 Window 
const step2=document.getElementById('step2')      // Step 2 Window
step2.style.cssText+='display:none'

let choice

const score=document.getElementById('score')
let scoreCount=0
score.innerHTML=scoreCount

const buttons = document.querySelectorAll('.step-1-btns')
buttons.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        // console.log('Hello There ',btn.classList[1])
        choice=btn.classList[1]
        step1.style.cssText+='display:none'                 // hide step1
        step2.style.cssText+='display:flex'                 // show step2

        userChoice.style.cssText+=`${decorate[idx]}`        // decorate user choice btn
        
        const user = outcomes[idx]
        const randInt=getRandInt(3)
        const house = outcomes[randInt]
        let winuser
        if(user.outcome===house.lossfrom){
            winuser='user'
            console.log("User  has Won")
            console.log('User  outcome : ', user.outcome)
            console.log('house  outcome : ', house.outcome)
        }
        else if(user.outcome===house.winsfrom){
            winuser='house'
            console.log("house  has Won")
            console.log('User  outcome : ', user.outcome)
            console.log('house  outcome : ', house.outcome)
        }
        else{
            winuser='draw'
            console.log('User  outcome : ', user.outcome)
            console.log('house  outcome : ', house.outcome)
        }

        houseChoice.style.cssText+=`${decorate[randInt]}`

        const result= document.getElementById('result')

        if(winuser==='user'){
            result.innerHTML='you won'
            scoreCount++
            score.innerHTML=scoreCount
            userChoice.style.boxShadow=`0 0 0 60px rgba(255,255,255, 0.03),
            0 0 0 130px rgba(255,255,255, 0.02),
            0 0 0 210px rgba(255,255,255, 0.015),
            0 10px 0px rgba(0, 0, 0,0.3),
            0 10px 0px currentColor,
            0 10px 0 rgba(0, 0, 0,0.15) inset`
            houseChoice.style.boxShadow=''
        }
        else if(winuser==='draw'){
            result.innerHTML='draw'
            houseChoice.style.boxShadow=''
            userChoice.style.boxShadow=''
        }
        else{
            result.innerHTML='you lose'
            scoreCount=0
            score.innerHTML=scoreCount
            houseChoice.style.boxShadow= `0 0 0 60px rgba(255,255,255, 0.03),
            0 0 0 130px rgba(255,255,255, 0.02),
            0 0 0 210px rgba(255,255,255, 0.015),
            0 10px 0px rgba(0, 0, 0,0.3),
            0 10px 0px currentColor,
            0 10px 0 rgba(0, 0, 0,0.15) inset`
            userChoice.style.boxShadow=''
        }
    })
})

/*     Move to Step 1 Logic      */
const playAgain= document.getElementById('play-again')
playAgain.onclick = ()=>{
    step1.style.cssText-='display:none'                 // show step1
    step2.style.cssText+='display:none'                 // hide step2
}
