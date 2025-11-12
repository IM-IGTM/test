function startTest() {
  var studentName = document.getElementById("studentName").value;
  window.location.href =
    "./startTest.html" + "?" + "studentName=" + encodeURIComponent(studentName);
}

// 페이지 로드 후 이벤트 등록
window.onload = function () {
  const input = document.getElementById("studentName");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 엔터 동작(폼 제출 등) 막기
      startTest(); // 버튼 클릭 대신 이 함수 호출
    }
  });
};
