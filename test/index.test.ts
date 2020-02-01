import assert from "assert";

import { hello } from "~/index";

it("should work", () => {
  assert(hello(), "world");
});
