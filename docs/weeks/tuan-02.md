<div class="week-divider" id="week-2-start">📘 Tuần 2 · Java Core: Exception + Collections · 18/05–24/05/2025</div>

<!-- ===== OVERVIEW ===== -->
<section class="day-section" id="w2-overview" style="background:#fff;border-radius:14px;padding:28px 32px;margin-bottom:28px;box-shadow:0 2px 12px rgba(0,0,0,.08);">
  <h2 style="margin:0 0 18px;font-size:1.25rem;color:#2c3e50;">📋 Tổng quan Tuần 2 — Exception + Collections</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:.93rem;">
      <thead>
        <tr style="background:#f0f4f8;">
          <th style="padding:10px 14px;text-align:left;border-bottom:2px solid #dde3ea;color:#555;">Ngày</th>
          <th style="padding:10px 14px;text-align:left;border-bottom:2px solid #dde3ea;color:#555;">Thứ</th>
          <th style="padding:10px 14px;text-align:left;border-bottom:2px solid #dde3ea;color:#555;">Chế độ</th>
          <th style="padding:10px 14px;text-align:left;border-bottom:2px solid #dde3ea;color:#555;">Giờ</th>
          <th style="padding:10px 14px;text-align:left;border-bottom:2px solid #dde3ea;color:#555;">Chủ đề</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">18/05</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Thứ 2</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;"><span class="mode-badge" style="background:#E67E22;">LIGHT</span></td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">1.5h</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Exception Hierarchy: Checked vs Unchecked, try-catch-finally</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">19/05</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Thứ 3</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;"><span class="mode-badge" style="background:#27AE60;">FULL</span></td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">2.5h</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Custom Exception, try-with-resources, Multi-catch, Chained Exception</td>
        </tr>
        <tr>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">20/05</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Thứ 4</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;"><span class="mode-badge" style="background:#27AE60;">FULL</span></td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">2.5h</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">ArrayList vs LinkedList, Iterator, Big-O complexity</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">21/05</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Thứ 5</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;"><span class="mode-badge" style="background:#27AE60;">FULL</span></td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">2.5h</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">HashMap internals, HashSet, TreeMap, TreeSet</td>
        </tr>
        <tr>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">22/05</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Thứ 6</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;"><span class="mode-badge" style="background:#E67E22;">LIGHT</span></td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">1.5h</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Stream API: filter, map, collect, reduce</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">23/05</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Thứ 7</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;"><span class="mode-badge" style="background:#C0392B;">WEEKEND</span></td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">4h</td>
          <td style="padding:9px 14px;border-bottom:1px solid #eee;">Stream Advanced: Collectors, flatMap, groupingBy + Thread-safe Collections</td>
        </tr>
        <tr>
          <td style="padding:9px 14px;">24/05</td>
          <td style="padding:9px 14px;">CN</td>
          <td style="padding:9px 14px;"><span class="mode-badge" style="background:#8E44AD;">REVIEW</span></td>
          <td style="padding:9px 14px;">4h</td>
          <td style="padding:9px 14px;">Spaced Review + Mini Project: Student Grade Manager</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ===== DAY 1 ===== -->
<div class="day-section" id="w2-day-1">
  <div class="day-header" style="background:#E67E22;">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">18/05/2025 — Thứ 2</div>
        <div class="day-topic">Exception Hierarchy: Checked vs Unchecked, try-catch-finally</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">1.5h</span>
    </div>
  </div>
  <div class="day-body">

    <!-- English block -->
    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English — Vocalmax + Listening</strong>
        <span class="en-badge-time">20 phút</span>
      </div>
      <div class="en-content">
        <p><strong>Vocalmax 10 từ kỹ thuật hôm nay:</strong></p>
        <ul style="margin:.5rem 0 .5rem 1.2rem;line-height:1.9;">
          <li><strong>exception</strong> — ngoại lệ (lỗi xảy ra khi chạy chương trình)</li>
          <li><strong>throw</strong> — ném ra (tung ngoại lệ)</li>
          <li><strong>catch</strong> — bắt (xử lý ngoại lệ)</li>
          <li><strong>handle</strong> — xử lý</li>
          <li><strong>propagate</strong> — lan truyền (exception leo lên call stack)</li>
          <li><strong>stack trace</strong> — dấu vết ngăn xếp (chuỗi method calls khi lỗi)</li>
          <li><strong>runtime error</strong> — lỗi thời gian chạy</li>
          <li><strong>checked</strong> — kiểm tra tại compile-time</li>
          <li><strong>unchecked</strong> — không kiểm tra tại compile-time</li>
          <li><strong>finally</strong> — khối luôn được thực thi dù có exception hay không</li>
        </ul>
        <p style="margin-top:.8rem;">📺 <strong>Nghe:</strong> Tìm YouTube "Java Exception Handling Tutorial" — xem 5 phút đầu, chú ý cách phát âm <em>exception</em>, <em>hierarchy</em>, <em>propagate</em>.</p>
        <p style="margin-top:.5rem;font-style:italic;color:#555;">Luyện nói: "When an exception is <strong>thrown</strong>, it <strong>propagates</strong> up the call stack until it is <strong>caught</strong> by a catch block."</p>
      </div>
    </div>

    <!-- Theory accordion -->
    <details class="accordion" open>
      <summary>📚 Lý thuyết — Exception Hierarchy &amp; try-catch-finally</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Exception Hierarchy</div>
          <div class="theory-body">
            <strong>Throwable</strong> là gốc của mọi lỗi trong Java.<br>
            ├── <strong>Error</strong>: lỗi hệ thống, không nên catch (OutOfMemoryError, StackOverflowError)<br>
            └── <strong>Exception</strong>:<br>
            &nbsp;&nbsp;&nbsp;├── <strong>Checked</strong>: IOException, SQLException — phải xử lý<br>
            &nbsp;&nbsp;&nbsp;└── <strong>Unchecked (RuntimeException)</strong>: NullPointerException, ArrayIndexOutOfBoundsException — tùy chọn xử lý
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Checked vs Unchecked</div>
          <div class="theory-body">
            <strong>Checked Exception:</strong><br>
            • Compiler bắt buộc phải try-catch hoặc throws<br>
            • Dùng cho lỗi có thể phục hồi (file not found, network error)<br><br>
            <strong>Unchecked Exception (RuntimeException):</strong><br>
            • Không bắt buộc xử lý<br>
            • Thường do lỗi lập trình (null pointer, bad index)<br>
            • Nên fix code, không nên catch
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">try-catch-finally Syntax</div>
          <div class="theory-body">
            <pre style="margin:0;font-size:.82rem;background:#f5f5f5;padding:8px;border-radius:6px;">try {
  // code có thể throw exception
} catch (SpecificException e) {
  // xử lý exception cụ thể
} catch (Exception e) {
  // fallback - bắt mọi exception
} finally {
  // LUÔN chạy: đóng resource, cleanup
}</pre>
            <em style="font-size:.82rem;">finally chạy kể cả khi return trong try.</em>
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">throws keyword</div>
          <div class="theory-body">
            Khai báo method có thể throw checked exception:<br>
            <pre style="margin:6px 0 0;font-size:.82rem;background:#f5f5f5;padding:8px;border-radius:6px;">public void readFile(String path)
    throws IOException {
  // có thể throw IOException
  FileReader fr = new FileReader(path);
}</pre>
            <em style="font-size:.82rem;">throws = "tôi có thể ném, bạn tự lo". throw = "tôi ném ngay bây giờ".</em>
          </div>
        </div>
      </div>
    </details>

    <!-- Code block -->
    <details class="accordion">
      <summary>💻 Code — BasicExceptionDemo.java</summary>
      <div class="code-wrap">
        <button class="copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)">Copy</button>
        <pre>import java.io.IOException;

public class BasicExceptionDemo {

    // Checked exception — phải khai báo throws
    public static int readAge(String input) throws IOException {
        if (input == null) {
            throw new IOException("Input cannot be null");
        }
        return Integer.parseInt(input); // có thể throw NumberFormatException (unchecked)
    }

    // Multiple catch blocks
    public static void demonstrateMultiCatch(String value) {
        try {
            int number = Integer.parseInt(value);   // NumberFormatException
            int result = 100 / number;              // ArithmeticException
            System.out.println("Result: " + result);
        } catch (NumberFormatException e) {
            System.err.println("Invalid number format: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.err.println("Arithmetic error: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Unexpected error: " + e.getMessage());
        } finally {
            System.out.println("finally block always runs!");
        }
    }

    // finally guarantees cleanup
    public static void demonstrateFinally() {
        System.out.println("=== finally demo ===");
        try {
            System.out.println("In try block");
            if (true) throw new RuntimeException("test exception");
            System.out.println("This line never runs");
        } catch (RuntimeException e) {
            System.out.println("Caught: " + e.getMessage());
            return; // even with return, finally still runs!
        } finally {
            System.out.println("finally runs ALWAYS — perfect for cleanup");
        }
    }

    public static void main(String[] args) {
        // Test 1: normal flow
        demonstrateMultiCatch("5");

        // Test 2: bad format
        demonstrateMultiCatch("abc");

        // Test 3: division by zero
        demonstrateMultiCatch("0");

        // Test 4: finally with return
        demonstrateFinally();

        // Test 5: checked exception with try-catch
        try {
            int age = readAge("25");
            System.out.println("Age: " + age);

            int badAge = readAge(null); // throws IOException
        } catch (IOException e) {
            System.err.println("IOException caught: " + e.getMessage());
        }
    }
}</pre>
      </div>
    </details>

    <!-- Exercises -->
    <details class="accordion">
      <summary>✏️ Bài tập thực hành</summary>
      <ol class="exercise-list">
        <li>
          <strong>Checked IOException:</strong> Viết method <code>validateAge(int age)</code> throw <code>IllegalArgumentException</code> nếu age &lt; 0 hoặc age &gt; 150. Viết thêm method <code>loadConfig(String filename) throws IOException</code> — nếu filename không kết thúc ".properties" thì throw IOException. Test cả hai.
        </li>
        <li>
          <strong>NumberFormatException:</strong> Viết method <code>safeParseInt(String s, int defaultValue)</code> — dùng try-catch để bắt NumberFormatException, nếu parse thất bại thì trả về defaultValue. Test với "123", "abc", null, "".
        </li>
        <li>
          <strong>finally always runs:</strong> Viết demo chứng minh finally chạy trong 3 tình huống: (a) try thành công, (b) exception bị catch, (c) exception không bị catch (dùng method riêng). In ra thứ tự thực thi để quan sát.
        </li>
      </ol>
    </details>

    <!-- Q&A -->
    <details class="accordion">
      <summary>❓ Q&amp;A — 5 câu hỏi phỏng vấn</summary>
      <ul class="qa-list">
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Exception hierarchy trong Java là gì? Throwable, Error, Exception khác nhau thế nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Throwable</strong> là class gốc của mọi lỗi có thể throw/catch. Có 2 nhánh con:<br>
            • <strong>Error</strong>: lỗi nghiêm trọng từ JVM (OutOfMemoryError, StackOverflowError) — thường không nên catch, chứng tỏ môi trường bị hỏng.<br>
            • <strong>Exception</strong>: lỗi trong logic ứng dụng — có thể và nên xử lý. Tiếp tục chia thành Checked và Unchecked (RuntimeException).
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Checked Exception và Unchecked Exception khác nhau thế nào? Cho ví dụ?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Checked Exception:</strong> Compiler kiểm tra tại compile-time — bạn PHẢI try-catch hoặc khai báo throws. Ví dụ: IOException, SQLException, ClassNotFoundException.<br><br>
            <strong>Unchecked Exception (extends RuntimeException):</strong> Compiler không bắt buộc xử lý. Ví dụ: NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException.<br><br>
            Rule of thumb: Checked = lỗi ngoài tầm kiểm soát của bạn (file, network). Unchecked = lỗi do code sai (null, bad index).
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Khi nào nên dùng Checked Exception, khi nào dùng Unchecked Exception?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Dùng Checked Exception</strong> khi: caller CÓ THỂ phục hồi từ lỗi (file không tìm thấy → thử file khác; network timeout → retry). Forced handling đảm bảo caller biết và xử lý.<br><br>
            <strong>Dùng Unchecked Exception</strong> khi: lỗi do vi phạm contract/programming bug (null argument, illegal state). Caller không thể "phục hồi" — cần fix code. Ví dụ: <code>IllegalArgumentException</code>, <code>IllegalStateException</code>.<br><br>
            Modern Java (và Spring) thường prefer Unchecked Exception để giảm boilerplate và checked exception pollution.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">finally block có chạy không nếu có return statement trong try block?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Có</strong> — finally LUÔN chạy, kể cả khi có return trong try hoặc catch. Ngoại lệ duy nhất: <code>System.exit()</code> được gọi, hoặc JVM crash.<br><br>
            Thứ tự: try body → (nếu exception: catch body) → finally → sau đó mới return.<br><br>
            Lưu ý: Nếu finally cũng có return statement, nó sẽ ghi đè return của try/catch — đây là pattern nguy hiểm, tránh dùng.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">Sự khác biệt giữa Error và Exception? Có nên catch Error không?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Error:</strong> Đại diện cho các điều kiện nghiêm trọng mà ứng dụng không nên cố recover (OutOfMemoryError, StackOverflowError, VirtualMachineError). JVM ở trạng thái không ổn định.<br><br>
            <strong>Exception:</strong> Điều kiện bất thường trong logic ứng dụng — có thể xử lý và tiếp tục.<br><br>
            <strong>Có nên catch Error?</strong> Thường là KHÔNG. Nhưng có ngoại lệ: một số framework (test frameworks, application servers) catch Throwable để log trước khi shutdown. Nếu bạn catch OutOfMemoryError, code của bạn trong catch block có thể không đủ memory để chạy. Best practice: catch Exception (không phải Throwable) ở top-level handlers.
          </div>
        </li>
      </ul>
    </details>

    <!-- Bottom row -->
    <div class="bottom-row">
      <div class="bottom-card lc-card">
        <div class="bc-title">🟢 LeetCode</div>
        <div class="bc-name">#20 Valid Parentheses</div>
        <div class="bc-hint">Độ khó: Easy · Dùng Stack — kiến thức nền tảng cho Collections tuần này</div>
        <div class="bc-body">Dùng <code>Deque&lt;Character&gt;</code> làm stack. Push mỗi opening bracket, pop và check khi gặp closing bracket. Return true nếu stack empty cuối cùng.</div>
      </div>
      <div class="bottom-card tool-card">
        <div class="bc-title">🤖 AI Tool</div>
        <div class="bc-name">GitHub Copilot — Exception Snippets</div>
        <div class="bc-body">Prompt: <em>"Generate a try-catch-finally block for reading a file with IOException and NumberFormatException handling, including resource cleanup in finally"</em>. Quan sát code Copilot tạo ra, so sánh với code bạn tự viết.</div>
      </div>
      <div class="bottom-card res-card">
        <div class="bc-title">📖 Resource</div>
        <div class="bc-name">Baeldung — Exception Handling</div>
        <div class="bc-body">Đọc: <strong>baeldung.com/java-exceptions</strong> — phần "Exception Hierarchy" và "Checked vs Unchecked". Bookmark để ôn lại. Đọc thêm "baeldung.com/java-finally-keyword" cho chi tiết finally behavior.</div>
      </div>
    </div>

