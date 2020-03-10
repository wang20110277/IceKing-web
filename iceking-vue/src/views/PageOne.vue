<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="userName"
                    label="用户名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="realName"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码"
                    width="300">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="300">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="big">查看</el-button>
                    <el-button type="text" size="big">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name:"PageOne",
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage){
                const _this=this;
                axios.get("http://localhost:16801/user/getAllUsers?page="+currentPage+"&size=5")
                    .then(function (response) {
                        _this.tableData=response.data.list
                        _this.pageSize=response.data.pageSize
                        _this.total=response.data.total
                    });
            }
        },
        data() {
            return {
                pageSize:0,
                total:0,
                tableData:[{}]
            }
        },
        created(){
            const _this=this;
            axios.get("http://localhost:16801/user/getAllUsers?page=1&size=5")
                .then(function (response) {
                    _this.tableData=response.data.list
                    _this.pageSize=response.data.pageSize
                    _this.total=response.data.total
                });
        }
    }
</script>