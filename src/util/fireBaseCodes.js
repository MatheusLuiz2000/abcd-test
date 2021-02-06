export default function(value) {
  switch (value) {
    case 'auth/user-not-found':
      return 'Usúario não encontrado';
    case 'auth/wrong-password':
      return 'Senha incorreta';
    default:
      return value;
  }
}
