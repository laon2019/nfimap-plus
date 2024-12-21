// constants.ts

export interface Question {
  id: number;
  text: string;
  answer: boolean | null;
  options: {
    A: string;
    B: string;
  };
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "나는 엔플라잉의 공연을 보러 갈 때?",
    answer: null,
    options: {
      A: "새로운 팬들과\n 쉽게 어울려 친해진다.",
      B: "혼자 또는 \n친한 사람들이랑만 다니는 편.",
    },
  },
  {
    id: 2,
    text: "나는 엔플라잉 노래를 들을 때?",
    answer: null,
    options: {
      A: "멜로디 위주로 듣는다.",
      B: "가사 위주로 듣는다.",
    },
  },
  {
    id: 3,
    text: "내가 엔플라잉을 더 좋아하는 이유는?",
    answer: null,
    options: {
      A: "알면 알수록 더 좋은 음악.",
      B: "팬들을 대하는 진심 어린 마음.",
    },
  },
  {
    id: 4,
    text: "나는 주변 사람들에게\n 엔플라잉 관련 이야기를?",
    answer: null,
    options: {
      A: "수시로 하면서\n 적극적으로 영업한다.",
      B: "자주 하지 않고\n 그냥 혼자 좋아한다.",
    },
  },
  {
    id: 5,
    text: "군백기가 끝난 뒤\n 첫 콘서트 일정이 정해졌다.",
    answer: null,
    options: {
      A: "그동안 못 들은 곡을\n 들을 수 있다는 기대에 설렌다.",
      B: "드디어 5플라잉이\n 모였다는 사실에 감동이 밀려온다.",
    },
  },
  {
    id: 6,
    text: "공연 입장 전 대기가 길어 지루하다.\n 주변 엔피아에게…",
    answer: null,
    options: {
      A: "말을 걸어본다.",
      B: "말을 걸까 고민하다가\n 그냥 휴대폰만 한다.",
    },
  },
  {
    id: 7,
    text: "콘서트나 무대 영상을 볼 때\n 더 집중하는 부분은?",
    answer: null,
    options: {
      A: "무대 위 퍼포먼스,\n 악기 연주, 보컬 실력.",
      B: "멤버들 간의 호흡,\n 팬과의 상호작용.",
    },
  },
  {
    id: 8,
    text: "앵콜 무대 중 울컥하는\n 최애를 발견했다.",
    answer: null,
    options: {
      A: "마음속으로 “고생했어!” 라고 응원한다.",
      B: "나도 같이 감정이 벅차올라 울컥한다.",
    },
  },
  {
    id: 9,
    text: "나에게 엔플라잉을 인터뷰할\n 기회가 주어진다면?",
    answer: null,
    options: {
      A: "음악 제작 과정과 곡에 대한\n 비하인드 스토리를 묻는다.",
      B: "멤버들 간의 관계성이나\n 재미있는 일화에 대해 묻는다.",
    },
  },
];

export interface TestResult {
  title: string;
  imageUrl: string;
  details: {
    reason: string;
    reasonText: string;
    keyPoints: {
      title: string;
      description: string[];
    };
    dayPlan: {
      title: string;
      description: {
        title: string;
        content: string;
      }[];
    };
    hashtags: string;
  };
}

