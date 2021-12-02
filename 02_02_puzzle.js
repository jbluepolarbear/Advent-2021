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
  let aim = 0;
  for (let commandArg of commandList) {
    switch (commandArg.command) {
      case "forward":
        const arg = parseInt(commandArg.args[0]);
        x += arg;
        y += arg * aim;
        break;
      case "down":
        aim += parseInt(commandArg.args[0]);
        break;
      case "up":
        aim -= parseInt(commandArg.args[0]);
        break;
    }
  }

  return x * y;
}
