<div class="week-divider" id="week-5-start">🚀 Tuần 5 · JPA Nâng cao + Spring AI Setup · 08/06–14/06/2025</div>

<section class="day-section" id="w5-overview">
  <h2 class="section-h2">📅 Lịch Học Tuần 5 — Tổng Quan 7 Ngày</h2>
  <table class="overview-table">
    <thead>
      <tr>
        <th>Ngày</th>
        <th>Thứ</th>
        <th>Chế độ</th>
        <th>Thời gian</th>
        <th>Chủ đề</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>08/06</td>
        <td>Thứ 2</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>N+1 Problem sâu + JOIN FETCH + @EntityGraph</td>
      </tr>
      <tr>
        <td>09/06</td>
        <td>Thứ 3</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Entity Relationships nâng cao: @OneToMany, cascade, orphanRemoval, fetch strategies</td>
      </tr>
      <tr>
        <td>10/06</td>
        <td>Thứ 4</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>JPA Performance: @BatchSize, DTO Projection, Specification API, Criteria queries</td>
      </tr>
      <tr>
        <td>11/06</td>
        <td>Thứ 5</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Redis Cache: @Cacheable, @CacheEvict, RedisTemplate, cache strategies</td>
      </tr>
      <tr>
        <td>12/06</td>
        <td>Thứ 6</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>Spring AI Setup: dependencies, ChatClient, OpenAI/Ollama config</td>
      </tr>
      <tr>
        <td>13/06</td>
        <td>Thứ 7</td>
        <td><span class="mode-dot" style="background:#C0392B"></span>WEEKEND</td>
        <td>4h</td>
        <td>Spring AI deep: PromptTemplate, ChatModel, system/user messages + caching AI responses</td>
      </tr>
      <tr>
        <td>14/06</td>
        <td>CN</td>
        <td><span class="mode-dot" style="background:#8E44AD"></span>REVIEW</td>
        <td>4h</td>
        <td>Spaced Review T1-T5 + Mini Project: Cached AI-powered Student Advisor API</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="day-section" id="w5-day-1">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">08/06 — Thứ 2</div>
        <div class="day-topic">N+1 Problem + JOIN FETCH + @EntityGraph</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Vocalmax + Parroto Shadowing · 15 phút</span></div>
      <div class="en-content">
        <p><strong>Vocalmax 10 từ:</strong> eager, lazy, fetch, hydrate, proxy, batch, projection, entity graph, round trip, query plan.</p>
        <p><strong>Parroto shadowing 1 câu:</strong> "The N plus one problem occurs when fetching a list triggers an additional query per element."</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">N+1 là gì (sâu hơn)</div>
          <div class="theory-body">1 query load N parent → N query load children = N+1 round trips tới DB. Mỗi round trip có latency. Với 1000 rows = 1001 queries = thảm họa performance. Phát hiện: bật <code>spring.jpa.show-sql=true</code> + <code>spring.jpa.properties.hibernate.format_sql=true</code>, hoặc dùng Hibernate statistics.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">JOIN FETCH (JPQL)</div>
          <div class="theory-body"><code>SELECT s FROM Student s JOIN FETCH s.course</code> → 1 query với SQL JOIN. Eagerly loads association. Lưu ý: <code>JOIN FETCH</code> với collection → duplicate rows (dùng <code>DISTINCT</code>). Không phân trang được với collection fetch (Hibernate warning HHH000104 — paginate in memory).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">@EntityGraph</div>
          <div class="theory-body">Declarative fetch trên repository method: <code>@EntityGraph(attributePaths = {"course", "address"})</code>. Override fetch strategy chỉ cho query đó mà không cần viết JPQL. <code>type = FETCH</code> (chỉ định EAGER cho attributes) vs <code>LOAD</code> (EAGER cho attributes + default cho phần còn lại).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Khi nào dùng cái nào</div>
          <div class="theory-body"><code>JOIN FETCH</code>: control chính xác, complex queries. <code>@EntityGraph</code>: clean, reusable trên derived queries. <code>@BatchSize</code>: khi không thể join (multiple collections). DTO projection: khi chỉ cần vài fields (tốt nhất cho read-only).</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">public interface StudentRepository extends JpaRepository&lt;Student, Long&gt; {

    // 1. JOIN FETCH — explicit, 1 query
    @Query("SELECT DISTINCT s FROM Student s JOIN FETCH s.course WHERE s.gpa &gt; :minGpa")
    List&lt;Student&gt; findWithCourseByGpaGreaterThan(@Param("minGpa") Double minGpa);

    // 2. @EntityGraph — declarative, applies to derived query
    @EntityGraph(attributePaths = {"course", "enrollments"})
    List&lt;Student&gt; findByFaculty(Faculty faculty);

    // 3. @EntityGraph on findAll override
    @Override
    @EntityGraph(attributePaths = {"course"})
    List&lt;Student&gt; findAll();
}

