kill @e[type=armor_stand, name=axo]
execute as @a run summon armor_stand axo ~ ~260 ~

execute as @a run tp @a[type=armor_stand, name=axo, x=~, y=~260, z=~, r=2] ~ ~260 ~
execute as @e[type=armor_stand, name=axo] run tp @p[x=~, y=~-260, z=~, rm=3] ~ ~-260 ~
