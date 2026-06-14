<div class="week-divider" id="week-8-start">🔄 Tuần 8 · ÔN TẬP — Spaced Review T1-T7 · 29/06–05/07/2025</div>

<section class="day-section" id="w8-overview">
  <h2 class="section-h2">📅 Lịch Ôn Tập Tuần 8 — Tổng Quan 7 Ngày</h2>
  <p class="muted" style="margin-bottom:1rem">Tuần 8 KHÔNG học chủ đề mới — đây là tuần củng cố toàn bộ kiến thức T1-T7 bằng active recall, gõ lại code từ trí nhớ, và mock interview. Mục tiêu: biến kiến thức thành phản xạ.</p>
  <table class="overview-table">
    <thead>
      <tr>
        <th>Ngày</th>
        <th>Thứ</th>
        <th>Chế độ</th>
        <th>Thời gian</th>
        <th>Nội dung ôn</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>29/06</td>
        <td>Thứ 2</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>Ôn T1-T2: OOP, Interface, equals/hashCode, Generics, Exception, Collections</td>
      </tr>
      <tr>
        <td>30/06</td>
        <td>Thứ 3</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Ôn T3: Stream API, CompletableFuture, Functional Programming, SOLID</td>
      </tr>
      <tr>
        <td>01/07</td>
        <td>Thứ 4</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Ôn T4: Spring Boot, REST API, DI/IoC, Spring Data JPA cơ bản</td>
      </tr>
      <tr>
        <td>02/07</td>
        <td>Thứ 5</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Ôn T5: JPA nâng cao (N+1, EntityGraph), Redis Cache, Spring AI setup</td>
      </tr>
      <tr>
        <td>03/07</td>
        <td>Thứ 6</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>Ôn T6: Reactive (Mono/Flux), Streaming, Chat Memory, @Async, Prompt Engineering, Docker</td>
      </tr>
      <tr>
        <td>04/07</td>
        <td>Thứ 7</td>
        <td><span class="mode-dot" style="background:#C0392B"></span>WEEKEND</td>
        <td>4h</td>
        <td>Ôn T7: Security/JWT, JUnit/Mockito, RAG + tích hợp toàn bộ</td>
      </tr>
      <tr>
        <td>05/07</td>
        <td>CN</td>
        <td><span class="mode-dot" style="background:#8E44AD"></span>REVIEW</td>
        <td>4h</td>
        <td>Full Mock Interview tổng hợp T1-T7 + đánh giá điểm yếu + kế hoạch T9-T12</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="day-section" id="w8-day-1">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">29/06 — Thứ 2</div>
        <div class="day-topic">Ôn T1-T2: Java Core nền tảng</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Vocalmax review + Parroto · 15 phút</span></div>
      <div class="en-content">Ôn lại 20 từ vựng IT cốt lõi T1-T2 trên Vocalmax (OOP, collections, exception terms). Parroto shadow lại 3 câu khó nhất đã học. Mục tiêu: vocabulary thành phản xạ.</div>
    </div>
    <details class="accordion" open>
      <summary>📖 Tóm Tắt Ôn Tập</summary>
      <div class="theory-grid">
        <div class="theory-card"><div class="theory-title">OOP 4 trụ cột</div><div class="theory-body">Encapsulation (private + getter/setter), Inheritance (extends, single), Polymorphism (override runtime / overload compile-time), Abstraction (interface/abstract). Interface vs Abstract: interface = contract đa kế thừa, abstract = is-a + state. Nhớ: "can-do" → interface, "is-a" → abstract.</div></div>
        <div class="theory-card"><div class="theory-title">equals/hashCode contract</div><div class="theory-body">a.equals(b) → a.hashCode()==b.hashCode(). Vi phạm → HashMap/HashSet hỏng. Luôn override cả 2 cùng nhau. Immutability: final fields, no setters, defensive copy. Comparable (natural order) vs Comparator (custom/multiple orders).</div></div>
        <div class="theory-card"><div class="theory-title">Generics + type erasure</div><div class="theory-body">Type params bị xóa lúc compile (runtime List&lt;String&gt; == List&lt;Integer&gt; == List). PECS: Producer-Extends, Consumer-Super. Không instanceof T, không new T[]. Bounded types &lt;T extends Comparable&lt;T&gt;&gt;.</div></div>
        <div class="theory-card"><div class="theory-title">Exception + Collections</div><div class="theory-body">Checked (compile-time, IOException) vs Unchecked (runtime, NPE/RuntimeException). try-with-resources (AutoCloseable). ArrayList (random access O(1)) vs LinkedList (insert head O(1)). HashMap (bucket + hashCode → index, load factor 0.75), TreeMap (Red-Black tree, sorted). ConcurrentModificationException → iterator.remove/removeIf.</div></div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Ôn Tập — Tự Gõ Lại Từ Trí Nhớ</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Active recall: viết lại Generic Stack KHÔNG nhìn notes
public class Stack&lt;T&gt; {
    private List&lt;T&gt; items = new ArrayList&lt;&gt;();

    public void push(T item) { items.add(item); }

    public T pop() {
        if (isEmpty()) throw new EmptyStackException();
        return items.remove(items.size() - 1);
    }

    public T peek() {
        if (isEmpty()) throw new EmptyStackException();
        return items.get(items.size() - 1);
    }

    public boolean isEmpty() { return items.isEmpty(); }
    public int size() { return items.size(); }
}

