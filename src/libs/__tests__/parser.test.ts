import { parser } from "../parser";

describe("Parser", () => {
  it("should parse a simple expression", () => {
    expect(parser("word")).toEqual(["word"]);
  });
});
