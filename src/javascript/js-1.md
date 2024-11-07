---
title: 第一戦 誕生の戦い
icon: rocket
navbar: false
sidebar: false
editLink: false
lastUpdated: false
pageInfo: false
toc: false
comment: false
prev: /
next: /javascript/js-2
order: 1
---

## 最初に流行したウェブブラウザ　NCSA Mosaic（モザイク）
1993年、米国（べいこく）国家スーパーコンピュータ応用センター  
（National Center for Supercomputing Applications 略称：NCSA）は**NCSA Mosaic**を発表しました。  
これは最初に流行したウェブブラウザで、World Wide Web(ワールドワイドウェブ)の普及に重要な役割を果たしました。  

![Alt](/assets/image/javascript/NCSAMosaic.png "NCSA Mosaic")

<div style="display:flex;">
<div style="flex:1;">
当時、ウェブページは静的な内容に限られており、  

ユーザーと直接対話するような動的機能を備えていませんでした。 
</div>
<div>

![Alt](/assets/image/javascript/网页.jpg  =150x)
![Alt](/assets/image/javascript/问号.jpg  =100x)
</div>
</div>

## Netscapeの設立
<div style="display:flex;">
<div style="flex:1;">
1994年、Mosaicの主要な開発者たちはNetscape社を設立した。  
Netscape Navigator（ナビゲーター）を開発するために、多くの元NCSA Mosaic開発者を雇いました。
 
この会社の目標は、**NCSA Mosaicに代わって世界一のウェブブラウザになること**です。

</div>
<div>

![Alt](/assets/image/javascript/Marc_Andreessen-9.jpg "マーク・アンドリーセン氏" =200x)
</div>
</div>

Netscape（ネットスケープ）社の創設者であるマーク・アンドリーセン氏は、  
HTML（エイチティーエムエル）に画像やプラグイン（プラグイン）を組み合わせる「接着剤」の役割を果たす簡便な言語が必要だと考えました。  
この課題を解決するために、より軽量で簡単に使えるスクリプト言語を導入しようと考えました。


## 言語選定の戦い 
### Scheme（スキーム） or Java or 新しいアイデア？
1995年、Netscape（ネットスケープ）はBrendan Eich (ブレンダン・アイク)を雇用し、Scheme（スキーム）言語をNetscape Navigatorブラウザに組み込むことを期待している。  
しかしそれ以前に、ネットスケープはSun Microsystems（サン・マイクロシステムズ）社と協力し、Netscape NavigatorにJava言語を組み込む計画を立てており、  
**この時点でネットスケープ内部で意見が対立しました。**

![Alt](/assets/image/javascript/会议室.png " " =550x)

## 時間との勝負 JavaScript原型の誕生
<div style="display:flex;">
<div style="flex:1;">

社内で激しい議論がありましたが、その中でEich（アイク）氏がJavaに似た構文を持つ、**新しい言語を設計することを提案しました。**  
しかし他の競争提案の中でJavaScriptのアイデアを守るために、動作するプロトタイプ（原型）を提出することが必要です。  
**Eich（アイク）氏はわずか10日間で新しい言語を設計し、完成させました。**  
当初「Mocha」（モカ）と命名され、後に「LiveScript」に改名されましたが、Javaが流行していたことから「JavaScript」という名称が採用されました。  
</div>
<div>

![Alt](/assets/image/javascript/Javascript_icon.svg.png "JavaScript" =150x)
</div>
</div>

> [!tip]
> JavaScriptの名前には「Java」が含まれていますが、これは当時Javaが人気だったためであり、両者の間に直接的な技術的関連はありません。
> 
> ![Alt](/assets/image/javascript/jsvsjava.jpeg " " =550x)

この名称変更が、後にJavaScript（ジャヴァスクリプト）への誤解を招く一因ともなりました。

## Netscape Navigatorの公開
世界初のJavaScriptをサポートしたブラウザであるNetscape Navigatorの誕生により、ウェブの世界は大きく変わりました。  
**Netscape Navigatorは使いやすい機能と分かりやすいインターフェースで人気を集め、  
リリースからたった4ヶ月でブラウザ市場の75%を占め(しめ)ました。**  

::: chart Netscape Navigator誕生4ヶ月後

```json
{
  "type": "pie",
  "data": {
    "labels": ["Netscape Navigator", "NCSA Mosaic","その他"],
    "datasets": [
      {
        "label": "",
        "data": [75, 23, 2],
        "backgroundColor": [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)"
        ]
      }
    ]
  }
}
```

:::

こうして、Netscape Navigatorは1990年代のインターネットを代表するブラウザとなりました。

## プロフィール
<div style="display:flex;">
<div style="flex:1">

### Brendan Eich (ブレンダン・アイク)  

1961年生まれ、アメリカ合衆国のプログラマ  
プログラミング言語: **JavaScriptの設計者**。  
主にNetscapeでの業績で知られている。  
1995年4月 Netscapeに転職し、  
ウェブブラウザNetscape Navigator用のJavaScriptを開発した。


</div>
<div>

![Alt](/assets/image/javascript/220px-BEich.jpg "ブレンダン・アイク氏" =150x)
</div>
</div>


::: important 戦果

### JavaScriptはウェブ開発の専用言語として世界中にひろまり、  
### 多くの企業や開発者によって広く使用されています。

:::




