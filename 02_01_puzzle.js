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
  let x = 0;
  let y = 0;
  for (let commandArg of commandList) {
    switch (commandArg.command) {
      case "forward":
        x += parseInt(commandArg.args[0]);
        break;
      case "down":
        y += parseInt(commandArg.args[0]);
        break;
      case "up":
        y -= parseInt(commandArg.args[0]);
        break;
    }
  }

  return x * y;
}
