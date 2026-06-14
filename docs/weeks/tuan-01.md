<div class="week-divider" id="week-1-start">📗 Tuần 1 · Java Core: OOP + Generics + Collections · 11/05–17/05/2025</div>
  <section id="overview">
    <h2>📅 Lịch Học Tuần 1 — Tổng Quan 7 Ngày</h2>
    <table class="overview-table">
      <thead>
        <tr>
          <th>Ngày</th><th>Thứ</th><th>Chế độ</th><th>Thời gian</th><th>Chủ đề</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>11/05</td><td>Thứ 2</td><td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td><td>1.5h</td><td>OOP 4 tính chất: Encapsulation, Inheritance, Polymorphism, Abstraction</td></tr>
        <tr><td>12/05</td><td>Thứ 3</td><td><span class="mode-dot" style="background:#27AE60"></span>FULL</td><td>2.5h</td><td>Interface vs Abstract. Default/Static methods Java 8. Functional Interface</td></tr>
        <tr><td>13/05</td><td>Thứ 4</td><td><span class="mode-dot" style="background:#27AE60"></span>FULL</td><td>2.5h</td><td>equals/hashCode contract. Comparable vs Comparator. Immutability</td></tr>
        <tr><td>14/05</td><td>Thứ 5</td><td><span class="mode-dot" style="background:#27AE60"></span>FULL</td><td>2.5h</td><td>Generics: type param, wildcard, bounded type, PECS. Type erasure</td></tr>
        <tr><td>15/05</td><td>Thứ 6</td><td><span class="mode-dot" style="background:#E67E22"></span>LIGHT</td><td>1.5h</td><td>Exception: checked/unchecked, try-with-resources, custom exception</td></tr>
        <tr><td>16/05</td><td>Thứ 7</td><td><span class="mode-dot" style="background:#C0392B"></span>WEEKEND</td><td>4h</td><td>Collections P1: ArrayList, LinkedList, HashSet, TreeSet, Iterator, Big-O</td></tr>
        <tr><td>17/05</td><td>CN</td><td><span class="mode-dot" style="background:#8E44AD"></span>REVIEW</td><td>4h</td><td>Spaced Review + Mini Project: Quản lý sinh viên hoàn chỉnh</td></tr>
      </tbody>
    </table>
  </section>

  
  <section class="day-section" id="day-1">
    <div class="day-header" style="background:#E67E22">
      <div class="day-header-left">
        <span class="day-icon">⚡</span>
        <div>
          <div class="day-date">11/05 — Thứ 2</div>
          <div class="day-topic">OOP – 4 Tính Chất: Encapsulation, Inheritance, Polymorphism, Abstraction</div>
        </div>
      </div>
      <div class="day-meta">
        <span class="mode-badge">LIGHT</span>
        <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
      </div>
    </div>

    <div class="day-body">
      <!-- TIẾNG ANH LUÔN ĐẦU TIÊN -->
      <div class="en-block">
        <div class="en-header">
          <span class="en-flag">🌏</span>
          <strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong>
          <span class="en-badge-time">Vocalmax + YouTube IT EN · 15 phút</span>
        </div>
        <div class="en-content">Học 10 từ IT mới trên <strong>Vocalmax</strong>: <em>encapsulation, inheritance, polymorphism, abstraction, interface, override, access modifier, getter, setter, instance</em>.<br>Nghe 1 video ngắn YouTube về Java OOP trong tiếng Anh (5 phút). Không cần hiểu 100%, chỉ cần quen tai với từ kỹ thuật.</div>
      </div>

      <!-- LÝ THUYẾT -->
      <details class="accordion" open>
        <summary>📖 Lý Thuyết Cốt Lõi</summary>
        <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Encapsulation (Đóng gói)</div>
          <div class="theory-body">Ẩn dữ liệu nội bộ bằng <code>private</code> fields + public getter/setter. Mục đích: kiểm soát truy cập, dễ validate.<br><strong>Ví dụ thực tế:</strong> <code>class BankAccount { private double balance; public double getBalance() {...} }</code></div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Inheritance (Kế thừa)</div>
          <div class="theory-body">Lớp con (subclass) kế thừa thuộc tính + method từ lớp cha. Keyword: <code>extends</code>. Java chỉ hỗ trợ <strong>single inheritance</strong>.<br><strong>Ví dụ:</strong> <code>class Dog extends Animal { ... }</code></div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Polymorphism (Đa hình)</div>
          <div class="theory-body"><strong>Overriding:</strong> lớp con ghi đè method lớp cha (<code>@Override</code>).<br><strong>Overloading:</strong> nhiều method cùng tên, khác tham số.<br><strong>Ví dụ:</strong> <code>Animal a = new Dog(); a.makeSound();</code> → gọi method của Dog</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Abstraction (Trừu tượng)</div>
          <div class="theory-body">Ẩn chi tiết cài đặt, chỉ lộ interface cần thiết. Dùng <code>abstract class</code> hoặc <code>interface</code>.<br><strong>Ví dụ:</strong> <code>interface Shape { double area(); }</code> → Circle, Rectangle tự implement</div>
        </div></div>
      </details>

      <!-- CODE MẪU -->
      <details class="accordion">
        <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
        <div class="code-wrap">
          <button class="copy-btn">Copy</button>
          <pre><code class="java">// Polymorphism demo
