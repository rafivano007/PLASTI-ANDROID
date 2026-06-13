# بناء تطبيق بلاصتي للأندرويد

## ✅ حالة SDK الحالية

| إعداد | القيمة |
|-------|--------|
| `compileSdkVersion` | **36** |
| `targetSdkVersion` | **36** |
| `minSdkVersion` | 24 |
| Gradle | 8.14.3 |
| Android Gradle Plugin | 8.13.0 |

> تم تحديث جميع القيم لتتوافق مع متطلبات Google Play (targetSdk ≥ 34).

---

## طريقة البناء باستخدام Android Studio

### 1. تثبيت المتطلبات
- Android Studio Hedgehog أو أحدث
- JDK 17 أو 21

### 2. فتح المشروع
افتح مجلد `android/` من Android Studio (وليس المجلد الجذر).

### 3. بناء APK للتثبيت المباشر
```
Build → Generate Signed Bundle / APK → APK
```

### 4. بناء AAB لـ Google Play
```
Build → Generate Signed Bundle / APK → Android App Bundle
```

---

## طريقة البناء من سطر الأوامر

### متطلبات
- JDK 17 أو 21
- Android SDK (ANDROID_HOME مضبوط)

### أوامر البناء

```bash
cd android

# APK debug (للاختبار)
./gradlew assembleDebug

# APK release (للنشر بدون توقيع)
./gradlew assembleRelease

# AAB release (لـ Google Play)
./gradlew bundleRelease
```

### مخرج البناء
- APK debug: `app/build/outputs/apk/debug/app-debug.apk`
- APK release: `app/build/outputs/apk/release/app-release-unsigned.apk`
- AAB: `app/build/outputs/bundle/release/app-release.aab`

---

## ملاحظة مهمة

هذا التطبيق يحمّل بلاصتي مباشرة من:
```
https://plasti.lovable.app
```
لا يوجد web assets محلية — التطبيق يحتاج اتصال بالإنترنت.

إذا أردت تغيير الـ URL أو جعله يعمل offline، عدّل `capacitor.config.ts`.
