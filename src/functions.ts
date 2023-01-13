export const itIsASafePlace = (input: Array<1 | -1>) => {
  let isSecure = true;

  input.reduce((acc, curr) => {
    if (acc < 0) isSecure = false;
    return acc + curr;
  }, 0);

  return isSecure;
};

export const safePlaceDetectorDevice = (input: string) => {
  const countAntiparticles = (input.match(/0/g) || []).length;
  const countParticles = (input.match(/1/g) || []).length;

  if (countParticles === 0 && countAntiparticles === 0) {
    return { isSecure: true, message: 'Without any particles and antiparticles everywhere is safe' };
  }
  if (countAntiparticles === 0) return { isSecure: true, message: 'Without any antiparticles everywhere is safe' };
  if (countParticles === 0) return { isSecure: false, message: 'Without any particles there will be no safe place' };
  if (countAntiparticles > countParticles) {
    return { isSecure: false, message: 'With so many antiparticles there will be no safe place' };
  }

  const sequence = input.split('').map((char) => {
    if (char === '1') return 1;
    else return -1;
  });

  return itIsASafePlace(sequence)
    ? { isSecure: true, message: 'It is a safe place' }
    : { isSecure: false, message: 'It is not a safe place' };
};
