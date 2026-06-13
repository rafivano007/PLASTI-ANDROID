# بلاصتي - Android APK

## بناء APK تلقائي عبر GitHub Actions

### الخطوات (مرة واحدة فقط):

1. **أنشئ repository جديد على GitHub** (اسمه مثلاً `plasti-android`)

2. **ارفع الملفات:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/plasti-android.git
git push -u origin main
```

3. **افتح GitHub Actions:**
   - اذهب إلى repo → تبويب **Actions**
   - ستجد workflow اسمه **Build APK** يعمل تلقائياً

4. **حمّل الـ APK:**
   - بعد انتهاء البناء (~5 دقائق) → **Artifacts** → `plasti-debug-apk`

---

> الـ APK يحمّل التطبيق من: https://plasti.lovable.app
