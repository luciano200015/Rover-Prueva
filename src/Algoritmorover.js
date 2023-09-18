function moveRover(x, y, orientation, instructions) {
    for (let i = 0; i < instructions.length; i++) {
      const instruction = instructions[i];
      switch (instruction) {
        case 'L':
          if (orientation === 'N') orientation = 'W';
          else if (orientation === 'W') orientation = 'S';
          else if (orientation === 'S') orientation = 'E';
          else if (orientation === 'E') orientation = 'N';
          break;
        case 'R':
          if (orientation === 'N') orientation = 'E';
          else if (orientation === 'E') orientation = 'S';
          else if (orientation === 'S') orientation = 'W';
          else if (orientation === 'W') orientation = 'N';
          break;
        case 'M':
          if (orientation === 'N') y++;
          else if (orientation === 'E') x++;
          else if (orientation === 'S') y--;
          else if (orientation === 'W') x--;
          break;
      }
    }
    return `${x} ${y} ${orientation}`;
  }
  function processRovers(input) {
    const lines = input.split('\n');

    let result = '';
    for (let i = 1; i < lines.length; i += 2) {
      console.log(i);
      const [x, y, orientation] = lines[i].split(' ');
      console.log('x: ', x, ' y: ', y, ' orien: ', orientation);
      const instructions = lines[i + 1];
      console.log(instructions);
      const finalPosition = moveRover(Number(x), Number(y), orientation, instructions);
      result += finalPosition + '\n';
    }
    return result;
  }
  const input = `5 5
  1 2 N
  LMLMLMLMM
  3 3 E
  MMRMMRMRRM`;
  const output = processRovers(input);
  
  console.log('-----------------------')
  console.log(output);