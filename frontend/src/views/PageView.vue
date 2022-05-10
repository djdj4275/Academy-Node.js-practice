<template>
    <div>
        <h1>{{memo.title}}</h1>
        <p>{{memo.memo}}</p>
    </div>
</template>

<script>
export default {
    created() {
        // /api/memo/파람 id값을 넣어서 전달
        // memo.id로 구분해서 그 객체만 들고올수있다
        // id 값은 가져오는 주소의 파람 id 값 
        this.$http.get(`/api/memo/${this.$route.params.id}`) // pageview로 넘어오면 /api/memo/1 이런 백엔드 주소의 값을 찾게됨 @1
        .then( (response)=>{
            this.memo = response.data; // 위의 주소에 해당되는 페이지의 데이터를 받아옴
        })
    },
    data () {
        return ({
            memo : {}
        })
    }
}
</script>