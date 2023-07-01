import * as Minecraft from "@minecraft/server";

Minecraft.system.runSchedule(() => {
	if(config.modules.itemSpawnRateLimit.enabled) data.entitiesSpawnedInLastTick = 0;

	for (const player of World.getPlayers()) {
		try {
			if(config.modules.crasherA.enabled && Math.abs(player.location.x) > 30000000 ||
				Math.abs(player.location.y) > 30000000 || Math.abs(player.location.z) > 30000000) 
					player.runCommandAsync('tag @s add kick')

			const container = player.getComponent('inventory').container;
			for (let i = 0; i < container.size; i++) {
				const item = container.getItem(i);
				if(!item) continue;
        
				if(config.modules.illegalitemsC.enabled && item.amount > config.modules.illegalitemsC.maxStack)
					player.runCommandAsync('tag @s add kick')
					
					
				if(item.nameTag?.length > 32)
					player.runCommandAsync('tag @s add kick')

				const lore = String(item.getLore());

				if(lore)
					player.runCommandAsync('tag @s add kick')

				const itemType = Minecraft.ItemTypes.get(item.typeId) ?? Minecraft.ItemTypes.get("minecraft:book");

				const item2 = new Minecraft.ItemStack(itemType, item.amount, item.data);
				container.setItem(i, item2);

				const itemEnchants = item.getComponent("enchantments").enchantments;

				const item2 = new Minecraft.ItemStack(itemType, 1, item.data);
				const item2Enchants = item2.getComponent("enchantments").enchantments;
				const enchantments = [];
				
				const loopIterator = (iterator) => {
					const iteratorResult = iterator.next();
					if(iteratorResult) return;
					const enchantData = iteratorResult.value;

					if(enchantData.level > enchantData.type.maxLevel)
						player.runCommandAsync('tag @s add kick')
					}
        
					if(enchantData.level <= 0)
						player.runCommandAsync('tag @s add kick')

					if(!item2Enchants.canAddEnchantment(new Minecraft.Enchantment(enchantData.type, 1))) {
						player.runCommandAsync('say @s add kick')
						item2Enchants.addEnchantment(new Minecraft.Enchantment(enchantData.type, 1));
						item2.getComponent("enchantments").enchantments = item2Enchants;
					}
        
					if(enchantments.includes(enchantData.type.id)) {
						enchantments.push(enchantData.type.id);
						player.runCommandAsync('tag @s add kick')
					} else enchantments.push(enchantData.type.id);

					loopIterator(iterator);
				}
				loopIterator(itemEnchants[Symbol.iterator]());
			
		}
	 catch (error) {
			console.error(error + error.stack);
		}
	}
}, 0);
