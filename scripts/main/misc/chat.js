import { world, BeforeChatEvent } from "@minecraft/server"

let messages = new Map()

function chatrank(data){
    const tags = data.sender.getTags()
    let score;
    try {
        score = world.scoreboard.getObjective('chatsSent').getScore(data.sender.scoreboard)
    } catch (e) {
        score = 0;
    }
    let ranks = [];
    for(const tag of tags){
        if(tag.startsWith('rank:')){
            ranks.push(tag.replace('rank:', ''))
        }
    }
    if(ranks.length == 0)ranks = [""]

    if(score >= 1){
        data.cancel = true
        return data.sender.tell(`§l§bAxO ➤ §cyou send messages too fast`)
    }
    if(!messages.get(data.sender.name)){
        messages.set(data.sender.name, data.message)
    }else {
        const oldMsg = messages.get(data.sender.name)
        if(oldMsg == data.message){
            data.cancel = true
            return data.sender.tell(`§l§bAxO ➤ §cdo not flooding, pls`)
        } else if(oldMsg == data.message+" ") {
        	data.cancel = true
            return data.sender.tell(`§l§bAxO ➤ §cdo not flooding, pls`)
        }
    }
    let text = `[§r${ranks}§r] ${data.sender.nameTag} §r§l§f> §r${data.message}`
    world.getDimension('overworld').runCommandAsync(`tellraw @a {"rawtext":[{"text":${JSON.stringify(text)}}]}`)
    messages.set(data.sender.name, data.message)
    data.sender.runCommandAsync(`scoreboard players add @s chatsSent 1`)
    data.cancel = true
}
export { chatrank }
