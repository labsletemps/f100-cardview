<?php
// Config
require_once __DIR__ . '/vendor/autoload.php';

$dirs  = array();
$dirs[] = __DIR__;
$dirs[] = __DIR__ . '/templates';
if (is_dir( __DIR__ . '/../../_admin/templates')) {
	$dirs[] =  __DIR__ . '/../../_admin/templates';
}

if (strpos($_SERVER['HTTP_HOST'], 'localhost') !== 0) { // FALSE
	$dirs[] = __DIR__ . '/../web/_admin/templates';
}

$loader = new Twig_Loader_Filesystem($dirs);
$twig = new Twig_Environment($loader);

// Variables
$variables = array();
if (file_exists(__DIR__ . '/variables.json')) {
	$variables = json_decode(file_get_contents(__DIR__ . '/variables.json'), TRUE);
}

// Application variables (as URL and more)
$app = new stdClass();

// @TODO Secure it !!!
$host = $_SERVER['HTTP_HOST'];
$uri = $_SERVER['REQUEST_URI'];
$path_info = $_SERVER['PATH_INFO'];
$base_path = rtrim(str_replace('index.php', '', $_SERVER['SCRIPT_NAME']), '/');

$app->base_path = $base_path;
$app->url = 'http://' . $host . $uri;
$variables = array_merge($variables, array('app' => $app));


// Si plusieurs pages
$template = 'index.html.twig';
if (isset($_GET['page']) && !empty($_GET['page'])) {
	if (file_exists(__DIR__ . '/' . $_GET['page'] . '.html.twig')) {
		$template = $_GET['page'] . '.html.twig';
	}
}

$content = file_get_contents($template);

// Afficher le template
echo $twig->render($template, $variables);
