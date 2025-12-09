window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 (결과에서 사용)
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // ----------------------------------------------------
  // 1. 그림 보고 영어 단어 맞추기 (1~50번) - pictureQuestions
  //    title: 한글 뜻, options: 영어 보기 5개, img: 그림
  // ----------------------------------------------------
  const pictureQuestionsSeed = [
    {
      title: "반(학급)",
      options: ["bowl", "drink", "snake", "class"],
      img: "img/class.png",
    },
    {
      title: "할머니",
      options: ["island", "leg", "day", "grandmother"],
      img: "img/grandmother.png",
    },
    {
      title: "케이크",
      options: ["sun", "sock", "mirror", "cake"],
      img: "img/cake.png",
    },
    {
      title: "그릇",
      options: ["night", "skirt", "swim", "bowl"],
      img: "img/bowl.png",
    },
    {
      title: "개미",
      options: ["mirror", "in", "leg", "ant"],
      img: "img/ant.png",
    },
    {
      title: "눈",
      options: ["drink", "snake", "birthday", "eye"],
      img: "img/eye.png",
    },
    {
      title: "느린",
      options: ["hill", "one", "grandfather", "slow"],
      img: "img/slow.png",
    },
    {
      title: "복숭아",
      options: ["ear", "right", "white", "peach"],
      img: "img/peach.png",
    },
    {
      title: "접시",
      options: ["island", "cup", "sun", "dish"],
      img: "img/dish.png",
    },
    {
      title: "가장 좋아하는",
      options: ["leg", "drink", "family", "favorite"],
      img: "img/favorite.png",
    },
    {
      title: "학교",
      options: ["mirror", "skirt", "socks", "school"],
      img: "img/school.png",
    },
    {
      title: "달",
      options: ["hot", "cup", "stop", "moon"],
      img: "img/moon.png",
    },
    {
      title: "언덕",
      options: ["morning", "family", "right", "hill"],
      img: "img/hill.png",
    },
    {
      title: "귀",
      options: ["leg", "snake", "window", "ear"],
      img: "img/ear.png",
    },
    {
      title: "뱀",
      options: ["cup", "mirror", "birthday", "snake"],
      img: "img/snake.png",
    },
    {
      title: "지우개",
      options: ["back", "family", "right", "eraser"],
      img: "img/eraser.png",
    },
    {
      title: "창문",
      options: ["sun", "drink", "mountain", "window"],
      img: "img/window.png",
    },
    {
      title: "거울",
      options: ["leg", "cake", "cup", "mirror"],
      img: "img/mirror.png",
    },
    {
      title: "다리",
      options: ["socks", "right", "day", "leg"],
      img: "img/leg.png",
    },
    {
      title: "원숭이",
      options: ["cup", "hot", "snake", "monkey"],
      img: "img/monkey.png",
    },
    {
      title: "친구",
      options: ["leg", "family", "drink", "friend"],
      img: "img/friend.png",
    },
    {
      title: "산",
      options: ["stop", "sun", "cup", "mountain"],
      img: "img/mountain.png",
    },
    {
      title: "수영",
      options: ["birthday", "leg", "mirror", "swim"],
      img: "img/swim.png",
    },
    {
      title: "마시다",
      options: ["cake", "in", "skirt", "drink"],
      img: "img/drink.png",
    },
    {
      title: "멈추다",
      options: ["hot", "leg", "one", "stop"],
      img: "img/stop.png",
    },
    {
      title: "열다",
      options: ["sun", "mountain", "right", "open"],
      img: "img/open.png",
    },
    {
      title: "아침",
      options: ["cup", "mirror", "snake", "morning"],
      img: "img/morning.png",
    },
    {
      title: "낮",
      options: ["mountain", "balloon", "hot", "day"],
      img: "img/day.png",
    },
    {
      title: "섬",
      options: ["mirror", "socks", "friend", "island"],
      img: "img/island.png",
    },
    {
      title: "컵",
      options: ["birthday", "sun", "right", "cup"],
      img: "img/cup.png",
    },
    {
      title: "해",
      options: ["in", "cake", "snake", "sun"],
      img: "img/sun.png",
    },
    {
      title: "야구",
      options: ["day", "favorite", "snake", "baseball"],
      img: "img/baseball.png",
    },
    {
      title: "양말",
      options: ["mountain", "drink", "mirror", "socks"],
      img: "img/socks.png",
    },
    {
      title: "모자",
      options: ["hot", "in", "mirror", "hat"],
      img: "img/hat.png",
    },
    {
      title: "풍선",
      options: ["white", "family", "snake", "balloon"],
      img: "img/balloon.png",
    },
    {
      title: "밤",
      options: ["mirror", "hot", "leg", "night"],
      img: "img/night.png",
    },
    {
      title: "흰색",
      options: ["mountain", "drink", "birthday", "white"],
      img: "img/white.png",
    },
    {
      title: "생일",
      options: ["cup", "socks", "ear", "birthday"],
      img: "img/birthday.png",
    },
    {
      title: "안에",
      options: ["mountain", "cup", "mirror", "in"],
      img: "img/in.png",
    },
    {
      title: "뒷면",
      options: ["island", "family", "cake", "back"],
      img: "img/back.png",
    },
    {
      title: "하나(일)",
      options: ["snake", "drink", "mountain", "one"],
      img: "img/one.png",
    },
    {
      title: "사용하다",
      options: ["cup", "sun", "mirror", "use"],
      img: "img/use.png",
    },
    {
      title: "오른쪽(의)",
      options: ["snake", "mountain", "family", "right"],
      img: "img/right.png",
    },
    {
      title: "보라색",
      options: ["mirror", "skirt", "socks", "purple"],
      img: "img/purple.png",
    },
    {
      title: "아래에",
      options: ["favorite", "mountain", "ear", "under"],
      img: "img/under.png",
    },
    {
      title: "입",
      options: ["drink", "leg", "bowl", "mouth"],
      img: "img/mouth.png",
    },
    {
      title: "가족",
      options: ["mountain", "mirror", "drink", "family"],
      img: "img/family.png",
    },
    {
      title: "더운",
      options: ["cup", "leg", "mirror", "hot"],
      img: "img/hot.png",
    },
    {
      title: "할아버지",
      options: ["sun", "mirror", "snake", "grandfather"],
      img: "img/grandfather.png",
    },
    {
      title: "치마",
      options: ["cup", "leg", "morning", "skirt"],
      img: "img/skirt.png",
    },
  ];

  // ----------------------------------------------------
  // 2. 영어 → 한국어 뜻 고르기
  // ----------------------------------------------------
  const vocabList = [
    ["kite", "연"],
    ["square", "사각형"],
    ["smile", "웃다"],
    ["name", "이름"],
    ["win", "이기다"],
    ["hand", "손"],
    ["lose", "지다, 패하다"],
    ["eleven", "열하나(십일)"],
    ["rock", "돌"],
    ["year", "해(년)"],
    ["fifteen", "열다섯(십오)"],
    ["travel", "여행하다"],
    ["make", "만들다"],
    ["sad", "슬픈"],
    ["triangle", "삼각형"],
    ["front", "앞면"],
    ["teacher", "선생"],
    ["lion", "사자"],
    ["young", "젊은"],
    ["red", "빨간색"],
    ["sister", "여자형제"],
    ["turn", "돌다"],
    ["bird", "새"],
    ["bus", "버스"],
    ["rule", "규칙"],
  ];

  // ----------------------------------------------------
  // 3. 뜻(한국어) → 영어 고르기
  // ----------------------------------------------------
  const korToEngList = [
    ["책상", "table"],
    ["노랑색", "yellow"],
    ["복싱", "boxing"],
    ["이", "teeth"],
    ["사다", "buy"],
    ["그리다", "draw"],
    ["주스", "juice"],
    ["물", "water"],
    ["위에", "on"],
    ["축구", "soccer"],
    ["왼쪽(의)", "left"],
    ["가수", "singer"],
    ["빠른", "fast"],
    ["비가오는", "rainy"],
    ["원", "circle"],
    ["닫다", "close"],
    ["나이가 많은", "old"],
    ["가다", "go"],
    ["바지", "pants"],
    ["남자형제", "brother"],
    ["얼룩말", "zebra"],
    ["흐린", "cloudy"],
    ["걷다", "walk"],
    ["간호사", "nurse"],
    ["발가락", "toe"],
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
