<?php


interface Newsletter
{
    public function subscribe($email);
}


class CampaignMonitor implements Newsletter
{
    public function subscribe($email)
    {
        die('subscribing from campaign monitor');
    }
}


class Drip implements Newsletter
{
    public function subscribe($email)
    {
        die('subscribing from Drip');
    }
}


class NewsletterSubscriptionController
{
    public function store(Newsletter $newsletter)
    {
        $email = 'johndoe@gmail.com';
        $newsletter->subscribe($email);
    }
}


$controller = new NewsletterSubscriptionController();

$controller->store(new CampaignMonitor());


/*
Interfejsy (Newsletter) definiują kontrakt, który musi być przestrzegany przez wszystkie klasy implementujące ten interfejs (CampaignMonitor, Drip).
Interfejs określa, jakie metody muszą być zaimplementowane, ale nie definiuje, jak te metody powinny działać.

Handshakes (porozumienia) w tym kontekście odnoszą się do zobowiązania klas implementujących interfejs Newsletter do zaimplementowania metody subscribe($email).
Dzięki temu, inne części kodu (np. NewsletterSubscriptionController) mogą polegać na tym, że każda klasa Newsletter posiada metodę subscribe, co umożliwia bezpieczną i spójną interakcję.
*/