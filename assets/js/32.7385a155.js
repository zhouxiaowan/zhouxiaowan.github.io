(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{417:function(t,n,s){"use strict";s.r(n);var a=s(54),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),s("p",[t._v("Nginx和Apache一样都是web服务器；\nApache是一个重量级的\nNginx是一款高性能的HTTP和反向代理的服务器（轻量级），占用内存小，最大支持高达50000并发数")]),t._v(" "),s("h2",{attrs:{id:"_3-1-正向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-正向代理"}},[t._v("#")]),t._v(" 3.1 正向代理")]),t._v(" "),s("p",[t._v("先举例一个通俗的例子来说明什么是正向代理：比如我们想访问外国网站，但是我们的浏览器是没有办法访问到的，此时大家都会用一个代理进行访问，比如找到一个可以访问外国网站的代理服务器（VPN），我们将请求发送给代理服务器，然后代理服务器去请求外国网站，然后将返回的数据传递给我们"),s("br"),t._v(" "),s("code",[t._v("安装在客户端的是正向代理")])]),t._v(" "),s("h2",{attrs:{id:"_3-2-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-反向代理"}},[t._v("#")]),t._v(" 3.2 反向代理")]),t._v(" "),s("p",[t._v("比如我们请求网关，网关请求服务器，然后将数据传给我们。"),s("br"),t._v(" "),s("code",[t._v("安装在服务端的是反向代理")])]),t._v(" "),s("h2",{attrs:{id:"_3-3-负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-负载均衡"}},[t._v("#")]),t._v(" 3.3 负载均衡")]),t._v(" "),s("p",[t._v("负载均衡就是将原先请求集中在单个服务器上的情况改为请求分发到多个服务器，将负载分发到不同的服务器；（比如a服务器请求权重为2，b服务器请求权重为1，那么有2/3请求发送到a服务器上，有1/3请求发送到b服务器上）\nNginx负载均衡有2种：内置策略和扩展策略"),s("br"),t._v("\n内置策略为轮询(默认)，加权轮询（加权重）,ip_hash(指定负载均衡器按照基于客户端IP的分配方式，这个方法确保了相同的客户端的请求一直发送到相同的服务器，以保证session会话)")]),t._v(" "),s("h2",{attrs:{id:"_3-4-动静分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-动静分离"}},[t._v("#")]),t._v(" 3.4 动静分离")]),t._v(" "),s("p",[t._v("在我们的软件开发中，有些请求是需要后台处理的，有些请求是不需要后台处理的（如：css，jpg等），这些不需要经过后台处理的文件成为静态文件(放在部署静态资源服务器上)，其余放在部署动态资源的服务器。通过一定的规则把动静资源区分来，就可以根据静态资源的特点，将它做缓存"),s("br"),t._v("\n动静分离大体实现方式有两种：")]),t._v(" "),s("ul",[s("li",[t._v("把动态资源和静态资源放到不同的服务器")]),t._v(" "),s("li",[t._v("动静资源混合在一起，通过nginx来分开")])]),t._v(" "),s("h2",{attrs:{id:"_3-5-nginx实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-nginx实战"}},[t._v("#")]),t._v(" 3.5 Nginx实战")]),t._v(" "),s("h3",{attrs:{id:"_3-5-1-nginx下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-nginx下载"}},[t._v("#")]),t._v(" 3.5.1 Nginx下载")]),t._v(" "),s("p",[t._v("下载地址：http://nginx.org/en/download.html")]),t._v(" "),s("h3",{attrs:{id:"_3-5-2-nginx启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2-nginx启动"}},[t._v("#")]),t._v(" 3.5.2 Nginx启动")]),t._v(" "),s("p",[t._v("Windows：\n下载好Nginx后，进入当前目录，打开cmd")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("nginx.exe\n")])])]),s("p",[t._v("打开浏览器，输入localhost:80，看到一个Welcome to nginx!页面，便启动成功了")]),t._v(" "),s("p",[t._v("Linux：\n将下载好的Nginx文件放到服务器上")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./configure     // 自动配置\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make // 编译\nmake install //安装\nwhereis nginx //看它的位置\ncd 位置\ncd sbin/\n./nginx      //启动\n")])])]),s("p",[t._v("常用命令Linux")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./ngixn -v //查看当前ngixn版本号 windows是nginx -v\n./nginx //启动\n./nginx -s stop //停止\n./nginx -s quit //安全退出\n./nginx -s reload //重新加载配置文件\nps aux|grep nginx //查看nginx进程\n")])])]),s("h3",{attrs:{id:"_3-5-3-nginx配置文件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-nginx配置文件介绍"}},[t._v("#")]),t._v(" 3.5.3 nginx配置文件介绍")]),t._v(" "),s("p",[t._v("nginx文件由三部分自称：")]),t._v(" "),s("ul",[s("li",[t._v("第一部分：全局块"),s("br"),t._v("\n从配置文件开始到events块之前的内容，是全局块，主要会设置一些影响ngixn服务器整体运行的配置指令。比如")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("worker_processes  1; //并发处理的值，值越大，处理的并发数量也越多，但是受到硬件软件等设备的制约\n")])])]),s("ul",[s("li",[t._v("第二部分：events块"),s("br"),t._v("\nevents块涉及的指令主要影响Nginx服务器与用户的网络的链接，比如：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("events {\n    worker_connections  1024;  //支持的最大连接为1024\n}\n")])])]),s("ul",[s("li",[t._v("第三部分：http块（配置最多的部分）"),s("br"),t._v("\nhttp块包括了http全局块和server块")])]),t._v(" "),s("p",[t._v("http全局块")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("include       mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndefault_type  application/octet-stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/access.log  main;")]),t._v("\n\nsendfile        on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#keepalive_timeout  0;")]),t._v("\nkeepalive_timeout  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n")])])]),s("p",[t._v("server块")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //监听的端口是什么\n    server_name  localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //主机名称\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/host.access.log  main;")]),t._v("\n\n    //路径\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        proxy_pass http://localhost:3000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page  404              /404.html;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redirect server error pages to the static page /50x.html")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    error_page   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    proxy_pass   http://127.0.0.1;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    root           html;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_pass   127.0.0.1:9000;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_index  index.php;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    include        fastcgi_params;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deny access to .htaccess files, if Apache's document root")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# concurs with nginx's one")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ /\\.ht {")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    deny  all;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Linux上注意对外访问端口开放")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("firewall-cmd --list-all //查看对外开放的访问端口\nfirewall-cmd --add-port=8080/tcp --permanent //加入8080端口\nfirewall-cmd --reload //重载\n")])])]),s("h3",{attrs:{id:"_3-5-4-nginx实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-4-nginx实战"}},[t._v("#")]),t._v(" 3.5.4 nginx实战")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Windows")]),t._v("  (windows环境下)")])]),t._v(" "),s("h4",{attrs:{id:"_3-5-3-1-nginx反向代理实例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-1-nginx反向代理实例1"}},[t._v("#")]),t._v(" 3.5.3.1 Nginx反向代理实例1")]),t._v(" "),s("p",[t._v("现在我们开始代理我们的一个前端项目\n此时，我启动了一个vue3的项目，访问地址是"),s("code",[t._v("http://localhost:3000/#/")]),t._v("(记住你自己的访问地址)"),s("br"),t._v("\n然后配置nginx （ngixn配置文件是./conf/nginx.conf）,在配置文件中找到server，然后 添加它要代理的服务地址："),s("code",[t._v("proxy_pass http://localhost:3000;")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("server {\n        listen       8080;\n        server_name  localhost;\n        location / {\n            proxy_pass http://localhost:3000;        // 要代理的服务地址\n        }\n}\n")])])]),s("p",[t._v("重启nginx"),s("code",[t._v("nginx -s reload")]),s("br"),t._v("\n此时，你在浏览器中输入http://localhost:8080/#/，"),s("br"),t._v("\n就可以看到http://localhost:3000页面内容，此时一个简单的ngixn代理就完成了。"),s("br"),t._v("\n给用户对外暴露的地址是http://localhost:8080/#/，此时用户并不知道真正的服务地址是http://localhost:3000")]),t._v(" "),s("h4",{attrs:{id:"_3-5-3-2-nginx反向代理实例2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-2-nginx反向代理实例2"}},[t._v("#")]),t._v(" 3.5.3.2 Nginx反向代理实例2")]),t._v(" "),s("p",[t._v("实现效果：根据访问路径跳转到不同的端口服务中"),s("br"),t._v("\n（/vue路径资源请求不到，但是确实代理过去了？？？？？）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("server {\n    listen       8080;\n    server_name  localhost;\n    location / {\n        proxy_pass http://localhost:8081;        // 要代理的服务地址\n    }\n    location /vue {\n        proxy_pass http://localhost:3000;        // 要代理的服务地址\n    }\n}\n")])])]),s("p",[t._v("最简单的测试做法，用webstorm打开两个html页面，a.html和b.html")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("server {\n    listen       8080;\n    server_name  localhost;\n    location / {\n        proxy_pass http://localhost:63342/test/a.html?_ijt=l0ag7kseahcm152krt9nc45pho; //替换成你的地址\n    }\n    location /b {\n        proxy_pass http://localhost:63342/test/b.html?_ijt=l0ag7kseahcm152krt9nc45pho; // 替换成你的地址\n    }\n}\n")])])]),s("p",[t._v("location 后面路径的一些解释"),s("br"),t._v("\nlocation = /a 表示严格匹配\nlocation ~ /a/ 表示正则表达式，链接中含"),s("code",[t._v("/a")]),t._v(",区分大小写\nlocation ~* /a/ 表示正则表达式，链接中含"),s("code",[t._v("/a")]),t._v(",不区分大小写\nlocation ^~ /a/ 表示路径是"),s("code",[t._v("/a")]),t._v("开头")]),t._v(" "),s("h4",{attrs:{id:"_3-5-3-2-nginx反向代理实例3-负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-2-nginx反向代理实例3-负载均衡"}},[t._v("#")]),t._v(" 3.5.3.2 Nginx反向代理实例3 负载均衡")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//myserver这个自己可以任意命名，但是要和下面的一致\nupstream myserver{\n    # ip_hash\n    server 172.16.1.41:8081 weight=1;\n    server 172.16.1.41:8082 weight=2;\n}\nserver {\n    listen       8080;\n    server_name  localhost;\n    location / {\n        proxy_pass http://myserver // 和上面名字一致\n    }\n}\n")])])]),s("p",[t._v("然后请求访问localhost://8080 会将请求分担到不同的服务器上，比如这里是分担到8081和8082上")]),t._v(" "),s("h4",{attrs:{id:"_3-5-3-3-nginx反向代理实例3-动静分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-3-nginx反向代理实例3-动静分离"}},[t._v("#")]),t._v(" 3.5.3.3 Nginx反向代理实例3 动静分离")]),t._v(" "),s("p",[t._v("location / {\nroot /image/     // root是加载的静态文件\n}")]),t._v(" "),s("h4",{attrs:{id:"_3-5-3-4-配置高可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-4-配置高可用"}},[t._v("#")]),t._v(" 3.5.3.4 配置高可用")]),t._v(" "),s("p",[t._v("当nginx宕机了，那就代理不到了。"),s("br"),t._v("\n解决办法：用两个nginx服务，主nginx和备用nginx，然后对外提供一个虚拟的ip地址，在两个机器上安装keepalived\n"),s("img",{attrs:{src:t.$withBase("/images/nginxgaokeyong.png"),alt:"nginx高可用"}}),t._v("\n安装好keepalived之后，会生成一个keepalived文件,修改keepalived.conf .....未完待续"),s("br"),t._v("\nnginx原理：master和worker"),s("br"),t._v("\n我们请求页面，首先master收到请求，然后将请求发给下面的worker，worker通过争抢的方式来转发请求")])])}),[],!1,null,null,null);n.default=e.exports}}]);