// questions2.js
// 생식생리 1~42번
// answer는 0부터 시작합니다. 예: 0 = 1번, 4 = 5번

window.questionBanks = window.questionBanks || [];

window.questionBanks.push({
  id: "reproductive-physiology",
  title: "생식생리",
  questions: [
    {
      id: "reproductive-q1",
      number: 1,
      question:
        "남성생식기(male reproductive organ)에 대한 설명으로 옳은 것은?\n\n" +
        "가. 정세관 사이의 사이질세포에서는 테스토스테론(testosterone)을 생성한다.\n" +
        "나. 정자는 인체에서 유일한 편모세포이다.\n" +
        "다. 정낭, 전립샘 및 망울요도샘(요도구선)은 정액의 성분을 분비하는 곳이다.\n" +
        "라. 부고환은 음낭 내에 위치하며, 정액을 생산한다.",
      choices: [
        "라",
        "가, 다",
        "가, 나, 다, 라",
        "가, 나, 다",
        "나, 라"
      ],
      answer: 3,
      explanation:
        "가 O: 정세관 사이의 사이질세포(라이디히세포)가 테스토스테론을 생성합니다.\n" +
        "나 O: 정자는 인체의 대표적인 편모세포입니다.\n" +
        "다 O: 정낭·전립샘·망울요도샘은 정액을 이루는 분비물을 내보냅니다.\n" +
        "라 X: 부고환은 음낭 안에 있지만 정액을 생산하지 않습니다. 정자의 성숙과 저장을 담당합니다."
    },
    {
      id: "reproductive-q2",
      number: 2,
      question: "남성 생식기의 설명으로 옳지 않은 것은?",
      choices: [
        "정관은 정자를 요도에서 사정관으로 운반한다",
        "사정관은 정자를 요도로 운반한다",
        "부고환은 정자를 고환에서 정관으로 운반한다",
        "요도는 정액을 체외로 운반한다",
        "고환은 음낭 내에 위치하며 정자 및 테스토스테론을 생성한다"
      ],
      answer: 0,
      explanation:
        "정관은 정자를 부고환에서 사정관 쪽으로 운반합니다. 요도에서 정관으로 운반하는 것이 아니므로 1번 설명이 틀렸습니다."
    },
    {
      id: "reproductive-q3",
      number: 3,
      question:
        "정세관(seminiferous tubule) 내에 존재하여 정자생산세포의 지주와 영양, 포식작용을 담당하는 세포는?",
      choices: [
        "정모세포",
        "정조세포",
        "버팀세포(지지세포, Sertoli cell)",
        "사이질세포(간질세포)",
        "별세포(성상세포)"
      ],
      answer: 2,
      explanation:
        "버팀세포(지지세포, Sertoli cell)는 정세관 안에서 정자 생성세포를 지지하고 영양을 공급하며, 포식작용도 담당합니다."
    },
    {
      id: "reproductive-q4",
      number: 4,
      question:
        "방광의 바로 아래쪽에 있는 밤톨처럼 생긴 생식기관으로서, 요도와 사정관이 관통하는 곳은?",
      choices: [
        "부고환",
        "망울요도샘",
        "전립샘",
        "내요도구(속요도구멍)",
        "정낭"
      ],
      answer: 2,
      explanation:
        "전립샘은 방광 바로 아래에 있으며 요도와 사정관이 통과합니다."
    },
    {
      id: "reproductive-q5",
      number: 5,
      question: "음낭(scrotum)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "고환과 부고환 및 정관의 일부를 싸는 주머니이다",
        "음낭사이막(음낭중격)에 해당하는 표면의 피부를 음낭솔기(음낭봉선)라고 한다",
        "음낭의 피부는 얇고 피하조직에는 피하지방이 없다",
        "정액의 통로 역할을 하며 동시에 오줌의 배출구 역할을 수행한다",
        "표면에는 가늘고 많은 주름이 있고, 굵고 뻣뻣한 음모가 나 있다"
      ],
      answer: 3,
      explanation:
        "음낭은 고환을 보호하고 온도를 조절하는 주머니입니다. 정액과 오줌의 통로 역할은 음낭이 아니라 요도가 합니다."
    },
    {
      id: "reproductive-q6",
      number: 6,
      question:
        "고환(정소, testis)에 대한 설명으로 옳은 것은?\n\n" +
        "가. 무게 약 12g의 납작한 타원형의 기관으로 정자를 생산한다.\n" +
        "나. 발생학적으로 복강 뒤벽(후복벽) 부근에서 발생하여 음낭으로 하강한다.\n" +
        "다. 남성의 복강 밖 음낭(scrotum) 내에 한 쌍이 위치한다.\n" +
        "라. 백막의 일부인 고환사이막에 의하여 고환소엽으로 구획된다.",
      choices: [
        "가, 나, 다",
        "나, 라",
        "가, 다",
        "가, 나, 다, 라",
        "라"
      ],
      answer: 3,
      explanation:
        "고환은 정자를 만들고, 발생 과정에서 복강 뒤쪽에서 음낭으로 내려옵니다. 음낭 안에 한 쌍이 있으며, 백막이 고환을 여러 소엽으로 나눕니다."
    },
    {
      id: "reproductive-q7",
      number: 7,
      question: "고환(testis)의 구조에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "정세관은 구불정세관으로 시작되어 곧은정세관이 된다",
        "고환소엽에는 1~4개의 정세관이 있다",
        "실질은 250여 개의 고환소엽으로 구분된다",
        "고환은 방광에서부터 소변을 몸 밖으로 배출하는 얇은 관이다",
        "고환(testis)은 정자(sperm)와 남성 호르몬을 생산한다"
      ],
      answer: 3,
      explanation:
        "4번 설명은 요도에 해당합니다. 요도는 방광에서 소변을 몸 밖으로 내보내는 관이고, 고환은 정자와 남성 호르몬을 생성합니다."
    },
    {
      id: "reproductive-q8",
      number: 8,
      question:
        "질입구 양쪽에 있는 완두콩 모양의 점액분비샘으로, 성교 시 점액을 분비하여 윤활작용을 하는 기관은?",
      choices: [
        "큰질어귀샘(대전정선)",
        "자궁내막",
        "대음순",
        "난소",
        "난관"
      ],
      answer: 0,
      explanation:
        "큰질어귀샘(대전정선)은 질 입구 양쪽에 있으며, 성교 시 점액을 분비해 윤활을 돕습니다."
    },
    {
      id: "reproductive-q9",
      number: 9,
      question:
        "정자를 정낭으로 내보내는 가늘고 긴 관이며, 남성생식기관에서 반영구 불임 수술의 대상이 되는 기관은?",
      choices: ["정관", "요도", "부고환", "음낭", "고환"],
      answer: 0,
      explanation:
        "정관은 부고환에서 정자를 사정관 쪽으로 운반하며, 정관수술의 대상이 되는 관입니다."
    },
    {
      id: "reproductive-q10",
      number: 10,
      question:
        "고환(testis)의 사이질세포(Leydig cell)에서 분비되는 대표적인 남성 호르몬은?",
      choices: [
        "estrogen",
        "inhibin",
        "prostaglandin",
        "testosterone",
        "progesterone"
      ],
      answer: 3,
      explanation:
        "테스토스테론(testosterone)은 고환의 사이질세포(라이디히세포)에서 분비되는 대표적인 남성 호르몬입니다."
    },
    {
      id: "reproductive-q11",
      number: 11,
      question:
        "정액(semen)이 생성되는 남성생식기계의 부속샘은?\n\n" +
        "가. 전립샘\n나. 정낭\n다. 망울요도샘(요도구선)\n라. 고환",
      choices: [
        "가, 다",
        "라",
        "가, 나, 다",
        "가, 나, 다, 라",
        "나, 라"
      ],
      answer: 2,
      explanation:
        "전립샘·정낭·망울요도샘은 정액을 구성하는 분비물을 내는 부속샘입니다. 고환은 정자를 만드는 생식샘이므로 부속샘에 포함되지 않습니다."
    },
    {
      id: "reproductive-q12",
      number: 12,
      question:
        "고환의 버팀세포(지지세포, supporting cell)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "원주상의 세포이다",
        "포식작용을 한다",
        "남성호르몬을 분비한다",
        "정자발생세포를 돕는다",
        "Sertoli’s cell이라고도 한다"
      ],
      answer: 2,
      explanation:
        "버팀세포(Sertoli cell)는 정자발생을 돕고 포식작용을 하지만, 남성호르몬인 테스토스테론은 주로 사이질세포(라이디히세포)가 분비합니다."
    },
    {
      id: "reproductive-q13",
      number: 13,
      question:
        "고환에서 생산된 정자가 저장되고 성숙되어 운동능력과 난자와 수정할 수 있는 능력을 획득하는 곳은?",
      choices: ["전립샘", "부고환", "정관", "요도", "음낭"],
      answer: 1,
      explanation:
        "정자는 부고환에서 저장·성숙하며 운동능력과 수정능력을 얻습니다."
    },
    {
      id: "reproductive-q14",
      number: 14,
      question:
        "전립샘(prostate gland)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "전립샘의 중앙으로 요도가 통과한다",
        "알칼리성 분비물을 분비한다",
        "소변으로부터 정자를 보호하는 분비물을 분비한다",
        "정자의 운동을 촉진시키는 분비물을 분비한다",
        "고환에서 생성된 정자를 정낭으로 보내는 가늘고 긴 관이다"
      ],
      answer: 4,
      explanation:
        "5번 설명은 전립샘이 아니라 정관을 가리킵니다. 정관은 정자를 부고환에서 사정관 쪽으로 운반하는 가늘고 긴 관입니다."
    },
    {
      id: "reproductive-q15",
      number: 15,
      question:
        "음경(penis)의 구조와 관계에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "음경해면체는 발기장치로서 내부에는 음경심동맥이 뻗어 있다",
        "음경의 주된 기능은 발기를 통한 정자의 방출과 소변을 배출하는 것이다",
        "1개의 요도해면체와 1개의 음경해면체로 구성되어 있다",
        "귀두는 포피(음경꺼풀)로 덮여 있고, 포경수술을 통해 제거할 수 있다",
        "오줌과 정액을 방출하는 요도를 감싸고 있는 남성의 생식기이다"
      ],
      answer: 2,
      explanation:
        "음경은 음경해면체 2개와 요도해면체 1개로 이루어져 있으므로, 음경해면체가 1개라는 설명이 틀렸습니다."
    },
    {
      id: "reproductive-q16",
      number: 16,
      question:
        "남성의 음경(penis)과 상동기관(homologous organ)으로 여성이 성적 흥분 시 발기(erection)하는 조직은?",
      choices: [
        "음핵(clitoris)",
        "대음순(labia majora)",
        "소음순(labia minora)",
        "난소(ovary)",
        "질(vagina)"
      ],
      answer: 0,
      explanation:
        "음핵은 남성의 음경과 상동기관이며, 성적 흥분 시 발기합니다."
    },
    {
      id: "reproductive-q17",
      number: 17,
      question:
        "황체에서 progesterone이 분비되어 자궁내막이 착상에 가장 적합하게 되는 시기로 옳은 것은?",
      choices: ["분비기", "월경 직후", "월경 전기", "월경기", "증식기"],
      answer: 0,
      explanation:
        "황체에서 분비되는 프로게스테론의 영향으로 자궁내막이 두꺼워지고 착상에 적합한 상태가 됩니다."
    },
    {
      id: "reproductive-q18",
      number: 18,
      question: "에스트로겐(estrogen)의 작용으로 옳지 않은 것은?",
      choices: [
        "난자 생성 촉진",
        "자궁, 질, 외음부 발육",
        "여성의 2차성징 발현",
        "자궁경부에서 알칼리성 점액 분비에 관여",
        "수정란의 착상과 출산에 필요한 생식기관 변화를 돕는다"
      ],
      answer: 0,
      explanation:
        "에스트로겐은 여성 생식기관의 발달과 2차 성징 등에 관여하지만, 난자 생성을 직접 촉진하는 호르몬은 아닙니다."
    },
    {
      id: "reproductive-q19",
      number: 19,
      question: "정액(semen)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "윤활작용을 하여 정자의 이동이 용이하도록 돕는다",
        "유전정보를 담은 정자를 보호하기 위하여 생성되는 액상 물질이다",
        "여성생식기의 산도를 약화시켜 정자 생존가능성을 높인다",
        "정액은 남성의 생식세포로 난자와의 수정을 통하여 수정란을 만든다",
        "비중 1.028, pH 7.35~7.50 정도이며, 유백색의 특유한 냄새가 난다"
      ],
      answer: 3,
      explanation:
        "정액은 정자와 부속샘 분비물이 섞인 액체이며, 난자와 수정하는 것은 정자입니다. 정액 자체가 수정란을 만드는 것은 아닙니다."
    },
    {
      id: "reproductive-q20",
      number: 20,
      question: "정상적으로 착상(implantation)이 일어나는 곳은?",
      choices: [
        "질(vagina)",
        "난관(자궁관, oviduct)",
        "자궁벽(uterine wall)",
        "난관채(fimbria)",
        "자궁경(자궁목, uterine cervix)"
      ],
      answer: 2,
      explanation:
        "수정란은 자궁 안쪽의 자궁내막에 착상합니다."
    },
    {
      id: "reproductive-q21",
      number: 21,
      question:
        "난소(ovary)의 역할로 옳은 것은?\n\n" +
        "가. 배란\n나. Estrogen 분비\n다. Progesterone 분비\n" +
        "라. 난포자극호르몬(FSH) 분비",
      choices: ["나, 라", "가, 나, 다, 라", "가, 다", "라", "가, 나, 다"],
      answer: 4,
      explanation:
        "난소는 배란하고 에스트로겐과 프로게스테론을 분비합니다. FSH(난포자극호르몬)는 뇌하수체 전엽에서 분비되므로 난소의 역할이 아닙니다."
    },
    {
      id: "reproductive-q22",
      number: 22,
      question: "난포(ovarian follicle)의 발달 순서로 옳은 것은?",
      choices: [
        "원시난포 → 성숙난포 → 황체 → 백체",
        "원시난포 → 백체 → 황체 → 성숙난포",
        "성숙난포 → 황체 → 백체 → 원시난포",
        "원시난포 → 황체 → 백체 → 성숙난포",
        "백체 → 원시난포 → 성숙난포 → 황체"
      ],
      answer: 0,
      explanation:
        "배란 후 남은 난포가 황체가 되고, 임신이 되지 않으면 백체로 퇴화합니다."
    },
    {
      id: "reproductive-q23",
      number: 23,
      question:
        "여성 생식기관 중 난관(자궁관, fallopian tube)의 역할은?\n\n" +
        "가. 배란\n나. 수정\n다. 호르몬 분비\n라. 난자 이송",
      choices: [
        "가, 다",
        "가, 나, 다, 라",
        "가, 나, 다",
        "라",
        "나, 라"
      ],
      answer: 4,
      explanation:
        "난관은 수정이 주로 일어나는 곳이며 난자를 자궁 쪽으로 이동시킵니다. 배란과 호르몬 분비는 난소의 기능입니다."
    },
    {
      id: "reproductive-q24",
      number: 24,
      question: "난소(ovary)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "난소는 난자를 자궁으로 운반하는 1개의 길쭉한 관이다",
        "난소간막(mesovarium)에 의해 넓은인대와 연결된다",
        "난자 생산 및 에스트로겐, 프로게스테론과 같은 성호르몬을 분비한다",
        "난소는 자궁의 좌우에 각각 1개씩 있는 배란을 유발하는 생식샘이다",
        "무게 4~8g인 난원형의 실질장기로 골반 양쪽에 1개씩 있다"
      ],
      answer: 0,
      explanation:
        "난자를 자궁으로 운반하는 길쭉한 관은 난소가 아니라 난관입니다. 난소는 난자를 만들고 여성호르몬을 분비합니다."
    },
    {
      id: "reproductive-q25",
      number: 25,
      question:
        "자궁 양쪽으로 뻗어 난소 가까이에 위치하는 한 쌍의 가늘고 긴 관이며, 여기서 수정이 이루어지고 수정란을 자궁으로 이동시키는 역할을 하는 곳은?",
      choices: ["난관", "망울요도샘", "질", "요도", "정관"],
      answer: 0,
      explanation:
        "난관은 난소 가까이에 위치하며, 수정이 주로 일어나고 수정란을 자궁 쪽으로 이동시킵니다."
    },
    {
      id: "reproductive-q26",
      number: 26,
      question:
        "여성의 질과 자궁경관을 통해 세균이 침입하여 발생하는 골반염증질환(pelvic inflammatory disease: PID)으로 초래되는 주된 현상은?\n\n" +
        "가. 무월경(amenorrhea)\n" +
        "나. 자궁외임신(ectopic pregnancy)\n" +
        "다. 월경과소(hypomenorrhea)\n" +
        "라. 불임(infertility)",
      choices: ["가, 나", "나, 라", "라", "가, 나, 다", "가, 나, 다, 라"],
      answer: 1,
      explanation:
        "골반염은 난관에 흉터나 손상을 남겨 수정란의 이동을 방해하고, 자궁외임신과 불임 위험을 높일 수 있습니다."
    },
    {
      id: "reproductive-q27",
      number: 27,
      question:
        "자궁의 위치가 앞방향경사(전경, anteversion) 상태가 유지되도록 돕는 인대는?",
      choices: [
        "원인대(round lig.)",
        "난소인대(ovarian lig.)",
        "자궁엉치인대(자궁천골인대, uterosacral lig.)",
        "황색인대(yellow lig.)",
        "넓은인대(광인대, broad lig.)"
      ],
      answer: 0,
      explanation:
        "원인대는 자궁이 앞쪽으로 기울어진 위치(전경)를 유지하도록 돕습니다."
    },
    {
      id: "reproductive-q28",
      number: 28,
      question:
        "난관(자궁관)의 외측 2/3의 넓은 부분으로 정자와 난자의 수정부위는?",
      choices: [
        "자궁목(자궁경부)",
        "자궁내막",
        "팽대부",
        "잘록(협부)",
        "깔때기(누두부)"
      ],
      answer: 2,
      explanation:
        "난관의 바깥쪽 약 2/3에 해당하는 팽대부에서 수정이 주로 일어납니다."
    },
    {
      id: "reproductive-q29",
      number: 29,
      question:
        "여성의 월경이 시작하는 첫날을 자궁주기의 첫째 날로 잡을 때, 자궁내막주기(월경주기)의 기간별 순서가 옳은 것은?",
      choices: [
        "분비기 - 증식기 - 월경 전기 - 월경기",
        "월경 전기 - 증식기 - 분비기 - 월경기",
        "증식기 - 분비기 - 월경기 - 월경 후기",
        "월경기 - 분비기 - 증식기 - 월경 전기",
        "월경기 - 증식기 - 분비기 - 월경 전기"
      ],
      answer: 4,
      explanation:
        "월경 첫날부터 월경기가 시작되고, 이어 자궁내막이 재생·증식한 뒤 분비기를 거쳐 다음 월경을 준비합니다."
    },
    {
      id: "reproductive-q30",
      number: 30,
      question:
        "임질균(Neisseria gonorrhoeae) 감염으로 가장 손상받기 쉬운 여성 생식기는?",
      choices: [
        "자궁목(자궁경부)",
        "질",
        "난관",
        "자궁체부(자궁몸통)",
        "난소"
      ],
      answer: 0,
      explanation:
        "임균은 자궁경부의 원주상피에 잘 감염되어 여성 생식기 중 자궁목이 특히 취약합니다."
    },
    {
      id: "reproductive-q31",
      number: 31,
      question:
        "여성에서 황체를 자극하여 에스트로겐(estrogen)의 분비를 촉진하고 배란을 유발하는 호르몬은?",
      choices: [
        "에스트로겐(estrogen)",
        "황체형성호르몬(LH)",
        "난포자극호르몬(FSH)",
        "테스토스테론(testosterone)",
        "프로게스테론(progesterone)"
      ],
      answer: 1,
      explanation:
        "LH가 급증하면 배란이 유발되고, 난포가 황체로 바뀌도록 자극합니다."
    },
    {
      id: "reproductive-q32",
      number: 32,
      question:
        "여성의 생식기관에서 영구피임 시술의 부위로 적용되는 것은?",
      choices: [
        "음핵절제술",
        "난관결찰술",
        "자궁적출술",
        "질절제술",
        "난소절제술"
      ],
      answer: 1,
      explanation:
        "난관을 묶거나 절단해 난자와 정자가 만나지 못하게 하는 영구피임 시술입니다."
    },
    {
      id: "reproductive-q33",
      number: 33,
      question:
        "월경 전 비후되고 충혈되었다가 월경 시 출혈, 박리되는 자궁내막 층은?\n\n" +
        "가. 기능층(functional layer)\n" +
        "나. 치밀층(compact layer)\n" +
        "다. 해면층(spongy layer)\n" +
        "라. 바닥층(기저층, basal layer)",
      choices: ["가, 나, 다", "가, 다", "나, 라", "가, 나, 다, 라", "라"],
      answer: 0,
      explanation:
        "월경 때 자궁내막의 기능층이 탈락하며, 기저층은 남아 새 내막을 재생합니다."
    },
    {
      id: "reproductive-q34",
      number: 34,
      question:
        "월경 주기(menstrual cycle)가 28일 경우 배란(ovulation)이 일어나는 시기는?",
      choices: ["14일경", "7일경", "25일경", "3일경", "20일경"],
      answer: 0,
      explanation:
        "28일 주기에서는 보통 월경 시작일을 1일째로 세어 약 14일째에 배란이 일어납니다."
    },
    {
      id: "reproductive-q35",
      number: 35,
      question: "생식기관의 구조와 기능의 연결이 옳은 것은?",
      choices: [
        "황체: 에스트로겐과 프로게스테론의 합성",
        "부고환: 테스토스테론의 합성",
        "대음순: 음모가 없는 피부융기로 음핵이 있음",
        "정낭: 정자를 저장하여 성숙시킴",
        "자궁내막: 수정이 일어나는 장소"
      ],
      answer: 0,
      explanation:
        "배란 후 형성된 황체는 주로 프로게스테론을, 그리고 에스트로겐도 분비합니다."
    },
    {
      id: "reproductive-q36",
      number: 36,
      question:
        "월경기(menstrual phase)의 호르몬 분비 상태에 대한 설명으로 옳은 것은?\n\n" +
        "가. 황체형성호르몬(LH) 분비가 최고에 이른다.\n" +
        "나. 배란 후 약 14일경에 시작하여 3~5일간 지속된다.\n" +
        "다. 난포자극호르몬(FSH) 분비가 최고치에 이른다.\n" +
        "라. estrogen과 progesterone 분비가 감소된다.",
      choices: [
        "나, 라",
        "가, 다",
        "라",
        "가, 나, 다",
        "가, 나, 다, 라"
      ],
      answer: 0,
      explanation:
        "월경은 배란 후 약 14일쯤 시작해 보통 3~5일 지속되며, 월경기에는 에스트로겐과 프로게스테론 분비가 낮아집니다. LH는 배란 직전에 최고치에 이르므로 가는 틀립니다."
    },
    {
      id: "reproductive-q37",
      number: 37,
      question:
        "기초체온이 올라가고, 배란에 적당한 자궁내막이 분비기(secretory phase)일 때 가장 많이 분비되는 호르몬은?",
      choices: [
        "progesterone",
        "황체형성호르몬(LH)",
        "난포자극호르몬(FSH)",
        "estrogen",
        "testosterone"
      ],
      answer: 0,
      explanation:
        "배란 후 황체에서 많이 분비되어 기초체온을 높이고 자궁내막을 착상에 적합하게 유지합니다."
    },
    {
      id: "reproductive-q38",
      number: 38,
      question:
        "황체에서 분비되는 호르몬으로서, 임신유지, 착상, 배란억제에 관여하는 것은?",
      choices: [
        "estrogen",
        "progesterone",
        "aldosterone",
        "androgen",
        "testosterone"
      ],
      answer: 1,
      explanation:
        "황체에서 분비되어 자궁내막을 유지하고 착상과 임신 유지에 도움을 주며, 배란을 억제합니다."
    },
    {
      id: "reproductive-q39",
      number: 39,
      question:
        "남성호르몬(testosterone)을 분비하는 세포는 어느 것인가?",
      choices: [
        "정자세포",
        "버팀세포(지주세포)",
        "정조세포",
        "사이질세포(간질세포)",
        "정모세포"
      ],
      answer: 3,
      explanation:
        "고환의 사이질세포가 테스토스테론을 분비합니다."
    },
    {
      id: "reproductive-q40",
      number: 40,
      question:
        "남성 고환의 버팀세포(지주세포, supporting cell)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "포식작용도 있다",
        "원주상의 세포로 지주세포라고도 한다",
        "Sertoli’s cell이라고도 한다",
        "정자발생세포를 돕는다",
        "남성호르몬을 분비한다"
      ],
      answer: 4,
      explanation:
        "버팀세포(Sertoli cell)는 정자발생을 돕고 포식작용을 하지만, 테스토스테론 같은 남성호르몬은 사이질세포(Leydig cell)가 분비합니다."
    },
    {
      id: "reproductive-q41",
      number: 41,
      question:
        "방광 바로 밑에 있는 남성생식기관으로 정액의 성분 중 특이 냄새가 나는 우유빛 액체를 만들어 내는 곳은?",
      choices: [
        "정낭",
        "망울요도샘(요도구선)",
        "전립샘",
        "정관",
        "부고환"
      ],
      answer: 2,
      explanation:
        "방광 바로 아래에 있으며, 정액의 일부를 이루는 유백색 분비물을 만들어 냅니다."
    },
    {
      id: "reproductive-q42",
      number: 42,
      question:
        "발생과정에서 태아를 싸고 있는 가장 바깥쪽 영양막세포로 이루어진 4번째 막으로 옳은 것은?",
      choices: ["태반", "요막", "융모막", "난황주머니", "양막"],
      answer: 2,
      explanation:
        "융모막은 태아를 둘러싸는 가장 바깥쪽 배외막이며, 태반 형성에도 참여합니다."
    },
  {
      id: "reproductive-q43",
      number: 43,
      question: "태반 만출 후 자궁수축이 지속되어야 하는 이유는?",
      choices: [
        "난포 성장",
        "태아 산소공급",
        "수정능 획득",
        "태반 부착부 혈관 압박으로 출혈 감소",
        "젖당 합성"
      ],
      answer: 3,
      explanation:
        "태반이 자궁벽에서 떨어져 만출된 후 자궁근층이 지속적으로 강하게 수축해야 태반 부착부의 모체 혈관(나선동맥 등)을 물리적으로 압박·폐쇄하여 산후 과다출혈을 줄일 수 있습니다."
    },
    {
      id: "reproductive-q44",
      number: 44,
      question: "모유 생성에 직접 관여하는 호르몬은?",
      choices: [
        "Inhibin B",
        "옥시토신",
        "LH",
        "프로락틴",
        "FSH"
      ],
      answer: 3,
      explanation:
        "뇌하수체 전엽에서 분비되는 프로락틴(Prolactin)은 유선 세포를 자극하여 모유(유즙)의 생성과 합성을 직접 촉진합니다. 옥시토신은 생성된 모유를 배출하는 사유 반사에 관여합니다."
    },
    {
      id: "reproductive-q45",
      number: 45,
      question: "젖 빨기 자극 후 젖 배출 반사로 옳은 것은?",
      choices: [
        "프로게스테론이 젖 배출",
        "Inhibin B가 젖 배출",
        "FSH가 젖 배출",
        "LH가 유두 수축",
        "옥시토신이 근상피세포 수축"
      ],
      answer: 4,
      explanation:
        "아기가 젖을 빨면 뇌하수체 후엽에서 옥시토신이 분비되어 유선 꽈리를 둘러싼 근상피세포(myoepithelial cell)를 수축시킴으로써 유관으로 모유를 밀어냅니다."
    },
    {
      id: "reproductive-q46",
      number: 46,
      question: "출생 직후 신생아의 정상 순환 적응으로 옳은 것은?",
      choices: [
        "폐호흡 중단",
        "폐혈관 저항 감소와 폐혈류 증가",
        "동맥관 혈류 지속 증가",
        "폐혈관 저항 증가",
        "태반 혈류 증가"
      ],
      answer: 1,
      explanation:
        "출생 직후 신생아가 폐호흡을 시작하면 폐포가 확장되고 혈중 산소 분압이 상승하여 폐혈관이 확장되므로, 폐혈관 저항이 크게 감소하고 폐혈류가 급격히 증가합니다."
    },
    {
      id: "reproductive-q47",
      number: 47,
      question: "모유의 감염 방어 효과와 관련된 성분은?",
      choices: [
        "LH",
        "분비형 IgA",
        "FSH",
        "테스토스테론",
        "hCG"
      ],
      answer: 1,
      explanation:
        "모유(특히 초유)에 풍부한 분비형 IgA(secretory IgA)는 신생아의 위장관과 호흡기 점막 표면에 결합해 병원체의 침입을 차단함으로써 감염 방어 효과를 제공합니다."
    },
    {
      id: "reproductive-q48",
      number: 48,
      question: "테스토스테론 분비를 직접 촉진하는 호르몬은?",
      choices: [
        "프로락틴",
        "옥시토신",
        "FSH",
        "Inhibin B",
        "LH"
      ],
      answer: 4,
      explanation:
        "뇌하수체 전엽의 황체형성호르몬(LH)은 정소의 사이질세포(라이디히세포, Leydig cell)에 직접 작용하여 테스토스테론 합성과 분비를 촉진합니다."
    },
    {
      id: "reproductive-q49",
      number: 49,
      question: "테스토스테론 증가 시 음성되먹임으로 나타나는 변화는?",
      choices: [
        "GnRH·LH 감소",
        "FSH 급증",
        "옥시토신 증가",
        "hCG 증가",
        "GnRH·LH 증가"
      ],
      answer: 0,
      explanation:
        "혈중 테스토스테론 농도가 증가하면 시상하부와 뇌하수체 전엽에 음성되먹임으로 작용하여 GnRH와 LH 분비를 감소시킵니다."
    },
    {
      id: "reproductive-q50",
      number: 50,
      question: "Inhibin B의 주요 기능은?",
      choices: [
        "GnRH 촉진",
        "사정 유발",
        "LH 촉진",
        "FSH 억제",
        "발기 유발"
      ],
      answer: 3,
      explanation:
        "Inhibin B는 정소의 세르톨리세포와 난소의 과립막세포에서 분비되어 뇌하수체 전엽의 FSH 분비를 선택적으로 억제합니다."
    },
    {
      id: "reproductive-q51",
      number: 51,
      question: "정자 형성을 위한 호르몬 작용으로 옳은 것은?",
      choices: [
        "테스토스테론 불필요",
        "LH가 Sertoli 자극",
        "GnRH가 정세관 직접 자극",
        "FSH만 필요",
        "FSH와 고환 내 테스토스테론 모두 중요"
      ],
      answer: 4,
      explanation:
        "정상적인 정자 형성을 위해서는 세르톨리세포를 자극하는 FSH와 라이디히세포에서 분비되는 고환 내 고농도 테스토스테론이 모두 중요하게 작용합니다."
    },
    {
      id: "reproductive-q52",
      number: 52,
      question: "발기의 핵심 생리 기전은?",
      choices: [
        "동맥 수축",
        "정맥 유출 증가",
        "교감신경성 수축",
        "NO 감소",
        "NO-cGMP에 의한 해면체 이완"
      ],
      answer: 4,
      explanation:
        "성적 자극 시 부교감신경과 내피세포에서 분비된 산화질소(NO)가 cGMP 농도를 높여 음경 해면체와 소동맥의 평활근을 이완시킴으로써 혈액이 유입되어 발기가 일어납니다."
    },
    {
      id: "reproductive-q53",
      number: 53,
      question: "사정의 방출(emission)에 대한 설명으로 옳은 것은?",
      choices: [
        "부교감신경만 골반저근 수축",
        "옥시토신만 작용",
        "Sertoli 세포 수축",
        "교감신경이 정관·부속샘 수축 유도",
        "FSH가 요도 수축"
      ],
      answer: 3,
      explanation:
        "사정의 첫 단계인 방출(emission)은 교감신경의 흥분으로 부고환, 정관 및 부속샘(정낭, 전립샘 등)의 평활근이 수축하여 정자와 정장액을 전립샘 요도로 이동시키는 과정입니다."
    },
    {
      id: "reproductive-q54",
      number: 54,
      question: "정액의 체외 배출(expulsion)에 주로 관여하는 것은?",
      choices: [
        "GnRH 자극",
        "Inhibin B 자극",
        "LH 자극",
        "FSH 자극",
        "음부신경에 의한 골반저근 수축"
      ],
      answer: 4,
      explanation:
        "사정의 두 번째 단계인 체외 배출(사출, expulsion)은 체성신경인 음부신경의 지배를 받는 골반저근(망울해면체근 등)의 율동적인 수축에 의해 일어납니다."
    },
    {
      id: "reproductive-q55",
      number: 55,
      question: "정자의 수정능 획득(capacitation)에 관한 설명으로 옳은 것은?",
      choices: [
        "염색체 46개로 증가",
        "꼬리 소실",
        "감수분열 재개",
        "접합자 난할 시작",
        "여성 생식관에서 정자막 변화"
      ],
      answer: 4,
      explanation:
        "수정능 획득은 정자가 여성 생식관(자궁 및 난관)을 이동하는 동안 정자머리 표면의 당단백질 외피와 콜레스테롤이 제거되는 정자막 변화를 거쳐 첨체 반응과 수정이 가능해지는 과정입니다."
    },
    {
      id: "reproductive-q56",
      number: 56,
      question: "태아기의 1차 난모세포는 어느 단계에서 정지하는가?",
      choices: [
        "감수분열 I 전기",
        "감수분열 I 완료",
        "감수분열 II 중기",
        "감수분열 II 완료",
        "유사분열 중기"
      ],
      answer: 0,
      explanation:
        "태아기에 형성된 1차 난모세포는 제1감수분열을 시작해 감수분열 I 전기(prophase I) 상태에서 정지한 채 사춘기 배란 직전까지 머뭅니다."
    },
    {
      id: "reproductive-q57",
      number: 57,
      question: "원시난포의 구성으로 옳은 것은?",
      choices: [
        "성숙난자와 태반",
        "2차 난모세포와 황체",
        "큰 난포강과 여러 세포층",
        "난원세포만",
        "1차 난모세포와 편평한 난포세포 한 층"
      ],
      answer: 4,
      explanation:
        "원시난포(primordial follicle)는 감수분열 I 전기에 정지한 1차 난모세포를 편평한(납작한) 단층 난포세포가 둘러싸고 있는 초기 난포입니다."
    },
    {
      id: "reproductive-q58",
      number: 58,
      question: "배란 직전 1차 난모세포에서 일어나는 변화는?",
      choices: [
        "감수분열 I 완료와 제1극체 형성",
        "유사분열",
        "접합자 형성",
        "염색체 92개 형성",
        "감수분열 II 완료"
      ],
      answer: 0,
      explanation:
        "배란 직전 LH 급증의 자극을 받은 1차 난모세포는 감수분열 I을 완료하여 2차 난모세포와 제1극체를 형성합니다."
    },
    {
      id: "reproductive-q59",
      number: 59,
      question: "배란 시 방출되는 세포의 상태는?",
      choices: [
        "완전 성숙 난자",
        "감수분열 II 중기 정지 2차 난모세포",
        "1차 난모세포",
        "난원세포",
        "접합자"
      ],
      answer: 1,
      explanation:
        "배란 시 난소에서 방출되는 세포는 감수분열 I을 마친 뒤 감수분열 II 중기에서 정지해 있는 2차 난모세포 상태입니다."
    },
    {
      id: "reproductive-q60",
      number: 60,
      question: "배란을 직접 유발하는 주요 호르몬 변화는?",
      choices: [
        "옥시토신 급증",
        "프로게스테론 소실",
        "hCG 급증",
        "프로락틴 급증",
        "LH 급증"
      ],
      answer: 4,
      explanation:
        "난포기 말기 고농도 에스트로겐의 양성되먹임으로 유발되는 LH 급증(LH surge)이 성숙난포의 파열과 배란을 직접 일으킵니다."
    },
    {
      id: "reproductive-q61",
      number: 61,
      question: "배란 직전 지속적 고농도 에스트라디올의 효과는?",
      choices: [
        "LH 영구 억제",
        "양성되먹임으로 LH 급증",
        "황체 즉시 퇴화",
        "월경 즉시 시작",
        "FSH 완전 소실"
      ],
      answer: 1,
      explanation:
        "배란 직전 성숙난포에서 분비되는 고농도의 에스트라디올이 일정 시간 지속되면 시상하부와 뇌하수체 전엽에 양성되먹임으로 전환되어 LH 급증을 유발합니다."
    }
  ]
});