// BAD — triggers N+1:
// List&lt;Student&gt; students = repo.findAll();        // 1 query
// students.forEach(s -&gt; s.getCourse().getName()); // N queries (lazy load)</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Tạo Student-Course relationship, viết code gây ra N+1, bật show-sql để đếm số queries.</li>
        <li>Fix N+1 bằng <code>JOIN FETCH</code> — verify còn 1 query trong log.</li>
        <li>Fix lại bằng <code>@EntityGraph</code> — so sánh số queries với cách 2.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">N+1 query problem là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi load N entities (1 query) rồi access lazy association của mỗi entity → mỗi access trigger 1 query → tổng N+1 queries. Ví dụ: load 100 students rồi gọi <code>student.getCourse()</code> trong loop = 101 queries thay vì 1-2.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">JOIN FETCH khác JOIN thường thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>JOIN</code> thường (JPQL): join để filter/where nhưng KHÔNG load association vào persistence context (vẫn lazy). <code>JOIN FETCH</code>: join VÀ eagerly initialize association — đưa data vào entity. Chỉ <code>JOIN FETCH</code> mới fix N+1.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao JOIN FETCH với collection không phân trang được?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi fetch collection, SQL JOIN tạo Cartesian product (1 parent × M children = M rows). Hibernate không thể apply SQL <code>LIMIT/OFFSET</code> đúng vì pagination phải tính trên parent, không phải joined rows. Hibernate fallback: load tất cả vào memory rồi paginate (HHH000104 warning) — nguy hiểm với large datasets. Giải pháp: 2 queries (paginate IDs trước, fetch associations sau) hoặc @BatchSize.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">@EntityGraph type FETCH vs LOAD khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>FETCH</code> (default): attributes trong graph = EAGER, attributes KHÔNG trong graph = LAZY (bất kể mapping). <code>LOAD</code>: attributes trong graph = EAGER, attributes ngoài graph = theo mapping mặc định của entity. FETCH cho control tuyệt đối, LOAD respect entity defaults.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">MultipleBagFetchException xảy ra khi nào? Cách fix?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi <code>JOIN FETCH</code> 2+ collections kiểu <code>List</code> (bag) cùng lúc → Hibernate không thể tạo Cartesian product hợp lệ. Fix: (1) Đổi <code>List</code> thành <code>Set</code> (no bag semantics). (2) Tách thành nhiều queries — fetch 1 collection mỗi query (Hibernate cache entity nên query 2 chỉ thêm collection). (3) Dùng <code>@BatchSize</code> thay vì fetch. (4) <code>default_batch_fetch_size</code> global config.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#547 Number of Provinces</div><div class="bc-hint">Medium — graph/DFS</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng Copilot để generate test data cho N+1 demo.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Vlad Mihalcea blog "N+1 query problem".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w5-day-2">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">09/06 — Thứ 3</div>
        <div class="day-topic">Entity Relationships nâng cao</div>
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
      <div class="en-content">
        <p><strong>Câu shadowing:</strong> "Cascade operations propagate from the parent entity to its children", "Orphan removal deletes children that are no longer referenced", "The owning side of the relationship holds the foreign key".</p>
        <p><strong>Vocalmax:</strong> cascade, orphan, bidirectional, owning side, inverse side, mapped by, join table, referential integrity.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Bidirectional relationships</div>
          <div class="theory-body"><code>@OneToMany(mappedBy="student")</code> ở parent (inverse side), <code>@ManyToOne @JoinColumn</code> ở child (owning side — holds FK). <code>mappedBy</code> chỉ ra ai owning. Phải sync cả 2 side trong helper methods (<code>addEnrollment</code>/<code>removeEnrollment</code>) để tránh inconsistent state.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Cascade types</div>
          <div class="theory-body"><code>CascadeType.PERSIST</code> (save parent → save children), <code>MERGE</code>, <code>REMOVE</code> (delete parent → delete children), <code>ALL</code> (tất cả). Cẩn thận <code>REMOVE</code>/<code>ALL</code> — có thể xóa nhầm data. Thường dùng cho composition (parent sở hữu children hoàn toàn).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">orphanRemoval</div>
          <div class="theory-body"><code>@OneToMany(orphanRemoval=true)</code>: khi child bị remove khỏi collection của parent → child bị DELETE khỏi DB. Khác <code>CascadeType.REMOVE</code> (chỉ trigger khi parent bị xóa). orphanRemoval phù hợp parent-child lifecycle gắn chặt (Order → OrderLine).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Fetch strategy mặc định</div>
          <div class="theory-body"><code>@ManyToOne</code>/<code>@OneToOne</code>: EAGER mặc định (thường nên đổi LAZY). <code>@OneToMany</code>/<code>@ManyToMany</code>: LAZY mặc định (giữ nguyên). Best practice: TẤT CẢ associations để LAZY, fetch explicitly khi cần. <code>@ManyToOne(fetch = FetchType.LAZY)</code>.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@Entity
public class Student {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Inverse side — mappedBy points to field in Enrollment
    @OneToMany(mappedBy = "student",
               cascade = CascadeType.ALL,
               orphanRemoval = true,
               fetch = FetchType.LAZY)
    private List&lt;Enrollment&gt; enrollments = new ArrayList&lt;&gt;();

    // Helper — keep both sides in sync
    public void addEnrollment(Enrollment e) {
        enrollments.add(e);
        e.setStudent(this);
    }
    public void removeEnrollment(Enrollment e) {
        enrollments.remove(e);
        e.setStudent(null); // orphanRemoval → DELETE
    }
}

@Entity
public class Enrollment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Owning side — holds the FK column
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Tạo bidirectional Student ↔ Enrollment với helper methods sync cả 2 side.</li>
        <li>Test <code>CascadeType.ALL</code>: save Student có enrollments → verify enrollments tự được persist.</li>
        <li>Test <code>orphanRemoval</code>: remove 1 enrollment khỏi list → save → verify bị DELETE khỏi DB.</li>
        <li>Đổi <code>@ManyToOne</code> từ EAGER (default) sang LAZY, verify qua SQL log.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Owning side vs inverse side trong bidirectional relationship?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Owning side: holds foreign key, có <code>@JoinColumn</code>, là <code>@ManyToOne</code> side (thường). Inverse side: dùng <code>mappedBy</code>, không có FK column. Hibernate CHỈ nhìn owning side để persist relationship — update inverse side không có tác dụng nếu owning side không set.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">mappedBy dùng để làm gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Chỉ định field nào ở phía bên kia "sở hữu" relationship (owning side). <code>@OneToMany(mappedBy="student")</code> nghĩa là Enrollment.student là owning side. Tránh tạo extra join table — nếu thiếu mappedBy ở @OneToMany, Hibernate tạo join table thay vì dùng FK.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">CascadeType.REMOVE vs orphanRemoval=true khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>REMOVE</code>: child bị xóa CHỈ khi parent bị xóa (<code>em.remove(parent)</code>). <code>orphanRemoval</code>: child bị xóa khi nó bị tách khỏi parent's collection (<code>parent.getChildren().remove(child)</code>) HOẶC khi parent bị xóa. orphanRemoval mạnh hơn — phù hợp khi child không thể tồn tại độc lập.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao phải sync cả 2 side của bidirectional relationship?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Vì in-memory object graph và DB state phải consistent. Nếu chỉ set 1 side, persistence context có thể có stale data → bugs khi đọc lại trong cùng transaction. Hibernate persist dựa trên owning side, nhưng inverse side cần đúng để code logic + lazy loading hoạt động. Helper methods (<code>addX</code>/<code>removeX</code>) là best practice.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao nên tránh CascadeType.ALL + @ManyToMany?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>@ManyToMany</code> thường share entities (Student-Course: nhiều students học cùng course). <code>REMOVE</code> cascade → xóa 1 student có thể xóa luôn courses → ảnh hưởng students khác. Best practice: @ManyToMany chỉ cascade PERSIST/MERGE, không bao giờ REMOVE. Thậm chí nên dùng explicit join entity (Enrollment) thay @ManyToMany.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">EAGER fetching gây vấn đề gì trong production?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) N+1 ngầm: EAGER @ManyToOne load mỗi entity kéo theo association. (2) Cartesian product khi nhiều EAGER collections. (3) Không thể override sang LAZY tại query level (LAZY thì override sang EAGER được qua JOIN FETCH). (4) Load thừa data không cần. Rule vàng: TẤT CẢ LAZY, fetch khi cần. EAGER là quyết định global không thể undo per-query.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How do you model a many-to-many relationship with extra attributes in JPA?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I avoid <code>@ManyToMany</code> when there are join attributes. Instead I create an explicit join entity — for example, <code>Enrollment</code> between <code>Student</code> and <code>Course</code> with extra fields like <code>enrollmentDate</code> and <code>grade</code>. The join entity has two <code>@ManyToOne</code> relationships. This gives full control over the relationship, lets me add columns, query the association directly, and avoid the cascade pitfalls of <code>@ManyToMany</code>."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#207 Course Schedule</div><div class="bc-hint">Medium — topological sort</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">ChatGPT để review entity design.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Baeldung "JPA Cascade Types" + Vlad Mihalcea "owning side".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w5-day-3">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">10/06 — Thứ 4</div>
        <div class="day-topic">JPA Performance: BatchSize, DTO Projection, Specification</div>
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
      <div class="en-content">
        <p><strong>Câu:</strong> "Projections fetch only the columns you need", "The Specification API builds dynamic queries at runtime", "Batch fetching reduces the number of round trips".</p>
        <p><strong>Vocalmax:</strong> projection, specification, criteria, predicate, batch size, interface-based, class-based, dynamic query.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">@BatchSize</div>
          <div class="theory-body"><code>@BatchSize(size=20)</code> trên collection/entity: thay vì N queries riêng lẻ cho lazy load, Hibernate gom thành batch (IN clause). 100 students với batch 20 → 5 queries thay vì 100. Global: <code>hibernate.default_batch_fetch_size=20</code>. Giảm N+1 mà không cần JOIN.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">DTO Projection</div>
          <div class="theory-body">Chỉ select columns cần thiết, không load full entity. Interface-based: <code>interface StudentView { String getName(); Double getGpa(); }</code> → Spring auto-implement. Class-based (JPQL constructor): <code>SELECT new com.app.StudentDto(s.name, s.gpa) FROM Student s</code>. Nhanh hơn vì ít data + không cần persistence context.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Specification API</div>
          <div class="theory-body">Build dynamic queries type-safe. <code>Repository extends JpaSpecificationExecutor&lt;Student&gt;</code>. <code>Specification&lt;Student&gt; spec = (root, query, cb) -&gt; cb.equal(root.get("faculty"), faculty)</code>. Combine: <code>spec.and(other)</code>, <code>spec.or(other)</code>. Phù hợp filter động (search form với nhiều optional criteria).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Criteria API vs JPQL vs Native</div>
          <div class="theory-body">JPQL: string-based, dễ đọc, type-unsafe. Criteria/Specification: type-safe, verbose, dynamic. Native SQL: DB-specific features, raw performance. Chọn: JPQL cho static queries, Specification cho dynamic filters, Native cho complex reports/DB features.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// 1. Interface-based projection
