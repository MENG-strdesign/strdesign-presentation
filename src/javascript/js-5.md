---
title: 第五戦 自分自身との戦い
icon: rocket
navbar: false
sidebar: false
editLink: false
lastUpdated: false
pageInfo: false
toc: false
comment: false
prev: /javascript/js-4
next: /javascript/js-6
order: 5
---

![Alt](/assets/image/js-5/what_is_the_javascript.png " " =100%x)

<div style="display:flex;">
<div style="flex:1;">

ここまで「JavaScript」に関連する技術を紹介すると、「JavaScriptで何でも作れるんだね」という感想が頭の中に出てくるかと思いますが。  

まるでおとぎ話のように、主人公が最後に越えなければならないのは、「自分自身」のことです。  


「Google V8エンジン」「Node.js」「SPA」「Electron」などの一連の技術は、特定のニーズに応えるための対策として生まれました。  
言い換えれば、これらは「強力な武器」と「堅固な鎧」と言えるでしょう。

</div>
<div>

![Alt](/assets/image/js-5/全能.jpg " " =180x) 

![Alt](/assets/image/js-5/石中剑.jpeg " " =200x) 

</div>
</div>

## 💪「JavaScript」が「強い」OR「弱い」？

<div style="display:flex;">
<div style="flex:1;">

この質問が自分に答えるとしたら、私は迷わずに「==弱い==」と答えます。  

</div>
<div>

![Alt](/assets/image/js-5/js-strong.png " " =250x) 

</div>
</div>

### 「JavaScript」特徴の一つ「弱い型付け」（または動的型付け）
::: tip 動的型付け

動的型付け（どうてきかたづけ、英: dynamic typing）とは、  
変数や関数の引数、返り値などの型が、プログラムの実行中に決まります。  
コンパイル時（プログラムが実行される前）に型を決める必要がなく、実行時に実際の値に基づいて型が決まるため、柔軟性が高いです。

例えば、JavaScript や Python では、変数の型を宣言することなく値を代入でき、実行時にその値に応じた型が自動的に決まります。

```js
let x = 42;   // x は数値
x = "hello";   // x は文字列に変わる

```
このように、==型を事前に決めず、実行時に決まるのが動的型付けの特徴==です。
:::


![Alt](/assets/image/js-5/静的型付け.png "動的型付けと静的型付け" =100%x)

### 💦動的型付けの弱み
---
- **🕹実行時エラーの検出は困難**  
変数の型が実行時に決まるため、型に関連するエラーが実行時に発生することがあります。  
このようなエラーは、コンパイル時に検出できないため、デバッグが難しくなります。  

- **🔐型の安全性が保障されない**  
型が動的に決まるため、プログラマが意図しない型の不一致が発生することがあり、その結果、型安全性が保証されず、予期しない動作が起こるリスクが高まります。  

- **🙉コードの理解と保守の難しさ**  
動的型付けでは、変数や関数の型が明示的に指定されていないため、コードを読んだり、他の開発者の意図を理解するのが難しくなる場合があります。  
==特に、大規模なプロジェクトでは、コードの可読性や保守性が低下する可能性があります。==  

::: sandpack#vue 変数の型が実行時に決まる例  


@file /src/App.vue

```vue
<script setup>
import { ref } from "vue";

const number1 = ref("");
const number2 = 10;
</script>

<template>
  
  number1を入力: <input v-model="number1" />
  <h1>number1 = {{ number1 }}</h1>
  <h1>number2 = {{ number2 }}</h1>
  <h1>number1 + number2 = {{ number1 + number2 }}</h1>
</template>
```

:::

---

- 浮動小数点数の計算に関する問題  
```js
const x = 0.1 + 0.5;
console.log(x == 0.6);   // true

const y = 0.1 + 0.2;
console.log(x == 0.3);   // 結果は？

```

::: details 【**検証**】計算式　0.1 + 0.2 = 0.3?

::: sandpack#vue 例２  


@file /src/App.vue

```vue
<script setup>
import { ref } from "vue";

const number1 = 0.5;
const number2 = 0.1;
const number3 = 0.1;
const number4 = 0.2;
</script>

<template>
  <h1>{{number1}} + {{number2}} == 0.6 </h1>
  <h1>結果： {{ number1 + number2 == 0.6 }}</h1>
  <h1>{{number3}} + {{number4}} == 0.3 </h1>
  <h1>結果： {{ number3 + number4 == 0.3 }}</h1>
</template>
```

:::


### 🧰 JavaScriptとIEEE 754 標準
:::tip IEEE 754 （アイトリプルイーななごおよん）標準
IEEE 754 標準は浮動小数点数（ふどうしょうすうてんすう）を表現するための二進数のフォーマットで、  
十進数の一部の小数（例: 0.1や0.2など）は二進数で正確に表現できません。  
これらの十進小数を二進数に変換すると無限循環小数になるため、コンピュータは有限の桁数に丸める必要があります。  
:::

JavaScript ではIEEE 754 標準に従っています。浮動小数点数は 64 ビットの倍精度（double-precision）フォーマットに整形されます。  
その結果、```0.1 + 0.2``` のような計算は ```0.3``` ではなく、```0.30000000000000004``` になるため、  
```false``` が返されます。
- **原因は精度の損失**  
**✌🏼二進数の構造**：十進数の「0.1」や「0.2」を二進数で表すと、「0.1」 は ```0.0001100110011...``` という無限に続く循環小数になります。このような小数はコンピュータのメモリに収まりきらず、限られたビット数（例えば 64ビット）で切り捨てられ、近似的に保存されます。  
**🎲近似(きんじ)値による誤差**：こうした近似が積み重なると、計算結果にわずかな誤差が生じます。  
例えば ```0.1 + 0.2``` の結果が正確に 0.3 にならず、```0.30000000000000004``` になるのも、この誤差が原因です。
0.5 は二進数で 0.1 と表せます。このように、二進数では有限小数であり、浮動小数点数のビットで完全に表現できるため、精度の損失はありません。  


## TypeScriptの誕生

<div style="display:flex;">
<div style="flex:1;">

- **Microsoft**が2012年に開発し、**オープンソース**で公開した。
- JavaScriptの**スーパーセット**となるプログラミング言語。
- **静的型付け言語**であり、プログラムの正しさが静的に検査できる。


</div>
<div>

![Alt](/assets/image/js-5/typescript.png " " =200x)
</div>
</div>

![Alt](/assets/image/js-5/typescript2.svg " " =100%x)



## 🎖 TypeScriptのメリット

### 🎯静的な検査
- **TypeScriptはプログラムの正しさを静的に検査できる。**  
- **JavaScriptは実行しないとバグがあるかを確かめられない。**  
- **TypeScriptは実行せずにチェックが行える。**
- **TypeScriptはプログラムの正しさを静的に検査できる。**

### 📈開発効率と品質を向上し、安心感を高める
- **問題を早期に発見し、開発を効率化できる。**  
- **エディターとTypeScriptを連携させると、リアルタイムのチェックやコードヒントができる。**  
- 
