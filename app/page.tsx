"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hourlyWage, setHourlyWage] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [workDays, setWorkDays] = useState("");

  const hourlyWageNum = Number(hourlyWage) || 0;
  const hoursPerDayNum = Number(hoursPerDay) || 0;
  const workDaysNum = Number(workDays) || 0;

  const dailyPay = hourlyWageNum * hoursPerDayNum;
  const monthlySalary = dailyPay * workDaysNum;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-3 text-center">
          月給計算ツール
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          時給・1日の労働時間・月の勤務日数から、月給の目安を計算できます。
        </p>

        <div className="space-y-4">
          <div>
            <label>時給（円）</label>
            <input
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：1200"
            />
          </div>

          <div>
            <label>1日の労働時間（時間）</label>
            <input
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：8"
            />
          </div>

          <div>
            <label>月の勤務日数（日）</label>
            <input
              type="number"
              value={workDays}
              onChange={(e) => setWorkDays(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：20"
            />
          </div>
        </div>

        <div className="mt-8 space-y-2 text-lg border-t pt-6">
          <p>日給目安: ¥{dailyPay.toLocaleString()}</p>

          <p className="font-bold text-green-600 text-xl">
            月給目安: ¥{monthlySalary.toLocaleString()}
          </p>
        </div>
      </div>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
       <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>
  </li>
  <li>
    <a href="https://overtime-calc.vercel.app/">
      残業代計算ツール
    </a>
  </li>
  <li>
    <a href="https://take-home-pay-calc.vercel.app/">
      手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://annual-income-calc.vercel.app/">
      年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://bonus-calc-six.vercel.app/">
      ボーナス手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://daily-wage-calc.vercel.app/">
      日給計算ツール
    </a>
  </li>
  <li>
    <a href="https://tax-calc-murex.vercel.app/">
      所得税計算ツール
    </a>
  </li>
  <li>
    <a href="https://hourly-to-annual-calc.vercel.app/">
      時給から年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://working-days-calc.vercel.app/">
      労働日数計算ツール
    </a>
  </li>
</ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">
          月給計算の考え方
        </h2>

        <p className="text-gray-700 leading-relaxed">
          月給の目安は、時給に1日の労働時間をかけて日給を出し、
          さらに月の勤務日数をかけることで計算できます。
          アルバイトやパート勤務で、毎月どのくらいの収入になるかを確認したい場合に便利です。
          実際の支給額は残業代、交通費、社会保険料、税金などによって変わるため、
          目安としてご利用ください。
        </p>
      </section>

      <section className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-3">
          このサイトについて
        </h2>

        <p className="text-gray-700 leading-relaxed">
          ANT FARMでは、日常生活や仕事に役立つ無料Webツールを公開しています。
          この月給計算ツールでは、時給・労働時間・勤務日数から月給の目安を簡単に確認できます。
          インストール不要でスマホからも利用できます。
        </p>
      </section>

      <footer className="mt-10 pt-6 text-sm text-gray-500 text-center">
        <p>© ANT FARM</p>
        <Link href="/privacy-policy" className="underline">
          プライバシーポリシー
        </Link>
      </footer>
    </main>
  );
}