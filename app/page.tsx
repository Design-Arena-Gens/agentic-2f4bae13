"use client";

import { useMemo, useState } from "react";

const motifs = [
  "التقديم التاريخي",
  "تصوير الأثر المجتمعي",
  "التحليل المعرفي",
  "التوقعات المستقبلية",
  "التحديات والحلول"
];

function buildSegment(topic: string, motif: string, idx: number): string {
  const openers = [
    "من اللافت أنه",
    "جدير بالذكر أن",
    "ومن منظور آخر"
  ];
  const bodyFragments = [
    "يمنحنا فهماً أعمق لطبيعة التحوّلات التي شهدها المجتمع العربي في العقد الأخير",
    "يُظهر مدى ترابط العوامل الثقافية والاقتصادية التي تغذي هذا الحقل المعرفي",
    "يثير تساؤلات جوهرية حول دور الإنسان في إعادة صياغة معارفه وممارسة النقد الإيجابي",
    "يضعنا أمام مسؤولية إعادة قراءة الأحداث بعيداً عن الأحكام المسبقة وفي ضوء البيانات الدقيقة",
    "يدفعنا إلى استحضار تجارب تاريخية موازية لفهم المسارات الممكنة للمستقبل"
  ];
  const closers = [
    "وذلك ما يمنح الموضوع بعداً إنسانياً يتجاوز التحليلات السطحية.",
    "الأمر الذي يستلزم بناء مبادرات تعليمية توعوية مؤثرة.",
    "ما يجعل الحوار حوله ضرورة ملحّة لتعزيز الوعي الجمعي.",
    "ليصبح الحديث عنه فرصة لإعادة تحديد الأولويات المجتمعية.",
    "وهو ما يعيد صياغة خطاب التنمية بعيداً عن الشعارات." 
  ];

  const opener = openers[idx % openers.length];
  const body = bodyFragments[(idx + topic.length) % bodyFragments.length];
  const closer = closers[(idx * 2 + motif.length) % closers.length];

  return `${opener} ${motif} في ${topic} ${body}, ${closer}`;
}

function craftAnswer(topic: string): string {
  const trimmed = topic.trim();
  if (!trimmed) {
    return "يرجى كتابة موضوع ترغب في الحصول على إجابة مطولة حوله.";
  }

  const intro = `عند التطرق إلى موضوع ${trimmed} يتضح أننا أمام مساحة معرفية تتقاطع فيها الخبرات الإنسانية مع المعطيات العلمية الحديثة.`;
  const segments = motifs.map((motif, index) => buildSegment(trimmed, motif, index));
  const questions = `هذا التعمق يفتح الباب أمام أسئلة تتعلق بكيفية توجيه ${trimmed} لخدمة العدالة الاجتماعية وتعزيز الازدهار الاقتصادي.`;
  const conclusion = `في نهاية المطاف، يبدو أن ${trimmed} ليس مجرد ملف عابر بل قضية متجددة تتطلب عملاً جماعياً، واستثماراً في البحث، وإجراءات تنظيمية دقيقة تضمن استدامة الأثر.`;

  return [intro, ...segments, questions, conclusion].join("\n\n");
}

export default function Page() {
  const [topic, setTopic] = useState("التحول الرقمي في التعليم");
  const [answer, setAnswer] = useState(() => craftAnswer("التحول الرقمي في التعليم"));
  const isDisabled = useMemo(() => !topic.trim(), [topic]);

  return (
    <main>
      <section>
        <h1>الجواب المطوّل</h1>
        <p>
          أدخل فكرة أو سؤالاً، وسيتولى هذا المساعد صياغة إجابة عربية مطوّلة تجمع بين السياق التاريخي والتحليل المعمّق والرؤى المستقبلية.
        </p>
      </section>

      <section>
        <label htmlFor="topic">الموضوع أو السؤال</label>
        <textarea
          id="topic"
          placeholder="مثال: أثر الذكاء الاصطناعي على سوق العمل" 
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
        />
        <small>حاول تضمين التفاصيل المهمة في سؤالك لتحصل على إجابة أكثر ثراءً.</small>
        <button
          type="button"
          onClick={() => setAnswer(craftAnswer(topic))}
          disabled={isDisabled}
        >
          توليد إجابة مطوّلة
        </button>
      </section>

      <section className="output">
        {answer}
      </section>

      <div className="footer">
        تم إعداد النصوص محلياً بدون الحاجة إلى اتصال خارجي أو واجهات برمجية.
      </div>
    </main>
  );
}
