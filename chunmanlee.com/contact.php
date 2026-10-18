<?php
declare(strict_types=1);

const CONTACT_RECIPIENT = 'chunlee.rva@gmail.com';
const CONTACT_SENDER = 'website@chunmanlee.com';

function redirect_with_status(string $status): void
{
    header('Location: contact.html?' . $status . '=1#contact-form', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit('Method not allowed.');
}

if (trim((string)($_POST['company_website'] ?? '')) !== '') {
    redirect_with_status('sent');
}

$firstName = trim((string)($_POST['first_name'] ?? ''));
$lastName = trim((string)($_POST['last_name'] ?? ''));
$email = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$subject = trim((string)($_POST['subject'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

if ($firstName === '' || $lastName === '' || $email === false || $subject === '' || $message === '') {
    redirect_with_status('error');
}

$firstName = mb_substr(str_replace(["\r", "\n"], ' ', $firstName), 0, 80);
$lastName = mb_substr(str_replace(["\r", "\n"], ' ', $lastName), 0, 80);
$subject = mb_substr(str_replace(["\r", "\n"], ' ', $subject), 0, 140);
$message = mb_substr($message, 0, 10000);

$mailSubject = '[chunmanlee.com] ' . $subject;
$body = "New website contact form submission\n\n"
    . "Name: {$firstName} {$lastName}\n"
    . "Email: {$email}\n"
    . "Subject: {$subject}\n\n"
    . "Message:\n{$message}\n";

$headers = [
    'From: Chun Man Lee Website <' . CONTACT_SENDER . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Content-Type-Options: nosniff',
];

$sent = mail(CONTACT_RECIPIENT, $mailSubject, $body, implode("\r\n", $headers));
redirect_with_status($sent ? 'sent' : 'error');
