var Federation = function() {};

/**
 * @param teams An array of teams
 * 	team[] = {
 *		id: number
 *		name: string
 *		title: number
 *	}
 *
 */
// Export node module.
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
	module.exports = Federation;
}