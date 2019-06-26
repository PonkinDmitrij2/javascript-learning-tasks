/**
 * The Ship Teams
 *
 * https://js.checkio.org/ru/mission/the-ship-teams/
 *
 * Example:

 * twoTeams({
 *     'Smith': 34,
 *     'Wesson': 22,
 *     'Coleman': 45,
 *     'Abrahams': 19}) == [ ['Abrahams', 'Coleman'], ['Smith', 'Wesson'] ]
 *
 * @param {object} sailors - Dictionary with the sailors and their ages.
 * @returns {array} List of the lists with 2 teams.
 */
const twoTeams = (sailors) => {
  const team1 = [];
  const team2 = [];

  Object.entries(sailors).forEach(([surname, age]) => {
    if (age < 20 || age > 40) {
      team1.push(surname);
    } else {
      team2.push(surname);
    }
  });

  return [team1.sort(), team2.sort()];
};

export default twoTeams;
