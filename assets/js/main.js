// Chinese Ancient Poems Collection
const poems = [
    "欲穷千里目，更上一层楼。", // 王之涣《登鹳雀楼》
    "举头望明月，低头思故乡。", // 李白《静夜思》
    "大漠孤烟直，长河落日圆。", // 王维《使至塞上》
    "会当凌绝顶，一览众山小。", // 杜甫《望岳》
    "海内存知己，天涯若比邻。", // 王勃《送杜少府之任蜀州》
    "但愿人长久，千里共婵娟。", // 苏轼《水调歌头》
    "路漫漫其修远兮，吾将上下而求索。", // 屈原《离骚》
    "不以物喜，不以己悲。", // 范仲淹《岳阳楼记》
    "长风破浪会有时，直挂云帆济沧海。", // 李白《行路难》
    "落霞与孤鹜齐飞，秋水共长天一色。", // 王勃《滕王阁序》
    "山重水复疑无路，柳暗花明又一村。", // 陆游《游山西村》
    "采菊东篱下，悠然见南山。", // 陶渊明《饮酒》
    "天生我材必有用，千金散尽还复来。", // 李白《将进酒》
    "人生自古谁无死，留取丹心照汗青。", // 文天祥《过零丁洋》
    "纸上得来终觉浅，绝知此事要躬行。", // 陆游《冬夜读书示子聿》
    "春蚕到死丝方尽，蜡炬成灰泪始干。", // 李商隐《无题》
    "曾经沧海难为水，除却巫山不是云。", // 元稹《离思》
    "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。", // 辛弃疾《青玉案·元夕》
    "小荷才露尖尖角，早有蜻蜓立上头。", // 杨万里《小池》
    "接天莲叶无穷碧，映日荷花别样红。", // 杨万里《晓出净慈寺送林子方》
    "随风潜入夜，润物细无声。", // 杜甫《春夜喜雨》
    "谁言寸草心，报得三春晖。", // 孟郊《游子吟》
    "老骥伏枥，志在千里。", // 曹操《龟蒙》
    "烈士暮年，壮心不已。", // 曹操《龟蒙》
    "莫愁前路无知己，天下谁人不识君。", // 高适《别董大》
    "两个黄鹂鸣翠柳，一行白鹭上青天。", // 杜甫《绝句》
    "劝君更尽一杯酒，西出阳关无故人。", // 王维《送元二使安西》
    "孤帆远影碧空尽，唯见长江天际流。", // 李白《黄鹤楼送孟浩然之广陵》
    "洛阳亲友如相问，一片冰心在玉壶。", // 王昌龄《芙蓉楼送辛渐》
    "在此山中，云深不知处。", // 贾岛《寻隐者不遇》
    "清明时节雨纷纷，路上行人欲断魂。", // 杜牧《清明》
    "停车坐爱枫林晚，霜叶红于二月花。", // 杜牧《山行》
    "日出江花红胜火，春来江水绿如蓝。", // 白居易《忆江南》
    "千山鸟飞绝，万径人踪灭。", // 柳宗元《江雪》
    "孤舟蓑笠翁，独钓寒江雪。", // 柳宗元《江雪》
    "白日依山尽，黄河入海流。", // 王之涣《登鹳雀楼》
    "春眠不觉晓，处处闻啼鸟。", // 孟浩然《春晓》
    "谁知盘中餐，粒粒皆辛苦。", // 李绅《悯农》
    "野火烧不尽，春风吹又生。", // 白居易《赋得古原草送别》
    "少壮不努力，老大徒伤悲。", // 汉乐府《长歌行》
    "一寸光阴一寸金，寸金难买寸光阴。", // 《增广贤文》
    "读书破万卷，下笔如有神。", // 杜甫《奉赠韦左丞丈二十二韵》
    "笔落惊风雨，诗成泣鬼神。", // 杜甫《寄李十二白二十韵》
    "安得广厦千万间，大庇天下寒士俱欢颜。", // 杜甫《茅屋为秋风所破歌》
    "先天下之忧而忧，后天下之乐而乐。", // 范仲淹《岳阳楼记》
    "位卑未敢忘忧国，事定犹须待阖棺。", // 陆游《病起书怀》
    "苟利国家生死以，岂因祸福避趋之。", // 林则徐《赴戍登程口占示家人》
    "生当作人杰，死亦为鬼雄。", // 李清照《夏日绝句》
    "三十功名尘与土，八千里路云和月。", // 岳飞《满江红》
    "壮志饥餐胡虏肉，笑谈渴饮匈奴血。", // 岳飞《满江红》
];

document.addEventListener('DOMContentLoaded', function() {
    // Get Daily Poem based on date
    const today = new Date();
    // Use day of year as seed to ensure same poem for the whole day
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Select poem using the day of year as index
    const poemIndex = dayOfYear % poems.length;
    const dailyPoem = poems[poemIndex];
    
    // Typing Effect
    const textElement = document.getElementById('typing-text');
    const texts = [
        dailyPoem // The Daily Poem
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!textElement) return;

        const currentText = texts[textIndex];
        
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Slower typing for poems to be readable
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 3000; // Pause longer at end to read the poem
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before new text
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    if (textElement) {
        setTimeout(type, 1000);
    }
});
