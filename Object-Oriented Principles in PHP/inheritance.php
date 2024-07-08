<?php


class Collection
{

    protected array $items;


    public function __construct(array $items)
    {
        $this->items = $items;
    }


    public function sum($key)
    {
        return array_sum(array_column($this->items, $key));
    }
}


class VideoCollection extends Collection
{
    public function length()
    {
        return $this->sum('length');
    }
}


class Video
{
    public $title;
    public $length;

    public function __construct($title, $length)
    {
        $this->title = $title;
        $this->length = $length;
    }
}

$videos = new VideoCollection([
    new Video('Rambo', 130),
    new Video('Rambo 2', 120),
    new Video('Rambo 3', 145),
]);

var_dump($videos->length());
