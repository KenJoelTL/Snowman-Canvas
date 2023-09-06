let canvas = document.getElementById('myCanvas')
let context = canvas.getContext('2d')
let music = document.getElementById('audio')

/******DRAWING BACKGROUND******/
function drawBackground() {
    //sky
    context.fillStyle = "#89bad5"
    context.fillRect(0, 0, 700, 500)

    //mountain
    context.fillStyle = '#9ed0eb'

    context.beginPath()
    context.arc(130, 250, 170, 0, Math.PI * 2)
    context.arc(300, 250, 150, 0, Math.PI * 2)
    context.arc(500, 250, 200, 0, Math.PI * 2)
    context.arc(650, 250, 160, 0, Math.PI * 2)
    context.fill()

    //trees 
    drawTree(40, 210, 80, 310)
    drawTree(85, 190, 70, 310)
    drawTree(150, 210, 60, 310)
    drawTree(480, 270, 60, 310)
    drawTree(550, 240, 80, 310)
    drawTree(580, 220, 60, 310)
    drawTree(650, 180, 80, 310)
    drawTree(700, 220, 60, 310)

    //ground1
    context.fillStyle = "#c3e2ef"

    context.beginPath()
    context.moveTo(0, 300)
    context.bezierCurveTo(-14, 300, 86, 304, 241, 280)
    context.bezierCurveTo(267, 276, 384, 249, 422, 254)
    context.bezierCurveTo(437, 256, 493, 267, 510, 271)
    context.bezierCurveTo(544, 279, 700, 285, 700, 275)
    context.bezierCurveTo(700, 269, 700, 500, 700, 500)
    context.bezierCurveTo(700, 500, 15, 500, 0, 500)
    context.fill()

    //ground2
    context.fillStyle = '#fff'

    context.beginPath()
    context.moveTo(0, 331)
    context.bezierCurveTo(-15, 329, 73, 309, 109, 304)
    context.bezierCurveTo(135, 300, 314, 282, 387, 300)
    context.bezierCurveTo(402, 304, 473, 317, 499, 326)
    context.bezierCurveTo(533, 338, 700, 338, 700, 328)
    context.bezierCurveTo(700, 322, 700, 500, 700, 500)
    context.bezierCurveTo(700, 500, 15, 500, 0, 500)
    context.fill()
}


function drawTree(x, y, width, height) {
    context.fillStyle = "#89bad5"

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x - width / 2, height)
    context.lineTo(x + width / 2, height)
    context.closePath()
    context.fill()
}

/*******LET IT SNOW!!!********/
let snowFlakeCount = 8
let snowFlakes = createSnowFlakes(snowFlakeCount)

function createSnowFlakes(snowFlakeCount) {
    let newFlakes = []

    for (let i = 0; i < snowFlakeCount; i++) {
        newFlakes.push({
            x: Math.floor(Math.random() * 700),
            y: Math.floor(Math.random() * 200) * -1,
            direction: Math.random() + 1
        })
    }
    return newFlakes
}

function drawSnow(x, y) {
    context.fillStyle = '#fff'
    context.beginPath()
    context.arc(x, y, 8, 0, Math.PI * 2)
    context.fill()
}


/******DRAW ASSETS*******/
let linePt = 15

function drawSpotLight(x, y, offset, lightWidth) {
    context.fillStyle = 'rgba(255,255,153,0.2)'

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(lightWidth - offset, 500)
    context.lineTo(lightWidth + offset, 500)
    context.closePath()
    context.fill()
}

function drawSnowman(x, y) {
    drawSnowBall(x, y + 130, 80)
    drawSnowBall(x, y, 60)
}

