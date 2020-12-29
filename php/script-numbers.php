<?php

$x = 59.85;
var_dump(is_int($x));

$x = 10.365;
var_dump(is_float($x));

var_dump(is_nan("12"));

echo "\n";

echo (int) 12.5 . "\n";

echo (int) "12.5" . "\n";

echo pi() . "\n";

echo max(1, 2, 3) . "\n";

echo min(1, 2, 3) . "\n";

echo abs(-1000) . "\n";

echo sqrt(64) . "\n";

echo round(.4) . "\n";

echo round(.6) . "\n";

echo rand() . "\n";

echo rand(300, 600) . "\n";

echo rand(0, 1) . "\n";
