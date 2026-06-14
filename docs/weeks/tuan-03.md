<div class="week-divider" id="week-3-start">📙 Tuần 3 · Java Core: Stream + Concurrency · 25/05–31/05/2025</div>

<!-- OVERVIEW -->
<section class="day-section" id="w3-overview">
  <div class="day-header" style="background:#2C3E50">
    <div class="day-header-left">
      <span class="day-icon">📋</span>
      <div>
        <div class="day-date">Tuần 3 · 25/05–31/05/2025</div>
        <div class="day-topic">Stream API · CompletableFuture · Functional Interfaces · Concurrency · SOLID</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:#8E44AD">OVERVIEW</span>
      <span class="day-hours">18h</span>
    </div>
  </div>
  <div class="day-body">
    <table style="width:100%;border-collapse:collapse;font-size:0.95em">
      <thead>
        <tr style="background:#2C3E50;color:#fff">
          <th style="padding:8px 12px;text-align:left">Ngày</th>
          <th style="padding:8px 12px;text-align:left">Thứ</th>
          <th style="padding:8px 12px;text-align:left">Chế độ</th>
          <th style="padding:8px 12px;text-align:left">Thời gian</th>
          <th style="padding:8px 12px;text-align:left">Chủ đề</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #eee">
          <td style="padding:8px 12px">25/05</td>
          <td style="padding:8px 12px">Thứ 2</td>
          <td style="padding:8px 12px"><span class="mode-badge" style="background:#E67E22">LIGHT</span></td>
          <td style="padding:8px 12px">1.5h</td>
          <td style="padding:8px 12px">Stream API nâng cao + Optional</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;background:#f9f9f9">
          <td style="padding:8px 12px">26/05</td>
          <td style="padding:8px 12px">Thứ 3</td>
          <td style="padding:8px 12px"><span class="mode-badge" style="background:#27AE60">FULL</span></td>
          <td style="padding:8px 12px">2.5h</td>
          <td style="padding:8px 12px">CompletableFuture: supplyAsync, thenApply, thenAccept, exceptionally</td>
        </tr>
        <tr style="border-bottom:1px solid #eee">
          <td style="padding:8px 12px">27/05</td>
          <td style="padding:8px 12px">Thứ 4</td>
          <td style="padding:8px 12px"><span class="mode-badge" style="background:#27AE60">FULL</span></td>
          <td style="padding:8px 12px">2.5h</td>
          <td style="padding:8px 12px">Functional Interfaces: Function, Predicate, Supplier, Consumer, method references</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;background:#f9f9f9">
          <td style="padding:8px 12px">28/05</td>
          <td style="padding:8px 12px">Thứ 5</td>
          <td style="padding:8px 12px"><span class="mode-badge" style="background:#27AE60">FULL</span></td>
          <td style="padding:8px 12px">2.5h</td>
          <td style="padding:8px 12px">Thread, Runnable, Callable, ExecutorService, synchronized, volatile</td>
        </tr>
        <tr style="border-bottom:1px solid #eee">
          <td style="padding:8px 12px">29/05</td>
          <td style="padding:8px 12px">Thứ 6</td>
          <td style="padding:8px 12px"><span class="mode-badge" style="background:#E67E22">LIGHT</span></td>
          <td style="padding:8px 12px">1.5h</td>
          <td style="padding:8px 12px">SOLID Principles: 5 nguyên tắc với Java examples</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;background:#f9f9f9">
          <td style="padding:8px 12px">30/05</td>
          <td style="padding:8px 12px">Thứ 7</td>
          <td style="padding:8px 12px"><span class="mode-badge" style="background:#C0392B">WEEKEND</span></td>
          <td style="padding:8px 12px">4h</td>
          <td style="padding:8px 12px">CompletableFuture advanced: chaining, allOf, anyOf + Atomic + ThreadLocal</td>
        </tr>
        <tr>
          <td style="padding:8px 12px">31/05</td>
          <td style="padding:8px 12px">CN</td>
          <td style="padding:8px 12px"><span class="mode-badge" style="background:#8E44AD">REVIEW</span></td>
          <td style="padding:8px 12px">4h</td>
          <td style="padding:8px 12px">Spaced Review T1-T3 + Mini Project: Async Task Processor</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- DAY 1: 25/05 Thứ 2 LIGHT -->
<section class="day-section" id="w3-day-1">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">25/05 · Thứ 2</div>
        <div class="day-topic">Stream API nâng cao + Optional</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:rgba(0,0,0,0.2)">LIGHT</span>
      <span class="day-hours">1.5h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- EN Block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English</strong>
        <span class="en-badge-time">15 phút</span>
      </div>
      <div class="en-content">
        <strong>Vocalmax 10 từ:</strong> <em>optional, present, absent, isPresent, orElse, orElseGet, flatMap, ifPresent, empty, nullable</em>.<br>
        Nghe clip ngắn "Java Optional Best Practices" 5 phút.
      </div>
    </div>

    <!-- Theory -->
    <div class="accordion">
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Optional là gì?</div>
          <div class="theory-body">Container có thể chứa hoặc không chứa giá trị. Tránh NullPointerException. <code>Optional.of(val)</code> / <code>Optional.empty()</code> / <code>Optional.ofNullable(val)</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Truy xuất giá trị</div>
          <div class="theory-body"><code>isPresent()</code> + <code>get()</code> (nguy hiểm), <code>orElse(default)</code>, <code>orElseGet(() -&gt; ...)</code> (lazy), <code>orElseThrow(() -&gt; new Ex())</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Transform với Optional</div>
          <div class="theory-body"><code>map(fn)</code> transforms value if present; <code>filter(predicate)</code> keeps value if condition true; <code>ifPresent(consumer)</code> runs side-effect.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Stream + Optional</div>
          <div class="theory-body"><code>Stream.of(a,b,c).filter(Optional::isPresent).map(Optional::get)</code> hoặc Java 9+: <code>.flatMap(Optional::stream)</code>.</div>
        </div>
      </div>
    </div>

    <!-- Code -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// Optional best practices
public Optional&lt;String&gt; findUserEmail(Long id) {
    return userRepository.findById(id)
        .map(User::getEmail)
        .filter(email -&gt; email.contains("@"));
}

// Usage
String email = findUserEmail(1L)
    .orElse("default@example.com");

// Anti-pattern (avoid):
// Optional&lt;String&gt; opt = ...;
// if (opt.isPresent()) { String s = opt.get(); } // use ifPresent or map instead