  </div>
</div>

<!-- ===== DAY 2 ===== -->
<div class="day-section" id="w2-day-2">
  <div class="day-header" style="background:#27AE60;">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">19/05/2025 — Thứ 3</div>
        <div class="day-topic">Custom Exception, try-with-resources, Multi-catch, Chained Exception</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">2.5h</span>
    </div>
  </div>
  <div class="day-body">

    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English — Parroto Shadowing</strong>
        <span class="en-badge-time">25 phút</span>
      </div>
      <div class="en-content">
        <p><strong>Topic:</strong> "Clean Exception Handling in Java" — shadowing sentences kỹ thuật.</p>
        <p style="margin-top:.6rem;"><strong>Luyện phát âm các câu sau (nói to, lặp lại 3 lần mỗi câu):</strong></p>
        <ul style="margin:.5rem 0 .5rem 1.2rem;line-height:2;">
          <li>"throw new <strong>Illegal</strong>ArgumentException(<em>message</em>)"</li>
          <li>"catch the exception and <strong>rethrow</strong> it as a domain exception"</li>
          <li>"wrap the original cause using the <strong>cause</strong> constructor"</li>
          <li>"resources are automatically <strong>closed</strong> by try-with-resources"</li>
          <li>"implement <strong>AutoCloseable</strong> to support try-with-resources"</li>
          <li>"multi-catch allows catching <strong>multiple</strong> exception types in one clause"</li>
        </ul>
        <p style="margin-top:.6rem;font-style:italic;color:#555;">Mock câu hỏi EN: "How would you design an exception hierarchy for a banking application?" — thực hành trả lời bằng EN 2–3 câu.</p>
      </div>
    </div>

    <details class="accordion" open>
      <summary>📚 Lý thuyết — Custom Exception, try-with-resources, Multi-catch, Chained</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Custom Exception</div>
          <div class="theory-body">
            Tạo exception riêng bằng cách extend RuntimeException (unchecked) hoặc Exception (checked):<br>
            <pre style="margin:6px 0 0;font-size:.8rem;background:#f5f5f5;padding:8px;border-radius:6px;">public class InsufficientFundsException
    extends RuntimeException {
  private final double amount;
  public InsufficientFundsException(double amount) {
    super("Insufficient funds: need " + amount);
    this.amount = amount;
  }
  public double getAmount() { return amount; }
}</pre>
            Luôn cung cấp constructor nhận String message và constructor nhận message + cause.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">try-with-resources</div>
          <div class="theory-body">
            Java 7+ — tự động đóng resource implement <strong>AutoCloseable</strong>:<br>
            <pre style="margin:6px 0 0;font-size:.8rem;background:#f5f5f5;padding:8px;border-radius:6px;">try (FileReader fr = new FileReader(path);
     BufferedReader br = new BufferedReader(fr)) {
  return br.readLine();
} // fr và br tự đóng, ngay cả khi có exception</pre>
            close() được gọi theo thứ tự ngược lại (br trước, fr sau). Nếu cả exception trong body và close() đều xảy ra: exception body được giữ, exception close() là "suppressed".
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Multi-catch (Java 7+)</div>
          <div class="theory-body">
            Bắt nhiều exception type trong 1 catch block bằng dấu <strong>|</strong>:<br>
            <pre style="margin:6px 0 0;font-size:.8rem;background:#f5f5f5;padding:8px;border-radius:6px;">try {
  // ...
} catch (IOException | SQLException e) {
  // xử lý chung cả hai
  logger.error("Data access error", e);
}</pre>
            Lưu ý: Các exception trong multi-catch không được có quan hệ thừa kế (compile error). Biến e là effectively final.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Chained Exception</div>
          <div class="theory-body">
            Wrap exception gốc vào domain exception để preserve context:<br>
            <pre style="margin:6px 0 0;font-size:.8rem;background:#f5f5f5;padding:8px;border-radius:6px;">try {
  // low-level operation
} catch (SQLException e) {
  // wrap với cause
  throw new DataAccessException("DB error", e);
}</pre>
            Dùng <code>getCause()</code> để lấy exception gốc. Stack trace sẽ show "Caused by: SQLException..." — rất hữu ích khi debug.
          </div>
        </div>
      </div>
    </details>

    <details class="accordion">
      <summary>💻 Code — CustomException.java + ResourceManager.java</summary>
      <div class="code-wrap">
        <button class="copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)">Copy</button>
        <pre>// ===== CustomException.java =====
// Base domain exception
public class AppException extends RuntimeException {
    private final String errorCode;

    public AppException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public AppException(String errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public String getErrorCode() { return errorCode; }
}

// Specific business exception
public class InsufficientFundsException extends AppException {
    private final double required;
    private final double available;

    public InsufficientFundsException(double required, double available) {
        super("INSUFFICIENT_FUNDS",
              String.format("Required %.2f but only %.2f available", required, available));
        this.required = required;
        this.available = available;
    }

    public double getRequired() { return required; }
    public double getAvailable() { return available; }
}

// Usage demo
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void withdraw(double amount) {
        if (amount &lt;= 0) {
            throw new IllegalArgumentException("Amount must be positive: " + amount);
        }
        if (amount &gt; balance) {
            throw new InsufficientFundsException(amount, balance);
        }
        balance -= amount;
        System.out.printf("Withdrew %.2f, balance now %.2f%n", amount, balance);
    }
}

// ===== ResourceManager.java — AutoCloseable + try-with-resources =====
import java.io.*;

public class ResourceManager implements AutoCloseable {
    private final String name;
    private boolean closed = false;

    public ResourceManager(String name) {
        this.name = name;
        System.out.println("[" + name + "] Resource opened");
    }

    public String readData() throws IOException {
        if (closed) throw new IOException("Resource already closed: " + name);
        return "data from " + name;
    }

    @Override
    public void close() {
        if (!closed) {
            closed = true;
            System.out.println("[" + name + "] Resource closed (auto)");
        }
    }

    public static void main(String[] args) {
        // try-with-resources: multiple resources, closed in reverse order
        try (ResourceManager r1 = new ResourceManager("DB-Connection");
             ResourceManager r2 = new ResourceManager("File-Stream")) {

            String data1 = r1.readData();
            String data2 = r2.readData();
            System.out.println("Got: " + data1 + ", " + data2);

        } catch (IOException e) {
            System.err.println("Failed to read: " + e.getMessage());
        }
        // Both r1, r2 are now closed

        // Multi-catch demo
        String[] values = {"42", "not-a-number", null};
        for (String v : values) {
            try {
                int n = Integer.parseInt(v);       // NumberFormatException or NPE
                System.out.println("Parsed: " + n);
            } catch (NumberFormatException | NullPointerException e) {
                System.err.println("Parse failed for [" + v + "]: " + e.getClass().getSimpleName());
            }
        }

        // Chained exception
        try {
            simulateLowLevelError();
        } catch (AppException e) {
            System.err.println("Domain error: " + e.getMessage());
            System.err.println("Root cause: " + e.getCause().getMessage());
        }
    }

    private static void simulateLowLevelError() {
        try {
            throw new SQLException("Connection timeout");
        } catch (Exception e) {
            throw new AppException("DB_ERROR", "Failed to fetch user data", e);
        }
    }
}</pre>
      </div>
    </details>

    <details class="accordion">
      <summary>✏️ Bài tập thực hành</summary>
      <ol class="exercise-list">
        <li>
          <strong>InsufficientFundsException:</strong> Implement lớp <code>BankAccount</code> đầy đủ với <code>deposit(double)</code>, <code>withdraw(double)</code>, <code>transfer(BankAccount target, double amount)</code>. Đảm bảo mỗi method throw đúng exception với message có nghĩa. Viết main() test 5 scenarios: rút đủ, rút quá, deposit âm, transfer, chain of transfers.
        </li>
        <li>
          <strong>FileProcessor với try-with-resources:</strong> Tạo class <code>CsvParser implements AutoCloseable</code> đọc file CSV (dùng <code>BufferedReader</code>). Method <code>parseLines()</code> trả về <code>List&lt;String[]&gt;</code>. Dùng try-with-resources ở nơi gọi. Test với file thật và file không tồn tại.
        </li>
        <li>
          <strong>Multi-catch demo:</strong> Viết method <code>riskyOperation(String input)</code> có thể throw <code>NumberFormatException</code>, <code>ArithmeticException</code>, <code>ArrayIndexOutOfBoundsException</code>. Dùng multi-catch để bắt NFE và AIE chung, ArithmeticException riêng. In loại exception nào được bắt.
        </li>
        <li>
          <strong>Domain Exception Hierarchy:</strong> Thiết kế hierarchy: <code>AppException</code> → <code>BusinessException</code> → {<code>ValidationException</code>, <code>AuthorizationException</code>}. Mỗi exception có errorCode. Viết <code>UserService</code> với method <code>createUser()</code> throw ValidationException khi email sai format, AuthorizationException khi không có quyền.
        </li>
      </ol>
    </details>

    <details class="accordion">
      <summary>❓ Q&amp;A — 7 câu hỏi phỏng vấn</summary>
      <ul class="qa-list">
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">try-with-resources là gì và tại sao nên dùng thay vì finally?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            try-with-resources (Java 7+) tự động gọi <code>close()</code> trên các resource sau khi try block hoàn thành, kể cả khi có exception. Resource phải implement <code>AutoCloseable</code>.<br><br>
            <strong>Tại sao tốt hơn finally:</strong> (1) Code ngắn gọn hơn, (2) Xử lý đúng "suppressed exceptions" — nếu cả exception chính và exception trong close() xảy ra, close() exception được suppressed (không bị nuốt mất như với finally), (3) Nhiều resource được đóng theo đúng thứ tự ngược.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Khi tạo Custom Exception, nên extend Exception hay RuntimeException?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Phụ thuộc vào use case:<br>
            • <strong>extend RuntimeException (unchecked)</strong>: Dùng cho business logic exceptions (InsufficientFundsException, UserNotFoundException). Modern Spring apps thường dùng unchecked để tránh checked exception pollution.<br>
            • <strong>extend Exception (checked)</strong>: Dùng khi caller BẮT BUỘC phải xử lý và có thể phục hồi (ví dụ framework/library code).<br><br>
            Best practice: Luôn cung cấp 2 constructor: <code>(String message)</code> và <code>(String message, Throwable cause)</code> để support chaining.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Multi-catch có hạn chế gì? Tại sao không thể catch (IOException | FileNotFoundException)?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Hạn chế:</strong> Các exception types trong multi-catch không được có quan hệ thừa kế (inheritance). <code>FileNotFoundException extends IOException</code>, nên compiler báo lỗi: "FileNotFoundException is a subclass of IOException" — catch IOException đã bao gồm FileNotFoundException rồi.<br><br>
            <strong>Lý do:</strong> Nếu cho phép, type của <code>e</code> sẽ không xác định (ambiguous). Trong multi-catch, biến e có type là "common supertype" của các exception types, và là effectively final (không thể reassign).<br><br>
            Chỉ dùng multi-catch cho các exception types không liên quan nhau.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Chained Exception là gì? Tại sao quan trọng trong production?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Chained Exception (Exception chaining) = wrap low-level exception vào high-level domain exception, giữ nguyên original cause.<br><br>
            <pre style="font-size:.82rem;background:#f5f5f5;padding:8px;border-radius:6px;">throw new ServiceException("User save failed", sqlException);</pre>
            <strong>Tại sao quan trọng:</strong><br>
            • Layer abstraction: caller thấy domain error, không phải database error<br>
            • Debug: log stack trace vẫn show "Caused by: SQLException" để tìm root cause<br>
            • Không mất thông tin lỗi gốc (anti-pattern: catch và throw new Exception mà không truyền cause)<br>
            Dùng <code>getCause()</code> để navigate chain. Log tools như Logback tự in cả chain.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">Suppressed Exception trong try-with-resources là gì?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Khi try-with-resources block throw exception VÀ resource.close() cũng throw exception:<br>
            • Exception từ try body là "primary exception" — được propagate bình thường<br>
            • Exception từ close() là "suppressed exception" — được đính kèm vào primary exception<br><br>
            Có thể truy cập: <code>e.getSuppressed()</code> trả về array các suppressed exceptions.<br><br>
            <strong>Tại sao tốt hơn finally cũ?</strong> Với finally thủ công, nếu finally cũng throw exception, nó sẽ nuốt mất exception gốc từ try block — mất thông tin! try-with-resources giải quyết đúng cả hai cases.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">Anti-patterns phổ biến nhất khi xử lý exception trong Java?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Top 5 anti-patterns:</strong><br>
            1. <strong>Swallowing exception:</strong> <code>catch(Exception e) {}</code> — im lặng nuốt lỗi, không log, không rethrow → nightmare khi debug<br>
            2. <strong>Catching Exception/Throwable quá rộng:</strong> catch Exception ở tầng sâu khi chỉ cần catch IOException<br>
            3. <strong>Exception để control flow:</strong> dùng exception thay vì if-else → chậm, code khó đọc<br>
            4. <strong>Lost cause khi chaining:</strong> <code>throw new AppException(e.getMessage())</code> không truyền cause → mất stack trace gốc<br>
            5. <strong>Không đóng resource trong finally/try-with-resources:</strong> resource leak
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#9B59B6;">Mock EN</span>
            <span class="qa-q">EN: "Can you walk me through how you would design exception handling for a REST API service?"</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Sample answer (luyện nói):</strong><br>
            "Sure. I would define a base <code>AppException</code> extending <code>RuntimeException</code> with an error code and HTTP status. Then I'd create specific subclasses like <code>ResourceNotFoundException</code> for 404 and <code>ValidationException</code> for 400. At the controller layer, I'd use a <code>@RestControllerAdvice</code> with <code>@ExceptionHandler</code> methods to catch these domain exceptions and convert them to consistent JSON error responses. For unexpected exceptions, I'd have a catch-all handler that returns 500 and logs the full stack trace. This way, business logic throws meaningful exceptions, and the global handler translates them to appropriate HTTP responses."
          </div>
        </li>
      </ul>
    </details>

    <div class="bottom-row">
      <div class="bottom-card lc-card">
        <div class="bc-title">🟡 LeetCode</div>
        <div class="bc-name">#739 Daily Temperatures</div>
        <div class="bc-hint">Độ khó: Medium · Monotonic Stack</div>
        <div class="bc-body">Dùng stack lưu index. Với mỗi ngày, pop stack khi nhiệt độ hiện tại &gt; nhiệt độ ngày ở top. Kết quả = current index - popped index. Liên quan: Deque/Stack từ Collections.</div>
      </div>
      <div class="bottom-card tool-card">
        <div class="bc-title">🤖 AI Tool</div>
        <div class="bc-name">GitHub Copilot — Exception Hierarchy</div>
        <div class="bc-body">Prompt: <em>"Generate a domain exception hierarchy for an e-commerce application with AppException as base, and specific exceptions for Payment, Inventory, and Order domains. Include error codes."</em> Đánh giá design của Copilot.</div>
      </div>
      <div class="bottom-card res-card">
        <div class="bc-title">📖 Resource</div>
        <div class="bc-name">Oracle Docs — try-with-resources</div>
        <div class="bc-body">Đọc: <strong>docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html</strong> — phần "Suppressed Exceptions" đặc biệt quan trọng. Đọc thêm: Baeldung "java-try-with-resources".</div>
      </div>
    </div>

