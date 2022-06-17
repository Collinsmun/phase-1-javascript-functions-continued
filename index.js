// code your solution here
function saturdayFun(argument='roller-skate'){
    return `This Saturday, I want to ${argument}!`;
}


let mondayWork = function(argument="go to the office") {
    return `This Monday, I will ${argument}.`
  }

  let wrapAdjective = function(wr="*") {
    return function(adj="special") {
      return `You are ${wr}${adj}${wr}!`
    }
  }