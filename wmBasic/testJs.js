window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 (결과에서만 사용)
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // -----------------------------
  // 1. 문제 데이터 (정답 인덱스 포함)
  // -----------------------------
  const questions = [
    {
      title: "이름",
      options: ["age", "name", "adult", "person", "join"],
      correctIndex: 1,
      img: "img/name.jpg",
    },
    {
      title: "나이",
      options: ["adult", "cousin", "age", "people", "own"],
      correctIndex: 2,
      img: "img/age.jpg",
    },
    {
      title: "성인,어른",
      options: ["adult", "relative", "join", "person", "together"],
      correctIndex: 0,
      img: "img/adult.jpg",
    },
    {
      title: "누군가,어떤 사람",
      options: ["someone", "each other", "name", "cousin", "people"],
      correctIndex: 0,
      img: "img/someone.jpg",
    },
    {
      title: "사람,개인",
      options: ["together", "person", "age", "join", "relative"],
      correctIndex: 1,
      img: "img/person.jpg",
    },
    {
      title: "사람들",
      options: ["people", "adult", "cousin", "own", "take care of"],
      correctIndex: 0,
      img: "img/people.jpg",
    },
    {
      title: "자기 자신의",
      options: ["adult", "own", "join", "relative", "together"],
      correctIndex: 1,
      img: "img/own.jpg",
    },
    {
      title: "서로",
      options: ["each other", "someone", "people", "take care of", "age"],
      correctIndex: 0,
      img: "img/each_other.jpg",
    },
    {
      title: "사촌",
      options: ["cousin", "relative", "person", "join", "name"],
      correctIndex: 0,
      img: "img/cousin.jpg",
    },
    {
      title: "친척",
      options: ["together", "cousin", "relative", "adult", "own"],
      correctIndex: 2,
      img: "img/relative.jpg",
    },
    {
      title: "~을 돌보다",
      options: ["take care of", "join", "people", "each other", "age"],
      correctIndex: 0,
      img: "img/take_care_of.jpg",
    },
    {
      title: "함께,같이",
      options: ["own", "together", "person", "cousin", "someone"],
      correctIndex: 1,
      img: "img/together.jpg",
    },
    {
      title: "가입하다,함께하다",
      options: ["join", "name", "take care of", "adult", "people"],
      correctIndex: 0,
      img: "img/join.jpg",
    },
    {
      title: "급우, 반친구",
      options: ["decide", "neighbor", "environment", "classmate", "shoulder"],
      correctIndex: 3,
      img: "img/classmate.jpg",
    },
    {
      title: "혼자",
      options: ["clever", "important", "refrigerator", "alone", "island"],
      correctIndex: 3,
      img: "img/alone.jpg",
    },
    {
      title: "우정",
      options: ["serious", "neighbor", "traditional", "subject", "friendship"],
      correctIndex: 4,
      img: "img/friendship.jpg",
    },
    {
      title: "함께 쓰다, 나누다",
      options: ["subject", "share", "thin", "laugh", "traditional"],
      correctIndex: 1,
      img: "img/share.jpg",
    },
    {
      title: "이웃",
      options: ["invite", "collect", "square", "neighbor", "throw"],
      correctIndex: 3,
      img: "img/neighbor.jpg",
    },
    {
      title: "소개하다",
      options: [
        "traditional",
        "accept",
        "introduce",
        "toe",
        "have[take] a seat",
      ],
      correctIndex: 2,
      img: "img/introduce.jpg",
    },
    {
      title: "이상한,낯선",
      options: ["enough", "honest", "knee", "say hello to", "strange"],
      correctIndex: 4,
      img: "img/strange.jpg",
    },
    {
      title: "~와 시간을 보내다,어울려놀다",
      options: ["square", "hang out with", "waste", "walk", "language"],
      correctIndex: 1,
      img: "img/hang_out_with.jpg",
    },
    {
      title: "나타나다",
      options: ["walk", "feel like -ing", "square", "show up", "become"],
      correctIndex: 3,
      img: "img/show_up.jpg",
    },
    {
      title: "~을 놀리다",
      options: ["make fun of", "square", "between", "important", "freeze"],
      correctIndex: 0,
      img: "img/make_fun_of.jpg",
    },
    {
      title: "차분한, 침착한",
      options: ["bring", "help", "curly", "calm", "waste"],
      correctIndex: 3,
      img: "img/calm.jpg",
    },
    {
      title: "무릎",
      options: ["knee", "be proud of", "alone", "from time to time", "square"],
      correctIndex: 0,
      img: "img/knee.jpg",
    },
    {
      title: "영리한, 똑똑한",
      options: ["important", "director", "curious", "clever", "promise"],
      correctIndex: 3,
      img: "img/clever.jpg",
    },
    {
      title: "발가락",
      options: ["promise", "toe", "decide", "environment", "language"],
      correctIndex: 1,
      img: "img/toe.jpg",
    },
    {
      title: "지혜로운, 현명한",
      options: ["wonder", "say hello to", "wise", "recycle", "laugh"],
      correctIndex: 2,
      img: "img/wise.jpg",
    },
    {
      title: "어깨",
      options: ["shoulder", "square", "look like", "cut", "wash"],
      correctIndex: 0,
      img: "img/shoulder.jpg",
    },
    {
      title: "정직한,솔직한",
      options: ["environment", "important", "honest", "tradition", "discover"],
      correctIndex: 2,
      img: "img/honest.jpg",
    },
    {
      title: "어린, 젊은",
      options: ["free", "shoulder", "island", "young", "use"],
      correctIndex: 3,
      img: "img/young.jpg",
    },
    {
      title: "예의바른, 공손한",
      options: ["decide", "polite", "spread", "solve", "director"],
      correctIndex: 1,
      img: "img/polite.jpg",
    },
    {
      title: "날씬한, 마른,얇은, 가는",
      options: ["laugh", "thin", "name", "hang out with", "freeze"],
      correctIndex: 1,
      img: "img/thin.jpg",
    },
    {
      title: "호기심이 많은,궁금해하는",
      options: ["be proud of", "curious", "absent", "forecast", "climb"],
      correctIndex: 1,
      img: "img/curious.jpg",
    },
    {
      title: "곱슬곱슬한",
      options: ["collect", "curly", "month", "language", "enough"],
      correctIndex: 1,
      img: "img/curly.jpg",
    },
    {
      title: "원하다,~하고싶다",
      options: ["waste", "want", "freeze", "find out", "help"],
      correctIndex: 1,
      img: "img/want.jpg",
    },
    {
      title: "평범한,정상적인",
      options: ["walk", "traditional", "free", "normal", "become"],
      correctIndex: 3,
      img: "img/normal.jpg",
    },
    {
      title: "~이 되다, ~해지다",
      options: ["become", "accept", "laugh", "curly", "curious"],
      correctIndex: 0,
      img: "img/become.jpg",
    },
    {
      title: "~처럼 보이다",
      options: [
        "refrigerator",
        "look like",
        "between",
        "be interested in",
        "put on",
      ],
      correctIndex: 1,
      img: "img/look_like.jpg",
    },
    {
      title: "감독,연출자",
      options: ["director", "say hello to", "throw", "save", "freeze"],
      correctIndex: 0,
      img: "img/director.jpg",
    },
    {
      title: "이름",
      options: [
        "between",
        "name",
        "from time to time",
        "say hello to",
        "month",
      ],
      correctIndex: 1,
      img: "img/name.jpg",
    },
    {
      title: "불안해하는,긴장한",
      options: ["nervous", "leave", "normal", "free", "student"],
      correctIndex: 0,
      img: "img/nervous.jpg",
    },
    {
      title: "~에 관심이 있다",
      options: ["important", "be interested in", "subject", "language", "walk"],
      correctIndex: 1,
      img: "img/be_interested_in.jpg",
    },
    {
      title: "심각한, 진지한",
      options: ["help", "serious", "have[take] a seat", "decide", "thin"],
      correctIndex: 1,
      img: "img/serious.jpg",
    },
    {
      title: "걷다",
      options: ["carry", "wonder", "walk", "absent", "free"],
      correctIndex: 2,
      img: "img/walk.jpg",
    },
    {
      title: "지루해하는, 지루한",
      options: ["bored", "invite", "thin", "learn", "promise"],
      correctIndex: 0,
      img: "img/bored.jpg",
    },
    {
      title: "던지다",
      options: ["throw", "language", "walk", "promise", "help"],
      correctIndex: 0,
      img: "img/throw.jpg",
    },
    {
      title: "~을 자랑스러워하다",
      options: [
        "be proud of",
        "collect",
        "wonder",
        "from time to time",
        "feel like -ing",
      ],
      correctIndex: 0,
      img: "img/be_proud_of.jpg",
    },
    {
      title: "쓰다,사용하다,사용",
      options: ["say hello to", "accept", "use", "from time to time", "often"],
      correctIndex: 2,
      img: "img/use.jpg",
    },
    {
      title: "결정하다,결심하다",
      options: ["forecast", "decide", "popular", "curious", "walk"],
      correctIndex: 1,
      img: "img/decide.jpg",
    },
    {
      title: "소리[고함]치다",
      options: ["recycle", "shout", "find out", "introduce", "early"],
      correctIndex: 1,
      img: "img/shout.jpg",
    },
    {
      title: "기억하다",
      options: ["curly", "leave", "collect", "remember", "square"],
      correctIndex: 3,
      img: "img/remember.jpg",
    },
    {
      title: "나르다,가지고 다니다",
      options: ["feel like -ing", "between", "waste", "carry", "decide"],
      correctIndex: 3,
      img: "img/carry.jpg",
    },
    {
      title: "궁금하다, 궁금해하다",
      options: [
        "promise",
        "early",
        "wonder",
        "from time to time",
        "have[take] a seat",
      ],
      correctIndex: 2,
      img: "img/wonder.jpg",
    },
    {
      title: "가져오다,데려오다",
      options: ["bring", "laugh", "square", "month", "use"],
      correctIndex: 0,
      img: "img/bring.jpg",
    },
    {
      title: "~하고싶다",
      options: ["feel like -ing", "put on", "remember", "square", "discover"],
      correctIndex: 0,
      img: "img/feel_like_-ing.jpg",
    },
    {
      title: "(소리내어)웃다",
      options: ["student", "laugh", "become", "from time to time", "offer"],
      correctIndex: 1,
      img: "img/laugh.jpg",
    },
    {
      title: "설명하다",
      options: [
        "neighbor",
        "explain",
        "environment",
        "have[take] a seat",
        "curly",
      ],
      correctIndex: 1,
      img: "img/explain.jpg",
    },
    {
      title: "자리에 앉다",
      options: ["knee", "have[take] a seat", "spread", "leave", "discover"],
      correctIndex: 1,
      img: "img/have[take]_a_seat.jpg",
    },
    {
      title: "받아들이다, 수락하다",
      options: [
        "accept",
        "from time to time",
        "say hello to",
        "forecast",
        "discover",
      ],
      correctIndex: 0,
      img: "img/accept.jpg",
    },
    {
      title: "알아내다,발견하다",
      options: ["square", "name", "find out", "refrigerator", "help"],
      correctIndex: 2,
      img: "img/find_out.jpg",
    },
    {
      title: "해결하다,풀다",
      options: ["curly", "solve", "director", "promise", "absent"],
      correctIndex: 1,
      img: "img/solve.jpg",
    },
    {
      title: "~에게 안부를 전하다, ~에게 인사하다",
      options: ["become", "say hello to", "weight", "walk", "remember"],
      correctIndex: 1,
      img: "img/say_hello_to.jpg",
    },
    {
      title: "결석한,(자리에)없는",
      options: ["recycle", "square", "have[take] a seat", "absent", "discover"],
      correctIndex: 3,
      img: "img/absent.jpg",
    },
    {
      title: "약속하다,약속",
      options: ["promise", "be over", "student", "between", "help"],
      correctIndex: 0,
      img: "img/promise.jpg",
    },
    {
      title: "달, 월",
      options: ["from time to time", "decide", "name", "month", "carry"],
      correctIndex: 3,
      img: "img/month.jpg",
    },
    {
      title: "광장;정사각형",
      options: ["square", "invite", "between", "curly", "discover"],
      correctIndex: 0,
      img: "img/square.jpg",
    },
    {
      title: "일찍, 이른",
      options: ["put on", "curious", "leave", "early", "share"],
      correctIndex: 3,
      img: "img/early.jpg",
    },
    {
      title: "냉장고",
      options: ["knee", "refrigerator", "solve", "spread", "bored"],
      correctIndex: 1,
      img: "img/refrigerator.jpg",
    },
    {
      title: "~동안[내내]",
      options: ["curly", "environment", "during", "say hello to", "forecast"],
      correctIndex: 2,
      img: "img/during.jpg",
    },
    {
      title: "얼다,얼리다",
      options: ["freeze", "discover", "recycle", "subject", "feel like -ing"],
      correctIndex: 0,
      img: "img/freeze.jpg",
    },
    {
      title: "~까지,~할 때까지",
      options: ["freeze", "until", "promise", "between", "walk"],
      correctIndex: 1,
      img: "img/until.jpg",
    },
    {
      title: "인기 있는, 대중적인",
      options: ["important", "spread", "popular", "throw", "collect"],
      correctIndex: 2,
      img: "img/popular.jpg",
    },
    {
      title: "자주, 종종",
      options: ["put on", "often", "director", "carry", "curious"],
      correctIndex: 1,
      img: "img/often.jpg",
    },
    {
      title: "~을 입다[신다,쓰다]",
      options: ["thin", "from time to time", "put on", "promise", "curly"],
      correctIndex: 2,
      img: "img/put_on.jpg",
    },
    {
      title: "보통, 대개",
      options: ["usually", "climb", "have[take] a seat", "square", "share"],
      correctIndex: 0,
      img: "img/usually.jpg",
    },
    {
      title: "학생",
      options: ["student", "discover", "thin", "become", "free"],
      correctIndex: 0,
      img: "img/student.jpg",
    },
    {
      title: "가끔, 때때로",
      options: [
        "from time to time",
        "environment",
        "collect",
        "normal",
        "invite",
      ],
      correctIndex: 0,
      img: "img/from_time_to_time.jpg",
    },
    {
      title: "과목",
      options: ["collect", "subject", "island", "say hello to", "student"],
      correctIndex: 1,
      img: "img/subject.jpg",
    },
    {
      title: "모든",
      options: ["square", "all", "wonder", "feel like -ing", "youth"],
      correctIndex: 1,
      img: "img/all.jpg",
    },
    {
      title: "낭비하다,낭비",
      options: ["waste", "director", "from time to time", "accept", "between"],
      correctIndex: 0,
      img: "img/waste.jpg",
    },
    {
      title: "무게, 체중",
      options: [
        "weight",
        "feel like -ing",
        "language",
        "refrigerator",
        "curly",
      ],
      correctIndex: 0,
      img: "img/weight.jpg",
    },
    {
      title: "충분한, 충분히",
      options: ["curious", "between", "enough", "find out", "square"],
      correctIndex: 2,
      img: "img/enough.jpg",
    },
    {
      title: "섬",
      options: ["collect", "island", "walk", "popular", "from time to time"],
      correctIndex: 1,
      img: "img/island.jpg",
    },
    {
      title: "~사이에",
      options: ["curly", "square", "between", "important", "promise"],
      correctIndex: 2,
      img: "img/between.jpg",
    },
    {
      title: "발견하다",
      options: ["invite", "discover", "spread", "square", "subject"],
      correctIndex: 1,
      img: "img/discover.jpg",
    },
    {
      title: "오르다,올라가다",
      options: ["climb", "thin", "neighbor", "collect", "from time to time"],
      correctIndex: 0,
      img: "img/climb.jpg",
    },
    {
      title: "예측,예보, 예측하다",
      options: ["throw", "spread", "forecast", "square", "month"],
      correctIndex: 2,
      img: "img/forecast.jpg",
    },
    {
      title: "떠나다, 놓고 가다",
      options: ["invite", "until", "language", "leave", "walk"],
      correctIndex: 3,
      img: "img/leave.jpg",
    },
    {
      title: "중요한",
      options: ["student", "important", "thin", "curious", "spread"],
      correctIndex: 1,
      img: "img/important.jpg",
    },
    {
      title: "초대하다",
      options: ["invite", "feel like -ing", "laugh", "promise", "carry"],
      correctIndex: 0,
      img: "img/invite.jpg",
    },
    {
      title: "전통적인",
      options: [
        "director",
        "traditional",
        "discover",
        "throw",
        "from time to time",
      ],
      correctIndex: 1,
      img: "img/traditional.jpg",
    },
    {
      title: "모으다,수집하다,",
      options: ["collect", "usually", "find out", "thin", "early"],
      correctIndex: 0,
      img: "img/collect.jpg",
    },
    {
      title: "재활용하다,재활용",
      options: ["recycle", "feel like -ing", "curly", "spread", "laugh"],
      correctIndex: 0,
      img: "img/recycle.jpg",
    },
    {
      title: "자유로운, 무료의",
      options: [
        "free",
        "from time to time",
        "traditional",
        "language",
        "student",
      ],
      correctIndex: 0,
      img: "img/free.jpg",
    },
    {
      title: "환경",
      options: ["become", "square", "environment", "walk", "thin"],
      correctIndex: 2,
      img: "img/environment.jpg",
    },
    {
      title: "주된",
      options: ["enough", "laugh", "main", "curious", "feel like -ing"],
      correctIndex: 2,
      img: "img/main.jpg",
    },
    {
      title: "퍼지다,퍼뜨리다",
      options: ["spread", "absent", "solve", "carry", "climb"],
      correctIndex: 0,
      img: "img/spread.jpg",
    },
    {
      title: "끝나다",
      options: ["shoulder", "important", "remember", "toe", "be over"],
      correctIndex: 4,
      img: "img/be_over.jpg",
    },
    {
      title: "언어,말",
      options: [
        "from time to time",
        "language",
        "find out",
        "spread",
        "show up",
      ],
      correctIndex: 1,
      img: "img/language.jpg",
    },
  ];

  // -----------------------------
  // 1-1. 정답 관리 테이블(100문제) 동적 생성
  // -----------------------------
  const tbody = document.querySelector(".answer-table tbody");
  if (tbody) {
    tbody.innerHTML = ""; // 기존 내용 지우기

    const totalQuestions = questions.length; // 100
    const groupSize = 5; // 한 줄에 5문제씩
    const groupCount = Math.ceil(totalQuestions / groupSize); // 20줄

    for (let g = 0; g < groupCount; g++) {
      const start = g * groupSize + 1; // 1, 6, 11, ... 96

      // 문제 행
      const titleRow = document.createElement("tr");
      const titleLabelCell = document.createElement("td");
      titleLabelCell.textContent = "문제";
      titleRow.appendChild(titleLabelCell);

      // 선택 행
      const answerRow = document.createElement("tr");
      const answerLabelCell = document.createElement("td");
      answerLabelCell.textContent = "선택";
      answerRow.appendChild(answerLabelCell);

      for (let n = start; n < start + groupSize && n <= totalQuestions; n++) {
        const titleTd = document.createElement("td");
        titleTd.id = "title-q" + n;
        titleTd.className = "question-title-cell";
        titleRow.appendChild(titleTd);

        const answerTd = document.createElement("td");
        answerTd.id = "answer-q" + n;
        answerTd.className = "answer";
        answerRow.appendChild(answerTd);
      }

      tbody.appendChild(titleRow);
      tbody.appendChild(answerRow);
    }
  }

  // -----------------------------
  // 1-2. 정답관리 테이블의 '문제' 칸에 title 채우기
  // -----------------------------
  questions.forEach((q, index) => {
    const num = index + 1; // 0→1, 1→2 ...
    const titleCell = document.getElementById("title-q" + num);
    if (titleCell) {
      titleCell.textContent = q.title;
    }
  });

  // -----------------------------
  // 2. 시험 상태 관련 변수
  // -----------------------------
  let currentQuestion = 0; // 현재 문제 index (0~)
  let selectedIndex = null; // 현재 문제에서 사용자가 고른 보기 index (0~4)

  const TIMER_DURATION = 20; // 각 문제당 20초
  let timeLeft = TIMER_DURATION;
  let countdownInterval = null;

  let correctCount = 0; // 맞힌 개수
  const wrongList = []; // 틀린 문제 번호 리스트 (현재는 CSS로만 표시)

  const questionLabel = document.getElementById("questionLabel");
  const btn1 = document.querySelector(".one");
  const btn2 = document.querySelector(".two");
  const btn3 = document.querySelector(".three");
  const btn4 = document.querySelector(".four");
  const btn5 = document.querySelector(".five");
  const buttons = [btn1, btn2, btn3, btn4, btn5];

  const timerSpan = document.getElementById("timer-sec"); // 남은 시간 표시용

  // -----------------------------
  // 타이머 표시 업데이트
  // -----------------------------
  function updateTimerDisplay() {
    if (timerSpan) {
      timerSpan.textContent = timeLeft;
    }
  }

  // -----------------------------
  // 타이머 시작
  // -----------------------------
  function startTimer() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
    timeLeft = TIMER_DURATION;
    updateTimerDisplay();

    countdownInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        handleTimeout(); // ⏰ 시간 다 됐을 때 처리
      }
    }, 1000);
  }

  // -----------------------------
  // 시간 초과 처리: 답은 "-" 로 기록 + 오답 처리
  // -----------------------------
  function handleTimeout() {
    if (currentQuestion >= questions.length) return;

    const questionNumber = currentQuestion + 1;
    const answerCellId = "answer-q" + questionNumber;
    const answerCell = document.getElementById(answerCellId);

    if (answerCell) {
      answerCell.textContent = "-";
      answerCell.setAttribute("value", "-");
      answerCell.classList.add("wrong-cell"); // 틀린 칸 빨간색 표시
    }

    wrongList.push(questionNumber);

    currentQuestion++;

    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      finishExam();
    }
  }

  // -----------------------------
  // 시험 종료 처리 (시험 종료 문구만 보여줌)
  // -----------------------------
  function finishExam() {
    // 타이머 정지
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    // 퀴즈 영역 숨기기
    const quizContainer = document.querySelector(".quiz-container");
    if (quizContainer) {
      quizContainer.style.display = "none";
    }

    // "시험 종료" 패널 보여주기
    const examOver = document.querySelector(".examOver");
    if (examOver) {
      examOver.style.display = "block";
    }
  }

  // -----------------------------
  // 문제 화면에 뿌리기
  // -----------------------------
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    // 선택 상태 초기화
    selectedIndex = null;
    buttons.forEach((btn) => {
      if (btn) btn.classList.remove("selected");
    });

    // 한글 문제
    if (questionLabel) {
      questionLabel.textContent = q.title;
    }

    // (이미지 쓰고 싶으면 HTML에 <img id="questionImage"> 주석 풀고 사용)
    const imgTag = document.getElementById("questionImage");
    if (imgTag && q.img) {
      imgTag.src = q.img;
    }

    // 보기 1~5
    q.options.forEach((opt, index) => {
      const btn = buttons[index];
      if (btn) {
        btn.textContent = index + 1 + ". " + opt;
      }
    });

    // 새 문제마다 타이머 시작
    startTimer();
  }

  renderQuestion();

  // -----------------------------
  // 답 확정 처리 (스페이스 눌렀을 때만 호출)
  // -----------------------------
  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (!q) return;

    // 타이머 정지
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    const selectedText = q.options[choiceIndex];
    const questionNumber = currentQuestion + 1;
    const answerCellId = "answer-q" + questionNumber;
    const answerCell = document.getElementById(answerCellId);

    if (answerCell) {
      answerCell.textContent = selectedText;
      answerCell.setAttribute("value", selectedText);
    }

    // 정답/오답 체크
    if (choiceIndex === q.correctIndex) {
      correctCount++;
    } else {
      wrongList.push(questionNumber);
      if (answerCell) {
        answerCell.classList.add("wrong-cell"); // 틀린 칸 빨간색 표시
      }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      finishExam();
    }
  }

  // -----------------------------
  // 키보드 입력 처리
  //   - 1~5 : 보기 선택만 (하이라이트 + index 저장)
  //   - Space : 선택된 보기로 handleAnswer 호출
  // -----------------------------
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };

  document.addEventListener("keydown", function (event) {
    // 시험 끝난 뒤에는 키 입력 무시
    if (currentQuestion >= questions.length) return;

    // 1) 스페이스 처리
    if (event.code === "Space") {
      event.preventDefault(); // 스페이스 기본 스크롤 방지

      if (selectedIndex === null) {
        alert("먼저 1~5 중 하나를 선택하세요.");
        return;
      }

      handleAnswer(selectedIndex);
      return;
    }

    // 2) 숫자 1~5 처리 (선택만)
    const choiceIndex = keyToIndex[event.key];

    if (choiceIndex !== undefined) {
      selectedIndex = choiceIndex;

      // 버튼 하이라이트 효과
      buttons.forEach((btn, idx) => {
        if (!btn) return;
        if (idx === choiceIndex) {
          btn.classList.add("selected");
        } else {
          btn.classList.remove("selected");
        }
      });
    } else {
      // 그 외 키
      alert("⚠️ 경고: 허용되지 않은 키입니다!");
    }
  });

  // -----------------------------
  // 마우스를 클릭했을 때도 경고 표시 (퀴즈 진행 중에만)
  // -----------------------------
  document.addEventListener("click", function (event) {
    // 시험이 이미 끝난 뒤에는 마우스 허용 (결과보기 버튼 눌러야 하니까)
    if (currentQuestion >= questions.length) return;
    alert("⚠️ 경고: 허용되지 않은 키입니다!");
  });

  // -----------------------------
  // 3. 결과보기 버튼 (전역 함수로 노출)
  // -----------------------------
  window.resultOk = function () {
    // 시험 종료 문구 숨기기
    const examOver = document.querySelector(".examOver");
    if (examOver) {
      examOver.style.display = "none";
    }

    // 정답 패널 보이기
    const answerPanel = document.querySelector(".answer-panel");
    if (answerPanel) {
      answerPanel.style.display = "block";
    }

    // 결과 데이터 채우기
    const resultName = document.getElementById("result-name");
    const resultCorrect = document.getElementById("result-correct");
    const resultTotal = document.getElementById("result-total");

    if (resultName) resultName.textContent = studentNameValue;
    if (resultCorrect) resultCorrect.textContent = correctCount;
    if (resultTotal) resultTotal.textContent = questions.length;

    // -------------------------
    // 정답 화면을 PDF로 저장
    // -------------------------
    const answerPanelEl = document.querySelector(".answer-panel");
    if (!answerPanelEl) return;

    // 살짝 그려질 시간 주기
    setTimeout(() => {
      html2canvas(answerPanelEl).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        const d = new Date();
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        const dateStr = `${yyyy}${mm}${dd}`;

        const safeName = (studentNameValue || "이름없음").replace(/\s+/g, "_");

        pdf.save(`${dateStr}_${safeName}_결과.pdf`);
      });
    }, 500);
  };
};
