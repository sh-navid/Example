<?php
class Pen
{
    public $color;
    public function __construct($color)
    {
        $this->color = $color;
    }

    public function info()
    {
        return "Pen is " . $this->color;
    }
}

echo (new Pen("RED"))->info()."\n";
echo (new Pen("BLUE"))->info();
