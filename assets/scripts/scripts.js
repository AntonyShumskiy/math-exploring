/* Глобальные переменные */

/**
 * Варинат ответа на 3-й вопрос, может быть 1 из двух вариантов, либо null.
 Value can be Q3_PROPER_ANSWER_1, Q3_PROPER_ANSWER_2 or null.
 */
let answer3option = null;

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

const Q4_1_PROPER_ANSWER_FIRST = "X1";
const Q4_1_PROPER_ANSWER_SECOND = "M";

const Q5_1_PROPER_ANSWER = "N и L";

const Q7_1_PROPER_ANSWER_FIRST = "X2";
const Q7_1_PROPER_ANSWER_SECOND = "M";

const Q8_1_PROPER_ANSWER = "P и K";

const Q4_2_PROPER_ANSWER_FIRST = "X2";
const Q4_2_PROPER_ANSWER_SECOND = "M";

const Q5_2_PROPER_ANSWER = "K и P";

const Q7_2_PROPER_ANSWER_FIRST = "X1";
const Q7_2_PROPER_ANSWER_SECOND = "M";

const Q8_2_PROPER_ANSWER = "N и L";

/* ----- Глобальные переменные ------ */



/* Подключение всех функций страницы */

/**
 * Сокрытие всех элементов при загрузке страницы.
 */
$(document).ready(function () {

  $("div#question1-Help").hide();
  $("div#question1-Success").hide();

  $("div#question2-Help").hide();
  $("div#question2-Success").hide();

  $("div#question3-Help").hide();
  $("div#question3_1-Success").hide();
  $("div#question3_2-Success").hide();

  $("div#question4_1-Help").hide();
  $("div#question4_2-Help").hide();
  $("div#question4_1-Success").hide();
  $("div#question4_2-Success").hide();

  $("div#question5_1-Help").hide();
  $("div#question5_2-Help").hide();
  $("div#question5_1-Success").hide();
  $("div#question5_2-Success").hide();

  $("div#question6_1-Help").hide();
  $("div#question6_2-Help").hide();
  $("div#question6_1-Success").hide();
  $("div#question6_2-Success").hide();

  $("div#question7_1-Help").hide();
  $("div#question7_2-Help").hide();
  $("div#question7_1-Success").hide();
  $("div#question7_2-Success").hide();

  $("div#result-Help").hide();
  $("div#result-Success").hide();

  $("div#question2").hide();
  $("div#question3").hide();
  $("div#question4_1").hide();
  $("div#question4_2").hide();
  $("div#question5_1").hide();
  $("div#question5_2").hide();
  $("div#question6_1").hide();
  $("div#question6_2").hide();
  $("div#question7_1").hide();
  $("div#question7_2").hide();
  $("div#question8_1").hide();
  $("div#question8_2").hide();
});

/**
 * Прокрутка вниз.
 */
function scrollDown() {
  $('html, body').animate({
    scrollTop: $(".result").offset().top
  }, 1000);
}

/**
 * Тестовая функция (на самом деле она не нужна).
 * По нажатию на кнопку к 1 вопросу она будет поочередно показывать то блок с успехом, то блок с неудачей.
 */
$(document).ready(function () {

  $("input#q1-btn").click(function () {

    let typedText = $('input[name=question1TextInput]').val();

    if (typedText !== undefined) {
      typedText = typedText.toLowerCase();
    }

    if (typedText === Q1_PROPER_ANSWER) {

      $("div#question1-Success").show();
      $("div#question1-Help").hide();

      $("div#question2").show();
    } else {
      $("div#question1-Success").hide();
      $("div#question1-Help").show();
    }

    scrollDown();
  });
});



/**
 * функция по нажатию на кнопку ок второго вопроса.
 */
