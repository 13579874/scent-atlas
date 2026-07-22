const fragranceDB = [
  {
    fragranceNames: ['法国情人', 'French Lover'],
    brand: 'Frédéric Malle / 馥马尔',
    brandAliases: ['frederic malle', 'frédéric malle', '馥马尔', 'f.malle'],
    title: '法国情人',
    gender: '中性 / 偏男性',
    intensity: 4,
    season: '秋冬 / 夜晚',
    smell: '带有辛香、木质、乳香和冷感绿意的气质。整体像“克制、锋利、带距离感的高级感”。',
    fragranceFamily: '木质辛香调',
    top: ['杜松', '粉红胡椒', '乳香'],
    middle: ['鸢尾', '劳丹脂', '雪松'],
    base: ['焚香', '麝香', '木质琥珀'],
    people: ['喜欢高级冷感的人', '偏成熟审美的人', '喜欢小众木质香的人'],
    peopleTags: ['冷感气质', '成熟审美', '小众偏好', '边界感', '夜色氛围'],
    scenes: ['冬季通勤', '晚宴', '夜晚约会', '展览'],
    similar: ['Baccarat Rouge 540', 'Tom Ford'],
    description: '一支非常有态度的木质香，适合想表达气质与边界感的人。',
    imageSeed: 'frederic-malle-french-lover',
    palette: ['#6a5240', '#c8b08a', '#1f1a16', '#ede2cf'],
    notesIntro: '这是一支以冷冽木质为骨架、以辛香和焚香为神韵的作品。前段并不喧哗，而是用绿意与胡椒制造一种锋利的第一印象；中段鸢尾与雪松逐渐把轮廓拉得更克制、更有距离感；尾调则落进焚香、麝香与木质琥珀的深处，形成沉静、利落又有余韵的嗅觉体验。',
  },
  {
    fragranceNames: ['无人区玫瑰', "rose of no man's land"],
    brand: 'Byredo / 百瑞德',
    brandAliases: ['byredo', '百瑞德'],
    title: '无人区玫瑰',
    gender: '偏女性 / 中性',
    intensity: 3,
    season: '春秋 / 通勤',
    smell: '冷白感玫瑰，干净、疏离、带一点柔软的高级感。',
    fragranceFamily: '玫瑰花香调',
    top: ['粉红胡椒', '土耳其玫瑰'],
    middle: ['覆盆子花', '玫瑰花瓣'],
    base: ['纸莎草', '琥珀', '麝香'],
    people: ['喜欢冷淡风的人', '想要清透玫瑰的人', '审美偏极简的人'],
    peopleTags: ['冷淡风', '极简审美', '清透玫瑰', '高级感', '疏离气质'],
    scenes: ['通勤', '约会', '日常出街', '拍照'],
    similar: ['Chanel', 'Dior'],
    description: '冷感玫瑰的代表，适合追求高级感和克制感的人。',
    imageSeed: 'byredo-rose-of-no-mans-land',
    palette: ['#d8b4c2', '#f7eff3', '#8f6f77', '#1f181b'],
    notesIntro: '它的玫瑰并不是热烈张扬的，而是带着一点冷白皮肤般的透明感。前调辛香短促而干净，中调玫瑰缓慢打开，像花瓣在冷空气里舒展；后调纸莎草和麝香把整体收得很稳，留下的是一种轻盈、克制、带距离感的柔和美。',
  },
  {
    fragranceNames: ['祖玛珑蓝风铃', '蓝风铃', 'wood sage & sea salt'],
    brand: 'Jo Malone / 祖玛珑',
    brandAliases: ['jo malone', '祖玛珑', 'jomalone'],
    title: '蓝风铃',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 高温',
    smell: '清新、水润、空气感很强，像干净洗完澡后的轻盈香气。',
    fragranceFamily: '清新花香调',
    top: ['蓝风铃', '柿子'],
    middle: ['铃兰', '茉莉'],
    base: ['白麝香', '琥珀'],
    people: ['喜欢无攻击性香味的人', '学生党', '通勤党'],
    peopleTags: ['低存在感', '清爽日常', '通勤友好', '学生党', '洁净感'],
    scenes: ['上学', '通勤', '夏日出游', '叠香'],
    similar: ['Armani', 'Hermès'],
    description: '很轻盈、很干净，属于一闻就知道“不会出错”的日常香。',
    imageSeed: 'jo-malone-blue-bell',
    palette: ['#bfe3ea', '#f4f8f8', '#88a7ad', '#1b2324'],
    notesIntro: '这支香更像空气而不是液体。前调干净明亮，几乎带着水汽感；中段花香并不浓重，而是像被风吹散的花瓣；尾调以白麝香收束，让整支香呈现出一种轻、净、透明的日常呼吸感。',
  },
  {
    fragranceNames: ['蔚蓝', '蓝色之水', 'bleu de chanel'],
    brand: 'Chanel / 香奈儿',
    brandAliases: ['chanel', '香奈儿'],
    title: '蔚蓝',
    gender: '中性 / 偏男性',
    intensity: 4,
    season: '四季通用',
    smell: '干净柑橘和木质交织，成熟、利落、很容易被接受。',
    fragranceFamily: '木质芳香调',
    top: ['柠檬', '葡萄柚', '薄荷'],
    middle: ['姜', '肉豆蔻', '茉莉'],
    base: ['雪松', '檀香木', '焚香'],
    people: ['职场男性', '喜欢干净利落的人', '不想出错的人'],
    peopleTags: ['商务利落', '干净清爽', '稳妥不出错', '职场男香', '社交友好'],
    scenes: ['通勤', '见客户', '约会', '正式场合'],
    similar: ['Dior', 'Hermès'],
    description: '经典大众高分香，干净利落，适合通勤和社交。',
    imageSeed: 'chanel-bleu-de-chanel',
    palette: ['#4b6d86', '#d6e0e6', '#1b2330', '#b4c7d4'],
    notesIntro: '它的气味结构像一套精密的商务西装。前调以清冽柑橘和薄荷制造干净的开场，中调姜与肉豆蔻把气息往成熟和利落方向推进，尾调木质、焚香与檀香让整支香保持沉稳、干净、现代的轮廓。',
  },
  {
    fragranceNames: ['迪奥小姐', 'miss dior'],
    brand: 'Dior / 迪奥',
    brandAliases: ['dior', '迪奥', 'christian dior'],
    title: '迪奥小姐',
    gender: '偏女性',
    intensity: 3,
    season: '春夏 / 约会',
    smell: '明亮花果香，甜度适中，带有年轻、浪漫、精致感。',
    fragranceFamily: '花香果香调',
    top: ['血橙', '柑橘'],
    middle: ['格拉斯玫瑰', '大马士革玫瑰'],
    base: ['广藿香', '白麝香'],
    people: ['喜欢甜美浪漫的人', '年轻女性', '约会场景用户'],
    peopleTags: ['甜美浪漫', '年轻感', '约会友好', '少女气质', '好感型'],
    scenes: ['约会', '日常出门', '春夏聚会', '礼物'],
    similar: ['Chanel', 'Gucci'],
    description: '轻盈、少女、甜而不腻，适合大多数日常浪漫场景。',
    imageSeed: 'dior-miss-dior',
    palette: ['#f3c5d4', '#fff6f8', '#b36a7f', '#2a171d'],
    notesIntro: '它像一束明亮的花束落在晨光里。前调果香带来轻快的甜意，中段玫瑰把香气往浪漫与精致推去，尾调广藿香与白麝香让整体不至于过分轻飘，留下一点柔软又优雅的后劲。',
  },
  {
    fragranceNames: ['大地', '爱马仕大地', 'terre d hermes'],
    brand: 'Hermès / 爱马仕',
    brandAliases: ['hermes', '爱马仕'],
    title: '大地',
    gender: '中性 / 偏男性',
    intensity: 4,
    season: '秋冬 / 通勤',
    smell: '土壤、木质、柑橘和矿物感，沉稳、干净、有力量。',
    fragranceFamily: '木质辛香调',
    top: ['葡萄柚', '橙'],
    middle: ['胡椒', '天竺葵'],
    base: ['雪松', '广藿香', '岩兰草'],
    people: ['成熟男性', '商务人群', '喜欢稳重气场的人'],
    peopleTags: ['成熟稳重', '商务气场', '低调高级', '男性向', '可靠感'],
    scenes: ['通勤', '商务', '冬季外出', '晚间'],
    similar: ['Chanel', 'Tom Ford'],
    description: '很稳、很有力量，是成熟男性与商务场景的经典选择。',
    imageSeed: 'hermes-terre',
    palette: ['#b08c62', '#ece3cf', '#40352a', '#1c1713'],
    notesIntro: '这支香的魅力在于“沉稳却不沉闷”。前调是清晰的柑橘开场，中调胡椒与天竺葵把轮廓切得利落，尾调雪松、广藿香与岩兰草把气息落回土地般的厚度，像一件剪裁干净的高定外套。',
  },
  {
    fragranceNames: ['黑鸦片', 'black opium'],
    brand: 'YSL / 圣罗兰',
    brandAliases: ['ysl', '圣罗兰', 'yves saint laurent'],
    title: '黑鸦片',
    gender: '偏女性',
    intensity: 5,
    season: '秋冬 / 夜晚',
    smell: '甜、浓、性感，带咖啡与香草的夜色气息，很有上头感。',
    fragranceFamily: '东方美食调',
    top: ['梨', '粉红胡椒'],
    middle: ['咖啡', '茉莉', '橙花'],
    base: ['香草', '广藿香', '雪松'],
    people: ['喜欢甜香的人', '夜生活用户', '喜欢高存在感的人'],
    peopleTags: ['夜晚氛围', '甜香爱好者', '高存在感', '派对感', '性感路线'],
    scenes: ['夜晚约会', '派对', '酒吧', '冬季聚会'],
    similar: ['Tom Ford', 'Baccarat Rouge 540'],
    description: '甜感很强，氛围感拉满，适合夜晚和社交场景。',
    imageSeed: 'ysl-black-opium',
    palette: ['#1b1620', '#6a4669', '#e1b4a1', '#f7efe8'],
    notesIntro: '前调先给出一点果甜与辛辣的撩拨感；中段咖啡一出现，香气就真正进入主题，浓郁、夜色感、带一点成瘾气质；尾调香草与广藿香把甜度压住，形成性感、暖意、容易留下记忆的收尾。',
  },
  {
    fragranceNames: ['银色山泉', 'silver mountain water'],
    brand: 'Creed / 拿破仑之水',
    brandAliases: ['creed', 'creed香水', '拿破仑之水'],
    title: '银色山泉',
    gender: '中性',
    intensity: 3,
    season: '春夏 / 日常',
    smell: '冷冽、干净、茶感与皂感明显，有山泉般的轻盈通透。',
    fragranceFamily: '清新柑橘茶香调',
    top: ['佛手柑', '橙', '柠檬'],
    middle: ['绿茶', '黑醋栗'],
    base: ['麝香', '檀香', '茶叶'],
    people: ['喜欢茶香的人', '极简气质人群', '追求清爽感的人'],
    peopleTags: ['茶香爱好者', '极简气质', '清爽通勤', '低调审美', '干净感'],
    scenes: ['通勤', '春夏日常', '运动后', '阅读咖啡馆'],
    similar: ['Jo Malone', 'Hermès'],
    description: '干净清澈，像山间空气，适合喜欢清冷感的人。',
    imageSeed: 'creed-silver-mountain-water',
    palette: ['#9cb3c0', '#f0f5f8', '#455665', '#121821'],
    notesIntro: '它把“清冷”做得很轻。前调是明亮的柑橘和清冽气流；中段绿茶与黑醋栗让香气有一点植物感的鲜活；尾调麝香与茶叶把整体收得像一口干净、透亮、带金属感的冷泉。',
  },
  {
    fragranceNames: ['大吉岭茶', '宝格丽大吉岭茶', 'darjeeling', 'pour homme'],
    brand: 'Bvlgari / 宝格丽',
    brandAliases: ['bvlgari', '宝格丽', 'bulgari'],
    title: '大吉岭茶',
    gender: '中性',
    intensity: 2,
    season: '春秋 / 日常',
    smell: '以茶香为主，带细微花感与木质感，干净而不张扬，经典"白衬衫男友香"。',
    fragranceFamily: '茶香木质调',
    top: ['大吉岭茶', '佛手柑', '橙花'],
    middle: ['胡椒', '小豆蔻', '纸莎草'],
    base: ['麝香', '雪松', '琥珀'],
    people: ['喜欢干净茶感的人', '商务通勤用户', '低调审美人群'],
    peopleTags: ['茶香党', '商务通勤', '低调克制', '书卷气', '日常百搭'],
    scenes: ['办公', '出差', '见面', '阅读'],
    similar: ['Jo Malone', 'Armani'],
    description: '茶香爱好者经典选择，低调、耐闻、很有书卷气，被誉为"白衬衫男友香"。',
    imageSeed: 'bvlgari-pour-homme',
    palette: ['#c8d6c0', '#f2f5ef', '#5a6b55', '#182018'],
    notesIntro: '宝格丽最具代表性的中性香。前调以珍贵的大吉岭茶和佛手柑开场，清澈明亮；中段胡椒与小豆蔻加入微辛层次，让茶香更有骨感；尾调麝香与雪松沉淀为一种贴肤、温柔而干净的底韵。',
  },
  {
    fragranceNames: ['黑金匕首', 'black afgano'],
    brand: 'Nasomatto / 纳萨马托',
    brandAliases: ['nasomatto', '纳萨马托'],
    title: '黑金匕首',
    gender: '中性',
    intensity: 5,
    season: '秋冬 / 夜晚',
    smell: '浓烈、烟熏、树脂和木质感非常强，存在感极高。',
    fragranceFamily: '树脂烟熏调',
    top: ['绿意', '树脂'],
    middle: ['大麻感', '烟草'],
    base: ['木质', '焚香'],
    people: ['喜欢小众重口的人', '暗黑风审美人群', '追求辨识度的人'],
    peopleTags: ['小众重口', '暗黑氛围', '辨识度高', '艺术感', '个性强烈'],
    scenes: ['夜晚派对', '展览', '艺术空间', '冬季'],
    similar: ['Tom Ford', 'Frédéric Malle'],
    description: '风格非常强烈，是那种一闻就有记忆点的作品。',
    imageSeed: 'nasomatto-black-afgano',
    palette: ['#2a241f', '#6b4e31', '#d2b48c', '#0f0c0b'],
    notesIntro: '这支香像浓烟与树脂织成的暗色织物。前调压低存在感，像黑暗中慢慢浮现的气息；中段烟草与树脂堆叠出浓厚的层次；尾调木质与焚香几乎把空间染色，极具戏剧张力。',
  },
  {
    fragranceNames: ['梅森马吉拉慵懒周末', 'lazy sunday morning'],
    brand: 'Maison Margiela / 马吉拉',
    brandAliases: ['maison margiela', 'maison margiela 香水', '马吉拉'],
    title: '慵懒周末',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '刚洗完床单和晒过太阳的干净皂感，很温柔很松弛。',
    fragranceFamily: '皂感花香调',
    top: ['铃兰', '梨'],
    middle: ['鸢尾', '玫瑰'],
    base: ['白麝香', '广藿香'],
    people: ['喜欢洁净感的人', '懒人日常香需求', '极简主义者'],
    peopleTags: ['洁净感', '懒人友好', '极简主义', '松弛感', '日常舒适'],
    scenes: ['居家', '通勤', '约会', '春夏'],
    similar: ['Jo Malone', 'Armani'],
    description: '非常适合追求“干净得像没喷香”的人。',
    imageSeed: 'maison-margiela-lazy-sunday-morning',
    palette: ['#f4ede6', '#d9d0c8', '#9b9188', '#1d1a18'],
    notesIntro: '它的魅力在于“刚刚洗好、刚刚晒过、刚刚被阳光抱过”。前调轻柔、干净；中段花香和鸢尾增加一点柔软质地；尾调白麝香与广藿香让香气像棉布一样贴近皮肤。',
  },
  {
    fragranceNames: ['巴黎世家银月', '银月', 'bal d afrique'],
    brand: 'Byredo / 百瑞德',
    brandAliases: ['byredo', '百瑞德'],
    title: '非洲之旅',
    gender: '中性',
    intensity: 3,
    season: '春夏 / 日常',
    smell: '明亮柑橘与木质结合，带一点热带阳光感与时髦感。',
    fragranceFamily: '柑橘木质调',
    top: ['柠檬', '佛手柑', '金盏花'],
    middle: ['紫罗兰', '仙客来'],
    base: ['香根草', '雪松', '麝香'],
    people: ['喜欢时髦感的人', '追求轻奢风的人', '想要有记忆点但不厚重的人'],
    peopleTags: ['时髦轻奢', '旅行气质', '记忆点', '春夏适配', '现代感'],
    scenes: ['通勤', '度假', '春夏出行', '咖啡馆'],
    similar: ['Jo Malone', 'Hermès'],
    description: '明亮、现代、带一点旅行感，非常适合春夏。',
    imageSeed: 'byredo-bal-d-afrique',
    palette: ['#d8c29a', '#f5f0e8', '#7d5b3f', '#17120f'],
    notesIntro: '它像午后阳光落在木质地板上。前调柑橘与金盏花带来轻快亮度，中段紫罗兰让香气更具现代感和时髦感，尾调香根草、雪松和麝香把它稳稳托住，既松弛又精致。',
  },
  {
    fragranceNames: ['乔治阿玛尼玉龙茶香', '玉龙茶香', 'armani prive the yulong'],
    brand: 'Armani / 阿玛尼',
    brandAliases: ['armani', '阿玛尼', 'giorgio armani'],
    title: '玉龙茶香',
    gender: '中性',
    intensity: 3,
    season: '春夏 / 商务',
    smell: '茶感清透，带有柑橘与轻木质的高级清爽感。',
    fragranceFamily: '茶香柑橘调',
    top: ['柑橘', '茶叶'],
    middle: ['茉莉', '花香'],
    base: ['麝香', '木质'],
    people: ['喜欢高级清茶感的人', '商务通勤用户', '追求克制气质的人'],
    peopleTags: ['高级茶感', '商务通勤', '克制气质', '轻奢感', '清爽优雅'],
    scenes: ['办公', '见客户', '春夏出行', '正式会面'],
    similar: ['Creed', 'Hermès'],
    description: '清雅不张扬，商务感和高级感都很足。',
    imageSeed: 'armani-the-yulong',
    palette: ['#a9b8b0', '#f2efe8', '#4f5e58', '#161919'],
    notesIntro: '这是非常典型的“高级清爽”路线。前调茶叶和柑橘像清晨第一口空气，中段茉莉和花香把气息打磨得更圆润，尾调麝香与木质让它保持冷静、优雅、很会拿捏分寸。',
  },
  {
    fragranceNames: ['花漾甜心', 'lady million', '白花'],
    brand: 'Paco Rabanne / 帕高',
    brandAliases: ['paco rabanne', '帕高'],
    title: '花漾甜心',
    gender: '偏女性',
    intensity: 4,
    season: '春秋 / 派对',
    smell: '甜花果香，明亮、招摇、存在感较强。',
    fragranceFamily: '花果甜香调',
    top: ['树莓', '柑橘'],
    middle: ['橙花', '茉莉'],
    base: ['蜂蜜', '广藿香'],
    people: ['喜欢甜美华丽的人', '派对型人格', '喜欢高辨识度的人'],
    peopleTags: ['甜美华丽', '派对感', '高辨识度', '活泼张扬', '少女风'],
    scenes: ['聚会', '约会', '派对', '晚间出行'],
    similar: ['YSL', 'Dior'],
    description: '甜感明显，适合想要更显眼、更抓人的场景。',
    imageSeed: 'paco-rabanne-lady-million',
    palette: ['#f4cf7f', '#fff8ea', '#b68b31', '#241b11'],
    notesIntro: '它是非常外放的甜美路线。前调果甜迅速吸睛，中段花香开始堆叠出华丽感，尾调蜂蜜与广藿香则把香气收成一种更有存在感、更适合夜晚与派对的闪耀氛围。',
  },
  {
    fragranceNames: ['祖玛珑英国梨与小苍兰', '英国梨与小苍兰'],
    brand: 'Jo Malone / 祖玛珑',
    brandAliases: ['jo malone', '祖玛珑', 'jomalone'],
    title: '英国梨与小苍兰',
    gender: '中性 / 偏女性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '清甜果香与白花结合，干净、明亮、没有负担。',
    fragranceFamily: '果香花香调',
    top: ['威廉梨', '蜜瓜'],
    middle: ['小苍兰', '玫瑰'],
    base: ['广藿香', '麝香'],
    people: ['喜欢清甜香的人', '日常通勤人群', '喜欢不浓重的人'],
    peopleTags: ['清甜', '入门友好', '通勤百搭', '温柔日常', '轻负担'],
    scenes: ['通勤', '上学', '约会', '春夏'],
    similar: ['Dior', 'Armani'],
    description: '非常适合入门，接受度高，日常百搭。',
    imageSeed: 'jo-malone-pear-freesia',
    palette: ['#e7d7ad', '#f9f5ed', '#9b8660', '#1f1a14'],
    notesIntro: '它的气味像一颗刚切开的梨配上一束轻轻的白花。前调清甜，明亮但不腻；中调小苍兰让香气更温柔；尾调广藿香与麝香将它稳住，使之成为非常适合日常、通勤与礼物场景的温柔香。',
  },
  {
    fragranceNames: ['香奈儿五号', 'chanel no 5', 'no5'],
    brand: 'Chanel / 香奈儿',
    brandAliases: ['chanel', '香奈儿'],
    title: '五号',
    gender: '偏女性',
    intensity: 4,
    season: '秋冬 / 正式场景',
    smell: '醛香与花香交织，经典、优雅、非常有年代感与高级感。',
    fragranceFamily: '醛香花香调',
    top: ['醛香', '柠檬', '橙花'],
    middle: ['茉莉', '玫瑰', '鸢尾'],
    base: ['檀香', '香根草', '麝香'],
    people: ['喜欢经典香的人', '成熟优雅人群', '重视礼仪感的人'],
    peopleTags: ['经典优雅', '成熟气质', '礼仪感', '收藏向', '正式场景'],
    scenes: ['正式场合', '晚宴', '通勤', '收藏'],
    similar: ['Dior', 'Hermès'],
    description: '香奈儿标志性经典，适合审美偏成熟的人。',
    imageSeed: 'chanel-no5',
    palette: ['#d4c6a8', '#f5f0e2', '#6e5a41', '#191715'],
    notesIntro: '它是醛香时代的代表。前调带着闪亮、洁净又略带金属感的开场；中调花香铺开后立刻显出雍容与层次；尾调的木质、麝香与香根草则让香气在皮肤上留下非常经典、非常完整的高级感。',
  },
  {
    fragranceNames: ['乌木沉香', 'oud wood', '汤姆福特乌木'],
    brand: 'Tom Ford / 汤姆·福特',
    brandAliases: ['tom ford', 'tomford', '汤姆福特', '汤姆·福特'],
    title: '乌木沉香',
    gender: '中性 / 偏男性',
    intensity: 5,
    season: '秋冬 / 夜晚',
    smell: '深邃的沉香木与香根草交织，温暖、沉稳、高级，带有东方神秘感。',
    fragranceFamily: '木质东方调',
    top: ['沉香木', '巴西红木'],
    middle: ['花椒', '香根草'],
    base: ['檀香', '香草', '琥珀'],
    people: ['喜欢深沉木质的人', '成熟男性', '追求高级感的人'],
    peopleTags: ['深沉木质', '成熟魅力', '高级感', '东方神秘', '气场全开'],
    scenes: ['正式晚宴', '冬季通勤', '商务会面', '夜晚社交'],
    similar: ['Creed', 'Frédéric Malle'],
    description: 'Tom Ford 私人调香系列代表作，沉香主题的标杆之作。',
    imageSeed: 'tom-ford-oud-wood',
    palette: ['#3a2012', '#8b6040', '#1a0d06', '#d4b896'],
    notesIntro: '这支香把沉香做得极其圆润高级。前调沉香木开门见山，厚重而不咄咄逼人；中段花椒带来一丝暖辣，让木质更立体；尾调檀香与香草包裹出温暖体感，像一件剪裁完美的大衣。',
  },
  {
    fragranceNames: ['白麝香', 'white suede', '暗麝心魄'],
    brand: 'Tom Ford / 汤姆·福特',
    brandAliases: ['tom ford', 'tomford', '汤姆福特', '汤姆·福特'],
    title: '白麝香',
    gender: '偏女性 / 中性',
    intensity: 3,
    season: '四季通用',
    smell: '麂皮绒般柔软的麝香，温暖、贴肤、充满慵懒的优雅感。',
    fragranceFamily: '麝香花香调',
    top: ['茶叶', '百里香'],
    middle: ['铃兰', '麂皮绒'],
    base: ['麝香', '乳香', '琥珀'],
    people: ['喜欢体香感的人', '极简优雅风', '追求贴肤温柔的人'],
    peopleTags: ['伪体香', '极简优雅', '温柔贴肤', '慵懒气质', '日常百搭'],
    scenes: ['日常通勤', '约会', '居家', '近距离社交'],
    similar: ['Jo Malone', 'Byredo'],
    description: '最出名的"伪体香"之一，柔软贴肤如同第二层肌肤。',
    imageSeed: 'tom-ford-white-suede',
    palette: ['#e8dfd8', '#f7f3f0', '#b8a99a', '#231e1b'],
    notesIntro: '它的气质像刚晒过太阳的羊绒毛毯。前调茶叶与百里香飘出淡淡洁净感；中段麂皮绒的质地让香气变得柔软、高级、像抚摸细腻皮革；尾调麝香与乳香缓缓释放，成为一件极其贴身的温柔。',
  },
  {
    fragranceNames: ['失落樱桃', 'lost cherry', '落樱甜情'],
    brand: 'Tom Ford / 汤姆·福特',
    brandAliases: ['tom ford', 'tomford', '汤姆福特', '汤姆·福特'],
    title: '失落樱桃',
    gender: '偏女性',
    intensity: 4,
    season: '秋冬 / 约会',
    smell: '甜润的樱桃利口酒混合杏仁与玫瑰，甜美中带着一丝微醺的性感。',
    fragranceFamily: '美食花果调',
    top: ['黑樱桃', '樱桃利口酒', '苦杏仁'],
    middle: ['土耳其玫瑰', '茉莉'],
    base: ['秘鲁香脂', '檀香', '香根草'],
    people: ['喜欢甜香的人', '约会场景', '年轻时尚人群'],
    peopleTags: ['甜欲风', '约会利器', '樱桃炸弹', '微醺性感', '时尚感'],
    scenes: ['约会之夜', '派对', '冬季出街', '拍照打卡'],
    similar: ['YSL', 'Dior'],
    description: '一颗浸了酒的樱桃在舌尖爆开，甜美又危险。',
    imageSeed: 'tom-ford-lost-cherry',
    palette: ['#7b1020', '#d44a5e', '#1f050d', '#f7d4d4'],
    notesIntro: '它不像普通的花果调那样轻飘。前调的樱桃带着酒精的微醺感与杏仁的苦甜，复杂而有深度；中段玫瑰让香气往性感方向走；尾调的木质基底把甜度压住，避免过于幼稚，留下的是高级的甜。',
  },
  {
    fragranceNames: ['烟草香草', 'tobacco vanilla', '烟叶香草'],
    brand: 'Tom Ford / 汤姆·福特',
    brandAliases: ['tom ford', 'tomford', '汤姆福特', '汤姆·福特'],
    title: '烟草香草',
    gender: '中性 / 偏男性',
    intensity: 4,
    season: '秋冬 / 夜晚',
    smell: '烟草叶混合香草的温暖甜润，像绅士俱乐部里的一杯香料热饮。',
    fragranceFamily: '东方美食调',
    top: ['烟草叶', '香料'],
    middle: ['香草', '可可'],
    base: ['干果', '木质'],
    people: ['喜欢温暖甜香的人', '成熟男性', '冬日晚间社交'],
    peopleTags: ['温暖烟香', '绅士感', '冬日暖香', '俱乐部氛围', '治愈系'],
    scenes: ['冬季夜晚', '酒吧', '约会', '阅读书房'],
    similar: ['YSL', 'Kilian'],
    description: 'Tom Ford 最受欢迎的秋冬暖香，烟草与香草绝妙平衡。',
    imageSeed: 'tom-ford-tobacco-vanilla',
    palette: ['#6b4226', '#c4956a', '#26160a', '#f0dcc8'],
    notesIntro: '它像一根正在燃烧的优质雪茄与一杯香草热可可放在一起。前调烟草叶浓郁温热，中段香草与可可把整体往甜润方向拉，尾调的干果与木质让它变得越来越醇厚，像陈年的威士忌。',
  },
  {
    fragranceNames: ['檀木33', 'santal 33', 'le labo santal'],
    brand: 'Le Labo / 勒拉博',
    brandAliases: ['le labo', 'lelabo', '勒拉博'],
    title: '檀木33',
    gender: '中性',
    intensity: 4,
    season: '秋冬 / 四季',
    smell: '皮革、檀木、鸢尾与纸莎草混合，干燥、温暖、带一点美式粗粝的文艺感。',
    fragranceFamily: '木质皮革调',
    top: ['紫罗兰', '小豆蔻'],
    middle: ['鸢尾', '皮革'],
    base: ['檀木', '雪松', '纸莎草'],
    people: ['喜欢文艺感的人', '小众审美', '中性穿搭人群'],
    peopleTags: ['文艺青年', '小众品味', '皮革质感', '纽约风', '中性魅力'],
    scenes: ['日常通勤', '咖啡馆', '展览', '旅行'],
    similar: ['Diptyque', 'Byredo'],
    description: 'Le Labo 最出圈的作品，纽约 Soho 区的气味名片。',
    imageSeed: 'le-labo-santal-33',
    palette: ['#8b7355', '#d4c5b2', '#2a2018', '#5e4a3a'],
    notesIntro: '它的魅力在于"粗糙的精致"。前调紫罗兰与豆蔻带着一丝微妙的甜意，中段皮革与鸢尾的质地开始浮现，像一本翻旧的皮质笔记本；尾调檀木与纸莎草带来的干燥木质，像阳光透过木百叶晒在旧书页上。',
  },
  {
    fragranceNames: ['别样13', 'another 13', 'le labo 13'],
    brand: 'Le Labo / 勒拉博',
    brandAliases: ['le labo', 'lelabo', '勒拉博'],
    title: '别样13',
    gender: '中性',
    intensity: 3,
    season: '四季通用',
    smell: '合成龙涎香与麝香主导，干净、透明、带一种不可名状的"杂志纸张"气息。',
    fragranceFamily: '木质麝香调',
    top: ['合成龙涎香', '茉莉'],
    middle: ['麝香', '苔藓'],
    base: ['木质', '琥珀'],
    people: ['极简主义者', '喜欢伪体香的人', '追求独特但低调的人'],
    peopleTags: ['极简', '伪体香', '独特透明', '杂志纸感', '冷感干净'],
    scenes: ['日常通勤', '办公', '近距离社交', '四季皆宜'],
    similar: ['Byredo', 'Maison Margiela'],
    description: '闻起来像"自己本来就是这个味道"——极难定义却让人上瘾。',
    imageSeed: 'le-labo-another-13',
    palette: ['#e8e8e8', '#fafafa', '#9e9e9e', '#1c1c1c'],
    notesIntro: '这也许是全世界最难描述的香水之一。它没有传统的前中后调线性感，而是一种"氛围"——像翻开一本全新的杂志，纸与油墨的气味混合着肌肤的温度，干净、透明、完全不像"喷了香水"。',
  },
  {
    fragranceNames: ['玫瑰31', 'rose 31', 'le labo rose'],
    brand: 'Le Labo / 勒拉博',
    brandAliases: ['le labo', 'lelabo', '勒拉博'],
    title: '玫瑰31',
    gender: '中性',
    intensity: 3,
    season: '春秋 / 日常',
    smell: '不是甜美玫瑰，而是孜然与木质包裹的干燥玫瑰，带有辛香与力量感。',
    fragranceFamily: '木质辛香玫瑰调',
    top: ['孜然', '玫瑰'],
    middle: ['大马士革玫瑰', '鸢尾'],
    base: ['愈创木', '雪松', '麝香'],
    people: ['不喜欢甜玫瑰的人', '中性风爱好者', '追求独特气质的人'],
    peopleTags: ['暗黑玫瑰', '辛香木质', '中性独特', '反甜腻', '力量感'],
    scenes: ['日常通勤', '展览', '艺术空间', '夜间活动'],
    similar: ['Frédéric Malle', 'Serge Lutens'],
    description: '一支"不甜的玫瑰"，孜然与木质让玫瑰变成了另一种模样。',
    imageSeed: 'le-labo-rose-31',
    palette: ['#6b3a4a', '#c4a0a8', '#28141c', '#f0e4e8'],
    notesIntro: '它颠覆了"玫瑰=甜美"的刻板印象。前调孜然的辛香让人猝不及防，中段玫瑰才慢慢浮现但依然干燥克制；尾调愈创木与雪松把整支香压在木质基础上，让玫瑰变得有骨骼、有态度。',
  },
  {
    fragranceNames: ['檀道', 'tam dao', 'diptyque tam dao'],
    brand: 'Diptyque / 蒂普提克',
    brandAliases: ['diptyque', '蒂普提克'],
    title: '檀道',
    gender: '中性',
    intensity: 3,
    season: '秋冬 / 安静场景',
    smell: '纯粹的檀木与雪松，干燥、安静、有宗教般的沉静感。',
    fragranceFamily: '木质调',
    top: ['檀木', '雪松'],
    middle: ['柏树', '桃金娘'],
    base: ['麝香', '琥珀'],
    people: ['喜欢纯木质的人', '冥想爱好者', '文艺安静型人格'],
    peopleTags: ['纯檀木', '禅意', '安静力量', '文艺沉静', '东方美学'],
    scenes: ['阅读', '冥想', '寺庙/展览', '独处'],
    similar: ['Le Labo', 'Byredo'],
    description: 'Diptyque 最具东方禅意的作品，一支非常安静的檀木。',
    imageSeed: 'diptyque-tam-dao',
    palette: ['#8a7a5c', '#dcd5c8', '#3d3428', '#1f1a14'],
    notesIntro: '这支香让人想到一座深山古寺的木结构大殿。前调檀木与雪松开门见山，不甜不腻不讨好；中段柏树与桃金娘带来一丝绿意与呼吸感；尾调麝香与琥珀让它像被香火熏了几百年的老木头，沉静、庄严、让人安定。',
  },
  {
    fragranceNames: ['无花果', 'philosykos', '希腊无花果'],
    brand: 'Diptyque / 蒂普提克',
    brandAliases: ['diptyque', '蒂普提克'],
    title: '无花果',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 度假',
    smell: '青绿的无花果叶混合椰奶般的果实与木质，像漫步在希腊无花果树下。',
    fragranceFamily: '绿意果香调',
    top: ['无花果叶', '无花果'],
    middle: ['椰子', '绿植'],
    base: ['雪松', '无花果树'],
    people: ['喜欢自然绿意的人', '度假感追求者', '文艺小清新'],
    peopleTags: ['绿意青涩', '地中海度假', '自然清新', '文艺清新', '夏日治愈'],
    scenes: ['夏日度假', '野餐', '咖啡馆', '春日出行'],
    similar: ['Jo Malone', 'Acqua di Parma'],
    description: '全世界最还原无花果树气味的香水，从叶到果到树干。',
    imageSeed: 'diptyque-philosykos',
    palette: ['#5a7d4a', '#c8dcc0', '#2f3d28', '#f0f4ed'],
    notesIntro: '它像把一整棵无花果树榨进了瓶子里。前调是揉碎的无花果叶，带着青绿微涩的汁液感；中段椰奶般的果实甜润浮现但绝不腻；尾调无花果树干的木质让整体落地，像在希腊小岛午后树荫下打了个盹。',
  },
  {
    fragranceNames: ['玫瑰之水', 'eau rose', 'diptyque rose'],
    brand: 'Diptyque / 蒂普提克',
    brandAliases: ['diptyque', '蒂普提克'],
    title: '玫瑰之水',
    gender: '偏女性 / 中性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '荔枝与玫瑰的清甜组合，水润、透明、像清晨带着露珠的玫瑰花束。',
    fragranceFamily: '花香果香调',
    top: ['荔枝', '佛手柑'],
    middle: ['大马士革玫瑰', '千叶玫瑰'],
    base: ['麝香', '雪松'],
    people: ['喜欢清透玫瑰的人', '入门用户', '日常温柔风'],
    peopleTags: ['清透玫瑰', '荔枝甜', '入门友好', '温柔日常', '水润感'],
    scenes: ['日常通勤', '约会', '春夏出行', '送礼'],
    similar: ['Byredo', 'Jo Malone'],
    description: '最"水灵"的玫瑰之一，荔枝让玫瑰变得清甜又透明。',
    imageSeed: 'diptyque-eau-rose',
    palette: ['#e8c4cc', '#fdf6f8', '#b3808c', '#2a1820'],
    notesIntro: '这支玫瑰不像常见玫瑰那样浓重。前调荔枝的加入让玫瑰花瓣仿佛浸在冰水里，清透、带着一丝果甜；中段两种玫瑰叠出层次但不厚重；尾调麝香与雪松收束得很轻盈，像花店里最水灵的那束淡粉色玫瑰。',
  },
  {
    fragranceNames: ['花悦', 'bloom', 'gucci bloom'],
    brand: 'Gucci / 古驰',
    brandAliases: ['gucci', '古驰'],
    title: '花悦',
    gender: '偏女性',
    intensity: 4,
    season: '春夏 / 约会',
    smell: '白花轰炸——茉莉、晚香玉、使君子层层叠叠，像走进一座繁茂的白花园。',
    fragranceFamily: '白花香调',
    top: ['茉莉花蕾'],
    middle: ['晚香玉', '使君子'],
    base: ['鸢尾', '麝香'],
    people: ['喜欢白花的人', '甜美女性化气质', '约会派对场景'],
    peopleTags: ['白花盛宴', '甜美女性', '约会高手', '花园感', '高扩散'],
    scenes: ['约会', '派对', '春夏聚会', '拍照'],
    similar: ['Dior', 'Chanel'],
    description: '白花爱好者的终极之选，像一头扎进盛放的白花园。',
    imageSeed: 'gucci-bloom',
    palette: ['#f5e8f0', '#e8c4d8', '#a86b88', '#2a1822'],
    notesIntro: '这支香的白花不是一朵一朵开的，而是同时炸开的。前调茉莉花蕾先声夺人，中段晚香玉与使君子把白花的奶油质感推到极致，尾调鸢尾与麝香给它一个粉质温柔的收尾。喜欢的人说它是天堂花园，不喜欢的人说它太猛——这就是白花的魅力。',
  },
  {
    fragranceNames: ['罪爱', 'guilty', 'gucci guilty'],
    brand: 'Gucci / 古驰',
    brandAliases: ['gucci', '古驰'],
    title: '罪爱',
    gender: '偏女性',
    intensity: 4,
    season: '秋冬 / 夜晚',
    smell: '粉红胡椒与紫丁香开场，广藿香收尾，性感、大胆、有攻击性。',
    fragranceFamily: '东方花香调',
    top: ['粉红胡椒', '柑橘'],
    middle: ['紫丁香', '紫罗兰', '桃'],
    base: ['广藿香', '琥珀'],
    people: ['喜欢性感路线的人', '夜晚社交', '大胆自信人群'],
    peopleTags: ['性感大胆', '夜晚女王', '高存在感', '大胆自信', '诱惑感'],
    scenes: ['夜店', '约会', '派对', '晚宴'],
    similar: ['YSL', 'Tom Ford'],
    description: 'Gucci 标志性的"坏女孩"香，名字就说明了态度。',
    imageSeed: 'gucci-guilty',
    palette: ['#4a1a3a', '#c490a8', '#1e0c16', '#f0dce6'],
    notesIntro: '它不打算做一个好女孩。前调粉红胡椒的辛辣先声夺人，中段紫丁香与紫罗兰的甜花加入让气息变得复杂且诱人，尾调广藿香与琥珀留下一个深色、性感、让人忍不住想靠近的尾韵。',
  },
  {
    fragranceNames: ['白茶', 'eau de the blanc', 'bvlgari tea'],
    brand: 'Bvlgari / 宝格丽',
    brandAliases: ['bvlgari', '宝格丽', 'bulgari'],
    title: '白茶',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '白茶、白胡椒与白麝香组成的洁净三重奏，像刚熨好的白衬衫。',
    fragranceFamily: '茶香麝香调',
    top: ['白茶', '白胡椒'],
    middle: ['麝香', '小豆蔻'],
    base: ['木质', '琥珀'],
    people: ['喜欢极简洁净感的人', '文艺青年', '通勤党'],
    peopleTags: ['极简洁净', '白衬衫感', '文艺书卷', '通勤友好', '无攻击性'],
    scenes: ['办公', '阅读', '日常通勤', '图书馆'],
    similar: ['Jo Malone', 'Maison Margiela'],
    description: 'Bvlgari 茶系列中最安静的一支，几乎没有"香味"——只有一种洁净感。',
    imageSeed: 'bvlgari-eau-the-blanc',
    palette: ['#f0ede6', '#e0dcd5', '#b0a898', '#1f1d18'],
    notesIntro: '如果说大吉岭茶是"白衬衫男友"，白茶就是"刚熨好的白衬衫挂在那里"。前调白茶淡到几乎透明，白胡椒给了一点点微弱的辛感；中段麝香让它越来越贴肤，尾调木质与琥珀像阳光晒过的织物。不张扬、不打扰，只留下一种洁净的痕迹。',
  },
  {
    fragranceNames: ['天使之享', 'angels share', 'kilian angels share'],
    brand: 'Kilian / 凯利安',
    brandAliases: ['kilian', '凯利安', 'by kilian'],
    title: '天使之享',
    gender: '中性',
    intensity: 4,
    season: '秋冬 / 节日',
    smell: '干邑白兰地与肉桂、零陵香豆的组合，像一杯温热的香料苹果酒。',
    fragranceFamily: '美食酒香调',
    top: ['干邑白兰地'],
    middle: ['肉桂', '零陵香豆', '橡木'],
    base: ['香草', '果仁糖', '檀木'],
    people: ['喜欢温暖美食调的人', '节日氛围感', '秋冬晚间活动'],
    peopleTags: ['酒香美食', '冬日暖香', '节日氛围', '高级甜感', '温暖拥抱'],
    scenes: ['圣诞/节日', '晚宴', '冬季约会', '壁炉旁'],
    similar: ['Tom Ford', 'YSL'],
    description: '"天使之享"指干邑在橡木桶陈年时蒸发掉的那一部分——献给天使。',
    imageSeed: 'kilian-angels-share',
    palette: ['#8b4513', '#d4a574', '#2a1008', '#f5e6d8'],
    notesIntro: '它的名字浪漫得过分：干邑在橡木桶中陈年时挥发掉的那部分，法国人称之为"part des anges"——天使的那一份。香气就是一杯顶级的干邑肉桂热饮，前调酒香浓郁温暖，中段肉桂与橡木堆叠出节日感，尾调香草与果仁糖的甜润让人想一直闻下去。',
  },
  {
    fragranceNames: ['好女孩变坏', 'good girl gone bad', 'kilian good girl'],
    brand: 'Kilian / 凯利安',
    brandAliases: ['kilian', '凯利安', 'by kilian'],
    title: '好女孩变坏',
    gender: '偏女性',
    intensity: 3,
    season: '春秋 / 约会',
    smell: '杏桃、玫瑰与橙花的组合，从乖巧花果香过渡到微醺的晚香玉。',
    fragranceFamily: '花果白花调',
    top: ['杏桃', '橙花', '茉莉'],
    middle: ['晚香玉', '五月玫瑰'],
    base: ['雪松', '琥珀'],
    people: ['喜欢甜花又不想太乖的人', '约会场景', '小性感路线'],
    peopleTags: ['甜中带坏', '约会斩男', '白花诱惑', '反差感', '小性感'],
    scenes: ['约会', '派对', '晚宴', '春夏夜晚'],
    similar: ['Gucci', 'Dior'],
    description: '名字就是态度——从好女孩到坏女孩，只需一支香的距离。',
    imageSeed: 'kilian-good-girl-gone-bad',
    palette: ['#f2c4d0', '#fdf2f6', '#c48898', '#2a1620'],
    notesIntro: '前调杏桃与橙花让你以为它是个乖巧的甜心，但中段晚香玉一出现，局面就变了——那种丝绒质感的白色花香开始弥漫，带着微醺的性感。尾调雪松与琥珀把这种"变坏"收得很优雅，不是大吵大闹，而是耳语般的挑逗。',
  },
  {
    fragranceNames: ['巴卡拉红水晶540', 'baccarat rouge 540', 'mfk 540', '红水晶'],
    brand: 'MFK / 梅森弗朗西斯库尔吉安',
    brandAliases: ['mfk', 'maison francis kurkdjian', '弗朗西斯库尔吉安'],
    title: '巴卡拉红水晶540',
    gender: '中性',
    intensity: 4,
    season: '秋冬 / 四季',
    smell: '杏仁糖与雪松的奇妙组合，甜而不腻，带一种琥珀色透明的高级甜感。',
    fragranceFamily: '木质琥珀调',
    top: ['杏仁', '番红花'],
    middle: ['茉莉', '雪松'],
    base: ['麝香', '木质琥珀', '冷杉'],
    people: ['喜欢高级甜感的人', '追求辨识度的人', '轻奢白领'],
    peopleTags: ['高级甜', '辨识度王者', '轻奢白领', '杏仁糖感', '中性魅力'],
    scenes: ['通勤', '约会', '晚宴', '全年通用'],
    similar: ['Tom Ford', 'Kilian'],
    description: '全球最火的小众沙龙香之一，扩散力和留香都是王者级别。',
    imageSeed: 'mfk-baccarat-rouge-540',
    palette: ['#b8482a', '#e8b090', '#3a1008', '#fcf0e8'],
    notesIntro: '这支香是调香师为巴卡拉水晶成立 250 周年而作——540°C 是巴卡拉红色水晶的烧制温度。气味就像把杏仁糖融化在琥珀色的透明水晶里，前调甜得高级而克制；中段雪松给甜度加上木质骨架；尾调麝香与冷杉让它变成一种微妙的"皮肤甜"，闻到的人都会问"你喷了什么"。',
  },
  {
    fragranceNames: ['无尽之水', 'aqua universalis', 'mfk aqua'],
    brand: 'MFK / 梅森弗朗西斯库尔吉安',
    brandAliases: ['mfk', 'maison francis kurkdjian', '弗朗西斯库尔吉安'],
    title: '无尽之水',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '佛手柑与白花的洁净组合，干净到像蒸馏水过滤过的花香，极简主义的极致。',
    fragranceFamily: '柑橘花香调',
    top: ['佛手柑', '柠檬'],
    middle: ['铃兰', '白花'],
    base: ['麝香', '木质'],
    people: ['极简主义者', '喜欢"像没喷"的人', '洁净感追求者'],
    peopleTags: ['极致洁净', '像没喷', '白衬衫2.0', '极简主义', '高级皂感'],
    scenes: ['日常通勤', '办公', '炎热夏日', '近距离社交'],
    similar: ['Jo Malone', 'Byredo'],
    description: 'MFK 的"高级肥皂水"——但这里的肥皂是 500 欧元一块的那种。',
    imageSeed: 'mfk-aqua-universalis',
    palette: ['#e8f0f4', '#fafcfd', '#b0c8d8', '#1c242c'],
    notesIntro: '这支香的名字完美描述了它的气味——一望无际的纯净。前调佛手柑与柠檬明亮洁净像刚拧开的矿泉水；中段铃兰与白花轻到几乎不存在，只是给空气镀上一层淡淡的甜；尾调麝香与木质的搭配让它成为"你闻起来很干净"而不是"你喷了香水"。',
  },
  {
    fragranceNames: ['柏林少女', 'la fille de berlin', 'serge lutens berlin'],
    brand: 'Serge Lutens / 芦丹氏',
    brandAliases: ['serge lutens', '芦丹氏', 'serge'],
    title: '柏林少女',
    gender: '偏女性',
    intensity: 4,
    season: '秋冬 / 夜晚',
    smell: '玫瑰与粉红胡椒的组合，像一朵带刺的深红玫瑰，复古、哥特、有态度。',
    fragranceFamily: '东方花香调',
    top: ['粉红胡椒', '天竺葵'],
    middle: ['大马士革玫瑰'],
    base: ['橡苔', '麝香', '蜂蜜'],
    people: ['喜欢暗黑美学的人', '独立女性', '复古文艺爱好者'],
    peopleTags: ['暗黑玫瑰', '哥特美学', '独立女性', '复古文艺', '有态度'],
    scenes: ['夜晚出行', '约会', '秋冬日常', '艺术场所'],
    similar: ['Frédéric Malle', 'Le Labo'],
    description: '芦丹氏最有名的作品之一，"玫瑰是我偷的，你爱的人是我杀的"。',
    imageSeed: 'serge-lutens-la-fille-de-berlin',
    palette: ['#7b1a2e', '#c4405a', '#1f050c', '#f0d0d8'],
    notesIntro: '它是一朵泡在金属里的深红色玫瑰。前调粉红胡椒的辛辣尖锐，像玫瑰茎上的刺；中段大马士革玫瑰浓烈、饱满、不带一丝甜腻的讨好；尾调橡苔与蜂蜜的组合形成一种暗色甜感——危险、迷人、让人想到柏林冬天的黄昏。',
  },
  {
    fragranceNames: ['孤儿怨', 'lorpheline', 'serge lutens orpheline'],
    brand: 'Serge Lutens / 芦丹氏',
    brandAliases: ['serge lutens', '芦丹氏', 'serge'],
    title: '孤儿怨',
    gender: '中性',
    intensity: 3,
    season: '秋冬 / 独处',
    smell: '焚香与麝香的纯净化组合，冷冽、孤寂、像一座空无一人的古老教堂。',
    fragranceFamily: '焚香麝香调',
    top: ['焚香', '香灰'],
    middle: ['麝香'],
    base: ['木质', '乳香'],
    people: ['喜欢孤冷气质的人', '冥想独处', '极简宗教感审美'],
    peopleTags: ['焚香孤冷', '宗教感', '冥想气质', '独处审美', '极简冷感'],
    scenes: ['独处', '阅读', '冬季', '冥想/瑜伽'],
    similar: ['Diptyque', 'Le Labo'],
    description: '名字和气味高度一致——孤独、沉默、与自己相处。',
    imageSeed: 'serge-lutens-l-orpheline',
    palette: ['#2a2428', '#6e6468', '#0c0a0c', '#d8d4d6'],
    notesIntro: '这是最诚实的香水之一——名字叫孤儿怨，气味也真的让人感到孤独。前调焚香与香灰立刻建立一种宗教般的空旷感，像推开一座冬天无人的石教堂；中段麝香带着体温的暗示却没有任何暖意；尾调乳香与木质让一切更安静、更沉默。不是取悦别人的香，是和自己的对话。',
  },
  {
    fragranceNames: ['事后清晨男', 'loewe 001 man', '事后清晨'],
    brand: 'Loewe / 罗意威',
    brandAliases: ['loewe', '罗意威'],
    title: '事后清晨男',
    gender: '偏男性',
    intensity: 3,
    season: '秋冬 / 亲密场景',
    smell: '檀木、柏树与麝香的木质组合，干净、温暖、带一点暧昧的肌肤感。',
    fragranceFamily: '木质调',
    top: ['柠檬', '小豆蔻'],
    middle: ['柏树', '檀木', '紫罗兰'],
    base: ['麝香', '广藿香'],
    people: ['喜欢亲密感木质的人', '情侣', '暧昧期选手'],
    peopleTags: ['暧昧木质', '亲密感', '暧昧氛围', '干净温暖', '情侣对香'],
    scenes: ['约会', '清晨', '亲密场合', '秋冬通勤'],
    similar: ['Tom Ford', 'Le Labo'],
    description: 'Loewe 最出名的对香之一，"事后清晨"这个名字本身就是氛围感满分。',
    imageSeed: 'loewe-001-man',
    palette: ['#8b7b6a', '#dcd5cc', '#3d3428', '#1c1814'],
    notesIntro: '它的名字是"事后清晨"，气味也确实让人想到清晨——干净、慵懒、阳光刚照进来。前调柠檬与小豆蔻清新开场，中段柏树与檀木把温度慢慢升起来，尾调麝香贴肤释放出一种像刚洗完澡又躺回被窝的温暖，暧昧但不直白。',
  },
  {
    fragranceNames: ['事后清晨女', 'loewe 001 woman'],
    brand: 'Loewe / 罗意威',
    brandAliases: ['loewe', '罗意威'],
    title: '事后清晨女',
    gender: '偏女性',
    intensity: 3,
    season: '秋冬 / 亲密场景',
    smell: '香草、檀木与柑橘的组合，比男版更甜润、更软、更有奶感。',
    fragranceFamily: '东方木质调',
    top: ['柑橘', '粉红胡椒'],
    middle: ['檀木', '茉莉'],
    base: ['香草', '琥珀', '麝香'],
    people: ['喜欢奶甜木感的人', '情侣', '温柔气质'],
    peopleTags: ['奶甜木质', '亲密氛围', '温柔软糯', '情侣对香', '暖甜感'],
    scenes: ['约会', '清晨', '亲密场合', '居家'],
    similar: ['Tom Ford', 'Dior'],
    description: 'Loewe 001 女版，比男版更温暖更甜，像肌肤上残留的香草奶香。',
    imageSeed: 'loewe-001-woman',
    palette: ['#c4a080', '#f2e8dc', '#6e4e38', '#241810'],
    notesIntro: '如果说男版是清晨的阳光，女版就是清晨的奶沫。前调柑橘与粉红胡椒带来一丝轻快，中段檀木徐徐展开，温暖而柔软；尾调香草、琥珀与麝香构成一种肌肤感的甜润，像皮肤上残留的淡淡香草味道——亲密、暧昧、让人想靠得更近。',
  },
  {
    fragranceNames: ['鹿首', 'lord george', 'penhaligons lord george'],
    brand: "Penhaligon's / 潘海利根",
    brandAliases: ['penhaligons', "penhaligon's", '潘海利根'],
    title: '鹿首',
    gender: '偏男性',
    intensity: 4,
    season: '秋冬 / 正式场合',
    smell: '白兰地、刮胡皂与木质烟草的组合，像一位英国绅士的梳妆间。',
    fragranceFamily: '木质酒香调',
    top: ['白兰地'],
    middle: ['刮胡皂', '烟草'],
    base: ['零陵香豆', '木质'],
    people: ['喜欢英伦绅士风的人', '成熟男性', '收藏爱好者'],
    peopleTags: ['英伦绅士', '酒香木质', '复古格调', '收藏级', '成熟型男'],
    scenes: ['正式场合', '晚宴', '冬季通勤', '收藏展示'],
    similar: ['Tom Ford', 'Kilian'],
    description: '潘海利根兽首系列最受欢迎的"鹿首"，瓶盖本身就是一件艺术品。',
    imageSeed: 'penhaligons-lord-george',
    palette: ['#3a2a1a', '#8b6e4a', '#14100a', '#d8c8b0'],
    notesIntro: '它是瓶盖被设计成雄鹿头的兽首系列中最火的一支。气味像一个英国贵族的私人俱乐部——前调白兰地浓郁醇厚，中段刮胡皂的洁净感与烟草的干燥感形成一台绅士的双重奏，尾调零陵香豆与木质让它既庄重又性感，像一位穿着三件套却松开了领带的绅士。',
  },
  {
    fragranceNames: ['狐狸', 'duchess rose', 'penhaligons duchess rose'],
    brand: "Penhaligon's / 潘海利根",
    brandAliases: ['penhaligons', "penhaligon's", '潘海利根'],
    title: '狐狸',
    gender: '偏女性',
    intensity: 3,
    season: '春秋 / 约会',
    smell: '玫瑰与柑橘的优雅组合，像一位穿着丝绒长裙的贵族小姐在玫瑰园里喝着下午茶。',
    fragranceFamily: '花香柑橘调',
    top: ['柑橘', '玫瑰'],
    middle: ['大马士革玫瑰'],
    base: ['麝香', '木质'],
    people: ['喜欢英式优雅的人', '玫瑰爱好者', '下午茶氛围'],
    peopleTags: ['英式优雅', '贵族玫瑰', '下午茶', '精致女性', '丝绒感'],
    scenes: ['下午茶', '约会', '正式午餐', '春日出行'],
    similar: ['Diptyque', 'Chanel'],
    description: '兽首系列"狐狸"——优雅、聪明、带一丝狡黠的迷人玫瑰。',
    imageSeed: 'penhaligons-duchess-rose',
    palette: ['#c48888', '#f5e8e8', '#7a3a3a', '#1c1414'],
    notesIntro: '它的灵感来自潘海利根虚构的贵族故事中的 Duchess Rose——一位渴望逃离沉闷婚姻寻找刺激的公爵夫人。香气是一朵穿上丝绒礼服的玫瑰，前调柑橘让它明亮鲜活，中段大马士革玫瑰优雅展开，尾调麝香与木质为它镀上一层绒布般的质感。',
  },
  {
    fragranceNames: ['桃金娘加州桂', 'mirto di panarea', 'acqua di parma mirto'],
    brand: 'Acqua di Parma / 帕尔玛之水',
    brandAliases: ['acqua di parma', '帕尔玛之水', 'adp'],
    title: '桃金娘加州桂',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 度假',
    smell: '桃金娘、柠檬与海风气息，像地中海岛上一个完美的夏日午后。',
    fragranceFamily: '柑橘海洋调',
    top: ['桃金娘', '柠檬', '佛手柑'],
    middle: ['海风', '茉莉', '玫瑰'],
    base: ['杜松', '雪松', '琥珀'],
    people: ['喜欢海洋感的人', '夏日度假风', '清爽通勤党'],
    peopleTags: ['地中海度假', '夏日海风', '清爽干净', '蓝色气息', '治愈系'],
    scenes: ['海边度假', '夏日通勤', '旅行', '户外活动'],
    similar: ['Jo Malone', 'Diptyque'],
    description: '帕尔玛之水蓝色地中海系列的入门神作，一瓶装下了整个地中海夏天。',
    imageSeed: 'adp-mirto-di-panarea',
    palette: ['#4a8ab8', '#c8dde8', '#1a3040', '#f0f6f8'],
    notesIntro: '它的灵感来自地中海上的帕纳雷阿岛。前调桃金娘与柠檬的组合像切开一颗新鲜柠檬挤在海风里，中段茉莉与玫瑰给出一点柔软的花香但不抢戏，尾调杜松与雪松像晒了太阳的干燥木质。整体就是两个字——夏天。穿上它就去买机票吧。',
    wearingTips: '搭配亚麻白衬衫与浅色牛仔裤，夏日度假最佳搭档。',
    longevity: '3-4小时',
    sillage: '适中偏轻柔，一臂之内可感知',
  },
  {
    fragranceNames: ['阳光琥珀', 'soleil blanc', '汤姆福特阳光琥珀'],
    brand: 'Tom Ford / 汤姆·福特',
    brandAliases: ['tom ford', 'tomford', '汤姆福特', '汤姆·福特'],
    title: '阳光琥珀',
    gender: '中性 / 偏女性',
    intensity: 4,
    season: '春夏 / 度假',
    smell: '椰奶、晚香玉与琥珀的暖甜组合，像在热带海岛上晒着太阳涂防晒油的奢华度假感。',
    fragranceFamily: '东方花香调',
    top: ['开心果', '佛手柑', '小豆蔻'],
    middle: ['晚香玉', '依兰', '茉莉'],
    base: ['椰子', '琥珀', '零陵香豆'],
    people: ['喜欢温暖度假感的人', '白花爱好者', '追求高级甜感的人'],
    peopleTags: ['热带度假', '暖甜椰奶', '奢华白花', '海岛风情', '贵妇感'],
    scenes: ['度假', '夏日约会', '户外派对', '海滩'],
    similar: ['Kilian', 'Gucci'],
    description: 'Tom Ford 私人调香系列中最"贵妇度假"的一支，像圣巴特岛的午后阳光被装进了瓶子。',
    imageSeed: 'tom-ford-soleil-blanc',
    palette: ['#f2d8a8', '#fdf8f0', '#c4985a', '#1a1208'],
    notesIntro: '这支香让 Tom Ford 本人都说"这是我最喜欢的私人调香作品之一"。前调开心果与佛手柑带来轻快的开场，中段晚香玉携依兰与茉莉以白色花瓣铺满整个气味空间，尾调椰子与琥珀的暖甜让人联想到昂贵防晒霜混合着肌肤温度与海风盐分的味道。它不低调——它是一张去圣巴特岛的头等舱机票，你是头排躺椅上晒着太阳喝着椰汁的那位。',
    wearingTips: '搭配白色亚麻套装与金色配饰，度假时喷在发梢与脚踝效果绝佳。',
    longevity: '6-8小时',
    sillage: '强大，走过留下明显香气尾迹',
  },
  {
    fragranceNames: ['荆棘玫瑰', 'rose prick', 'tom ford rose prick'],
    brand: 'Tom Ford / 汤姆·福特',
    brandAliases: ['tom ford', 'tomford', '汤姆福特', '汤姆·福特'],
    title: '荆棘玫瑰',
    gender: '中性',
    intensity: 4,
    season: '春秋 / 约会',
    smell: '三种玫瑰叠加花椒与姜黄，像一朵带刺的野玫瑰，性感、大胆、不可驯服。',
    fragranceFamily: '辛香玫瑰调',
    top: ['花椒', '姜黄'],
    middle: ['保加利亚玫瑰', '大马士革玫瑰', '五月玫瑰'],
    base: ['广藿香', '零陵香豆'],
    people: ['喜欢大胆玫瑰的人', '约会场合', '追求个性的人'],
    peopleTags: ['野性玫瑰', '大胆性感', '不可驯服', '约会利器', '辛香诱惑'],
    scenes: ['约会之夜', '派对', '晚间社交', '秋冬出行'],
    similar: ['Frédéric Malle', 'Serge Lutens'],
    description: 'Tom Ford 的私人玫瑰花园——不过这座花园是野生的，玫瑰都带着刺。粉色瓶身、黑色标签，瓶色就是态度。',
    imageSeed: 'tom-ford-rose-prick',
    palette: ['#d8a0b0', '#fdf2f5', '#8b3a50', '#1c0c12'],
    notesIntro: '名字就是态度——"Rose Prick"，带刺的玫瑰。Tom Ford 本人说"我想做一支既精致又带冒犯性的玫瑰"。前调花椒与姜黄的辛香像玫瑰茎上的尖刺，让人先被刺痛才闻到花香；中段三重玫瑰层层递进——保加利亚的甜、大马士革的饱满、五月玫瑰的清透；尾调广藿香与零陵香豆收底，留下暗色、性感、让人忍不住回头闻的尾韵。它不是送花束，是扔一朵带露水的野玫瑰砸在你胸口。',
    wearingTips: '搭配黑色皮衣或丝绒外套，玫瑰香与皮质碰撞出反差张力。',
    longevity: '7-9小时',
    sillage: '强扩散，两米内清晰可辨',
  },
  {
    fragranceNames: ['灰色香根草', 'grey vetiver', 'tom ford grey vetiver'],
    brand: 'Tom Ford / 汤姆·福特',
    brandAliases: ['tom ford', 'tomford', '汤姆福特', '汤姆·福特'],
    title: '灰色香根草',
    gender: '偏男性',
    intensity: 3,
    season: '春夏 / 商务',
    smell: '干净的香根草与柑橘组合，像一件剪裁完美的高级灰西装，利落、克制、充满现代感。',
    fragranceFamily: '木质柑橘调',
    top: ['葡萄柚', '橙花', '鼠尾草'],
    middle: ['鸢尾', '肉豆蔻'],
    base: ['香根草', '木质', '橡苔'],
    people: ['商务精英男性', '喜欢干净利落的人', '极简主义绅士'],
    peopleTags: ['商务精英', '干净利落', '灰西装感', '极简绅士', '现代男性'],
    scenes: ['商务会面', '通勤', '正式场合', '春夏办公'],
    similar: ['Creed', 'Hermès'],
    description: 'Tom Ford 对经典香根草主题的现代演绎——不土不旧，像一座全玻璃幕墙的现代建筑。',
    imageSeed: 'tom-ford-grey-vetiver',
    palette: ['#b0b8b8', '#e8ecec', '#4a5252', '#141818'],
    notesIntro: '这是一支把"干净"做到极致的男香。前调葡萄柚与橙花的明亮柑橘开场像刚熨好的白衬衫领口，中段鸢尾赋予一种粉末质感的优雅，尾调的主角香根草终于登场——但不是传统那种土腥味的香根草，而是经过"灰色滤镜"处理的现代版本：干燥、洁净、利落。整体像一位穿灰色定制西装、踩着 Loewe 皮鞋的现代绅士——不张扬，但每个细节都写着高级。',
    wearingTips: '灰色或深蓝西装的最佳搭档，喷在衬衫领口与手腕，商务场合完美。',
    longevity: '5-6小时',
    sillage: '适中偏柔和，亲密距离内优雅存在',
  },
  {
    fragranceNames: ['鼠尾草与海盐', 'wood sage sea salt', 'jo malone wood sage'],
    brand: 'Jo Malone / 祖玛珑',
    brandAliases: ['jo malone', '祖玛珑', 'jomalone'],
    title: '鼠尾草与海盐',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 通勤',
    smell: '鼠尾草、海盐与矿物质地，像站在英国的海崖上，海风吹过带来的矿物与草木气息。',
    fragranceFamily: '木质海洋调',
    top: ['鼠尾草', '海盐'],
    middle: ['矿物质', '海水'],
    base: ['木质', '琥珀'],
    people: ['喜欢海洋感的人', '极简通勤党', '文艺青年'],
    peopleTags: ['海风气息', '矿物感', '英伦海岸', '极简清新', '文艺日常'],
    scenes: ['通勤', '夏日出行', '图书馆', '咖啡馆'],
    similar: ['Diptyque', 'Acqua di Parma'],
    description: 'Jo Malone 最受欢迎的香水之一，它不是热带海洋的甜，而是英国海岸的冷——带盐粒的、有风骨的清新。',
    imageSeed: 'jo-malone-wood-sage-sea-salt',
    palette: ['#c8d4cc', '#f4f7f5', '#8a9e92', '#1a1f1c'],
    notesIntro: '这支香颠覆了"海洋调=西瓜酮"的刻板印象。它没有一丝人工海洋的甜腻，而是还原了英国海岸真实的质感：前调鼠尾草的草本绿意混合粗糙的海盐矿物感，中段仿佛海风带着细碎浪花打在脸上的湿润与微咸，尾调木质与琥珀让它像退潮后留在礁石缝隙里的干燥浮木。它让人想到穿着风衣走在多塞特海岸上的伍尔芙——孤独、清醒、与自然对望。',
    wearingTips: '搭配米色风衣或棉麻衬衫，适合文艺气质的日常穿搭。',
    longevity: '2-3小时',
    sillage: '轻柔贴肤，仅亲密距离可感知',
  },
  {
    fragranceNames: ['牡丹与嫣红麂皮', 'peony blush suede', 'jo malone peony'],
    brand: 'Jo Malone / 祖玛珑',
    brandAliases: ['jo malone', '祖玛珑', 'jomalone'],
    title: '牡丹与嫣红麂皮',
    gender: '偏女性',
    intensity: 3,
    season: '春秋 / 约会',
    smell: '牡丹花、红苹果与麂皮的组合，像一只柔软的麂皮手袋里装了一束刚摘的牡丹，精致又有质感。',
    fragranceFamily: '花香果香调',
    top: ['红苹果'],
    middle: ['牡丹', '玫瑰', '康乃馨'],
    base: ['麂皮', '麝香'],
    people: ['喜欢精致感的人', '约会日常场景', '温柔女性化气质'],
    peopleTags: ['精致牡丹', '温柔女性', '约会首选', '麂皮质感', '轻奢日常'],
    scenes: ['约会', '下午茶', '通勤', '春日出行'],
    similar: ['Dior', 'Chanel'],
    description: 'Jo Malone 中最有"质料感"的一支——牡丹的花香被麂皮衬得像丝绸上的刺绣，精致而柔软。',
    imageSeed: 'jo-malone-peony-blush-suede',
    palette: ['#e8c8d0', '#fdf6f8', '#b87888', '#1c1418'],
    notesIntro: '这支香的奇妙之处在于"触觉通感"——你闻到它的时候，手指仿佛也摸到了柔软的麂皮。前调红苹果给出清甜果香的开场，中段牡丹与玫瑰、康乃馨叠出一捧精致的花束，不盛大但十分精巧；尾调麂皮的加入让整支香从"花香"变成了"质感"——像一只精心保养的麂皮手袋里放了一小束刚从花市买回来的牡丹，花瓣上还带着水珠。它温柔但不软糯，精致但不张扬。',
    wearingTips: '搭配米色风衣与丝巾，适合春日下午茶或约会，喷在手腕与耳后。',
    longevity: '4-5小时',
    sillage: '适中，一臂内可感知',
  },
  {
    fragranceNames: ['黑莓与月桂叶', 'blackberry bay', 'jo malone blackberry'],
    brand: 'Jo Malone / 祖玛珑',
    brandAliases: ['jo malone', '祖玛珑', 'jomalone'],
    title: '黑莓与月桂叶',
    gender: '中性',
    intensity: 2,
    season: '秋冬 / 日常',
    smell: '酸甜的黑莓汁液混合月桂叶的草木绿意与雪松，像秋天在森林里摘野果，手指被浆果染紫。',
    fragranceFamily: '果香绿调',
    top: ['黑莓', '葡萄柚'],
    middle: ['月桂叶', '花香'],
    base: ['雪松', '香根草'],
    people: ['喜欢自然野趣的人', '文艺青年', '秋冬爱好者'],
    peopleTags: ['浆果酸甜', '森林野趣', '秋日气息', '文艺自然', '独特果香'],
    scenes: ['秋日出行', '图书馆', '日常通勤', '户外散步'],
    similar: ['Diptyque', 'Byredo'],
    description: 'Jo Malone 最具英伦田园气质的一支——像穿过一片野生黑莓灌木丛，浆果的酸甜与月桂叶的绿意织成一件秋天的毛衣。',
    imageSeed: 'jo-malone-blackberry-bay',
    palette: ['#6b2a4a', '#c8a8b8', '#281018', '#f2e8ec'],
    notesIntro: '这支香让很多声称"不喜欢果香"的人叛变了。前调黑莓的酸甜汁液感极其逼真，仿佛你刚用手指捏碎了一颗熟透的野黑莓；中段月桂叶的草木绿意把果甜从"糖果"方向拉回"森林"方向，它不是水果糖，是长在灌木丛里的真浆果。尾调雪松与香根草让甜意沉下来，变成一种干燥、温暖的木质底韵。整支香像一幅英国水彩画——秋日的灌木丛、深紫色的浆果、带着湿气的泥土。',
    wearingTips: '搭配深绿色或棕色系服装，秋冬户外散步时的完美伴侣。',
    longevity: '3-4小时',
    sillage: '轻柔，近身可感知',
  },
  {
    fragranceNames: ['荒漠孤魂', 'mojave ghost', 'byredo mojave ghost'],
    brand: 'Byredo / 百瑞德',
    brandAliases: ['byredo', '百瑞德'],
    title: '荒漠孤魂',
    gender: '中性',
    intensity: 3,
    season: '春秋 / 日常',
    smell: '木兰、紫罗兰与琥珀的组合，干燥、木质、带粉感，像沙漠中一株独自开花的植物，孤独而美丽。',
    fragranceFamily: '木质花香调',
    top: ['黄葵', '人心果'],
    middle: ['木兰', '紫罗兰', '檀木'],
    base: ['雪松', '琥珀', '麝香'],
    people: ['喜欢清冷高级感的人', '文艺青年', '独立女性'],
    peopleTags: ['沙漠之花', '清冷高级', '孤独美学', '独立气质', '文艺高级'],
    scenes: ['日常通勤', '艺术展览', '咖啡馆', '独处时光'],
    similar: ['Le Labo', 'Serge Lutens'],
    description: 'Byredo 最有故事性的一支——灵感来自莫哈韦沙漠中一种叫"鬼魂花"的植物，它能在极端干旱中开出淡紫色的花。',
    imageSeed: 'byredo-mojave-ghost',
    palette: ['#c8b8d0', '#f6f2f8', '#8a7098', '#1a141c'],
    notesIntro: '创始人 Ben Gorham 说这支香的灵感来自莫哈韦沙漠——一片被视为生命禁区的地方，却有一种植物在每年春天固执地开出淡紫色花朵，在原住民的语言里它被称为"鬼魂花"。前调黄葵与人心果带来微微的果甜与木质，中段木兰与紫罗兰展开一层干燥的粉感花香——不是花园玫瑰那种湿润的甜，而是像化石里的花粉，干燥、永恒、超越时间。尾调雪松与琥珀让它稳固下来，像沙漠夕阳拉长了一株孤植的影子。',
    wearingTips: '搭配黑白灰色系、宽松剪裁的服装，适合有独立思考的审美人格。',
    longevity: '5-7小时',
    sillage: '适中，近一臂可感知',
  },
  {
    fragranceNames: ['白色浪漫', 'blanche', 'byredo blanche'],
    brand: 'Byredo / 百瑞德',
    brandAliases: ['byredo', '百瑞德'],
    title: '白色浪漫',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '醛香、白玫瑰与白麝香组成的极致洁净三重奏，像刚洗好的白床单在阳光下飘扬。',
    fragranceFamily: '醛香花香调',
    top: ['醛香', '白玫瑰', '粉红胡椒'],
    middle: ['橙花', '牡丹', '紫罗兰'],
    base: ['白麝香', '檀木', '木质'],
    people: ['极度洁癖级洁净感追求者', '极简主义者', '白衬衫爱好者'],
    peopleTags: ['极致洁净', '白床单感', '极简白', '洁净癖好', '纯净透明'],
    scenes: ['日常通勤', '办公', '居家', '春夏任意'],
    similar: ['MFK', 'Jo Malone'],
    description: 'Byredo 为 Ben Gorham 的妻子创作的香水——"她喜欢刚洗好的白床单的味道"。这就是那床白床单。',
    imageSeed: 'byredo-blanche',
    palette: ['#f0ece8', '#fafaf8', '#c8c0b8', '#1c1818'],
    notesIntro: '创始人 Ben Gorham 为他妻子创作了这支香。他问妻子想要什么味道，她说："刚洗好的白床单在阳光下晾干的味道。"这大概是全世界最难的命题——你怎么把"干净"做成一支香水？前调醛香与白玫瑰像洗衣液的泡沫在空气里炸开，中段橙花与牡丹给了一种柔软的花感，像织物在阳光下蓬松的样子；尾调白麝香与檀木让它变得像你把脸埋进刚晒干的床单里深吸一口气——没有香味，只有"干净"的味道。它是"无香之香"的最高境界。',
    wearingTips: '任何时间任何场合，尤其适合想要"闻起来很干净但不像喷了香水"的场合。',
    longevity: '4-5小时',
    sillage: '贴身轻柔，极近距离',
  },
  {
    fragranceNames: ['水中影', 'lombre dans leau', 'diptyque lombre'],
    brand: 'Diptyque / 蒂普提克',
    brandAliases: ['diptyque', '蒂普提克'],
    title: '水中影',
    gender: '中性',
    intensity: 3,
    season: '春夏 / 文艺',
    smell: '黑醋栗叶与玫瑰的组合，绿意盎然到近乎刺鼻，像池塘边的折下的玫瑰倒影在水中。',
    fragranceFamily: '绿意花香调',
    top: ['黑醋栗叶', '黑醋栗芽'],
    middle: ['玫瑰'],
    base: ['麝香'],
    people: ['喜欢青绿感的人', '文艺青年', '自然主义者'],
    peopleTags: ['绿意炸裂', '池边倒影', '文艺气质', '自然野趣', '青涩玫瑰'],
    scenes: ['春日公园', '文艺活动', '画廊', '户外'],
    similar: ['Frédéric Malle', 'Byredo'],
    description: 'Diptyque 最具辨识度的绿意玫瑰——与其说它是玫瑰香，不如说它是"折断玫瑰茎时流出的绿色汁液"。',
    imageSeed: 'diptyque-lombre-dans-leau',
    palette: ['#4a6b3a', '#c8dcc0', '#1e2c14', '#f0f4ec'],
    notesIntro: '这支香的名字本身就是一首诗——"水中影"。它的绿意强烈到让你觉得自己不是在闻一朵玫瑰花，而是在池塘边折下一整枝带叶、带刺、带着冰凉池水的玫瑰，茎断口处流出绿色的汁液染在指尖。前调黑醋栗叶与芽的绿意如一场小型绿色爆炸，带着番茄叶般的青涩与酸意；中段玫瑰终于浮现，但这是一朵被绿意包裹的、半开的、野生的玫瑰——没有花园玫瑰的精致，有湿地的野性。尾调麝香只是淡淡一笔，把整个场景收束成一池春水的倒影。',
    wearingTips: '搭配绿色系或白色系服装，春日户外活动的绝佳选择。',
    longevity: '5-7小时',
    sillage: '适中偏强，走过后留有绿意尾迹',
  },
  {
    fragranceNames: ['杜桑', 'do son', 'diptyque do son'],
    brand: 'Diptyque / 蒂普提克',
    brandAliases: ['diptyque', '蒂普提克'],
    title: '杜桑',
    gender: '偏女性 / 中性',
    intensity: 4,
    season: '春夏 / 夜晚',
    smell: '晚香玉、橙花与茉莉的白花三重奏，浓郁、湿润、像越南海风里飘来的白色花香。',
    fragranceFamily: '白花调',
    top: ['橙花', '鸢尾'],
    middle: ['晚香玉', '茉莉'],
    base: ['麝香', '安息香'],
    people: ['白花爱好者', '喜欢晚香玉的人', '成熟优雅女性'],
    peopleTags: ['晚香玉女王', '越南海风', '白花盛宴', '成熟优雅', '湿润花香'],
    scenes: ['晚宴', '约会', '夏日夜晚', '正式场合'],
    similar: ['Gucci', 'Tom Ford'],
    description: 'Diptyque 创始人童年记忆的再现——越南杜桑湾的夜晚，海风送来晚香玉的浓郁花香。一支有记忆和地理坐标的香水。',
    imageSeed: 'diptyque-do-son',
    palette: ['#f0e8d0', '#fdfaf4', '#c8a870', '#1c140c'],
    notesIntro: '创始人的童年有大量时间在越南度过。杜桑（Do Son）是海防市附近的一个海湾，夏天的夜晚，海风会把晚香玉的香气从岸上一直吹到防波堤尽头。这支香就是那个记忆的嗅觉还原——前调橙花与鸢尾清新开场，像海风中第一缕花香；中段晚香玉与茉莉喷薄而出，浓郁、湿润、带着一丝奶感，不是干燥的花粉而是被海雾裹着的花瓣；尾调麝香与安息香将它收成一抹柔和的、带有体温的白花。它不是白花的轰炸，是白花的浪潮——一波一波，很有节奏。',
    wearingTips: '搭配丝质衣裙或旗袍，夏日夜晚约会或正式晚宴的不二之选。',
    longevity: '6-8小时',
    sillage: '强扩散，入场即为人所知',
  },
  {
    fragranceNames: ['香柠檬22', 'bergamote 22', 'le labo bergamote'],
    brand: 'Le Labo / 勒拉博',
    brandAliases: ['le labo', 'lelabo', '勒拉博'],
    title: '香柠檬22',
    gender: '中性',
    intensity: 3,
    season: '春夏 / 日常',
    smell: '香柠檬、葡萄柚与香根草的明亮组合，像一杯加了冰的柑橘调鸡尾酒，清爽但有层次。',
    fragranceFamily: '柑橘木质调',
    top: ['香柠檬', '葡萄柚'],
    middle: ['香根草', '橙花'],
    base: ['雪松', '琥珀', '麝香'],
    people: ['柑橘调爱好者', '春夏通勤党', '喜欢清爽高级感的人'],
    peopleTags: ['明亮柑橘', '清爽高级', '春夏通勤', '中性魅力', '鸡尾酒感'],
    scenes: ['夏日通勤', '户外活动', '咖啡馆', '约会'],
    similar: ['Jo Malone', 'Acqua di Parma'],
    description: 'Le Labo 对柑橘调的"高级化"处理——不是简单的柠檬水，而是一杯用摇酒器精心调制的柑橘鸡尾酒。',
    imageSeed: 'le-labo-bergamote-22',
    palette: ['#e8d888', '#fdfae8', '#b8a830', '#1c1a08'],
    notesIntro: 'Le Labo 的名字规则是"主原料+原料数量"，这支就是"22种原料中的香柠檬"。但它不止是一颗柠檬——前调香柠檬与葡萄柚的明亮柑橘像被摇酒器剧烈摇晃后倒入冰杯的那一刻，汁液飞溅、泡沫四溢；中段香根草与橙花给它装上骨架，把"柑橘"从简单的果甜中拉出来，变成了更复杂、更成人化的味道；尾调雪松与琥珀让它像鸡尾酒杯底剩下的最后一口——微酸、微苦、但让人回味。',
    wearingTips: '夏日白T恤与浅色牛仔裤的最佳搭档，喷在锁骨与手腕。',
    longevity: '4-5小时',
    sillage: '适中，社交距离可感知',
  },
  {
    fragranceNames: ['红色百家乐540', 'baccarat rouge 540 extrait', 'mfk 540 extrait'],
    brand: 'MFK / 梅森弗朗西斯库尔吉安',
    brandAliases: ['mfk', 'maison francis kurkdjian', '弗朗西斯库尔吉安'],
    title: '红色百家乐540 精粹版',
    gender: '中性',
    intensity: 5,
    season: '秋冬 / 四季',
    smell: '比原版更浓郁，苦杏仁与雪松的双重奏被放大了两倍，像红水晶被加热到 540°C 融化的瞬间。',
    fragranceFamily: '木质琥珀调',
    top: ['苦杏仁', '番红花'],
    middle: ['埃及茉莉', '雪松'],
    base: ['麝香', '木质琥珀', '冷杉树脂'],
    people: ['原版540的深度爱好者', '追求极致扩散与留香的人', '重香爱好者'],
    peopleTags: ['原版加强', '极致扩散', '重香王者', '杏仁炸弹', '奢华加强版'],
    scenes: ['晚宴', '正式场合', '秋冬通勤', '重要社交'],
    similar: ['Tom Ford', 'Kilian'],
    description: '红水晶540的"高浓度精粹版"——如果原版是耳语，精粹版就是一记重锤，扩散与留香翻倍。',
    imageSeed: 'mfk-baccarat-rouge-540-extrait',
    palette: ['#9a2020', '#e8a0a0', '#2c0808', '#fcf0f0'],
    notesIntro: '在原版红水晶540大火之后，MFK推出了Extrait de Parfum精粹版。如果说原版是一颗在水晶灯下闪闪发光的杏仁糖，那么精粹版就是把那颗杏仁糖投入了540°C的熔炉——更浓、更烈、更不克制。前调苦杏仁的浓度翻倍，像杏仁利口酒洒了一桌；中段茉莉与雪松在高温下融化变形，变得更抽象、更迷幻；尾调麝香与冷杉树脂像熔岩冷却后形成的琥珀色玻璃——坚硬、透亮、无法忽视。它不再是"你喷了什么"的提问，而是"你走进来之前我就知道你在走廊上"的宣言。',
    wearingTips: '正式晚宴或重要社交场合，一喷即可，切忌过量——它是真正的"一泵走全场"。',
    longevity: '12+小时',
    sillage: '极强，三米外可感知，衣物上留香超过24小时',
  },
  {
    fragranceNames: ['温柔流动', 'gentle fluidity', 'mfk gentle fluidity'],
    brand: 'MFK / 梅森弗朗西斯库尔吉安',
    brandAliases: ['mfk', 'maison francis kurkdjian', '弗朗西斯库尔吉安'],
    title: '温柔流动（银版）',
    gender: '中性',
    intensity: 3,
    season: '四季通用',
    smell: '杜松、肉豆蔻与琥珀的组合，干净、温暖、带金属感的温柔——像融化的银器在皮肤上缓缓流动。',
    fragranceFamily: '木质辛香调',
    top: ['杜松', '肉豆蔻'],
    middle: ['香菜籽', '麝香'],
    base: ['琥珀', '香草', '木质'],
    people: ['喜欢独特温柔感的人', '中性风爱好者', '追求不撞香的人'],
    peopleTags: ['金属温柔', '独特流动', '中性魅力', '四季通用', '低调高级'],
    scenes: ['日常通勤', '约会', '办公', '四季通用'],
    similar: ['Le Labo', 'Byredo'],
    description: 'MFK 最被低估的作品——金银双版中的银版，像液态金属一样流动、干净、又带体温。',
    imageSeed: 'mfk-gentle-fluidity-silver',
    palette: ['#c8d0d8', '#f4f6f8', '#8898a8', '#14181c'],
    notesIntro: 'Gentle Fluidity 有金版和银版两个版本——金版温暖，银版清冷。银版是同一个配方的"金属面"：同样的杜松与肉豆蔻，在金版里是冬日热饮，在银版里变成了冰镇的银器。前调杜松的冷感像不锈钢餐具碰撞的声音，清冽、明亮；中段香菜籽与麝香给了一种介于洁净与温热之间的暧昧质地；尾调琥珀与香草淡淡浮现，像银器因为在手里握了太久而变得微微温热。它是"温柔"的另一种写法——不靠拥抱，靠理解。',
    wearingTips: '四季皆宜的日常香，搭配简约利落的装扮风格最佳。',
    longevity: '6-8小时',
    sillage: '适中，一臂内优雅可感',
  },
  {
    fragranceNames: ['拿破仑之水', 'aventus', 'creed aventus'],
    brand: 'Creed / 拿破仑之水',
    brandAliases: ['creed', 'creed香水', '拿破仑之水'],
    title: '拿破仑之水',
    gender: '偏男性',
    intensity: 4,
    season: '四季通用',
    smell: '菠萝、黑醋栗与桦木的传奇组合，烟熏果香木质调，霸气、自信、像征服世界的男人。',
    fragranceFamily: '果香木质调',
    top: ['菠萝', '黑醋栗', '苹果'],
    middle: ['桦木', '茉莉', '广藿香'],
    base: ['橡苔', '麝香', '香草'],
    people: ['追求成功感的男性', '商务精英', '自信气场'],
    peopleTags: ['成功之香', '王牌香水', '霸气自信', '果香木质', '现代帝王'],
    scenes: ['商务谈判', '重要会议', '晚宴', '四季通用'],
    similar: ['Tom Ford', 'Dior'],
    description: '它被无数人称为"人生之香"——连续多年稳居全球最畅销小众男香榜首。一支让 Creed 从皇室专属走向全球顶流的传奇作品。',
    imageSeed: 'creed-aventus',
    palette: ['#3a2a1a', '#c8b088', '#140c04', '#f0e8d8'],
    notesIntro: 'Aventus，传奇。调香师 Olivier Creed 以拿破仑·波拿巴为灵感，创作了这支"王者之香"。前调菠萝的果甜与黑醋栗的酸甜交织，像一个穿着定制西装的男人走进会议室，所有人都抬头——不是因为他的衣服，是因为他的气场；中段桦木与广藿香构筑出一种干燥的烟熏木质基底，像拿破仑骑着战马穿越战场后，皮革马鞍上残留的气息；尾调橡苔与麝香平稳着陆，留下一种"这个人不需要任何人的认可"的结论。它是香水界的劳力士——你不需要懂表，但你一定知道它不便宜。',
    wearingTips: '西装或商务休闲均可，关键场合的隐形盔甲。喷在胸口与后颈。',
    longevity: '8-12小时',
    sillage: '强大，有存在感但不咄咄逼人',
  },
  {
    fragranceNames: ['爱尔兰绿花呢', 'green irish tweed', 'creed green irish'],
    brand: 'Creed / 拿破仑之水',
    brandAliases: ['creed', 'creed香水', '拿破仑之水'],
    title: '爱尔兰绿花呢',
    gender: '偏男性',
    intensity: 3,
    season: '春夏 / 户外',
    smell: '柠檬马鞭草、紫罗兰叶与鸢尾的绿意组合，像穿行在爱尔兰乡间的绿色旷野，干净、绅士、有贵族感。',
    fragranceFamily: '绿意木质调',
    top: ['柠檬马鞭草', '薄荷'],
    middle: ['紫罗兰叶', '鸢尾'],
    base: ['檀木', '琥珀'],
    people: ['喜欢经典绅士风的人', '户外爱好者', '成熟男性'],
    peopleTags: ['爱尔兰绿野', '经典绅士', '贵族运动', '绿色旷野', '古典优雅'],
    scenes: ['高尔夫', '户外活动', '春夏通勤', '休闲社交'],
    similar: ['Tom Ford', 'Penhaligon\'s'],
    description: '比拿破仑之水更早的 Creed 传奇——传说中 Cary Grant 和克林特·伊斯特伍德的签名香。一支属于旧时代好莱坞的绅士香。',
    imageSeed: 'creed-green-irish-tweed',
    palette: ['#4a6a3a', '#c8dcc0', '#1a2c12', '#f0f4ec'],
    notesIntro: '这支香是 Creed 家族在 1985 年创作的，据说灵感来自 Olivier Creed 在爱尔兰骑马时的体验。前调柠檬马鞭草与薄荷像爱尔兰清晨带着露水的草地，中段紫罗兰叶与鸢尾带来一种粉质质感的绿意——不是鲜割草坪的汁液味，而是被压平的、干燥的绿，像一件做工精良的爱尔兰花呢外套穿在身上；尾调檀木与琥珀温润落地，像打完一场高尔夫后坐在俱乐部喝威士忌的惬意。它不像现代男香那样咄咄逼人，它更像一个无需证明自己的老钱——安静、体面、永远正确。',
    wearingTips: '搭配Polo衫或休闲西装，高尔夫球场或春日户外的最佳搭档。',
    longevity: '6-8小时',
    sillage: '适中优雅，近身可感知',
  },
  {
    fragranceNames: ['皮肤游戏', 'jeux de peau', 'serge lutens jeux de peau'],
    brand: 'Serge Lutens / 芦丹氏',
    brandAliases: ['serge lutens', '芦丹氏', 'serge'],
    title: '皮肤游戏',
    gender: '中性',
    intensity: 4,
    season: '秋冬 / 亲密',
    smell: '烤面包、黄油、甘草与木质，像一家巴黎老面包店凌晨四点飘出的暖香——焦糖色的、可以吃的温暖。',
    fragranceFamily: '美食木质调',
    top: ['小麦', '牛奶'],
    middle: ['甘草', '烤面包'],
    base: ['檀木', '琥珀', '麝香'],
    people: ['美食调爱好者', '喜欢温暖感的人', '秋冬恋家者'],
    peopleTags: ['烤面包', '巴黎面包店', '温暖美食', '秋冬暖香', '治愈系'],
    scenes: ['居家', '秋冬夜晚', '约会', '阅读时光'],
    similar: ['Kilian', 'Tom Ford'],
    description: '芦丹氏最温暖的香水——"Jeux de Peau"直译是"皮肤上的游戏"，它想模拟的是面包的香气在爱人皮肤上留下的温度。',
    imageSeed: 'serge-lutens-jeux-de-peau',
    palette: ['#c89050', '#f8e8d0', '#6a3818', '#1c1008'],
    notesIntro: 'Serge Lutens 本人说这支香的灵感来自他童年记忆中巴黎面包店的凌晨——面包师们开始烤第一批面包，黄油与面粉的香气弥漫整条街。前调小麦与牛奶带着微甜的谷物感，像咬了一口刚出炉的法式面包，外脆内软；中段甘草与烤面包的焦香让它更加复杂，不是傻白甜的"美食"，而是一间有百年历史的老面包店——木质柜台被面粉和黄油浸润了几十年；尾调檀木与琥珀为它铺上最后一道暖光。它是可穿戴的舒适区，喷上它的瞬间就像裹了一条刚烘过的毯子。',
    wearingTips: '搭配毛衣、围巾，秋冬宅家或夜晚约会的完美选择。喷在围巾上留香更久。',
    longevity: '6-8小时',
    sillage: '适中，亲密距离内暖意可感',
  },
  {
    fragranceNames: ['回忆录男', 'memoir man', 'amouage memoir'],
    brand: 'Amouage / 爱慕',
    brandAliases: ['amouage', '爱慕'],
    title: '回忆录男',
    gender: '偏男性',
    intensity: 5,
    season: '秋冬 / 正式',
    smell: '苦艾、焚香与皮革的暗黑三重奏，像一本旧皮面日记翻开时扬起的灰尘与隐秘记忆。',
    fragranceFamily: '木质焚香皮革调',
    top: ['苦艾', '罗勒', '薄荷'],
    middle: ['焚香', '玫瑰', '劳丹脂'],
    base: ['皮革', '愈创木', '檀木'],
    people: ['喜欢暗黑深沉的人', '成熟男性', '收藏级玩家'],
    peopleTags: ['暗黑深沉', '焚香皮革', '回忆录感', '阿曼奢华', '收藏级'],
    scenes: ['正式晚宴', '秋冬夜晚', '独处', '收藏'],
    similar: ['Serge Lutens', 'Nasomatto'],
    description: 'Amouage 是阿曼皇室的御用香水品牌，用料不计成本。这支"回忆录男"是调香师对"记忆"这一主题最文学化的演绎。',
    imageSeed: 'amouage-memoir-man',
    palette: ['#2a1a18', '#6a4a38', '#0c0808', '#d8c8b8'],
    notesIntro: '阿曼皇室品牌 Amouage 的香水用料成本是商业香的几十倍——他们用真的沉香、真的乳香、真的没药。回忆录男是品牌最具文学气质的作品：前调苦艾与罗勒的暗绿色苦意在空气中弥漫，像翻开一本旧皮面日记本时扬起的灰尘呛了你一下；中段焚香与玫瑰交织出宗教感与浪漫感的诡异和谐，仿佛日记本里夹了一朵干枯的玫瑰；尾调皮革与愈创木将一切封存，像合上日记本后把它放进旧皮箱，锁上。它没有讨好任何人的意图——它是穿给自己闻的香水。',
    wearingTips: '搭配深色正装或黑色高领毛衣，秋冬夜晚独处或正式晚宴。',
    longevity: '12+小时',
    sillage: '极强，衣物上留香24小时以上',
  },
  {
    fragranceNames: ['史诗女', 'epic woman', 'amouage epic'],
    brand: 'Amouage / 爱慕',
    brandAliases: ['amouage', '爱慕'],
    title: '史诗女',
    gender: '偏女性',
    intensity: 5,
    season: '秋冬 / 正式',
    smell: '玫瑰、乳香、沉香与茶叶的东方大合奏，像丝绸之路上一队骆驼商队穿过玫瑰谷扬起香料的烟尘。',
    fragranceFamily: '东方花香调',
    top: ['小茴香', '肉桂', '粉红胡椒'],
    middle: ['大马士革玫瑰', '天竺葵', '茶叶'],
    base: ['沉香', '乳香', '香草', '麝香'],
    people: ['喜欢华丽东方香的人', '成熟自信女性', '收藏级玩家'],
    peopleTags: ['东方华丽', '丝绸之路', '玫瑰与沉香', '女王气场', '收藏级'],
    scenes: ['正式晚宴', '重要场合', '冬季', '收藏'],
    similar: ['Serge Lutens', 'MFK'],
    description: 'Amouage 最著名的女香——"史诗"这个名字不是夸张，它从丝绸之路的传说中汲取灵感，是一支有地理坐标和文明记忆的香水。',
    imageSeed: 'amouage-epic-woman',
    palette: ['#6a1a2a', '#c88090', '#1c0810', '#f8e8e8'],
    notesIntro: 'Amouage 的"史诗女"被无数香水评论家认为是现代东方调的巅峰之作。它的灵感来自丝绸之路——不是某一种花或某一种香料，而是驼队从中国出发、穿越中亚、到达波斯这一整条路线上的气味。前调小茴香与肉桂的辛香像香料市场被正午阳光晒得发烫的麻袋，中段大马士革玫瑰与茶叶的相遇是丝路上最美的意外——中国的茶遇见了波斯的玫瑰；尾调沉香、乳香与香草将一切沉降为一幅巨大的波斯地毯——复杂、华丽、每一寸都有故事。它不是一支日常香，它是一支文明。',
    wearingTips: '配晚礼服或正式场合着装，冬季使用最佳。一泵即可——它是艺术，不需要过度扩散。',
    longevity: '12+小时',
    sillage: '极强，仿佛自带光环',
  },
  {
    fragranceNames: ['南十字', 'naxos', 'xerjoff naxos'],
    brand: 'Xerjoff / 希爵夫',
    brandAliases: ['xerjoff', '希爵夫'],
    title: '南十字',
    gender: '中性',
    intensity: 4,
    season: '秋冬 / 夜晚',
    smell: '柑橘、薰衣草、蜂蜜与烟草的意式豪华组合，像在西西里岛的柠檬树下抽一根蜂蜜浸过的雪茄。',
    fragranceFamily: '柑橘烟草调',
    top: ['柠檬', '佛手柑', '薰衣草'],
    middle: ['蜂蜜', '肉桂', '茉莉'],
    base: ['烟草', '零陵香豆', '香草'],
    people: ['喜欢意大利风格的人', '成熟魅力', '奢华享受派'],
    peopleTags: ['意式奢华', '蜂蜜烟草', '西西里风情', '成熟魅力', '秋冬暖香'],
    scenes: ['晚宴', '约会', '秋冬聚会', '正式社交'],
    similar: ['Tom Ford', 'Kilian'],
    description: 'Xerjoff 是意大利奢华小众香水的代表。这支"南十字"命名自希腊神话中的西西里岛 Giardini Naxos，是一支意大利风情的柑橘烟草杰作。',
    imageSeed: 'xerjoff-naxos',
    palette: ['#c89030', '#f8e8b0', '#5a3810', '#1c1008'],
    notesIntro: 'Xerjoff 是由 Sergio Momo 创立的意大利顶级小众品牌，每一瓶都用最好的天然原料。南十字（Naxos）以爱琴海上的纳克索斯岛命名——传说中阿里阿德涅被忒修斯抛弃后，狄俄尼索斯在这座岛上遇见了她。前调柠檬与佛手柑的意大利式柑橘明媚开场，薰衣草提供了芳香调的精油感；中段蜂蜜与肉桂的加入让整支香变得温暖、甜润、像在地中海阳光下融化的蜂蜜；尾调烟草与零陵香豆给了它男人的轮廓——一个穿着亚麻衬衫、叼着雪茄、站在柠檬树下看夕阳的意大利男人。',
    wearingTips: '搭配休闲西装或亚麻衬衫，秋冬季晚间社交场合。',
    longevity: '8-10小时',
    sillage: '强扩散，留下温暖的甜烟草尾迹',
  },
  {
    fragranceNames: ['文艺复兴', 'renaissance', 'xerjoff renaissance'],
    brand: 'Xerjoff / 希爵夫',
    brandAliases: ['xerjoff', '希爵夫'],
    title: '文艺复兴',
    gender: '中性',
    intensity: 3,
    season: '春夏 / 日常',
    smell: '柑橘、薄荷、铃兰与麝香的清爽组合，像佛罗伦萨乌菲兹美术馆花园里冰镇柠檬水旁边的一阵凉风。',
    fragranceFamily: '柑橘芳香调',
    top: ['柠檬', '柑橘', '薄荷'],
    middle: ['铃兰', '玫瑰'],
    base: ['麝香', '琥珀', '广藿香'],
    people: ['柑橘调爱好者', '艺术气质', '夏日清爽追求者'],
    peopleTags: ['意式柑橘', '文艺复兴', '清爽高级', '艺术气质', '夏日首选'],
    scenes: ['夏日通勤', '画廊美术馆', '户外', '约会'],
    similar: ['Acqua di Parma', 'Le Labo'],
    description: 'Xerjoff 对意大利文艺复兴的致敬之作——柑橘调的极致清爽，像从乌菲兹美术馆走出来呼吸到的佛罗伦萨空气。',
    imageSeed: 'xerjoff-renaissance',
    palette: ['#e8f0c8', '#fafcf4', '#a8b858', '#1c1c08'],
    notesIntro: 'Xerjoff 用这支香致敬意大利文艺复兴——人类历史上最伟大的文化运动。前调柠檬、柑橘与薄荷的组合像一杯加了冰块的西西里柠檬汁，第一口就让人浑身清凉；中段铃兰与玫瑰淡淡铺开，不是花园的浓烈而是画廊里一幅波提切利画作中女神手持的花朵；尾调麝香与琥珀让清爽不至于轻浮，像一座文艺复兴宫殿的大理石地板——凉意来自材质本身的高贵，而不是空调。它让你在任何炎热的日子都能保持佛罗伦萨午后般的优雅从容。',
    wearingTips: '夏日白衬衫或浅色系服装，艺术场馆或户外活动的最佳伴侣。',
    longevity: '5-7小时',
    sillage: '适中，社交距离内清新可感',
  },
  {
    fragranceNames: ['一轮玫瑰', 'une rose', 'frederic malle une rose'],
    brand: 'Frederic Malle / 馥马尔',
    brandAliases: ['frederic malle', '馥马尔', 'fm'],
    title: '一轮玫瑰',
    gender: '偏女性 / 中性',
    intensity: 4,
    season: '秋冬 / 约会',
    smell: '空前浓度的土耳其玫瑰原精——每瓶含上千朵玫瑰，配合松露与红酒，像一支可以喝的暗红色玫瑰。',
    fragranceFamily: '玫瑰调',
    top: ['土耳其玫瑰'],
    middle: ['松露', '天竺葵'],
    base: ['红酒沉淀', '麝香', '木质'],
    people: ['终极玫瑰爱好者', '约会场合', '追求极致玫瑰的人'],
    peopleTags: ['玫瑰之王', '松露玫瑰', '约会极致', '酒红玫瑰', '一瓶千朵'],
    scenes: ['约会之夜', '晚宴', '冬季', '特殊场合'],
    similar: ['Serge Lutens', 'Le Labo'],
    description: '馥马尔"出版社"系列中最杰出的玫瑰——由调香大师 Edouard Flechier 创作，传说每瓶用了上万朵土耳其玫瑰。玫瑰香的终极形态。',
    imageSeed: 'frederic-malle-une-rose',
    palette: ['#6a1a2a', '#c86070', '#1c0810', '#f8e8e8'],
    notesIntro: 'Frédéric Malle 把调香师比作作者，他的品牌就是出版社——Une Rose 是调香大师 Edouard Fléchier 的"玫瑰小说"。这支香用了香水史上最高浓度的土耳其玫瑰原精，传说每瓶相当于几千朵玫瑰的精华。前调打开就是一场玫瑰海啸——不是一朵玫瑰在开，是一整座玫瑰园同时绽放，浓烈、饱满、带着泥土与根茎的原始力量；中段松露的加入让玫瑰带上了一种地下、神秘、近乎肉欲的质感——这不是花店里的玫瑰，是森林里野生的、带着露水与菌丝的玫瑰；尾调红酒沉淀与麝香则像你把一朵玫瑰泡在勃艮第红酒里，然后涂抹在皮肤上。它是玫瑰的终极形态——穿它的人不需要说一句话，玫瑰替你说了所有。',
    wearingTips: '约会之夜的最佳武器，搭配深色丝绒或蕾丝，一喷即可。',
    longevity: '10-12小时',
    sillage: '极强，像一朵行走的玫瑰园',
  },
  {
    fragranceNames: ['贵妇肖像', 'portrait of a lady', 'frederic malle portrait'],
    brand: 'Frederic Malle / 馥马尔',
    brandAliases: ['frederic malle', '馥马尔', 'fm'],
    title: '贵妇肖像',
    gender: '中性 / 偏女性',
    intensity: 5,
    season: '秋冬 / 正式',
    smell: '玫瑰、广藿香、丁香与焚香的哥特式组合，像一幅挂在古老城堡里的暗色油画——深红、暗绿、金箔。',
    fragranceFamily: '东方木质调',
    top: ['丁香', '玫瑰'],
    middle: ['广藿香', '焚香'],
    base: ['檀木', '麝香', '安息香'],
    people: ['喜欢暗黑华丽的人', '成熟优雅', '正式场合'],
    peopleTags: ['哥特玫瑰', '暗黑华丽', '贵妇气场', '油画质感', '收藏级'],
    scenes: ['正式晚宴', '歌剧', '特殊场合', '冬季'],
    similar: ['Serge Lutens', 'Amouage'],
    description: '被无数评论家称为"21世纪最伟大的香水之一"。调香师 Dominique Ropion 花了 18 个月才找到玫瑰与广藿香的完美比例。',
    imageSeed: 'frederic-malle-portrait-of-a-lady',
    palette: ['#4a1830', '#b86880', '#140810', '#f0d8e0'],
    notesIntro: '这是馥马尔"出版社"系列最负盛名的作品，灵感来自 Henry James 的小说《贵妇画像》。调香大师 Dominique Ropion 花了 18 个月调整配方，因为玫瑰与广藿香的比例差之毫厘就完全不同。前调丁香与玫瑰同时打开——丁香的辛辣像画框上的鎏金钉子，把玫瑰牢牢固定；中段广藿香与焚香构筑出深不见底的暗色背景，像一幅巴洛克油画中被阴影吞没的背景；而玫瑰就那么孤零零地、华美地立在中央，被暗影衬托得更加耀眼。尾调檀木与安息香给它加上了一层老画表面的清漆——时间的质感。这是一支需要阅历才能驾驭的香水，像一位见过世事但依然选择优雅的女人。',
    wearingTips: '正式晚宴或歌剧场合，搭配深色礼服与珍珠。这是一支需要气场的香水。',
    longevity: '12+小时',
    sillage: '极强，是气味的宣言而非耳语',
  },
  {
    fragranceNames: ['赤霞橘光', 'orange sanguine', 'atelier cologne orange'],
    brand: 'Atelier Cologne / 欧珑',
    brandAliases: ['atelier cologne', '欧珑', 'atelier'],
    title: '赤霞橘光',
    gender: '中性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '最真实的血橙还原——刚切开的新鲜血橙，汁水四溅，像在橙树下吃完一整颗橙子，指尖都是橙皮的油脂。',
    fragranceFamily: '柑橘调',
    top: ['血橙', '苦橙'],
    middle: ['茉莉', '天竺葵'],
    base: ['檀木', '琥珀'],
    people: ['柑橘调终极爱好者', '夏日活力派', '新人入门首选'],
    peopleTags: ['鲜榨橙汁', '阳光活力', '入门神作', '夏日必備', '治愈系'],
    scenes: ['夏日出行', '通勤', '户外活动', '叠香'],
    similar: ['Jo Malone', 'Acqua di Parma'],
    description: '欧珑最出名的作品——"全宇宙最真实的橙子"。喷上它的瞬间就像徒手剥开一颗刚从树上摘下来的血橙，汁水溅到脸上。',
    imageSeed: 'atelier-orange-sanguine',
    palette: ['#e87828', '#fce8d0', '#a84010', '#1c0c04'],
    notesIntro: '法国品牌欧珑以"精醇古龙"概念闻名——把古龙水的浓度提升到淡香精级别，保留了柑橘的鲜活又延长了留香。赤霞橘光做到了"闻起来像真水果而非水果糖"：前调血橙与苦橙的还原度高到荒诞——不是橙汁饮料，而是你刚用指甲掐进一颗血橙的皮，橙皮油脂被挤出的瞬间，空气中弥漫的那种微苦、微酸、带着阳光温度的汁液感。中段茉莉与天竺葵只提供了淡到几乎透明的花香基底，完全不抢橙子的风头。尾调檀木与琥珀给了一个干净的收尾。它是"快乐"的嗅觉定义——闻到它的人会不自觉地微笑。',
    wearingTips: '夏日任意场合，白T恤牛仔裤的最佳搭档。可与其他香叠穿增加层次。',
    longevity: '3-4小时',
    sillage: '轻柔适中，近身可感知',
  },
  {
    fragranceNames: ['无极乌龙', 'oolang infini', 'atelier cologne oolang'],
    brand: 'Atelier Cologne / 欧珑',
    brandAliases: ['atelier cologne', '欧珑', 'atelier'],
    title: '无极乌龙',
    gender: '中性',
    intensity: 2,
    season: '四季通用',
    smell: '乌龙茶叶、佛手柑与愈创木的清冽组合，像用山泉水泡的第一道茶，清澈、回甘、有禅意。',
    fragranceFamily: '茶香柑橘调',
    top: ['佛手柑', '乌龙茶叶'],
    middle: ['茶叶', '茉莉'],
    base: ['愈创木', '麝香'],
    people: ['茶香爱好者', '极简主义者', '喜欢安静氛围的人'],
    peopleTags: ['乌龙茶香', '极简禅意', '文人气', '四季通用', '书卷气'],
    scenes: ['阅读', '办公', '日常通勤', '春夏秋冬'],
    similar: ['Bvlgari', 'Armani'],
    description: '欧珑对中国茶文化的致意——用嗅觉呈现一杯好乌龙：清澈、甘甜、回甘悠长。比大吉岭茶更东方、更禅意。',
    imageSeed: 'atelier-oolang-infini',
    palette: ['#c8d8c8', '#f4f8f4', '#809878', '#141c14'],
    notesIntro: '一支以中国乌龙茶为灵感的香水。前调佛手柑与乌龙茶叶同时出现——当热水冲进紫砂壶，第一缕茶香飘出来的瞬间，佛手柑的柑橘调与茶叶的清香完美交织；中段茶叶与茉莉轻轻铺展，不是浓烈的花香而是茶汤上面漂着一两朵茉莉花瓣；尾调愈创木与麝香让整支香在皮肤上慢慢"回甘"。它不像那些轰轰烈烈的商业香——它是你一个人在书房里泡了一壶好茶，窗外下着细雨，你的猫窝在你腿上，你翻开一本还没读完的书。',
    wearingTips: '适合所有季节与场合，尤其适合阅读、办公等需要专注的时刻。搭配棉麻材质服装效果更佳。',
    longevity: '3-4小时',
    sillage: '轻柔贴肤，安静陪伴',
  },
  {
    fragranceNames: ['琴酒', 'juniper sling', 'penhaligons juniper sling'],
    brand: "Penhaligon's / 潘海利根",
    brandAliases: ['penhaligons', "penhaligon's", '潘海利根'],
    title: '琴酒',
    gender: '中性',
    intensity: 3,
    season: '秋冬 / 夜晚',
    smell: '杜松子酒、肉桂与红糖的组合，像一杯加了肉桂的干琴酒，冰凉、辛辣、微甜、带一丝英式颓废。',
    fragranceFamily: '酒香辛香调',
    top: ['杜松子', '肉桂', '橙'],
    middle: ['白兰地', '小豆蔻'],
    base: ['红糖', '香根草', '樱桃'],
    people: ['喜欢酒香的人', '英伦风爱好者', '夜晚社交'],
    peopleTags: ['琴酒鸡尾酒', '英伦颓废', '酒香辛辣', '夜生活', '独特个性'],
    scenes: ['酒吧', '派对', '夜晚约会', '秋冬'],
    similar: ['Tom Ford', 'Kilian'],
    description: '潘海利根最具"伦敦感"的作品——灵感来自 1920 年代伦敦的"咆哮的二十年代"，纸醉金迷与禁酒令下的地下酒吧。',
    imageSeed: 'penhaligons-juniper-sling',
    palette: ['#3a4a5a', '#b8c8d8', '#141c28', '#f0f4f8'],
    notesIntro: '"Juniper Sling"即杜松子酒鸡尾酒。这支香还原了伦敦 1920 年代地下酒吧的气氛——禁酒令时期，绅士淑女们躲在地下酒吧里偷偷喝酒、跳查尔斯顿舞。前调杜松子与肉桂的组合像一杯冰镇的干琴酒刚倒在你的杯子里，杜松的清冽混合着肉桂的辛香；中段白兰地与小豆蔻让酒精度数上升，像调酒师又加了一个 shot；尾调红糖与香根草给出微甜的残余，像杯底残留的糖浆和冰块融化的最后一口。它辛辣、冰凉、微甜、带着英伦式的颓废与优雅——像在伦敦东区一个没有招牌的地下酒吧里坐到凌晨三点才出来，大衣领子上还残留着琴酒的味道。',
    wearingTips: '搭配深色外套或皮衣，夜晚酒吧或派对的绝佳选择。',
    longevity: '5-7小时',
    sillage: '适中偏强，社交距离内可感知',
  },
  {
    fragranceNames: ['牧羊少年', 'endymion', 'penhaligons endymion'],
    brand: "Penhaligon's / 潘海利根",
    brandAliases: ['penhaligons', "penhaligon's", '潘海利根'],
    title: '牧羊少年',
    gender: '偏男性',
    intensity: 3,
    season: '秋冬 / 约会',
    smell: '薰衣草、咖啡与皮革的组合，像希腊神话中的美少年恩底弥翁——干净、温柔、带一丝咖啡味的性感。',
    fragranceFamily: '芳香皮革调',
    top: ['薰衣草', '佛手柑'],
    middle: ['咖啡', '鼠尾草'],
    base: ['皮革', '麝香', '琥珀'],
    people: ['喜欢温柔男香的人', '约会场合', '文艺气质男性'],
    peopleTags: ['希腊神话', '咖啡皮革', '温柔男香', '文艺少年', '约会温柔'],
    scenes: ['约会', '通勤', '秋冬日常', '咖啡馆'],
    similar: ['Dior', 'Tom Ford'],
    description: '潘海利根最具"少年感"的作品——灵感来自希腊神话中被月神爱上的牧羊少年恩底弥翁，永恒沉睡却依然美得发光。',
    imageSeed: 'penhaligons-endymion',
    palette: ['#5a4a6a', '#c8b8d8', '#181420', '#f0e8f8'],
    notesIntro: '希腊神话中，牧羊少年恩底弥翁因为太美了，月神塞勒涅请求宙斯让他永远沉睡以保持年轻——他至今仍在山洞里沉睡，月光每晚照在他脸上。前调薰衣草的芳香清新开场，像少年干净的皮肤；中段咖啡的加入让整个香气变得有趣——一个身上带着咖啡香的少年，你分不清那是他刚喝了一杯还是那就是他的味道；尾调皮革与麝香温柔落地，像他脱下的皮夹克搭在椅背上，上面还残留着他的体温。它不张扬不霸气，它是那种"你靠近了才觉得好闻"的香——像恩底弥翁一样，安静但让人无法移开视线。',
    wearingTips: '约会首选男香之一，搭配休闲装扮或约会着装，咖啡香与温柔感完美加分。',
    longevity: '5-7小时',
    sillage: '适中，亲密距离内性感可感',
  },
  {
    fragranceNames: ['猎豹', 'panthere de cartier', 'cartier panthere'],
    brand: 'Cartier / 卡地亚',
    brandAliases: ['cartier', '卡地亚'],
    title: '猎豹',
    gender: '偏女性',
    intensity: 4,
    season: '秋冬 / 正式',
    smell: '栀子花、橡苔与麝香的西普调组合，像卡地亚猎豹系列珠宝——优雅、华丽、带一丝猫科动物的野性。',
    fragranceFamily: '西普花香调',
    top: ['栀子花', '晚香玉'],
    middle: ['橡苔', '鸢尾'],
    base: ['麝香', '广藿香'],
    people: ['喜欢经典西普调的人', '成熟女性', '珠宝爱好者'],
    peopleTags: ['猎豹珠宝', '经典西普', '成熟优雅', '猫科野性', '贵妇香'],
    scenes: ['正式场合', '晚宴', '商务', '冬季'],
    similar: ['Chanel', 'Dior'],
    description: '卡地亚经典猎豹系列的同名香水——猎豹是卡地亚的灵魂图腾，这支香把豹纹的野性与珠宝的精工熔铸在一起。',
    imageSeed: 'cartier-panthere',
    palette: ['#c8a848', '#f8f0d8', '#6a4a18', '#1c1408'],
    notesIntro: '卡地亚的猎豹图腾始于 1914 年——一张猎豹花纹的腕表设计。一百年后，猎豹依然是卡地亚最深入人心的符号。这支同名香水还原了猎豹的灵魂：前调栀子花与晚香玉的白花组合华丽而矜贵，像猎豹珠宝系列中一只镶满钻石的豹子；中段橡苔与鸢尾的绿色调——西普调的灵魂——把这支香从"白花甜腻"中解救出来，让它变得凌厉、有骨架、像一只在灌木丛中匍匐的豹子，眼睛是祖母绿做的；尾调麝香与广藿香完成了"动物感"的闭环。它不是温顺的家猫，它是戴着钻石项圈的猎豹——你可以欣赏它，但别伸手摸。',
    wearingTips: '搭配深色正装或小礼服，正式场合的气场加分项。与卡地亚猎豹系列珠宝是天作之合。',
    longevity: '7-9小时',
    sillage: '强，正式场合的得体存在感',
  },
  {
    fragranceNames: ['糖果', 'candy', 'prada candy'],
    brand: 'Prada / 普拉达',
    brandAliases: ['prada', '普拉达'],
    title: '糖果',
    gender: '偏女性',
    intensity: 3,
    season: '秋冬 / 约会',
    smell: '焦糖、麝香与安息香的甜香组合，但不是廉价的糖——是 Prada 用皮革和麝香重新包装过的"高级太妃糖"。',
    fragranceFamily: '东方美食调',
    top: ['焦糖'],
    middle: ['麝香', '香草'],
    base: ['安息香', '琥珀'],
    people: ['喜欢甜香但不要幼稚的人', '约会场景', 'Prada 品牌粉丝'],
    peopleTags: ['Prada焦糖', '高级甜', '约会香', '太妃糖感', '轻奢日常'],
    scenes: ['约会', '秋冬日常', '逛街', '拍照'],
    similar: ['YSL', 'Dior'],
    description: 'Prada 用一支香水证明了"甜香也可以很高级"——它像一块用 Prada Saffiano 皮革包好的太妃糖，甜得恰到好处。',
    imageSeed: 'prada-candy',
    palette: ['#e8b8a0', '#fdf4f0', '#c87050', '#1c1008'],
    notesIntro: 'Prada 的甜香哲学——"糖不一定廉价，关键看用什么容器装它"。前调焦糖开门见山，甜而不腻——像一块手工太妃糖刚剥开包装纸；中段麝香的出现让甜味从"糖果"变成了"皮肤"，仿佛这块糖在你手心融化了，糖分渗透进肌肤纹理；尾调安息香与琥珀提供了一个温暖的基底，让甜味不是飘着的而是沉下来的。它是那种"你闻到会觉得这个人很好闻，但不一定会想到这是香水的味道"——像一个穿着柔软毛衣的女孩，口袋里塞了几颗糖，笑起来比糖还甜。',
    wearingTips: '搭配柔软毛衣或开衫，秋冬约会日常通勤两相宜。',
    longevity: '5-7小时',
    sillage: '适中，亲密社交距离最佳',
  },
  {
    fragranceNames: ['鸢尾花', 'infusion diris', 'prada iris'],
    brand: 'Prada / 普拉达',
    brandAliases: ['prada', '普拉达'],
    title: '鸢尾花',
    gender: '中性',
    intensity: 2,
    season: '四季通用',
    smell: '鸢尾、橙花与雪松的洁净组合，像刚用冷水洗完脸后皮肤上残留的皂感与清冽空气。',
    fragranceFamily: '花香木质调',
    top: ['橙花', '柑橘'],
    middle: ['鸢尾', '紫罗兰'],
    base: ['雪松', '麝香'],
    people: ['喜欢极简洁净感的人', '四季通用需求', '文艺青年'],
    peopleTags: ['极简鸢尾', '冷水皂感', '洁净文艺', '四季通用', '不打扰'],
    scenes: ['办公', '通勤', '日常', '四季通用'],
    similar: ['Jo Malone', 'Le Labo'],
    description: 'Prada 最具"知识分子"气质的香水——不甜、不浓、不讨好，只是干净。米兰知识分子最爱。',
    imageSeed: 'prada-infusion-diris',
    palette: ['#d8d0e0', '#f8f6fa', '#9080a8', '#181420'],
    notesIntro: '这支香代表了 Prada 的美学内核——"不喜欢的就删掉，只留最必要的东西"。前调橙花与柑橘只是薄薄一层，像用水洗了一遍皮肤；中段鸢尾是绝对的主角，但它不是在花店里盛开的样子，而是被制成粉饼状的鸢尾根茎粉末——干燥、粉质、带一丝微弱的根茎泥土味；尾调雪松与麝香让一切变得更干净，像你把脸埋进一条刚从烘干机里拿出来的白色浴巾。它不声张不扩散不引人注意——它是穿上香的人自己享受的味道，别人只有拥抱你的时候才有资格闻到。',
    wearingTips: '任何场合、任何季节。极简主义者的完美香水，搭配 Prada 尼龙系列服装尤佳。',
    longevity: '4-6小时',
    sillage: '轻柔贴肤，极近距离可感知',
  },
  {
    fragranceNames: ['伦敦男', 'london for men', 'burberry london'],
    brand: 'Burberry / 博柏利',
    brandAliases: ['burberry', '博柏利', '巴宝莉'],
    title: '伦敦男',
    gender: '偏男性',
    intensity: 4,
    season: '秋冬 / 圣诞',
    smell: '肉桂、烟草、皮革与红酒的组合，像伦敦圣诞节的下午——壁炉烧着柴火，一杯热红酒在手，窗外下着雪。',
    fragranceFamily: '木质辛香调',
    top: ['肉桂', '佛手柑', '薰衣草'],
    middle: ['皮革', '烟草', '红酒'],
    base: ['愈创木', '橡苔', '零陵香豆'],
    people: ['喜欢温暖冬天感的人', '英伦风爱好者', '节日氛围'],
    peopleTags: ['伦敦圣诞', '热红酒', '温暖辛香', '英伦风情', '冬日暖男'],
    scenes: ['圣诞', '冬季日常', '约会', '居家'],
    similar: ['Tom Ford', 'Penhaligon\'s'],
    description: 'Burberry 最受好评的男香——"伦敦"两个字不是噱头，它真的闻起来像伦敦圣诞节。烟草、皮革、肉桂与红酒的完美冬季拼贴。',
    imageSeed: 'burberry-london',
    palette: ['#6a3a28', '#c89878', '#1c0c04', '#f0e0d0'],
    notesIntro: '这支香让人不用买机票就能闻到伦敦的圣诞——前调肉桂与佛手柑同时出现，肉桂的温暖辛香立刻营造出节日感，像路过 Covent Garden 的圣诞集市，热红酒摊位飘来的第一缕香；中段皮革、烟草与红酒的组合像推开一家老派英国绅士俱乐部的大门——皮质沙发、雪茄烟气、壁炉里燃烧的橡木；尾调愈创木与零陵香豆平稳收束，像你在雪中走回家，脱下大衣、取下围巾、陷进沙发里。它不锐利、不冷感、不咄咄逼人——它是一个穿着 Burberry 风衣的男人在圣诞节那天给你的一个熊抱。',
    wearingTips: '冬季最佳男香之一，搭配风衣或羊毛大衣，圣诞节约会或聚会的氛围王。',
    longevity: '6-8小时',
    sillage: '适中偏强，一臂内温和可感',
  },
  {
    fragranceNames: ['她的伦敦梦', 'her london dream', 'burberry her'],
    brand: 'Burberry / 博柏利',
    brandAliases: ['burberry', '博柏利', '巴宝莉'],
    title: '她的伦敦梦',
    gender: '偏女性',
    intensity: 3,
    season: '秋冬 / 日常',
    smell: '草莓、黑莓、茉莉与琥珀的英式甜点组合，像在伦敦丽兹酒店喝下午茶——草莓挞配茉莉花茶，窗外是格林公园。',
    fragranceFamily: '花果美食调',
    top: ['草莓', '黑莓', '红莓'],
    middle: ['茉莉', '牡丹'],
    base: ['琥珀', '麝香'],
    people: ['喜欢甜美花果香的人', '下午茶爱好者', '浪漫少女'],
    peopleTags: ['伦敦下午茶', '草莓甜点', '英式甜美', '少女感', '约会友好'],
    scenes: ['约会', '下午茶', '秋冬日常', '逛街'],
    similar: ['Dior', 'YSL'],
    description: 'Burberry Her 系列最受欢迎的一支——把伦敦下午茶的整套体验装进了瓶子：草莓挞、茉莉花茶、奶油和果酱。',
    imageSeed: 'burberry-her-london-dream',
    palette: ['#f0d8e0', '#fef8fa', '#c88098', '#1c1018'],
    notesIntro: '如果说 Burberry London 男版是圣诞节的壁炉，那 Her London Dream 就是隔壁房间里的下午茶。前调草莓、黑莓与红莓的三重浆果组合像丽兹酒店下午茶推车上的三层甜点架——草莓挞、覆盆子马卡龙、黑莓慕斯一字排开；中段茉莉与牡丹让甜味不至于粘腻，而是变成了一种优雅的花果平衡，像喝一口茉莉花茶清口后继续品尝下一块甜点；尾调琥珀与麝香提供了"英式"特有的克制——不会甜到齁，不会浓到冒犯，就像伦敦本身——古典、有礼、懂得留白。它是下午茶、草莓和伦敦三个词的嗅觉翻译。',
    wearingTips: '搭配 Burberry 风衣或格纹围巾，约会或下午茶场合。秋冬使用最佳。',
    longevity: '5-7小时',
    sillage: '适中，社交距离内甜美可感',
  },
  {
    fragranceNames: ['晶钻', 'bright crystal', 'versace bright crystal'],
    brand: 'Versace / 范思哲',
    brandAliases: ['versace', '范思哲'],
    title: '晶钻',
    gender: '偏女性',
    intensity: 2,
    season: '春夏 / 日常',
    smell: '柚子、石榴与麝香的清新组合，像一块粉色的水晶在意大利的阳光下闪闪发光——清澈、甜美、很容易被接受。',
    fragranceFamily: '花果香调',
    top: ['柚子', '石榴'],
    middle: ['木兰', '莲花', '牡丹'],
    base: ['麝香', '琥珀', '红木'],
    people: ['日常通勤人群', '喜欢清新感的人', '学生党入门'],
    peopleTags: ['粉水晶', '清新甜美', '入门友好', '通勤百搭', '意式风情'],
    scenes: ['通勤', '上学', '约会', '春夏日常'],
    similar: ['Dior', 'Burberry'],
    description: 'Versace 最畅销的女香——粉水晶一般的瓶身已经说明了一切：这不是一支复杂的香，但它让每个闻到你的人都心情变好。',
    imageSeed: 'versace-bright-crystal',
    palette: ['#f0c8d8', '#fef6f8', '#c87898', '#1c1018'],
    notesIntro: 'Donatella Versace 说这支香的灵感来自"一个女孩穿着粉色水晶高跟鞋踩在意大利大理石地板上，每一步都留下清脆的回声"。前调柚子与石榴像一杯加了冰的粉色果汁——柚子提供了柑橘的清澈，石榴给了它一点甜美的少女感；中段木兰、莲花与牡丹铺开，不是浓重的花香而是水彩画般的淡彩；尾调麝香与琥珀给了它一个"被阳光晒过的皮肤"般的收尾。它不深刻、不复杂、不标新立异——但它让闻到的人想起春天、新鲜水果和好天气。有时候一支香水不需要艺术宣言，它只需要让人微笑。',
    wearingTips: '春夏通勤或上学的日常首选，接受度极高，送礼零风险。搭配浅色衣物效果最佳。',
    longevity: '3-4小时',
    sillage: '适中偏轻柔，通勤距离内宜人存在',
  },
  {
    fragranceNames: ['爱神', 'eros', 'versace eros'],
    brand: 'Versace / 范思哲',
    brandAliases: ['versace', '范思哲'],
    title: '爱神',
    gender: '偏男性',
    intensity: 4,
    season: '夜晚 / 派对',
    smell: '薄荷青苹果与香草的组合，像希腊爱神厄洛斯——清新与诱惑的奇妙平衡，又甜又Man。',
    fragranceFamily: '芳香木质调',
    top: ['薄荷', '青苹果', '柠檬'],
    middle: ['零陵香豆', '天竺葵'],
    base: ['香草', '雪松', '橡苔'],
    people: ['夜店爱好者', '年轻男性', '约会场景'],
    peopleTags: ['夜店之王', '薄荷青苹果', '年轻活力', '约会利器', '高扩散'],
    scenes: ['夜店', '派对', '约会', '夜晚社交'],
    similar: ['YSL', 'Dior'],
    description: 'Versace 最受欢迎的男香——蓝金色瓶身本身就是一件 Versace 的巴洛克艺术品，香气也如其设计：大胆、华丽、不低调。',
    imageSeed: 'versace-eros',
    palette: ['#2848a0', '#b8c8f0', '#0c1830', '#f0f4fc'],
    notesIntro: '名字来自希腊爱神厄洛斯（Eros）——拿着弓箭让人坠入爱河的年轻神祇。Versace 用这支香告诉你厄洛斯射出的箭是什么味道：前调薄荷与青苹果的组合像一杯加了薄荷叶的冰冻苹果马天尼——冰爽、甜美、又带一丝辛辣；中段零陵香豆与天竺葵让甜度上升，像你在夜店里喝到微醺，音乐越来越响，灯光越来越暗；尾调香草与雪松收束但并不低调——Versace 从不懂什么叫克制，所以这支香在你的皮肤上留到第二天凌晨。它是那种你一走进来，所有人抬起头的香——不一定是赞美，但一定是注意。',
    wearingTips: '夜晚派对或约会的强力扩散武器，一喷即可——精粹版的扩散足以填满整个房间。',
    longevity: '7-10小时',
    sillage: '极强扩散，两米开外即可感知',
  },
  {
    fragranceNames: ['宣言', 'declaration', 'cartier declaration'],
    brand: 'Cartier / 卡地亚',
    brandAliases: ['cartier', '卡地亚'],
    title: '宣言',
    gender: '偏男性',
    intensity: 3,
    season: '四季通用',
    smell: '小豆蔻、苦橙与雪松的香料木质组合，像一位穿定制西装的法国绅士在喝一杯加了豆蔻的苦橙鸡尾酒。',
    fragranceFamily: '木质辛香调',
    top: ['小豆蔻', '苦橙', '佛手柑'],
    middle: ['肉桂', '姜'],
    base: ['雪松', '香根草', '皮革'],
    people: ['喜欢经典优雅的男性', '商务人士', '法兰西风格'],
    peopleTags: ['法式优雅', '豆蔻绅士', '经典男香', '商务得体', '四季通用'],
    scenes: ['商务', '通勤', '正式场合', '日常'],
    similar: ['Hermès', 'Dior'],
    description: 'Cartier 最受尊敬的男香——1998年由调香大师 Jean-Claude Ellena（后来爱马仕的首席调香师）创作，被誉为"现代男香的里程碑"。',
    imageSeed: 'cartier-declaration',
    palette: ['#c8a060', '#f8ecd0', '#5a3818', '#1c1008'],
    notesIntro: 'Cartier 在 1998 年推出这支香时做了一件当时没人敢做的事：把烹饪用的小豆蔻放在一支男香的最前调。当时所有人都觉得这太疯狂了——但调香大师 Jean-Claude Ellena 坚持了。二十多年后，这支香被公认为是现代男香的里程碑之作。前调小豆蔻的辛香混合苦橙的清冽，像一杯放了豆蔻的 Negroni 鸡尾酒——苦、香、烈、有品；中段肉桂与姜延续了香料的温暖，但不喧哗；尾调雪松与香根草的木质基底配上微妙的皮革，像一套剪裁完美的西装。它不是年轻人的第一支香，它是男人有了一定阅历之后的选择——不急着证明自己，但站得很稳。',
    wearingTips: '商务场合最佳男香之一，搭配定制西装效果倍增。四季通用，白天晚间均可。',
    longevity: '6-8小时',
    sillage: '适中，得体不扰人',
  },
  {
    fragranceNames: ['玫瑰沉香', 'oud rose', 'montale rose oud'],
    brand: 'Montale / 蒙塔莱',
    brandAliases: ['montale', '蒙塔莱'],
    title: '玫瑰沉香',
    gender: '中性',
    intensity: 5,
    season: '秋冬 / 夜晚',
    smell: '沉香、玫瑰与藏红花的经典中东组合，浓烈、华丽、像大马士革的一家香料商店——门槛很高，但一旦进去就出不来。',
    fragranceFamily: '东方木质调',
    top: ['藏红花', '玫瑰'],
    middle: ['沉香木', '广藿香'],
    base: ['檀木', '麝香', '琥珀'],
    people: ['沉香爱好者', '喜欢浓郁香气的人', '中东香风格'],
    peopleTags: ['沉香玫瑰', '中东奢华', '浓郁重口', '秋冬专属', '门槛向'],
    scenes: ['冬季夜晚', '正式场合', '特殊社交', '收藏'],
    similar: ['Amouage', 'MFK'],
    description: 'Montale 是法国人 Pierre Montale 在沙特阿拉伯生活多年后创立的品牌——他把中东人对沉香的理解和法国的调香技术结合，创造了一系列"门槛级"的沉香作品。',
    imageSeed: 'montale-oud-rose',
    palette: ['#4a1818', '#b86060', '#0c0404', '#f0d8d8'],
    notesIntro: 'Pierre Montale 曾在中东为皇室工作了数年，在那里他学会了沉香——阿拉伯世界最珍贵的香水原料——的语言。回到巴黎后，他创建了 Montale 品牌，专门做"西方人可以承受的沉香"。这支玫瑰沉香是品牌最受欢迎的作品之一：前调藏红花与玫瑰同时炸开——藏红花提供了一种微妙的碘酒般的锐利，玫瑰则浓郁到几乎像果酱；中段沉香木终于登场——这是真正的、未经稀释的天然沉香，带着动物感、木质感和一丝微妙的发酵味，不是每个人都能接受，但一旦你理解了它，你就再也回不去那些"干净"的香水了；尾调檀木、麝香与琥珀将一切收束为一种厚实、温暖、像羊绒大氅一样的基底。它不是入门香，它是终点。',
    wearingTips: '冬季夜晚或特殊场合，一泵即可——天然沉香的扩散力不容小觑。搭配深色服装与金色配饰。',
    longevity: '12+小时',
    sillage: '极强，天然沉香的扩散范围极广',
  },
];

