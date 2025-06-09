const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm13f51/",
            name: "ssm13f51",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm13f51/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "心理健康教育系统"
        } 
    }
}
export default base
