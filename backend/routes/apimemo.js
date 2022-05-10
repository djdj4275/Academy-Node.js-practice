var express = require('express');
var router = express.Router();

const memos = require('../memo.json'); // memo.json파일을 들고와서 memos로 선언

let count = 2;

/* GET을 통해 메모를 보내줌. */
router.get('/', function(req, res, next) { // 지금 주소는 /api/memo 가 아니라 / 인데 그것을 app.js에서 설정 #3
    console.log(memos);
    res.send(memos); // get 요청이 오면 memos를 보내줌 #
});

// post를 통해 메모값을 받아옴 (axios) -- 비동기방식 (부분 리렌더링)
router.post('/', function(req, res, next) {
    const memo = req.body.data;
    count++;
    const m = {
        id : count,
        title : memo.title,
        memo : memo.memo,
        writer : '익명'
    };
    memos.push(m);
    res.send("ok");
});

// post를 통해 메모값을 받아옴 - form으로 받아옴 -- 전체새로고침
router.post('/writeform', function(req, res, next) {
    const memo = req.body;
    count++;
    const m = {
        id : count,
        title : memo.title,
        memo : memo.memo,
        writer : '익명'
    };
    memos.push(m);
    res.redirect('/'); // 다른 주소의 화면 출력
});

// get을 통해 id값이 동일한 메모를 보내줌
router.get('/:id', function(req, res, next) { //앞의 /api/memo 가 생략된것이니 /api/memo/1 이런식으로 오면 여기서 값을 가져감 @3
    const id = req.params.id;
    // m은 memos의 필터의 결과가 참인 객체들을 배열로 가져옴
    // memo안의 id값과 들고온 파람id 값이 맞다면 memos안의 맞는 객체의 memo만 뱉음
    const m = memos.filter( (memo)=>{if(memo.id == id) {return true}} )
    res.send(m[0]); // 추려낸 m은 [{m}] 으로 되어 있기에 객체자체를 보내기위해 배열의 첫번째 값으로 보내주면됨
})

module.exports = router;