public interface StudentSummary {
    String getName();
    Double getGpa();
    String getCourseName(); // nested: course.name via getCourse().getName()
}

public interface StudentRepository extends JpaRepository&lt;Student, Long&gt;,
                                            JpaSpecificationExecutor&lt;Student&gt; {
    List&lt;StudentSummary&gt; findByFaculty(Faculty faculty); // returns projection

    // 2. Class-based DTO projection via JPQL constructor
    @Query("SELECT new com.app.dto.StudentDto(s.name, s.gpa) FROM Student s WHERE s.gpa &gt; :min")
    List&lt;StudentDto&gt; findTopStudents(@Param("min") Double min);
}

// 3. Specification — dynamic query
public class StudentSpecs {
    public static Specification&lt;Student&gt; hasFaculty(Faculty f) {
        return (root, query, cb) -&gt; f == null ? null : cb.equal(root.get("faculty"), f);
    }
    public static Specification&lt;Student&gt; gpaAtLeast(Double min) {
        return (root, query, cb) -&gt; min == null ? null : cb.greaterThanOrEqualTo(root.get("gpa"), min);
    }
}
// Usage: combine dynamically
// Specification&lt;Student&gt; spec = Specification.where(hasFaculty(cs)).and(gpaAtLeast(3.0));
// List&lt;Student&gt; result = repo.findAll(spec);</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Tạo interface-based projection <code>StudentSummary</code>, verify SQL chỉ SELECT các columns cần.</li>
        <li>Viết class-based DTO projection qua JPQL constructor expression.</li>
        <li>Implement Specification cho search form: filter theo faculty + minGpa + name (tất cả optional).</li>
        <li>Thêm <code>@BatchSize(size=10)</code> vào collection, đo số queries giảm.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">DTO projection nhanh hơn load full entity vì sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) SELECT ít columns hơn → ít data truyền qua network. (2) Không cần persistence context tracking (no dirty checking, no snapshot). (3) Read-only nên Hibernate skip overhead quản lý entity state. Phù hợp cho list/report views chỉ đọc.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Interface-based vs class-based projection khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Interface-based: định nghĩa interface với getters, Spring Data tự proxy implement — clean, ít code. Class-based: dùng JPQL <code>SELECT new com.app.Dto(...)</code> constructor — explicit, control rõ. Interface tốt cho derived queries, class-based cho @Query phức tạp.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Specification API giải quyết vấn đề gì mà derived query không?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Dynamic queries: search form với 5 optional filters → derived query cần 2^5 = 32 methods. Specification build query runtime dựa trên filters nào có giá trị. Type-safe (metamodel), composable (and/or), reusable. Phù hợp advanced search, admin filters.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">@BatchSize hoạt động thế nào dưới SQL?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Thay vì <code>SELECT * FROM course WHERE id = ?</code> lặp N lần, Hibernate gom IDs cần load và phát <code>SELECT * FROM course WHERE id IN (?, ?, ..., ?)</code> theo nhóm <code>size</code>. 100 lazy associations với <code>@BatchSize(20)</code> → 5 queries. Giảm round trips mà giữ lazy semantics (không over-fetch như EAGER).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Khi nào dùng Native Query thay JPQL?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) DB-specific features: PostgreSQL JSONB, window functions, CTE. (2) Complex queries JPQL không express được. (3) Performance-critical cần optimize SQL thủ công. (4) Bulk operations. Đánh đổi: mất portability, mất type-checking entity. Dùng <code>@Query(nativeQuery=true)</code> + <code>@SqlResultSetMapping</code> cho mapping kết quả.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Projection có gây N+1 khi access nested association không?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Có thể. Interface projection với nested property (<code>getCourse().getName()</code>) — nếu Spring resolve qua entity proxy thì lazy load gây N+1. Closed projection (chỉ expose properties map trực tiếp tới columns) → Spring optimize thành single query với chỉ cột cần. Open projection (dùng <code>@Value</code> SpEL) → load full entity → mất lợi ích. Rule: dùng closed projection cho performance.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How would you optimize a JPA report endpoint that's slow?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"First I'd profile with SQL logging to see actual queries. If it's N+1, I'd use JOIN FETCH, @EntityGraph, or @BatchSize. If we're loading full entities for a read-only list, I'd switch to a closed interface projection or a class-based DTO to fetch only needed columns — this avoids persistence context overhead. For complex aggregations I'd consider a native query. I'd also verify pagination is applied at the DB level, not in memory, and add appropriate indexes on filter and join columns."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#973 K Closest Points to Origin</div><div class="bc-hint">Medium — heap</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI generate Specification predicates.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring Data JPA docs "Projections" + Baeldung "JPA Criteria Queries".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w5-day-4">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">11/06 — Thứ 5</div>
        <div class="day-topic">Redis Cache</div>
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
      <div class="en-content">
        <p><strong>Câu:</strong> "Caching reduces database load by storing frequently accessed data in memory", "The cache is evicted when the underlying data changes", "Redis is an in-memory key-value store".</p>
        <p><strong>Vocalmax:</strong> cache, evict, time to live, in-memory, key-value, serialize, hit rate, miss, invalidation, distributed.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Caching cơ bản + Redis</div>
          <div class="theory-body">Cache: lưu kết quả expensive operation để tái dùng → giảm DB load + latency. Redis: in-memory key-value store, hỗ trợ distributed cache (nhiều app instances share). Spring Boot: <code>spring-boot-starter-data-redis</code> + <code>spring-boot-starter-cache</code>. Config: <code>spring.data.redis.host/port</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">@Cacheable</div>
          <div class="theory-body"><code>@Cacheable("students")</code> trên method: lần đầu chạy method + lưu kết quả vào cache key. Lần sau cùng key → trả từ cache, không chạy method. Key mặc định = params. Custom: <code>@Cacheable(value="students", key="#id")</code>. <code>condition</code>/<code>unless</code> để control khi nào cache.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">@CacheEvict + @CachePut</div>
          <div class="theory-body"><code>@CacheEvict("students", key="#id")</code>: xóa entry khi update/delete (invalidation). <code>@CacheEvict(allEntries=true)</code>: clear toàn bộ cache. <code>@CachePut</code>: luôn chạy method VÀ update cache (cho update operations). <code>@Caching</code> để combine nhiều cache annotations.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">TTL + cache strategies</div>
          <div class="theory-body">TTL (time-to-live): entry tự expire sau thời gian → tránh stale data. Config qua <code>RedisCacheConfiguration.entryTtl(Duration.ofMinutes(10))</code>. Strategies: Cache-Aside (phổ biến, app quản lý), Write-Through, Write-Behind. Cẩn thận: cache invalidation là "one of the two hard things in CS".</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@Configuration
