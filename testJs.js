window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 표시
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("studentName");
  const studentDiv = document.getElementById("studentName");

  if (studentDiv) {
    if (name) {
      studentDiv.textContent = name;
      studentDiv.setAttribute("value", name);
    } else {
      studentDiv.textContent = "이름 정보 없음";
    }
  }

  // -----------------------------
  // 1. 문제 데이터
  // -----------------------------
  const questions = [
    { title: "학생", options: ["student", "boy", "girl", "rose", "black"] },
    { title: "꽃", options: ["flower", "student", "boy", "girl", "red"] },
    { title: "책", options: ["book", "boy", "now", "girl", "yellow"] },
    { title: "지금", options: ["no", "student", "now", "girl", "red"] },
    { title: "사랑", options: ["bear", "love", "boy", "girl", "blue"] },
  ];

  let currentQuestion = 0;

  const questionLabel = document.getElementById("questionLabel");
  const btn1 = document.querySelector(".one");
  const btn2 = document.querySelector(".two");
  const btn3 = document.querySelector(".three");
  const btn4 = document.querySelector(".four");
  const btn5 = document.querySelector(".five");
  const buttons = [btn1, btn2, btn3, btn4, btn5];

  // ✅ 여기서 정답관리 테이블의 '문제' 칸에 title 채우기
  questions.forEach((q, index) => {
    const num = index + 1; // 0→1, 1→2 ...
    const titleCell = document.getElementById("title-q" + num);
    if (titleCell) {
      titleCell.textContent = q.title; // 예: "학생", "꽃" ...
    }
  });

  // -----------------------------
  // 2. 문제 화면에 뿌리기
  // -----------------------------
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    questionLabel.textContent = q.title;

    q.options.forEach((opt, index) => {
      const btn = buttons[index];
      if (btn) {
        btn.textContent = index + 1 + ". " + opt;
      }
    });
  }

  renderQuestion();

  // -----------------------------
  // 3. 답 선택 처리 + 정답 칸에 기록
  // -----------------------------
  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (!q) return;

    const selectedText = q.options[choiceIndex];

    const questionNumber = currentQuestion + 1;
    const answerCellId = "answer-q" + questionNumber;
    const answerCell = document.getElementById(answerCellId);

    if (answerCell) {
      answerCell.textContent = selectedText;
      answerCell.setAttribute("value", selectedText);
    }

    currentQuestion++;

    // else 블록 부분만 고친 버전
    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      alert("모든 문제를 다 풀었습니다!");

      const answerPanel = document.querySelector(".answer-panel");
      if (answerPanel) {
        answerPanel.style.display = "block"; // 또는 "flex"
      }
    }
  }

  // -----------------------------
  // 4. 키보드 1~5 처리
  // -----------------------------
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };

  document.addEventListener("keydown", function (event) {
    const choiceIndex = keyToIndex[event.key];

    if (choiceIndex !== undefined) {
      handleAnswer(choiceIndex);
    } else {
      alert("⚠️ 경고: 허용되지 않은 키입니다!");
    }
  });

  // -----------------------------
  // 🖱 마우스를 클릭했을 때도 경고 표시
  // -----------------------------
  document.addEventListener("click", function (event) {
    alert("⚠️ 경고: 허용되지 않은 키입니다!");
  });
};
