const square = require("./square");

describe("square", () => {
  let mockValue;
  //Перед запуском каждого теста проводить какие-то операции
  beforeEach(() => {
    // Пример Добавили в базу данных
  });

  // единажды перед запуском всех тестов
  beforeAll(() => {});

  test("Корректное значение", () => {
    expect(square(4)).toBe(16);
    // полученое число меньше toBeLessThan
    expect(square(4)).toBeLessThan(17);
    // полученое число больше toBeGreaterThan
    expect(square(4)).toBeGreaterThan(7);
    // отрицание not , проверка на undefined - toBeUndefined
    expect(square(2)).not.toBeUndefined();

    // мокаем
    const spyMathPow = jest.spyOn(Math, "pow");
    // делаем вызов функции
    square(2);
    // количество вызовов
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("Мокаем", () => {
    const spyMathPowZero = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPowZero).toBeCalledTimes(0);
  });

  // после запуска каждого теста
  afterEach(() => {
    // Пример удалили из базы данных

    // Очищаем моки
    jest.clearAllMocks();
  });

  // единажды после запуска всех тестов
  afterAll(() => {});
});
