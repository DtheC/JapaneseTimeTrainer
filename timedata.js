const HOURS_JPN = [
  'juunijii',
  'ichiji',
  'niji',
  'sanji',
  'yoji',
  'goji',
  'rokuji',
  'shichiji',
  'hachiji',
  'kuji',
  'juuji',
  'juuichiji'
];

const HOURS_JPN_KANJI = [
  '十二時',
  '一時',
  '二時',
  '三時',
  '四時',
  '五時',
  '六時',
  '七時',
  '八時',
  '九時',
  '十時',
  '十一時'
];

const HOURS_JPN_HIRAGANA = [
  'じゅうにじ',
  'いちじ',
  'にじ',
  'さんじ',
  'よじ',
  'ごじ',
  'ろくじ',
  'しちじ',
  'はちじ',
  'くじ',
  'じゅうじ',
  'じゅういちじ',
];

const MINS_JPN = [
  '',
  'ippun',
  'nifun',
  'sanpun',
  'yonpun',
  'gofun',
  'roppun',
  'nanafun',
  'happun',
  'kyuufun',
  'juppun',
  'juuippun',
  'juunifun',
  'juusanpun',
  'juuyonpun',
  'juugofun',
  'juuroppun',
  'juunanafun',
  'juuhappun',
  'juukyuufun',
  'nijuppun',
  'nijuuippun',
  'nijuunifun',
  'nijuusanpun',
  'nijuuyonpun',
  'nijuugofun',
  'nijuuroppun',
  'nijuunanafun',
  'nijuuhappun',
  'nijuukyuufun',
  'han',
  'sanjuuippun',
  'sanjuunifun',
  'sanjuusanpun',
  'sanjuuyonpun',
  'sanjuugofun',
  'sanjuuroppun',
  'sanjuunanafun',
  'sanjuuhappun',
  'sanjuukyuufun',
  'yonjuppun',
  'yonjuuippun',
  'yonjuunifun',
  'yonjuusanpun',
  'yonjuuyonpun',
  'yonjuugofun',
  'yonjuuroppun',
  'yonjuunanafun',
  'yonjuuhappun',
  'yonjuukyuufun',
  'gojuppun',
  'gojuuippun',
  'gojuunifun',
  'gojuusanpun',
  'gojuuyonpun',
  'gojuugofun',
  'gojuuroppun',
  'gojuunanafun',
  'gojuuhappun',
  'gojuukyuufun'
];

const MINS_JPN_HIRAGANA = [
  '',
  'いっぷん',
  'にふん',
  'さんぷん',
  'よんぷん',
  'ごふん',
  'ろっぷん',
  'ななふん',
  'はっぷん',
  'きゅうふん',
  'じゅっぷん',
  'じゅういっぷん',
  'じゅうにふん',
  'じゅうさんぷん',
  'じゅうよんぷん',
  'じゅうごふん',
  'じゅうろっぷん',
  'じゅうななふん',
  'じゅうはっぷん',
  'じゅうきゅうふん',
  'にじゅっぷん',
  'にじゅういっぷん',
  'にじゅうにふん',
  'にじゅうさんぷん',
  'にじゅうよんぷん',
  'にじゅうごふん',
  'にじゅうろっぷん',
  'にじゅうななふん',
  'にじゅうはっぷん',
  'にじゅうきゅうふん',
  'はん',
  'さんじゅういっぷん',
  'さんじゅうにふん',
  'さんじゅうさんぷん',
  'さんじゅうよんぷん',
  'さんじゅうごふん',
  'さんじゅうろっぷん',
  'さんじゅうななふん',
  'さんじゅうはっぷん',
  'さんじゅうきゅうふん',
  'よんじゅっぷん',
  'よんじゅういっぷん',
  'よんじゅうにふん',
  'よんじゅうさんぷん',
  'よんじゅうよんぷん',
  'よんじゅうごふん',
  'よんじゅうろっぷん',
  'よんじゅうななふん',
  'よんじゅうはっぷん',
  'よんじゅうきゅうふん',
  'ごじゅっぷん',
  'ごじゅういっぷん',
  'ごじゅうにふん',
  'ごじゅうさんぷん',
  'ごじゅうよんぷん',
  'ごじゅうごふん',
  'ごじゅうろっぷん',
  'ごじゅうななふん',
  'ごじゅうはっぷん',
  'ごじゅうきゅうふん'
];






// anji
// 1 o’clock	ichiji	いちじ	一時	ippun	いっぷん	
// 2 o’clock	niji	にじ	二時	nifun	にふん	
// 3 o’clock	sanji	さんじ	三時	sanpun	さんぷｎ	
// 4 o’clock	yoji	よじ	四時	yonpun	よんぷん	
// 5 o’clock	goji	ごじ	五時	gofun	ごふん	
// 6 o’clock	rokuji	ろくじ	六時	roppun	ろっぷん	
// 7 o’clock	shichiji	しちじ	七時	nanafun	ななふん	
// 8 o’clock	hachiji	はちじ	八時	happun	はっぷん	
// 9 o’clock	kuji	くじ	九時	kyufun	きゅふん	
// 10 o’clock	juuji	じゅうじ	十時	juppun	じゅっぷん	
// 11 o’clock	juuichiji	じゅういちじ	十一時	juuippun	じゅういっぷん	
// 12 o’clock	juuniji	じゅうにじ	十二時	juunifun	じゅうにふん	