
var projectName = '心理健康教育系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '咨询师',
	url: './pages/zixunshi/list.html'
}, 
{
	name: '文章信息',
	url: './pages/wenzhangxinxi/list.html'
}, 
{
	name: '测试题目',
	url: './pages/ceshitimu/list.html'
}, 

{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/ssm13f51/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"咨询师","menuJump":"列表","tableName":"zixunshi"}],"menu":"咨询师管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"文章信息","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"测试题目","menuJump":"列表","tableName":"ceshitimu"}],"menu":"测试题目管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"测试信息","menuJump":"列表","tableName":"ceshixinxi"}],"menu":"测试信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"测试结果","menuJump":"列表","tableName":"ceshijieguo"}],"menu":"测试结果管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"咨询师列表","menuJump":"列表","tableName":"zixunshi"}],"menu":"咨询师模块"},{"child":[{"buttons":["查看"],"menu":"文章信息列表","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息模块"},{"child":[{"buttons":["查看","测试"],"menu":"测试题目列表","menuJump":"列表","tableName":"ceshitimu"}],"menu":"测试题目模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"测试信息","menuJump":"列表","tableName":"ceshixinxi"}],"menu":"测试信息管理"},{"child":[{"buttons":["查看"],"menu":"测试结果","menuJump":"列表","tableName":"ceshijieguo"}],"menu":"测试结果管理"},{"child":[{"buttons":["查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"咨询师列表","menuJump":"列表","tableName":"zixunshi"}],"menu":"咨询师模块"},{"child":[{"buttons":["查看"],"menu":"文章信息列表","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息模块"},{"child":[{"buttons":["查看","测试"],"menu":"测试题目列表","menuJump":"列表","tableName":"ceshitimu"}],"menu":"测试题目模块"}],"roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"文章信息","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"测试题目","menuJump":"列表","tableName":"ceshitimu"}],"menu":"测试题目管理"},{"child":[{"buttons":["查看","修改","删除","测试结果"],"menu":"测试信息","menuJump":"列表","tableName":"ceshixinxi"}],"menu":"测试信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"测试结果","menuJump":"列表","tableName":"ceshijieguo"}],"menu":"测试结果管理"},{"child":[{"buttons":["查看","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"咨询师列表","menuJump":"列表","tableName":"zixunshi"}],"menu":"咨询师模块"},{"child":[{"buttons":["查看"],"menu":"文章信息列表","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息模块"},{"child":[{"buttons":["查看","测试"],"menu":"测试题目列表","menuJump":"列表","tableName":"ceshitimu"}],"menu":"测试题目模块"}],"roleName":"咨询师","tableName":"zixunshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
