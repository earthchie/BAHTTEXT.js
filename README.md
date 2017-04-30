# BATHTEXT.js
แปลงจำนวนเงินเป็นคำอ่าน 

* ไม่มีลิมิตของจำนวนตัวเลข ใช้อ่านเลขกี่หลักก็ได้
* ในกรณีที่เลขใหญ่กว่า [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ให้ส่งเลขมาเป็น string แทน

# ดู Demo และรายละเอียดเพิ่มเติม
[https://earthchie.github.io/BAHTTEXT.js/](https://earthchie.github.io/BAHTTEXT.js/)

![image](https://cloud.githubusercontent.com/assets/7013039/25568593/4bf435ac-2e30-11e7-9876-8286073e8f0e.png)

# โปรดทราบ

เนื่องจากมีความหลากหลายของมาตรฐานวิธีอ่านมาก ก่อนใช้งานโค้ดนี้ทุกครั้งกระผมขอให้ทุกท่านตรวจสอบความถูกต้อง ตามมาตรฐานที่ท่านยอมรับ ในนามของผู้พัฒนา BAHTTEXT.js จะไม่รับผิดชอบต่อความเสียหายอันเนื่องมาจากผลลัพธ์ของโค้ดนี้ในทุกกรณี

โค้ดชุดนี้อ้างอิงผลลัพธ์โดยเทียบคำตอบกับ [BAHTTEXT()](https://support.office.com/en-us/article/BAHTTEXT-function-5ba4d0b4-abd3-4325-8d22-7a92d59aab9c) ของ Microsoft Office เป็นหลัก ส่วน[คำแนะนำในพันทิป](https://pantip.com/topic/34967540#comment16)ที่อ้างไปยังราชบัณฑิตยสภา ผมได้โทรไปสอบถามราชบัณฑิตยสภาแล้วพบว่าไม่สอดคล้องตามที่ได้กล่าวอ้างครับ (หลักฐานบันทึกการโทร [#1](https://earthchie.github.io/BAHTTEXT.js/call_logs/call_logs_1.m4a), [#2](https://earthchie.github.io/BAHTTEXT.js/call_logs/call_logs_2.m4a)) สรุปคือ ให้อ่านแบบเดียวกับ Microsoft Office เลยครับ</p>


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
