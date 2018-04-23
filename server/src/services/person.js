import raw from "./raw/person.js";
import { asyncronifyAll } from "./util";

const persons = asyncronifyAll(raw);

export default {
  ...persons,
  remove: persons.remove
};
