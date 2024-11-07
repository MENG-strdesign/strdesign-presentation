---
title: 第二戦 ブラウザの戦い
icon: rocket
navbar: false
sidebar: false
editLink: false
lastUpdated: false
pageInfo: false
toc: false
comment: false
prev: /javascript/js-1
next: /javascript/js-3
order: 2
---

90年代　JavaScriptの実行環境はどこ？  

答えは「ブラウザ」です。  

ブラウザの戦争も、JavaScriptの戦争である！
<div style="display:flex;">
<div style="flex:1;">

### 1995年、Netscape Navigatorが登場してから、重要な地位を確立しました。  
### 1995年から1997年の間、Netscape Navigatorの市場シェアは一時80%に到達しました。約3,000万ユーザーを持つと推定されています。
### Netscapeは市場の覇権を握る。
</div>
<div>

![Alt](/assets/image/js-2/Navigator.jpg " " =200x)
</div>
</div>

::: tip Netscape社が短期間で激しい成長

1996年、Netscapeの総収入は**約2億6000万ドル**で、その大半は広告や技術ライセンスから得られました。  
1996年11月、Netscapeは正式にECMA（欧州コンピュータ製造業者協会）に対し、言語標準を提案しました。  
1997年6月にECMAはJavaScript言語を基(もと)にした標準規格「ECMAScript」（ECMA-262）を発表しました。  
**JavaScriptはECMAScriptの最も有名な実装の一つとなっております。**  
この件のおかげで、1997年Netscapeの収入が**約4億7000万ドル**に増加し、商業モデルの成功を示しました。  

1998年8月に上場し、上場初日に100%以上の上昇を記録しました。  
同年、Netscapeの時価総額は**約45億ドル**に到達し、企業としての大成功を象徴しました。

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

::: info 標準化プロセス

標準化プロセスとは、特定の製品、サービス、またはプロセスにおいて、品質、性能、安全性、互換性などの基準を確立し、広く受け入れられる規格を設定する一連の手続きです。  
このプロセスは、業界全体での一貫性を保ち、製品やサービスの信頼性を向上させることを目的としています。  
標準化により、異なる企業や団体が共通の基準に従うことで、効率性の向上やコストの削減が期待されます。

1997年、競争で優位に立つために、NetscapeはJavaScriptをECMAScriptとして標準化することを提出しました。  
その狙いはWeb開発分野での主導的地位を維持し、将来の競争に有利な位置に立つことでした。

:::

**ブラウザ市場の8割以上が支配され、開発言語の標準化という制約も設定された今、  
本当にこの現状を打破できる挑戦者は現れるのでしょうか？**


## 覇権を挑む　新しい挑戦者　Microsoftの登場
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

![Alt](/assets/image/js-2/jsvsjscript.jpg "js vs jscript" )
![Alt](/assets/image/js-2/1st-browser-war.png "第一次ブラウザ戦争" )

## 「Netscape Navigator」 VS 「Internet Explorer」



Microsoft は、「Internet Explorer」 の普及を推進するために、  
自社の強みを利用し、さまざまな戦略を展開しました。  

- **戦略1: プリインストールアプリ**  
::: tip プリインストールアプリ
プリインストールアプリとは　販売時にあらかじめインストールされたアプリケーションソフトの総称です。  
1995年8月以降、MicrosoftはWindows OSの各バージョンにIEを標準で搭載させた。
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
Internet Explorerの地位をさらに強化するために、Microsoft は独自の技術を導入しました。  
**「WindowsOSとの深い統合」  
「Microsoft　officeとの連携」  
「ActiveXで財務管理ソフト、データ分析ツールと連動」**  
など便利な機能が続々開発されました。  
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

::: chart Microsoftの戦略展開後　ブラウザ市場占有率の変化

```json
{
  "type": "line",
  "data": {
    "labels": ["1994", "1995", "1996", "1997", "1998", "1999", "2000"],
    "datasets": [
      {
        "label": "Netscape Navigator",
        "data": [80, 84, 70, 51, 37, 20, 10],
        "fill": false,
        "borderColor": "rgb(75, 192, 192)",
        "tension": 0.1
      },
	  {
	    "label": "Internet Explore",
	    "data": [8, 20, 40, 56, 70, 78, 90],
	    "fill": false,
	    "borderColor": "rgb(255, 99, 132)",
	    "tension": 0.1
	  }
    ]
  }
}
```

:::


### 技術は競争の全てではない　Netscapeの末路
- **オープンソース**  
1998年、競争が激化し、市場シェアがIEに徐々に侵食される中、NetscapeはNetscape Navigatorのコードをオープンソースにすると発表。
同時にMozillaプロジェクトを立ち上げました。  

- **AOLへの統合と徐々に衰退（1999年～2003年）**  
1999年、Netscapeはアメリカオンライン（AOL）に買収されましたが、IEが市場の主導権を握っていたため、Netscapeの影響力はに徐々無くなりました。  
2003年、NetscapeはNetscape Communicatorなどの新しいバージョンを発表しましたが、市場で主導的な地位を取り戻すことはできませんでした。  

- **終焉と遺産（2003年以降）**  
2003年、アメリカオンライン（AOL）はNetscapeブラウザのサポート終了のお知らせを発表し、Netscapeの終焉を意味しました。  
Netscapeのオープンソースの遺産は種子として、Mozilla（モジラ）財団の中で発展を続け、最終的には著名なFirefoxブラウザが誕生しました。


---
第一次ブラウザ戦争は1990年代後半から2000年代初頭にかけて徐々に終焉を迎えました。  
**Internet Explorerが主導ブラウザとなり、Netscapeは市場のリーダーとしての時代が終わり、市場から姿を消していきました**  




::: info Firefox
**2004年11月 正式に登場**  
Firefox 1.0は速度、安定性、安全性に優れ、ユーザーの支持を迅速に得て、当時の主流ブラウザであったInternet Explorerの強力な競争相手となりました。  

**急成長と市場シェアの拡大 (2005-2010年)**  
Firefox 1.0のリリース以降、Firefoxは改良を重ね、タブ機能、ブックマーク管理、安全性の強化などの新しい機能を追加した複数のバージョンをリリースしました。  
Internet Explorerの市場シェアが徐々に減少する中、Firefoxは世界で最も人気のあるブラウザの1つとなりました。  

**Firefoxは登場以来、インターネットブラウザ市場において革新を続け、ユーザーの信頼を得てきました。**
![Alt](/assets/image/js-2/firefox.png " " )
:::


## 一人の強者が倒れ、さらに多くの強者が立ち上がる。

![Alt](/assets/image/js-2/2nd-browser.png " " )

### ブラウザの世界での戦争はまだ続いている...

::: important 戦果

### JavaScriptは激しい技術競争の中に、共通の基準が確立され、自身の機能も豊富になりました。
### 一方、JavaScriptで開発された新しい機能はさまざまな業界に人々の生活に便利さをもたらしています。

:::