function drawMuffler(x, y) {
    context.fillStyle = '#f26c4a'
    context.strokeStyle = '#dd3928'
    context.lineWidth = linePt

    context.beginPath()
    context.moveTo(x + 70, y)
    context.lineTo(x + 75, y)
    context.quadraticCurveTo(x + 85, y, x + 85, y + 10)
    context.lineTo(x + 85, y + 70)
    context.quadraticCurveTo(x + 85, y + 80, x + 75, y + 80)
    context.lineTo(x + 70, y + 80)
    context.quadraticCurveTo(x + 60, y + 80, x + 60, y + 70)
    context.lineTo(x + 60, y + 10)
    context.quadraticCurveTo(x + 60, y, x + 70, y)
    context.stroke()
    context.fill()

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x + 100, y)
    context.quadraticCurveTo(x + 110, y, x + 110, y + 10)
    context.lineTo(x + 110, y + 15)
    context.quadraticCurveTo(x + 110, y + 25, x + 100, y + 25)
    context.lineTo(x, y + 25)
    context.quadraticCurveTo(x - 10, y + 25, x - 10, y + 15)
    context.lineTo(x - 10, y + 10)
    context.quadraticCurveTo(x - 10, y, x, y)
    context.stroke()
    context.fill()
}

function drawHat(x, y) {
    context.fillStyle = '#5c5d60'
    context.strokeStyle = '#231f20'
    context.lineWidth = linePt

    context.beginPath()
    context.moveTo(x + 25, y - 60)
    context.lineTo(x + 65, y - 60)
    context.quadraticCurveTo(x + 75, y - 60, x + 75, y - 50)
    context.lineTo(x + 75, y)
    context.quadraticCurveTo(x + 75, y + 10, x + 65, y + 10)
    context.lineTo(x + 25, y + 10)
    context.quadraticCurveTo(x + 15, y + 10, x + 15, y)
    context.lineTo(x + 15, y - 50)
    context.quadraticCurveTo(x + 15, y - 60, x + 25, y - 60)
    context.stroke()
    context.fill()

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x + 90, y)
    context.quadraticCurveTo(x + 100, y, x + 100, y + 10)
    context.lineTo(x + 100, y + 10)
    context.quadraticCurveTo(x + 100, y + 20, x + 90, y + 20)
    context.lineTo(x, y + 20)
    context.quadraticCurveTo(x - 10, y + 20, x - 10, y + 10)
    context.lineTo(x - 10, y + 10)
    context.quadraticCurveTo(x - 10, y, x, y)
    context.stroke()
    context.fill()
}

function drawStone(x, y) {
    context.fillStyle = '#5c5d60'
    context.strokeStyle = '#231f20'
    context.lineWidth = linePt

    context.beginPath()
    context.arc(x, y, 5, 0, Math.PI * 2)
    context.stroke()
    context.fill()
}

function drawNose(x, y) {
    context.fillStyle = '#f7941d'
    context.strokeStyle = '#f37321'
    context.lineWidth = linePt
    context.lineJoin = 'round'

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x, y + 10)
    context.lineTo(x + 30, y + 5)
    context.closePath()
    context.stroke()
    context.fill()
}

function drawArm(x, y, direction) {
    context.strokeStyle = '#a74e0f'
    context.lineWidth = linePt
    context.lineCap = 'round'

    context.beginPath()
    context.moveTo(x + (40 * direction), y - 50)
    context.lineTo(x + (40 * direction), y - 90)
    context.stroke()

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x + (70 * direction), y - 80)
    context.stroke()
}

function drawSnowBall(x, y, radius) {
    context.strokeStyle = '#c3e2ef'
    context.fillStyle = '#fff'
    context.lineWidth = linePt

    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.stroke()
    context.fill()
}

function drawResetBtn(x, y) {
    context.strokeStyle = '#c3e2ef'
    context.fillStyle = '#fff'
    context.lineWidth = linePt

    context.beginPath()
    context.rect(x, y, 120, 50)
    context.stroke()
    context.fill()

    context.fillStyle = '#c3e2ef'
    context.font = "30px 'Baloo Bhai 2'"
    context.fillText('RESET', x + 18, y + 35)
}

