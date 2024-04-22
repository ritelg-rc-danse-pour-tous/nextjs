// Cree une fonction truncate qui prend en paramètre une chaine de caractère et un nombre et qui retourne la chaine de caractère tronquée à la longueur spécifiée, suivi de "..." si la chaine est plus longue que la longueur spécifiée, mais qui coupe pas au milieu d'un mot.
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;

  // Trouvez l'index de l'espace le plus proche avant la limite de longueur maximale
  const indexOfLastSpace = str.substring(0, length).lastIndexOf(" ");

  // Si aucun espace n'est trouvé, tronquez simplement à la longueur maximale
  if (indexOfLastSpace === -1) {
    return str.substring(0, length) + "...";
  }

  // Sinon, tronquez à l'index de cet espace
  return str.substring(0, indexOfLastSpace) + "...";
}
