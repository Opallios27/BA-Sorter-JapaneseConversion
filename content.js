// 英語 → 日本語の対応表（必要に応じて拡張）
const charNameDict = {
  "Arata": "アラタ",
  "Arona": "アロナ",
  "Otogi": "オトギ",
  "Kuzunoha": "クズノハ",
  "Kurumi": "クルミ",
  "Kokuriko": "コクリコ",
  "Konoka": "コノカ",
  "Sumomo": "スモモ",
  "Sora": "ソラ",
  "Niko": "ニコ",
  "Professor Smug": "ニヤニヤ教授",
  "Haine": "ハイネ",
  "Plana": "プラナ",
  "Mirai": "ミライ",
  "GSC President": "連邦生徒会長",
  "Ein": "アイン",
  "Sof": "ソフ",
  "Ohr": "オウル",
  "Key": "ケイ",
  "Aikiyo Fuuka": "愛清 フウカ",
  "Aomori Mine": "蒼森 ミネ",
  "Akashi Junko": "赤司 ジュンコ",
  "Akiizumi Momiji": "秋泉 モミジ",
  "Akeshiro Rumi": "朱城 ルミ",
  "Akeboshi Himari": "明星 ヒマリ",
  "Asagao Hanae": "朝顔 ハナエ",
  "Asagi Mutsuki": "浅黄 ムツキ",
  "Asagiri Suou": "朝霧 スオウ",
  "Asahina Pina": "朝比奈 フィーナ",
  "Ajitani Hifumi": "阿慈谷 ヒフミ",
  "Asuma Toki": "飛鳥馬 トキ",
  "Amau Ako": "天雨 アコ",
  "Amachi Niya": "天地 ニヤ",
  "Amami Nodoka": "天見 ノドカ",
  "Aramaki Yakumo": "荒槇 ヤクモ",
  "Iochi Mari": "伊落 マリー",
  "Igusa Haruka": "伊草 ハルカ",
  "Ikekura Marina": "池倉 マリナ",
  "Isami Kaede": "勇美 カエデ",
  "Izayoi Nonomi": "十六夜 ノノミ",
  "Izumimoto Eimi": "和泉元 エイミ",
  "Ichinose Asuna": "一之瀬 アスナ",
  "Ibaragi Yoshimi": "伊原木 ヨシミ",
  "Imashino Misaki": "戒野 ミサキ",
  "Iwabitsu Ayumu": "岩櫃 アユム",
  "Uzawa Reisa": "宇沢 レイサ",
  "Ushio Noa": "生塩 ノア",
  "Ushimaki Juri": "牛牧 ジュリ",
  "Utazumi Sakurako": "歌住 サクラコ",
  "Urawa Hanako": "浦和 ハナコ",
  "Urushibara Kaguya": "漆原 カグヤ",
  "Endou Shimiko": "円堂 シミコ",
  "Oono Tsukuyo": "大野 ツクヨ",
  "Ogata Kanna": "尾刃 カンナ",
  "Oki Aoi": "扇喜 アオイ",
  "Okusora Ayane": "奥空 アヤネ",
  "Otose Kotama": "音瀬 コタマ",
  "Otohana Sumire": "乙花 スミレ",
  "Onikata Kayoko": "鬼方 カヨコ",
  "Omagari Hare": "小鈎 ハレ",
  "Kagami Chihiro": "各務 チヒロ",
  "Kakudate Karin": "角楯 カリン",
  "Kazemaki Mai": "風巻 マイ",
  "Kasuga Tsubaki": "春日 ツバキ",
  "Kasumizawa Miyu": "霞沢 ミユ",
  "Kazekura Moe": "風倉 モエ",
  "Kadenokouji Yukari": "勘解由小路 ユカリ",
  "Kayama Reijo": "鹿山 レイジョ",
  "Kawaru Shinon": "川流 シノン",
  "Kawawa Shizuko": "河和 シズコ",
  "Kinugawa Kasumi": "鬼怒川 カスミ",
  "Kyougoku Satsuki": "京極 サツキ",
  "Kyouyama Kazusa": "杏山 カズサ",
  "Kiyosumi Akira": "清澄 アキラ",
  "Kirifuji Nagisa": "桐藤 ナギサ",
  "Kiryuu Kikyou": "桐生 キキョウ",
  "Kuda Izuna": "久田 イズナ",
  "Kuchinashi Yume": "梔子 ユメ",
  "Kurihama Akemi": "栗浜 アケミ",
  "Kurimura Airi": "栗村 アイリ",
  "Kurosaki Koyuki": "黒崎 コユキ",
  "Kurodate Haruna": "黒舘 ハルナ",
  "Kuromi Serika": "黒見 セリカ",
  "Kuwakami Kaho": "桑上 カホ",
  "Kenzaki Tsurugi": "剣先 ツルギ",
  "Kosaka Wakamo": "狐坂 ワカモ",
  "Kozeki Ui": "古関 ウイ",
  "Konuri Maki": "小塗 マキ",
  "Konoe Mina": "近衛 ミナ",
  "Komakaze Rabu": "河駒風 ラブ",
  "Goryou Nagusa": "御稜 ナグサ",
  "Saiba Midori": "才羽 ミドリ",
  "Saiba Momoi": "才羽 モモイ",
  "Sashiro Tomoe": "佐城 トモエ",
  "Saten Ruiko": "佐天 涙子",
  "Satohama Umika": "里浜 ウミカ",
  "Shiina Tsumugi": "椎名 ツムギ",
  "Shishidou Izumi": "獅子堂 イズミ",
  "Shizuyama Mashiro": "静山 マシロ",
  "Shichido Yukino": "七度 ユキノ",
  "Shimoe Koharu": "下江 コハル",
  "Shimokura Megu": "下倉 メグ",
  "Joumae Saori": "錠前 サオリ",
  "Shokuhou Misaki": "食蜂 操祈",
  "Shiraishi Utaha": "白石 ウタハ",
  "Shirasu Azusa": "白洲 アズサ",
  "Shiranui Kaya": "不知火 カヤ",
  "Shiromi Iori": "銀鏡 イオリ",
  "Shintani Kai": "申谷 カイ",
  "Sunaookami Shiroko": "砂狼 シロコ",
  "Shiroko Terror": "砂狼 シロコ（テラー）",
  "Sunohara Kokona": "春原 ココナ",
  "Sunohara Shun": "春原 シュン",
  "Sumi Serina": "鷲見 セリナ",
  "Sorai Saki": "空井 サキ",
  "Sorasaki Hina": "空崎 ヒナ",
  "Takanashi Hoshino": "小鳥遊 ホシノ",
  "Tacihbana Nozomi": "橘 ノゾミ",
  "Tacihbana Hikari": "橘 ヒカリ",
  "Tanga Ibuki": "丹花 イブキ",
  "Chidori Michiru": "千鳥 ミチル",
  "Tsukatsuki Rio": "調月 リオ",
  "Tsukiyuki Miyako": "月雪 ミヤコ",
  "Tsuchinaga Hiyori": "槌永 ヒヨリ",
  "Tendou Aris": "天童 アリス",
  "Toyomi Kotori": "豊見 コトリ",
  "Nakatsukasa Kirino": "中務 キリノ",
  "Nakamasa Ichika": "仲正 イチカ",
  "Natsume Iroha": "棗 イロハ",
  "Nanagami Rin": "七神 リン",
  "Nekozuka Hibiki": "猫塚 ヒビキ",
  "Nemugaki Fubuki": "合歓垣 フブキ",
  "Nomasa Rei": "野正 レイ",
  "Hakari Atsuko": "秤 アツコ",
  "Hatami Erika": "旗見 エリカ",
  "Hatsune Miku": "初音 ミク",
  "Hanaoka Yuzu": "花岡 ユズ",
  "Hanuma Makoto": "羽沼 マコト",
  "Hanekawa Hasumi": "羽川 ハスミ",
  "Hayase Yuuka": "早瀬 ユウカ",
  "Hinomiya Chinatsu": "火宮 チナツ",
  "Himuro Sena": "氷室 セナ",
  "Himeki Meru": "姫木 メル",
  "Fuwa Renge": "不破 レンゲ",
  "Mayoi Shigure": "間宵 シグレ",
  "Mikamo Neru": "美甘 ネル",
  "Misaka Mikoto": "御坂 美琴",
  "Mizuha Mimori": "水羽 ミモリ",
  "Misono Mika": "聖園 ミカ",
  "Miyoshi Takane": "三善 タカネ",
  "Murokasa Akane": "室笠 アカネ",
  "Motomiya Chiaki": "元宮 チアキ",
  "Morizuki Suzumi": "守月 スズミ",
  "Yakushi Saya": "薬子 サヤ",
  "Yasumori Minori": "安守 ミノリ",
  "Yabuki Shuro": "箭吹 シュロ",
  "Yutori Natsu": "柚鳥 ナツ",
  "Yuragi Momoka": "由良木 モモカ",
  "Yurizono Seia": "百合園 セイア",
  "Yozakura Kirara": "夜桜 キララ",
  "Rikuhachima Aru": "陸八魔 アル",
  "Ryuuge Kisaki": "竜華 キサキ",
  "Renkawa Cherino": "連河 チェリノ",
  "Wakaba Hinata": "若葉 ヒナタ",
  "Wanibuchi Akari": "鰐渕 アカリ",
  "Waraku Chise": "和楽 チセ"

};

