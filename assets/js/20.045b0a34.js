(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{525:function(t,e,n){"use strict";n.r(e);var r=n(6),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"document-write-和innerhtml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document-write-和innerhtml"}},[t._v("#")]),t._v(" document.write()和innerHtml")]),t._v(" "),n("h3",{attrs:{id:"document-write-和innerhtml有不一样"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document-write-和innerhtml有不一样"}},[t._v("#")]),t._v(" document.write()和innerHtml有不一样")]),t._v(" "),n("p",[t._v("document.write()会重绘整个页面，而innerHtml会重绘一部分页面。document.write会在生成后清空文档中原来的数据。")]),t._v(" "),n("h4",{attrs:{id:"document-write插入js标签会覆盖页面又两种情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document-write插入js标签会覆盖页面又两种情况"}},[t._v("#")]),t._v(" document.write插入js标签会覆盖页面又两种情况：")]),t._v(" "),n("p",[t._v("通过onclick() 点击事件触发执行document.write()，会使document.write()覆盖原来的页面。\n在window.onload里面执行document.write()，也会将原来的页面覆盖。\n总的来说就是 在页面渲染结束后（即文档加载后）使用document.write。会覆盖整个文档。")]),t._v(" "),n("p",[t._v("说明：\nwindow.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。\n点击事件也是页面渲染完毕后，鼠标点击才能执行。")]),t._v(" "),n("p",[t._v("w3school的官方说明：您只能在 HTML 输出中使用 document.write。如果您在文档加载后使用该方法，会覆盖整个文档。")]),t._v(" "),n("p",[t._v("避免方法：")]),t._v(" "),n("p",[t._v("在onload之前使用document.wriet()方法；\n避免在onclick()事件中使用，可用console 或 innerHTML 代替。")]),t._v(" "),n("h3",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[t._v("https://blog.csdn.net/For_GG/article/details/78215043")]),t._v(" "),n("p",[t._v("https://blog.csdn.net/weixin_30262255/article/details/98505835")])])}),[],!1,null,null,null);e.default=i.exports}}]);