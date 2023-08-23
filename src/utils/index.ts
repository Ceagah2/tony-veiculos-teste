export const formatPhoneNumber = (phoneNumber: string) => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');
  if (cleanedNumber.length <= 14) {
    let maskFormat = '(xx)xxxx-xxxx';
    if (cleanedNumber.length === 15) {
      maskFormat = '(xx)xxxxx-xxxx';
    }

    let formattedNumber = '';
    let charIndex = 0;

    for (let i = 0; i < maskFormat.length; i++) {
      const maskChar = maskFormat.charAt(i);
      if (maskChar === 'x') {
        formattedNumber += cleanedNumber[charIndex] || '';
        charIndex++;
      } else {
        formattedNumber += maskChar;
      }
    }

    return formattedNumber;
  }
  return phoneNumber;
};

export const isValidEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
