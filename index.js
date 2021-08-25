// Your code here
function saturdayFun(activity = 'roller-skate') {
    return  `This Saturday, I want to ${activity}!`;
}
let mondayWork = function work(workActivity = 'go to the office'){
 
    return `This Monday, I will ${workActivity}.`
}

let dayOne = mondayWork();

function wrapAdjective (symbol="*") {
    let emphatic = 'a dedicated programer'
    const specialName = function(comment="special") {
    return `You are ${symbol}${comment}${symbol}!`
}
    return specialName;
}