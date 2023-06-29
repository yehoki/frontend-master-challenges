export const formatPopulation = (population: number): string => {
  if (population < 1000) {
    return population.toString();
  } else if (population >= 1000 && population < 1000000) {
    const firstPart = Math.floor(population / 1000);
    const secondPart = population - firstPart * 1000;
    return `${firstPart},${secondPart}`;
  } else if (population >= 1000000 && population < 1000000000) {
    const firstPart = Math.floor(population / 1000000);
    const secondPart = Math.floor((population - firstPart * 1000000) / 1000);
    const thirdPart = population - firstPart * 1000000 - secondPart * 1000;
    return `${firstPart},${secondPart},${thirdPart}`;
  } else {
    const firstPart = Math.floor(population / 1000000000);
    const secondPart = Math.floor(
      (population - firstPart * 1000000000) / 1000000
    );
    const thirdPart = Math.floor(
      (population - firstPart * 1000000000 - secondPart * 1000000) / 1000
    );
    const finalPart =
      population -
      firstPart * 1000000000 -
      secondPart * 1000000 -
      thirdPart * 1000;
    return `${firstPart},${secondPart},${thirdPart},${finalPart}`;
  }
};

export const sortCountriesByName = (countries: any[] | null): any[] => {
  if (countries !== null) {
    const arrForSort = [...countries];
    return arrForSort.sort((first, second) => {
      if (first.name.common < second.name.common) {
        return -1;
      } else if (first.name.common > second.name.common) {
        return 1;
      }
      return 0;
    });
  }
  return [];
};