const brandInput = document.getElementById('brandInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const suggestions = document.getElementById('suggestions');
const result = document.getElementById('result');
const heroVisual = document.getElementById('heroVisual');
const brandSidebar = document.getElementById('brandSidebar');
const breathingBar = document.getElementById('breathingBar');
const topBar = document.getElementById('topBar');
const middleBar = document.getElementById('middleBar');
const baseBar = document.getElementById('baseBar');
const topLabel = document.getElementById('topLabel');
const middleLabel = document.getElementById('middleLabel');
const baseLabel = document.getElementById('baseLabel');
const matchStatus = document.getElementById('matchStatus');
const summaryBrand = document.getElementById('summaryBrand');
const summaryNotes = document.getElementById('summaryNotes');
const summaryPeople = document.getElementById('summaryPeople');
const brandCount = document.getElementById('brandCount');
const fragranceCount = document.getElementById('fragranceCount');
const matchCount = document.getElementById('matchCount');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const loadingOverlay = document.getElementById('loadingOverlay');
const recommendations = document.getElementById('recommendations');

let analyzedTimes = 0;
const normalize = (text) => text.trim().toLowerCase().replace(/\s+/g, ' ');
const getAllBrands = () => [...new Set(fragranceDB.map((item) => item.brand))];
const getAllFamilies = () => [...new Set(fragranceDB.map((item) => item.fragranceFamily))];
const getMatches = (query) => {
  const value = normalize(query);
  if (!value) return [];
  return fragranceDB.filter((item) => {
    const pool = [item.title, item.brand, ...item.brandAliases, ...item.fragranceNames].map(normalize);
    return pool.some((name) => name.includes(value) || value.includes(name));
  });
};
const getBestMatch = (query) => getMatches(query)[0] || null;

function applySidebar(item) {
  brandSidebar.classList.remove('empty-brand-card');
  brandSidebar.style.background = `linear-gradient(160deg, ${item.palette[3]}, ${item.palette[2]})`;
  brandSidebar.innerHTML = `<div class="brand-kicker">Scent Profile</div><div class="brand-title">${item.brand}</div><div class="brand-desc">${item.title} · ${item.fragranceFamily} · ${item.season}</div><div class="brand-desc">${item.notesIntro}</div><div class="brand-swatches">${item.palette.map((c) => `<span class="swatch" style="background:${c};"></span>`).join('')}</div><div class="brand-desc">视觉建议：${item.title.length > 4 ? '更适合沉稳、深色、冷调背景' : '更适合高反差、通透、光感背景'}</div>`;
}
function renderVisual(item) {
  heroVisual.classList.remove('empty-visual');
  heroVisual.style.backgroundImage = `radial-gradient(circle at 18% 18%, rgba(255,255,255,0.18), transparent 25%), radial-gradient(circle at 72% 26%, ${item.palette[0]}55 0%, transparent 18%), radial-gradient(circle at 52% 70%, ${item.palette[1]}44 0%, transparent 28%), linear-gradient(135deg, ${item.palette[3]}, ${item.palette[2]})`;
  heroVisual.innerHTML = `<div class="visual-copy visual-copy-left"><p class="visual-kicker">Scent Still Life</p><h3>${item.title}</h3><p>${item.description}</p></div><div class="visual-bottle"><div class="bottle-glow"></div><div class="bottle-body"><span>${item.title}</span><small>${item.brand}</small></div><div class="scent-orbit scent-1" style="background:${item.palette[0]};"></div><div class="scent-orbit scent-2" style="background:${item.palette[1]};"></div><div class="scent-orbit scent-3" style="background:${item.palette[2]};"></div><div class="scent-orbit scent-4" style="background:${item.palette[3]};"></div><div class="scent-line"></div><div class="scent-line scent-line-2"></div><div class="scent-line scent-line-3"></div></div><div class="visual-copy visual-copy-right"><p class="visual-kicker">Luxury Mood</p><h3>${item.fragranceFamily}</h3><p>黑灰背景、金色线条、微弱光晕与几何装饰共同营造香氛海报感。</p></div>`;
}
function renderBreathing(item) {
  breathingBar.classList.remove('empty-breathing');
  topBar.style.width = `${Math.min(100, 55 + item.top.length * 12)}%`;
  middleBar.style.width = `${Math.min(100, 60 + item.middle.length * 10)}%`;
  baseBar.style.width = `${Math.min(100, 65 + item.base.length * 8)}%`;
  topLabel.textContent = `前调 · ${item.top.join(' / ')}`;
  middleLabel.textContent = `中调 · ${item.middle.join(' / ')}`;
  baseLabel.textContent = `后调 · ${item.base.join(' / ')}`;
}
function renderRecommendations(item) {
  const recs = fragranceDB.filter((x) => x.title !== item.title && (x.fragranceFamily === item.fragranceFamily || x.brand === item.brand || x.peopleTags[0] === item.peopleTags[0])).slice(0, 8);
  recommendations.classList.remove('empty-recommendations');
  recommendations.innerHTML = recs.map((rec) => `<button class="rec-card" data-query="${rec.title}"><strong>${rec.title}</strong><span>${rec.brand}</span><span>${rec.fragranceFamily}</span></button>`).join('') || '<div class="rec-card"><strong>暂无同类推荐</strong><span>可继续搜索其他香水</span></div>';
  recommendations.querySelectorAll('[data-query]').forEach((btn) => btn.addEventListener('click', () => { brandInput.value = btn.dataset.query; analyze(); }));
}
function renderSuggestions(query) {
  const items = query.trim() ? getMatches(query).slice(0, 6) : fragranceDB.slice(0, 6);
  const familyTabs = getAllFamilies().slice(0, 6).map((family) => `<button class="chip chip-soft" data-family="${family}">${family}</button>`).join('');
  suggestions.innerHTML = `<div class="suggestion-head">热搜推荐</div><div class="suggestion-row">${items.length ? items.map((item) => `<button class="chip" data-query="${item.title}">${item.title} · ${item.brand}</button>`).join('') : '<span class="no-suggestion">没有找到相近香水</span>'}</div><div class="suggestion-head">香调筛选</div><div class="suggestion-row">${familyTabs}</div>`;
  suggestions.querySelectorAll('[data-query]').forEach((chip) => chip.addEventListener('click', () => { brandInput.value = chip.dataset.query; analyze(); }));
  suggestions.querySelectorAll('[data-family]').forEach((chip) => chip.addEventListener('click', () => showFamilyCards(chip.dataset.family)));
}
function showFamilyCards(family) {
  const cards = fragranceDB.filter((item) => item.fragranceFamily === family);
  result.classList.remove('empty-state');
  result.innerHTML = cards.map((item) => `<button class="card rec-card" data-query="${item.title}"><strong>${item.title}</strong><span>${item.brand}</span><span>${item.fragranceFamily}</span><span>${item.season}</span></button>`).join('');
  result.querySelectorAll('[data-query]').forEach((btn) => btn.addEventListener('click', () => { brandInput.value = btn.dataset.query; analyze(); }));
  matchStatus.textContent = `已筛选：${family}`;
}
function updateCounters(item) {
  brandCount.textContent = String(getAllBrands().length);
  fragranceCount.textContent = String(fragranceDB.length);
  matchCount.textContent = String(analyzedTimes);
  if (item) {
    summaryBrand.textContent = item.brand;
    summaryNotes.textContent = `${item.fragranceFamily} · ${item.top[0]} / ${item.middle[0]} / ${item.base[0]}`;
    summaryPeople.textContent = item.peopleTags.slice(0, 4).join(' · ');
  } else {
    summaryBrand.textContent = '—';
    summaryNotes.textContent = '—';
    summaryPeople.textContent = '—';
  }
}
function openModal(item) {
  modalContent.innerHTML = `<div class="card card-highlight"><h3>${item.title}</h3><p>${item.description}</p><div class="badge-row" style="margin-top:14px;"><span class="badge">${item.brand}</span><span class="badge">${item.fragranceFamily}</span><span class="badge">${item.gender}</span><span class="badge">${item.season}</span></div></div><div class="modal-content-grid"><div class="card"><h3>前调</h3><ul>${item.top.map((x) => `<li>${x}</li>`).join('')}</ul></div><div class="card"><h3>中调</h3><ul>${item.middle.map((x) => `<li>${x}</li>`).join('')}</ul></div><div class="card"><h3>后调</h3><ul>${item.base.map((x) => `<li>${x}</li>`).join('')}</ul></div><div class="card"><h3>适合人群</h3><ul>${item.peopleTags.map((x) => `<li>${x}</li>`).join('')}</ul></div></div>`;
  modal.classList.remove('hidden');
}
function closeModalFn() { modal.classList.add('hidden'); }
function renderEmpty(message = '请先输入香水名称') {
  matchStatus.textContent = message;
  updateCounters(null);
  heroVisual.classList.add('empty-visual');
  heroVisual.innerHTML = `<div class="visual-copy visual-copy-left"><p class="visual-kicker">Scent Still Life</p><h3>等待选择一支香水</h3><p>搜索后将显示高端商业静物画面、香料围绕瓶身的氛围展示。</p></div><div class="visual-copy visual-copy-right"><p class="visual-kicker">Luxury Mood</p><h3>现代奢华 · 戏剧光影</h3><p>黑灰背景、金色线条、微弱光晕与几何装饰共同营造香氛海报感。</p></div>`;
  breathingBar.classList.add('empty-breathing');
  topBar.style.width = '0%'; middleBar.style.width = '0%'; baseBar.style.width = '0%';
  topLabel.textContent = '前调'; middleLabel.textContent = '中调'; baseLabel.textContent = '后调';
  recommendations.classList.add('empty-recommendations');
  recommendations.innerHTML = '';
  result.classList.add('empty-state');
  result.innerHTML = '';
}
function renderResult(item, query) {
  analyzedTimes += 1;
  matchStatus.textContent = `已识别：${item.title} · ${item.brand}`;
  updateCounters(item);
  applySidebar(item);
  renderVisual(item);
  renderBreathing(item);
  renderRecommendations(item);
  result.classList.remove('empty-state');
  const highlight = (arr) => arr.map((x) => `<li><mark>${x}</mark></li>`).join('');
  result.innerHTML = `<div class="card card-highlight"><h3>识别结果</h3><div class="badge-row"><span class="badge">${item.brand}</span><span class="badge">${item.title}</span><span class="badge">${item.fragranceFamily}</span><span class="badge">${item.gender}</span><span class="badge">${item.season}</span></div><div class="meter"><label>香气浓度</label><div class="meter-bar"><i style="width:${item.intensity * 20}%"></i></div></div><div class="action-row"><button class="ghost-btn" id="openDetail">打开详情弹窗</button></div></div><div class="card"><h3>嗅觉体验</h3><p>${item.notesIntro}</p></div><div class="card"><h3>气味介绍</h3><p>${item.smell}</p></div><div class="card"><h3>前调</h3><ul>${highlight(item.top)}</ul></div><div class="card"><h3>中调</h3><ul>${highlight(item.middle)}</ul></div><div class="card"><h3>后调</h3><ul>${highlight(item.base)}</ul></div><div class="card"><h3>适合人群</h3><div class="tag-row">${item.peopleTags.map((x) => `<span class="tag">${x}</span>`).join('')}</div></div><div class="card"><h3>适合场景</h3><ul>${item.scenes.map((x) => `<li>${x}</li>`).join('')}</ul></div><div class="card"><h3>相似香</h3><ul>${item.similar.map((x) => `<li>${x}</li>`).join('')}</ul></div><div class="card full"><h3>输入内容</h3><p>${query}</p></div>`;
  const detailBtn = document.getElementById('openDetail');
  if (detailBtn) detailBtn.addEventListener('click', () => openModal(item));
}
function showLoading(show) { loadingOverlay.classList.toggle('hidden', !show); }
function analyze() {
  const query = brandInput.value;
  if (!query.trim()) { renderEmpty('等待输入香水名称'); return; }
  showLoading(true);
  setTimeout(() => {
    const item = getBestMatch(query);
    showLoading(false);
    if (!item) {
      renderEmpty('该香水正在调取数据分析...');
      return;
    }
    renderResult(item, query.trim());
  }, 700);
}
brandInput.addEventListener('input', () => renderSuggestions(brandInput.value));
analyzeBtn.addEventListener('click', analyze);
brandInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') analyze(); });
closeModal.addEventListener('click', closeModalFn);
modal.addEventListener('click', (event) => { if (event.target.dataset.close === 'true') closeModalFn(); });
brandCount.textContent = String(getAllBrands().length);
fragranceCount.textContent = String(fragranceDB.length);
renderSuggestions('');
renderEmpty();

/* ── 数字滚动动画 ── */
function animateCounter(el, target) {
  const start = parseInt(el.textContent, 10) || 0;
  if (start === target) return;
  const dur = 600; const step = (t) => { el.textContent = String(Math.min(Math.round(start + (target - start) * t), target)); if (t < 1) requestAnimationFrame((dt) => step((dt - t0) / dur)); };
  let t0; requestAnimationFrame((dt) => { t0 = dt; step(0); });
}
function refreshCounters() {
  animateCounter(brandCount, getAllBrands().length);
  animateCounter(fragranceCount, fragranceDB.length);
}
setTimeout(refreshCounters, 400);

/* ── 卡片入场动画 ── */
function addCardEnter() {
  result.querySelectorAll('.card').forEach((c) => c.classList.add('card-enter'));
}

/* ── 漂浮粒子 ── */
function spawnParticles() {
  const stage = document.createElement('div');
  stage.className = 'particle-stage';
  document.body.appendChild(stage);
  const cols = ['#d8b57d', '#b88a45', '#e8d5b0', '#c9a87c', '#f0e0c8'];
  function add() {
    const p = document.createElement('span');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px'; p.style.height = size + 'px';
    p.style.left = Math.random() * 94 + '%';
    p.style.background = 'radial-gradient(circle, ' + cols[Math.floor(Math.random() * cols.length)] + ', transparent)';
    p.style.animationDuration = (Math.random() * 14 + 10) + 's';
    p.style.animationDelay = Math.random() * 8 + 's';
    stage.appendChild(p);
    setTimeout(() => { if (p.parentNode) p.remove(); }, 26000);
  }
  for (let i = 0; i < 35; i++) add();
  setInterval(() => { if (document.hidden) return; for (let i = 0; i < 3; i++) add(); }, 1800);
}
spawnParticles();

/* ── 收藏功能 ── */
function getFavs() { try { return JSON.parse(localStorage.getItem('scentFavs') || '[]'); } catch (e) { return []; } }
function saveFavs(arr) { localStorage.setItem('scentFavs', JSON.stringify(arr)); }
function isFaved(title) { return getFavs().includes(title); }
function toggleFav(title) {
  const favs = getFavs();
  const idx = favs.indexOf(title);
  if (idx > -1) favs.splice(idx, 1); else favs.push(title);
  saveFavs(favs); renderFavsStrip();
  return idx === -1;
}
function renderFavsStrip() {
  const favs = getFavs();
  let strip = document.getElementById('favsStrip');
  if (!strip) {
    strip = document.createElement('div');
    strip.id = 'favsStrip';
    strip.className = 'favs-strip';
    const panel = document.querySelector('.recommend-wrap');
    if (panel) panel.parentNode.insertBefore(strip, panel);
  }
  if (!favs.length) { strip.innerHTML = ''; return; }
  const items = favs.map((t) => fragranceDB.find((f) => f.title === t)).filter(Boolean);
  strip.innerHTML = '<div class="suggestion-head" style="margin:0 0 4px;">❤️ 我的收藏</div><div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;">' + items.map((f) => '<button class="fav-chip" data-query="' + f.title + '"><strong>' + f.title + '</strong><span>' + f.brand + '</span></button>').join('') + '</div>';
  strip.querySelectorAll('[data-query]').forEach((b) => b.addEventListener('click', function() { brandInput.value = this.dataset.query; analyze(); }));
}
function addFavButtons() {
  result.querySelectorAll('.card').forEach((card) => {
    if (card.querySelector('.fav-btn')) return;
    const titleEl = card.querySelector('h3');
    if (!titleEl) return;
    const title = titleEl.textContent;
    const btn = document.createElement('button');
    btn.className = 'fav-btn' + (isFaved(title) ? ' faved' : '');
    btn.textContent = isFaved(title) ? '♥' : '♡';
    btn.title = '收藏';
    btn.addEventListener('click', (e) => { e.stopPropagation(); const nowFaved = toggleFav(title); btn.textContent = nowFaved ? '♥' : '♡'; btn.classList.toggle('faved', nowFaved); });
    card.style.position = 'relative';
    card.appendChild(btn);
  });
}
const origRenderResult = renderResult;
renderResult = function(item, query) {
  origRenderResult(item, query);
  setTimeout(addFavButtons, 80);
  setTimeout(renderFavsStrip, 100);
  setTimeout(addCardEnter, 50);
  setTimeout(refreshCounters, 150);
};
renderFavsStrip();

/* ── 寻香测试 ── */
const quizSteps = [
  { question: '你更喜欢什么季节？', options: ['春夏 · 明媚阳光', '秋冬 · 温暖壁炉', '四季 · 百无禁忌'], scores: [
    { season: '春夏 /', points: 2 }, { season: '秋冬 /', points: 2 }, { season: '', points: 1 },
  ]},
  { question: '周末你通常在做什么？', options: ['宅家看书喝茶', '外出聚会派对', '咖啡馆或看展', '运动或户外'], scores: [
    { intensity: [1,2], points: 2 }, { intensity: [4,5], points: 2 }, { intensity: [2,3], points: 2 }, { intensity: [2,3], points: 1 },
  ]},
  { question: '你希望香水给你什么感觉？', options: ['干净到像没喷', '温暖、亲密、暧昧', '高级、有存在感', '暗黑、独特、有态度'], scores: [
    { tags: ['洁净感','极简','皂感','透明'], points: 3 },
    { tags: ['温暖','亲密','柔软','奶甜'], points: 3 },
    { tags: ['高级感','辨识度','气场','经典'], points: 3 },
    { tags: ['暗黑','小众','独特','有态度'], points: 3 },
  ]},
  { question: '你喜欢多浓的香水？', options: ['若有若无，贴肤最好', '适中，别人能闻到就好', '浓一点，要有存在感'], scores: [
    { intensity: [1,2], points: 2 }, { intensity: [3], points: 2 }, { intensity: [4,5], points: 2 },
  ]},
];
let quizState = { step: 0, scores: {} };
function renderQuizStep() {
  const step = quizSteps[quizState.step];
  document.getElementById('quizStep').textContent = (quizState.step + 1) + '/4';
  document.getElementById('quizQuestion').textContent = step.question;
  document.getElementById('quizOptions').innerHTML = step.options.map((opt, i) => '<button class="quiz-opt" data-idx="' + i + '">' + opt + '</button>').join('');
  document.getElementById('quizOptions').querySelectorAll('.quiz-opt').forEach((btn) => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.dataset.idx);
      const score = step.scores[idx];
      Object.keys(score).forEach((k) => {
        if (!quizState.scores[k]) quizState.scores[k] = 0;
        quizState.scores[k] += score.points || score[k] || 0;
      });
      quizState.step++;
      if (quizState.step >= quizSteps.length) { showQuizResult(); return; }
      renderQuizStep();
    });
  });
}
function showQuizResult() {
  let best = null; let bestScore = -1;
  fragranceDB.forEach((item) => {
    let score = 0;
    if (quizState.scores.season && item.season.includes(quizState.scores.season.replace(' /',''))) score += 2;
    if (quizState.scores.intensity) score += (3 - Math.abs(item.intensity - quizState.scores.intensity)) * 2;
    if (quizState.scores.tags) {
      const allTags = [...item.peopleTags, ...item.smell.split(/[，,、]/)];
      allTags.forEach((t) => { if (t.includes(quizState.scores.tags)) score += 1; });
    }
    if (score > bestScore) { bestScore = score; best = item; }
  });
  if (!best) best = fragranceDB[Math.floor(Math.random() * fragranceDB.length)];
  document.getElementById('quizOptions').innerHTML = '';
  document.getElementById('quizQuestion').textContent = '';
  document.getElementById('quizStep').textContent = '完成!';
  const resultDiv = document.getElementById('quizResult');
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = '<h3>✨ ' + best.title + '</h3><p>' + best.brand + ' · ' + best.fragranceFamily + '</p><p>' + best.notesIntro + '</p><button id="quizGoBtn">查看完整分析</button>';
  document.getElementById('quizGoBtn').addEventListener('click', () => { brandInput.value = best.title; analyze(); resultDiv.classList.add('hidden'); });
}
document.getElementById('quizToggle').addEventListener('click', function() {
  const body = document.getElementById('quizBody');
  const hidden = body.classList.toggle('hidden');
  this.textContent = hidden ? '展开测试' : '收起测试';
  if (!hidden) { quizState = { step: 0, scores: {} }; document.getElementById('quizResult').classList.add('hidden'); renderQuizStep(); }
});

