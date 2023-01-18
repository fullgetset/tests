const getData = require("./getData");
const axios = require("axios");

// Мокаем axios для дальнейшей работы с ним
jest.mock("axios");

describe("getData", () => {
  let response;

  beforeEach(() => {
    // схема того, что дожен вернуть нам бэк
    response = {
      data: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
      ],
    };
  });

  test("Корректное значение", async () => {
    // Согласовываем схему get у axios
    axios.get.mockReturnValue(response);
    const data = await getData();

    // ожидаем, что вызовется 1 раз
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(["1", "2"]);
    // В случае изменения тестируемой функции, для наглядной демонстрации, что изменилось
    expect().toMatchSnapshot();
  });
});
