let Fighter = (function () {
    let privateProps = new WeakMap();
    class Fighter {
        constructor({name, damage, hp, strength, agility}) {
            privateProps.set(this, {_name: name,
                _damage: damage,
                _totalHP: hp,
                _hp: hp,
                _strength: strength,
                _agility: agility,
                _wins: 0,
                _losses: 0
            });
        }
        getName() {
            return privateProps.get(this)._name;
        }
        getDamage() {
            return privateProps.get(this)._damage;
        }
        getStrength() {
            return privateProps.get(this)._strength;
        }
        getAgility() {
            return privateProps.get(this)._agility;
        }
        getHealth() {
            return privateProps.get(this)._hp;
        }
        attack(defender) {
            const missChance = defender.getStrength() + defender.getAgility();
            const randomNumber = Math.floor(Math.random() * 100);
            if (missChance > randomNumber) {
                console.log(`${this.getName()} attack missed`);
            } else {
                defender.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            }

        }
        logCombatHistory() {
            const wins = privateProps.get(this)._wins;
            const losses = privateProps.get(this)._losses;
            console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`)
        }
        heal(healAmount) {
            if (privateProps.get(this)._hp + healAmount >= privateProps.get(this)._totalHP ) {
                privateProps.get(this)._hp = privateProps.get(this)._totalHP;
            } else {
                privateProps.get(this)._hp += healAmount;
            }
        }
        dealDamage(damageAmount) {
            if (this.getHealth() - damageAmount <= 0) {
                privateProps.get(this)._hp = 0;
            } else {
                privateProps.get(this)._hp -= damageAmount;
            }
        }
        addWin() {
            privateProps.get(this)._wins++;
        }
        addLoss() {
            privateProps.get(this)._losses++;
        }
    }
    return Fighter;
})();

function battle(fighter1, fighter2) {
    let fighter = fighter1;
    let defender = fighter2;
    if (fighter1.getHealth() <= 0 || fighter2.getHealth <= 0) {
        if (fighter1.getHealth() <= 0) {
            console.log(`${fighter1.getName()} is dead and can't fight.`);
        } else {
            console.log(`${fighter2.getName()} is dead and can't fight.`);
        }
    } else {
        while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter.attack(defender);

            let oldFighter = fighter;
            fighter = defender;
            defender = oldFighter;
        }
        if (fighter1.getHealth() === 0) {
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
        } else {
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}