/* ═══════════ 今日精选 ═══════════ */
function renderDailyPicks() {
  const container = document.getElementById('dailyPicks');
  const today = new Date().toDateString();
  let seed = 0; for (let i = 0; i < today.length; i++) seed = ((seed << 5) - seed) + today.charCodeAt(i);
  const absSeed = Math.abs(seed);
  const shuffled = fragranceDB.map((item, i) => ({ item, r: (Math.sin(absSeed * (i + 1) * 0.731 + i * 0.37) + 1) / 2 }))
    .sort((a, b) => b.r - a.r).map((x) => x.item).slice(0, 6);
  container.innerHTML = shuffled.map((item) => {
    const bg = 'linear-gradient(135deg, ' + item.palette[3] + ', ' + item.palette[2] + ')';
    return '<div class="daily-card" data-query="' + item.title + '" style="background:' + bg + ';"><div class="daily-brand">' + item.brand + '</div><div class="daily-title">' + item.title + '</div><div class="daily-desc">' + item.description + '</div><div class="daily-family">' + item.fragranceFamily + '</div></div>';
  }).join('');
  container.querySelectorAll('.daily-card').forEach(function(card) {
    card.addEventListener('click', function() { brandInput.value = this.dataset.query; analyze(); window.scrollTo({ top: document.getElementById('analysisPanel').offsetTop - 80, behavior: 'smooth' }); });
  });
}

