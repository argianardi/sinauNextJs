## Key Word

- <details open>
    <summary><a href="#atomic-design">Atomic Desigin</a></summary>
    <ul>
      <li><a href="#props-1">Props</a></li>
      <li><a href="#default-props">Default Props</a></li>
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

Next.js mendukung berbagai jenis rute:

- Basic Routes <br/> Kita dapat membuat rute dasar hanya dengan membuat file/folder di dalam folder pages. Misalnya, `pages/contact.js` atau `pages/contact/index.js` akan menghasilkan URL `/contact`.
- Nested Routes <br/> Merupakan cara untuk mengatur halaman-halaman di dalam halaman lain. Ini membantu membuat struktur navigasi yang lebih dalam dan terorganisir. Misalnya kita ingin membangun situs berita dengan struktur berikut:

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

- Dynamic Routes <br/> Next.js memungkinkan kita untuk membuat rute dinamis menggunakan tanda kurung siku `[]`. Dynamic Routes memungkinkan kita membuat rute dinamis berdasarkan nilai parameter yang diberikan dalam URL. Misalnya kita ingin membuat situs berita, berikut contoh struktur filenya:

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

- Nested Dinamic Routes <br/> Kita dapat menggabungkan rute dinamis dengan rute biasa dan bersarang. Berikut contoh struktur filenya:

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
