var store = [{
        "title": "About",
        "excerpt":"I am an undergraduate student at USTC majoring in computer science.      base64 -d &lt;&lt;&lt;'aGVsbG9AcnVvLWNoZW4ud2FuZw=='    6A24 AD87 E33D 94FA 108C  7403 C6DE A570 A3B0 26FC    @weirane    @weirane    ","categories": [],
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
        "excerpt":"   Build time   2021-07-08 11:36:28 +0800   Git commit        a1894bd     Update minimal-mistakes-jekyll requirement from ~&gt; 4.23.0 to ~&gt; 4.24.0         GitHub Actions    Build 32     ","categories": [],
        "tags": [],
        "url": "/status/",
        "teaser": null
      },{
        "title": "第一篇博客",
        "excerpt":"这个博客使用 jekyll 构建加上 minimal mistakes 主题的 dirt 皮肤。源代码在 GitHub 上，用 Travis CI 自动部署到 GitHub Pages：。 Jekyll 和 minimal mistakes 配置起来应该不算太难，官方的文档讲得很详细，但是很懒的我并不想仔细看完。需要注意的是使用这种配置方式并不属于文档中描述的「hosted on GitHub Pages」，因为构建网站是在 Travis CI 中完成的，GitHub 得到的已经是构建完成的 HTML, CSS 和 JavaScript。配置的时候还参考了 iBug 的一篇 blog，我也从他的 repo 中借鉴了一些配置，在此表示感谢～ 为什么使用这样的构建方式？ 暂时还没有想购买域名，所以打算使用 GitHub Pages； 直接在 GitHub Pages 上建博客（即上面说的「hosted on GitHub Pages」）的限制较大，如不能使用一些插件等。正好看到了 iBug 的 blog，所以打算使用...","categories": [],
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
        "excerpt":"本篇将记录我使用 gitweb 和 nginx 搭建带有网页界面和 HTTP clone 的 Git 服务器的过程。 Git 服务器 首先设置能使用 SSH 访问的 Git 服务器，参考 Pro Git 中的说明。先在服务器上添加 git 用户 sudo useradd -m /srv/git git sudo passwd git 然后导入本地的 SSH key（需要在 /etc/ssh/sshd_config 中设置 PasswordAuthentication yes） ssh-copy-id -i ~/.ssh/id_rsa git@&lt;IP address&gt; 为了安全禁用 shell 登录 sudo chsh git -s $(which...","categories": ["Server"],
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
      }]