  </div>
</div>

<!-- ===== DAY 3 ===== -->
<div class="day-section" id="w2-day-3">
  <div class="day-header" style="background:#27AE60;">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">20/05/2025 — Thứ 4</div>
        <div class="day-topic">ArrayList vs LinkedList, Iterator, Big-O complexity</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">2.5h</span>
    </div>
  </div>
  <div class="day-body">

    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English — Vocalmax + Reading</strong>
        <span class="en-badge-time">25 phút</span>
      </div>
      <div class="en-content">
        <p><strong>Vocalmax 10 từ hôm nay:</strong></p>
        <ul style="margin:.5rem 0 .5rem 1.2rem;line-height:1.9;">
          <li><strong>array</strong> — mảng (vùng nhớ liên tiếp)</li>
          <li><strong>linked list</strong> — danh sách liên kết (các node nối nhau)</li>
          <li><strong>node</strong> — nút (phần tử trong linked list chứa data + pointer)</li>
          <li><strong>iterator</strong> — bộ duyệt (object để traverse collection)</li>
          <li><strong>traverse</strong> — duyệt qua (đi qua từng phần tử)</li>
          <li><strong>index</strong> — chỉ số vị trí (0-based trong Java)</li>
          <li><strong>capacity</strong> — sức chứa (kích thước nội bộ của ArrayList)</li>
          <li><strong>resize</strong> — thay đổi kích thước (ArrayList tự resize khi đầy)</li>
          <li><strong>pointer</strong> — con trỏ (tham chiếu đến node kế tiếp/trước)</li>
          <li><strong>complexity</strong> — độ phức tạp (Big-O notation)</li>
        </ul>
        <p style="margin-top:.8rem;"><strong>Đọc đoạn văn EN:</strong> <em>"ArrayList stores elements in a contiguous block of memory, providing O(1) random access by index. LinkedList uses a doubly-linked structure where each node holds references to the previous and next node, enabling O(1) insertion at head or tail but O(n) traversal to an arbitrary index."</em></p>
        <p style="margin-top:.5rem;">Đọc to, dịch sang tiếng Việt, sau đó giải thích lại bằng tiếng Việt không nhìn bản gốc.</p>
      </div>
    </div>

    <details class="accordion" open>
      <summary>📚 Lý thuyết — ArrayList vs LinkedList, Iterator, Big-O</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">ArrayList — Dynamic Array</div>
          <div class="theory-body">
            Backed bởi <strong>Object[]</strong> nội bộ. Default capacity = 10, tự grow ×1.5 khi đầy.<br><br>
            <strong>Big-O:</strong><br>
            • get(i): <strong>O(1)</strong> — truy cập trực tiếp qua index<br>
            • add (cuối): <strong>O(1) amortized</strong><br>
            • add/remove (giữa): <strong>O(n)</strong> — phải shift elements<br>
            • contains: <strong>O(n)</strong> — linear scan<br><br>
            <em>Phù hợp:</em> Đọc nhiều, thêm cuối nhiều. Cache-friendly.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">LinkedList — Doubly Linked</div>
          <div class="theory-body">
            Mỗi node: <code>data + prev + next</code>. Giữ reference đến head và tail.<br><br>
            <strong>Big-O:</strong><br>
            • get(i): <strong>O(n)</strong> — phải traverse từ head<br>
            • add đầu/cuối: <strong>O(1)</strong> — chỉ update pointer<br>
            • add/remove (giữa biết node): <strong>O(1)</strong><br>
            • add/remove (giữa theo index): <strong>O(n)</strong> để tìm node<br><br>
            <em>Phù hợp:</em> Insert/delete đầu/cuối nhiều. Dùng làm Stack, Deque, Queue.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Iterator Pattern</div>
          <div class="theory-body">
            Iterator cung cấp cách duyệt collection mà không expose cấu trúc nội bộ:<br>
            <pre style="margin:6px 0 0;font-size:.8rem;background:#f5f5f5;padding:8px;border-radius:6px;">Iterator&lt;String&gt; it = list.iterator();
while (it.hasNext()) {
  String s = it.next();
  if (s.isEmpty()) {
    it.remove(); // SAFE removal!
  }
}</pre>
            <strong>Fail-fast:</strong> ArrayList/LinkedList throw <code>ConcurrentModificationException</code> nếu collection bị modify trong khi duyệt.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Big-O So sánh</div>
          <div class="theory-body">
            <table style="width:100%;border-collapse:collapse;font-size:.8rem;">
              <tr style="background:#f0f4f8;"><th style="padding:4px 6px;text-align:left;">Op</th><th style="padding:4px 6px;">ArrayList</th><th style="padding:4px 6px;">LinkedList</th></tr>
              <tr><td style="padding:4px 6px;">get(i)</td><td style="padding:4px 6px;text-align:center;color:#27AE60;"><strong>O(1)</strong></td><td style="padding:4px 6px;text-align:center;color:#E74C3C;">O(n)</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:4px 6px;">add (end)</td><td style="padding:4px 6px;text-align:center;color:#27AE60;"><strong>O(1)*</strong></td><td style="padding:4px 6px;text-align:center;color:#27AE60;"><strong>O(1)</strong></td></tr>
              <tr><td style="padding:4px 6px;">add (mid)</td><td style="padding:4px 6px;text-align:center;color:#E74C3C;">O(n)</td><td style="padding:4px 6px;text-align:center;color:#E74C3C;">O(n)**</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:4px 6px;">remove(i)</td><td style="padding:4px 6px;text-align:center;color:#E74C3C;">O(n)</td><td style="padding:4px 6px;text-align:center;color:#E74C3C;">O(n)**</td></tr>
              <tr><td style="padding:4px 6px;">memory</td><td style="padding:4px 6px;text-align:center;">Compact</td><td style="padding:4px 6px;text-align:center;">+overhead/node</td></tr>
            </table>
            <em style="font-size:.78rem;">* amortized; ** O(1) nếu đã có node reference</em>
          </div>
        </div>
      </div>
    </details>

    <details class="accordion">
      <summary>💻 Code — ListOperations.java</summary>
      <div class="code-wrap">
        <button class="copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)">Copy</button>
        <pre>import java.util.*;

public class ListOperations {

    public static void benchmarkMiddleInsert(int n) {
        List&lt;Integer&gt; arrayList = new ArrayList&lt;&gt;();
        List&lt;Integer&gt; linkedList = new LinkedList&lt;&gt;();
        for (int i = 0; i &lt; n; i++) { arrayList.add(i); linkedList.add(i); }

        long start = System.nanoTime();
        for (int i = 0; i &lt; 1000; i++) arrayList.add(n / 2, 999);
        long alTime = System.nanoTime() - start;

        start = System.nanoTime();
        for (int i = 0; i &lt; 1000; i++) linkedList.add(n / 2, 999);
        long llTime = System.nanoTime() - start;

        System.out.printf("Middle insert x1000 (n=%d):%n  ArrayList:  %,d ns%n  LinkedList: %,d ns%n", n, alTime, llTime);
    }

    // Safe remove using iterator
    public static List&lt;String&gt; removeShortWords(List&lt;String&gt; words, int minLength) {
        List&lt;String&gt; result = new ArrayList&lt;&gt;(words);
        Iterator&lt;String&gt; it = result.iterator();
        while (it.hasNext()) {
            if (it.next().length() &lt; minLength) it.remove();
        }
        return result;
    }

    // Demonstrate ConcurrentModificationException
    public static void showCME() {
        List&lt;String&gt; list = new ArrayList&lt;&gt;(Arrays.asList("a", "bb", "ccc"));
        try {
            for (String s : list) {
                if (s.equals("a")) list.remove(s); // WRONG — causes CME
            }
        } catch (ConcurrentModificationException e) {
            System.out.println("CME caught! Use iterator.remove() or removeIf() instead.");
        }
    }

    // LinkedList as Deque
    public static void dequeDemo() {
        Deque&lt;String&gt; deque = new LinkedList&lt;&gt;();
        deque.addFirst("middle");
        deque.addFirst("first");
        deque.addLast("last");
        System.out.println("Deque: " + deque);
        System.out.println("Poll first: " + deque.pollFirst());
        System.out.println("Poll last:  " + deque.pollLast());
        System.out.println("Remaining:  " + deque);
    }

    public static void main(String[] args) {
        System.out.println("=== Benchmark ===");
        benchmarkMiddleInsert(10_000);

        System.out.println("\n=== Iterator safe remove ===");
        List&lt;String&gt; words = Arrays.asList("hi", "hello", "hey", "world", "ok");
        System.out.println("Remove words shorter than 4: " + removeShortWords(words, 4));

        System.out.println("\n=== CME Demo ===");
        showCME();

        System.out.println("\n=== Deque Demo ===");
        dequeDemo();
    }
}</pre>
      </div>
    </details>

    <details class="accordion">
      <summary>✏️ Bài tập thực hành</summary>
      <ol class="exercise-list">
        <li><strong>Mini Dynamic Array:</strong> Implement <code>DynamicArray&lt;T&gt;</code> dùng Object[]. Methods: add(T), get(int), remove(int), size(). Tự resize() ×2 khi đầy. Test thêm 20 phần tử và remove một vài cái.</li>
        <li><strong>Benchmark:</strong> So sánh ArrayList vs LinkedList cho 3 ops: (a) add 50k elements vào giữa, (b) get random index 10k lần, (c) remove từ đầu 1k lần. In kết quả nanoseconds.</li>
        <li><strong>Iterator đúng cách (tránh CME):</strong> Cho <code>List&lt;Integer&gt;</code> chứa 1–20. Dùng Iterator để remove tất cả số chẵn. Sau đó demo cách sai (for-each + remove) và observe CME.</li>
        <li><strong>LRU Cache:</strong> Implement <code>LRUCache&lt;K,V&gt;</code> bằng LinkedHashMap (accessOrder=true), override removeEldestEntry(). Capacity=3, add 5 items, get 1 item, add 1 more. Observe eviction order.</li>
      </ol>
    </details>

    <details class="accordion">
      <summary>❓ Q&amp;A — 7 câu hỏi phỏng vấn</summary>
      <ul class="qa-list">
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">ArrayList và LinkedList khác nhau về cấu trúc dữ liệu nội bộ thế nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>ArrayList:</strong> Backed bởi <code>Object[]</code>. Elements lưu liên tiếp trong bộ nhớ. Default capacity = 10, grow 1.5x khi full. Random access O(1) vì địa chỉ = base + index × element_size.<br><br>
            <strong>LinkedList:</strong> Doubly-linked list — mỗi <code>Node</code> chứa <code>item, prev, next</code>. Không liên tiếp trong memory. Giữ <code>first</code> và <code>last</code> node. Cũng implement <code>Deque</code>.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Khi nào nên chọn LinkedList thay vì ArrayList?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Thực tế: <strong>Rất hiếm</strong> — cache miss penalty của LinkedList thường lớn hơn lợi ích O(1) insert.<br><br>
            Nên dùng LinkedList khi: cần Queue/Deque semantics (addFirst, pollFirst); rất nhiều insert/delete ở đầu list.<br><br>
            Rule of thumb: Dùng ArrayList làm default, switch sang LinkedList chỉ sau khi benchmark chứng minh cần.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">ConcurrentModificationException là gì? Tại sao xảy ra và cách tránh?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            CME xảy ra khi modify collection (add/remove) trong khi đang duyệt bằng iterator (kể cả for-each).<br><br>
            <strong>Cơ chế:</strong> ArrayList dùng <code>modCount</code> — mỗi lần add/remove tăng. Iterator lưu <code>expectedModCount</code> khi tạo. Mỗi next() check: modCount != expectedModCount → throw CME.<br><br>
            <strong>Cách tránh:</strong> (1) <code>iterator.remove()</code>; (2) <code>list.removeIf()</code>; (3) <code>list.removeAll(toRemove)</code>; (4) <code>CopyOnWriteArrayList</code>.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Fail-fast vs fail-safe iterator là gì?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Fail-fast:</strong> Throw CME ngay khi phát hiện structural modification. ArrayList, LinkedList, HashMap dùng fail-fast.<br><br>
            <strong>Fail-safe:</strong> Hoạt động trên bản sao của collection. Không throw CME. Ví dụ: <code>CopyOnWriteArrayList</code>, <code>ConcurrentHashMap</code>.<br><br>
            Đánh đổi: fail-safe có thể return stale data và tốn thêm memory cho bản sao.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">ArrayList.add() có O(1) không? Giải thích amortized analysis?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Không hoàn toàn O(1) mọi lúc — nhưng <strong>O(1) amortized</strong>.<br><br>
            Khi add phần tử thứ n+1 vào capacity n: tạo mảng mới (×1.5), copy n elements → O(n). Nhưng resize chỉ xảy ra log₁.₅(n) lần trong n thao tác.<br><br>
            Amortized cost: Tổng = O(n) ops + O(n) copy = O(n). Mỗi op amortized = O(1).<br><br>
            Nếu biết trước size: <code>new ArrayList&lt;&gt;(expectedSize)</code> để tránh resize.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">ListIterator vs Iterator khác nhau thế nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Iterator:</strong> Chỉ duyệt forward, chỉ có hasNext()/next()/remove().<br><br>
            <strong>ListIterator</strong> (chỉ cho List): Duyệt cả forward và backward. Thêm: hasPrevious()/previous(), nextIndex()/previousIndex(), add(E), set(E).<br><br>
            Dùng ListIterator khi cần bidirectional traversal hoặc replace elements in-place.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#9B59B6;">Mock EN</span>
            <span class="qa-q">EN: "What would you use to implement browser history (back/forward navigation) in Java?"</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            "I would use two <code>Deque</code> instances backed by <code>LinkedList</code> — one for back history and one for forward. When navigating to a new page, push current page onto the back stack and clear the forward stack. On back: pop from back stack, push current page to forward. On forward: pop from forward stack, push current page to back. LinkedList is ideal here because all operations are O(1) at the ends, with no need for index-based access."
          </div>
        </li>
      </ul>
    </details>