@EnableCaching
public class RedisCacheConfig {
    @Bean
    public RedisCacheConfiguration cacheConfiguration() {
        return RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))
            .disableCachingNullValues()
            .serializeValuesWith(SerializationPair.fromSerializer(
                new GenericJackson2JsonRedisSerializer()));
    }
}

@Service
public class StudentService {
    private final StudentRepository repo;

    @Cacheable(value = "students", key = "#id")
    public StudentDto findById(Long id) {
        // chỉ chạy khi cache miss
        return repo.findById(id).map(mapper::toDto)
            .orElseThrow(() -&gt; new StudentNotFoundException(id));
    }

    @CachePut(value = "students", key = "#result.id")
    public StudentDto update(Long id, UpdateRequest req) {
        Student s = repo.findById(id).orElseThrow();
        s.update(req);
        return mapper.toDto(repo.save(s)); // update cache với fresh data
    }

    @CacheEvict(value = "students", key = "#id")
    public void delete(Long id) {
        repo.deleteById(id); // remove khỏi cache
    }

    @CacheEvict(value = "students", allEntries = true)
    public void clearCache() { /* clear all */ }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Setup Redis (Docker: <code>docker run -p 6379:6379 redis</code>), config Spring connect.</li>
        <li>Thêm <code>@Cacheable</code> vào <code>findById</code>, verify lần 2 không hit DB (xem SQL log).</li>
        <li>Thêm <code>@CacheEvict</code> vào <code>update</code>/<code>delete</code>, verify cache invalidate đúng.</li>
        <li>Config TTL 30s, verify entry expire sau 30s (cache miss → query lại DB).</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Cache giải quyết vấn đề gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Giảm latency (memory nhanh hơn DB/network nhiều lần) và giảm load lên DB (ít queries hơn). Phù hợp data đọc nhiều, ghi ít, ít thay đổi (reference data, user profiles, computed results). Đánh đổi: stale data + memory cost + complexity quản lý invalidation.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@Cacheable vs @CachePut khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>@Cacheable</code>: nếu cache có key → trả từ cache, KHÔNG chạy method (skip execution). <code>@CachePut</code>: LUÔN chạy method rồi update cache với kết quả. Dùng <code>@Cacheable</code> cho read, <code>@CachePut</code> cho update (đảm bảo cache có data mới nhất sau khi save).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao local cache (Caffeine) không đủ cho multi-instance app?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Mỗi app instance có local cache riêng → inconsistent: instance A update DB + evict local cache, instance B vẫn serve stale data từ local cache của nó. Distributed cache (Redis) shared giữa instances → 1 nơi invalidate, tất cả thấy. Hybrid: L1 local (Caffeine) + L2 distributed (Redis) cho cả tốc độ và consistency.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Cache-Aside pattern hoạt động thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">App đọc: check cache → hit thì trả, miss thì query DB + populate cache. App ghi: update DB → invalidate (evict) cache entry. Lần đọc sau sẽ re-populate. App tự quản lý cache (lazy loading). Phổ biến nhất, chính là <code>@Cacheable</code> + <code>@CacheEvict</code> của Spring.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao cần TTL ngay cả khi đã có @CacheEvict?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@CacheEvict chỉ invalidate khi update qua app. Nhưng data có thể thay đổi ngoài app (DB migration, another service, manual fix), hoặc evict logic có bug. TTL là safety net — đảm bảo stale data tự biến mất sau X phút. Không có TTL + miss 1 evict = stale vĩnh viễn.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Cache stampede (thundering herd) là gì? Cách phòng?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi 1 hot key expire, nhiều requests đồng thời cache miss → tất cả cùng query DB → DB quá tải. Phòng: (1) Lock/mutex — chỉ 1 request rebuild cache, còn lại chờ. (2) Probabilistic early expiration — refresh trước khi expire. (3) Stale-while-revalidate — serve stale + refresh background. Redisson/Caffeine có built-in <code>refreshAfterWrite</code>.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How do you decide what to cache and handle cache invalidation?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I cache data that's read-heavy, expensive to compute, and changes infrequently — like user profiles, product catalogs, or aggregated reports. I avoid caching highly volatile or user-specific transactional data. For invalidation I use the cache-aside pattern: evict on writes via <code>@CacheEvict</code>, plus a TTL as a safety net for changes that bypass the application. For distributed systems I use Redis so all instances share one source of truth, and I monitor cache hit rate to tune TTLs."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#146 LRU Cache</div><div class="bc-hint">Medium — chính là cache!</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI giải thích cache hit rate metrics.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring "Cache Abstraction" docs + Redis docs.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w5-day-5">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">12/06 — Thứ 6</div>
        <div class="day-topic">Spring AI Setup</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Vocalmax + Parroto · 15 phút</span></div>
      <div class="en-content">
        <p><strong>Vocalmax 10 từ:</strong> prompt, completion, token, model, inference, chat client, embedding, temperature, system message, fluent API.</p>
        <p><strong>Parroto shadow:</strong> "Spring AI provides a unified API for interacting with large language models."</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Spring AI là gì</div>
          <div class="theory-body">Framework Spring để tích hợp LLMs (OpenAI, Anthropic, Ollama, Azure) với API thống nhất. Tránh vendor lock-in: đổi model provider chỉ cần đổi config + dependency. Abstractions: <code>ChatClient</code>, <code>ChatModel</code>, <code>EmbeddingModel</code>. Lấy cảm hứng từ Spring's template pattern (như JdbcTemplate).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Dependencies + config</div>
          <div class="theory-body">Thêm <code>spring-ai-openai-spring-boot-starter</code> (hoặc <code>ollama</code>). Config: <code>spring.ai.openai.api-key=${OPENAI_API_KEY}</code>, <code>spring.ai.openai.chat.options.model=gpt-4o</code>, <code>temperature</code>. Ollama (local, free): <code>spring.ai.ollama.base-url=http://localhost:11434</code>, chạy model local không cần API key.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">ChatClient (fluent API)</div>
          <div class="theory-body">High-level fluent API: <code>chatClient.prompt().user("...").call().content()</code>. Auto-inject <code>ChatClient.Builder</code>. Hỗ trợ system message, user message, options. <code>.call()</code> synchronous, <code>.stream()</code> reactive (Flux). Khuyên dùng ChatClient hơn ChatModel raw.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">ChatModel (low-level)</div>
          <div class="theory-body"><code>ChatModel</code> là abstraction cấp thấp hơn: <code>chatModel.call(new Prompt("..."))</code> → <code>ChatResponse</code>. ChatClient build trên ChatModel. Dùng ChatModel khi cần control chi tiết Prompt/messages. API key bảo mật qua env var, KHÔNG hardcode.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// build.gradle / pom.xml:
// implementation 'org.springframework.ai:spring-ai-openai-spring-boot-starter'

// application.yml:
// spring:
//   ai:
//     openai:
//       api-key: ${OPENAI_API_KEY}
//       chat:
//         options:
//           model: gpt-4o
//           temperature: 0.7

@RestController
@RequestMapping("/api/ai")
public class AiController {

