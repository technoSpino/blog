(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{EEJ8:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("Wbzz"),r=a("ma3e");t.a=function(e){var t=e.pageContext,a=t.previousPagePath,n=t.nextPagePath;return l.a.createElement("div",null,a&&l.a.createElement(o.Link,{style:{float:"left",paddingBottom:"100px",paddingTop:"30px"},to:a},l.a.createElement(r.a,null)," Prev"," "),n&&l.a.createElement(o.Link,{style:{float:"right",paddingBottom:"100px",paddingTop:"30px"},to:n},"Next ",l.a.createElement(r.b,null)))}},JpBF:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("Wbzz"),r=a("9eSz"),c=a.n(r),s=a("qWYD"),m=a.n(s),u=a("owIM");t.a=function(e){var t=e.title,a=e.author,n=e.date,r=e.body,s=e.slug,i=e.tags,p=e.fluid;return l.a.createElement("div",{className:m.a.card},l.a.createElement("div",{key:t,className:m.a.post},l.a.createElement("div",{className:m.a.cover},l.a.createElement(o.Link,{to:s,key:s},l.a.createElement(c.a,{fluid:p,title:r,alt:t}))),l.a.createElement(o.Link,{to:s,key:s},l.a.createElement("div",{className:m.a.content},l.a.createElement("h2",null,t),l.a.createElement("label",null,"by: ",a,", "),n?l.a.createElement("label",null,n):null,l.a.createElement("p",null,r),l.a.createElement("ul",{className:m.a.postTags},i.map((function(e){return l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/"+Object(u.slugify)(e)},l.a.createElement("div",{className:m.a.badge},e)))})))))))}},Uvt8:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=a("L12J"),r=a("EEJ8"),c=a("JpBF");t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges;console.log(n);var s=a.tag;return l.a.createElement(o.a,null,l.a.createElement("h1",{style:{textAlign:"center",marginTop:"80px"}},"Topic: ",l.a.createElement("span",{style:{color:"#61afef"}},s)),n.map((function(e){var t=e.node;return l.a.createElement(c.a,{title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date,body:t.excerpt,slug:t.fields.slug,tags:t.frontmatter.tags,fluid:t.frontmatter.image.childImageSharp.fluid})})),l.a.createElement(r.a,{pageContext:a}))}},owIM:function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},qWYD:function(e,t,a){e.exports={container:"post-module--container--1GqoF",post:"post-module--post--3YYTK",cover:"post-module--cover--1sFCY",content:"post-module--content--2AklI",badge:"post-module--badge--3Xj_m",card:"post-module--card--2tdNb",postTags:"post-module--postTags--1TEhm",space:"post-module--space--1AOZh"}}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-3482834b5233d19948c1.js.map