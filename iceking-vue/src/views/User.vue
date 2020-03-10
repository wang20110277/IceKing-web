<template>
    <div id="User">
        <table>
            <tr>
                <td>id</td>
                <td>用户名</td>
                <td>姓名</td>
                <td>密码</td>
            </tr>
            <tr>
                <td>{{user.id}}</td>
                <td>{{user.userName}}</td>
                <td>{{user.realName}}</td>
                <td>{{user.password}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "User",
        data () {
            return{
                id:1,
                user:{}
            }
        },
        created(){
            const _this=this;
            axios.get("http://localhost:16801/user/getLoginUser?id="+_this.id)
            .then(function (response) {
                _this.user=response.data
            })
            .catch(function (response) {

            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>