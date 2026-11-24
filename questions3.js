// questions3.js — 내분비생리 1~35번
// answer는 0부터 시작합니다. 예: 1번 정답 = 0

(() => {
  window.questionBanks = window.questionBanks || [];

  window.questionBanks.push({
    id: "endocrine-physiology",
    title: "내분비생리",
    questions: [
      {
        id: "endocrine-001",
        number: 1,
        question:
          "호르몬(hormone)에 대한 설명으로 옳은 것은?\n\n" +
          "가. 반응하는 정해진 표적세포(target cell)를 갖는다.\n" +
          "나. 표적세포들은 각각의 호르몬과 결합하는 특정 수용기(receptor)를 가진다.\n" +
          "다. 대부분의 내분비 조절축에서는 음성되먹임기전으로 분비가 조절된다.\n" +
          "라. 내분비샘은 도관(duct)이 없고 혈관이 풍부하며, 호르몬은 혈액으로 운반된다.",
        choices: [
          "라",
          "나, 라",
          "가, 다",
          "가, 나, 다, 라",
          "가, 나, 다"
        ],
        answer: 3,
        explanation:
          "표적세포는 호르몬에 반응하고, 각 표적세포에는 해당 호르몬과 결합하는 수용기가 있습니다. 내분비 조절은 대부분 음성 되먹임으로 이루어지며, 내분비샘은 도관 없이 호르몬을 혈액으로 분비합니다."
      },
      {
        id: "endocrine-002",
        number: 2,
        question:
          "호르몬(hormone)의 생물학적 특성에 대한 설명으로 옳지 않은 것은?",
        choices: [
          "성호르몬, 갑상샘호르몬 외에는 경구투여 시 효소에 의해 파괴되는 경우가 많다",
          "분비량이 과다 또는 과소 시에는 생체에 유해하다",
          "미량으로 강한 효력이 강한 유효 물질이다",
          "이종 동물에 투여해도 항체가 생기지 않는 경우가 많다",
          "구조가 아주 복잡한 단백질이며 체내에서 합성되지 않는다"
        ],
        answer: 4,
        explanation:
          "호르몬은 체내에서 합성되며, 모두 단백질인 것도 아닙니다. 스테로이드 호르몬이나 아민계 호르몬도 있습니다."
      },
      {
        id: "endocrine-003",
        number: 3,
        question:
          "호르몬(hormone)의 분비 이상과 그에 따른 질병의 연결이 옳지 않은 것은?",
        choices: [
          "부갑상샘호르몬 과다: 애디슨병",
          "티록신 결핍: 점액수종",
          "코르티솔 과다: 쿠싱증후군",
          "항이뇨호르몬 결핍: 요붕증",
          "인슐린 결핍: 당뇨병"
        ],
        answer: 0,
        explanation:
          "애디슨병은 부신겉질 호르몬이 부족할 때 생깁니다. 부갑상샘호르몬 과다는 혈중 칼슘 농도를 높이는 문제와 관련됩니다."
      },
      {
        id: "endocrine-004",
        number: 4,
        question:
          "호르몬(hormone)의 주요 작용으로 옳지 않은 것은?",
        choices: [
          "근육수축과 혈액응고를 촉진한다",
          "성장과 발달을 하도록 한다",
          "전해질, 물, 영양의 균형을 유지시킨다",
          "생식 및 성 생리에 영향을 미친다",
          "세포대사 및 에너지 균형을 조절한다"
        ],
        answer: 0,
        explanation:
          "호르몬의 주요 기능에는 성장·발달, 체내 균형 유지, 생식 기능 조절, 세포 대사와 에너지 균형 조절이 포함됩니다."
      },
      {
        id: "endocrine-005",
        number: 5,
        question:
          "지용성호르몬으로 표적세포의 세포막을 직접 통과할 수 있는 스테로이드호르몬(steroid hormone)으로 옳은 것은?\n\n" +
          "가. progesterone\n" +
          "나. aldosterone\n" +
          "다. testosterone\n" +
          "라. thyroxine",
        choices: [
          "가, 다",
          "라",
          "가, 나, 다, 라",
          "나, 라",
          "가, 나, 다"
        ],
        answer: 4,
        explanation:
          "프로게스테론, 알도스테론, 테스토스테론은 스테로이드 호르몬이라 세포막을 통과할 수 있습니다. 티록신은 스테로이드 호르몬이 아닙니다."
      },
      {
        id: "endocrine-006",
        number: 6,
        question:
          "뇌하수체 앞엽(pituitary gland anterior lobe)에서 분비되는 호르몬으로 옳지 않은 것은?",
        choices: [
          "부신피질자극호르몬 (ACTH)",
          "항이뇨호르몬 (ADH)",
          "갑상샘자극호르몬 (TSH)",
          "성장호르몬 (GH)",
          "난포자극호르몬 (FSH)"
        ],
        answer: 1,
        explanation:
          "ADH는 시상하부에서 만들어져 뇌하수체 뒤엽에서 분비됩니다. 나머지는 뇌하수체 앞엽에서 분비됩니다."
      },
      {
        id: "endocrine-007",
        number: 7,
        question:
          "뇌하수체 뒤엽(후엽)에서 분비되는 호르몬들로 옳은 것은?\n\n" +
          "가. ADH\n" +
          "나. prolactin\n" +
          "다. oxytocin\n" +
          "라. calcitriol",
        choices: [
          "가, 나, 다, 라",
          "가, 나, 다",
          "라",
          "나, 라",
          "가, 다"
        ],
        answer: 4,
        explanation:
          "둘 다 뇌하수체 뒤엽에서 분비됩니다. 프로락틴은 앞엽에서 분비되고, 칼시트리올은 주로 신장에서 활성화됩니다."
      },
      {
        id: "endocrine-008",
        number: 8,
        question:
          "나비뼈(접형골, sphenoid bone)의 말안장(터어키안) 속에 들어 있는 0.5~0.6g 정도의 내분비샘은?",
        choices: [
          "췌장 (이자)",
          "부갑상샘",
          "부신",
          "뇌하수체",
          "갑상샘"
        ],
        answer: 3,
        explanation:
          "뇌하수체는 나비뼈의 말안장(터어키안)에 위치합니다."
      },
      {
        id: "endocrine-009",
        number: 9,
        question:
          "대뇌반구와 중뇌 사이에 있고, 뇌하수체(Pituitary gland)를 직접 지배하는 중추는?",
        choices: [
          "사이뇌(간뇌)",
          "대뇌",
          "소뇌",
          "숨뇌(연수)",
          "중뇌(중간뇌)"
        ],
        answer: 0,
        explanation:
          "사이뇌의 시상하부가 뇌하수체를 직접 조절합니다."
      },
      {
        id: "endocrine-010",
        number: 10,
        question:
          "아이가 젖을 빨 때 자극되어 젖샘의 젖 생산(milk production)을 촉진하는 뇌하수체앞엽의 단백성 호르몬은?",
        choices: [
          "calcitriol",
          "prolactin",
          "estrogen",
          "oxytocin",
          "growth hormone"
        ],
        answer: 1,
        explanation:
          "프로락틴은 젖샘의 젖 생산을 촉진하고, 옥시토신은 젖 분출을 돕습니다."
      },
      {
        id: "endocrine-011",
        number: 11,
        question:
          "갑상샘호르몬(thyroxine)의 생리작용에 대한 설명으로 옳지 않은 것은?",
        choices: [
          "심박동 속도와 심장 수축력을 증가시키기 때문에 혈압이 상승된다",
          "교감신경의 자극에 대한 흥분성을 증가시킨다",
          "산소 소모량과 에너지 소비 속도를 상승시키므로 체온 상승이 유발된다",
          "간의 글리코겐 합성을 촉진하므로 저혈당이 된다",
          "콜레스테롤 (cholesterol)의 담즙으로의 배출을 촉진시킨다"
        ],
        answer: 3,
        explanation:
          "갑상샘호르몬(티록신)은 간의 글리코겐 분해와 포도당 신생을 촉진하여 혈당을 상승시키므로, 글리코겐 합성을 촉진해 저혈당이 된다는 설명은 옳지 않습니다."
      },
      {
        id: "endocrine-012",
        number: 12,
        question:
          "갑상샘(thyroid gland)의 기능항진 시 일어날 수 있는 증상으로 옳은 것은?\n\n" +
          "가. 기초대사가 촉진되고 점액수종이 나타난다\n" +
          "나. 기초대사가 촉진되고 바제도우병이 나타난다\n" +
          "다. 기초대사가 촉진되고 크레틴병이 나타난다\n" +
          "라. 기초대사가 촉진되고 안구돌출성갑상샘종이 일어난다",
        choices: [
          "나, 라",
          "가, 나, 다, 라",
          "가, 다",
          "가, 나, 다",
          "라"
        ],
        answer: 0,
        explanation:
          "갑상샘 기능항진 시 기초대사가 촉진되며 바제도우병(그레이브스병)과 안구돌출성갑상샘종이 나타납니다. 점액수종과 크레틴병은 갑상샘 기능저하증의 증상입니다."
      },
      {
        id: "endocrine-013",
        number: 13,
        question:
          "부갑상샘(parathyroid gland)의 기능에 대한 설명으로 옳지 않은 것은?",
        choices: [
          "신장에서 calcitriol의 생성과 분비를 자극한다",
          "뼈세포를 자극하여 뼈의 칼슘 침착 속도를 촉진시킨다",
          "장관에서 칼슘과 인의 흡수를 증진시킨다",
          "혈중 Ca2+ 농도가 낮아지면 부갑상샘호르몬(PTH) 분비가 증가한다",
          "오줌 속으로 칼슘이온의 배출을 감소시킨다"
        ],
        answer: 1,
        explanation:
          "부갑상샘호르몬(PTH)은 파골세포를 자극해 뼈의 칼슘을 혈액으로 용출시켜 혈중 칼슘 농도를 높입니다. 뼈의 칼슘 침착을 촉진하는 호르몬은 칼시토닌입니다."
      },
      {
        id: "endocrine-014",
        number: 14,
        question:
          "호르몬 분비에 대한 설명으로 옳은 것은?",
        choices: [
          "뇌하수체 뒤엽에서 분비되는 oxytocin은 혈압 조절과 관계가 있다",
          "췌장 (이자)에서 분비되는 insulin과 glucagon은 혈당 조절에 관여한다",
          "여성에서 배란에 관여하는 호르몬은 testosterone이다",
          "부신수질에서는 thyroxine(T4)과 triiodothyronine(T3)이 분비된다",
          "갑상샘호르몬 thyroxine이 과잉 분비되면 점액수종에 걸리기 쉽다"
        ],
        answer: 1,
        explanation:
          "췌장(이자)에서 분비되는 인슐린은 혈당을 낮추고 글루카곤은 혈당을 높여 서로 길항 작용으로 혈당 조절에 관여합니다."
      },
      {
        id: "endocrine-015",
        number: 15,
        question:
          "호르몬과 그 특성들에 대한 설명으로 옳지 않은 것은?",
        choices: [
          "성장호르몬 항진 - 난쟁이(왜소증) - 뼈성장 촉진",
          "aldosterone - 전해질 대사 - Na+ 재흡수 촉진",
          "parathormone - 테타니증 - 혈중 Ca2+ 조절",
          "thyroxine 결핍 - 점액수종 - 요오드호르몬",
          "부신피질 - cortisone - 당류대사, 소염작용"
        ],
        answer: 0,
        explanation:
          "난쟁이(왜소증)는 성장기에 성장호르몬이 결핍될 때 발생합니다. 성장호르몬이 항진(과다)되면 거인증이나 말단비대증이 나타납니다."
      },
      {
        id: "endocrine-016",
        number: 16,
        question:
          "신장 (콩팥)에서 칼시트리올(calcitriol)의 생성과 분비를 자극하고 비타민D와 직접적인 관계가 있는 것은?",
        choices: [
          "parathormone(PTH)",
          "aldosterone",
          "oxytocin",
          "epinephrine",
          "thyroxine"
        ],
        answer: 0,
        explanation:
          "부갑상샘호르몬(PTH)은 신장에서 비타민 D의 활성형인 칼시트리올의 생성과 분비를 자극하여 소장에서의 칼슘 흡수를 촉진합니다."
      },
      {
        id: "endocrine-017",
        number: 17,
        question:
          "부신에서 분비되는 스테로이드계 호르몬인 알도스테론(aldosterone)의 과다 분비 시 나타나는 증상은?",
        choices: [
          "저체온",
          "고체온",
          "고혈압",
          "저혈당",
          "저혈압"
        ],
        answer: 2,
        explanation:
          "알도스테론은 콩팥에서 나트륨과 수분의 재흡수를 촉진하므로, 과다 분비되면 체내 혈액량이 증가하여 고혈압이 나타납니다."
      },
      {
        id: "endocrine-018",
        number: 18,
        question:
          "내분비기관 중에서 피질(cortex)과 수질(medulla)로 구분되어 있는 장기는?",
        choices: [
          "췌장",
          "부갑상샘",
          "뇌하수체",
          "부신",
          "갑상샘"
        ],
        answer: 3,
        explanation:
          "부신은 바깥쪽의 부신피질(겉질)과 안쪽의 부신수질(속질)로 구분되어 각각 다른 호르몬을 분비합니다."
      },
      {
        id: "endocrine-019",
        number: 19,
        question:
          "여성에서 배란을 유발하고 황체 형성과 프로게스테론 분비를 촉진하는 호르몬은?",
        choices: [
          "난포자극호르몬(FSH)",
          "알도스테론",
          "옥시토신",
          "성장호르몬",
          "황체형성호르몬(LH)"
        ],
        answer: 4,
        explanation:
          "뇌하수체 앞엽에서 분비되는 황체형성호르몬(LH)은 성숙한 난포의 배란을 유발하고 황체 형성과 프로게스테론 분비를 촉진합니다."
      },
      {
        id: "endocrine-020",
        number: 20,
        question:
          "Ca2+ 대사 조절 호르몬으로서 뼈파괴세포(osteoclast)의 활동을 억제하여 혈액 속 Ca2+ 농도를 낮추는 갑상샘 호르몬은?",
        choices: [
          "parathormone",
          "adrenaline",
          "cortisol",
          "aldosterone",
          "calcitonin"
        ],
        answer: 4,
        explanation:
          "갑상샘에서 분비되는 칼시토닌(calcitonin)은 뼈파괴세포의 활동을 억제하고 뼈로의 칼슘 침착을 촉진하여 혈중 Ca2+ 농도를 낮춥니다."
      },
      {
        id: "endocrine-021",
        number: 21,
        question:
          "부신(adrenal gland)에 대한 설명으로 옳지 않은 것은?",
        choices: [
          "부신수질에서는 에피네프린, 노에피네프린과 같은 카테콜아민을 분비한다",
          "토리층 (사구대)에서 코티솔 (cortisol)을 분비한다",
          "부신 피질의 바깥층은 토리층 (사구대), 중간층은 다발층 (속상대)이다",
          "안쪽은 수질로 이루어져 있고 바깥쪽은 피질로 이루어져 있다",
          "부신은 신장의 위에 얹혀 있는 1쌍의 내분비샘이다"
        ],
        answer: 1,
        explanation:
          "부신피질의 토리층(사구대)에서는 알도스테론이 분비되며, 코티솔은 중간층인 다발층(속상대)에서 분비됩니다."
      },
      {
        id: "endocrine-022",
        number: 22,
        question:
          "부신피질(adrenal cortex)에서 분비되는 호르몬으로 옳은 것은?\n\n" +
          "가. aldosterone\n" +
          "나. cortisol\n" +
          "다. androgen\n" +
          "라. epinephrine",
        choices: [
          "가, 나, 다",
          "가, 나, 다, 라",
          "라",
          "나, 라",
          "가, 다"
        ],
        answer: 0,
        explanation:
          "부신피질에서는 알도스테론(토리층), 코르티솔(다발층), 안드로겐(그물층)이 분비됩니다. 에피네프린은 부신수질에서 분비됩니다."
      },
      {
        id: "endocrine-023",
        number: 23,
        question:
          "췌장 (이자, pancreas)에서 분비되어 혈당량을 저하시키는 역할을 하는 단백성 호르몬은?",
        choices: [
          "insulin",
          "adrenaline",
          "glucagon",
          "epinephrine",
          "glucocorticoid"
        ],
        answer: 0,
        explanation:
          "췌장의 베타세포에서 분비되는 인슐린(insulin)은 포도당의 세포 내 흡수와 글리코겐 합성을 촉진하여 혈당량을 낮춥니다."
      },
      {
        id: "endocrine-024",
        number: 24,
        question:
          "혈액 속의 칼슘량을 조절하는 갑상샘호르몬으로 갑상샘 C세포에서 분비되는 32개의 아미노산으로 이루어진 폴리펩티드이며, 혈액 속의 칼슘 농도가 정상치보다 높을 때 그 양을 저하시키는 작용을 하는 호르몬은?",
        choices: [
          "calcitonin",
          "androgen",
          "성장호르몬",
          "vasopressin",
          "aldosterone"
        ],
        answer: 0,
        explanation:
          "칼시토닌(calcitonin)은 갑상샘 방소포세포(C세포)에서 분비되는 32개 아미노산 폴리펩타이드 호르몬으로, 혈중 칼슘 농도가 높을 때 이를 낮춥니다."
      },
      {
        id: "endocrine-025",
        number: 25,
        question:
          "A항과 B항에서 서로 관계가 있는 것끼리 연결한 것 중 모두 옳게 연결된 것은?\n\n" +
          "A항: 가. 성장호르몬(GH)  나. 알도스테론(aldosterone)  다. 티록신(thyroxine)  라. 인슐린(insulin)\n" +
          "B항: a. 췌장(pancreas)  b. 뇌하수체 앞엽(전엽)  c. 부신피질  d. 갑상샘",
        choices: [
          "가-b, 나-a, 다-d, 라-c",
          "가-b, 나-c, 다-d, 라-a",
          "가-a, 나-c, 다-b, 라-d",
          "가-a, 나-b, 다-c, 라-d",
          "가-b, 나-d, 다-c, 라-a"
        ],
        answer: 1,
        explanation:
          "성장호르몬은 뇌하수체 앞엽(b), 알도스테론은 부신피질(c), 티록신은 갑상샘(d), 인슐린은 췌장(a)에서 분비됩니다."
      },
      {
        id: "endocrine-026",
        number: 26,
        question:
          "전해질피질호르몬(염류코르티코이드, mineralocorticoids)에 속하는 호르몬은?",
        choices: [
          "파라토르몬 (parathormone)",
          "알도스테론 (aldosterone)",
          "인슐린(insulin)",
          "티록신(thyroxine)",
          "옥시토신(oxytocin)"
        ],
        answer: 1,
        explanation:
          "알도스테론은 부신피질 토리층에서 분비되는 대표적인 전해질피질호르몬(염류코르티코이드)으로, 콩팥에서 나트륨 재흡수와 칼륨 배설을 조절합니다."
      },
      {
        id: "endocrine-027",
        number: 27,
        question:
          "체내의 부갑상샘호르몬(parathormone: PTH)이 과다할 때 저지하는 호르몬은?",
        choices: [
          "아드레날린(adrenaline)",
          "알도스테론 (aldosterone)",
          "티록신(thyroxine)",
          "칼시토닌(calcitonin)",
          "인슐린(insulin)"
        ],
        answer: 3,
        explanation:
          "칼시토닌은 혈중 칼슘 농도를 낮추는 호르몬으로, 혈중 칼슘 농도를 높이는 부갑상샘호르몬(PTH)과 반대(길항) 작용을 합니다."
      },
      {
        id: "endocrine-028",
        number: 28,
        question:
          "호르몬 분비 이상과 그 결과의 연결로 옳지 않은 것은?",
        choices: [
          "항이뇨호르몬(ADH) 결핍: 요붕증",
          "갑상샘호르몬 과다: 기초대사율 증가",
          "인슐린 과다: 혈당치 저하",
          "소아의 갑상샘호르몬 결핍: 크레틴병(선천성 갑상샘기능저하증의 성장·발달 장애)",
          "알도스테론 과다: Na+ 체내 축적 감소"
        ],
        answer: 4,
        explanation:
          "알도스테론은 콩팥에서 Na+ 재흡수를 촉진하므로 과다 분비 시 Na+의 체내 축적이 감소하는 것이 아니라 증가합니다."
      },
      {
        id: "endocrine-029",
        number: 29,
        question:
          "교감신경의 자극에 의해 부신수질에서 분비되는 에피네프린(epinephrine, adrenaline)의 작용으로 옳지 않은 것은?",
        choices: [
          "심장활동 억제",
          "소화관활동 억제",
          "해당작용 촉진",
          "동공확대",
          "혈압상승"
        ],
        answer: 0,
        explanation:
          "에피네프린은 교감신경 흥분 시 분비되어 심박수와 수축력을 높여 심장활동을 촉진합니다."
      },
      {
        id: "endocrine-030",
        number: 30,
        question:
          "생식 주기를 조절하여 여성의 신체 및 자궁벽을 임신에 맞추어 변화시키는 역할을 하며, 임신 자궁 근육의 수축을 억제하는 것은?",
        choices: [
          "프로락틴(prolacatin)",
          "피튜이트린(pituitrin)",
          "프로게스테론 (progesterone)",
          "에스트로겐(estrogen)",
          "옥시토신(oxytocin)"
        ],
        answer: 2,
        explanation:
          "프로게스테론은 황체와 태반에서 분비되어 자궁내막을 임신에 적합하게 유지하고 임신 중 자궁 근육의 수축을 억제합니다."
      },
      {
        id: "endocrine-031",
        number: 31,
        question:
          "다음 호르몬들과 그 질환의 연결이 옳지 않은 것은?",
        choices: [
          "티록신(thyroxine) 분비 증가: Basadow병",
          "티록신(thyroxine) 분비 저하: 점액수종",
          "항이뇨호르몬 (ADH) 분비 증가: 요붕증",
          "부갑상샘호르몬 분비 저하: tetany증",
          "인슐린(insulin) 분비 감소: 당뇨병"
        ],
        answer: 2,
        explanation:
          "요붕증은 항이뇨호르몬(ADH)의 분비가 증가할 때가 아니라 결핍(감소)하여 수분 재흡수가 제대로 이루어지지 않을 때 발생합니다."
      },
      {
        id: "endocrine-032",
        number: 32,
        question:
          "1형 당뇨병(인슐린 의존성 당뇨, IDDM)에 대한 특징으로 옳은 것은?",
        choices: [
          "매일 인슐린 주사를 맞을 필요는 없다",
          "40대 이후 성인에게 발생한다",
          "2형 당뇨병보다 매우 흔하다",
          "자신의 면역계통이 췌장세포를 공격하는 자가면역질환이다",
          "많은 사람들이 과체중을 보인다"
        ],
        answer: 3,
        explanation:
          "1형 당뇨병은 자신의 면역계통이 인슐린을 분비하는 췌장 베타세포를 파괴하여 발생하는 자가면역질환입니다."
      },
      {
        id: "endocrine-033",
        number: 33,
        question:
          "인슐린(insulin) 결핍 시 신체에 나타날 수 있는 증상으로 옳지 않은 것은?",
        choices: [
          "고혈당",
          "체중 증가",
          "대사성 산증",
          "체액과 전해질 손실",
          "다뇨, 다음"
        ],
        answer: 1,
        explanation:
          "인슐린이 결핍되면 세포가 포도당을 이용하지 못해 체내 지방과 단백질을 분해하므로 체중이 증가하는 것이 아니라 감소합니다."
      },
      {
        id: "endocrine-034",
        number: 34,
        question:
          "췌장(pancreas)에서 분비되는 호르몬에 대한 설명으로 옳지 않은 것은?",
        choices: [
          "췌장은 소화효소와 호르몬을 모두 분비하는 장기이다",
          "glucagon은 저혈당 시 분비가 증가한다",
          "인슐린은 생체 내에서 혈당을 저하시키는 기능을 한다",
          "glucagon은 δ-cell에서 분비된다",
          "δ세포의 somatostatin은 인슐린과 글루카곤의 분비를 억제한다"
        ],
        answer: 3,
        explanation:
          "글루카곤(glucagon)은 췌장의 δ-세포가 아니라 α-세포에서 분비됩니다. δ-세포에서는 소마토스타틴이 분비됩니다."
      },
      {
        id: "endocrine-035",
        number: 35,
        question:
          "2형 당뇨병(인슐린비의존형당뇨병, NIDDM)에 대한 설명으로 옳은 것은?",
        choices: [
          "자신의 면역계통이 췌장세포를 공격하는 자가면역 질환이다",
          "환자의 대부분은 심한 저체중 현상을 보인다",
          "모든 환자에서 인슐린 주사가 꼭 필요하다",
          "청소년에게 많이 발생한다",
          "인슐린 효과에 대한 조직 민감도가 감소되어 일어난다"
        ],
        answer: 4,
        explanation:
          "2형 당뇨병은 표적 조직의 인슐린 민감도가 감소하는 인슐린 저항성이 주된 원인입니다."
      }
    ]
  });
})();