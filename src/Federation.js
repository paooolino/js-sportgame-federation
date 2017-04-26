var Federation = function() {
	// has a way to set the team data.
	var teamData = [];
	/**
	 * @param _teamData array {name:string, level:number}
	 */
	this.setTeamData = function(_teamData) {
		teamData = _teamData;
	};
	this.getTeamData = function() {
		return teamData;
	};
};


// Export node module.
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
	module.exports = Federation;
}