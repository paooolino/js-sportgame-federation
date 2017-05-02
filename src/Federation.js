var Federation = function() {
	// has a way to set the team data.
	var teamData = [];
	
	/**
	 * Set the list of teams belonging to the federation.
	 *
	 * @param _teamData array {name:string, level:number}
	 */
	this.setTeamData = function(_teamData) {
		teamData = _teamData;
	};
	this.getTeamData = function() {
		return teamData;
	};
	
	// has a way to set a new season
	/**
	 * Create levels and leagues using the team data previously set.
	 *
	 * @param opts Object
	 *	MAX_TEAMS_PER_LEAGUE
	 *
	 * @return season Object
	 *	levelsComposition Array
	 *	leagues Array
	 */
	this.createNewSeason = function(opts) {
		function subdivideTeamsInLevels(teamData) {
			var levels = [];
			for (var i = 0; i < teamData.length; i++) {
				if (!levels[teamData[i].level]) {
					levels[teamData[i].level] = [];
				}
				levels[teamData[i].level].push(teamData[i]);
			}
			return levels;
		};
		function calculateLeagues(teams, max_teams_per_league) {
			var leagues = [];
			var n_leagues = Math.ceil(teams.length / max_teams_per_league);
			var min_teams_per_league = Math.floor(teams.length / n_leagues);
			
			var teams_to_assign = teams.slice(0);	// copy array
			for (var i = 0; i < n_leagues; i++) {
				leagues[i] = [];
				for (var j = 0; j < min_teams_per_league; j++) {
					leagues[i].push(teams_to_assign.splice(Math.floor(Math.random() * teams_to_assign.length),1));
				}
			}
			// assign remanining teams...
			for (var i = 0; i < teams_to_assign.length; i++) {
				for (var j = 0; j < n_leagues; j++) {
					leagues[j].push(teams_to_assign[i]);
				}
			}
			return leagues;
		};
		
		// create the season object.
		var season = {};
		// set levels.
		season.levelsComposition = subdivideTeamsInLevels(teamData);
		// set leagues.
		season.leagues = [];
		for (var i = 0; i < season.levelsComposition.length; i++) {
			season.leagues[i] = calculateLeagues(season.levelsComposition[i], opts.MAX_TEAMS_PER_LEAGUE);
		}
		return season; 
	};
};


// Export node module.
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
	module.exports = Federation;
}