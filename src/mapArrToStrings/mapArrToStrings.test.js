const mapArrToStrings = require("./mapArrToStrings");

// Проверка по ссылке, делает глубокое сравнение (toEqual)
describe("mapArrToStrings", () => {
  test("Корректное значение", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Разные значения", () => {
    expect(mapArrToStrings(["1", null, 3])).toEqual(["3"]);
  });

  test("Пустой массив", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test("Отрицание", () => {
    // Добавляем приставку not , для отрицания
    expect(mapArrToStrings([])).not.toEqual(["1"]);
  });
});
