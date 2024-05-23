<?php
echo 'yay';
echo PHP_EOL;
$apples = 13;
function monch (int $item): int {
    return $item - 1;
}
echo 'initial ' . $apples . PHP_EOL;
$apples = monch ($apples);
echo 'final ' . $apples . PHP_EOL;
