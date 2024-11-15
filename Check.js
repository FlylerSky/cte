console.log('Hello World!');
// Mã chính xác cần nhập
const correctPassword = "fly1234";

function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (passwordInput === correctPassword) {
    // Nếu mã đúng, ẩn overlay và hiển thị nội dung
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    // Nếu mã sai, hiển thị thông báo lỗi
    errorMessage.textContent = "Mã truy cập không đúng!";
  }
}