    <div class="bottom-row">
      <div class="bottom-card lc-card">
        <div class="bc-title">🟢 LeetCode</div>
        <div class="bc-name">#206 Reverse Linked List · #21 Merge Two Sorted Lists</div>
        <div class="bc-hint">Easy — pointer manipulation</div>
        <div class="bc-body">#206: Iterative với prev/curr/next pointers. #21: Compare heads, link smaller node, advance pointer. Cả hai giúp hiểu LinkedList internals sâu hơn lý thuyết.</div>
      </div>
      <div class="bottom-card tool-card">
        <div class="bc-title">🤖 AI Tool</div>
        <div class="bc-name">Copilot — Benchmark Code</div>
        <div class="bc-body">Prompt: <em>"Write a Java benchmark comparing ArrayList vs LinkedList for: adding 100k elements to middle, random access 100k times, removing from front 10k times. Use System.nanoTime()."</em></div>
      </div>
      <div class="bottom-card res-card">
        <div class="bc-title">📖 Resource</div>
        <div class="bc-name">Baeldung — ArrayList vs LinkedList</div>
        <div class="bc-body">Đọc: <strong>baeldung.com/java-arraylist-linkedlist</strong> — benchmark thực tế. Thêm: <strong>baeldung.com/java-iterator</strong> cho Iterator pattern chi tiết.</div>
      </div>
    </div>

  </div>
</div>

<!-- ===== DAY 4 ===== -->
<div class="day-section" id="w2-day-4">
  <div class="day-header" style="background:#27AE60;">
    <div class="day-header-left">
      <span class="day-icon">💪</span>
      <div>
        <div class="day-date">21/05/2025 — Thứ 5</div>
        <div class="day-topic">HashMap internals, HashSet, TreeMap, TreeSet</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">FULL</span>
      <span class="day-hours">2.5h</span>
    </div>
  </div>
  <div class="day-body">

    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English — Parroto Shadowing</strong>
        <span class="en-badge-time">25 phút</span>
      </div>
      <div class="en-content">
        <p><strong>Topic:</strong> "Java HashMap internals" — shadowing technical vocabulary.</p>
        <p style="margin-top:.6rem;"><strong>Luyện phát âm và dùng đúng ngữ cảnh:</strong></p>
        <ul style="margin:.5rem 0 .5rem 1.2rem;line-height:2;">
          <li><strong>hash collision</strong>: "Two keys may produce the same hash, causing a <em>hash collision</em>."</li>
          <li><strong>load factor</strong>: "The default <em>load factor</em> is 0.75, meaning resize at 75% full."</li>
          <li><strong>rehashing</strong>: "When capacity is exceeded, the map undergoes <em>rehashing</em>."</li>
          <li><strong>bucket array</strong>: "HashMap uses a <em>bucket array</em> where each slot holds a chain."</li>
          <li><strong>hash code</strong>: "The <em>hash code</em> determines which bucket a key maps to."</li>
        </ul>
        <p style="margin-top:.6rem;font-style:italic;">Thực hành: Giải thích HashMap put() operation bằng tiếng Anh trong 60 giây không nhìn notes.</p>
      </div>
    </div>

    <details class="accordion" open>
      <summary>📚 Lý thuyết — HashMap, HashSet, TreeMap, TreeSet</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">HashMap Internals</div>
          <div class="theory-body">
            Cấu trúc: <strong>Node[] table</strong> (bucket array, default 16 buckets).<br><br>
            <strong>put(key, value) flow:</strong><br>
            1. hash(key) → index = hash &amp; (capacity-1)<br>
            2. Nếu bucket empty → insert node<br>
            3. Nếu collision → chain (linked list hoặc tree nếu &gt;8 entries)<br>
            4. Nếu key đã tồn tại → replace value<br><br>
            <strong>Java 8+:</strong> Bucket dùng TreeNode khi chain &gt;8 → O(log n) worst case.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Load Factor &amp; Rehashing</div>
          <div class="theory-body">
            <strong>Load factor</strong> = size / capacity. Default: <strong>0.75</strong>.<br>
            Khi 75% buckets bị dùng, <strong>rehash</strong> xảy ra:<br>
            • Tạo table mới (capacity × 2)<br>
            • Re-insert tất cả entries (O(n))<br><br>
            <strong>Tại sao 0.75?</strong> Cân bằng giữa:<br>
            • Load thấp → ít collision, tốn nhiều memory<br>
            • Load cao → nhiều collision, chậm hơn<br><br>
            <strong>Tip:</strong> Biết trước size → <code>new HashMap&lt;&gt;(expectedSize * 2)</code>.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">HashSet</div>
          <div class="theory-body">
            HashSet là <strong>wrapper của HashMap</strong> — element là key, value luôn là <code>PRESENT</code> singleton.<br><br>
            <strong>Big-O:</strong> add, remove, contains: O(1) average.<br><br>
            <strong>Uniqueness:</strong> Dùng hashCode() + equals() để check duplicate.<br><br>
            <strong>Không có thứ tự.</strong> Dùng <code>LinkedHashSet</code> nếu cần insertion order. Dùng <code>TreeSet</code> nếu cần sorted.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">TreeMap &amp; TreeSet — Sorted</div>
          <div class="theory-body">
            Backed bởi <strong>Red-Black Tree</strong> (self-balancing BST).<br><br>
            <strong>TreeMap:</strong> Keys luôn sorted (natural order hoặc Comparator).<br>
            <strong>TreeSet:</strong> Sorted unique elements.<br><br>
            <strong>Big-O:</strong> get, put, remove: <strong>O(log n)</strong>.<br><br>
            <strong>Khi nào dùng:</strong> Cần key/element theo thứ tự. Range query: firstKey(), lastKey(), headMap(), tailMap(), floorKey(), ceilingKey().
          </div>
        </div>
      </div>
    </details>

    <details class="accordion">
      <summary>💻 Code — MapOperations.java</summary>
      <div class="code-wrap">
        <button class="copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)">Copy</button>
        <pre>import java.util.*;
import java.util.stream.*;

public class MapOperations {

    // Word frequency counter
    public static Map&lt;String, Integer&gt; wordFrequency(String text) {
        Map&lt;String, Integer&gt; freq = new HashMap&lt;&gt;();
        for (String word : text.toLowerCase().split("\\s+")) {
            freq.merge(word, 1, Integer::sum);
        }
        return freq;
    }

    // Group by first letter
    public static Map&lt;Character, List&lt;String&gt;&gt; groupByFirstLetter(List&lt;String&gt; words) {
        Map&lt;Character, List&lt;String&gt;&gt; groups = new HashMap&lt;&gt;();
        for (String word : words) {
            groups.computeIfAbsent(word.charAt(0), k -&gt; new ArrayList&lt;&gt;()).add(word);
        }
        return groups;
    }

    // Remove duplicates preserving insertion order
    public static &lt;T&gt; List&lt;T&gt; removeDuplicates(List&lt;T&gt; list) {
        return new ArrayList&lt;&gt;(new LinkedHashSet&lt;&gt;(list));
    }

    // Top N most frequent words
    public static List&lt;Map.Entry&lt;String, Integer&gt;&gt; topN(Map&lt;String, Integer&gt; freq, int n) {
        return freq.entrySet().stream()
                .sorted(Map.Entry.&lt;String, Integer&gt;comparingByValue().reversed())
                .limit(n)
                .collect(Collectors.toList());
    }

    // TreeMap — sorted phone book with range queries
    public static void treeMapDemo() {
        TreeMap&lt;String, String&gt; phoneBook = new TreeMap&lt;&gt;();
        phoneBook.put("Minh", "0901-234-567");
        phoneBook.put("An",   "0912-345-678");
        phoneBook.put("Lan",  "0923-456-789");
        phoneBook.put("Duc",  "0934-567-890");
        phoneBook.put("Binh", "0945-678-901");

        System.out.println("All contacts (sorted): " + phoneBook);
        System.out.println("First: " + phoneBook.firstKey());
        System.out.println("Names A–L: " + phoneBook.subMap("A", "L"));
        System.out.println("Floor of 'D': " + phoneBook.floorKey("D"));
        System.out.println("Ceiling of 'D': " + phoneBook.ceilingKey("D"));
    }

    public static void main(String[] args) {
        String text = "the quick brown fox jumps over the lazy dog the fox";
        Map&lt;String, Integer&gt; freq = wordFrequency(text);
        System.out.println("Word frequencies: " + freq);

        System.out.println("Top 3:");
        topN(freq, 3).forEach(e -&gt; System.out.println("  " + e.getKey() + ": " + e.getValue()));

        List&lt;String&gt; words = Arrays.asList("banana","apple","avocado","cherry","blueberry","apricot");
        System.out.println("\nGrouped by first letter: " + groupByFirstLetter(words));

        List&lt;Integer&gt; nums = Arrays.asList(1, 2, 3, 2, 1, 4, 3, 5);
        System.out.println("De-duplicated (order preserved): " + removeDuplicates(nums));

        System.out.println("\n=== TreeMap Demo ===");
        treeMapDemo();

        // TreeSet
        TreeSet&lt;Integer&gt; scores = new TreeSet&lt;&gt;(Arrays.asList(85, 92, 78, 95, 88, 72));
        System.out.println("\nScores sorted: " + scores);
        System.out.println("Highest: " + scores.last());
        System.out.println("Scores above 85 (exclusive): " + scores.tailSet(85, false));
    }
}</pre>
      </div>
    </details>

    <details class="accordion">
      <summary>✏️ Bài tập thực hành</summary>
      <ol class="exercise-list">
        <li><strong>Word frequency counter:</strong> Đọc đoạn văn 50+ words từ String. Đếm tần suất mỗi từ (lowercase, bỏ punctuation). In top 5 từ thường xuyên nhất. Sau đó dùng TreeMap để in frequency map theo thứ tự alphabet.</li>
        <li><strong>Remove duplicates với HashSet:</strong> Cho <code>List&lt;Student&gt;</code> (Student có id, name). Dùng HashSet để tìm duplicate IDs. Override equals() và hashCode() trong Student dựa trên id. So sánh HashSet vs TreeSet (cần implement Comparable).</li>
        <li><strong>Phone book với TreeMap:</strong> Implement <code>PhoneBook</code> dùng <code>TreeMap&lt;String, List&lt;String&gt;&gt;</code>. Methods: addContact(name, phone), findContact(name), listAll(), findByPrefix(String prefix) dùng subMap().</li>
        <li><strong>Top 3 most frequent words:</strong> Từ word frequency map, tìm top 3 mà không dùng Stream — dùng PriorityQueue (min-heap size 3). So sánh approach với Stream version.</li>
      </ol>
    </details>

    <details class="accordion">
      <summary>❓ Q&amp;A — 7 câu hỏi phỏng vấn</summary>
      <ul class="qa-list">
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">HashMap get() có độ phức tạp O(1) không?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>O(1) average case</strong>, không phải tuyệt đối.<br><br>
            Flow: hash(key) → index → access bucket O(1) → search trong bucket.<br>
            • Không collision: bucket có 1 entry → O(1).<br>
            • Có collision (linked list): O(k) với k = entries trong bucket.<br>
            • Java 8+ treeification khi k &gt; 8 → O(log k) worst.<br><br>
            O(1) average với hashCode() tốt và load factor hợp lý.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Tại sao phải override cả hashCode() và equals() khi dùng làm key trong HashMap?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Contract:</strong> Nếu <code>a.equals(b)</code> là true thì <code>a.hashCode() == b.hashCode()</code> phải đúng.<br><br>
            • Chỉ override equals(): Hai objects "equal" nhưng khác hashCode → HashMap không tìm đúng bucket → get() trả null.<br>
            • Chỉ override hashCode(): Cùng bucket nhưng equals() dùng object identity → không nhận ra duplicate key.<br><br>
            IDE tip: Generate cả hai cùng lúc. Dùng <code>Objects.hash()</code> và <code>Objects.equals()</code>. Java 16+ record tự generate cả hai.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Hash collision được xử lý thế nào trong HashMap Java 8+?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Java 7:</strong> Collision → linked list trong bucket. Worst case O(n).<br><br>
            <strong>Java 8+:</strong> Hybrid approach:<br>
            • ≤8 entries trong bucket: dùng <strong>linked list</strong><br>
            • &gt;8 entries AND table capacity ≥64: convert sang <strong>Red-Black Tree</strong> → O(log n)<br>
            • Nếu tree shrinks xuống ≤6: convert lại về linked list<br><br>
            Tại sao threshold 8? Poisson distribution cho thấy xác suất bucket có 8+ entries là cực thấp với load factor 0.75.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">HashMap vs TreeMap — khi nào dùng cái nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <table style="width:100%;border-collapse:collapse;font-size:.85rem;">
              <tr style="background:#f0f4f8;"><th style="padding:5px;">Tiêu chí</th><th style="padding:5px;">HashMap</th><th style="padding:5px;">TreeMap</th></tr>
              <tr><td style="padding:5px;">Thứ tự</td><td style="padding:5px;">Không đảm bảo</td><td style="padding:5px;">Sorted by key</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:5px;">get/put/remove</td><td style="padding:5px;">O(1) avg</td><td style="padding:5px;">O(log n)</td></tr>
              <tr><td style="padding:5px;">null key</td><td style="padding:5px;">Cho phép 1 null</td><td style="padding:5px;">Không (NPE)</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:5px;">Range queries</td><td style="padding:5px;">Không hỗ trợ</td><td style="padding:5px;">headMap/tailMap/subMap</td></tr>
            </table>
            Dùng HashMap khi cần lookup nhanh. Dùng TreeMap khi cần sorted keys hoặc range queries.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">Tại sao HashMap không thread-safe? ConcurrentHashMap giải quyết thế nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            HashMap không thread-safe: đồng thời 2 threads resize → race conditions (lost updates, incomplete puts). Java 7 còn có infinite loop do circular reference.<br><br>
            <strong>ConcurrentHashMap Java 8+:</strong><br>
            • Dùng <strong>CAS</strong> cho empty bucket inserts<br>
            • <strong>synchronized</strong> chỉ trên bucket head node (không lock toàn bộ map)<br>
            • Nhiều readers + N writers ở khác bucket song song<br>
            • Không cho phép null key/value<br><br>
            Alternatives: <code>Collections.synchronizedMap()</code> (toàn bộ map lock, chậm hơn), <code>Hashtable</code> (legacy, tránh dùng).
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">Mutable object có an toàn dùng làm HashSet element không?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Rất nguy hiểm!</strong><br>
            1. Add object vào HashSet → tính hashCode → lưu vào bucket<br>
            2. Thay đổi field ảnh hưởng hashCode → hashCode mới khác bucket cũ<br>
            3. <code>contains(obj)</code> → tính hashCode mới → sai bucket → return false<br>
            4. Object vẫn trong set nhưng không tìm được (orphaned entry)!<br><br>
            Best practice: Dùng immutable objects (String, Integer, record) làm key/element. Nếu mutable, đảm bảo fields dùng trong hashCode/equals không thay đổi sau khi add.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#9B59B6;">Mock EN</span>
            <span class="qa-q">EN: "Explain how HashMap works internally, from put() to get()."</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            "When you call put(key, value), HashMap computes the hash of the key using hashCode(), applies a mixing function, and uses the result modulo capacity to find the bucket index. If the bucket is empty, it inserts a new Node. If there's a collision, it walks the linked list comparing with equals(). If a match is found, it replaces the value; otherwise it appends a new node. In Java 8+, if a bucket exceeds 8 entries, it converts to a balanced tree for O(log n) lookup. For get(), the same hash and index computation is done, then the bucket is searched with equals(). Average case is O(1), but requires a correct hashCode() and equals() contract."
          </div>
        </li>
      </ul>
    </details>