// Recall: equals + hashCode đúng contract
public class Point {
    private final int x, y;
    public Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point p)) return false;
        return x == p.x &amp;&amp; y == p.y;
    }
    @Override
    public int hashCode() { return Objects.hash(x, y); }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Active Recall (3 bài)</summary>
      <ol class="exercise-list">
        <li>Gõ lại Generic Stack&lt;T&gt; hoàn chỉnh từ trí nhớ, không nhìn notes. Tự test với HashSet.</li>
        <li>Viết class có equals/hashCode đúng contract, test trong HashSet (thêm 2 object "bằng nhau" → set chỉ giữ 1).</li>
        <li>Giải thích to ra (Feynman): Interface vs Abstract Class, checked vs unchecked exception — như dạy người mới.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">4 tính chất OOP và giải thích ngắn?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Encapsulation (ẩn data bằng private + getter/setter), Inheritance (kế thừa qua extends), Polymorphism (override runtime / overload compile-time), Abstraction (ẩn implementation qua interface/abstract). Đây là nền tảng mọi câu hỏi OOP.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">equals/hashCode contract là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Nếu a.equals(b) thì BẮT BUỘC a.hashCode() == b.hashCode(). Ngược lại không bắt buộc (hash collision OK). Vi phạm → HashMap/HashSet hoạt động sai (không tìm được key). Luôn override cả 2 cùng nhau, dùng Objects.hash() + Objects.equals().</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Type erasure ảnh hưởng gì khi code?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Generics chỉ tồn tại compile-time, runtime bị xóa. Hệ quả: không new T[], không instanceof T, không overload chỉ khác generic type (method(List&lt;String&gt;) vs method(List&lt;Integer&gt;) — cùng erasure → compile error). Bù lại: backward compatible với code cũ.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Khi nào dùng ArrayList vs LinkedList vs HashMap?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">ArrayList: random access nhiều (get O(1)), default choice. LinkedList: insert/remove ở đầu/cuối nhiều (O(1)), dùng làm Queue/Deque. HashMap: key-value lookup O(1) trung bình. TreeMap: cần sorted keys. Chọn đúng cấu trúc = nửa bài toán performance.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Giải thích HashMap internals: từ put(key,value) đến lưu trữ.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">hashCode(key) → spread/hash function → index = hash &amp; (n-1) (n = bucket count). Collision → chaining (linked list, chuyển sang Red-Black tree khi &gt;8 nodes/bucket từ Java 8). Load factor 0.75: khi size &gt; capacity×0.75 → resize gấp đôi + rehash. equals() so sánh trong bucket để tìm đúng key. Vì vậy equals/hashCode phải đúng.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#1 Two Sum + #20 Valid Parentheses</div><div class="bc-hint">Easy — review nền tảng</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI quiz bản thân về OOP concepts.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại notes T1-T2 + tự làm flashcards.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w8-day-2">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">30/06 — Thứ 3</div>
        <div class="day-topic">Ôn T3: Stream, Concurrency, Functional, SOLID</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">⏱ 30 phút sáng + 2h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Parroto Shadowing · 20 phút</span></div>
      <div class="en-content">Shadow lại câu khó về concurrency + functional programming. Vocalmax ôn từ vựng Stream/thread. Mục tiêu: nói trôi chảy về async concepts.</div>
    </div>
    <details class="accordion" open>
      <summary>📖 Tóm Tắt Ôn Tập</summary>
      <div class="theory-grid">
        <div class="theory-card"><div class="theory-title">Stream API + Optional</div><div class="theory-body">Pipeline: source → intermediate (filter/map/sorted, lazy) → terminal (collect/reduce/count, trigger). Lazy evaluation + short-circuit (findFirst). Optional tránh NPE: orElse (eager) vs orElseGet (lazy), map/flatMap, tránh .get(). flatMap(Optional::stream) Java 9+.</div></div>
        <div class="theory-card"><div class="theory-title">CompletableFuture</div><div class="theory-body">supplyAsync → thenApply (map) → thenCompose (flatMap) → exceptionally/handle. allOf (parallel, đợi tất cả) / anyOf (fastest). thenApply (caller thread) vs thenApplyAsync (pool). join() (unchecked) vs get() (checked). Custom executor cho I/O.</div></div>
        <div class="theory-card"><div class="theory-title">Functional Programming</div><div class="theory-body">Function (T→R, andThen/compose), Predicate (T→bool, and/or/negate), Supplier (→T, lazy), Consumer (T→void). Method references (static/bound/unbound/constructor). Lambda capture effectively-final. SAM interface + @FunctionalInterface.</div></div>
        <div class="theory-card"><div class="theory-title">Concurrency + SOLID</div><div class="theory-body">Thread/Runnable/Callable, ExecutorService (fixed/cached pool), synchronized (mutual exclusion) vs volatile (visibility) vs AtomicInteger (CAS lock-free) vs ReentrantLock (tryLock/fairness). SOLID: SRP (1 lý do thay đổi), OCP (extend không modify), LSP (subclass thay thế được), ISP (interface nhỏ), DIP (depend abstraction).</div></div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Ôn Tập — Tự Gõ Lại Từ Trí Nhớ</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Active recall: CompletableFuture parallel fetch + combine
CompletableFuture&lt;User&gt; userCF = CompletableFuture.supplyAsync(() -&gt; fetchUser(1L), executor);
CompletableFuture&lt;List&lt;Order&gt;&gt; ordersCF = CompletableFuture.supplyAsync(() -&gt; fetchOrders(1L), executor);

CompletableFuture&lt;Profile&gt; profile = userCF
    .thenCombine(ordersCF, (user, orders) -&gt; new Profile(user, orders))
    .exceptionally(ex -&gt; Profile.empty());

// Active recall: functional composition + stream
Function&lt;String, String&gt; pipeline = ((Function&lt;String,String&gt;) String::trim)
    .andThen(String::toLowerCase);

Predicate&lt;String&gt; valid = ((Predicate&lt;String&gt;) String::isBlank).negate();

