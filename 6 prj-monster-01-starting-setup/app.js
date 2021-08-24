const app = Vue.createApp({
    data() {
        return {
            battleLog: [],
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        }
    },
    methods: {
        attackMonster() {
            let atk = getRandom(5, 12)
            atk = this.changeMonsterHealth(-atk)
            this.logAction('player', 'attack', atk)
            this.attackPlayer();
            this.currentRound++
        },
        attackPlayer() {
            let atk = getRandom(8, 15)
            atk = this.changePlayerHealth(-atk)
            this.logAction('monster', 'attack', atk)
        },
        specialAttack() {
            let atk = getRandom(10, 25)
            atk = this.changeMonsterHealth(-atk)
            this.logAction('player', 'special attack', atk)
            this.attackPlayer()
            this.currentRound++
        },
        healPlayer() {
            let heal = getRandom(8, 20)
            heal = this.changePlayerHealth(heal)
            this.logAction('player', 'heal', heal)
            this.attackPlayer()
            this.currentRound++
        },
        changePlayerHealth(value) {
            const sup = this.playerHealth + value
            this.playerHealth = constrain(sup, 0, 100)
            return Math.abs(sup - value - this.playerHealth)
        },
        changeMonsterHealth(value) {
            const sup = this.monsterHealth + value
            this.monsterHealth = constrain(sup, 0, 100)
            return Math.abs(sup - value - this.monsterHealth)
        },
        newGame() {
            this.battleLog = []
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
        },
        surrender() {
            this.logAction('player', 'surrender')
            this.winner = 'monster'
        },
        logAction(who, what, val) {
            this.battleLog.unshift({
                actionBy: who,
                actionType: what,
                actionValue: val
            })
        }
    },
    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHealth + '%'
            }
        },
        playerBarStyles() {
            return {
                width: this.playerHealth + '%'
            }
        },
        specialEnabled() {
            return this.currentRound % 3
        }
    },
    watch: {
        playerHealth(value) {
            if (value == 0) {
                if (this.monsterHealth == 0) {
                    this.winner = 'draw'
                }
                else {
                    this.winner = 'monster'
                }
            }
        },
        monsterHealth(value) {
            if (value == 0) {
                if (this.playerHealth == 0) {
                    this.winner = 'draw'
                }
                else {
                    this.winner = 'player'
                }
            }
        }
    }
})

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function constrain(val, min, max) {
    return val > max ? max : val < min ? min : val
}

app.mount('#game')