export default class Character {
    constructor(level = 1, attack, defence, health = 100) {
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        this.health = health;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить уровень умершего');
        }

        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        const damage = points * (1 - this.defence / 100);
        this.health -= damage;

        if (this.health < 0) {
            this.health = 0;
        }
    }
}