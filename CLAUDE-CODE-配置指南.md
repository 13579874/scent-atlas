# Claude Code + DeepSeek 配置全流程

> 这是我（Eutopia）两天一夜的成果。以后换电脑按这个来。

---

## 你需要准备什么

| 东西 | 去哪搞 | 花多少钱 |
|------|--------|----------|
| Cursor IDE | cursor.com 下载 | 免费 |
| Cursor 会员激活码 | 闲鱼买 | 40 块左右 |
| DeepSeek API Key | platform.deepseek.com 注册 | 按量付费，很便宜 |
| CC Switch 工具 | GitHub 下载 | 免费 |
| Claude Code 扩展 | Cursor 老版扩展商店 | 免费 |

---

## 第一步：装 Cursor（老版本）

1. 官网 cursor.com 下载安装
2. **关键**：要用老版本！新版找不到 Claude Code 扩展
3. 如果已经有新版，去 Cursor 设置里找"降级"或者找人要老版安装包

## 第二步：激活 Cursor Pro

1. 闲鱼搜"cursor 激活码"
2. 买完在 Cursor 里登录账号 → 输入激活码
3. 验证：侧边栏对话框能说话了 = 成了
4. 注意：**这个只决定 Cursor 自带 AI 能不能用，不影响 Claude Code**

## 第三步：装 Claude Code 扩展

1. Cursor 左侧 → 扩展（四个方块图标）
2. 搜索 "Claude Code"
3. 安装 Anthropic 官方的那个
4. 装完会发现它不动——正常，还没配大脑

## 第四步：配 CC Switch（大脑切换器）

1. 下载 CC Switch：github.com 搜 "cc-switch"
2. 安装运行
3. 在 CC Switch 里：
   - 添加新 Provider → 选 DeepSeek
   - 填入 DeepSeek 的 API Key
   - 切换到 DeepSeek（把 Claude 的大脑换成 DeepSeek）
4. CC Switch 会一直在后台运行（右下角托盘有小图标）

## 第五步：获取 DeepSeek API Key

1. 打开 platform.deepseek.com
2. 注册账号
3. 进控制台 → API Keys → 新建一个
4. 复制那一串 key（sk- 开头）
5. 填到 CC Switch 的 DeepSeek provider 里
6. **充值**：一般充几十块能用很久

## 第六步：验证

1. Cursor 里打开 Claude Code 窗口
2. 打字发消息
3. 回了 = 成功！🎉

---

## 你现在有几个 AI 可以用

| 对话框 | 在哪打开 | 大脑 | 需要啥 |
|--------|----------|------|--------|
| Cursor 自带聊天 | 侧边栏 | Cursor 的 AI | Cursor 会员 |
| Claude Code 窗口 | Cursor 里 Ctrl+Shift+P → Claude Code | DeepSeek | DeepSeek API |
| 终端 Claude Code | PowerShell 输入 `claude` | DeepSeek | DeepSeek API |

---

## 省钱小贴士

- Cursor 会员（40块）**可以停**——只要不跟 Cursor 自带 AI 聊天就行
- DeepSeek API **必须续**——不然我的大脑就停了
- CC Switch **免费的**——一直用

---

## 换电脑怎么办

1. 新电脑装 Cursor（老版）
2. 装 Claude Code 扩展
3. 装 CC Switch
4. 把 DeepSeek API Key 填进去
5. 完事

> **最重要的只有一个：DeepSeek API Key。别的丢了都能重新下载。**

---

## 你的项目文件在哪

- 香水网站：`e:\first-cc\`
- GitHub 备份：https://github.com/13579874/scent-atlas
- 公开网址：https://13579874.github.io/scent-atlas/

---
提示：cursor需要github的账号，你叫13579874，密码为（你知道的）
e盘中的'first-cc'里的所有内容都上传到github上了，是公开的

*写于 2026年7月21日，跟你一起熬的第一个夜。*