abstract class Animal {
    abstract void makeSound();
    void breathe() { System.out.println("Breathing..."); }
}
class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Woof!"); }
}
class Cat extends Animal {
    @Override
    void makeSound() { System.out.println("Meow!"); }
}
// Main
Animal[] animals = { new Dog(), new Cat() };
for (Animal a : animals) {
    a.makeSound(); // Woof! sau đó Meow!
}</code></pre>
        </div>
      </details>

      <!-- BÀI TẬP -->
      <details class="accordion">
        <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
        <ol class="exercise-list"><li>Tạo class <code>Animal</code> (abstract) với method <code>makeSound()</code>. Tạo <code>Dog</code> và <code>Cat</code> extends Animal.</li><li>Tạo class <code>BankAccount</code> với <code>private balance</code>. Viết <code>deposit()</code>, <code>withdraw()</code> (có validation), <code>getBalance()</code>.</li><li>Tạo interface <code>Drawable</code> với method <code>draw()</code>. Implement cho <code>Circle</code> và <code>Rectangle</code>.</li><li>Demo Polymorphism: <code>Animal[] arr = {new Dog(), new Cat()};</code> loop gọi <code>makeSound()</code>. Quan sát runtime binding.</li></ol>
      </details>

      <!-- PHỎNG VẤN -->
      <details class="accordion">
        <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
        <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 1</span>
            <span class="qa-q">OOP là gì? Kể tên 4 tính chất và giải thích ngắn gọn từng tính chất.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">OOP (Object-Oriented Programming) là lập trình hướng đối tượng — tổ chức code thành các object có dữ liệu và hành vi.<br><br><strong>4 tính chất:</strong><br>① <strong>Encapsulation:</strong> ẩn dữ liệu nội bộ bằng <code>private</code>, chỉ expose qua getter/setter.<br>② <strong>Inheritance:</strong> lớp con kế thừa field + method từ lớp cha bằng <code>extends</code>.<br>③ <strong>Polymorphism:</strong> cùng method, hành vi khác nhau tùy object (override/overload).<br>④ <strong>Abstraction:</strong> ẩn chi tiết cài đặt, chỉ lộ interface cần thiết qua <code>abstract class</code> hoặc <code>interface</code>.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 2</span>
            <span class="qa-q">Encapsulation có lợi gì trong thực tế?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">① <strong>Kiểm soát validation:</strong> <code>BankAccount.withdraw()</code> có thể check balance trước khi cho rút.<br>② <strong>Dễ thay đổi implementation</strong> bên trong mà không ảnh hưởng code bên ngoài (chỉ cần giữ public API).<br>③ <strong>Tránh dữ liệu bị sửa trực tiếp</strong> từ bên ngoài gây lỗi không mong muốn.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12">Trung 3</span>
            <span class="qa-q">Sự khác nhau giữa @Override (Overriding) và Overloading?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Overriding:</strong> lớp con tái định nghĩa method của lớp cha với <strong>cùng signature</strong>. Quyết định lúc <em>runtime</em> (dynamic dispatch).<br><strong>Overloading:</strong> cùng tên method, <strong>khác tham số</strong> (số lượng/kiểu). Quyết định lúc <em>compile time</em>.<br><br>Ví dụ:<br>• <code>print(String s)</code> vs <code>print(int n)</code> → overloading<br>• <code>Dog.makeSound()</code> ghi đè <code>Animal.makeSound()</code> → overriding</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 4</span>
            <span class="qa-q">Constructor có được kế thừa không? <code>super()</code> hoạt động thế nào trong Inheritance?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Constructor không được kế thừa.</strong> Mỗi class có constructor riêng.<br><br><code>super()</code> gọi constructor của lớp cha. Nếu không gọi tường minh, Java tự chèn <code>super()</code> không tham số vào dòng đầu constructor lớp con.<br><br><strong>Ví dụ:</strong><br><code>class Animal { Animal(String name) {...} }</code><br><code>class Dog extends Animal { Dog(String name) { super(name); ... } }</code><br><br>⚠️ Nếu lớp cha không có no-arg constructor mà lớp con không gọi <code>super(args)</code> → compile error.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C">Khó 5</span>
            <span class="qa-q">Tại sao Java không hỗ trợ multiple inheritance với class nhưng lại hỗ trợ với interface?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Diamond Problem</strong> là lý do chính. Nếu class B và C đều extend A và override <code>greet()</code>, thì class D extends B, C không biết dùng method nào.<br><br>Interface giải quyết được vì:<br>① Trước Java 8: interface chỉ có abstract methods, không có implementation → không conflict.<br>② Từ Java 8: có default methods, nhưng nếu conflict, class <strong>bắt buộc</strong> phải <code>@Override</code> để resolve.<br><br><strong>Ví dụ thực tế Spring:</strong> <code>class ArrayList implements List, Serializable, Cloneable, RandomAccess</code> — implement 4 interface cùng lúc OK.</div>
        </div></div>
      </details>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="bottom-card lc-card">
          <div class="bc-title">🧩 LeetCode</div>
          <div class="bc-name">Two Sum (LC #1) – Easy</div>
          <div class="bc-hint">Dùng HashMap lưu <code>{value: index}</code>. Với mỗi phần tử kiểm tra <code>complement = target - nums[i]</code> đã có trong map chưa. O(n) time, O(n) space.</div>
        </div>
        <div class="bottom-card tool-card">
          <div class="bc-title">🤖 AI Tools</div>
          <div class="bc-body">Cài <strong>Cursor IDE</strong> + <strong>GitHub Copilot</strong>. Thử prompt: <em>"Generate a Java class with encapsulation for a BankAccount"</em></div>
        </div>
        <div class="bottom-card res-card">
          <div class="bc-title">📚 Tài Nguyên</div>
          <div class="bc-body">Baeldung: OOP in Java · NeetCode: Two Sum</div>
        </div>
      </div>
    </div>
  </section>
  <section class="day-section" id="day-2">
    <div class="day-header" style="background:#27AE60">
      <div class="day-header-left">
        <span class="day-icon">💪</span>
        <div>
          <div class="day-date">12/05 — Thứ 3</div>
          <div class="day-topic">Interface vs Abstract Class · Default/Static Methods Java 8 · Functional Interface</div>
        </div>
      </div>
      <div class="day-meta">
        <span class="mode-badge">FULL</span>
        <span class="day-hours">⏱ 30 phút sáng + 2h tối (Pomo 1: Lý thuyết · Pomo 2: Code)</span>
      </div>
    </div>

    <div class="day-body">
      <!-- TIẾNG ANH LUÔN ĐẦU TIÊN -->
      <div class="en-block">
        <div class="en-header">
          <span class="en-flag">🌏</span>
          <strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong>
          <span class="en-badge-time">Parroto Shadowing + Vocalmax · 20 phút</span>
        </div>
        <div class="en-content"><strong>Parroto Shadowing 10 phút:</strong> Chọn đoạn ngắn chủ đề 'Daily Conversations', tốc độ 0.8x. Nhại lại từng câu, AI chấm phát âm.<br><strong>Vocalmax 10 phút:</strong> Phát âm các từ <em>interface, abstract, inheritance, override, implement</em>. Luyện câu: <em>"An interface defines a contract — it declares method signatures."</em></div>
      </div>

      <!-- LÝ THUYẾT -->
      <details class="accordion" open>
        <summary>📖 Lý Thuyết Cốt Lõi</summary>
        <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Interface</div>
          <div class="theory-body">Chỉ chứa method signatures (Java 7). Java 8+: có <code>default</code> và <code>static</code> method.<br>Một class có thể implement <strong>nhiều</strong> interface.<br>Dùng khi: muốn định nghĩa <em>behavior</em> cho các class không liên quan.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Abstract Class</div>
          <div class="theory-body">Có thể có cả abstract method và concrete method. Có constructor, fields, state.<br>Một class chỉ extend được <strong>1</strong> abstract class.<br>Dùng khi: muốn chia sẻ code chung giữa các lớp con có quan hệ IS-A.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Default Method (Java 8)</div>
          <div class="theory-body">Interface có thể có method với body, dùng keyword <code>default</code>.<br>Mục đích: thêm method mới vào interface mà <strong>không break</strong> các class đã implement.<br>Ví dụ: <code>List.sort()</code> là default method thêm vào Java 8.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Functional Interface</div>
          <div class="theory-body">Interface có đúng <strong>1 abstract method</strong>. Annotation <code>@FunctionalInterface</code>.<br>Dùng với Lambda Expression.<br>Built-in: <code>Runnable, Comparator, Predicate&lt;T&gt;, Function&lt;T,R&gt;, Consumer&lt;T&gt;</code></div>
        </div></div>
      </details>

      <!-- CODE MẪU -->
      <details class="accordion">
        <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
        <div class="code-wrap">
          <button class="copy-btn">Copy</button>
          <pre><code class="java">// Interface với default method
interface Printable {
    void print();                              // abstract
    default void printTwice() { print(); print(); }  // default
    static void info() { System.out.println("v2"); } // static
}

// Functional Interface + Lambda
@FunctionalInterface
interface Transformer&lt;T&gt; {
    T transform(T input);
}

// Sử dụng Lambda
Transformer&lt;String&gt; upper = s -&gt; s.toUpperCase();
System.out.println(upper.transform("hello")); // HELLO

// Comparator với Lambda (Functional Interface có sẵn)
List&lt;String&gt; names = Arrays.asList("Bình", "An", "Dung");
names.sort((a, b) -&gt; a.compareTo(b)); // sort alphabetically</code></pre>
        </div>
      </details>

      <!-- BÀI TẬP -->
      <details class="accordion">
        <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
        <ol class="exercise-list"><li>Tạo interface <code>Flyable</code> với method <code>fly()</code>. Tạo <code>Bird</code> và <code>Airplane</code> implement Flyable.</li><li>Tạo abstract class <code>Vehicle</code> với abstract method <code>start()</code> và concrete method <code>stop()</code>.</li><li>Viết <code>Comparator&lt;Student&gt;</code> bằng Lambda: sort by GPA descending.</li><li>Tạo <code>@FunctionalInterface Validator&lt;T&gt;</code> với method <code>boolean validate(T t)</code>. Dùng Lambda để validate email.</li></ol>
      </details>

      <!-- PHỎNG VẤN -->
      <details class="accordion">
        <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (6 câu)</summary>
        <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 1</span>
            <span class="qa-q">Interface là gì? Tất cả method trong interface có bắt buộc là abstract không?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Interface là bản hợp đồng (contract) định nghĩa <em>class có thể làm gì</em> — chỉ có method signatures, không có implementation.<br><br><strong>Java 7 trở về trước:</strong> tất cả method đều là abstract (ngầm định).<br><strong>Java 8+:</strong> cho phép thêm <code>default</code> method (có body) và <code>static</code> method.<br><strong>Java 9+:</strong> cho phép thêm <code>private</code> method để tái dùng code trong default methods.<br><br>→ Không còn bắt buộc 100% abstract, nhưng các abstract methods vẫn là phần chính.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 2</span>
            <span class="qa-q">Functional Interface là gì và tại sao quan trọng trong Java 8?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Là interface có đúng 1 abstract method. <code>@FunctionalInterface</code> giúp compiler kiểm tra.<br><br>Quan trọng vì cho phép dùng <strong>Lambda Expression</strong> — code ngắn hơn, readable hơn:<br>Trước Java 8: <code>list.sort(new Comparator&lt;String&gt;() { public int compare(String a, String b) { return a.compareTo(b); } });</code><br>Java 8+: <code>list.sort((a, b) -&gt; a.compareTo(b));</code></div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12">Trung 3</span>
            <span class="qa-q">Liệt kê 3 điểm khác biệt chính giữa Interface và Abstract Class.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><table style="width:100%;font-size:.82rem;border-collapse:collapse"><tr><th style="text-align:left;padding:.3rem .5rem;border-bottom:1px solid #ddd">Tiêu chí</th><th style="padding:.3rem .5rem;border-bottom:1px solid #ddd">Interface</th><th style="padding:.3rem .5rem;border-bottom:1px solid #ddd">Abstract Class</th></tr><tr><td style="padding:.3rem .5rem">Kế thừa</td><td style="padding:.3rem .5rem">Implement nhiều</td><td style="padding:.3rem .5rem">Extend 1</td></tr><tr><td style="padding:.3rem .5rem">Constructor</td><td style="padding:.3rem .5rem">Không có</td><td style="padding:.3rem .5rem">Có</td></tr><tr><td style="padding:.3rem .5rem">Fields</td><td style="padding:.3rem .5rem">Chỉ constants</td><td style="padding:.3rem .5rem">Bất kỳ field</td></tr><tr><td style="padding:.3rem .5rem">Mục đích</td><td style="padding:.3rem .5rem">CAN-DO (capability)</td><td style="padding:.3rem .5rem">IS-A (relationship)</td></tr></table></div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 4</span>
            <span class="qa-q">Default method trong Java 8 giải quyết vấn đề gì? Nhược điểm?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Giải quyết:</strong> backward compatibility — thêm method vào interface mà không cần sửa tất cả class đã implement. Java 8 thêm <code>forEach()</code> vào Iterable, <code>sort()</code> vào List mà không break code cũ.<br><br><strong>Nhược điểm — Diamond Problem với default methods:</strong><br>Nếu 2 interface có cùng default method, class phải <code>@Override</code> để resolve:<br><code>interface A { default void greet() {...} }</code><br><code>interface B { default void greet() {...} }</code><br><code>class C implements A, B { @Override void greet() { A.super.greet(); } }</code></div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 5</span>
            <span class="qa-q">Khi nào dùng Interface, khi nào dùng Abstract Class? Cho ví dụ thực tế.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Dùng Interface khi:</strong><br>• Cần định nghĩa "CÓ THỂ LÀM GÌ" (capability): Serializable, Comparable, Runnable<br>• Các class không liên quan cần chung một behavior<br>• Cần multiple type: <code>ArrayList implements List, Serializable, Cloneable, RandomAccess</code><br><br><strong>Dùng Abstract Class khi:</strong><br>• Cần chia sẻ CODE CHUNG: <code>class AbstractDAO</code> có template method<br>• Có common state (fields): <code>class AbstractAnimal { String name; int age; }</code><br>• IS-A relationship rõ ràng: Dog IS-A Animal<br><br><strong>Ví dụ Spring:</strong> JpaRepository là interface, AbstractJpaQuery là abstract class.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C">Khó 6</span>
            <span class="qa-q">Nếu 2 interface cùng có default method trùng tên, class implement phải làm gì? Giải thích quy tắc ưu tiên.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Class bắt buộc phải @Override</strong> để resolve conflict, ngược lại sẽ compile error.<br><br><strong>Quy tắc ưu tiên (thứ tự giảm dần):</strong><br>① Class/instance methods wins over interface defaults.<br>② Interface gần nhất trong cây kế thừa được ưu tiên.<br>③ Nếu vẫn conflict → bắt buộc override + chỉ định rõ dùng method nào:<br><br><code>class C implements A, B {</code><br><code>&nbsp;&nbsp;@Override public void greet() { A.super.greet(); } // chọn A</code><br><code>}</code><br><br><strong>Ví dụ thực tế:</strong> Hibernate implements nhiều interface JPA — phải resolve một số default method conflicts trong phiên bản mới.</div>
        </div></div>
      </details>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="bottom-card lc-card">
          <div class="bc-title">🧩 LeetCode</div>
          <div class="bc-name">Valid Parentheses (LC #20) – Easy</div>
          <div class="bc-hint">Dùng Stack. Push <code>'({['</code>, pop khi gặp <code>')]}'</code>. Cuối cùng stack phải rỗng.</div>
        </div>
        <div class="bottom-card tool-card">
          <div class="bc-title">🤖 AI Tools</div>
          <div class="bc-body">AI prompt: <em>"Explain Java Interface vs Abstract Class with examples"</em>. So sánh kết quả AI với hiểu biết của mình.</div>
        </div>
        <div class="bottom-card res-card">
          <div class="bc-title">📚 Tài Nguyên</div>
          <div class="bc-body">Baeldung: Interface vs Abstract · NeetCode: Valid Parentheses</div>
        </div>
      </div>
    </div>
  </section>
  <section class="day-section" id="day-3">
    <div class="day-header" style="background:#27AE60">
      <div class="day-header-left">
        <span class="day-icon">💪</span>
        <div>
          <div class="day-date">13/05 — Thứ 4</div>
          <div class="day-topic">equals/hashCode Contract · Comparable vs Comparator · Immutability</div>
        </div>
      </div>
      <div class="day-meta">
        <span class="mode-badge">FULL</span>
        <span class="day-hours">⏱ 30 phút sáng + 2h tối (Pomo 1: Lý thuyết · Pomo 2: Code)</span>
      </div>
    </div>

    <div class="day-body">
      <!-- TIẾNG ANH LUÔN ĐẦU TIÊN -->
      <div class="en-block">
        <div class="en-header">
          <span class="en-flag">🌏</span>
          <strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong>
          <span class="en-badge-time">Parroto Shadowing + Vocalmax · 20 phút</span>
        </div>
        <div class="en-content"><strong>Parroto Shadowing 10 phút</strong> topic 'Java Brains EN tutorial'. Focus phát âm rõ ràng.<br><strong>Vocalmax 10 phút:</strong> Học từ <em>equals, hash, contract, immutable, comparable, comparator, override</em>.<br>Luyện câu: <em>"This method overrides equals to compare objects by their content, not reference."</em></div>
      </div>

      <!-- LÝ THUYẾT -->
      <details class="accordion" open>
        <summary>📖 Lý Thuyết Cốt Lõi</summary>
        <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">equals() và hashCode() Contract</div>
          <div class="theory-body">3 quy tắc bắt buộc:<br>① Nếu <code>a.equals(b) == true</code> thì <code>a.hashCode() == b.hashCode()</code><br>② Ngược lại không cần đúng (hash collision OK)<br>③ <code>equals()</code> phải: reflexive, symmetric, transitive, consistent<br><br>⚠️ Vi phạm → HashMap/HashSet hoạt động sai!</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Comparable vs Comparator</div>
          <div class="theory-body"><code>Comparable</code> (java.lang): class tự define thứ tự 'tự nhiên'. Implement <code>compareTo(T other)</code>. String, Integer đã implement sẵn.<br><br><code>Comparator</code> (java.util): define thứ tự bên ngoài class, linh hoạt hơn. Dùng khi cần nhiều cách sort.<br>Lambda: <code>Comparator&lt;Student&gt; byGpa = (a,b) -&gt; Double.compare(b.gpa, a.gpa)</code></div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Immutability (Tính bất biến)</div>
          <div class="theory-body">Object không thể thay đổi sau khi tạo.<br>Cách tạo: <code>final class</code>, <code>final fields</code>, không có setter, <strong>deep copy</strong> trong constructor/getter.<br>Lợi ích: thread-safe, dễ reason about, có thể cache hashCode.<br>Ví dụ: <code>String, Integer, LocalDate</code> trong Java đều immutable.</div>
        </div></div>
      </details>

      <!-- CODE MẪU -->
      <details class="accordion">
        <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
        <div class="code-wrap">
          <button class="copy-btn">Copy</button>
          <pre><code class="java">// Immutable class với defensive copy
public final class ImmutablePerson {
    private final String name;
    private final List&lt;String&gt; hobbies;

    public ImmutablePerson(String name, List&lt;String&gt; hobbies) {
        this.name = name;
        this.hobbies = List.copyOf(hobbies); // defensive copy
    }
    public String getName() { return name; }
    public List&lt;String&gt; getHobbies() { return hobbies; } // unmodifiable
}

// equals + hashCode (IntelliJ có thể generate)
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Point p)) return false;
    return x == p.x &amp;&amp; y == p.y;
}
@Override
public int hashCode() { return Objects.hash(x, y); }

