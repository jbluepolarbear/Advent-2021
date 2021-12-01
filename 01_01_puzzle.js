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
  var lastValue = -1;
  var results = [];
  let total = 0;
  for (let depth of commandList.map(_ => parseInt(_.command))) {
    if (lastValue === -1) {
      results.push(`${depth} (N/A - no previous measurement)`);
    } else {
      if (lastValue < depth) {
        total++;
      }
      results.push(`${depth} ${lastValue < depth ? 'increased' : 'decreased'}`);
    }
    
    lastValue = depth;
  }
  return total;
}
