'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Ankanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/**
 * 1) Loop over the game.scored array and print each player name to the console,
 * along with the goal number
 * Example ('Goal 1: Player Name')
 */
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

/**
 * 2) Use a loop to calculate the average odd and log it to the console
 */
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

/**
 * 3) Print the 3 odds to the console, but in a nice formatted way, exactly like this:
 *    Odd of victory Bayern Munich: 1.33
 *    Odd of draw: 3.25
 *    Odd of victory Borussia Dortmund: 6.5
 *
 * Get the team names directly from the game object, don't hardcode them (except draw).
 * HINT: Note how the odds and the game objects have the same property names
 */
for (const [key, value] of Object.entries(game.odds)) {
  const team = game[key];
  const oddStr = key === 'x' ? 'draw' : `victory ${team}`;
  console.log(`Odd of ${oddStr}: ${value}`);
}

/**
 * BONUS:
 * Create an object called 'scorers' which contains the names of the players who
 * scored as properties, and then number of goals as the value. In this game, it will
 * look like this:
 * {
 *   Gnarby: 1,
 *   Hummels: 1,
 *   Lewandowski: 2
 * }
 */
const scorers = {};
for (const player of game.scored) {
  scorers[player] = scorers[player] ?? 0;
  scorers[player]++;
}
console.log(scorers);
