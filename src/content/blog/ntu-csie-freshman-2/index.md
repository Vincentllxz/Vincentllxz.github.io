---
title: "台大資工大一下 修課心得"
description: "延續大一下的選課、專題與考試心得，整理每門課的體會與建議。"
publishDate: "2025-06-17T23:33:14+08:00"
tags:
  - "修課心得"
  - "NTU"
  - "CSIE"
language: "zh-TW"
comment: true
---
## 前言

這學期有點想測試自己的極限，所以亂選了一堆課：系上的選修、院內的選修，通通塞進課表裡，總共修了 26 學分，真的有點爆炸多。

其實一開始只是因為身邊認識的同學都搶到很多好通識，而我一個人什麼也沒選到，才會一口氣塞了一堆奇怪的選修，結果這學期就這樣開始了。也因此，這學期我真正體驗到什麼叫「通宵寫作業」的生活──雖然很多時候只是我自己忘記 Deadline。總之，打這篇文章的時候我正在準備資訊營當隊輔，還有氣球社的各種文件，狀態有點混亂，如果文字哪裡怪怪的請見諒。

雖然課很多、生活爆炸，但這學期我其實沒有那麼在意 GPA 了。也許是因為修了《東坡詞》，讓我開始對大學生活有些不同的想法——學會相信「順其自然」總會有好結果。
就像東坡在詞中寫的：

> **試問嶺南應不好。卻道。此心安處是吾鄉。**

順自然而行總是好事（濃厚雞湯感～～

<!-- more -->

## 修課目錄

---

