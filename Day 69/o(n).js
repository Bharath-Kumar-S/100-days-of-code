//O(1)
// const cars = ['bmw'];

// linear time complexity
const cars = [
  "volvo",
  "skoda",
  "scania",
  "honda",
  "hyundai",
  "kia",
  "bmw",
  "benz",
];

const findCars = (cars, car) => {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i] === car) {
      return i;
    }
  }
};

console.log(findCars(cars, "bmw"));