    <div class="bottom-row">
      <div class="bottom-card lc-card">
        <div class="bc-title">🟢 LeetCode</div>
        <div class="bc-name">#1 Two Sum · #49 Group Anagrams</div>
        <div class="bc-hint">Easy + Medium — HashMap patterns cổ điển</div>
        <div class="bc-body">#1: HashMap lưu complement → O(n). #49: Sort mỗi string làm key, group anagrams → O(n·k·log k). Hai bài xuất hiện trong 90% phỏng vấn Java.</div>
      </div>
      <div class="bottom-card tool-card">
        <div class="bc-title">🤖 AI Tool</div>
        <div class="bc-name">Copilot — HashMap Optimization</div>
        <div class="bc-body">Prompt: <em>"Optimize this word frequency counter using HashMap with initial capacity to avoid rehashing. Add a method to find top-K frequent words efficiently using a min-heap."</em></div>
      </div>
      <div class="bottom-card res-card">
        <div class="bc-title">📖 Resource</div>
        <div class="bc-name">Baeldung — HashMap Internals</div>
        <div class="bc-body">Đọc: <strong>baeldung.com/java-hashmap</strong> — phần "Collision Handling" và "Java 8 Improvements". Vẽ sơ đồ bucket array + linked list + tree bằng tay để ghi nhớ.</div>
      </div>
    </div>

  </div>
</div>

<!-- ===== DAY 5 ===== -->
<div class="day-section" id="w2-day-5">
  <div class="day-header" style="background:#E67E22;">
    <div class="day-header-left">
      <span class="day-icon">⚡</span>
      <div>
        <div class="day-date">22/05/2025 — Thứ 6</div>
        <div class="day-topic">Stream API: filter, map, collect, reduce</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">LIGHT</span>
      <span class="day-hours">1.5h</span>
    </div>
  </div>
  <div class="day-body">

    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English — Vocalmax + Video</strong>
        <span class="en-badge-time">20 phút</span>
      </div>
      <div class="en-content">
        <p><strong>Vocalmax 10 từ hôm nay:</strong></p>
        <ul style="margin:.5rem 0 .5rem 1.2rem;line-height:1.9;">
          <li><strong>stream</strong> — luồng dữ liệu (Stream API — không phải I/O stream)</li>
          <li><strong>pipeline</strong> — chuỗi xử lý (source → intermediate → terminal)</li>
          <li><strong>filter</strong> — lọc (giữ lại elements thỏa điều kiện)</li>
          <li><strong>map</strong> — ánh xạ (transform mỗi element sang type/value khác)</li>
          <li><strong>collect</strong> — thu thập (gom kết quả vào Collection)</li>
          <li><strong>reduce</strong> — rút gọn (combine elements thành 1 giá trị)</li>
          <li><strong>lambda</strong> — hàm vô danh (x -&gt; x * 2)</li>
          <li><strong>functional</strong> — hàm thuần túy (không side effect)</li>
          <li><strong>terminal</strong> — kết thúc pipeline (collect, count, forEach)</li>
          <li><strong>intermediate</strong> — trung gian, lazy (filter, map, sorted)</li>
        </ul>
        <p style="margin-top:.8rem;">📺 <strong>Xem:</strong> "Java 8 Streams Tutorial" trên YouTube — 5 phút đầu. Chú ý phát âm: <em>stream pipeline</em>, <em>lazy evaluation</em>, <em>terminal operation</em>.</p>
      </div>
    </div>

    <details class="accordion" open>
      <summary>📚 Lý thuyết — Stream API Basics</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Stream Pipeline</div>
          <div class="theory-body">
            3 phần:<br>
            <strong>1. Source:</strong> collection.stream(), Arrays.stream(), Stream.of()<br>
            <strong>2. Intermediate (lazy):</strong> filter(), map(), sorted(), distinct(), limit(), skip()<br>
            <strong>3. Terminal (eager):</strong> collect(), count(), reduce(), forEach(), findFirst(), anyMatch()<br><br>
            <pre style="font-size:.8rem;background:#f5f5f5;padding:8px;border-radius:6px;">list.stream()
    .filter(x -&gt; x &gt; 0)  // intermediate
    .map(x -&gt; x * 2)      // intermediate
    .collect(toList());    // terminal</pre>
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Common Intermediate Ops</div>
          <div class="theory-body">
            <strong>filter(Predicate):</strong> Giữ elements thỏa điều kiện.<br>
            <code>.filter(s -&gt; s.startsWith("A"))</code><br><br>
            <strong>map(Function):</strong> Transform mỗi element.<br>
            <code>.map(String::toUpperCase)</code><br><br>
            <strong>sorted():</strong> Sắp xếp (có thể truyền Comparator).<br>
            <strong>distinct():</strong> Loại duplicate (dùng equals/hashCode).<br>
            <strong>limit(n):</strong> Giữ tối đa n elements.<br>
            <strong>peek(Consumer):</strong> Debug mà không thay đổi stream.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Common Terminal Ops</div>
          <div class="theory-body">
            <strong>collect(Collector):</strong> Gom vào collection.<br>
            <code>.collect(Collectors.toList())</code><br><br>
            <strong>count():</strong> Đếm số elements.<br>
            <strong>reduce(identity, BinaryOp):</strong> Gộp thành 1 giá trị.<br>
            <code>.reduce(0, Integer::sum)</code><br><br>
            <strong>forEach(Consumer):</strong> Thực thi action (no return).<br>
            <strong>findFirst():</strong> Trả về <code>Optional&lt;T&gt;</code>.<br>
            <strong>anyMatch/allMatch/noneMatch:</strong> Trả về boolean.
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Lazy Evaluation</div>
          <div class="theory-body">
            Intermediate ops không thực thi cho đến khi terminal op được gọi. Cho phép <strong>short-circuit</strong>:<br><br>
            <pre style="font-size:.8rem;background:#f5f5f5;padding:8px;border-radius:6px;">list.stream()
    .filter(x -&gt; expensive(x))
    .findFirst(); // dừng khi tìm thấy 1</pre>
            <strong>Stream không thể reuse:</strong> Sau khi terminal op chạy, stream đã "consumed". Gọi lại → <code>IllegalStateException</code>.
          </div>
        </div>
      </div>
    </details>

    <details class="accordion">
      <summary>💻 Code — StreamBasics.java</summary>
      <div class="code-wrap">
        <button class="copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)">Copy</button>
        <pre>import java.util.*;
import java.util.stream.*;

public class StreamBasics {

    record Student(String name, double gpa, int age, String major) {}

    public static void main(String[] args) {
        List&lt;Student&gt; students = List.of(
            new Student("An",   3.8, 20, "CS"),
            new Student("Binh", 2.5, 22, "Math"),
            new Student("Chau", 3.5, 19, "CS"),
            new Student("Duc",  3.2, 21, "Physics"),
            new Student("Em",   3.9, 20, "CS"),
            new Student("Fong", 2.8, 23, "Math")
        );

        // filter + sorted + map + collect
        List&lt;String&gt; highAchieverNames = students.stream()
                .filter(s -&gt; s.gpa() &gt;= 3.5)
                .sorted(Comparator.comparingDouble(Student::gpa).reversed())
                .map(Student::name)
                .collect(Collectors.toList());
        System.out.println("High achievers (GPA ≥ 3.5): " + highAchieverNames);

        // count
        long csCount = students.stream()
                .filter(s -&gt; "CS".equals(s.major()))
                .count();
        System.out.println("CS students: " + csCount);

        // mapToDouble + reduce for average GPA
        double totalGPA = students.stream()
                .mapToDouble(Student::gpa)
                .reduce(0.0, Double::sum);
        System.out.printf("Average GPA: %.2f%n", totalGPA / students.size());

        // findFirst + Optional
        Optional&lt;Student&gt; firstCS = students.stream()
                .filter(s -&gt; "CS".equals(s.major()))
                .findFirst();
        firstCS.ifPresent(s -&gt; System.out.println("First CS student: " + s.name()));

        // anyMatch / allMatch / noneMatch
        boolean anyFailing = students.stream().anyMatch(s -&gt; s.gpa() &lt; 2.0);
        boolean allAdults  = students.stream().allMatch(s -&gt; s.age() &gt;= 18);
        System.out.println("Any failing (GPA &lt; 2.0): " + anyFailing);
        System.out.println("All adults: " + allAdults);

        // Method reference: String::toUpperCase
        List&lt;String&gt; names = List.of("alice", "bob", "charlie");
        List&lt;String&gt; upper = names.stream()
                .map(String::toUpperCase)
                .sorted()
                .collect(Collectors.toList());
        System.out.println("Uppercase sorted: " + upper);

        // IntSummaryStatistics
        IntSummaryStatistics ageStats = students.stream()
                .mapToInt(Student::age)
                .summaryStatistics();
        System.out.printf("Age — min:%d max:%d avg:%.1f%n",
                ageStats.getMin(), ageStats.getMax(), ageStats.getAverage());
    }
}</pre>
      </div>
    </details>

    <details class="accordion">
      <summary>✏️ Bài tập thực hành</summary>
      <ol class="exercise-list">
        <li><strong>Filter &amp; sum với Stream:</strong> Cho <code>List&lt;Integer&gt;</code> chứa 1–20. Dùng Stream: (a) lọc số chẵn và tính tổng bằng reduce, (b) lọc số nguyên tố và collect thành list, (c) tìm số lớn nhất bằng max(). So sánh với vòng lặp thông thường.</li>
        <li><strong>List&lt;String&gt; transformations:</strong> Cho list tên sản phẩm. Dùng Stream: convert sang uppercase và sort, lọc tên có độ dài &gt; 5, join thành 1 String ngăn cách bởi ", ". Tất cả trong một pipeline nếu có thể.</li>
        <li><strong>findFirst() với Optional:</strong> Cho <code>List&lt;Person&gt;</code> (name, age). Tìm người đầu tiên trên 18 tuổi. Xử lý Optional 3 cách: ifPresent(), orElse(), orElseThrow(). Viết hàm trả về tên hoặc "Unknown" nếu không tìm thấy.</li>
      </ol>
    </details>

    <details class="accordion">
      <summary>❓ Q&amp;A — 5 câu hỏi phỏng vấn</summary>
      <ul class="qa-list">
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Stream API khác gì so với vòng lặp for thông thường?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>For loop (imperative):</strong> Nói "làm thế nào" — bạn viết từng bước, quản lý index, mutable state.<br><br>
            <strong>Stream (declarative):</strong> Nói "muốn gì" — filter, map, collect. JVM tự tối ưu.<br><br>
            Ưu điểm Stream: Code ngắn gọn, lazy evaluation, dễ parallelism (thay .stream() bằng .parallelStream()), composable.<br>
            Ưu điểm for loop: Debug dễ hơn, performance tốt hơn cho simple iterations, không có Stream overhead.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Intermediate operation và Terminal operation trong Stream là gì?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Intermediate (lazy):</strong> Trả về Stream, không thực thi ngay. Ví dụ: filter(), map(), sorted(), distinct(), limit(), flatMap().<br><br>
            <strong>Terminal (eager):</strong> Tiêu thụ stream, trả về non-Stream. Kích hoạt toàn bộ pipeline. Ví dụ: collect(), count(), reduce(), forEach(), findFirst(), anyMatch().<br><br>
            Tại sao lazy? Cho phép optimization: findFirst() chỉ cần process đủ elements để tìm thấy cái đầu tiên.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Tại sao Stream không thể reuse sau khi terminal op đã chạy?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Stream là "single-use pipeline" — không lưu data, chỉ là processing pipeline trên data source. Sau terminal op, stream ở trạng thái "consumed".<br><br>
            Gọi lại bất kỳ op nào → <code>IllegalStateException: stream has already been operated upon or closed</code>.<br><br>
            Giải pháp: Tạo stream mới từ collection: <code>list.stream()</code>. Hoặc dùng <code>Supplier&lt;Stream&lt;T&gt;&gt; s = list::stream</code> để tạo nhiều lần.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Method reference là gì? 4 loại method reference trong Java?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Method reference là cú pháp ngắn gọn cho lambda khi lambda chỉ gọi một method:<br><br>
            1. <strong>Static:</strong> <code>Integer::parseInt</code> thay cho <code>s -&gt; Integer.parseInt(s)</code><br>
            2. <strong>Instance (object cụ thể):</strong> <code>myObj::myMethod</code> thay cho <code>x -&gt; myObj.myMethod(x)</code><br>
            3. <strong>Instance (arbitrary object of type):</strong> <code>String::toUpperCase</code> thay cho <code>s -&gt; s.toUpperCase()</code><br>
            4. <strong>Constructor:</strong> <code>ArrayList::new</code> thay cho <code>() -&gt; new ArrayList&lt;&gt;()</code>
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">reduce() hoạt động thế nào? Identity value là gì?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <code>reduce(identity, accumulator)</code> gộp tất cả elements bằng BinaryOperator, bắt đầu từ identity.<br><br>
            <pre style="font-size:.82rem;background:#f5f5f5;padding:8px;border-radius:6px;">int sum  = list.stream().reduce(0, Integer::sum);
int prod = list.stream().reduce(1, (a,b) -&gt; a*b);</pre>
            <strong>Identity value:</strong> Giá trị khi combine với bất kỳ element nào vẫn cho ra element đó. Sum → 0. Product → 1. Concat → "".<br><br>
            Nếu stream empty: <code>reduce(identity, op)</code> trả về identity. <code>reduce(op)</code> không có identity trả về <code>Optional</code>.
          </div>
        </li>
      </ul>
    </details>

    <div class="bottom-row">
      <div class="bottom-card lc-card">
        <div class="bc-title">🟢 LeetCode</div>
        <div class="bc-name">#1672 Richest Customer Wealth</div>
        <div class="bc-hint">Easy — Arrays + Stream practice</div>
        <div class="bc-body"><code>Arrays.stream(accounts).mapToInt(row -&gt; Arrays.stream(row).sum()).max().getAsInt()</code> — 1 dòng Stream solution. Luyện mapToInt và nested streams.</div>
      </div>
      <div class="bottom-card tool-card">
        <div class="bc-title">🤖 AI Tool</div>
        <div class="bc-name">Copilot — Convert Loops to Streams</div>
        <div class="bc-body">Paste một đoạn code có 3-4 for loops, prompt: <em>"Convert these imperative loops to Java Stream API, using method references where possible."</em> So sánh readability và đo performance.</div>
      </div>
      <div class="bottom-card res-card">
        <div class="bc-title">📖 Resource</div>
        <div class="bc-name">Baeldung — Java 8 Streams</div>
        <div class="bc-body">Đọc: <strong>baeldung.com/java-8-streams</strong> — phần "Lazy Invocation" và "Short-circuiting". Bookmark "Stream vs Collection" để ôn khi phỏng vấn.</div>
      </div>
    </div>