// Java 9 Optional.stream()
List&lt;String&gt; emails = userIds.stream()
    .map(this::findUserEmail)
    .flatMap(Optional::stream)
    .collect(Collectors.toList());</code></pre>
    </div>

    <!-- Exercises -->
    <ul class="exercise-list">
      <li>Viết method <code>findProductById(int id)</code> trả về <code>Optional&lt;Product&gt;</code>, dùng <code>orElseThrow</code> để throw <code>ProductNotFoundException</code>.</li>
      <li>Chain: <code>Optional.ofNullable(user).map(User::getAddress).map(Address::getCity).orElse("Unknown")</code>.</li>
      <li>Refactor một method có <code>if (x != null)</code> thành dùng Optional.</li>
    </ul>

    <!-- Q&A -->
    <div class="qa-list">

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">Optional là gì? Tại sao nên dùng thay vì null check?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>Optional&lt;T&gt;</code> là wrapper container có thể có hoặc không có giá trị. Tránh NPE bằng cách buộc caller phải xử lý "không có giá trị". Code rõ intent hơn, API tường minh hơn.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">Sự khác biệt giữa <code>orElse()</code> và <code>orElseGet()</code>?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>orElse(T)</code> luôn evaluate default value (ngay cả khi Optional có giá trị). <code>orElseGet(Supplier)</code> lazy — chỉ gọi Supplier khi Optional empty. Dùng <code>orElseGet</code> khi default expensive (DB call, object creation).</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Khi nào KHÔNG nên dùng Optional?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Không dùng: (1) field của class (serialization broken), (2) method parameter (caller phải handle), (3) collection element (dùng empty collection thay thế). Chỉ dùng cho return type của method.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q"><code>Optional.map()</code> vs <code>Optional.flatMap()</code> khác nhau thế nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>map(fn)</code> wrap result trong Optional. <code>flatMap(fn)</code> khi fn đã trả về Optional (tránh <code>Optional&lt;Optional&lt;T&gt;&gt;</code>). Ví dụ: <code>opt.flatMap(u -&gt; findAddress(u))</code> khi <code>findAddress</code> returns <code>Optional&lt;Address&gt;</code>.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Tại sao <code>Optional.get()</code> bị coi là anti-pattern?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Vì nếu Optional empty → <code>NoSuchElementException</code>. Mục đích của Optional là ép xử lý "không có giá trị" — dùng <code>get()</code> bỏ qua safety. Thay thế: <code>orElseThrow()</code> (explicit), <code>ifPresent()</code> (side-effect), <code>map()</code> (transform). Rule: never call <code>get()</code> without <code>isPresent()</code> check, better yet avoid <code>get()</code> entirely.</div>
      </div>

    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <div class="lc-card">
        <div class="bc-title">LeetCode</div>
        <div class="bc-name">#2095 Delete Middle of Linked List</div>
        <div class="bc-hint">Medium</div>
      </div>
      <div class="tool-card">
        <div class="bc-title">AI Tool</div>
        <div class="bc-name">Copilot</div>
        <div class="bc-hint">Gợi ý refactor null checks → Optional</div>
      </div>
      <div class="res-card">
        <div class="bc-title">Resource</div>
        <div class="bc-name">Baeldung Guide to Optional</div>
        <div class="bc-body">baeldung.com/java-optional</div>
      </div>
    </div>

  </div>
</section>

<!-- DAY 2: 26/05 Thứ 3 FULL -->
<section class="day-section" id="w3-day-2">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">26/05 · Thứ 3</div>
        <div class="day-topic">CompletableFuture: supplyAsync, thenApply, thenAccept, exceptionally</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:rgba(0,0,0,0.2)">FULL</span>
      <span class="day-hours">2.5h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- EN Block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English</strong>
        <span class="en-badge-time">20 phút sáng</span>
      </div>
      <div class="en-content">
        <strong>Parroto shadowing</strong> — câu luyện: <em>"The task runs asynchronously on a separate thread"</em>, <em>"CompletableFuture chains multiple async operations"</em>, <em>"Handle exceptions with exceptionally callback"</em>.
      </div>
    </div>

    <!-- Theory -->
    <div class="accordion">
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">CompletableFuture là gì?</div>
          <div class="theory-body">Java 8 class cho async/non-blocking code. <code>CompletableFuture.supplyAsync(() -&gt; ...)</code> chạy trên ForkJoinPool. Trả về <code>CompletableFuture&lt;T&gt;</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Transform chain</div>
          <div class="theory-body"><code>thenApply(fn)</code> transform kết quả (như Stream.map). <code>thenAccept(consumer)</code> consume kết quả (không return). <code>thenRun(runnable)</code> chạy sau khi done (không quan tâm result).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Error handling</div>
          <div class="theory-body"><code>exceptionally(ex -&gt; fallback)</code> handle exception, return default. <code>handle((result, ex) -&gt; ...)</code> handle cả success và failure. <code>whenComplete((result, ex) -&gt; ...)</code> side-effect, không transform.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Thread control</div>
          <div class="theory-body"><code>thenApplyAsync(fn)</code> chạy trên ForkJoinPool. <code>thenApplyAsync(fn, executor)</code> chỉ định thread pool riêng. <code>.join()</code> block chờ kết quả (như <code>get()</code> nhưng unchecked).</div>
        </div>
      </div>
    </div>

    <!-- Code Block 1 -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// Basic async chain
CompletableFuture&lt;String&gt; future = CompletableFuture
    .supplyAsync(() -&gt; fetchUserFromDB(1L))   // chạy async
    .thenApply(user -&gt; user.getName())         // transform
    .thenApply(String::toUpperCase)            // chain
    .exceptionally(ex -&gt; "ANONYMOUS");        // fallback

String result = future.join(); // block &amp; get
System.out.println(result);</code></pre>
    </div>

    <!-- Code Block 2 -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// handle() vs exceptionally()
CompletableFuture&lt;String&gt; robust = CompletableFuture
    .supplyAsync(() -&gt; {
        if (Math.random() &lt; 0.5) throw new RuntimeException("DB down");
        return "data";
    })
    .handle((data, ex) -&gt; {
        if (ex != null) {
            log.error("Failed: " + ex.getMessage());
            return "fallback";
        }
        return data.toUpperCase();
    });</code></pre>
    </div>

    <!-- Exercises -->
    <ul class="exercise-list">
      <li>Tạo <code>CompletableFuture</code> fetch user từ DB giả (sleep 100ms), transform thành UpperCase name.</li>
      <li>Chain: fetch product → check stock → calculate price (3 <code>thenApply</code> steps).</li>
      <li>Add <code>exceptionally</code> fallback khi DB throws exception.</li>
      <li>Compare: dùng <code>thenApply</code> vs <code>thenApplyAsync</code> — in ra thread name để thấy sự khác biệt.</li>
    </ul>

    <!-- Q&A -->
    <div class="qa-list">

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">CompletableFuture giải quyết vấn đề gì mà <code>Future</code> không làm được?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>Future</code> chỉ có <code>get()</code> (blocking), không chain được, không handle exception tốt. <code>CompletableFuture</code>: non-blocking chain với <code>thenApply</code>, error handling với <code>exceptionally</code>, combine multiple futures với <code>allOf/anyOf</code>. Thực tế: REST call → transform → cache → respond không block main thread.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q"><code>thenApply</code> vs <code>thenAccept</code> vs <code>thenRun</code> khác nhau thế nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>thenApply(T→U)</code>: transform, returns <code>CF&lt;U&gt;</code>. <code>thenAccept(T→void)</code>: consume result, returns <code>CF&lt;Void&gt;</code>. <code>thenRun(()→void)</code>: ignore result, run action, returns <code>CF&lt;Void&gt;</code>. Analogy: Stream's <code>map</code> / <code>forEach</code> / thenRun như cleanup.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Giải thích <code>exceptionally()</code> vs <code>handle()</code> vs <code>whenComplete()</code>.</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>exceptionally</code>: chỉ trigger khi có exception, phải return fallback value. <code>handle</code>: trigger cả success và failure, có thể transform hoặc recover. <code>whenComplete</code>: side-effect only (logging), không transform result/exception. Production: dùng <code>handle</code> cho business logic, <code>whenComplete</code> cho logging/metrics.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Thread nào thực thi callback trong <code>thenApply</code>?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Default: cùng thread với stage trước nó (hoặc calling thread nếu đã complete). <code>thenApplyAsync</code>: ForkJoinPool.commonPool(). <code>thenApplyAsync(fn, executor)</code>: custom executor. Production: luôn dùng async với custom executor để tránh starvation ForkJoinPool.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q"><code>CompletableFuture.join()</code> vs <code>.get()</code> khác gì nhau?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Cả hai đều block chờ kết quả. <code>.get()</code> throws checked <code>ExecutionException</code> + <code>InterruptedException</code>. <code>.join()</code> throws unchecked <code>CompletionException</code>. Dùng <code>.join()</code> trong stream pipeline (no checked ex). Dùng <code>.get(timeout, unit)</code> khi cần timeout. Production: không dùng trong main thread — defeats async purpose.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Khi nào dùng custom Executor thay vì ForkJoinPool?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">ForkJoinPool phù hợp CPU-bound (computation). I/O-bound tasks (DB, HTTP) nên dùng dedicated thread pool (<code>Executors.newFixedThreadPool(n)</code>) vì ForkJoinPool threads có thể bị starve khi tất cả blocked chờ I/O. Spring: dùng <code>@Async</code> với custom TaskExecutor bean.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#2471A3">Mock EN</span>
          <span class="qa-q">"Can you explain how you'd use CompletableFuture in a Spring Boot service?"</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">"In production, I'd inject a custom <code>ThreadPoolTaskExecutor</code> and use <code>CompletableFuture.supplyAsync(() -&gt; service.fetchData(), executor).thenApply(this::transform).exceptionally(ex -&gt; fallback)</code>. This keeps the REST controller non-blocking. I combine multiple calls with <code>allOf</code> when I need results from parallel DB queries before responding."</div>
      </div>

    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <div class="lc-card">
        <div class="bc-title">LeetCode</div>
        <div class="bc-name">#1115 Print FooBar Alternately</div>
        <div class="bc-hint">Medium — threading</div>
      </div>
      <div class="tool-card">
        <div class="bc-title">AI Tool</div>
        <div class="bc-name">Copilot</div>
        <div class="bc-hint">Async code review</div>
      </div>
      <div class="res-card">
        <div class="bc-title">Resource</div>
        <div class="bc-name">Baeldung CompletableFuture Guide</div>
        <div class="bc-body">baeldung.com/java-completablefuture</div>
      </div>
    </div>

  </div>
