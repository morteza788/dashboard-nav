/**
 * Theme: Dastyle - Responsive Bootstrap 4 Admin Dashboard
 * Author: themes
 * Timeout Js
 */


$.sessionTimeout({
  message: 'سشن شما در 30 ثانیه قفل خواهد شد.',
  keepAliveUrl: 'pages-starter.html',
  logoutButton:'خروج',
  logoutUrl: 'auth-login.html',
  redirUrl: 'auth-lock-screen.html',
  warnAfter: 3000,
  redirAfter: 30000,
  countdownBar: true
});
