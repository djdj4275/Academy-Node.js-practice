<template>
    <div>
        <table>
            <tr>
                <td>번호</td>
                <td>제목</td>
            </tr>
            <tr v-for="(memo,i) in memo" :key=i>
                <td>{{memo.id}}</td>
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return ({
            memo : []
        })
    },
    created() { // 생성되면 바로 한번 실행
        // 서버로 접근해서 데이터를 가져올 함수
        // axios를 사용해 비동기로 값을 가져옴 (get) (axios설치하고 main.js에서 불러놓고 시작)
        this.$http.get('/api/memo')  // 이 주소는 http://localhost:3000/api/memo 뜻함 #1
        // 임의의 서버주소를 설정해주는데 보통 api를 붙여서 작성
        // 이 주소의 위치는 백엔드의 route의 apimemo.js 에 존재하는데 그 값을 get으로 받아옴
        .then((response)=>{
            // 서버에서 어떤값이 들어왔는지 알기위해서 log로 확인하고
            // 현재 컴포넌트 data의 memo에 들어온 값을 넣어줌
            console.log(response.data);
            this.memo = response.data;
        })
    }
}
</script>
