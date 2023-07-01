import { world } from "mojang-minecraft";

world.events.beforeChat.subscribe((eventData) => {
    var player_name = eventData.sender.name
    var player = eventData.sender
    var args = eventData.message.split(" ")
    if (args[0].charAt(0) == "//") {
        eventData.cancel = true
        if (args[0] == "//ban") {
            player.runCommand("tag @a[tag=ban] add kick");
        } else {
            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§cError 404: the command not found\"}]}");
        }
    }
});