  </div>
</div>

<!-- ===== DAY 6 ===== -->
<div class="day-section" id="w2-day-6">
  <div class="day-header" style="background:#C0392B;">
    <div class="day-header-left">
      <span class="day-icon">🔥</span>
      <div>
        <div class="day-date">23/05/2025 — Thứ 7</div>
        <div class="day-topic">Stream Advanced: Collectors, flatMap, groupingBy + Thread-safe Collections</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">WEEKEND</span>
      <span class="day-hours">4h</span>
    </div>
  </div>
  <div class="day-body">

    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English — Parroto Shadowing 30 phút + Vocalmax Review</strong>
        <span class="en-badge-time">30 phút</span>
      </div>
      <div class="en-content">
        <p><strong>Parroto:</strong> Shadow video "Advanced Java Streams" — tập trung vào interview sentences:</p>
        <ul style="margin:.5rem 0 .5rem 1.2rem;line-height:2;">
          <li>"I would use <strong>groupingBy</strong> to partition the list by a classification key."</li>
          <li>"<strong>flatMap</strong> is used to flatten a stream of collections into a single stream."</li>
          <li>"<strong>Collectors.joining</strong> concatenates stream elements with a delimiter."</li>
          <li>"For thread safety, I prefer <strong>ConcurrentHashMap</strong> over synchronizedMap."</li>
          <li>"Parallel streams use the <strong>ForkJoinPool</strong> common pool under the hood."</li>
        </ul>
        <p style="margin-top:.6rem;"><strong>Vocalmax review session:</strong> Ôn lại 20 từ từ ngày 5 + 10 từ mới: grouping, partition, collector, delimiter, concurrent, thread-safe, synchronized, atomic, fork, join.</p>
      </div>
    </div>

    <details class="accordion" open>
      <summary>📚 Lý thuyết — Advanced Streams + Thread-safe Collections</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Collectors</div>
          <div class="theory-body">
            <strong>toList() / toSet():</strong> Gom vào List/Set.<br>
            <strong>toMap(keyFn, valueFn):</strong> Gom vào Map.<br>
            <strong>groupingBy(classifier):</strong> Group elements thành <code>Map&lt;K, List&lt;T&gt;&gt;</code>.<br>
            <strong>groupingBy(classifier, downstream):</strong> Group với downstream collector.<br>
            <strong>counting():</strong> Đếm trong mỗi group.<br>
            <strong>joining(delimiter):</strong> Nối strings.<br>
            <strong>summarizingInt/toMap:</strong> Statistics.<br><br>
            <pre style="font-size:.79rem;background:#f5f5f5;padding:6px;border-radius:6px;">students.stream().collect(
  Collectors.groupingBy(Student::major,
    Collectors.counting())
);</pre>
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">flatMap — Flatten Nested</div>
          <div class="theory-body">
            <code>map()</code> → <code>Stream&lt;Stream&lt;T&gt;&gt;</code> (nested)<br>
            <code>flatMap()</code> → <code>Stream&lt;T&gt;</code> (flattened)<br><br>
            <pre style="font-size:.79rem;background:#f5f5f5;padding:6px;border-radius:6px;">List&lt;List&lt;Integer&gt;&gt; nested = ...;
List&lt;Integer&gt; flat = nested.stream()
    .flatMap(Collection::stream)
    .collect(toList());

// Words from sentences:
List&lt;String&gt; words = sentences.stream()
    .flatMap(s -&gt; Arrays.stream(s.split(" ")))
    .collect(toList());</pre>
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Parallel Streams</div>
          <div class="theory-body">
            <code>list.parallelStream()</code> hoặc <code>stream.parallel()</code> — dùng <strong>ForkJoinPool.commonPool()</strong> để chia nhỏ và xử lý song song.<br><br>
            <strong>Khi nào nên dùng:</strong><br>
            • Tập dữ liệu lớn (100k+)<br>
            • Mỗi element xử lý tốn thời gian<br>
            • Stateless, independent operations<br><br>
            <strong>Khi nào KHÔNG nên:</strong><br>
            • List nhỏ (overhead > benefit)<br>
            • Operations có side effects<br>
            • Ordered operations (findFirst có thể chậm hơn)
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Thread-safe Collections</div>
          <div class="theory-body">
            <strong>ConcurrentHashMap:</strong> Segment-level lock, O(1) avg. Không cho null key/value. Best choice cho concurrent map.<br><br>
            <strong>CopyOnWriteArrayList:</strong> Mỗi write tạo bản sao mới. Reads lock-free, writes expensive. Phù hợp read-heavy, write-rare (event listeners).<br><br>
            <strong>Collections.synchronizedList(list):</strong> Wrapper toàn bộ map lock. Iteration vẫn cần synchronized block thủ công.<br><br>
            <strong>BlockingQueue:</strong> LinkedBlockingQueue, ArrayBlockingQueue — producer-consumer pattern.
          </div>
        </div>
      </div>
    </details>

    <details class="accordion">
      <summary>💻 Code — StreamAdvanced.java + ThreadSafeDemo.java</summary>
      <div class="code-wrap">
        <button class="copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)">Copy</button>
        <pre>// ===== StreamAdvanced.java =====
import java.util.*;
import java.util.stream.*;

public class StreamAdvanced {

    record Student(String name, double gpa, String major, String faculty) {}

    public static void main(String[] args) {
        List&lt;Student&gt; students = List.of(
            new Student("An",    3.8, "CS",      "Engineering"),
            new Student("Binh",  2.5, "Math",    "Science"),
            new Student("Chau",  3.5, "CS",      "Engineering"),
            new Student("Duc",   3.2, "Physics", "Science"),
            new Student("Em",    3.9, "CS",      "Engineering"),
            new Student("Fong",  2.8, "Math",    "Science"),
            new Student("Giang", 3.6, "CS",      "Engineering"),
            new Student("Hai",   3.1, "Physics", "Science")
        );

        // groupingBy major + counting
        Map&lt;String, Long&gt; countByMajor = students.stream()
                .collect(Collectors.groupingBy(Student::major, Collectors.counting()));
        System.out.println("Count by major: " + countByMajor);

        // groupingBy faculty → list of names
        Map&lt;String, List&lt;String&gt;&gt; namesByFaculty = students.stream()
                .collect(Collectors.groupingBy(
                        Student::faculty,
                        Collectors.mapping(Student::name, Collectors.toList())
                ));
        System.out.println("Names by faculty: " + namesByFaculty);

        // groupingBy major → average GPA
        Map&lt;String, Double&gt; avgGpaByMajor = students.stream()
                .collect(Collectors.groupingBy(Student::major,
                        Collectors.averagingDouble(Student::gpa)));
        System.out.println("Avg GPA by major: " + avgGpaByMajor);

        // Collectors.joining
        String nameList = students.stream()
                .filter(s -&gt; s.gpa() &gt;= 3.5)
                .map(Student::name)
                .collect(Collectors.joining(", ", "[", "]"));
        System.out.println("Top students: " + nameList);

        // flatMap — flatten list of lists
        List&lt;List&lt;Integer&gt;&gt; nested = List.of(
                List.of(1, 2, 3),
                List.of(4, 5),
                List.of(6, 7, 8, 9)
        );
        List&lt;Integer&gt; flat = nested.stream()
                .flatMap(Collection::stream)
                .sorted()
                .collect(Collectors.toList());
        System.out.println("Flattened: " + flat);

        // flatMap — extract all words from sentences
        List&lt;String&gt; sentences = List.of("hello world", "java stream api", "flat map example");
        List&lt;String&gt; uniqueWords = sentences.stream()
                .flatMap(s -&gt; Arrays.stream(s.split(" ")))
                .distinct()
                .sorted()
                .collect(Collectors.toList());
        System.out.println("Unique words: " + uniqueWords);

        // Parallel stream — sum of 1 to 1_000_000
        long sum = LongStream.rangeClosed(1, 1_000_000)
                .parallel()
                .sum();
        System.out.println("Sum 1..1M (parallel): " + sum);
    }
}

// ===== ThreadSafeDemo.java =====
import java.util.*;
import java.util.concurrent.*;

public class ThreadSafeDemo {

    public static void main(String[] args) throws InterruptedException {
        // ConcurrentHashMap — safe for concurrent reads and writes
        ConcurrentHashMap&lt;String, Integer&gt; concurrentMap = new ConcurrentHashMap&lt;&gt;();

        // 10 threads each increment 1000 times
        List&lt;Thread&gt; threads = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; 10; i++) {
            threads.add(new Thread(() -&gt; {
                for (int j = 0; j &lt; 1000; j++) {
                    concurrentMap.merge("counter", 1, Integer::sum);
                }
            }));
        }
        threads.forEach(Thread::start);
        for (Thread t : threads) t.join();
        System.out.println("ConcurrentHashMap counter: " + concurrentMap.get("counter")); // Always 10000

        // CopyOnWriteArrayList — safe iteration while writing
        CopyOnWriteArrayList&lt;String&gt; cowList = new CopyOnWriteArrayList&lt;&gt;();
        cowList.add("initial");
        Thread reader = new Thread(() -&gt; {
            for (String s : cowList) { // snapshot iteration — no CME
                System.out.print(s + " ");
            }
        });
        Thread writer = new Thread(() -&gt; cowList.add("added-concurrently"));
        reader.start(); writer.start();
        reader.join(); writer.join();
        System.out.println("\nCOW list: " + cowList);
    }
}</pre>
      </div>
    </details>

    <details class="accordion">
      <summary>✏️ Bài tập thực hành</summary>
      <ol class="exercise-list">
        <li><strong>Group students by grade level:</strong> Cho List&lt;Student&gt; (name, gpa). Dùng <code>groupingBy</code> để group thành: "Xuất sắc" (GPA ≥ 3.6), "Giỏi" (3.2–3.6), "Khá" (2.5–3.2), "Trung bình" (dưới 2.5). Đếm số sinh viên mỗi nhóm bằng <code>Collectors.counting()</code>.</li>
        <li><strong>Flatten với flatMap:</strong> Cho <code>List&lt;Order&gt;</code>, mỗi Order có <code>List&lt;Item&gt;</code>. Dùng flatMap để lấy tất cả Item từ mọi Order. Tính tổng giá trị tất cả items. Tìm item đắt nhất.</li>
        <li><strong>Collectors.joining:</strong> Cho List&lt;String&gt; tên sinh viên. Tạo: (a) String phân cách bằng ", ", (b) String dạng "[name1, name2, ...]", (c) HTML list "&lt;li&gt;name&lt;/li&gt;" dùng joining với prefix/suffix.</li>
        <li><strong>ConcurrentHashMap vs HashMap:</strong> Tạo 20 threads, mỗi thread thêm 500 entries vào HashMap và ConcurrentHashMap song song. So sánh final size. HashMap thường cho kết quả sai (lost updates). Giải thích.</li>
      </ol>
    </details>

    <details class="accordion">
      <summary>❓ Q&amp;A — 8 câu hỏi phỏng vấn</summary>
      <ul class="qa-list">
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">groupingBy() trả về loại Map nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <code>Collectors.groupingBy(classifier)</code> trả về <code>Map&lt;K, List&lt;T&gt;&gt;</code> — mặc định dùng HashMap, value là ArrayList.<br><br>
            Với downstream collector: <code>groupingBy(classifier, Collectors.counting())</code> → <code>Map&lt;K, Long&gt;</code>.<br><br>
            Có thể chỉ định Map type: <code>groupingBy(classifier, TreeMap::new, toList())</code> → <code>TreeMap&lt;K, List&lt;T&gt;&gt;</code> (sorted keys).<br><br>
            Tương tự: <code>partitioningBy(Predicate)</code> → <code>Map&lt;Boolean, List&lt;T&gt;&gt;</code> (2 nhóm: true/false).
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">flatMap khác map thế nào? Cho ví dụ?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>map(f):</strong> Mỗi element T → 1 element R → <code>Stream&lt;R&gt;</code>.<br>
            <strong>flatMap(f):</strong> Mỗi element T → Stream&lt;R&gt; → flatten tất cả → <code>Stream&lt;R&gt;</code>.<br><br>
            Ví dụ: Nếu mỗi người có List&lt;String&gt; phone numbers:<br>
            <pre style="font-size:.82rem;background:#f5f5f5;padding:6px;border-radius:6px;">// map: Stream&lt;List&lt;String&gt;&gt; — nested
people.stream().map(Person::getPhones)

