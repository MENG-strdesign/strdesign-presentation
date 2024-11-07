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

## 最初のSPAフレームワーク

<div style="display:flex;">
<div style="flex:1;">

### AngularJS
「AngularJS」は2010年Googleに開発され、主にシングルページアプリケーション（SPA）を作るためのフレームワークです。  
</div>
<div>

![Alt](/assets/image/js-4/AngularJS.png " " =200x)
</div>
</div>

### AngularJSの主な特徴

- **双方向データバインディング（Two-way Data Binding）**  

AngularJSは、双方向データバインディングを提供します。  
これにより、ビュー(View)とモデル(model)は常に同期され、モデルのデータが変更されるとビューが自動的に更新され、  
逆にビューでのユーザー入力もモデルに反映されます。  
この仕組みによって、開発者はデータの同期を手動で行う必要がなくなります。  

![Alt](/assets/image/js-4/data_binding_two_way.png " " =100%x)


- **モジュール化（Modularization）**  

AngularJSは、アプリケーションを複数のモジュールに分割して開発することをサポートします。  
これにより、テストやデバッグが容易になり、各モジュールは特定の機能を担当し、コードの保守性や再利用性が向上します。


