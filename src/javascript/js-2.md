---
title: JavaScriptの第二戦　ブラウザの戦い
icon: lightbulb
navbar: false
sidebar: false
editLink: false
lastUpdated: false
pageInfo: false
toc: true
comment: false
prev: /
next: /javascript/NodeJS
---

<div style="display:flex;">
<div style="flex:1;">

### 1995年、Netscape Navigatorが登場してから、重要な地位を確立しました。  
### 1995年から1997年の間、Netscape Navigatorの市場シェアは一時80%に到達しました。約3,000万ユーザーを持つと推定されています。
### 市場はほぼNetscapeの独占状態でした。
</div>
<div>

![Alt](/assets/image/js-2/Navigator.jpg " " =200x)
</div>
</div>

::: tip Netscape社が短期間で激しい成長

1996年、Netscapeの総収入は**約2億6000万ドル**で、その大半は広告や技術ライセンスから得られました。  

1997年には、収入が**約4億7000万ドル**（4.7億USD）に増加し、商業モデルの成功を示しました。  

1998年8月に上場し、上場初日に100%以上の上昇を記録しました。  
同年、Netscapeの時価総額は**約450億ドル**（45億USD）に到達し、企業としての大成功を象徴しました。

::: chart Netscapeの年間収入

```json
{
  "type": "line",
  "data": {
    "labels": ["1995年", "1996年", "1997年", "1998年"],
    "datasets": [
      {
        "label":"収入（百万ドル）",
        "data":  [30, 260, 470, 600],
        "fill": false,
        "borderColor": "rgb(75, 192, 192)",
        "tension": 0.1
      }
    ]
  }
}

```

:::



## 強力な相手　Microsoftの参戦
<div style="display:flex;">
<div style="flex:1;">

Microsoft社はNetscape社の製品と対抗するために人員を集め、Navigatorのエンジンを解析しました。  
同年、JavaScriptと同じレベル機能を持つ言語： 「**JScript**」が開発されました。  
「**JScript**」を搭載したブラウザ「**Internet Explorer**」が公開され、Netscapeとのブラウザ戦争を引き起こしました。

</div>
<div>

![Alt](/assets/image/js-2/Microsoft.jpg " " =200x)
</div>
</div>

![Alt](/assets/image/js-2/1st-browser-war.png "第一次ブラウザ戦争" )

## 「Netscape Navigator」 VS 「Internet Explorer」

Microsoft は、「Internet Explorer」 の普及を推進するために、  
自社の強みを利用し、さまざまな戦略を展開しました。  

- **戦略1: プリインストールアプリ**  
::: tip プリインストールアプリ
プリインストールアプリとは　販売時にあらかじめインストールされたアプリケーションソフトの総称です。  
1995年8月以降、MicrosoftはWindows OSの各バージョンにIEを標準で搭載しました。
::: 


<div style="display:flex;">
<div style="flex:1;">

- **戦略2: 「Internet Explorer」の無料提供**  
最初の頃、Netscape Navigatorは購入が必要です。  
Internet Explorerを無料で提供され、Windowsユーザーが簡単に入手できる。
</div>
<div>

![Alt](/assets/image/js-2/iefree.jpg " " =200x)
</div>
</div>
<div style="display:flex;">
<div style="flex:1;">

- **戦略3: 独占技術**  
Internet Explorer の地位をさらに強化するために、Microsoft は独自の技術を導入しました。  
その結果、多くのウェブサイトは Internet Explorerのみ正常に表示されるようになりました。

</div>
<div>

![Alt](/assets/image/js-2/ActiveX.jpeg " " =200x)
</div>
</div>
<div style="display:flex;">
<div style="flex:1;">

- **戦略4: PCメーカーや企業との戦略的協力**  
Microsoftは主要なPCメーカーと協力し、新しいPCにIEをプリインストールすることで市場浸透率を向上させました。  
同時に大型企業内部のシステムもIEを標準ブラウザとして採用してもらうことで、企業ユーザー層でも広く使用されるようになりました。
</div>
<div>

![Alt](/assets/image/js-2/PCメーカーや企業との戦略的協力.webp " " =200x)
</div>
</div>

**上記の戦略により、Internet Explorerは普及しやすくなり、  
Netscapeはユーザーを失うこととなりました。**

「JavaScript」と「JScript」  
これら二つの言語がブラウザ側で共存していることは、言語の標準化が不足していることを意味していました。

<div style="display:flex;">
<div style="flex:1;">

- **JavaScriptの実行速度の飛躍（ひやく）的な向上**  

V8は、Googleによって開発され、従来のJavaScriptエンジンより**圧倒的に速い実行速度**を提供しました。これにより、JavaScriptを使用した**大規模なアプリケーションの構築が可能**になり、ウェブアプリのパフォーマンスも大幅に向上しました。
</div>
<div>

![Alt](/assets/image/nodejs/up.jpg " " =200x)
</div>
</div>

- **シングルページアプリケーション（SPA）の普及（ふきゅう）**  

V8の高速化によって、JavaScriptを使用したリアルタイムなインタラクションやシームレスな画面遷移が実現し、シングルページアプリケーションが急速に普及しました。これにより、より快適なユーザー体験が提供されるようになりました。

- **Node.jsの誕生とサーバーサイドJavaScriptの実現**  

V8エンジンはNode.jsの基盤にもなり、JavaScriptがサーバーサイドで動作することを可能にしました。これにより、フロントエンドとバックエンドの両方でJavaScriptを使用できるようになり、開発プロセスの効率化が進みました。

- JavaScriptエコシステムの拡大
V8はJavaScriptの性能向上と共に、フロントエンド開発の標準言語としての地位を確立する役割を果たしました。これにより、多くのライブラリやフレームワーク（例えば、ReactやVue.js）が誕生し、JavaScriptのエコシステムが急速に拡大しました。

V8の登場は、JavaScriptが単なるブラウザ内のスクリプト言語から、フルスタック開発に活用される強力な言語へと進化するきっかけとなったのです。
<!-- more -->

::: tip 標準化プロセス

標準化プロセスとは、特定の製品、サービス、またはプロセスにおいて、品質、性能、安全性、互換性などの基準を確立し、広く受け入れられる規格を設定する一連の手続きです。  
このプロセスは、業界全体での一貫性を保ち、製品やサービスの信頼性を向上させることを目的としています。  
標準化により、異なる企業や団体が共通の基準に従うことで、効率性の向上やコストの削減が期待されます。

:::