/* ═══════════ 香调家族云 ═══════════ */
function renderFamilyCloud() {
  var container = document.getElementById('familyCloud');
  var families = getAllFamilies();
  container.innerHTML = families.map(function(f) { return '<button class="family-chip" data-family="' + f + '">' + f + '</button>'; }).join('');
  container.querySelectorAll('.family-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      var family = this.dataset.family;
      var isActive = this.classList.contains('active');
      container.querySelectorAll('.family-chip').forEach(function(c) { c.classList.remove('active'); });
      var resultsDiv = document.getElementById('familyResults');
      if (isActive) { resultsDiv.innerHTML = ''; return; }
      this.classList.add('active');
      var matches = fragranceDB.filter(function(item) { return item.fragranceFamily === family; });
      resultsDiv.innerHTML = matches.map(function(item) {
        return '<button class="rec-card" data-query="' + item.title + '" style="text-align:left;"><strong>' + item.title + '</strong><span>' + item.brand + '</span><span>' + item.smell.substring(0, 40) + '…</span></button>';
      }).join('');
      resultsDiv.querySelectorAll('[data-query]').forEach(function(btn) {
        btn.addEventListener('click', function() { brandInput.value = this.dataset.query; analyze(); resultsDiv.innerHTML = ''; container.querySelectorAll('.family-chip').forEach(function(c) { c.classList.remove('active'); }); });
      });
      resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

/* ═══════════ 品牌目录 ═══════════ */
function renderBrandDirectory() {
  var grid = document.getElementById('brandGrid');
  var brands = getAllBrands();
  grid.innerHTML = brands.map(function(brand) {
    var count = fragranceDB.filter(function(item) { return item.brand === brand; }).length;
    var mainItem = fragranceDB.find(function(item) { return item.brand === brand; });
    var colors = mainItem ? mainItem.palette : ['#333', '#666', '#111', '#999'];
    return '<div class="brand-tile" data-brand="' + brand.replace(/"/g, '&quot;') + '" style="background:linear-gradient(160deg, ' + colors[3] + '88, ' + colors[2] + '44);"><div class="brand-tile-name">' + brand.split(' / ')[0] + '</div><div class="brand-tile-count">' + count + ' 支香水</div></div>';
  }).join('');
  grid.querySelectorAll('.brand-tile').forEach(function(tile) {
    tile.addEventListener('click', function() {
      var brand = this.dataset.brand;
      var detail = document.getElementById('brandDetail');
      var items = fragranceDB.filter(function(item) { return item.brand === brand; });
      if (detail.innerHTML && detail.querySelector('.brand-detail-brand') && detail.querySelector('.brand-detail-brand').textContent === brand) {
        detail.innerHTML = ''; return;
      }
      document.getElementById('familyResults').innerHTML = '';
      document.getElementById('familyCloud').querySelectorAll('.family-chip').forEach(function(c) { c.classList.remove('active'); });
      detail.innerHTML = '<div class="card card-highlight" style="margin-bottom:12px;"><div class="brand-detail-brand" style="display:none;">' + brand + '</div><h3>' + brand + '</h3><p style="color:var(--muted);font-size:13px;line-height:1.8;">' + (items[0].notesIntro.substring(0, 120) + '…') + '</p></div>' + items.map(function(item) {
        return '<button class="rec-card" data-query="' + item.title + '" style="text-align:left;"><strong>' + item.title + '</strong><span>' + item.fragranceFamily + ' · ' + item.season + '</span><span>' + item.smell.substring(0, 50) + '…</span></button>';
      }).join('');
      detail.querySelectorAll('[data-query]').forEach(function(btn) {
        btn.addEventListener('click', function() { brandInput.value = this.dataset.query; analyze(); detail.innerHTML = ''; });
      });
      detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

/* ═══════════ 对比功能 ═══════════ */
var compareSlots = [null, null];
function updateCompareBar() {
  var bar = document.getElementById('compareBar');
  var slot1 = document.getElementById('compareSlot1');
  var slot2 = document.getElementById('compareSlot2');
  var btn = document.getElementById('compareBtn');
  var hasA = !!compareSlots[0], hasB = !!compareSlots[1];
  slot1.textContent = hasA ? compareSlots[0].title : '选择香水 A';
  slot1.classList.toggle('empty', !hasA);
  slot2.textContent = hasB ? compareSlots[1].title : '选择香水 B';
  slot2.classList.toggle('empty', !hasB);
  btn.disabled = !(hasA && hasB);
  bar.classList.toggle('hidden', !hasA && !hasB);
}
function addCompareButton(card, item) {
  if (card.querySelector('.cmp-btn')) return;
  var btn = document.createElement('button');
  btn.className = 'cmp-btn';
  btn.textContent = '⇆';
  btn.title = '加入对比';
  btn.style.cssText = 'position:absolute;top:12px;right:52px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(0,0,0,.2);color:var(--muted);font-size:14px;cursor:pointer;z-index:2;display:grid;place-items:center;padding:0;box-shadow:none;transition:all .22s;';
  btn.addEventListener('mouseenter', function() { this.style.borderColor = 'var(--gold)'; this.style.color = 'var(--gold)'; });
  btn.addEventListener('mouseleave', function() { this.style.borderColor = 'rgba(255,255,255,.1)'; this.style.color = 'var(--muted)'; });
  btn.addEventListener('click', function(e) { e.stopPropagation();
    if (compareSlots[0] && compareSlots[0].title === item.title) { compareSlots[0] = null; updateCompareBar(); return; }
    if (compareSlots[1] && compareSlots[1].title === item.title) { compareSlots[1] = null; updateCompareBar(); return; }
    if (!compareSlots[0]) { compareSlots[0] = item; updateCompareBar(); return; }
    if (!compareSlots[1]) { compareSlots[1] = item; updateCompareBar(); return; }
    compareSlots[0] = compareSlots[1]; compareSlots[1] = item; updateCompareBar();
  });
  card.style.position = 'relative'; card.appendChild(btn);
}
function renderCompareModal() {
  var a = compareSlots[0], b = compareSlots[1];
  if (!a || !b) return;
  modalContent.innerHTML = '<h3 style="font-family:\'Bodoni Moda\',serif;font-size:22px;margin:0 0 16px;">对比：' + a.title + ' vs ' + b.title + '</h3><div class="modal-content-grid"><div class="card"><h3>' + a.title + '</h3><div class="badge-row">' + [a.brand, a.fragranceFamily, a.gender, a.season].map(function(x) { return '<span class="badge">' + x + '</span>'; }).join('') + '</div><p style="margin-top:10px;">' + a.notesIntro + '</p><p style="margin-top:8px;"><strong>留香：</strong>' + (a.longevity || '—') + '<br><strong>扩散：</strong>' + (a.sillage || '—') + '<br><strong>穿搭：</strong>' + (a.wearingTips || '—') + '</p></div><div class="card"><h3>' + b.title + '</h3><div class="badge-row">' + [b.brand, b.fragranceFamily, b.gender, b.season].map(function(x) { return '<span class="badge">' + x + '</span>'; }).join('') + '</div><p style="margin-top:10px;">' + b.notesIntro + '</p><p style="margin-top:8px;"><strong>留香：</strong>' + (b.longevity || '—') + '<br><strong>扩散：</strong>' + (b.sillage || '—') + '<br><strong>穿搭：</strong>' + (b.wearingTips || '—') + '</p></div></div>';
  modal.classList.remove('hidden');
}
document.getElementById('compareBtn').addEventListener('click', renderCompareModal);
document.getElementById('compareClear').addEventListener('click', function() { compareSlots = [null, null]; updateCompareBar(); });
document.getElementById('compareSlot1').addEventListener('click', function() { compareSlots[0] = null; updateCompareBar(); });
document.getElementById('compareSlot2').addEventListener('click', function() { compareSlots[1] = null; updateCompareBar(); });

/* ═══════════ 增强卡片内容 ═══════════ */
function addExtraInfoToCards() {
  result.querySelectorAll('.card').forEach(function(card) {
    if (card.querySelector('.extra-info')) return;
    var h3 = card.querySelector('h3');
    if (!h3) return;
    var sectionTitle = h3.textContent;
    if (sectionTitle === '嗅觉体验' || sectionTitle === '气味介绍') {
      var item = getBestMatch(brandInput.value);
      if (item && item.longevity) {
        var extra = document.createElement('div');
        extra.className = 'extra-info';
        extra.style.cssText = 'margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:var(--muted);line-height:1.8;';
        extra.innerHTML = '<strong>留香时间：</strong>' + item.longevity + ' · <strong>扩散范围：</strong>' + item.sillage + (item.wearingTips ? '<br><strong>穿搭建议：</strong>' + item.wearingTips : '');
        card.appendChild(extra);
      }
    }
  });
}

/* ═══════════ 增强 renderResult ═══════════ */
var origRenderResultFinal = renderResult;
renderResult = function(item, query) {
  origRenderResultFinal(item, query);
  setTimeout(addExtraInfoToCards, 60);
  setTimeout(function() {
    result.querySelectorAll('.card').forEach(function(c) { addCompareButton(c, item); });
  }, 70);
};

/* ═══════════ 更新 summary 显示留香 ═══════════ */
var origUpdateCounters = updateCounters;
updateCounters = function(item) {
  origUpdateCounters(item);
  if (item && item.longevity) {
    summaryPeople.textContent = (item.longevity || '—') + ' · ' + (item.sillage || '—');
  }
};

/* ═══════════ INIT ═══════════ */
renderDailyPicks();
renderFamilyCloud();
renderBrandDirectory();
updateCompareBar();
