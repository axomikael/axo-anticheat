import { chatrank } from './misc/chat.js'
import { world, system } from '@minecraft/server'
import { timer } from './misc/second.js'
let tick = 0, worldLoad = false;

world.events.beforeChat.subscribe((data) => {
    // console.warn(data.sender.scoreboard) presents a bug if no score in any obj
    // console.warn(world.scoreboard.getObjective('chatsSent').getScore(data.sender.scoreboard))
    chatrank(data)
})
loop()
function loop(){
    system.run(() => {
        tick++
        worldLoad ? loop() : world.getDimension('overworld').runCommandAsync(`testfor @a`).then(e => { if(!worldLoad){ world.getDimension('overworld').runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§bAxO ➤ §eмир успешно загружен"}]}`), world.getDimension("overworld").runCommandAsync(`scoreboard objectives add chatsSent dummy`), worldLoad = true, loop()}}, onrejected => {return loop()})
        if(system.currentTick % 20 == 0){
            timer()
        }
    })
}
