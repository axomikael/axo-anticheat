import * as mc from "@minecraft/server";
import { Player, world } from "@minecraft/server";

function antiAntiBan(player) {
	if (player.name === "") {
		player.kick("§l§cPls change nickname")
	}
}

export { antiAntiBan }
