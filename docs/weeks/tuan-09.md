<div class="week-divider" id="week-9-start">🏗️ Tuần 9 · Microservices + Docker + Concurrency · 06/07–12/07/2025</div>

<section class="day-section" id="w9-overview">
  <h2 class="section-h2">📅 Lịch Học Tuần 9 — Tổng Quan 7 Ngày</h2>
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
        <td>06/07</td>
        <td>Thứ 2</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>Microservices vs Monolith: khái niệm, ưu nhược điểm, khi nào dùng</td>
      </tr>
      <tr>
        <td>07/07</td>
        <td>Thứ 3</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Inter-service communication: REST (RestClient/WebClient/Feign), service discovery</td>
      </tr>
      <tr>
        <td>08/07</td>
        <td>Thứ 4</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Spring Cloud Gateway: routing, filters, load balancing, cross-cutting concerns</td>
      </tr>
      <tr>
        <td>09/07</td>
        <td>Thứ 5</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Resilience: Circuit Breaker (Resilience4j), retry, timeout, fallback, bulkhead</td>
      </tr>
      <tr>
        <td>10/07</td>
        <td>Thứ 6</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>Distributed concurrency: idempotency, distributed lock, eventual consistency</td>
      </tr>
      <tr>
        <td>11/07</td>
        <td>Thứ 7</td>
        <td><span class="mode-dot" style="background:#C0392B"></span>WEEKEND</td>
        <td>4h</td>
        <td>Docker Compose multi-service: gateway + 2 services + Redis + Postgres, networking</td>
      </tr>
      <tr>
        <td>12/07</td>
        <td>CN</td>
        <td><span class="mode-dot" style="background:#8E44AD"></span>REVIEW</td>
        <td>4h</td>
        <td>Spaced Review T1-T9 + Mini Project: 2-service system với Gateway + Circuit Breaker</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="day-section" id="w9-day-1">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">06/07 — Thứ 2</div>
        <div class="day-topic">Microservices vs Monolith: Khái Niệm & Trade-offs</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Mock Interview EN + Vocalmax · 15 phút</span></div>
      <div class="en-content">
        <p><strong>🎯 Bắt đầu phase "Ứng dụng" (T9-T12):</strong> tiếng Anh chuyển sang Mock Interview + STAR method + Business English. Mục tiêu: nói về kiến trúc hệ thống bằng tiếng Anh tự tin.</p>
        <p><strong>Vocalmax — 10 từ vựng (luyện phát âm + đặt câu):</strong></p>
        <ul>
          <li><strong>microservice</strong> /ˈmaɪkroʊˌsɜːrvɪs/ — dịch vụ nhỏ, độc lập, tập trung 1 nghiệp vụ.</li>
          <li><strong>monolith</strong> /ˈmɒnəlɪθ/ — ứng dụng đơn khối, tất cả trong 1 deployable.</li>
          <li><strong>decouple</strong> /diːˈkʌpl/ — tách rời sự phụ thuộc giữa các thành phần.</li>
          <li><strong>bounded context</strong> — ranh giới nghiệp vụ rõ ràng (DDD).</li>
          <li><strong>scalability</strong> /ˌskeɪləˈbɪləti/ — khả năng mở rộng quy mô.</li>
          <li><strong>deployment</strong> /dɪˈplɔɪmənt/ — việc triển khai ứng dụng lên môi trường.</li>
          <li><strong>service boundary</strong> — biên giới giữa các service.</li>
          <li><strong>distributed</strong> /dɪˈstrɪbjutɪd/ — phân tán trên nhiều node/process.</li>
          <li><strong>autonomy</strong> /ɔːˈtɒnəmi/ — tính tự chủ (deploy/own data độc lập).</li>
          <li><strong>resilience</strong> /rɪˈzɪliəns/ — khả năng chịu lỗi, phục hồi.</li>
        </ul>
        <p><strong>🎤 Mock EN (nói to ra, ghi âm):</strong> Trả lời <em>"What are microservices and how do they differ from a monolith?"</em> trong 60–90 giây. Cấu trúc: definition → key benefit → key trade-off → when you'd choose each.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">1. Monolith là gì? Ưu &amp; nhược</div>
          <div class="theory-body">Monolith là một ứng dụng đơn khối: tất cả module (user, order, payment...) chạy trong cùng một process và được deploy như một đơn vị duy nhất. <strong>Ưu:</strong> đơn giản để dev và debug, không có network giữa các module, transaction ACID dễ dàng, deploy chỉ 1 artifact. <strong>Nhược:</strong> khó scale từng phần (phải nhân bản cả app dù chỉ 1 module nóng), tight coupling khiến thay đổi nhỏ phải build/test lại toàn bộ, 1 bug memory leak có thể crash cả app, và bị khóa vào 1 tech stack.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">2. Microservices là gì? Ưu &amp; nhược</div>
          <div class="theory-body">Microservices chia hệ thống thành nhiều service nhỏ, độc lập, mỗi service own một nghiệp vụ và giao tiếp qua mạng (REST/messaging). <strong>Ưu:</strong> independent deployment (deploy 1 service không đụng service khác), scale riêng từng service theo tải, mỗi team chọn tech stack phù hợp, fault isolation (1 service sập không kéo cả hệ thống). <strong>Nhược:</strong> distributed complexity (debug, tracing khó), network latency &amp; failure, data consistency phải xử lý qua eventual consistency, chi phí vận hành (CI/CD, monitoring, infra) tăng mạnh.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">3. Khi nào dùng cái nào?</div>
          <div class="theory-body"><strong>Dùng microservices khi:</strong> team lớn cần làm việc song song không dẫm chân nhau, các phần của hệ thống có nhu cầu scale rất khác nhau, cần independent deploy để release nhanh, domain đã ổn định. <strong>Dùng monolith khi:</strong> team nhỏ, đang làm MVP/startup, domain chưa rõ ràng. Nguyên tắc nổi tiếng của Martin Fowler: <em>"Monolith First"</em> — bắt đầu với monolith well-structured (modular monolith), chỉ tách ra microservices khi thật sự có lý do (pain point cụ thể), vì tách sai bounded context rất tốn kém.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">4. Bounded Context (DDD) &amp; Database per Service</div>
          <div class="theory-body">Bounded Context (từ Domain-Driven Design) là cách chia service theo ranh giới nghiệp vụ chứ không theo tầng kỹ thuật. Ví dụ: "Ordering", "Catalog", "Payment" là các bounded context riêng. Nguyên tắc cốt lõi: <strong>database per service</strong> — mỗi service own data của riêng nó, không service nào được truy cập DB của service khác trực tiếp. Muốn lấy data thì gọi API. Điều này đảm bảo loose coupling và autonomy, nhưng đổi lại là không còn JOIN/transaction xuyên service — phải dùng API composition hoặc saga.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="text"># ============ MONOLITH ============
#  +--------------------------------------------------+
#  |               E-COMMERCE APP (1 JVM)             |
#  |   [User]  [Catalog]  [Order]  [Payment]          |
#  |              \    |     |    /                    |
#  |              +-----------------+                  |
#  |              |  ONE DATABASE   |                  |
#  |              +-----------------+                  |
#  +--------------------------------------------------+
#   Deploy 1 lần | Scale = nhân bản cả app

# ============ MICROSERVICES ============
#                    [API Gateway]
#                         |
#     +----------+--------+--------+-----------+
#     v          v                 v           v
#  user-svc  catalog-svc       order-svc   payment-svc
#     |          |                 |           |
#   [user DB] [catalog DB]     [order DB]  [payment DB]
#   (database per service - giao tiếp qua REST/messaging)
#   Deploy/scale từng service độc lập | fault isolation</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="yaml"># order-service/src/main/resources/application.yml
spring:
  application:
    name: order-service          # tên dùng cho service discovery
  datasource:
    url: jdbc:postgresql://localhost:5432/orderdb   # DB riêng của order
    username: order_user
    password: ${ORDER_DB_PASSWORD}

server:
  port: 8081                     # mỗi service một port riêng

