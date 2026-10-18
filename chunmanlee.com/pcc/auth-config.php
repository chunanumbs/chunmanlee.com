<?php
declare(strict_types=1);

const PCC_PASSWORD_SHA256 = '2f13ffd3492524bd63a1a985eddb9a529582c8668a817373227229bbf4865526';
const PCC_COOKIE_SECRET = 'c516158e35bfdac1cf4c82b051b12b8ce2777bec87e0238385bcc63751d8bfa6';
const PCC_COOKIE_NAME = 'pcc_access';
const PCC_COOKIE_LIFETIME = 2592000;

function pcc_base64url_encode(string $value): string
{
    return rtrim(strtr(base64_encode($value), '+/', '-_'), '=');
}

function pcc_create_token(int $expires): string
{
    $signature = hash_hmac('sha256', (string)$expires, PCC_COOKIE_SECRET, true);
    return $expires . '.' . pcc_base64url_encode($signature);
}

function pcc_has_access(): bool
{
    $token = (string)($_COOKIE[PCC_COOKIE_NAME] ?? '');
    if (!preg_match('/^(\d+)\.([A-Za-z0-9_-]+)$/', $token, $matches)) return false;
    $expires = (int)$matches[1];
    if ($expires < time()) return false;
    return hash_equals(pcc_create_token($expires), $token);
}

function pcc_set_access_cookie(): void
{
    $expires = time() + PCC_COOKIE_LIFETIME;
    setcookie(PCC_COOKIE_NAME, pcc_create_token($expires), [
        'expires' => $expires,
        'path' => '/pcc/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
}

function pcc_safe_next(string $value): string
{
    $value = ltrim(str_replace('\\', '/', $value), '/');
    if ($value === '' || str_contains($value, '..') || preg_match('/^[a-z][a-z0-9+.-]*:/i', $value)) return 'index.html';
    return $value;
}
