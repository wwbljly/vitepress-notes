import{_ as s,o as n,c as a,a as l}from"./app.04fdf0c1.js";const g=JSON.parse('{"title":"\u{1F4DD}Git","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4"}],"relativePath":"notes/Git.md"}'),p={name:"notes/Git.md"},e=l(`<div style="width:100%;height:50px;"></div><h1 id="\u{1F4DD}git" tabindex="-1">\u{1F4DD}Git <a class="header-anchor" href="#\u{1F4DD}git" aria-hidden="true">#</a></h1><div style="width:100%;height:30px;"></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u514B\u9686</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone XXXX</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u67E5\u770B\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog--\u8FD9\u4E2A\u6BD4\u8F83\u8BE6\u7EC6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4FEE\u6539\u5BF9\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6DFB\u52A0\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git add ./xxx.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u63D0\u4EA4\u6587\u4EF6\u81F3\u672C\u5730\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &quot;\u63D0\u4EA4\u6CE8\u91CA/\u5907\u6CE8&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5207\u6362\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">1.\u5207\u6362\u5230\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684\u7248\u672C(\u64A4\u56DE\u4E00\u6B21\u6216\u591A\u6B21)</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD^/HEAD^^</span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u5207\u6362\u5230\u56FA\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard XXXXXX//XXXXXX\u4EE3\u8868\u63D0\u4EA4\u7248\u672C\u7684\u7F16\u53F7\u7684\u524D\u516D\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u64A4\u9500\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">1.\u672A\u6DFB\u52A0\u81F3\u6682\u5B58\u533A(\u4E3Acommit)</span></span>
<span class="line"><span style="color:#A6ACCD;">git restore &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u5DF2\u6DFB\u52A0\u81F3\u6682\u5B58\u533A(\u6267\u884C\u4E24\u6B21)</span></span>
<span class="line"><span style="color:#A6ACCD;">git restore --staged &lt;file&gt;   =&gt;  git restore &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5220\u9664\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5220\u9664\u6240\u6709\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm \u2013r * </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">1.\u8FDE\u63A5\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin &lt;url&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u5C06\u672C\u5730\u4EE3\u7801\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git push/git push -u master(master\u4EE3\u8868\u4E3B\u5206\u652F)/git push origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u66F4\u65B0\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull --rebase origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5206\u652F\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">1.\u521B\u5EFA\u5E76\u5207\u6362\u81F3dev\u5206\u652F/\u521B\u5EFA\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b dev/git branch dev</span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u5207\u6362\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout dev</span></span>
<span class="line"><span style="color:#A6ACCD;">3.\u5408\u5E76\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge dev</span></span>
<span class="line"><span style="color:#A6ACCD;">4.\u5220\u9664\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git bisect \u662F\u67E5\u627E\u54EA\u4E00\u6B21\u4EE3\u7801\u63D0\u4EA4\u5F15\u5165\u4E86\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase \u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash \u6682\u5B58\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),t=[e];function o(c,i,A,C,r,D){return n(),a("div",null,t)}var d=s(p,[["render",o]]);export{g as __pageData,d as default};
