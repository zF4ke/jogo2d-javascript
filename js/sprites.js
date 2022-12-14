const gravity = 0.2

class Sprite {
    constructor({ position, velocity, dimensions }) {
        this.position = position
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height
    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
    }
}

class Fighter extends Sprite {
    constructor({
        position,
        velocity,
        dimensions
    }) {
        super({
            position,
            velocity,
            dimensions
        })

        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height

        this.lastKeyPressed
    }

    update() {
        if (this.position.y+this.height > canvas.height) {
            this.position.y = canvas.height-this.height
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.draw()
    }

}

const player = new Fighter({
    position: {
        x: 100,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    dimensions: {
        width: 50,
        height: 150
    }
})

const player2 = new Fighter({
    position: {
        x: 500,
        y: 20
    },
    velocity: {
        x: 0,
        y: 0
    },
    dimensions: {
        width: 50,
        height: 200
    }
})