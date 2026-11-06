# Called AS the transitional creature AT its position by its 3.4 s timer.
# The animation lasts 3.3 s, then holds its last pose for ~0.1 s.
# Summon at the final forward displacement (10 model units * 0.88 / 16 = 0.55 blocks).
execute positioned ~ ~-0.08 ~-0.55 run function terror_cabin/spawn_free
event entity @s terror:vanish_now