// flatMap: Stream&lt;String&gt; — flat
people.stream().flatMap(p -&gt; p.getPhones().stream())</pre>
            Dùng flatMap khi mapper function trả về Collection/Stream và bạn muốn một stream phẳng.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Collectors.toMap() khi nào bị exception? Cách fix?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <code>Collectors.toMap(keyMapper, valueMapper)</code> throw <code>IllegalStateException: Duplicate key</code> khi 2 elements có cùng key.<br><br>
            <strong>Fix 1:</strong> Truyền merge function:<br>
            <pre style="font-size:.82rem;background:#f5f5f5;padding:6px;border-radius:6px;">Collectors.toMap(
  Student::getId,
  Student::getName,
  (existing, newVal) -&gt; existing // giữ cái cũ
)</pre>
            <strong>Fix 2:</strong> Dùng <code>groupingBy</code> nếu muốn giữ tất cả duplicates.<br>
            <strong>Lưu ý thêm:</strong> toMap() không cho phép null value — sẽ throw NPE. Dùng <code>toUnmodifiableMap()</code> cho immutable map.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Khi nào nên dùng parallelStream()? Khi nào không nên?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Nên dùng khi:</strong> Tập dữ liệu lớn (100k+ elements), mỗi element xử lý nặng (CPU-bound), stateless và independent operations, ArrayList (splittable tốt).<br><br>
            <strong>Không nên dùng khi:</strong> List nhỏ (thread overhead &gt; benefit), operations có shared mutable state, I/O-bound operations, cần ordering (findFirst với parallel chậm hơn findAny), LinkedList (splittable kém).<br><br>
            Parallel stream dùng <code>ForkJoinPool.commonPool()</code> — shared với toàn bộ JVM. Nếu pool bị saturate bởi parallel stream của bạn, code khác bị ảnh hưởng. Benchmark trước khi dùng.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">ConcurrentHashMap vs Collections.synchronizedMap() — khác nhau thế nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <table style="width:100%;border-collapse:collapse;font-size:.84rem;">
              <tr style="background:#f0f4f8;"><th style="padding:5px;">Tiêu chí</th><th style="padding:5px;">ConcurrentHashMap</th><th style="padding:5px;">synchronizedMap</th></tr>
              <tr><td style="padding:5px;">Locking</td><td style="padding:5px;">Bucket-level (fine)</td><td style="padding:5px;">Whole map (coarse)</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:5px;">Throughput</td><td style="padding:5px;">High concurrency</td><td style="padding:5px;">One thread at a time</td></tr>
              <tr><td style="padding:5px;">Null key/val</td><td style="padding:5px;">Không cho phép</td><td style="padding:5px;">Cho phép (tùy map)</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:5px;">Iteration</td><td style="padding:5px;">Weakly consistent</td><td style="padding:5px;">Phải sync thủ công</td></tr>
              <tr><td style="padding:5px;">Atomic ops</td><td style="padding:5px;">computeIfAbsent, merge</td><td style="padding:5px;">Không có sẵn</td></tr>
            </table>
            Kết luận: Luôn ưu tiên ConcurrentHashMap. synchronizedMap chỉ dùng khi cần wrap một map existing.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">CopyOnWriteArrayList hoạt động thế nào? Trade-off của nó?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>Cơ chế:</strong> Mỗi write operation (add, set, remove) tạo một bản sao mới của underlying array. Readers luôn thấy snapshot tại thời điểm họ bắt đầu iterate — không bao giờ thấy half-written state. Không có CME.<br><br>
            <strong>Trade-offs:</strong><br>
            • Reads: O(1), lock-free, rất nhanh<br>
            • Writes: O(n) — copy toàn bộ array → tốn memory và CPU<br>
            • Iteration: Có thể stale (không reflect writes xảy ra sau khi bắt đầu iterate)<br><br>
            <strong>Use case lý tưởng:</strong> Danh sách event listeners, observer patterns — ít thay đổi nhưng rất nhiều reads và iterates.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#9B59B6;">Mock EN</span>
            <span class="qa-q">EN: "How would you group a list of orders by customer and calculate total value per customer?"</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            "I would use <code>Collectors.groupingBy</code> with a downstream <code>Collectors.summingDouble</code>:<br>
            <pre style="font-size:.82rem;background:#f5f5f5;padding:6px;border-radius:6px;">Map&lt;String, Double&gt; totalByCustomer = orders.stream()
  .collect(Collectors.groupingBy(
    Order::getCustomerId,
    Collectors.summingDouble(Order::getValue)
  ));</pre>
            This gives a Map where keys are customer IDs and values are total order amounts. If I also need the top customer, I'd chain a max() on the entry set, or use toMap with a merge function."
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#9B59B6;">Mock EN</span>
            <span class="qa-q">EN: "What is the difference between thread-safe and concurrent? Give examples."</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            "Thread-safe means an object can be safely used from multiple threads without data corruption. Concurrent typically implies a higher level of parallelism — multiple operations can proceed simultaneously without blocking each other.<br><br>
            For example, <code>synchronizedMap</code> is thread-safe but not concurrent — only one thread can access it at a time. <code>ConcurrentHashMap</code> is both — multiple threads can read and write to different buckets simultaneously, improving throughput significantly under high concurrency. In practice, I always prefer ConcurrentHashMap when multiple threads need to access a shared map."
          </div>
        </li>
      </ul>
    </details>

    <div class="bottom-row">
      <div class="bottom-card lc-card">
        <div class="bc-title">🟡 LeetCode</div>
        <div class="bc-name">#347 Top K Frequent Elements · #128 Longest Consecutive Sequence</div>
        <div class="bc-hint">Medium — HashMap + Stream</div>
        <div class="bc-body">#347: Dùng HashMap frequency + min-heap size K, hoặc bucket sort. #128: HashSet để O(1) lookup, chỉ bắt đầu count từ sequence start. Cả hai luyện HashMap mastery.</div>
      </div>
      <div class="bottom-card tool-card">
        <div class="bc-title">🤖 AI Tool</div>
        <div class="bc-name">Copilot — groupingBy Examples</div>
        <div class="bc-body">Prompt: <em>"Generate 5 different Java Stream groupingBy examples: by string length, by enum value, with counting, with averagingDouble, and with TreeMap as map supplier."</em> Học từ variety.</div>
      </div>
      <div class="bottom-card res-card">
        <div class="bc-title">📖 Resource</div>
        <div class="bc-name">Baeldung — Java Collectors</div>
        <div class="bc-body">Đọc: <strong>baeldung.com/java-8-collectors</strong> — tất cả các Collectors ít biết: teeing(), filtering(), flatMapping(). Đọc thêm: <strong>baeldung.com/java-concurrent-hashmap</strong>.</div>
      </div>
    </div>

  </div>
</div>

<!-- ===== DAY 7 ===== -->
<div class="day-section" id="w2-day-7">
  <div class="day-header" style="background:#8E44AD;">
    <div class="day-header-left">
      <span class="day-icon">🎯</span>
      <div>
        <div class="day-date">24/05/2025 — CN</div>
        <div class="day-topic">Spaced Review + Mini Project: Student Grade Manager</div>
      </div>
    </div>
    <div class="day-meta">
      <span class="mode-badge">REVIEW</span>
      <span class="day-hours">4h</span>
    </div>
  </div>
  <div class="day-body">

    <div class="en-block">
      <div class="en-header">
        <span class="en-flag">🇬🇧</span>
        <strong>English — Mock Interview Session</strong>
        <span class="en-badge-time">40 phút</span>
      </div>
      <div class="en-content">
        <p><strong>Bài tập:</strong> Trả lời to 8 câu hỏi phỏng vấn bằng tiếng Anh — mỗi câu 60–90 giây. Ghi âm bản thân để review sau.</p>
        <ol style="margin:.5rem 0 .5rem 1.2rem;line-height:2;">
          <li>Exception: "What is the difference between checked and unchecked exceptions?"</li>
          <li>Exception: "How does try-with-resources work and why is it better than finally?"</li>
          <li>Exception: "What are common anti-patterns in Java exception handling?"</li>
          <li>Collections: "Explain how HashMap works internally."</li>
          <li>Collections: "When would you use TreeMap over HashMap?"</li>
          <li>Collections: "What is ConcurrentHashMap and how is it different from synchronizedMap?"</li>
          <li>Stream: "What is the difference between map() and flatMap()?"</li>
          <li>Stream: "How does groupingBy() work? Give an example."</li>
        </ol>
        <p style="margin-top:.6rem;font-style:italic;color:#555;">Tiêu chí đánh giá: Không ấp úng quá 3 giây, dùng đúng thuật ngữ kỹ thuật, câu trả lời có cấu trúc rõ ràng.</p>
      </div>
    </div>

    <details class="accordion" open>
      <summary>📚 Review — Compact Summary: Exception / Collections / Streams</summary>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Exception — Quick Review</div>
          <div class="theory-body">
            <strong>Hierarchy:</strong> Throwable → Error / Exception → RuntimeException<br>
            <strong>Checked:</strong> Phải xử lý (IOException, SQLException)<br>
            <strong>Unchecked:</strong> Optional (NPE, IllegalArgument)<br>
            <strong>try-with-resources:</strong> AutoCloseable, suppressed exceptions<br>
            <strong>Multi-catch:</strong> <code>catch (A | B e)</code> — không có inheritance<br>
            <strong>Chaining:</strong> <code>new AppException("msg", cause)</code><br>
            <strong>Anti-patterns:</strong> Swallowing, catching too broad, lost cause
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Collections — Quick Review</div>
          <div class="theory-body">
            <strong>ArrayList:</strong> O(1) get, O(1)* add end, O(n) insert mid<br>
            <strong>LinkedList:</strong> O(n) get, O(1) add head/tail, Deque<br>
            <strong>HashMap:</strong> O(1) avg, bucket array, hashCode+equals, 0.75 LF<br>
            <strong>TreeMap:</strong> O(log n), Red-Black Tree, sorted, range queries<br>
            <strong>HashSet:</strong> HashMap wrapper, uniqueness via hashCode+equals<br>
            <strong>Concurrent:</strong> ConcurrentHashMap, CopyOnWriteArrayList<br>
            <strong>Iterator:</strong> fail-fast (modCount), iterator.remove() safe
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Streams — Quick Review</div>
          <div class="theory-body">
            <strong>Pipeline:</strong> source → intermediate (lazy) → terminal (eager)<br>
            <strong>Key ops:</strong> filter, map, flatMap, sorted, distinct, limit<br>
            <strong>Terminal:</strong> collect, count, reduce, findFirst, anyMatch<br>
            <strong>Collectors:</strong> toList, toMap, groupingBy, joining, counting<br>
            <strong>Lazy:</strong> short-circuit optimization<br>
            <strong>Single-use:</strong> Cannot reuse after terminal op<br>
            <strong>Parallel:</strong> parallelStream(), ForkJoinPool, use wisely
          </div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Mini Project Overview</div>
          <div class="theory-body">
            <strong>StudentGradeManager:</strong><br>
            • Student record: id, name, gpa, faculty<br>
            • Add/remove students<br>
            • Sort by GPA (Comparator)<br>
            • Filter by passing grade (≥ 2.0)<br>
            • Group by faculty (groupingBy)<br>
            • Average GPA per faculty (averagingDouble)<br>
            • Top 3 students (sorted + limit)<br>
            • Print formatted report<br>
            • Push to GitHub với README
          </div>
        </div>
      </div>
    </details>

    <details class="accordion">
      <summary>💻 Code — StudentGradeManager.java (Mini Project)</summary>
      <div class="code-wrap">
        <button class="copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)">Copy</button>
        <pre>import java.util.*;
import java.util.stream.*;

public class StudentGradeManager {

    record Student(String id, String name, double gpa, String faculty) {
        boolean isPassing() { return gpa &gt;= 2.0; }
        String gradeLevel() {
            if (gpa &gt;= 3.6) return "Xuất sắc";
            if (gpa &gt;= 3.2) return "Giỏi";
            if (gpa &gt;= 2.5) return "Khá";
            if (gpa &gt;= 2.0) return "Trung bình";
            return "Yếu";
        }
    }

    private final List&lt;Student&gt; students = new ArrayList&lt;&gt;();

    public void addStudent(Student s) {
        Objects.requireNonNull(s, "Student cannot be null");
        if (students.stream().anyMatch(existing -&gt; existing.id().equals(s.id()))) {
            throw new IllegalArgumentException("Student with ID " + s.id() + " already exists");
        }
        students.add(s);
    }

    public boolean removeStudent(String id) {
        return students.removeIf(s -&gt; s.id().equals(id));
    }

    public List&lt;Student&gt; getAllSortedByGPA() {
        return students.stream()
                .sorted(Comparator.comparingDouble(Student::gpa).reversed())
                .collect(Collectors.toList());
    }

    public List&lt;Student&gt; getPassingStudents() {
        return students.stream()
                .filter(Student::isPassing)
                .collect(Collectors.toList());
    }

    public Map&lt;String, List&lt;Student&gt;&gt; groupByFaculty() {
        return students.stream()
                .collect(Collectors.groupingBy(Student::faculty));
    }

    public Map&lt;String, Double&gt; averageGPAByFaculty() {
        return students.stream()
                .collect(Collectors.groupingBy(Student::faculty,
                        Collectors.averagingDouble(Student::gpa)));
    }

    public Map&lt;String, Long&gt; countByGradeLevel() {
        return students.stream()
                .collect(Collectors.groupingBy(Student::gradeLevel, Collectors.counting()));
    }

    public List&lt;Student&gt; getTopN(int n) {
        return students.stream()
                .sorted(Comparator.comparingDouble(Student::gpa).reversed())
                .limit(n)
                .collect(Collectors.toList());
    }

    public void printReport() {
        System.out.println("=".repeat(60));
        System.out.println("         STUDENT GRADE MANAGER — REPORT");
        System.out.println("=".repeat(60));
        System.out.printf("Total students: %d | Passing: %d%n",
                students.size(), getPassingStudents().size());
        System.out.printf("Overall average GPA: %.2f%n",
                students.stream().mapToDouble(Student::gpa).average().orElse(0));

        System.out.println("\n📊 GPA Distribution:");
        countByGradeLevel().entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .forEach(e -&gt; System.out.printf("  %-12s : %d students%n", e.getKey(), e.getValue()));

        System.out.println("\n🏫 Average GPA by Faculty:");
        averageGPAByFaculty().entrySet().stream()
                .sorted(Map.Entry.&lt;String, Double&gt;comparingByValue().reversed())
                .forEach(e -&gt; System.out.printf("  %-15s : %.2f%n", e.getKey(), e.getValue()));

        System.out.println("\n🏆 Top 3 Students:");
        getTopN(3).forEach(s -&gt; System.out.printf(
                "  [%s] %-12s | GPA: %.1f | %s | %s%n",
                s.id(), s.name(), s.gpa(), s.faculty(), s.gradeLevel()));

        System.out.println("\n⚠️  Failing Students:");
        students.stream()
                .filter(s -&gt; !s.isPassing())
                .forEach(s -&gt; System.out.printf("  [%s] %s — GPA %.1f%n", s.id(), s.name(), s.gpa()));

        System.out.println("=".repeat(60));
    }

