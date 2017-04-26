Tests
------
jasmine

Notes
------
Given any number of teams, each having a "level right"
1. subdivide teams in levels
2. for each level, set the total number of promotions/relegations.
		- the promotion nr for the higher level is always 1 and is called "champion".
		- the promotion nr for the lower levels equals the relegation nr for the immediatly higher level.
3. subdivide each level in leagues.
4. set playoffs/playout rules for each level.

conf:
- MAX_TEAMS_PER_LEAGUE					number
- RELEGATION_RATE								perc.
- PLAYOFFS_PLAYOUTS							always|only if needed
- PLAYOFFS FOR CHAMPION 				always|only if needed
- PLAYOFFS FOR CHAMPION TYPE		2, 4, 1+2, 1+4

