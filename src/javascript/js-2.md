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
Netscapeのオープンソースの遺産はMozilla財団の中で発展を続け、最終的には著名なFirefoxブラウザが誕生しました。


---
第一次ブラウザ戦争は1990年代後半から2000年代初頭にかけて徐々に終焉を迎えました。  
**Internet Explorerが主導ブラウザとなり、Netscapeは徐々に市場から姿を消していきました。**  
Netscapeはオープンソースプロジェクトに遺産を残しました（MozillaプロジェクトやFirefoxブラウザなど）が、市場のリーダーとしての時代は終わりを迎えました。

::: info 標準化プロセス

標準化プロセスとは、特定の製品、サービス、またはプロセスにおいて、品質、性能、安全性、互換性などの基準を確立し、広く受け入れられる規格を設定する一連の手続きです。  
このプロセスは、業界全体での一貫性を保ち、製品やサービスの信頼性を向上させることを目的としています。  
標準化により、異なる企業や団体が共通の基準に従うことで、効率性の向上やコストの削減が期待されます。

1997年、競争で優位に立つために、NetscapeはJavaScriptをECMAScriptとして標準化することを提出しました。  
その狙いはWeb開発分野での主導的地位を維持し、Microsoftとの競争に有利な位置に立つことでした。

:::
