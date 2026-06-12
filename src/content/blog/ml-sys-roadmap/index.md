---
title: 'ML Systems 學習路線'
description: '我的 ML Systems 自學路線圖,邊讀邊更新進度。'
publishDate: '2026-05-19 12:00:00'
tags:
  - 'ML'
  - 'MLSys'
  - '學習筆記'
language: 'zh-TW'
draft: true
---

> 這頁是我研究 ML Systems 的自學路線 + 進度追蹤,邊讀邊改。

底子盤點:已有 **System Programming**(process / thread / memory / IPC)、**計算機網路**,也在林智仁老師的 ML group —— 系統地基與 ML 研究環境都有了,起跑點不錯。

## Phase 0 — 確認地基(1–2 週,缺再補)

- **DL 基礎要扎實**:backprop、autograd、compute graph、Transformer 架構。不熟就先過 Karpathy 的「Neural Networks: Zero to Hero」,並自己刻一遍 nanoGPT。
- **系統面**:SP 已有;再補一點計算機結構(memory hierarchy、cache、SIMD)。系上的計算機結構、平行程式設計修一修很值得。

## Phase 1 — 框架內部 + GPU 入門

最推的起點 —— 先把「框架怎麼運作」「GPU 怎麼算」搞懂。

- 🎓 **CMU 10-414 / 714 Deep Learning Systems**(dlsyscourse.org)—— 作業帶你從零刻出一個 PyTorch 級的框架「needle」:autograd → ops → NN library → GPU backend。刻完對框架的理解直接拉開差距。
- 🎮 **GPU / CUDA 入門**:用 Sasha Rush 的「GPU Puzzles」破冰,再讀 CUDA 的執行 / 記憶體模型。
- 🔨 **專案**:刻完 mini 框架 + 手寫一個 CUDA GEMM(練 tiling、memory coalescing)。

## Phase 2 — 核心 MLSys

- 🎓 **CMU 15-442 / 15-642 Machine Learning Systems**(陳天奇、Zhihao Jia)—— 旗艦課:訓練系統、平行化、推論、編譯器全包。
- 🎓 **MIT 6.5940 EfficientML**(Song Han)—— quantization、pruning、distillation、efficient inference。

三大主題抓熟:

- **訓練**:data / tensor / pipeline parallelism、ZeRO / FSDP、Megatron-LM、all-reduce / NCCL
- **推論**:KV cache、continuous batching、PagedAttention(vLLM)、speculative decoding、量化(GPTQ / AWQ)
- **編譯器**:kernel fusion、`torch.compile`、TVM、**Triton**(現代寫 kernel 的實用語言,一定要學)

🔨 **專案**:刻一個 FlashAttention 式的 tiled attention;做一個迷你 LLM 推論引擎(KV cache + batching);拿 profiler 優化一個真模型。

## Phase 3 — 深入 + 研究

- 📖 讀真實系統原始碼:vLLM、tinygrad、llama.cpp、PyTorch internals。
- 📄 讀論文:MLSys / OSDI / ASPLOS 的系統論文 —— Megatron-LM、ZeRO、GPipe、FlashAttention、vLLM、Orca。
- 參考書:[mlsysbook.ai](https://mlsysbook.ai)(免費)。
- 既然已經在 ML group,直接跟老師聊一個 MLSys 味道的題目(LLM 推論效率現在很熱)。

## 貫穿全程

- **工具**:PyTorch(並讀其內部)、CUDA + Triton、profiler(Nsight、`torch.profiler`)。
- **心法**:MLSys 的本質是「量測 → 優化」—— 凡事先 profile;而且**動手刻**遠比讀重要。

## 進度

- [ ] Phase 0:DL 基礎 + 計算機結構複習
- [ ] Phase 1:CMU 10-414,刻完 needle 框架
- [ ] Phase 1:CUDA 入門 + 手寫 GEMM
- [ ] Phase 2:CMU 15-442 Machine Learning Systems
- [ ] Phase 2:MIT 6.5940 EfficientML
- [ ] Phase 2:刻 tiled attention / 迷你推論引擎
- [ ] Phase 3:讀 vLLM / tinygrad 原始碼
- [ ] Phase 3:找到一個 MLSys 研究題目