# Mỗi service là 1 deployable artifact độc lập,
# có config + DB riêng, không chia sẻ schema với service khác.</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Vẽ (dạng text/ASCII) kiến trúc một hệ thống e-commerce dưới dạng <strong>monolith</strong>, sau đó vẽ lại dưới dạng <strong>microservices</strong>. Đánh dấu rõ ranh giới service và DB của từng service.</li>
        <li>Cho một app đặt đồ ăn (food delivery), liệt kê <strong>5 services</strong> hợp lý theo bounded context, và ghi rõ <strong>mỗi service own data gì</strong> (ví dụ: restaurant-service own thông tin nhà hàng + menu; order-service own đơn hàng + trạng thái...).</li>
        <li>Nói to ra bằng tiếng Anh (ghi âm 60s): 2 ưu điểm và 2 nhược điểm của microservices, kết thúc bằng "I'd start with a monolith because...". Nghe lại và sửa phát âm.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Microservices khác monolith ở điểm cốt lõi nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Monolith deploy như một đơn vị duy nhất, mọi module chạy chung process và thường dùng chung một database. Microservices chia thành nhiều service nhỏ độc lập, mỗi service deploy/scale riêng, own database của mình và giao tiếp với nhau qua mạng (REST hoặc messaging). Điểm cốt lõi: microservices đánh đổi sự đơn giản trong code lấy tính độc lập trong vận hành — bạn được independent deploy và scale, nhưng phải gánh distributed complexity.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Khi nào nên dùng monolith thay vì microservices?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi team nhỏ, đang làm MVP/startup, domain chưa rõ ràng và chưa có pain point cụ thể về scale hay deploy. Lúc đó monolith đơn giản hơn nhiều: dev nhanh, debug dễ, transaction ACID, không tốn chi phí vận hành phân tán. Theo nguyên tắc "Monolith First" của Martin Fowler, nên bắt đầu với một modular monolith well-structured, rồi mới tách ra khi thực sự gặp giới hạn.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">"Database per service" nghĩa là gì và tại sao quan trọng?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Mỗi microservice own database riêng và không service nào được truy cập trực tiếp DB của service khác — muốn lấy data thì phải gọi API của service đó. Quan trọng vì nó đảm bảo loose coupling và autonomy: service có thể đổi schema, đổi loại DB (SQL/NoSQL) mà không phá vỡ service khác, và scale độc lập. Cái giá phải trả là mất khả năng JOIN xuyên service và transaction ACID xuyên service — phải thay bằng API composition hoặc saga pattern.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Bounded Context là gì và liên quan thế nào tới việc chia service?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Bounded Context là khái niệm từ Domain-Driven Design: một ranh giới rõ ràng trong đó một mô hình nghiệp vụ và ngôn ngữ chung (ubiquitous language) là nhất quán. Khi thiết kế microservices, ta nên chia service theo bounded context — tức theo ranh giới nghiệp vụ (Ordering, Catalog, Payment) chứ không theo tầng kỹ thuật (controller/service/repo). Mỗi bounded context thường tương ứng với một microservice own data của mình. Tách sai bounded context dẫn tới các service "chatty" gọi nhau liên tục, làm mất hết lợi ích của microservices.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Những thách thức distributed nào xuất hiện khi chuyển sang microservices?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Nhiều thách thức: (1) <strong>Network failure &amp; latency</strong> — mỗi lời gọi giờ qua mạng, có thể fail/chậm, cần circuit breaker, retry, timeout. (2) <strong>Data consistency</strong> — không còn transaction ACID xuyên service, phải chấp nhận eventual consistency và dùng saga + compensating actions. (3) <strong>Distributed tracing &amp; debugging</strong> — một request đi qua nhiều service nên cần correlation ID, tracing (Zipkin/Jaeger), centralized logging. (4) <strong>Operational overhead</strong> — CI/CD, service discovery, monitoring, configuration management cho hàng chục service. (5) <strong>Testing</strong> — integration/contract testing phức tạp hơn nhiều. Vì vậy microservices chỉ đáng khi lợi ích về scale/deploy/team lớn hơn các chi phí này.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#1768 Merge Strings Alternately (Easy)</div><div class="bc-hint">Dùng 2 con trỏ, xen kẽ ký tự từ word1 và word2; khi 1 chuỗi hết thì nối phần còn lại của chuỗi kia. Warm-up nhẹ cho ngày LIGHT.</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Hỏi ChatGPT/Claude: <em>"Critique my microservices decomposition for a food delivery app — am I splitting by bounded context or by technical layer?"</em> Yêu cầu AI chỉ ra các service "chatty" tiềm ẩn.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">microservices.io (Chris Richardson — patterns) · Martin Fowler "Microservices" &amp; "MonolithFirst" (martinfowler.com) · Sách "Building Microservices" (Sam Newman).</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w9-day-2">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">07/07 — Thứ 3</div>
        <div class="day-topic">Inter-service Communication: REST Clients & Service Discovery</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">⏱ 30 phút sáng + 2h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Mock Interview EN · 20 phút</span></div>
      <div class="en-content">
        <p><strong>Vocab (communication):</strong> synchronous, asynchronous, message broker, request-response, fire-and-forget, service discovery, load balancing, payload, latency, throughput.</p>
        <p><strong>🎤 STAR method (luyện cho behavioral interview):</strong> trả lời câu <em>"Tell me about a time you debugged a difficult integration issue."</em> theo cấu trúc:</p>
        <ul>
          <li><strong>S</strong>ituation — bối cảnh ngắn gọn (1-2 câu).</li>
          <li><strong>T</strong>ask — nhiệm vụ/trách nhiệm của bạn.</li>
          <li><strong>A</strong>ction — bạn cụ thể đã làm gì (chiếm phần lớn câu trả lời).</li>
          <li><strong>R</strong>esult — kết quả đo được (số liệu nếu có).</li>
        </ul>
        <p>Ghi âm câu trả lời STAR ~90 giây, nghe lại xem "Action" có cụ thể không.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">1. Synchronous vs Asynchronous</div>
          <div class="theory-body"><strong>Synchronous</strong> (REST, gRPC): client gọi và <em>chờ</em> response — đơn giản, dễ reasoning, nhưng tạo temporal coupling (cả 2 service phải online cùng lúc) và dễ lan truyền lỗi/latency. <strong>Asynchronous</strong> (message queue: Kafka, RabbitMQ): producer gửi message rồi tiếp tục, consumer xử lý sau — giúp decouple, chịu tải đột biến (buffering), resilient hơn khi 1 bên down; nhưng phức tạp hơn, khó debug và phải xử lý eventual consistency. Quy tắc: dùng sync cho query cần phản hồi ngay; dùng async cho event/notification và tác vụ nền.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">2. Spring REST Clients</div>
          <div class="theory-body"><strong>RestTemplate</strong>: client cũ, blocking, đang ở chế độ maintenance — tránh dùng cho code mới. <strong>WebClient</strong>: reactive, non-blocking (Project Reactor — Mono/Flux), phù hợp khi cần concurrency cao hoặc streaming; cũng dùng được kiểu blocking. <strong>RestClient</strong> (Spring 6.1+): API fluent, đồng bộ, là lựa chọn hiện đại thay RestTemplate cho code blocking. <strong>OpenFeign</strong>: declarative — bạn chỉ định nghĩa một interface với annotation, Spring Cloud tự sinh implementation gọi HTTP; tích hợp sẵn LoadBalancer + Resilience4j.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">3. Service Discovery</div>
          <div class="theory-body">Trong môi trường động (instances lên/xuống, IP thay đổi), hardcode IP là không khả thi. Service Discovery (Eureka, Consul, hoặc Kubernetes DNS) giải quyết: mỗi service <strong>đăng ký</strong> chính nó vào registry khi khởi động, và khi cần gọi service khác thì <strong>tra cứu theo tên logic</strong> (ví dụ <code>order-service</code>) thay vì IP cụ thể. Registry trả về danh sách instance đang khỏe mạnh. Điều này cho phép thêm/bớt instance mà không cần cấu hình lại client.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">4. Load Balancing: Client-side vs Server-side</div>
          <div class="theory-body"><strong>Server-side LB</strong> (Nginx, AWS ELB): client gọi một địa chỉ load balancer, LB phân phối request tới các instance. <strong>Client-side LB</strong> (Spring Cloud LoadBalancer): client lấy danh sách instance từ service discovery rồi <em>tự chọn</em> instance (round-robin...) — không cần một hop LB trung gian, giảm latency và single point of failure. Spring Cloud LoadBalancer tích hợp với WebClient/RestClient/Feign: khi bạn gọi theo tên service, nó tự resolve và cân bằng tải giữa các instance.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// ===== WebClient (reactive, non-blocking) =====
@Configuration
public class WebClientConfig {
    @Bean
    @LoadBalanced   // bật client-side load balancing theo tên service
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}

@Service
public class OrderService {
    private final WebClient.Builder builder;
    public OrderService(WebClient.Builder builder) { this.builder = builder; }

    public Mono&lt;Product&gt; getProduct(Long id) {
        return builder.build()
            .get()
            .uri("http://product-service/api/products/{id}", id) // tên logic
            .retrieve()
            .bodyToMono(Product.class);        // Mono&lt;Product&gt; bất đồng bộ
    }
}

// ===== RestClient (Spring 6.1+, fluent, blocking) =====
@Service
public class OrderServiceSync {
    private final RestClient restClient;
    public OrderServiceSync(RestClient.Builder builder) {
        this.restClient = builder.baseUrl("http://product-service").build();
    }

    public Product getProduct(Long id) {
        return restClient.get()
            .uri("/api/products/{id}", id)
            .retrieve()
            .body(Product.class);
    }
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// ===== OpenFeign (declarative) =====
@FeignClient(name = "product-service")   // resolve qua service discovery
public interface ProductClient {

    @GetMapping("/api/products/{id}")
    Product getProduct(@PathVariable("id") Long id);

