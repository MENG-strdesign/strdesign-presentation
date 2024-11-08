---
title: 第四戦 SPA frameworksの戦い
icon: rocket
navbar: false
sidebar: false
editLink: false
lastUpdated: false
pageInfo: false
toc: false
comment: false
prev: /javascript/js-3
next: /javascript/js-5
order: 4
---



<div style="display:flex;">
<div style="flex:1;">
 

SPAの登場により、フロントエンド技術は単なる静的なページ表示から、より複雑なクライアントサイドのロジックを処理する方向へ進化しました。  
この変化によって、フロントエンドのフレームワークやライブラリが急速に発展し、開発者はより効率的にアプリケーションを作れるようになりました。


</div>
<div>

![Alt](/assets/image/js-4/spa.jpg "Single Page Application" =300x)

</div>
</div>

AngularJS（2010年）、React（2013年）、Vue.js（2014年）などのSPAフレームワークが登場し、  
これらはより効率的なコンポーネントベースの開発方法を提供し、フロントエンド開発の能力強化とともに、フロントエンド開発の世界を変えました。

![Alt](/assets/image/js-4/spafrm.png "Single Page Application" =100%x)

## 🧰最初のSPAフレームワーク

<div style="display:flex;">
<div style="flex:1;">

### AngularJS
「AngularJS」は2010年Googleに開発され、主にシングルページアプリケーション（SPA）を作るためのフレームワークです。  
</div>
<div>

![Alt](/assets/image/js-4/AngularJS.png " " =200x)
</div>
</div>

### 🎖AngularJSの主な特徴

- **🖇双方向データバインディング（Two-way Data Binding）**  

AngularJSは、双方向データバインディングを提供します。  
これにより、ビュー(View)とモデル(model)は常に同期され、モデルのデータが変更されるとビューが自動的に更新され、  
逆にビューでのユーザー入力もモデルに反映されます。  
この仕組みによって、開発者はデータの同期を手動で行う必要がなくなります。  

![Alt](/assets/image/js-4/data_binding_two_way.png " " =100%x)


- **🛍️モジュール化（Modularization）**  

AngularJSは、アプリケーションを複数のモジュールに分割して開発することをサポートします。  
これにより、テストやデバッグが容易になり、各モジュールは特定の機能を担当し、コードの保守性や再利用性が向上します。

![Alt](/assets/image/js-4/modular.jpg " " =100%x)

### 💣AngularJSの欠点
- **📈パフォーマンスの問題**  
双方向データバインディングは便利ですが、大規模アプリケーションではパフォーマンスに影響を与えることがありました。  
特に、データ量が増えると「ダーティチェック」という仕組みが頻繁に発生し、レスポンス速度が低下します。  
すべてのバインディングされたプロパティを監視し、変更をマージするため、リソースの消費が激しくなります。

:::tip ダーティチェック
「ダーティチェック」とは、AngularJS がデータの変更を検出するための方法です。   
データが変更されたかどうかを確認するため、すべての監視対象（変数やプロパティなど）を何度もチェックします。   
この仕組みによって、データが自動的に画面に反映されますが、ページ上の項目が増えるとチェック回数も増る。アプリの動作が遅くなる要因となります。

:::

- **⌛️高い学習コスト**  
AngularJS には作用域（scope）、依存関係の注入、モジュール化など多くの概念が含まれており、初心者にとって学習コストが高く、習得に時間がかかります。  
このため、学び始めたの開発者にとっては、難しく感じることが多いです。

- **🔏柔軟性の制限**  
AngularJS は特定の規約に従う必要があり、フレームワークの提供された使え方に逆に縛られる部分があります。

- **🔎デバッグの難しさ**  
双方向データバインディングや複雑なスコープ構造のため、データ更新のエラーを見つけるのが難しい場合があります。  

- **📱モバイル対応の不足**  
- **📊モダンな JavaScript 機能のサポート不足**  

