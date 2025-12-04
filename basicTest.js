window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 (결과에서 사용)
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // ===============================
  // 1. 공통: 배열 섞기 함수
  // ===============================
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ===============================
  // 2. 1유형: 뜻 보고 영어 고르기 (1~35번)
  // ===============================
  const korToEngPairs = [
    ["문제", "problem"],
    ["조종사, 비행사", "pilot"],
    ["주의, 주목, 관심", "attention"],
    ["얼다, 얼리다", "freeze"],
    ["평화, 평온, 화목", "peace"],
    ["실수, 잘못, 오해하다", "mistake"],
    ["매체[미디어/대중매체]", "media"],
    ["기부[기증]하다", "donate"],
    ["사회적인, 사교적인", "social"],
    ["궁전, 왕실, 대저택", "palace"],
    ["위험한", "dangerous"],
    ["더(많이)", "more"],
    ["청바지", "jeans"],
    ["젓가락", "chopsticks"],
    ["요즘에는", "nowadays"],
    ["모양, 형태, 모양으로 만들다[빚다]", "shape"],
    ["구급차", "ambulance"],
    ["조금, 약간, 잠깐", "bit"],
    ["호각, 호루라기/호각 소리, 휘파람을 불다", "whistle"],
    ["서류철, 폴더", "folder"],
    ["지혜로운, 슬기로운", "wise"],
    ["신뢰, 신임, 신뢰하다", "trust"],
    ["오이", "cucumber"],
    ["흐르다, 쏟다", "spill"],
    ["보물", "treasure"],
    ["숲", "forest"],
    ["선택, 선택권", "choice"],
    ["구덩이, 구멍", "hole"],
    ["마지막에", "last"],
    ["공주", "princess"],
    ["부활절", "Easter"],
    ["손님, 고객", "customer"],
    ["해안[해변]", "shore"],
    ["거주지, 서식지", "habitat"],
    ["가위", "scissors"],
  ];

  const allEng1 = korToEngPairs.map(([, eng]) => eng);

  const type1Questions = korToEngPairs.map(([kor, eng]) => {
    let options = [eng];
    let wrong = allEng1.filter((e) => e !== eng);
    shuffle(wrong);
    options.push(...wrong.slice(0, 4));
    shuffle(options);

    return {
      type: "korToEng",
      title: kor,
      options,
      correctIndex: options.indexOf(eng),
      img: null,
    };
  });

  // ===============================
  // 3. 2유형: 영어 보고 뜻 고르기 (36~70번)
  // ===============================
  const engToKorPairs = [
    ["octopus", "문어"],
    ["pigeon", "비둘기"],
    ["elementary", "초보의, 기본적인"],
    ["public", "공공의, 일반[대중]의"],
    ["survive", "생존하다, 살아남다"],
    ["child", "아이, 어린이"],
    ["title", "제목, 표제, 제목을 붙이다"],
    ["feather", "깃털"],
    ["insect", "곤충"],
    ["dig", "파다"],
    ["global", "세계적인, 지구의"],
    ["everything", "모든 것, 모두"],
    ["toothpaste", "치약"],
    ["cloud", "구름"],
    ["lightning", "번개"],
    ["until", "~(때)까지"],
    ["fireplace", "벽난로"],
    ["medicine", "약, 약물/의학, 의술"],
    ["grab", "붙잡다, 움켜잡다"],
    ["contest", "대회, 시합"],
    ["needle", "바늘"],
    ["carpenter", "목수"],
    ["dozen", "12개짜리 한 묶음, 다스"],
    ["bridge", "다리"],
    ["reject", "거부[거절]하다"],
    ["lazy", "게으른"],
    ["future", "미래, 장래, 앞날, 미래의"],
    ["stair", "계단"],
    ["peel", "껍질을 벗기다, 깎다, 껍질"],
    ["travel", "여행, 여행하다"],
    ["muscle", "근육"],
    ["doll", "인형"],
    ["rooster", "수탉"],
    ["flat", "평평한"],
    ["passenger", "승객"],
  ];

  const allKor2 = engToKorPairs.map(([, kor]) => kor);

  const type2Questions = engToKorPairs.map(([eng, kor]) => {
    let options = [kor];
    let wrong = allKor2.filter((k) => k !== kor);
    shuffle(wrong);
    options.push(...wrong.slice(0, 4));
    shuffle(options);

    return {
      type: "engToKor",
      title: eng,
      options,
      correctIndex: options.indexOf(kor),
      img: null,
    };
  });

  // ===============================
  // 4. 3유형: 문장 보고 영어 고르기 (71~100번)
  // ===============================
  const sentencePairs = [
    ["Poverty is a ________ of her novel.", "theme"],
    ["Today we'll paint using your ________.", "palm"],
    ["And now, ________ me.", "follow"],
    ["________ takes in water from the ground.", "root"],
    ["The ________ students wanted to play soccer.", "male"],
    ["There is a ________ of water.", "bottle"],
    ["Where is your ________.", "hometown"],
    ["He usually takes his ________.", "dictionary"],
    ["The ________ was delicious.", "meal"],
    ["His game beame p_______ .", "popular"],
    ["I'd like a bowl of m_______ soup.", "mushroom"],
    ["It was a good p_______ .", "price"],
    ["He came on s_______ .", "stage"],
    ["We'll fix all the f_______s around the farm.", "fence"],
    ["Please take the l_______ out of my hamburger.", "lettuce"],
    ["What p_______ are the reviews likely for?", "product"],
    ["We have gone through the development of t_______ .", "technology"],
    ["I'll drop by a g_______ store.", "grocery"],
    ["You should h_______ this machine with care.", "handle"],
    ["What does the l_______ ask swimmers to do?", "lifeguard"],
    ["She likes n_______ .", "noodle"],
    ["The shoes are too t_______ for him.", "tiny"],
    ["This c_______ is on a hill.", "castle"],
    ["Do not share your p_______ with others.", "password"],
    ["I'm c_______ing a lot today.", "cough"],
    ["E_______ for 14-16 age group.", "education"],
    ["The bird has a shiny black b_______ .", "beak"],
    ["Before you camp, r_______ the rule.", "remember"],
    ["The house with c_______ was built in 1970.", "chimney"],
    ["I need to buy a new p_______ .", "pillow"],
  ];

  const allSentAnswers = sentencePairs.map(([, ans]) => ans);

  const type3Questions = sentencePairs.map(([sent, ans]) => {
    let options = [ans];
    let wrong = allSentAnswers.filter((a) => a !== ans);
    shuffle(wrong);
    options.push(...wrong.slice(0, 4));
    shuffle(options);

    return {
      type: "sentence",
      title: sent,
      options,
      correctIndex: options.indexOf(ans),
      img: null,
    };
  });

  // ===============================
  // 5. 최종 questions 배열 (1~100)
  // ===============================
  const questions = [
    ...type1Questions, // 1~35
    ...type2Questions, // 36~70
    ...type3Questions, // 71~100
  ];

  // 이제 questions를 기존 시험 로직에서 그대로 사용하면 됩니다.
  // 예) questions[currentQuestion].title / options / correctIndex …

  // =============================
  // 5. 정답 테이블 동적 생성 (5문제씩 가로)
  // =============================
  const tbody = document.querySelector(".answer-table tbody");
  if (tbody) {
    tbody.innerHTML = "";
    const totalQuestions = questions.length; // 100
    const groupSize = 5;
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
  const btn5 = document.querySelector(".five");
  const buttons = [btn1, btn2, btn3, btn4, btn5];

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
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };

  document.addEventListener("keydown", function (event) {
    if (currentQuestion >= questions.length) return;

    if (event.code === "Space") {
      event.preventDefault();
      if (selectedIndex === null) {
        alert("먼저 1~5 중 하나를 선택하세요.");
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
