# BATHTEXT.js
แปลงจำนวนเงินเป็นคำอ่าน

# ดู Demo และรายละเอียดเพิ่มเติม
[https://earthchie.github.io/BAHTTEXT.js/](https://earthchie.github.io/BAHTTEXT.js/)

![image](https://cloud.githubusercontent.com/assets/7013039/25438868/e9611b80-2ac4-11e7-8713-212a7f24caa8.png)

# โปรดทราบ

เนื่องจากมีความหลากหลายของมาตรฐานวิธีอ่านมาก ก่อนใช้งานโค้ดนี้ทุกครั้งกระผมขอให้ทุกท่านตรวจสอบความถูกต้อง ตามมาตรฐานที่ท่านยอมรับ ในนามของผู้พัฒนา BAHTTEXT.js จะไม่รับผิดชอบต่อความเสียหายอันเนื่องมาจากผลลัพธ์ของโค้ดนี้ในทุกกรณี

โค้ดชุดนี้อ้างอิงผลลัพธ์โดยเทียบคำตอบกับ [BAHTTEXT()](https://support.office.com/en-us/article/BAHTTEXT-function-5ba4d0b4-abd3-4325-8d22-7a92d59aab9c) ของ Microsoft Office เป็นหลัก และปรับแก้ความถูกต้องที่หลักล้านล้านเป็นต้นไปตาม[คำแนะนำในพันทิป](https://pantip.com/topic/34967540#comment16)

## วิธีใช้

```HTML
<script type="text/javascript" src="BAHTTEXT.min.js"></script>
<script type="text/javascript">

console.log(BATHTEXT(12345));
console.log(BATHTEXT(12345.678));
console.log(BATHTEXT('12,345.432'));
console.log(BATHTEXT('1,001,000,001.79'));

</script>
```

## License
WTFPL 2.0 http://www.wtfpl.net/
