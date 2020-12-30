<?php
define("DEF", "Defined Parameter");
define("ARR", ["Item A", "Item B"]);

echo DEF . "\n";

echo ARR . "\n";

echo ARR[1] . "\n";

$x = 12;

//PHP Global Variables

//$GLOBALS
echo $GLOBALS["x"] . "\n\n";

//$_SERVER
foreach ($_SERVER as $x => $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "\n";
}
echo "\n\n";

//$_REQUEST
//$_GET
//$_POST
//$_FILES
//$_ENV
//$_SESSION
//$_COOKIE