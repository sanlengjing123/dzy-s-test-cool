const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "用户列表", "tableName": "yonghu"}],
                "menu": "用户管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "医生信息列表", "tableName": "yishengxinxi"}],
                "menu": "医生信息管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "医生岗位职称分类列表", "tableName": "gangweifenlei"}],
                "menu": "医生岗位职称分类管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "科室信息列表", "tableName": "keshixinxi"}],
                "menu": "科室信息管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "友情链接列表", "tableName": "youqinglianjie"}],
                "menu": "友情链接管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "配置管理",
                    "tableName": "peizhiguanli"
                }, {"buttons": ["新增", "查看", "修改", "删除"], "menu": "新闻资讯列表", "tableName": "news"}], "menu": "系统管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "仪器信息列表", "tableName": "storeup"}],
                "menu": "仪器管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "管理员账户管理", "tableName": "users"}],
                "menu": "管理员账户管理"
            }, {
                "child": [{"buttons": ["查看", "修改", "删除"], "menu": "诊断进程列表", "tableName": "jinchengxinxi"}],
                "menu": "诊断进程管理"
            }, {
                "child": [{"buttons": ["新增","查看", "删除"], "menu": "求诊图片信息列表", "tableName": "yingxiangxinxi"}],
                "menu": "求诊图片信息管理"
            }, {
                "child": [{"buttons": ["查看", "修改", "删除"], "menu": "求诊者信息列表", "tableName": "huanzhexinxi"}],
                "menu": "求诊者信息管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除", "求诊"],
                    "menu": "求诊信息列表",
                    "tableName": "jinchengxinxi"
                }], "menu": "问诊信息模块"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "求诊者信息列表", "tableName": "huanzhexinxi"}],
                "menu": "求诊者信息模块"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "友情链接列表", "tableName": "youqinglianjie"}],
                "menu": "友情链接模块"
            }],
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "删除"],
                    "menu": "求诊历史查询",
                    "tableName": "yingxiangxinxi"
                }], "menu": "求诊进程查询"
            }, {"child": [{"buttons": ["查看","新增","删除","修改"], "menu": "求诊进程列表", "tableName": "jinchengxinxi"}], "menu": "审核进程查询"}],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "开始问诊"],
                    "menu": "医师信息列表",
                    "tableName": "yishhengxinxi"
                }], "menu": "医生信息模块"
            }, {
                "child": [{"buttons": [ "查看"], "menu": "科室信息列表", "tableName": "keshixinxi"}],
                "menu": "科室信息模块"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "友情链接列表", "tableName": "youqinglianjie"}],
                "menu": "友情链接模块"
            }],
            "roleName": "用户",
            "tableName": "yonghu"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": [ "查看", "修改", "删除"],
                    "menu": "问诊采集图片信息列表",
                    "tableName": "yingxiangxinxi"
                }], "menu": "问诊采集图片信息管理"
            }, {
                "child": [{"buttons": ["查看", "删除","审核"], "menu": " 未读求诊信息列表", "tableName": "jinchengxinxi"}],
                "menu": "未读求诊信息管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除", "诊断"],
                    "menu": "正在诊断信息列表",
                    "tableName": "jinchengxinxi"
                }], "menu": "正在诊断信息模块"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "求诊者信息列表", "tableName": "huanzhexinxi"}],
                "menu": "求诊者信息模块"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "友情链接列表", "tableName": "youqinglianjie"}],
                "menu": "友情链接模块"
            }],
            "roleName": "医生",
            "tableName": "yishengxinxi"
        }]
    }
}
export default menu;
