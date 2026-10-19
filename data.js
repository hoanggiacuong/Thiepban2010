// Nội dung thiệp. Sửa file này rồi chạy: node tao-trang.js
// Mỗi người một mục trong "nguoi"; khoá (huyen, tinh) là tên file link: .../huyen.html
//   goi:    tên trên phong thư và trong ô xem trước khi gửi link ("Gửi Huyền")
//   chao:   dòng mở đầu lá thư ("Huyền ơi,")
//   ban:    cách gọi trong các câu chung ("Kéo xuống, có thư cho mày", "Chúc mừng mày!")
//   tenNgan: chữ đom đóm tụ lại ở màn đầu (ngắn thôi cho rõ, "\n" để xuống dòng)
//   anh:    ảnh riêng trong lá thư, ví dụ "anh/huyen.jpg" (để trống nếu không có)
//   anhThe: ảnh trên thẻ nhân vật, ví dụ "anh/the-huyen.jpg" (để trống thì thẻ không có ảnh)
//   qua:    chữ hiện ra khi cào thẻ trong hộp quà (để trống "" thì ẩn phần hộp quà)
//   phongCach: giao diện riêng: "holo" (Y2K ánh kim), "neon" (đen + neon), "denim" (xanh denim hoa cúc), "cherry" (cherry cola), "kitty" (hồng dễ thương)
//   nhan:   4 sticker kéo thả được (2 cái ở màn mở đầu, 2 cái quanh lá thư), chữ cũng chạy trên băng chữ
//   vibe:   thẻ nhân vật: danhHieu, emoji, hiem (độ hiếm), chiSo: [tên, số 0-100 hoặc "∞"]
//   wrapped: các slide "một năm qua" trong bảng tin: [con số lớn, câu đi kèm, emoji]
// Dùng được cả trên trình duyệt (window.THIEP) lẫn trong node (module.exports).
var THIEP = {
  // Địa chỉ trang trên GitHub Pages, dùng cho ảnh xem trước khi gửi link
  diaChi: "https://hoanggiacuong.github.io/Thiepban2010/",
  loiKy: "Bạn tốt của mày,",    // dòng trên chữ ký cuối thư
  nguoiGui: "Cường",            // ký tên cuối thư
  congTy: "Cường",              // màn cuối: "Từ ..."
  anhChung: "",                 // ảnh chung ở cuối trang, ví dụ "anh/tinh-nguyen.jpg"

  nguoi: {
    huyen: {
      goi: "Huyền",
      tenNgan: "Huyền",
      chao: "Huyền ơi,",
      ban: "mày",
      loiChuc: [
        "Từ hồi quen nhau ở chuyến tình nguyện, tao vẫn nhớ cái dáng mày xách balo đi trước, chỗ nào lạ là đòi ghé, đường nào xa là đòi đi.",
        "Giờ thành cô giáo, ngày nào cũng đúng giờ đúng giấc, chắc cái chân thích đi của mày đang bứt rứt lắm. Nhưng tao tin học trò của mày may lắm mới có một cô giáo vừa hiền vừa có cả một bầu trời chuyện phiêu lưu để kể.",
        "20/10 này chúc mày vui hơn mỗi ngày, quen dần với nhịp mới mà không đánh mất mình, kỳ nghỉ tới lại xách balo lên mà đi. Đi đâu nhớ rủ tao 🎒🌄"
      ],
      anh: "",
      anhThe: "",
      phongCach: "denim",
      nhan: ["cô giáo phiêu du 🎒", "chân không chịu đứng yên", "hiền với học trò ✏️", "mơ đi loăng quăng 🗺️"],
      vibe: { danhHieu: "Cô giáo kiêm nhà thám hiểm", emoji: "🎒", hiem: "SSR", chiSo: [["Máu phiêu lưu", "∞"], ["Độ thương học trò", 100], ["Độ quen giờ hành chính", 35]] },
      wrapped: [["1", "chuyến tình nguyện cho tụi mình quen nhau", "🌱"], ["30+", "học trò nhỏ gọi mày là cô mỗi sáng", "📚"], ["∞", "nơi còn nằm trong danh sách muốn đi", "🗺️"], ["0", "lý do để mày thôi mơ những chuyến đi xa", "✈️"]],
      qua: "Có cc nhé 😝 Chúc mừng 20-10!"
    },
    tinh: {
      goi: "Tình",
      tenNgan: "Tình",
      chao: "Tình ơi,",
      ban: "mày",
      loiChuc: [
        "Quen nhau từ hồi đi tình nguyện, ai ngờ giờ tụi mình thành cạ cứng đi music box, cứ cầm mic lên là quẩy tới bến.",
        "Biết dạo này mày bị công việc với sếp dí dữ lắm. Học tiếng Hàn, làm công ty Hàn, áp lực đâu phải chuyện nhỏ, vậy mà mày vẫn cố từng ngày. Tao nể mày thật.",
        "20/10 này chúc mày bớt deadline, sếp bớt khó, lương thì tăng đều. Mệt quá thì cứ hú tao, tụi mình lại đi hát một bữa cho đã 🎤🔥 화이팅!"
      ],
      anh: "",
      anhThe: "",
      phongCach: "neon",
      nhan: ["giọng ca music box 🎤", "nói tiếng Hàn như gió", "quẩy hết mình 🔥", "화이팅 💪"],
      vibe: { danhHieu: "Idol music box, chiến binh công ty Hàn", emoji: "🎤", hiem: "UR", chiSo: [["Độ cháy khi cầm mic", "∞"], ["Tiếng Hàn", 90], ["Sức chịu đựng sếp", 99]] },
      wrapped: [["1", "chuyến tình nguyện cho tụi mình thành bạn", "🌱"], ["∞", "bài hát đã gào ở music box", "🎤"], ["100+", "lần nghe sếp gọi mà vẫn phải mỉm cười", "😤"], ["화이팅", "câu tao gửi mày mỗi lần mày mệt", "💪"]],
      qua: "Có cc nhé 😝 Chúc mừng 20-10!"
    }
  }
};

if (typeof module !== "undefined") module.exports = THIEP;
else window.THIEP = THIEP;
