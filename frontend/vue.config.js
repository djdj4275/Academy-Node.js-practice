const path = require('path') //위치지정 하기위해 path를 들고옴

// 브라우저에서는 3000포트에서 실행되는 서버의 자원을 받게되지만
// 브라우저는 실제로는 http://localhost:8080/api 로 요청을 보내는데
// 이때 도메인,포트,프로토콜이 다른곳으로 요청을 보내지 못하도록 브라우저가 요청을 막습니다 (CORS정책)
// 이것의 해결을 위해 프록시서버(요청을 대리로 해주는 서버)를 사용하여
// 브라우저의 8080요청을 서버로의 3000 요청으로 바꿔준다.


module.exports = { // 모듈을 내보낼 위치 지정 (개발 서버 설정)
    outputDir:path.resolve(__dirname,"../backend/public"), // backend파일의 public에 빌드하기위함
    devServer : { // 프록시 설정
        proxyTable : {
            '/api' : { //api라는 주소로 들어왔을때 전부 서버(target)로 연결
                target : "http://localhost:3000/api", // 프록시 요청을 보낼 서버의 주소
                changeOrigin : true, // CORS에러를 막기위한 옵션으로 출처를 target URI로 바꾼다는 말 (같은 도메인으로 인식하게끔)
                pathRewrite : {
                    "^/api" : "" // 주소 /api로 시작하는 문자를 공백 ""으로 변경
                },
            },
        },
    },
}