    public static void main(String[] args) {
        StudentGradeManager mgr = new StudentGradeManager();

        // Add students
        mgr.addStudent(new Student("S001", "Nguyen An",     3.8, "Engineering"));
        mgr.addStudent(new Student("S002", "Tran Binh",     2.5, "Science"));
        mgr.addStudent(new Student("S003", "Le Chau",       3.5, "Engineering"));
        mgr.addStudent(new Student("S004", "Pham Duc",      1.8, "Business"));
        mgr.addStudent(new Student("S005", "Hoang Em",      3.9, "Engineering"));
        mgr.addStudent(new Student("S006", "Vu Fong",       2.8, "Science"));
        mgr.addStudent(new Student("S007", "Do Giang",      3.6, "Business"));
        mgr.addStudent(new Student("S008", "Bui Hai",       3.1, "Science"));
        mgr.addStudent(new Student("S009", "Ly Iris",       2.2, "Business"));
        mgr.addStudent(new Student("S010", "Ngo Jade",      3.3, "Engineering"));

        // Remove one
        mgr.removeStudent("S004");

        // Print full report
        mgr.printReport();

        // Test: custom exception on duplicate
        try {
            mgr.addStudent(new Student("S001", "Duplicate", 3.0, "X"));
        } catch (IllegalArgumentException e) {
            System.out.println("\n✓ Caught duplicate: " + e.getMessage());
        }
    }
}</pre>
      </div>
    </details>

    <details class="accordion">
      <summary>✏️ Bài tập thực hành</summary>
      <ol class="exercise-list">
        <li><strong>Complete StudentGradeManager:</strong> Thêm các methods: <code>findById(String id)</code> trả về Optional&lt;Student&gt;, <code>updateGPA(String id, double newGPA)</code> throw StudentNotFoundException nếu không tìm thấy, <code>getStatsByFaculty(String faculty)</code> trả về DoubleSummaryStatistics. Test đầy đủ.</li>
        <li><strong>Manual JUnit-style assertions:</strong> Viết class <code>GradeManagerTest</code> với 5 test methods thủ công (không dùng JUnit): testAddStudent_success(), testAddStudent_duplicate_throws(), testRemoveStudent(), testGetPassingStudents(), testGroupByFaculty(). Mỗi method dùng assert bằng if + throw AssertionError.</li>
        <li><strong>Push to GitHub:</strong> Init git repo, commit StudentGradeManager.java và test file. Viết README.md mô tả: project overview, features (dùng bullet list), how to run, ví dụ output. Push lên GitHub.</li>
      </ol>
    </details>

    <details class="accordion">
      <summary>❓ Q&amp;A — 10 câu hỏi tổng hợp cả tuần</summary>
      <ul class="qa-list">
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">finally block có chạy khi có return trong try không?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Có — finally LUÔN chạy, kể cả khi có return trong try hoặc catch. Ngoại lệ duy nhất: System.exit() hoặc JVM crash. Thứ tự: try body → catch (nếu exception) → finally → sau đó mới return. Nếu finally cũng có return, nó ghi đè return của try — anti-pattern nguy hiểm.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">ArrayList.get(i) có độ phức tạp O(?) ?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>O(1)</strong> — ArrayList backed bởi Object[]. get(i) truy cập trực tiếp qua index: địa chỉ = base_address + i × element_size. Không cần traverse. Khác với LinkedList.get(i) = O(n) phải traverse từ head.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60;">Dễ</span>
            <span class="qa-q">Stream.filter() và Stream.map() return gì?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Cả hai đều trả về <strong>Stream</strong> — đây là intermediate operations. filter() giữ lại elements thỏa Predicate, trả về Stream&lt;T&gt; cùng type. map() transform mỗi element qua Function, có thể thay đổi type: map(Function&lt;T, R&gt;) → Stream&lt;R&gt;. Cả hai đều lazy — không thực thi cho đến khi có terminal op.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">HashMap và Hashtable khác nhau thế nào?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <strong>HashMap</strong> (Java 2): Không synchronized, cho phép 1 null key và null values, hiệu năng cao hơn.<br><br>
            <strong>Hashtable</strong> (Java 1): Synchronized toàn bộ (mọi method), không cho phép null key/value, legacy class.<br><br>
            <strong>Không nên dùng Hashtable</strong> trong code mới. Nếu cần thread-safety: dùng <code>ConcurrentHashMap</code> (hiệu năng tốt hơn nhiều). Hashtable tồn tại chỉ để backward compatibility.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Optional là gì? Tại sao tốt hơn return null?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <code>Optional&lt;T&gt;</code> là wrapper có thể chứa giá trị hoặc không (empty). Giải quyết vấn đề null:<br><br>
            • Return null → caller có thể quên check → NPE<br>
            • Return Optional → caller PHẢI xử lý empty case rõ ràng<br><br>
            Các method: <code>isPresent()</code>, <code>get()</code>, <code>ifPresent(Consumer)</code>, <code>orElse(default)</code>, <code>orElseGet(Supplier)</code>, <code>orElseThrow()</code>, <code>map(Function)</code>, <code>filter(Predicate)</code>.<br><br>
            Best practice: Dùng Optional làm return type của method, KHÔNG dùng làm field hay parameter type.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12;">Trung</span>
            <span class="qa-q">Custom Exception nên extend RuntimeException hay Exception?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            Modern Java: Hầu hết prefer <strong>extend RuntimeException (unchecked)</strong>:<br>
            • Không bắt buộc caller phải try-catch hoặc khai báo throws<br>
            • Tránh checked exception pollution qua nhiều layers<br>
            • Spring và nhiều framework chỉ rollback transaction với unchecked<br><br>
            Dùng <strong>extend Exception (checked)</strong> khi: library/framework API mà caller cần biết có thể fail và phải handle, lỗi có thể phục hồi.<br><br>
            Rule: Business/domain exceptions → RuntimeException. Infrastructure/config exceptions có thể là checked.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">Giải thích Comparator.comparing() và thenComparing() chain?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <code>Comparator.comparing(keyExtractor)</code> tạo Comparator so sánh theo một field:<br>
            <pre style="font-size:.82rem;background:#f5f5f5;padding:6px;border-radius:6px;">// Sort by GPA desc, then by name asc
Comparator&lt;Student&gt; comp = Comparator
    .comparingDouble(Student::gpa).reversed()
    .thenComparing(Student::name);

students.sort(comp);
// Hoặc trong Stream:
students.stream().sorted(comp).collect(toList());</pre>
            <code>thenComparing()</code> là tie-breaker — chỉ dùng khi primary key bằng nhau. Có thể chain nhiều cấp. Immutable — mỗi method trả về Comparator mới.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C;">Khó</span>
            <span class="qa-q">Collectors.teeing() là gì và khi nào dùng?</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            <code>Collectors.teeing(c1, c2, merger)</code> (Java 12+) — thu thập stream vào 2 collectors đồng thời, sau đó merge kết quả:<br>
            <pre style="font-size:.82rem;background:#f5f5f5;padding:6px;border-radius:6px;">// Tính cả min và max trong 1 pass
Map.Entry&lt;Optional&lt;Student&gt;, Optional&lt;Student&gt;&gt; minMax =
  students.stream().collect(
    Collectors.teeing(
      Collectors.minBy(Comparator.comparingDouble(Student::gpa)),
      Collectors.maxBy(Comparator.comparingDouble(Student::gpa)),
      Map::entry
    ));</pre>
            Hữu ích khi cần 2 kết quả khác nhau mà không muốn iterate 2 lần. Trước Java 12 phải dùng 2 stream riêng hoặc custom Collector.
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#9B59B6;">Mock EN</span>
            <span class="qa-q">EN: "Walk me through the StudentGradeManager design. What patterns did you use?"</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            "StudentGradeManager is a simple domain service that manages a collection of Student records. I used Java records for the Student type — they provide immutability, auto-generated equals/hashCode, and compact syntax. The manager class encapsulates an ArrayList for ordered storage.<br><br>
            For querying, I leveraged the Stream API throughout: filter for passing students, sorted with a Comparator for GPA ranking, groupingBy with a downstream averagingDouble for faculty statistics, and limit for top-N queries. For error handling, I used IllegalArgumentException for duplicate IDs and threw custom StudentNotFoundException from update methods.<br><br>
            The design follows single responsibility — the manager handles only CRUD and queries, while the Student record handles its own domain logic like isPassing() and gradeLevel()."
          </div>
        </li>
        <li class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#9B59B6;">Mock EN</span>
            <span class="qa-q">EN: "What would you change about the StudentGradeManager if it needed to support 10 million students?"</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            "For 10 million students, I would make several changes. First, replace the in-memory ArrayList with a proper database — likely with indexed columns on faculty and GPA for efficient grouping and sorting queries. Second, use pagination for list queries instead of loading all students at once — JPA's Pageable or JDBC offset/limit. Third, move expensive aggregations like faculty statistics to the database layer using GROUP BY queries rather than in-memory streams.<br><br>
            If some in-memory processing is still needed, I'd use parallel streams for CPU-bound operations, and consider batched loading. I'd also add caching (Redis or Caffeine) for frequently-accessed aggregations like top students. Finally, I'd make the service stateless so it can scale horizontally behind a load balancer."
          </div>
        </li>
      </ul>
    </details>

    <div class="bottom-row">
      <div class="bottom-card lc-card">
        <div class="bc-title">🟡 LeetCode</div>
        <div class="bc-name">#56 Merge Intervals (Review)</div>
        <div class="bc-hint">Medium — Sort + Greedy</div>
        <div class="bc-body">Sort intervals by start. Merge overlapping bằng cách compare current start với last merged end. Dùng ArrayList để build kết quả. Ôn lại sort với Comparator và ArrayList operations.</div>
      </div>
      <div class="bottom-card tool-card">
        <div class="bc-title">🤖 AI Tool</div>
        <div class="bc-name">Copilot — Generate Tests</div>
        <div class="bc-body">Prompt: <em>"Generate JUnit 5 test cases for StudentGradeManager covering: add duplicate, remove non-existent, getPassingStudents with edge cases, groupByFaculty empty list, getTopN when N > size."</em></div>
      </div>
      <div class="bottom-card res-card">
        <div class="bc-title">📖 Resource</div>
        <div class="bc-name">Ôn tập tổng hợp Tuần 2</div>
        <div class="bc-body">Review tất cả Baeldung links: java-exceptions, java-arraylist-linkedlist, java-hashmap, java-8-streams, java-8-collectors, java-concurrent-hashmap. Đọc lại Q&A các ngày mà bạn chưa trả lời được thành thạo.</div>
      </div>
    </div>

  </div>
</div>

<!-- ===== SUMMARY ===== -->
<section class="day-section" id="w2-summary" style="background:#fff;border-radius:14px;padding:28px 32px;margin-bottom:28px;box-shadow:0 2px 12px rgba(0,0,0,.08);">
  <h2 style="margin:0 0 20px;font-size:1.25rem;color:#2c3e50;">📝 Tổng kết Tuần 2 — Interview Question Bank + Checklist</h2>

  <!-- Interview Q&A Bank -->
  <div class="summary-cols">

    <div>
      <h3 class="sub-h3">🔴 Exception Handling</h3>
      <div class="sq-group">
        <div class="sq-group-title">3 câu hỏi phỏng vấn EN</div>
        <div class="sq-item">
          <div class="sq-q">Q: What is the difference between checked and unchecked exceptions?</div>
          <div class="sq-a">A: Checked exceptions (e.g. IOException) are verified at compile time — the compiler forces you to either catch them or declare them with throws. Unchecked exceptions (extending RuntimeException, e.g. NullPointerException) are not checked at compile time. Use checked when the caller can reasonably recover; use unchecked for programming errors or when propagating through many layers would be noisy.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: How does try-with-resources work and what problem does it solve?</div>
          <div class="sq-a">A: try-with-resources automatically calls close() on any resource that implements AutoCloseable after the try block completes, whether normally or exceptionally. It solves the resource leak problem that occurs when developers forget to close resources in finally blocks. It also properly handles suppressed exceptions — if both the body and close() throw, the close() exception is suppressed rather than swallowing the primary one.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: How do you design a custom exception hierarchy?</div>
          <div class="sq-a">A: I start with a base AppException extending RuntimeException, with an errorCode field and constructors for (message) and (message, cause). Then I create domain-specific subclasses like ValidationException, NotFoundException, and AuthorizationException. Each carries relevant context. At the REST layer, a global @ExceptionHandler maps exception types to HTTP status codes. This way business logic throws meaningful exceptions and the HTTP translation is centralized.</div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="sub-h3">🟠 Collections</h3>
      <div class="sq-group">
        <div class="sq-group-title">4 câu hỏi phỏng vấn EN</div>
        <div class="sq-item">
          <div class="sq-q">Q: How does HashMap work internally?</div>
          <div class="sq-a">A: HashMap uses a bucket array (default 16 slots). On put(key, value), it computes hashCode(), mixes the bits, then indexes into the array. Collisions are handled by a linked list per bucket; in Java 8+, buckets with more than 8 entries convert to a Red-Black Tree for O(log n) worst-case. The map rehashes when size exceeds capacity × loadFactor (default 0.75), doubling the table. get() follows the same index computation then searches the bucket using equals().</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: When would you choose LinkedList over ArrayList?</div>
          <div class="sq-a">A: In practice, almost never — ArrayList is almost always faster due to better cache locality. I would choose LinkedList when I need Deque semantics (efficient addFirst/pollFirst) without the overhead of ArrayDeque's fixed-capacity resizing, or when I need O(1) insertions at the head of a large list that I've profiled as a bottleneck. For random access or iteration, ArrayList wins.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: What is ConcurrentModificationException and how do you avoid it?</div>
          <div class="sq-a">A: CME is thrown when you modify a collection while iterating over it with a fail-fast iterator. It works via a modCount counter — if it changes during iteration, the iterator throws. To avoid it: use iterator.remove() for safe removal during iteration, use list.removeIf() (Java 8+), collect items to remove then call removeAll(), or use a concurrent collection like CopyOnWriteArrayList which iterates over a snapshot.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: TreeMap vs HashMap — which to choose?</div>
          <div class="sq-a">A: HashMap gives O(1) average for get/put, no ordering guarantee. TreeMap gives O(log n) but keeps keys sorted (natural order or Comparator) and supports range queries — firstKey(), lastKey(), subMap(), floorKey(), ceilingKey(). Choose HashMap for pure lookup performance. Choose TreeMap when you need sorted iteration or range-based queries. LinkedHashMap is a middle ground — O(1) operations with insertion-order iteration.</div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="sub-h3">🟢 Stream API</h3>
      <div class="sq-group">
        <div class="sq-group-title">3 câu hỏi phỏng vấn EN</div>
        <div class="sq-item">
          <div class="sq-q">Q: What is the difference between map() and flatMap()?</div>
          <div class="sq-a">A: map() applies a function to each element and wraps the result — if the function returns a collection, you get a Stream of collections. flatMap() applies a function that returns a Stream per element, then flattens all those streams into one. Use flatMap when your mapper produces a one-to-many relationship, like extracting all words from a list of sentences, or all items from a list of orders.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: How does groupingBy() work? Give a practical example.</div>
          <div class="sq-a">A: Collectors.groupingBy(classifier) partitions stream elements into a Map where keys are the classifier's return values and values are Lists of matching elements. With a downstream collector you can aggregate within each group — for example groupingBy(Student::faculty, averagingDouble(Student::gpa)) produces a Map&lt;String, Double&gt; of average GPA per faculty. You can also supply a specific Map implementation as the second argument to get a TreeMap for sorted keys.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: When should you use parallelStream()? What are the risks?</div>
          <div class="sq-a">A: Use parallelStream() for large datasets (100k+ elements) with CPU-intensive, stateless, independent per-element processing — for example, computing a cryptographic hash for each record in a batch. Risks: it uses ForkJoinPool.commonPool() shared across the JVM, so heavy parallel stream use starves other tasks. It also adds overhead that makes it slower for small lists or I/O-bound work. Always benchmark before switching; incorrect use of shared mutable state in parallel streams causes race conditions.</div>
        </div>
      </div>
    </div>

  </div>

  <!-- Checklist -->
  <h3 class="sub-h3" style="margin-top:28px;">✅ Checklist hoàn thành Tuần 2</h3>
  <div class="progress-wrap-outer">
    <div class="progress-wrap">
      <div class="progress-label">Hoàn thành: <strong class="progress-text">0/10</strong></div>
      <div class="progress-bar-bg"><div class="progress-bar"></div></div>
    </div>
  </div>

  <ul class="checklist" data-week="2">
    <li class="check-item">
      <label><input type="checkbox"> Giải thích được Exception hierarchy: Throwable → Error / Exception → Checked / Unchecked</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> Tạo được Custom Exception extend RuntimeException với errorCode và chaining constructor</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> Dùng try-with-resources với AutoCloseable resource, hiểu suppressed exceptions</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> So sánh ArrayList vs LinkedList với Big-O table, biết khi nào dùng cái nào</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> Giải thích HashMap: hash → bucket → collision → load factor → rehashing</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> Dùng Stream filter/map/collect fluently, hiểu lazy evaluation</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> groupingBy, Collectors.counting(), flatMap, Collectors.joining() thành thạo</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> LeetCode AC: #1 Two Sum, #49 Group Anagrams, #347 Top K Frequent, #206 Reverse LL — 4 bài</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> StudentGradeManager hoàn chỉnh với đủ features, đã push lên GitHub với README</label>
    </li>
    <li class="check-item">
      <label><input type="checkbox"> Mock interview 5 câu EN về Collections không ấp úng quá 3 giây mỗi câu</label>
    </li>
  </ul>

  <!-- Golden Rule -->
  <div class="golden-rule">
    💡 <strong>Golden Rule Tuần 2:</strong> Exception = signal, không phải flow control. Collection = chọn đúng cấu trúc cho đúng use case. Stream = nói "muốn gì", không phải "làm thế nào". Ba kỹ năng này xuất hiện trong mọi phỏng vấn Java — nắm chắc = tự tin.
  </div>

</section>

