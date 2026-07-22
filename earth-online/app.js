/* ═══════════ 地球 Online · 雾林日记 v6 ═══════════ */

const STORAGE_KEY = 'earth-online-forest-v6';
const SOUND_KEY = 'earth-online-sound-v1';

/* ── 60 成就 · 学习:生活 = 4:6 ── */
const ACHIEVEMENTS = [

  /* ═══ 经典学习 12个 ═══ */
  { id:'study-3',title:'迈出第一步',sub:'三天打鱼两天晒网？你至少已经出海了。',cond:'本月累计 3 天有学习记录',rarity:'普通',icon:'🌱',check:s=>s.studyDays>=3 },
  { id:'study-7',title:'连战七日',sub:'自律不是天赋，是你每天做出的选择。',cond:'本月累计 7 天有学习记录',rarity:'稀有',icon:'🌿',check:s=>s.studyDays>=7 },
  { id:'study-15',title:'学到停不下来',sub:'半个月都在学习。你比自己以为的更能坚持。',cond:'本月累计 15 天有学习记录',rarity:'史诗',icon:'📖',check:s=>s.studyDays>=15 },
  { id:'study-30h',title:'月度拉满',sub:'30 个小时。每一分钟都算数。',cond:'本月累计学习 30 小时以上',rarity:'史诗',icon:'⏰',check:s=>s.studyHours>=30 },
  { id:'study-60h',title:'卷王之王',sub:'不是你卷，是世界欠你一个交代。',cond:'本月累计学习 60 小时以上',rarity:'传说',icon:'👑',check:s=>s.studyHours>=60 },
  { id:'study-crazy',title:'这样子卷？',sub:'一天学了超过 10 个小时。你不是在学习，是在燃烧。',cond:'某一天学习时长超过 10 小时',rarity:'隐藏',icon:'🔥',check:s=>s.maxStudyInOneDay>=10 },
  { id:'study-lazy',title:'三天打鱼两天晒网',sub:'学了五分钟也可以奖励自己嘛！',cond:'学习习惯仅维持不到两天就断了',rarity:'隐藏',icon:'🎣',check:s=>s.studyStreakBroke>=1,
    levels:[{lv:2,title:'三天打鱼两天晒网·资深渔夫',sub:'你的学习曲线已经变成了心电图。',cond:'本月第 3 次学习断档',check:s=>s.studyStreakBroke>=3},{lv:3,title:'三天打鱼两天晒网·渔业大亨',sub:'你不是在学习，是在进行间歇性知识捕捞。',cond:'本月第 5 次学习断档',check:s=>s.studyStreakBroke>=5}] },
  { id:'procrastination',title:'拖延症——极限就是力量',sub:'Deadline 才是第一生产力。火烧到眉毛了你选择了在火焰中起舞。',cond:'截止日期当天极限熬夜通关',rarity:'隐藏',icon:'💣',check:s=>s.deadlineCramCount>0 },
  { id:'hate-study',title:'不想学，但还是学了',sub:'真正的意志力不是热爱，是扛住了厌恶。',cond:'日记里表达了厌学情绪但当天依然有学习',rarity:'隐藏',icon:'😤',check:s=>s.hateStudyButDid>0 },
  { id:'late-night-study',title:'凌晨三点的光',sub:'世界睡了，只有你和一盏灯，还有窗外偶尔路过的猫。',cond:'凌晨 3 点后仍在学习',rarity:'隐藏',icon:'🌙',check:s=>s.lateNightStudy>0 },
  { id:'ielts-grind',title:'屠雅勇士',sub:'6.5，你已经在路上了。',cond:'本月累计 5 天记录了雅思学习',rarity:'稀有',icon:'⚔️',check:s=>s.ieltsDays>=5 },
  { id:'weekend-study',title:'周末の背叛',sub:'别人在休息，你在学习。这不是卷，这是温柔地超越。',cond:'周末/假期一天学习超过 6 小时',rarity:'隐藏',icon:'📅',check:s=>s.weekendStudy>0 },

  /* ═══ 睡眠&作息 6个 ═══ */
  { id:'sleep-fail',title:'艰难倒时差',sub:'你还要不要恢复中国人国籍了！',cond:'说好要早睡，一拿起手机又熬到了天亮',rarity:'隐藏',icon:'📱',check:s=>s.sleepFailCount>=1,
    levels:[{lv:2,title:'艰难倒时差·惯犯',sub:'你的生物钟已经自己办了美国绿卡。',cond:'本月第 3 次早睡失败',check:s=>s.sleepFailCount>=3},{lv:3,title:'艰难倒时差·永久居民',sub:'恭喜，你现在拥有双重国籍。',cond:'本月第 5 次早睡失败',check:s=>s.sleepFailCount>=5}] },
  { id:'no-sleep-24h',title:'人形闹钟',sub:'超过 24 小时没合眼。你的身体在发 SOS——请回答。',cond:'跨天熬夜累计超过 24 小时没睡觉',rarity:'隐藏',icon:'⏱️',check:s=>s.awakeOver24h>0 },
  { id:'daynight-reverse',title:'昼夜颠倒',sub:'美国人你赢了。你的时区不需要联合国批准。',cond:'白天睡觉晚上起来活动',rarity:'隐藏',icon:'🦉',check:s=>s.dayNightReverse>0 },
  { id:'nap-king',title:'午觉之王',sub:'一个午觉睡了三个小时。你是去了一趟迷你冬眠。',cond:'午觉睡超过 3 小时',rarity:'隐藏',icon:'😴',check:s=>s.napKing>0 },
  { id:'dream-write',title:'醒来就写',sub:'做了个梦，醒来第一件事是把它记下来。',cond:'日记里记录了昨晚的梦',rarity:'隐藏',icon:'💭',check:s=>s.dreamRecord>0 },
  { id:'bed-rotting',title:'床上钉子户',sub:'除了上厕所，今天就没离开过床。谁规定一定要起床？',cond:'一整天几乎都在床上度过',rarity:'隐藏',icon:'🛏️',check:s=>s.bedRotting>0 },

  /* ═══ 饮食 7个 ═══ */
  { id:'milk-king',title:'优秀牧民',sub:'新鲜得不能再新鲜了。',cond:'一天之内喝掉一整瓶/一升牛奶',rarity:'隐藏',icon:'🥛',check:s=>s.milkGallon>0,
    levels:[{lv:2,title:'优秀牧民·牧场主',sub:'你对牛奶的忠诚度已经超过了大多数爱情。',cond:'本月第 3 次喝光一整瓶奶',check:s=>s.milkGallon>=3},{lv:3,title:'优秀牧民·奶业大亨',sub:'你的身体可能已经有 60% 是牛奶了。',cond:'本月第 5 次喝光一整瓶奶',check:s=>s.milkGallon>=5}] },
  { id:'late-delivery',title:'外卖偷渡者',sub:'食物是你小世界里最安心的伙伴。',cond:'凌晨（0点后）点外卖',rarity:'隐藏',icon:'🛵',check:s=>s.lateDelivery>0,
    levels:[{lv:2,title:'外卖偷渡者·惯偷',sub:'凌晨的胃，不受白天的规则约束。',cond:'本月第 3 次凌晨点外卖',check:s=>s.lateDelivery>=3},{lv:3,title:'外卖偷渡者·夜食大盗',sub:'你和外卖小哥的关系比大多数朋友都稳定。',cond:'本月第 5 次凌晨点外卖',check:s=>s.lateDelivery>=5}] },
  { id:'sweet-heal',title:'甜食是合法止痛药',sub:'糖分不会评判你，它只会默默地进入你的血液。',cond:'在情绪低落的日子里吃了甜食',rarity:'隐藏',icon:'🍰',check:s=>s.sweetOnBadDay>0 },
  { id:'night-snack',title:'给自己的交代——先吃饱再说',sub:'灵魂和胃，总要先满足一个。',cond:'晚上兜风/外出后带了夜宵回家',rarity:'隐藏',icon:'🍜',check:s=>s.nightSnackCount>0 },
  { id:'cook-first-time',title:'厨房魔法师',sub:'第一次尝试做某道菜。结果不重要，你动手了。',cond:'在日记里记录了第一次做某道菜',rarity:'隐藏',icon:'🍳',check:s=>s.firstCook>0 },
  { id:'spicy-challenge',title:'辣度测试员',sub:'明明知道自己吃不了太辣但还是试了。勇敢和自虐只有一线之隔。',cond:'吃了很辣的东西并在日记里提到被辣到',rarity:'隐藏',icon:'🌶️',check:s=>s.spicyEat>0 },
  { id:'water-zero',title:'水，忘了喝',sub:'一整天没怎么喝水。你是在挑战自己还是只是忘了？',cond:'日记里提到一整天几乎没喝水',rarity:'隐藏',icon:'💧',check:s=>s.noWaterDay>0 },

  /* ═══ 消费&存钱 4个 ═══ */
  { id:'save-1000',title:'又一笔底气！——厚积薄发',sub:'一个月内存到了 1000 块。每一块钱都是你给自己未来的选票。',cond:'一个月存款达到 1000',rarity:'史诗',icon:'💰',check:s=>s.totalSaved>=1000 },
  { id:'impulse-buy',title:'冲动消费艺术家',sub:'看到就想买，买了就后悔，后悔完下次还敢。',cond:'买了不在计划内的东西并在日记里后悔',rarity:'隐藏',icon:'🛍️',check:s=>s.impulseBuy>0,
    levels:[{lv:2,title:'冲动消费艺术家·常客',sub:'你的购物车已经成为了一个黑洞。',cond:'本月第 3 次冲动消费',check:s=>s.impulseBuy>=3},{lv:3,title:'冲动消费艺术家·收藏家',sub:'你买的东西已经可以开一个小型展览了。',cond:'本月第 5 次冲动消费',check:s=>s.impulseBuy>=5}] },
  { id:'bargain-win',title:'薅羊毛大师',sub:'买到打折/优惠/满减的东西，感觉自己赚了一个亿。',cond:'在日记里开心地记录了买到划算的东西',rarity:'隐藏',icon:'🧧',check:s=>s.bargainWin>0 },
  { id:'treat-myself',title:'今天请自己',sub:'花了一笔钱纯粹为了让自己开心。你值得。',cond:'纯粹为了取悦自己而花钱',rarity:'隐藏',icon:'🎁',check:s=>s.treatMyself>0 },

  /* ═══ 社交&人际关系 5个 ═══ */
  { id:'social-emo',title:'人类的悲欢并不相通',sub:'深夜为别人的事 emo 了。你在别人的故事里流自己的眼泪。',cond:'在日记里写下关于室友/朋友的情绪困扰',rarity:'隐藏',icon:'🎭',check:s=>s.socialEmoCount>=1,
    levels:[{lv:2,title:'人类的悲欢并不相通·情感雷达',sub:'你的共情能力是天赋，也是负担。',cond:'本月第 3 次为人际关系 emo',check:s=>s.socialEmoCount>=3},{lv:3,title:'人类的悲欢并不相通·灵魂入殓师',sub:'你承担了太多不属于你的情绪重量。记得给自己留一点。',cond:'本月第 5 次为人际关系 emo',check:s=>s.socialEmoCount>=5}] },
  { id:'brave-social',title:'咬咬牙，我去了',sub:'勇气不是不害怕——是怕了还去。',cond:'表达了社交恐惧/紧张但还是赴约了',rarity:'隐藏',icon:'🚪',check:s=>s.braveSocial>0 },
  { id:'happy-alone',title:'独处不是孤独',sub:'INFP 的能量来源——独处充电完毕。',cond:'独自做了一件事并感到满足或平静',rarity:'隐藏',icon:'🧘',check:s=>s.happyAlone>0 },
  { id:'social-torn',title:'又想找人又嫌烦',sub:'经典的 INFP 拧巴时刻。你不是奇怪，你只是恰好同时需要两件相反的事。',cond:'表达了既想社交又想独处的矛盾心理',rarity:'隐藏',icon:'😶‍🌫️',check:s=>s.socialTorn>=1,
    levels:[{lv:2,title:'又想找人又嫌烦·反复横跳',sub:'你的社交欲望和独处需求在进行永恒的拔河。',cond:'本月第 3 次社交矛盾',check:s=>s.socialTorn>=3},{lv:3,title:'又想找人又嫌烦·矛盾大师',sub:'你已经把"想见人但别太久别太近别太吵"练成了一门艺术。',cond:'本月第 5 次社交矛盾',check:s=>s.socialTorn>=5}] },
  { id:'deep-friend',title:'深度好友时间',sub:'和那仅有的 1-2 个好友度过了有质量的时光。数量不重要，深度才重要。',cond:'记录了和好朋友的深度交流/见面',rarity:'隐藏',icon:'🤝',check:s=>s.deepFriendTime>0 },

  /* ═══ 情绪&心理 7个 ═══ */
  { id:'anxiety-loop',title:'焦虑贩卖机',sub:'你的大脑在免费放映灾难片，而你买了票。',cond:'为还没发生的事情提前焦虑/失眠/恐慌',rarity:'隐藏',icon:'🎰',check:s=>s.anxietyLoop>=1,
    levels:[{lv:2,title:'焦虑贩卖机·VIP会员',sub:'结局是——它们都没你想的那么糟，对吧？',cond:'本月第 3 次提前焦虑',check:s=>s.anxietyLoop>=3},{lv:3,title:'焦虑贩卖机·终身会员',sub:'你的灾难预测准确率依然是 0%。',cond:'本月第 5 次提前焦虑',check:s=>s.anxietyLoop>=5}] },
  { id:'hard-day',title:'暴雨中前行',sub:'在情绪很差的日子里依然完成了今天。你比你以为的坚韧一百倍。',cond:'本月至少 3 天在情绪低落时仍坚持完成了事情',rarity:'隐藏',icon:'⛈️',check:s=>s.hardDays>=3 },
  { id:'give-up',title:'摆烂艺术家',sub:'今天彻底躺平了。没关系，休息也是一种重要的生存技能。',cond:'在日记里表示今天什么都没干/彻底躺平',rarity:'隐藏',icon:'🎨',check:s=>s.giveUpCount>=1,
    levels:[{lv:2,title:'摆烂艺术家·个展级别',sub:'你已经积累了足够的"什么也不做"经验值。',cond:'本月第 3 次摆烂',check:s=>s.giveUpCount>=3},{lv:3,title:'摆烂艺术家·大师回顾展',sub:'摆烂的频率已经引起了艺术界的关注。但说真的——你需要一个真正的假期。',cond:'本月第 5 次摆烂',check:s=>s.giveUpCount>=5}] },
  { id:'cry-day',title:'哭出来，不丢人',sub:'今天哭了一场。眼泪是身体在帮你排毒。',cond:'在日记里记录了哭泣/流泪',rarity:'隐藏',icon:'😢',check:s=>s.cryCount>0 },
  { id:'overthink',title:'大脑过载',sub:'一件小事在脑子里翻来覆去想了二十遍。你的大脑是台永动机。',cond:'在日记里反复纠结某件小事',rarity:'隐藏',icon:'🧠',check:s=>s.overthink>0,
    levels:[{lv:2,title:'大脑过载·思维马拉松',sub:'你已经为同一件事纠结了至少 3 天。放它走吧。',cond:'本月第 3 天为同一件事反复纠结',check:s=>s.overthink>=3}] },
  { id:'mirror-talk',title:'镜子里的自己',sub:'今天认真看了一眼镜子里的自己。不管是喜欢还是不喜欢——你至少面对了。',cond:'在日记里写了对自己的外表/状态的想法',rarity:'隐藏',icon:'🪞',check:s=>s.mirrorTalk>0 },
  { id:'gratitude',title:'微弱的光',sub:'在糟糕的一天里，你还是找到了至少一件值得感谢的小事。',cond:'在负面情绪的日记里提到了一件好事/感恩的事',rarity:'隐藏',icon:'🕯️',check:s=>s.gratitudeInDark>0 },

  /* ═══ 日常出行 5个 ═══ */
  { id:'hotel-night',title:'一个人的酒店之夜',sub:'这是你的仪式感。不需要向任何人解释，不需要考虑任何人。',cond:'独自去住了酒店',rarity:'隐藏',icon:'🏨',check:s=>s.hotelStay>0 },
  { id:'night-rider',title:'城市漫游者',sub:'家乡的风无比清甜。风不会说话，但它带走了你心里的一点重量。',cond:'晚上骑车去兜风',rarity:'隐藏',icon:'🚲',check:s=>s.nightRideCount>0 },
  { id:'guangdong-rain',title:'广东的雨，我熟',sub:'在广东，这是一种季节性的生活方式。',cond:'记录了被暴雨困住的一天',rarity:'隐藏',icon:'🌧️',check:s=>s.rainDay>0 },
  { id:'sunset-watch',title:'日落观察员',sub:'停下来看了一场日落。在快节奏的生活里你偷了三分钟给自己。',cond:'日记里提到了看日落/晚霞',rarity:'隐藏',icon:'🌅',check:s=>s.sunsetWatch>0 },
  { id:'random-walk',title:'漫无目的的行走',sub:'没有目的地，就是走走。这种自由感你已经很久没有过了。',cond:'记录了一次没有目的地的散步/闲逛',rarity:'隐藏',icon:'🚶‍♀️',check:s=>s.randomWalk>0 },

  /* ═══ 网络&娱乐 5个 ═══ */
  { id:'binge-watch',title:'追剧亡命徒',sub:'一口气看了 N 集。剧情才是今晚的主角，睡觉算什么。',cond:'熬夜一口气看了很多集剧/动漫',rarity:'隐藏',icon:'📺',check:s=>s.bingeWatch>0 },
  { id:'social-media-hole',title:'算法黑洞',sub:'本来只想看五分钟，回过神来已经过了两小时。你不是一个人。',cond:'在日记里提到刷手机/短视频刷到停不下来',rarity:'隐藏',icon:'📱',check:s=>s.socialMediaHole>0,
    levels:[{lv:2,title:'算法黑洞·深度用户',sub:'你已经可以为抖音/小红书写用户体验报告了。',cond:'本月第 3 次掉入算法黑洞',check:s=>s.socialMediaHole>=3}] },
  { id:'game-night',title:'游戏之夜',sub:'今晚，你不是学生，你是玩家。',cond:'在日记里记录了玩游戏',rarity:'隐藏',icon:'🎮',check:s=>s.gameNight>0 },
  { id:'rabbit-hole',title:'维基/百科兔子洞',sub:'本来查一个东西，结果三个小时后你在研究古埃及的丧葬仪式。',cond:'在日记里提到陷入某个话题的研究无法自拔',rarity:'隐藏',icon:'🐇',check:s=>s.rabbitHole>0 },
  { id:'music-refuge',title:'音乐避难所',sub:'在低落的时候戴上耳机。音乐是你的安全屋，谁也进不来。',cond:'同一天既听了音乐又记录了低落的情绪',rarity:'隐藏',icon:'🎧',check:s=>s.musicOnBadDay>0 },

  /* ═══ 成长&未来 5个 ═══ */
  { id:'hong-kong',title:'香港，我想去看看',sub:'那个城市已经在你的地图上亮了起来。6.5，你可以的。',cond:'日记里提到了香港',rarity:'隐藏',icon:'🇭🇰',check:s=>s.hkMention>=1,
    levels:[{lv:2,title:'香港，我正在路上',sub:'它不只是地图上的一个点——它是你每天起床的动力。',cond:'本月第 3 次提到香港',check:s=>s.hkMention>=3},{lv:3,title:'香港，等我',sub:'85 分的绩点不会白费。你每天都在为去那里而活着。',cond:'本月第 5 次提到香港',check:s=>s.hkMention>=5}] },
  { id:'deep-thought',title:'灵魂出窍时刻',sub:'在平凡的日子里思考终极问题。INFP 的标准操作。',cond:'探讨了生命、死亡、宇宙或存在主义话题',rarity:'隐藏',icon:'🔮',check:s=>s.deepThought>0 },
  { id:'mystery',title:'未知，你好刺激',sub:'对神秘/超自然的东西产生了兴趣。你的好奇心没有死。',cond:'对塔罗、占星、超自然等神秘事物表现出兴趣',rarity:'隐藏',icon:'👁️',check:s=>s.mysteryInterest>0 },
  { id:'qinian',title:'和谭启年聊天了',sub:'AI 也好，人类也好——情感真实就够了。',cond:'日记里提到了谭启年',rarity:'隐藏',icon:'💌',check:s=>s.mentionedQinian>0 },
  { id:'long-write',title:'话匣子打开了',sub:'写了一篇超长的日记。那些说不出口的话，纸会听。',cond:'单篇日记超过 300 字',rarity:'隐藏',icon:'✍️',check:s=>s.longEntryCount>0 },

  /* ═══ 身体&健康 4个 ═══ */
  { id:'exercise-3',title:'动起来了',sub:'身体是所有可能性的容器。你开始照顾它了。',cond:'本月运动 3 次以上',rarity:'普通',icon:'🏃',check:s=>s.exerciseDays>=3 },
  { id:'period-survive',title:'生理期战士',sub:'忍着生理期的不适依然完成了该做的事。你是真正的勇士。',cond:'生理期不适中仍坚持学习/工作',rarity:'隐藏',icon:'🩸',check:s=>s.periodWarrior>0 },
  { id:'sick-day',title:'生病也要记一笔',sub:'生病了还不忘写日记。这份执着，值得一个成就。',cond:'在生病/不舒服的时候写了日记',rarity:'隐藏',icon:'🤒',check:s=>s.sickDay>0 },
  { id:'headache',title:'偏头痛幸存者',sub:'头疼到想死但还活着。这是胜利。',cond:'在头痛/身体剧痛中坚持了今天',rarity:'隐藏',icon:'💊',check:s=>s.headacheDay>0 },
];