</section>

<!-- DAY 3: 27/05 Thứ 4 FULL -->
<section class="day-section" id="w3-day-3">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">27/05 · Thứ 4</div>
        <div class="day-topic">Functional Interfaces: Function, Predicate, Supplier, Consumer, method references</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:rgba(0,0,0,0.2)">FULL</span>
      <span class="day-hours">2.5h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- EN Block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English</strong>
        <span class="en-badge-time">15 phút</span>
      </div>
      <div class="en-content">
        <strong>Vocalmax 10 từ:</strong> <em>functional, predicate, supplier, consumer, compose, andThen, negate, identity, bifunction, unary</em>.<br>
        Đọc một đoạn ngắn EN về "Why Functional Programming Matters".
      </div>
    </div>

    <!-- Theory -->
    <div class="accordion">
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title"><code>Function&lt;T,R&gt;</code></div>
          <div class="theory-body">Nhận T, trả về R. <code>apply(t)</code>. <code>compose(before)</code> chạy before rồi function này. <code>andThen(after)</code> chạy function rồi after. <code>Function.identity()</code> trả về input.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title"><code>Predicate&lt;T&gt;</code></div>
          <div class="theory-body">Nhận T, trả về boolean. <code>test(t)</code>. <code>and(p2)</code>, <code>or(p2)</code>, <code>negate()</code>. Dùng trong <code>filter()</code>. <code>Predicate.not(p)</code> Java 11+.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title"><code>Supplier&lt;T&gt;</code> + <code>Consumer&lt;T&gt;</code></div>
          <div class="theory-body"><code>Supplier</code>: no input, returns T (factory/lazy init). <code>Consumer</code>: nhận T, returns void (side-effect, forEach). <code>BiConsumer&lt;T,U&gt;</code> nhận 2 params.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Method References</div>
          <div class="theory-body">4 loại: <code>ClassName::staticMethod</code> (static), <code>obj::instanceMethod</code> (bound), <code>ClassName::instanceMethod</code> (unbound), <code>ClassName::new</code> (constructor). Thay thế lambda khi body chỉ gọi 1 method.</div>
        </div>
      </div>
    </div>

    <!-- Code -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// Function composition
Function&lt;String, Integer&gt; strLen = String::length;
Function&lt;Integer, String&gt; intToStr = i -&gt; "Length: " + i;
Function&lt;String, String&gt; pipeline = strLen.andThen(intToStr);
System.out.println(pipeline.apply("Hello")); // "Length: 5"

// Predicate composition
Predicate&lt;String&gt; notEmpty = Predicate.not(String::isEmpty);
Predicate&lt;String&gt; longEnough = s -&gt; s.length() &gt;= 3;
Predicate&lt;String&gt; valid = notEmpty.and(longEnough);
List&lt;String&gt; result = names.stream().filter(valid).collect(Collectors.toList());

// Supplier for lazy init
Supplier&lt;List&lt;String&gt;&gt; listFactory = ArrayList::new;
List&lt;String&gt; list = listFactory.get(); // create only when needed

// Consumer chaining
Consumer&lt;String&gt; print = System.out::println;
Consumer&lt;String&gt; log = s -&gt; logger.info(s);
Consumer&lt;String&gt; printAndLog = print.andThen(log);
names.forEach(printAndLog);</code></pre>
    </div>

    <!-- Exercises -->
    <ul class="exercise-list">
      <li>Tạo <code>Function&lt;Employee, String&gt;</code> trả về "name (dept)". Chain với <code>Function&lt;String, String&gt;</code> uppercase.</li>
      <li>Viết <code>Predicate&lt;Integer&gt;</code> kiểm tra số dương VÀ chẵn. Dùng <code>.and()</code>.</li>
      <li>Dùng <code>Supplier&lt;Connection&gt;</code> để lazy-load DB connection.</li>
      <li>Refactor: thay 3 lambdas lặp bằng method references (static, instance, constructor).</li>
    </ul>

    <!-- Q&A -->
    <div class="qa-list">

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q"><code>Function&lt;T,R&gt;</code>, <code>Predicate&lt;T&gt;</code>, <code>Supplier&lt;T&gt;</code>, <code>Consumer&lt;T&gt;</code> — mỗi cái dùng khi nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>Function</code>: transform (T→R). <code>Predicate</code>: test/filter (T→boolean). <code>Supplier</code>: provide without input (→T). <code>Consumer</code>: consume without return (T→void). Nhớ qua CRUD: Create=Supplier, Read=Function, test=Predicate, side-effect=Consumer.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">Method reference <code>String::length</code> tương đương lambda nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Tương đương <code>(String s) -&gt; s.length()</code>. Đây là unbound instance method reference — instance cung cấp lúc gọi. Các loại: <code>Math::abs</code> (static), <code>obj::method</code> (bound), <code>String::toUpperCase</code> (unbound), <code>ArrayList::new</code> (constructor ref).</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q"><code>Function.compose()</code> vs <code>Function.andThen()</code> — thứ tự thực thi?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>f.andThen(g)</code> = g(f(x)) — f trước, g sau. <code>f.compose(g)</code> = f(g(x)) — g trước, f sau. Mnemonic: <code>andThen</code> đọc trái sang phải (natural), <code>compose</code> như toán học f∘g. Ví dụ: <code>trim.andThen(toLowerCase)</code> = trim trước, lower sau.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Khi nào nên dùng <code>Predicate.not()</code> (Java 11)?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Thay vì <code>s -&gt; !s.isEmpty()</code> dùng <code>Predicate.not(String::isEmpty)</code> — readable hơn với method reference. Nhất là trong stream: <code>stream.filter(Predicate.not(String::isBlank))</code> vs <code>stream.filter(s -&gt; !s.isBlank())</code>.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Tại sao functional interfaces phải có đúng 1 abstract method? Ý nghĩa của <code>@FunctionalInterface</code>?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">SAM (Single Abstract Method) rule: lambda expression implement đúng 1 method nên interface phải có đúng 1 abstract method. <code>@FunctionalInterface</code> là annotation kiểm tra compile-time — compile error nếu add method thứ 2. Interface có thể có default/static methods. Ví dụ: <code>Comparator</code> có <code>compare()</code> (SAM) + nhiều default methods.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Giải thích closure trong lambda Java — variable capture hoạt động thế nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Lambda có thể capture biến ngoài scope nhưng biến phải <strong>effectively final</strong> (không thay đổi sau khi capture). JVM copy value vào hidden field của lambda object. Mutable local variable không capture được vì thread safety — biến local trên stack, lambda có thể chạy trên thread khác.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#2471A3">Mock EN</span>
          <span class="qa-q">"How do you use functional interfaces in a real Spring Boot project?"</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">"We extensively use them for validation chains: <code>Predicate&lt;Order&gt;</code> for business rules composed with <code>.and()</code>. In service layer, <code>Function&lt;Entity, DTO&gt;</code> mapper objects injected as Spring beans. CompletableFuture pipelines use <code>Function</code> chains. We define custom <code>@FunctionalInterface</code> for domain-specific transformations like <code>OrderPricer: Order -&gt; Money</code>."</div>
      </div>

    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <div class="lc-card">
        <div class="bc-title">LeetCode</div>
        <div class="bc-name">#1636 Sort Array by Increasing Frequency</div>
        <div class="bc-hint">Easy — with Comparator</div>
      </div>
      <div class="tool-card">
        <div class="bc-title">AI Tool</div>
        <div class="bc-name">Copilot</div>
        <div class="bc-hint">Refactor lambda→method-ref suggestions</div>
      </div>
      <div class="res-card">
        <div class="bc-title">Resource</div>
        <div class="bc-name">Baeldung Functional Interfaces</div>
        <div class="bc-body">baeldung.com/java-8-functional-interfaces</div>
      </div>
    </div>

  </div>
