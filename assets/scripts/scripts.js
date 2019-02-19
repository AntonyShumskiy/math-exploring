/* Глобальные переменные */

/**
 * Видимость блока с подсказкой к 1 вопросу.
 * @type {boolean} true - блок видимый, false - блок невидимый.
 */
let isQ1HelpVisible = false;

/**
 * Видимость блока с успешным вариантом к 1 вопросу.
 * @type {boolean} true - блок видимый, false - блок невидимый.
 */
let isQ1SuccessVisible = false;


// TODO сюда следует добавлять другие переменные, которые будут нужны для обработки логики.
// TODO возможно также потребуются константы (для правильных ответов) их объявлять так:

/**
 * Правильный ответ к 1 вопросу.
 * @type {string}
 */
const Q1_PROPER_ANSWER = "одной грани";

/**
 * Правильный ответ ко 2 вопросу.
 * @type {string}
 */
const Q2_PROPER_ANSWER = "L и K";

/**
 * Правильный ответ к 3 вопросу (ветвь 1).
 * @type {string}
 */
const Q3_PROPER_ANSWER_1 = "AB";
/**
 * Правильный ответ к 3 вопросу (ветвь 2).
 * @type {string}
 */
const Q3_PROPER_ANSWER_2 = "BC";

/* ----- Глобальные переменные ------ */



/* Подключение всех функций страницы */

/**
 * Тестовая функция (на самом деле она не нужна).
 * По нажатию на кнопку к 1 вопросу она будет поочередно показывать то блок с успехом, то блок с неудачей.
 */
$(document).ready(function () {
  $("div#question1-Help").hide();
  $("div#question1-Success").hide();

  $("input#q1-btn").click(function () {

    let typedText = $('input[name=question1TextInput]').val();

    if (typedText !== undefined) {
      typedText = typedText.toLowerCase();
    }

    // TODO переделать этот код
    isQ1HelpVisible = !isQ1HelpVisible;
    isQ1SuccessVisible = !isQ1SuccessVisible;

    if (isQ1HelpVisible) {
      $("div#question1-Help").hide();
    } else {
      $("div#question1-Help").show();
    }

    if (isQ1SuccessVisible) {
      $("div#question1-Success").show();
    } else {
      $("div#question1-Success").hide();
    }
  });
});

/**
 * функция по нажатию на кнопку ок второго вопроса.
 */
$(document).ready(function () {

  $("div#question2-Help").hide();
  $("div#question2-Success").hide();

  $("input#q2-btn").click(function () {

    let selectedRadio = $('input[name="question2RadioGroup"]:checked').val();
    if (selectedRadio === Q2_PROPER_ANSWER) {
      $("div#question2-Success").show();
      $("div#question2-Help").hide();
    } else {
      $("div#question2-Success").hide();
      $("div#question2-Help").show();
    }
  });
});

/**
 * функция по нажатию на кнопку ок третьего вопроса.
 */
$(document).ready(function () {

  $("div#question3-Help").hide();
  $("div#question3_1-Success").hide();
  $("div#question3_2-Success").hide();

  $("input#q3-btn").click(function () {

    let selectedAnswer = $( "#3-edge-select option:selected" ).text();
    if (selectedAnswer === Q3_PROPER_ANSWER_1) {

      $("div#question3_1-Success").show();
      $("div#question3_2-Success").hide();
      $("div#question3-Help").hide();

    } else if (selectedAnswer === Q3_PROPER_ANSWER_2) {

      $("div#question3_1-Success").hide();
      $("div#question3_2-Success").show();
      $("div#question3-Help").hide();

    } else {
      $("div#question3_1-Success").hide();
      $("div#question3_2-Success").hide();
      $("div#question3-Help").show();
    }
  });
});



// TODO добавить обработку других функций

/* --------Подключение всех функций страницы ----------*/