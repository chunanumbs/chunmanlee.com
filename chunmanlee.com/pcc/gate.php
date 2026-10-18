<?php
declare(strict_types=1);
require __DIR__ . '/auth-config.php';

header('X-Robots-Tag: noindex, nofollow, noarchive, nosnippet', true);
$path = pcc_safe_next((string)($_GET['path'] ?? 'index.html'));

if (!pcc_has_access()) {
    header('Location: auth.php?next=' . rawurlencode($path), true, 303);
    exit;
}

if ($path === 'contact.php') {
    require __DIR__ . '/contact.php';
    exit;
}

$extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
if ($extension === 'php' || str_starts_with(basename($path), '.')) {
    http_response_code(404);
    exit('Not found.');
}

$root = realpath(__DIR__);
$file = realpath(__DIR__ . '/' . $path);
if ($root === false || $file === false || !str_starts_with($file, $root . DIRECTORY_SEPARATOR) || !is_file($file)) {
    http_response_code(404);
    exit('Not found.');
}

$mimeTypes = [
    'html' => 'text/html; charset=UTF-8', 'css' => 'text/css; charset=UTF-8',
    'js' => 'application/javascript; charset=UTF-8', 'json' => 'application/json; charset=UTF-8',
    'svg' => 'image/svg+xml', 'png' => 'image/png', 'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg',
    'gif' => 'image/gif', 'webp' => 'image/webp', 'ico' => 'image/x-icon',
    'pdf' => 'application/pdf', 'txt' => 'text/plain; charset=UTF-8',
];
header('Content-Type: ' . ($mimeTypes[$extension] ?? 'application/octet-stream'));
header('Content-Length: ' . filesize($file));
header('Cache-Control: private, max-age=3600');
if ($_SERVER['REQUEST_METHOD'] !== 'HEAD') readfile($file);
