import * as mc from "@minecraft/server";
import { Player, world } from "@minecraft/server";

world.events.playerJoin.subscribe(loaded => {
    const player = loaded.player;
    if(player.nameTag?.length > 25 || player.nameTag?.length < 3) {
        player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§bAxO ➤ §g${player.nameTag.substr(0, 15)}.. §r§l§cHas been kicked"}]}`);
        player.kick(`Pls change nickname`);
        return;
    } else {
        player.runCommandAsync(`testfor @a`);
    }
})
