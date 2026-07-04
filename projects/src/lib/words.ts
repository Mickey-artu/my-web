// 初中英语单词库 - 按难度梯度分类（1-5级）
// Level 1: 七年级上册基础词汇
// Level 2: 七年级下册进阶词汇
// Level 3: 八年级上册词汇
// Level 4: 八年级下册词汇
// Level 5: 九年级词汇

export interface Word {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  partOfSpeech: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  example: string;
  exampleCn: string;
  type: 'word';
}

export interface Phrase {
  id: string;
  phrase: string;
  meaning: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  example: string;
  exampleCn: string;
  type: 'phrase';
}

export type LearningItem = Word | Phrase;

export const WORDS: Word[] = [
  // ===== Level 1: 七年级上册基础词汇 (40词) =====
  { id: "w001", word: "hello", phonetic: "/həˈloʊ/", meaning: "你好", partOfSpeech: "int.", difficulty: 1, example: "Hello, how are you?", exampleCn: "你好，你好吗？", type: "word" },
  { id: "w002", word: "name", phonetic: "/neɪm/", meaning: "名字；名称", partOfSpeech: "n.", difficulty: 1, example: "My name is Li Ming.", exampleCn: "我的名字叫李明。", type: "word" },
  { id: "w003", word: "friend", phonetic: "/frend/", meaning: "朋友", partOfSpeech: "n.", difficulty: 1, example: "She is my best friend.", exampleCn: "她是我最好的朋友。", type: "word" },
  { id: "w004", word: "family", phonetic: "/ˈfæməli/", meaning: "家庭；家人", partOfSpeech: "n.", difficulty: 1, example: "I love my family.", exampleCn: "我爱我的家庭。", type: "word" },
  { id: "w005", word: "school", phonetic: "/skuːl/", meaning: "学校", partOfSpeech: "n.", difficulty: 1, example: "I go to school every day.", exampleCn: "我每天去上学。", type: "word" },
  { id: "w006", word: "teacher", phonetic: "/ˈtiːtʃər/", meaning: "老师", partOfSpeech: "n.", difficulty: 1, example: "Our teacher is very kind.", exampleCn: "我们的老师很和蔼。", type: "word" },
  { id: "w007", word: "student", phonetic: "/ˈstuːdnt/", meaning: "学生", partOfSpeech: "n.", difficulty: 1, example: "He is a good student.", exampleCn: "他是一个好学生。", type: "word" },
  { id: "w008", word: "book", phonetic: "/bʊk/", meaning: "书；书籍", partOfSpeech: "n.", difficulty: 1, example: "Please open your book.", exampleCn: "请打开你的书。", type: "word" },
  { id: "w009", word: "number", phonetic: "/ˈnʌmbər/", meaning: "数字；号码", partOfSpeech: "n.", difficulty: 1, example: "What's your phone number?", exampleCn: "你的电话号码是多少？", type: "word" },
  { id: "w010", word: "color", phonetic: "/ˈkʌlər/", meaning: "颜色", partOfSpeech: "n.", difficulty: 1, example: "What color is it?", exampleCn: "它是什么颜色的？", type: "word" },
  { id: "w011", word: "apple", phonetic: "/ˈæpl/", meaning: "苹果", partOfSpeech: "n.", difficulty: 1, example: "I like eating apples.", exampleCn: "我喜欢吃苹果。", type: "word" },
  { id: "w012", word: "morning", phonetic: "/ˈmɔːrnɪŋ/", meaning: "早晨；上午", partOfSpeech: "n.", difficulty: 1, example: "Good morning, class!", exampleCn: "早上好，同学们！", type: "word" },
  { id: "w013", word: "afternoon", phonetic: "/ˌæftərˈnuːn/", meaning: "下午", partOfSpeech: "n.", difficulty: 1, example: "See you this afternoon.", exampleCn: "今天下午见。", type: "word" },
  { id: "w014", word: "evening", phonetic: "/ˈiːvnɪŋ/", meaning: "晚上；傍晚", partOfSpeech: "n.", difficulty: 1, example: "I watch TV in the evening.", exampleCn: "我晚上看电视。", type: "word" },
  { id: "w015", word: "thanks", phonetic: "/θæŋks/", meaning: "感谢", partOfSpeech: "int.", difficulty: 1, example: "Thanks for your help.", exampleCn: "谢谢你的帮助。", type: "word" },
  { id: "w016", word: "please", phonetic: "/pliːz/", meaning: "请", partOfSpeech: "adv.", difficulty: 1, example: "Please sit down.", exampleCn: "请坐下。", type: "word" },
  { id: "w017", word: "sorry", phonetic: "/ˈsɑːri/", meaning: "抱歉的；对不起的", partOfSpeech: "adj.", difficulty: 1, example: "I'm sorry I'm late.", exampleCn: "对不起我迟到了。", type: "word" },
  { id: "w018", word: "happy", phonetic: "/ˈhæpi/", meaning: "快乐的；高兴的", partOfSpeech: "adj.", difficulty: 1, example: "I'm very happy today.", exampleCn: "我今天很开心。", type: "word" },
  { id: "w019", word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", meaning: "生日", partOfSpeech: "n.", difficulty: 1, example: "Happy birthday to you!", exampleCn: "祝你生日快乐！", type: "word" },
  { id: "w020", word: "telephone", phonetic: "/ˈtelɪfoʊn/", meaning: "电话", partOfSpeech: "n.", difficulty: 1, example: "May I use your telephone?", exampleCn: "我可以用你的电话吗？", type: "word" },
  { id: "w021", word: "bread", phonetic: "/bred/", meaning: "面包", partOfSpeech: "n.", difficulty: 1, example: "I have bread for breakfast.", exampleCn: "我早餐吃面包。", type: "word" },
  { id: "w022", word: "milk", phonetic: "/mɪlk/", meaning: "牛奶", partOfSpeech: "n.", difficulty: 1, example: "Would you like some milk?", exampleCn: "你想要些牛奶吗？", type: "word" },
  { id: "w023", word: "chicken", phonetic: "/ˈtʃɪkɪn/", meaning: "鸡肉；小鸡", partOfSpeech: "n.", difficulty: 1, example: "I like fried chicken.", exampleCn: "我喜欢炸鸡。", type: "word" },
  { id: "w024", word: "fruit", phonetic: "/fruːt/", meaning: "水果", partOfSpeech: "n.", difficulty: 1, example: "Eat more fruit and vegetables.", exampleCn: "多吃水果和蔬菜。", type: "word" },
  { id: "w025", word: "vegetable", phonetic: "/ˈvedʒtəbl/", meaning: "蔬菜", partOfSpeech: "n.", difficulty: 1, example: "Carrots are my favorite vegetable.", exampleCn: "胡萝卜是我最喜欢的蔬菜。", type: "word" },
  { id: "w026", word: "orange", phonetic: "/ˈɔːrɪndʒ/", meaning: "橙子；橙色的", partOfSpeech: "n./adj.", difficulty: 1, example: "This orange is very sweet.", exampleCn: "这个橙子很甜。", type: "word" },
  { id: "w027", word: "banana", phonetic: "/bəˈnænə/", meaning: "香蕉", partOfSpeech: "n.", difficulty: 1, example: "The banana is yellow.", exampleCn: "香蕉是黄色的。", type: "word" },
  { id: "w028", word: "rice", phonetic: "/raɪs/", meaning: "米饭；大米", partOfSpeech: "n.", difficulty: 1, example: "We eat rice every day.", exampleCn: "我们每天都吃米饭。", type: "word" },
  { id: "w029", word: "salad", phonetic: "/ˈsæləd/", meaning: "沙拉", partOfSpeech: "n.", difficulty: 1, example: "I'd like a fruit salad.", exampleCn: "我想要一份水果沙拉。", type: "word" },
  { id: "w030", word: "dinner", phonetic: "/ˈdɪnər/", meaning: "正餐；晚餐", partOfSpeech: "n.", difficulty: 1, example: "What's for dinner tonight?", exampleCn: "今晚晚餐吃什么？", type: "word" },
  { id: "w031", word: "pencil", phonetic: "/ˈpensl/", meaning: "铅笔", partOfSpeech: "n.", difficulty: 1, example: "I need a pencil to write.", exampleCn: "我需要一支铅笔来写字。", type: "word" },
  { id: "w032", word: "eraser", phonetic: "/ɪˈreɪsər/", meaning: "橡皮擦", partOfSpeech: "n.", difficulty: 1, example: "Can I borrow your eraser?", exampleCn: "我能借用你的橡皮吗？", type: "word" },
  { id: "w033", word: "ruler", phonetic: "/ˈruːlər/", meaning: "尺子", partOfSpeech: "n.", difficulty: 1, example: "Use a ruler to draw a line.", exampleCn: "用尺子画一条线。", type: "word" },
  { id: "w034", word: "desk", phonetic: "/desk/", meaning: "书桌；课桌", partOfSpeech: "n.", difficulty: 1, example: "There is a book on the desk.", exampleCn: "课桌上有一本书。", type: "word" },
  { id: "w035", word: "chair", phonetic: "/tʃer/", meaning: "椅子", partOfSpeech: "n.", difficulty: 1, example: "Please take a chair.", exampleCn: "请坐下。", type: "word" },
  { id: "w036", word: "computer", phonetic: "/kəmˈpjuːtər/", meaning: "电脑", partOfSpeech: "n.", difficulty: 1, example: "I use the computer to study.", exampleCn: "我用电脑学习。", type: "word" },
  { id: "w037", word: "watch", phonetic: "/wɑːtʃ/", meaning: "手表；观看", partOfSpeech: "n./v.", difficulty: 1, example: "What time is it by your watch?", exampleCn: "你的表几点了？", type: "word" },
  { id: "w038", word: "map", phonetic: "/mæp/", meaning: "地图", partOfSpeech: "n.", difficulty: 1, example: "Look at the map of China.", exampleCn: "看这幅中国地图。", type: "word" },
  { id: "w039", word: "key", phonetic: "/kiː/", meaning: "钥匙；关键", partOfSpeech: "n.", difficulty: 1, example: "I lost my key.", exampleCn: "我丢了钥匙。", type: "word" },
  { id: "w040", word: "photo", phonetic: "/ˈfoʊtoʊ/", meaning: "照片", partOfSpeech: "n.", difficulty: 1, example: "Let me take a photo.", exampleCn: "让我拍张照片。", type: "word" },

  // ===== Level 2: 七年级下册进阶词汇 (40词) =====
  { id: "w041", word: "beautiful", phonetic: "/ˈbjuːtɪfl/", meaning: "美丽的", partOfSpeech: "adj.", difficulty: 2, example: "The flowers are beautiful.", exampleCn: "这些花很美。", type: "word" },
  { id: "w042", word: "different", phonetic: "/ˈdɪfrənt/", meaning: "不同的", partOfSpeech: "adj.", difficulty: 2, example: "They have different opinions.", exampleCn: "他们有不同的看法。", type: "word" },
  { id: "w043", word: "important", phonetic: "/ɪmˈpɔːrtnt/", meaning: "重要的", partOfSpeech: "adj.", difficulty: 2, example: "Health is very important.", exampleCn: "健康非常重要。", type: "word" },
  { id: "w044", word: "interesting", phonetic: "/ˈɪntrəstɪŋ/", meaning: "有趣的", partOfSpeech: "adj.", difficulty: 2, example: "The story is very interesting.", exampleCn: "这个故事很有趣。", type: "word" },
  { id: "w045", word: "difficult", phonetic: "/ˈdɪfɪkəlt/", meaning: "困难的", partOfSpeech: "adj.", difficulty: 2, example: "The exam was difficult.", exampleCn: "考试很难。", type: "word" },
  { id: "w046", word: "favorite", phonetic: "/ˈfeɪvərɪt/", meaning: "最喜欢的", partOfSpeech: "adj.", difficulty: 2, example: "What's your favorite subject?", exampleCn: "你最喜欢的科目是什么？", type: "word" },
  { id: "w047", word: "popular", phonetic: "/ˈpɑːpjələr/", meaning: "受欢迎的；流行的", partOfSpeech: "adj.", difficulty: 2, example: "Basketball is very popular.", exampleCn: "篮球很受欢迎。", type: "word" },
  { id: "w048", word: "dangerous", phonetic: "/ˈdeɪndʒərəs/", meaning: "危险的", partOfSpeech: "adj.", difficulty: 2, example: "It's dangerous to swim alone.", exampleCn: "独自游泳很危险。", type: "word" },
  { id: "w049", word: "remember", phonetic: "/rɪˈmembər/", meaning: "记住；回忆", partOfSpeech: "v.", difficulty: 2, example: "Please remember to bring your book.", exampleCn: "请记得带上你的书。", type: "word" },
  { id: "w050", word: "practice", phonetic: "/ˈpræktɪs/", meaning: "练习；实践", partOfSpeech: "v./n.", difficulty: 2, example: "Practice makes perfect.", exampleCn: "熟能生巧。", type: "word" },
  { id: "w051", word: "exercise", phonetic: "/ˈeksərsaɪz/", meaning: "锻炼；练习", partOfSpeech: "n./v.", difficulty: 2, example: "I exercise every morning.", exampleCn: "我每天早上锻炼。", type: "word" },
  { id: "w052", word: "between", phonetic: "/bɪˈtwiːn/", meaning: "在……之间", partOfSpeech: "prep.", difficulty: 2, example: "The bank is between the school and the park.", exampleCn: "银行在学校和公园之间。", type: "word" },
  { id: "w053", word: "across", phonetic: "/əˈkrɔːs/", meaning: "穿过；横过", partOfSpeech: "prep.", difficulty: 2, example: "Go across the bridge.", exampleCn: "走过那座桥。", type: "word" },
  { id: "w054", word: "behind", phonetic: "/bɪˈhaɪnd/", meaning: "在……后面", partOfSpeech: "prep.", difficulty: 2, example: "The cat is behind the door.", exampleCn: "猫在门后面。", type: "word" },
  { id: "w055", word: "weather", phonetic: "/ˈweðər/", meaning: "天气", partOfSpeech: "n.", difficulty: 2, example: "What's the weather like today?", exampleCn: "今天天气怎么样？", type: "word" },
  { id: "w056", word: "holiday", phonetic: "/ˈhɑːlədeɪ/", meaning: "假日；假期", partOfSpeech: "n.", difficulty: 2, example: "We had a great holiday.", exampleCn: "我们度过了一个美好的假期。", type: "word" },
  { id: "w057", word: "message", phonetic: "/ˈmesɪdʒ/", meaning: "消息；信息", partOfSpeech: "n.", difficulty: 2, example: "Can I leave a message?", exampleCn: "我可以留个口信吗？", type: "word" },
  { id: "w058", word: "problem", phonetic: "/ˈprɑːbləm/", meaning: "问题；难题", partOfSpeech: "n.", difficulty: 2, example: "No problem!", exampleCn: "没问题！", type: "word" },
  { id: "w059", word: "surprise", phonetic: "/sərˈpraɪz/", meaning: "使惊奇；惊喜", partOfSpeech: "v./n.", difficulty: 2, example: "What a surprise!", exampleCn: "真是个惊喜！", type: "word" },
  { id: "w060", word: "describe", phonetic: "/dɪˈskraɪb/", meaning: "描述；描写", partOfSpeech: "v.", difficulty: 2, example: "Can you describe your room?", exampleCn: "你能描述一下你的房间吗？", type: "word" },
  { id: "w061", word: "follow", phonetic: "/ˈfɑːloʊ/", meaning: "跟随；遵循", partOfSpeech: "v.", difficulty: 2, example: "Please follow me.", exampleCn: "请跟我来。", type: "word" },
  { id: "w062", word: "arrive", phonetic: "/əˈraɪv/", meaning: "到达", partOfSpeech: "v.", difficulty: 2, example: "We arrived at school early.", exampleCn: "我们很早就到了学校。", type: "word" },
  { id: "w063", word: "hundred", phonetic: "/ˈhʌndrəd/", meaning: "一百", partOfSpeech: "num.", difficulty: 2, example: "There are hundreds of students.", exampleCn: "有几百名学生。", type: "word" },
  { id: "w064", word: "thousand", phonetic: "/ˈθaʊznd/", meaning: "一千", partOfSpeech: "num.", difficulty: 2, example: "It costs two thousand yuan.", exampleCn: "它花费两千元。", type: "word" },
  { id: "w065", word: "village", phonetic: "/ˈvɪlɪdʒ/", meaning: "村庄；乡村", partOfSpeech: "n.", difficulty: 2, example: "She lives in a small village.", exampleCn: "她住在一个小村庄里。", type: "word" },
  { id: "w066", word: "bridge", phonetic: "/brɪdʒ/", meaning: "桥", partOfSpeech: "n.", difficulty: 2, example: "The bridge is very long.", exampleCn: "这座桥很长。", type: "word" },
  { id: "w067", word: "mountain", phonetic: "/ˈmaʊntən/", meaning: "山；山脉", partOfSpeech: "n.", difficulty: 2, example: "We climbed the mountain.", exampleCn: "我们爬了那座山。", type: "word" },
  { id: "w068", word: "hospital", phonetic: "/ˈhɑːspɪtl/", meaning: "医院", partOfSpeech: "n.", difficulty: 2, example: "He went to the hospital.", exampleCn: "他去了医院。", type: "word" },
  { id: "w069", word: "restaurant", phonetic: "/ˈrestrɒnt/", meaning: "餐馆", partOfSpeech: "n.", difficulty: 2, example: "Let's eat at the restaurant.", exampleCn: "我们去那家餐馆吃饭吧。", type: "word" },
  { id: "w070", word: "supermarket", phonetic: "/ˈsuːpərmɑːrkɪt/", meaning: "超市", partOfSpeech: "n.", difficulty: 2, example: "I bought food at the supermarket.", exampleCn: "我在超市买了食物。", type: "word" },
  { id: "w071", word: "realize", phonetic: "/ˈriːəlaɪz/", meaning: "意识到；实现", partOfSpeech: "v.", difficulty: 2, example: "I realized my mistake.", exampleCn: "我意识到了自己的错误。", type: "word" },
  { id: "w072", word: "receive", phonetic: "/rɪˈsiːv/", meaning: "收到；接收", partOfSpeech: "v.", difficulty: 2, example: "I received a letter today.", exampleCn: "我今天收到了一封信。", type: "word" },
  { id: "w073", word: "imagine", phonetic: "/ɪˈmædʒɪn/", meaning: "想象", partOfSpeech: "v.", difficulty: 2, example: "Imagine you are on the moon.", exampleCn: "想象你在月球上。", type: "word" },
  { id: "w074", word: "prepare", phonetic: "/prɪˈper/", meaning: "准备", partOfSpeech: "v.", difficulty: 2, example: "We must prepare for the exam.", exampleCn: "我们必须为考试做准备。", type: "word" },
  { id: "w075", word: "introduce", phonetic: "/ˌɪntrəˈdjuːs/", meaning: "介绍", partOfSpeech: "v.", difficulty: 2, example: "Let me introduce myself.", exampleCn: "让我来自我介绍。", type: "word" },
  { id: "w076", word: "produce", phonetic: "/prəˈdjuːs/", meaning: "生产；制造", partOfSpeech: "v.", difficulty: 2, example: "This factory produces cars.", exampleCn: "这家工厂生产汽车。", type: "word" },
  { id: "w077", word: "increase", phonetic: "/ɪnˈkriːs/", meaning: "增加；增长", partOfSpeech: "v./n.", difficulty: 2, example: "The population is increasing.", exampleCn: "人口在增长。", type: "word" },
  { id: "w078", word: "borrow", phonetic: "/ˈbɑːroʊ/", meaning: "借入", partOfSpeech: "v.", difficulty: 2, example: "Can I borrow your pen?", exampleCn: "我能借你的钢笔吗？", type: "word" },
  { id: "w079", word: "lending", phonetic: "/ˈlendɪŋ/", meaning: "借出", partOfSpeech: "v.", difficulty: 2, example: "Thank you for lending me the book.", exampleCn: "谢谢你借我这本书。", type: "word" },
  { id: "w080", word: "discuss", phonetic: "/dɪˈskʌs/", meaning: "讨论", partOfSpeech: "v.", difficulty: 2, example: "Let's discuss this problem.", exampleCn: "让我们讨论一下这个问题。", type: "word" },

  // ===== Level 3: 八年级上册词汇 (40词) =====
  { id: "w081", word: "advice", phonetic: "/ədˈvaɪs/", meaning: "建议；忠告", partOfSpeech: "n.", difficulty: 3, example: "Can you give me some advice?", exampleCn: "你能给我一些建议吗？", type: "word" },
  { id: "w082", word: "although", phonetic: "/ɔːlˈðoʊ/", meaning: "虽然；尽管", partOfSpeech: "conj.", difficulty: 3, example: "Although he is young, he is smart.", exampleCn: "虽然他很年轻，但他很聪明。", type: "word" },
  { id: "w083", word: "believe", phonetic: "/bɪˈliːv/", meaning: "相信；认为", partOfSpeech: "v.", difficulty: 3, example: "I believe you can do it.", exampleCn: "我相信你能做到。", type: "word" },
  { id: "w084", word: "compare", phonetic: "/kəmˈper/", meaning: "比较；对比", partOfSpeech: "v.", difficulty: 3, example: "Don't compare yourself with others.", exampleCn: "不要把自己和别人比较。", type: "word" },
  { id: "w085", word: "develop", phonetic: "/dɪˈveləp/", meaning: "发展；开发", partOfSpeech: "v.", difficulty: 3, example: "We should develop good habits.", exampleCn: "我们应该养成好习惯。", type: "word" },
  { id: "w086", word: "experience", phonetic: "/ɪkˈspɪriəns/", meaning: "经验；经历", partOfSpeech: "n.", difficulty: 3, example: "It was a wonderful experience.", exampleCn: "那是一次美妙的经历。", type: "word" },
  { id: "w087", word: "improve", phonetic: "/ɪmˈpruːv/", meaning: "改善；提高", partOfSpeech: "v.", difficulty: 3, example: "I want to improve my English.", exampleCn: "我想提高我的英语水平。", type: "word" },
  { id: "w088", word: "knowledge", phonetic: "/ˈnɑːlɪdʒ/", meaning: "知识；学问", partOfSpeech: "n.", difficulty: 3, example: "Knowledge is power.", exampleCn: "知识就是力量。", type: "word" },
  { id: "w089", word: "opportunity", phonetic: "/ˌɑːpərˈtuːnəti/", meaning: "机会", partOfSpeech: "n.", difficulty: 3, example: "Don't miss this opportunity.", exampleCn: "不要错过这个机会。", type: "word" },
  { id: "w090", word: "purpose", phonetic: "/ˈpɜːrpəs/", meaning: "目的；意图", partOfSpeech: "n.", difficulty: 3, example: "What's the purpose of the meeting?", exampleCn: "这次会议的目的是什么？", type: "word" },
  { id: "w091", word: "research", phonetic: "/rɪˈsɜːrtʃ/", meaning: "研究；调查", partOfSpeech: "n./v.", difficulty: 3, example: "She is doing research on climate.", exampleCn: "她正在做气候方面的研究。", type: "word" },
  { id: "w092", word: "situation", phonetic: "/ˌsɪtʃuˈeɪʃn/", meaning: "情况；形势", partOfSpeech: "n.", difficulty: 3, example: "The situation is getting better.", exampleCn: "情况正在好转。", type: "word" },
  { id: "w093", word: "tradition", phonetic: "/trəˈdɪʃn/", meaning: "传统；惯例", partOfSpeech: "n.", difficulty: 3, example: "It's a Chinese tradition.", exampleCn: "这是一个中国传统。", type: "word" },
  { id: "w094", word: "consider", phonetic: "/kənˈsɪdər/", meaning: "考虑；认为", partOfSpeech: "v.", difficulty: 3, example: "Please consider my suggestion.", exampleCn: "请考虑我的建议。", type: "word" },
  { id: "w095", word: "encourage", phonetic: "/ɪnˈkɜːrɪdʒ/", meaning: "鼓励；激励", partOfSpeech: "v.", difficulty: 3, example: "My teacher encourages me a lot.", exampleCn: "我的老师经常鼓励我。", type: "word" },
  { id: "w096", word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", meaning: "环境", partOfSpeech: "n.", difficulty: 3, example: "We should protect the environment.", exampleCn: "我们应该保护环境。", type: "word" },
  { id: "w097", word: "government", phonetic: "/ˈɡʌvərnmənt/", meaning: "政府", partOfSpeech: "n.", difficulty: 3, example: "The government made a new plan.", exampleCn: "政府制定了新计划。", type: "word" },
  { id: "w098", word: "independent", phonetic: "/ˌɪndɪˈpendənt/", meaning: "独立的", partOfSpeech: "adj.", difficulty: 3, example: "She is very independent.", exampleCn: "她非常独立。", type: "word" },
  { id: "w099", word: "necessary", phonetic: "/ˈnesəseri/", meaning: "必要的；必需的", partOfSpeech: "adj.", difficulty: 3, example: "Sleep is necessary for health.", exampleCn: "睡眠对健康是必要的。", type: "word" },
  { id: "w100", word: "organize", phonetic: "/ˈɔːrɡənaɪz/", meaning: "组织；安排", partOfSpeech: "v.", difficulty: 3, example: "Let's organize a party.", exampleCn: "我们来组织一次聚会吧。", type: "word" },
  { id: "w101", word: "promise", phonetic: "/ˈprɑːmɪs/", meaning: "承诺；保证", partOfSpeech: "v./n.", difficulty: 3, example: "I promise I will be on time.", exampleCn: "我保证会准时。", type: "word" },
  { id: "w102", word: "relationship", phonetic: "/rɪˈleɪʃnʃɪp/", meaning: "关系", partOfSpeech: "n.", difficulty: 3, example: "They have a good relationship.", exampleCn: "他们关系很好。", type: "word" },
  { id: "w103", word: "successful", phonetic: "/səkˈsesfl/", meaning: "成功的", partOfSpeech: "adj.", difficulty: 3, example: "She is a successful writer.", exampleCn: "她是一位成功的作家。", type: "word" },
  { id: "w104", word: "volunteer", phonetic: "/ˌvɑːlənˈtɪr/", meaning: "志愿者；自愿做", partOfSpeech: "n./v.", difficulty: 3, example: "He works as a volunteer.", exampleCn: "他做志愿者工作。", type: "word" },
  { id: "w105", word: "achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "成就；成绩", partOfSpeech: "n.", difficulty: 3, example: "It was a great achievement.", exampleCn: "那是一个伟大的成就。", type: "word" },
  { id: "w106", word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", meaning: "交流；沟通", partOfSpeech: "v.", difficulty: 3, example: "We communicate by email.", exampleCn: "我们通过电子邮件交流。", type: "word" },
  { id: "w107", word: "competition", phonetic: "/ˌkɑːmpəˈtɪʃn/", meaning: "竞赛；比赛", partOfSpeech: "n.", difficulty: 3, example: "He won first prize in the competition.", exampleCn: "他在比赛中获得了一等奖。", type: "word" },
  { id: "w108", word: "education", phonetic: "/ˌedʒuˈkeɪʃn/", meaning: "教育", partOfSpeech: "n.", difficulty: 3, example: "Education is important for everyone.", exampleCn: "教育对每个人都很重要。", type: "word" },
  { id: "w109", word: "influence", phonetic: "/ˈɪnfluəns/", meaning: "影响", partOfSpeech: "n./v.", difficulty: 3, example: "Music has a big influence on me.", exampleCn: "音乐对我有很大的影响。", type: "word" },
  { id: "w110", word: "technology", phonetic: "/tekˈnɑːlədʒi/", meaning: "技术；科技", partOfSpeech: "n.", difficulty: 3, example: "Technology changes our lives.", exampleCn: "科技改变了我们的生活。", type: "word" },
  { id: "w111", word: "attention", phonetic: "/əˈtenʃn/", meaning: "注意力；关注", partOfSpeech: "n.", difficulty: 3, example: "Please pay attention to the teacher.", exampleCn: "请注意听老师讲课。", type: "word" },
  { id: "w112", word: "celebrate", phonetic: "/ˈselɪbreɪt/", meaning: "庆祝", partOfSpeech: "v.", difficulty: 3, example: "We celebrate Spring Festival every year.", exampleCn: "我们每年庆祝春节。", type: "word" },
  { id: "w113", word: "disappear", phonetic: "/ˌdɪsəˈpɪr/", meaning: "消失", partOfSpeech: "v.", difficulty: 3, example: "The sun disappeared behind the clouds.", exampleCn: "太阳消失在云层后面。", type: "word" },
  { id: "w114", word: "expression", phonetic: "/ɪkˈspreʃn/", meaning: "表达；表情", partOfSpeech: "n.", difficulty: 3, example: "Read the expression on her face.", exampleCn: "读一读她脸上的表情。", type: "word" },
  { id: "w115", word: "discover", phonetic: "/dɪˈskʌvər/", meaning: "发现", partOfSpeech: "v.", difficulty: 3, example: "Columbus discovered America.", exampleCn: "哥伦布发现了美洲。", type: "word" },
  { id: "w116", word: "protect", phonetic: "/prəˈtekt/", meaning: "保护", partOfSpeech: "v.", difficulty: 3, example: "We should protect wild animals.", exampleCn: "我们应该保护野生动物。", type: "word" },
  { id: "w117", word: "provide", phonetic: "/prəˈvaɪd/", meaning: "提供", partOfSpeech: "v.", difficulty: 3, example: "The school provides free lunch.", exampleCn: "学校提供免费午餐。", type: "word" },
  { id: "w118", word: "require", phonetic: "/rɪˈkwaɪər/", meaning: "要求；需要", partOfSpeech: "v.", difficulty: 3, example: "This job requires patience.", exampleCn: "这份工作需要耐心。", type: "word" },
  { id: "w119", word: "represent", phonetic: "/ˌreprɪˈzent/", meaning: "代表", partOfSpeech: "v.", difficulty: 3, example: "The red color represents courage.", exampleCn: "红色代表勇气。", type: "word" },
  { id: "w120", word: "contribute", phonetic: "/kənˈtrɪbjuːt/", meaning: "贡献；捐助", partOfSpeech: "v.", difficulty: 3, example: "Everyone should contribute to society.", exampleCn: "每个人都应该为社会做贡献。", type: "word" },

  // ===== Level 4: 八年级下册词汇 (40词) =====
  { id: "w121", word: "appreciate", phonetic: "/əˈpriːʃieɪt/", meaning: "欣赏；感激", partOfSpeech: "v.", difficulty: 4, example: "I appreciate your help.", exampleCn: "我感激你的帮助。", type: "word" },
  { id: "w122", word: "concentrate", phonetic: "/ˈkɑːnsntreɪt/", meaning: "集中；专注", partOfSpeech: "v.", difficulty: 4, example: "Please concentrate on your study.", exampleCn: "请集中精力学习。", type: "word" },
  { id: "w123", word: "determine", phonetic: "/dɪˈtɜːrmɪn/", meaning: "决定；确定", partOfSpeech: "v.", difficulty: 4, example: "He determined to work harder.", exampleCn: "他下定决心更努力工作。", type: "word" },
  { id: "w124", word: "excellent", phonetic: "/ˈeksələnt/", meaning: "极好的；优秀的", partOfSpeech: "adj.", difficulty: 4, example: "You did an excellent job.", exampleCn: "你做得非常出色。", type: "word" },
  { id: "w125", word: "fascinating", phonetic: "/ˈfæsɪneɪtɪŋ/", meaning: "迷人的；极好的", partOfSpeech: "adj.", difficulty: 4, example: "The story is absolutely fascinating.", exampleCn: "这个故事非常迷人。", type: "word" },
  { id: "w126", word: "gradually", phonetic: "/ˈɡrædʒuəli/", meaning: "逐渐地", partOfSpeech: "adv.", difficulty: 4, example: "Things will gradually improve.", exampleCn: "事情会逐渐好转的。", type: "word" },
  { id: "w127", word: "hesitate", phonetic: "/ˈhezɪteɪt/", meaning: "犹豫；踌躇", partOfSpeech: "v.", difficulty: 4, example: "Don't hesitate to ask questions.", exampleCn: "不要犹豫，大胆提问。", type: "word" },
  { id: "w128", word: "interpret", phonetic: "/ɪnˈtɜːrprɪt/", meaning: "解释；口译", partOfSpeech: "v.", difficulty: 4, example: "How do you interpret this sentence?", exampleCn: "你怎么理解这个句子？", type: "word" },
  { id: "w129", word: "responsibility", phonetic: "/rɪˌspɑːnsəˈbɪləti/", meaning: "责任；职责", partOfSpeech: "n.", difficulty: 4, example: "It's our responsibility to protect the earth.", exampleCn: "保护地球是我们的责任。", type: "word" },
  { id: "w130", word: "significance", phonetic: "/sɪɡˈnɪfɪkəns/", meaning: "重要性；意义", partOfSpeech: "n.", difficulty: 4, example: "This discovery has great significance.", exampleCn: "这个发现具有重大意义。", type: "word" },
  { id: "w131", word: "accomplish", phonetic: "/əˈkɑːmplɪʃ/", meaning: "完成；实现", partOfSpeech: "v.", difficulty: 4, example: "She accomplished her goal.", exampleCn: "她实现了她的目标。", type: "word" },
  { id: "w132", word: "consequence", phonetic: "/ˈkɑːnsɪkwens/", meaning: "结果；后果", partOfSpeech: "n.", difficulty: 4, example: "You must accept the consequences.", exampleCn: "你必须承担后果。", type: "word" },
  { id: "w133", word: "demonstrate", phonetic: "/ˈdemənstreɪt/", meaning: "证明；示范", partOfSpeech: "v.", difficulty: 4, example: "Let me demonstrate how it works.", exampleCn: "让我示范一下它是如何运作的。", type: "word" },
  { id: "w134", word: "enthusiasm", phonetic: "/ɪnˈθuːziæzəm/", meaning: "热情；热忱", partOfSpeech: "n.", difficulty: 4, example: "He has great enthusiasm for music.", exampleCn: "他对音乐有着极大的热情。", type: "word" },
  { id: "w135", word: "fundamental", phonetic: "/ˌfʌndəˈmentl/", meaning: "基本的；根本的", partOfSpeech: "adj.", difficulty: 4, example: "Reading is a fundamental skill.", exampleCn: "阅读是一项基本技能。", type: "word" },
  { id: "w136", word: "guarantee", phonetic: "/ˌɡærənˈtiː/", meaning: "保证；担保", partOfSpeech: "v./n.", difficulty: 4, example: "I guarantee you'll be satisfied.", exampleCn: "我保证你会满意的。", type: "word" },
  { id: "w137", word: "illustrate", phonetic: "/ˈɪləstreɪt/", meaning: "说明；阐明", partOfSpeech: "v.", difficulty: 4, example: "This example illustrates the point.", exampleCn: "这个例子说明了这个观点。", type: "word" },
  { id: "w138", word: "negotiate", phonetic: "/nɪˈɡoʊʃieɪt/", meaning: "谈判；协商", partOfSpeech: "v.", difficulty: 4, example: "They are negotiating a peace agreement.", exampleCn: "他们正在协商和平协议。", type: "word" },
  { id: "w139", word: "phenomenon", phonetic: "/fɪˈnɑːmɪnɑːn/", meaning: "现象", partOfSpeech: "n.", difficulty: 4, example: "This is a natural phenomenon.", exampleCn: "这是一种自然现象。", type: "word" },
  { id: "w140", word: "recognize", phonetic: "/ˈrekəɡnaɪz/", meaning: "认出；识别", partOfSpeech: "v.", difficulty: 4, example: "I didn't recognize you!", exampleCn: "我没认出你！", type: "word" },
  { id: "w141", word: "sufficient", phonetic: "/səˈfɪʃnt/", meaning: "足够的；充分的", partOfSpeech: "adj.", difficulty: 4, example: "Do we have sufficient time?", exampleCn: "我们有足够的时间吗？", type: "word" },
  { id: "w142", word: "temporary", phonetic: "/ˈtempəreri/", meaning: "临时的；暂时的", partOfSpeech: "adj.", difficulty: 4, example: "This is a temporary solution.", exampleCn: "这是一个临时解决方案。", type: "word" },
  { id: "w143", word: "ultimately", phonetic: "/ˈʌltɪmətli/", meaning: "最终；最后", partOfSpeech: "adv.", difficulty: 4, example: "Ultimately, you have to decide.", exampleCn: "最终，你必须自己决定。", type: "word" },
  { id: "w144", word: "voluntary", phonetic: "/ˈvɑːlənteri/", meaning: "自愿的；志愿的", partOfSpeech: "adj.", difficulty: 4, example: "Participation is voluntary.", exampleCn: "参与是自愿的。", type: "word" },
  { id: "w145", word: "convince", phonetic: "/kənˈvɪns/", meaning: "说服；使相信", partOfSpeech: "v.", difficulty: 4, example: "I convinced him to join us.", exampleCn: "我说服了他加入我们。", type: "word" },
  { id: "w146", word: "emphasize", phonetic: "/ˈemfəsaɪz/", meaning: "强调", partOfSpeech: "v.", difficulty: 4, example: "I want to emphasize the importance of reading.", exampleCn: "我想强调阅读的重要性。", type: "word" },
  { id: "w147", word: "attract", phonetic: "/əˈtrækt/", meaning: "吸引", partOfSpeech: "v.", difficulty: 4, example: "The beautiful scenery attracts many tourists.", exampleCn: "美丽的风景吸引了很多游客。", type: "word" },
  { id: "w148", word: "advantage", phonetic: "/ədˈvæntɪdʒ/", meaning: "优势；好处", partOfSpeech: "n.", difficulty: 4, example: "What are the advantages of this plan?", exampleCn: "这个计划的优点是什么？", type: "word" },
  { id: "w149", word: "announce", phonetic: "/əˈnaʊns/", meaning: "宣布；通知", partOfSpeech: "v.", difficulty: 4, example: "They announced the result yesterday.", exampleCn: "他们昨天宣布了结果。", type: "word" },
  { id: "w150", word: "confidence", phonetic: "/ˈkɑːnfɪdəns/", meaning: "信心；自信", partOfSpeech: "n.", difficulty: 4, example: "Have confidence in yourself.", exampleCn: "对自己要有信心。", type: "word" },
  { id: "w151", word: "efficient", phonetic: "/ɪˈfɪʃnt/", meaning: "高效的", partOfSpeech: "adj.", difficulty: 4, example: "This is a very efficient method.", exampleCn: "这是一个非常高效的方法。", type: "word" },
  { id: "w152", word: "frequent", phonetic: "/ˈfriːkwənt/", meaning: "频繁的", partOfSpeech: "adj.", difficulty: 4, example: "Frequent exercise is good for health.", exampleCn: "经常锻炼对健康有益。", type: "word" },
  { id: "w153", word: "possess", phonetic: "/pəˈzes/", meaning: "拥有；具有", partOfSpeech: "v.", difficulty: 4, example: "She possesses great talent.", exampleCn: "她拥有极大的天赋。", type: "word" },
  { id: "w154", word: "strategy", phonetic: "/ˈstrætədʒi/", meaning: "策略；战略", partOfSpeech: "n.", difficulty: 4, example: "We need a new marketing strategy.", exampleCn: "我们需要一个新的营销策略。", type: "word" },
  { id: "w155", word: "specific", phonetic: "/spɪˈsɪfɪk/", meaning: "具体的；特定的", partOfSpeech: "adj.", difficulty: 4, example: "Can you be more specific?", exampleCn: "你能说得更具体些吗？", type: "word" },
  { id: "w156", word: "potential", phonetic: "/pəˈtenʃl/", meaning: "潜力；潜在的", partOfSpeech: "n./adj.", difficulty: 4, example: "She has the potential to be a great artist.", exampleCn: "她有成为伟大艺术家的潜力。", type: "word" },
  { id: "w157", word: "recommend", phonetic: "/ˌrekəˈmend/", meaning: "推荐；建议", partOfSpeech: "v.", difficulty: 4, example: "I recommend this book to you.", exampleCn: "我把这本书推荐给你。", type: "word" },
  { id: "w158", word: "reputation", phonetic: "/ˌrepjuˈteɪʃn/", meaning: "名声；声誉", partOfSpeech: "n.", difficulty: 4, example: "The school has a good reputation.", exampleCn: "这所学校声誉很好。", type: "word" },
  { id: "w159", word: "transport", phonetic: "/trænˈspɔːrt/", meaning: "运输；交通", partOfSpeech: "v./n.", difficulty: 4, example: "We transport goods by truck.", exampleCn: "我们用卡车运输货物。", type: "word" },
  { id: "w160", word: "sacrifice", phonetic: "/ˈsækrɪfaɪs/", meaning: "牺牲；献出", partOfSpeech: "v./n.", difficulty: 4, example: "Parents sacrifice a lot for their children.", exampleCn: "父母为孩子牺牲很多。", type: "word" },

  // ===== Level 5: 九年级词汇 (40词) =====
  { id: "w161", word: "acknowledge", phonetic: "/əkˈnɑːlɪdʒ/", meaning: "承认；致谢", partOfSpeech: "v.", difficulty: 5, example: "He acknowledged his mistake.", exampleCn: "他承认了自己的错误。", type: "word" },
  { id: "w162", word: "circumstance", phonetic: "/ˈsɜːrkəmstæns/", meaning: "环境；情况", partOfSpeech: "n.", difficulty: 5, example: "Under no circumstance should you give up.", exampleCn: "在任何情况下都不应放弃。", type: "word" },
  { id: "w163", word: "comprehensive", phonetic: "/ˌkɑːmprɪˈhensɪv/", meaning: "全面的；综合的", partOfSpeech: "adj.", difficulty: 5, example: "We need a comprehensive plan.", exampleCn: "我们需要一个全面的计划。", type: "word" },
  { id: "w164", word: "conscience", phonetic: "/ˈkɑːnʃəns/", meaning: "良心；良知", partOfSpeech: "n.", difficulty: 5, example: "He has a clear conscience.", exampleCn: "他问心无愧。", type: "word" },
  { id: "w165", word: "controversial", phonetic: "/ˌkɑːntrəˈvɜːrʃl/", meaning: "有争议的", partOfSpeech: "adj.", difficulty: 5, example: "The topic is very controversial.", exampleCn: "这个话题很有争议。", type: "word" },
  { id: "w166", word: "distinguish", phonetic: "/dɪˈstɪŋɡwɪʃ/", meaning: "区分；辨别", partOfSpeech: "v.", difficulty: 5, example: "Can you distinguish the two colors?", exampleCn: "你能区分这两种颜色吗？", type: "word" },
  { id: "w167", word: "elaborate", phonetic: "/ɪˈlæbərət/", meaning: "详细阐述；精心的", partOfSpeech: "v./adj.", difficulty: 5, example: "Could you elaborate on that point?", exampleCn: "你能详细阐述那个观点吗？", type: "word" },
  { id: "w168", word: "equivalent", phonetic: "/ɪˈkwɪvələnt/", meaning: "等价的；相等的", partOfSpeech: "adj.", difficulty: 5, example: "One dollar is equivalent to about seven yuan.", exampleCn: "一美元大约等于七元人民币。", type: "word" },
  { id: "w169", word: "exaggerate", phonetic: "/ɪɡˈzædʒəreɪt/", meaning: "夸张；夸大", partOfSpeech: "v.", difficulty: 5, example: "Don't exaggerate the problem.", exampleCn: "不要夸大这个问题。", type: "word" },
  { id: "w170", word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", meaning: "不可避免的", partOfSpeech: "adj.", difficulty: 5, example: "Change is inevitable.", exampleCn: "变化是不可避免的。", type: "word" },
  { id: "w171", word: "magnificent", phonetic: "/mæɡˈnɪfɪsnt/", meaning: "壮丽的；极好的", partOfSpeech: "adj.", difficulty: 5, example: "The view from the top is magnificent.", exampleCn: "从山顶看下去景色壮丽。", type: "word" },
  { id: "w172", word: "philosophy", phonetic: "/fɪˈlɑːsəfi/", meaning: "哲学", partOfSpeech: "n.", difficulty: 5, example: "She studies philosophy at university.", exampleCn: "她在大学学习哲学。", type: "word" },
  { id: "w173", word: "prejudice", phonetic: "/ˈpredʒʊdɪs/", meaning: "偏见；歧视", partOfSpeech: "n.", difficulty: 5, example: "We should fight against prejudice.", exampleCn: "我们应该与偏见作斗争。", type: "word" },
  { id: "w174", word: "perspective", phonetic: "/pərˈspektɪv/", meaning: "视角；观点", partOfSpeech: "n.", difficulty: 5, example: "Look at it from a different perspective.", exampleCn: "从不同的角度看这个问题。", type: "word" },
  { id: "w175", word: "sophisticated", phonetic: "/səˈfɪstɪkeɪtɪd/", meaning: "复杂精密的；老练的", partOfSpeech: "adj.", difficulty: 5, example: "This is a very sophisticated machine.", exampleCn: "这是一台非常精密的机器。", type: "word" },
  { id: "w176", word: "substantial", phonetic: "/səbˈstænʃl/", meaning: "大量的；实质的", partOfSpeech: "adj.", difficulty: 5, example: "We made substantial progress.", exampleCn: "我们取得了重大进展。", type: "word" },
  { id: "w177", word: "tremendous", phonetic: "/trɪˈmendəs/", meaning: "巨大的；极好的", partOfSpeech: "adj.", difficulty: 5, example: "He made a tremendous effort.", exampleCn: "他付出了巨大的努力。", type: "word" },
  { id: "w178", word: "vulnerable", phonetic: "/ˈvʌlnərəbl/", meaning: "脆弱的；易受伤的", partOfSpeech: "adj.", difficulty: 5, example: "Children are more vulnerable to illness.", exampleCn: "儿童更容易生病。", type: "word" },
  { id: "w179", word: "optimistic", phonetic: "/ˌɑːptɪˈmɪstɪk/", meaning: "乐观的", partOfSpeech: "adj.", difficulty: 5, example: "I'm optimistic about the future.", exampleCn: "我对未来很乐观。", type: "word" },
  { id: "w180", word: "perseverance", phonetic: "/ˌpɜːrsəˈvɪrəns/", meaning: "毅力；坚持不懈", partOfSpeech: "n.", difficulty: 5, example: "Success requires perseverance.", exampleCn: "成功需要坚持不懈。", type: "word" },
  { id: "w181", word: "flourish", phonetic: "/ˈflɜːrɪʃ/", meaning: "繁荣；茂盛", partOfSpeech: "v.", difficulty: 5, example: "The garden is flourishing.", exampleCn: "花园里草木茂盛。", type: "word" },
  { id: "w182", word: "authentic", phonetic: "/ɔːˈθentɪk/", meaning: "真正的；真实的", partOfSpeech: "adj.", difficulty: 5, example: "Is this an authentic painting?", exampleCn: "这是一幅真迹吗？", type: "word" },
  { id: "w183", word: "consensus", phonetic: "/kənˈsensəs/", meaning: "共识；一致意见", partOfSpeech: "n.", difficulty: 5, example: "We reached a consensus on this issue.", exampleCn: "我们在这个问题上达成了共识。", type: "word" },
  { id: "w184", word: "entrepreneur", phonetic: "/ˌɑːntrəprəˈnɜːr/", meaning: "企业家", partOfSpeech: "n.", difficulty: 5, example: "She is a successful entrepreneur.", exampleCn: "她是一位成功的企业家。", type: "word" },
  { id: "w185", word: "perceive", phonetic: "/pərˈsiːv/", meaning: "感知；理解", partOfSpeech: "v.", difficulty: 5, example: "I perceived a change in her attitude.", exampleCn: "我察觉到她态度的变化。", type: "word" },
  { id: "w186", word: "contemplate", phonetic: "/ˈkɑːntəmpleɪt/", meaning: "沉思；凝视", partOfSpeech: "v.", difficulty: 5, example: "She sat and contemplated her future.", exampleCn: "她坐下来思考自己的未来。", type: "word" },
  { id: "w187", word: "resilient", phonetic: "/rɪˈzɪliənt/", meaning: "有弹性的；能复原的", partOfSpeech: "adj.", difficulty: 5, example: "Children are very resilient.", exampleCn: "儿童的恢复力很强。", type: "word" },
  { id: "w188", word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", meaning: "模棱两可的", partOfSpeech: "adj.", difficulty: 5, example: "His answer was ambiguous.", exampleCn: "他的回答模棱两可。", type: "word" },
  { id: "w189", word: "benevolent", phonetic: "/bəˈnevələnt/", meaning: "仁慈的；善意的", partOfSpeech: "adj.", difficulty: 5, example: "He was a benevolent old man.", exampleCn: "他是一位仁慈的老人。", type: "word" },
  { id: "w190", word: "legitimate", phonetic: "/lɪˈdʒɪtɪmət/", meaning: "合法的；正当的", partOfSpeech: "adj.", difficulty: 5, example: "That's a legitimate question.", exampleCn: "那是一个正当的问题。", type: "word" },
  { id: "w191", word: "spontaneous", phonetic: "/spɑːnˈteɪniəs/", meaning: "自发的；自然的", partOfSpeech: "adj.", difficulty: 5, example: "The audience broke into spontaneous applause.", exampleCn: "观众自发地鼓起掌来。", type: "word" },
  { id: "w192", word: "sympathetic", phonetic: "/ˌsɪmpəˈθetɪk/", meaning: "同情的；共情的", partOfSpeech: "adj.", difficulty: 5, example: "She was very sympathetic towards me.", exampleCn: "她对我非常同情。", type: "word" },
  { id: "w193", word: "unanimous", phonetic: "/juˈnænɪməs/", meaning: "全体一致的", partOfSpeech: "adj.", difficulty: 5, example: "The decision was unanimous.", exampleCn: "这个决定是全体一致的。", type: "word" },
  { id: "w194", word: "controversy", phonetic: "/ˈkɑːntrəvɜːrsi/", meaning: "争议；论战", partOfSpeech: "n.", difficulty: 5, example: "The decision caused much controversy.", exampleCn: "这个决定引起了很多争议。", type: "word" },
  { id: "w195", word: "hypothesis", phonetic: "/haɪˈpɑːθəsɪs/", meaning: "假设；假说", partOfSpeech: "n.", difficulty: 5, example: "We need to test this hypothesis.", exampleCn: "我们需要验证这个假设。", type: "word" },
  { id: "w196", word: "implement", phonetic: "/ˈɪmplɪment/", meaning: "实施；执行", partOfSpeech: "v.", difficulty: 5, example: "We plan to implement the new policy.", exampleCn: "我们计划实施新政策。", type: "word" },
  { id: "w197", word: "compromise", phonetic: "/ˈkɑːmprəmaɪz/", meaning: "妥协；折中", partOfSpeech: "v./n.", difficulty: 5, example: "We need to find a compromise.", exampleCn: "我们需要找到一个折中方案。", type: "word" },
  { id: "w198", word: "discipline", phonetic: "/ˈdɪsəplɪn/", meaning: "纪律；学科", partOfSpeech: "n.", difficulty: 5, example: "Self-discipline is the key to success.", exampleCn: "自律是成功的关键。", type: "word" },
  { id: "w199", word: "transform", phonetic: "/trænsˈfɔːrm/", meaning: "转变；改造", partOfSpeech: "v.", difficulty: 5, example: "Education can transform a person's life.", exampleCn: "教育能改变一个人的人生。", type: "word" },
  { id: "w200", word: "integrity", phonetic: "/ɪnˈteɡrəti/", meaning: "正直；完整", partOfSpeech: "n.", difficulty: 5, example: "He is a man of great integrity.", exampleCn: "他是一个非常正直的人。", type: "word" },

  // ===== 日常实用词汇补充 =====
  // Level 1: 基础日常
  { id: "w201", word: "breakfast", phonetic: "/ˈbrekfəst/", meaning: "早餐", partOfSpeech: "n.", difficulty: 1, example: "I have breakfast at seven.", exampleCn: "我七点吃早餐。", type: "word" },
  { id: "w202", word: "lunch", phonetic: "/lʌntʃ/", meaning: "午餐", partOfSpeech: "n.", difficulty: 1, example: "Let's have lunch together.", exampleCn: "我们一起吃午餐吧。", type: "word" },
  { id: "w203", word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", partOfSpeech: "n.", difficulty: 1, example: "What's for dinner?", exampleCn: "晚餐吃什么？", type: "word" },
  { id: "w204", word: "kitchen", phonetic: "/ˈkɪtʃɪn/", meaning: "厨房", partOfSpeech: "n.", difficulty: 1, example: "Mom is cooking in the kitchen.", exampleCn: "妈妈在厨房做饭。", type: "word" },
  { id: "w205", word: "bedroom", phonetic: "/ˈbedruːm/", meaning: "卧室", partOfSpeech: "n.", difficulty: 1, example: "My bedroom is small but cozy.", exampleCn: "我的卧室小而温馨。", type: "word" },
  { id: "w206", word: "bathroom", phonetic: "/ˈbæθruːm/", meaning: "浴室；卫生间", partOfSpeech: "n.", difficulty: 1, example: "Where is the bathroom?", exampleCn: "卫生间在哪里？", type: "word" },
  { id: "w207", word: "garden", phonetic: "/ˈɡɑːrdn/", meaning: "花园", partOfSpeech: "n.", difficulty: 1, example: "There are flowers in the garden.", exampleCn: "花园里有花。", type: "word" },
  { id: "w208", word: "market", phonetic: "/ˈmɑːrkɪt/", meaning: "市场；超市", partOfSpeech: "n.", difficulty: 1, example: "Let's go to the market.", exampleCn: "我们去市场吧。", type: "word" },
  { id: "w209", word: "restaurant", phonetic: "/ˈrestrɒnt/", meaning: "餐厅", partOfSpeech: "n.", difficulty: 1, example: "This restaurant is very popular.", exampleCn: "这家餐厅很受欢迎。", type: "word" },
  { id: "w210", word: "hospital", phonetic: "/ˈhɒspɪtl/", meaning: "医院", partOfSpeech: "n.", difficulty: 1, example: "The hospital is near our school.", exampleCn: "医院在我们学校附近。", type: "word" },
  { id: "w211", word: "library", phonetic: "/ˈlaɪbrəri/", meaning: "图书馆", partOfSpeech: "n.", difficulty: 1, example: "I study in the library every day.", exampleCn: "我每天在图书馆学习。", type: "word" },
  { id: "w212", word: "supermarket", phonetic: "/ˈsuːpəmɑːrkɪt/", meaning: "超市", partOfSpeech: "n.", difficulty: 1, example: "The supermarket is across the street.", exampleCn: "超市在街对面。", type: "word" },
  { id: "w213", word: "clothes", phonetic: "/kloʊðz/", meaning: "衣服", partOfSpeech: "n.", difficulty: 1, example: "I need to buy some new clothes.", exampleCn: "我需要买些新衣服。", type: "word" },
  { id: "w214", word: "shoes", phonetic: "/ʃuːz/", meaning: "鞋子", partOfSpeech: "n.", difficulty: 1, example: "These shoes are comfortable.", exampleCn: "这双鞋很舒服。", type: "word" },
  { id: "w215", word: "phone", phonetic: "/foʊn/", meaning: "电话；手机", partOfSpeech: "n.", difficulty: 1, example: "Can I use your phone?", exampleCn: "我能用你的手机吗？", type: "word" },
  { id: "w216", word: "computer", phonetic: "/kəmˈpjuːtər/", meaning: "电脑", partOfSpeech: "n.", difficulty: 1, example: "I use a computer for homework.", exampleCn: "我用电脑做作业。", type: "word" },
  { id: "w217", word: "umbrella", phonetic: "/ʌmˈbrelə/", meaning: "雨伞", partOfSpeech: "n.", difficulty: 1, example: "Take an umbrella. It might rain.", exampleCn: "带把伞吧。可能会下雨。", type: "word" },
  { id: "w218", word: "wallet", phonetic: "/ˈwɒlɪt/", meaning: "钱包", partOfSpeech: "n.", difficulty: 1, example: "I lost my wallet.", exampleCn: "我丢了钱包。", type: "word" },
  { id: "w219", word: "key", phonetic: "/kiː/", meaning: "钥匙", partOfSpeech: "n.", difficulty: 1, example: "Where are my keys?", exampleCn: "我的钥匙在哪里？", type: "word" },
  { id: "w220", word: "ticket", phonetic: "/ˈtɪkɪt/", meaning: "票；入场券", partOfSpeech: "n.", difficulty: 1, example: "I bought two tickets for the movie.", exampleCn: "我买了两张电影票。", type: "word" },
  { id: "w221", word: "delicious", phonetic: "/dɪˈlɪʃəs/", meaning: "美味的", partOfSpeech: "adj.", difficulty: 1, example: "The food is delicious.", exampleCn: "食物很美味。", type: "word" },
  { id: "w222", word: "expensive", phonetic: "/ɪkˈspensɪv/", meaning: "昂贵的", partOfSpeech: "adj.", difficulty: 1, example: "This bag is too expensive.", exampleCn: "这个包太贵了。", type: "word" },
  { id: "w223", word: "cheap", phonetic: "/tʃiːp/", meaning: "便宜的", partOfSpeech: "adj.", difficulty: 1, example: "The shoes are very cheap.", exampleCn: "这双鞋很便宜。", type: "word" },
  { id: "w224", word: "comfortable", phonetic: "/ˈkʌmftəbl/", meaning: "舒适的", partOfSpeech: "adj.", difficulty: 1, example: "This chair is very comfortable.", exampleCn: "这把椅子很舒服。", type: "word" },
  { id: "w225", word: "hungry", phonetic: "/ˈhʌŋɡri/", meaning: "饥饿的", partOfSpeech: "adj.", difficulty: 1, example: "I'm hungry. Let's eat.", exampleCn: "我饿了。我们吃饭吧。", type: "word" },
  { id: "w226", word: "thirsty", phonetic: "/ˈθɜːrsti/", meaning: "口渴的", partOfSpeech: "adj.", difficulty: 1, example: "I'm thirsty. I want some water.", exampleCn: "我渴了。想喝水。", type: "word" },
  { id: "w227", word: "tired", phonetic: "/ˈtaɪərd/", meaning: "疲倦的", partOfSpeech: "adj.", difficulty: 1, example: "I'm tired after running.", exampleCn: "跑步后我很累。", type: "word" },
  { id: "w228", word: "busy", phonetic: "/ˈbɪzi/", meaning: "忙碌的", partOfSpeech: "adj.", difficulty: 1, example: "I'm busy with homework.", exampleCn: "我忙着做作业。", type: "word" },
  { id: "w229", word: "free", phonetic: "/friː/", meaning: "空闲的；免费的", partOfSpeech: "adj.", difficulty: 1, example: "Are you free this afternoon?", exampleCn: "你今天下午有空吗？", type: "word" },
  { id: "w230", word: "ready", phonetic: "/ˈredi/", meaning: "准备好的", partOfSpeech: "adj.", difficulty: 1, example: "Are you ready to go?", exampleCn: "你准备好出发了吗？", type: "word" },

  // Level 2: 进阶日常
  { id: "w231", word: "appointment", phonetic: "/əˈpɔɪntmənt/", meaning: "预约；约定", partOfSpeech: "n.", difficulty: 2, example: "I have a doctor's appointment.", exampleCn: "我有一个医生预约。", type: "word" },
  { id: "w232", word: "reservation", phonetic: "/ˌrezərˈveɪʃn/", meaning: "预订", partOfSpeech: "n.", difficulty: 2, example: "I made a reservation for tonight.", exampleCn: "我预订了今晚的位子。", type: "word" },
  { id: "w233", word: "direction", phonetic: "/dəˈrekʃn/", meaning: "方向；指导", partOfSpeech: "n.", difficulty: 2, example: "Which direction should we go?", exampleCn: "我们应该往哪个方向走？", type: "word" },
  { id: "w234", word: "passenger", phonetic: "/ˈpæsɪndʒər/", meaning: "乘客", partOfSpeech: "n.", difficulty: 2, example: "The bus is full of passengers.", exampleCn: "公交车上坐满了乘客。", type: "word" },
  { id: "w235", word: "temperature", phonetic: "/ˈtemprətʃər/", meaning: "温度；体温", partOfSpeech: "n.", difficulty: 2, example: "The temperature is 30 degrees today.", exampleCn: "今天温度30度。", type: "word" },
  { id: "w236", word: "season", phonetic: "/ˈsiːzn/", meaning: "季节", partOfSpeech: "n.", difficulty: 2, example: "Spring is my favorite season.", exampleCn: "春天是我最喜欢的季节。", type: "word" },
  { id: "w237", word: "weekend", phonetic: "/ˈwiːkend/", meaning: "周末", partOfSpeech: "n.", difficulty: 2, example: "What do you do on weekends?", exampleCn: "你周末做什么？", type: "word" },
  { id: "w238", word: "holiday", phonetic: "/ˈhɒlədeɪ/", meaning: "假日；节日", partOfSpeech: "n.", difficulty: 2, example: "We went to the beach on holiday.", exampleCn: "我们假期去了海边。", type: "word" },
  { id: "w239", word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", meaning: "生日", partOfSpeech: "n.", difficulty: 2, example: "Happy birthday to you!", exampleCn: "祝你生日快乐！", type: "word" },
  { id: "w240", word: "invitation", phonetic: "/ˌɪnvɪˈteɪʃn/", meaning: "邀请", partOfSpeech: "n.", difficulty: 2, example: "Thank you for the invitation.", exampleCn: "谢谢你的邀请。", type: "word" },
  { id: "w241", word: "conversation", phonetic: "/ˌkɒnvərˈseɪʃn/", meaning: "对话；交谈", partOfSpeech: "n.", difficulty: 2, example: "We had a long conversation.", exampleCn: "我们进行了长时间的交谈。", type: "word" },
  { id: "w242", word: "introduce", phonetic: "/ˌɪntrəˈdjuːs/", meaning: "介绍", partOfSpeech: "v.", difficulty: 2, example: "Let me introduce myself.", exampleCn: "让我自我介绍一下。", type: "word" },
  { id: "w243", word: "describe", phonetic: "/dɪˈskraɪb/", meaning: "描述", partOfSpeech: "v.", difficulty: 2, example: "Can you describe what happened?", exampleCn: "你能描述一下发生了什么吗？", type: "word" },
  { id: "w244", word: "explain", phonetic: "/ɪkˈspleɪn/", meaning: "解释", partOfSpeech: "v.", difficulty: 2, example: "Please explain it to me.", exampleCn: "请给我解释一下。", type: "word" },
  { id: "w245", word: "suggest", phonetic: "/səˈdʒest/", meaning: "建议", partOfSpeech: "v.", difficulty: 2, example: "I suggest we leave now.", exampleCn: "我建议我们现在就走。", type: "word" },
  { id: "w246", word: "recommend", phonetic: "/ˌrekəˈmend/", meaning: "推荐", partOfSpeech: "v.", difficulty: 2, example: "I recommend this book to you.", exampleCn: "我把这本书推荐给你。", type: "word" },
  { id: "w247", word: "complain", phonetic: "/kəmˈpleɪn/", meaning: "抱怨", partOfSpeech: "v.", difficulty: 2, example: "Don't complain about the food.", exampleCn: "不要抱怨食物。", type: "word" },
  { id: "w248", word: "apologize", phonetic: "/əˈpɒlədʒaɪz/", meaning: "道歉", partOfSpeech: "v.", difficulty: 2, example: "I apologize for being late.", exampleCn: "我为迟到道歉。", type: "word" },
  { id: "w249", word: "convenient", phonetic: "/kənˈviːniənt/", meaning: "方便的", partOfSpeech: "adj.", difficulty: 2, example: "Is this time convenient for you?", exampleCn: "这个时间对你方便吗？", type: "word" },
  { id: "w250", word: "necessary", phonetic: "/ˈnesəseri/", meaning: "必要的", partOfSpeech: "adj.", difficulty: 2, example: "It's necessary to study hard.", exampleCn: "努力学习是必要的。", type: "word" },
  { id: "w251", word: "possible", phonetic: "/ˈpɒsəbl/", meaning: "可能的", partOfSpeech: "adj.", difficulty: 2, example: "Is it possible to finish today?", exampleCn: "今天能完成吗？", type: "word" },
  { id: "w252", word: "impossible", phonetic: "/ɪmˈpɒsəbl/", meaning: "不可能的", partOfSpeech: "adj.", difficulty: 2, example: "Nothing is impossible.", exampleCn: "没有什么是不可能的。", type: "word" },
  { id: "w253", word: "available", phonetic: "/əˈveɪləbl/", meaning: "可用的；有空的", partOfSpeech: "adj.", difficulty: 2, example: "Are you available tomorrow?", exampleCn: "你明天有空吗？", type: "word" },
  { id: "w254", word: "popular", phonetic: "/ˈpɒpjələr/", meaning: "流行的；受欢迎的", partOfSpeech: "adj.", difficulty: 2, example: "This song is very popular.", exampleCn: "这首歌很流行。", type: "word" },
  { id: "w255", word: "polite", phonetic: "/pəˈlaɪt/", meaning: "有礼貌的", partOfSpeech: "adj.", difficulty: 2, example: "She is always polite to everyone.", exampleCn: "她对每个人都很有礼貌。", type: "word" },

  // Level 3: 实用表达
  { id: "w256", word: "experience", phonetic: "/ɪkˈspɪəriəns/", meaning: "经历；经验", partOfSpeech: "n.", difficulty: 3, example: "It was an unforgettable experience.", exampleCn: "那是一次难忘的经历。", type: "word" },
  { id: "w257", word: "opportunity", phonetic: "/ˌɒpərˈtjuːnəti/", meaning: "机会", partOfSpeech: "n.", difficulty: 3, example: "Don't miss this opportunity.", exampleCn: "不要错过这个机会。", type: "word" },
  { id: "w258", word: "responsibility", phonetic: "/rɪˌspɒnsəˈbɪləti/", meaning: "责任", partOfSpeech: "n.", difficulty: 3, example: "It's your responsibility.", exampleCn: "这是你的责任。", type: "word" },
  { id: "w259", word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", meaning: "环境", partOfSpeech: "n.", difficulty: 3, example: "We should protect the environment.", exampleCn: "我们应该保护环境。", type: "word" },
  { id: "w260", word: "situation", phonetic: "/ˌsɪtʃuˈeɪʃn/", meaning: "情况；形势", partOfSpeech: "n.", difficulty: 3, example: "The situation is getting better.", exampleCn: "情况正在好转。", type: "word" },
  { id: "w261", word: "relationship", phonetic: "/rɪˈleɪʃnʃɪp/", meaning: "关系", partOfSpeech: "n.", difficulty: 3, example: "They have a good relationship.", exampleCn: "他们关系很好。", type: "word" },
  { id: "w262", word: "communication", phonetic: "/kəˌmjuːnɪˈkeɪʃn/", meaning: "交流；沟通", partOfSpeech: "n.", difficulty: 3, example: "Good communication is important.", exampleCn: "良好的沟通很重要。", type: "word" },
  { id: "w263", word: "information", phonetic: "/ˌɪnfərˈmeɪʃn/", meaning: "信息；资料", partOfSpeech: "n.", difficulty: 3, example: "I need more information.", exampleCn: "我需要更多信息。", type: "word" },
  { id: "w264", word: "competition", phonetic: "/ˌkɒmpəˈtɪʃn/", meaning: "比赛；竞争", partOfSpeech: "n.", difficulty: 3, example: "She won the singing competition.", exampleCn: "她赢得了歌唱比赛。", type: "word" },
  { id: "w265", word: "achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "成就", partOfSpeech: "n.", difficulty: 3, example: "This is a great achievement.", exampleCn: "这是一个伟大的成就。", type: "word" },
  { id: "w266", word: "encourage", phonetic: "/ɪnˈkʌrɪdʒ/", meaning: "鼓励", partOfSpeech: "v.", difficulty: 3, example: "My parents encourage me to study.", exampleCn: "我父母鼓励我学习。", type: "word" },
  { id: "w267", word: "imagine", phonetic: "/ɪˈmædʒɪn/", meaning: "想象", partOfSpeech: "v.", difficulty: 3, example: "Imagine you are on a beach.", exampleCn: "想象你在海滩上。", type: "word" },
  { id: "w268", word: "realize", phonetic: "/ˈriːəlaɪz/", meaning: "意识到；实现", partOfSpeech: "v.", difficulty: 3, example: "I realized my mistake.", exampleCn: "我意识到了自己的错误。", type: "word" },
  { id: "w269", word: "organize", phonetic: "/ˈɔːrɡənaɪz/", meaning: "组织", partOfSpeech: "v.", difficulty: 3, example: "We organized a party for her.", exampleCn: "我们为她组织了一个派对。", type: "word" },
  { id: "w270", word: "prepare", phonetic: "/prɪˈpeər/", meaning: "准备", partOfSpeech: "v.", difficulty: 3, example: "I need to prepare for the exam.", exampleCn: "我需要准备考试。", type: "word" },
  { id: "w271", word: "manage", phonetic: "/ˈmænɪdʒ/", meaning: "管理；设法做到", partOfSpeech: "v.", difficulty: 3, example: "She manages the company well.", exampleCn: "她把公司管理得很好。", type: "word" },
  { id: "w272", word: "succeed", phonetic: "/səkˈsiːd/", meaning: "成功", partOfSpeech: "v.", difficulty: 3, example: "If you try hard, you will succeed.", exampleCn: "如果你努力，就会成功。", type: "word" },
  { id: "w273", word: "influence", phonetic: "/ˈɪnfluəns/", meaning: "影响", partOfSpeech: "n./v.", difficulty: 3, example: "Parents have a great influence on children.", exampleCn: "父母对孩子有很大影响。", type: "word" },
  { id: "w274", word: "independent", phonetic: "/ˌɪndɪˈpendənt/", meaning: "独立的", partOfSpeech: "adj.", difficulty: 3, example: "She is very independent.", exampleCn: "她非常独立。", type: "word" },
  { id: "w275", word: "confident", phonetic: "/ˈkɒnfɪdənt/", meaning: "自信的", partOfSpeech: "adj.", difficulty: 3, example: "Be confident in yourself.", exampleCn: "要对自己有信心。", type: "word" },
  { id: "w276", word: "patient", phonetic: "/ˈpeɪʃnt/", meaning: "耐心的；病人", partOfSpeech: "adj./n.", difficulty: 3, example: "Please be patient.", exampleCn: "请耐心一点。", type: "word" },
  { id: "w277", word: "honest", phonetic: "/ˈɒnɪst/", meaning: "诚实的", partOfSpeech: "adj.", difficulty: 3, example: "He is an honest person.", exampleCn: "他是一个诚实的人。", type: "word" },
  { id: "w278", word: "generous", phonetic: "/ˈdʒenərəs/", meaning: "慷慨的；大方的", partOfSpeech: "adj.", difficulty: 3, example: "She is generous with her time.", exampleCn: "她很大方地付出时间。", type: "word" },
  { id: "w279", word: "responsible", phonetic: "/rɪˈspɒnsəbl/", meaning: "负责的", partOfSpeech: "adj.", difficulty: 3, example: "Who is responsible for this?", exampleCn: "谁负责这个？", type: "word" },
  { id: "w280", word: "excellent", phonetic: "/ˈeksələnt/", meaning: "优秀的；极好的", partOfSpeech: "adj.", difficulty: 3, example: "You did an excellent job!", exampleCn: "你做得非常好！", type: "word" },

  // Level 4: 高级日常
  { id: "w281", word: "volunteer", phonetic: "/ˌvɒlənˈtɪər/", meaning: "志愿者；自愿", partOfSpeech: "n./v.", difficulty: 4, example: "She works as a volunteer.", exampleCn: "她做志愿者工作。", type: "word" },
  { id: "w282", word: "community", phonetic: "/kəˈmjuːnəti/", meaning: "社区", partOfSpeech: "n.", difficulty: 4, example: "Our community is very friendly.", exampleCn: "我们的社区很友好。", type: "word" },
  { id: "w283", word: "tradition", phonetic: "/trəˈdɪʃn/", meaning: "传统", partOfSpeech: "n.", difficulty: 4, example: "It's a family tradition.", exampleCn: "这是家庭传统。", type: "word" },
  { id: "w284", word: "culture", phonetic: "/ˈkʌltʃər/", meaning: "文化", partOfSpeech: "n.", difficulty: 4, example: "Chinese culture is very rich.", exampleCn: "中国文化非常丰富。", type: "word" },
  { id: "w285", word: "technology", phonetic: "/tekˈnɒlədʒi/", meaning: "技术；科技", partOfSpeech: "n.", difficulty: 4, example: "Technology changes our life.", exampleCn: "科技改变了我们的生活。", type: "word" },
  { id: "w286", word: "education", phonetic: "/ˌedʒuˈkeɪʃn/", meaning: "教育", partOfSpeech: "n.", difficulty: 4, example: "Education is very important.", exampleCn: "教育非常重要。", type: "word" },
  { id: "w287", word: "government", phonetic: "/ˈɡʌvərnmənt/", meaning: "政府", partOfSpeech: "n.", difficulty: 4, example: "The government made a new policy.", exampleCn: "政府制定了新政策。", type: "word" },
  { id: "w288", word: "economy", phonetic: "/ɪˈkɒnəmi/", meaning: "经济", partOfSpeech: "n.", difficulty: 4, example: "The economy is growing fast.", exampleCn: "经济正在快速增长。", type: "word" },
  { id: "w289", word: "society", phonetic: "/səˈsaɪəti/", meaning: "社会", partOfSpeech: "n.", difficulty: 4, example: "We live in a modern society.", exampleCn: "我们生活在现代社会。", type: "word" },
  { id: "w290", word: "development", phonetic: "/dɪˈveləpmənt/", meaning: "发展", partOfSpeech: "n.", difficulty: 4, example: "The city is under development.", exampleCn: "这座城市正在发展中。", type: "word" },
  { id: "w291", word: "appreciate", phonetic: "/əˈpriːʃieɪt/", meaning: "感激；欣赏", partOfSpeech: "v.", difficulty: 4, example: "I appreciate your help.", exampleCn: "我感谢你的帮助。", type: "word" },
  { id: "w292", word: "consider", phonetic: "/kənˈsɪdər/", meaning: "考虑", partOfSpeech: "v.", difficulty: 4, example: "Please consider my suggestion.", exampleCn: "请考虑我的建议。", type: "word" },
  { id: "w293", word: "recognize", phonetic: "/ˈrekəɡnaɪz/", meaning: "认出；认可", partOfSpeech: "v.", difficulty: 4, example: "I didn't recognize you at first.", exampleCn: "我一开始没认出你。", type: "word" },
  { id: "w294", word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", meaning: "交流；沟通", partOfSpeech: "v.", difficulty: 4, example: "We communicate by email.", exampleCn: "我们通过电子邮件交流。", type: "word" },
  { id: "w295", word: "participate", phonetic: "/pɑːˈtɪsɪpeɪt/", meaning: "参加；参与", partOfSpeech: "v.", difficulty: 4, example: "Everyone should participate in the activity.", exampleCn: "每个人都应该参加活动。", type: "word" },
  { id: "w296", word: "contribute", phonetic: "/kənˈtrɪbjuːt/", meaning: "贡献；捐献", partOfSpeech: "v.", difficulty: 4, example: "He contributed a lot to the project.", exampleCn: "他为这个项目贡献了很多。", type: "word" },
  { id: "w297", word: "attractive", phonetic: "/əˈtræktɪv/", meaning: "有吸引力的", partOfSpeech: "adj.", difficulty: 4, example: "The city is attractive to tourists.", exampleCn: "这座城市对游客有吸引力。", type: "word" },
  { id: "w298", word: "creative", phonetic: "/kriˈeɪtɪv/", meaning: "有创造力的", partOfSpeech: "adj.", difficulty: 4, example: "She has a creative mind.", exampleCn: "她很有创意。", type: "word" },
  { id: "w299", word: "curious", phonetic: "/ˈkjʊəriəs/", meaning: "好奇的", partOfSpeech: "adj.", difficulty: 4, example: "Children are curious about everything.", exampleCn: "孩子们对一切都很好奇。", type: "word" },
  { id: "w300", word: "enthusiastic", phonetic: "/ɪnˌθjuːziˈæstɪk/", meaning: "热情的", partOfSpeech: "adj.", difficulty: 4, example: "She is enthusiastic about learning.", exampleCn: "她对学习充满热情。", type: "word" },

  // ===== 更多日常实用词汇 =====
  // Level 1: 生活场景
  { id: "w301", word: "morning", phonetic: "/ˈmɔːrnɪŋ/", meaning: "早晨；上午", partOfSpeech: "n.", difficulty: 1, example: "Good morning, class!", exampleCn: "同学们早上好！", type: "word" },
  { id: "w302", word: "afternoon", phonetic: "/ˌæftərˈnuːn/", meaning: "下午", partOfSpeech: "n.", difficulty: 1, example: "See you this afternoon.", exampleCn: "下午见。", type: "word" },
  { id: "w303", word: "evening", phonetic: "/ˈiːvnɪŋ/", meaning: "傍晚；晚上", partOfSpeech: "n.", difficulty: 1, example: "Good evening, everyone.", exampleCn: "大家晚上好。", type: "word" },
  { id: "w304", word: "today", phonetic: "/təˈdeɪ/", meaning: "今天", partOfSpeech: "n./adv.", difficulty: 1, example: "Today is Monday.", exampleCn: "今天是星期一。", type: "word" },
  { id: "w305", word: "tomorrow", phonetic: "/təˈmɒrəʊ/", meaning: "明天", partOfSpeech: "n./adv.", difficulty: 1, example: "See you tomorrow.", exampleCn: "明天见。", type: "word" },
  { id: "w306", word: "yesterday", phonetic: "/ˈjestərdeɪ/", meaning: "昨天", partOfSpeech: "n./adv.", difficulty: 1, example: "I was busy yesterday.", exampleCn: "我昨天很忙。", type: "word" },
  { id: "w307", word: "week", phonetic: "/wiːk/", meaning: "周；星期", partOfSpeech: "n.", difficulty: 1, example: "There are seven days in a week.", exampleCn: "一周有七天。", type: "word" },
  { id: "w308", word: "month", phonetic: "/mʌnθ/", meaning: "月；月份", partOfSpeech: "n.", difficulty: 1, example: "I'll be back in a month.", exampleCn: "我一个月后回来。", type: "word" },
  { id: "w309", word: "year", phonetic: "/jɪər/", meaning: "年", partOfSpeech: "n.", difficulty: 1, example: "Happy New Year!", exampleCn: "新年快乐！", type: "word" },
  { id: "w310", word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", meaning: "生日", partOfSpeech: "n.", difficulty: 1, example: "Happy birthday to you!", exampleCn: "祝你生日快乐！", type: "word" },
  { id: "w311", word: "holiday", phonetic: "/ˈhɒlədeɪ/", meaning: "假日；节日", partOfSpeech: "n.", difficulty: 1, example: "We're going on holiday next week.", exampleCn: "我们下周去度假。", type: "word" },
  { id: "w312", word: "weekend", phonetic: "/ˈwiːkend/", meaning: "周末", partOfSpeech: "n.", difficulty: 1, example: "What do you do on weekends?", exampleCn: "你周末做什么？", type: "word" },
  { id: "w313", word: "money", phonetic: "/ˈmʌni/", meaning: "钱", partOfSpeech: "n.", difficulty: 1, example: "I don't have enough money.", exampleCn: "我没有足够的钱。", type: "word" },
  { id: "w314", word: "price", phonetic: "/praɪs/", meaning: "价格", partOfSpeech: "n.", difficulty: 1, example: "What's the price of this book?", exampleCn: "这本书多少钱？", type: "word" },
  { id: "w315", word: "size", phonetic: "/saɪz/", meaning: "尺寸；大小", partOfSpeech: "n.", difficulty: 1, example: "What size do you wear?", exampleCn: "你穿多大号的？", type: "word" },
  { id: "w316", word: "color", phonetic: "/ˈkʌlər/", meaning: "颜色", partOfSpeech: "n.", difficulty: 1, example: "What's your favorite color?", exampleCn: "你最喜欢什么颜色？", type: "word" },
  { id: "w317", word: "shape", phonetic: "/ʃeɪp/", meaning: "形状", partOfSpeech: "n.", difficulty: 1, example: "The table is round in shape.", exampleCn: "桌子是圆形的。", type: "word" },
  { id: "w318", word: "taste", phonetic: "/teɪst/", meaning: "味道；品尝", partOfSpeech: "n./v.", difficulty: 1, example: "The soup tastes delicious.", exampleCn: "这汤味道很好。", type: "word" },
  { id: "w319", word: "smell", phonetic: "/smel/", meaning: "气味；闻", partOfSpeech: "n./v.", difficulty: 1, example: "The flowers smell nice.", exampleCn: "这些花闻起来很香。", type: "word" },
  { id: "w320", word: "sound", phonetic: "/saʊnd/", meaning: "声音；听起来", partOfSpeech: "n./v.", difficulty: 1, example: "That sounds like a good idea.", exampleCn: "那听起来是个好主意。", type: "word" },
  { id: "w321", word: "feel", phonetic: "/fiːl/", meaning: "感觉；触摸", partOfSpeech: "v.", difficulty: 1, example: "I feel happy today.", exampleCn: "我今天感觉很开心。", type: "word" },
  { id: "w322", word: "touch", phonetic: "/tʌtʃ/", meaning: "触摸；接触", partOfSpeech: "v./n.", difficulty: 1, example: "Don't touch the hot pot.", exampleCn: "别碰那个热锅。", type: "word" },
  { id: "w323", word: "carry", phonetic: "/ˈkæri/", meaning: "搬运；携带", partOfSpeech: "v.", difficulty: 1, example: "Can you carry this bag for me?", exampleCn: "你能帮我拿这个包吗？", type: "word" },
  { id: "w324", word: "bring", phonetic: "/brɪŋ/", meaning: "带来", partOfSpeech: "v.", difficulty: 1, example: "Please bring your book tomorrow.", exampleCn: "请明天带上你的书。", type: "word" },
  { id: "w325", word: "take", phonetic: "/teɪk/", meaning: "拿走；带", partOfSpeech: "v.", difficulty: 1, example: "Take this medicine three times a day.", exampleCn: "这药一天吃三次。", type: "word" },
  { id: "w326", word: "give", phonetic: "/ɡɪv/", meaning: "给；赠送", partOfSpeech: "v.", difficulty: 1, example: "Give me a chance, please.", exampleCn: "请给我一个机会。", type: "word" },
  { id: "w327", word: "receive", phonetic: "/rɪˈsiːv/", meaning: "收到；接收", partOfSpeech: "v.", difficulty: 2, example: "I received your email.", exampleCn: "我收到了你的邮件。", type: "word" },
  { id: "w328", word: "send", phonetic: "/send/", meaning: "发送；寄", partOfSpeech: "v.", difficulty: 1, example: "I'll send you a message.", exampleCn: "我给你发消息。", type: "word" },
  { id: "w329", word: "return", phonetic: "/rɪˈtɜːrn/", meaning: "返回；归还", partOfSpeech: "v.", difficulty: 2, example: "When will you return?", exampleCn: "你什么时候回来？", type: "word" },
  { id: "w330", word: "borrow", phonetic: "/ˈbɒrəʊ/", meaning: "借入", partOfSpeech: "v.", difficulty: 1, example: "Can I borrow your pen?", exampleCn: "我能借你的笔吗？", type: "word" },
  { id: "w331", word: "lend", phonetic: "/lend/", meaning: "借出", partOfSpeech: "v.", difficulty: 1, example: "Can you lend me some money?", exampleCn: "你能借我一些钱吗？", type: "word" },
  { id: "w332", word: "buy", phonetic: "/baɪ/", meaning: "买", partOfSpeech: "v.", difficulty: 1, example: "I want to buy a gift.", exampleCn: "我想买个礼物。", type: "word" },
  { id: "w333", word: "sell", phonetic: "/sel/", meaning: "卖；销售", partOfSpeech: "v.", difficulty: 1, example: "They sell fresh fruit here.", exampleCn: "他们在这里卖新鲜水果。", type: "word" },
  { id: "w334", word: "pay", phonetic: "/peɪ/", meaning: "支付", partOfSpeech: "v.", difficulty: 1, example: "How would you like to pay?", exampleCn: "你想怎么付款？", type: "word" },
  { id: "w335", word: "cost", phonetic: "/kɒst/", meaning: "花费；代价", partOfSpeech: "v./n.", difficulty: 1, example: "How much does it cost?", exampleCn: "这个多少钱？", type: "word" },
  { id: "w336", word: "spend", phonetic: "/spend/", meaning: "花费；度过", partOfSpeech: "v.", difficulty: 1, example: "I spend two hours on homework.", exampleCn: "我花两小时做作业。", type: "word" },
  { id: "w337", word: "save", phonetic: "/seɪv/", meaning: "节省；保存", partOfSpeech: "v.", difficulty: 1, example: "Save some money for the future.", exampleCn: "存点钱以备将来。", type: "word" },
  { id: "w338", word: "count", phonetic: "/kaʊnt/", meaning: "计算；重要", partOfSpeech: "v.", difficulty: 1, example: "Can you count to ten?", exampleCn: "你能数到十吗？", type: "word" },
  { id: "w339", word: "measure", phonetic: "/ˈmeʒər/", meaning: "测量；措施", partOfSpeech: "v./n.", difficulty: 2, example: "Measure the length of the table.", exampleCn: "量一下桌子的长度。", type: "word" },
  { id: "w340", word: "weigh", phonetic: "/weɪ/", meaning: "称重；有重量", partOfSpeech: "v.", difficulty: 2, example: "How much do you weigh?", exampleCn: "你体重多少？", type: "word" },

  // Level 2: 情感与社交
  { id: "w341", word: "happy", phonetic: "/ˈhæpi/", meaning: "快乐的", partOfSpeech: "adj.", difficulty: 1, example: "I'm happy to see you.", exampleCn: "见到你我很高兴。", type: "word" },
  { id: "w342", word: "sad", phonetic: "/sæd/", meaning: "悲伤的", partOfSpeech: "adj.", difficulty: 1, example: "Why are you so sad?", exampleCn: "你为什么这么难过？", type: "word" },
  { id: "w343", word: "angry", phonetic: "/ˈæŋɡri/", meaning: "生气的", partOfSpeech: "adj.", difficulty: 1, example: "Don't be angry with me.", exampleCn: "别生我的气。", type: "word" },
  { id: "w344", word: "afraid", phonetic: "/əˈfreɪd/", meaning: "害怕的", partOfSpeech: "adj.", difficulty: 1, example: "Are you afraid of dogs?", exampleCn: "你怕狗吗？", type: "word" },
  { id: "w345", word: "surprised", phonetic: "/sərˈpraɪzd/", meaning: "惊讶的", partOfSpeech: "adj.", difficulty: 1, example: "I was surprised to see him.", exampleCn: "见到他我很惊讶。", type: "word" },
  { id: "w346", word: "tired", phonetic: "/ˈtaɪərd/", meaning: "疲倦的", partOfSpeech: "adj.", difficulty: 1, example: "I'm tired after work.", exampleCn: "工作后我很累。", type: "word" },
  { id: "w347", word: "excited", phonetic: "/ɪkˈsaɪtɪd/", meaning: "兴奋的", partOfSpeech: "adj.", difficulty: 1, example: "The children are very excited.", exampleCn: "孩子们很兴奋。", type: "word" },
  { id: "w348", word: "bored", phonetic: "/bɔːrd/", meaning: "无聊的", partOfSpeech: "adj.", difficulty: 1, example: "I'm bored. Let's do something.", exampleCn: "我很无聊。我们做点什么吧。", type: "word" },
  { id: "w349", word: "worried", phonetic: "/ˈwɜːrid/", meaning: "担心的", partOfSpeech: "adj.", difficulty: 1, example: "Don't be worried about the exam.", exampleCn: "别担心考试。", type: "word" },
  { id: "w350", word: "lonely", phonetic: "/ˈləʊnli/", meaning: "孤独的", partOfSpeech: "adj.", difficulty: 2, example: "She feels lonely without friends.", exampleCn: "没有朋友她感到孤独。", type: "word" },
  { id: "w351", word: "proud", phonetic: "/praʊd/", meaning: "骄傲的；自豪的", partOfSpeech: "adj.", difficulty: 2, example: "I'm proud of you.", exampleCn: "我为你感到骄傲。", type: "word" },
  { id: "w352", word: "shy", phonetic: "/ʃaɪ/", meaning: "害羞的", partOfSpeech: "adj.", difficulty: 1, example: "The girl is very shy.", exampleCn: "这个女孩很害羞。", type: "word" },
  { id: "w353", word: "brave", phonetic: "/breɪv/", meaning: "勇敢的", partOfSpeech: "adj.", difficulty: 1, example: "Be brave and try again.", exampleCn: "勇敢点，再试一次。", type: "word" },
  { id: "w354", word: "kind", phonetic: "/kaɪnd/", meaning: "善良的；种类", partOfSpeech: "adj./n.", difficulty: 1, example: "She is very kind to everyone.", exampleCn: "她对每个人都很友善。", type: "word" },
  { id: "w355", word: "polite", phonetic: "/pəˈlaɪt/", meaning: "有礼貌的", partOfSpeech: "adj.", difficulty: 1, example: "He is always polite.", exampleCn: "他总是很有礼貌。", type: "word" },
  { id: "w356", word: "honest", phonetic: "/ˈɒnɪst/", meaning: "诚实的", partOfSpeech: "adj.", difficulty: 2, example: "Be honest with yourself.", exampleCn: "对自己诚实。", type: "word" },
  { id: "w357", word: "friendly", phonetic: "/ˈfrendli/", meaning: "友好的", partOfSpeech: "adj.", difficulty: 1, example: "The neighbors are very friendly.", exampleCn: "邻居们很友好。", type: "word" },
  { id: "w358", word: "lovely", phonetic: "/ˈlʌvli/", meaning: "可爱的；美好的", partOfSpeech: "adj.", difficulty: 1, example: "What a lovely day!", exampleCn: "多好的一天啊！", type: "word" },
  { id: "w359", word: "beautiful", phonetic: "/ˈbjuːtɪfl/", meaning: "美丽的", partOfSpeech: "adj.", difficulty: 1, example: "The sunset is beautiful.", exampleCn: "日落很美。", type: "word" },
  { id: "w360", word: "handsome", phonetic: "/ˈhænsəm/", meaning: "英俊的", partOfSpeech: "adj.", difficulty: 1, example: "He is a handsome young man.", exampleCn: "他是个英俊的年轻人。", type: "word" },
  { id: "w361", word: "cute", phonetic: "/kjuːt/", meaning: "可爱的", partOfSpeech: "adj.", difficulty: 1, example: "The baby is so cute.", exampleCn: "这个宝宝真可爱。", type: "word" },
  { id: "w362", word: "smart", phonetic: "/smɑːrt/", meaning: "聪明的", partOfSpeech: "adj.", difficulty: 1, example: "She is a smart student.", exampleCn: "她是个聪明的学生。", type: "word" },
  { id: "w363", word: "clever", phonetic: "/ˈklevər/", meaning: "聪明的；机灵的", partOfSpeech: "adj.", difficulty: 1, example: "That's a clever idea.", exampleCn: "那是个聪明的主意。", type: "word" },
  { id: "w364", word: "stupid", phonetic: "/ˈstjuːpɪd/", meaning: "愚蠢的", partOfSpeech: "adj.", difficulty: 1, example: "Don't be stupid.", exampleCn: "别犯傻了。", type: "word" },
  { id: "w365", word: "lazy", phonetic: "/ˈleɪzi/", meaning: "懒惰的", partOfSpeech: "adj.", difficulty: 1, example: "Don't be lazy. Get up!", exampleCn: "别懒了。起床！", type: "word" },
  { id: "w366", word: "busy", phonetic: "/ˈbɪzi/", meaning: "忙碌的", partOfSpeech: "adj.", difficulty: 1, example: "I'm busy right now.", exampleCn: "我现在很忙。", type: "word" },
  { id: "w367", word: "free", phonetic: "/friː/", meaning: "自由的；免费的；空闲的", partOfSpeech: "adj.", difficulty: 1, example: "Are you free tonight?", exampleCn: "你今晚有空吗？", type: "word" },
  { id: "w368", word: "ready", phonetic: "/ˈredi/", meaning: "准备好的", partOfSpeech: "adj.", difficulty: 1, example: "Are you ready to go?", exampleCn: "你准备好出发了吗？", type: "word" },
  { id: "w369", word: "sure", phonetic: "/ʃʊər/", meaning: "确定的；当然", partOfSpeech: "adj./adv.", difficulty: 1, example: "Are you sure about that?", exampleCn: "你确定吗？", type: "word" },
  { id: "w370", word: "maybe", phonetic: "/ˈmeɪbiː/", meaning: "也许；可能", partOfSpeech: "adv.", difficulty: 1, example: "Maybe you're right.", exampleCn: "也许你是对的。", type: "word" },
  { id: "w371", word: "perhaps", phonetic: "/pərˈhæps/", meaning: "也许", partOfSpeech: "adv.", difficulty: 2, example: "Perhaps we should go now.", exampleCn: "也许我们现在该走了。", type: "word" },
  { id: "w372", word: "really", phonetic: "/ˈriːəli/", meaning: "真正地；确实", partOfSpeech: "adv.", difficulty: 1, example: "I really like this song.", exampleCn: "我真的很喜欢这首歌。", type: "word" },
  { id: "w373", word: "actually", phonetic: "/ˈæktʃuəli/", meaning: "实际上", partOfSpeech: "adv.", difficulty: 2, example: "Actually, I don't agree.", exampleCn: "实际上，我不同意。", type: "word" },
  { id: "w374", word: "already", phonetic: "/ɔːlˈredi/", meaning: "已经", partOfSpeech: "adv.", difficulty: 1, example: "I've already finished.", exampleCn: "我已经完成了。", type: "word" },
  { id: "w375", word: "still", phonetic: "/stɪl/", meaning: "仍然；还", partOfSpeech: "adv.", difficulty: 1, example: "He's still sleeping.", exampleCn: "他还在睡觉。", type: "word" },
  { id: "w376", word: "again", phonetic: "/əˈɡen/", meaning: "再次", partOfSpeech: "adv.", difficulty: 1, example: "Say it again, please.", exampleCn: "请再说一遍。", type: "word" },
  { id: "w377", word: "almost", phonetic: "/ˈɔːlmoʊst/", meaning: "几乎；差不多", partOfSpeech: "adv.", difficulty: 1, example: "It's almost time to go.", exampleCn: "差不多该走了。", type: "word" },
  { id: "w378", word: "enough", phonetic: "/ɪˈnʌf/", meaning: "足够的", partOfSpeech: "adj./adv.", difficulty: 1, example: "Is the food enough?", exampleCn: "食物够吗？", type: "word" },
  { id: "w379", word: "together", phonetic: "/təˈɡeðər/", meaning: "一起", partOfSpeech: "adv.", difficulty: 1, example: "Let's work together.", exampleCn: "我们一起合作吧。", type: "word" },
  { id: "w380", word: "alone", phonetic: "/əˈləʊn/", meaning: "独自地", partOfSpeech: "adv./adj.", difficulty: 1, example: "She lives alone.", exampleCn: "她独自生活。", type: "word" },
  { id: "w381", word: "outside", phonetic: "/ˌaʊtˈsaɪd/", meaning: "外面", partOfSpeech: "n./adv.", difficulty: 1, example: "Wait outside the room.", exampleCn: "在房间外面等。", type: "word" },
  { id: "w382", word: "inside", phonetic: "/ˌɪnˈsaɪd/", meaning: "里面", partOfSpeech: "n./adv.", difficulty: 1, example: "Come inside. It's cold.", exampleCn: "进来吧。外面冷。", type: "word" },
  { id: "w383", word: "everywhere", phonetic: "/ˈevrihwer/", meaning: "到处", partOfSpeech: "adv.", difficulty: 1, example: "I looked for it everywhere.", exampleCn: "我到处找它。", type: "word" },
  { id: "w384", word: "nowhere", phonetic: "/ˈnəʊhwer/", meaning: "无处", partOfSpeech: "adv.", difficulty: 2, example: "There's nowhere to sit.", exampleCn: "没有地方坐。", type: "word" },
  { id: "w385", word: "somewhere", phonetic: "/ˈsʌmhwer/", meaning: "某处", partOfSpeech: "adv.", difficulty: 1, example: "Let's go somewhere quiet.", exampleCn: "我们去个安静的地方吧。", type: "word" },
  { id: "w386", word: "anywhere", phonetic: "/ˈenihwer/", meaning: "任何地方", partOfSpeech: "adv.", difficulty: 1, example: "You can sit anywhere.", exampleCn: "你可以坐任何地方。", type: "word" },
  { id: "w387", word: "forward", phonetic: "/ˈfɔːrwərd/", meaning: "向前", partOfSpeech: "adv.", difficulty: 1, example: "Move forward, please.", exampleCn: "请向前走。", type: "word" },
  { id: "w388", word: "backward", phonetic: "/ˈbækwərd/", meaning: "向后", partOfSpeech: "adv.", difficulty: 2, example: "Don't look backward.", exampleCn: "别回头看。", type: "word" },
  { id: "w389", word: "upstairs", phonetic: "/ˌʌpˈsteərz/", meaning: "楼上", partOfSpeech: "adv.", difficulty: 1, example: "Go upstairs and sleep.", exampleCn: "上楼睡觉吧。", type: "word" },
  { id: "w390", word: "downstairs", phonetic: "/ˌdaʊnˈsteərz/", meaning: "楼下", partOfSpeech: "adv.", difficulty: 1, example: "Wait for me downstairs.", exampleCn: "在楼下等我。", type: "word" },
  { id: "w391", word: "abroad", phonetic: "/əˈbrɔːd/", meaning: "在国外", partOfSpeech: "adv.", difficulty: 2, example: "He went abroad to study.", exampleCn: "他出国留学了。", type: "word" },
  { id: "w392", word: "recently", phonetic: "/ˈriːsntli/", meaning: "最近", partOfSpeech: "adv.", difficulty: 2, example: "I haven't seen him recently.", exampleCn: "我最近没见过他。", type: "word" },
  { id: "w393", word: "especially", phonetic: "/ɪˈspeʃəli/", meaning: "尤其；特别", partOfSpeech: "adv.", difficulty: 2, example: "I love fruits, especially apples.", exampleCn: "我喜欢水果，尤其是苹果。", type: "word" },
  { id: "w394", word: "probably", phonetic: "/ˈprɒbəbli/", meaning: "可能；大概", partOfSpeech: "adv.", difficulty: 2, example: "It will probably rain.", exampleCn: "大概会下雨。", type: "word" },
  { id: "w395", word: "certainly", phonetic: "/ˈsɜːrtnli/", meaning: "当然；肯定", partOfSpeech: "adv.", difficulty: 2, example: "I will certainly help you.", exampleCn: "我肯定会帮你。", type: "word" },
  { id: "w396", word: "instead", phonetic: "/ɪnˈsted/", meaning: "代替；反而", partOfSpeech: "adv.", difficulty: 2, example: "Let's stay home instead.", exampleCn: "我们还是待在家里吧。", type: "word" },
  { id: "w397", word: "however", phonetic: "/haʊˈevər/", meaning: "然而；不过", partOfSpeech: "adv.", difficulty: 2, example: "It's hard. However, I won't give up.", exampleCn: "很难。但我不会放弃。", type: "word" },
  { id: "w398", word: "therefore", phonetic: "/ˈðerfɔːr/", meaning: "因此", partOfSpeech: "adv.", difficulty: 3, example: "I was sick, therefore I stayed home.", exampleCn: "我生病了，因此待在家里。", type: "word" },
  { id: "w399", word: "besides", phonetic: "/bɪˈsaɪdz/", meaning: "此外；而且", partOfSpeech: "adv.", difficulty: 2, example: "Besides, it's too late now.", exampleCn: "而且，现在已经太晚了。", type: "word" },
  { id: "w400", word: "anyway", phonetic: "/ˈeniweɪ/", meaning: "无论如何", partOfSpeech: "adv.", difficulty: 2, example: "Anyway, let's go now.", exampleCn: "无论如何，我们现在走吧。", type: "word" },
];

// ===== 常见短语库 =====
export const PHRASES: Phrase[] = [
  // ===== Level 1: 基础短语 =====
  { id: "p001", phrase: "look at", meaning: "看；注视", difficulty: 1, example: "Please look at the blackboard.", exampleCn: "请看黑板。", type: "phrase" },
  { id: "p002", phrase: "listen to", meaning: "听", difficulty: 1, example: "I like to listen to music.", exampleCn: "我喜欢听音乐。", type: "phrase" },
  { id: "p003", phrase: "get up", meaning: "起床", difficulty: 1, example: "I get up at six every morning.", exampleCn: "我每天早上六点起床。", type: "phrase" },
  { id: "p004", phrase: "go to school", meaning: "去上学", difficulty: 1, example: "We go to school by bus.", exampleCn: "我们坐公共汽车上学。", type: "phrase" },
  { id: "p005", phrase: "come from", meaning: "来自", difficulty: 1, example: "She comes from Beijing.", exampleCn: "她来自北京。", type: "phrase" },
  { id: "p006", phrase: "how much", meaning: "多少钱", difficulty: 1, example: "How much is this T-shirt?", exampleCn: "这件T恤多少钱？", type: "phrase" },
  { id: "p007", phrase: "have a good time", meaning: "玩得开心", difficulty: 1, example: "Did you have a good time at the party?", exampleCn: "你在聚会上玩得开心吗？", type: "phrase" },
  { id: "p008", phrase: "on time", meaning: "准时", difficulty: 1, example: "Please come to school on time.", exampleCn: "请准时到校。", type: "phrase" },
  { id: "p009", phrase: "take a walk", meaning: "散步", difficulty: 1, example: "Let's take a walk after dinner.", exampleCn: "我们饭后去散步吧。", type: "phrase" },
  { id: "p010", phrase: "a lot of", meaning: "许多；大量", difficulty: 1, example: "There are a lot of books in the library.", exampleCn: "图书馆里有很多书。", type: "phrase" },
  { id: "p011", phrase: "next to", meaning: "在……旁边", difficulty: 1, example: "The bank is next to the school.", exampleCn: "银行在学校旁边。", type: "phrase" },
  { id: "p012", phrase: "in front of", meaning: "在……前面", difficulty: 1, example: "There is a tree in front of the house.", exampleCn: "房子前面有一棵树。", type: "phrase" },
  { id: "p013", phrase: "good luck", meaning: "祝好运", difficulty: 1, example: "Good luck with your exam!", exampleCn: "祝你考试好运！", type: "phrase" },
  { id: "p014", phrase: "be good at", meaning: "擅长", difficulty: 1, example: "She is good at swimming.", exampleCn: "她擅长游泳。", type: "phrase" },
  { id: "p015", phrase: "by bus", meaning: "乘公共汽车", difficulty: 1, example: "I go to work by bus.", exampleCn: "我乘公共汽车上班。", type: "phrase" },

  // ===== Level 2: 日常交际短语 =====
  { id: "p016", phrase: "take care of", meaning: "照顾；照料", difficulty: 2, example: "Please take care of your little sister.", exampleCn: "请照顾你的妹妹。", type: "phrase" },
  { id: "p017", phrase: "look forward to", meaning: "期待；盼望", difficulty: 2, example: "I look forward to seeing you again.", exampleCn: "我期待再次见到你。", type: "phrase" },
  { id: "p018", phrase: "give up", meaning: "放弃", difficulty: 2, example: "Never give up your dreams.", exampleCn: "永远不要放弃你的梦想。", type: "phrase" },
  { id: "p019", phrase: "find out", meaning: "发现；查明", difficulty: 2, example: "Let's find out the truth.", exampleCn: "让我们查明真相。", type: "phrase" },
  { id: "p020", phrase: "turn on", meaning: "打开（电器）", difficulty: 2, example: "Please turn on the light.", exampleCn: "请把灯打开。", type: "phrase" },
  { id: "p021", phrase: "turn off", meaning: "关闭（电器）", difficulty: 2, example: "Don't forget to turn off the TV.", exampleCn: "别忘了关电视。", type: "phrase" },
  { id: "p022", phrase: "pick up", meaning: "捡起；接（人）", difficulty: 2, example: "I'll pick you up at the airport.", exampleCn: "我会去机场接你。", type: "phrase" },
  { id: "p023", phrase: "put on", meaning: "穿上；戴上", difficulty: 2, example: "Put on your coat, it's cold outside.", exampleCn: "穿上外套，外面很冷。", type: "phrase" },
  { id: "p024", phrase: "take off", meaning: "脱下；起飞", difficulty: 2, example: "Take off your shoes before entering.", exampleCn: "进入前请脱鞋。", type: "phrase" },
  { id: "p025", phrase: "be interested in", meaning: "对……感兴趣", difficulty: 2, example: "She is interested in Chinese culture.", exampleCn: "她对中国文化感兴趣。", type: "phrase" },
  { id: "p026", phrase: "be proud of", meaning: "为……感到骄傲", difficulty: 2, example: "I am proud of my son.", exampleCn: "我为我的儿子感到骄傲。", type: "phrase" },
  { id: "p027", phrase: "as well", meaning: "也；同样", difficulty: 2, example: "I play basketball as well.", exampleCn: "我也打篮球。", type: "phrase" },
  { id: "p028", phrase: "at least", meaning: "至少", difficulty: 2, example: "You should drink at least eight glasses of water.", exampleCn: "你每天至少应该喝八杯水。", type: "phrase" },
  { id: "p029", phrase: "depend on", meaning: "依赖；取决于", difficulty: 2, example: "Success depends on hard work.", exampleCn: "成功取决于努力。", type: "phrase" },
  { id: "p030", phrase: "make friends", meaning: "交朋友", difficulty: 2, example: "It's easy to make friends here.", exampleCn: "在这里很容易交到朋友。", type: "phrase" },
  { id: "p031", phrase: "at the same time", meaning: "同时", difficulty: 2, example: "You can't do two things at the same time.", exampleCn: "你不能同时做两件事。", type: "phrase" },
  { id: "p032", phrase: "hang out", meaning: "闲逛；出去玩", difficulty: 2, example: "I often hang out with my friends on weekends.", exampleCn: "我周末经常和朋友出去玩。", type: "phrase" },
  { id: "p033", phrase: "be late for", meaning: "迟到", difficulty: 2, example: "Don't be late for school.", exampleCn: "上学不要迟到。", type: "phrase" },
  { id: "p034", phrase: "wake up", meaning: "醒来；叫醒", difficulty: 2, example: "I wake up early every day.", exampleCn: "我每天醒得很早。", type: "phrase" },
  { id: "p035", phrase: "grow up", meaning: "长大", difficulty: 2, example: "What do you want to be when you grow up?", exampleCn: "你长大后想做什么？", type: "phrase" },

  // ===== Level 3: 进阶短语 =====
  { id: "p036", phrase: "in order to", meaning: "为了", difficulty: 3, example: "She studies hard in order to pass the exam.", exampleCn: "她努力学习是为了通过考试。", type: "phrase" },
  { id: "p037", phrase: "on the other hand", meaning: "另一方面", difficulty: 3, example: "On the other hand, it might be too expensive.", exampleCn: "另一方面，这可能太贵了。", type: "phrase" },
  { id: "p038", phrase: "get along with", meaning: "与……相处", difficulty: 3, example: "She gets along with everyone.", exampleCn: "她和每个人都相处得很好。", type: "phrase" },
  { id: "p039", phrase: "come up with", meaning: "想出；提出", difficulty: 3, example: "He came up with a great idea.", exampleCn: "他想出了一个好主意。", type: "phrase" },
  { id: "p040", phrase: "deal with", meaning: "处理；应对", difficulty: 3, example: "How do you deal with stress?", exampleCn: "你如何应对压力？", type: "phrase" },
  { id: "p041", phrase: "make a difference", meaning: "有影响；起作用", difficulty: 3, example: "One person can make a difference.", exampleCn: "一个人也能产生影响。", type: "phrase" },
  { id: "p042", phrase: "run out of", meaning: "用完；耗尽", difficulty: 3, example: "We have run out of time.", exampleCn: "我们已经没有时间了。", type: "phrase" },
  { id: "p043", phrase: "be supposed to", meaning: "应该；被期望", difficulty: 3, example: "You are supposed to hand in your homework.", exampleCn: "你应该交作业。", type: "phrase" },
  { id: "p044", phrase: "in common", meaning: "共有的；共同的", difficulty: 3, example: "We have a lot in common.", exampleCn: "我们有很多共同点。", type: "phrase" },
  { id: "p045", phrase: "put off", meaning: "推迟；延期", difficulty: 3, example: "Don't put off until tomorrow what you can do today.", exampleCn: "今日事今日毕。", type: "phrase" },
  { id: "p046", phrase: "set up", meaning: "建立；创建", difficulty: 3, example: "They set up a new company last year.", exampleCn: "他们去年创建了一家公司。", type: "phrase" },
  { id: "p047", phrase: "break down", meaning: "出故障；崩溃", difficulty: 3, example: "My car broke down on the highway.", exampleCn: "我的车在高速公路上抛锚了。", type: "phrase" },
  { id: "p048", phrase: "carry out", meaning: "执行；实施", difficulty: 3, example: "We need to carry out the plan.", exampleCn: "我们需要执行这个计划。", type: "phrase" },
  { id: "p049", phrase: "work out", meaning: "算出；锻炼", difficulty: 3, example: "I work out at the gym three times a week.", exampleCn: "我每周去健身房锻炼三次。", type: "phrase" },
  { id: "p050", phrase: "take advantage of", meaning: "利用", difficulty: 3, example: "Take advantage of every opportunity.", exampleCn: "利用好每一个机会。", type: "phrase" },

  // ===== Level 4: 高级短语 =====
  { id: "p051", phrase: "regardless of", meaning: "不管；不顾", difficulty: 4, example: "He continued working regardless of the pain.", exampleCn: "他不顾疼痛继续工作。", type: "phrase" },
  { id: "p052", phrase: "in terms of", meaning: "在……方面", difficulty: 4, example: "In terms of quality, this product is the best.", exampleCn: "就质量而言，这个产品是最好的。", type: "phrase" },
  { id: "p053", phrase: "on behalf of", meaning: "代表", difficulty: 4, example: "I'm speaking on behalf of the team.", exampleCn: "我代表团队发言。", type: "phrase" },
  { id: "p054", phrase: "be aware of", meaning: "意识到", difficulty: 4, example: "Are you aware of the risks?", exampleCn: "你意识到风险了吗？", type: "phrase" },
  { id: "p055", phrase: "in addition to", meaning: "除……之外还", difficulty: 4, example: "In addition to English, she speaks French.", exampleCn: "除了英语，她还会说法语。", type: "phrase" },
  { id: "p056", phrase: "result in", meaning: "导致", difficulty: 4, example: "Lack of sleep can result in poor health.", exampleCn: "睡眠不足会导致健康不佳。", type: "phrase" },
  { id: "p057", phrase: "account for", meaning: "解释；占（比例）", difficulty: 4, example: "Exports account for 40% of our business.", exampleCn: "出口占我们业务的40%。", type: "phrase" },
  { id: "p058", phrase: "be committed to", meaning: "致力于；承诺", difficulty: 4, example: "She is committed to helping others.", exampleCn: "她致力于帮助他人。", type: "phrase" },
  { id: "p059", phrase: "keep up with", meaning: "跟上；赶上", difficulty: 4, example: "It's hard to keep up with technology changes.", exampleCn: "很难跟上科技的变化。", type: "phrase" },
  { id: "p060", phrase: "bring about", meaning: "引起；导致", difficulty: 4, example: "What brought about the change?", exampleCn: "是什么引起了这个变化？", type: "phrase" },
  { id: "p061", phrase: "consist of", meaning: "由……组成", difficulty: 4, example: "The team consists of five members.", exampleCn: "这个团队由五名成员组成。", type: "phrase" },
  { id: "p062", phrase: "point out", meaning: "指出", difficulty: 4, example: "He pointed out several mistakes.", exampleCn: "他指出了几个错误。", type: "phrase" },
  { id: "p063", phrase: "take for granted", meaning: "视为理所当然", difficulty: 4, example: "Don't take your health for granted.", exampleCn: "不要把健康视为理所当然。", type: "phrase" },
  { id: "p064", phrase: "live up to", meaning: "达到；不辜负", difficulty: 4, example: "He lived up to his parents' expectations.", exampleCn: "他没有辜负父母的期望。", type: "phrase" },
  { id: "p065", phrase: "make sense", meaning: "有意义；讲得通", difficulty: 4, example: "This explanation makes sense.", exampleCn: "这个解释讲得通。", type: "phrase" },

  // ===== Level 5: 高阶短语 =====
  { id: "p066", phrase: "in the long run", meaning: "从长远来看", difficulty: 5, example: "In the long run, education pays off.", exampleCn: "从长远来看，教育是值得的。", type: "phrase" },
  { id: "p067", phrase: "by means of", meaning: "借助于；通过", difficulty: 5, example: "We communicate by means of language.", exampleCn: "我们通过语言进行交流。", type: "phrase" },
  { id: "p068", phrase: "with regard to", meaning: "关于；至于", difficulty: 5, example: "With regard to your question, I have no answer.", exampleCn: "关于你的问题，我没有答案。", type: "phrase" },
  { id: "p069", phrase: "in accordance with", meaning: "根据；依照", difficulty: 5, example: "Act in accordance with the rules.", exampleCn: "按照规定行事。", type: "phrase" },
  { id: "p070", phrase: "be bound to", meaning: "一定会；必然会", difficulty: 5, example: "She is bound to succeed.", exampleCn: "她一定会成功。", type: "phrase" },
  { id: "p071", phrase: "on the contrary", meaning: "相反", difficulty: 5, example: "On the contrary, I think it's a good idea.", exampleCn: "恰恰相反，我认为这是个好主意。", type: "phrase" },
  { id: "p072", phrase: "at the expense of", meaning: "以……为代价", difficulty: 5, example: "He succeeded at the expense of his health.", exampleCn: "他以健康为代价取得了成功。", type: "phrase" },
  { id: "p073", phrase: "in light of", meaning: "鉴于；考虑到", difficulty: 5, example: "In light of the new evidence, we must reconsider.", exampleCn: "鉴于新证据，我们必须重新考虑。", type: "phrase" },
  { id: "p074", phrase: "as far as...concerned", meaning: "就……而言", difficulty: 5, example: "As far as I'm concerned, the plan is perfect.", exampleCn: "就我而言，这个计划很完美。", type: "phrase" },
  { id: "p075", phrase: "give rise to", meaning: "引起；导致", difficulty: 5, example: "Pollution gives rise to many health problems.", exampleCn: "污染引起了许多健康问题。", type: "phrase" },

  // ===== 日常实用短语补充 =====
  { id: "p076", phrase: "How are you doing?", meaning: "你好吗？最近怎么样？", difficulty: 1, example: "Hi, Tom! How are you doing?", exampleCn: "嗨，汤姆！你最近怎么样？", type: "phrase" },
  { id: "p077", phrase: "I'm fine, thanks.", meaning: "我很好，谢谢。", difficulty: 1, example: "I'm fine, thanks. And you?", exampleCn: "我很好，谢谢。你呢？", type: "phrase" },
  { id: "p078", phrase: "Nice to meet you.", meaning: "很高兴认识你。", difficulty: 1, example: "Nice to meet you, Mr. Smith.", exampleCn: "很高兴认识你，史密斯先生。", type: "phrase" },
  { id: "p079", phrase: "See you later.", meaning: "回头见。", difficulty: 1, example: "See you later, mom!", exampleCn: "回头见，妈妈！", type: "phrase" },
  { id: "p080", phrase: "What's your name?", meaning: "你叫什么名字？", difficulty: 1, example: "What's your name? I'm Lily.", exampleCn: "你叫什么名字？我叫莉莉。", type: "phrase" },
  { id: "p081", phrase: "How old are you?", meaning: "你多大了？", difficulty: 1, example: "How old are you? I'm thirteen.", exampleCn: "你多大了？我十三岁。", type: "phrase" },
  { id: "p082", phrase: "Where are you from?", meaning: "你从哪里来？", difficulty: 1, example: "Where are you from? I'm from China.", exampleCn: "你从哪里来？我来自中国。", type: "phrase" },
  { id: "p083", phrase: "I don't understand.", meaning: "我不明白。", difficulty: 1, example: "Sorry, I don't understand. Can you repeat?", exampleCn: "抱歉，我不明白。你能重复一遍吗？", type: "phrase" },
  { id: "p084", phrase: "Can you help me?", meaning: "你能帮我吗？", difficulty: 1, example: "Can you help me with this problem?", exampleCn: "你能帮我解决这个问题吗？", type: "phrase" },
  { id: "p085", phrase: "Thank you very much.", meaning: "非常感谢你。", difficulty: 1, example: "Thank you very much for your help.", exampleCn: "非常感谢你的帮助。", type: "phrase" },
  { id: "p086", phrase: "You're welcome.", meaning: "不客气。", difficulty: 1, example: "You're welcome. Happy to help!", exampleCn: "不客气。很高兴能帮到你！", type: "phrase" },
  { id: "p087", phrase: "Excuse me.", meaning: "打扰一下；请问。", difficulty: 1, example: "Excuse me, where is the library?", exampleCn: "打扰一下，图书馆在哪里？", type: "phrase" },
  { id: "p088", phrase: "I'm sorry.", meaning: "对不起。", difficulty: 1, example: "I'm sorry for being late.", exampleCn: "对不起，我迟到了。", type: "phrase" },
  { id: "p089", phrase: "No problem.", meaning: "没问题。", difficulty: 1, example: "No problem, I can do it.", exampleCn: "没问题，我能做到。", type: "phrase" },
  { id: "p090", phrase: "Let's go!", meaning: "我们走吧！", difficulty: 1, example: "Let's go to the park!", exampleCn: "我们去公园吧！", type: "phrase" },
  { id: "p091", phrase: "Have a good day!", meaning: "祝你有美好的一天！", difficulty: 1, example: "Have a good day, everyone!", exampleCn: "祝大家有美好的一天！", type: "phrase" },
  { id: "p092", phrase: "What time is it?", meaning: "现在几点了？", difficulty: 1, example: "What time is it? It's three o'clock.", exampleCn: "现在几点了？三点钟。", type: "phrase" },
  { id: "p093", phrase: "I'm hungry.", meaning: "我饿了。", difficulty: 1, example: "I'm hungry. Let's have lunch.", exampleCn: "我饿了。我们去吃午饭吧。", type: "phrase" },
  { id: "p094", phrase: "I'm thirsty.", meaning: "我渴了。", difficulty: 1, example: "I'm thirsty. Can I have some water?", exampleCn: "我渴了。能给我点水吗？", type: "phrase" },
  { id: "p095", phrase: "I'm tired.", meaning: "我累了。", difficulty: 1, example: "I'm tired. I want to go to bed.", exampleCn: "我累了。我想去睡觉。", type: "phrase" },

  // Level 2 日常短语
  { id: "p096", phrase: "What's the weather like?", meaning: "天气怎么样？", difficulty: 2, example: "What's the weather like today?", exampleCn: "今天天气怎么样？", type: "phrase" },
  { id: "p097", phrase: "It's sunny/rainy.", meaning: "晴天/下雨。", difficulty: 2, example: "It's sunny today. Let's go outside.", exampleCn: "今天晴天。我们出去吧。", type: "phrase" },
  { id: "p098", phrase: "I'd like to...", meaning: "我想要……", difficulty: 2, example: "I'd like to order a pizza.", exampleCn: "我想要点一个披萨。", type: "phrase" },
  { id: "p099", phrase: "Could you please...?", meaning: "你能……吗？（礼貌请求）", difficulty: 2, example: "Could you please open the window?", exampleCn: "你能打开窗户吗？", type: "phrase" },
  { id: "p100", phrase: "How much is it?", meaning: "这个多少钱？", difficulty: 2, example: "How much is this book?", exampleCn: "这本书多少钱？", type: "phrase" },
  { id: "p101", phrase: "I'll take it.", meaning: "我买了。", difficulty: 2, example: "This shirt looks good. I'll take it.", exampleCn: "这件衬衫好看。我买了。", type: "phrase" },
  { id: "p102", phrase: "Where is the...?", meaning: "……在哪里？", difficulty: 2, example: "Where is the nearest hospital?", exampleCn: "最近的医院在哪里？", type: "phrase" },
  { id: "p103", phrase: "Turn left/right.", meaning: "向左/右转。", difficulty: 2, example: "Turn left at the corner.", exampleCn: "在拐角处左转。", type: "phrase" },
  { id: "p104", phrase: "Go straight ahead.", meaning: "直走。", difficulty: 2, example: "Go straight ahead for two blocks.", exampleCn: "直走两个街区。", type: "phrase" },
  { id: "p105", phrase: "I'm looking for...", meaning: "我在找……", difficulty: 2, example: "I'm looking for my keys.", exampleCn: "我在找我的钥匙。", type: "phrase" },
  { id: "p106", phrase: "What do you mean?", meaning: "你什么意思？", difficulty: 2, example: "What do you mean by that?", exampleCn: "你那样说是什么意思？", type: "phrase" },
  { id: "p107", phrase: "I agree with you.", meaning: "我同意你的看法。", difficulty: 2, example: "I agree with you completely.", exampleCn: "我完全同意你的看法。", type: "phrase" },
  { id: "p108", phrase: "I don't think so.", meaning: "我不这么认为。", difficulty: 2, example: "I don't think so. Let me explain.", exampleCn: "我不这么认为。让我解释一下。", type: "phrase" },
  { id: "p109", phrase: "That's a good idea.", meaning: "那是个好主意。", difficulty: 2, example: "That's a good idea! Let's do it.", exampleCn: "那是个好主意！我们做吧。", type: "phrase" },
  { id: "p110", phrase: "I'm not sure.", meaning: "我不确定。", difficulty: 2, example: "I'm not sure about the answer.", exampleCn: "我不确定答案。", type: "phrase" },

  // Level 3 日常短语
  { id: "p111", phrase: "Could you tell me...?", meaning: "你能告诉我……吗？", difficulty: 3, example: "Could you tell me how to get there?", exampleCn: "你能告诉我怎么去那里吗？", type: "phrase" },
  { id: "p112", phrase: "I'm interested in...", meaning: "我对……感兴趣。", difficulty: 3, example: "I'm interested in learning music.", exampleCn: "我对学习音乐感兴趣。", type: "phrase" },
  { id: "p113", phrase: "What's your hobby?", meaning: "你的爱好是什么？", difficulty: 3, example: "What's your hobby? I like reading.", exampleCn: "你的爱好是什么？我喜欢阅读。", type: "phrase" },
  { id: "p114", phrase: "I prefer... to...", meaning: "比起……我更喜欢……", difficulty: 3, example: "I prefer tea to coffee.", exampleCn: "比起咖啡我更喜欢茶。", type: "phrase" },
  { id: "p115", phrase: "It depends on...", meaning: "这取决于……", difficulty: 3, example: "It depends on the weather.", exampleCn: "这取决于天气。", type: "phrase" },
  { id: "p116", phrase: "Let me think about it.", meaning: "让我想想。", difficulty: 3, example: "Let me think about it and tell you tomorrow.", exampleCn: "让我想想，明天告诉你。", type: "phrase" },
  { id: "p117", phrase: "That makes sense.", meaning: "那有道理。", difficulty: 3, example: "That makes sense. I understand now.", exampleCn: "那有道理。我现在明白了。", type: "phrase" },
  { id: "p118", phrase: "I'm looking forward to...", meaning: "我期待……", difficulty: 3, example: "I'm looking forward to the weekend.", exampleCn: "我期待周末。", type: "phrase" },
  { id: "p119", phrase: "Never mind.", meaning: "没关系；别在意。", difficulty: 3, example: "Never mind. I'll do it myself.", exampleCn: "没关系。我自己来做。", type: "phrase" },
  { id: "p120", phrase: "Take it easy.", meaning: "放轻松；别着急。", difficulty: 3, example: "Take it easy. Everything will be fine.", exampleCn: "放轻松。一切都会好起来的。", type: "phrase" },

  // ===== 更多日常实用短语 =====
  // 日常问候与寒暄
  { id: "p121", phrase: "How's it going?", meaning: "最近怎么样？", difficulty: 1, example: "Hey! How's it going?", exampleCn: "嘿！最近怎么样？", type: "phrase" },
  { id: "p122", phrase: "Long time no see.", meaning: "好久不见。", difficulty: 1, example: "Long time no see! How have you been?", exampleCn: "好久不见！你最近怎么样？", type: "phrase" },
  { id: "p123", phrase: "Nice to meet you.", meaning: "很高兴认识你。", difficulty: 1, example: "Nice to meet you. I'm Tom.", exampleCn: "很高兴认识你。我是汤姆。", type: "phrase" },
  { id: "p124", phrase: "See you later.", meaning: "回头见。", difficulty: 1, example: "I have to go. See you later!", exampleCn: "我得走了。回头见！", type: "phrase" },
  { id: "p125", phrase: "Have a nice day!", meaning: "祝你有美好的一天！", difficulty: 1, example: "Goodbye! Have a nice day!", exampleCn: "再见！祝你有美好的一天！", type: "phrase" },
  { id: "p126", phrase: "Take care.", meaning: "保重。", difficulty: 1, example: "Take care of yourself.", exampleCn: "好好保重自己。", type: "phrase" },
  { id: "p127", phrase: "What's up?", meaning: "怎么了？/ 在忙什么？", difficulty: 1, example: "Hey, what's up?", exampleCn: "嘿，怎么了？", type: "phrase" },
  { id: "p128", phrase: "Not bad.", meaning: "还不错。", difficulty: 1, example: "How are you? Not bad.", exampleCn: "你好吗？还不错。", type: "phrase" },
  { id: "p129", phrase: "Same here.", meaning: "我也是。", difficulty: 1, example: "I'm tired. Same here.", exampleCn: "我累了。我也是。", type: "phrase" },
  { id: "p130", phrase: "You're welcome.", meaning: "不客气。", difficulty: 1, example: "Thank you! You're welcome.", exampleCn: "谢谢！不客气。", type: "phrase" },

  // 请求与帮助
  { id: "p131", phrase: "Can you help me?", meaning: "你能帮我吗？", difficulty: 1, example: "Can you help me with this?", exampleCn: "你能帮我做这个吗？", type: "phrase" },
  { id: "p132", phrase: "Could you please...?", meaning: "你能……吗？（礼貌）", difficulty: 2, example: "Could you please open the window?", exampleCn: "你能打开窗户吗？", type: "phrase" },
  { id: "p133", phrase: "Would you mind...?", meaning: "你介意……吗？", difficulty: 2, example: "Would you mind turning down the music?", exampleCn: "你介意把音乐关小点吗？", type: "phrase" },
  { id: "p134", phrase: "I need your help.", meaning: "我需要你的帮助。", difficulty: 1, example: "I need your help with homework.", exampleCn: "我需要你帮我做作业。", type: "phrase" },
  { id: "p135", phrase: "Let me help you.", meaning: "让我来帮你。", difficulty: 1, example: "Let me help you carry the box.", exampleCn: "让我来帮你搬箱子。", type: "phrase" },
  { id: "p136", phrase: "No problem.", meaning: "没问题。", difficulty: 1, example: "Can you do it? No problem.", exampleCn: "你能做吗？没问题。", type: "phrase" },
  { id: "p137", phrase: "Don't worry about it.", meaning: "别担心。", difficulty: 1, example: "Don't worry about it. I'll handle it.", exampleCn: "别担心。我来处理。", type: "phrase" },
  { id: "p138", phrase: "It's okay.", meaning: "没关系。", difficulty: 1, example: "Sorry! It's okay.", exampleCn: "对不起！没关系。", type: "phrase" },
  { id: "p139", phrase: "Forget it.", meaning: "算了；别提了。", difficulty: 1, example: "Forget it. It's not important.", exampleCn: "算了。这不重要。", type: "phrase" },
  { id: "p140", phrase: "Never mind.", meaning: "没关系；别在意。", difficulty: 1, example: "Never mind. I forgot.", exampleCn: "没关系。我忘了。", type: "phrase" },

  // 表达意见与感受
  { id: "p141", phrase: "I think so.", meaning: "我认为是这样。", difficulty: 1, example: "I think so, too.", exampleCn: "我也这么认为。", type: "phrase" },
  { id: "p142", phrase: "I don't think so.", meaning: "我不这么认为。", difficulty: 1, example: "I don't think so. Let me explain.", exampleCn: "我不这么认为。让我解释。", type: "phrase" },
  { id: "p143", phrase: "That's right.", meaning: "没错。", difficulty: 1, example: "That's right. You're correct.", exampleCn: "没错。你是对的。", type: "phrase" },
  { id: "p144", phrase: "That's wrong.", meaning: "那是错的。", difficulty: 1, example: "That's wrong. Try again.", exampleCn: "那是错的。再试一次。", type: "phrase" },
  { id: "p145", phrase: "I'm sorry.", meaning: "对不起。", difficulty: 1, example: "I'm sorry for being late.", exampleCn: "对不起我迟到了。", type: "phrase" },
  { id: "p146", phrase: "Excuse me.", meaning: "打扰一下；请原谅。", difficulty: 1, example: "Excuse me, where is the station?", exampleCn: "打扰一下，车站在哪里？", type: "phrase" },
  { id: "p147", phrase: "Pardon me.", meaning: "请再说一遍。", difficulty: 2, example: "Pardon me? I didn't hear you.", exampleCn: "请再说一遍？我没听清。", type: "phrase" },
  { id: "p148", phrase: "I'm afraid...", meaning: "恐怕……", difficulty: 2, example: "I'm afraid I can't come.", exampleCn: "恐怕我来不了。", type: "phrase" },
  { id: "p149", phrase: "To be honest...", meaning: "说实话……", difficulty: 2, example: "To be honest, I don't like it.", exampleCn: "说实话，我不喜欢。", type: "phrase" },
  { id: "p150", phrase: "In my opinion...", meaning: "在我看来……", difficulty: 2, example: "In my opinion, you're right.", exampleCn: "在我看来，你是对的。", type: "phrase" },

  // 时间与频率
  { id: "p151", phrase: "Right now.", meaning: "立刻；马上。", difficulty: 1, example: "I need it right now.", exampleCn: "我立刻就需要。", type: "phrase" },
  { id: "p152", phrase: "Right away.", meaning: "马上。", difficulty: 1, example: "I'll do it right away.", exampleCn: "我马上去做。", type: "phrase" },
  { id: "p153", phrase: "Just a moment.", meaning: "等一下。", difficulty: 1, example: "Just a moment, please.", exampleCn: "请稍等一下。", type: "phrase" },
  { id: "p154", phrase: "Wait a minute.", meaning: "等一下。", difficulty: 1, example: "Wait a minute. I forgot something.", exampleCn: "等一下。我忘了东西。", type: "phrase" },
  { id: "p155", phrase: "Hurry up!", meaning: "快点！", difficulty: 1, example: "Hurry up! We're late.", exampleCn: "快点！我们要迟到了。", type: "phrase" },
  { id: "p156", phrase: "Take your time.", meaning: "慢慢来；不着急。", difficulty: 1, example: "Take your time. There's no rush.", exampleCn: "慢慢来。不着急。", type: "phrase" },
  { id: "p157", phrase: "From time to time", meaning: "不时；有时", difficulty: 2, example: "I visit her from time to time.", exampleCn: "我不时去看她。", type: "phrase" },
  { id: "p158", phrase: "Now and then", meaning: "偶尔", difficulty: 2, example: "We meet now and then.", exampleCn: "我们偶尔见面。", type: "phrase" },
  { id: "p159", phrase: "Sooner or later", meaning: "迟早", difficulty: 2, example: "You'll understand sooner or later.", exampleCn: "你迟早会明白的。", type: "phrase" },

  // 数量与程度
  { id: "p160", phrase: "A few", meaning: "一些；几个", difficulty: 1, example: "I have a few questions.", exampleCn: "我有几个问题。", type: "phrase" },
  { id: "p161", phrase: "A little", meaning: "一点", difficulty: 1, example: "I'm a little tired.", exampleCn: "我有点累。", type: "phrase" },
  { id: "p162", phrase: "A lot", meaning: "很多", difficulty: 1, example: "Thank you a lot.", exampleCn: "非常感谢你。", type: "phrase" },
  { id: "p163", phrase: "Too much", meaning: "太多", difficulty: 1, example: "That's too much for me.", exampleCn: "那对我来说太多了。", type: "phrase" },
  { id: "p164", phrase: "Not enough", meaning: "不够", difficulty: 1, example: "We don't have enough time.", exampleCn: "我们没有足够的时间。", type: "phrase" },
  { id: "p165", phrase: "More or less", meaning: "或多或少", difficulty: 2, example: "It's more or less finished.", exampleCn: "差不多完成了。", type: "phrase" },
  { id: "p166", phrase: "At least", meaning: "至少", difficulty: 2, example: "At least we tried.", exampleCn: "至少我们试过了。", type: "phrase" },
  { id: "p167", phrase: "At most", meaning: "最多", difficulty: 2, example: "It costs at most 100 yuan.", exampleCn: "最多100元。", type: "phrase" },
  { id: "p168", phrase: "By the way", meaning: "顺便说一下", difficulty: 2, example: "By the way, have you seen my keys?", exampleCn: "顺便说一下，你看到我的钥匙了吗？", type: "phrase" },
  { id: "p169", phrase: "In fact", meaning: "事实上", difficulty: 2, example: "In fact, I already knew.", exampleCn: "事实上，我已经知道了。", type: "phrase" },

  // 日常活动
  { id: "p170", phrase: "Wake up!", meaning: "醒醒！", difficulty: 1, example: "Wake up! It's time for school.", exampleCn: "醒醒！该上学了。", type: "phrase" },
  { id: "p171", phrase: "Go to bed.", meaning: "去睡觉。", difficulty: 1, example: "It's late. Go to bed.", exampleCn: "很晚了。去睡觉吧。", type: "phrase" },
  { id: "p172", phrase: "Have a rest.", meaning: "休息一下。", difficulty: 1, example: "You look tired. Have a rest.", exampleCn: "你看起来很累。休息一下。", type: "phrase" },
  { id: "p173", phrase: "Do exercise.", meaning: "做运动。", difficulty: 1, example: "I do exercise every morning.", exampleCn: "我每天早上做运动。", type: "phrase" },
  { id: "p174", phrase: "Watch TV.", meaning: "看电视。", difficulty: 1, example: "Let's watch TV together.", exampleCn: "我们一起看电视吧。", type: "phrase" },
  { id: "p175", phrase: "Play games.", meaning: "玩游戏。", difficulty: 1, example: "The children play games outside.", exampleCn: "孩子们在外面玩游戏。", type: "phrase" },
  { id: "p176", phrase: "Read books.", meaning: "看书。", difficulty: 1, example: "I like to read books before bed.", exampleCn: "我喜欢睡前看书。", type: "phrase" },
  { id: "p177", phrase: "Listen to music.", meaning: "听音乐。", difficulty: 1, example: "She listens to music every day.", exampleCn: "她每天听音乐。", type: "phrase" },
  { id: "p178", phrase: "Cook dinner.", meaning: "做晚饭。", difficulty: 1, example: "Mom is cooking dinner.", exampleCn: "妈妈在做晚饭。", type: "phrase" },
  { id: "p179", phrase: "Clean the room.", meaning: "打扫房间。", difficulty: 1, example: "Please clean your room.", exampleCn: "请打扫你的房间。", type: "phrase" },

  // 交通与出行
  { id: "p180", phrase: "Take a bus.", meaning: "坐公交车。", difficulty: 1, example: "I take a bus to school.", exampleCn: "我坐公交车上学。", type: "phrase" },
  { id: "p181", phrase: "Take a taxi.", meaning: "打车。", difficulty: 1, example: "Let's take a taxi.", exampleCn: "我们打车吧。", type: "phrase" },
  { id: "p182", phrase: "Ride a bike.", meaning: "骑自行车。", difficulty: 1, example: "I ride a bike to work.", exampleCn: "我骑自行车上班。", type: "phrase" },
  { id: "p183", phrase: "Walk to school.", meaning: "步行上学。", difficulty: 1, example: "I walk to school every day.", exampleCn: "我每天步行上学。", type: "phrase" },
  { id: "p184", phrase: "Catch the train.", meaning: "赶火车。", difficulty: 2, example: "We need to catch the train.", exampleCn: "我们需要赶火车。", type: "phrase" },
  { id: "p185", phrase: "Miss the bus.", meaning: "错过公交车。", difficulty: 2, example: "I missed the bus this morning.", exampleCn: "我今天早上错过了公交车。", type: "phrase" },
  { id: "p186", phrase: "Get on/off.", meaning: "上/下车。", difficulty: 1, example: "Get on the bus quickly.", exampleCn: "快上车。", type: "phrase" },
  { id: "p187", phrase: "Get in/out of.", meaning: "上/下（车）。", difficulty: 2, example: "Get in the car.", exampleCn: "上车。", type: "phrase" },
  { id: "p188", phrase: "Pick someone up.", meaning: "接某人。", difficulty: 2, example: "I'll pick you up at 8.", exampleCn: "我8点来接你。", type: "phrase" },
  { id: "p189", phrase: "Drop someone off.", meaning: "送某人下车。", difficulty: 2, example: "Can you drop me off at the station?", exampleCn: "你能送我到车站吗？", type: "phrase" },

  // 购物与消费
  { id: "p190", phrase: "How much is it?", meaning: "这个多少钱？", difficulty: 1, example: "How much is this shirt?", exampleCn: "这件衬衫多少钱？", type: "phrase" },
  { id: "p191", phrase: "I'd like to buy...", meaning: "我想买……", difficulty: 1, example: "I'd like to buy a gift.", exampleCn: "我想买个礼物。", type: "phrase" },
  { id: "p192", phrase: "Can I try it on?", meaning: "我能试穿吗？", difficulty: 2, example: "Can I try this on?", exampleCn: "我能试穿这个吗？", type: "phrase" },
  { id: "p193", phrase: "Do you have...?", meaning: "你有……吗？", difficulty: 1, example: "Do you have a bigger size?", exampleCn: "你有大一号的吗？", type: "phrase" },
  { id: "p194", phrase: "I'll take it.", meaning: "我买了。", difficulty: 1, example: "I'll take it. How much?", exampleCn: "我买了。多少钱？", type: "phrase" },
  { id: "p195", phrase: "That's too expensive.", meaning: "那太贵了。", difficulty: 1, example: "That's too expensive for me.", exampleCn: "那对我来说太贵了。", type: "phrase" },
  { id: "p196", phrase: "Can you give me a discount?", meaning: "能打折吗？", difficulty: 2, example: "Can you give me a discount?", exampleCn: "能给我打个折吗？", type: "phrase" },
  { id: "p197", phrase: "Pay by cash/card.", meaning: "用现金/刷卡支付。", difficulty: 2, example: "I'll pay by card.", exampleCn: "我刷卡支付。", type: "phrase" },
  { id: "p198", phrase: "Keep the change.", meaning: "不用找零了。", difficulty: 2, example: "Keep the change. Thank you.", exampleCn: "不用找零了。谢谢。", type: "phrase" },
  { id: "p199", phrase: "I'm just looking.", meaning: "我只是看看。", difficulty: 2, example: "Are you being helped? I'm just looking.", exampleCn: "有人帮你吗？我只是看看。", type: "phrase" },

];

// 合并所有学习项
export function getAllItems(): LearningItem[] {
  return [...WORDS, ...PHRASES];
}

// 按难度获取单词
export function getWordsByDifficulty(difficulty: Word['difficulty']): Word[] {
  return WORDS.filter(w => w.difficulty === difficulty);
}

// 获取指定难度的随机单词
export function getRandomWords(difficulty: Word['difficulty'], count: number, excludeIds: string[] = []): Word[] {
  const available = WORDS.filter(w => w.difficulty === difficulty && !excludeIds.includes(w.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 获取总学习项数
export function getTotalItemCount(): number {
  return WORDS.length + PHRASES.length;
}

export function getTotalWordCount(): number {
  return WORDS.length;
}

export function getTotalPhraseCount(): number {
  return PHRASES.length;
}

// 按难度分组统计
export function getDifficultyStats(): Record<number, number> {
  const all = getAllItems();
  return all.reduce((acc, item) => {
    acc[item.difficulty] = (acc[item.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);
}

// 获取干扰选项（用于选择题）
export function getDistractors(correctItem: LearningItem, count: number = 3): LearningItem[] {
  const all = getAllItems();
  const sameType = all.filter(w => w.id !== correctItem.id && w.type === correctItem.type);
  const shuffled = [...sameType].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 语音朗读
export function speak(text: string, rate: number = 0.85): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}
