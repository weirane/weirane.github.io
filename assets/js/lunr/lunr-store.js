var store = [{
        "title": "About",
        "excerpt":"HSY → USTC → UCSD → GMU      base64 -d &lt;&lt;&lt;'aGVsbG9AcnVvLWNoZW4ud2FuZw=='    @weirane    @weirane    ","categories": [],
        "tags": [],
        "url": "/about/",
        "teaser": null
      },{
        "title": "Projects",
        "excerpt":"Here are some of my projects: bienum: A two-column enumeration LaTeX environment. closest-pair-wasm: Rust + WebAssembly demo of the closest pair problem. bank-management: database systems lab 3, a webapp built with actix-web and sqlx. dosnap: Automatically manage Btrfs snapshots. Other misc: gadgets: A collection of my gadgets. dotfiles: My configurations...","categories": [],
        "tags": [],
        "url": "/projects/",
        "teaser": null
      },{
        "title": "Referal links",
        "excerpt":"   vultr   https://www.vultr.com/?ref=7553251   fastmail   https://ref.fm/u24807960  ","categories": [],
        "tags": [],
        "url": "/reflinks/",
        "teaser": null
      },{
        "title": "Status",
        "excerpt":"   Build time   2025-08-14 07:34:19 +0800   Git commit        04398ad     Add a tag         GitHub Actions    Build 51     ","categories": [],
        "tags": [],
        "url": "/status/",
        "teaser": null
      },{
        "title": "第一篇博客",
        "excerpt":"这个博客使用 jekyll 构建加上 minimal mistakes 主题的 dirt 皮肤。源代码在 GitHub 上，用 Travis CI 自动部署到 GitHub Pages：。 Jekyll 和 minimal mistakes 配置起来应该不算太难，官方的文档讲得很详细，但是很懒的我并不想仔细看完。需要注意的是使用这种配置方式并不属于文档中描述的「hosted on GitHub Pages」，因为构建网站是在 Travis CI 中完成的，GitHub 得到的已经是构建完成的 HTML, CSS 和 JavaScript。配置的时候还参考了 iBug 的一篇 blog，我也从他的 repo 中借鉴了一些配置，在此表示感谢～ 为什么使用这样的构建方式？ 暂时还没有想购买域名，所以打算使用 GitHub Pages； 直接在 GitHub Pages 上建博客（即上面说的「hosted on GitHub Pages」）的限制较大，如不能使用一些插件等。正好看到了 iBug 的 blog，所以打算使用...","categories": ["Miscellaneous"],
        "tags": ["jekyll"],
        "url": "/2019/10/first-blog.html",
        "teaser": null
      },{
        "title": "Rust + WebAssembly: 最近点对问题",
        "excerpt":"先放 链接。这个项目一开始是算法课的一个上机作业，平面上的最近点对问题。这是一个使用分治法的计算几何学问题，具体的算法就不在这里解释了，这篇博客主要讲讲 Rust 和 WebAssembly。 2020-02-08 更新：增加了 更好的解决方案 一节。 Rust 先说说在这个项目中我学到的关于 Rust 的东西吧。 遇到的问题 在命令行中输入数据的时候需要将输入的每一行转化为一个 Point，并将这些 Point 存入一个 Vec 中。由于 io::StdinLock 实现了 BufRead 这个 trait，所以可以方便地用 io::stdin().lock().lines() 获得一个输入行的迭代器。我的 Point 结构体已经实现了 FromStr trait，现在应该如何将每一行 map 成 Point 并收集到 Vec 中？由于 Point::from_str 返回的是一个 Result 但我又不想直接 unwrap 掉而是想用 ? 把错误给 propagate 上去，所以事情并没有那么简单。我的第一感觉是 let points: Vec&lt;_&gt;...","categories": ["Programming"],
        "tags": ["rust","wasm"],
        "url": "/2019/11/rust-wasm-closest-pair.html",
        "teaser": null
      },{
        "title": "从 GNOME 迁移到 i3",
        "excerpt":"本文记录一下在我的 Manjaro 上从 GNOME 迁移到 i3-gaps 的经历，也可以为在其它 Arch 系发行版上安装 i3-gaps 提供一些参考。i3 是一种平铺窗口管理器（tiling window manager）。我在本机安装 i3 之前先在虚拟机上尝试了一下 Manjaro 的 i3 edition 以熟悉一下 i3 的 key bindings，以下在配置时有所参考它的默认配置。 2020-05-13 更新：增加了 GNOME Keyring 自动解锁 一节。 2020-04-11 更新：增加了 QQ 一节。 2020-03-01 更新：增加了 暖色屏幕（night shift） 一节。 2020-01-23 更新：增加了 多显示器 一节。 安装 i3-wm 和 i3-gaps 这两个包都提供 i3...","categories": ["Tweaks"],
        "tags": ["i3","terminal","dotfiles"],
        "url": "/2020/01/switch-from-gnome-to-i3.html",
        "teaser": null
      },{
        "title": "合并挂载在 `/` 和 `/home` 的分区",
        "excerpt":"最近需要装一个很大的虚拟机，在导入 VirtualBox 的时候出现了「NS_ERROR_INVALID_ARG (0x80070057)」这个错误，上网查发现是因为硬盘空间不足。我的硬盘有 67G 的空闲空间，但是因为把 /home 单独分了一个分区，两个分区每个都有 30G 左右的剩余空间，无法充分利用。我的 / 和 /home 对应的分区是相连的，合并较为方便，便打算将这两个分区合并起来。以下是 df1 的结果： $ df Filesystem Size Used Avail Use% Mounted on /dev/nvme0n1p6 81G 47G 30G 61% / /dev/nvme0n1p8 53G 13G 37G 26% /home /dev/nvme0n1p1 256M 30M 227M 12% /boot/efi 背景 两年前第一次尝试 Linux 的时候我将 Linux 安装在了一个移动硬盘上。这种情况文件系统损坏的可能性比较大，所以将 /...","categories": ["Tweaks"],
        "tags": ["partition","rsync"],
        "url": "/2020/02/combine-two-partitions.html",
        "teaser": null
      },{
        "title": "将 Caps Lock 映射为 Escape 和 Ctrl",
        "excerpt":"Caps Lock 可能是键盘上最没有用的一个键了，但是它又占据了 home row 的位置。一些人会把它映射成 Escape 或者 Ctrl。但是作为一个 Vim 用户，Escape 和 Ctrl 都是很常用的键。如何让 Caps Lock 在单击的时候是 Escape，和其它键配合的时候是 Ctrl？ TL; DR: 见 总结 2020-11-15 更新：扩充 Xmodmap 一节 2020-04-08 更新：增加了 XCAPE 和 总结 2021-01-27 更新：增加了 TL; DR 之前的配置 这里有一些将 Caps Lock 只映射成 Ctrl 的方法。 Xmodmap 以前 有写过使用 xmodmap 将 Caps Lock...","categories": ["Tweaks"],
        "tags": ["keyboard"],
        "url": "/2020/04/map-capslock-to-esc-and-ctrl.html",
        "teaser": null
      },{
        "title": "Fcitx5 安装记",
        "excerpt":"在 #archlinux-cn 上 fcitx 是个经常被讨论的话题，每次都有人推荐 fcitx5。但是因为只有在 KDE 中有图形化的配置工具就一直没有尝试。今天有人说配置工具 kcm-fcitx5 在非 KDE 中也可以安装了，所以来试试。 2021-01-29 更新：kcm-fcitx5 改名为 fcitx5-configtool（其实早就改了，只是博 客里没更新） 安装 先卸载 fcitx4： pacman -Qsq fcitx | sudo pacman -Rsn - 安装 fcitx5： sudo pacman -S fcitx5 fcitx5-chinese-addons fcitx5-configtool fcitx5-qt fcitx5-gtk Fcitx5 自带的皮肤不是很好看，我还安装了 material-color 皮肤： sudo pacman -S fcitx5-material-color 配置 输入法 有了图形化的配置工具，配置会轻松很多。首先在「输入法」一栏中添加需要的输入法，我使用的是双拼，然后在「附加组件」→「拼音」里面修改双拼方案为小鹤双拼。 自动启动与环境变量...","categories": ["Tools"],
        "tags": ["fcitx","imagemagick"],
        "url": "/2020/05/install-fcitx5.html",
        "teaser": null
      },{
        "title": "搭建一个 Git 服务器",
        "excerpt":"本篇将记录我使用 gitweb 和 nginx 搭建带有网页界面和 HTTP clone 的 Git 服务器的过程。 Git 服务器 首先设置能使用 SSH 访问的 Git 服务器，参考 Pro Git 中的说明。先在服务器上添加 git 用户 sudo useradd -m /srv/git git sudo passwd git 然后导入本地的 SSH key（需要在 /etc/ssh/sshd_config 中设置 PasswordAuthentication yes） ssh-copy-id -i ~/.ssh/id_rsa git@&lt;IP address&gt; 为了安全禁用 shell 登录 sudo chsh git -s $(which...","categories": ["Tweaks"],
        "tags": ["git","gitweb","nginx"],
        "url": "/2020/08/git-server.html",
        "teaser": null
      },{
        "title": "更换域名",
        "excerpt":"2021-04-18 更新：isso 和 goatcounter 不想写博客了 😂 不过我把配置过程放在我的 wiki 上了 → isso, goatcounter     买了一个新域名 ruo-chen.wang，打算用来替换原来的 wangrc.top。顺便把博客的域名从 GitHub 的 weirane.github.io 换成自己的域名，再把自己搭建的评论系统 isso 和流量分析工具 goatcounter 的 URL 换过来（过些时候感觉可以写写 isso 和 goatcounter 这两个工具）。以后我应该就会一直用 ruo-chen.wang 这个域名了，感觉还可以去弄一个域名邮箱。   （挖坑 × 2）   ","categories": ["Miscellaneous"],
        "tags": [],
        "url": "/2020/09/change-domain.html",
        "teaser": null
      },{
        "title": "使用 pass 管理密码",
        "excerpt":"Pass 是一个使用 GPG 管理密码的工具。它的 网站 介绍说： Pass: the standard unix password manager 有 ed 编辑器内味了1 Pass 保存的密码被存放在目录 ${PASSWORD_STORE_DIR:-$HOME/.password-store} 下，每个密码都是一个 GPG 加密的文件。除了密码还可以在此文件中存放用户名，OTP URI 等其它信息。同时还可以把该目录作为一个 Git 仓库用于同步密码。 生成 GPG 密钥 如果没有 GPG 密钥对则需要先生成。使用命令 gpg --full-gen-key 输入对应的信息即可，一般都可以用默认值。关于生成 GPG 密钥还可以看看 ArchWiki。为了避免每次需要密码的时候都得输入 GPG 密钥的密码，可以配置 GNOME Keyring 或者 pam-gnupg 来在登录后记住密码。 pass 命令 首先用生成 GPG 密钥的 email...","categories": ["Tools"],
        "tags": ["pass","gpg","git"],
        "url": "/2021/01/pass.html",
        "teaser": null
      },{
        "title": "从 Manjaro 迁移到 Arch Linux",
        "excerpt":"今天我把系统换成了 Arch Linux，用的是 Btrfs 文件系统，套上 LUKS 加密（加密包括 /boot）。由于我已经在虚拟机里面实验过整个过程，所以今天的安装过程非常顺利，一共只用了一两个小时。 2021-03-25 更新：增加了 redshift 无法使用 geoclue 一节 2021-04-18 更新：增加了 将 ~/.cache 单独分为一个子卷 一节 背景 前几天用 btrfs-convert 把我的 Manjaro 的文件系统换成了 Btrfs，然后继续开发我的 Btrfs 快照管理工具 dosnap。奇怪的是，在出错的时候（如 panic!）程序不会退出 ，而是直接卡住。这还不是最致命的，过了几秒钟我发现我的 polybar 不见了，然后发现我的家目录里少了一些东西，包括 ~/.config。还好我之前有做快照，可以直接用 rsync 恢复数据。但是在我的一个 Arch Linux 虚拟机中程序如果出错会正确退出。不知道是为什么，可能是 btrfs-convert 的什么 bug。然后就想到用 Arch 虚拟机也有很长时间了，于是打算直接把物理机也换到 Arch Linux 上来。 备份 可以使用...","categories": ["Tweaks"],
        "tags": ["archlinux","btrfs","luks","redshift","swap","xbacklight"],
        "url": "/2021/03/switch-from-manjaro-to-arch.html",
        "teaser": null
      },{
        "title": "从零开始的 λ 演算",
        "excerpt":"这是我在看完 PyCon 2019 演讲「Lambda Calculus from the Ground Up」之后做的一个文字版，原视频在 https://youtu.be/pkCLMl0e_0k。另见官网中的 介绍，这里提供一个翻译。 最近关于编程风格的指南层出不穷。但是如果我们把风格限制为只允许出现单参数的函数会发生什么呢？没有模组，没有类，没有控制流，没有数据结构，甚至连整数、正则表达式等内建类型都没有，只有函数。用这种风格能写出程序吗？令人惊讶的是，答案是肯定的。在这个教程中，你将学到如何从零开始在 Python 中推导 λ 演算。 你不会在这个教程中学到有实际用处的东西。没有打包，没有工具，没有库，没有部署，也没有神奇的 Python 编程技术。你也不会学到会被你用在实际项目上的东西。但是你将获得很多乐趣，将感到惊叹，并学习一些基础的计算机科学，这是你进一步探索函数式编程、类型理论、编程语言等话题的起点。 规则 如上介绍所说，我们只允许函数调用，或者参数替换这一种操作。以下列举一些不被允许的操作： def f(x): return x + 1 # 不允许使用数字和运算符 + def f(x, y): ... # 只允许单个参数 以下是一些合法的操作，但是他们好像没什么意义： def f(x): return x def f(x): return x(x) def f(x): def g(y): return...","categories": ["Programming"],
        "tags": ["functional-programming","lambda-calculus","python"],
        "url": "/2021/04/lambda-calculus-from-the-ground-up.html",
        "teaser": null
      },{
        "title": "使用 bwrap 隔离 WPS Office",
        "excerpt":"看到依云在 博客 中提到了非特权沙盒工具 bwrap。博客的结尾提到可以用它来跑一些不太干净的软件，便来配置一下 WPS Office。 WPS 目前（AUR 版本 11.1.0.10702-1）还有使用反斜杠作为文件路径分隔符的问题，不过没有影响到外部的观感，只是在 ~/.local/share/Kingsoft 内部。但是它每次运行都会在后台启动 wpscloudsvr 进程，可能和云同步有关吧，每次还要 kill 一下，有点麻烦。另外作为那种不得不使用的商业软件，还是感觉隔离一下舒服一些。 使用的 bwrap 命令修改自依云的博客。wrap-wps 脚本如下： #!/bin/bash # 根据扩展名选择对应的 WPS 程序 file=$1 case $file in *.doc | *.docx) exe=/usr/bin/wps ;; *.xls | *.xlsx) exe=/usr/bin/et ;; *.ppt | *.pptx) exe=/usr/bin/wpp ;; *) exe=/usr/bin/wps ;; esac binds=() for...","categories": ["Tweaks"],
        "tags": ["bwrap","wps"],
        "url": "/2021/08/bwrap-wps.html",
        "teaser": null
      },{
        "title": "关于基于表达式的编程语言的一些思考",
        "excerpt":"最近学 Go 语言又想起之前看过的一个 talk，presenter 说他几乎不用 else 关键字。因为一般情况下，if 语句的其中一个 branch 会比较短（比如处理特殊情况），这样可以在这个 branch 结束后直接从函数返回，后续的代码就不需要进行缩进了，如 func fact(n int) int { if n &lt;= 1 { return 1 } // no extra indent here! return fact(n - 1) * n } 可以减少缩进当然是件好事。如果后续代码很长可以采用这种风格。但我觉得并不是所有的情况都适用于这种写法。相比之下我更喜欢这样的写法 int fact(int n) { return n &lt;= 1 ? 1 : fact(n...","categories": ["Programming"],
        "tags": ["functional-programming","programming-languages"],
        "url": "/2021/12/functional.html",
        "teaser": null
      },{
        "title": "中美文化差异",
        "excerpt":"最近看了不少中国哲学的书和视频，想来结合我的经历说一下我浅薄的理解。我主要看的是复旦的王德峰老师的视频。最开始看王德峰老师是从他的 “中西方文化差异的渊源” 入坑的，然后又陆续看了马克思哲学、阳明心学、艺术哲学等等课程，感觉非常长脑子。他有很多片段在 B 站上都很火，特别是讲金刚经三句义的那一段。有兴趣的可以去搜一搜。 我现在在美国也待了有三年了。就我的感觉来说，中国的文化比较讲究平衡，凡事不做到极致，但是美国恰恰相反。美国人喜欢把所有事情都做到当前认知下的极致，然后就相对地固定下来。好像美国人倾向于相信对于每一件事情，世界上都有唯一最好的一个处理方式。而且一旦我们发现了这个方式，就要一直坚持。如果发现了问题，那就应该在现有方式的基础上修补，而不是去推翻之前已经存在的知识。我印象很深的一个事情就是我在 UCSD 的导师说他相信 “there has to be a best way to design it”。我不记得具体是 design 什么了，但是这种对 “the best way” 的执着当时对我有很大的冲击。 举例 在别的领域里也可以体现出美国的这种目标明确，努力到极致的文化的例子。 城市规划 我最开始看美国城市（特别是新规划的郊区）的地图的时候有一种感觉，就是感觉规划得非常清晰。你能看出来哪里是住宅区，哪里是商业区，哪里是医院，哪里是公园等等，在地图上非常清晰地用不同颜色标注出来了。而看国内城市的地图的时候就会发现好像所有东西是交织在一起的。我的猜想是，由于美国需要用概念和逻辑来找到那个 “最好” 的规划方案，把城市划分成不同的单一功能的区域可以显著降低在规划过程中的复杂度。由于推理的单位从单个的楼房变成了一片区域，他们在规划的过程中需要处理的变量也就更少了，也就更方便了。 但是这种单一功能的规划也会产生问题。这种规划会导致大多数人无法只通过走路从一个区到另一个区。比如住在 single family house 的人无法走路去一个 plaza 买菜。所以造成干什么都要开车的现象。有调查显示在美国，一半的行程是小于五公里的，但是就算这种短距离的出行需求也只能开车，这就加剧了交通的拥堵。所以现在美国又在研究新的模式，比如 TOD 就是一个最近很热的概念。 汽车文化 汽车文化应该是美国最核心的文化之一了。而开车本身就是一个目标非常明确的活动。你需要在脑子里想好一个目的地，然后可能要在地图软件里输入它，然后你就（像一个机器一样地）跟着地图的指引开车。开车和走路不同，开车的时候你无法自由地改变你的行进方向，也不能随时停下休息或者看风景。 有人可能说开车和走路不具备可比性，因为开车可达的半径比走路大多了。那如果我们把开车和乘坐公共交通比较的话，就会发现美国的汽车文化还是会导致你出行的目的性非常强。虽然乘坐公共交通也需要你有一个目的地，但是你的目的地是一大片区域，而不是某一个餐馆或商店。在美国的郊区，你开车到达一个 plaza 停下后，你的目标是很清晰的：我就是要去这个餐厅吃饭。吃完饭之后就回到车上了，你就又需要重新有意识地 “决定” 你的下一个目的地是哪里。如果是在城区选择乘坐公共交通，你在下车之后是一定会走一段路的，而且你的目的地在绝大部分情况下并不是某一个商店，而是一个行人友好的商圈。你在这个商圈中是可以自由地行走的，而且你在自由地行走的过程中会碰到各种意想不到的事情。说不定你看中了某个商店想进去逛逛，或者是你恰好碰到了一个好朋友。这种事情在美国郊区去哪儿都要开车的情境下是很难发生的。 “专业性” 最近还看了 Gad Elmaleh...","categories": ["Humanities"],
        "tags": ["中国哲学","草台班子","单口喜剧","城市规划","lambda-calculus"],
        "url": "/2024/08/cultural-differences.html",
        "teaser": null
      },{
        "title": "开始读《异见时刻》",
        "excerpt":"打算开始读《异见时刻：“声名狼藉” 的金斯伯格大法官》。这是一本前美国最高法院大法官 Ruth Bader Ginsburg (RBG) 的传记。RBG 是美国最高法院第二位女性大法官。最开始听说 RBG 是在詹青云做客鲁豫的一集播客中（岩中花述 S5E1，03/12/2024）。当时好像正好是在 DC 市里面逛，听到 RBG 的墓就在 arlington national cemetary，本来打算去看看的，结果当时比较晚了就没去。当然后来有时间就去瞻仰了一下 RBG 和她丈夫的墓。 当时听播客的时候有一个点我印象很深，就是阿詹说 RBG 是一个相信慢慢努力的人。因为法律的改变是非常缓慢的，她不会去想着一定要做那些有着划时代意义的大案子，而是一点点地搭建人们对男女不应该区别对待的认知。当 RBG 处在一个保守派占多数的最高法院的时候，她会努力去和保守派法官妥协，就算放弃自己意见中的一些激进的部分，也要去争取保守派的票从而赢得这个 case。在她发现无法胜利的时候，她仍然会站出来并更加努力地表达自己 “I dissent” 的态度，尽管当时的判决并不会改变。这种精神虽然不会在现实中有立即的作用，但也是非常有价值的。比如她在 Ledbetter v. Goodyear Tire &amp; Rubber Co. 案的反对意见1中建议国会立法推翻最高法院的决定，结果在奥巴马当选总统之后就实现了。 正好我最近突然意识到我自己其实就是处在一个 “无法接受微小的进步” 的状态里。很多时候需要去做一些细枝末节的事情，但是我在做的时候会没有意义感，从而无法专心做事。说来我意识到我处在这个状态也是从金刚经中的 “应无所住而生其心” 来的。当时听王德峰讲六祖惠能和神秀的偈句的不同2，一时间突然意识到我和神秀犯的错误其实是一样的：就是沉浸在小乘佛教的自了汉的境界中了。而要达到大乘菩萨的境界，是需要在现实世界中产生影响，去帮助具体的人，做具体的事的。如果 RBG 只在小乘佛教的境界中，她大可以在一些 5 比 4 的判决中拒绝和保守派的法官妥协，就说我自己坚持了自己的原则，但是以案子的失败作为代价。虽然这样做自己的 “心” 没有...","categories": ["Humanities"],
        "tags": ["读书","女性主义","RBG","中国哲学","金刚经"],
        "url": "/2024/09/starting-notorious-rbg.html",
        "teaser": null
      }]
