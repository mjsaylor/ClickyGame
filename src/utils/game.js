export const characters = [
    {
        "id": 1,
        "name": "Buffy",
        "image": "./images/Buffy.png"
    },
    {
        "id": 2,
        "name": "Willow",
        "image": "./images/Willow.png"
    },
    {
        "id": 3,
        "name": "Giles",
        "image": "./images/Giles.png"
    },
    {
        "id": 4,
        "name": "Xander",
        "image": "./images/Xander.png"
    },
    {
        "id": 5,
        "name": "Spike",
        "image": "./images/Spike.png"
    },
    {
        "id": 6,
        "name": "Angel",
        "image": "./images/Angel.png"
    },
    {
        "id": 7,
        "name": "Tara",
        "image": "./images/Tara.png"
    },
    {
        "id": 8,
        "name": "Cordelia",
        "image": "./images/Cordelia.png"
    },
    {
        "id": 9,
        "name": "Anya",
        "image": "./images/Anya.png"
    },
    {
        "id": 10,
        "name": "Oz",
        "image": "./images/Oz.png"
    },
    {
        "id": 11,
        "name": "Faith",
        "image": "./images/Faith.png"
    },
    {
        "id": 12,
        "name": "Drusilla",
        "image": "./images/Dru.png"
    }
]

export class Game {
    constructor() {
        this.characters = characters
        this.selected = new Set()
        this.board = this.characters.map(character => character)
        this.score = 0
    }

    reset() {
        this.score = 0
        this.selected.clear()
        this.randomizeBoard()
    }

    randomizeBoard() {
        const newBoard = []
        const randomIndexSet = new Set()

        while (randomIndexSet.size < this.board.length) {
            randomIndexSet.add(Math.floor(Math.random() * 12))
        }

        for (let i of randomIndexSet.values()) {
            newBoard.push(this.board[i])
        }

        this.board = newBoard
    }

    select(id) {
        if (this.selected.has(id)) {
            return false
        } else {
            this.selected.add(id)
            this.score++
            return true
        }
    }
}


