const validateValue = require("./validateValue");

// Проверка значений toBe
describe("validateValue", () => {
  test("Корректное значение", () => {
    expect(validateValue(15)).toBe(true);
  });

  test("Меньше корректного", () => {
    expect(validateValue(9)).toBe(false);
  });

  test("Больше корректного", () => {
    expect(validateValue(21)).toBe(false);
  });

  test("Нижняя граница", () => {
    expect(validateValue(10)).toBe(true);
  });

  test("Верхняя граница", () => {
    expect(validateValue(20)).toBe(true);
  });
});
