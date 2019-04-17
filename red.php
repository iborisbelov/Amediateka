<?php 
header('Content-Type: application/json');

echo(file_get_contents("https://kanobu.ru/api/v1/materials/?offset=0&limit=10&tags=igra-prestolov-8-sezon"));