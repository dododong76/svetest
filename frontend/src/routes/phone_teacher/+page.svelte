<script>
let datas = [{
        '이름': '홍길동',
        '학생전화': '010-1111-1111',
        '엄마전화': '010-1111-2222'
    },
    {
        '이름': '김동은',
        '학생전화': '010-2222-1111',
        '엄마전화': '010-2222-2222'
    },
    {
        '이름': '김동은',
        '학생전화': '010-2222-1111',
        '엄마전화': '010-2222-2222'
    },
    {
        '이름': '김동은',
        '학생전화': '010-2222-1111',
        '엄마전화': '010-2222-2222'
    },
    {
        '이름': '김동은',
        '학생전화': '010-2222-1111',
        '엄마전화': '010-2222-2222'
    },
    {
        '이름': '김동은',
        '학생전화': '010-2222-1111',
        '엄마전화': '010-2222-2222'
    },
    {
        '이름': '김동은',
        '학생전화': '010-2222-1111',
        '엄마전화': '010-2222-2222'
    },

]
</script>

<h1>교사용 전화번호</h1>

{#each datas as data}
<div class='phone'>
    <div> {data.이름}</div>
    <div>{data.학생전화}</div>
    <div>{data.엄마전화}</div>
    <div><i class="fa-solid fa-message"></i></div>
    <div><i class="fa-solid fa-phone-volume"></i></div>
</div>
{/each}

<style>
.phone {
    font-size: 0.9em;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
    margin: 5px;
    padding: 6px;
    background-color: darkcyan;
    border-radius: 20px;
    text-align: center;
}
</style>
