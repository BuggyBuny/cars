// Подключение основного файла стилей
import "../scss/style.scss";

// Плагины ============================================================================================================================================================================================================================================================================================================

/* Динамический адаптив */
import "./libs/dynamic_adapt.js";

// Основные модули ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();
/*
Модуль работы со спойлерами
Документация:
Сниппет (HTML): spollers
*/
flsFunctions.spollers();
/*
Попапы
Документация по работе в шаблоне:
Сниппет (HTML): pl
*/
// Для включения ??? (подсказок в консоли) передать true * /
flsFunctions.initPopups(false);

/* Модуль работы с select. Для включения ??? (подсказок в консоли) передать true */
flsForms.formSelect(false);

// Модуль работы с подсказками (tippy) ====================================================================================================================================================================================================================================================================================
/*
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
import "./files/tippy.js";

// Прочее ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================