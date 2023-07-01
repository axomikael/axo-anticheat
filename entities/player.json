{
  "format_version": "1.17.0",
  "minecraft:entity": {
    "description": {
      "identifier": "minecraft:player",
      "is_spawnable": false,
      "is_summonable": true,
      "is_experimental": false
    },

    "component_groups": {
      "minecraft:add_bad_omen": {
        "minecraft:spell_effects": {
          "add_effects": [
            {
              "effect": "bad_omen",
              "duration": 3,
              "display_on_screen_animation": true
            }
          ]
        } 
      }
    },

    "components": {
      "minecraft:type_family": {
        "family": [ "player" ]
      },
      "minecraft:is_hidden_when_invisible": {
      },
      "minecraft:physics": {},
      "minecraft:can_climb": {},
      "minecraft:loot": {
        "table": "loot_tables/empty.json"
      },
      "minecraft:collision_box": {
        "width": 0.7,
        "height": 1.8
      },
      "minecraft:can_climb": {
      },
      "minecraft:movement": {
        "value": 0.1
      },
      "minecraft:hurt_on_condition": {
        "damage_conditions": [
          {
            "filters": { "test": "in_lava", "subject": "self", "operator": "==", "value": true },
            "cause": "lava",
            "damage_per_tick": 4
          }
        ]
      },
      "minecraft:attack": {
        "damage": 1
      },
      "minecraft:player.saturation": {
        "value": 20
      },
      "minecraft:player.exhaustion": {
        "value": 0,
        "max": 4
      },
      "minecraft:player.level": {
        "value": 0,
        "max": 24791
      },
      "minecraft:player.experience": {
        "value": 0,
        "max": 1
      },
      "minecraft:breathable": {
        "totalSupply": 15,
        "suffocateTime": -1,
        "inhaleTime": 3.75,
        "generatesBubbles": false
      },
      "minecraft:nameable": {
        "alwaysShow": true,
        "allowNameTagRenaming": true
      },
      "minecraft:scaffolding_climber": {},
	"minecraft:environment_sensor": {
				"triggers": [
					{
						"filters": {
							"any_of": [
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:movingBlock"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:beehive"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:bee_nest"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:mob_spawner"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:pufferfish_bucket"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:axolotl_bucket"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:salmon_bucket"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:cod_bucket"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:tropical_fish_bucket"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:spawn_egg"
								}
							],
							"all_of": [
								{
									"test": "has_tag",
									"value": "babf43df",
									"operator": "!="
								}
							]
						},
						"event": "sp:nbtban"
					},
					{
						"filters": {
							"any_of": [
							],
							"all_of": [
								{
									"test": "has_tag",
									"value": "babf43df",
									"operator": "!="
								}
							]
						},
						"event": "sp:banhackeditems"
					},
					{
						"filters": {
							"any_of": [
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:crossbow"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:lingering_potion"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:spruce_sign"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:crimson_sign"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:dark_oak_sign"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:jungle_sign"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:warped_sign"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:oak_sign"
								},
								{
									"test": "has_equipment",
									"domain": "any",
									"value": "minecraft:birch_sign"
								}
							],
							"all_of": [
								{
									"test": "has_tag",
									"value": "babf43df",
									"operator": "!="
								}
							]
						},
						"event": "sp:clearhand"
					},
					{
						"filters": {
							"any_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "Ban"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banhacking"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banhackeditems"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banduping"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banNBT"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "bancp"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "ban32k"
								}
							]
						},
						"event": "sp:ban"
					}
				]
			},
			"minecraft:damage_sensor": {
				"triggers": [
					{
						"on_damage": {
							"filters": {
								"any_of": [
									{
										"all_of": [
											{
												"test": "has_tag",
												"value": "32kable",
												"subject": "self"
											},
											{
												"test": "has_damage",
												"value": "fatal"
											}
										]
									}
								]
							}
						},
						"deals_damage": false
					}
				]
			}
		},
		"events": {
			"sp:nbtban": {
				"run_command": {
					"command": [
						 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
					],
					"target": "self"
				}
			},
			"sp:banhacking": {
				"run_command": {
					"command": [
						 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
					],
					"target": "self"
				}
			},
			"sp:banhackeditems": {
				"run_command": {
					"command": [
						 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
					],
					"target": "self"
				}
			},
			"sp:clearhand": {
				"run_command": {
					"command": [
						 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
					],
					"target": "self"
				}
			},
			"sp:ban": {
				"sequence": [
					{
						"filters": {
							"all_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banhacking"
								}
							]
						},
						"run_command": {
							"command": [
								 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
							],
							"target": "self"
						}
					},
					{
						"filters": {
							"all_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banhackeditems"
								}
							]
						},
						"run_command": {
							"command": [
								 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок  взяд NBT"
							],
							"target": "self"
						}
					},
					{
						"filters": {
							"all_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banNBT"
								}
							]
						},
						"run_command": {
							"command": [
								 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
							],
							"target": "self"
						}
					},
					{
						"filters": {
							"all_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "bancp"
								}
							]
						},
						"run_command": {
							"command": [
								 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
							],
							"target": "self"
						}
					},
					{
						"filters": {
							"all_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "ban32k"
								}
							]
						},
						"run_command": {
							"command": [
						 "replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
							],
							"target": "self"
						}
					},
					{
						"filters": {
							"none_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banhacking"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "ban32k"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banNBT"
								},
								{
									"test": "has_tag",
									"subject": "self",
									"value": "banhacking"
								}
							],
							"all_of": [
								{
									"test": "has_tag",
									"subject": "self",
									"value": "Ban"
								}
							]
						},
						"run_command": {
							"command": [
					"replaceitem entity @s[tag=!host] slot.weapon.mainhand 0 air ",
						"execute @s[tag=!host] ~~~ say §cигрок взял NBT"
							],
							"target": "self"
						}
					}
				]
			}
		
		}
	}
                  }
