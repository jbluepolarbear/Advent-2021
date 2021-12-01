//html entry point
function puzzleFunction(input) {
  let buffer = _.map(input.split('\n'), (e) => {
      let splits = e.split(' ');
      commandArg = {};
      commandArg.command = splits.shift();
      commandArg.args = splits;
      return commandArg;
  });
  return runProgram(buffer);
}

function runProgram(commandList) {
  var input = commandList[0].command;
  var total = 0;
  for (let c of input) {
    total += c === '(' ? 1 : -1;
  }
  return total;
}
