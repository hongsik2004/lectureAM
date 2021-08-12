const fetch = require('node-fetch');
const fs = require('fs').promises;
const cheerio = require('cheerio');

const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";
const filename = "./data/corona.html";

fetch(url)
    .then(function(data) {
        return data.text();
    })
    .then(function(body) {
        let $ = cheerio.load(body); //html을 읽어서 제이쿼리 형식으로 쓸 수 있게 변환해줘
        let value = $(".inner_value").eq(0).text();
        let value2 = $(".inner_value").eq(1).text();
        let value3 = $(".inner_value").eq(2).text();
        let car_value = $(".ca_value").eq(0).text();
        let car_value2 = $(".ca_value").eq(1).text();
        let car_value3 = $(".ca_value").eq(2).text();
        let car_value4 = $(".ca_value").eq(3).text();
        let car_value5 = $(".ca_value").eq(4).text();
        let car_value6 = $(".ca_value").eq(5).text();


        let recordData = `
         전일대비 현황
         소계 : ${value}, 국내발생 :${value2},  해외유입 :${value3}
         격리해제
         누적 :${car_value}, 전일대비 :${car_value2}
         격리중
         누적 :${car_value3}, 전일대비 :${car_value4}
         사망
         누적 :${car_value5}, 전일대비 :${car_value6}
         `;

        return fs.writeFile(filename, recordData);
    })
    .then(function() {
        console.log("기록 완료");
    })
    .catch(function(err) {
        console.log(err);
    });
//   가져온 데이터를 data/corona.html 
// 기록된 후, 기록완료라는 메시지도 나오게 정정

// npm install node-fetch
// npm install cheerio