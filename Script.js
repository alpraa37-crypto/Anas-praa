// كود جافاسكريبت بسيط لتسهيل التنقل بين الأقسام
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
});

// إرسال النموذج إلى واتساب
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // جمع بيانات النموذج
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // حفظ البيانات مؤقتًا
    window.formData = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message
    };
    
    // عرض نافذة التأكيد
    document.getElementById('confirmationModal').style.display = 'flex';
});

// تأكيد الإرسال إلى واتساب
document.getElementById('confirmSend').addEventListener('click', function() {
    const data = window.formData;
    
    // إنشاء نص الرسالة
    let whatsappMessage = `رسالة جديدة من موقع أنس وبراء:%0A%0A`;
    whatsappMessage += `الاسم: ${data.name}%0A`;
    whatsappMessage += `البريد الإلكتروني: ${data.email}%0A`;
    whatsappMessage += `رقم الهاتف: ${data.phone}%0A`;
    whatsappMessage += `نوع الخدمة: ${data.service}%0A`;
    whatsappMessage += `الرسالة: ${data.message}%0A`;
    
    // رقم واتساب المستهدف (بدون مسافات أو رموز)
    const whatsappNumber = '201055891020';
    
    // إنشاء رابط واتساب
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // فتح واتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
    
    // إغلاق نافذة التأكيد
    document.getElementById('confirmationModal').style.display = 'none';
    
    // إعادة تعيين النموذج
    document.getElementById('contactForm').reset();
    
    // عرض رسالة نجاح
    alert('تم إرسال رسالتك بنجاح! سيتم الرد عليك قريبًا.');
});

// إلغاء الإرسال
document.getElementById('cancelSend').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});
