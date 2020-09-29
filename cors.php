<?php

$url = 'http://api.textrazor.com/';

$txt = $_POST['text'];
// var_dump($txt);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array(
	'text' => $txt,
	// 'extractors' => 'entities,topics,words,phrases,dependency-trees,relations,entailments,senses,spelling',
	'extractors' => 'topics',
)));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'x-textrazor-key: cee656c165bf15f504636fe19050f76b95018179165ab6649002d14b',
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

curl_close($ch);

header('Content-Type: application/json');
die($server_output);
