<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu router>
                    <el-submenu v-for="(item1,index1) in $router.options.routes" :index="index1+''" :key="index1">
                        <template slot="title"><i class="el-icon-message"></i>{{item1.name}}</template>
                        <el-menu-item v-for="(item2,index2) in item1.children" :index="item2.path" :key="index2"
                                      :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>