export const getCurrentDay = () => {
  const currentDate = new Date();

  return currentDate.getDay();
};

export const isWeekendToday = () => {
  const currentDate = new Date();

  return currentDate.getDay() % 6 === 0;
};
