const mealService = document.querySelector(".meal-service");

const API_KEY = "954dac30b088454d9a95700f044ce620",
    OFFICE_CODE = "J10",
    SCHOOL_CODE = "7741022";

// const date = new Date(),
//     year = date.getFullYear(),
//     month = date.getMonth()+1,
//     day = date.getDate(),
//     today = `${year}${month < 10 ? `0${month}` : `${month}`}${day < 10 ? `0${day}` : `${day}`}`;

const today = 20210615;

const getMealTable = (API_KEY, OFFICE_CODE, SCHOOL_CODE, date) => {
    fetch(
        `https://open.neis.go.kr/hub/mealServiceDietInfo`+
        `?KEY=${API_KEY}`+
        `&Type=json`+
        `&pIndex=1`+
        `&pSize=100`+
        `&ATPT_OFCDC_SC_CODE=${OFFICE_CODE}`+
        `&SD_SCHUL_CODE=${SCHOOL_CODE}`+
        `&MLSV_YMD=${date}`
    ).then(response => response.json())
    .then(json => {
        console.log(today);
        const result = json.mealServiceDietInfo[1].row[0].DDISH_NM;
        console.log(result);
        mealService.innerHTML = JSON.stringify(result);
    });
};

getMealTable(API_KEY, OFFICE_CODE, SCHOOL_CODE, today);