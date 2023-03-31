export const hero = [
	{ name: 'мечник', health: 10 },
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
];

export function cortedHeroes(h) {
	try {
		if (!!h.length > 0) {
			hero.sort((a, b) => {
				if (a.health > b.health) {
					return -1;
				}
				if (a.health < b.health) {
					return 1;
				}
				return 0;
			});

			return h;
		}
		return h;
	} catch (e) {
		return `${(e.message)}`;
	}
}

// HOMEWORKs
export class Character {
	constructor(name, type, attack, defence) {
		this.type = type;
		this.checks(name);
		this.health = 100;
		this.level = 1;
		this.attack = attack;
		this.defence = defence;
	}

	async checks(n) {
		await (() => {
			const re = /^\W*[^\d{1}\s{1}/\\_=.]/i;
			if (typeof n === 'string' && n.length >= 2 && n.length <= 10
				&& re.test(n) === true) {
				this.name = n;
			} else {
				throw new Error(`Cо свойством {name: '${n}'} что-то не верно!`);
			}
		})();
	}
}

export class Bowerman extends Character {
	constructor(name) {
		super(name);
		super.type = 'Bowman';
		super.attack = 25;
		super.defence = 25;
	}
}

// зАКОММЕНТИРОВАть ОДНОТИПНЫЕ функции для работы с тестированием

export class Swordsman extends Character {
	constructor(name) {
		super(name);
		super.type = 'Swordsman';
		super.attack = 40;
		super.defence = 10;
	}
}

export class Magician extends Character {
	constructor(name) {
		super(name);
		super.type = 'Magician';
		super.attack = 10;
		super.defence = 40;
	}
}

export class Daemon extends Character {
	constructor(name) {
		super(name);
		super.type = 'Daemon';
		super.attack = 10;
		super.defence = 40;
	}
}

export class Undead extends Character {
	constructor(name) {
		super(name);
		super.type = 'Undead';
		super.attack = 25;
		super.defence = 25;
	}
}

export class Zombie extends Character {
	constructor(name) {
		super(name);
		super.type = 'Zombie';
		super.attack = 40;
		super.defence = 10;
	}
}
