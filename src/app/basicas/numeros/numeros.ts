export function incrementar(numero: number) {
  if (numero > 100) {
    return 100;
  } else {
    return (numero = numero + 1);
  }
}