export const RESULT_DESCRIPTIONS: { [key: string]: TestResult } = {
  EST: {
    title: "활기찬 엔피아",
    imageUrl: "/image/nfiti/result/EST.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "그들의 무대가 나에게 에너지를 줘!",
      keyPoints: {
        // todo  Key Points는 "Magic Key" 로 변경
        title: "응원봉과 자신만의 시그니처 응원법!",
        description: [
          "엔플라잉의 공연에서 받는 에너지가 내 삶의 원동력!",
          "누구보다 빠르게 티켓팅에 성공하고, 공연장에서 열정적으로 응원하며 에너지를 뿜어내요.",
          "무대 위 멤버들과 함께 호흡하는 그 순간을 즐깁니다.",
        ],
      },
      dayPlan: {
        title:
          "오늘도 무대에서 에너지를 받아야지!\n" +
          "공연 후 피곤함보다 기쁨이 남는 타입!",
        description: [
          {
            title: "열정 넘치는 행동력",
            content:
              "활발하게 다른 팬들과 소통하는 편이며, 생각한 것을 즉시 실천하는 경우가 많습니다.\n" +
              "엔플라잉의 콘서트나 이벤트가 있다면 고민 없이 바로 참여하고, 굿즈나 앨범을 구매할 때도 주저하지 않는 편이에요.",
          },
          {
            title: "행동 중심, 경험 중시",
            content:
              "엔플라잉과의 추억을 소중히 여기며, 공연장에 가서 직접 경험하는 것을 중시해요.\n" +
              "단순히 영상을 보는 것보다는 실제로 멤버들의 무대를 느끼고 즐기는 게 더 중요하죠.",
          },
          {
            title: "목표 지향적인 덕질",
            content:
              "엔플라잉의 성공과 성장을 위한 구체적인 응원을 할 가능성이 큽니다.\n" +
              "예를 들어, 음원 차트에서의 성과나 앨범 판매량 등 결과로 나타나는 성과를 중요하게 생각하며, 이를 위해 팬 활동을 계획하고 실행하는 성향이 있어요.",
          },
        ],
      },
      hashtags: "#공연러버 #에너지폭발 #친구와함께 #항상신남 #활발한응원",
    },
  },
  ESF: {
    title: "사랑스러운 엔피아",
    imageUrl: "/image/nfiti/result/ESF.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "멤버들의 진심이 내 마음을 울려서!",
      keyPoints: {
        title: "감동 가득 따뜻한 코멘트와 응원 메시지!",
        description: [
          "무대 위 작은 순간에도 멤버들의 진심을 느끼며 깊은 감동을 받는 타입이에요.",
          "엔피아들과 감정을 나누고 공감하며 소통하는 데서 큰 기쁨을 찾습니다.",
          "따뜻한 마음으로 엔플라잉과 엔피아 모두에게 사랑을 전하며, 순간을 더욱 소중하게 만듭니다.",
        ],
      },
      dayPlan: {
        title:
          "공연에서 느낀 이 감동,\n" + "엔피아들과 공유하면 두 배로 좋잖아?",
        description: [
          {
            title: "감성 충만한 마음",
            content:
              "무대에서 전해지는 감동을 누구보다도 잘 느끼며, 작은 디테일 하나에도 마음이 따뜻해져요. \n" +
              "무대 위 멤버들의 눈빛이나 목소리의 떨림 같은 순간들을 쉽게 잊지 못합니다.",
          },
          {
            title: "애정 가득한 응원",
            content:
              "응원의 메시지를 남길 때도 좋아하는 마음을 표현하는 데 거리낌이 없어요!\n" +
              "멤버들에게 따뜻한 말 한마디를 전하는 게 덕질의 중요한 부분이며, \n" +
              "”너와 내가 함께라면 더 좋지 않겠어?”라는 마음으로 모두에게 사랑을 나누죠.",
          },
          {
            title: "감동적인 순간을 공유",
            content:
              "단순히 혼자 즐기는 것보다 엔피아들과 그 감정을 나누는 데에도 큰 의미를 둡니다. \n" +
              "팬카페나 소셜미디어에 감동적인 순간을 공유하며, 공감을 얻는 것에서 에너지를 얻죠.",
          },
        ],
      },
      hashtags: "#감성충만 #공감의힘 #따뜻한응원 #엔피아사랑 #마음으로소통",
    },
  },
  ENT: {
    title: "창의적인 엔피아",
    imageUrl: "/image/nfiti/result/ENT.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "매 무대마다 새로운 재미가 있거든!",
      keyPoints: {
        title: "아이디어 노트와 최신 소식을\n" + "놓치지 않는 빠른 알림창!",
        description: [
          "최신 정보와 인터뷰를 빠르게 파악하고, 엔플라잉의 무대와 음악을 다양한 시각에서 탐구하는 타입이에요.",
          "그 속에서 새로운 재미와 의미를 발견하고, 이를 엔피아들과 공유하며 트렌드를 선도합니다.",
          "엔플라잉에 대한 깊이 있는 탐구를 통해 특별한 팬 활동을 펼칩니다.",
        ],
      },
      dayPlan: {
        title:
          "다른 시각에서 엔플라잉의\n" +
          "매력을 발견하는 것, \n" +
          "그게 바로 내 덕질의 묘미!",
        description: [
          {
            title: "독창적이고 기획력 있는 팬 활동",
            content:
              "무대를 보는 것에서 그치지 않고, 그 속에서 새로운 아이디어와 재미를 발견하는데 집중해요.\n" +
              "팬아트나 이벤트 기획 등 창의적인 활동을 통해 엔플라잉에 대한 새로운 콘텐츠를 생산하며 팬 커뮤니티를 활기차게 만들어요.",
          },
          {
            title: "뛰어난 정보 수집과 분석력",
            content:
              "최신 소식과 정보를 빠르게 파악하고 엔피아들에게 전달하는데 앞장서는 타입이에요.\n" +
              "엔플라잉의 음악이나 무대 뒤에 숨겨진 의미를 파악하고, 이를 공유하며 흥미로운 이야깃거리를 제공합니다.",
          },
          {
            title: "다양한 관점으로 소통",
            content:
              "엔플라잉의 활동을 다양한 시각으로 조명하며, 창의적인 아이디어를 전파하는 이들은 팬덤의 중심에서 활발히 활동합니다.\n" +
              "유연하고 열린 소통 방식으로 독창적이고 다채로운 팬 문화를 형성하는 데 크게 기여합니다.",
          },
        ],
      },
      hashtags: "#아이디어뱅크 #창의력넘침 #재미추구 #트렌드리더 #다양한활동",
    },
  },
  ENF: {
    title: "열정적인 엔피아",
    imageUrl: "/image/nfiti/result/ENF.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "그들의 무대가 내 마음속 불꽃을 일으켜!",
      keyPoints: {
        title: "진심 가득한 팬레터와 감동적인 한 마디!",
        description: [
          "공연에서 느낀 감정을 가장 소중히 여기며, 그 감동을 팬들과 나누는 것을 즐깁니다. ",
          "공연에 몰입해 멤버들의 감정에 깊이 공감하고, 그 순간의 여운을 나누며 뜨거운 응원을 이끌어내죠. ",
          "감성적 소통을 통해 팬덤을 밝고 따뜻한 분위기로 이끌어 간답니다.",
        ],
      },
      dayPlan: {
        title:
          "오늘 공연, 나에게 큰 영감을 줬어.\n" +
          "이 감동을 다른 엔피아들과 나누고 싶어!",
        description: [
          {
            title: "열정적이고 공감력 넘치는 팬",
            content:
              "공연이나 인터뷰에서 멤버들이 전하는 감정을 깊이 공감하며, 그 감동을 팬들과 나누고 싶어 합니다.\n" +
              "무대에서 느껴지는 에너지와 감정을 온몸으로 받아들이고, 이를 다른 엔피아들에게 전달하면서 팬덤의 열정을 더욱 뜨겁게 만듭니다.",
          },
          {
            title: "공연 몰입도가 높은 편",
            content:
              "공연 내내 온 마음을 다해 엔플라잉 멤버들과 함께하는 느낌을 받아요.\n" +
              "한 장면, 한 마디에서도 감동을 얻고 그 순간을 오래도록 기억하고자 합니다.\n" +
              "공연 후에도 무대의 여운을 간직하며, 다른 팬들과 그 감동을 나누는 데 집중합니다.",
          },
          {
            title: "항상 마음을 나누고 싶어",
            content:
              "팬 커뮤니티에서 항상 자신의 감정을 솔직하게 표현하며 사랑과 감사의 마음을 나누는걸 즐겨요.\n" +
              "이들의 따뜻한 응원과 감성적인 지지는 팬덤 분위기를 밝고 따뜻하게 만들어 가는데 중요한 역할을 합니다.",
          },
        ],
      },
      hashtags: "#감정폭발 #뜨거운응원 #무대몰입 #소통왕 #분위기메이커",
    },
  },
  IST: {
    title: "세심한 엔피아",
    imageUrl: "/image/nfiti/result/IST.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "그들의 무대가 진짜 가치 있고 멋지거든.",
      keyPoints: {
        title: "꼼꼼한 덕질 일지와 공연 분석 노트!",
        description: [
          "외부에 드러나는 활동은 적지만, 마음속엔 깊은 팬심이 자리 잡고 있어요.",
          "엔플라잉의 활동에 대한 세부적인 정보를 수집하고, 이를 차분하게 분석하며 점차 더 큰 애정을 쌓아가죠.",
          "체계적인 기록을 통해 엔플라잉에 대한 팬심을 지속적으로 확장시켜 나갑니다.",
        ],
      },
      dayPlan: {
        title:
          "계획은 이미 내 머릿속에 다 있어!\n" +
          "그 순간을 완벽하게 즐기는게 목표야.",
        description: [
          {
            title: "내면 깊숙이 팬심을 품고",
            content:
              "감정을 겉으로 잘 드러내지 않지만 엔플라잉에 대한 마음은 누구보다 깊고 진합니다.\n" +
              "음악적 디테일이나 무대의 세밀한 부분에까지 깊은 관심을 가지며 멤버들의 성장과 이야기를 되새기는 편이에요.\n" +
              "엔플라잉에 대한 애정은 매번 새로운 발견을 통해 더욱 깊어집니다.",
          },
          {
            title: "차분한 응원 스타일",
            content:
              "티켓팅이나 팬 활동 준비를 철저히 계획하고 신중하게 진행합니다.\n" +
              "소리 없이 강하게, 오랫동안 꾸준하고 안정적으로 엔플라잉을 응원해요.\n" +
              "크게 눈에 띄지는 않더라도 그만큼 더 진실되고 확고한 애정을 담아 응원하는 스타일입니다.",
          },
          {
            title: "자신만의 방식으로",
            content:
              "엔피아들에게 유용한 정보를 묵묵히 제공하거나, 공연 후 감상평을 남기면서 팬덤의 기반을 다집니다.\n" +
              "세심한 분석과 진심 어린 응원을 통해 팬 활동을 지속적으로 이어가며, 이는 점차 더 큰 애정과 활발한 팬 활동으로 확장됩니다.",
          },
        ],
      },
      hashtags: "#디테일러 #정보수집 #차분한응원 #마이페이스 #깊은분석",
    },
  },
  ISF: {
    title: "따뜻한 엔피아",
    imageUrl: "/image/nfiti/result/ISF.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "그들의 무대가 내게 소소한 행복이야.",
      keyPoints: {
        title: "그날의 추억이 담긴 사진첩과 굿즈!",
        description: [
          "엔피아 활동을 통해 내적인 만족을 얻고, 자신만의 방식으로 덕질을 즐깁니다.",
          "엔플라잉의 무대 위 작은 제스처나 팬들을 향한 마음을 놓치지 않고 포착하며, 그 감동적인 순간들을 마음속 깊이 새깁니다.",
          "겉으로 드러내기보다는 묵묵히 응원하는 스타일로, 따뜻한 엔피아의 팬심은 결코 얕지 않습니다.",
        ],
      },
      dayPlan: {
        title:
          "덕질은 크게 떠들지 않아도 돼.\n" +
          "그저 내 방식대로 느끼고\n" +
          "그 순간을 간직하는 게 좋아.",
        description: [
          {
            title: "따뜻하고 조용한 응원",
            content:
              "세심한 행동과 소소한 표현 속에서 자연스럽게 깊은 애정이 묻어나는 타입입니다.\n" +
              "말로 다 표현하지 않아도 그 진심은 누구보다 깊고 진실하죠.\n" +
              "비록 눈에 띄지 않을지라도, 언제나 따뜻하고 진심 어린 응원으로 엔플라잉을 든든히 지지합니다.",
          },
          {
            title: "세세한 부분도 놓치지 않아",
            content:
              "엔플라잉의 작은 행동이나 팬들을 향한 눈빛까지도 소중히 여기며, 멤버들의 따뜻한 마음을 이해하고 공감하는 데서 큰 기쁨을 느낍니다.\n" +
              "사소한 순간도 특별한 의미로 다가오며, 이런 소소한 순간들이 모여 소중한 추억이 됩니다.\n" +
              "무대의 감동은 조용히 되새기며 그 여운을 오래도록 간직하는 편이에요.",
          },
          {
            title: "함께하는 기쁨을 아는 사람",
            content:
              "혼자서 조용히 감상하는 걸 즐기지만, 팬 커뮤니티에서는 따뜻한 말로 다른 팬들에게 위로와 감동을 전하기도 해요.\n" +
              "따뜻한 엔피아 유형의 조용한 지지는 때때로 큰 목소리보다도 더 깊은 울림을 줍니다.",
          },
        ],
      },
      hashtags: "#세심한응원 #따뜻한공감 #공연후여운 #멤버사랑 #조용한지지",
    },
  },
  INT: {
    title: "사색하는 엔피아",
    imageUrl: "/image/nfiti/result/INT.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "그들의 무대가 나를 깊게 생각하게 만들거든.",
      keyPoints: {
        title: "나만의 엔플라잉 플리와 가사 분석 노트!",
        description: [
          "단순한 감상을 넘어서, 음악과 스토리에서 의미를 찾아내는데 진심인 타입!",
          "공연을 본 후에는 그 경험을 자신만의 방식으로 해석하며, 엔플라잉의 음악적 진화에 대해 깊이 탐구합니다.",
          "엔플라잉의 여정을 따라가며, 그들의 미래를 상상하는 것도 사색하는 엔피아의 큰 기쁨이에요.",
        ],
      },
      dayPlan: {
        title:
          "공연의 여운을 깊이 되새기며, \n" +
          "그 순간을 다시 한번 마음속에 담는게 좋아.",
        description: [
          {
            title: "논리적이고 분석적인 팬",
            content:
              "사색하는 엔피아는 음악의 디테일, 무대의 구성 등 모든 것을 깊게 분석하는 타입이에요.\n" +
              "가사의 의미나 편곡의 변화를 탐구하며, 그들의 음악을 이해하려는 깊은 의지도 보입니다.\n" +
              "멤버들의 인터뷰 속에서 단서를 얻어 이를 자신의 해석에 반영하는 것을 즐긴답니다.",
          },
          {
            title: "깊이 있는 애정",
            content:
              "단순히 엔플라잉의 음악을 즐기는 것에서 그치지 않고, 음악 속 메시지와 의미를 깊이 파고듭니다.\n" +
              "보통은 놓치기 쉬운 디테일을 주의 깊게 포착하며, 독특한 관점에서 해석하여 새로운 통찰을 제공하는 경우가 많습니다.",
          },
          {
            title: "조용하지만 깊이 느끼는 타입",
            content:
              "내면에서 끊임없이 엔플라잉을 분석하며 애정을 이어가는 타입이에요.\n" +
              "멤버들의 감정선을 이해하게 되면, 그 감동은 더욱 깊고 오래 지속됩니다.\n" +
              "자신의 방식으로 팬 활동을 즐기고, 그 과정에서 얻은 통찰은 종종 다른 팬들에게도 영향을 미칩니다.",
          },
        ],
      },
      hashtags: "#분석력 #탐구심 #음악연구 #깊은사고 #독특한관점",
    },
  },
  INF: {
    title: "감성적인 엔피아",
    imageUrl: "/image/nfiti/result/INF.png",
    details: {
      reason: "엔플라잉을 좋아하는 이유?",
      reasonText: "그들의 무대가 마음속 깊이 울림을 주거든.",
      keyPoints: {
        title: "진심 어린 응원의 메시지와 공감 가득한 후기!",
        description: [
          "엔플라잉의 무대에서 느낀 깊은 감동을 마음 깊이 오래도록 간직하는 타입이에요.",
          "멤버들의 작은 행동과 사소한 표현에서도 의미를 발견하며, 그 순간을 공유할 때 더욱 큰 행복을 느낍니다.",
          "조용하지만 섬세하고 진심 어린 응원으로 멤버들에게 따뜻한 힘이 되어줍니다.",
        ],
      },
      dayPlan: {
        title:
          "오늘 공연에서 느낀 감동,\n" + "나 혼자 간직하기엔 너무 소중하잖아.",
        description: [
          {
            title: "감성적이고 섬세한 마음",
            content:
              "감성적인 엔피아에게 덕질은 단순한 즐거움을 넘어, 삶의 중요한 감정적 자산이 되는 활동이죠.\n" +
              "멤버들의 작은 표정과 행동에도 세심한 주의를 기울이며, 그 속에서 깊은 감동을 발견하는 섬세한 성향을 지녔어요.\n" +
              "응원하는 방식이 화려하거나 눈에 띄지는 않더라도, 진심이 담긴 응원으로 울림을 전합니다.",
          },
          {
            title: "혼자서도, 함께여도 행복해",
            content:
              "무대에서 느낀 감동을 나만의 방식으로 간직하면서도, 때로는 그 순간을 함께 나누는 것에서도 기쁨을 느낍니다.\n" +
              "스스로 감정의 깊이를 채우며, 동시에 팬들과 소통하고 공감대를 넓혀가는 균형 잡힌 타입입니다.\n" +
              "팬 커뮤니티에서는 따뜻하고 편안한 분위기를 자연스럽게 만들어내며, 조용히 중심을 잡아주는 존재로 돋보입니다.",
          },
          {
            title: "정성 어린 지원",
            content:
              "덕질에 있어서 언제나 정성과 진심을 다하며, 작은 디테일까지 놓치지 않으려는 섬세함이 있어요.\n" +
              "응원 메시지나 팬 활동에서도 애정을 가득 담아 멤버들에게 따뜻한 위로와 힘이 되어주죠.\n" +
              "감성적인 엔피아의 응원은 잔잔하지만, 진실한 울림으로 오래 기억에 남습니다.",
          },
        ],
      },
      hashtags: "#내적감동 #공감의대가 #조용한응원 #감정중심 #깊은애정",
    },
  },
};
