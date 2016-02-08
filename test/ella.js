import mocha from "mocha";

import vec2        from "./vec2.js";
import vec2Builder from "./vec2Builder.js";

mocha.setup("bdd");

vec2();
vec2Builder();

mocha.run();
