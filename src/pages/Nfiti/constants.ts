// constants.ts

export interface Question {
  id: number;
  text: string;
  image: string;
  answer: boolean | null;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "당신은 새로운 환경에 잘 적응하시나요?",
    image: "/image/questions/q1.jpg",
    answer: null,
  },
  {
    id: 2,
    text: "혼자만의 시간을 즐기시나요?",
    image: "/image/questions/q2.jpg",
    answer: null,
  },
  {
    id: 3,
    text: "계획을 세우고 실천하는 편인가요?",
    image: "/image/questions/q3.jpg",
    answer: null,
  },
  {
    id: 4,
    text: "다른 사람들과 어울리는 것을 좋아하시나요?",
    image: "/image/questions/q4.jpg",
    answer: null,
  },
];

export interface TestResult {
  type: string;
  description: string;
}

export const RESULT_DESCRIPTIONS: { [key: string]: TestResult } = {
  introvert: {
    type: "내향형 NFITI",
    description: "신중하고 깊이 있는 사고를 가진 당신은 내향적인 성향을 가지고 있습니다.",
  },
  balanced: {
    type: "균형형 NFITI",
    description: "내향과 외향의 균형을 잘 맞추는 당신은 상황에 따라 유연하게 대처할 수 있습니다.",
  },
  extrovert: {
    type: "외향형 NFITI",
    description: "활기차고 적극적인 당신은 새로운 경험을 두려워하지 않는 외향적인 성향을 가졌습니다.",
  },
};
