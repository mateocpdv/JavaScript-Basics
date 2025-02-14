let role = 'guest';
//Se usa parecido a un if, else if, else
switch (role) {
  case 'guest':
    console.log('guest User');
    break;

  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User');
}