- **系訂必修**
  - [💻 資料結構與演算法](#資料結構與演算法)
  - [➗ 微積分34](#微積分34)
  - [🧪 普通化學甲下](#普通化學甲下)
- **系訂選修**
  - [💻 數位系統與實驗](#數位系統與實驗)
  - [💻 計算機圖形](#計算機圖形)
- **一般選修**
  - [💻 機器學習](#機器學習)
- **校定必修**
  - [📖 英文二 (附兩小時英聽)](#英文二（附兩小時英聽）)
- **全校性通識**
  - [📖 東坡詞](#東坡詞)

## 課表

|     | 一    | 二   | 三           | 四             | 五           |
|-----|------ |------|------|------|------|
| 1   |       |      |              |                |   微積分     |
| 2   |  |  |        |  計算機圖形  |       微積分       |
| 3   |  | 東坡詞 |   普化甲   | 計算機圖形   |    普化甲    |
| 4   |  | 東坡詞 |    普化甲    | 計算機圖形 |     普化甲   |
| 5   |     |  東坡詞  |  |               |              |
| 6   |       |  DSA |  |                |  |
| 7   | 數位系統 | DSA |  |  | 機器學習 |
| 8   | 數位系統 | DSA |  微積分  | 英文 |機器學習 |
| 9   | 數位系統 |  | 微積分  | 英文 | 機器學習 |
| 10  |   |      |   微積分    |  英文    | 機器學習 |


---

## 系訂必修

---

### 資料結構與演算法

<div class="course-info-card">

- **授課教授：** 林軒田/蔡欣穆 合授  
- **學分：** 3  
- **等第：** A-（被自己蠢到）

- **甜度：** 2/5  
- **涼度：** 0.0001/5  
- **收穫：** 4/5 

</div>

這門課就是傳說中的DSA，資料結構與演算法的入門，內容大概是在教各種演算法以及資料結構，課本是經典的 *Introduction to algorithms (4th ed.) Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022), The MIT Press.*，前半學期軒田上課，後半學期則是Micheal，都是老師上傳的PPT講課。這門課擁有史上最複雜的計分方式基本上是：

- HandWrite Assignment 20%
- Programming Assignment 20%
- Activity 10%
- Midterm 25%
- Final 25%

其中還有很多不採計的計算方法就不詳細描述，我把[Syllabus]()放在這，手寫作業一共四次，會跟隨著四次的程式作業，基本上手寫作業完成時間會在4天以內，程式作業則要看難度，每次作業都是2+2題，以下節錄學長的描述：

> 手寫題大概就是回答一些有關某個資料結構或演算法性質的問題，或是給出一個情境，然後設計一個符合時間複雜度要求的方法來達成題目的需求，基本上就是考會不會利用上課教到的東西來解決實際的問題，寫完以後要把 pdf 檔上傳到 Gradescope，好像也能用圖片為格式上傳，不過我沒試過，Gradescope 可以讓人上傳檔案後給每一題都選取特定的頁數，這樣助教在改題目的時候就能專心在你選取的頁數上，同時也能方便分工改作業，雖然我不是助教不過看起來很讚，而且不知道為什麼我覺得選頁的時候很舒壓。

我自己手寫作業是先用 overleaf 打 Latex 然後上傳，但也有不少同學是用iPad寫完上傳，中文英文都可以，只要讓助教看得懂就好。

我這屆也是差不多，Programming Part 的話也是同樣一次兩題，只不過我們這屆還有一份 mini-HW + hw0的程式題，兩個合再一起可以當成一次作業，mini-HW 基本上是上課內容的 implement，老師說是為了銜接 HW 跟課程內容增設的作業，hw0 的話則是從 Judgegirl (JG) 上挑出八題，來測試你有沒有基本的 C 語言能力（計程停修的各位注意了），從 hw0~hw4，DSA的所有程式作業都是要上傳到 DSA judge，不同於 JG，DSA judge 要用 `git  push` 上傳，我自己第一次交作業的時候 `wsl` 不知道為啥密鑰設定一直不成功，剛好我要換電腦，後來換成Mac不知道為何，很輕鬆就設定好了（沒有暗廣），一天上限是十次繳交（這害慘我了）。通常越後面的programming part會越難，這裡要感謝所有跟我一起修課的朋友們，我跟他們的話題在學期最後都變成：「你p4寫了嗎？」、「你p4最後一組過了沒」，過了的話我就會狂問猛問他們（話說突然感覺去問 TA 應該是個比較好的選擇，但每次 TA hour 我都莫名的沒空）

<details class="warning-box">
<summary><b>&nbsp;關於 Programming Part</b></summary>

在 HW2 的 P4 題目中，我當時已經獲得 AC，於是想繼續挑戰這題的 bonus。寫完之後準備 push 時，才發現自己的 submit 次數已經用完了。為了能檢查結果，我借用了某位已經完成 P4 並且寫完 bonus 的同學的 judge 帳號來 push，結果顯示是 TLE。後來我又改了一段時間，等到隔天自己的繳交次數重置後，用自己的帳號重新 push。

本來以為事情就這樣結束了，沒想到期末時突然收到一封 penalty 通知信，說系統偵測到我的程式碼與其他人有 line-by-line 的相似度，那一題要扣 110 分。我立刻寫信向助教解釋，說明自己並沒有抄襲，只是借帳號做測試。最後收到教授的回覆，將扣分減半為 50 分，換算總成績大約扣了 1.25 分，真的覺得自己蠢到不行。

雖然沒用LLM而且寫通宵還被扣分很不甘心，但我確實違反了規定。我的行為中包含了「借用他人帳號」這件事，從制度上來說就是不當使用資源。教授願意理解並只扣一半分數，已經是相當寬容了，也很對不起借帳號給我的同學。就當作是花學分買了一次寶貴的教訓吧。大大道歉～～～

附上信件，請感受我當時的驚恐

<figure class="custom-figure">
    <img src="/images/penalty.png" alt="圖片描述">
    <figcaption>penalty mail</figcaption>
</figure>

</details>

<br>

作業有任何問題的話可以直接在 DC 上發問，COOL 討論區發問應該也會有人回（？，也可以在 TA hour 的時候去問問 TA 們，這門課厲害的地方就在於有 23 個 TA（真的有點多），基本上任何時間都會有 TA 在線上。

上半學期軒田就是傳統的老師授課，有錄影，可以回家上課，第一堂課可能很多人，但後面漸漸人就會變稀少，HT上課口條很清楚、語速適中，也會在 PPT 上畫畫來講解，上課體驗極佳，感覺我自己上學期吸收得還不錯。

<details class="info-box">
<summary> <b>&nbsp;關於 軒田學長</b></summary>

推軒田會請大家吃飯，我不是軒田的導生，但我莫名地進入了兩個飯局，兩次都被軒田請，對於窮困大學生來說是一大福音，但學長有兩大堅持：

1. 一定要叫他學長不可以叫教授
2. 本系正式名稱是資訊系，資工系沒聽過（抱歉本篇標題觸犯天條）

另外，學長很喜歡喝酒，可能可以用酒來賄賂他達到任何目的（誤。

</details>

<br>

下半學期改成欣穆老師授課，一樣有錄影，但多了三個活動分別是：

- **Earth Game**：十幾人組隊的大地遊戲，遊戲內容都跟DSA內容有關，助教會根據期中考大家的分數來分組。
- **Software Engineering**：這是個分組活動，助教隨機分組，一組人數不定，情境是職場模擬，由一人擔任PM (Product Manager)、幾人擔任FE (Front End)、幾人擔任 BE (Back End)、幾人擔任 QA (Quality Assurance)，一個團隊需要完成一個 Data Structure 的 Visualization，助教示範是寫 Max-Heap，我們這組是做 BFS/DFS，網站[**連結**](https://vincentllxz.github.io/DSA-SE/)供參，我們這組分工蠻明確的，也都如期完成，算是遇到了不錯的隊友。我有看到有人做得超級好，也有人根本完全照抄助教。
- **Kahoot**：字面意思，內容會是整個學期的課程內容

這三個遊戲跟 In-class 作業的成績一起算在"Activity"的10%裡面，基本上很容易拿滿，cap的標準很鬆，基本上有參加就有分。

<details class="warning-box">
<summary> <b>&nbsp;小抱怨</b></summary>

這學期活動真的很多，但老師還是排了跟上學期差不多份量的進度，甚至下半學期的內容比上半學期還要難不少。為了把三個活動塞進課堂時間，老師把不少課改成錄影，讓我們自己回家看。

可是我上學期的 loading 本來就不輕，變成現在要額外花時間自學，真的會覺得有點吃不消（加上老師的 PPT 有時候畫到我看不懂）整體吸收效果就沒那麼好。

然後老師有一些比喻有點太混亂了，比如說RB-tree裡面有很多操作都跟他的 child 的顏色有關，然後就會出現一些奇怪的話，例如：

> 把你變成你的爺爺

> 你的姪子跟你的叔叔互換

類似這種最後讓人搞混的句子，雖然很好笑，但學習上好像有點問題？

</details>

期中期末就是簡化版的手寫作業，作業都自己寫的話應該是不會有太大的問題，就是說我花了好多時間準備 RB-tree 結果最後沒考很煩～～～（學期結束後 Discord 上好像大家很熱絡的在討論這門課的各種問題，但我沒參與到～～

但總之，這門課可以感受到整個教學團隊是真的用心在設計這個課程，收穫算很多的一門課。

### 微積分34

<div class="course-info-card">

- **授課教授：** 蔡國榮  
- **學分：** 2/2
- **等第：** A+/A+

- **甜度：** 5/5  
- **涼度：** 4.5/5  
- **收穫：** 5/5

</div>

按照慣例，先推[**蔡國榮粉絲後援會**](https://www.facebook.com/p/%E8%94%A1%E5%9C%8B%E6%A6%AE%E7%B2%89%E7%B5%B2%E5%BE%8C%E6%8F%B4%E6%9C%83-Kwok-Wing-Tsoi-fans-100090291350231/?locale=zh_TW)，這學期因為同學有揪[大金ＭＬ](#機器學習)，因為會佔到原本 01\~04 的微積分，加上已經被國榮圈粉，所以我簽去上學期就旁聽的 07 班的機械班，我在上學期期末大家揪完ML後就直接寄信給國榮，因為我聽說國榮的信箱幾乎每天都是滿的，能不能收到回覆全憑天意（現主時，我正有一封郵件躺在國榮信箱裡面等回覆），但我很幸運的，國榮收到信後，馬上答應（好像是因為我是 01~04 班的，我聽說大數字班同學都有被勸退）。

一如上學期，國榮上課方式就是一個禮拜一冊講義，每一頁旁邊都有 QR code 可以掃描，裡面是國榮以前錄的影片，可以隨時複習，國榮上課也會錄影，所以不去上課也不用擔心，我只能說國榮講義真的非常精美，這學期簽進國榮班又發現這班的一個好處，「計分方式」

- 20% Quiz: 兩次的小考各佔 10 分
- 30% Assesment（36% capped 30%）: 
  - Homework 6%
  - Worksheet 6%
  - WebWork 12%
  - semi-final 12%（國榮班特有，基本上就是前四分之一學期的內容）
- 50% Exam

國榮班的作業成績有一個 cap，基本上非常容易拿滿分，國榮的作業每個禮拜都會有，但是不是每一份都算分，有一些作業是不算分的，但寫了對複習絕對有大大的幫助~~Quiz大洩題~~，但即便是這樣還是有人寫不出 quiz 中的作業題（用 Magical LLM 寫作業的人們），國榮作業出的好、上課進度不拖延、又幽默，到底哪裡找這麼好的老師，嗚嗚嗚嗚嗚嗚，因此在一次推薦加入[**蔡國榮粉絲後援會**](https://www.facebook.com/p/%E8%94%A1%E5%9C%8B%E6%A6%AE%E7%B2%89%E7%B5%B2%E5%BE%8C%E6%8F%B4%E6%9C%83-Kwok-Wing-Tsoi-fans-100090291350231/?locale=zh_TW)，遇到國榮必推。

<details class="info-box">
<summary> <b>&nbsp;微34筆記</b></summary>

待補（如果我記得），如果發現我忘記可以到 [About](https://vincentllxz.github.io/about/) 找聯絡方式私訊我

</details>


### 普通化學甲下

<div class="course-info-card">

- **授課教授：** 蔡蘊明  
- **學分：** 3
- **等第：** A+

- **甜度：** 2/5  
- **涼度：** 3/5  
- **收穫：** 4/5    

</div>

下學期一樣必帶進蘊明普化，依然是一樣的節奏，偷一下上學期寫的

> 老師上課用自編投影片 （應該就夠用了）啊課本是 Chemical Principles by S. S. Zumdahl and D. J. DeCoste, 8th ed.; 2017, CENGAGE Learning 投影片上課前會放到 COOL 上，老師投影片很有系統性，基本不需要讀課本就可以了解整個章節的內容，老師上課語速很慢，是放 1.5 倍速剛剛好那種，老師會把上課影片上傳到 COOL，很多人都沒來上課，但實體上課還是比較有感覺。

下半年的課綱如下

> 12. Quantum Mechanics and Atomic Theory
> 13. Bonding: General Concepts
> 14. Covalent Bonding: Orbitals 
> 15. Chemical Kinetics
> 19. Transition Metals and Coordination Chemistry
> 16. Liquids and Solids
> 17. Properties of Solutions
> 18. The Nucleus: A Chemist’s View

<details class="warning-box">
<summary><b>&nbsp;道歉啟事</b></summary>

本人在普通化學甲下上半學期量子化學部分

- ✅ 出席率不到10％
- ✅ 考前兩天三倍速補課
- ✅ 考前以為自己有老本可以吃，會考很好

本人保證向普通化學甲下道歉，下半學期一定每堂課出席。

</details>

在經歷以上心路歷程後，我下半學期每堂課都有去，發現還是實體課有感覺，吸收感覺快很多，老師上課也是依然有去（很抱歉，但還是愛蘊明

這學期跟上學期不一樣的地方是，我今年有實體的 TA hour，上學期好像是因為大助還要帶實驗所以超忙根本還空，我今年有去期末考的TA hour（因為期中考太爛），老師今年把Ch.19也就是配位化學的部分往前放，老師的說法是這個部分最難，給大家充分時間去準備，事實證明是，完全正確，那章節東西超多要背超久。

因為老師是用排名來算等第，我上學期大概是拿A的第一位，所以經過上半學期，我本來以為 A+ 無望，結果經過下半學期的努力（每堂課都有去），我終於從蘊明手上拿到 A+，非常感動。我期中 84，期末 96，作業 50 供參（計分方式與[上學期](https://vinsong.csie.org/blog/ntu-csie-freshman-1/#%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%B8%E7%94%B2%E4%B8%8A)一樣

最後一樣，愛蘊明愛蘊明愛蘊明愛蘊明，上完整門普化，我才想起來我國中的時候曾經想讀過化學系，曾經非常喜歡過化學（蘊明明年好像去教化工材料，想修的話可以去。


## 系訂選修

---

### 數位系統與實驗

<div class="course-info-card">

- **授課教授：** 林忠緯 
- **學分：** 3  

- **甜度：** 4/5  
- **涼度：** 5/5  
- **收穫：** 5/5  

</div>

這門課是台大少有的「遠距教學」課程，顧名思義就是實體上課並不會上課程內容，只會回答問題，相當於 Office hour 的概念，課程內容完全要到[課程的COOL](https://cool.ntu.edu.tw/courses/44631)上面去觀看，老師在學期初就會把所有內容上傳，所以其實期初就可以開始卷了，基本上課程內容就是隔壁電機系的**交換電路與邏輯設計**的簡化版，這學期的Syllabus如下：

> 1. Number Systems and Conversion
> 2. Boolean Algebra
> 3. Boolean Algebra (Continued)
> 4. Applications of Boolean Algebra
> 5. Karnaugh Maps
> 6. Quine-McCluskey Method
> 7. Multi-Level Gate Circuits
> 8. Combinational Circuit Design
> 9. Multiplexers, Decoders, and Programmable Logic Devices <= (Midterm Exam)
> 10. Latches and Flip-Flops
> 11. Registers and Counters
> 12. Analysis of Clocked Sequential Circuits
> 13. Derivation of State Graphs and Tables
> 14. Reduction of State Tables
> 15. Sequential Circuit Design <= (Final Exam)

上半學期的主軸是 Combinational Circuits，下半學期則是 Sequential Circuits，每個單元都會分成 Lecture 跟 Discussion，Lecture 部分是上正課，Discussion 則是在帶題目講解觀念，其實可以把這門課理解成資工系EDA組的入門課，教授研究所就是 EDA 組的，每個禮拜一前把課程影片看完大概就好了，雖然課程是三學分的，但是看完影片的長度大概體感真的最多兩學分，甚至只有一學分，但教授講課清楚，邏輯通順，吸收內容吸收的很容易。

課程評分如下：

> - HW1 4%
> - HW2 4%
> - Midterm 40%	
> - HW3 + Lab1 6%
> - HW4 + Lab2 6%
> - Final Exam 40%

作業沒有什麼大問題，都是 Discussion 裡面的內容，Lab的話都是用 Verilog 寫，第一次是寫 Combinational Circuits，第二次是寫 Sequential Circuits，都不會很難，大部分內容助教都已經寫好，只要根據要求把剩下的補完即可，根據作業難度還有考古題難度，我本來以為期中考不會太難，但結果我錯了，期中考超難，應該說跟考古題實在太不像了，以前都考 K-map 的實作、簡單的 Combinational Circuit Design，都可以在 Lecture 中找到對應內容，結果這次考了 Quine-McCluskey Method 的 pseudo code 抓錯，還有證明 Functional Completeness 的 pseudo code（很資訊系），雖然老師考得很「延伸」，但老師跟助教改的真的很鬆，鬆到不行那種，基本上你有寫都給你對了，所以大家的分數其實沒有到很慘，期末的時候老師就把難度大大降低了。

另外真的要誇一下忠緯，基本上你寄信給他，他一定秒回，改考卷只需要兩天，改作業只需要30分鐘，截止時間一到，一小時後去看已經有分數了，真的是妥妥效率組（跟其他課不太一樣，忠緯的課大推。

### 計算機圖形

<div class="course-info-card">

- **授課教授：** 歐陽明 
- **學分：** 3
- **等第：** A（被自己蠢到 第二次）

- **甜度：** 5/5  
- **涼度：** 3/5  
- **收穫：** 4/5（自己學） 

</div>

我會修這門課，是因為上學期修了 cyy 老師的計概，覺得他的課講得很清楚，也蠻有趣的，所以想接著修他開的選修課。他開了兩門進階的 Computer Graphics 課程，一門是數位影像生成，一門是數位視覺效果。我去看了這兩門課的簡介，上面寫需要線性代數、機率、微積分的背景，還建議最好有電腦圖學的基礎。我想說自己對這方面還不太熟，就開始上網查有沒有相關的入門課，結果就發現 cyy 的老師也有開一門電腦圖學的基礎課程。查了一下網路上的評價，很多人說即使沒有數學基礎也能跟得上，蠻適合初學者的。後來我就找了同學一起在開學前寫信給老師要加簽碼，老師也很快回覆，叫我們直接去上課拿加簽就好，基本上全簽。

老師用的課本是*Interactive Computer Graphics: A Top-Down Approach with WebGL, 7/e*，基本上就是按照課本的脈絡，但省略掉很多東西，老師的課綱也挺隨性的，但總之內容大概包括這些：

- Dithering
- Visible surface determination
  - Z buffer algorithm
  - Binary space partition trees (BSP)
  - Visible line determination
- Geometry: Transformations, Viewing in 3D, 3D clipping
- Shading method: Flat shading, Gouraud shading, Phong shading
- Curves and surfaces: Bezier curves, B Splines, Spline surfaces
- Ray tracing method
- Volume rendering: marching cubes method etc.
- Radiosity method: progressive refinement approach

老師上課節奏很慢，很喜歡講一些小故事，比如說他講了了圖學之父 Ivan Sutherland 的時候說了好多次他的生平故事，然後呂學一教授在大三寫出了一篇可以博士畢業的論文的故事我聽了四五次，但我還蠻喜歡聽這些小故事的（一直講數學會睡著），老師上課氛圍很輕鬆，每次都會提早個半小時下課，然後表定是9.10上課但老師把它挪到9.30怕大家起不來，老師還會把所有數學部分都簡化，證明部分會放在投影片上，但不會細講，基本上有修完微1微2會矩陣乘法（這個我被自己蠢到）都會看得懂，老師會先把某個方法的 Main Idea 先很淺顯的講一遍再開始講實作過程，講得很清楚，不懂的話老師也非常歡迎上課的時候打斷他，直接問問題，如果問題問得好的話，還可以加總分。

總體來說，這門課比較像是「電腦圖學概論」，如果想學的是很詳細的數學推導證明、詳細實作原理，那可以去修 cyy 的數位影像生成，如果只是想對 CG 有初步的認識，知道電腦怎麼顯示出 3D 畫面，每個專有名詞的意思，那這門課很適合入門。

這門課的計分方式如下：

> - Homework 33%
> - Midterm 33%
> - Term Project 33%

HW1 是用 WebGL 寫出 model 的 Traslation, Rotation, Scaling, Light, Shading, 還有 model 切換之類的基礎功能，基本上不難，但因為是一個全新的語言，我大概50%以上都是在摸索這個語言怎麼寫，最後應該是花了一個禮拜左右寫出來，最後拿87分。

<details class="info-box">
<summary><b>&nbsp;HW1 Demo</b></summary>

<div style="text-align: center; margin: 2em 0;">
    <video 
        width="720" 
        height="405" 
        controls 
        style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); max-width: 100%;">
        <source src="/videos/Demo HW1.mp4" type="video/mp4">
        您的瀏覽器不支援影片播放。
    </video>
    <p style="font-size: 1rem; color: #555; margin-top: 0.5em;">Demo ICG HW1</p>
</div>

</details>

Midterm 基本上非常簡單，可以open everything except Internet，基本上有在上課就有分，老師也有把前幾年課程錄影放上去，基本上不怎麼需要讀就可以拿高分，我最後拿85，大概是中位數左右，老師考題只有一題是延伸考題（自由發想）不是課內，其他全部都是課內問題。老師的最後計分方式是$\min(60, \text{grades})$，完全佛心來的。


<details class="warning-box">
<summary><b>&nbsp;關於 Midterm</b></summary>

老師出的延伸考題我是拿幾乎滿分的，但我最後還是只有85，是因為我矩陣乘法乘錯了，真的很ㄡˋ，連延伸考題都有想出來結果最後錯在最基本的矩陣乘法。這也導致我最後總成績算出來是剛好89，直接跟A+擦肩而過。

</details>

Term Project 老師有給大家14個題目，還有相應的 paper，1~3 人一組，基本上可以讀完paper就直接照著他實作，但老師鼓勵大家創新，做多一點東西，我自己是跟我同學用 Face feature morphing 做 ML 的 Data augmentation，最後拿95（老師給分很佛）。

總之，是門不錯的課，但老師應該快退休了，要上要快，老師是圖學大師，如果有問題問他都會有很好的答案，如果沒學過GL語言的話應該會辛苦點，但也是還好，推。

## 一般選修

---

### 機器學習

<div class="course-info-card">

- **授課教授：** 李宏毅 
- **學分：** 4
- **等第：** A+

- **甜度：** 6/5  
- **涼度：** 3/5  
- **收穫：** 4/5 

</div>

鼎鼎大名的大金 ML，還沒入學的時候就聽過老師的大名，也看過老師[**2021的機器學習**](https://www.youtube.com/playlist?list=PLJV_el3uVTsMhtt7_Y6sgTHGHp1Vb2P2J)影片，一直很想要自己來修一次課，本來想說這門課都開這麼多年了，應該網路上有很多作業答案可以~~抄~~借鑑，再加上系上很強的同學也要去修，秉持著有大腿不抱是傻子的心態，我就去簽了，這門課只要大金本人有出現在你們系所的網站上，就全簽，其他人擇要寫 HW1 看排名才能簽，學期初加簽的時候，那個情況真的很可怕，博理112直接大爆滿，。

本來想著作業應該跟前幾年沒啥區別，結果今年第一堂課老師直接說：「今年作業會大翻新，想去Github上找答案的話可能比較困難」，勸退了一批人，但我還是留下來了，老師真的很跟潮流，之前的主題都是神經網路（神經網路基本原理、CNN、RNN、Transformer），老師今年把主軸改向 GenAI，課程大綱大概就是大模型AI的最新技術還有一些後訓練方法，基本上都是非常新的技術，因此你可以在課上聽到老師說：「哇！2018年，這是寒武紀時期的 paper。」老師的講課非常幽默，會穿插一堆很新的梗，像是這個[**小明劍魔**](https://youtu.be/Ozos6M1JtIE?si=xcxJOdhFFbLg1SQT&t=273)（4:33開始），基本上上課是不會睡著的，而且四學分的課，老師通常上課都只有一個半小時，後面就給助教講作業（由此可知這門課的主軸其實作業佔大宗），雖然簽上這門課的人可能有1000+，但到後面基本上一間教室都塞的下，因為大家都去看線上影片，老師在[**youtube**](https://www.youtube.com/@HungyiLeeNTU)上會上傳非常高質量的課程影片，因為老師上課想講的東西其實很多，所以很長會在投影片裡面塞入自己以前的課程影片要大家自己有興趣再去看，在寒假的時候老師其實就有叫大家去看 2021 的課程影片，還有 2024 的[**生成式人工智慧導論**](https://www.youtube.com/playlist?list=PLJV_el3uVTsPz6CTopeRp2L2t4aL_KgiI)的影片，先有一些先備知識，體感是需要先看一下的，不然會不知道老師在說啥。

課程的第二個大重點就是作業，這堂課是 **100% 作業計分的**，基本上這堂課的loading都在作業之上，一共有十份作業，一份 10%，期限都是三個禮拜，每份的計分方式不盡相同，有些作業是有 sample code，任務就是按照助教給的code去調整參數，或是調整實作方法，去完成作業的 simple/medium/strong baseline，另外一種就是 paper reading 然後去完成 Gradescope 上的問題，作業就是讓你更了解老師上課講的模型原理，或是補充一些老師上課沒說到的酷酷的method。

這學期的作業如下（取自[**課程網頁**](https://speech.ee.ntu.edu.tw/~hylee/ml/2025-spring.php)）

> - HW 1	AI Agent1 -- RAG
> - HW 2	AI Agent2
> - HW 3	Understand Transformer
> - HW 4	Training Transformer
> - HW 5	Fine tune is powerful
> - HW 6	Fine-tuning leads to Forgetting
> - HW 7	RLHF
> - HW 8	Model Editing
> - HW 9	Model Merging
> - HW 10	Diffusion
> - Bonus	Bonus Competition

作業裡面的調整參數雖然聽起來簡單，但其實是一門玄學，調對方向就馬上過 SB，調不對你可能一個禮拜都沒辦法完成，而且因為這學期的主軸是大模型，很多時候training 一次就要 3hr，inference 一次又要 2hr，除了免費的colab很快就沒了之外，花很多時間也是很大的問題，所以真的很推薦大家揪團來修，在這裡我要非常感謝親愛的[**洋蔥同學**](https://hackmd.io/@onion0905/SJVk85BVeg?fbclid=IwY2xjawLGaA5leHRuA2FlbQIxMQBicmlkETExQUljUUJXeTR3RTNhTVZjAR4AoDdi0iaTCu7QR-KnnRT-wsly9MdTxAFkVnwge-IYld3QMLfA92-1VYoIcw_aem_RHKO4Ke5ZJiXgYwbpUK4Qw#%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92)（這是他的修課心得），我在修這門課的時候就是一直問問問他還有另一位同學調整參數的方向，還有因為運算資源不是免費的，我們常常都需要用各種方法取得運算資源（課金），但幸運的是台大資訊系有 GPU 工作站讓大家可以用，如果是資工系的話可以參考這篇[**如何在 CSIE Workstation 跑 notebook**](https://hackmd.io/@onion0905/rJREAj7kxg)，一樣是親愛的洋蔥同學寫的，讓我們讚頌他。

<details class="info-box">
<summary><b>&nbsp;關於 作業</b></summary>

一定要記得加 line 群，雖然不是助教創的，但裡面的同學各個都是好心人，各路大神都會在裡面給大家提示，有時候看一看改一改就莫名其妙試出來了（不是borrow code），在問朋友前可以試試看這個方法，期中的時候本來有創一個 DC 群，但根本沒人在用。

</details>

其實這些作業有一點小問題，因為助教都有把大部分的 code 直接寫好，要 implement 新的 method 通常也都是去 Github 上複製然後改幾個字，所以跟計圖還有 DSA 比起來，寫作業花的時間跟學到的東西遠遠不成正比，但也是有學到東西啦。

但除了 100% 作業，也有很多的加分。這學期有 NVIDIA 的線上課程，可以免費看要付費的課程，完成一個加 5 分。還有卑南語翻譯比賽也可以加分，總的來說，認真的話，調不對某幾次參數也不用擔心自己會拿不到 A+，完全就是一門超甜的課。


## 校定必修

---

### 英文二（附兩小時英聽）

<div class="course-info-card">

- **授課教授：** 胥嘉陵  
- **學分：** 3  
- **等第：** A+

- **甜度：** 4.5/5  
- **涼度：** 2/5  
- **收穫：** 4/5  

</div>

基本上跟上學期一模一樣，上學期寫的在[**👉這裡**](https://vinsong.csie.org/blog/ntu-csie-freshman-1/#%E8%8B%B1%E6%96%87%E4%B8%80%E9%99%84%E5%85%A9%E5%B0%8F%E6%99%82%E8%8B%B1%E8%81%BD)

這學期的課綱是：

> 1. Poll and news (celebrities and media)  
> 2. Taboo or not taboot (language, sex and gender)  
> 3. Marketing strategies 
> 4. Environmental issue
> 5. Good science, bad science (human cloning)  
> 6. Dating (Love is a fallacy)

附上評分方式：

> - 46% Written exams（midterm & final 各一半）  
> - 28% Listening Assignments（小組分工，看你組員罩不罩）  
> - 15% Oral Presentation（上台報告）  
> - 6% three pieces of writing（老師還會給什麼 120、130 的分數）  
> - 5% Class Attendance & Participation  

只是說這學期好多人都每堂課缺席，來上課也提早走或根本沒在聽，很誇張。

## 全校性通識

---

### 東坡詞

<div class="course-info-card">

- **授課教授：** 劉少雄  
- **學分：** 3  
- **等第：** A

- **甜度：** 4/5  
- **涼度：** 3/5  
- **收穫：** 5/5  

</div>

因為修完老師的國文課後，實在很喜歡老師的講課風格，所以我又選了老師開設的 A1 通識課。據說老師講授東坡詞才是他最有名的課程之一。

以下節錄自PTT：

> 從東坡的生平講起，依照東坡經歷的順序講述東坡碰到人生一些挫折的心境變化，最後再帶入詩詞的講解　
>
> - 從一首蝶戀花談起─東坡詞導論
> - 杭州詞選讀
> - 由杭赴密詞選讀
> - 密州詞選讀
> - 徐州湖州詞選讀
> - 黃州詞賞析
> - 黃州以後詞選讀
> - 東坡詠物詞專題

老師上課用的是他自己編的[東坡詞選註](https://www.books.com.tw/products/0010897566?srsltid=AfmBOopKly2BN3FknZrhGsnjHprxqOcwU69MvdJl-i0zpVgMa8OVJZTD)，不買也可以，可以從老師的OCW裡面找到PPT，但書裡的註解與見解非常詳盡，真心推薦有餘力的話買一本收藏

老師是香港人，上課都會先唸過一遍詞，才開始講解，即便老師有很重的港音，但還是能感覺到老師對詞的熱忱，老師上課的內容我有抄成[**👉筆記**](https://drive.google.com/file/d/1Zjd03CWo3EvksZbO1TZk145ZJM5U_Lrs/view?usp=sharing)放在這裡供參（抱歉字有點醜），這是我第一次這麼認真地上國文課，感覺透過老師的引導，我真的進入了東坡的內心世界。聽著東坡被命運捉弄的浮沉人生，聽著他「心安處即吾鄉」的淡然，也聽著他走入「也無風雨也無晴」的豁達，每週上這門課，對我來說，像是一場精神上的放鬆與沉澱。（抱歉又雞湯感

延續老師的上課風格，如果你是那種早上上課會想睡的人建議別選。因為老師的麥克風常常會偏離嘴巴，聲音偏小，很容易催眠。上課方式以老師講授為主，有時會在黑板補充，基本沒什麼發言機會，有問題可以課後或寄信問，老師非常樂意回答。老師的課依舊有很多阿姨叔叔來修，不一樣的是人數是上學期國文課的好幾倍，我甚至有看到上學期跟我們一起修國文的阿姨也來修了東坡詞。

老師的評分標準是：

- 作業 30%（期中期末各一份）
- 期中考 35%
- 期末考 35%

考古題可以在 NTUExam 上找到。期考是手寫申論題，難度不高。老師期中考還會直接給考古。

我自己的分數是：作業 91 93，期中 86 期末 88，最後拿A，想拿A蠻容易，但A+不好拿，期考手可能會寫到斷掉，國文底子不好可能會感受到「人與人之間的差距」，但我自己是真的很喜歡老師講東坡詞，不會睡著那種。

一樣老師挺注重出席，學期成績規定如下：  

- 請假達三次降一等第  
- 請假達四次降兩等第  
- 五次以上直接不及格
（雖然老師依舊超級少點名）

總之，依舊是門超棒的課，跟著東坡走完他的人生，我自己也從學期初的汲汲營營，到後來的順自然而行，高中常常聽老師說「變與不變」的道理，總覺得他們再說空話，但在這門課中，或許我還沒體會到這句話的意義，但我們都還年輕，尚未真正歷經人生的風風雨雨。但我們可以將讀到的東坡情懷珍藏於心，在未來的人生旅途中，慢慢與之印證、呼應。

因為真的很喜歡這門課，最後還去找老師要了簽名跟寄語

<details class="info-box">
<summary> <b>&nbsp;簽名和寄語</b></summary>

<figure class="custom-figure">
    <img src="/images/東坡.jpg" alt="圖片描述">
    <figcaption>簽名與寄語</figcaption>
</figure>

</details>