// 翻訳処理
function translateText(text) {
  const trimmed = text.trim();
  return charNameDict[trimmed] || trimmed;
}

// キャラ名の翻訳
function translateCharacterNames() {
  const nameSpans = document.querySelectorAll(".result .right span");

  nameSpans.forEach(span => {
    const original = span.textContent.trim();
    const translated = translateText(original);
    if (original !== translated) {
      span.textContent = translated;
    }
  });
}

// ソートテキストなどの翻訳
function translateSortTexts() {
  const sortTextElems = document.querySelectorAll(".left.sort.text, .right.sort.text");

  sortTextElems.forEach(el => {
    const original = el.textContent.trim();
    const translated = translateText(original);
    
    if (original !== translated) {
      // innerTextではなくtextContentの置換にとどめて、構造やスタイルを保持
      el.textContent = translated;

      // displayやtext-alignが崩れたとき用の補正（CSSが効かない場合に備えて）
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.height = '100%'; // 親要素の高さを活かす
    }
  });
}

// 全体を翻訳
function translateAll() {
  translateCharacterNames();
  translateSortTexts();
}

// DOMの変化を監視して翻訳を再適用
const observer = new MutationObserver(() => {
  translateAll();
});

observer.observe(document.body, { childList: true, subtree: true });

// 初回読み込み時
window.addEventListener('load', () => {
  translateAll();
});