$(document).ready(function () {

  $("input#q2-btn").click(function () {

    let selectedRadio = $('input[name="question2RadioGroup"]:checked').val();
    if (selectedRadio === Q2_PROPER_ANSWER) {



      $("div#question2-Success").show();
      $("div#question2-Help").hide();

      $("div#question3").show();



    } else {
      $("div#question2-Success").hide();
      $("div#question2-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок третьего вопроса.
 */
$(document).ready(function () {

  $("input#q3-btn").click(function () {

    let selectedAnswer = $( "#3-edge-select option:selected" ).text();
    if (selectedAnswer === Q3_PROPER_ANSWER_1) {

      answer3option = Q3_PROPER_ANSWER_1;

      $("div#question3_1-Success").show();
      $("div#question3_2-Success").hide();
      $("div#question3-Help").hide();

      $("div#question4_1").show();
    } else if (selectedAnswer === Q3_PROPER_ANSWER_2) {

      answer3option = Q3_PROPER_ANSWER_2;

      $("div#question3_1-Success").hide();
      $("div#question3_2-Success").show();
      $("div#question3-Help").hide();

      $("div#question4_2").show();
    } else {
      $("div#question3_1-Success").hide();
      $("div#question3_2-Success").hide();
      $("div#question3-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок четвертого вопроса (AB).
 */
$(document).ready(function () {

  $("input#q4_1-btn").click(function () {

    let selectedAnswerFirst = $( "#q4_1-edge-select-1 option:selected" ).text();
    let selectedAnswerSecond = $( "#q4_1-edge-select-2 option:selected" ).text();

    if ((selectedAnswerFirst === Q4_1_PROPER_ANSWER_FIRST && selectedAnswerSecond === Q4_1_PROPER_ANSWER_SECOND)
      || (selectedAnswerFirst === Q4_1_PROPER_ANSWER_SECOND && selectedAnswerSecond === Q4_1_PROPER_ANSWER_FIRST)
    ) {

      $("div#question4_1-Success").show();
      $("div#question4_1-Help").hide();

      $("div#question5_1").show();
    } else {
      $("div#question4_1-Success").hide();
      $("div#question4_1-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок пятого вопроса (AB).
 */
$(document).ready(function () {

  $("input#q5_1-btn").click(function () {

    let selectedRadio = $('input[name="question5_1RadioGroup"]:checked').val();

    if (selectedRadio === Q5_1_PROPER_ANSWER) {

      $("div#question5_1-Success").show();
      $("div#question5_1-Help").hide();

      $("div#question6_1").show();
    } else {

      $("div#question5_1-Success").hide();
      $("div#question5_1-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок шестого вопроса (AB).
 */
$(document).ready(function () {

  $("input#q6_1-btn").click(function () {

    let selectedAnswer = $( "#q6_1-edge-select option:selected" ).text();

    if (selectedAnswer === Q3_PROPER_ANSWER_2) {
      $("div#question6_1-Success").show();
      $("div#question6_1-Help").hide();

      $("div#question7_1").show();

    } else {
      $("div#question6_1-Success").hide();
      $("div#question6_1-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок седьмого вопроса (AB).
 */
$(document).ready(function () {

  $("input#q7_1-btn").click(function () {

    let selectedAnswerFirst = $( "#q7_1-edge-select-1 option:selected" ).text();
    let selectedAnswerSecond = $( "#q7_1-edge-select-2 option:selected" ).text();

    if ((selectedAnswerFirst === Q7_1_PROPER_ANSWER_FIRST && selectedAnswerSecond === Q7_1_PROPER_ANSWER_SECOND)
      || (selectedAnswerFirst === Q7_1_PROPER_ANSWER_SECOND && selectedAnswerSecond === Q7_1_PROPER_ANSWER_FIRST)
    ) {
      $("div#question7_1-Success").show();
      $("div#question7_1-Help").hide();

      $("div#question8_1").show();
    } else {
      $("div#question7_1-Success").hide();
      $("div#question7_1-Help").show();
    }

    scrollDown();
  });
});


/**
 * функция по нажатию на кнопку ок восьмого вопроса (AB).
 */
$(document).ready(function () {

  $("input#q8_1-btn").click(function () {

    let selectedRadio = $('input[name="question8_1RadioGroup"]:checked').val();

    if (selectedRadio === Q8_1_PROPER_ANSWER) {

      $("div#result-Success").show();
      $("div#result-Help").hide();
    } else {

      $("div#result-Success").hide();
      $("div#result-Help").show();
    }

    scrollDown();
  });
});


/**
 * функция по нажатию на кнопку ок четвертого вопроса (ВС).
 */
$(document).ready(function () {

  $("input#q4_2-btn").click(function () {

    let selectedAnswerFirst = $( "#q4_2-edge-select-1 option:selected" ).text();
    let selectedAnswerSecond = $( "#q4_2-edge-select-2 option:selected" ).text();

    if ((selectedAnswerFirst === Q4_2_PROPER_ANSWER_FIRST && selectedAnswerSecond === Q4_2_PROPER_ANSWER_SECOND)
      || (selectedAnswerFirst === Q4_2_PROPER_ANSWER_SECOND && selectedAnswerSecond === Q4_2_PROPER_ANSWER_FIRST)
    ) {

      $("div#question4_2-Success").show();
      $("div#question4_2-Help").hide();

      $("div#question5_2").show();

    } else {
      $("div#question4_2-Success").hide();
      $("div#question4_2-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок пятого вопроса (ВС).
 */
$(document).ready(function () {

  $("input#q5_2-btn").click(function () {

    let selectedRadio = $('input[name="question5_2RadioGroup"]:checked').val();

    if (selectedRadio === Q5_2_PROPER_ANSWER) {

      $("div#question5_2-Success").show();
      $("div#question5_2-Help").hide();

      $("div#question6_2").show();
    } else {

      $("div#question5_2-Success").hide();
      $("div#question5_2-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок шестого вопроса (ВС).
 */
$(document).ready(function () {

  $("input#q6_2-btn").click(function () {

    let selectedAnswer = $( "#q6_2-edge-select option:selected" ).text();

    if (selectedAnswer === Q3_PROPER_ANSWER_1) {
      $("div#question6_2-Success").show();
      $("div#question6_2-Help").hide();

      $("div#question7_2").show();
    } else {
      $("div#question6_2-Success").hide();
      $("div#question6_2-Help").show();
    }

    scrollDown();
  });
});

/**
 * функция по нажатию на кнопку ок седьмого вопроса (ВС).
 */
$(document).ready(function () {

  $("input#q7_2-btn").click(function () {

    let selectedAnswerFirst = $( "#q7_2-edge-select-1 option:selected" ).text();
    let selectedAnswerSecond = $( "#q7_2-edge-select-2 option:selected" ).text();

    if ((selectedAnswerFirst === Q7_2_PROPER_ANSWER_FIRST && selectedAnswerSecond === Q7_2_PROPER_ANSWER_SECOND)
      || (selectedAnswerFirst === Q7_2_PROPER_ANSWER_SECOND && selectedAnswerSecond === Q7_2_PROPER_ANSWER_FIRST)
    ) {
      $("div#question7_2-Success").show();
      $("div#question7_2-Help").hide();

      $("div#question8_2").show();
    } else {
      $("div#question7_2-Success").hide();
      $("div#question7_2-Help").show();
    }

    scrollDown();
  });
});


/**
 * функция по нажатию на кнопку ок восьмого вопроса (ВС).
 */
$(document).ready(function () {

  $("input#q8_2-btn").click(function () {

    let selectedRadio = $('input[name="question8_2RadioGroup"]:checked').val();

    if (selectedRadio === Q8_2_PROPER_ANSWER) {

      $("div#result-Success").show();
      $("div#result-Help").hide();

    } else {

      $("div#result-Success").hide();
      $("div#result-Help").show();
    }

    scrollDown();
  });
});


/* --------Подключение всех функций страницы ----------*/