// Comparator chain
List&lt;Student&gt; sorted = students.stream()
    .sorted(Comparator.comparing(Student::getName)
        .thenComparing(Comparator.comparing(Student::getGpa).reversed()))
    .toList();</code></pre>
        </div>
      </details>

      <!-- BÀI TẬP -->
      <details class="accordion">
        <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
        <ol class="exercise-list"><li>Tạo class <code>Point(int x, int y)</code>. Override <code>equals()</code> và <code>hashCode()</code> đúng contract. Test với HashSet.</li><li>Tạo class <code>Student(String name, double gpa)</code>. Implement <code>Comparable</code> sort by name. Tạo thêm <code>Comparator</code> sort by gpa desc.</li><li>Tạo class <code>ImmutablePerson(String name, List&lt;String&gt; hobbies)</code>. Đảm bảo immutable hoàn toàn (defensive copy).</li><li>Test vi phạm: tạo 2 Point(1,1), add cả 2 vào HashSet. Quan sát khi KHÔNG override hashCode vs khi có override.</li></ol>
      </details>

      <!-- PHỎNG VẤN -->
      <details class="accordion">
        <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
        <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 1</span>
            <span class="qa-q">Sự khác biệt giữa <code>==</code> và <code>equals()</code> trong Java?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>==</code>: so sánh <strong>reference</strong> (địa chỉ bộ nhớ). Hai biến có cùng trỏ vào cùng object không?<br><code>equals()</code>: so sánh <strong>nội dung</strong> (logic). Mặc định của Object cũng là so sánh reference, nhưng String/Integer đã override để so sánh value.<br><br><strong>Ví dụ:</strong><br><code>String a = new String("hello");</code><br><code>String b = new String("hello");</code><br><code>a == b → false</code> (khác object)<br><code>a.equals(b) → true</code> (cùng nội dung)<br><br><strong>String pool:</strong> <code>String a = "hello"; String b = "hello"; a == b → true</code> (cùng pool entry)</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 2</span>
            <span class="qa-q">Sự khác biệt giữa Comparable và Comparator, khi nào dùng cái nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>Comparable</code>: class tự implement <code>compareTo()</code>, chỉ có 1 cách sort 'mặc định'. Dùng khi có 'natural ordering' rõ ràng (VD: String sort alphabetically).<br><code>Comparator</code>: tạo bên ngoài class, linh hoạt, nhiều cách sort khác nhau.<br><br>Ví dụ:<br><code>list.sort(Comparator.comparing(Employee::getSalary).reversed())</code><br><br><strong>Rule of thumb:</strong> chỉ có 1 cách sort hợp lý → Comparable. Cần nhiều cách → Comparator.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12">Trung 3</span>
            <span class="qa-q">Tại sao String trong Java là immutable? Có những lợi ích gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">① <strong>String Pool:</strong> JVM cache String literals. Nếu mutable, thay đổi 1 chỗ ảnh hưởng tất cả reference.<br>② <strong>Thread-safe:</strong> không cần synchronize khi share giữa threads.<br>③ <strong>Security:</strong> HashMap keys, network connections, class loading path — không muốn bị thay đổi.<br>④ <strong>hashCode caching:</strong> String tính hashCode 1 lần, cache lại vì value không đổi.<br><br><strong>Bài học:</strong> Dùng <code>StringBuilder</code> khi cần modify string trong loop!</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 4</span>
            <span class="qa-q">Làm thế nào để tạo một Immutable class trong Java? Liệt kê các bước cần thiết.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>5 bước tạo Immutable class:</strong><br>① <code>final class</code> — không thể extend<br>② Tất cả fields là <code>private final</code><br>③ Không có setter<br>④ <strong>Defensive copy</strong> trong constructor với mutable fields (List, Date...)<br>⑤ <strong>Defensive copy</strong> trong getter nếu trả về mutable object<br><br><code>public final class Person {</code><br><code>&nbsp;&nbsp;private final List&lt;String&gt; hobbies;</code><br><code>&nbsp;&nbsp;public Person(List&lt;String&gt; h) { this.hobbies = List.copyOf(h); }</code><br><code>&nbsp;&nbsp;public List&lt;String&gt; getHobbies() { return hobbies; } // unmodifiable</code><br><code>}</code></div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C">Khó 5</span>
            <span class="qa-q">Điều gì xảy ra nếu override <code>equals()</code> nhưng không override <code>hashCode()</code>?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">HashMap/HashSet dùng <code>hashCode()</code> để tìm bucket trước, sau đó mới dùng <code>equals()</code>.<br><br>Nếu không override hashCode(): 2 object 'equal' sẽ có hashCode khác nhau → nằm ở 2 bucket khác nhau.<br><br><strong>Hệ quả:</strong><br>• Set chứa duplicate: <code>set.add(p1); set.add(p2);</code> → 2 phần tử dù <code>p1.equals(p2) == true</code><br>• Map.get() return null: <code>map.put(key1, val); map.get(key2) == null</code> dù <code>key1.equals(key2)</code><br><br><strong>Bug thực tế:</strong> Employee set trong HR system có duplicate vì thiếu hashCode override.</div>
        </div></div>
      </details>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="bottom-card lc-card">
          <div class="bc-title">🧩 LeetCode</div>
          <div class="bc-name">Group Anagrams (LC #49) – Medium</div>
          <div class="bc-hint">Sorted string làm key trong HashMap. <code>'eat'</code> và <code>'tea'</code> đều sort thành <code>'aet'</code>.</div>
        </div>
        <div class="bottom-card tool-card">
          <div class="bc-title">🤖 AI Tools</div>
          <div class="bc-body">AI: <em>"Find the bug in this hashCode implementation"</em>. Paste code và test.</div>
        </div>
        <div class="bottom-card res-card">
          <div class="bc-title">📚 Tài Nguyên</div>
          <div class="bc-body">Baeldung: equals & hashCode · NeetCode: Group Anagrams</div>
        </div>
      </div>
    </div>
  </section>
  <section class="day-section" id="day-4">
    <div class="day-header" style="background:#27AE60">
      <div class="day-header-left">
        <span class="day-icon">💪</span>
        <div>
          <div class="day-date">14/05 — Thứ 5</div>
          <div class="day-topic">Generics: Type Parameter · Wildcard · Bounded Type · PECS · Type Erasure</div>
        </div>
      </div>
      <div class="day-meta">
        <span class="mode-badge">FULL</span>
        <span class="day-hours">⏱ 30 phút sáng + 2h tối (Pomo 1: Lý thuyết · Pomo 2: Code)</span>
      </div>
    </div>

    <div class="day-body">
      <!-- TIẾNG ANH LUÔN ĐẦU TIÊN -->
      <div class="en-block">
        <div class="en-header">
          <span class="en-flag">🌏</span>
          <strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong>
          <span class="en-badge-time">Vocalmax + Shadowing · 20 phút</span>
        </div>
        <div class="en-content"><strong>Vocalmax 10 phút:</strong> Học từ <em>generic, wildcard, bounded, erasure, constraint, type-safe, reusable, parameterized</em>.<br><strong>Parroto Shadowing 10 phút:</strong> Luyện câu kỹ thuật: <em>"This generic method accepts any type that extends Comparable."</em> Focus intonation.</div>
      </div>

      <!-- LÝ THUYẾT -->
      <details class="accordion" open>
        <summary>📖 Lý Thuyết Cốt Lõi</summary>
        <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Generics cơ bản</div>
          <div class="theory-body">Type-safe collections và methods. Compile-time checking.<br><code>class Box&lt;T&gt; { private T value; }</code><br>Lợi ích: không cần cast, phát hiện lỗi sớm hơn runtime.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Wildcard và Bounded Type</div>
          <div class="theory-body"><code>?</code> (unbounded): <code>List&lt;?&gt;</code> — list of any type, chỉ đọc được.<br><code>&lt;? extends T&gt;</code>: T hoặc subtype (upper bound).<br><code>&lt;? super T&gt;</code>: T hoặc supertype (lower bound).<br><br><strong>PECS: Producer Extends, Consumer Super</strong><br>• Đọc từ list (produce): dùng <code>? extends T</code><br>• Ghi vào list (consume): dùng <code>? super T</code></div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Type Erasure</div>
          <div class="theory-body">Generics chỉ tồn tại lúc compile time. Lúc runtime JVM không biết T là gì.<br><code>List&lt;String&gt;</code> và <code>List&lt;Integer&gt;</code> đều là <code>List</code> ở runtime.<br>⚠️ Không thể dùng <code>instanceof T</code>, không tạo <code>new T[10]</code> trực tiếp.</div>
        </div></div>
      </details>

      <!-- CODE MẪU -->
      <details class="accordion">
        <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
        <div class="code-wrap">
          <button class="copy-btn">Copy</button>
          <pre><code class="java">// Generic Stack
public class Stack&lt;T&gt; {
    private List&lt;T&gt; items = new ArrayList&lt;&gt;();
    public void push(T item) { items.add(item); }
    public T pop() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return items.remove(items.size() - 1);
    }
    public T peek() { return items.get(items.size() - 1); }
    public boolean isEmpty() { return items.isEmpty(); }
}

// PECS — Producer Extends, Consumer Super
public static &lt;T&gt; void copy(List&lt;? super T&gt; dest, List&lt;? extends T&gt; src) {
    for (T item : src) dest.add(item);
}

// Generic method với bounded type
public static &lt;T extends Comparable&lt;T&gt;&gt; T max(List&lt;T&gt; list) {
    return list.stream().max(Comparator.naturalOrder())
               .orElseThrow(() -&gt; new NoSuchElementException());
}

// Sử dụng
List&lt;Number&gt; nums = new ArrayList&lt;&gt;();
List&lt;Integer&gt; ints = Arrays.asList(1, 2, 3);
copy(nums, ints); // Integer extends Number — OK</code></pre>
        </div>
      </details>

      <!-- BÀI TẬP -->
      <details class="accordion">
        <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
        <ol class="exercise-list"><li>Tạo generic class <code>Stack&lt;T&gt;</code> với <code>push()</code>, <code>pop()</code>, <code>peek()</code>, <code>isEmpty()</code>.</li><li>Viết generic method <code>&lt;T extends Comparable&lt;T&gt;&gt; T max(List&lt;T&gt; list)</code> trả về phần tử lớn nhất.</li><li>Demo PECS: viết method <code>copy(List&lt;? super T&gt; dest, List&lt;? extends T&gt; src)</code>.</li><li>Tạo <code>Pair&lt;A, B&gt;</code> generic class với <code>getFirst()</code>, <code>getSecond()</code>. Test với <code>Pair&lt;String, Integer&gt;</code>.</li></ol>
      </details>

      <!-- PHỎNG VẤN -->
      <details class="accordion">
        <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
        <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 1</span>
            <span class="qa-q">Generics là gì? Tại sao nên dùng Generics thay vì <code>Object</code>?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Generics cho phép viết code với <strong>kiểu dữ liệu tham số hóa</strong> — type được xác định lúc compile time.<br><br><strong>Không dùng Generics:</strong><br><code>List list = new ArrayList();</code><br><code>list.add("Hello"); list.add(123);</code><br><code>String s = (String) list.get(1);</code> → ClassCastException lúc runtime!<br><br><strong>Dùng Generics:</strong><br><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code><br><code>// list.add(123);</code> → Compile error ngay lập tức<br><code>String s = list.get(0);</code> → Không cần cast, an toàn hoàn toàn.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 2</span>
            <span class="qa-q">Type Erasure trong Generics là gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Generics chỉ tồn tại lúc <strong>compile time</strong>. Compiler kiểm tra type rồi xóa thông tin đó đi — lúc runtime JVM không biết T là gì.<br><br>Hệ quả:<br>• <code>List&lt;String&gt;</code> và <code>List&lt;Integer&gt;</code> đều là <code>List</code> ở runtime<br>• Không thể dùng <code>instanceof T</code> hay <code>new T[10]</code> trực tiếp<br><br>Lý do thiết kế: giữ backward compatibility với code Java cũ (pre-Java 5).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12">Trung 3</span>
            <span class="qa-q">Sự khác biệt giữa <code>&lt;? extends T&gt;</code> và <code>&lt;? super T&gt;</code>? Khi nào dùng cái nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><code>&lt;? extends T&gt;</code>: T hoặc subtype của T. Chỉ có thể <strong>đọc</strong> ra (produce), không ghi vào được.<br><code>&lt;? super T&gt;</code>: T hoặc supertype của T. Có thể <strong>ghi</strong> vào (consume), nhưng đọc ra chỉ nhận được Object.<br><br><strong>Ví dụ:</strong><br><code>void printAll(List&lt;? extends Number&gt; list)</code> — đọc Number từ list<br><code>void addNumbers(List&lt;? super Integer&gt; list)</code> — ghi Integer vào list<br><br>Nếu vừa đọc vừa ghi: dùng <code>T</code> trực tiếp.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 4</span>
            <span class="qa-q">Giải thích nguyên tắc PECS với ví dụ thực tế trong Collections API.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>PECS = Producer Extends, Consumer Super</strong><br><br>Producer (đọc ra) → <code>? extends T</code>:<br><code>Collections.sort()</code> nhận <code>List&lt;? extends T&gt;</code> vì nó đọc phần tử để so sánh.<br><br>Consumer (ghi vào) → <code>? super T</code>:<br><code>Collections.addAll(Collection&lt;? super T&gt; c, T... elements)</code> — c nhận element nên là consumer.<br><br>Khi cả đọc và ghi: dùng <code>T</code> trực tiếp (không dùng wildcard).</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C">Khó 5</span>
            <span class="qa-q">Type Erasure gây ra những vấn đề gì trong thực tế? Cách giải quyết từng vấn đề?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Vấn đề và cách giải quyết:</strong><br>① Không thể instantiate T: <code>new T()</code> → compile error.<br>&nbsp;&nbsp;Fix: truyền <code>Class&lt;T&gt; clazz</code> vào constructor, dùng <code>clazz.newInstance()</code>.<br><br>② Không thể tạo generic array: <code>T[] arr = new T[10]</code> → error.<br>&nbsp;&nbsp;Fix: <code>(T[]) new Object[10]</code> (unsafe cast, cần suppress warning).<br><br>③ Overloading bị giới hạn: <code>method(List&lt;String&gt;)</code> và <code>method(List&lt;Integer&gt;)</code> không thể cùng tồn tại — cùng erasure.<br><br><strong>Thực tế Spring:</strong> Dùng <code>ParameterizedTypeReference</code> để giữ generic info khi gọi REST API:<br><code>new ParameterizedTypeReference&lt;List&lt;User&gt;&gt;(){}</code></div>
        </div></div>
      </details>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="bottom-card lc-card">
          <div class="bc-title">🧩 LeetCode</div>
          <div class="bc-name">Reverse Linked List (LC #206) – Easy</div>
          <div class="bc-hint">Dùng 3 con trỏ: <code>prev=null, curr=head, next</code>. Loop: <code>next=curr.next → curr.next=prev → prev=curr → curr=next</code>.</div>
        </div>
        <div class="bottom-card tool-card">
          <div class="bc-title">🤖 AI Tools</div>
          <div class="bc-body">AI: <em>"Explain what this wildcard does"</em> — paste code Generics phức tạp và hỏi AI giải thích.</div>
        </div>
        <div class="bottom-card res-card">
          <div class="bc-title">📚 Tài Nguyên</div>
          <div class="bc-body">Baeldung: Java Generics · NeetCode: Reverse Linked List</div>
        </div>
      </div>
    </div>
  </section>
  <section class="day-section" id="day-5">
    <div class="day-header" style="background:#E67E22">
      <div class="day-header-left">
        <span class="day-icon">⚡</span>
        <div>
          <div class="day-date">15/05 — Thứ 6</div>
          <div class="day-topic">Exception Handling: Checked/Unchecked · try-with-resources · Custom Exception</div>
        </div>
      </div>
      <div class="day-meta">
        <span class="mode-badge">LIGHT</span>
        <span class="day-hours">⏱ 30 phút sáng + 1h tối</span>
      </div>
    </div>

    <div class="day-body">
      <!-- TIẾNG ANH LUÔN ĐẦU TIÊN -->
      <div class="en-block">
        <div class="en-header">
          <span class="en-flag">🌏</span>
          <strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong>
          <span class="en-badge-time">Vocalmax nhẹ nhàng · 5–10 phút (ngày LIGHT)</span>
        </div>
        <div class="en-content"><strong>Vocalmax 5-10 phút:</strong> Ôn lại 10 từ đã học. Không học từ mới — ngày bận chỉ giữ streak.<br>Luyện câu: <em>"I handle exceptions by wrapping them in custom exception classes with meaningful messages."</em><br>Nếu còn sức: Parroto Dictation 1 bài ngắn (5 phút).</div>
      </div>

      <!-- LÝ THUYẾT -->
      <details class="accordion" open>
        <summary>📖 Lý Thuyết Cốt Lõi</summary>
        <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Exception Hierarchy</div>
          <div class="theory-body"><code>Throwable</code><br>├── <code>Error</code> — JVM-level, không nên catch (<code>OutOfMemoryError</code>)<br>└── <code>Exception</code><br>&nbsp;&nbsp;&nbsp;&nbsp;├── <strong>Checked</strong> — compile-time: <code>IOException, SQLException</code><br>&nbsp;&nbsp;&nbsp;&nbsp;└── <code>RuntimeException</code> → <strong>Unchecked</strong>: <code>NPE, IndexOutOfBoundsException</code></div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Checked vs Unchecked</div>
          <div class="theory-body"><strong>Checked:</strong> compiler bắt phải handle hoặc declare với <code>throws</code>. Dùng khi lỗi có thể recover được.<br><strong>Unchecked (RuntimeException):</strong> không bắt buộc handle. Dùng khi là lỗi lập trình, không nên tiếp tục.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">try-with-resources</div>
          <div class="theory-body">Java 7+: tự động <code>close()</code> resource sau khi dùng xong. Resource phải implement <code>AutoCloseable</code>.<br><code>try (FileReader fr = new FileReader("file.txt")) { ... }</code><br>Không cần <code>finally { fr.close(); }</code> nữa.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Custom Exception</div>
          <div class="theory-body">Tạo exception riêng cho business logic.<br>Checked: <code>class InsufficientFundsException extends Exception</code><br>Unchecked: <code>class UserNotFoundException extends RuntimeException</code><br>Best practice: thêm context + exception chaining.</div>
        </div></div>
      </details>

      <!-- CODE MẪU -->
      <details class="accordion">
        <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
        <div class="code-wrap">
          <button class="copy-btn">Copy</button>
          <pre><code class="java">// Custom exception với context
public class InsufficientFundsException extends Exception {
    private final double requested;
    private final double available;

    public InsufficientFundsException(double req, double avail) {
        super(String.format(
            "Cannot withdraw %.2f, only %.2f available", req, avail));
        this.requested = req;
        this.available = avail;
    }
}

// try-with-resources — tự động đóng
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    // Exception chaining — giữ stack trace gốc
    throw new DataProcessingException("Failed to read file", e);
}</code></pre>
        </div>
      </details>

      <!-- BÀI TẬP -->
      <details class="accordion">
        <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
        <ol class="exercise-list"><li>Viết method <code>readFile(String path)</code> ném <code>FileNotFoundException</code> nếu file không tồn tại.</li><li>Tạo class <code>InsufficientFundsException</code> (checked). Dùng trong <code>BankAccount.withdraw()</code>.</li><li>Dùng try-with-resources để đọc file và tự động đóng stream. So sánh với cách dùng finally.</li><li>Viết global exception handler với multi-catch: <code>catch (IOException | SQLException e)</code>.</li></ol>
      </details>

      <!-- PHỎNG VẤN -->
      <details class="accordion">
        <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (5 câu)</summary>
        <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 1</span>
            <span class="qa-q">NullPointerException xảy ra khi nào? Cách phòng tránh?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">NPE xảy ra khi gọi method/access field trên <code>null</code> reference.<br><br><strong>Phòng tránh:</strong><br>① <code>Optional&lt;T&gt;</code>: <code>Optional.ofNullable(val).ifPresent(v -&gt; process(v))</code><br>② Null check trước khi dùng: <code>if (user != null) { ... }</code><br>③ <code>Objects.requireNonNull(param, "message")</code>: fail-fast với message rõ ràng<br>④ Không trả về <code>null</code> từ method — trả về <code>Optional</code> hoặc empty collection<br>⑤ Java 14+: Helpful NPE message chỉ rõ biến nào null.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 2</span>
            <span class="qa-q">Checked Exception và Unchecked Exception khác nhau thế nào? Cho ví dụ mỗi loại.</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Checked Exception:</strong> compiler bắt phải handle (try-catch) hoặc declare (<code>throws</code>). Dùng khi lỗi có thể recover được.<br>Ví dụ: <code>IOException, SQLException, FileNotFoundException</code><br><br><strong>Unchecked Exception (RuntimeException):</strong> không bắt buộc handle. Dùng khi là lỗi lập trình, không nên tiếp tục.<br>Ví dụ: <code>NullPointerException, IllegalArgumentException, IndexOutOfBoundsException</code><br><br><strong>Rule of thumb:</strong> Caller có thể xử lý hợp lý? → Checked. Lỗi lập trình? → Unchecked.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12">Trung 3</span>
            <span class="qa-q">try-with-resources là gì? Tại sao tốt hơn try-finally để đóng resource?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Java 7+: tự động <code>close()</code> resource sau khi khối try kết thúc. Resource phải implement <code>AutoCloseable</code>.<br><br><strong>Trước đây (try-finally):</strong><br><code>FileReader fr = null; try { fr = new FileReader("f"); ... } finally { if (fr != null) fr.close(); }</code><br><br><strong>Với try-with-resources:</strong><br><code>try (FileReader fr = new FileReader("f")) { ... }</code><br>→ Ngắn hơn, an toàn hơn, đóng đúng thứ tự (nhiều resource), không bỏ sót close.<br><br>⚠️ Nếu exception xảy ra ở cả try và close(), exception trong close() bị <em>suppressed</em>.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 4</span>
            <span class="qa-q">Khi nào nên dùng <code>finally</code> thay vì try-with-resources?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>try-with-resources (ưu tiên hơn):</strong><br>• Đơn giản, ít code, tự động close đúng thứ tự.<br>• Dùng khi resource implement AutoCloseable: Connection, Stream, Reader.<br><br><strong>finally vẫn cần thiết khi:</strong><br>• Cần run code không liên quan đến AutoCloseable.<br>• Ví dụ: <code>finally { lock.unlock(); }</code> khi dùng <code>ReentrantLock</code>.<br>• Cần đảm bảo một đoạn code chạy dù có exception hay không (ví dụ: update metrics, log).<br><br>⚠️ <strong>Gotcha:</strong> Nếu exception xảy ra trong cả try và finally, exception trong finally sẽ suppress exception trong try!</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C">Khó 5</span>
            <span class="qa-q">Exception chaining là gì và tại sao quan trọng trong production?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Exception chaining = bọc exception gốc khi ném exception mới, giữ nguyên stack trace gốc để debug.<br><br><strong>Ví dụ xấu:</strong><br><code>catch (SQLException e) { throw new ServiceException("DB error"); }</code><br>→ Mất stack trace gốc! Log chỉ thấy ServiceException.<br><br><strong>Ví dụ tốt:</strong><br><code>catch (SQLException e) { throw new ServiceException("DB error", e); }</code><br>→ Giữ cause, <code>getCause()</code> trả về SQLException gốc với detail message.<br><br><strong>Thực tế Spring:</strong> Khi <code>@Transactional</code> method ném checked exception, Spring wrap vào <code>TransactionSystemException</code>. Nếu không chain, mất thông tin gốc — on-call engineer sẽ không biết root cause.</div>
        </div></div>
      </details>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="bottom-card lc-card">
          <div class="bc-title">🧩 LeetCode</div>
          <div class="bc-name">Merge Two Sorted Lists (LC #21) – Easy</div>
          <div class="bc-hint">Dùng dummy head node. So sánh <code>l1.val</code> và <code>l2.val</code>, attach node nhỏ hơn vào kết quả.</div>
        </div>
        <div class="bottom-card tool-card">
          <div class="bc-title">🤖 AI Tools</div>
          <div class="bc-body">AI: <em>"Write unit test for this exception handling code"</em>. Dùng JUnit 5 + <code>assertThrows()</code>.</div>
        </div>
        <div class="bottom-card res-card">
          <div class="bc-title">📚 Tài Nguyên</div>
          <div class="bc-body">Baeldung: Exception Handling · NeetCode: Merge Sorted Lists</div>
        </div>
      </div>
    </div>
  </section>
  <section class="day-section" id="day-6">
    <div class="day-header" style="background:#C0392B">
      <div class="day-header-left">
        <span class="day-icon">🔥</span>
        <div>
          <div class="day-date">16/05 — Thứ 7</div>
          <div class="day-topic">Collections P1: ArrayList vs LinkedList · HashSet/TreeSet · Iterator · Big-O</div>
        </div>
      </div>
      <div class="day-meta">
        <span class="mode-badge">WEEKEND</span>
        <span class="day-hours">⏱ 4 giờ (sáng 3h học nặng · chiều 1h Tiếng Anh + review)</span>
      </div>
    </div>

    <div class="day-body">
      <!-- TIẾNG ANH LUÔN ĐẦU TIÊN -->
      <div class="en-block">
        <div class="en-header">
          <span class="en-flag">🌏</span>
          <strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong>
          <span class="en-badge-time">Parroto Shadowing nâng cao · 30 phút (block dài nhất tuần)</span>
        </div>
        <div class="en-content"><strong>Parroto Shadowing 30 phút</strong> — buổi chiều sau khi học code:<br>Bước 1 (10p): Chọn 1 clip 'Tech Interview' trên Parroto. Nghe 2 lần không dừng.<br>Bước 2 (10p): Shadowing đoạn vừa nghe, tốc độ 0.8x → 1x.<br>Bước 3 (10p): Record giọng mình đọc câu: <em>"ArrayList uses a dynamic array internally, providing O(1) random access but O(n) insertion in the middle."</em> Nghe lại và note 1 điểm cần cải thiện.</div>
      </div>

      <!-- LÝ THUYẾT -->
      <details class="accordion" open>
        <summary>📖 Lý Thuyết Cốt Lõi</summary>
        <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">ArrayList vs LinkedList</div>
          <div class="theory-body"><strong>ArrayList:</strong> backed by dynamic array. O(1) get(i), O(n) add/remove giữa.<br><strong>LinkedList:</strong> doubly linked. O(n) get(i), O(1) add/remove đầu/cuối.<br><br>Chọn ArrayList khi thường xuyên đọc theo index. Chọn LinkedList khi implement Queue/Deque.<br><em>Thực tế: ArrayList được dùng 95% trường hợp.</em></div>
        </div>
        <div class="theory-card">
          <div class="theory-title">HashSet vs TreeSet vs LinkedHashSet</div>
          <div class="theory-body"><strong>HashSet:</strong> O(1) add/remove/contains. Không đảm bảo thứ tự.<br><strong>TreeSet:</strong> O(log n). Luôn sorted (Red-Black Tree). Element phải Comparable.<br><strong>LinkedHashSet:</strong> O(1) + giữ insertion order.<br><br>→ Cần tốc độ: HashSet · Cần sorted: TreeSet · Cần insertion order: LinkedHashSet</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Iterator Pattern</div>
          <div class="theory-body"><code>Iterator&lt;T&gt;</code>: <code>hasNext()</code>, <code>next()</code>, <code>remove()</code>.<br>Enhanced for-loop dùng Iterator bên dưới.<br><br>⚠️ <strong>ConcurrentModificationException:</strong> xảy ra khi modify collection trong khi đang iterate.<br>Fix: dùng <code>Iterator.remove()</code> hoặc <code>removeIf()</code>.</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Big-O tổng hợp</div>
          <div class="theory-body">ArrayList: get O(1), add-end O(1)*, add-middle O(n)<br>LinkedList: get O(n), add/remove head/tail O(1)<br>HashMap/HashSet: O(1) average, O(n) worst<br>TreeMap/TreeSet: O(log n) tất cả<br><em>* amortized</em></div>
        </div></div>
      </details>

      <!-- CODE MẪU -->
      <details class="accordion">
        <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
        <div class="code-wrap">
          <button class="copy-btn">Copy</button>
          <pre><code class="java">// Iterator safe remove — tránh ConcurrentModificationException
List&lt;Student&gt; students = new ArrayList&lt;&gt;(Arrays.asList(...));
Iterator&lt;Student&gt; it = students.iterator();
while (it.hasNext()) {
    if (it.next().getGpa() &lt; 2.0) it.remove(); // safe!
}
// Java 8+ — cleaner
students.removeIf(s -&gt; s.getGpa() &lt; 2.0);

// Sort với Comparator chain
List&lt;Student&gt; sorted = students.stream()
    .sorted(Comparator.comparing(Student::getName)
        .thenComparing(
            Comparator.comparing(Student::getGpa).reversed()))
    .toList();

// Benchmark ArrayList vs LinkedList
long start = System.nanoTime();
List&lt;Integer&gt; list = new ArrayList&lt;&gt;(); // đổi sang LinkedList để so sánh
for (int i = 0; i &lt; 10000; i++) list.add(5000, i); // insert giữa
System.out.println((System.nanoTime() - start) / 1_000_000 + "ms");</code></pre>
        </div>
      </details>

      <!-- BÀI TẬP -->
      <details class="accordion">
        <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
        <ol class="exercise-list"><li>Benchmark: đo thời gian add 10.000 phần tử vào giữa <code>ArrayList</code> vs <code>LinkedList</code>. So sánh kết quả.</li><li>Tạo Student set bằng <code>HashSet</code>. Kiểm tra duplicate detection. Test với equals/hashCode override.</li><li>Implement safe iteration: xóa student có gpa &lt; 2.0 từ ArrayList dùng <code>Iterator.remove()</code> rồi dùng <code>removeIf()</code>.</li><li>Tạo <code>TreeSet&lt;String&gt;</code> và thêm tên sinh viên. Kiểm tra tự động sorted alphabetically.</li></ol>
      </details>

      <!-- PHỎNG VẤN -->
      <details class="accordion">
        <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (6 câu)</summary>
        <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 1</span>
            <span class="qa-q">Khi nào dùng <code>List.of()</code> thay vì <code>new ArrayList()</code>?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>List.of(1, 2, 3):</strong> immutable list (Java 9+). Không thể add/remove/set.<br>→ Dùng khi: list không cần thay đổi, config data, test data.<br>→ Ném <code>UnsupportedOperationException</code> nếu cố modify.<br><br><strong>new ArrayList&lt;&gt;():</strong> mutable list.<br>→ Dùng khi: cần add/remove sau này.<br><br><strong>Best practice:</strong> Prefer immutable unless you need to modify.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 2</span>
            <span class="qa-q">HashSet, TreeSet, LinkedHashSet khác nhau thế nào? Khi nào dùng cái nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>HashSet:</strong> O(1) add/remove/contains. Không đảm bảo thứ tự. Dùng khi chỉ cần kiểm tra tồn tại.<br><strong>TreeSet:</strong> O(log n). Luôn sorted (Red-Black Tree). Element phải Comparable. Dùng khi cần dữ liệu có thứ tự.<br><strong>LinkedHashSet:</strong> O(1) + giữ insertion order. Dùng khi cần thứ tự thêm vào + no duplicate.<br><br><strong>Rule of thumb:</strong><br>→ Cần tốc độ: HashSet · Cần sorted: TreeSet · Cần insertion order: LinkedHashSet</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12">Trung 3</span>
            <span class="qa-q">ArrayList vs LinkedList — so sánh Big-O và khi nào dùng cái nào?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><table style="width:100%;font-size:.82rem;border-collapse:collapse"><tr><th style="text-align:left;padding:.3rem .5rem;border-bottom:1px solid #ddd">Operation</th><th style="padding:.3rem .5rem;border-bottom:1px solid #ddd">ArrayList</th><th style="padding:.3rem .5rem;border-bottom:1px solid #ddd">LinkedList</th></tr><tr><td style="padding:.3rem .5rem">get(i)</td><td style="padding:.3rem .5rem">O(1) ✅</td><td style="padding:.3rem .5rem">O(n)</td></tr><tr><td style="padding:.3rem .5rem">add cuối</td><td style="padding:.3rem .5rem">O(1) amortized</td><td style="padding:.3rem .5rem">O(1)</td></tr><tr><td style="padding:.3rem .5rem">add/remove giữa</td><td style="padding:.3rem .5rem">O(n)</td><td style="padding:.3rem .5rem">O(1) (nếu có node)</td></tr></table><br>Thực tế: ArrayList được dùng 95%+ trường hợp. Chọn LinkedList khi implement Queue/Deque với thao tác thêm/xóa đầu/cuối liên tục.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 4</span>
            <span class="qa-q">ConcurrentModificationException xảy ra khi nào? Các giải pháp?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Xảy ra khi structural modification (add/remove) collection trong khi đang iterate nó.<br><br><strong>Ví dụ bug:</strong><br><code>for (String s : list) { if (s.startsWith("A")) list.remove(s); }</code> → CME!<br><br><strong>Giải pháp:</strong><br>① <code>Iterator.remove()</code>: an toàn nhất<br>② <code>removeIf()</code>: Java 8, cleanest<br>③ Copy list trước: <code>new ArrayList&lt;&gt;(list).forEach(...)</code><br>④ <code>CopyOnWriteArrayList</code>: thread-safe, iterate trên snapshot (cost cao)<br>⑤ Collect rồi remove: <code>list.removeAll(toRemove)</code></div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 5</span>
            <span class="qa-q">HashMap hoạt động thế nào bên trong? Điều gì xảy ra khi có hash collision?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">HashMap dùng <strong>array of buckets</strong>. Mỗi bucket là linked list (Java 7) hoặc balanced tree khi &gt;8 entries (Java 8+).<br><br><strong>put(key, value):</strong><br>① Tính <code>hash = key.hashCode()</code><br>② Tìm bucket: <code>index = hash % capacity</code><br>③ Nếu bucket trống: thêm entry. Nếu có collision: duyệt linked list, dùng <code>equals()</code> để tìm đúng key.<br><br><strong>Load factor (0.75 mặc định):</strong> khi fill &gt; 75%, resize x2 và rehash.<br><br>→ O(1) average, O(n) worst case khi tất cả keys vào cùng 1 bucket.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C">Khó 6</span>
            <span class="qa-q">ArrayList resize như thế nào? Tại sao <code>add()</code> là O(1) amortized?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">ArrayList bắt đầu với <code>capacity=10</code> (default). Khi đầy: tạo array mới <code>capacity × 1.5</code>, copy tất cả element sang.<br><br>Resize cost = O(n). Nhưng xảy ra ít dần: sau 10 add, sau 15 add, sau 22 add...<br><br><strong>Amortized analysis:</strong> Sau n lần add, tổng cost = n + (n/10 + n/15 + n/22 + ...) ≈ 2n = O(n).<br>Per operation = O(n)/n = <strong>O(1) amortized</strong>.<br><br><strong>Optimization:</strong> Nếu biết trước size:<br><code>new ArrayList&lt;&gt;(1000)</code> → tránh multiple resizes, cải thiện performance đáng kể.</div>
        </div></div>
      </details>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="bottom-card lc-card">
          <div class="bc-title">🧩 LeetCode</div>
          <div class="bc-name">Contains Duplicate (LC #217) + Valid Anagram (LC #242)</div>
          <div class="bc-hint">#217: Add vào HashSet, nếu <code>add()</code> return <code>false</code> = duplicate. #242: Dùng <code>int[26]</code> đếm frequency hoặc sort 2 string rồi so sánh.</div>
        </div>
        <div class="bottom-card tool-card">
          <div class="bc-title">🤖 AI Tools</div>
          <div class="bc-body">AI: <em>"Which collection should I use for X use case?"</em> với các case: unique emails, sorted leaderboard, LRU cache.</div>
        </div>
        <div class="bottom-card res-card">
          <div class="bc-title">📚 Tài Nguyên</div>
          <div class="bc-body">Baeldung: Java Collections Guide · NeetCode: Contains Duplicate</div>
        </div>
      </div>
    </div>
  </section>
  <section class="day-section" id="day-7">
    <div class="day-header" style="background:#8E44AD">
      <div class="day-header-left">
        <span class="day-icon">🔁</span>
        <div>
          <div class="day-date">17/05 — CN</div>
          <div class="day-topic">🔁 Spaced Review T1: OOP + Interface + Generics + Exception · Mini Project: Quản Lý Sinh Viên</div>
        </div>
      </div>
      <div class="day-meta">
        <span class="mode-badge">REVIEW</span>
        <span class="day-hours">⏱ 4 giờ (sáng 2h review · chiều 2h project + GitHub)</span>
      </div>
    </div>

    <div class="day-body">
      <!-- TIẾNG ANH LUÔN ĐẦU TIÊN -->
      <div class="en-block">
        <div class="en-header">
          <span class="en-flag">🌏</span>
          <strong>TIẾNG ANH — HỌC TRƯỚC (trên app)</strong>
          <span class="en-badge-time">Vocalmax Review + Mini Mock · 20 phút</span>
        </div>
        <div class="en-content"><strong>Vocalmax 10 phút:</strong> Ôn lại tất cả từ đã học tuần này (spaced review session). Không học từ mới.<br><strong>Mini mock 10 phút:</strong> Tự hỏi 2 câu EN và trả lời to ra, record giọng:<br>① <em>"What is the difference between Spring MVC and Spring Boot?"</em><br>② <em>"Tell me about yourself in 1 minute."</em><br>Nghe lại recording, note 1 điểm cần cải thiện.</div>
      </div>

      <!-- LÝ THUYẾT -->
      <details class="accordion" open>
        <summary>📖 Lý Thuyết Cốt Lõi</summary>
        <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-title">Spaced Review: OOP</div>
          <div class="theory-body">✍️ Không xem notes. Tự viết lại:<br>□ 4 tính chất OOP + 1 ví dụ mỗi cái<br>□ equals/hashCode contract (3 quy tắc)<br>□ Interface vs Abstract — 3 điểm khác biệt</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Spaced Review: Java Core</div>
          <div class="theory-body">✍️ Không xem notes. Tự trả lời:<br>□ PECS là gì? Viết 1 ví dụ<br>□ Checked vs Unchecked exception — khi nào dùng cái nào?<br>□ ArrayList vs LinkedList — Big-O so sánh</div>
        </div>
        <div class="theory-card">
          <div class="theory-title">Mini Project: Student Management</div>
          <div class="theory-body">Yêu cầu tối thiểu:<br>• <code>Student</code> class (OOP, Comparable, equals/hashCode)<br>• <code>StudentManager</code> với CRUD + filter/sort<br>• Custom exceptions: <code>StudentNotFoundException</code><br>• Generic <code>Repository&lt;T&gt;</code> interface<br>• README.md bằng tiếng Anh (5+ câu)<br>• Push lên GitHub với commit message rõ ràng</div>
        </div></div>
      </details>

      <!-- CODE MẪU -->
      <details class="accordion">
        <summary>💻 Code Mẫu — Gõ Tay, Không Copy-Paste</summary>
        <div class="code-wrap">
          <button class="copy-btn">Copy</button>
          <pre><code class="java">// Student Management — Final Structure
public class StudentManager {
    private final List&lt;Student&gt; students = new ArrayList&lt;&gt;();

    public void add(Student s) {
        if (students.stream().anyMatch(x -&gt; x.getId().equals(s.getId())))
            throw new DuplicateStudentException(s.getId());
        students.add(s);
    }

    public Student findById(String id) {
        return students.stream()
            .filter(s -&gt; s.getId().equals(id))
            .findFirst()
            .orElseThrow(() -&gt; new StudentNotFoundException(id));
    }

    public List&lt;Student&gt; getTopStudents(double minGpa) {
        return students.stream()
            .filter(s -&gt; s.getGpa() &gt;= minGpa)
            .sorted(Comparator.comparing(Student::getGpa).reversed())
            .toList();
    }
}</code></pre>
        </div>
      </details>

      <!-- BÀI TẬP -->
      <details class="accordion">
        <summary>✍️ Bài Tập Thực Hành (4 bài)</summary>
        <ol class="exercise-list"><li>Self-quiz: viết ra giấy 10 câu Java Core không xem notes. Chấm điểm thật sự.</li><li>Build <code>StudentManager</code> với CRUD đầy đủ, filter by GPA, sort by name/gpa.</li><li>Push code lên GitHub: <code>feat: add student management with OOP and collections</code></li><li>Viết README.md tiếng Anh 5+ câu: mô tả project, tech stack, cách chạy, features.</li></ol>
      </details>

      <!-- PHỎNG VẤN -->
      <details class="accordion">
        <summary>🎤 Câu Hỏi Phỏng Vấn — Dễ → Khó (6 câu)</summary>
        <div class="qa-list">
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 1</span>
            <span class="qa-q">Tại sao throw <code>StudentNotFoundException</code> thay vì return <code>null</code>?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">Return null gây ra 2 vấn đề:<br>① Caller có thể quên check null → NPE sau đó → khó debug.<br>② Null không mang thông tin — không biết tại sao không tìm thấy.<br><br>Throw exception:<br>• Explicit contract: method này PHẢI tìm thấy, nếu không = exceptional case.<br>• Stack trace đầy đủ. Caller buộc phải handle.<br><br>Alternative: return <code>Optional&lt;Student&gt;</code> khi 'không tìm thấy' là normal case.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#27AE60">Dễ 2</span>
            <span class="qa-q">Generic <code>Repository&lt;T&gt;</code> interface trong mini project có lợi gì so với class cụ thể?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">① <strong>Tái sử dụng code:</strong> viết <code>Repository&lt;Student&gt;</code>, <code>Repository&lt;Teacher&gt;</code> từ cùng 1 interface — không duplicate CRUD logic.<br>② <strong>Type-safe:</strong> compiler kiểm tra đúng type, không cần cast.<br>③ <strong>Dễ mock trong test:</strong> implement interface bằng in-memory mock thay vì DB thật.<br>④ <strong>Open/Closed Principle:</strong> thêm entity mới không cần sửa code CRUD cũ.<br><br><code>interface Repository&lt;T, ID&gt; { T findById(ID id); void save(T entity); ... }</code></div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#F39C12">Trung 3</span>
            <span class="qa-q">Tại sao nên thiết kế <code>Student</code> class là immutable trong mini project?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">① <strong>Thread-safe mặc định:</strong> không cần synchronize khi share Student object giữa nhiều threads.<br>② <strong>Dễ reason about:</strong> biết Student không thay đổi → không cần trace tất cả chỗ dùng.<br>③ <strong>Safe in collections:</strong> nếu Student mutable và dùng làm key trong HashMap, hashCode có thể thay đổi → HashMap bị broken.<br>④ <strong>Value semantics:</strong> pass Student vào method không lo bị modify ngoài ý muốn.<br><br>Trade-off: cần tạo object mới khi "update" → dùng Builder pattern hoặc copy-constructor.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E67E22">Trung 4</span>
            <span class="qa-q">Nếu cần store 10 triệu sinh viên, bạn thay đổi gì trong thiết kế?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer">① Thay ArrayList bằng database (JPA + PostgreSQL) — không load hết vào memory.<br>② Thêm pagination: <code>findAll(Pageable pageable)</code> thay vì trả về toàn bộ List.<br>③ Index trên các field thường query: id, department, gpa.<br>④ Dùng cache (Redis) cho frequent queries: top students, department stats.<br>⑤ Không dùng <code>Stream().filter()</code> trên toàn bộ list — thay bằng WHERE clause trong SQL.</div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#2471A3">Mock EN 5</span>
            <span class="qa-q">Tell me about your mini project. What design decisions did you make?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Template trả lời tiếng Anh (học thuộc + tùy chỉnh):</strong><br><em>"I built a Student Management system to practice Java OOP and Collections. I designed the Student class as immutable — all fields final, no setters — to avoid accidental state changes. For storage, I chose ArrayList because most operations are random access. I added custom checked exceptions — StudentNotFoundException — because callers need to handle the case where a student does not exist. I used Stream API for filtering and sorting, which made the code more declarative."</em></div>
        </div>
        <div class="qa-item">
          <div class="qa-header">
            <span class="qa-badge" style="background:#E74C3C">Khó 6</span>
            <span class="qa-q">Nếu <code>StudentManager</code> cần thread-safe để dùng trong multi-threaded API, bạn thay đổi gì?</span>
          </div>
          <button class="qa-toggle">Xem đáp án ▼</button>
          <div class="qa-answer"><strong>Các lựa chọn từ đơn giản đến phức tạp:</strong><br><br>① <code>synchronized</code> methods: đơn giản nhất nhưng lock toàn bộ — bottleneck với nhiều thread đọc.<br><br>② <code>Collections.synchronizedList(new ArrayList&lt;&gt;())</code>: wrapper đồng bộ nhưng vẫn cần sync khi iterate.<br><br>③ <code>CopyOnWriteArrayList</code>: read không cần lock, write tạo copy mới. Tốt khi read nhiều hơn write.<br><br>④ <code>ReadWriteLock</code> với <code>ReentrantReadWriteLock</code>: nhiều thread đọc đồng thời, chỉ 1 thread ghi.<br><br>⑤ Database + transaction: giải pháp production thực tế — DB xử lý concurrency thay vì in-memory.<br><br><strong>Rule:</strong> Đừng tự viết concurrent code — dùng <code>ConcurrentHashMap</code>, DB, hoặc framework đã tested.</div>
        </div></div>
      </details>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="bottom-card lc-card">
          <div class="bc-title">🧩 LeetCode</div>
          <div class="bc-name">Top K Frequent Elements (LC #347) – Medium</div>
          <div class="bc-hint">HashMap đếm frequency, sau đó dùng bucket sort (array of lists, index = frequency) để tìm top K. O(n) time.</div>
        </div>
        <div class="bottom-card tool-card">
          <div class="bc-title">🤖 AI Tools</div>
          <div class="bc-body">Push GitHub. AI: <em>"Review my README. Is the English natural?"</em> Feynman test: giải thích OOP cho bạn bè.</div>
        </div>
        <div class="bottom-card res-card">
          <div class="bc-title">📚 Tài Nguyên</div>
          <div class="bc-body">Baeldung: HashMap Internals · NeetCode: Top K Frequent</div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="summary">
    <h2 class="section-h2">🎯 Tổng Kết Tuần 1</h2>

    <div class="summary-cols">
      <div>
        <h3 class="sub-h3">📋 Ngân Hàng Câu Hỏi Phỏng Vấn</h3>
        <p class="muted">Ôn lại cuối tuần — trả lời to ra, ghi âm, nghe lại.</p>
        
      <div class="sq-group">
        <div class="sq-group-title">OOP</div>
        
        <div class="sq-item">
          <div class="sq-q">Q: What are the four pillars of OOP?</div>
          <div class="sq-a">A: Encapsulation (private fields + getters/setters), Inheritance (extends), Polymorphism (override/overload), Abstraction (interface/abstract class).</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: Difference between interface and abstract class?</div>
          <div class="sq-a">A: Interface: contract only, multiple implementation. Abstract class: can have state + concrete methods, single inheritance. Interface for 'can-do', abstract for 'is-a'.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: Can an abstract class have a constructor?</div>
          <div class="sq-a">A: Yes. Called via super() in subclass. Cannot be instantiated directly.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Java Core</div>
        
        <div class="sq-item">
          <div class="sq-q">Q: What is the equals/hashCode contract?</div>
          <div class="sq-a">A: If a.equals(b) then a.hashCode() == b.hashCode(). Violating this breaks HashMap/HashSet. Always override both together.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: What is type erasure in Java Generics?</div>
          <div class="sq-a">A: Generic type params removed at compile time. At runtime List<String> == List<Integer> == List. Cannot do instanceof T or new T[].</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: Checked vs unchecked exceptions?</div>
          <div class="sq-a">A: Checked: compile-time, must handle (IOException). Unchecked: runtime, extends RuntimeException (NPE). Checked for recoverable errors, unchecked for programming bugs.</div>
        </div>
      </div>
      <div class="sq-group">
        <div class="sq-group-title">Collections</div>
        
        <div class="sq-item">
          <div class="sq-q">Q: When use LinkedList over ArrayList?</div>
          <div class="sq-a">A: When frequently inserting/removing at head (O(1) vs O(n)). Examples: Queue, Deque, LRU Cache. ArrayList preferred for random access.</div>
        </div>
        <div class="sq-item">
          <div class="sq-q">Q: What is ConcurrentModificationException?</div>
          <div class="sq-a">A: Thrown when modifying collection while iterating. Fix: Iterator.remove(), removeIf(), or collect then remove.</div>
        </div>
      </div>
      </div>
      <div>
        <h3 class="sub-h3">✅ Checklist Cuối Tuần</h3>
        <div class="checklist" data-week="1">
      <label class="check-item">
        <input type="checkbox" data-idx="0">
        <span>Code được cả 4 tính chất OOP từ đầu không xem notes</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="1">
        <span>Giải thích được Interface vs Abstract Class cho người mới (Feynman test)</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="2">
        <span>Override equals() và hashCode() đúng contract, test với HashSet</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="3">
        <span>Viết Generic Stack<T> hoàn chỉnh</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="4">
        <span>Mini project Student Management chạy được, push GitHub</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="5">
        <span>README.md tiếng Anh đã viết (5+ câu)</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="6">
        <span>LeetCode: Two Sum, Valid Parentheses, Group Anagrams, Reverse LL, Contains Duplicate = 5 bài AC</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="7">
        <span>Vocalmax streak 7 ngày, học được 20+ từ IT</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="8">
        <span>Parroto Shadowing/Dictation 7 ngày liên tiếp</span>
      </label>
      <label class="check-item">
        <input type="checkbox" data-idx="9">
        <span>GitHub có ít nhất 5 commits tuần này</span>
      </label></div>
        <div class="progress-wrap-outer"><div class="progress-wrap">
          <div class="progress-label">
            Hoàn thành: <strong class="progress-text">0/10</strong>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar"></div>
          </div>
        </div></div>
        <div class="golden-rule">
          💡 <strong>Quy tắc vàng:</strong> Dù bận thế nào, tối thiểu 30 phút Vocalmax/Parroto +
          1 câu Tiếng Anh + 1 LeetCode Easy = giữ streak. Đừng bỏ ngày!
        </div>
      </div>
    </div>
  </section>
