const delay = require("./delay");

describe("delay", () => {
  // Делаем callback async
  test("Корректное значение", async () => {
    const sum = await delay(() => 3 + 3, 2000);
    expect(sum).toBe(6);
  });
});