</section>

<!-- DAY 4: 28/05 Thứ 5 FULL -->
<section class="day-section" id="w3-day-4">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">28/05 · Thứ 5</div>
        <div class="day-topic">Thread, Runnable, Callable, ExecutorService, synchronized, volatile</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:rgba(0,0,0,0.2)">FULL</span>
      <span class="day-hours">2.5h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- EN Block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English</strong>
        <span class="en-badge-time">20 phút</span>
      </div>
      <div class="en-content">
        <strong>Parroto shadowing 20 phút</strong> — câu: <em>"A thread is the smallest unit of execution"</em>, <em>"synchronized keyword prevents race conditions"</em>, <em>"The ExecutorService manages a pool of worker threads"</em>.
      </div>
    </div>

    <!-- Theory -->
    <div class="accordion">
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Thread lifecycle</div>
          <div class="theory-body">NEW → RUNNABLE → RUNNING → BLOCKED/WAITING → TERMINATED. <code>new Thread(runnable).start()</code>. <code>Runnable</code> = no return, <code>Callable&lt;T&gt;</code> = returns T, throws checked exception.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">ExecutorService</div>
          <div class="theory-body"><code>Executors.newFixedThreadPool(n)</code>: fixed size. <code>newCachedThreadPool()</code>: dynamic (careful with OOM). <code>newSingleThreadExecutor()</code>: sequential. Submit: <code>execute(Runnable)</code> / <code>submit(Callable)→Future</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">synchronized + volatile</div>
          <div class="theory-body"><code>synchronized(this)</code> hoặc synchronized method: mutual exclusion, one thread at a time. <code>volatile field</code>: visibility guarantee — reads/writes go to main memory, not CPU cache. volatile ≠ atomicity.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Race condition + Deadlock</div>
          <div class="theory-body">Race: 2 threads read-modify-write cùng biến → inconsistent. Deadlock: T1 holds L1 waits L2; T2 holds L2 waits L1. Fix: lock ordering, timeout, hoặc use higher-level constructs.</div>
        </div>
      </div>
    </div>

    <!-- Code Block 1 -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// ExecutorService + Callable
ExecutorService pool = Executors.newFixedThreadPool(4);

List&lt;Callable&lt;String&gt;&gt; tasks = List.of(
    () -&gt; fetchFromDB("user"),
    () -&gt; fetchFromDB("orders"),
    () -&gt; fetchFromCache("products")
);

List&lt;Future&lt;String&gt;&gt; futures = pool.invokeAll(tasks);
futures.forEach(f -&gt; {
    try { System.out.println(f.get()); }
    catch (Exception e) { e.printStackTrace(); }
});
pool.shutdown();</code></pre>
    </div>

    <!-- Code Block 2 -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// synchronized counter (thread-safe)
public class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++; // read-modify-write atomic
    }

    public synchronized int get() { return count; }
}

// volatile flag
public class Worker implements Runnable {
    private volatile boolean running = true;

    public void stop() { running = false; }

    @Override
    public void run() {
        while (running) { doWork(); } // sees updated value
    }
}</code></pre>
    </div>

    <!-- Exercises -->
    <ul class="exercise-list">
      <li>Tạo 10 threads mỗi thread print thread name + số thứ tự. Quan sát interleaving.</li>
      <li><code>ExecutorService</code> chạy 5 tasks tính Fibonacci(40), collect results với <code>invokeAll</code>.</li>
      <li>Race condition demo: 1000 threads tăng counter không sync → sai. Fix với <code>synchronized</code>.</li>
      <li>Implement Producer-Consumer đơn giản với <code>BlockingQueue&lt;String&gt;</code>.</li>
    </ul>

    <!-- Q&A -->
    <div class="qa-list">

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q"><code>Runnable</code> vs <code>Callable</code> khác gì nhau?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>Runnable.run()</code>: no return, no checked exception. <code>Callable&lt;T&gt;.call()</code>: returns T, throws checked Exception. Dùng <code>Callable</code> khi cần kết quả hoặc có thể throw. <code>ExecutorService.submit(Callable)</code> → <code>Future&lt;T&gt;</code>.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q"><code>volatile</code> giải quyết vấn đề gì? Khi nào không đủ?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Giải quyết visibility: đảm bảo thread khác thấy giá trị mới nhất (không đọc CPU cache). KHÔNG giải quyết atomicity: <code>count++</code> là 3 operations (read, increment, write) — không atomic dù <code>volatile</code>. Dùng <code>AtomicInteger</code> hoặc <code>synchronized</code> cho compound operations.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q"><code>newFixedThreadPool</code> vs <code>newCachedThreadPool</code> — khi nào dùng cái nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Fixed: CPU-bound tasks (số thread = CPU cores), predictable, no OOM risk. Cached: short-lived I/O tasks, scales up/down. Danger: unbounded growth → OOM với nhiều concurrent tasks. Production: dùng custom <code>ThreadPoolExecutor</code> với bounded queue + rejection policy.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Giải thích thread deadlock và cách prevent.</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Deadlock: T1 holds A, waits B; T2 holds B, waits A → circular wait. 4 conditions: mutual exclusion, hold-and-wait, no preemption, circular wait. Prevention: (1) consistent lock ordering, (2) <code>tryLock(timeout)</code> với ReentrantLock, (3) avoid nested locks, (4) use higher-level: <code>java.util.concurrent</code> instead of raw <code>synchronized</code>.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q"><code>synchronized method</code> vs <code>synchronized(this)</code> vs <code>synchronized(lock)</code> — phân tích.</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>synchronized method</code> ≡ <code>synchronized(this)</code> — locks on instance. Static sync method locks on Class object. <code>synchronized(specificLock)</code> — fine-grained, can have multiple locks per object → higher throughput. Pattern: <code>private final Object lock = new Object(); synchronized(lock) {...}</code> — object private, không ai khác có thể sync on same lock.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Tại sao <code>ExecutorService.shutdown()</code> cần gọi + phân biệt <code>shutdown()</code> vs <code>shutdownNow()</code>?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>shutdown()</code>: không nhận task mới, chờ tasks đang chạy hoàn thành (graceful). <code>shutdownNow()</code>: cố interrupt running tasks, trả về list of unexecuted tasks. <code>awaitTermination(timeout)</code> block chờ termination. Không shutdown → threads không daemon = JVM không exit. Production pattern: Runtime.addShutdownHook to gracefully shutdown.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#2471A3">Mock EN</span>
          <span class="qa-q">"Tell me about a concurrency issue you've encountered or how you'd design a thread-safe cache."</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">"I'd use ConcurrentHashMap with computeIfAbsent for thread-safe lazy initialization. For cache invalidation, a ScheduledExecutorService runs cleanup every N minutes. If cache miss rate is concern, use read-write separation with ReadWriteLock — multiple readers, exclusive writer. In production I use Caffeine cache which handles all this, but understanding the underlying mechanics helps debug cache stampede issues."</div>
      </div>

    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <div class="lc-card">
        <div class="bc-title">LeetCode</div>
        <div class="bc-name">#1114 Print in Order</div>
        <div class="bc-hint">Easy — threading</div>
      </div>
      <div class="tool-card">
        <div class="bc-title">AI Tool</div>
        <div class="bc-name">IntelliJ</div>
        <div class="bc-hint">Thread Concurrency analyzer</div>
      </div>
      <div class="res-card">
        <div class="bc-title">Resource</div>
        <div class="bc-name">Baeldung Java Concurrency</div>
        <div class="bc-body">baeldung.com/java-concurrency</div>
      </div>
    </div>

  </div>
