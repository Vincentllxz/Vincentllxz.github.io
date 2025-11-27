---
title: "Thread model"
description: "System Programming "
publishDate: "2025-11-27 15:51:42"
tags:
  - "NTU"
  - "CSIE"
  - "SP"
language: "zh-TW"
comment: true
---
# Thread Model

## Thread Concept

### Process Model
- **Resource Grouping (資源分組)**：Process 是作業系統分配資源（記憶體、檔案等）的基本單位。
- **Single Thread of Execution**：傳統的 Process 中只有一個執行緒（Thread），指令是單一序列執行的。

> [!NOTE] Virtual Memory Layout (虛擬記憶體配置)
>
> ![截圖 2025-11-22 下午3.33.52](https://hackmd.io/_uploads/rke_vyJWZg.png)
>
> 每個 Process 擁有獨立的虛擬記憶體空間，內容包含：
> - **Text / Instruction**：存放程式碼（如 `main()`）、函式庫連結等唯讀資料。
> - **Global / Static Data**：
>     - 依據「是否已初始化」區分存放區域（例如 `.data` vs `.bss`）。
>     - 未初始化的變數通常不佔用實際執行檔空間，載入時會自動設為 0。
> - **Stack**：存放函式呼叫（Function Call）時的區域變數、Return address 等。
> - **Heap**：動態分配的記憶體區域（如使用 `malloc()` 或 `new` 配置的空間）。
> - **Kernel Space (Open file desc. table / Kernel stack)**：
>     - 這些資料雖然屬於該 Process（紀錄該 Process 的狀態），但存放在 **Kernel Space**。
>     - **權限限制**：User Space 的程式無法直接存取，必須透過 System Call 請求 Kernel 操作。

---

### Thread Model
![截圖 2025-11-22 下午2.55.35](https://hackmd.io/_uploads/rJ-FRR0gbe.png)

- **概念**：在同一個 Process 的生命週期內，可以同時執行多個 Thread。
- **資源共享 (Resource Sharing)**：
    因為屬於同一個 Process，Thread 之間共享大部分的資源：
    - Global Data / Heap Memory
    - Open Files (檔案描述符)
    - Code (Text Segment)
    - Child Processes
    - Pending Alarms / Signals
- **獨立擁有 (Per-Thread Resources)**：
    為了能夠獨立執行並進行 Context Switch，每個 Thread 必須擁有自己獨立的：
    - **Stack** (維護 Function call chain)
    - **Registers** (包含 Context Switch 時需要保存的狀態)
    - **Program Counter (PC)** (紀錄目前執行到哪一行指令)
    - Scheduling Policy (排程優先級)
    - Signal Mask (對訊號的遮罩設定)

---

### Process v.s. Thread

#### Process
- **競爭關係**：Process 之間通常處於資源競爭狀態。
- **資源隔離**：預設情況下無法共享資源（基於安全性 Security 考量），若要溝通需透過 IPC (Inter-Process Communication)。
- **建立成本高**：使用 `fork()` 建立新 Process 是 System Call，需複製記憶體空間與 Page Table，開銷較大。

#### Thread
- **合作關係**：通常由單一使用者（Owner）啟動，Thread 之間是為了完成同一任務而合作。
- **無保護機制 (No Protection)**：Thread 之間直接共享 Memory，先天沒有隔離保護（假設同一 Process 內的 Thread 彼此信任）。
- **地位平等**：雖然由 Main thread 建立其他 Thread，但在 OS 排程眼中，它們地位通常是平等的（Peer），無階層從屬關係。
- **Context Switch 成本低**：切換 Thread 時只需保存暫存器與 Stack 指標，不需要切換 Page Table（Memory Space 不變）。
- **非同步與併發 (Asynchronous & Concurrency)**：
    - Thread 可以獨立運作。當 Process 收到 Signal 或需處理 I/O 時，可以只讓負責該工作的 Thread 暫停（Suspend）或處理，其他 Thread 繼續執行，不需整個 Process 停擺。
    - 這種特性增加了程式的 **Throughput**。
- **回應時間 (Response Time)**：
    - 透過多執行緒，可以讓負責 UI 或回應的 Thread 保持運作，將耗時的運算或 I/O 交給背景 Thread，大幅提升使用者的操作體驗。
- **除錯困難 (Debugging)**：
    - 由於資源共享且執行順序不確定（Race Condition），除錯遠比單一 Process 複雜。
- **單核處理器 (Single Processor) 的效益**：
    - 在 Single processor(core) machine 上，Thread model 無法達到真正的「平行運算 (Parallelism)」，只能做到「併發 (Concurrency)」。
    - **但並非沒用**：它依然能透過重疊 I/O 等待時間與 CPU 運算時間，有效減少 Response time 並提升系統整體效率。

![截圖 2025-11-22 下午3.20.38](https://hackmd.io/_uploads/BJrI4y1-be.png)

> [!Note] Thread Stack Layout
> 在 virtual memeory 中，不同 Thread 的 Stack 會被配置在同一塊位址空間的不同區段。若 Stack 用量過大，可能會發生重疊（Overflow），通常 OS 或 Thread Library 會有 Guard Page 機制來偵測並處理。

---

### Implementing of Thread

![截圖 2025-11-27 晚上11.02.19](https://hackmd.io/_uploads/HyoZdkI--e.png)