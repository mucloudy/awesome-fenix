(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(t,e,i){},201:function(t,e,i){"use strict";var a=i(168);i.n(a).a},230:function(t,e,i){"use strict";i(31),i(48);var a=i(177),s=i.n(a),n=i(159),d={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},pageWords:function(){return this.$page.readingTime&&this.$page.readingTime.words?this.$page.readingTime.words:0},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=s()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,i=e.repo,a=e.docsDir,n=void 0===a?"":a,d=e.docsBranch,r=void 0===d?"master":d,o=e.docsRepo,p=void 0===o?i:o;return t&&p&&this.$page.relativePath?this.createEditLink(i,p,n,r,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,i,a,s){return/bitbucket.org/.test(t)?(n.i.test(e)?e:t).replace(n.a,"")+"/src"+"/".concat(a,"/")+(i?i.replace(n.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default"):(n.i.test(e)?e:"https://github.com/".concat(e)).replace(n.a,"")+"/edit"+"/".concat(a,"/")+(i?i.replace(n.a,"")+"/":"")+s}}},r=(i(201),i(11)),o=Object(r.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"page-edit"},[t.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?i("div",{staticClass:"last-updated"},[t.pageWords>0?i("span",{staticClass:"prefix"},[t._v("总字数:")]):t._e(),t._v(" "),t.pageWords>0?i("span",{staticClass:"words"},[t._v(t._s(t.pageWords))]):t._e(),t._v(" "),t.pageWords>0?i("span",{staticClass:"prefix"},[t._v("字　")]):t._e(),t._v(" "),i("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=o.exports}}]);