</section>

<!-- DAY 5: 29/05 Thứ 6 LIGHT -->
<section class="day-section" id="w3-day-5">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">29/05 · Thứ 6</div>
        <div class="day-topic">SOLID Principles: 5 nguyên tắc với Java examples</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:rgba(0,0,0,0.2)">LIGHT</span>
      <span class="day-hours">1.5h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- EN Block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English</strong>
        <span class="en-badge-time">15 phút</span>
      </div>
      <div class="en-content">
        <strong>Vocalmax 10 từ:</strong> <em>single responsibility, open closed, liskov, interface segregation, dependency inversion, coupling, cohesion, abstraction, principle, violation</em>.<br>
        Đọc 5 phút "SOLID in 5 Minutes" EN.
      </div>
    </div>

    <!-- Theory -->
    <div class="accordion">
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">S — Single Responsibility</div>
          <div class="theory-body">Mỗi class chỉ có 1 lý do thay đổi. <code>UserService</code> làm auth → sai. Tách: <code>UserService</code>, <code>AuthService</code>, <code>EmailService</code>. Dấu hiệu vi phạm: class có "and" trong tên mục đích.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">O + L — Open/Closed + Liskov</div>
          <div class="theory-body">Open/Closed: mở để extend, đóng để modify. Dùng interface/abstract + polymorphism. Liskov: subclass phải thay thế được parent mà không break behavior. Vi phạm: <code>Rectangle extends Square</code> (phá vỡ area invariant).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">I — Interface Segregation</div>
          <div class="theory-body">Clients không bị ép implement methods mà không dùng. Tách <code>Animal</code> interface thành <code>Walkable</code>, <code>Swimmable</code>, <code>Flyable</code>. Fat interface → nhiều nhỏ.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">D — Dependency Inversion</div>
          <div class="theory-body">High-level không depend on Low-level — cả hai depend on abstraction. Inject qua constructor (DI). Spring @Autowired là DI in action. Dễ mock trong test.</div>
        </div>
      </div>
    </div>

    <!-- Code -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// DIP example (Spring-style)
// BAD: high-level depends on low-level
public class OrderService {
    private MySQLOrderRepo repo = new MySQLOrderRepo(); // concrete!
}

// GOOD: depend on abstraction
public interface OrderRepository { Order findById(Long id); }

public class OrderService {
    private final OrderRepository repo; // interface
    public OrderService(OrderRepository repo) { this.repo = repo; } // injected
}

// Test: inject mock
OrderRepository mockRepo = mock(OrderRepository.class);
OrderService service = new OrderService(mockRepo);

// ISP example
interface Printable { void print(); }
interface Scannable { void scan(); }
interface Faxable { void fax(); }

class BasicPrinter implements Printable { /* only print */ }
class MultiFunctionDevice implements Printable, Scannable { /* print + scan */ }</code></pre>
    </div>

    <!-- Exercises -->
    <ul class="exercise-list">
      <li>Refactor <code>UserManager</code> class (có 5 methods: login, sendEmail, saveToDb, generateReport, validatePassword) thành các class riêng.</li>
      <li>Viết Shape hierarchy dùng OCP: <code>abstract Shape</code>, subclasses <code>Circle/Rectangle</code>, <code>AreaCalculator</code> không cần sửa khi thêm shape mới.</li>
      <li>Identify SOLID violation trong đoạn code cho sẵn.</li>
    </ul>

    <!-- Q&A -->
    <div class="qa-list">

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">SOLID là gì? Đọc tên 5 chữ cái?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">S=Single Responsibility, O=Open/Closed, L=Liskov Substitution, I=Interface Segregation, D=Dependency Inversion. Mục đích: code dễ maintain, extend, test.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">Liskov Substitution Principle — ví dụ vi phạm?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Classic: <code>Square extends Rectangle</code>. Nếu set width → height cũng thay đổi → vi phạm. Code dùng Rectangle expect <code>setWidth(5); setHeight(3); area()==15</code> → Square phá vỡ behavior. Fix: đừng dùng inheritance ở đây, dùng interface <code>Shape</code>.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Phân biệt "tightly coupled" vs "loosely coupled" với ví dụ.</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Tight: <code>OrderService</code> directly <code>new MySQLRepo()</code> → không test được, không đổi DB được. Loose: inject <code>OrderRepository</code> interface → swap implementation. Spring @Autowired = loose coupling. Test = inject mock. Loose coupling = high cohesion, dễ change.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Interface Segregation trong Java Collections — ví dụ thực tế?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>List extends Collection extends Iterable</code> — phân tầng rõ. <code>Iterator</code> chỉ có 3 methods cần thiết. Contrast: nếu <code>Animal</code> interface có <code>fly()</code>, <code>swim()</code>, <code>run()</code> → Dog phải implement <code>fly()</code> → vi phạm ISP. Tốt hơn: <code>Flyable</code>, <code>Swimmable</code>, <code>Runnable</code> riêng.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Dependency Inversion vs Dependency Injection — khác nhau thế nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">DIP (principle): depend on abstraction, không depend on concrete. DI (pattern/technique): cơ chế để đạt DIP — inject dependencies từ outside. DIP là WHY, DI là HOW. Spring IoC container thực hiện DI. Constructor injection &gt; field injection (testable, immutable, visible dependencies).</div>
      </div>

    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <div class="lc-card">
        <div class="bc-title">LeetCode</div>
        <div class="bc-name">#146 LRU Cache</div>
        <div class="bc-hint">Medium — design</div>
      </div>
      <div class="tool-card">
        <div class="bc-title">AI Tool</div>
        <div class="bc-name">SonarLint</div>
        <div class="bc-hint">SOLID violation detection</div>
      </div>
      <div class="res-card">
        <div class="bc-title">Resource</div>
        <div class="bc-name">Baeldung SOLID Principles</div>
        <div class="bc-body">baeldung.com/solid-principles</div>
      </div>
    </div>

  </div>
</section>

