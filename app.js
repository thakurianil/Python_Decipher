function parseGridFromData() {
    const rawData = [
        { x: 0, y: 0, char: '█' },
        { x: 0, y: 1, char: '█' },
        { x: 0, y: 2, char: '█' },
        { x: 1, y: 0, char: '▀' },
        { x: 1, y: 1, char: '▀' },
        { x: 2, y: 0, char: '▀' }
    ];

    // const rawData = [
    //     { x: 93, y: 5, character: '░' },
    //     { x: 2, y: 5, character: '░' },
    //     { x: 8, y: 0, character: '░' },
    //     { x: 39, y: 1, character: '█' },
    //     { x: 64, y: 0, character: '░' },
    //     { x: 63, y: 1, character: '█' },
    //     { x: 84, y: 3, character: '█' },
    //     { x: 9, y: 4, character: '█' },
    //     { x: 55, y: 1, character: '█' },
    //     { x: 23, y: 4, character: '█' },
    //     { x: 91, y: 5, character: '█' },
    //     { x: 21, y: 5, character: '█' },
    //     { x: 79, y: 1, character: '░' },
    //     { x: 65, y: 1, character: '░' },
    //     { x: 52, y: 5, character: '█' },
    //     { x: 49, y: 5, character: '░' },
    //     { x: 24, y: 1, character: '░' },
    //     { x: 42, y: 5, character: '░' },
    //     { x: 6, y: 3, character: '█' },
    //     { x: 24, y: 2, character: '░' },
    //     { x: 0, y: 4, character: '█' },
    //     { x: 65, y: 3, character: '█' },
    //     { x: 74, y: 5, character: '░' },
    //     { x: 36, y: 6, character: '░' },
    //     { x: 22, y: 1, character: '█' },
    //     { x: 62, y: 3, character: '░' },
    //     { x: 24, y: 5, character: '░' },
    //     { x: 58, y: 5, character: '█' },
    //     { x: 35, y: 5, character: '█' },
    //     { x: 55, y: 6, character: '░' },
    //     { x: 20, y: 3, character: '█' },
    //     { x: 88, y: 0, character: '█' },
    //     { x: 46, y: 3, character: '█' },
    //     { x: 8, y: 6, character: '█' },
    //     { x: 13, y: 5, character: '█' },
    //     { x: 76, y: 1, character: '█' },
    //     { x: 54, y: 4, character: '█' },
    //     { x: 2, y: 1, character: '█' },
    //     { x: 91, y: 0, character: '█' },
    //     { x: 34, y: 4, character: '█' },
    //     { x: 80, y: 6, character: '█' },
    //     { x: 12, y: 0, character: '█' },
    //     { x: 14, y: 5, character: '░' },
    //     { x: 1, y: 3, character: '█' },
    //     { x: 67, y: 2, character: '░' },
    //     { x: 93, y: 5, character: '░' },
    //     { x: 48, y: 1, character: '█' },
    //     { x: 79, y: 5, character: '█' },
    //     { x: 13, y: 0, character: '█' },
    //     { x: 39, y: 5, character: '█' },
    //     { x: 48, y: 5, character: '░' },
    //     { x: 12, y: 6, character: '█' },
    //     { x: 92, y: 3, character: '█' },
    //     { x: 52, y: 5, character: '█' },
    //     { x: 55, y: 4, character: '░' },
    //     { x: 61, y: 2, character: '░' },
    //     { x: 66, y: 5, character: '█' },
    //     { x: 7, y: 4, character: '█' },
    //     { x: 83, y: 6, character: '█' },
    //     { x: 33, y: 4, character: '█' },
    //     { x: 85, y: 0, character: '░' },
    //     { x: 56, y: 2, character: '░' },
    //     { x: 32, y: 0, character: '█' },
    //     { x: 72, y: 6, character: '█' }
    // ];
  
    // Step 2: Find the dimensions of the grid (max x and y)
    const maxX = Math.max(...rawData.map(data => data.x));
    const maxY = Math.max(...rawData.map(data => data.y));

    // Step 3: Initialize an empty grid (fill with spaces)
    const grid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '));

    // Step 4: Place the characters in the grid at the specified positions
    rawData.forEach(({ x, y, char }) => {
        grid[y][x] = char;
    });

    // Step 5: Print the grid row by row
    grid.forEach(row => {
        console.log(row.join(''));
    });
}

// Call the function to display the grid
parseGridFromData();
