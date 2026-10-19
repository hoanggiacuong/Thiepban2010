# Thiệp 20/10 cho Huyền và Tình

Thiệp 20/10 gửi hai bạn quen nhau từ chuyến đi tình nguyện. Màn đầu là đom đóm tụ thành "Chúc mừng 20-10" rồi thành tên, tiếp theo là phong thư dấu sáp mở ra lá thư (chữ hiện dần). Sau đó có thẻ nhân vật ánh kim, bảng tin "một năm qua" dạng story, hộp quà kèm thẻ cào, và cuối cùng là màn pháo hoa trái tim.

Link riêng từng người (GitHub Pages):
- Huyền: https://hoanggiacuong.github.io/Thiepban2010/huyen.html
- Tình: https://hoanggiacuong.github.io/Thiepban2010/tinh.html

## Sửa nội dung
1. Sửa `data.js`: lời thư, sticker, thẻ nhân vật, các slide bảng tin, chữ trong thẻ cào, ảnh, giao diện
2. Chạy `node tao-trang.js` để tạo lại `huyen.html` và `tinh.html`
3. Commit và push lên `main`, khoảng 1 phút sau GitHub Pages cập nhật

Mỗi người có giao diện riêng (`phongCach` trong `data.js`): Huyền dùng `denim` (xanh denim hoa cúc), Tình dùng `neon` (đen + neon). Ngoài ra còn `holo`, `cherry`, `kitty`.

Ảnh: bỏ vào thư mục `anh/` rồi ghi đường dẫn vào `data.js` (`anh` cho lá thư, `anhThe` cho thẻ nhân vật, `anhChung` cho màn cuối). Nên thu nhỏ ảnh còn chiều rộng khoảng 1000px.

## Ảnh bìa xem trước
`cover.png` được chụp từ `cover.html` bằng Edge:
```
msedge --headless=new --hide-scrollbars --virtual-time-budget=6000 --window-size=1200,630 --screenshot=cover.png cover.html
```

## Lưu ý
- Repo public nên ai mở mã nguồn cũng đọc được lời thư trong `data.js`. Đừng để thông tin riêng tư
- Messenger, Zalo và Telegram lưu ô xem trước của link từ lần dán đầu tiên. Muốn thử thì dán vào chat với chính mình trước
