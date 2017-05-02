var Federation = require('../src/Federation.js');

var teamData = [{
	name: 'Juventus',
	level: 0
},{
	name: 'Napoli',
	level: 0
},{
	name: 'Brescia',
	level: 1
}];

describe("Federation", function() {
	
	/**
	 * @uses Federation.setTeamData
	 */
	it('has a way to set the team data', function() {	
		var fed = new Federation();
		fed.setTeamData(teamData);
		expect(fed.getTeamData().length).toBe(3);
	});

	/**
	 * @uses Federation.setTeamData
	 * @uses Federation.createNewSeason
	 */	
	it('subdivides teams in levels', function() {
		var fed = new Federation();
		fed.setTeamData(teamData);
		var season = fed.createNewSeason({
			MAX_TEAMS_PER_LEAGUE: 1
		});
		expect(season.levelsComposition[0].length).toBe(2);
		expect(season.levelsComposition[1].length).toBe(1);
	});

	/**
	 * @uses Federation.setTeamData
	 * @uses Federation.createNewSeason
	 */		
	it('creates leagues for each level', function() {
		var fed = new Federation();
		fed.setTeamData(teamData);
		var season1 = fed.createNewSeason({
			MAX_TEAMS_PER_LEAGUE: 1
		});
		expect(season1.leagues[0].length).toBe(2);	// level 0 has 2 leagues
		expect(season1.leagues[1].length).toBe(1);	// level 1 has 1 league
		
		var season2 = fed.createNewSeason({
			MAX_TEAMS_PER_LEAGUE: 2
		});
		expect(season2.leagues[0].length).toBe(1);	// level 0 has 1 league
		expect(season2.leagues[1].length).toBe(1);	// level 1 has 1 league
		
		var season3 = fed.createNewSeason({
			MAX_TEAMS_PER_LEAGUE: 3
		});
		expect(season3.leagues[0].length).toBe(1);	// level 0 has 1 league
		expect(season3.leagues[1].length).toBe(1);	// level 1 has 1 league
	});
});
