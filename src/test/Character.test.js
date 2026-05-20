const Character = require('../../src/Character.js');

test('creating a character with preset values', () => {
    const character = new Character();
    expect(character.level).toBe(1);
    expect(character.attack).toBeUndefined();
    expect(character.defence).toBeUndefined();
    expect(character.health).toBe(100);
});

test('a character with user values', () => {
    const character = new Character(7, 33, 44, 77);
    expect(character.level).toBe(7);
    expect(character.attack).toBe(33);
    expect(character.defence).toBe(44);
    expect(character.health).toBe(77);
});

test('level up by 1', () => {
    const character = new Character(1, 33, 99, 100);
    character.levelUp();
    expect(character.level).toBe(2);
});

test('increases attack by 20%', () => {
    const character = new Character(1, 81, 50, 100);
    character.levelUp();
    expect(character.attack).toBeCloseTo(97.2);
});

test('increases defence by 20%', () => {
    const character = new Character(1, 44, 77, 100);
    character.levelUp();
    expect(character.defence).toBeCloseTo(92.4);
});

test('setting health to 100', () => {
    const character = new Character(1, 20, 0, 100);
    character.levelUp();
    expect(character.health).toBeCloseTo(100);
});

test('should throw error when health is 0', () => {
    const character = new Character(1, 20, 10, 0);
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего');
});

test('reduced health by the amount of damage done', () => {
    const character = new Character(1, 100, 0, 100);
    character.damage(10);
    expect(character.health).toBe(90);
});