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
  {
    id: 5,
    text: "새로운 사람들과 대화하는 것이 즐거우신가요?",
    image: "/image/questions/q5.jpg",
    answer: null,
  },
  {
    id: 6,
    text: "모임에서 주도적인 역할을 맡는 것을 선호하시나요?",
    image: "/image/questions/q6.jpg",
    answer: null,
  },
  {
    id: 7,
    text: "조용한 장소에서 휴식을 취하는 것을 좋아하시나요?",
    image: "/image/questions/q7.jpg",
    answer: null,
  },
  {
    id: 8,
    text: "즉흥적인 계획 변경에 잘 적응하시나요?",
    image: "/image/questions/q8.jpg",
    answer: null,
  },
  {
    id: 9,
    text: "새로운 취미나 활동을 시도하는 것을 좋아하시나요?",
    image: "/image/questions/q9.jpg",
    answer: null,
  },
];

export interface TestResult {
  title: string;
  description: string;
}

export const RESULT_DESCRIPTIONS: { [key: string]: TestResult } = {
  IST: {
    title: "조용하고 신중한 IST",
    description: "혼자 있는 것을 선호하고 체계적으로 계획을 세우는 성격이에요."
  },
  ISF: {
    title: "따뜻하고 섬세한 ISF", 
    description: "차분하고 공감능력이 뛰어나며 깊이있는 관계를 추구하는 성격이에요."
  },
  INF: {
    title: "창의적이고 이상적인 INF",
    description: "풍부한 상상력과 깊은 통찰력으로 자신만의 세계를 가진 성격이에요."
  },
  INT: {
    title: "논리적이고 분석적인 INT",
    description: "지적 호기심이 많고 복잡한 문제 해결을 즐기는 성격이에요."
  },
  EST: {
    title: "실용적이고 현실적인 EST",
    description: "체계적이고 효율적으로 일을 처리하며 목표 달성을 중요시하는 성격이에요."
  },
  ESF: {
    title: "사교적이고 친근한 ESF",
    description: "다른 사람들과 어울리기를 좋아하고 배려심이 많은 성격이에요."
  },
  ENF: {
    title: "활발하고 열정적인 ENF",
    description: "새로운 사람들과의 만남과 경험을 즐기는 성격이에요."
  },
  ENT: {
    title: "자신감 넘치는 리더 ENT",
    description: "목표 지향적이고 추진력이 있으며 새로운 도전을 즐기는 성격이에요."
  }
};
