<?php
declare(strict_types=1);
require __DIR__ . '/auth-config.php';

header('X-Robots-Tag: noindex, nofollow, noarchive, nosnippet', true);
$next = pcc_safe_next((string)($_GET['next'] ?? $_POST['next'] ?? 'index.html'));
$error = '';

if (pcc_has_access()) {
    header('Location: ' . $next, true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = (string)($_POST['password'] ?? '');
    if (hash_equals(PCC_PASSWORD_SHA256, hash('sha256', $password))) {
        pcc_set_access_cookie();
        header('Location: ' . $next, true, 303);
        exit;
    }
    $error = 'That password is not correct. Please try again.';
}
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive,nosnippet">
  <title>Private Case Studies | Chun Man Lee</title>
  <style>
    :root{--ink:#edf5f5;--muted:#9fb5b7;--canvas:#061316;--surface:#0c2227;--lime:#c9ff65;--aqua:#58e2d5;--line:rgba(237,245,245,.16)}
    *{box-sizing:border-box}body{min-height:100vh;margin:0;display:grid;place-items:center;padding:28px;color:var(--ink);background:radial-gradient(circle at 78% 28%,rgba(88,226,213,.16),transparent 24%),radial-gradient(circle at 20% 80%,rgba(201,255,101,.11),transparent 25%),var(--canvas);font:16px/1.55 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    main{width:min(620px,100%);padding:clamp(30px,6vw,58px);border:1px solid rgba(201,255,101,.3);background:linear-gradient(145deg,rgba(12,34,39,.96),rgba(6,19,22,.98));box-shadow:0 30px 90px rgba(0,0,0,.35)}
    .eyebrow{color:var(--aqua);font-size:.75rem;font-weight:850;letter-spacing:.13em;text-transform:uppercase}h1{margin:14px 0 20px;font-size:clamp(2.7rem,8vw,5.4rem);line-height:.9;letter-spacing:-.055em}h1 span{color:var(--lime)}p{color:var(--muted)}form{display:grid;gap:12px;margin-top:34px}label{font-size:.75rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}input{width:100%;padding:15px;border:1px solid var(--line);background:#030e11;color:var(--ink);font:inherit}input:focus{outline:3px solid rgba(201,255,101,.2);border-color:var(--lime)}button{justify-self:start;margin-top:8px;padding:12px 18px;border:1px solid var(--lime);border-radius:4px;background:transparent;color:var(--lime);font:800 .78rem/1 inherit;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}button:hover{background:var(--lime);color:var(--canvas)}.error{padding:12px 14px;border-left:3px solid #ff8f8f;background:rgba(255,100,100,.08);color:#ffd4d4}
  </style>
</head>
<body><main><div class="eyebrow">Private portfolio</div><h1>Case Studies<span>.</span></h1><p>This presentation contains private portfolio material. Enter the access password to continue. Access will remain available on this browser for 30 days.</p><?php if ($error !== ''): ?><p class="error" role="alert"><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?><form method="post" action="auth.php"><input type="hidden" name="next" value="<?= htmlspecialchars($next, ENT_QUOTES, 'UTF-8') ?>"><label for="password">Password</label><input id="password" name="password" type="password" autocomplete="current-password" required autofocus><button type="submit">View Case Studies</button></form></main></body>
</html>