AngularJS にはいくつかの欠点がありますが、その優れた設計理念は後のフレームワークに深い影響を与えました。

## 🏵 強敵の登場　  

<div style="display:flex;">
<div style="flex:1;">

### React
Reactとは、ユーザインターフェース構築のための JavaScript ライブラリです。  
React.jsやReact.JSと呼ばれることもあります。よくAngularJSやjQueryと比較されますが、React自体はフレームワークでなく、あくまでもUIを構築するだけのライブラリです。
</div>
<div>

![Alt](/assets/image/js-4/ReactJS.png " " =200x)
</div>
</div>
<div style="display:flex;">
<div style="flex:1;">

- **起源（2011年頃）**  
ReactはFacebookのエンジニアであるJordan Walkeによって開発され、最初はFacebook内部で動的なインターフェース構築の簡単化のために使用されました。  

</div>
<div>

![Alt](/assets/image/js-4/facebook.jpg "Facebook" =200x)
</div>
</div>

- **公開（2013年）**  
2013年のJSConfで、Facebookは正式にReactのコードをオープンソースとして公開しました。  
この時、Reactの「コンポーネント化」や「仮想DOM」などの概念は、フロントエンドの分野における新しい技術と宣言され、UIの更新効率とパフォーマンスを強調しました。

:::tip JSConf（JavaScript Conference）

<div style="display:flex;">
<div style="flex:1;">

JSConfとは、世界中のJavaScript開発者や技術者、企業が集まる技術交流イベントです。  

JavaScriptの最新の動向や技術について議論し、共有することを目的としています。
</div>
<div>

![Alt](/assets/image/js-4/JsConf.jpg "JSConf会場" =300x)
</div>
</div>
  
:::

### 💡AngularJS と比較して、React の強みは何ですか？

- **仮想 DOM（Virtual DOM）**  
React の最も重要な強みの一つは「仮想 DOM」の概念です。
AngularJS では双方向データバインディングを使用しているため、データが増える場合はパフォーマンス低下の問題が存在します。  
![Alt](/assets/image/js-4/DOM1.png "AngularJSのDOM操作" =100%x)
:::tip DOMの概念（Document Object Model）

DOMとは、ウェブページの構造を表現するためのプログラミングインターフェースであり、
HTMLやXML文書をツリー構造で表現したものです。  

![Alt](/assets/image/js-4/DOM.png "DOMの概念" =100%x)
:::

仮想 DOM は、UI の変更があるたびに実際の DOM を直接更新するのではなく、まず仮想的な DOM を更新し、その差分だけを実際の DOM に反映させます。  
**これにより、UI の更新が効率的に行われ、パフォーマンスが大幅に向上します。**

![Alt](/assets/image/js-4/仮想DOM1.png "　" =100%x)

![Alt](/assets/image/js-4/仮想DOM2.png "Reactの仮想DOM" =100%x)

- **柔軟性**  
React はライブラリであり、フレームワークではないため、必要な機能だけを追加して使用することができます。  
これにより、プロジェクトに応じて柔軟に設計を変更でき、さまざまなユースケースに対応することが可能です。  

- **Component-based architecture（コンポーネントベースのアーキテクチャ）**  
こうして見ると、これは全く新しい概念ではありません。  
すべてのページは、事前に作られた小さな部品（コンポーネント）で構成されており、  
まるで、ページ自体が複数のiframeで組み立てられているのようです。  
唯一の違いは、これらの部品にパラメータを渡すことで、外観や動きの変更ができることです。

![Alt](/assets/image/js-4/react组件.jpeg " " =100%x)

- **JSX（JavaScript XML）**  
React では JSX という **HTMLとJavaScriptを統合した構文**を使って、HTML と JavaScript を同じファイル内で記述することができます。  