    @GetMapping("/api/products")
    List&lt;Product&gt; getAll();
}

// Bật ở class cấu hình:
@SpringBootApplication
@EnableFeignClients
public class OrderApplication { }

// Dùng như một bean bình thường:
@Service
public class CheckoutService {
    private final ProductClient productClient;
    public CheckoutService(ProductClient productClient) {
        this.productClient = productClient;
    }
    public Product fetch(Long id) {
        return productClient.getProduct(id);  // Feign tự gọi HTTP
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Tạo một <strong>WebClient</strong> gọi sang một service khác (dùng <code>@LoadBalanced</code> theo tên service), trả về <code>Mono&lt;T&gt;</code>, rồi block() để in kết quả.</li>
        <li>Viết lại lời gọi đó bằng <strong>RestClient</strong> (Spring 6.1) kiểu blocking với API fluent. So sánh số dòng code.</li>
        <li>Định nghĩa một <strong>Feign client</strong> interface cho product-service với 2 endpoint (getById, getAll). Bật <code>@EnableFeignClients</code> và inject vào một service.</li>
        <li>Thêm xử lý <strong>timeout</strong>: cấu hình connect/read timeout cho WebClient (qua HttpClient) hoặc Feign (<code>feign.client.config</code>), và xử lý ngoại lệ khi timeout.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Synchronous và asynchronous communication khác nhau thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Synchronous: client gọi và chờ response ngay (REST, gRPC) — đơn giản nhưng cả 2 service phải online cùng lúc (temporal coupling). Asynchronous: producer gửi message vào broker (Kafka/RabbitMQ) rồi đi tiếp, consumer xử lý sau — decouple tốt hơn, chịu tải đột biến, nhưng phức tạp và phải chấp nhận eventual consistency. Query cần kết quả ngay thì dùng sync; event/notification/tác vụ nền thì dùng async.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Service discovery giải quyết vấn đề gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Trong môi trường động, instance lên/xuống liên tục và IP thay đổi, nên không thể hardcode địa chỉ. Service discovery (Eureka/Consul/K8s DNS) cho phép service đăng ký chính nó khi khởi động, và client tra cứu service khác theo tên logic thay vì IP. Registry trả về danh sách instance khỏe mạnh, nên ta có thể scale lên/xuống mà không phải cấu hình lại client.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">WebClient, RestClient và Feign — chọn cái nào và khi nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>WebClient</strong>: reactive, non-blocking — chọn khi cần concurrency cao, streaming, hoặc app đã dùng WebFlux. <strong>RestClient</strong> (Spring 6.1+): API fluent, blocking — lựa chọn hiện đại thay RestTemplate cho code đồng bộ thông thường. <strong>Feign</strong>: declarative — chỉ cần khai báo interface, ít boilerplate nhất, tích hợp sẵn LoadBalancer + Resilience4j; phù hợp khi gọi nhiều endpoint của service khác. RestTemplate đã maintenance-mode, không nên dùng cho code mới.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Client-side và server-side load balancing khác gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Server-side LB (Nginx, ELB): client gọi một địa chỉ LB, LB phân phối tới các instance — đơn giản cho client nhưng thêm một hop và là một thành phần phải quản lý. Client-side LB (Spring Cloud LoadBalancer): client lấy danh sách instance từ service discovery rồi tự chọn (round-robin...), bỏ qua hop trung gian, giảm latency và tránh single point of failure. Nhược điểm client-side là logic LB nằm trong mỗi client, khó cập nhật đồng bộ.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Khi nào nên dùng message queue thay vì REST?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Dùng message queue khi: (1) không cần response tức thì (gửi email, cập nhật analytics), (2) cần decouple producer/consumer để chúng scale và fail độc lập, (3) cần buffer khi tải đột biến (queue hấp thụ spike), (4) cần broadcast một event tới nhiều consumer (pub/sub), (5) cần đảm bảo eventual delivery dù consumer tạm down. Dùng REST khi cần kết quả đồng bộ ngay lập tức trong luồng request của user.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Lời gọi sync giữa các service có rủi ro gì và xử lý ra sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Rủi ro chính là <strong>cascade failure</strong> và latency lan truyền: nếu service A gọi B gọi C, mà C chậm/down thì A cũng bị treo thread, cạn thread pool và sập theo. Ngoài ra là temporal coupling (cả chuỗi phải online). Cách xử lý: đặt <strong>timeout</strong> hợp lý cho mọi lời gọi, dùng <strong>circuit breaker</strong> để fail fast khi downstream lỗi, <strong>retry với backoff</strong> cho lỗi tạm thời (chỉ với thao tác idempotent), <strong>bulkhead</strong> để cô lập thread pool theo dependency, và cung cấp <strong>fallback</strong> để graceful degradation. Khi có thể, chuyển sang async để cắt temporal coupling.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Reactive (WebClient/WebFlux) giúp gì cho inter-service call so với blocking?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Mô hình blocking (thread-per-request) tốn một thread cho mỗi request đang chờ I/O; khi một service gọi nhiều downstream chậm, thread pool nhanh chóng cạn. Reactive (Project Reactor, Netty) dùng non-blocking I/O với số thread nhỏ (event loop): một thread phục vụ nhiều request, thread không bị giữ trong lúc chờ network. Điều này cho throughput cao hơn nhiều với cùng tài nguyên, đặc biệt với workload I/O-bound (gọi nhiều service song song qua <code>Mono.zip</code>/<code>Flux</code>). Đổi lại, code reactive khó học, khó debug stacktrace, và phải reactive end-to-end (driver DB cũng phải non-blocking) mới hưởng trọn lợi ích.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#200 Number of Islands (Medium)</div><div class="bc-hint">DFS/BFS trên grid, đánh dấu visited. Liên hệ: duyệt graph là nền tảng cho dependency/service graph sau này.</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Hỏi AI: <em>"Show me the same downstream call written in WebClient, RestClient, and Feign side by side, and explain the trade-offs."</em> Sau đó tự gõ lại từng phiên bản.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring docs: RestClient &amp; WebClient · Spring Cloud OpenFeign reference · Spring Cloud LoadBalancer docs · microservices.io "Service Discovery".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w9-day-3">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">08/07 — Thứ 4</div>
        <div class="day-topic">Spring Cloud Gateway: Routing, Filters & Cross-cutting</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">⏱ 30 phút sáng + 2h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Mock Interview EN · 20 phút</span></div>
      <div class="en-content">
        <p><strong>Vocab (gateway):</strong> entry point, routing, predicate, filter, rate limiting, cross-cutting concern, throttle, gateway, downstream, intercept.</p>
        <p><strong>🎤 Mock EN:</strong> trả lời <em>"How would you handle authentication across many microservices?"</em> trong 90 giây. Gợi ý cấu trúc câu trả lời: centralized validation at the gateway → propagate identity downstream → services trust the gateway. Ghi âm và nghe lại độ trôi chảy.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">1. API Gateway Pattern</div>
          <div class="theory-body">API Gateway là <strong>single entry point</strong> cho mọi client request vào hệ thống microservices. Thay vì client phải biết địa chỉ từng service, client chỉ gọi gateway, và gateway route request tới service phù hợp. Gateway tập trung xử lý các <strong>cross-cutting concern</strong>: authentication/authorization, rate limiting, logging, CORS, request/response transformation. Lợi ích: ẩn cấu trúc nội bộ, giảm số lần round-trip cho client (aggregation), và tránh lặp lại logic chung ở mọi service.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">2. Spring Cloud Gateway</div>
          <div class="theory-body">Spring Cloud Gateway là gateway non-blocking, <strong>built trên Spring WebFlux + Netty</strong> (reactive), chịu được throughput cao với ít thread. Cấu hình xoay quanh khái niệm <strong>Route</strong>: mỗi route gồm một <code>id</code>, một <code>uri</code> đích, một tập <strong>predicates</strong> (điều kiện để match request) và một tập <strong>filters</strong> (biến đổi request/response). Có thể cấu hình route bằng YAML hoặc bằng Java (<code>RouteLocator</code> bean) cho logic phức tạp.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">3. Predicates &amp; Filters</div>
          <div class="theory-body"><strong>Predicates</strong> quyết định request có khớp route không: <code>Path</code> (theo URL), <code>Method</code> (GET/POST), <code>Header</code>, <code>Host</code>, <code>Query</code>, <code>After/Before/Between</code> (theo thời gian). <strong>Filters</strong> biến đổi request/response: <code>AddRequestHeader</code>, <code>RewritePath</code>, <code>StripPrefix</code>, <code>CircuitBreaker</code>, <code>RequestRateLimiter</code>, <code>Retry</code>. Filter có thể là pre (trước khi forward) hoặc post (sau khi nhận response). Kết hợp predicate + filter cho phép định tuyến và xử lý linh hoạt.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">4. Cross-cutting concerns tại Gateway</div>
          <div class="theory-body">Đặt các mối quan tâm chung ở gateway để không lặp lại ở mọi service: <strong>Centralized JWT validation</strong> — gateway verify token một lần, nếu hợp lệ thì forward kèm thông tin user (header) xuống service; service tin tưởng gateway. <strong>Rate limiting</strong> — dùng <code>RequestRateLimiter</code> với backend Redis (token bucket) để chống abuse/DDoS. <strong>CORS</strong> cấu hình tập trung. <strong>Centralized logging/tracing</strong> — gán correlation ID cho mỗi request. Lưu ý: không nhồi quá nhiều business logic vào gateway để tránh nó thành "monolith mới".</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="yaml"># gateway/src/main/resources/application.yml
spring:
  application:
    name: api-gateway
  cloud:
    gateway:
      routes:
        - id: order-route
          uri: lb://order-service        # lb:// = load-balanced theo discovery
          predicates:
            - Path=/api/orders/**         # chỉ match path này
            - Method=GET,POST
          filters:
            - StripPrefix=1               # bỏ /api trước khi forward
            - AddRequestHeader=X-Gateway, true
            - name: CircuitBreaker
              args:
                name: orderCB
                fallbackUri: forward:/fallback/orders
            - name: RequestRateLimiter    # rate limit bằng Redis
              args:
                redis-rate-limiter.replenishRate: 10   # 10 req/s
                redis-rate-limiter.burstCapacity: 20

        - id: product-route
          uri: lb://product-service
          predicates:
            - Path=/api/products/**
          filters:
            - StripPrefix=1

      default-filters:
        - DedupeResponseHeader=Access-Control-Allow-Origin</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Cấu hình route bằng Java (RouteLocator) cho logic phức tạp
@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("order-route", r -&gt; r
                .path("/api/orders/**")
                .filters(f -&gt; f
                    .stripPrefix(1)
                    .addRequestHeader("X-Gateway", "true")
                    .circuitBreaker(c -&gt; c
                        .setName("orderCB")
                        .setFallbackUri("forward:/fallback/orders")))
                .uri("lb://order-service"))
            .route("product-route", r -&gt; r
                .path("/api/products/**")
                .filters(f -&gt; f.stripPrefix(1))
                .uri("lb://product-service"))
            .build();
    }
}

// Fallback endpoint khi circuit mở
@RestController
class FallbackController {
    @GetMapping("/fallback/orders")
    Mono&lt;String&gt; orderFallback() {
        return Mono.just("Order service is temporarily unavailable");
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Cấu hình 2 <strong>routes</strong> trong gateway (order &amp; product), mỗi route match theo <code>Path</code> và forward tới service tương ứng bằng <code>lb://</code>.</li>
        <li>Thêm một <strong>filter</strong> <code>AddRequestHeader</code> và <code>RewritePath</code>/<code>StripPrefix</code>; kiểm tra header tới đúng service đích.</li>
        <li>Cài <strong>JWT validation</strong> tập trung tại gateway: viết một <code>GlobalFilter</code> verify token; nếu hợp lệ thì gắn header <code>X-User-Id</code> xuống downstream, nếu không thì trả 401.</li>
        <li>Bật <strong>rate limiting</strong> với <code>RequestRateLimiter</code> + Redis (replenishRate/burstCapacity), test bằng cách bắn nhiều request và quan sát HTTP 429.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">API Gateway pattern là gì và giải quyết vấn đề gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">API Gateway là single entry point cho mọi client request vào hệ microservices. Client chỉ gọi gateway, gateway route tới service phù hợp. Nó giải quyết: ẩn cấu trúc nội bộ (client không cần biết địa chỉ từng service), tập trung cross-cutting concern (auth, rate limit, logging, CORS) thay vì lặp ở mọi service, và có thể aggregate nhiều lời gọi để giảm round-trip cho client (đặc biệt hữu ích cho mobile).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Predicate và Filter trong Spring Cloud Gateway khác nhau thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Predicate là điều kiện để quyết định một request có khớp route hay không (Path, Method, Header, Host, thời gian...) — nó chỉ trả về true/false. Filter là thứ biến đổi request hoặc response khi đã match route (AddRequestHeader, RewritePath, StripPrefix, CircuitBreaker, RequestRateLimiter). Nói gọn: predicate quyết định "đi route nào", filter quyết định "xử lý gì trên đường đi".</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao Spring Cloud Gateway lại reactive (WebFlux/Netty)?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Gateway là điểm nghẽn lưu lượng: mọi request đi qua nó, và phần lớn công việc là I/O-bound (chờ downstream service trả về). Mô hình blocking sẽ tốn một thread cho mỗi request đang chờ, nhanh cạn thread pool dưới tải cao. Reactive non-blocking (Netty event loop) cho phép một số ít thread phục vụ rất nhiều request đồng thời, đạt throughput cao hơn với ít tài nguyên — đúng nhu cầu của một gateway.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Centralized JWT validation tại gateway hoạt động ra sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Gateway có một GlobalFilter chặn mọi request, verify chữ ký + hạn của JWT một lần. Nếu hợp lệ, gateway trích thông tin user và gắn vào header (ví dụ X-User-Id, X-Roles) rồi forward xuống downstream; downstream tin tưởng gateway (mạng nội bộ đã được bảo vệ) nên không cần verify lại token đầy đủ. Lợi ích: không lặp logic auth ở mọi service. Cần lưu ý zero-trust: downstream vẫn nên kiểm tra header có đến từ gateway không, hoặc tự verify token nếu yêu cầu bảo mật cao.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Rate limiting tại gateway thực hiện thế nào và tại sao cần Redis?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Dùng filter <code>RequestRateLimiter</code> với thuật toán token bucket: cấu hình replenishRate (token thêm mỗi giây) và burstCapacity (số token tối đa). Khi hết token, request bị trả về HTTP 429 Too Many Requests. Cần Redis vì gateway thường chạy nhiều instance — counter phải được chia sẻ tập trung để rate limit là chính xác toàn cục, không phải mỗi instance đếm riêng. KeyResolver xác định giới hạn theo gì (theo user, theo IP, theo API key).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">API Gateway khác Load Balancer ở điểm nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Load Balancer hoạt động chủ yếu ở tầng thấp (L4/L7), nhiệm vụ là phân phối lưu lượng tới nhiều instance của <em>cùng một</em> service để cân tải và đảm bảo availability — nó không hiểu nghiệp vụ. API Gateway hoạt động ở tầng ứng dụng (L7), hiểu API: nó route theo path/method tới <em>các service khác nhau</em>, và xử lý cross-cutting concern (auth, rate limit, transformation, aggregation, circuit breaking). Thực tế chúng bổ sung nhau: gateway thường đứng sau một load balancer, và bản thân gateway có thể dùng client-side load balancing để gọi downstream.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Gateway có thể trở thành single point of failure / bottleneck không? Xử lý sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Có — vì mọi traffic đi qua nó. Để tránh: (1) chạy <strong>nhiều instance gateway</strong> sau một load balancer (stateless, scale ngang được). (2) Giữ gateway <strong>nhẹ</strong> — chỉ routing + cross-cutting, không nhồi business logic. (3) Dùng reactive để chịu throughput cao. (4) Đặt <strong>circuit breaker + timeout</strong> trên các route để một downstream lỗi không kéo gateway sập. (5) Cẩn thận với rate limiter dùng Redis — Redis cũng phải HA. (6) Có thể dùng nhiều gateway chuyên biệt (Backend-for-Frontend) thay vì một gateway khổng lồ. Mục tiêu là gateway không bao giờ là điểm chết duy nhất.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#207 Course Schedule (Medium)</div><div class="bc-hint">Topological sort / phát hiện chu trình bằng BFS (Kahn) hoặc DFS. Liên hệ: phát hiện circular dependency giữa service.</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Hỏi AI: <em>"Write a Spring Cloud Gateway GlobalFilter that validates a JWT and forwards X-User-Id downstream, returning 401 if invalid."</em> Rồi review từng dòng và tự gõ lại.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring Cloud Gateway reference docs (routes/predicates/filters) · microservices.io "API Gateway" pattern · Bài về Backend-for-Frontend (BFF).</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w9-day-4">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">09/07 — Thứ 5</div>
        <div class="day-topic">Resilience: Circuit Breaker với Resilience4j</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">⏱ 30 phút sáng + 2h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Mock Interview EN · 20 phút</span></div>
      <div class="en-content">
        <p><strong>Vocab (resilience):</strong> circuit breaker, fallback, graceful degradation, cascade failure, retry, backoff, timeout, bulkhead, fail fast, fault tolerance.</p>
        <p><strong>🎤 Mock EN:</strong> trả lời <em>"What happens in your system when a downstream service goes down?"</em> trong 90 giây. Gợi ý: circuit breaker opens → fail fast → return fallback → degrade gracefully → recover when half-open succeeds. Ghi âm, tự chấm độ rõ ràng.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">1. Circuit Breaker Pattern (3 states)</div>
          <div class="theory-body">Circuit breaker bảo vệ hệ thống khỏi gọi mãi một dependency đang lỗi. Ba trạng thái: <strong>CLOSED</strong> — bình thường, request đi qua; theo dõi tỉ lệ lỗi. <strong>OPEN</strong> — khi tỉ lệ lỗi vượt ngưỡng, breaker mở; mọi request <em>fail fast</em> ngay (không gọi downstream) và trả fallback. Sau một khoảng thời gian chờ, chuyển sang <strong>HALF_OPEN</strong> — cho qua vài request thử; nếu thành công thì về CLOSED, nếu vẫn lỗi thì quay lại OPEN. Mục tiêu: ngăn <strong>cascade failure</strong> và cho downstream thời gian hồi phục.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">2. Resilience4j — các module</div>
          <div class="theory-body">Resilience4j là thư viện fault-tolerance nhẹ, thiết kế functional, thay thế Hystrix (đã ngừng phát triển). Các decorator chính qua annotation: <code>@CircuitBreaker</code> (ngắt mạch), <code>@Retry</code> (thử lại lỗi tạm thời), <code>@RateLimiter</code> (giới hạn số lời gọi), <code>@Bulkhead</code> (cô lập tài nguyên/thread pool theo dependency), <code>@TimeLimiter</code> (giới hạn thời gian cho lời gọi bất đồng bộ). Cấu hình qua <code>application.yml</code>, và các decorator có thể chồng lên nhau theo thứ tự định nghĩa.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">3. Fallback &amp; Graceful Degradation</div>
          <div class="theory-body">Fallback là phương án dự phòng khi lời gọi thất bại (do circuit mở, timeout, hay exception). Thay vì lỗi cho user, ta trả về một giá trị mặc định, dữ liệu cache cũ, hoặc một response rút gọn — đây là <strong>graceful degradation</strong>: hệ thống vẫn chạy với chức năng giảm bớt thay vì sập hoàn toàn. Ví dụ: product-service down → trả về danh sách sản phẩm từ cache hoặc một thông báo "tạm thời không hiển thị đánh giá". Fallback method trong Resilience4j phải cùng signature + thêm tham số <code>Throwable</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">4. Retry, Timeout &amp; Bulkhead</div>
          <div class="theory-body"><strong>Retry</strong>: thử lại lỗi tạm thời (network glitch) với <em>exponential backoff</em> để tránh dồn tải; chỉ retry thao tác <strong>idempotent</strong>. <strong>Timeout</strong>: luôn đặt giới hạn thời gian — fail fast còn hơn treo thread chờ vô hạn. <strong>Bulkhead</strong>: cô lập tài nguyên (thread pool/semaphore) riêng cho mỗi dependency, để một dependency chậm không nuốt hết thread và làm sập cả service (ví von vách ngăn khoang tàu). Triết lý chung: <strong>fail fast</strong> để tránh <strong>cascade failure</strong> lan truyền khắp hệ thống.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// @CircuitBreaker + @Retry + fallback method
@Service
public class ProductGateway {

    private final ProductClient client;
    public ProductGateway(ProductClient client) { this.client = client; }

    @CircuitBreaker(name = "productCB", fallbackMethod = "getProductFallback")
    @Retry(name = "productRetry")
    public Product getProduct(Long id) {
        return client.getProduct(id);   // có thể ném exception khi service down
    }

    // fallback: cùng signature + tham số Throwable cuối
    public Product getProductFallback(Long id, Throwable ex) {
        // graceful degradation: trả product rút gọn / từ cache
        return new Product(id, "Unavailable", 0.0);
    }
}

// TimeLimiter cho lời gọi bất đồng bộ (trả CompletableFuture)
@TimeLimiter(name = "productCB")
@CircuitBreaker(name = "productCB", fallbackMethod = "asyncFallback")
public CompletableFuture&lt;Product&gt; getProductAsync(Long id) {
    return CompletableFuture.supplyAsync(() -&gt; client.getProduct(id));
}

public CompletableFuture&lt;Product&gt; asyncFallback(Long id, Throwable ex) {
    return CompletableFuture.completedFuture(new Product(id, "Unavailable", 0.0));
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="yaml"># application.yml — cấu hình Resilience4j
resilience4j:
  circuitbreaker:
    instances:
      productCB:
        sliding-window-size: 10           # xét 10 lời gọi gần nhất
        failure-rate-threshold: 50        # &gt;50% lỗi thì OPEN
        wait-duration-in-open-state: 10s  # chờ 10s rồi sang HALF_OPEN
        permitted-number-of-calls-in-half-open-state: 3
        slow-call-duration-threshold: 2s  # call &gt; 2s tính là "slow"
        slow-call-rate-threshold: 80
  retry:
    instances:
      productRetry:
        max-attempts: 3
        wait-duration: 500ms
        enable-exponential-backoff: true
        exponential-backoff-multiplier: 2  # 500ms -&gt; 1s -&gt; 2s
  timelimiter:
    instances:
      productCB:
        timeout-duration: 3s
  bulkhead:
    instances:
      productCB:
        max-concurrent-calls: 20          # cô lập tối đa 20 call đồng thời</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Bọc một lời gọi downstream bằng <code>@CircuitBreaker</code> + một <strong>fallback method</strong> trả về dữ liệu mặc định; cấu hình ngưỡng failure-rate trong yml.</li>
        <li>Thêm <code>@Retry</code> với <strong>exponential backoff</strong> (max-attempts=3, multiplier=2); log mỗi lần retry để quan sát khoảng cách thời gian.</li>
        <li>Đặt <code>@TimeLimiter</code> (timeout 3s) cho một lời gọi async chậm và xác nhận fallback được kích hoạt khi quá hạn.</li>
        <li>Viết một test: làm cho downstream luôn lỗi, gọi nhiều lần và quan sát circuit chuyển CLOSED → OPEN (request bắt đầu fail fast ngay), sau wait-duration thì HALF_OPEN.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Circuit breaker có 3 trạng thái nào và chuyển đổi ra sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">CLOSED (bình thường, request đi qua, theo dõi tỉ lệ lỗi), OPEN (tỉ lệ lỗi vượt ngưỡng → mở mạch, mọi request fail fast và trả fallback), HALF_OPEN (sau thời gian chờ, cho qua vài request thử). Từ HALF_OPEN: nếu thử thành công thì về CLOSED, nếu vẫn lỗi thì quay lại OPEN. Mục đích là cho downstream thời gian hồi phục và tránh dội request vào service đang chết.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Fallback method dùng để làm gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Fallback là phương án dự phòng được gọi khi lời gọi chính thất bại (circuit mở, timeout, exception). Thay vì ném lỗi cho user, ta trả về giá trị mặc định, dữ liệu cache cũ, hoặc response rút gọn — gọi là graceful degradation. Ví dụ product-service down thì vẫn hiển thị sản phẩm nhưng ẩn phần đánh giá. Trong Resilience4j, fallback method phải cùng signature với method gốc và thêm tham số Throwable ở cuối.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao circuit breaker giúp ngăn cascade failure?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi một downstream chậm/lỗi, nếu không có gì bảo vệ, các service gọi nó sẽ giữ thread chờ, dồn ứ request, cạn thread pool và sập theo — lỗi lan ngược toàn chuỗi (cascade). Circuit breaker phát hiện tỉ lệ lỗi cao và <strong>mở mạch</strong>, khiến các lời gọi tiếp theo fail fast ngay lập tức (không giữ thread, không gọi downstream). Nhờ đó service gọi không bị treo, vẫn phục vụ phần còn lại, và downstream được giảm tải để hồi phục.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao retry phải đi kèm idempotency?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Retry tự động gửi lại request khi gặp lỗi tạm thời. Vấn đề: có thể request đã được xử lý thành công ở downstream nhưng response bị mất do network — khi retry, thao tác bị thực hiện lần nữa. Nếu thao tác không idempotent (ví dụ "trừ tiền", "tạo đơn"), retry gây side-effect kép (trừ tiền 2 lần). Vì vậy chỉ nên retry thao tác idempotent (GET, hoặc các thao tác dùng idempotency key). Ngoài ra cần exponential backoff để không dội tải vào service đang yếu.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Bulkhead pattern là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Bulkhead (vách ngăn) cô lập tài nguyên cho từng dependency, ví von như các khoang kín của tàu thủy: một khoang ngập nước không làm chìm cả tàu. Trong service, ta cấp một thread pool/semaphore riêng cho mỗi downstream; nếu downstream A chậm và chiếm hết "khoang" của nó, các lời gọi tới B/C vẫn còn tài nguyên riêng để hoạt động. Resilience4j cung cấp <code>@Bulkhead</code> với 2 kiểu: semaphore (giới hạn số call đồng thời) và thread-pool. Nó ngăn một dependency lỗi nuốt hết tài nguyên của cả service.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Resilience4j khác Hystrix ở điểm nào và tại sao thay thế?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Hystrix (Netflix) đã vào maintenance mode từ 2018, không phát triển thêm. Resilience4j là thư viện hiện đại thay thế: thiết kế <strong>functional/lightweight</strong> (dùng higher-order functions để decorate, không ép buộc một mô hình thread cố định như Hystrix), modular (chọn riêng circuit breaker, retry, bulkhead, rate limiter...), không phụ thuộc thư viện ngoài (Hystrix kéo theo Archaius/RxJava), tích hợp tốt với Spring Boot, Micrometer metrics và reactive (Reactor). Hystrix dùng mô hình thread-pool nặng cho mọi command; Resilience4j cho phép semaphore-based isolation nhẹ hơn. Vì vậy ngày nay dự án mới dùng Resilience4j.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Khi chồng nhiều decorator (CircuitBreaker + Retry + TimeLimiter), thứ tự áp dụng ảnh hưởng gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Thứ tự rất quan trọng vì nó quyết định cái gì "bọc" cái gì. Ví dụ nếu Retry bọc ngoài CircuitBreaker, mỗi lần retry sẽ được CircuitBreaker ghi nhận và một loạt retry thất bại có thể nhanh chóng mở mạch; ngược lại nếu CircuitBreaker bọc ngoài Retry, một chu kỳ retry hoàn chỉnh mới tính là một lần lỗi cho breaker. Thông thường khuyến nghị thứ tự (từ ngoài vào trong): Retry → CircuitBreaker → RateLimiter → TimeLimiter → Bulkhead. Với async/TimeLimiter, TimeLimiter cần đặt phù hợp để timeout được tính là một "failure" cho circuit breaker. Trong Spring, thứ tự có thể chỉnh qua aspect order; cần test kỹ để hành vi đúng ý đồ — sai thứ tự dễ khiến retry vô hiệu hóa fail-fast hoặc breaker không bao giờ mở.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#133 Clone Graph (Medium)</div><div class="bc-hint">DFS/BFS + HashMap lưu node đã clone để tránh vòng lặp vô hạn. Tư duy graph traversal có visited-set, giống tránh retry storm.</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Hỏi AI: <em>"Explain the correct aspect order when stacking @Retry, @CircuitBreaker and @TimeLimiter in Resilience4j, with a concrete failure scenario for a wrong order."</em></div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Resilience4j official docs (resilience4j.readme.io) · Spring Cloud CircuitBreaker reference · Bài "Release It!" (Michael Nygard) về stability patterns.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w9-day-5">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">10/07 — Thứ 6</div>
        <div class="day-topic">Distributed Concurrency: Idempotency, Lock & Consistency</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Mock Interview EN + Vocalmax · 15 phút</span></div>
      <div class="en-content">
        <p><strong>Vocalmax — vocab phân tán:</strong> idempotency, distributed lock, eventual consistency, strong consistency, race condition, partition tolerance, compensating action, choreography, orchestration, replica.</p>
        <p><strong>🎤 Mock EN:</strong> trả lời <em>"How do you make sure a payment isn't charged twice on a retry?"</em> trong 60–90 giây. Gợi ý: idempotency key → store processed keys → return cached result on duplicate. Ghi âm, nghe lại.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">1. Idempotency</div>
          <div class="theory-body">Một thao tác là idempotent nếu thực hiện nhiều lần cho kết quả giống như một lần — không gây side-effect kép. Trong hệ phân tán, retry và message redelivery khiến cùng một request có thể đến nhiều lần. Giải pháp: client gửi kèm một <strong>idempotency key</strong> (UUID) duy nhất cho mỗi thao tác; server lưu key đã xử lý cùng kết quả. Khi gặp lại key đó, server không thực hiện lại mà trả về kết quả đã lưu. Cực kỳ quan trọng cho payment, tạo đơn, chuyển tiền — nơi làm lặp là thảm họa.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">2. Distributed Lock</div>
          <div class="theory-body">Khi một service chạy nhiều instance, lock trong JVM (<code>synchronized</code>) là vô dụng vì nó chỉ cục bộ trong một process. Distributed lock đảm bảo trong toàn cụm chỉ <strong>một instance</strong> xử lý một tài nguyên tại một thời điểm. Cài đặt phổ biến: Redis <code>SETNX</code> (set if not exists) + TTL, hoặc thư viện <strong>Redisson</strong> (có lock có watchdog tự gia hạn). Lưu ý quan trọng: lock phải có <strong>timeout/TTL</strong> để tránh deadlock nếu instance giữ lock bị crash. Redlock là thuật toán an toàn hơn nhưng phức tạp; cân nhắc kỹ vì distributed lock rất dễ sai.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">3. Eventual vs Strong Consistency (CAP)</div>
          <div class="theory-body"><strong>CAP theorem</strong>: trong hệ phân tán, khi có network partition (P), ta chỉ chọn được Consistency (C) hoặc Availability (A), không cả hai. <strong>Strong consistency</strong>: mọi read luôn thấy write mới nhất (như ACID) — chính xác nhưng phải chờ đồng bộ, giảm availability. <strong>Eventual consistency</strong>: các replica sẽ hội tụ "sau cùng" — chấp nhận đọc dữ liệu tạm cũ để đổi lấy availability và hiệu năng (mô hình BASE: Basically Available, Soft state, Eventual consistency). Microservices với database-per-service thường chọn eventual consistency cho dữ liệu xuyên service.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">4. Saga Pattern</div>
          <div class="theory-body">Vì không còn transaction ACID xuyên service, ta dùng <strong>saga</strong>: một chuỗi các local transaction, mỗi bước phát event kích hoạt bước tiếp theo; nếu một bước thất bại thì chạy <strong>compensating action</strong> (hoàn tác các bước trước, ví dụ "hoàn tiền"). Hai kiểu điều phối: <strong>Choreography</strong> — không có bộ điều khiển trung tâm, mỗi service nghe event và phản ứng (đơn giản, nhưng khó theo dõi luồng khi nhiều bước). <strong>Orchestration</strong> — một orchestrator điều khiển tuần tự các bước (dễ quản lý/giám sát, nhưng tạo điểm tập trung). Saga đảm bảo data consistency mà không cần distributed transaction.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// ===== Idempotency key check =====
@Service
public class PaymentService {

    private final IdempotencyStore store;   // ví dụ: Redis-backed
    private final PaymentGateway gateway;

    public PaymentResult pay(String idempotencyKey, PaymentRequest req) {
        // Nếu key đã xử lý -&gt; trả kết quả cũ, KHÔNG charge lại
        PaymentResult existing = store.get(idempotencyKey);
        if (existing != null) {
            return existing;          // duplicate request -&gt; safe
        }
        PaymentResult result = gateway.charge(req);   // thao tác có side-effect
        store.put(idempotencyKey, result, Duration.ofHours(24));
        return result;
    }
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// ===== Distributed lock với Redisson =====
@Service
public class InventoryService {

    private final RedissonClient redisson;
    public InventoryService(RedissonClient redisson) { this.redisson = redisson; }

    public void reserveStock(Long productId, int qty) {
        RLock lock = redisson.getLock("lock:product:" + productId);
        boolean locked = false;
        try {
            // chờ tối đa 5s, tự release sau 10s (watchdog) nếu crash
            locked = lock.tryLock(5, 10, TimeUnit.SECONDS);
            if (!locked) {
                throw new IllegalStateException("Could not acquire lock");
            }
            // ---- critical section: chỉ 1 instance vào đây ----
            // đọc tồn kho, kiểm tra, trừ kho, lưu DB
            decrementStock(productId, qty);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            if (locked &amp;&amp; lock.isHeldByCurrentThread()) {
                lock.unlock();        // luôn release trong finally
            }
        }
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Cài <strong>idempotency key</strong> cho một endpoint POST (ví dụ tạo đơn): nhận header <code>Idempotency-Key</code>, lưu key + kết quả vào store, trả lại kết quả cũ khi gặp key trùng. Test gửi 2 request cùng key.</li>
        <li>Viết một <strong>distributed lock</strong> với Redis (Redisson <code>tryLock</code> có timeout/TTL) bảo vệ thao tác trừ tồn kho; mô phỏng 2 luồng cùng giành lock.</li>
        <li>Vẽ (text) và giải thích một <strong>saga</strong> cho luồng đặt hàng: Order → Payment → Inventory, kèm các <strong>compensating action</strong> khi bước Inventory thất bại. So sánh choreography vs orchestration cho luồng này.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Idempotency là gì và tại sao quan trọng trong hệ phân tán?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Idempotent nghĩa là thực hiện thao tác nhiều lần cho kết quả như một lần, không gây side-effect kép. Quan trọng vì retry, timeout và message redelivery khiến cùng một request có thể đến nhiều lần. Với thao tác như thanh toán, nếu không idempotent thì khách bị trừ tiền 2 lần. Giải pháp phổ biến là idempotency key: client gửi kèm một UUID duy nhất, server lưu key đã xử lý và trả lại kết quả cũ khi gặp key trùng thay vì thực hiện lại.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Tại sao không dùng được synchronized cho distributed lock?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Vì <code>synchronized</code> (hoặc ReentrantLock) chỉ có tác dụng trong phạm vi một JVM/process. Khi service chạy nhiều instance trên nhiều máy, mỗi instance có JVM riêng, lock cục bộ không thấy nhau nên 2 instance vẫn vào critical section cùng lúc. Cần một lock dùng chung bên ngoài như Redis (SETNX + TTL) hoặc Redisson, hoặc dùng DB row-lock, để đảm bảo toàn cụm chỉ một instance xử lý tài nguyên tại một thời điểm.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Eventual consistency và strong consistency khác nhau thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Strong consistency: mọi read luôn thấy write mới nhất ngay lập tức (như ACID transaction) — chính xác nhưng phải chờ đồng bộ, giảm availability và hiệu năng. Eventual consistency: chấp nhận các replica có thể tạm khác nhau, nhưng sẽ hội tụ về cùng giá trị "sau cùng" nếu không có write mới — ưu tiên availability và hiệu năng, đổi lại có thể đọc dữ liệu hơi cũ trong chốc lát. Microservices với database-per-service thường chọn eventual consistency cho dữ liệu xuyên service (đồng bộ qua event).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Giải thích CAP theorem.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">CAP nói rằng một hệ phân tán không thể đồng thời đảm bảo cả ba: Consistency (mọi node thấy cùng dữ liệu mới nhất), Availability (mọi request đều có response), và Partition tolerance (hệ vẫn chạy khi mạng bị chia cắt). Trong thực tế, network partition là không tránh khỏi nên P là bắt buộc — do đó khi có partition, ta phải chọn giữa C và A. Hệ chọn CP (như nhiều DB transaction) ưu tiên đúng đắn, từ chối phục vụ khi không chắc chắn; hệ chọn AP (như nhiều NoSQL) vẫn trả lời nhưng có thể trả dữ liệu cũ. Lựa chọn phụ thuộc yêu cầu nghiệp vụ.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Saga pattern là gì? Choreography vs orchestration?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Saga thay thế distributed transaction (vốn không khả thi với database-per-service) bằng một chuỗi local transaction; mỗi bước thành công sẽ kích hoạt bước kế, và nếu một bước thất bại thì chạy compensating action để hoàn tác các bước trước (ví dụ hoàn tiền, trả lại kho). <strong>Choreography</strong>: không có điều phối trung tâm — mỗi service lắng nghe event và tự phản ứng, phát event tiếp theo; đơn giản, loose-coupled, nhưng khi nhiều bước thì khó theo dõi luồng tổng thể và dễ tạo phụ thuộc event ngầm. <strong>Orchestration</strong>: một orchestrator điều khiển tường minh thứ tự các bước và xử lý compensation; dễ giám sát/debug và quản lý luồng phức tạp, nhưng tạo một điểm tập trung và orchestrator có thể phình to. Chọn choreography cho luồng đơn giản, orchestration cho luồng nhiều bước cần kiểm soát chặt.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#1834 Single-Threaded CPU (Medium)</div><div class="bc-hint">Priority queue (min-heap) theo thời gian xử lý + sort theo thời điểm enqueue. Tư duy scheduling, liên hệ xử lý task tuần tự an toàn.</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Hỏi AI: <em>"Why is implementing a correct distributed lock with Redis so error-prone? Explain Redlock controversy briefly."</em> Đọc để hiểu vì sao distributed lock cần dùng dè chừng.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">CAP theorem (Brewer) · microservices.io "Saga" pattern · Redisson distributed lock docs · Martin Kleppmann "How to do distributed locking".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w9-day-6">
  <div class="day-header" style="background:#C0392B">
    <div class="day-header-left">
      <span class="day-icon">🔥</span>
      <div>
        <div class="day-date">11/07 — Thứ 7</div>
        <div class="day-topic">Docker Compose Multi-service: Gateway + Services + Redis + Postgres</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">WEEKEND</span>
      <span class="day-hours">⏱ 4h (sáng + chiều)</span>
    </div>
  </div>
  <div class="day-body">
    <div class="en-block">
      <div class="en-header"><span class="en-flag">🌏</span><strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong><span class="en-badge-time">Mock Interview EN · 30 phút</span></div>
      <div class="en-content">
        <p><strong>Full Mock EN (30 phút):</strong> tự phỏng vấn về kiến trúc microservices. Chuẩn bị trả lời lưu loát các câu:</p>
        <ul>
          <li>"Walk me through the architecture of a system you built."</li>
          <li>"How do your services communicate and discover each other?"</li>
          <li>"How do you run the whole stack locally for development?"</li>
        </ul>
        <p>Ghi âm toàn bộ, nghe lại, gạch các chỗ ấp úng để luyện lại. Tập dùng thuật ngữ: container, image, service, network, volume, healthcheck.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">1. Docker Compose multi-service orchestration</div>
          <div class="theory-body">Docker Compose định nghĩa và chạy ứng dụng nhiều container bằng một file <code>compose.yaml</code> (hoặc <code>docker-compose.yml</code>). Các khối chính: <strong>services</strong> (mỗi container: image/build, ports, environment, depends_on), <strong>networks</strong> (mạng ảo để container nói chuyện), <strong>volumes</strong> (lưu trữ bền vững). Một lệnh <code>docker compose up</code> khởi động toàn bộ stack theo đúng thứ tự phụ thuộc — rất phù hợp để dựng môi trường dev/local đầy đủ (gateway + service + DB + cache) chỉ trong vài giây.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">2. Service networking (DNS)</div>
          <div class="theory-body">Khi các service ở chung một Docker network, Compose tạo sẵn một <strong>DNS nội bộ</strong>: mỗi service được phân giải theo <em>tên service</em>. Ví dụ order-service gọi <code>http://product-service:8082</code> — Docker tự resolve "product-service" ra IP container, không cần hardcode IP. Đây là service discovery tối giản. Phân biệt <strong>expose</strong> (mở port chỉ trong network nội bộ, container khác gọi được) với <strong>ports</strong> (publish ra host, người ngoài/máy host gọi được). Thường chỉ publish gateway ra host, còn các service nội bộ chỉ giao tiếp trong network — tăng bảo mật (network isolation).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">3. Environment &amp; config</div>
          <div class="theory-body">Cấu hình truyền vào container qua <strong>environment variables</strong> (khối <code>environment</code> hoặc file <code>.env</code>). Đây là cách chuẩn để tách config khỏi image (12-factor app): cùng một image chạy được ở dev/staging/prod chỉ bằng đổi env. Dùng <code>.env</code> để lưu giá trị (password, host) và tham chiếu <code>${VAR}</code> trong compose; tránh hardcode secret trong file commit. Có thể dùng Spring profiles (<code>SPRING_PROFILES_ACTIVE</code>) hoặc nhiều file compose (override) cho từng môi trường.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">4. Healthcheck + depends_on condition</div>
          <div class="theory-body"><code>depends_on</code> mặc định chỉ đảm bảo container kia đã <em>start</em>, KHÔNG đảm bảo nó đã <em>sẵn sàng nhận request</em> (Postgres start xong nhưng DB chưa accept connection). Để chờ đúng, định nghĩa <strong>healthcheck</strong> cho service (lệnh test định kỳ) và dùng <code>depends_on</code> với <code>condition: service_healthy</code> — service phụ thuộc chỉ khởi động sau khi dependency healthy. <strong>Production note:</strong> Docker Compose tuyệt cho dev/local và CI, nhưng để chạy production scale (auto-scaling, self-healing, rolling update đa node) thì dùng <strong>Kubernetes</strong>.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="yaml"># docker-compose.yml — full stack multi-service
services:
  gateway:
    build: ./gateway
    ports:
      - "8080:8080"            # chỉ gateway publish ra host
    environment:
      - SPRING_PROFILES_ACTIVE=docker
    depends_on:
      order-service:
        condition: service_healthy
      product-service:
        condition: service_healthy
    networks: [appnet]

  order-service:
    build: ./order-service
    environment:
      - DB_URL=jdbc:postgresql://postgres:5432/orderdb
      - REDIS_HOST=redis
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8081/actuator/health"]
      interval: 10s
      timeout: 3s
      retries: 5
    networks: [appnet]

  product-service:
    build: ./product-service
    environment:
      - DB_URL=jdbc:postgresql://postgres:5432/productdb
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8082/actuator/health"]
      interval: 10s
      timeout: 3s
      retries: 5
    networks: [appnet]

  postgres:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=app
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data    # dữ liệu bền vững
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      timeout: 3s
      retries: 10
    networks: [appnet]

  redis:
    image: redis:7-alpine
    networks: [appnet]

networks:
  appnet:
    driver: bridge

volumes:
  pgdata:</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="text"># Dockerfile multi-stage (recap) — gateway / mỗi service
# ---- Stage 1: build ----
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN ./mvnw -q clean package -DskipTests

# ---- Stage 2: runtime (image nhỏ, chỉ JRE + jar) ----
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]

# Multi-stage: stage build có toàn bộ JDK + source,
# stage runtime chỉ lấy file jar -> image gọn, ít lỗ hổng bảo mật.</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Viết một <strong>docker-compose.yml</strong> multi-service: gateway + 2 service + redis + postgres, dùng chung một network, chỉ publish gateway ra host.</li>
        <li>Thêm <strong>healthcheck</strong> cho mỗi service (Spring Boot Actuator <code>/actuator/health</code>) và cho postgres (<code>pg_isready</code>); dùng <code>depends_on: condition: service_healthy</code>.</li>
        <li>Kiểm chứng <strong>service-to-service call qua DNS name</strong>: từ order-service gọi <code>http://product-service:8082/...</code> (không hardcode IP), quan sát log thành công.</li>
        <li>Thử <strong>scale</strong> một service: <code>docker compose up --scale product-service=3</code>; quan sát 3 instance chạy và lý do vì sao không nên publish cố định port cho service được scale.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (8 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Docker Compose dùng để làm gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Docker Compose định nghĩa và chạy một ứng dụng nhiều container bằng một file YAML khai báo (services, networks, volumes). Chỉ với <code>docker compose up</code>, ta khởi động toàn bộ stack (gateway, các service, DB, cache) cùng lúc theo đúng thứ tự phụ thuộc. Cực kỳ tiện để dựng môi trường dev/local đầy đủ và dùng trong CI, thay vì phải chạy từng <code>docker run</code> thủ công và nhớ hết tham số.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Các service trong Compose tìm nhau bằng cách nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Bằng DNS nội bộ của Docker network. Khi các service nằm chung một network, Compose phân giải mỗi service theo tên service của nó. Ví dụ order-service gọi <code>http://product-service:8082</code>, Docker tự resolve "product-service" thành IP của container — không cần hardcode IP, IP có thể thay đổi tự do. Đây là dạng service discovery tối giản tích hợp sẵn.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">depends_on khác healthcheck thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>depends_on</code> mặc định chỉ đảm bảo thứ tự khởi động — container phụ thuộc start sau khi container kia đã <em>start</em>, nhưng "started" không có nghĩa là "ready" (Postgres process chạy rồi nhưng chưa accept connection). Healthcheck định nghĩa một lệnh test để biết service thực sự sẵn sàng. Kết hợp <code>depends_on</code> với <code>condition: service_healthy</code> mới đảm bảo service phụ thuộc chỉ khởi động khi dependency đã healthy thật sự, tránh lỗi connection refused lúc startup.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Volume dùng để làm gì? Tại sao Postgres cần volume?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Container có filesystem ephemeral — khi container bị xóa/tạo lại, dữ liệu bên trong mất hết. Volume là vùng lưu trữ bền vững do Docker quản lý, gắn vào container nhưng tồn tại độc lập với vòng đời container. Postgres cần volume (mount vào <code>/var/lib/postgresql/data</code>) để dữ liệu DB không mất khi container restart hay rebuild. Phân biệt với bind mount (gắn thư mục host) thường dùng để inject code/config lúc dev.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">expose và ports khác nhau ra sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>ports</code> (ví dụ "8080:8080") publish port của container ra host — máy host và bên ngoài truy cập được. <code>expose</code> chỉ mở port trong phạm vi Docker network nội bộ, các container khác gọi được nhưng host/bên ngoài thì không. Best practice cho microservices: chỉ <code>ports</code> cho gateway (điểm vào duy nhất), còn các service nội bộ chỉ giao tiếp trong network — giảm bề mặt tấn công (network isolation), buộc traffic phải đi qua gateway.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Cấu hình theo môi trường (dev/prod) trong Compose làm sao?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Dùng environment variables để tách config khỏi image (12-factor). Giá trị nhạy cảm/thay đổi (host DB, password) đặt trong file <code>.env</code> và tham chiếu <code>${VAR}</code> trong compose, không hardcode secret vào file commit. Có thể dùng <code>SPRING_PROFILES_ACTIVE</code> để chọn Spring profile, hoặc nhiều file compose (base + override per môi trường) gộp bằng <code>-f</code>. Cùng một image chạy được ở mọi môi trường chỉ bằng đổi env.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Docker Compose có dùng cho production không? Khi nào cần Kubernetes?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Compose tuyệt vời cho dev/local và CI vì khai báo đơn giản, dựng nhanh trên một máy. Nhưng cho production scale nó thiếu nhiều thứ: chạy đa node (Compose chỉ một host), auto-scaling theo tải, self-healing (tự restart/reschedule pod khi node chết), rolling update/rollback không downtime, service mesh, secret management chín muồi, scheduling tài nguyên. Kubernetes giải quyết tất cả những điều đó cho hệ phân tán nhiều node ở quy mô lớn. Quy tắc thực dụng: Compose cho dev và hệ nhỏ một host; Kubernetes (hoặc managed như EKS/GKE) khi cần HA, scale ngang đa node và vận hành production nghiêm túc.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">Walk me through how you run your microservices stack locally.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I use a single <code>docker-compose.yml</code> that defines every component: an API gateway, two business services, a Postgres database, and a Redis cache. They all share one bridge network, so each service can reach the others by service name through Docker's internal DNS — for example, the order service calls <code>http://product-service:8082</code> without any hardcoded IP. I only publish the gateway's port to the host; everything else stays internal for isolation. Each service has a healthcheck hitting its Actuator endpoint, and I use <code>depends_on</code> with <code>condition: service_healthy</code> so a service won't start until its database is actually ready, not just started. Config comes from environment variables and a <code>.env</code> file, so the same images run in any environment. With one <code>docker compose up</code>, the whole stack is running in seconds. For production scale, though, I'd move to Kubernetes for auto-scaling and self-healing."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#994 Rotting Oranges (Medium — BFS)</div><div class="bc-hint">Multi-source BFS theo từng "phút": queue chứa mọi cam thối ban đầu, lan ra hàng xóm theo level. Tư duy lan truyền trạng thái theo lớp.</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Hỏi AI: <em>"Review my docker-compose.yml for a gateway + 2 services + Postgres + Redis — check networking, healthchecks, and security (which ports should NOT be published)."</em></div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Docker Compose docs (docs.docker.com/compose) · Compose file reference (services/healthcheck/depends_on) · Spring Boot Actuator health endpoint · 12-factor app (config).</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w9-day-7">
  <div class="day-header" style="background:#8E44AD">
    <div class="day-header-left">
      <span class="day-icon">🎯</span>
      <div>
        <div class="day-date">12/07 — CN</div>
        <div class="day-topic">Spaced Review T1-T9 + Mini Project: 2-service System</div>
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
      <div class="en-content">
        <p><strong>Full Mock (45 phút) — System Design discussion in English.</strong> Tự phỏng vấn (hoặc nhờ AI làm interviewer) cho đề: <em>"Design a simple e-commerce backend with microservices."</em> Trình bày to ra theo cấu trúc:</p>
        <ul>
          <li>Clarify requirements &amp; scale assumptions.</li>
          <li>Identify services by bounded context (order, product, payment...).</li>
          <li>Communication: sync REST vs async events; database per service.</li>
          <li>Gateway for routing/auth/rate-limit; resilience with circuit breakers.</li>
          <li>Consistency: idempotency keys, saga for cross-service transactions.</li>
          <li>How to scale &amp; deploy (Compose for dev, Kubernetes for prod).</li>
        </ul>
        <p>Ghi âm toàn bộ 45 phút, nghe lại, đánh dấu thuật ngữ chưa trôi để luyện lại tuần sau.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi (Review T1-T9)</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">1. Microservices &amp; Communication (recap)</div>
          <div class="theory-body">Microservices = nhiều service nhỏ độc lập, chia theo bounded context, database per service; đổi đơn giản trong code lấy độc lập trong vận hành. Giao tiếp: sync (RestClient/WebClient/Feign + client-side load balancing + service discovery) cho query cần ngay; async (message queue) để decouple và chịu tải. Nhớ "Monolith First" — chỉ tách khi có lý do thật.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">2. Gateway &amp; Resilience (recap)</div>
          <div class="theory-body">Spring Cloud Gateway = single entry point (reactive, route = predicates + filters), tập trung auth/rate-limit/logging/CORS. Resilience4j chống cascade failure: Circuit Breaker (CLOSED/OPEN/HALF_OPEN, fail fast), Retry (backoff, chỉ idempotent), TimeLimiter, Bulkhead, và Fallback cho graceful degradation.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">3. Distributed Concurrency &amp; Docker (recap)</div>
          <div class="theory-body">Idempotency key chống xử lý lặp (payment/retry); distributed lock (Redis/Redisson, luôn có TTL) khi nhiều instance; eventual consistency + CAP (chọn C hay A khi có partition); saga + compensating action thay distributed transaction. Docker Compose dựng full stack dev (services/networks/volumes, DNS theo tên service, healthcheck + depends_on); Compose cho dev, Kubernetes cho prod scale.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">4. Nền tảng T1-T8 (spaced recall)</div>
          <div class="theory-body">Tự kiểm tra nhanh: Java core/OOP, Collections &amp; Generics, Streams/Optional, Exception, Concurrency (thread/executor/CompletableFuture, synchronized/volatile/atomic), JVM &amp; GC, Spring Boot (IoC/DI, REST, JPA/transaction), testing (JUnit/Mockito). Nói to một câu chốt cho mỗi chủ đề để kích hoạt trí nhớ dài hạn.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Mini Project: order-service + product-service + Gateway + Circuit Breaker</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="yaml"># gateway/application.yml — route tới 2 service, có circuit breaker
spring:
  cloud:
    gateway:
      routes:
        - id: order
          uri: lb://order-service
          predicates: [ Path=/api/orders/** ]
          filters:
            - StripPrefix=1
        - id: product
          uri: lb://product-service
          predicates: [ Path=/api/products/** ]
          filters:
            - StripPrefix=1</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// order-service: gọi product-service qua Feign + Circuit Breaker + fallback
@FeignClient(name = "product-service")
public interface ProductClient {
    @GetMapping("/api/products/{id}")
    Product getProduct(@PathVariable("id") Long id);
}

@Service
public class OrderService {
    private final ProductClient productClient;
    public OrderService(ProductClient productClient) { this.productClient = productClient; }

    @CircuitBreaker(name = "productCB", fallbackMethod = "createOrderFallback")
    public Order createOrder(Long productId, int qty) {
        Product p = productClient.getProduct(productId);   // có thể fail khi product down
        return new Order(productId, qty, p.price() * qty, "CONFIRMED");
    }

    // fallback: product-service down -&gt; tạo đơn PENDING, không sập
    public Order createOrderFallback(Long productId, int qty, Throwable ex) {
        return new Order(productId, qty, 0.0, "PENDING_PRICE");
    }
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="yaml"># docker-compose.yml — chạy full stack mini project
services:
  gateway:
    build: ./gateway
    ports: ["8080:8080"]
    depends_on:
      order-service: { condition: service_healthy }
      product-service: { condition: service_healthy }
    networks: [appnet]
  order-service:
    build: ./order-service
    healthcheck:
      test: ["CMD","curl","-f","http://localhost:8081/actuator/health"]
      interval: 10s
      retries: 5
    networks: [appnet]
  product-service:
    build: ./product-service
    healthcheck:
      test: ["CMD","curl","-f","http://localhost:8082/actuator/health"]
      interval: 10s
      retries: 5
    networks: [appnet]
networks: { appnet: { driver: bridge } }</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Hoàn thiện <strong>hệ 2-service</strong>: order-service + product-service đứng sau Spring Cloud Gateway; order gọi product qua Feign/WebClient có <code>@CircuitBreaker</code>. Chạy tất cả bằng <code>docker compose up</code>.</li>
        <li><strong>Test circuit breaker</strong>: dừng (kill) product-service (<code>docker compose stop product-service</code>), gọi tạo đơn qua gateway, xác nhận fallback kích hoạt (đơn PENDING thay vì lỗi 500), rồi start lại và xác nhận circuit về CLOSED.</li>
        <li><strong>Push GitHub</strong>: viết README bằng tiếng Anh có <strong>architecture diagram</strong> (ASCII hoặc Mermaid), mô tả services, communication, gateway, circuit breaker, cách chạy bằng Docker Compose.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Tổng Hợp T9 + T1-T9 (10 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Tóm tắt trong một câu: microservices đánh đổi điều gì lấy điều gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Microservices đánh đổi sự đơn giản trong code (giờ là hệ phân tán phức tạp) để lấy tính độc lập trong vận hành (deploy, scale, chọn tech và chịu lỗi độc lập theo từng service). Chỉ đáng khi lợi ích về scale/deploy/team lớn hơn chi phí distributed complexity.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Vai trò của API Gateway trong hệ vừa build là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Gateway là điểm vào duy nhất: client chỉ gọi gateway, gateway route theo path tới order-service hay product-service. Nó cũng là nơi tập trung cross-cutting concern như auth, rate limiting, logging. Trong Docker Compose, chỉ gateway publish port ra host còn các service nội bộ giữ kín — buộc mọi traffic đi qua gateway.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Trong mini project, circuit breaker bảo vệ điều gì cụ thể?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi order-service gọi product-service mà product down/chậm, nếu không có gì bảo vệ thì order-service sẽ treo thread chờ và có thể sập theo. Circuit breaker trên lời gọi đó phát hiện tỉ lệ lỗi cao, mở mạch và fail fast, chạy fallback (tạo đơn ở trạng thái PENDING_PRICE thay vì trả 500). Nhờ vậy order-service vẫn phục vụ, và product-service được giảm tải để hồi phục; khi product khỏe lại, circuit về CLOSED.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Làm sao đảm bảo data consistency giữa order và product/inventory?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Vì mỗi service own database riêng, không có transaction ACID xuyên service. Ta chấp nhận eventual consistency và dùng saga: order tạo ở trạng thái pending, phát event để inventory trừ kho và payment trừ tiền; mỗi bước là local transaction, nếu một bước fail thì chạy compensating action (hoàn tiền, trả kho, hủy đơn). Thêm idempotency key để retry không gây trừ kho/trừ tiền lặp.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">depends_on: condition: service_healthy quan trọng thế nào trong project này?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Nếu chỉ dùng depends_on mặc định, gateway có thể start trước khi order/product thực sự sẵn sàng nhận request, gây lỗi route lúc khởi động. Dùng <code>condition: service_healthy</code> kết hợp healthcheck (gọi Actuator /health) đảm bảo gateway chỉ lên sau khi các service đã healthy thật, và service chỉ lên sau khi Postgres ready — tránh các lỗi connection refused/503 chỉ xuất hiện lúc cold start.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Concurrency (T8) liên hệ thế nào với distributed concurrency (T9)?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Trong một JVM (T8), ta dùng synchronized/Lock/atomic/volatile để bảo vệ shared state giữa các thread cùng process; transaction DB cục bộ đảm bảo tính nhất quán. Khi lên phân tán (T9), shared state nằm trên nhiều process/máy nên các công cụ trong-JVM vô dụng — phải dùng distributed lock (Redis/Redisson), idempotency để chống xử lý lặp do retry, và saga thay cho transaction xuyên service. Tư duy chung giống nhau (tránh race condition, đảm bảo atomicity nơi cần), nhưng phạm vi và công cụ khác hẳn, và còn phải đối mặt network failure + eventual consistency.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Khi nào bạn KHÔNG nên dùng microservices cho dự án này?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Khi team nhỏ, sản phẩm còn ở giai đoạn MVP, domain chưa ổn định, và chưa gặp pain point thật về scale hay deploy. Lúc đó microservices chỉ thêm chi phí (network, distributed tracing, eventual consistency, infra, CI/CD cho nhiều service) mà chưa đem lợi ích tương xứng, thậm chí làm chậm phát triển. Nên bắt đầu bằng một modular monolith được cấu trúc tốt theo bounded context, rồi tách dần khi có lý do cụ thể — đúng tinh thần "Monolith First". Tách sai bounded context khi domain chưa rõ là sai lầm rất tốn kém để sửa.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Một request user đi qua hệ thống này như thế nào, end-to-end?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Client gọi gateway (port public). Gateway verify JWT, áp rate limit, gán correlation ID, rồi match predicate Path để route — ví dụ POST /api/orders tới order-service qua client-side load balancing (lb://). Order-service nhận request, cần giá sản phẩm nên gọi product-service qua Feign; lời gọi này được bọc circuit breaker + timeout. Nếu product khỏe, trả giá và order lưu đơn vào DB riêng (Postgres), có thể dùng distributed lock/idempotency cho bước trừ kho. Nếu product down, circuit breaker fail fast và fallback tạo đơn PENDING. Response đi ngược về gateway rồi tới client. Toàn bộ chạy trong một Docker network, service tìm nhau qua DNS theo tên. Logs/traces gắn correlation ID để theo dõi xuyên suốt.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">How would you scale this system if traffic grew 10x?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"First I'd find the bottleneck with metrics — usually one service, not all. Because each service is independent, I can scale just the hot one horizontally by running more instances behind client-side load balancing, instead of scaling the whole app. For local dev that's <code>docker compose up --scale</code>, but at 10x I'd move to Kubernetes for auto-scaling and self-healing. Stateless services scale easily; for the database I'd add read replicas and caching with Redis to take read pressure off Postgres, and consider partitioning if writes are the limit. The gateway is stateless too, so I'd run several instances behind a load balancer. I'd also rely on circuit breakers and bulkheads so a slow dependency under load doesn't cascade, and prefer async messaging for non-critical work to smooth out spikes."</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">Walk me through the architecture you designed and the key trade-offs.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"It's a microservices backend split by bounded context: an order service and a product service, each owning its own Postgres database, with Redis for caching and idempotency keys. All traffic enters through a Spring Cloud Gateway, which handles routing, authentication, and rate limiting, so cross-cutting concerns live in one place. The order service calls the product service synchronously through Feign, wrapped in a Resilience4j circuit breaker with a fallback, so if products go down we degrade gracefully instead of failing. For cross-service consistency I'd use a saga with compensating actions rather than distributed transactions, accepting eventual consistency. The whole stack runs locally with Docker Compose using an internal network and healthchecks. The main trade-off is complexity: I've traded simple in-process calls and ACID transactions for independent deployability and fault isolation — which is only worth it once the team and scale justify it. For a smaller product I'd start with a modular monolith."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">#210 Course Schedule II (Medium)</div><div class="bc-hint">Topological sort trả về thứ tự (Kahn's BFS với in-degree). Liên hệ: thứ tự khởi động service theo dependency, giống depends_on.</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Nhờ AI làm <em>interviewer</em>: <em>"Act as a senior engineer. Conduct a 30-minute system design interview on a microservices e-commerce backend, and give feedback on my answers."</em></div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">microservices.io (full pattern catalog) · "System Design Interview" (Alex Xu) · Spring Cloud reference · ôn lại note T1-T9 của chính mình.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w9-summary">
  <h2 class="section-h2">🎯 Tổng Kết Tuần 9</h2>
  <div class="summary-cols">
    <div>
      <h3 class="sub-h3">📋 Ngân Hàng Câu Hỏi Phỏng Vấn</h3>
      <p class="muted">Ôn lại cuối tuần — trả lời to ra, ghi âm, nghe lại.</p>
      <div class="sq-group">
        <div class="sq-group-title">Microservices Architecture</div>
        <div class="sq-item">
          <div class="sq-q">Q: What are microservices and how do they differ from a monolith?</div>
          <div class="sq-a">A: Microservices split a system into small, independently deployable services, each owning its own data and communicating over the network, whereas a monolith ships everything as one unit sharing one database. Microservices trade code-level simplicity for operational independence: you gain independent deployment, per-service scaling, tech freedom and fault isolation, but you take on distributed complexity, network failures and eventual consistency.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: Why "database per service" and what does bounded context mean?</div>
          <div class="sq-a">A: Database per service means each service owns its data and no other service touches that database directly — they go through its API. This keeps services loosely coupled and autonomous so they can change schema or scale independently. Bounded context (from DDD) is the business boundary you split services along, so each service maps to one cohesive domain rather than to a technical layer.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: When do you choose synchronous vs asynchronous communication?</div>
          <div class="sq-a">A: Use synchronous REST when the caller needs an immediate answer in the request flow. Use asynchronous messaging (Kafka/RabbitMQ) for events, notifications and background work, to decouple producers and consumers, absorb traffic spikes and stay resilient when one side is down — at the cost of complexity and eventual consistency.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Gateway &amp; Resilience</div>
        <div class="sq-item">
          <div class="sq-q">Q: What problem does the API Gateway pattern solve?</div>
          <div class="sq-a">A: It gives clients a single entry point so they don't need to know each service's address, and centralizes cross-cutting concerns — authentication, rate limiting, logging, CORS — instead of duplicating them in every service. It can also aggregate calls to reduce client round-trips. The risk is it becoming a bottleneck or single point of failure, so keep it lightweight and run multiple instances.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: Explain the circuit breaker's three states.</div>
          <div class="sq-a">A: CLOSED — requests flow normally while the breaker tracks the failure rate. OPEN — once failures exceed a threshold the breaker opens and requests fail fast with a fallback, giving the downstream time to recover. HALF_OPEN — after a wait it lets a few trial requests through; success returns it to CLOSED, failure sends it back to OPEN. This prevents cascade failure.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: How do fallback and retry work, and what's the catch with retry?</div>
          <div class="sq-a">A: A fallback returns a default, cached or reduced response when a call fails, so the system degrades gracefully instead of erroring out. Retry re-sends a request on transient failures with exponential backoff. The catch: only retry idempotent operations — otherwise a retried "charge" or "create order" can run twice and cause duplicate side-effects.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Distributed Systems</div>
        <div class="sq-item">
          <div class="sq-q">Q: How do you prevent a payment from being charged twice?</div>
          <div class="sq-a">A: Idempotency. The client sends a unique idempotency key with the request; the server stores processed keys with their result. If the same key arrives again (a retry or redelivery), the server returns the stored result instead of charging again. This makes the operation safe to repeat.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: Explain eventual consistency and the CAP theorem.</div>
          <div class="sq-a">A: CAP says that during a network partition a distributed system can only guarantee either consistency or availability, not both. Strong consistency means every read sees the latest write but may sacrifice availability; eventual consistency accepts temporarily stale reads but the replicas converge over time, favoring availability and performance. Microservices with database-per-service usually pick eventual consistency for cross-service data.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: What does Docker Compose give you for orchestrating services?</div>
          <div class="sq-a">A: Compose declares the whole multi-container stack — services, networks, volumes — in one YAML file and starts it with one command. Services find each other by name via Docker's internal DNS, healthchecks plus depends_on ensure correct startup order, and volumes persist data. It's ideal for dev and CI; for production scale (multi-node, auto-scaling, self-healing) you move to Kubernetes.</div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sub-h3">✅ Checklist Cuối Tuần</h3>
      <div class="checklist" data-week="9">
        <label class="check-item"><input type="checkbox" data-idx="1"><span>Hiểu rõ microservices vs monolith: trade-offs, "Monolith First", bounded context &amp; database per service</span></label>
        <label class="check-item"><input type="checkbox" data-idx="2"><span>Inter-service communication: gọi service khác bằng WebClient / RestClient / Feign + service discovery</span></label>
        <label class="check-item"><input type="checkbox" data-idx="3"><span>Spring Cloud Gateway: cấu hình routes (predicates + filters), hiểu cross-cutting concerns</span></label>
        <label class="check-item"><input type="checkbox" data-idx="4"><span>Circuit Breaker + fallback với Resilience4j (3 states, retry, timeout, bulkhead)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="5"><span>Idempotency key + distributed lock (Redis/Redisson) để xử lý concurrency phân tán</span></label>
        <label class="check-item"><input type="checkbox" data-idx="6"><span>Eventual consistency &amp; CAP theorem; biết khi nào dùng saga + compensating action</span></label>
        <label class="check-item"><input type="checkbox" data-idx="7"><span>Viết docker-compose.yml multi-service (gateway + 2 service + Redis + Postgres)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="8"><span>Service-to-service networking qua DNS theo tên service + healthcheck/depends_on</span></label>
        <label class="check-item"><input type="checkbox" data-idx="9"><span>Hoàn thành mini project 2-service + circuit breaker, test fallback khi kill 1 service</span></label>
        <label class="check-item"><input type="checkbox" data-idx="10"><span>Mock interview EN: trình bày system design microservices bằng tiếng Anh trôi chảy</span></label>
      </div>
      <div class="progress-wrap-outer"><div class="progress-wrap">
        <div class="progress-label">Hoàn thành: <strong class="progress-text">0/10</strong></div>
        <div class="progress-bar-bg"><div class="progress-bar"></div></div>
      </div></div>
      <div class="golden-rule">💡 <strong>Golden Rule Tuần 9:</strong> Microservices không phải "luôn tốt hơn" — chúng đổi complexity trong code lấy complexity trong vận hành. Monolith first, tách khi có lý do thật. Gateway = 1 cửa vào, Circuit Breaker = ngắt mạch tránh sập dây chuyền. Distributed system = ôm lấy eventual consistency + idempotency. Hiểu trade-off quan trọng hơn thuộc tool.</div>
    </div>
  </div>
</section>

