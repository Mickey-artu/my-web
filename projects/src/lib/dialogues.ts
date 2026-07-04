// 情景对话库 - 在真实场景中学习单词和语法

export interface DialogueLine {
  speaker: 'A' | 'B' | '旁白';
  text: string;
  translation: string;
  highlight?: string[]; // 高亮的关键词
}

export interface DialogueQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Dialogue {
  id: string;
  title: string;
  titleCn: string;
  scene: string;
  level: number;
  lines: DialogueLine[];
  questions: DialogueQuestion[];
  keyWords: string[];
  grammarPoints: string[];
}

export const DIALOGUES: Dialogue[] = [
  // ========== 购物场景 ==========
  {
    id: 'shopping-1',
    title: 'Buying Clothes',
    titleCn: '买衣服',
    scene: '服装店',
    level: 1,
    keyWords: ['size', 'try on', 'cheap', 'expensive', 'color'],
    grammarPoints: ['How much is/are...? 询问价格', 'Can I try...? 请求试穿'],
    lines: [
      { speaker: '旁白', text: 'In a clothing store...', translation: '在一家服装店里...' },
      { speaker: 'A', text: 'Excuse me, how much is this T-shirt?', translation: '打扰一下，这件T恤多少钱？', highlight: ['how much'] },
      { speaker: 'B', text: 'It\'s 99 yuan.', translation: '99元。' },
      { speaker: 'A', text: 'That\'s a bit expensive. Do you have a cheaper one?', translation: '有点贵。有便宜一点的吗？', highlight: ['expensive', 'cheaper'] },
      { speaker: 'B', text: 'Yes, this one is 59 yuan. It\'s on sale.', translation: '有的，这件59元，在打折。', highlight: ['on sale'] },
      { speaker: 'A', text: 'Can I try it on? What size do you have?', translation: '我能试穿吗？有什么尺码？', highlight: ['try on', 'size'] },
      { speaker: 'B', text: 'We have S, M, and L. The fitting room is over there.', translation: '我们有S、M和L码。试衣间在那边。' },
      { speaker: 'A', text: 'Thank you. I\'ll take this one in medium.', translation: '谢谢。我要这件中码的。' },
    ],
    questions: [
      {
        question: '这件T恤原价多少钱？',
        options: ['59元', '99元', '199元', '39元'],
        answer: 1,
        explanation: '对话中提到 "It\'s 99 yuan"，后来打折的是59元。',
      },
      {
        question: '"Can I try it on?" 是什么意思？',
        options: ['我可以买它吗？', '我可以试穿吗？', '我可以看看吗？', '我可以拿走吗？'],
        answer: 1,
        explanation: '"try on" 是试穿的意思，"Can I try it on?" 是请求试穿。',
      },
      {
        question: '"on sale" 是什么意思？',
        options: ['出售中', '打折', '新品', '售罄'],
        answer: 1,
        explanation: '"on sale" 表示打折、促销。',
      },
    ],
  },
  // ========== 问路场景 ==========
  {
    id: 'directions-1',
    title: 'Asking for Directions',
    titleCn: '问路',
    scene: '街道上',
    level: 1,
    keyWords: ['near', 'far', 'turn', 'straight', 'across'],
    grammarPoints: ['How can I get to...? 问路句型', 'Go straight and turn... 指路表达'],
    lines: [
      { speaker: '旁白', text: 'On the street, asking a passerby...', translation: '在街上，向路人问路...' },
      { speaker: 'A', text: 'Excuse me, how can I get to the nearest hospital?', translation: '打扰一下，去最近的医院怎么走？', highlight: ['nearest', 'how can I get to'] },
      { speaker: 'B', text: 'Go straight along this road, then turn left at the second crossing.', translation: '沿着这条路直走，在第二个路口左转。', highlight: ['straight', 'turn left'] },
      { speaker: 'A', text: 'Is it far from here?', translation: '离这儿远吗？', highlight: ['far'] },
      { speaker: 'B', text: 'No, it\'s about 10 minutes\' walk. It\'s across from the park.', translation: '不远，步行大约10分钟。它在公园对面。', highlight: ['across from'] },
      { speaker: 'A', text: 'So I go straight, then turn left. Is that right?', translation: '所以我直走，然后左转，对吗？' },
      { speaker: 'B', text: 'Yes, that\'s right. You can\'t miss it.', translation: '对的，你不会错过的。' },
      { speaker: 'A', text: 'Thank you so much!', translation: '非常感谢！' },
    ],
    questions: [
      {
        question: '医院在哪里？',
        options: ['公园旁边', '公园对面', '学校旁边', '邮局对面'],
        answer: 1,
        explanation: '对话中说 "It\'s across from the park"，意思是公园对面。',
      },
      {
        question: '"Go straight" 是什么意思？',
        options: ['转弯', '直走', '回来', '停下'],
        answer: 1,
        explanation: '"Go straight" 意思是直走、向前走。',
      },
      {
        question: '去医院大约需要多久？',
        options: ['5分钟', '10分钟', '20分钟', '30分钟'],
        answer: 1,
        explanation: '对话中提到 "about 10 minutes\' walk"，步行约10分钟。',
      },
    ],
  },
  // ========== 点餐场景 ==========
  {
    id: 'restaurant-1',
    title: 'Ordering Food',
    titleCn: '点餐',
    scene: '餐厅',
    level: 2,
    keyWords: ['menu', 'order', 'delicious', 'bill', 'recommend'],
    grammarPoints: ['I\'d like... 点餐句型', 'Could I have...? 礼貌请求'],
    lines: [
      { speaker: '旁白', text: 'At a restaurant...', translation: '在一家餐厅里...' },
      { speaker: 'A', text: 'Good evening. Could I have the menu, please?', translation: '晚上好。请给我菜单好吗？', highlight: ['menu'] },
      { speaker: 'B', text: 'Of course. Are you ready to order?', translation: '当然。您准备好点餐了吗？', highlight: ['order'] },
      { speaker: 'A', text: 'What do you recommend?', translation: '你推荐什么？', highlight: ['recommend'] },
      { speaker: 'B', text: 'Our beef noodles are very popular. They\'re delicious!', translation: '我们的牛肉面很受欢迎，非常美味！', highlight: ['delicious'] },
      { speaker: 'A', text: 'I\'d like the beef noodles, please. And a glass of orange juice.', translation: '我要牛肉面，还有一杯橙汁。', highlight: ['I\'d like'] },
      { speaker: 'B', text: 'Anything else?', translation: '还要别的吗？' },
      { speaker: 'A', text: 'No, that\'s all. How much is it?', translation: '不要了，就这些。多少钱？' },
      { speaker: 'B', text: 'It\'s 45 yuan in total.', translation: '一共45元。' },
      { speaker: 'A', text: 'Can I have the bill, please?', translation: '请给我账单好吗？', highlight: ['bill'] },
    ],
    questions: [
      {
        question: '顾客点了什么？',
        options: ['米饭和汤', '牛肉面和橙汁', '汉堡和可乐', '面条和水'],
        answer: 1,
        explanation: '顾客说 "I\'d like the beef noodles, please. And a glass of orange juice."',
      },
      {
        question: '"I\'d like..." 是什么意思？',
        options: ['我不喜欢', '我想要', '我有', '我需要'],
        answer: 1,
        explanation: '"I\'d like..." 是 "I would like..." 的缩写，表示"我想要..."，是点餐常用句型。',
      },
      {
        question: '一共花了多少钱？',
        options: ['35元', '45元', '55元', '65元'],
        answer: 1,
        explanation: '服务员说 "It\'s 45 yuan in total"，总共45元。',
      },
    ],
  },
  // ========== 学校场景 ==========
  {
    id: 'school-1',
    title: 'In the Classroom',
    titleCn: '在教室里',
    scene: '教室',
    level: 1,
    keyWords: ['homework', 'subject', 'difficult', 'easy', 'understand'],
    grammarPoints: ['What\'s your favorite...? 询问喜好', 'I\'m good at... 擅长表达'],
    lines: [
      { speaker: '旁白', text: 'Between classes, two students are talking...', translation: '课间，两个学生在聊天...' },
      { speaker: 'A', text: 'Hi! What\'s your favorite subject?', translation: '嗨！你最喜欢什么科目？', highlight: ['favorite subject'] },
      { speaker: 'B', text: 'I like English best. What about you?', translation: '我最喜欢英语。你呢？' },
      { speaker: 'A', text: 'I\'m good at math, but I find English a bit difficult.', translation: '我擅长数学，但我觉得英语有点难。', highlight: ['good at', 'difficult'] },
      { speaker: 'B', text: 'Don\'t worry. I can help you with it.', translation: '别担心，我可以帮你。' },
      { speaker: 'A', text: 'Really? That\'s great! Do you have homework today?', translation: '真的吗？太好了！今天有作业吗？', highlight: ['homework'] },
      { speaker: 'B', text: 'Yes, we have to write an essay about our weekend.', translation: '有，我们要写一篇关于周末的作文。' },
      { speaker: 'A', text: 'That sounds easy! I had a wonderful weekend.', translation: '听起来很简单！我过了一个很棒的周末。', highlight: ['easy'] },
    ],
    questions: [
      {
        question: 'B最喜欢什么科目？',
        options: ['数学', '英语', '语文', '科学'],
        answer: 1,
        explanation: 'B说 "I like English best"，最喜欢英语。',
      },
      {
        question: '"I\'m good at math" 是什么意思？',
        options: ['我讨厌数学', '我擅长数学', '我在学数学', '数学很难'],
        answer: 1,
        explanation: '"be good at" 表示擅长某事。',
      },
      {
        question: '今天的作业是什么？',
        options: ['做数学题', '背单词', '写作文', '读课文'],
        answer: 2,
        explanation: '对话中提到 "write an essay about our weekend"，写关于周末的作文。',
      },
    ],
  },
  // ========== 看医生场景 ==========
  {
    id: 'doctor-1',
    title: 'Seeing a Doctor',
    titleCn: '看医生',
    scene: '医院',
    level: 3,
    keyWords: ['headache', 'fever', 'medicine', 'rest', 'better'],
    grammarPoints: ['What\'s wrong with...? 询问症状', 'You should... 给出建议'],
    lines: [
      { speaker: '旁白', text: 'At the doctor\'s office...', translation: '在诊所里...' },
      { speaker: 'B', text: 'What\'s wrong with you?', translation: '你怎么了？', highlight: ['What\'s wrong'] },
      { speaker: 'A', text: 'I have a bad headache and a fever.', translation: '我头疼得厉害，还发烧了。', highlight: ['headache', 'fever'] },
      { speaker: 'B', text: 'How long have you been like this?', translation: '这样多久了？' },
      { speaker: 'A', text: 'Since yesterday morning. I can\'t sleep well.', translation: '从昨天早上开始。我睡不好觉。' },
      { speaker: 'B', text: 'Let me check... You have a cold. You should take some medicine and get more rest.', translation: '让我检查一下...你感冒了。你应该吃点药，多休息。', highlight: ['medicine', 'rest'] },
      { speaker: 'A', text: 'Do I need to stay in bed?', translation: '我需要卧床休息吗？' },
      { speaker: 'B', text: 'Yes, for two or three days. Drink more water and you\'ll feel better.', translation: '是的，两三天。多喝水，你会好起来的。', highlight: ['better'] },
      { speaker: 'A', text: 'Thank you, doctor.', translation: '谢谢你，医生。' },
    ],
    questions: [
      {
        question: '病人有什么症状？',
        options: ['肚子疼', '头疼和发烧', '咳嗽', '牙疼'],
        answer: 1,
        explanation: '病人说 "I have a bad headache and a fever"，头疼且发烧。',
      },
      {
        question: '医生给出了什么建议？',
        options: ['做手术', '吃药多休息', '去住院', '不用管'],
        answer: 1,
        explanation: '医生说 "You should take some medicine and get more rest"，吃药多休息。',
      },
      {
        question: '"How long have you been like this?" 问的是什么？',
        options: ['你多大了', '你住在哪里', '这样多久了', '你叫什么'],
        answer: 2,
        explanation: '这是在询问症状持续了多长时间。',
      },
    ],
  },
  // ========== 打电话场景 ==========
  {
    id: 'phone-1',
    title: 'Making a Phone Call',
    titleCn: '打电话',
    scene: '电话中',
    level: 2,
    keyWords: ['call', 'message', 'later', 'speak', 'hold on'],
    grammarPoints: ['May I speak to...? 电话用语', 'Can I take a message? 留言'],
    lines: [
      { speaker: '旁白', text: 'On the phone...', translation: '在电话中...' },
      { speaker: 'A', text: 'Hello! May I speak to Tom, please?', translation: '你好！请问Tom在吗？', highlight: ['May I speak to'] },
      { speaker: 'B', text: 'Hold on, please. He\'s not here right now.', translation: '请稍等。他现在不在这里。', highlight: ['Hold on'] },
      { speaker: 'A', text: 'Can I take a message?', translation: '我可以留言吗？', highlight: ['take a message'] },
      { speaker: 'B', text: 'Yes, please. This is Tom\'s friend. Could you tell him to call me back?', translation: '好的。我是Tom的朋友。你能告诉他给我回电话吗？', highlight: ['call me back'] },
      { speaker: 'A', text: 'Sure. What\'s your number?', translation: '好的。你的电话号码是多少？' },
      { speaker: 'B', text: 'It\'s 138-1234-5678.', translation: '138-1234-5678。' },
      { speaker: 'A', text: 'OK, I\'ll give him the message. He\'ll call you back later.', translation: '好的，我会告诉他。他稍后会给你回电话。', highlight: ['later'] },
      { speaker: 'B', text: 'Thank you. Goodbye!', translation: '谢谢。再见！' },
    ],
    questions: [
      {
        question: 'A想找谁？',
        options: ['Tom', 'Jerry', 'Mary', 'John'],
        answer: 0,
        explanation: 'A说 "May I speak to Tom, please?"，想找Tom。',
      },
      {
        question: '"Hold on" 是什么意思？',
        options: ['挂断', '请稍等', '大声点', '再说一遍'],
        answer: 1,
        explanation: '"Hold on" 在电话用语中表示"请稍等"。',
      },
      {
        question: 'B的电话号码是什么？',
        options: ['138-1234-5678', '139-1234-5678', '138-5678-1234', '139-5678-1234'],
        answer: 0,
        explanation: 'B说 "It\'s 138-1234-5678"。',
      },
    ],
  },
];