**👍🏼肯定的（こうてい）な評価：**  
開発効率の向上：共通部品（コンポーネント）を構築する時、UIコードとロジックが同じファイル内でUIを定義され、その動作を管理するができます。  
宣言型プログラミング：JSXはUIの宣言的な記述を可能にします。開発者は「どうすべきか」を宣言し、Reactがその更新を処理するため、より直感的なコードになります。

**👎🏼否定的（ひてい）な評価：**  
開発者にとって、JSXは複雑に感じることがあり、特にコンパイルや変換プロセスを理解するのが難しいと感じることもあります。

::: sandpack#react JSXの例 [rtl theme=dark]

@file /App.js

```js
export default function App() {
  return (
    <div>
      {/* JSX 中のコメントアウト */}
      <h1>Hello world</h1>
    </div>
  );
}
```

:::

**結論：**  
異なる開発者によってJSXに対する見解は異なりますが、「JSX」は現代のフロントエンド開発において重要な役割を果たす技術の一つであることは間違いありません。

## 🌟新星の誕生　Vue.js
### 尤 雨溪（Evan You）エヴァン ユー

<div style="display:flex;">
<div style="flex:1;">

元々は Google に所属していたエンジニアです。  
彼は Google での勤務中に、AngularJS とReactを使っていた経験があり、そこで得た知識を基に、さらにシンプルで使いやすいフレームワークを作ろうと考えました。  
最初は個人のプロジェクトとして開発され、2014 年に正式公開しました。
</div>
<div>

![Alt](/assets/image/js-4/尤雨溪.png "尤雨溪（Evan You）" =250x)
</div>
</div>

### 🎯Vue.js の特徴：
- **軽量で柔軟**  
Vue.js は非常に軽量であり、必要な部分だけを選んで使用することができる柔軟性を提供します。これにより、プロジェクトの規模や要件に合わせた適切な使い方が可能です。  

- **AngularJSの強みを吸収　優れた性能を持つ双方向データバインディング技術**  
Vue.jsは依存関係追跡（dependency tracking）という仕組みを使用して、データの変更を効率的に管理します。   
具体的には、Vue はデータの依存関係を追跡し、必要なときだけ DOM を更新する。

::: sandpack#vue Vue.js双方向データバインディング技術

@file /src/App.vue

```vue
<script setup>
import { ref } from "vue";

const msg = ref("Hello Playground!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::

- **AngularJSより使えやすいディレクティブ（指令）**  
これらのディレクティブにより、テンプレート内で要素の表示・非表示、レンダリング、更新を柔軟に制御できる。  
VueJSの動的なレンダリング機能が強化され、リアクティブなユーザーインターフェースを構築しやすくなります。

::: sandpack#vue Vue.js ディレクティブ（指令）例「v-for」

@file /src/App.vue

```vue
<script setup>
import { ref } from "vue";

const items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
    ];

</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in items"
       :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
  
</template>
```

:::

- **Reactの強みを吸収　仮想 DOM（Virtual DOM）技術**  
Vueの仮想 DOM は、リアクティブシステムと組み合わせて効率的な更新を実現しています。  
データが変更されると、Vue はそのデータに依存しているコンポーネントを自動的に追跡し、再描画が必要なコンポーネントのみを更新します。  
この仕組みにより、必要な部分のみを更新することで、DOM の更新を最小限に抑え、パフォーマンスを更に向上させることができます。

- **学習コストが低い**  
React は JSX（JavaScript XML）という独自の構文を使用しており、HTMLとJavaScriptが組み合わさっているため、初めて触る人にとっては少し分かりにくい部分があります。  
Vue は、HTMLに近いテンプレート構文を採用しており、視覚的に理解しやすく、初心者にとっては優しい印象があります。

## こうして、三つの勢力が並び立つことが形成されました。
![Alt](/assets/image/js-4/Angular__React__and_Vue.js-Front-end_Framework_Comparison.png " " =100%x)

![Alt](/assets/image/js-4/ranking.png "2023年間Front-end Frameworks" =100%x)