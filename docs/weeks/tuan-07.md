<div class="week-divider" id="week-7-start">🔐 Tuần 7 · JWT/Security + JUnit + RAG · 22/06–28/06/2025</div>

<section class="day-section" id="w7-overview">
  <h2 class="section-h2">📅 Lịch Học Tuần 7 — Tổng Quan 7 Ngày</h2>
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
        <td>22/06</td>
        <td>Thứ 2</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>Spring Security cơ bản: SecurityFilterChain, authentication vs authorization</td>
      </tr>
      <tr>
        <td>23/06</td>
        <td>Thứ 3</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>JWT: cấu trúc token, tạo/validate, JwtAuthenticationFilter, stateless auth</td>
      </tr>
      <tr>
        <td>24/06</td>
        <td>Thứ 4</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>Role-based access control: @PreAuthorize, GrantedAuthority, method security, password encoding</td>
      </tr>
      <tr>
        <td>25/06</td>
        <td>Thứ 5</td>
        <td><span class="mode-dot" style="background:#27AE60"></span>FULL</td>
        <td>2.5h</td>
        <td>JUnit 5: @Test, assertions, lifecycle, @ParameterizedTest, test structure (AAA)</td>
      </tr>
      <tr>
        <td>26/06</td>
        <td>Thứ 6</td>
        <td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td>
        <td>1.5h</td>
        <td>Mockito: @Mock, @InjectMocks, when/thenReturn, verify, @WebMvcTest/@DataJpaTest</td>
      </tr>
      <tr>
        <td>27/06</td>
        <td>Thứ 7</td>
        <td><span class="mode-dot" style="background:#C0392B"></span>WEEKEND</td>
        <td>4h</td>
        <td>RAG (Retrieval-Augmented Generation): embeddings, VectorStore, PGVector, similarity search</td>
      </tr>
      <tr>
        <td>28/06</td>
        <td>CN</td>
        <td><span class="mode-dot" style="background:#8E44AD"></span>REVIEW</td>
        <td>4h</td>
        <td>Spaced Review T1-T7 + Mini Project: Secured RAG Q&amp;A API (JWT + tests + PGVector)</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="day-section" id="w7-day-1">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">22/06 — Thứ 2</div>
        <div class="day-topic">Spring Security cơ bản: SecurityFilterChain, authn vs authz</div>
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
        <p><strong>Vocalmax 10 từ:</strong> authentication, authorization, principal, credential, filter chain, granted authority, security context, stateless, role, permission.</p>
        <p><strong>Parroto shadow:</strong> "Authentication verifies who you are; authorization decides what you can do."</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Authentication vs Authorization</div>
          <div class="theory-body">Authentication (authn): xác thực BẠN LÀ AI (login với username/password, token). Authorization (authz): xác định bạn ĐƯỢC LÀM GÌ (roles, permissions). Authn trước, authz sau. Ví dụ: login (authn) → admin được xóa user, user thường thì không (authz).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">SecurityFilterChain</div>
          <div class="theory-body">Spring Security 6: config bằng <code>SecurityFilterChain</code> bean (thay <code>WebSecurityConfigurerAdapter</code> cũ). Định nghĩa: endpoint nào cần auth, endpoint nào public (<code>permitAll</code>), CSRF, session policy. Request đi qua chuỗi filters trước khi tới controller.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">SecurityContext + Principal</div>
          <div class="theory-body"><code>SecurityContextHolder</code> lưu thông tin authenticated user (trong ThreadLocal). <code>Authentication</code> object chứa principal (user), authorities (roles), credentials. Lấy current user: <code>SecurityContextHolder.getContext().getAuthentication()</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Filter chain flow</div>
          <div class="theory-body">Request → các Security filters (authentication, authorization) → nếu pass → controller. <code>UsernamePasswordAuthenticationFilter</code>, <code>JwtAuthenticationFilter</code> (custom). Filter order quan trọng. Mỗi filter có 1 trách nhiệm cụ thể (chain of responsibility pattern).</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -&gt; csrf.disable()) // disable for stateless REST API
            .authorizeHttpRequests(auth -&gt; auth
                .requestMatchers("/api/auth/**", "/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -&gt; session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // no session, use JWT
            );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

// Get current authenticated user
@GetMapping("/me")
public String currentUser() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    return "Logged in as: " + auth.getName();
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Setup Spring Security, config <code>SecurityFilterChain</code>: public <code>/api/public/**</code>, còn lại cần auth.</li>
        <li>Thêm <code>BCryptPasswordEncoder</code> bean, encode 1 password và verify.</li>
        <li>Tạo endpoint <code>/me</code> lấy current user từ <code>SecurityContextHolder</code>.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Authentication và Authorization khác nhau thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Authentication (authn) = xác thực bạn là ai (login, verify credentials/token). Authorization (authz) = xác định bạn được phép làm gì (roles, permissions). Authn xảy ra trước, authz sau. Ví dụ: đăng nhập = authn; chỉ admin xóa được user = authz.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">SecurityFilterChain là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Bean config Spring Security 6 định nghĩa cách bảo vệ HTTP requests: endpoint nào public/cần auth, role yêu cầu, CSRF, session policy. Thay thế <code>WebSecurityConfigurerAdapter</code> deprecated. Request đi qua chuỗi security filters trước khi tới controller.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao REST API thường set SessionCreationPolicy.STATELESS?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">REST API stateless theo nguyên tắc — không lưu session server-side. Mỗi request tự chứa auth info (JWT token trong header). Lợi ích: scale ngang dễ (không cần sticky session/session replication), phù hợp microservices. Trade-off: không revoke token dễ như session (cần blacklist/short expiry).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">SecurityContextHolder hoạt động thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Lưu <code>Authentication</code> của current user trong ThreadLocal (mặc định) — mỗi request thread có context riêng. Sau khi authenticate, filter set Authentication vào đó. Code lấy ra: <code>SecurityContextHolder.getContext().getAuthentication()</code>. Cảnh báo: ThreadLocal + thread pool → phải clear sau request (Spring tự làm), @Async mất context (cần propagate).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">CSRF là gì? Tại sao disable cho stateless JWT API nhưng cần cho session-based?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">CSRF (Cross-Site Request Forgery): browser tự gửi cookies (session) trong request từ site độc hại → thực hiện hành động thay user. Session-based dùng cookies → dễ bị CSRF → cần CSRF token. JWT trong Authorization header (không phải cookie) → browser không tự gửi → không bị CSRF → disable được. Nếu JWT lưu trong cookie → vẫn cần CSRF protection.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">Two Sum (LC #1)</div><div class="bc-hint">Easy — review hashmap</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI giải thích security filter chain flow — request đi qua các filter nào theo thứ tự nào.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring Security reference "Architecture" + Baeldung "Spring Security".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w7-day-2">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">23/06 — Thứ 3</div>
        <div class="day-topic">JWT: cấu trúc, tạo/validate, stateless auth</div>
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
        <p><strong>Câu shadowing:</strong> "A JWT consists of a header, a payload, and a signature", "The token is signed to prevent tampering", "Stateless authentication scales horizontally".</p>
        <p><strong>Vocalmax:</strong> token, claim, signature, payload, header, bearer, expiration, secret key, decode, tamper.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">JWT structure</div>
          <div class="theory-body">3 phần ngăn bởi dấu chấm: <code>header.payload.signature</code> (Base64URL encoded). Header: algorithm (HS256/RS256) + type. Payload: claims (sub, exp, iat, custom data như roles). Signature: ký header+payload bằng secret → đảm bảo không bị sửa. KHÔNG mã hóa — payload đọc được (đừng để secret trong payload).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Tạo + validate JWT</div>
          <div class="theory-body">Library <code>jjwt</code> (io.jsonwebtoken). Tạo: <code>Jwts.builder().subject(username).claim("roles", roles).expiration(...).signWith(key).compact()</code>. Validate: parse + verify signature + check expiration. Sai signature/hết hạn → throw exception.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Bearer token flow</div>
          <div class="theory-body">Client login → server trả JWT. Client lưu (localStorage/memory) → gửi mỗi request header <code>Authorization: Bearer &lt;token&gt;</code>. Server validate token mỗi request (stateless, không cần DB lookup session). Token chứa đủ info (user, roles) để authorize.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">JwtAuthenticationFilter</div>
          <div class="theory-body">Custom filter extends <code>OncePerRequestFilter</code>. Mỗi request: extract token từ header → validate → tạo <code>Authentication</code> → set vào <code>SecurityContextHolder</code>. Đặt trước <code>UsernamePasswordAuthenticationFilter</code> trong chain. Không token/invalid → tiếp tục chain (anonymous) hoặc reject.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@Component
public class JwtService {
    private final SecretKey key = Keys.hmacShaKeyFor(secret.getBytes());

    public String generateToken(String username, List&lt;String&gt; roles) {
        return Jwts.builder()
            .subject(username)
            .claim("roles", roles)
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + 3600_000)) // 1h
            .signWith(key)
            .compact();
    }

    public String extractUsername(String token) {
        return parseClaims(token).getSubject();
    }

    public boolean isValid(String token) {
        try { parseClaims(token); return true; }
        catch (JwtException e) { return false; } // invalid signature or expired
    }

    private Claims parseClaims(String token) {
        return Jwts.parser().verifyWith(key).build()
            .parseSignedClaims(token).getPayload();
    }
}

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res,
                                    FilterChain chain) throws ServletException, IOException {
        String header = req.getHeader("Authorization");
        if (header != null &amp;&amp; header.startsWith("Bearer ")) {
            String token = header.substring(7);
            if (jwtService.isValid(token)) {
                String username = jwtService.extractUsername(token);
                var auth = new UsernamePasswordAuthenticationToken(username, null, List.of());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        chain.doFilter(req, res);
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Tạo <code>JwtService</code> generate + validate token với jjwt library.</li>
        <li>Tạo <code>/api/auth/login</code> endpoint: verify credentials → trả JWT.</li>
        <li>Implement <code>JwtAuthenticationFilter</code>, đăng ký vào SecurityFilterChain.</li>
        <li>Test full flow: login lấy token → gọi protected endpoint với <code>Authorization: Bearer &lt;token&gt;</code>.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">JWT gồm những phần nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">3 phần ngăn bởi dấu chấm: Header (algorithm + type), Payload (claims: sub, exp, custom data), Signature (ký header+payload bằng secret). Format: <code>xxxxx.yyyyy.zzzzz</code>, mỗi phần Base64URL encoded. Signature đảm bảo integrity (không bị sửa).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">JWT có được mã hóa không? Lưu gì trong payload?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">KHÔNG mã hóa — chỉ Base64 encode (decode được dễ dàng). Signature chỉ đảm bảo không bị TAMPER, không giấu nội dung. Vì vậy KHÔNG để dữ liệu nhạy cảm (password, secret) trong payload. Chỉ lưu: user id, username, roles, expiration — đủ để authorize.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Stateless JWT auth khác session-based auth thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Session: server lưu session state (memory/DB), client giữ session ID (cookie), mỗi request server lookup session. JWT: server không lưu gì, token tự chứa info, validate bằng signature (không DB lookup). JWT scale ngang dễ (no shared session store), session dễ revoke hơn (xóa server-side).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao dùng OncePerRequestFilter cho JWT filter?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>OncePerRequestFilter</code> đảm bảo filter chạy ĐÚNG 1 LẦN mỗi request (kể cả khi có forward/include internal). Tránh validate token nhiều lần (lãng phí + có thể gây bug double-authentication). Là base class chuẩn cho custom security filters.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Refresh token là gì? Tại sao cần?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Access token nên short-lived (15p-1h) để giảm rủi ro nếu bị lộ. Nhưng bắt user login lại mỗi giờ thì tệ. Refresh token (long-lived, lưu an toàn) dùng để lấy access token mới khi hết hạn mà không cần login lại. Refresh token lưu server-side (revoke được), access token stateless.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">JWT có nhược điểm gì về bảo mật và cách mitigate?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) Không revoke được trước khi hết hạn (stateless) → dùng short expiry + refresh token + blacklist cho critical. (2) Nếu bị lộ (XSS) → attacker dùng được tới khi hết hạn → lưu httpOnly cookie hoặc memory, không localStorage. (3) Payload đọc được → không để PII. (4) Secret key lộ → tất cả token compromise → rotate keys, dùng RS256 (asymmetric). (5) "alg: none" attack → luôn verify algorithm.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Walk me through how JWT authentication works in a Spring Boot API."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"On login, the server verifies credentials and issues a signed JWT containing the username and roles with a short expiration. The client stores it and sends it in the Authorization header as a Bearer token on each request. A custom filter extending OncePerRequestFilter extracts the token, verifies the signature and expiration, and if valid, builds an Authentication object and places it in the SecurityContext. This is stateless — the server stores no session — so it scales horizontally. For security I use short-lived access tokens with refresh tokens, and I never put sensitive data in the payload since it's only encoded, not encrypted."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">Isomorphic Strings (LC #205)</div><div class="bc-hint">Easy — hashmap</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI debug JWT validation issues — sai signature, hết hạn, sai algorithm.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">jwt.io (decode tokens) + Baeldung "Spring Security JWT".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w7-day-3">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">24/06 — Thứ 4</div>
        <div class="day-topic">Role-based access control + method security</div>
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
        <p><strong>Câu shadowing:</strong> "The @PreAuthorize annotation checks permissions before the method runs", "Passwords must be hashed, never stored in plain text", "Role-based access control restricts actions by user role".</p>
        <p><strong>Vocalmax:</strong> role, authority, permission, hash, salt, bcrypt, pre-authorize, method security, hierarchy, grant.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Role vs Authority</div>
          <div class="theory-body">Authority: quyền cụ thể (<code>READ_USER</code>, <code>DELETE_POST</code>). Role: nhóm authorities, prefix <code>ROLE_</code> (<code>ROLE_ADMIN</code>). <code>hasRole("ADMIN")</code> tự thêm prefix <code>ROLE_</code>, <code>hasAuthority("ROLE_ADMIN")</code> thì không. Spring lưu cả 2 dạng <code>GrantedAuthority</code>. Role coarse-grained, authority fine-grained.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">@PreAuthorize / @PostAuthorize</div>
          <div class="theory-body">Method-level security. <code>@PreAuthorize("hasRole('ADMIN')")</code> check TRƯỚC khi chạy method. <code>@PostAuthorize("returnObject.owner == authentication.name")</code> check SAU (dựa kết quả). SpEL expressions. Bật bằng <code>@EnableMethodSecurity</code>. Linh hoạt hơn URL-based config.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Password encoding (BCrypt)</div>
          <div class="theory-body">KHÔNG BAO GIỜ lưu plain password. <code>BCryptPasswordEncoder</code>: hash 1 chiều + salt tự động (mỗi hash khác nhau dù cùng password). <code>encode(raw)</code> khi lưu, <code>matches(raw, hashed)</code> khi verify. BCrypt chậm có chủ đích (chống brute-force), có cost factor (work factor).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">UserDetailsService</div>
          <div class="theory-body">Interface load user data cho authentication. <code>loadUserByUsername(username)</code> → trả <code>UserDetails</code> (username, hashed password, authorities). Spring dùng để verify login. Custom implementation query DB. <code>AuthenticationManager</code> dùng nó + PasswordEncoder để authenticate.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -&gt; new UsernameNotFoundException(username));
        return org.springframework.security.core.userdetails.User
            .withUsername(user.getUsername())
            .password(user.getPassword()) // already BCrypt-hashed
            .authorities(user.getRoles().stream()
                .map(r -&gt; new SimpleGrantedAuthority("ROLE_" + r))
                .toList())
            .build();
    }
}

@RestController
@RequestMapping("/api")
@EnableMethodSecurity
public class AdminController {

    @GetMapping("/admin/users")
    @PreAuthorize("hasRole('ADMIN')")
    public List&lt;UserDto&gt; allUsers() { ... }

    @DeleteMapping("/posts/{id}")
    @PreAuthorize("hasRole('ADMIN') or @postService.isOwner(#id, authentication.name)")
    public void deletePost(@PathVariable Long id) { ... }

    // Registration: hash password before saving
    @PostMapping("/register")
    public void register(@RequestBody RegisterRequest req) {
        String hashed = passwordEncoder.encode(req.password());
        userRepository.save(new User(req.username(), hashed, Set.of("USER")));
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Implement <code>CustomUserDetailsService</code> query user từ DB.</li>
        <li>Thêm <code>@PreAuthorize("hasRole('ADMIN')")</code> cho admin endpoints, test với user thường → 403.</li>
        <li>Registration endpoint: hash password với BCrypt trước khi lưu, verify hash khác nhau mỗi lần.</li>
        <li>Implement ownership check: <code>@PreAuthorize</code> cho phép owner hoặc admin xóa resource.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Role và Authority khác nhau thế nào trong Spring Security?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Authority: quyền cụ thể (fine-grained, vd <code>DELETE_POST</code>). Role: nhóm quyền, có prefix <code>ROLE_</code> (coarse-grained, vd <code>ROLE_ADMIN</code>). <code>hasRole("ADMIN")</code> tự thêm prefix → check <code>ROLE_ADMIN</code>. <code>hasAuthority("ROLE_ADMIN")</code> không thêm prefix. Cùng cơ chế GrantedAuthority bên dưới.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Tại sao không bao giờ lưu password dạng plain text?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Nếu DB bị lộ, tất cả password lộ ngay → attacker dùng login mọi nơi (users tái dùng password). Phải hash 1 chiều (không reverse được) với salt. Dùng BCrypt/Argon2. Lưu hash, khi login hash input rồi so sánh hash. Plain text password = vi phạm bảo mật nghiêm trọng.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao BCrypt cố tình chậm? Salt giúp gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Chậm (cost factor) để chống brute-force: attacker thử hàng tỷ password/giây với hash nhanh (MD5), nhưng BCrypt giới hạn còn vài nghìn/giây → infeasible. Salt (random per password) chống rainbow table + đảm bảo 2 user cùng password có hash khác nhau → không lộ pattern. BCrypt tự embed salt trong hash.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">@PreAuthorize vs URL-based authorization (trong SecurityFilterChain)?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">URL-based: config tập trung trong SecurityFilterChain, theo path pattern (coarse). @PreAuthorize: method-level, dùng SpEL linh hoạt (check ownership, complex logic, dùng method args). @PreAuthorize gần business logic hơn, biểu đạt phức tạp hơn. Thường kết hợp cả 2: URL cho coarse, @PreAuthorize cho fine-grained.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">UserDetailsService dùng để làm gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Interface Spring Security dùng để load user data khi authenticate. <code>loadUserByUsername</code> trả <code>UserDetails</code> (username + hashed password + authorities). AuthenticationManager dùng nó + PasswordEncoder verify login. Custom implementation query DB của bạn. Là cầu nối giữa Spring Security và user store.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">@PreAuthorize hoạt động thế nào dưới capô? Hạn chế gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Dùng Spring AOP proxy — wrap method, evaluate SpEL expression trước khi chạy. Như @Transactional, KHÔNG work với self-invocation (gọi method trong cùng class bypass proxy). Cũng không work trên <code>private</code>/<code>final</code> method (proxy không override được). SpEL evaluate runtime → typo không catch compile-time. Cẩn thận performance với complex SpEL gọi DB.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How do you implement role-based access control in Spring Boot?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I store roles with each user and load them as GrantedAuthorities via a custom UserDetailsService. At the URL level I configure coarse rules in the SecurityFilterChain — for example, /api/admin requires ROLE_ADMIN. For fine-grained control I use @PreAuthorize with SpEL on service methods, which lets me check ownership like 'hasRole(ADMIN) or #resource.owner == authentication.name'. Passwords are always BCrypt-hashed. I enable method security with @EnableMethodSecurity, and I'm careful that @PreAuthorize, being AOP-based, doesn't work on self-invoked or private methods."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">Word Pattern (LC #290)</div><div class="bc-hint">Easy — hashmap</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI review security config cho vulnerabilities — sai role prefix, endpoint hở, plain password.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring Security "Method Security" + OWASP password storage cheat sheet.</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w7-day-4">
  <div class="day-header" style="background:#27AE60">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">25/06 — Thứ 5</div>
        <div class="day-topic">JUnit 5: @Test, assertions, lifecycle, @ParameterizedTest, AAA</div>
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
        <p><strong>Câu shadowing:</strong> "A unit test verifies a single piece of behavior in isolation", "Arrange, act, assert is the standard test structure", "Parameterized tests run the same test with different inputs".</p>
        <p><strong>Vocalmax:</strong> unit test, assertion, fixture, lifecycle, parameterized, arrange act assert, edge case, coverage, isolation, regression.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">JUnit 5 cơ bản</div>
          <div class="theory-body"><code>@Test</code> đánh dấu test method. Assertions: <code>assertEquals(expected, actual)</code>, <code>assertTrue</code>, <code>assertNull</code>, <code>assertThrows(Ex.class, () -&gt; ...)</code>, <code>assertAll</code> (nhóm). Package <code>org.junit.jupiter.api</code>. Test class không cần public (JUnit 5). <code>assertThrows</code> test exception.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Lifecycle annotations</div>
          <div class="theory-body"><code>@BeforeEach</code> (chạy trước MỖI test — setup fixture), <code>@AfterEach</code> (cleanup), <code>@BeforeAll</code>/<code>@AfterAll</code> (1 lần cho cả class, phải static). Mỗi test method tạo instance mới (isolation). <code>@DisplayName</code> đặt tên readable. <code>@Disabled</code> skip test.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">AAA pattern (Arrange-Act-Assert)</div>
          <div class="theory-body">Cấu trúc test rõ ràng: Arrange (setup data + mocks), Act (gọi method test), Assert (verify kết quả). Mỗi test 1 behavior. Tên test mô tả: <code>should_ReturnStudent_When_IdExists</code>. Given-When-Then là biến thể (BDD style).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">@ParameterizedTest</div>
          <div class="theory-body">Chạy cùng test với nhiều inputs. <code>@ValueSource(ints = {1,2,3})</code>, <code>@CsvSource({"1,2,3", "4,5,9"})</code>, <code>@MethodSource</code> (data từ method). Giảm code lặp, test nhiều edge cases. <code>@ParameterizedTest</code> thay <code>@Test</code>.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">class StudentServiceTest {

    private StudentService service;

    @BeforeEach
    void setUp() {
        service = new StudentService(); // fresh instance per test
    }

    @Test
    @DisplayName("should calculate average GPA correctly")
    void shouldCalculateAverageGpa() {
        // Arrange
        List&lt;Double&gt; gpas = List.of(3.0, 4.0, 3.5);
        // Act
        double avg = service.calculateAverage(gpas);
        // Assert
        assertEquals(3.5, avg, 0.001);
    }

    @Test
    void shouldThrowWhenListEmpty() {
        assertThrows(IllegalArgumentException.class,
            () -&gt; service.calculateAverage(List.of()));
    }

    @ParameterizedTest
    @CsvSource({ "3.0, true", "1.5, false", "2.0, true" })
    void shouldDeterminePassingStatus(double gpa, boolean expected) {
        assertEquals(expected, service.isPassing(gpa));
    }

    @Test
    void shouldValidateAllFields() {
        Student s = new Student("Long", "long@x.com", 3.5);
        assertAll("student",
            () -&gt; assertEquals("Long", s.getName()),
            () -&gt; assertTrue(s.getGpa() &gt; 0),
            () -&gt; assertNotNull(s.getEmail())
        );
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Viết test class cho <code>StudentService</code> với <code>@BeforeEach</code> setup + 3 test methods (AAA).</li>
        <li>Test exception bằng <code>assertThrows</code>, verify message.</li>
        <li>Dùng <code>@ParameterizedTest</code> + <code>@CsvSource</code> test <code>isPassing</code> với 5 cases.</li>
        <li>Dùng <code>assertAll</code> verify nhiều fields cùng lúc.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (7 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Unit test là gì? Tại sao quan trọng?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Test 1 đơn vị code (method/class) ISOLATED khỏi dependencies. Quan trọng: bắt bug sớm, làm tài liệu sống (test mô tả behavior), enable refactoring an toàn (regression detection), tăng confidence khi deploy. Fast + repeatable. Khác integration test (test nhiều components together).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@BeforeEach vs @BeforeAll khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>@BeforeEach</code>: chạy TRƯỚC MỖI test method (setup fresh fixture, đảm bảo isolation). <code>@BeforeAll</code>: chạy 1 LẦN trước tất cả tests trong class (phải static — vì chạy trước khi tạo instance). Dùng @BeforeEach cho mutable state, @BeforeAll cho expensive shared setup (DB connection).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">AAA pattern là gì? Tại sao nên theo?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Arrange (chuẩn bị data + mocks) - Act (gọi method cần test) - Assert (kiểm tra kết quả). Giúp test rõ ràng, dễ đọc, mỗi phần 1 mục đích. Mỗi test nên test 1 behavior. Tên test mô tả: should_X_when_Y. Test dễ maintain + người khác hiểu nhanh.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">assertThrows hoạt động thế nào? Tại sao không dùng try-catch?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>assertThrows(Exception.class, () -&gt; code)</code> verify code throw đúng exception type, trả về exception để assert message. Sạch hơn try-catch (try-catch dễ quên <code>fail()</code> nếu không throw → false pass). assertThrows tường minh: test PHẢI throw, nếu không → test fail tự động.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">@ParameterizedTest giúp gì? Khi nào dùng?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Chạy cùng logic test với nhiều bộ input → giảm code lặp, test nhiều edge cases gọn gàng. Sources: @ValueSource (1 param đơn giản), @CsvSource (nhiều params), @MethodSource (complex objects), @EnumSource. Dùng khi: test boundary values, nhiều input-output pairs cùng logic (vd validation rules).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Test isolation là gì? JUnit đảm bảo thế nào? Pitfalls?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Mỗi test độc lập, không phụ thuộc thứ tự/state test khác. JUnit tạo INSTANCE MỚI của test class cho mỗi test method (default lifecycle PER_METHOD) → instance fields reset. Pitfalls: static mutable state (shared, leak giữa tests), external state (DB, files — cần cleanup @AfterEach), test order dependency (anti-pattern). Shared expensive resource: @BeforeAll + cleanup cẩn thận.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How do you write good unit tests?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"I follow the Arrange-Act-Assert structure so each test is readable and focused on one behavior. I name tests descriptively, like 'shouldThrowWhenGpaIsNegative', so failures are self-documenting. I test the happy path plus edge cases and error conditions, using parameterized tests to cover multiple inputs without duplication. I keep tests isolated — no shared mutable state, fresh fixtures via @BeforeEach — so they can run in any order. Good unit tests are fast, deterministic, and serve as living documentation that makes refactoring safe."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">Merge Sorted Array (LC #88)</div><div class="bc-hint">Easy — two pointers</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI generate test cases + edge cases cho 1 method có sẵn.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">JUnit 5 User Guide + "Practical Unit Testing".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w7-day-5">
  <div class="day-header" style="background:#E67E22">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">26/06 — Thứ 6</div>
        <div class="day-topic">Mockito + Spring test slices</div>
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
        <p><strong>Vocalmax 10 từ:</strong> mock, stub, spy, verify, dependency, isolation, behavior, interaction, test slice, integration.</p>
        <p><strong>Parroto shadow:</strong> "Mockito lets you replace dependencies with controllable fake objects."</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Tại sao Mockito</div>
          <div class="theory-body">Unit test cần isolate class khỏi dependencies (DB, external API). Mock = fake object thay dependency thật, control behavior. <code>@Mock</code> tạo mock, <code>@InjectMocks</code> inject mocks vào class under test. <code>@ExtendWith(MockitoExtension.class)</code>. Test logic không cần DB thật → nhanh + deterministic.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">when/thenReturn + verify</div>
          <div class="theory-body">Stub: <code>when(repo.findById(1L)).thenReturn(Optional.of(student))</code> định nghĩa mock trả gì. Verify interaction: <code>verify(repo).save(any())</code> kiểm tra method được gọi. <code>verify(repo, times(2))</code>, <code>never()</code>, <code>verifyNoInteractions()</code>. <code>thenThrow</code> cho test error path.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Mock vs Stub vs Spy</div>
          <div class="theory-body">Stub: cung cấp canned answers (when/thenReturn). Mock: stub + verify interactions. Spy: wrap object THẬT, override 1 phần (<code>@Spy</code>) — phần không stub gọi real method. ArgumentCaptor: capture args truyền vào mock để assert. <code>any()</code>, <code>eq()</code>, <code>anyString()</code> matchers.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Spring test slices</div>
          <div class="theory-body"><code>@WebMvcTest</code>: chỉ load web layer (controller + MockMvc), mock service. <code>@DataJpaTest</code>: chỉ JPA layer (repository + H2 in-memory). <code>@SpringBootTest</code>: full context (integration). Slices nhanh hơn full context. <code>@MockBean</code> inject mock vào Spring context (khác <code>@Mock</code> thuần Mockito).</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@ExtendWith(MockitoExtension.class)
class StudentServiceTest {

    @Mock
    private StudentRepository repository; // fake dependency

    @Mock
    private EmailService emailService;

    @InjectMocks
    private StudentService service; // mocks injected here

    @Test
    void shouldReturnStudentWhenExists() {
        // Arrange — stub the mock
        Student student = new Student("Long", "long@x.com", 3.5);
        when(repository.findById(1L)).thenReturn(Optional.of(student));

        // Act
        StudentDto result = service.findById(1L);

        // Assert
        assertEquals("Long", result.name());
        verify(repository).findById(1L); // verify interaction
    }

    @Test
    void shouldSendEmailOnCreate() {
        when(repository.save(any(Student.class)))
            .thenAnswer(inv -&gt; inv.getArgument(0));

        service.create(new CreateRequest("Long", "long@x.com", 3.5));

        verify(emailService).sendWelcome("long@x.com"); // verify side effect
    }

    @Test
    void shouldThrowWhenNotFound() {
        when(repository.findById(99L)).thenReturn(Optional.empty());
        assertThrows(StudentNotFoundException.class, () -&gt; service.findById(99L));
    }
}</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Viết test cho <code>StudentService</code> dùng <code>@Mock</code> repository + <code>@InjectMocks</code> service.</li>
        <li>Stub <code>findById</code> trả Optional.empty() → verify throw exception (error path).</li>
        <li>Dùng <code>verify</code> kiểm tra <code>emailService.sendWelcome()</code> được gọi đúng args khi create.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Tại sao cần Mockito trong unit test?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Để isolate class under test khỏi dependencies (DB, API, services khác). Mock = fake object control được, thay dependency thật → test chỉ logic của class đó, không phụ thuộc DB/network → nhanh, deterministic, không cần setup phức tạp. Bug ở đâu rõ ràng (không lẫn từ dependency).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@Mock vs @InjectMocks khác nhau?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>@Mock</code>: tạo mock object cho dependency. <code>@InjectMocks</code>: tạo instance class under test và inject các @Mock vào (qua constructor/field). Vd: <code>@Mock repository</code> + <code>@InjectMocks service</code> → service được tạo với mock repository injected. Cần <code>@ExtendWith(MockitoExtension.class)</code>.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">when/thenReturn vs verify — khác mục đích thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>when().thenReturn()</code>: STUB — định nghĩa mock trả gì khi gọi (setup state, kiểm tra output). <code>verify()</code>: kiểm tra INTERACTION — method có được gọi không, bao nhiêu lần, với args nào (kiểm tra behavior/side-effect). Stub cho input, verify cho output behavior. Dùng verify khi test side-effects (save, send email).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">@WebMvcTest vs @DataJpaTest vs @SpringBootTest?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>@WebMvcTest</code>: load chỉ web layer (controllers + MockMvc), mock services — test request/response, validation, status codes. <code>@DataJpaTest</code>: chỉ JPA (repositories + H2) — test queries. <code>@SpringBootTest</code>: full context — integration test toàn bộ. Slices nhanh hơn (load ít beans), full context chậm nhưng test thật end-to-end.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Mock vs Spy khác nhau? Khi nào dùng Spy? Pitfall?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Mock: fake hoàn toàn, mọi method trả default (null/0) trừ khi stub. Spy: wrap object THẬT, gọi real method trừ khi stub override. Dùng Spy khi: test legacy code, chỉ muốn override 1 phần class, hoặc partial mocking. Pitfall: Spy gọi real method khi stub (<code>when(spy.method())</code> vẫn execute real method 1 lần) → dùng <code>doReturn().when(spy).method()</code> thay vì <code>when().thenReturn()</code> để tránh. Spy dễ gây confusion → ưu tiên Mock + refactor.</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">First Unique Character in a String (LC #387)</div><div class="bc-hint">Easy — hashmap</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Dùng AI generate Mockito stubs + test scenarios cho service có dependencies.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Mockito docs + Baeldung "Spring Boot Testing".</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w7-day-6">
  <div class="day-header" style="background:#C0392B">
    <div class="day-header-left">
      <span class="day-icon">🔥</span>
      <div>
        <div class="day-date">27/06 — Thứ 7</div>
        <div class="day-topic">RAG: embeddings, VectorStore, PGVector, similarity search</div>
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
        <p>Nghe + shadow "Introduction to RAG and Vector Databases" 30 phút, practice câu phỏng vấn EN về RAG.</p>
        <p><strong>Vocalmax:</strong> review 20 từ Security/Testing/RAG khó nhất tuần.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">RAG là gì + tại sao</div>
          <div class="theory-body">Retrieval-Augmented Generation: tìm documents liên quan từ knowledge base → inject vào prompt → LLM trả lời dựa trên data thật. Giải quyết: hallucination (LLM bịa), knowledge cutoff (data cũ), domain knowledge (LLM không biết data riêng công ty). Rẻ hơn fine-tuning, update knowledge dễ (chỉ thêm docs).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Embeddings + similarity</div>
          <div class="theory-body">Embedding: chuyển text thành vector số (vd 1536 chiều) capture ý nghĩa ngữ nghĩa. Text giống nghĩa → vector gần nhau. Similarity search: tìm vectors gần query vector nhất (cosine similarity / Euclidean distance). <code>EmbeddingModel</code> tạo embeddings. Đây là "retrieval" trong RAG.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">VectorStore + PGVector</div>
          <div class="theory-body">VectorStore: DB lưu + search embeddings. Spring AI abstraction <code>VectorStore</code> (add documents, similaritySearch). PGVector: extension PostgreSQL lưu vectors + index (HNSW/IVFFlat) cho fast similarity search. Khác: Pinecone, Chroma, Redis. PGVector tốt vì dùng luôn Postgres có sẵn.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">RAG pipeline</div>
          <div class="theory-body">(1) Ingest: split documents thành chunks → embed → lưu VectorStore. (2) Query: embed câu hỏi → similaritySearch lấy top-K chunks liên quan → (3) Augment: nhét chunks vào prompt làm context → (4) Generate: LLM trả lời từ context. Spring AI: <code>QuestionAnswerAdvisor</code> tự động hóa retrieval + augment.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@Service
public class IngestionService {
    private final VectorStore vectorStore; // Spring AI abstraction (PGVector backing)

    public void ingest(List&lt;String&gt; texts) {
        List&lt;Document&gt; documents = texts.stream()
            .map(Document::new) // each text becomes a Document
            .toList();
        // Spring AI: embeds each doc + stores vector in PGVector
        vectorStore.add(documents);
    }

    // Split large text into chunks before embedding
    public void ingestLargeDoc(String content) {
        var splitter = new TokenTextSplitter(); // chunk by tokens
        List&lt;Document&gt; chunks = splitter.apply(List.of(new Document(content)));
        vectorStore.add(chunks);
    }
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">@RestController
@RequestMapping("/api/rag")
public class RagController {
    private final ChatClient chatClient;

    public RagController(ChatClient.Builder builder, VectorStore vectorStore) {
        this.chatClient = builder
            // Advisor auto-retrieves relevant docs + injects into prompt
            .defaultAdvisors(new QuestionAnswerAdvisor(vectorStore))
            .build();
    }

    @GetMapping("/ask")
    public String ask(@RequestParam String question) {
        return chatClient.prompt()
            .user(question)
            .call()
            .content(); // answer grounded in retrieved documents
    }
}</code></pre></div>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="yaml"># application.yml
spring:
  ai:
    vectorstore:
      pgvector:
        index-type: HNSW
        dimensions: 1536</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
      <ol class="exercise-list">
        <li>Setup PGVector (Docker: <code>pgvector/pgvector</code> image), config Spring AI VectorStore.</li>
        <li>Ingest 5-10 documents (vd FAQ về Java), verify embeddings lưu vào PGVector.</li>
        <li>Implement RAG query với <code>QuestionAnswerAdvisor</code>, hỏi câu liên quan documents.</li>
        <li>So sánh: hỏi cùng câu KHÔNG có RAG (LLM bịa) vs CÓ RAG (trả từ docs) — thấy grounding.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (8 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">RAG là gì và giải quyết vấn đề gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Retrieval-Augmented Generation: retrieve documents liên quan từ knowledge base, inject vào prompt để LLM trả lời dựa trên data thật. Giải quyết: hallucination (bịa thông tin), knowledge cutoff (LLM không biết data mới), domain knowledge (data riêng công ty LLM chưa học). Update knowledge = thêm docs, không cần retrain.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Embedding là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Embedding chuyển text thành vector số (vd 1536 chiều) capture ý nghĩa ngữ nghĩa. Text có nghĩa tương tự → vectors gần nhau trong không gian vector. Cho phép "semantic search" — tìm theo nghĩa, không phải keyword matching. EmbeddingModel (như text-embedding-3) tạo ra chúng.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Similarity search hoạt động thế nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Embed query thành vector → so sánh với tất cả document vectors trong store → tìm K vectors gần nhất (cosine similarity hoặc Euclidean distance). Vectors gần = nghĩa tương tự. Vector DB dùng index (HNSW/IVFFlat) để search nhanh thay vì so sánh brute-force toàn bộ. Trả top-K documents liên quan nhất.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">RAG vs Fine-tuning — khi nào dùng cái nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">RAG: inject knowledge runtime, update dễ (thêm docs), rẻ, grounding tốt, phù hợp factual/dynamic knowledge. Fine-tuning: retrain weights, thay đổi style/behavior, đắt + chậm, knowledge tĩnh trong weights. Dùng RAG cho: company docs, FAQ, dynamic data. Fine-tune cho: consistent format/tone không prompt được. Thường RAG đủ + rẻ hơn nhiều.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao phải chunk documents trước khi embed?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) Embedding model có giới hạn input tokens. (2) Chunk nhỏ → embedding focus 1 ý → similarity search chính xác hơn. (3) Inject chunk liên quan vào prompt thay vì cả document dài → tiết kiệm tokens + context window. Trade-off: chunk quá nhỏ mất context, quá lớn loãng nghĩa. Overlap giữa chunks giữ continuity.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">Những thách thức khi xây RAG production-grade?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) Chunking strategy: size/overlap ảnh hưởng lớn retrieval quality. (2) Retrieval quality: top-K docs không liên quan → câu trả lời sai (garbage in garbage out). (3) Embedding cost + latency khi scale. (4) Stale data: docs update phải re-embed. (5) Context window: nhiều chunks → vượt limit. (6) Evaluation khó: đo retrieval relevance + answer quality. (7) Hybrid search (semantic + keyword) thường tốt hơn pure vector. (8) Re-ranking sau retrieval cải thiện precision.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Explain how you'd build a RAG system in Spring AI."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"First, ingestion: I split documents into chunks with a TokenTextSplitter, generate embeddings via an EmbeddingModel, and store the vectors in a VectorStore backed by PGVector. At query time, the question is embedded and a similarity search retrieves the top-K most relevant chunks. Spring AI's QuestionAnswerAdvisor automates this — it retrieves relevant documents and injects them into the prompt as context, so the LLM answers grounded in real data rather than hallucinating. For production I'd tune chunk size and overlap, consider hybrid search and re-ranking, and re-embed when source documents change."</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How does RAG reduce hallucination?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"Hallucination happens when an LLM generates plausible but false information from its parametric memory. RAG grounds the model by retrieving relevant, factual documents from a trusted knowledge base and injecting them into the prompt as context, with an instruction to answer only from that context. So instead of guessing, the model summarizes real retrieved data. It also lets me cite sources and say 'I don't know' when retrieval returns nothing relevant. It doesn't eliminate hallucination entirely — retrieval quality matters — but it dramatically improves factual accuracy for domain-specific questions."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">Group Anagrams (LC #49)</div><div class="bc-hint">Medium — hashmap, review</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Build mini RAG over your study notes — ingest notes → hỏi đáp grounded.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Spring AI "Retrieval Augmented Generation" + PGVector docs + "What is RAG" (AWS/NVIDIA blogs).</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w7-day-7">
  <div class="day-header" style="background:#8E44AD">
    <div class="day-header-left">
      <span class="day-icon">🎯</span>
      <div>
        <div class="day-date">28/06 — CN</div>
        <div class="day-topic">Spaced Review T1-T7 + Mini Project</div>
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
        <p>Mock interview EN — trả lời 10 câu tuần 7 to ra tiếng Anh, record 2 câu hay nhất. Luyện STAR method kể chuyện về implement authentication/testing.</p>
      </div>
    </div>
    <details class="accordion" open>
      <summary>📖 Lý Thuyết Cốt Lõi</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Security recap</div>
          <div class="theory-body">Authn vs Authz, SecurityFilterChain, JWT (header.payload.signature, stateless, Bearer), JwtAuthenticationFilter (OncePerRequestFilter), @PreAuthorize, BCrypt password hashing, UserDetailsService.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">JWT deep recap</div>
          <div class="theory-body">3 phần, không mã hóa (chỉ encode), signature chống tamper, short expiry + refresh token, lưu httpOnly/memory không localStorage, không để PII trong payload.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Testing recap</div>
          <div class="theory-body">JUnit 5 (@Test, assertions, lifecycle, @ParameterizedTest, AAA), Mockito (@Mock/@InjectMocks, when/thenReturn, verify, Spy), Spring slices (@WebMvcTest, @DataJpaTest, @SpringBootTest).</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">RAG recap</div>
          <div class="theory-body">Embeddings (text→vector, semantic), VectorStore + PGVector, similarity search (top-K, cosine), RAG pipeline (ingest→embed→retrieve→augment→generate), QuestionAnswerAdvisor, chunking, grounding chống hallucination.</div>
        </div>
      </div>
    </details>
    <details class="accordion">
      <summary>💻 Code Mẫu — Mini Project: Secured RAG Q&amp;A API</summary>
      <div class="code-wrap"><button class="copy-btn">Copy</button><pre><code class="java">// Combines: JWT auth + RAG + tested with JUnit/Mockito
@RestController
@RequestMapping("/api/v1/qa")
public class SecuredRagController {

    private final ChatClient chatClient;

    public SecuredRagController(ChatClient.Builder builder, VectorStore vectorStore) {
        this.chatClient = builder
            .defaultSystem("Answer only from the provided context. If unknown, say so.")
            .defaultAdvisors(new QuestionAnswerAdvisor(vectorStore))
            .build();
    }

    // Protected: requires valid JWT
    @PostMapping("/ask")
    @PreAuthorize("hasRole('USER')")
    public QaResponse ask(@RequestBody @Valid QaRequest request) {
        String answer = chatClient.prompt()
            .user(request.question())
            .call()
            .content();
        return new QaResponse(request.question(), answer);
    }

    public record QaRequest(@NotBlank String question) {}
    public record QaResponse(String question, String answer) {}
}

// Test with Mockito + @WebMvcTest:
// @WebMvcTest(SecuredRagController.class)
// @MockBean ChatClient.Builder ... verify auth required (401 without token)</code></pre></div>
    </details>
    <details class="accordion">
      <summary>✍️ Bài Tập Thực Hành (3 bài)</summary>
      <ol class="exercise-list">
        <li>Complete Secured RAG Q&amp;A API: JWT auth (login → token → protected endpoint) + RAG (PGVector + QuestionAnswerAdvisor) + @PreAuthorize.</li>
        <li>Viết tests: @WebMvcTest verify endpoint cần auth (401 không token), unit test service với Mockito.</li>
        <li>Push GitHub với README EN: architecture (security + RAG + testing), setup (PGVector docker), API docs, test coverage note.</li>
      </ol>
    </details>
    <details class="accordion">
      <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (10 câu)</summary>
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">Authentication vs Authorization?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Authentication = xác thực bạn là ai (login, verify token). Authorization = xác định bạn được làm gì (roles, permissions). Authn trước, authz sau. Login = authn; chỉ admin xóa user = authz.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">JWT gồm những phần nào và có mã hóa không?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">3 phần: header.payload.signature (Base64URL). Header = algorithm, payload = claims (user, roles, exp), signature = chống tamper. KHÔNG mã hóa — chỉ encode, decode được. Không để dữ liệu nhạy cảm trong payload.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ</span>
            <span class="qa-q">@Mock vs @InjectMocks?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">@Mock tạo fake dependency. @InjectMocks tạo instance class-under-test và inject các @Mock vào. Cần @ExtendWith(MockitoExtension.class). Vd: @Mock repository + @InjectMocks service.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Tại sao BCrypt cố tình chậm và cần salt?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Chậm (cost factor) chống brute-force — attacker không thể thử hàng tỷ password/giây. Salt (random per password) chống rainbow table + 2 user cùng password có hash khác nhau. BCrypt embed salt trong hash. Plain text/fast hash (MD5) = vi phạm bảo mật.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">when/thenReturn vs verify trong Mockito?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">when().thenReturn() = STUB, định nghĩa mock trả gì (setup input). verify() = kiểm tra INTERACTION, method có được gọi không/bao nhiêu lần/args gì (kiểm tra behavior). Stub cho output value, verify cho side-effects (save, sendEmail).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung</span>
            <span class="qa-q">Embedding và similarity search trong RAG?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Embedding = text→vector số capture nghĩa ngữ nghĩa, text giống nghĩa → vector gần nhau. Similarity search = embed query, tìm top-K document vectors gần nhất (cosine similarity), dùng index (HNSW) cho nhanh. Đây là "retrieval" — lấy docs liên quan để inject vào prompt.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">JWT có nhược điểm bảo mật gì và cách mitigate?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">(1) Không revoke được trước hết hạn → short expiry + refresh token + blacklist. (2) Bị lộ qua XSS → httpOnly cookie/memory, không localStorage. (3) Payload đọc được → không để PII. (4) Secret lộ → rotate keys, dùng RS256. (5) "alg:none" attack → luôn verify algorithm. Defense in depth.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#C0392B">Khó</span>
            <span class="qa-q">RAG production-grade có thách thức gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Chunking strategy (size/overlap), retrieval quality (top-K sai → trả lời sai), embedding cost/latency khi scale, stale data (re-embed khi update), context window limit, evaluation khó, hybrid search (semantic+keyword) tốt hơn pure vector, re-ranking cải thiện precision.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"Walk me through your Secured RAG Q&amp;A API."</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"It layers three skills from this week. Authentication uses JWT: clients log in, receive a signed token, and send it as a Bearer token; a OncePerRequestFilter validates it and sets the SecurityContext. Authorization uses @PreAuthorize so only authenticated users with the right role can query. The RAG layer uses Spring AI's QuestionAnswerAdvisor over a PGVector store — questions are embedded, relevant chunks retrieved, and the LLM answers grounded in real context with an instruction to say 'I don't know' otherwise. I tested it with @WebMvcTest verifying unauthorized requests get 401, and Mockito unit tests for the service logic."</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN</span>
            <span class="qa-q">"How do you ensure quality and security in a Spring Boot API?"</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">"Security and testing go hand in hand. For security I use stateless JWT authentication, BCrypt-hashed passwords, method-level authorization with @PreAuthorize, input validation, and I follow OWASP guidance — short-lived tokens, no sensitive data in JWTs, HTTPS everywhere. For quality I write unit tests with JUnit and Mockito following Arrange-Act-Assert, isolating logic from dependencies, plus Spring test slices like @WebMvcTest and @DataJpaTest for layer-focused integration tests. I include security tests verifying protected endpoints reject unauthorized requests. Together this gives confidence the API is both correct and secure before it ships."</div>
        </div>
      </div>
    </details>
    <div class="bottom-row">
      <div class="bottom-card lc-card"><div class="bc-title">🧩 LeetCode</div><div class="bc-name">Majority Element (LC #169)</div><div class="bc-hint">Easy — Boyer-Moore, review</div></div>
      <div class="bottom-card tool-card"><div class="bc-title">🤖 AI Tools</div><div class="bc-body">Tổng hợp security + RAG + testing trong 1 project — review architecture end-to-end.</div></div>
      <div class="bottom-card res-card"><div class="bc-title">📚 Tài Nguyên</div><div class="bc-body">Ôn lại docs tuần 7 (Spring Security, JUnit 5, Mockito, Spring AI RAG).</div></div>
    </div>
  </div>
</section>

<section class="day-section" id="w7-summary">
  <h2 class="section-h2">🎯 Tổng Kết Tuần 7</h2>
  <div class="summary-cols">
    <div>
      <h3 class="sub-h3">📋 Ngân Hàng Câu Hỏi Phỏng Vấn</h3>
      <p class="muted">Ôn lại cuối tuần — trả lời to ra, ghi âm, nghe lại.</p>
      <div class="sq-group">
        <div class="sq-group-title">Security &amp; JWT</div>
        <div class="sq-item">
          <div class="sq-q">"What's the difference between authentication and authorization?"</div>
          <div class="sq-a">Authentication verifies who you are (login, token validation). Authorization decides what you're allowed to do (roles, permissions). Authentication happens first, authorization second. Logging in is authentication; only admins being able to delete users is authorization.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Is a JWT encrypted? What should you store in it?"</div>
          <div class="sq-a">No — a JWT is only Base64-encoded, not encrypted, so anyone can decode the payload. The signature only prevents tampering. Never put sensitive data like passwords in it. Store only user id, username, roles, and expiration — enough to authorize requests.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"Why use stateless JWT auth over sessions?"</div>
          <div class="sq-a">With JWT the server stores no session state; the token is self-contained and validated by signature without a database lookup. This scales horizontally easily — no shared session store or sticky sessions. The trade-off is that tokens are harder to revoke, so you use short expiry plus refresh tokens.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Testing</div>
        <div class="sq-item">
          <div class="sq-q">"What makes a good unit test?"</div>
          <div class="sq-a">It follows Arrange-Act-Assert, tests one behavior, has a descriptive name, and is isolated from dependencies using mocks. It covers the happy path plus edge cases and errors, runs fast and deterministically, and serves as living documentation that makes refactoring safe.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"when/thenReturn vs verify in Mockito?"</div>
          <div class="sq-a">when().thenReturn() stubs a mock — it defines what the mock returns, setting up the test's inputs. verify() checks an interaction — whether a method was called, how many times, and with what arguments, validating behavior and side effects like saving or sending email.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"@WebMvcTest vs @DataJpaTest vs @SpringBootTest?"</div>
          <div class="sq-a">@WebMvcTest loads only the web layer with MockMvc and mocked services, for testing controllers. @DataJpaTest loads only the JPA layer with an in-memory DB, for testing repositories. @SpringBootTest loads the full context for end-to-end integration tests. Slices are faster; full context is more realistic.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">RAG</div>
        <div class="sq-item">
          <div class="sq-q">"What is RAG and what problem does it solve?"</div>
          <div class="sq-a">Retrieval-Augmented Generation retrieves relevant documents from a knowledge base and injects them into the prompt so the LLM answers from real data. It solves hallucination, knowledge cutoff, and lack of private domain knowledge — and updating knowledge just means adding documents, with no retraining needed.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"How does similarity search work?"</div>
          <div class="sq-a">The query is embedded into a vector, then compared against stored document vectors to find the K nearest by cosine similarity or distance. Vector databases use indexes like HNSW for fast search instead of brute force. The closest vectors are the most semantically relevant documents.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">"RAG vs fine-tuning — when to use each?"</div>
          <div class="sq-a">RAG injects knowledge at runtime, is cheap, easy to update, and grounds answers in real data — ideal for factual and dynamic knowledge. Fine-tuning retrains the model's weights, is expensive and slow, and suits consistent style or behavior that prompting can't achieve. Usually RAG is enough and far cheaper.</div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sub-h3">✅ Checklist Cuối Tuần</h3>
      <div class="checklist" data-week="7">
        <label class="check-item"><input type="checkbox" data-idx="1"><span>Hiểu authentication vs authorization, config SecurityFilterChain (public/protected endpoints)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="2"><span>JWT: hiểu 3 phần, generate + validate token với jjwt</span></label>
        <label class="check-item"><input type="checkbox" data-idx="3"><span>JwtAuthenticationFilter (OncePerRequestFilter) extract + validate token, set SecurityContext</span></label>
        <label class="check-item"><input type="checkbox" data-idx="4"><span>@PreAuthorize role-based access, BCrypt password hashing, UserDetailsService</span></label>
        <label class="check-item"><input type="checkbox" data-idx="5"><span>JUnit 5: @Test, assertions, lifecycle, @ParameterizedTest, AAA pattern</span></label>
        <label class="check-item"><input type="checkbox" data-idx="6"><span>Mockito: @Mock/@InjectMocks, when/thenReturn, verify interactions</span></label>
        <label class="check-item"><input type="checkbox" data-idx="7"><span>Spring test slices: @WebMvcTest, @DataJpaTest phân biệt và dùng được</span></label>
        <label class="check-item"><input type="checkbox" data-idx="8"><span>RAG: hiểu embeddings, similarity search, RAG pipeline (ingest→retrieve→augment→generate)</span></label>
        <label class="check-item"><input type="checkbox" data-idx="9"><span>PGVector + QuestionAnswerAdvisor: ingest docs, query grounded answer</span></label>
        <label class="check-item"><input type="checkbox" data-idx="10"><span>Mini project Secured RAG Q&amp;A API (JWT + tests + PGVector) push GitHub, README EN</span></label>
      </div>
      <div class="progress-wrap-outer"><div class="progress-wrap">
        <div class="progress-label">Hoàn thành: <strong class="progress-text">0/10</strong></div>
        <div class="progress-bar-bg"><div class="progress-bar"></div></div>
      </div></div>
      <div class="golden-rule">
        💡 <strong>Golden Rule Tuần 7:</strong> Security không phải tính năng thêm vào sau — thiết kế từ đầu (authn + authz + hash password). JWT mạnh nhưng hiểu rõ trade-off (stateless = khó revoke). Test không phải gánh nặng — là lưới an toàn cho refactor + tài liệu sống. RAG biến LLM từ "kẻ bịa chuyện" thành "trợ lý có căn cứ". Senior engineer = code chạy được + an toàn + có test + đáng tin.
      </div>
    </div>
  </div>
</section>

