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

echo round(.4) . " Round " . "\n";
echo round(.6) . " Round " . "\n";

echo rand() . "\n";
echo rand(300, 600) . "\n";
echo rand(0, 1) . " Random (0,1) " . "\n";

echo (12 ** 2) . " ** " . "\n";

echo (12 == 12) . " == " . "\n";
echo (12 === 12) . " === " . "\n";

echo (12 <=> 12) . " 12 <=> 12 " . "\n";
echo (12 <=> 13) . " 12 <=> 13 " . "\n";
echo (13 <=> 12) . " 13 <=> 12 " . "\n";

echo ((true and true) ? "TRUE" : "FALSE") . " and " . "\n";
echo ((true && true) ? "TRUE" : "FALSE") . " && " . "\n";
echo ((false or true) ? "TRUE" : "FALSE") . " or " . "\n";
echo ((false || true) ? "TRUE" : "FALSE") . " || " . "\n";
echo ((false xor true) ? "TRUE" : "FALSE") . " false xor true " . "\n";
echo ((true xor true) ? "TRUE" : "FALSE") . " true xor true " . "\n";
echo ((false xor false) ? "TRUE" : "FALSE") . " false xor false " . "\n";

echo (null ?? "Exp2") . " null ?? Exp2 " . "\n";
echo ("Exp1" ?? "Exp2") . " Exp1 ?? EXP2 " . "\n";
echo ("Exp1" ?? null) . " Exp1 ?? null " . "\n";
echo (null ?? null) === null ?
"null ?? null Is NULL \n" :
"null ?? null Not NULL \n";

if (1 != 1) {
    echo "IF";
} elseif (2 == 2) {//both elseif and else if should work
    echo "ELSE IF";
}
