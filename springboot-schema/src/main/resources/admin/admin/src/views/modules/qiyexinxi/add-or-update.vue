<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
      <el-row>
                  <el-col :span="12">
        <el-form-item  v-if="type!='info'"  label="医生姓名" prop="qiyebianhao">
          <el-input v-model="ruleForm.qiyebianhao" 
              placeholder="医生姓名" clearable></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.qiyebianhao" label="医生姓名" prop="qiyebianhao">
              <el-input v-model="ruleForm.qiyebianhao" 
                placeholder="医生姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                        <el-col :span="12">
        <el-form-item  v-if="type!='info'"  label="密码" prop="mima">
          <el-input v-model="ruleForm.mima" 
              placeholder="密码" clearable></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.mima" label="密码" prop="mima">
              <el-input v-model="ruleForm.mima" 
                placeholder="密码" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                        <el-col :span="12">
        <el-form-item  v-if="type!='info'"  label="所属科室" prop="qiyemingcheng">
          <el-input v-model="ruleForm.qiyemingcheng" 
              placeholder="所属科室" clearable></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.qiyemingcheng" label="所属科室" prop="qiyemingcheng">
              <el-input v-model="ruleForm.qiyemingcheng" 
                placeholder="所属科室" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                        <el-col :span="12">
        <el-form-item  v-if="type!='info'"  label="客服对接负责人" prop="fuzeren">
          <el-input v-model="ruleForm.fuzeren" 
              placeholder="客服对接负责人" clearable></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.fuzeren" label="客服对接负责人" prop="fuzeren">
              <el-input v-model="ruleForm.fuzeren" 
                placeholder="客服对接负责人" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                        <el-col :span="12">
        <el-form-item  v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua" 
              placeholder="联系电话" clearable></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.lianxidianhua" label="联系电话" prop="lianxidianhua">
              <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                        <el-col :span="12">
        <el-form-item  v-if="type!='info'"  label="医生邮箱" prop="qiyeyouxiang">
          <el-input v-model="ruleForm.qiyeyouxiang" 
              placeholder="医生邮箱" clearable></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.qiyeyouxiang" label="医生邮箱" prop="qiyeyouxiang">
              <el-input v-model="ruleForm.qiyeyouxiang" 
                placeholder="医生邮箱" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    </el-row>
                                                                                                            <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'" label="医生介绍" prop="qiyejieshao">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="医生介绍"
                  v-model="ruleForm.qiyejieshao">
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.qiyejieshao" label="医生介绍" prop="qiyejieshao">
                    <span>{{ruleForm.qiyejieshao}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
                                                                                                                            <el-form-item>
                <el-button v-if="type!='info'" type="primary" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
      id: '',
      type: '',
      ruleForm: {
                        qiyebianhao: '',
                                mima: '',
                                qiyemingcheng: '',
                                fuzeren: '',
                                lianxidianhua: '',
                                qiyeyouxiang: '',
                                qiyejieshao: '',
                      },
                                                                                                              rules: {
                  qiyebianhao: [
                                                                                              ],
                  mima: [
                                                                                              ],
                  qiyemingcheng: [
                                                                                              ],
                  fuzeren: [
                                                                                              ],
                  lianxidianhua: [
                                                                { validator: validatePhone, trigger: 'blur' },
                                                          ],
                  qiyeyouxiang: [
                                                                            { validator: validateEmail, trigger: 'blur' },
                                              ],
                  qiyejieshao: [
                                                                                              ],
              }
    };
  },
  props: ["parent"],
  computed: {
                                                                                          },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
                    if(o=='qiyebianhao'){
            this.ruleForm.qiyebianhao = obj[o];
            continue;
          }
                    if(o=='mima'){
            this.ruleForm.mima = obj[o];
            continue;
          }
                    if(o=='qiyemingcheng'){
            this.ruleForm.qiyemingcheng = obj[o];
            continue;
          }
                    if(o=='fuzeren'){
            this.ruleForm.fuzeren = obj[o];
            continue;
          }
                    if(o=='lianxidianhua'){
            this.ruleForm.lianxidianhua = obj[o];
            continue;
          }
                    if(o=='qiyeyouxiang'){
            this.ruleForm.qiyeyouxiang = obj[o];
            continue;
          }
                    if(o=='qiyejieshao'){
            this.ruleForm.qiyejieshao = obj[o];
            continue;
          }
                  }
                                                                                                                              }
                                                                                                                                                            },
                                                                // 多级联动参数
                                                                                  info(id) {
      this.$http({
        url: `qiyexinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.ruleForm = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
        // 提交
    onSubmit() {
                                                                                                                                                                                          this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `qiyexinxi/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.qiyexinxiCrossAddOrUpdateFlag = false;
                  this.parent.search();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.qiyexinxiCrossAddOrUpdateFlag = false;
    },
                                                                                          }
};
</script>
<style lang="scss" scoped>
.editor{
  height: 500px;
}
</style>
