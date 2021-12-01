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
  const input = commandList[0].command;
  const target = commandList[0].args[0];
  let total = 0;
  let result = 0;
  for (let i = 0; i < input.length; ++i) {
    total += input[i] === "(" ? 1 : -1;
    if (total == target) {
      result = i + 1;
      break;
    }
  }
  return result;
}