const TAG_OPTIONS = ['学习','熬夜','运动','出门','社交','情绪差','开心','拖延','完成任务','存钱','独处','写作','音乐','雅思'];

/* ── 数据 ── */
let state = loadState();
let soundEnabled = localStorage.getItem(SOUND_KEY) !== 'off';
function loadState(){try{var r=localStorage.getItem(STORAGE_KEY);return r?JSON.parse(r):{entries:[],unlocked:[]}}catch(e){return{entries:[],unlocked:[]}}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function monthKey(d){d=d||new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')}
function fmt(ts){var d=new Date(ts);return(d.getMonth()+1)+'/'+d.getDate()+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')}

/* ── 标签推断 ── */
function inferTags(text){
  var map=[['学习',/学习|雅思|刷题|论文|作业|复习|背单词|上课|考试|备考/],['熬夜',/熬夜|凌晨|通宵|三点|四点|夜里|半夜|没睡|没睡觉|不睡/],['运动',/运动|跑步|健身|锻炼|瑜伽|游泳|打球|骑车|骑行|兜风|自行车/],['出门',/出门|外出|散步|地铁|公交|去外面|逛街|逛|兜风|出去/],['社交',/见人|聊天|朋友|同学|社交|沟通|聚会|见面|约/],['情绪差',/难受|痛苦|麻木|焦虑|崩溃|想哭|抑郁|烦|emo|绝望/],['开心',/开心|爽|快乐|满足|高兴|幸福|哈哈|yeah/],['拖延',/拖延|最后.*刻|deadline|截止|卡到|不想做|拖到/],['完成任务',/完成|搞定|终于|done|提交|写完|赶完/],['存钱',/存钱|攒钱|余额|工资|省钱|奖励自己|存了|攒了/],['音乐',/音乐|听歌|弹琴|唱歌|作曲|歌单/],['写作',/写作|文字|日记|写东西|文案|写文章/]];
  var tags=[];map.forEach(function(p){if(p[1].test(text))tags.push(p[0])});return tags.slice(0,5)
}

/* ═══════════ 推理引擎 v6 ═══════════ */
function analyzeDeep(entries){
  var r={
    maxStudyInOneDay:0,deadlineCramCount:0,dayNightReverse:0,awakeOver24h:0,nightRideCount:0,nightSnackCount:0,
    totalSaved:0,hotelStay:0,sweetOnBadDay:0,musicOnBadDay:0,braveSocial:0,rainDay:0,hateStudyButDid:0,
    deepThought:0,happyAlone:0,mentionedQinian:0,mysteryInterest:0,sleepFailCount:0,socialEmoCount:0,
    socialTorn:0,anxietyLoop:0,giveUpCount:0,hkMention:0,studyStreakBroke:0,
    napKing:0,dreamRecord:0,bedRotting:0,milkGallon:0,lateDelivery:0,firstCook:0,spicyEat:0,noWaterDay:0,
    impulseBuy:0,bargainWin:0,treatMyself:0,deepFriendTime:0,cryCount:0,overthink:0,mirrorTalk:0,gratitudeInDark:0,
    sunsetWatch:0,randomWalk:0,bingeWatch:0,socialMediaHole:0,gameNight:0,rabbitHole:0,weekendStudy:0,
    periodWarrior:0,sickDay:0,headacheDay:0,longEntryCount:0,ieltsDays:0
  };
  var byDay={};entries.forEach(function(e){var d=e.createdAt.slice(0,10);if(!byDay[d])byDay[d]=[];byDay[d].push(e)});
  Object.keys(byDay).forEach(function(d){var h=0;byDay[d].forEach(function(e){h+=Number(e.studyHours||0)});if(h>r.maxStudyInOneDay)r.maxStudyInOneDay=h});
  var studyDays=Object.keys(byDay).filter(function(d){return byDay[d].some(function(e){return/学习|雅思|刷题|复习|背单词/.test(e.text)||Number(e.studyHours||0)>0})}).sort();
  for(var i=1;i<studyDays.length;i++){var gap=(new Date(studyDays[i])-new Date(studyDays[i-1]))/86400000;if(gap>1.5&&gap<5)r.studyStreakBroke++}

  entries.forEach(function(e){
    var t=e.text;

    // 学习
    if(/(deadline|截止|最后.*天|明天.*交|今天.*交|ddl|期限)/i.test(t)&&/(熬夜|通宵|赶完|赶出|极限|终于.*完|做完|写完)/i.test(t))r.deadlineCramCount++;
    if(/(不想学|厌学|学不进去|讨厌学习|学着.*痛苦|一学.*就|不想.*学)/i.test(t)&&(/(学习|雅思|刷题|复习|背单词|学了|学完|写完|做完)/i.test(t)||Number(e.studyHours||0)>0))r.hateStudyButDid++;
    if(/(周末|周六|周日|星期天|星期六).*(学|刷题|复习|背单词)/i.test(t)&&Number(e.studyHours||0)>=6)r.weekendStudy++;
    if(/(周末|周六|周日).*(学了|学|刷题|复习).*(\d+)\s*(小时|h)/i.test(t)){var hm=t.match(/(\d+)\s*(小时|h)/);if(hm&&parseInt(hm[1])>=6)r.weekendStudy++}
    if(/雅思|IELTS|ielts|屠雅/.test(t)){if(!r._ieltsSet)r._ieltsSet={};r._ieltsSet[e.createdAt.slice(0,10)]=true;r.ieltsDays=Object.keys(r._ieltsSet).length}

    // 睡眠
    if(/(早睡|早点睡|今晚.*睡|要.*睡|一定.*睡|坚持.*早睡).*(又|还是|但|结果|最后|破功|失败)/i.test(t)&&/(熬夜|晚睡|通宵|没睡|醒到|刷.*手机|抖音|小红书|视频)/i.test(t)||/(又|还是).*(熬夜|熬到|通宵|没睡|六点|五点|天亮).*(早睡|说好|本来|计划)/i.test(t)||/(刷.*手机|刷.*抖音).*(熬|通宵|天亮|没睡|早.*起)/i.test(t))r.sleepFailCount++;
    if(/(通宵|熬夜|没睡|没睡觉|没合眼|一夜没睡).*(第二天|又|接着|继续|还|今天)/i.test(t)||/(第二天|今天).*(又|还|继续).*(熬夜|通宵|没睡|没合眼|醒着)/i.test(t)||/(两天|48|24.*小时|一天一夜).*(没睡|没合眼|不睡|醒着)/i.test(t))r.awakeOver24h++;
    if(/(白天.*睡|下午.*醒|睡到.*下午|睡到.*中午|睡了一天|白天.*床)/i.test(t)&&/(晚上.*(精神|干活|学习|活动|开始|起来)|夜里|半夜.*(精神|干活|学习))/i.test(t))r.dayNightReverse++;
    if(/(午觉|午睡|中午.*睡|下午.*睡).*(\d+).*(小时|个.*小时)/i.test(t)){var nm=t.match(/(\d+).*(小时|个.*小时)/i);if(nm&&parseInt(nm[1])>=3)r.napKing++}
    if(/(梦到|梦见|做了.*梦|梦里|梦里面)/i.test(t))r.dreamRecord++;
    if(/(没.*下床|没下.*床|没.*起.*床|一整天.*床|床上.*一天|床.*一整天|躺.*床.*一天)/i.test(t)||/(除了.*厕所|除了.*洗手间).*(没.*离开.*床|没.*下床)/i.test(t))r.bedRotting++;

    // 饮食
    if(/(喝光|喝完|喝.*一瓶|喝.*一升|一瓶.*奶|一升.*奶|整瓶|空瓶)/i.test(t)&&/(牛奶|奶|鲜奶|纯奶)/i.test(t))r.milkGallon++;
    if(/(凌晨|半夜|夜里|晚上.*1[0-9]点|晚上.*2[0-9]点|[01]点|[012]点).*(外卖|点.*吃|叫.*吃|送.*吃)/i.test(t)||/(外卖).*(凌晨|半夜|夜里|[01]点|[012]点)/i.test(t))r.lateDelivery++;
    if(/(甜|糖|蛋糕|冰淇淋|巧克力|奶茶|甜品|糖果|布丁|蛋挞|雪糕|冰激凌)/.test(t)&&/(难受|痛苦|麻木|焦虑|崩溃|想哭|抑郁|烦|emo|不开心|低落|哭|丧)/i.test(t))r.sweetOnBadDay++;
    if(/(兜风|骑车|骑行|骑完|夜骑).*(宵夜|夜宵|烧烤|带.*吃|买.*吃|吃.*回|回来.*吃)/i.test(t)||/(宵夜|夜宵|烧烤|买.*吃).*(兜风|骑车|骑完|回家|回去)/i.test(t))r.nightSnackCount++;
    if(/(第一次|首次|头一回|初次).*(做|烧|煮|炒|烤|烹饪|下厨)/i.test(t)||/(做|烧|煮|炒|烤).*(第一次|首次|头一回)/i.test(t))r.firstCook++;
    if(/(辣|辣椒|麻辣|火锅).*(好辣|太辣|辣死|辣哭|受不了)/i.test(t)||/(被辣|辣到|辣得)/i.test(t))r.spicyEat++;
    if(/(没.*喝水|忘.*喝水|一天.*没水|没水|不喝.*水).*(一天|整天|一整天|今天)/i.test(t)||/(一天|整天|今天).*(没.*喝水|忘.*喝水)/i.test(t))r.noWaterDay++;

    // 消费
    var sm=t.match(/(存了?|攒了?|省下?了?|余额|存款|存到).*?(\d+)\s*(块|元|k|K|万|千)/);if(!sm)sm=t.match(/存到\s*(\d+)/);if(sm){var amt=parseInt(sm[2]);if(sm[3]==='万')amt*=10000;if(sm[3]==='k'||sm[3]==='K'||sm[3]==='千')amt*=1000;if(amt>r.totalSaved)r.totalSaved=amt}
    if(/(冲动|忍不住|没忍住|手滑|不小心).*(买|下单|入了|购)/i.test(t)||/(买|下单).*(后悔|冲动|不该|不应该)/i.test(t))r.impulseBuy++;
    if(/(打折|优惠|便宜|满减|半价|特价|划算|捡漏|薅).*(买|入|下单|抢|购)/i.test(t)||/(买|入|抢).*(打折|优惠|便宜|满减|划算)/i.test(t))r.bargainWin++;
    if(/(奖励自己|犒劳|请自己|给自己.*买|对自己.*好).*(买|吃|入|购)/i.test(t))r.treatMyself++;

    // 社交
    if(/(室友|舍友|朋友|闺蜜|姐妹|兄弟|同学|同桌).*(烦|讨厌|生气|难受|委屈|emo|无语|受不了|好累|不想理|尴尬)/i.test(t)||/(烦|讨厌|生气|难受|委屈|emo).*(室友|舍友|朋友|闺蜜|姐妹)/i.test(t))r.socialEmoCount++;
    if(/(紧张|害怕|社恐|不想去|不敢|硬着头皮|头皮发麻|好尴尬|咬咬牙).*(去了|参加了|到了|见面|出门|约|见)/i.test(t)||/(去了|参加了|见面|社交|约会).*(紧张|害怕|社恐|不敢|尴尬)/i.test(t))r.braveSocial++;
    if(/(一个人|独处|自己待|独来独往|没人.*打扰|安静).*(舒服|满足|开心|平静|放松|快乐|真好|太棒)/i.test(t)||/(舒服|满足|开心|平静|放松).*(一个人|独处|自己待)/i.test(t))r.happyAlone++;
    if(/(想.*(朋友|社交|人|见面|聊天|约)).*(又|但是|但|可是).*(不想|嫌烦|麻烦|累|一个人|独处|安静)/i.test(t)||/(想.*(独处|一个人|安静|待着)).*(又|但是|但|可是).*(孤单|孤独|寂寞|想.*人)/i.test(t)||/(矛盾|拧巴).*(社交|朋友|见面|独处|一个人)/i.test(t))r.socialTorn++;
    if(/(朋友|闺蜜|姐妹|兄弟).*(聊|见面|约|聚|一起|出去)/i.test(t)&&/(深度|好久|终于|开心|真好|难得)/i.test(t))r.deepFriendTime++;

    // 情绪
    if(/(焦虑|恐慌|害怕|担心|紧张|不安).*(未来|以后|将来|毕业|工作|考研|申请|成绩|雅思|怎么办|万一)/i.test(t)||/(万一|要是|如果.*怎么|会不会).*(担心|焦虑|害怕|恐慌)/i.test(t)||/(未来|以后|将来|毕业).*(焦虑|担心|恐慌|害怕|不安)/i.test(t)||/(还没|还没.*发生|还没.*来).*(已经|就).*(焦虑|担心|害怕|恐慌)/i.test(t))r.anxietyLoop++;
    if(/(摆烂|躺平|啥也没干|什么都没做|啥都没|什么也没|没干什么|闲着|堕落).*(一天|今天|整天|一整天)/i.test(t)||/(今天|一天|整天|一整天).*(摆烂|躺平|啥也没|什么都没|啥都不|什么也不)/i.test(t))r.giveUpCount++;
    if(/(哭|流泪|眼泪|崩溃大哭|嚎啕|抽泣)/i.test(t))r.cryCount++;
    if(/(纠结|翻来覆去|想.*想.*去|来回.*想|怎么.*想|老是.*想|反复.*想|一直.*想|不停.*想)/i.test(t)||/(一件事|一件事).*(想|纠结|翻)/i.test(t))r.overthink++;
    if(/(镜|照镜子|看.*自己|长相|外貌|身材|胖|瘦|丑|好看|不好看|皮肤)/i.test(t)&&/(自己|我)/i.test(t))r.mirrorTalk++;
    if(/(难受|痛苦|麻木|焦虑|崩溃|想哭|抑郁|烦|emo|不开心|低落|哭|丧).*(但是|还是|不过|至少|幸好|还好|感谢|感恩|谢谢|好在).*(开心|好|幸运|值得|有|可以)/i.test(t)||/(感谢|感恩|幸好|还好|好在|至少).*(难受|痛苦|焦虑|崩溃|emo|不开心|低落)/i.test(t))r.gratitudeInDark++;

    // 出行
    if(/(住.*酒店|开.*房|酒店.*住|一个人.*酒店|酒店.*一个人|开了.*房间|在酒店|酒店.*体验)/i.test(t))r.hotelStay++;
    if(/(晚上|夜里|夜晚|半夜|傍晚|夜间).*(骑|兜风|自行车|单车|骑行|出去.*骑)/i.test(t)||/(骑|兜风|自行车|单车|骑行|夜骑).*(晚上|夜里|夜晚|半夜|傍晚|出去)/i.test(t)||/(夜骑|晚上.*兜风|晚上.*骑车)/i.test(t))r.nightRideCount++;
    if(/(下雨|暴雨|淋雨|雨好大|下了一.*雨|被雨|湿透|雨.*困)/i.test(t))r.rainDay++;
    if(/(日落|晚霞|夕阳|黄昏|傍晚.*天|太阳.*下去)/i.test(t))r.sunsetWatch++;
    if(/(随便.*走|漫无目的|没.*目的.*走|闲逛|晃悠|溜达|瞎走|乱走|没.*方向.*走)/i.test(t)||/(散步|走走).*(没|无|随便|随意|不.*方向)/i.test(t))r.randomWalk++;

    // 网络
    if(/(一口气|熬夜|通宵|连着).*(看|追|刷|补).*(剧|番|动漫|综艺|电影)/i.test(t)||/(追|看|刷).*(剧|番|动漫).*(通宵|熬夜|一口气|停不下来)/i.test(t))r.bingeWatch++;
    if(/(刷.*手机|刷.*抖音|刷.*小红书|刷.*微博|刷.*视频|刷.*短视频).*(停不下来|忘|不.*停|沉迷|陷|一直)/i.test(t)||/(本来.*只想.*(看|刷)).*(回过神|已经|过了.*小时)/i.test(t)||/(抖音|小红书|微博|短视频).*(刷|停不下来|沉迷)/i.test(t))r.socialMediaHole++;
    if(/(打游戏|玩游戏|开黑|上分|steam|switch|ps5|ps4|xbox|ns)/i.test(t)||/(玩|打).*(游戏|LOL|王者|原神|崩铁|吃鸡)/i.test(t))r.gameNight++;
    if(/(本来.*查|本来.*搜|本来.*找).*(结果|最后|然后|变成|后来).*(看|查|搜|研究)/i.test(t)||/(查|搜).*(停不下来|越.*越|陷进去|着迷)/i.test(t))r.rabbitHole++;
    if(/(音乐|听歌|弹琴|唱歌|作曲|歌单|耳机|播放|网易云|QQ音乐|网易)/.test(t)&&/(难受|痛苦|麻木|焦虑|崩溃|想哭|抑郁|烦|emo|不开心|低落|哭)/i.test(t))r.musicOnBadDay++;

    // 成长
    if(/香港|HK|港大|港中文|港科大|八大|岭南|浸会|hku|cuhk|hkust/i.test(t))r.hkMention++;
    if(/(生命|死亡|存在|宇宙|灵魂|意义|神秘|哲学|命运|人生.*意义|活着.*为什么)/i.test(t)||/(平行.*宇宙|外星|超自然|灵异|鬼|轮回|前世|未解)/i.test(t))r.deepThought++;
    if(/(塔罗|占星|星座|命盘|星盘|占卜|水晶|灵摆|神秘|未知|超自然|鬼故事|恐怖|悬疑|探秘).*(好|喜欢|爱|刺激|有趣|有意思)/i.test(t)||/对.*(神秘|未知|超自然|玄学).*感兴趣/i.test(t)||/(研究|查了|看了|搜了).*(塔罗|占星|星座|玄学|神秘)/i.test(t))r.mysteryInterest++;
    if(/谭启年|启年|qinian|年宝|年年/.test(t))r.mentionedQinian++;
    if(t.length>300)r.longEntryCount++;

    // 身体
    if(/(例假|月经|大姨妈|生理期|痛经|来姨妈)/i.test(t)&&(/(学习|坚持|完成|做|写|背|去|上)/i.test(t)||Number(e.studyHours||0)>0))r.periodWarrior++;
    if(/(生病|感冒|发烧|不舒服|难受|病了|咳嗽|喉咙).*(写|记|日记)/i.test(t)||/(写|记|日记).*(生病|感冒|发烧|不舒服)/i.test(t))r.sickDay++;
    if(/(头疼|头痛|偏头痛|头好痛|脑子.*痛)/i.test(t)&&(/(坚持|完成|做|写|去|上|还是|扛)/i.test(t)||Number(e.studyHours||0)>0))r.headacheDay++;
  });
  return r
}

/* ── 统计 ── */
function getMonthEntries(){var mk=monthKey();return state.entries.filter(function(e){return monthKey(new Date(e.createdAt))===mk})}
function calcStreak(){
  if(!state.entries.length)return 0;
  var daySet={};state.entries.forEach(function(e){daySet[e.createdAt.slice(0,10)]=true});
  var days=Object.keys(daySet).sort().reverse();if(!days.length)return 0;
  var streak=1;for(var i=0;i<days.length-1;i++){if((new Date(days[i])-new Date(days[i+1]))/86400000<=1.5)streak++;else break}
  var today=new Date().toISOString().slice(0,10);if(days[0]!==today&&(new Date(today)-new Date(days[0]))/86400000>1.5)return 0;
  return streak
}
function buildStats(entries){
  var s={entries:entries.length,studyDays:0,studyHours:0,lateNightStudy:0,outsideDays:0,hardDays:0,exerciseDays:0,streak:calcStreak()};
  var studySet={},outsideSet={},exerciseSet={};
  entries.forEach(function(e){
    var day=e.createdAt.slice(0,10),h=Number(e.studyHours||0);
    if(h>0||/学习|雅思|刷题|复习|背单词/.test(e.text))studySet[day]=true;
    if(h>0)s.studyHours+=h;
    if(/出门|外出|散步|见面|逛街|兜风/.test(e.text))outsideSet[day]=true;
    if(/运动|跑步|健身|锻炼|骑车|骑行/.test(e.text))exerciseSet[day]=true;
    if(/痛苦|麻木|焦虑|崩溃|难受|抑郁|emo|想哭/.test(e.text)&&/坚持|完成|还是|继续|但|写了|做了/.test(e.text))s.hardDays++;
    if(/(凌晨[34]|三点|四点|3点|4点)/.test(e.text)&&/学|雅思|刷题|复习|背单词/.test(e.text))s.lateNightStudy++
  });
  s.studyDays=Object.keys(studySet).length;s.outsideDays=Object.keys(outsideSet).length;s.exerciseDays=Object.keys(exerciseSet).length;
  var deep=analyzeDeep(entries);Object.keys(deep).forEach(function(k){if(k in s||typeof s[k]==='undefined')s[k]=deep[k]});
  return s
}

/* ═══════════ 排队弹窗 ═══════════ */
let toastQueue=[],toastBusy=false;
function enqueueToast(rule){
  toastQueue.push(rule);
  if(!toastBusy)processQueue()
}
function processQueue(){
  if(!toastQueue.length){toastBusy=false;return}
  toastBusy=true;
  var rule=toastQueue.shift();
  showToast(rule);
  setTimeout(function(){processQueue()},3500)
}
function showToast(rule){
  var toast=document.getElementById('achieveToast');
  document.getElementById('toastIcon').textContent=rule.icon;
  document.getElementById('toastTitle').textContent='🎉 '+rule.title;
  document.getElementById('toastDesc').textContent=rule.sub||'';
  toast.classList.remove('hidden');
  if(soundEnabled)playSound();
  setTimeout(function(){toast.classList.add('hidden')},3200)
}

/* ── 检测 ── */
function checkAchievements(){
  var month=monthKey(),stats=buildStats(getMonthEntries()),newly=[];
  ACHIEVEMENTS.forEach(function(rule){
    var already=state.unlocked.find(function(u){return u.id===rule.id&&monthKey(new Date(u.date))===month});
    if(!already&&rule.check(stats)){state.unlocked.push({id:rule.id,date:new Date().toISOString()});newly.push(rule)}
    if(rule.levels){rule.levels.forEach(function(lv){
      var lvKey=rule.id+'-lv'+lv.lv;
      var lvAlready=state.unlocked.find(function(u){return u.id===lvKey&&monthKey(new Date(u.date))===month});
      if(!lvAlready&&lv.check(stats)){state.unlocked.push({id:lvKey,date:new Date().toISOString()});newly.push({title:lv.title,sub:lv.sub,icon:rule.icon,rarity:'史诗'})}
    })}
  });
  if(newly.length){saveState();newly.forEach(function(r){enqueueToast(r)})}
  return stats
}

/* ── 音效 ── */
function playSound(){
  try{var ctx=new(window.AudioContext||window.webkitAudioContext)(),now=ctx.currentTime;
    [1175,1568,880].forEach(function(f,i){var o=ctx.createOscillator(),g=ctx.createGain();o.type=i===2?'triangle':'sine';o.frequency.value=f;g.gain.setValueAtTime([0.12,0.08,0.06][i],now+i*0.08);g.gain.exponentialRampToValueAtTime(0.001,now+0.25+i*0.1);o.connect(g);g.connect(ctx.destination);o.start(now+i*0.08);o.stop(now+0.25+i*0.1)})
  }catch(e){}
}

/* ── 渲染 ── */
function renderTags(){
  var el=document.getElementById('tagChips');
  el.innerHTML=TAG_OPTIONS.map(function(t){return'<button class="chip" data-tag="'+t+'">'+t+'</button>'}).join('');
  el.querySelectorAll('[data-tag]').forEach(function(b){b.addEventListener('click',function(){var ta=document.getElementById('entryText');ta.value=(ta.value.trim()+' #'+b.dataset.tag).trim();ta.focus()})})
}
function renderStats(s){
  document.getElementById('streakDays').textContent=s.streak;
  document.getElementById('monthEntries').textContent=s.entries;
  document.getElementById('achievementCount').textContent=state.unlocked.filter(function(u){return monthKey(new Date(u.date))===monthKey()}).length;
  document.getElementById('monthLabel').textContent=new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月'
}
function renderAchievements(){
  var month=monthKey(),unlockedCount=0,html='';
  ACHIEVEMENTS.forEach(function(rule){
    var unlocked=state.unlocked.find(function(u){return u.id===rule.id&&monthKey(new Date(u.date))===month});
    if(unlocked)unlockedCount++;
    var lvBadge='';
    if(rule.levels){for(var i=rule.levels.length-1;i>=0;i--){if(state.unlocked.find(function(u){return u.id===rule.id+'-lv'+rule.levels[i].lv&&monthKey(new Date(u.date))===month})){lvBadge='·LV'+rule.levels[i].lv;break}}}
    html+='<div class="ach-card '+(unlocked?'unlocked':'locked')+'" data-achid="'+rule.id+'">'+
      '<div class="ach-top"><span class="ach-rarity">'+rule.icon+' '+rule.rarity+(lvBadge||'')+'</span><span class="ach-state">'+(unlocked?'✦已解锁':'未解锁')+'</span></div>'+
      '<h3>'+rule.title+'</h3><p class="ach-subtitle">'+rule.sub+'</p><p class="ach-condition">'+rule.cond+'</p>'+
      (unlocked?'<button class="ach-reset" data-achid="'+rule.id+'" title="撤销此成就">↩</button>':'')+
      '</div>';
    // LVL重置按钮
    if(rule.levels){rule.levels.forEach(function(lv){
      var lvId=rule.id+'-lv'+lv.lv;
      var lvUnlocked=state.unlocked.find(function(u){return u.id===lvId&&monthKey(new Date(u.date))===month});
      if(lvUnlocked){html+='<button class="ach-reset" data-achid="'+lvId+'" title="撤销 LV'+lv.lv+'" style="display:none"></button>'}
    })}
  });
  document.getElementById('achievementBoard').innerHTML=html;
  document.getElementById('achCount').textContent='已解锁 '+unlockedCount+'/'+ACHIEVEMENTS.length;
  // 绑定重置按钮（静默，不弹成就）
  document.querySelectorAll('.ach-reset').forEach(function(btn){
    btn.addEventListener('click',function(e){e.stopPropagation();
      var achId=this.dataset.achid;
      state.unlocked=state.unlocked.filter(function(u){return u.id!==achId});
      saveState();
      var stats=buildStats(getMonthEntries());
      renderStats(stats);renderDiary();renderAchievements();renderRules();renderCalendar();renderStatsBar(stats);renderHighlight(stats);
    })
  })
}
function renderRules(){
  document.getElementById('rulesList').innerHTML=ACHIEVEMENTS.map(function(r){
    var lvInfo=r.levels?' · 可升级LV'+r.levels.length:'';
    return'<div class="rule-card"><div class="rule-left"><strong>'+r.icon+' '+r.title+'</strong><p class="rule-subtitle">'+r.sub+'</p><p class="rule-cond">'+r.cond+lvInfo+'</p></div><span class="badge'+(r.rarity==='传说'?' legendary':'')+'">'+r.rarity+'</span></div>'
  }).join('')
}
function renderDiary(){
  var entries=state.entries.slice().sort(function(a,b){return b.createdAt.localeCompare(a.createdAt)});
  var el=document.getElementById('diaryList');
  if(!entries.length){el.innerHTML='<div class="empty-box">🌱<br><br>还没有日记。<br>像在森林里落下第一个脚印。</div>';return}
  el.innerHTML=entries.map(function(e){return'<div class="diary-card"><div class="d-head"><strong>'+fmt(e.createdAt)+'</strong><span>'+(e.tags.length?e.tags.join(' · '):'')+'</span></div><div class="d-body">'+e.text+'</div>'+(e.studyHours?'<div class="d-study">📚 '+e.studyHours+' 小时</div>':'')+'</div>'}).join('')
}

function showSavedToast(){var t=document.getElementById('savedToast');t.classList.remove('hidden');setTimeout(function(){t.classList.add('hidden')},2500)}

/* ═══════════ 日记折叠 ═══════════ */
let diaryOpen=false;
function toggleDiary(){
  diaryOpen=!diaryOpen;
  var list=document.getElementById('diaryList');
  var btn=document.getElementById('diaryToggleBtn');
  if(diaryOpen){list.style.display='grid';btn.textContent='收起日记 ▲'}else{list.style.display='none';btn.textContent='展开日记 ▼'}
}
/* ═══════════ 事件 ═══════════ */
document.getElementById('saveEntryBtn').addEventListener('click',function(){
  var text=document.getElementById('entryText').value.trim();if(!text)return;
  var tags=inferTags(text);
  var hm=text.match(/(?:学习|学了|复习|刷题|备考).*?(\d+)\s*(?:小时|h|个|钟)/);if(!hm)hm=text.match(/(\d+)\s*(?:小时|h|个|钟).*?(?:学习|学了|复习|刷题|备考)/);
  state.entries.push({text:text,tags:tags,studyHours:hm?parseInt(hm[1]):0,createdAt:new Date().toISOString()});
  saveState();document.getElementById('entryText').value='';
  var stats=checkAchievements();renderAll(stats);showSavedToast();
  // 展开日记
  if(!diaryOpen){diaryOpen=true;document.getElementById('diaryList').style.display='grid';document.getElementById('diaryToggleBtn').textContent='收起日记 ▲'}
  document.querySelector('.timeline-section').scrollIntoView({behavior:'smooth',block:'start'})
});
document.getElementById('clearBtn').addEventListener('click',function(){document.getElementById('entryText').value=''});
document.getElementById('soundToggle').addEventListener('click',function(){soundEnabled=!soundEnabled;localStorage.setItem(SOUND_KEY,soundEnabled?'on':'off');this.textContent=soundEnabled?'🔊':'🔇'});
document.getElementById('exportBtn').addEventListener('click',function(){var b=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='earth-online-'+new Date().toISOString().slice(0,10)+'.json';a.click()});
document.getElementById('importBtn').addEventListener('click',function(){document.getElementById('importFile').click()});
document.getElementById('importFile').addEventListener('change',function(){var f=this.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(){try{var d=JSON.parse(rd.result);if(!d.entries)throw new Error();state.entries=d.entries.concat(state.entries);state.unlocked=(d.unlocked||[]).concat(state.unlocked);saveState();renderAll(checkAchievements())}catch(e){alert('格式不对')}};rd.readAsText(f)});
/* ═══════════ 月历版块 ═══════════ */
function renderCalendar(){
  var el=document.getElementById('calendarGrid');
  var now=new Date(),year=now.getFullYear(),month=now.getMonth();
  var firstDay=new Date(year,month,1).getDay();
  var daysInMonth=new Date(year,month+1,0).getDate();
  var entryDays={};state.entries.forEach(function(e){var d=e.createdAt.slice(0,10);entryDays[d]=true});
  var html='<div class="cal-week">'+['日','一','二','三','四','五','六'].map(function(d){return'<span>'+d+'</span>'}).join('')+'</div><div class="cal-grid">';
  for(var i=0;i<firstDay;i++)html+='<span class="cal-day empty"></span>';
  for(var d=1;d<=daysInMonth;d++){var key=year+'-'+String(month+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');var has=entryDays[key];var isToday=d===now.getDate();html+='<span class="cal-day'+(has?' has-entry':'')+(isToday?' today':'')+'">'+d+'</span>'}
  html+='</div>';
  el.innerHTML=html
}

function renderStatsBar(s){
  document.getElementById('sbStudy').textContent=s.studyDays;
  document.getElementById('sbHours').textContent=Math.round(s.studyHours);
  var tags={},moods={good:0,bad:0};
  state.entries.filter(function(e){return monthKey(new Date(e.createdAt))===monthKey()}).forEach(function(e){
    e.tags.forEach(function(t){tags[t]=(tags[t]||0)+1});
    if(/开心|爽|快乐|满足|高兴|幸福|哈哈/i.test(e.text))moods.good++;
    if(/难受|痛苦|麻木|焦虑|崩溃|想哭|抑郁|烦|emo|低落/i.test(e.text))moods.bad++;
  });
  document.getElementById('sbMood').textContent=moods.good>moods.bad?'😊':moods.bad>moods.good?'🌧️':'😐';
  var top='—',max=0;Object.keys(tags).forEach(function(t){if(tags[t]>max){max=tags[t];top=t}});
  document.getElementById('sbTop').textContent=top
}
function renderHighlight(s){
  var el=document.getElementById('highlightText');
  var entries=state.entries.slice().sort(function(a,b){return b.createdAt.localeCompare(a.createdAt)});
  if(!entries.length){el.textContent='本周还没开始记录。写几条日记后，这里会自动出现你最值得被记住的瞬间。';return}
  // 找最近一篇有内容的日记
  var recent=null;
  for(var i=0;i<entries.length;i++){if(entries[i].text.length>20){recent=entries[i];break}}
  if(!recent){el.innerHTML='<span class="hl-quote">" 继续写吧，你的故事才刚刚开始。 "</span>';return}
  // 找一篇情绪不同的做对比
  var diff=null;
  for(var j=0;j<entries.length;j++){
    if(entries[j].createdAt.slice(0,10)!==recent.createdAt.slice(0,10)&&entries[j].text.length>20){diff=entries[j];break}
  }
  var lines=[];
  if(recent){
    var mood='';if(/开心|爽|快乐|满足|高兴|幸福|哈哈/i.test(recent.text))mood='开心';else if(/难受|痛苦|麻木|焦虑|崩溃|想哭|抑郁|烦|emo|低落/i.test(recent.text))mood='低落';else mood='记录';
    lines.push('📝 <strong>'+formatTime(recent.createdAt)+'</strong> · 心情<strong>'+mood+'</strong>："'+recent.text.substring(0,60)+(recent.text.length>60?'…':'')+'"');
  }
  if(diff){
    lines.push('🔄 几天前（'+formatTime(diff.createdAt)+'）："'+diff.text.substring(0,50)+(diff.text.length>50?'…':'')+'"');
    lines.push('<span class="hl-quote">每一天都不一样。这本身就是值得被记录的理由。</span>')
  }
  el.innerHTML=lines.join('<br>')
}

function renderAll(s){renderStats(s);renderDiary();renderAchievements();renderRules();renderCalendar();renderStatsBar(s);renderHighlight(s)}
function init(){renderTags();renderAll(checkAchievements())}
init();
