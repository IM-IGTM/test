window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 (결과에서 사용)
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // ----------------------------------------------------
  // 1. 그림 보고 영어 단어 맞추기 (1~50번) - pictureQuestions
  //    title: 한글 뜻, options: 영어 보기 5개, img: 그림
  //    ⚠️ 정답은 항상 options의 마지막 요소로 넣어둠
  // ----------------------------------------------------
  const pictureQuestionsSeed = [
    {
      title: "꿈, 꿈을 꾸다",
      options: ["always", "leader", "live", "dream"],
      img: "img/dream.png",
    },
    {
      title: "항상",
      options: ["dream", "leader", "fun", "always"],
      img: "img/always.png",
    },
    {
      title: "지도자",
      options: ["student", "talk", "today", "leader"],
      img: "img/leader.png",
    },
    {
      title: "살다",
      options: ["learn", "get", "wait", "live"],
      img: "img/live.png",
    },
    {
      title: "맛있는",
      options: ["new", "warm", "best", "delicious"],
      img: "img/delicious.png",
    },
    {
      title: "피자",
      options: ["museum", "vegetable", "bedroom", "pizza"],
      img: "img/pizza.png",
    },
    {
      title: "새로운",
      options: ["old", "clean", "together", "new"],
      img: "img/new.png",
    },
    {
      title: "공원",
      options: ["hospital", "baker", "table", "park"],
      img: "img/park.png",
    },
    {
      title: "가르치다",
      options: ["learn", "talk", "carry", "teach"],
      img: "img/teach.png",
    },
    {
      title: "깨끗한, 청소하다",
      options: ["dirty", "warm", "hospital", "clean"],
      img: "img/clean.png",
    },
    {
      title: "가끔, 때때로",
      options: ["always", "best", "many", "sometimes"],
      img: "img/sometimes.png",
    },
    {
      title: "즐거운, 재미",
      options: ["sad", "talk", "wait", "fun"],
      img: "img/fun.png",
    },
    {
      title: "~위에",
      options: ["under", "from", "outside", "over"],
      img: "img/over.png",
    },
    {
      title: "배, 보트",
      options: ["train", "museum", "park", "boat"],
      img: "img/boat.png",
    },
    {
      title: "외부의, 바깥쪽",
      options: ["inside", "together", "over", "outside"],
      img: "img/outside.png",
    },
    {
      title: "안경",
      options: ["teeth", "ring", "vegetable", "glasses"],
      img: "img/glasses.png",
    },
    {
      title: "욕실",
      options: ["kitchen", "bedroom", "museum", "bathroom"],
      img: "img/bathroom.png",
    },
    {
      title: "기차, 열차",
      options: ["boat", "car", "hospital", "train"],
      img: "img/train.png",
    },
    {
      title: "배우다",
      options: ["teach", "get", "show", "learn"],
      img: "img/learn.png",
    },
    {
      title: "박물관",
      options: ["school", "hospital", "bedroom", "museum"],
      img: "img/museum.png",
    },
    {
      title: "무지개",
      options: ["snowman", "some", "warm", "rainbow"],
      img: "img/rainbow.png",
    },
    {
      title: "최고의",
      options: ["many", "some", "new", "best"],
      img: "img/best.png",
    },
    {
      title: "이야기하다",
      options: ["speak", "learn", "show", "talk"],
      img: "img/talk.png",
    },
    {
      title: "학생",
      options: ["kid", "baker", "leader", "student"],
      img: "img/student.png",
    },
    {
      title: "구르다",
      options: ["run", "walk", "carry", "roll"],
      img: "img/roll.png",
    },
    {
      title: "이 (tooth의 복수)",
      options: ["mouth", "finger", "lip", "teeth"],
      img: "img/teeth.png",
    },
    {
      title: "입고 있다",
      options: ["put", "carry", "roll", "wear"],
      img: "img/wear.png",
    },
    {
      title: "눈사람",
      options: ["rainbow", "kid", "museum", "snowman"],
      img: "img/snowman.png",
    },
    {
      title: "야채, 채소",
      options: ["fruit", "pizza", "meal", "vegetable"],
      img: "img/vegetable.png",
    },
    {
      title: "병원",
      options: ["school", "kitchen", "museum", "hospital"],
      img: "img/hospital.png",
    },
    {
      title: "함께, 같이",
      options: ["alone", "outside", "best", "together"],
      img: "img/together.png",
    },
    {
      title: "제빵사",
      options: ["student", "teacher", "doctor", "baker"],
      img: "img/baker.png",
    },
    {
      title: "침실",
      options: ["kitchen", "living room", "hospital", "bedroom"],
      img: "img/bedroom.png",
    },
    {
      title: "울리다",
      options: ["call", "talk", "show", "ring"],
      img: "img/ring.png",
    },
    {
      title: "~에서(부터)",
      options: ["over", "together", "outside", "from"],
      img: "img/from.png",
    },
    {
      title: "누워 있다, 눕다",
      options: ["live", "sleep", "stay", "lie"],
      img: "img/lie.png",
    },
    {
      title: "동물",
      options: ["student", "kid", "turtle", "animal"],
      img: "img/animal.png",
    },
    {
      title: "식탁",
      options: ["bed", "desk", "kitchen", "table"],
      img: "img/table.png",
    },
    {
      title: "몇몇의, 일부의",
      options: ["many", "best", "warm", "some"],
      img: "img/some.png",
    },
    {
      title: "제발",
      options: ["today", "always", "sorry", "please"],
      img: "img/please.png",
    },
    {
      title: "들고 있다, 나르다",
      options: ["put", "roll", "get", "carry"],
      img: "img/carry.png",
    },
    {
      title: "머무르다",
      options: ["stay", "go", "get", "stay"],
      img: "img/stay.png",
    },
    {
      title: "받다, 얻다",
      options: ["put", "take", "show", "get"],
      img: "img/get.png",
    },
    {
      title: "과학",
      options: ["art", "math", "school", "science"],
      img: "img/science.png",
    },
    {
      title: "보여주다",
      options: ["talk", "teach", "get", "show"],
      img: "img/show.png",
    },
    {
      title: "많은",
      options: ["some", "little", "best", "many"],
      img: "img/many.png",
    },
    {
      title: "오늘",
      options: ["nowadays", "sometimes", "warm", "today"],
      img: "img/today.png",
    },
    {
      title: "따뜻한",
      options: ["hot", "cold", "new", "warm"],
      img: "img/warm.png",
    },
    {
      title: "놓다, 두다",
      options: ["get", "carry", "roll", "put"],
      img: "img/put.png",
    },
    {
      title: "기다리다",
      options: ["get", "stay", "roll", "wait"],
      img: "img/wait.png",
    },
  ];

  // ----------------------------------------------------
  // 2. 영어 → 한국어 뜻 고르기 (51~75번 정도)
  //    [영어, 한국어] 쌍
  // ----------------------------------------------------
  const vocabList = [
    ["kid", "아이, 청소년"],
    ["scientist", "과학자"],
    ["football", "(미식) 축구"],
    ["watch", "보다, 주시하다"],
    ["math", "수학"],
    ["pants", "바지"],
    ["people", "사람들"],
    ["turtle", "거북이"],
    ["fall", "떨어지다"],
    ["elephant", "코끼리"],
    ["dirty", "더러운"],
    ["library", "도서관"],
    ["meet", "만나다"],
    ["giraffe", "기린"],
    ["wash", "씻다"],
    ["ice", "얼음"],
    ["little", "작은"],
    ["lamp", "램프, 등"],
    ["listen", "(귀 기울여) 듣다"],
    ["dinner", "저녁(식사)"],
    ["tell", "말하다, 알리다"],
    ["lunch", "점심(식사)"],
    ["well", "잘, 좋게, 건강한"],
    ["weather", "날씨"],
    ["feed", "먹이를 주다"],
  ];

  // ----------------------------------------------------
  // 3. 뜻(한국어) → 영어 고르기 (76~100번)
  //    [한국어, 영어] 쌍
  // ----------------------------------------------------
  const korToEngList = [
    ["작가", "writer"],
    ["주, 일주일", "week"],
    ["옷", "clothes"],
    ["토끼", "rabbit"],
    ["공정한", "fair"],
    ["(음식을) 먹다", "have"],
    ["호수", "lake"],
    ["부드러운, 푹신한", "soft"],
    ["필요하다", "need"],
    ["주방, 부엌", "kitchen"],
    ["치과의사", "dentist"],
    ["늦은", "late"],
    ["비행기", "airplane"],
    ["땅", "ground"],
    ["닭", "chicken"],
    ["부모", "parents"],
    ["전화하다, ~라고 부르다", "call"],
    ["표, 입장권", "ticket"],
    ["옷장", "closet"],
    ["많은, 매우", "much"],
    ["음식, 식품", "food"],
    ["미술", "art"],
    ["식물", "plant"],
    ["가지고 가다, 데리고 가다", "take"],
    ["모든", "every"],
  ];

  // -----------------------------
  // 공통: 배열 섞기
  // -----------------------------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // -----------------------------
  // 4. 그림 세트 → pictureQuestions (정답 인덱스 계산 수정!)
  // -----------------------------
  const pictureQuestions = pictureQuestionsSeed.map((q) => {
    const options = [...q.options];
    // 정답 영어단어는 항상 마지막 옵션(5번째)이라고 가정
    const correctWord = q.options[q.options.length - 1];
    shuffle(options);
    const correctIndex = options.indexOf(correctWord);

    return {
      ...q,
      options,
      correctIndex,
    };
  });

  // -----------------------------
  // 5. 영어→한국어 세트 → vocabQuestions
  // -----------------------------
  const allKorean = vocabList.map(([_, kor]) => kor);

  const vocabQuestions = vocabList.map(([eng, kor]) => {
    let options = [kor];
    let wrong = allKorean.filter((k) => k !== kor);
    shuffle(wrong);
    options.push(...wrong.slice(0, 3));
    shuffle(options);

    return {
      title: eng,
      options,
      correctIndex: options.indexOf(kor),
      img: null,
    };
  });

  // -----------------------------
  // 6. 한국어→영어 세트 → korToEngQuestions
  // -----------------------------
  const allEnglishKorSet = korToEngList.map(([_, eng]) => eng);

  const korToEngQuestions = korToEngList.map(([kor, eng]) => {
    let options = [eng];
    let wrong = allEnglishKorSet.filter((e) => e !== eng);
    shuffle(wrong);
    options.push(...wrong.slice(0, 3));
    shuffle(options);

    return {
      title: kor,
      options,
      correctIndex: options.indexOf(eng),
      img: null,
    };
  });

  // -----------------------------
  // 7. 최종 시험 문제
  // -----------------------------
  const questions = [
    ...pictureQuestions, // 1~50 (그림, title=한글)
    ...vocabQuestions, // 51~75 (영어→한글)
    ...korToEngQuestions, // 76~100 (한글→영어)
  ];

  // -----------------------------
  // 8. 정답 테이블 동적 생성 (5문제씩 가로)
  // -----------------------------
  const tbody = document.querySelector(".answer-table tbody");
  if (tbody) {
    tbody.innerHTML = "";

    const totalQuestions = questions.length;
    const groupSize = 4;
    const groupCount = Math.ceil(totalQuestions / groupSize);

    for (let g = 0; g < groupCount; g++) {
      const start = g * groupSize + 1;

      const titleRow = document.createElement("tr");
      const titleLabelCell = document.createElement("td");
      titleLabelCell.textContent = "문제";
      titleRow.appendChild(titleLabelCell);

      const answerRow = document.createElement("tr");
      const answerLabelCell = document.createElement("td");
      answerLabelCell.textContent = "선택";
      answerRow.appendChild(answerLabelCell);

      for (let n = start; n < start + groupSize && n <= totalQuestions; n++) {
        const titleTd = document.createElement("td");
        titleTd.id = "title-q" + n;
        titleTd.className = "question-title-cell";
        titleTd.textContent = questions[n - 1].title;
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
  // 9. 시험 상태 변수
  // -----------------------------
  let currentQuestion = 0;
  let selectedIndex = null;

  const TIMER_DURATION = 20;
  let timeLeft = TIMER_DURATION;
  let countdownInterval = null;

  let correctCount = 0;
  const wrongList = [];

  const questionLabel = document.getElementById("questionLabel");
  const btn1 = document.querySelector(".one");
  const btn2 = document.querySelector(".two");
  const btn3 = document.querySelector(".three");
  const btn4 = document.querySelector(".four");
  const buttons = [btn1, btn2, btn3, btn4];

  const timerSpan = document.getElementById("timer-sec");

  // -----------------------------
  // 10. 타이머
  // -----------------------------
  function updateTimerDisplay() {
    if (timerSpan) {
      timerSpan.textContent = timeLeft;
    }
  }

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
        handleTimeout();
      }
    }, 1000);
  }

  function handleTimeout() {
    if (currentQuestion >= questions.length) return;

    const questionNumber = currentQuestion + 1;
    const answerCell = document.getElementById("answer-q" + questionNumber);

    if (answerCell) {
      answerCell.textContent = "-";
      answerCell.setAttribute("value", "-");
      answerCell.classList.add("wrong-cell");
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
  // 11. 시험 종료
  // -----------------------------
  function finishExam() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    const quizContainer = document.querySelector(".quiz-container");
    if (quizContainer) {
      quizContainer.style.display = "none";
    }

    const examOver = document.querySelector(".examOver");
    if (examOver) {
      examOver.style.display = "block";
    }
  }

  // -----------------------------
  // 12. 문제 렌더링
  // -----------------------------
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    selectedIndex = null;
    buttons.forEach((btn) => btn && btn.classList.remove("selected"));

    if (questionLabel) {
      questionLabel.textContent = q.title;
    }

    const imgTag = document.getElementById("questionImage");
    if (imgTag) {
      if (q.img) {
        imgTag.src = q.img;
        imgTag.style.display = "block";
      } else {
        imgTag.style.display = "none";
      }
    }

    q.options.forEach((opt, idx) => {
      const btn = buttons[idx];
      if (btn) {
        btn.textContent = idx + 1 + ". " + opt;
      }
    });

    startTimer();
  }

  renderQuestion();

  // -----------------------------
  // 13. 정답 확정 (Space)
  // -----------------------------
  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (!q) return;

    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    const selectedText = q.options[choiceIndex];
    const questionNumber = currentQuestion + 1;
    const answerCell = document.getElementById("answer-q" + questionNumber);

    if (answerCell) {
      answerCell.textContent = selectedText;
      answerCell.setAttribute("value", selectedText);
    }

    if (choiceIndex === q.correctIndex) {
      correctCount++;
    } else {
      wrongList.push(questionNumber);
      if (answerCell) {
        answerCell.classList.add("wrong-cell");
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
  // 14. 키보드 입력 (1~5 / Space)
  // -----------------------------
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3 };

  document.addEventListener("keydown", function (event) {
    if (currentQuestion >= questions.length) return;

    if (event.code === "Space") {
      event.preventDefault();
      if (selectedIndex === null) {
        alert("먼저 1~4 중 하나를 선택하세요.");
        return;
      }
      handleAnswer(selectedIndex);
      return;
    }

    const choiceIndex = keyToIndex[event.key];
    if (choiceIndex !== undefined) {
      selectedIndex = choiceIndex;
      buttons.forEach((btn, idx) => {
        if (!btn) return;
        if (idx === choiceIndex) btn.classList.add("selected");
        else btn.classList.remove("selected");
      });
    } else {
      alert("⚠️ 경고: 허용되지 않은 키입니다!");
    }
  });

  // -----------------------------
  // 15. 마우스 클릭 경고 (시험 중에만)
  // -----------------------------
  document.addEventListener("click", function () {
    if (currentQuestion >= questions.length) return;
    alert("⚠️ 경고: 허용되지 않은 키입니다!");
  });

  // -----------------------------
  // 16. 결과보기 버튼 (전역 함수)
  // -----------------------------
  window.resultOk = function () {
    // 비밀번호 확인 (1234)
    const inputPwd = prompt("결과를 보려면 비밀번호를 입력하세요:");

    if (inputPwd === null) {
      alert("취소되었습니다.");
      return;
    }

    if (inputPwd !== "1234") {
      alert("비밀번호가 올바르지 않습니다!");
      return;
    }
    const examOver = document.querySelector(".examOver");
    if (examOver) {
      examOver.style.display = "none";
    }

    const answerPanel = document.querySelector(".answer-panel");
    if (answerPanel) {
      answerPanel.style.display = "block";
    }

    const resultName = document.getElementById("result-name");
    const resultCorrect = document.getElementById("result-correct");
    const resultTotal = document.getElementById("result-total");

    if (resultName) resultName.textContent = studentNameValue;
    if (resultCorrect) resultCorrect.textContent = correctCount;
    if (resultTotal) resultTotal.textContent = questions.length;

    const answerPanelEl = document.querySelector(".answer-panel");
    if (!answerPanelEl) return;

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