<!-- DAY 6: 30/05 Thứ 7 WEEKEND -->
<section class="day-section" id="w3-day-6">
  <div class="day-header" style="background:#C0392B">
    <div class="day-header-left">
      <span class="day-icon">🔥</span>
      <div>
        <div class="day-date">30/05 · Thứ 7</div>
        <div class="day-topic">CompletableFuture advanced: chaining, allOf, anyOf + Atomic + ThreadLocal</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:rgba(0,0,0,0.2)">WEEKEND</span>
      <span class="day-hours">4h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- EN Block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English</strong>
        <span class="en-badge-time">30 phút</span>
      </div>
      <div class="en-content">
        <strong>Parroto shadowing 30 phút</strong> — bài nghe "Advanced Concurrency in Java" + practice câu phỏng vấn EN về threading. Vocalmax review 20 từ khó nhất tuần.
      </div>
    </div>

    <!-- Theory -->
    <div class="accordion">
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">CompletableFuture combining</div>
          <div class="theory-body"><code>allOf(cf1, cf2, cf3)</code> trả về <code>CF&lt;Void&gt;</code> hoàn thành khi tất cả done. <code>anyOf(...)</code> hoàn thành khi 1 trong số done. <code>thenCompose(fn)</code> = flatMap (tránh <code>CF&lt;CF&lt;T&gt;&gt;</code>). Pattern: parallel fetch → combine.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Atomic classes</div>
          <div class="theory-body"><code>AtomicInteger</code>, <code>AtomicLong</code>, <code>AtomicReference&lt;T&gt;</code>. <code>compareAndSet(expected, update)</code> = CAS operation (lock-free). Nhanh hơn <code>synchronized</code> cho simple counter. <code>incrementAndGet()</code>, <code>getAndAdd(delta)</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">ThreadLocal&lt;T&gt;</div>
          <div class="theory-body">Per-thread storage. <code>set(value)</code> / <code>get()</code> / <code>remove()</code>. Use case: Spring <code>SecurityContextHolder</code>, request-scoped data, SimpleDateFormat (not thread-safe). WARNING: memory leak nếu dùng với thread pool — always <code>remove()</code> in finally.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">ReentrantLock</div>
          <div class="theory-body">Flexible than <code>synchronized</code>: <code>tryLock(timeout)</code>, <code>lockInterruptibly()</code>, fairness option, <code>Condition</code> for wait/signal. <code>lock()</code> + <code>unlock()</code> in finally. Multiple Conditions per lock.</div>
        </div>
      </div>
    </div>

    <!-- Code Block 1 -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// Parallel fetch + combine
CompletableFuture&lt;User&gt; userCF = CompletableFuture.supplyAsync(() -&gt; fetchUser(1L));
CompletableFuture&lt;List&lt;Order&gt;&gt; ordersCF = CompletableFuture.supplyAsync(() -&gt; fetchOrders(1L));

CompletableFuture&lt;UserProfile&gt; profile = userCF.thenCombine(ordersCF,
    (user, orders) -&gt; new UserProfile(user, orders));

// allOf for multiple futures
CompletableFuture&lt;Void&gt; allDone = CompletableFuture.allOf(userCF, ordersCF);
allDone.thenRun(() -&gt; System.out.println("All fetched!"));</code></pre>
    </div>

    <!-- Code Block 2 -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>// AtomicInteger (lock-free counter)
AtomicInteger counter = new AtomicInteger(0);
IntStream.range(0, 1000).parallel().forEach(i -&gt; counter.incrementAndGet());
System.out.println(counter.get()); // always 1000

// ThreadLocal for request context
ThreadLocal&lt;String&gt; requestId = new ThreadLocal&lt;&gt;();
// In filter: requestId.set(UUID.randomUUID().toString());
// In service: String id = requestId.get();
// In finally: requestId.remove(); // CRITICAL for thread pools</code></pre>
    </div>

    <!-- Exercises -->
    <ul class="exercise-list">
      <li><code>allOf</code> — fetch 3 services parallel, combine results, print total time vs sequential.</li>
      <li><code>thenCompose</code> — fetchUser → thenCompose fetchOrders(userId) (avoid CF&lt;CF&gt;).</li>
      <li>AtomicInteger counter: 100 threads increment 100 times each → verify 10000.</li>
      <li>ThreadLocal request-ID: simulate filter sets ID, service reads ID, verify isolation.</li>
    </ul>

    <!-- Q&A -->
    <div class="qa-list">

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q"><code>allOf()</code> vs <code>anyOf()</code> — khi nào dùng?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>allOf</code>: đợi TẤT CẢ hoàn thành (aggregate results). <code>anyOf</code>: lấy kết quả của NHANH NHẤT (fastest wins, timeout pattern). Ví dụ: <code>allOf</code> = fetch user + orders + address cùng lúc trước khi render. <code>anyOf</code> = query primary DB và backup DB, lấy ai trả lời trước.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q"><code>thenCompose</code> khác <code>thenApply</code> thế nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>thenApply(T→U)</code> = map. <code>thenCompose(T→CF&lt;U&gt;)</code> = flatMap. Khi transform function trả về CF thì dùng <code>thenCompose</code> để tránh <code>CF&lt;CF&lt;U&gt;&gt;</code>. Pattern: fetch user → thenCompose(u → fetchOrders(u.id)) vs thenApply → CF&lt;CF&lt;Order&gt;&gt;.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Tại sao CAS (compareAndSet) được gọi là "lock-free"?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">CAS là hardware instruction (cmpxchg) — atomic read-compare-write trong 1 CPU cycle. Không cần OS mutex. Nếu compare fail (concurrent update), retry loop (spin). "Lock-free" = no kernel-level lock, không context switch. Nhanh hơn synchronized cho lightly-contended scenarios.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">ThreadLocal memory leak xảy ra thế nào? Cách tránh?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Thread pool reuse threads → ThreadLocal values persist giữa requests. Nếu không <code>remove()</code>, giá trị cũ từ request trước leak sang request sau → security bug (user A thấy data của user B) + memory leak. Fix: luôn <code>remove()</code> trong finally block hoặc servlet filter afterCompletion.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">So sánh <code>synchronized</code> vs <code>ReentrantLock</code> — khi nào chọn cái nào?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>synchronized</code>: simpler, auto-release, JVM-optimized (biased locking). <code>ReentrantLock</code>: tryLock(timeout) để tránh deadlock, fairness (<code>new ReentrantLock(true)</code>), multiple Conditions, lockInterruptibly. Rule: default synchronized; ReentrantLock khi cần tryLock, fairness, hoặc Condition variables.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Explain <code>StampedLock</code> và optimistic read — khi nào nó outperforms <code>ReadWriteLock</code>?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>ReadWriteLock</code>: readers share lock, writer exclusive. <code>StampedLock</code>: optimistic read (không lock) → validate stamp → nếu invalid, upgrade to read lock. Outperforms khi read &gt;&gt; write, đọc nhanh. Downside: không reentrant, không support interruption. Java 8+. Production: cache implementations where reads dominate.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#2471A3">Mock EN</span>
          <span class="qa-q">"How would you handle 1000 concurrent API calls to an external service?"</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">"I'd use a bounded thread pool, say 50 threads, with CompletableFuture.supplyAsync targeting that pool. Use a semaphore or rate limiter (Resilience4j) to cap concurrent calls. Result aggregation with allOf. Circuit breaker for failure handling. Backpressure with BlockingQueue if producer outpaces consumer. In Spring WebFlux I'd use reactive Mono/Flux for fully non-blocking."</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#2471A3">Mock EN</span>
          <span class="qa-q">"What's the difference between parallelism and concurrency?"</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">"Concurrency is about dealing with multiple tasks at once — they may not run simultaneously (time-slicing on 1 CPU). Parallelism is about doing multiple tasks simultaneously on multiple CPUs. Concurrency is a design property, parallelism is a runtime property. Java: concurrency via threads/CompletableFuture; parallelism via parallel streams, ForkJoinPool. Most production code needs concurrency for I/O; parallelism mainly for CPU-bound computation."</div>
      </div>

    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <div class="lc-card">
        <div class="bc-title">LeetCode</div>
        <div class="bc-name">#347 Top K Frequent</div>
        <div class="bc-hint">Medium — review</div>
      </div>
      <div class="tool-card">
        <div class="bc-title">AI Tool</div>
        <div class="bc-name">Java VisualVM</div>
        <div class="bc-hint">Thread monitoring</div>
      </div>
      <div class="res-card">
        <div class="bc-title">Resource</div>
        <div class="bc-name">Baeldung ReentrantLock + StampedLock</div>
        <div class="bc-body">baeldung.com/java-concurrent-locks</div>
      </div>
    </div>

  </div>
