import * as mc from "@minecraft/server";
import { Player, world } from "@minecraft/server";
import { CONFIGURATION } from "config.js";

const log = {};

const byPassTag = CONFIGURATION.BY_PASS_TAG;

world.events.blockBreak.subscribe(
  ({ block, brokenBlockPermutation, dimension, player }) => {
    player.runCommandAsync(`scoreboard players add ${player.nameTag} nuker 1`)
  }
)
