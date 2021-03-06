(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{367:function(s,t,e){"use strict";e.r(t);var r=e(40),a=Object(r.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"linux-下scp命令详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-下scp命令详解"}},[s._v("#")]),s._v(" linux 下scp命令详解")]),s._v(" "),e("p",[s._v("linux scp 命令用于 linux之间复制文件和目录。")]),s._v(" "),e("p",[e("strong",[s._v("语法")]),s._v(" "),e("code",[s._v("scp [可选参数] file_source file_target")])]),s._v(" "),e("p",[e("strong",[s._v("参数说明")])]),s._v(" "),e("ul",[e("li",[s._v("-1： 强制scp命令使用协议ssh1")]),s._v(" "),e("li",[s._v("-2： 强制scp命令使用协议ssh2")]),s._v(" "),e("li",[s._v("-4： 强制scp命令只使用IPv4寻址")]),s._v(" "),e("li",[s._v("-6： 强制scp命令只使用IPv6寻址")]),s._v(" "),e("li",[s._v("-B： 使用批处理模式（传输过程中不询问传输口令或短语）")]),s._v(" "),e("li",[s._v("-C： 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）")]),s._v(" "),e("li",[s._v("-p：保留原文件的修改时间，访问时间和访问权限。")]),s._v(" "),e("li",[s._v("-q： 不显示传输进度条。")]),s._v(" "),e("li",[s._v("-r： 递归复制整个目录。")]),s._v(" "),e("li",[s._v("-v：详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。")]),s._v(" "),e("li",[s._v("-c cipher： 以cipher将数据传输进行加密，这个选项将直接传递给ssh。")]),s._v(" "),e("li",[s._v("-F ssh_config： 指定一个替代的ssh配置文件，此参数直接传递给ssh。")]),s._v(" "),e("li",[s._v("-i identity_file： 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。")]),s._v(" "),e("li",[s._v("-l limit： 限定用户所能使用的带宽，以Kbit/s为单位。")]),s._v(" "),e("li",[s._v("-o ssh_option： 如果习惯于使用ssh_config(5)中的参数传递方式，")]),s._v(" "),e("li",[s._v("-P port：注意是大写的P, port是指定数据传输用到的端口号")]),s._v(" "),e("li",[s._v("-S program： 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。")])]),s._v(" "),e("p",[e("strong",[s._v("实例说明")]),s._v("\n1、从本地复制到远程")]),s._v(" "),e("ul",[e("li",[s._v("命令格式")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("以下是复制文件\nscp local_file remote_username@remote_ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("remote_folder \n或者 \nscp local_file remote_username@remote_ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("remote_file \n或者 \nscp local_file remote_ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("remote_folder \n或者 \nscp local_file remote_ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("remote_file \n")])])]),e("ul",[e("li",[s._v("第1,2个指定了用户名，命令执行后需要再输入密码，第1个仅指定了远程的目录，文件名字不变，第2个指定了文件名；")]),s._v(" "),e("li",[s._v("第3,4个没有指定用户名，命令执行后需要输入用户名和密码，第3个仅指定了远程的目录，文件名字不变，第4个指定了文件名；")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("以下是复制文件夹\nscp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r local_folder remote_username@remote_ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("remote_folder \n或者 \nscp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r local_folder remote_ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("remote_folder \n")])])]),e("ul",[e("li",[s._v("第1个指定了用户名，命令执行后需要再输入密码；")]),s._v(" "),e("li",[s._v("第2个没有指定用户名，命令执行后需要输入用户名和密码；")])]),s._v(" "),e("p",[e("strong",[s._v("说明")]),e("br"),s._v("\n1.如果远程服务器防火墙有为scp命令设置了指定的端口，我们需要使用 -P 参数来设置命令的端口号，命令格式如下：")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("#scp 命令使用端口号 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4588")]),s._v("\nscp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("P")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4588")]),s._v(" remote@www"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("runoob"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("administrator\n")])])]),e("p",[e("code",[s._v("参考链接：https://www.runoob.com/linux/linux-comm-scp.html")])])])}),[],!1,null,null,null);t.default=a.exports}}]);