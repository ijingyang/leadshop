(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcf0e0f2"],{"951a":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"le-main"},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading||e.submitLoading,expression:"loading || submitLoading"}],ref:"ruleForm",staticClass:"le-card",attrs:{model:e.form,rules:e.rules,"label-width":"160px"}},[t("el-form-item",{attrs:{label:"存储位置"}},[t("el-radio-group",{on:{change:e.switchChange},model:{value:e.way,callback:function(s){e.way=s},expression:"way"}},[t("el-radio",{attrs:{label:0}},[e._v("本地服务器")]),t("el-radio",{attrs:{label:1}},[e._v("阿里云OSS")]),t("el-radio",{attrs:{label:2}},[e._v("腾讯云COS")]),t("el-radio",{attrs:{label:3}},[e._v("七牛云存储")])],1)],1),0===e.way?[t("el-form-item",{staticClass:"le-tip",attrs:{label:"",prop:""}},[e._v("选择存储到本地服务器，无需配置信息")])]:e._e(),1===e.way?[t("el-form-item",{key:"oss_bucket",attrs:{prop:"oss.bucket",label:" 存储空间名称(Bucket)"}},[t("el-input",{attrs:{placeholder:"请输入存储空间名称"},model:{value:e.form.oss.bucket,callback:function(s){e.$set(e.form.oss,"bucket",s)},expression:"form.oss.bucket"}})],1),t("el-form-item",{key:"oss_is_cname",attrs:{label:"使用自定义域名",prop:"is_cname"}},[t("el-switch",{attrs:{activeValue:!0,inactiveValue:!1},model:{value:e.form.oss.is_cname,callback:function(s){e.$set(e.form.oss,"is_cname",s)},expression:"form.oss.is_cname"}})],1),t("el-form-item",{key:"oss_domain",attrs:{prop:"oss.domain",label:"域名(Endpoint)"}},[t("el-input",{attrs:{placeholder:"请输入域名"},model:{value:e.form.oss.domain,callback:function(s){e.$set(e.form.oss,"domain",s)},expression:"form.oss.domain"}}),t("div",{staticClass:"le-prompt-text"},[e._v(" 示例: http://oss-xx-xxx-1.aliyuncs.com 或 http://mydomain.com ")])],1),t("el-form-item",{key:"oss_access_key",attrs:{label:"AccessKey ID",prop:"oss.access_key"}},[t("el-input",{attrs:{placeholder:"请输入AccessKey ID"},model:{value:e.form.oss.access_key,callback:function(s){e.$set(e.form.oss,"access_key",s)},expression:"form.oss.access_key"}})],1),t("el-form-item",{key:"oss_secret_key",attrs:{label:"AccessKey Secret",prop:"oss.secret_key"}},[t("el-input",{attrs:{placeholder:"请输入AccessKey Secret"},model:{value:e.form.oss.secret_key,callback:function(s){e.$set(e.form.oss,"secret_key",s)},expression:"form.oss.secret_key"}})],1)]:e._e(),2===e.way?[t("el-form-item",{key:"cos_bucket",attrs:{prop:"cos.bucket",label:"存储空间名称(Bucket)"}},[t("el-input",{attrs:{placeholder:"请输入存储空间名称"},model:{value:e.form.cos.bucket,callback:function(s){e.$set(e.form.cos,"bucket",s)},expression:"form.cos.bucket"}})],1),t("el-form-item",{key:"cos_region",attrs:{prop:"cos.region",label:"所属地域"}},[t("el-input",{attrs:{placeholder:"请输入所属地域"},model:{value:e.form.cos.region,callback:function(s){e.$set(e.form.cos,"region",s)},expression:"form.cos.region"}}),t("div",{staticClass:"le-prompt-text"},[e._v(" 示例: ap-shanghai 或 ap-shenzhen 或 ap-xxxxxx ")])],1),t("el-form-item",{key:"cos_domain",attrs:{label:"自定义域名",prop:""}},[t("el-input",{attrs:{placeholder:"请输入域名"},model:{value:e.form.cos.domain,callback:function(s){e.$set(e.form.cos,"domain",s)},expression:"form.cos.domain"}}),t("div",{staticClass:"le-prompt-text"},[e._v("示例: http://mydomain.com")])],1),t("el-form-item",{key:"cos_secret_id",attrs:{label:"Secretld",prop:"cos.secret_id"}},[t("el-input",{attrs:{placeholder:"请输入Secretld"},model:{value:e.form.cos.secret_id,callback:function(s){e.$set(e.form.cos,"secret_id",s)},expression:"form.cos.secret_id"}})],1),t("el-form-item",{attrs:{label:"SecretKey",prop:"cos.secret_key",Key:"cos_secret_key"}},[t("el-input",{attrs:{placeholder:"请输入SecretKey"},model:{value:e.form.cos.secret_key,callback:function(s){e.$set(e.form.cos,"secret_key",s)},expression:"form.cos.secret_key"}})],1)]:e._e(),3===e.way?[t("el-form-item",{key:"qinin_bucket",attrs:{prop:"qiniu.bucket",label:" 存储空间名称(Bucket)"}},[t("el-input",{attrs:{placeholder:"请输入存储空间名称"},model:{value:e.form.qiniu.bucket,callback:function(s){e.$set(e.form.qiniu,"bucket",s)},expression:"form.qiniu.bucket"}})],1),t("el-form-item",{key:"qinin_domain",attrs:{prop:"qiniu.domain",label:"绑定域名"}},[t("el-input",{attrs:{placeholder:"请输入域名"},model:{value:e.form.qiniu.domain,callback:function(s){e.$set(e.form.qiniu,"domain",s)},expression:"form.qiniu.domain"}}),t("div",{staticClass:"le-prompt-text"},[e._v(" 示例: http://mydomain.com 或 http://xxxxxx.bkt.clouddn.com ")])],1),t("el-form-item",{key:"qiniu_access_key",attrs:{label:"AccessKey(AK)",prop:"qiniu.access_key"}},[t("el-input",{attrs:{placeholder:"请输入AccessKey(AK)"},model:{value:e.form.qiniu.access_key,callback:function(s){e.$set(e.form.qiniu,"access_key",s)},expression:"form.qiniu.access_key"}})],1),t("el-form-item",{key:"qiniu_secret_key",attrs:{label:"SecretKey(SK)",prop:"qiniu.secret_key"}},[t("el-input",{attrs:{placeholder:"请输入SecretKey(SK)"},model:{value:e.form.qiniu.secret_key,callback:function(s){e.$set(e.form.qiniu,"secret_key",s)},expression:"form.qiniu.secret_key"}})],1)]:e._e()],2),t("div",{staticClass:"le-cardpin"},[t("el-button",{attrs:{type:"primary",disabled:e.loading,loading:e.submitLoading},on:{click:e.submit}},[e._v(" 保存 ")])],1)],1)},o=[],i=(t("841c"),t("ac1f"),{name:"cloud-storage",data:function(){return{loading:!1,submitLoading:!1,way:0,form:{local:{},oss:{bucket:"",domain:"",is_cname:!0,access_key:"",secret_key:""},cos:{bucket:"",region:"",secret_id:"",secret_key:"",domain:""},qiniu:{bucket:"",domain:"",access_key:"",secret_key:""}},rules:{"oss.bucket":[{required:!0,message:"请输入存储空间名称",trigger:"blur"}],"qiniu.bucket":[{required:!0,message:"请输入存储空间名称",trigger:"blur"}],"cos.bucket":[{required:!0,message:"请输入存储空间名称",trigger:"blur"}],"oss.domain":[{required:!0,message:"请绑定域名",trigger:"blur"}],"qiniu.domain":[{required:!0,message:"请输入域名",trigger:"blur"}],"oss.access_key":[{required:!0,message:"请输入access_key",trigger:"blur"}],"oss.secret_key":[{required:!0,message:"请输入secret_key",trigger:"blur"}],"cos.region":[{required:!0,message:"请输入所属地域",trigger:"blur"}],"cos.secret_id":[{required:!0,message:"请输入Secretld",trigger:"blur"}],"cos.secret_key":[{required:!0,message:"请输入secret_key",trigger:"blur"}],"qiniu.secret_key":[{required:!0,message:"请输入SecretKey(SK)",trigger:"blur"}],"qiniu.access_key":[{required:!0,message:"请输入AccessKey(AK)",trigger:"blur"}]}}},methods:{switchChange:function(){this.$refs.ruleForm.resetFields()},submit:function(){var e=this;this.$refs["ruleForm"].validate((function(s){if(!s)return!1;e.submitLoading=!0,e.$heshop.setting("post",{keyword:"storage_setting",content:{way:e.way,config:e.form}}).then((function(){e.submitLoading=!1,e.$message.success("保存成功")})).catch((function(s){e.submitLoading=!1,e.$message.error(s.data.message)}))}))},getSetting:function(){var e=this;this.$heshop.search("post",{include:"setting"},{keyword:"storage_setting"}).then((function(s){e.loading=!1,e.form=s.content.config,e.way=s.content.way})).catch((function(s){e.loading=!1,e.$message.error(s.data.message)}))}},mounted:function(){this.getSetting()}}),a=i,c=(t("e139"),t("2877")),l=Object(c["a"])(a,r,o,!1,null,"50200174",null);s["default"]=l.exports},e139:function(e,s,t){"use strict";t("f3e4")},f3e4:function(e,s,t){}}]);