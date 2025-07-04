import { CardData } from './types';

/**
 * Array of card data to be displayed in the application.
 * Each object conforms to the CardData interface.
 * Content should be translated to Arabic.
 * Image URLs now point to static assets in `public/images/`.
 * Please ensure you create a `public/images/` folder at your project root
 * and place the corresponding images there.
 */
export const CARDS_DATA: CardData[] = [
  {
    id: '1',
    title: 'دعوة الخليل المستجابة',
    description: '🧕👴🌌\nبعد أن هاجر إبراهيم عليه السلام، رفع يديه للسماء 🙌 وقال:\n(رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ) 🌟\nفاستجاب الله له وبشّره بولدٍ حليمٍ 😌 غلام مميز في صفة الحِلم — صفة لا تظهر إلا فيمن كَبُرَ ونضج.\n✨ إنها بشارة حياة وأمل!',
    evidence: '💡 الحِلم إشارة مبكرة لعظمة الموعود!',
    question: '🤔 هل تستمر في الدعاء حتى لو بدا الأمر مستحيلاً؟',
    imageUrl: '/images/card-faith.jpg',
  },
  {
    id: '2',
    title: 'الولد الذي بلغ السعي',
    description: '👨‍👦🏞️\nكبر الغلام وأصبح يسعى مع أبيه 💪، لا طفل صغير بعد اليوم، بل شاب يُعين والده ويؤنس وحدته.\n(فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ)',
    evidence: '📌 تعلق الأب بابنه في هذه المرحلة عميقٌ جدًا، لأن الابن أصبح زينةً للحياة ومصدر سكينة.',
    question: '🤔 هل شعرت يومًا بقيمة من يكبر أمام عينيك؟',
    imageUrl: '/images/card-submission.jpg',
  },
  {
    id: '3',
    title: 'رؤيا الأنبياء وحي',
    description: '🌙😴💭\nفي ليلةٍ مباركة، رأى إبراهيم عليه السلام في منامه أنه يذبح ابنه...!\nلكنها ليست مجرد رؤيا، بل وحيٌ من الله للأنبياء.\n(إِنِّي أَرَى فِي الْمَنَامِ أَنِّي أَذْبَحُكَ) 😳',
    evidence: 'صدمة... واختبار 🔥',
    question: '🤔 هل تقدر تتخيل ألم الأب؟ كيف يكون البلاء حين يصيب أعز من نحب؟',
    imageUrl: '/images/card-dreamvision.jpg',
  },
  {
    id: '4',
    title: 'مشورةٌ تفوق الخيال',
    description: '🗣️👨‍👦\nما أعظم هذا الأب... بدل أن يُفاجئ ابنه، استشاره بلُطف:\n(يَا بُنَيَّ إِنِّي أَرَى فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانْظُرْ مَاذَا تَرَى)\nفرد الغلام الصالح:',
    evidence: '(يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ) 💚\nكلمات تُذهل القلوب وتُظهر إيمانًا عظيمًا!',
    question: '🤔 هل تقدر تتخيل نفسك في مكانه؟ الطاعة والإيمان الكامل!',
    imageUrl: '/images/card-divineram.jpg',
  },
  {
    id: '5',
    title: 'تسليمٌ مطلقٌ لله',
    description: '🕋❤️🤲\nالغلام يضيف:\n(سَتَجِدُنِي إِنْ شَاءَ اللَّهُ مِنَ الصَّابِرِينَ)\nليس ثقة بنفسه، بل توكل على ربه...',
    evidence: 'ثم قال الله:\n(فَلَمَّا أَسْلَمَا)\nأي استسلما تمامًا لأمر الله، الأب والابن معًا!',
    question: '🤔 هل نستسلم لأوامر الله برضا؟ وهل نعلّق أملنا دومًا بـ"إن شاء الله"؟',
    imageUrl: '/images/card-legacyworship.jpg',
  },
  {
    id: '6',
    title: 'لحظة الاختبار الكبرى',
    description: '🔪🧎‍♂️💔\nاقتربت اللحظة... وضعه على جبينه كي لا يرى وجهه وهو يذبحه 😭\n(وَتَلَّهُ لِلْجَبِينِ)',
    evidence: 'الولد الصابر يطلب من أبيه:\n"اشدد وثاقي، أسرع بالسكين، بلّغ أمي سلامي..."',
    question: '🤔 هل يمكن أن يوجد طاعة ورضا بهذا الشكل؟',
    imageUrl: '/images/card-joyfulremembrance.jpg',
  },
  {
    id: '7',
    title: 'السكين لا تقطع بأمر الله',
    description: '⚔️🛑\nمرت السكين... ولكن لم تقطع!\n🤯 الله عطّل خاصيتها كما عطّل النار أن تحرق إبراهيم من قبل.',
    evidence: 'معجزة أخرى تثبت أن الله فوق كل الأسباب!',
    question: '🤔 هل نؤمن بأن الله قادر أن يغير قوانين الكون من أجل الطائعين؟',
    imageUrl: '/images/card-intentionmatters.jpg',
  },
  {
    id: '8',
    title: 'نداء من السماء وفداء عظيم',
    description: '📢🎁🕊️\nجاء النداء العظيم:\n(يَا إِبْرَاهِيمُ، قَدْ صَدَّقْتَ الرُّؤْيَا)\nالاختبار انتهى، والجزاء نزل من السماء:',
    evidence: '(وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ) 🐏\nكبشٌ عظيمٌ من الجنة... فداءً للغلام المطيع.',
    question: '🤔 هل نثق أن الله لا يضيع أجر من أحسن الطاعة؟',
    imageUrl: '/images/card-lessonspatience.jpg',
  },
  {
    id: '10', // This was originally id '10', it becomes the 9th card
    title: 'البلاء المبين والجزاء العظيم',
    description: '🕌🎉\nلقد اجتاز إبراهيم وولده البلاء المبين 💪\nوبدلًا من الفقد... جاءهم الفضل:\n  • إسماعيل حيّ\n  • إسحاق بشارة جديدة\n  • النبوة في ذريته\n  • الذكر الحسن عبر العصور\n  • وسنّ الأضحية في كل عيد ❤️',
    evidence: '📖 (وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ... سَلَامٌ عَلَى إِبْرَاهِيم)',
    question: '🤔 ما الدروس التي تعلمناها؟ وهل نحن مستعدون للتضحية من أجل طاعة الله؟',
    imageUrl: '/images/card-faithgenerations.jpg',
  }
];