List&lt;String&gt; result = names.stream()
    .filter(valid)
    .map(pipeline)
    .sorted()
    .collect(Collectors.toList());</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Active Recall (4 bài)</summary>
      <ol class="exercise-list">
        <li>Gõ lại CompletableFuture chain (supplyAsync → thenApply → exceptionally) từ trí nhớ.</li>
        <li>Viết Function composition + Predicate.and() không nhìn notes.</li>
        <li>Giải thích to ra: synchronized vs volatile vs AtomicInteger — khi nào dùng cái nào.</li>
        <li>Liệt kê 5 nguyên tắc SOLID + 1 ví dụ vi phạm mỗi nguyên tắc (Feynman test).</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Stream lazy evaluation nghĩa là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Intermediate ops (filter/map) không chạy ngay — chỉ build pipeline. Chỉ khi terminal op (collect/count/findFirst) được gọi thì toàn bộ mới execute. Cho phép short-circuit: findFirst() dừng ngay khi tìm thấy, không duyệt hết. Tối ưu performance.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">orElse vs orElseGet khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">orElse(value): value LUÔN được evaluate (kể cả khi Optional có giá trị). orElseGet(supplier): supplier chỉ chạy khi Optional empty (lazy). Với default đắt (new object, DB call) → dùng orElseGet để tránh lãng phí.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">4 functional interfaces cốt lõi?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Function&lt;T,R&gt; (transform), Predicate&lt;T&gt; (test→boolean), Supplier&lt;T&gt; (provide, no input), Consumer&lt;T&gt; (consume, no return). Nhớ qua: Read=Function, Test=Predicate, Create=Supplier, Side-effect=Consumer.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">synchronized vs volatile vs AtomicInteger?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">volatile: chỉ visibility (thread thấy giá trị mới), KHÔNG atomicity. synchronized: mutual exclusion (1 thread/lúc) cho compound operations. AtomicInteger: lock-free CAS, nhanh cho counter đơn giản. Rule: counter → Atomic, complex state → synchronized, flag → volatile.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">thenApply vs thenCompose trong CompletableFuture?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">thenApply(T→U): transform, wrap kết quả trong CF (như map). thenCompose(T→CF&lt;U&gt;): khi function trả về CF, flatten để tránh CF&lt;CF&lt;U&gt;&gt; (như flatMap). Dùng thenCompose khi chain async operations phụ thuộc nhau.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Giải thích Dependency Inversion (DIP) và phân biệt với Dependency Injection (DI).</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">DIP (principle): high-level + low-level cùng depend abstraction, không depend concrete. DI (technique): inject dependencies từ ngoài để đạt DIP. DIP là WHY, DI là HOW. Spring IoC = DI in action. Constructor injection &gt; field (immutable, testable, explicit). Giúp loose coupling + dễ mock test.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Explain how you'd use CompletableFuture to call multiple services in parallel."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I'd kick off each service call with CompletableFuture.supplyAsync on a dedicated I/O thread pool, not the common ForkJoinPool, so blocking calls don't starve it. Then I combine them — thenCombine for two, or allOf for many — waiting for all to complete before building the aggregate response. I add exceptionally or handle for graceful fallback if one fails. This turns sequential 200ms+200ms+200ms calls into a single ~200ms parallel operation, which is critical for API latency."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#146 LRU Cache + #347 Top K Frequent</div><div class="bc-hint">Medium — review concurrency/collections</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI tạo concurrency scenarios để luyện.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại notes T3 + "Java Concurrency in Practice" chương 2-3.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w8-day-3">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">01/07 — Thứ 4</div>
        <div class="day-topic">Ôn T4: Spring Boot, REST, DI, JPA cơ bản</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">⏱ 30 phút sáng + 2h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Parroto Shadowing · 20 phút</span></div>
      <div class="en-content">Shadow câu về REST API design + Spring DI. Vocalmax ôn từ vựng Spring. Mục tiêu: nói về Spring architecture trôi chảy.</div>
    </div>
    <details class="accordion" open>
      <summary>📖 Tóm Tắt Ôn Tập</summary>
      <div class="theory-grid">
        <div class="theory-card"><div class="theory-title">Spring Boot + Auto-config</div><div class="theory-body">@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan. Auto-config dựa classpath (@ConditionalOnClass). Embedded Tomcat, fat JAR. application.yml config. Profiles (dev/prod).</div></div>
        <div class="theory-card"><div class="theory-title">REST API</div><div class="theory-body">@RestController (= @Controller + @ResponseBody). HTTP methods + status (200/201/204/400/404/409). @PathVariable (resource id) vs @RequestParam (filter) vs @RequestBody (JSON). ResponseEntity kiểm soát status+headers. DTO pattern (tách API khỏi entity) + @Valid validation + @RestControllerAdvice.</div></div>
        <div class="theory-card"><div class="theory-title">DI + IoC</div><div class="theory-body">IoC container quản lý beans. @Component/@Service/@Repository/@Controller stereotypes. Constructor injection (&gt; field injection: immutable, testable). @Bean/@Configuration (manual beans). @Primary/@Qualifier (resolve ambiguity). Bean scopes (singleton default, prototype). Circular dependency → @Lazy/redesign.</div></div>
        <div class="theory-card"><div class="theory-title">Spring Data JPA cơ bản</div><div class="theory-body">@Entity/@Id/@GeneratedValue. JpaRepository (save/findById/findAll/deleteById). Derived queries (findByNameAndGpa). @Query JPQL. Pageable/Page. @Transactional (readOnly cho GET). LAZY default cho collections.</div></div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Ôn Tập — Tự Gõ Lại Từ Trí Nhớ</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Active recall: 3-layer Spring REST controller
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    private final StudentService service;
    public StudentController(StudentService service) { this.service = service; } // constructor injection

    @GetMapping
    public Page&lt;StudentDto&gt; getAll(@RequestParam(defaultValue="0") int page,
                                   @RequestParam(defaultValue="10") int size) {
        return service.findAll(PageRequest.of(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity&lt;StudentDto&gt; getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StudentDto create(@Valid @RequestBody CreateStudentRequest req) {
        return service.create(req);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) { service.delete(id); }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Active Recall (4 bài)</summary>
      <ol class="exercise-list">
        <li>Gõ lại full CRUD controller (GET all + pagination, GET by id, POST, PUT, DELETE) từ trí nhớ với đúng status codes.</li>
        <li>Viết @Entity + JpaRepository với 2 derived query methods (findByX, findByXGreaterThan).</li>
        <li>Giải thích to ra: tại sao constructor injection &gt; field injection (4 lý do).</li>
        <li>Thiết kế DTO pattern: Request DTO (validation) + Response DTO cho 1 resource bất kỳ.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@SpringBootApplication gồm những annotation nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@Configuration (config class), @EnableAutoConfiguration (auto-config dựa classpath), @ComponentScan (quét components trong package + sub-packages). 3 trong 1 meta-annotation.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">HTTP status 200 vs 201 vs 204 vs 404?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">200 OK (GET/PUT thành công), 201 Created (POST tạo mới, kèm Location header), 204 No Content (DELETE thành công, no body), 404 Not Found (resource không tồn tại). 400 Bad Request cho validation fail.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">@Component vs @Service vs @Repository khác gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Đều là @Component specialization (đều được component scan). @Repository thêm exception translation (DB exception → DataAccessException). @Service đánh dấu business layer. Semantic + AOP behavior khác nhau, giúp code readable + target AOP đúng layer.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao Constructor Injection &gt; Field Injection?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) Immutable (final fields). (2) Explicit dependencies (thấy rõ trong constructor). (3) Testable (new Service(mock) không cần Spring). (4) Fail-fast (thiếu dependency → lỗi lúc khởi tạo). Spring team + IntelliJ đều khuyến nghị constructor injection.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">DTO pattern giải quyết vấn đề gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Tách API contract khỏi DB entity: security (ẩn fields nhạy cảm), versioning (API đổi độc lập DB), validation (validate input riêng), tránh LazyInitializationException khi serialize entity, control fields trả về. Dùng MapStruct (compile-time) map entity↔DTO.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">@Transactional readOnly=true tối ưu gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Hibernate: no dirty checking (không track changes), no snapshot (ít memory), flush mode NEVER (không accidental writes). DB: hint route tới read replica nếu config. Connection pool optimization. Luôn dùng cho service methods chỉ đọc → performance + an toàn (không vô tình ghi).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Walk me through the layers of a Spring Boot REST application."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I follow a three-layer architecture. The Controller layer handles HTTP — mapping requests, validation, and returning proper status codes via ResponseEntity. The Service layer holds business logic and transaction boundaries with @Transactional. The Repository layer extends JpaRepository for data access. DTOs separate the API contract from JPA entities for security and flexibility. Dependencies flow inward via constructor injection, and a @RestControllerAdvice centralizes exception handling so every error returns a consistent JSON format."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#704 Binary Search + #242 Valid Anagram</div><div class="bc-hint">Easy — review</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI review Spring architecture của bạn.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại notes T4 + Spring Boot reference "Web".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w8-day-4">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">02/07 — Thứ 5</div>
        <div class="day-topic">Ôn T5: JPA nâng cao, Redis, Spring AI</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">⏱ 30 phút sáng + 2h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Parroto Shadowing · 20 phút</span></div>
      <div class="en-content">Shadow câu về JPA performance + caching. Vocalmax ôn từ vựng JPA/Redis/AI. Mục tiêu: nói về performance optimization như senior.</div>
    </div>
    <details class="accordion" open>
      <summary>📖 Tóm Tắt Ôn Tập</summary>
      <div class="theory-grid">
        <div class="theory-card"><div class="theory-title">N+1 + fetch optimization</div><div class="theory-body">N+1 = N children queries sau 1 parent query. Fix: JOIN FETCH (explicit JPQL), @EntityGraph (declarative), @BatchSize (IN clause), DTO projection (chỉ cột cần). Tất cả associations để LAZY mặc định. MultipleBagFetchException → đổi List sang Set hoặc tách query.</div></div>
        <div class="theory-card"><div class="theory-title">Entity relationships</div><div class="theory-body">Owning side (FK, @JoinColumn) vs inverse side (mappedBy). Cascade (PERSIST/REMOVE/ALL), orphanRemoval (xóa child khi tách khỏi collection). Sync cả 2 side qua helper methods. Tránh @ManyToMany REMOVE cascade. EAGER vs LAZY.</div></div>
        <div class="theory-card"><div class="theory-title">Redis Cache</div><div class="theory-body">@Cacheable (read, skip nếu hit), @CachePut (luôn update), @CacheEvict (invalidate). TTL safety net. Cache-aside pattern. Distributed cache cho multi-instance (vs local Caffeine). Cache stampede → lock/early refresh.</div></div>
        <div class="theory-card"><div class="theory-title">Spring AI setup</div><div class="theory-body">ChatClient (fluent: .prompt().user().call().content()) vs ChatModel (low-level). System vs User message. PromptTemplate placeholders. Structured output .entity(Class). Cache AI responses (Redis, key=prompt hash, temperature thấp). API key qua env var.</div></div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Ôn Tập — Tự Gõ Lại Từ Trí Nhớ</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Active recall: N+1 fix (3 cách) + Redis cache
public interface StudentRepository extends JpaRepository&lt;Student, Long&gt; {
    // Cách 1: JOIN FETCH
    @Query("SELECT DISTINCT s FROM Student s JOIN FETCH s.course")
    List&lt;Student&gt; findAllWithCourse();

    // Cách 2: @EntityGraph
    @EntityGraph(attributePaths = {"course", "enrollments"})
    List&lt;Student&gt; findByFaculty(Faculty faculty);
}

@Service
public class StudentService {
    @Cacheable(value = "students", key = "#id")
    public StudentDto findById(Long id) { /* chỉ chạy khi cache miss */ ... }

    @CacheEvict(value = "students", key = "#id")
    public void delete(Long id) { repo.deleteById(id); } // invalidate cache
}

// Spring AI structured output
StudentAdvice advice = chatClient.prompt()
    .system("You are an academic advisor.")
    .user(u -&gt; u.text("Advise {n} with GPA {g}").param("n", name).param("g", gpa))
    .call()
    .entity(StudentAdvice.class); // JSON → record</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Active Recall (4 bài)</summary>
      <ol class="exercise-list">
        <li>Gõ lại 3 cách fix N+1 (JOIN FETCH, @EntityGraph, @BatchSize) từ trí nhớ.</li>
        <li>Viết @Cacheable + @CacheEvict cho 1 service, giải thích cache-aside flow.</li>
        <li>Giải thích to ra: owning vs inverse side, khi nào cần sync cả 2.</li>
        <li>Viết Spring AI ChatClient call với system message + structured output.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">4 cách fix N+1?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">JOIN FETCH (explicit JPQL, 1 query), @EntityGraph (declarative trên repository method), @BatchSize (gom lazy loads thành IN clause), DTO projection (chỉ select cột cần, không load full entity).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@Cacheable vs @CacheEvict?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@Cacheable: lưu kết quả method vào cache, lần sau cùng key trả từ cache (skip method). @CacheEvict: xóa entry khỏi cache (gọi khi update/delete để invalidate). Cặp đôi tạo cache-aside pattern.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">ChatClient vs ChatModel trong Spring AI?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">ChatClient: fluent high-level API (.prompt().user().call().content()), tiện cho hầu hết use cases. ChatModel: low-level (call(Prompt)→ChatResponse), control chi tiết. ChatClient build trên ChatModel, khuyên dùng mặc định.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Owning side vs inverse side trong JPA?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Owning side: giữ FK, có @JoinColumn, thường @ManyToOne. Inverse side: dùng mappedBy, không quản lý FK. Hibernate chỉ nhìn owning side để persist. Update inverse side không có tác dụng nếu owning side chưa set. Sync cả 2 qua helper methods.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao cache cần TTL ngay cả khi có @CacheEvict?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@CacheEvict chỉ invalidate khi data đổi QUA app. Nếu data đổi ngoài app (another service, manual DB) hoặc evict bug → stale vĩnh viễn. TTL là safety net — stale data tự expire sau X phút. Defense in depth.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">MultipleBagFetchException nguyên nhân và fix?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">JOIN FETCH 2+ List collections cùng query → Cartesian product không hợp lệ. Fix: (1) đổi List → Set, (2) tách nhiều queries (Hibernate cache entity, query 2 chỉ thêm collection), (3) @BatchSize thay fetch, (4) default_batch_fetch_size global config.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How do you diagnose and fix a slow JPA endpoint?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"First I enable SQL logging to see the actual queries. The most common culprit is the N+1 problem — loading a list then lazily accessing an association per row. I fix it with JOIN FETCH, an @EntityGraph, or @BatchSize depending on the case. If we're loading full entities just for a read-only list, I switch to a DTO projection to fetch only needed columns. I verify pagination happens at the database level, add indexes on filter and join columns, and cache hot read-only data in Redis with a TTL."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#1 Two Sum + #49 Group Anagrams</div><div class="bc-hint">Review</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI tạo JPA performance scenarios.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại notes T5 + Vlad Mihalcea performance blog.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w8-day-5">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">03/07 — Thứ 6</div>
        <div class="day-topic">Ôn T6: Reactive, Streaming, Async, Prompt, Docker</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Vocalmax review + Parroto · 15 phút</span></div>
      <div class="en-content">Ôn từ vựng reactive/Docker. Shadow câu về streaming + containerization. Mục tiêu: vocabulary phản xạ.</div>
    </div>
    <details class="accordion" open>
      <summary>📖 Tóm Tắt Ôn Tập</summary>
      <div class="theory-grid">
        <div class="theory-card"><div class="theory-title">Reactive + Streaming</div><div class="theory-body">Mono (0-1) vs Flux (0-N), lazy (subscribe mới chạy), backpressure, non-blocking event-loop. ChatClient.stream() → Flux&lt;String&gt;. SSE (text/event-stream) server push, perceived latency thấp. SSE vs WebSocket (1 chiều vs 2 chiều). subscribeOn (source) vs publishOn (downstream).</div></div>
        <div class="theory-card"><div class="theory-title">Chat Memory + @Async</div><div class="theory-body">LLM stateless → cần gửi history. MessageChatMemoryAdvisor, conversationId tách session. Bound context window (sliding window/summarization). @Async + ThreadPoolTaskExecutor (core/max/queue), CallerRunsPolicy backpressure, return CompletableFuture. Self-invocation + @Transactional pitfalls.</div></div>
        <div class="theory-card"><div class="theory-title">Prompt Engineering</div><div class="theory-body">Zero-shot vs few-shot (ví dụ trong prompt). Role prompting (system message persona). Chain of Thought ("think step by step"). Structured output (.entity). Grounding (facts trong prompt) chống hallucination. Prompt injection (delimiters + validation phòng).</div></div>
        <div class="theory-card"><div class="theory-title">Docker</div><div class="theory-body">Container (share kernel, nhẹ) vs VM (full OS). Image (template) vs Container (instance). Multi-stage build (build stage JDK + run stage JRE → image nhỏ). Layer caching (deps trước code). docker-compose (multi-container, service name = DNS). Non-root, pin versions security.</div></div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Ôn Tập — Tự Gõ Lại Từ Trí Nhớ</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Active recall: streaming chatbot endpoint với memory
@GetMapping(value = "/{conversationId}/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
public Flux&lt;String&gt; streamChat(@PathVariable String conversationId, @RequestParam String message) {
    return chatClient.prompt()
        .user(message)
        .advisors(a -&gt; a.param(CHAT_MEMORY_CONVERSATION_ID_KEY, conversationId))
        .stream()
        .content()
        .onErrorResume(e -&gt; Flux.just("[Error: " + e.getMessage() + "]"));
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="docker"># Active recall: multi-stage Dockerfile
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY mvnw pom.xml ./
COPY .mvn/ .mvn
RUN ./mvnw dependency:go-offline
COPY src ./src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Active Recall (3 bài)</summary>
      <ol class="exercise-list">
        <li>Gõ lại streaming endpoint (Flux + SSE + onErrorResume) từ trí nhớ.</li>
        <li>Viết multi-stage Dockerfile cho Spring Boot không nhìn notes.</li>
        <li>Giải thích to ra: Mono vs Flux, SSE vs WebSocket, few-shot vs zero-shot prompting.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Mono vs Flux?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Mono&lt;T&gt; emit 0-1 item (async Optional), Flux&lt;T&gt; emit 0-N items (async Stream). Mono cho single result, Flux cho list/streaming (LLM tokens). Cả 2 lazy — chỉ chạy khi subscribe.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Tại sao streaming LLM cải thiện UX?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">LLM tạo token tuần tự (5-30s). Không streaming: user chờ toàn bộ → khó chịu. Streaming: hiển thị từng token ngay → perceived latency thấp, đọc được ngay phần đầu (như ChatGPT typing). Total time không đổi nhưng cảm giác nhanh hơn nhiều.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao @Async cần custom ThreadPoolTaskExecutor?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Default SimpleAsyncTaskExecutor tạo thread mới mỗi task (unbounded) → OOM. Custom executor bounded (core/max/queue) + named threads + rejection policy → control + an toàn. I/O-bound (LLM) dùng pool lớn hơn CPU-bound.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Few-shot prompting và Chain of Thought?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Few-shot: cho vài ví dụ input→output trong prompt để model học pattern (vs zero-shot chỉ instruction). Chain of Thought: yêu cầu "think step by step" → reasoning tốt hơn cho task logic. Cả 2 cải thiện accuracy, đổi lại tốn tokens hơn.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Multi-stage Docker build + layer caching tối ưu thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Multi-stage: build stage (JDK+Maven) tách run stage (JRE only) → image cuối nhỏ (~200MB vs ~700MB), an toàn (ít attack surface). Layer caching: COPY pom.xml + download deps TRƯỚC COPY src → đổi code không invalidate deps layer → rebuild nhanh. Non-root user, pin versions, .dockerignore.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#155 Min Stack + #225 Implement Stack using Queues</div><div class="bc-hint">Review design</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI quiz reactive + Docker concepts.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại notes T6 + Project Reactor + Docker docs.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w8-day-6">
  <div class="day-header" style="background:#C0392B">
    <div class="day-header-left">
      <span class="day-icon">🔥</span>
      <div>
        <div class="day-date">04/07 — Thứ 7</div>
        <div class="day-topic">Ôn T7: Security, Testing, RAG + Tích hợp</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">WEEKEND</span>
      <span class="day-hours">⏱ 4h (sáng + chiều)</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Parroto Shadowing · 30 phút</span></div>
      <div class="en-content">Shadow câu phỏng vấn EN về security + testing + RAG. Vocalmax ôn tổng hợp 30 từ khó nhất T5-T7. Mock interview EN 3 câu.</div>
    </div>
    <details class="accordion" open>
      <summary>📖 Tóm Tắt Ôn Tập</summary>
      <div class="theory-grid">
        <div class="theory-card"><div class="theory-title">Security + JWT</div><div class="theory-body">Authn (bạn là ai) vs Authz (được làm gì). SecurityFilterChain config. JWT (header.payload.signature, không mã hóa, stateless, Bearer token). JwtAuthenticationFilter (OncePerRequestFilter). @PreAuthorize role-based. BCrypt password hash (slow + salt). UserDetailsService.</div></div>
        <div class="theory-card"><div class="theory-title">Testing</div><div class="theory-body">JUnit 5 (@Test, assertions, @BeforeEach lifecycle, @ParameterizedTest, AAA pattern). Mockito (@Mock/@InjectMocks, when/thenReturn stub, verify interaction, Spy). Spring slices (@WebMvcTest web layer, @DataJpaTest JPA, @SpringBootTest full). Test isolation.</div></div>
        <div class="theory-card"><div class="theory-title">RAG</div><div class="theory-body">Embeddings (text→vector, semantic). VectorStore + PGVector. Similarity search (top-K, cosine, HNSW index). RAG pipeline (ingest→chunk→embed→retrieve→augment→generate). QuestionAnswerAdvisor. Chunking strategy. Grounding chống hallucination. RAG vs fine-tuning.</div></div>
        <div class="theory-card"><div class="theory-title">Tích hợp toàn bộ</div><div class="theory-body">1 production API điển hình: JWT auth (filter) → @PreAuthorize authz → @RestController → @Service (@Transactional + @Cacheable Redis) → JpaRepository (N+1 optimized) → Spring AI (RAG grounded). Tested với JUnit/Mockito. Dockerized. Đây là bức tranh tổng thể T4-T7.</div></div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Ôn Tập — Tự Gõ Lại Từ Trí Nhớ</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Active recall: tích hợp Security + Cache + JPA + AI trong 1 flow
@RestController
@RequestMapping("/api/v1/qa")
public class SecuredRagController {
    private final ChatClient chatClient;
    private final StudentService studentService;

    @PostMapping("/ask")
    @PreAuthorize("hasRole('USER')")  // authz
    public QaResponse ask(@RequestBody @Valid QaRequest req) {  // validation
        String answer = chatClient.prompt()
            .user(req.question())
            .call()              // RAG via QuestionAnswerAdvisor
            .content();
        return new QaResponse(req.question(), answer);
    }
}

// Test: verify auth required
@WebMvcTest(SecuredRagController.class)
class SecuredRagControllerTest {
    @Autowired MockMvc mockMvc;
    @MockBean ChatClient.Builder builder;

    @Test
    void shouldReturn401WhenNoToken() throws Exception {
        mockMvc.perform(post("/api/v1/qa/ask").contentType(MediaType.APPLICATION_JSON)
                .content("{\"question\":\"hi\"}"))
            .andExpect(status().isUnauthorized());
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Active Recall (4 bài)</summary>
      <ol class="exercise-list">
        <li>Gõ lại JWT flow (generate token → filter validate → SecurityContext) từ trí nhớ.</li>
        <li>Viết 1 test với Mockito (@Mock + when/thenReturn + verify) cho service bất kỳ.</li>
        <li>Giải thích to ra: RAG pipeline đầy đủ (ingest → retrieve → augment → generate).</li>
        <li>Vẽ (text/giấy) kiến trúc 1 production API tích hợp Security + Cache + JPA + AI + Test.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp (8 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Authentication vs Authorization?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Authentication = xác thực bạn là ai (login, verify token). Authorization = xác định bạn được làm gì (roles, permissions). Authn trước, authz sau.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">JWT có mã hóa không?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">KHÔNG — chỉ Base64 encode (decode được). Signature chỉ chống tamper, không giấu nội dung. Không để dữ liệu nhạy cảm trong payload. Chỉ lưu user id, roles, expiration.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@Mock vs @InjectMocks?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@Mock tạo fake dependency. @InjectMocks tạo instance class-under-test và inject các @Mock vào. Cần @ExtendWith(MockitoExtension.class).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">RAG giảm hallucination thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Retrieve documents thật từ knowledge base, inject vào prompt làm context, yêu cầu LLM trả lời CHỈ từ context đó. Model không phải bịa từ memory. Thêm "nếu không biết, nói không biết". Retrieval quality quyết định answer quality.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">when/thenReturn vs verify trong Mockito?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">when().thenReturn() = STUB định nghĩa mock trả gì (input). verify() = kiểm tra interaction, method được gọi không/bao nhiêu lần/args gì (behavior/side-effect). Stub cho output, verify cho side-effects (save, sendEmail).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao REST API dùng stateless JWT thay session?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">JWT self-contained, validate bằng signature (no DB lookup), scale ngang dễ (no shared session store). Session: server lưu state, cần sticky session/replication. Trade-off: JWT khó revoke (dùng short expiry + refresh token).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Mô tả kiến trúc 1 production Spring Boot API tích hợp đầy đủ.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Request → JwtAuthenticationFilter (validate token, set SecurityContext) → @PreAuthorize (authz) → @RestController (validation @Valid) → @Service (@Transactional readOnly + @Cacheable Redis) → JpaRepository (N+1 fix bằng @EntityGraph) → optional Spring AI (RAG grounded answer). @RestControllerAdvice xử lý exceptions consistent. Tested: @WebMvcTest (controller) + Mockito unit (service) + @DataJpaTest (repo). Dockerized với docker-compose (app + Redis + Postgres/PGVector).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Describe a complete, production-ready Spring Boot feature you could build end to end."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"Take a secured AI Q&amp;A endpoint. A JWT filter authenticates each request and sets the SecurityContext; @PreAuthorize enforces role-based authorization. The controller validates input with @Valid and delegates to a service annotated @Transactional with readOnly for reads. The service caches hot results in Redis with a TTL, fetches data via repositories where I've eliminated N+1 with @EntityGraph, and calls Spring AI with a RAG advisor so answers are grounded in real documents. A @RestControllerAdvice returns consistent error responses. I test it with @WebMvcTest for the web layer, Mockito for service logic, and @DataJpaTest for queries, then containerize everything with docker-compose. That's correct, secure, performant, tested, and deployable."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#56 Merge Intervals + #169 Majority Element</div><div class="bc-hint">Medium/Easy — review</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI làm mock interviewer hỏi security/testing/RAG.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại notes T7 + tự xây 1 integration demo nhỏ.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w8-day-7">
  <div class="day-header" style="background:#8E44AD">
    <div class="day-header-left">
      <span class="day-icon">🎯</span>
      <div>
        <div class="day-date">05/07 — CN</div>
        <div class="day-topic">Full Mock Interview + Đánh giá + Kế hoạch T9-T12</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">REVIEW</span>
      <span class="day-hours">⏱ 4h (ôn tập + project)</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Full Mock Interview EN · 45 phút</span></div>
      <div class="en-content">Mock interview EN hoàn chỉnh — tự phỏng vấn bản thân hoặc nhờ AI làm interviewer. 15 câu mix Java Core + Spring + AI + Security + Testing. Record toàn bộ, nghe lại, note câu ấp úng. STAR method cho 2 behavioral questions.</div>
    </div>
    <details class="accordion" open>
      <summary>📖 Tóm Tắt Ôn Tập</summary>
      <div class="theory-grid">
        <div class="theory-card"><div class="theory-title">Self-assessment T1-T7</div><div class="theory-body">Đánh giá thật: chủ đề nào tự tin (trả lời không nhìn notes)? Chủ đề nào còn yếu (ấp úng, phải tra)? Liệt kê 3 điểm mạnh + 3 điểm yếu cần củng cố. Trung thực = tiến bộ.</div></div>
        <div class="theory-card"><div class="theory-title">Interview readiness</div><div class="theory-body">Có thể giải thích mỗi chủ đề T1-T7 cho người mới (Feynman)? Trả lời được mock EN trôi chảy? Code được core examples từ trí nhớ? Đây là thước đo sẵn sàng phỏng vấn.</div></div>
        <div class="theory-card"><div class="theory-title">Kế hoạch T9-T12</div><div class="theory-body">T9: Microservices + Docker Compose + Spring Cloud Gateway + Concurrency. T10: JVM + GC + Design Patterns + Clean Code. T11: LeetCode Top 50 + Demo Project + System Design. T12: Tổng ôn + Nộp đơn + Final Mock. Chuyển sang giai đoạn EN "Ứng dụng" (Mock Interview + STAR + Business English).</div></div>
        <div class="theory-card"><div class="theory-title">Spaced repetition plan</div><div class="theory-body">Lên lịch ôn lại: chủ đề yếu ôn mỗi 3 ngày, chủ đề mạnh mỗi tuần. Duy trì LeetCode daily. GitHub commit đều. Vocalmax/Parroto giữ streak. Review tuần 8 này lại sau 1 tuần.</div></div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Ôn Tập — Tự Gõ Lại Từ Trí Nhớ</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Final recall: viết 1 feature hoàn chỉnh tích hợp nhiều tuần (không nhìn notes)
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    private final StudentService service;
    public StudentController(StudentService service) { this.service = service; }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity&lt;StudentDto&gt; getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }
}

@Service
public class StudentService {
    private final StudentRepository repo;
    public StudentService(StudentRepository repo) { this.repo = repo; }

    @Cacheable(value = "students", key = "#id")
    @Transactional(readOnly = true)
    public StudentDto findById(Long id) {
        return repo.findByIdWithCourse(id)   // @EntityGraph, no N+1
            .map(this::toDto)
            .orElseThrow(() -&gt; new StudentNotFoundException(id));
    }

    private StudentDto toDto(Student s) {
        return new StudentDto(s.getName(), s.getEmail(), s.getGpa());
    }
}
// Tích hợp: Security (@PreAuthorize) + Cache (@Cacheable) + Transaction +
// JPA optimized (@EntityGraph) + DTO + exception handling. Tự gõ lại = sẵn sàng.</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Active Recall (3 bài)</summary>
      <ol class="exercise-list">
        <li>Hoàn thành full mock interview EN 15 câu (tự ghi âm), nghe lại, chấm điểm từng câu (trôi chảy/ấp úng).</li>
        <li>Viết self-assessment: bảng 7 tuần × (tự tin / cần ôn), liệt kê 3 điểm yếu ưu tiên củng cố trong T9-T12.</li>
        <li>Push tổng hợp lên GitHub: README "Java Backend Learning Journey T1-T8" liệt kê skills + projects, cập nhật profile sẵn sàng nộp đơn.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp (10 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">4 tính chất OOP?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Encapsulation, Inheritance, Polymorphism, Abstraction. Nền tảng mọi câu hỏi OOP.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">equals/hashCode contract?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">a.equals(b) → a.hashCode()==b.hashCode(). Vi phạm → HashMap/HashSet hỏng. Override cả 2 cùng nhau.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@SpringBootApplication gồm gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@Configuration + @EnableAutoConfiguration + @ComponentScan.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">synchronized vs volatile vs AtomicInteger?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">volatile (visibility only), synchronized (mutual exclusion, compound ops), AtomicInteger (lock-free CAS, counter). Chọn theo use case.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">N+1 problem và cách fix?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">N children queries sau 1 parent query. Fix: JOIN FETCH, @EntityGraph, @BatchSize, DTO projection. Tất cả LAZY mặc định.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Constructor injection &gt; field injection vì sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Immutable, explicit dependencies, testable, fail-fast. Spring team khuyến nghị.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Giải thích HashMap internals đầy đủ.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">hashCode → spread → index = hash &amp; (n-1). Collision → chaining (→ Red-Black tree khi &gt;8 nodes). Load factor 0.75 → resize gấp đôi + rehash. equals so sánh trong bucket. Vì vậy equals/hashCode phải đúng contract.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">JWT stateless auth — ưu nhược điểm và mitigate?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Ưu: scale ngang dễ (no session store), self-contained. Nhược: khó revoke (short expiry + refresh token), bị lộ qua XSS (httpOnly/memory không localStorage), payload đọc được (không để PII), secret lộ (rotate keys/RS256), "alg:none" attack (verify algorithm). Defense in depth.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Tell me about your backend skills and a project you're proud of."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"Over the past two months I've built solid Java backend skills: core Java with OOP, generics, concurrency and functional programming; Spring Boot for REST APIs with proper layering, DI, and JPA where I handle performance issues like N+1; and modern AI integration with Spring AI, including streaming chatbots and RAG. I'm proud of a secured AI Q&amp;A API that combines JWT authentication, Redis caching, optimized JPA queries, and RAG with PGVector — all tested with JUnit and Mockito and containerized with Docker. It taught me how the layers fit together into something production-ready."</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Where do you see gaps in your knowledge and how will you address them?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I've built strong fundamentals through Java core, Spring Boot, and AI integration, but I know I have gaps in distributed systems — I'm about to study microservices, Spring Cloud Gateway, and Docker Compose orchestration. I also want deeper JVM internals like garbage collection, and more design patterns and system design practice. My plan is structured: dedicated weeks for each, daily LeetCode for algorithms, and building a portfolio project that demonstrates the full stack. I learn best by building, so each topic ends with a hands-on project pushed to GitHub."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">Tổng hợp — chọn 3 bài bất kỳ đã làm</div><div class="bc-hint">Giải lại từ đầu không nhìn solution (test retention)</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Nhờ AI làm full mock interviewer 30 phút.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Cập nhật CV/LinkedIn + chuẩn bị T9-T12.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w8-summary">
  <h2 class="section-h2">🎯 Tổng Kết Tuần 8 — Nửa Chặng Đường</h2>
  <div class="summary-cols">
    <div>
      <h3 class="sub-h3">📋 Ngân Hàng Câu Hỏi Tổng Hợp T1-T7</h3>
      <p class="muted">Đây là bộ câu hỏi cốt lõi nhất 7 tuần — trả lời được hết = sẵn sàng phỏng vấn.</p>
      <div class="sq-group">
        <div class="sq-group-title">Java Core (T1-T3)</div>
        <div class="sq-item">
          <div class="sq-q">"What are the four pillars of OOP and how does polymorphism work at runtime?"</div>
          <div class="sq-a">Encapsulation, Inheritance, Polymorphism, Abstraction. Runtime polymorphism uses dynamic dispatch — the JVM resolves which overridden method to call based on the actual object type, not the reference type, via the virtual method table.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Explain the difference between synchronized, volatile, and atomic classes."</div>
          <div class="sq-a">volatile guarantees visibility but not atomicity. synchronized provides mutual exclusion for compound operations. Atomic classes use lock-free CAS for simple operations like counters. Choose atomic for counters, synchronized for complex critical sections, volatile for flags.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"How do Streams and CompletableFuture differ in handling collections vs async work?"</div>
          <div class="sq-a">Streams process collections lazily with a pipeline of intermediate and terminal operations. CompletableFuture handles asynchronous computation with composition via thenApply, thenCompose, and combination via allOf — non-blocking, with exception handling through exceptionally and handle.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Spring + JPA (T4-T5)</div>
        <div class="sq-item">
          <div class="sq-q">"Walk through the layers of a Spring Boot REST application."</div>
          <div class="sq-a">Controller handles HTTP and validation, returning proper status via ResponseEntity. Service holds business logic and transactions. Repository extends JpaRepository for data access. DTOs separate the API contract from entities. Dependencies flow inward via constructor injection; @RestControllerAdvice centralizes error handling.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"What is the N+1 problem and how do you fix it?"</div>
          <div class="sq-a">Loading N entities then accessing a lazy association per entity triggers N extra queries. Fix with JOIN FETCH, @EntityGraph, @BatchSize, or a DTO projection that selects only needed columns. Keep associations LAZY by default and fetch explicitly.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"How does Spring's cache abstraction work with Redis?"</div>
          <div class="sq-a">@Cacheable stores method results and returns from cache on hits. @CacheEvict invalidates on writes. @CachePut always updates. This is the cache-aside pattern. Redis provides a distributed cache shared across instances, with a TTL as a safety net against stale data.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">AI + Security + Testing (T6-T7)</div>
        <div class="sq-item">
          <div class="sq-q">"Why stream an LLM response, and how does SSE enable it?"</div>
          <div class="sq-a">Streaming shows tokens as they're generated, drastically lowering perceived latency. ChatClient.stream() returns a Flux, and a controller producing text/event-stream serializes each emission as a Server-Sent Event — one-way server-to-client over HTTP with auto-reconnect, simpler than WebSocket.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Explain stateless JWT authentication and its trade-offs."</div>
          <div class="sq-a">The server issues a signed token containing user and roles; the client sends it as a Bearer token, validated by signature without a session lookup. It scales horizontally but is hard to revoke, so use short-lived access tokens with refresh tokens, and never store sensitive data since the payload is only encoded.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"What is RAG and how does it reduce hallucination?"</div>
          <div class="sq-a">Retrieval-Augmented Generation embeds a query, retrieves the most similar document chunks from a vector store, and injects them into the prompt as context so the LLM answers from real data instead of guessing. It grounds responses, enables citations, and lets the model say 'I don't know' when retrieval finds nothing relevant.</div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sub-h3">✅ Checklist Ôn Tập Tuần 8</h3>
      <div class="checklist" data-week="8">
        <label class="check-item"><input type="checkbox" data-idx="1"><span>Gõ lại Generic Stack + equals/hashCode từ trí nhớ, không nhìn notes (T1-T2)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="2"><span>Giải thích trôi chảy: synchronized/volatile/Atomic, SOLID, CompletableFuture (T3)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="3"><span>Viết full CRUD Spring controller + đúng status codes từ trí nhớ (T4)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="4"><span>Gõ lại 3 cách fix N+1 + @Cacheable/@CacheEvict (T5)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="5"><span>Viết streaming endpoint (Flux+SSE) + multi-stage Dockerfile từ trí nhớ (T6)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="6"><span>Gõ lại JWT flow + 1 Mockito test + giải thích RAG pipeline (T7)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="7"><span>Hoàn thành full mock interview EN 15 câu, ghi âm + nghe lại</span></label>
        <label class="check-item"><input type="checkbox" data-idx="8"><span>Self-assessment: liệt kê 3 điểm mạnh + 3 điểm yếu cần củng cố</span></label>
        <label class="check-item"><input type="checkbox" data-idx="9"><span>Tất cả 7 checklist tuần trước (T1-T7) đã review lại, đánh dấu chủ đề yếu</span></label>
        <label class="check-item"><input type="checkbox" data-idx="10"><span>Cập nhật CV/LinkedIn + GitHub README "Learning Journey", sẵn sàng T9-T12</span></label>
      </div>
      <div class="progress-wrap-outer"><div class="progress-wrap">
        <div class="progress-label">Hoàn thành: <strong class="progress-text">0/10</strong></div>
        <div class="progress-bar-bg"><div class="progress-bar"></div></div>
      </div></div>
      <div class="golden-rule">
        💡 <strong>Golden Rule Tuần 8:</strong> Ôn tập không phải đọc lại — là GỢI LẠI từ trí nhớ (active recall). Nếu phải nhìn notes mới trả lời được = chưa thuộc. Gõ lại code từ đầu, giải thích to ra như dạy người khác (Feynman). Đã đi được nửa chặng đường — kiến thức nền vững là bệ phóng cho microservices, system design phía trước. Trung thực với điểm yếu = chìa khóa tiến bộ. 7 tuần nền tảng → sẵn sàng bứt phá!
      </div>
    </div>
  </div>
</section>

