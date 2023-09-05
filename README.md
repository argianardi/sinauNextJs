## Key Word

- <details open>
    <summary><a href="#atomic-design">Atomic Desigin</a></summary>
    <ul>
      <li><a href="#props-1">Props</a></li>
      <li><a href="#default-props">Default Props</a></li>
    </ul>
  </details>
- <details open>
       <summary><a href="#routing">Routing</a></summary>
       <ul>
         <li><a href="#basic-routes">Basic Route</a></li>
         <li><a href="#nested-routes">Nested Route</a></li>
         <li><a href="#dynamic-routes">Dynamic Route</a></li>
         <li><a href="#nested-dynamic-routes">Nested Dinamic Route</a></li>
         <li><a href="#catch-all-routes">Catch All Routes</a></li>
       </ul>
  </details>

## Atomic Design

Atomic Design adalah konsep desain yang digunakan dalam pengembangan UI dan desain layouting. Dikembangkan oleh Brad Frost, konsep ini menggambarkan bagaimana elemen - elemen desain dapat dipecah menjadi komponen yang lebih kecil dan lebih sederhana. Hasil dari pemecahan ini ditujukan untuk membantu dalam pembangunan desain yang lebih konsisten, efisien, dan mudah dikelola. Konsep atomic design ini dibahas lebih lanjut [disini](https://atomicdesign.bradfrost.com/).

Atomic Design menggambarkan elemen - elemen desain dalam hierarki berdasarkan kompleksitas dan tingkat abstraksi. Hierarki ini terdiri dari lima level:

- Atoms <br/> Elemen dasar yang tidak bisa lagi dipecah menjadi elemen yang lebih kecil. Contohnya, utility classes seperti warna, typografi atau elemen html seperti sebuah button, tag input dan lain - lain. Sebaiknya folder untuk atoms ini diberi nama `elements`.
- Molecules <br/> Kombinasi beberapa atom yang bekerja bersama untuk membentuk sebuah komponen yang lebih kompleks, misalnya satu form input yang berisi tag input dan label. Untuk mempersingkat struktur folder, biasanya molecules digabung kedalam folder atoms (yang diberi nama `elements`)
- Organisms <br/> Grup elemen - elemen molekul yang membentuk bagian - bagian dari UI yang lebih besar dan dapat berdiri sendiri. Contohnya dapat berupa header atau footer. Folder organisms sebaiknya diberi nama `fragments`
- Templates <br/> Struktur tingkat tinggi yang menggabungkan beberapa organisme menjadi tata letak yang lebih besar. Template menggambarkan susunan dari berbagai organisme dan molekul di dalamnya. Folder templates sebaiknya diberi nama `layouts`.
- Pages <br/> Adalah hasil akhir yang dapat dilihat dan diinteraksikan oleh user, dan menggambarkan bagaimana tampilan dan fungsionalitas UI akhir yang sebenarnya.

Berikut contoh skema struktur folder dalam konsep atomic design:

```
src/
|-- components/
|   |-- elements/
|   |   |   |-- Button.jsx
|   |   |   |-- Input.jsx
|   |-- fragements/
|   |   |   |-- FormLogin.jsx
|   |   |   |-- FormRegister.jsx
|   |-- Layouts/
|   |   |   |-- AuthLayouts.jsx
|
|-- styles/
|   |-- globals.css
|
|-- pages/
|   |   |-- index.js
|   |   |-- Login.jsx
|   |   |-- Register.jsx
|
|-- ...

```

<details open>
<summary>Berikut penjelasanya:</summary>

- elements <br/> Merupakan gabungan atoms dan molecules, berisi komponen-komponen dasar yang tidak dapat dipecah lagi menjadi elemen yang lebih sederhana. Ini mencakup elemen-elemen seperti Button.jsx dan Input.jsx.
- fragments <br/> Berisi komponen - komponen organisms yang merupakan gabungan dari beberapa atom dan/atau molekul (foldernya kita berinama `elements`), di mana beberapa elemen dasar digabungkan menjadi kesatuan yang lebih kompleks. Contoh dari komponen - komponen ini adalah FormLogin.jsx dan FormRegister.jsx.
- layouts <br/> berisi komponen-komponen organisme, yang menggabungkan elemen-elemen molekul dan/atau atoms untuk membentuk tata letak yang lebih besar dan berdiri sendiri. Salah satu contohnya adalah AuthLayouts.jsx.
- templates<br/> Struktur tata letak yang lebih tinggi, menggabungkan komponen organisms (`fragments`) untuk menciptakan kerangka visual yang konsisten dan dapat reusable di seluruh proyek. AuthLayouts.jsx di sini adalah contoh dari komponen yang menggabungkan beberapa komponen organisms (`fragments`) untuk membentuk tampilan halaman yang lebih lengkap.
- pages <br/> Berisi halaman-halaman aktual yang menggunakan komponen-komponen yang telah diatur dalam struktur sebelumnya. Contoh dari ini adalah Login.jsx dan Register.jsx.
</details>

## Routing

Routing adalah bagian penting dari pengembangan aplikasi web yang memungkinkan pengguna berpindah antara halaman-halaman yang berbeda. Routing di Next js dibahas lebih lengkap [di sini](https://nextjs.org/docs/pages/building-your-application/routing).

Di Next js, routing berfokus pada folder pages. Setiap file yang dibuat di dalam folder pages secara otomatis menjadi rute yang dapat diakses di aplikasi kita. Misalnya, file pages/index.js akan menjadi halaman utama, dan pages/about.js akan menjadi halaman "About". Ini sangat memudahkan pengaturan dan pemeliharaan rute, karena kita tidak perlu mengkonfigurasi rute secara manual seperti pada beberapa frame work lain.

Nextjs mendukung berbagai jenis rute:

### Basic Routes

Kita dapat membuat rute dasar hanya dengan membuat file/folder di dalam folder pages. Misalnya, `pages/contact.js` atau `pages/contact/index.js` akan menghasilkan URL `/contact`. Basic routes dibahas lebih lengkap [disini](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

### Nested Routes

Merupakan cara untuk mengatur halaman-halaman di dalam halaman lain. Ini membantu membuat struktur navigasi yang lebih dalam dan terorganisir. Nested routes dibahas lebih lengkap [disini](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts). Misalnya kita ingin membangun situs berita dengan struktur berikut:

```
pages/
|-- index.jsx (Beranda)
|-- category/
|   |   |-- index.jsx (Daftar berita dalam kategori)
|   |   |-- news.jsx (Detail berita)
|-- ...
```

URL yang dihasilkan dari struktur file di atas adalah:

- Beranda: /, contohnya: https://www.basedomain.com/
- Daftar Berita dalam Kategori: /category, contohnya: https://www.basedomain.com/category
- Detail Berita: /category/news, contohnya https://www.basedomain.com/category/news

### Dynamic Routes

Next.js memungkinkan kita untuk membuat rute dinamis menggunakan tanda kurung siku `[]`. Dynamic Routes memungkinkan kita membuat rute dinamis berdasarkan nilai parameter yang diberikan dalam URL. Dynamic routes dibahas lebih lengkap [disini](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#convention). Misalnya kita ingin membuat situs berita, berikut contoh struktur filenya:

```
pages/
|-- index.jsx (Halaman Utama)
|-- news/
|   |   |-- index.jsx (Halaman Daftar Kategori Berita)
|   |   |-- [category].jsx (Halaman Daftar Berita dalam Kategori)
|   |   |-- [category]/[slug].jsx (Halaman Detail Berita)
|-- ...
```

URL yang dihasilkan dari struktur file di atas adalah:

- Halaman Utama: /, contohnya: https://www.basedomain.com/
- Halaman Daftar Kategori Berita: /news, contohnya: https://www.basedomain.com/news
- Halaman Daftar Berita dalam Kategori: /news/{parameter-bebas}, contohnya: https://www.basedomain.com/politics
- Halaman Detail Berita: /news/politics/{parameter-bebas}, contohnya: https://www.basedomain.com/politics/strategi-politik-2024

Untuk mengambil query parameter dari dinamc routes tersebut kita bisa menggunakan `useRouter` dari next/router

```
import { useRouter } from 'next/router';
import React from 'react';

const DetailProduct = () => {
  const { query } = useRouter();
  console.log(query.productTitle);

  return <div>{query.productTitle}</div>;
};

export default DetailProduct;
```

### Nested Dynamic Routes

Kita dapat menggabungkan rute dinamis dengan rute biasa dan bersarang. Nested Dynamic route dibahas lebih lengkap [di sini](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#convention). Berikut contoh struktur filenya:

```
pages/
|-- index.jsx (Halaman Utama)
|-- posts/
|   |   |-- [slug].jsx (Halaman Detail Postingan)
|   |   |-- [slug]/comments.jsx (Halaman Komentar)
|-- ...
```

URL yang dihasilkan dari struktur file di atas adalah:

- Halaman Utama: /, contohnya: https://www.basedomain.com
- Halaman detail postingan: /posts/{parameter-bebas}, contohnya: https://www.basedomain.com/posts/memories-of-paris
- Halaman Komentar: /posts/{parameter-bebas}/comments, contohnya: https://www.example.com/posts/memories-of-paris/comments

### Catch-All Routes

Catch-All Routes adalah jenis dynamic route di Next js yang menggunakan tanda kurung siku `[...slug]` dalam definisi rute. Ini memungkinkan kita untuk menangani banyak segmen path yang bervariasi dalam URL. Ketika kita mencocokkan URL dengan pola tertentu ke rute ini, seluruh segmen path atau query parameter yang cocok akan diambil dan disimpan dalam bentuk array. Cath all routes dibahas lebih lengkap [di sini](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments).

Berikut contoh penggunaannya untuk case aplikasi blog yang terdiri dari berbagai kategori:

- Struktur File

  ```
  - pages/
    - blog/
      - [...slug].tsx
      - index.tsx
    - index.tss
  ```

  - pages/index.tsx, adalah halaman beranda situs kita.
  - pages/blog/index.tsx, adalah halaman daftar kategori di blog.
  - pages/blog/[...slug].tsx, adalah Catch-All Routes yang akan menangani segmen path setelah /blog/. Ini adalah tempat utama di mana kita akan menangani semua kategori dan artikel.

  Berikut code di file `[...slug].tsx`:

  ```
  import { useRouter } from 'next/router';
  import React from 'react';

  const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query as { slug: string[] };
    console.log(slug); //['sports', 'monday', '3 hottest news today']

    return (
      <div>
        <h2>Detail Blog</h2>
        <p>Path Segments: {slug?.join('/')}</p>
      </div>
    );
  };

  export default BlogDetail;
  ```

  [source code](https://github.com/argianardi/sinauNextJs/blob/routes/src/pages/blog/%5B...slug%5D.tsx)

  Dalam contoh diatas, kita menggunakan Catch-All Routes di file `[...slug].tsx` untuk menangani segmen path setelah `/blog/`. Ini memungkinkan kita untuk menampilkan artikel berdasarkan kategori dan judul artikel dalam URL.

  Misalnya, URL `http://localhost:3000/blog/sports/monday/3%20hottest%20news%20today` akan diarahkan ke halaman `BlogDetail`, di mana kita dapat menampilkan artikel dengan kategori "sports" dan "monday" berjudul "3 hottest news today". Dan variable `slug` akan berisi array of string seperti : [ "sports", "monday", "3 hottest news today" ].

### Link

Link adalah komponen dalam Next js yang digunakan untuk membuat tautan (link) antara halaman dalam sebuah aplikasi web. Fungsinya adalah memungkinkan user untuk berpindah dari satu halaman ke halaman lain tanpa memerlukan reload halaman secara lengkap. Dengan kata lain, Link digunakan untuk mengelola navigasi dalam sebuah aplikasi web secara responsif dan efisien. Link dibahas lebih lengkap [di sini](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating). Berikut contoh penggunaannya

```
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>
        Belum punya akun?, Register <Link href={'/auth/register'}>di sini</Link>{' '}
      </p>
    </div>
  );
};

export default LoginPage;
```

Dengan menggunakan komponen `Link` dari `next/link` user dapat diarahkan dari login page ke register page.
