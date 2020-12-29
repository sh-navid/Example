<?php
$secret = "121212DDD";

echo base64_encode($secret)."\n";

echo base64_decode(base64_encode($secret))."\n";

echo strrev($secret)."\n";

echo bin2hex($secret)."\n";

echo strlen($secret)."\n";