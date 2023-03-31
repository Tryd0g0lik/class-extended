/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import * as app from '../app.js';

describe('the La Croix cans on my desk', () => {
	const can1 = app.cortedHeroes(app.hero); // The Heroes has been sorted by the health
	const heroList = test.each([
		[can1[2], { name: 'мечник', health: 10 }],
		[can1[0], { name: 'маг', health: 100 }],
		[can1[1], { name: 'лучник', health: 80 }],
	]);

	heroList('have all the same properties name ', (b, expected) => {
		expect(b).toEqual(expected);
	});
});

describe("It's will been test a 'class Bowerman' #1", () => {
	expect(new app.Bowerman('Magus')).toEqual({
		attack: 25,
		defence: 25,
		health: 100,
		level: 1,
		name: "Magus",
		type: "Bowman",
	});
});
