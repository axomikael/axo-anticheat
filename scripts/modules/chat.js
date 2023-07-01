import * as mc from "@minecraft/server";
import { world } from "@minecraft/server";

world.events.beforeChat.subscribe(msg => {
 const message = msg.message.toLowerCase();
 const player = msg.sender;

 if(message.includes("the best minecraft bedrock utility mod") || message.includes("disepi/ambrosial")) msg.cancel = true;

 if(message.length > 512 || message.length < 0) msg.cancel = true;

});