</section>

<!-- DAY 7: 31/05 CN REVIEW -->
<section class="day-section" id="w3-day-7">
  <div class="day-header" style="background:#8E44AD">
    <div class="day-header-left">
      <span class="day-icon">🎯</span>
      <div>
        <div class="day-date">31/05 · Chủ Nhật</div>
        <div class="day-topic">Spaced Review T1-T3 + Mini Project: Async Task Processor</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:rgba(0,0,0,0.2)">REVIEW</span>
      <span class="day-hours">4h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- EN Block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English</strong>
        <span class="en-badge-time">30 phút</span>
      </div>
      <div class="en-content">
        <strong>Mock interview EN</strong> — answer 10 câu từ tuần 3 to ra tiếng Anh. Record 2 câu hay nhất. Practice STAR method for one coding story.
      </div>
    </div>

    <!-- Theory (recap) -->
    <div class="accordion">
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Stream + Optional recap</div>
          <div class="theory-body">Stream API chain: source → filter → map → collect. Optional phòng NPE. <code>flatMap(Optional::stream)</code> Java 9+. Avoid <code>Optional.get()</code> without check.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">CompletableFuture recap</div>
          <div class="theory-body"><code>supplyAsync</code> → <code>thenApply</code> → <code>exceptionally</code>. <code>allOf</code> parallel. <code>thenCompose</code> flatMap. Custom executor for I/O.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Functional recap</div>
          <div class="theory-body"><code>Function.andThen/compose</code>. <code>Predicate.and/or/negate</code>. Method references (4 types). Lambda captures effectively-final vars.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Concurrency recap</div>
          <div class="theory-body">Thread lifecycle. ExecutorService patterns. <code>synchronized</code> vs <code>volatile</code> vs <code>AtomicXxx</code> vs <code>ReentrantLock</code>. ThreadLocal caution.</div>
        </div>
      </div>
    </div>

    <!-- Code — Mini Project -->
    <div class="code-wrap">
      <button class="copy-btn">Copy</button>
      <pre><code>public class AsyncTaskProcessor {
    private final ExecutorService executor = Executors.newFixedThreadPool(4);
    private final List&lt;String&gt; results = Collections.synchronizedList(new ArrayList&lt;&gt;());

    public CompletableFuture&lt;String&gt; processTask(String task) {
        return CompletableFuture
            .supplyAsync(() -&gt; heavyComputation(task), executor)
            .thenApply(result -&gt; "[DONE] " + result)
            .exceptionally(ex -&gt; "[ERROR] " + task + ": " + ex.getMessage());
    }

    public List&lt;String&gt; processAll(List&lt;String&gt; tasks) {
        List&lt;CompletableFuture&lt;String&gt;&gt; futures = tasks.stream()
            .map(this::processTask)
            .collect(Collectors.toList());

        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();

        return futures.stream()
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
    }

    private String heavyComputation(String input) {
        try { Thread.sleep(100); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
        return input.toUpperCase();
    }

    public void shutdown() { executor.shutdown(); }
}</code></pre>
    </div>

    <!-- Exercises -->
    <ul class="exercise-list">
      <li>Complete <code>AsyncTaskProcessor</code> — add retry logic (3 attempts) với <code>exceptionally</code>.</li>
      <li>Add <code>Predicate&lt;String&gt;</code> filter to skip invalid tasks before processing.</li>
      <li>Push project to GitHub với README.md mô tả architecture EN (5+ câu).</li>
    </ul>

    <!-- Q&A -->
    <div class="qa-list">

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q"><code>Optional.orElse()</code> vs <code>orElseGet()</code> — performance difference?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>orElse(T)</code>: T luôn được evaluate (ngay cả khi value present). <code>orElseGet(Supplier&lt;T&gt;)</code>: Supplier chỉ chạy khi empty (lazy). Với expensive default (new object, DB call) → <code>orElseGet</code>. Example: <code>orElse(new User())</code> creates User even if found; <code>orElseGet(User::new)</code> only when missing.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">CompletableFuture <code>thenApply</code> vs <code>thenApplyAsync</code> — thread execution?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>thenApply</code>: runs on completing thread (or caller if already done). <code>thenApplyAsync</code>: runs on ForkJoinPool.commonPool(). <code>thenApplyAsync(fn, exec)</code>: runs on custom executor. For I/O tasks always use async + custom I/O thread pool to avoid blocking ForkJoinPool.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#27AE60">Dễ</span>
          <span class="qa-q">4 loại method reference — ví dụ mỗi loại?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Static: <code>Math::abs</code> ≡ <code>x -&gt; Math.abs(x)</code>. Bound instance: <code>str::contains</code> ≡ <code>x -&gt; str.contains(x)</code>. Unbound: <code>String::toUpperCase</code> ≡ <code>s -&gt; s.toUpperCase()</code>. Constructor: <code>ArrayList::new</code> ≡ <code>() -&gt; new ArrayList&lt;&gt;()</code>.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Khi nào Stream <code>parallel()</code> giúp và khi nào gây hại?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">Giúp: CPU-bound, large dataset (&gt;10k elements), no shared mutable state, order không quan trọng. Gây hại: I/O-bound (block ForkJoinPool), small dataset (overhead &gt; gain), shared state (race condition), order-sensitive ops. Rule: benchmark first; default sequential unless profiling shows bottleneck.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">Explain <code>synchronized</code> + <code>wait/notify</code> pattern.</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>wait()</code>: release lock, thread goes to WAITING. <code>notify()</code>: wake one waiting thread. <code>notifyAll()</code>: wake all. Phải gọi trong synchronized block. Pattern: <code>while (!condition) { lock.wait(); } doWork();</code> — vòng loop vì spurious wakeups. <code>notify</code> vs <code>notifyAll</code>: dùng <code>notifyAll</code> an toàn hơn khi nhiều conditions.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#E67E22">Trung</span>
          <span class="qa-q">SOLID — Single Responsibility — ví dụ vi phạm trong Spring?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>UserController</code> vừa xử lý HTTP vừa validate business logic vừa query DB → 3 reasons to change. Fix: Controller chỉ handle HTTP, Service handle business logic, Repository handle DB. Dấu hiệu: class &gt; 200 lines, method &gt; 20 lines, class có "and" trong tên.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">Giải thích Java Memory Model (JMM) và happens-before relationship.</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">JMM định nghĩa visibility và ordering guarantees giữa threads. Happens-before: action A happens-before B nếu B thấy tất cả effects của A. Guaranteed: synchronized block exit → enter, volatile write → read, Thread.start() → run(), join() return → completion. Không có happens-before → data race (undefined behavior).</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#C0392B">Khó</span>
          <span class="qa-q">CompletableFuture <code>exceptionally</code> vs <code>handle</code> vs <code>whenComplete</code> — production pattern?</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer"><code>exceptionally</code>: simple recovery, return fallback. <code>handle</code>: transform result OR recover from exception, most flexible. <code>whenComplete</code>: side-effect (logging, metrics) without altering pipeline. Pattern: <code>thenApply(transform).handle(logAndRecover).whenComplete(metrics)</code>. Never swallow exceptions silently.</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#2471A3">Mock EN</span>
          <span class="qa-q">"Walk me through your AsyncTaskProcessor project architecture."</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">"The processor uses a bounded 4-thread ExecutorService to avoid resource exhaustion. Each task runs via <code>supplyAsync</code> returning a CompletableFuture. I chain <code>thenApply</code> for transformation and <code>exceptionally</code> for error recovery. <code>allOf</code> joins all futures then I collect results. Collections.synchronizedList ensures thread safety for the result list. Shutdown hook ensures graceful termination. This pattern scales to 100+ concurrent tasks efficiently."</div>
      </div>

      <div class="qa-item">
        <div class="qa-header">
          <span class="qa-badge" style="background:#2471A3">Mock EN</span>
          <span class="qa-q">"How does the JVM handle thread scheduling?"</span>
        </div>
        <button class="qa-toggle">Xem đáp án ▼</button>
        <div class="qa-answer">"JVM delegates to the OS thread scheduler. Threads compete for CPU time slices — preemptive multitasking. Thread priority (1-10, default 5) is a hint to the scheduler, not a guarantee. The JVM doesn't guarantee fairness. <code>Thread.yield()</code> suggests giving up CPU. <code>Thread.sleep(ms)</code> suspends for at least ms. For precise scheduling use ScheduledExecutorService with fixed-rate or fixed-delay."</div>
      </div>

    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <div class="lc-card">
        <div class="bc-title">LeetCode</div>
        <div class="bc-name">#56 Merge Intervals</div>
        <div class="bc-hint">Medium — review</div>
      </div>
      <div class="tool-card">
        <div class="bc-title">AI Tool</div>
        <div class="bc-name">JProfiler / VisualVM</div>
        <div class="bc-hint">Thread dump analysis</div>
      </div>
      <div class="res-card">
        <div class="bc-title">Resource</div>
        <div class="bc-name">Java Concurrency in Practice</div>
        <div class="bc-body">Book by Brian Goetz</div>
      </div>
    </div>

  </div>
</section>

<!-- SUMMARY -->
<section class="day-section" id="w3-summary">
  <div class="day-header" style="background:#2C3E50">
    <div class="day-header-left">
      <span class="day-icon">🎯</span>
      <div>
        <div class="day-date">Tổng Kết</div>
        <div class="day-topic">Tuần 3 · Stream + Concurrency · Review &amp; Checklist</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge" style="background:#8E44AD">SUMMARY</span>
    </div>
  </div>
  <div class="day-body">

    <h2 class="section-h2">🎯 Tổng Kết Tuần 3</h2>

    <div class="summary-cols">

      <!-- Left: Interview Q&A Bank -->
      <div>
        <h3 class="sub-h3">Interview Q&amp;A Bank</h3>

        <div class="sq-group">
          <div class="sq-group-title">Stream &amp; Optional</div>

          <div class="sq-item">
            <div class="sq-q">What is Optional and when should you not use it?</div>
            <div class="sq-a">Optional is a container to explicitly handle absent values. Don't use: as field (serialization), as parameter (caller must handle null anyway), inside collections (use empty collection). Only for return types.</div>
          </div>

          <div class="sq-item">
            <div class="sq-q">Explain Stream lazy evaluation.</div>
            <div class="sq-a">Intermediate ops (filter, map) are lazy — not executed until terminal op (collect, count) is called. Enables short-circuiting (findFirst stops at first match). Stream.of(1,2,3).filter(n-&gt;n&gt;1).findFirst() only evaluates until first match found.</div>
          </div>

          <div class="sq-item">
            <div class="sq-q">thenCompose vs thenApply in CompletableFuture?</div>
            <div class="sq-a">thenApply(T→U) = map, wraps in CF. thenCompose(T→CF&lt;U&gt;) = flatMap, flattens. Use thenCompose when transform function itself returns a CompletableFuture.</div>
          </div>
        </div>

        <div class="sq-group">
          <div class="sq-group-title">Functional Programming</div>

          <div class="sq-item">
            <div class="sq-q">What is a SAM interface?</div>
            <div class="sq-a">Single Abstract Method interface — the basis for lambda expressions. @FunctionalInterface enforces this at compile time. Built-in: Function, Predicate, Supplier, Consumer, Comparator. Any interface with exactly 1 abstract method can be used with lambda.</div>
          </div>

          <div class="sq-item">
            <div class="sq-q">Method reference vs lambda — when to prefer?</div>
            <div class="sq-a">Method reference when lambda body is just a single method call: <code>String::toUpperCase</code> over <code>s -&gt; s.toUpperCase()</code>. More readable. Lambda preferred when logic is custom or needs parameters beyond method signature.</div>
          </div>

          <div class="sq-item">
            <div class="sq-q">Explain closure and effectively final in Java lambdas.</div>
            <div class="sq-a">Lambda can capture local variables from enclosing scope only if they are effectively final (not modified after assignment). JVM copies the value. Prevents data races since lambda may run on different thread. Instance fields and static fields can be freely modified.</div>
          </div>
        </div>

        <div class="sq-group">
          <div class="sq-group-title">Concurrency</div>

          <div class="sq-item">
            <div class="sq-q">synchronized vs AtomicInteger — which to use?</div>
            <div class="sq-a">AtomicInteger: faster for simple counters/flags, lock-free CAS, good for lightly contended. synchronized: needed for compound operations, multiple variables, complex state. AtomicReference for single reference updates. synchronized (or ReentrantLock) for critical sections with multiple statements.</div>
          </div>

          <div class="sq-item">
            <div class="sq-q">What is a thread-safe class?</div>
            <div class="sq-a">A class that behaves correctly when accessed from multiple threads without external synchronization. Techniques: immutability (most reliable), synchronized methods/blocks, concurrent collections (ConcurrentHashMap), atomic classes, volatile fields for flags.</div>
          </div>

          <div class="sq-item">
            <div class="sq-q">Explain SOLID in 30 seconds.</div>
            <div class="sq-a">S: one reason to change. O: extend without modifying. L: subclass substitutable for parent. I: small focused interfaces. D: depend on abstractions. Together they produce code that's easier to test (D), extend (O), maintain (S), and compose (I, L).</div>
          </div>
        </div>
      </div>

      <!-- Right: Checklist -->
      <div>
        <h3 class="sub-h3">Checklist Tuần 3</h3>

        <div class="progress-wrap-outer">
          <div class="progress-wrap">
            <div class="progress-bar-bg">
              <div class="progress-bar" style="width:0%"></div>
            </div>
            <div class="progress-label">
              <span class="progress-text">0 / 10</span>
            </div>
          </div>

          <div class="checklist" data-week="3">

            <div class="check-item">
              <input type="checkbox" id="w3-c1">
              <label for="w3-c1"><code>Optional</code> dùng được fluently: map, filter, orElse, orElseGet, flatMap</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c2">
              <label for="w3-c2">CompletableFuture chain: supplyAsync → thenApply → exceptionally hoàn chỉnh</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c3">
              <label for="w3-c3">allOf parallel fetch + thenCompose flatMap không bị CF&lt;CF&gt;</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c4">
              <label for="w3-c4">Function.andThen/compose, Predicate.and/or/negate dùng được</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c5">
              <label for="w3-c5">4 loại method reference viết được từ đầu</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c6">
              <label for="w3-c6">Thread-safe counter: synchronized vs AtomicInteger — biết khi nào dùng cái nào</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c7">
              <label for="w3-c7">ExecutorService: tạo pool, submit Callable, invokeAll, shutdown đúng cách</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c8">
              <label for="w3-c8">SOLID: giải thích được 5 nguyên tắc với ví dụ Java cho interviewer</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c9">
              <label for="w3-c9">LeetCode: 3+ bài từ tuần này AC (Optional/threading/functional)</label>
            </div>

            <div class="check-item">
              <input type="checkbox" id="w3-c10">
              <label for="w3-c10">AsyncTaskProcessor push GitHub, README tiếng Anh 5+ câu</label>
            </div>

          </div>
        </div>

        <div class="golden-rule">
          💡 <strong>Golden Rule Tuần 3:</strong> Stream + CompletableFuture = nói với máy tính "tôi muốn gì", không phải "làm thế nào". SOLID = code sống được qua nhiều sprint, không phải code chạy được 1 lần. Concurrency = sức mạnh khi dùng đúng, thảm họa khi dùng sai — hiểu JMM trước khi optimize.
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ===== WEEK 4 DIVIDER ===== -->
