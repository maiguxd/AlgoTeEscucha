# Run AS the matching corpse AT structure origin; does not despawn the creature.
tag @s remove cabin_open
tag @s remove cabin_released
execute positioned ~5.5 ~1.08 ~9.3 unless entity @e[type=terror:cabin_bound_creature,r=1] run summon terror:cabin_bound_creature ~ ~ ~ 180 0
fill ~7 ~6 ~4 ~7 ~6 ~8 spruce_planks
setblock ~7 ~7 ~9 bookshelf
setblock ~7 ~8 ~9 lever ["lever_direction"="north","open_bit"=false]
setblock ~4 ~1 ~9 lever ["lever_direction"="north","open_bit"=false]
setblock ~5 ~0 ~6 cracked_deepslate_tiles
setblock ~5 ~0 ~7 crying_obsidian
