// https://www.codewars.com/kata/56fac4cfda8ca6ec0f001746

const dayAndTime = (n) => {
  const date = new Date('November 17, 2019 00:00:00');
  date.setTime(date.getTime() + n * 60 * 1000);
  return date.toLocaleDateString('en', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
};

export default dayAndTime;
