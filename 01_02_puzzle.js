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
  const depths = commandList.map(c => parseInt(c.command));
  const size = depths.length;
  for (let i = 0; i < size; ++i) {
    let newDepth = depths[i];
    if (i + 1 < size) {
      newDepth += depths[i + 1];
    }
    if (i + 2 < size) {
      newDepth += depths[i + 2];
    }
    if (lastValue === -1) {
      results.push(`${newDepth} (N/A - no previous measurement)`);
    } else {
      if (lastValue < newDepth) {
        total++;
      }
      results.push(`${newDepth} ${lastValue < newDepth ? 'increased' : 'decreased'}`);
    }
    
    lastValue = newDepth;
  }
  return total;
}
