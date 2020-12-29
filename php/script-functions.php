<?php
$secret = "121212DDD";

echo base64_encode($secret)."\n";

echo strrev($secret)."\n";

echo bin2hex($secret);