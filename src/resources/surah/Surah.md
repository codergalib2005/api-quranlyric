## Document for surah controll, model, and routes, that can help you understant with the surah route in development and production both

**You can use this url, if you just want to load this surah with all verses, with translation to english**

```
url/api/v1/surah
```

**If you want to load your verses translation by selected your native language you should use this url but as query you have to use your native language extension**

```
url/api/v1/surah?native=ar
```

```ts
{
     "number": 1,
     "name": "ٱلْفَاتِحَةِ",
     "transliteration": "Al-Faatiha",
     "translation": "The Opening",
     "revelation_type": "Meccan",
     "total_verses": 7,
     "audio_one": "",
     "verses": [
       {
         "audio_one": "https://res.cloudinary.com/dpolvpc0n/video/upload/v1693594758/Quran%20App/Surah/audio/001/001_zmrjtd.mp3",
         "verses": 1,
         "english": "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
         "text": "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
         "ar": {
            "text": "«بسم الله الرحمن الرحيم»"
        },
        "en": {
           "text": "In the name of Allah, most benevolent, ever-merciful."
        }
       }
     ]
   }
```