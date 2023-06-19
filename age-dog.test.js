const ageDog = require("./age-dog.js");

describe("ageDog", () => {
  it("should return an object with an ingcreased age", () => {
    //ARRANGE
    const dog1 = { name: "john", age: 3 };
    //ACT
    const changedDog = ageDog(dog1, 1);
    //ASSERT
    expect(changedDog).toEqual({ name: "john", age: 4 });
  });
});