    private final ChatClient chatClient;

    // ChatClient.Builder auto-configured by Spring AI
    public AiController(ChatClient.Builder builder) {
        this.chatClient = builder
            .defaultSystem("You are a helpful academic advisor.")
            .build();
    }

    @GetMapping("/ask")
    public String ask(@RequestParam String question) {
        return chatClient.prompt()
            .user(question)
            .call()
            .content(); // returns the LLM text response
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Thêm Spring AI dependency, config OpenAI API key qua env var (HOẶC Ollama local nếu không có key).</li>
        <li>Tạo <code>AiController</code> với endpoint <code>/ask?question=...</code> trả về câu trả lời từ LLM.</li>
        <li>Set <code>defaultSystem(...)</code> để định hình persona, test sự khác biệt trong response.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Spring AI giải quyết vấn đề gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Cung cấp API thống nhất để tích hợp các LLM khác nhau (OpenAI, Anthropic, Ollama...) vào Spring app. Tránh vendor lock-in — đổi provider chỉ cần đổi dependency + config, code business giữ nguyên. Tích hợp tự nhiên với Spring DI, auto-configuration.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">ChatClient vs ChatModel khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>ChatClient</code>: fluent high-level API (<code>.prompt().user().call().content()</code>), tiện cho hầu hết use cases, hỗ trợ default system message. <code>ChatModel</code>: low-level (<code>call(Prompt)</code> → <code>ChatResponse</code>), control chi tiết hơn. ChatClient được build trên ChatModel. Khuyên dùng ChatClient mặc định.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao không hardcode API key trong code?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) Security: code thường push lên Git → key lộ → bị abuse + tốn tiền. (2) Flexibility: mỗi environment (dev/prod) key khác nhau. Dùng env var (<code>${OPENAI_API_KEY}</code>), secrets manager (Vault, AWS Secrets), hoặc external config. Spring resolve <code>${...}</code> từ environment.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">temperature trong LLM config ảnh hưởng gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Temperature (0-2) control randomness/creativity. Thấp (0-0.3): deterministic, focused, phù hợp factual/code tasks. Cao (0.7-1.0+): creative, varied, phù hợp brainstorm/writing. Cho academic advisor/factual app → temperature thấp để answer consistent và chính xác.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Ollama (local) vs OpenAI (cloud) — trade-offs khi nào dùng?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Ollama: chạy model local, miễn phí, data không rời máy (privacy), no API limits, nhưng cần GPU mạnh + model nhỏ hơn = chất lượng thấp hơn + latency tùy hardware. OpenAI: chất lượng cao nhất, không cần hardware, nhưng tốn tiền per token, data gửi lên cloud, rate limits. Dev/learning/privacy → Ollama; production quality → OpenAI/managed. Spring AI cho phép đổi dễ dàng.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#1768 Merge Strings Alternately</div><div class="bc-hint">Easy — string</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Chính Spring AI là AI tool hôm nay! Thử ChatClient.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring AI reference docs (docs.spring.io/spring-ai).</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w5-day-6">
  <div class="day-header" style="background:#C0392B">
    <div class="day-header-left">
      <span class="day-icon">🔥</span>
      <div>
        <div class="day-date">13/06 — Thứ 7</div>
        <div class="day-topic">Spring AI deep: PromptTemplate, messages, caching AI</div>
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
      <div class="en-content">
        <p>Nghe + shadow "Building AI applications with Spring" 30 phút, practice câu phỏng vấn EN về LLM integration. Vocalmax review 20 từ AI/Spring khó nhất tuần.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">PromptTemplate</div>
          <div class="theory-body">Template với placeholders: <code>new PromptTemplate("Tell me about {topic}")</code>. <code>.create(Map.of("topic", "JPA"))</code> → render prompt. Tách prompt khỏi code, reusable, dễ A/B test prompts. Spring AI: load template từ file resource (<code>.st</code> files) cho prompt phức tạp.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">System vs User messages</div>
          <div class="theory-body"><code>SystemMessage</code>: định hình behavior/persona/rules ("You are an academic advisor, answer concisely"). <code>UserMessage</code>: input thực tế từ user. <code>AssistantMessage</code>: previous AI responses (cho conversation history/context). Thứ tự messages tạo conversation context.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">ChatClient nâng cao</div>
          <div class="theory-body"><code>.system(s -&gt; s.text("...").param(...))</code>, <code>.user(...)</code>, <code>.options(ChatOptions)</code>. Structured output: <code>.entity(StudentAdvice.class)</code> → auto parse JSON response thành Java object. Advisors (interceptors): logging, chat memory, RAG context injection.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Caching AI responses</div>
          <div class="theory-body">LLM calls đắt (tiền + latency 1-5s). Cache responses cho identical prompts với <code>@Cacheable</code> (key = prompt hash). Kết hợp Redis từ ngày 4. Cẩn thận: chỉ cache khi prompt deterministic (temperature thấp) và câu hỏi lặp lại (FAQ-style). Giảm cost đáng kể.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Block 1 — PromptTemplate + structured output
@Service
public class AdvisorService {
    private final ChatClient chatClient;

    public AdvisorService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    // PromptTemplate với placeholder
    public String adviseForGpa(String name, Double gpa) {
        PromptTemplate template = new PromptTemplate(
            "Student {name} has a GPA of {gpa}. Give one concise study tip.");
        Prompt prompt = template.create(Map.of("name", name, "gpa", gpa));
        return chatClient.prompt(prompt).call().content();
    }

    // Structured output — auto parse to Java record
    public StudentAdvice getStructuredAdvice(String name, Double gpa) {
        return chatClient.prompt()
            .system("You are an academic advisor. Respond with advice and a priority level.")
            .user(u -&gt; u.text("Advise student {n} with GPA {g}").param("n", name).param("g", gpa))
            .call()
            .entity(StudentAdvice.class); // JSON → record
    }

    public record StudentAdvice(String advice, String priority, List&lt;String&gt; resources) {}
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Block 2 — Caching AI responses
@Service
public class CachedAiService {
    private final ChatClient chatClient;

    // Cache identical prompts — saves $ and latency
    @Cacheable(value = "ai-responses", key = "#question.hashCode()")
    public String askCached(String question) {
        return chatClient.prompt()
            .user(question)
            .options(OpenAiChatOptions.builder()
                .temperature(0.2) // low temp → deterministic → cacheable
                .build())
            .call()
            .content();
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Tạo <code>PromptTemplate</code> với 2+ placeholders, render và gọi LLM.</li>
        <li>Dùng structured output <code>.entity(Record.class)</code> để parse response thành Java object.</li>
        <li>Set system message định hình persona "academic advisor", so sánh với không có system message.</li>
        <li>Thêm <code>@Cacheable</code> (Redis) cho AI endpoint, verify câu hỏi lặp không gọi lại LLM (check latency + log).</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (8 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">System message khác User message thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">System message: định hình behavior, persona, rules của AI cho toàn conversation ("You are a concise academic advisor"). User message: câu hỏi/input thực tế từ người dùng. System đặt context/constraint, User là nội dung cần xử lý. System thường set 1 lần, User thay đổi mỗi request.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">PromptTemplate có lợi ích gì so với string concatenation?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Tách prompt khỏi logic code, dễ đọc/maintain. Placeholder <code>{var}</code> an toàn hơn nối chuỗi. Reusable across calls. Dễ version + A/B test prompts. Load từ external file cho prompts phức tạp → đổi prompt không cần recompile.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Structured output (.entity()) hoạt động thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Spring AI thêm format instructions vào prompt (yêu cầu LLM trả JSON theo schema của class), rồi parse JSON response thành Java object/record qua Jackson. Cho phép dùng LLM output type-safe trong code thay vì parse string thủ công. Hoạt động tốt với record/POJO có structure rõ ràng.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao caching AI responses quan trọng trong production?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">LLM calls đắt: tiền (per token), latency (1-5s). Nhiều câu hỏi lặp lại (FAQ, common queries). Cache identical prompts → giảm cost lớn + response tức thì cho cache hit. Điều kiện: temperature thấp (deterministic) + prompt giống hệt. Dùng Redis với prompt hash làm key.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Conversation history (chat memory) được handle thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">LLM stateless — mỗi call độc lập. Để có context conversation, gửi previous messages (User + Assistant) trong mỗi request. Spring AI: <code>MessageChatMemoryAdvisor</code> tự lưu + inject history. Đánh đổi: history dài → nhiều tokens → tốn tiền + có thể vượt context window. Cần truncate/summarize history cũ.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Những rủi ro khi tích hợp LLM vào production app?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) Cost runaway — token usage không kiểm soát → bill lớn (cần rate limit + monitor). (2) Latency — LLM chậm, cần async/streaming + timeout. (3) Hallucination — LLM bịa, cần validation/grounding (RAG). (4) Prompt injection — user input độc hại manipulate prompt (sanitize input). (5) Non-determinism — khó test. (6) Vendor downtime — cần fallback/circuit breaker. (7) Data privacy — PII gửi lên cloud.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How would you integrate an LLM into a Spring Boot application reliably?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I'd use Spring AI's ChatClient for a vendor-neutral abstraction. I'd secure the API key in environment variables. To control cost and latency I'd cache deterministic responses in Redis keyed by prompt hash, set low temperature for factual tasks, and add timeouts plus a circuit breaker with Resilience4j for provider outages. For long responses I'd use streaming with Flux. I'd validate and sanitize user input to prevent prompt injection, and monitor token usage and latency as first-class metrics."</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"What's the difference between fine-tuning, prompt engineering, and RAG?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"Prompt engineering means crafting better instructions to get better outputs — cheapest, fastest to iterate. RAG, retrieval-augmented generation, injects relevant external documents into the prompt at runtime so the model answers from your data — great for grounding and reducing hallucination without retraining. Fine-tuning retrains the model weights on your data — most expensive and slowest, used when you need consistent style or domain behavior that prompting can't achieve. In practice I start with prompt engineering, add RAG for knowledge grounding, and only fine-tune as a last resort."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#155 Min Stack</div><div class="bc-hint">Medium — design</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Spring AI structured output + chat memory.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring AI docs "Prompts" + "ChatClient API" + "Chat Memory".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w5-day-7">
  <div class="day-header" style="background:#8E44AD">
    <div class="day-header-left">
      <span class="day-icon">🎯</span>
      <div>
        <div class="day-date">14/06 — CN</div>
        <div class="day-topic">Spaced Review T1-T5 + Mini Project</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">REVIEW</span>
      <span class="day-hours">⏱ 4h (ôn tập + project)</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Mock Interview EN · 30 phút</span></div>
      <div class="en-content">
        <p>Mock interview EN — trả lời 10 câu hỏi tuần 5 to ra tiếng Anh, record 2 câu hay nhất. Luyện STAR method kể 1 câu chuyện về optimize performance.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">N+1 + fetch recap</div>
          <div class="theory-body">N+1 = N children queries sau 1 parent query. Fix: JOIN FETCH (explicit), @EntityGraph (declarative), @BatchSize (IN clause), DTO projection (chỉ cột cần). Tất cả associations để LAZY mặc định.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Relationships recap</div>
          <div class="theory-body">Owning side (FK, @JoinColumn) vs inverse side (mappedBy). Cascade (PERSIST/REMOVE/ALL), orphanRemoval. Sync cả 2 side qua helper methods. Tránh @ManyToMany REMOVE cascade.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Redis cache recap</div>
          <div class="theory-body"><code>@Cacheable</code> (read, skip nếu hit), <code>@CachePut</code> (luôn update), <code>@CacheEvict</code> (invalidate). TTL safety net. Cache-aside pattern. Distributed cache cho multi-instance. Cache stampede phòng bằng lock/early refresh.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Spring AI recap</div>
          <div class="theory-body">ChatClient fluent API, system/user messages, PromptTemplate placeholders, structured output <code>.entity()</code>, cache AI responses (cost + latency). API key qua env var. Temperature control determinism.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Mini Project: Cached AI-powered Student Advisor API</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@RestController
@RequestMapping("/api/v1/advisor")
public class StudentAdvisorController {

    private final StudentService studentService;
    private final AdvisorService advisorService;

    public StudentAdvisorController(StudentService s, AdvisorService a) {
        this.studentService = s;
        this.advisorService = a;
    }

    // Combines: JPA (optimized fetch) + Redis cache + Spring AI
    @GetMapping("/{studentId}")
    public StudentAdvice advise(@PathVariable Long studentId) {
        // 1. Fetch student with @EntityGraph (no N+1)
        StudentDto student = studentService.findByIdWithCourse(studentId);
        // 2. Get AI advice (cached in Redis by student profile)
        return advisorService.getStructuredAdvice(student.name(), student.gpa());
    }
}

@Service
public class AdvisorService {
    private final ChatClient chatClient;
    public AdvisorService(ChatClient.Builder b) { this.chatClient = b.build(); }

    @Cacheable(value = "advice", key = "#name + '_' + #gpa")
    public StudentAdvice getStructuredAdvice(String name, Double gpa) {
        return chatClient.prompt()
            .system("You are an academic advisor. Give concise, actionable advice.")
            .user(u -&gt; u.text("Advise {n} with GPA {g}").param("n", name).param("g", gpa))
            .options(OpenAiChatOptions.builder().temperature(0.3).build())
            .call()
            .entity(StudentAdvice.class);
    }

    public record StudentAdvice(String advice, String priority, List&lt;String&gt; resources) {}
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Complete Student Advisor API: kết hợp JPA optimized fetch (@EntityGraph) + Redis cache + Spring AI structured output. Test full flow.</li>
        <li>Verify: gọi advise cho cùng student 2 lần → lần 2 không gọi LLM (cache hit), check latency giảm.</li>
        <li>Push GitHub với README EN: architecture diagram (text), tech stack (Spring Boot + JPA + Redis + Spring AI), setup + API docs.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (10 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">4 cách fix N+1 problem?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) JOIN FETCH trong JPQL — explicit, 1 query. (2) @EntityGraph — declarative trên repository method. (3) @BatchSize — gom lazy loads thành IN clause. (4) DTO projection — chỉ select columns cần, không load full entity.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Owning side trong JPA relationship là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Phía giữ foreign key, có <code>@JoinColumn</code>, thường là <code>@ManyToOne</code> side. Hibernate chỉ nhìn owning side để persist relationship. Inverse side dùng <code>mappedBy</code> và không quản lý FK. Update chỉ inverse side không persist nếu owning side chưa set.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@Cacheable vs @CacheEvict?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>@Cacheable</code>: lưu kết quả method vào cache, lần sau cùng key trả từ cache (skip method). <code>@CacheEvict</code>: xóa entry khỏi cache (gọi khi update/delete để invalidate stale data). Cặp đôi tạo cache-aside pattern.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Khi nào @EntityGraph tốt hơn JOIN FETCH?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@EntityGraph: declarative, reusable trên derived queries (không cần viết JPQL), clean. Dùng khi muốn override fetch cho query cụ thể mà không viết custom query. JOIN FETCH: khi cần control chính xác query, có WHERE/filtering phức tạp, hoặc fetch nhiều levels. EntityGraph dễ đọc hơn cho simple eager loading.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao cache cần TTL ngay cả khi có @CacheEvict?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@CacheEvict chỉ invalidate khi data thay đổi QUA app. Nếu data đổi ngoài app (another service, manual DB update) hoặc evict logic bug → stale vĩnh viễn. TTL là safety net — stale data tự expire sau X phút bất kể. Defense in depth cho cache consistency.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">DTO projection nhanh hơn full entity vì sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Select ít columns (ít data network), không cần persistence context (no dirty checking/snapshot), read-only nên Hibernate skip overhead state management. Closed projection (chỉ map trực tiếp columns) tránh được cả N+1. Lý tưởng cho list/report views.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">MultipleBagFetchException — nguyên nhân và fix?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Xảy ra khi JOIN FETCH 2+ <code>List</code> collections cùng query → Cartesian product không hợp lệ (Hibernate không phân biệt được rows). Fix: (1) Đổi <code>List</code> → <code>Set</code>. (2) Tách thành nhiều queries (Hibernate cache entity, query 2 chỉ thêm collection). (3) Dùng @BatchSize thay fetch. (4) hibernate.default_batch_fetch_size global.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Cache stampede là gì? Cách phòng trong distributed system?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Hot key expire → nhiều concurrent requests cùng miss → tất cả query DB đồng thời → DB overload. Phòng: (1) Distributed lock (Redis SETNX/Redisson) — 1 request rebuild, còn lại chờ. (2) Probabilistic early expiration — refresh trước TTL hết. (3) Stale-while-revalidate — serve stale + async refresh. (4) Caffeine <code>refreshAfterWrite</code>.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Walk me through your Student Advisor API architecture."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"It combines three layers I learned this week. The data layer uses JPA with @EntityGraph to fetch students and their courses in a single query, avoiding N+1. The caching layer uses Redis — AI advice is cached by a key derived from the student's name and GPA, so repeated requests skip the expensive LLM call. The AI layer uses Spring AI's ChatClient with a system message defining the advisor persona, low temperature for consistency, and structured output that parses the response into a typed record. This gives me a fast, cost-efficient, type-safe endpoint."</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How do you balance performance and data freshness when caching?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"It's a trade-off driven by the data's volatility and the cost of staleness. For reference data that rarely changes, I use longer TTLs and aggressive caching. For data that changes through my application, I combine event-driven eviction via @CacheEvict on writes with a moderate TTL as a safety net. For data that must be real-time, I don't cache at all. I always monitor cache hit rate and adjust TTLs based on actual access patterns rather than guessing upfront."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#347 Top K Frequent Elements</div><div class="bc-hint">Medium — review</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Tổng hợp Spring AI + Redis trong 1 project.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại tất cả docs tuần 5 + Vlad Mihalcea performance blog.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w5-summary">
  <h2 class="section-h2">🎯 Tổng Kết Tuần 5</h2>
  <div class="summary-cols">
    <div>
      <h3 class="sub-h3">📋 Ngân Hàng Câu Hỏi Phỏng Vấn</h3>
      <p class="muted">Ôn lại cuối tuần — trả lời to ra, ghi âm, nghe lại.</p>
      <div class="sq-group">
        <div class="sq-group-title">JPA Performance</div>
        <div class="sq-item">
          <div class="sq-q">"What is the N+1 query problem?"</div>
          <div class="sq-a">Loading N entities triggers N additional queries when accessing a lazy association in a loop, totaling N+1 queries. Fix with JOIN FETCH, @EntityGraph, @BatchSize, or DTO projection.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"JOIN FETCH vs @EntityGraph?"</div>
          <div class="sq-a">JOIN FETCH is explicit JPQL giving precise control for complex queries. @EntityGraph is declarative on repository methods, reusable on derived queries without writing JPQL. Both solve N+1 by eager-loading associations.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Why use DTO projection?"</div>
          <div class="sq-a">Selects only needed columns, skips persistence context overhead (no dirty checking), read-only and faster. Closed interface projections avoid N+1 entirely. Ideal for list and report views.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Redis Caching</div>
        <div class="sq-item">
          <div class="sq-q">"Explain the cache-aside pattern."</div>
          <div class="sq-a">On read, check cache first — return on hit, query DB and populate on miss. On write, update DB and evict the cache entry. The application manages the cache lazily. This is exactly Spring's @Cacheable + @CacheEvict.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Why does a multi-instance app need distributed cache?"</div>
          <div class="sq-a">Each instance has its own local cache, so one instance evicting won't update others, causing stale reads. Redis is shared across all instances — one source of truth. Hybrid L1 (local) + L2 (Redis) gives speed plus consistency.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"What is cache stampede and how to prevent it?"</div>
          <div class="sq-a">When a hot key expires, many concurrent requests miss simultaneously and overload the DB. Prevent with a distributed lock so only one request rebuilds, probabilistic early expiration, or stale-while-revalidate.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Spring AI</div>
        <div class="sq-item">
          <div class="sq-q">"ChatClient vs ChatModel?"</div>
          <div class="sq-a">ChatClient is a high-level fluent API (.prompt().user().call().content()) for most use cases with default system messages. ChatModel is lower-level (call(Prompt) returns ChatResponse) for fine control. ChatClient is built on ChatModel and is recommended.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Why cache LLM responses?"</div>
          <div class="sq-a">LLM calls are expensive in money (per token) and latency (1-5s). Caching identical deterministic prompts (low temperature) in Redis keyed by prompt hash drastically cuts cost and gives instant responses for repeated questions.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Prompt engineering vs RAG vs fine-tuning?"</div>
          <div class="sq-a">Prompt engineering crafts better instructions — cheapest. RAG injects relevant external documents at runtime to ground answers and reduce hallucination without retraining. Fine-tuning retrains model weights — most expensive. Start with prompting, add RAG, fine-tune last.</div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sub-h3">✅ Checklist Cuối Tuần</h3>
      <div class="checklist" data-week="5">
        <label class="check-item"><input type="checkbox" data-idx="1"><span>Tái hiện được N+1 problem và fix bằng cả 3 cách: JOIN FETCH, @EntityGraph, @BatchSize</span></label>
        <label class="check-item"><input type="checkbox" data-idx="2"><span>Hiểu owning vs inverse side, viết bidirectional relationship với helper sync methods</span></label>
        <label class="check-item"><input type="checkbox" data-idx="3"><span>Cascade + orphanRemoval: biết khi nào dùng, tránh @ManyToMany REMOVE</span></label>
        <label class="check-item"><input type="checkbox" data-idx="4"><span>DTO projection (interface + class-based) hoạt động, verify SQL chỉ select cột cần</span></label>
        <label class="check-item"><input type="checkbox" data-idx="5"><span>Specification API: build dynamic search query với nhiều optional filters</span></label>
        <label class="check-item"><input type="checkbox" data-idx="6"><span>Redis setup + @Cacheable/@CacheEvict/@CachePut hoạt động, verify cache hit/miss</span></label>
        <label class="check-item"><input type="checkbox" data-idx="7"><span>Hiểu TTL, cache-aside, cache stampede và cách phòng</span></label>
        <label class="check-item"><input type="checkbox" data-idx="8"><span>Spring AI: ChatClient gọi LLM, system message, PromptTemplate, structured output</span></label>
        <label class="check-item"><input type="checkbox" data-idx="9"><span>Cache AI responses bằng Redis — verify giảm cost + latency cho prompt lặp</span></label>
        <label class="check-item"><input type="checkbox" data-idx="10"><span>Mini project Student Advisor API (JPA + Redis + Spring AI) push GitHub, README EN</span></label>
      </div>
      <div class="progress-wrap-outer"><div class="progress-wrap">
        <div class="progress-label">Hoàn thành: <strong class="progress-text">0/10</strong></div>
        <div class="progress-bar-bg"><div class="progress-bar"></div></div>
      </div></div>
      <div class="golden-rule">
        💡 <strong>Golden Rule Tuần 5:</strong> JPA mạnh nhưng N+1 giết performance — luôn nghĩ "query này tạo bao nhiêu round trips?". Cache tăng tốc nhưng invalidation là con dao hai lưỡi — TTL là người bạn tốt. Spring AI mở ra cánh cửa LLM, nhưng token tốn tiền và LLM có thể bịa — cache, validate, và đặt temperature đúng. Performance + cost awareness = dấu hiệu của senior engineer.
      </div>
    </div>
  </div>
</section>

