var Federation = require('../src/Federation.js');

describe("Federation", function() {
	var fed = new Federation();
	
	it('has a way to set the team data', function() {
		fed.setTeamData([{
			name: 'Juventus',
			level: 0
		},{
			name: 'Barcelona',
			level: 1
		}]);
		expect(fed.getTeamData().length).toBe(2);
	});
	
});
