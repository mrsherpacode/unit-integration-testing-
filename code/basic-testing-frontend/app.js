import { exportEnterNumberValues } from "./src/parser.js";
import {
  validateStringNotEmpty,
  validateNumber,
} from "./src/util/validation.js";
import { add, calculeResult } from "./src/math.js";
import { transformToNumber } from "./src/util/numbers.js";
import { generateResultText, outputResult } from "./src/util/new.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = exportEnterNumberValues(form);

  const result = calculeResult(numberValues);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
