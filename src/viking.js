// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(dmg) {
        this.health -= dmg
    }
}
let sold = new Soldier(100, 10)
console.log(sold)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength)
        this.name = name
    }
    receiveDamage(dmg) {
        this.health -= dmg
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }  
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super (health, strength)
    }
    receiveDamage(dmg) {
        this.health -= dmg
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let dano = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack())
        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[0], 1)
        }
        return dano
    }
    saxonAttack() {
        let dano = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack())
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[0], 1)
        }
        return dano
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


