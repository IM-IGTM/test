window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 (결과에서 사용)
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // =============================
  // 1. 데이터 세트 정의
  // =============================

  // 1-1) 뜻(한국어) → 영어 단어 맞추기
  const korToEngPairs1 = [
    ["얼다, 얼리다", "freeze"],
    ["끝나다", "be over"],
    ["발가락", "toe"],
    ["(소리 내어) 웃다", "laugh"],
    ["함께 쓰다; 나누다", "share"],
    ["기억하다", "remember"],
    ["~하고 싶다", "feel like -ing"],
    ["지루해하는, 지루한", "bored"],
    ["~을 입다[신다, 쓰다]", "put on"],
    ["소리[고함]치다", "shout"],
    ["이웃", "neighbor"],
    ["보통, 대개", "usually"],
    ["감독, 연출자", "director"],
    ["원하다, ~하고 싶다", "want"],
    ["누군가, 어떤 사람", "someone"],
    ["곱슬곱슬한", "curly"],
    ["달, 월", "month"],
    ["충분한, 충분히", "enough"],
    ["모으다, 수집하다", "collect"],
    ["섬", "island"],
    ["차분한, 침착한", "calm"],
    ["사촌", "cousin"],
    ["가끔, 때때로", "from time to time"],
    ["중요한", "important"],
    ["언어, 말", "language"],
    ["해결하다, 풀다", "solve"],
    ["지혜로운, 현명한", "wise"],
    ["퍼지다; 퍼뜨리다", "spread"],
    ["자주, 종종", "often"],
    ["오르다, 올라가다", "climb"],
    ["나이", "age"],
    ["어깨", "shoulder"],
    ["서로", "each other"],
    ["사람들", "people"],
    ["자유로운; 무료의", "free"],
  ];

  // 1-2) 영어 → 뜻(한국어) 맞추기
  const engToKorPairs2 = [
    ["during", "~동안[내내], ~중에"],
    ["terrible", "끔찍한, 형편없는"],
    ["normal", "평범한, 정상적"],
    ["refrigerator", "냉장고"],
    ["invite", "초대하다"],
    ["main", "주된"],
    ["explain", "설명하다"],
    ["hang out with", "(~와) 시간을 보내다, 어울려 놀다"],
    ["understand", "이해하다"],
    ["relative", "친척"],
    ["curious", "호기심이 많은, 궁금해하는"],
    ["classmate", "급우, 반 친구"],
    ["make fun of", "~을 놀리다"],
    ["popular", "인기 있는, 대중적인"],
    ["between", "~ 사이에"],
    ["name", "이름"],
    ["take care of", "~을 돌보다"],
    ["become", "~이 되다, ~해지다"],
    ["young", "어린, 젊은"],
    ["wonder", "궁금하다, 궁금해하다"],
    ["together", "함께, 같이"],
    ["walk", "걷다; 산책시키다, 걷기"],
    ["forecast", "예측, 예보, 예측하다"],
    ["recycle", "재활용하다, 재활용"],
    ["all", "모든"],
    ["knee", "무릎"],
    ["absent", "결석한, (자리에) 없는"],
    ["serious", "심각한, 진지한"],
    ["join", "가입하다, 함께하다"],
    ["nervous", "불안해하는, 긴장한"],
    ["leave", "떠나다, 놓고 가다"],
    ["have a seat", "자리에 앉다"],
    ["square", "광장; 정사각형"],
    ["clever", "영리한, 똑똑한"],
    ["carry", "나르다; 가지고 다니다"],
  ];

  // 1-3) 문장 빈칸 채우기 (영어 표현 4지선다)
  const sentencePairs = [
    [
      "I __________ dog training.\n 나는 개 훈련에 관심이 있다.",
      "be interested in",
    ],
    ["It  ___ ___ a big snake.\n 그것은 큰 뱀처럼 보인다.", "look like"],
    ["Leave me  __________.\n 날 혼자 내버려둬.", "alone"],
    ["__________ your mother.\n 너의 어머니께 안부를 전해 줘", "say hello to"],
    ["An __________  person.\n 정직한 사람", "honest"],
    [
      "He is trying to lose __________.\n 그는 체중을 줄이려고 노력하고 있다.",
      "weight",
    ],
    [
      "Mary has her  __________ blog.\n Mary는 그녀 자신의 블로그를 가지고 있다.",
      "own",
    ],
    [
      "They __________  sandwiches and fruit.\n 그들은 샌드위치와 과일을 가져온다.",
      "bring",
    ],
    ["natural ______________\n 자연 환경", "environment"],
    ["She loooks  __________.\n 그 상자 안에는 아무것도 없다.", "thin"],
    ["a __________ city.\n 낯선 도시", "strange"],
    ["I __________ .\n 내가 약속할게", "promise"],
    ["__________ your idea.\n 너의 생각을 받아들이다.", "accept"],
    ["A __________  child.\n 예의 바른 어린이", "polite"],
    [
      "Rabbit __________  of his speed.\n 토끼는 그의 빠름을 자랑스러워했다.",
      "be proud of",
    ],
    ["a famous __________.\n 유명한 사람", "person"],
    [
      "Do you want to __________ new things?\n 너는 새로운 것을 발견하길 원하니?",
      "find out",
    ],
    ["__________ my friends.\n 내 친구들을 소개하다.", "introduce"],
    ["We __________ too many cups.\n 우리는 너무 많은 컵을 사용한다.", "use"],
    ["I get up __________.\n 나는 일찍 일어난다.", "early"],
    ["A middle school __________ .\n 중학생", "student"],
    ["He __________  late.\n 그녀의 감정을 드러내다.", "show up"],
    ["__________ a ball.\n 공을 던지다.", "throw"],
    ["become an __________.\n 어른이 되다.", "adult"],
    ["__________ to be a singer.\n 가수가 되기로 결심하다.", "decide"],
    [
      "He __________ed new marine animals.\n 그는 새로운 해양 동물을 발견했다.",
      "discover",
    ],
    ["an old  __________.\n 오랜 우정", "friendship"],
    ["__________ the 16th century.\n 16세기 까지", "until"],
    [
      "My favorite __________ is science.\n 내가 가장 좋아하는 과목은 과학이다.",
      "subject",
    ],
    [
      "Hanji is a _____________________ Korean paper.\n 한지는 전통적인 한국 종이이다.",
      "traditional",
    ],
  ];

  // =============================
  // 2. 공통 유틸
  // =============================
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // =============================
  // 3. 세트별 문제 객체 만들기
  // =============================

  // 3-1) 한국어 → 영어
  const allEng1 = korToEngPairs1.map(([, eng]) => eng);
  const korToEngQuestions = korToEngPairs1.map(([kor, eng]) => {
    let options = [eng];
    let wrong = allEng1.filter((e) => e !== eng);
    shuffle(wrong);
    options.push(...wrong.slice(0, 3));
    shuffle(options);
    return {
      type: "korToEng",
      title: kor,
      options,
      correctIndex: options.indexOf(eng),
      img: null,
    };
  });

  // 3-2) 영어 → 한국어
  const allKor2 = engToKorPairs2.map(([, kor]) => kor);
  const engToKorQuestions = engToKorPairs2.map(([eng, kor]) => {
    let options = [kor];
    let wrong = allKor2.filter((k) => k !== kor);
    shuffle(wrong);
    options.push(...wrong.slice(0, 3));
    shuffle(options);
    return {
      type: "engToKor",
      title: eng,
      options,
      correctIndex: options.indexOf(kor),
      img: null,
    };
  });

  // 3-3) 문장 빈칸
  const allSentAnswers = sentencePairs.map(([, ans]) => ans);
  const sentenceQuestions = sentencePairs.map(([sent, ans]) => {
    let options = [ans];
    let wrong = allSentAnswers.filter((x) => x !== ans);
    shuffle(wrong);
    options.push(...wrong.slice(0, 3));
    shuffle(options);
    return {
      type: "sentence",
      title: sent,
      options,
      correctIndex: options.indexOf(ans),
      img: null,
    };
  });

  // =============================
  // 4. 최종 문제 배열 (총 100문제)
  // 1~35 : 한국어→영어
  // 36~70: 영어→한국어
  // 71~100: 문장 빈칸
  // =============================
  const questions = [
    ...korToEngQuestions,
    ...engToKorQuestions,
    ...sentenceQuestions,
  ];

  // =============================
  // 5. 정답 테이블 동적 생성 (5문제씩 가로)
  // =============================
  const tbody = document.querySelector(".answer-table tbody");
  if (tbody) {
    tbody.innerHTML = "";
    const totalQuestions = questions.length; // 100
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
        const q = questions[n - 1];

        const titleTd = document.createElement("td");
        titleTd.id = "title-q" + n;
        titleTd.className = "question-title-cell";
        titleTd.textContent = q.title;
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

  // =============================
  // 6. 시험 상태 & DOM
  // =============================
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
  //const btn5 = document.querySelector(".five");
  const buttons = [btn1, btn2, btn3, btn4];

  const timerSpan = document.getElementById("timer-sec");
  const imgTag = document.getElementById("questionImage"); // 있어도 되고 없어도 됨

  // =============================
  // 7. 타이머
  // =============================
  function updateTimerDisplay() {
    if (timerSpan) timerSpan.textContent = timeLeft;
  }

  function startTimer() {
    if (countdownInterval) clearInterval(countdownInterval);
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

  // =============================
  // 8. 시험 종료
  // =============================
  function finishExam() {
    if (countdownInterval) clearInterval(countdownInterval);

    const quizContainer = document.querySelector(".quiz-container");
    if (quizContainer) quizContainer.style.display = "none";

    const examOver = document.querySelector(".examOver");
    if (examOver) examOver.style.display = "block";
  }

  // =============================
  // 9. 문제 렌더링
  // =============================
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    selectedIndex = null;
    buttons.forEach((btn) => btn && btn.classList.remove("selected"));

    if (questionLabel) questionLabel.textContent = q.title;

    // 이 세트에서는 전부 이미지가 없으므로 항상 숨김
    if (imgTag) {
      imgTag.style.display = "none";
    }

    q.options.forEach((opt, idx) => {
      const btn = buttons[idx];
      if (btn) btn.textContent = idx + 1 + ". " + opt;
    });

    startTimer();
  }

  renderQuestion();

  // =============================
  // 10. 정답 확정 (Space)
  // =============================
  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (!q) return;

    if (countdownInterval) clearInterval(countdownInterval);

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
      if (answerCell) answerCell.classList.add("wrong-cell");
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      finishExam();
    }
  }

  // =============================
  // 11. 키보드 입력 (1~5 / Space)
  // =============================
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

  // =============================
  // 12. 마우스 클릭 경고 (시험 중에만)
  // =============================
  document.addEventListener("click", function () {
    if (currentQuestion >= questions.length) return;
    alert("⚠️ 경고: 허용되지 않은 키입니다!");
  });

  // =============================
  // 13. 결과보기 버튼 (전역 함수)
  // =============================
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
    if (examOver) examOver.style.display = "none";

    const answerPanel = document.querySelector(".answer-panel");
    if (answerPanel) answerPanel.style.display = "block";

    const resultName = document.getElementById("result-name");
    const resultCorrect = document.getElementById("result-correct");
    const resultTotal = document.getElementById("result-total");

    if (resultName) resultName.textContent = studentNameValue;
    if (resultCorrect) resultCorrect.textContent = correctCount;
    if (resultTotal) resultTotal.textContent = questions.length;

    const answerPanelEl = document.querySelector(".answer-panel");
    if (!answerPanelEl) return;

    // pdf 저장 (html2canvas + jsPDF 가 script 로 로드되어 있어야 함)
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
