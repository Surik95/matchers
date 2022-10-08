import { sortLifes, arrHeroes } from '../index';

sortLifes(arrHeroes);

const expectedObj = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('Проверка работы функции сортировки', () => {
  const result = sortLifes(arrHeroes);
  expect(result).toEqual(expectedObj);
});

// test("Проверка работы функции healthy", () => {
//   const result = lifeIndication({ name: "Маг", health: 35 });
//   expect(result).toBe("Маг wounded");
// });

// test("Проверка работы функции healthy", () => {
//   const result = lifeIndication({ name: "Маг", health: 10 });
//   expect(result).toBe("Маг critical");
// });

// test.each([
//   ["Маг healthy", { name: "Маг", health: 90 }],
//   ["Маг wounded", { name: "Маг", health: 35 }],
//   ["Маг critical", { name: "Маг", health: 10 }],
// ])("Проверка работы функции c показателем жизни %s", (expected, obj) => {
//   const result = lifeIndication(obj);
//   expect(result).toBe(expected);
// });
