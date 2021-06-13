const [quiz, setQuiz] = useState({
  isFinished: false,
  activeQuestion: 0,
  nextQuestion: null,
  results: [],
  questions: [
    {
      title: "Who участвовал в разработке JavaScript ?",
      answerStatus: false,
      options: [
        {
          title: "Фрэнки 'четыре пальца' и 'боксёр' Джордж",
          correct: false,

        },
        { title: "Миша 'пистолет' один всё сделал", correct: false },
        {
          title: "Брендан Эйх, Марк Андрессен и Билл Джой",
          correct: true,
          id: "3",
        },
        { title: "Бобби 'голова' и Валя 'пуля'", correct: false },
      ],
    },
    {
      title: "V каком году родился JavaScript ?",
      answerStatus: false,
      options: [
        { title: "2001", correct: false },
        { title: "1875", correct: false },
        { title: "1995", correct: true },
        { title: "1994", correct: false },
      ],
    },
    {
      title: "Which самый лучший year в твоей life ?",
      answerStatus: false,
      options: [
        { title: "1992", correct: false },
        { title: "2018", correct: true },
        { title: "2010", correct: false },
        { title: "2020", correct: false },
      ],
    },
  ],
});