function drawDanceBtn(x, y) {
    context.strokeStyle = '#c3e2ef'
    context.fillStyle = '#fff'
    context.lineWidth = linePt

    context.beginPath()
    context.rect(x, y, 120, 50)
    context.stroke()
    context.fill()

    context.fillStyle = '#c3e2ef'
    context.font = "30px 'Baloo Bhai 2'"

    if (isCompleted) {
        context.fillText('STOP', x + 25, y + 35)
    }
    else {
        context.fillText('DANCE', x + 14, y + 35)
    }
}

/******MOVE ASSETS******/

//initial position
function init() {
    resetBtnX = 30
    resetBtnY = 30
    danceBtnX = 550
    danceBtnY = 30
    snowmanX = 350
    snowmanY = 200
    hatX = 560
    hatY = 450
    mufflerX = 50
    mufflerY = 320
    arm1X = 100
    arm1Y = 460
    arm2X = 270
    arm2Y = 450
    eye1X = 160
    eye1Y = 400
    eye2X = 220
    eye2Y = 400
    noseX = 420
    noseY = 420
    foot1X = 540
    foot1Y = 360
    foot2X = 630
    foot2Y = 350
    btn1X = 200
    btn1Y = 420
    btn2X = 250
    btn2Y = 410
    collidedItem = null
    grabbedItem = null
    isCompleted = false
    music.load()
}

let resetBtnX = 30
let resetBtnY = 30
let danceBtnX = 550
let danceBtnY = 30
let hatX = 560
let hatY = 450
let mufflerX = 50
let mufflerY = 320
let arm1X = 100
let arm1Y = 460
let arm2X = 270
let arm2Y = 450
let eye1X = 160
let eye1Y = 400
let eye2X = 220
let eye2Y = 400
let noseX = 420
let noseY = 420
let foot1X = 540
let foot1Y = 360
let foot2X = 630
let foot2Y = 350
let btn1X = 200
let btn1Y = 420
let btn2X = 250
let btn2Y = 410
let collidedItem = null
let grabbedItem = null

let spotLightAlpha1 = 100
let spotLightAlpha2 = 150

let isCompleted = false

