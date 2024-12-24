const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890/\\-+_=';

export const scrambleLetters = (text, intensity) => {
  return text.split('').map(char => {
    if(char === ' ') return char;
    if (Math.random() < intensity) {
      // Pick a random character from LETTERS
      const randomChar = LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
      return randomChar;
    }
    return char;
  }).join('');
};