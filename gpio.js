const led = (id, command) => {
    console.log(id, command)

    if (!command) command = id

    if (command == 'on') {
        console.log(`led id:${id} is now on`)
    } else {
        console.log(`led id:${id} is now off`)
    }
}

const button = (id, command) => {
    console.log(id, command)

    if (!command) command = id

    if (command == 'on') {
        console.log(`button id:${id} is now on`)
    } else {
        console.log(`button id:${id} is now off`)
    }
}

module.export = {
    led,
    button
}