/******Collision Detection******/
function isCollidingResetBtn(x, y) {
    let minX = resetBtnX
    let maxX = resetBtnX + 120
    let minY = resetBtnY
    let maxY = resetBtnY + 50
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingDanceBtn(x, y) {
    let minX = danceBtnX
    let maxX = danceBtnX + 120
    let minY = danceBtnY
    let maxY = danceBtnY + 50
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingHat(x, y) {
    let minX = hatX - 10
    let maxX = hatX + 100
    let minY = hatY - 60
    let maxY = hatY + 20
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingMuffler(x, y) {
    //rect1
    let minRect1X = mufflerX - 10
    let maxRect1X = mufflerX + 110
    let minRect1Y = mufflerY
    let maxRect1Y = mufflerY + 25

    let isInRect1 = (x >= minRect1X && x <= maxRect1X && y >= minRect1Y && y <= maxRect1Y)

    //rect2
    let minRect2X = mufflerX + 50
    let maxRect2X = mufflerX + 95
    let minRect2Y = mufflerY + 25
    let maxRect2Y = mufflerY + 80

    let isInRect2 = (x >= minRect2X && x <= maxRect2X && y >= minRect2Y && y <= maxRect2Y)

    return isInRect1 || isInRect2
}

function isCollidingArm1(x, y) {
    let minX = arm1X - 70
    let maxX = arm1X
    let minY = arm1Y - 80
    let maxY = arm1Y
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingArm2(x, y) {
    let minX = arm2X
    let maxX = arm2X + 70
    let minY = arm2Y - 80
    let maxY = arm2Y
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingEye1(x, y) {
    let minX = eye1X - 5
    let maxX = eye1X + 5
    let minY = eye1Y - 5
    let maxY = eye1Y + 5
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingEye2(x, y) {
    let minX = eye2X - 5
    let maxX = eye2X + 5
    let minY = eye2Y - 5
    let maxY = eye2Y + 5
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingBtn1(x, y) {
    let minX = btn1X - 5
    let maxX = btn1X + 5
    let minY = btn1Y - 5
    let maxY = btn1Y + 5
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingBtn2(x, y) {
    let minX = btn2X - 5
    let maxX = btn2X + 5
    let minY = btn2Y - 5
    let maxY = btn2Y + 5
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingFoot1(x, y) {
    let minX = foot1X - 25
    let maxX = foot1X + 25
    let minY = foot1Y - 25
    let maxY = foot1Y + 25
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingFoot2(x, y) {
    let minX = foot2X - 25
    let maxX = foot2X + 25
    let minY = foot2Y - 25
    let maxY = foot2Y + 25
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

function isCollidingNose(x, y) {
    let minX = noseX
    let maxX = noseX + 30
    let minY = noseY
    let maxY = noseY + 10
    return (x >= minX && x <= maxX && y >= minY && y <= maxY)
}

// save collidedItem name
function setCollidedItemName(x, y) {
    if (isCollidingHat(x, y)) {
        collidedItem = 'hat'
    } else if (isCollidingMuffler(x, y)) {
        collidedItem = 'muffler'
    } else if (isCollidingArm1(x, y)) {
        collidedItem = 'arm1'
    } else if (isCollidingArm2(x, y)) {
        collidedItem = 'arm2'
    } else if (isCollidingEye1(x, y)) {
        collidedItem = 'eye1'
    } else if (isCollidingEye2(x, y)) {
        collidedItem = 'eye2'
    } else if (isCollidingBtn1(x, y)) {
        collidedItem = 'btn1'
    } else if (isCollidingBtn2(x, y)) {
        collidedItem = 'btn2'
    } else if (isCollidingFoot1(x, y)) {
        collidedItem = 'foot1'
    } else if (isCollidingFoot2(x, y)) {
        collidedItem = 'foot2'
    } else if (isCollidingNose(x, y)) {
        collidedItem = 'nose'
    } else {
        collidedItem = null
    }
}

function isCollidingObject(x, y) {
    return (collidedItem || (isCollidingResetBtn(x, y)) || (isCollidingDanceBtn(x, y)))
}

canvas.addEventListener('click', function (event) {
    if (isCollidingResetBtn(event.offsetX, event.offsetY)) {
        init()
    }

    if (isCollidingDanceBtn(event.offsetX, event.offsetY)) {
        isCompleted = !isCompleted
        isCompleted ? music.play() : music.pause()
    }
})

/**
 * Check item collided and 
 */
canvas.addEventListener('mousedown', function (event) {
    // setCollidedItemName(event.offsetX, event.offsetY)
    grabbedItem = collidedItem
    canvas.addEventListener('mousemove', mouseMoveHandler)
    canvas.addEventListener('mouseup', mouseUpHandler)
})

// change cursor on mouseOver
canvas.addEventListener('mousemove', function (event) {
    if (!grabbedItem) {
        setCollidedItemName(event.offsetX, event.offsetY)
        if (isCollidingObject(event.offsetX, event.offsetY)) {
            document.getElementById("myCanvas").style.cursor = "pointer"
        } else {
            document.getElementById("myCanvas").style.cursor = "initial"
        }
    }

})

/**
 * Move grabbed Item
 * @param {*} event 
 */
function mouseMoveHandler(event) {
    if (grabbedItem === 'hat') {
        hatX = event.offsetX
        hatY = event.offsetY
    } else if (grabbedItem === 'muffler') {
        mufflerX = event.offsetX
        mufflerY = event.offsetY
    } else if (grabbedItem === 'arm1') {
        arm1X = event.offsetX
        arm1Y = event.offsetY
    } else if (grabbedItem === 'arm2') {
        arm2X = event.offsetX
        arm2Y = event.offsetY
    } else if (grabbedItem === 'eye1') {
        eye1X = event.offsetX
        eye1Y = event.offsetY
    } else if (grabbedItem === 'eye2') {
        eye2X = event.offsetX
        eye2Y = event.offsetY
    } else if (grabbedItem === 'btn1') {
        btn1X = event.offsetX
        btn1Y = event.offsetY
    } else if (grabbedItem === 'btn2') {
        btn2X = event.offsetX
        btn2Y = event.offsetY
    } else if (grabbedItem === 'foot1') {
        foot1X = event.offsetX
        foot1Y = event.offsetY
    } else if (grabbedItem === 'foot2') {
        foot2X = event.offsetX
        foot2Y = event.offsetY
    } else if (grabbedItem === 'nose') {
        noseX = event.offsetX
        noseY = event.offsetY
    }
}
/**
 * Detach mousemove handler and reset collision variables
 */
function mouseUpHandler(event) {
    grabbedItem = null
    canvas.removeEventListener('mousemove', mouseMoveHandler)
}

let snowmanDirection = -1
let spotLight1Direction = 1
let spotLight2Direction = -1


// draw and move assets every frame
function drawFrame() {
    drawBackground()

    // draw and move snowflakes
    for (let snowFlake of snowFlakes) {
        drawSnow(snowFlake.x, snowFlake.y)
        snowFlake.y = snowFlake.y + snowFlake.direction
        if (snowFlake.y > 350) {
            snowFlake.y = 0
            snowFlake.x = Math.floor(Math.random() * 700)
            snowFlake.direction = Math.random() + 1
        }
    }

    // move assets  
    if (isCompleted) {
        drawSpotLight(200, -150, 150, spotLightAlpha1)
        drawSpotLight(400, -150, 200, spotLightAlpha2)

        if (spotLightAlpha1 > 700) {
            spotLight1Direction = -1
        }

        if (spotLightAlpha1 < 0) {
            spotLight1Direction = 1
        }

        spotLightAlpha1 = spotLightAlpha1 + 4 * spotLight1Direction

        if (spotLightAlpha2 > 700) {
            spotLight2Direction = -1
        }

        if (spotLightAlpha2 < 0) {
            spotLight2Direction = 1
        }

        spotLightAlpha2 = spotLightAlpha2 + 4 * spotLight2Direction

        if (snowmanY < 150) {
            snowmanDirection = 1
        }

        if (snowmanY > 200) {
            snowmanDirection = -1
        }

        snowmanY = snowmanY + 2 * snowmanDirection
        hatY = hatY + 2 * snowmanDirection
        mufflerY = mufflerY + 2 * snowmanDirection
        arm1Y = arm2Y + 2 * snowmanDirection
        arm2Y = arm2Y + 2 * snowmanDirection
        eye1Y = eye1Y + 2 * snowmanDirection
        eye2Y = eye2Y + 2 * snowmanDirection
        btn1Y = btn1Y + 2 * snowmanDirection
        btn2Y = btn2Y + 2 * snowmanDirection
        noseY = noseY + 2 * snowmanDirection
        foot1Y = foot1Y + 2 * snowmanDirection
        foot2Y = foot2Y + 2 * snowmanDirection

    }

    drawSnowman(snowmanX, snowmanY)
    drawResetBtn(resetBtnX, resetBtnY)
    drawDanceBtn(danceBtnX, danceBtnY)
    drawMuffler(mufflerX, mufflerY)
    drawHat(hatX, hatY)
    drawSnowBall(foot1X, foot1Y, 25)
    drawSnowBall(foot2X, foot2Y, 25)
    drawArm(arm1X, arm1Y, -1)
    drawArm(arm2X, arm2Y, 1)
    drawStone(eye1X, eye1Y)
    drawStone(eye2X, eye2Y)
    drawStone(btn1X, btn1Y)
    drawStone(btn2X, btn2Y)
    drawNose(noseX, noseY)



    requestAnimationFrame(drawFrame)
}

init()
drawFrame()