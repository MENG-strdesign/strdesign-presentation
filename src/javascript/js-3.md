---
title: JavaScriptの第三戦 性能の戦い
icon: rocket
navbar: false
sidebar: false
editLink: false
lastUpdated: false
pageInfo: false
toc: false
comment: false
prev: /javascript/js-2
next: /javascript/js-4
order: 3
---

<div style="display:flex;">
<div style="flex:1;">

激しい市場競争とユーザー争奪戦の中で、  
ブラウザメーカー各社は、自社ブラウザへの新機能の追加に  
全力を注いでいます。  

しかし、当時のJavaScriptエンジンはシンプルで、JavaScriptの処理効率が低い。  
Webアプリケーション日々複雑化により、ブラウザの動きも重くなりました。  

**性能問題は、当時すべてのブラウザメーカーが直面せざるを得ない深刻な課題となっていました。**   

</div>
<div>

![Alt](/assets/image/js-3/update.jpg " " =200x)

![Alt](/assets/image/js-3/Update-1.jpg " " =200x)
</div>
</div>

![Alt](/assets/image/js-3/cpu.png " " =100%x)

## JavaScriptエンジン Google V8（ヴィエイト）の誕生
<div style="display:flex;">
<div style="flex:1;">
 
2008年、Google開発したオープンソースのJavaScriptエンジンV8（ヴィエイト）が発表されました。  
V8エンジンはC++で開発され、JavaScriptを直接マシンコードにコンパイルすることで、実行速度を大幅に向上させました。  

</div>
<div>

![Alt](/assets/image/js-3/chrome-v8.png "chrome-v8" =200x)
</div>
</div>

::: tip Google V8 とV型8気筒エンジン

<div style="display:flex;">
<div style="flex:1;">

この名称は、当時パフォーマンス最高峰のV型8気筒エンジン（略称「V8」）に由来しています。  

同様に、「V8 JavaScriptエンジン」も、JavaScriptエンジンとして優れた性能を発揮することを目的に名付けられました。
</div>
<div>

![Alt](/assets/image/nodejs/v8.jpg "V型8気筒エンジン" =200x)
</div>
</div>
:::

### JavaScriptの実行速度の飛躍（ひやく）的な向上  
<div style="display:flex;">
<div style="flex:1;">

V8は従来のJavaScriptエンジンより**圧倒的に速い実行速度**を提供しました。これにより、ウェブアプリのパフォーマンスも大幅に向上し、  
昔は**性能の問題で開発が放置されていたアイデア**や、**大規模なアプリケーションの構築**が可能になりました。
</div>
<div>

![Alt](/assets/image/js-3/pafomasu.png " " =200x)
</div>
</div>

## 性能向上によってWeb開発の変革が引き起こされた

### 変革1: Node.jsの誕生によりサーバー側でもJavaScriptで開発可能

当時、JavaScript は主にクライアントサイドで使用されており、開発者はフロントエンドとバックエンドで異なる言語を使用する必要がありました。  
Node.js はサーバーサイドのコードを JavaScript で記述できるようにすることで、  
**フロントエンドとバックエンドの開発言語を統一させました。**  
**開発プロセスが簡素化され、学習コストも大幅に低減しました。**

::: tip 軽量で高性能なサーバー
Node.js の設計理念の一つは「軽量で高速な動作」であり、これは Google V8 エンジンの高いパフォーマンスと非常に相性が良いです。  
V8エンジンの高性能により、Node.js はServer Application（サーバーアプリケーション）を構築するための理想的な選択肢となっています。
:::

![Alt](/assets/image/js-3/nodejsusefor.png " " =100%x)
---

### 変革2: シングルページアプリケーション（SPA）の普及（ふきゅう）

- **従来のマルチページアプリケーション（MPA）の制限**  

従来のMPAでは、ユーザーがページと対話するたびにサーバーへのリクエストを送信し、ページ全体を再読み込みする必要がありました。  
この方法はシンプルですが、毎回ページを再読み込みするため、ロード時間が長く、ユーザー体験が低下します。  
特に頻繁にページ遷移が必要なアプリケーションでは非効率です。


![Alt](/assets/image/js-3/MPAマルチアプリケーションの仕組み.jpg "MPAマルチアプリケーションの仕組み" =100%x)


- **SPA（シングルページアプリケーション）とは**   
<div style="display:flex;">
<div style="flex:1;">

「SPA」とは「Single Page Application」の略で、  
１つのページで、スムーズにコンテンツ切り替えができる技術のことです。  
従来のページの読み込みでは、複数のページがあり、それを１ページづつアクセスし表示していく方法でした。  
SPAでは、一度のアクセスでWebページの全体を取得した後、差分データのみを表示させることで、ページの高速化が期待できます。
</div>
<div>

![Alt](/assets/image/js-3/spa-2.png " " =200x)
</div>
</div>


- **SPAとMPAの区別**  

SPAとMPAの区別は「ページ取得のサーバーへのアクセス回数」です。
SPAでは、一度サーバーにアクセスしたタイミングでWebページの全体を取得します。その後のページ切り替えは、差分データの情報のみを取得します。

![Alt](/assets/image/js-3/MPAの説明画像.png " " =50%x)
![Alt](/assets/image/js-3/SPAの説明画像.png " " =50%x)
SPAでは、一度サーバーにアクセスしたタイミングでWebページの全体を取得します。その後のページ切り替えは、差分データの情報のみを取得します。
一方、MPAの場合はページにアクセスする度、サーバーから一回ずつページを取得します。
上記を比較すると以下のようになります。

|	|ページの取得数（1回）	|サーバーへのアクセス回数（ページ単位）	|取得データ（ページ単位）	|
|:-:|:-:					|:-:									|:-:						|
|SPA|Webページ全体			|1回									|差分データのみ				|
|MPA|1ページ				|ページごとにサーバーへアクセス			|1ページ分のデータ			|

![Alt](/assets/image/js-3/SPAvsMPA.jpg " " =100%x)