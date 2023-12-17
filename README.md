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
         <li><a href="#nested-dynamic-routes">Nested Dinamic Route</a></li>
         <li><a href="#link">Link</a></li>
         <li><a href="#nested-dynamic-routes">Nested Dinamic Route</a></li>
         <li><a href="#imperative-routing">Imperative Routing</a></li>
       </ul>
  </details>
- <details open>
       <summary><a href="#kumpulan-fitur">Kumpulan Fitur</a></summary>
       <ul>
         <li><a href="#conditional-rendering-sebuah-component-di-page-tertentu">Conditional Rendering Komponen di pages Tertentu</a></li>
       </ul>
  </details>
- <details open>
       <summary><a href="#styling">Styling</a></summary>
       <ul>
         <li><a href="#global-css">Global CSS</a></li>
         <li><a href="#css-modules">Module CSS</a></li>
         <li><a href="#sass-syntactically-awesome-style-sheets">SASS</a></li>
         <li><a href="#menggunakan-tailwind-css">Tailwind</a></li>
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

### Imperative Routing

Merupakan pendekatan dalam Next js yang memungkinkan kita untuk melakukan navigasi dari satu halaman ke halaman lain secara programatik, misalnya setelah mengeksekusi suatu tindakan atau dalam respons terhadap suatu peristiwa. Imperative routing dibahas lebih lengkap [di sini](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating#imperative-routing).

<details>
    <summary>Arti programatik</summary>
    Mengendalikan atau menjalankan suatu tindakan atau operasi berdasarkan logika atau instruksi dari kode program, bukan secara langsung melalui interaksi pengguna.
</details>

Berikut contoh penggunaannya di coding:

```
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    //-----------------------------------------------
    router.push('/product');
    //-----------------------------------------------
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        Belum punya akun?, Register <Link href={'/auth/register'}>di sini</Link>{' '}
      </p>
    </div>
  );
};

export default LoginPage;
```

[source code](https://github.com/argianardi/sinauNextJs/blob/routes/src/pages/auth/login.tsx)

Di contoh di atas setelah user menekan button Login, user akan di-direct ke halaman product, menggunakan `userRouter` dari Next js.

Berikut contoh case lain untuk men-direct user ke halaman lain ketika user belum login:

```
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const About = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      router.push('/auth/login');
    }
  }, []);

  return <div>About</div>;
};

export default About;
```

[source code](https://github.com/argianardi/sinauNextJs/blob/routes/src/pages/about/index.tsx)

Sehingga ketika user masuk ke halaman about dalam keadaan belum login maka user akan langsung di-direct ke halaman login.

## Styling

Di dalam Next JS kita dapat melakukan styling dengan beberapa cara, semuanya dibahas secara detail di dokumentasi resmi [Next JS](https://nextjs.org/docs/app/building-your-application/styling):

### Global CSS

Global CSS adalah metode styling di mana kita dapat membuat dan mengaplikasikan styling (kelas dan properti css) yang berlaku secara global untuk seluruh aplikasi web kita. Ini berarti kelas dan properti css yang kita definisikan dalam file CSS global akan memengaruhi atau diterapkan ke semua halaman dan komponen dalam proyek Next JS kita. Global css hanya dapat digunakan untuk file `_app.js` atau `_app.tsx` saja. Berikut penerapannya di coding:

- Buat File CSS global <br/>
  Buat file CSS global dalam folder style dengan nama bebas misalnya dengan nama global.css atau styles.css yang nantinya akan diisi kelas dan properti css yang akan berlaku secara global. Berikut skema struktur foldernya:
  ```
  my-nextjs-app/
  |-- components/
  |   |-- Button.js
  |-- pages/
  |   |-- index.js
  |   |-- about.js
  |-- styles/
  |   |-- global.css
  |-- .babelrc
  |-- package.json
  |-- next.config.js
  |-- ...
  ```
- Import File Global CSS <br/>
  Import file global css di komponen atau modul dengan tinggkatan tertinggi dalam dalam projek Next JS, Biasanya di file `_app.js` atau `_app.tsx`. Berikut contoh penggunaannya di coding:

  ```
  import AppShell from '@/components/layouts/AppShell';
  //------------------------------------------------------------------------------------------------------
  import '@/styles/globals.css';
  //------------------------------------------------------------------------------------------------------
  import type { AppProps } from 'next/app';
  import Head from 'next/head';

  export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
        <Head>
          <title>Sinau Next JS</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/vercel.svg" />
        </Head>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </>
    );
  }
  ```

  [Source Code](https://github.com/argianardi/sinauNextJs/blob/styling/src/pages/_app.tsx)

- Buat kelas dan properti CSS <br/>
  Buat kelas dan properti CSS di dalam file global CSS, yang nantinya akan diaplikasikan secara global. Misalnya, kita ingin menentukan style untuk elemen HTML seperti `<body>` atau `<a>`, atau kita menambahkan gaya untuk komponen yang akan digunakan di seluruh aplikasi. Berikut contoh penggunaannya di coding:

  ```
  /* global.css */

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  a {
    color: blue;
    text-decoration: none;
  }
  ```

  Dengan begitu kita dapat menerapkan styling CSS di atas ke seluruh aplikasi kita tanpa perlu mengimpor atau mendefinisikan style di setiap komponen atau halaman secara terpisah. Ini memungkinkan kita untuk memiliki konsistensi dalam tampilan dan merubah tampilan secara global dengan mudah jika diperlukan.

### CSS Modules

CSS Modules adalah pendekatan yang memungkinkan kita untuk mengisolasi style komponen dengan membuat file CSS yang hanya berlaku untuk komponen tertentu saja. Ini dapat menghindari konflik nama kelas CSS antar komponen dalam aplikasi kita. Berikut contoh penggunaannya di coding:

- Buat file Css Modul <br/>
  Buat file CSS dengan ekstensi `.module.css`. Misalnya, jika kita memiliki komponen `Login.tsx`, maka buat css module jadi `Login.module.css`.

  ```
  // Login.module.css

  .layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  ```

  [[source code](https://github.com/argianardi/sinauNextJs/blob/styling/src/views/Auth/Login/Login.module.css)]

  Berikut skema struktur filenya

  ```
  my-nextjs-app/
  |-- components/
  |   |-- MyComponent.tsx
  |-- pages/
  |   |-- auth/
  |   |   |-- login.tsx
  |   |-- index.tsx
  |-- styles/
  |   |-- MyComponent.module.css
  |-- views
  |   |-- Auth/
  |   |   |-- Login/
  |   |   |   |-- index.tsx
  |   |   |   |-- Login.module.css
  |-- .babelrc
  |-- package.json
  |-- next.config.js
  |-- ...
  ```

  [[source code](https://github.com/argianardi/sinauNextJs/tree/styling/src)]

- Import CSS Modul di file jsx/tsx <br/>
  Import CSS Module di komponen kita (misalnya, `Login.tsx`), kita dapat mengimpor dan menggunakan kelas-kelas CSS dari modul tersebut.

  ```
    // src/views/Auth/Login/index.tsx

    import Link from 'next/link';
  import { useRouter } from 'next/router';
  import React from 'react';

  import style from './Login.module.css';

  const LoginViews = () => {
    const { push } = useRouter();

    const handleLogin = () => {
      push('/product');
    };

    return (
      <div className={style.layout}>
        <h1>Login Page</h1>
        <button onClick={handleLogin}>Login</button>
        <p>
          Belum punya akun?, Register <Link href={'/auth/register'}>di sini</Link>{' '}
        </p>
      </div>
    );
  };

  export default LoginViews;
  ```

  [[source code](https://github.com/argianardi/sinauNextJs/blob/styling/src/views/Auth/Login/index.tsx)]

### CSS in JS

Kita bisa menambahkan class css di dalam tag html secara langsung menggunakan properti `style`. Berikut contoh penggunaannya di coding:

```
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import style from './Login.module.css';

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push('/product');
  };

  return (
    <div className={style.layout}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p
        style={{
          border: '1px solid blue',
          marginTop: '10px',
          borderRadius: '10px',
          padding: '8px',
        }}
      >
        Belum punya akun?, Register <Link href={'/auth/register'}>di sini</Link>{' '}
      </p>
    </div>
  );
};

export default LoginViews;
```

[[source code](https://github.com/argianardi/sinauNextJs/blob/styling/src/views/Auth/Login/index.tsx)]

### SASS (Syntactically Awesome Style Sheets)

SASS adalah Preprosesor CSS populer yang memperluas CSS dengan fitur seperti variabel, nested rules dan mixins. Berikut beberpa keunggulan dari SASS:

- Variabel <br/>
  Kita dapat mendefinisikan variabel untuk warna, ukuran, dan nilai-nilai yang sering digunakan dalam style kita, yang memungkinkan kita dengan mudah mengubah tampilan seluruh situs dengan mengubah satu variabel.
- Nesting <br/>
  Kita dapat menyusun aturan CSS dengan cara nesting, yang membuat strukturnya lebih terorganisasi dan membantu menghindari penulisan kode yang berulang.
- Mixin <br/>
  Kita dapat membuat mixin, yaitu sekelompok aturan CSS yang dapat digunakan kembali, yang mengurangi pengulangan kode dan memudahkan pemeliharaan.
- Inheritance <br/>
  Sass memungkinkan untuk menerapkan sifat-sifat CSS dari satu selektor ke yang lain, yang mengurangi pengulangan dan memungkinkan perubahan dengan cepat.

Berikut contoh penggunaannya di coding:

- Instal Sass Dependency, dengan command :
  ```
  npm install sass
  ```
- Buat File Sass <br/>
  Buat file Sass (dengan ekstensi .scss atau .sass) dalam direktori yang sesuai dengan komponen atau halaman yang akan menggunakannya.Contohnya kita buat styles.module.scss

  ```
  // styles.module.scss

  $primary-color: #3498db;

  .button {
    background-color: $primary-color;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  ```

  Berikut skema struktur filenya:

  ```
  my-nextjs-app/
  |-- components/
  |   |-- MyComponent.js
  |-- pages/
  |   |-- index.js
  |-- styles/
  |   |-- styles.module.scss
  |-- .babelrc
  |-- package.json
  |-- next.config.js
  |-- ...
  ```

- Import Sass <br/>
  Import file Sass yang kita buat ke dalam komponen atau halaman yang akan menggunakannya. Contohnya di MyComponent.tsx:

  ```
  import React from 'react';
  import styles from './styles.module.scss';

  function MyComponent() {
    return (
      <button className={styles.button}>Tombol</button>
    );
  }

  export default MyComponent;
  ```

Atau kita juga bisa menggunakan class yang valuenya dinamis dan value tersebut berasal dari file lain (scss global).
Misalnya kita ingin menggunakan class `background-color` yang valuenya dinamis dan berasal dari file scss global yaitu `color.scss` untuk file css module `Register.module.scss`. Berikut contoh penggunaan glocal scss yang digunakan untuk mendeklarasikan value color di coding:

```
styles/color.scss

$schema: (
  primary: #0f788d,
);

```

[[source code](https://github.com/argianardi/sinauNextJs/blob/styling/src/styles/color.scss)]

Kemudain kita dapat menggunakan value color di global scss tadi untuk module scss register di dalam file `Register.module.scss`. berikut contoh penggunaannya di coding:

```
views/Auth/Register/Register.module.scss

@import '@/styles/color.scss';

.layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: map-get($map: $schema, $key: primary);
}
```

[[source code](https://github.com/argianardi/sinauNextJs/blob/styling/src/views/Auth/Register/Register.module.scss)]

### Menggunakan Tailwind CSS

Konfigurasi tailwind untuk next page router sudah terdokumentasi dengan baiki [disini](https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css)

## Kumpulan Fitur

### Conditional Rendering Sebuah Component di Page Tertentu

Kita bisa membuat conditional rendering untuk membuat sebuah komponen hanya akan tampil di page tertentu saja. Misalnya setelah kita membuat komponen `Layout` yang membuat semua page akan secara otomatis memuat komponen `Navbar`, kita ingin membuat komponen `Navbar` tersebut hanya akan dirender/ditampilkan di semua halaman kecuali di halaman `Login` dan `Register`. Kita bisa melakukannya menggunakan `useRouter` dari Next js, tepatnya di key `pathname`. Kita bisa memanfaatkan query parameters yang ada di dalamnya sebagai trigger. Berikut contoh penggunaannya di coding:

```
import Navbar from '@/components/fragments/Header';
import { useRouter } from 'next/router';
import React from 'react';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const { pathname } = useRouter();
  const disabledNavbar = ['/auth/login', '/auth/register'];

  return (
    <main>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
```

[sorce code](https://github.com/argianardi/sinauNextJs/blob/features/src/components/layouts/AppShell/index.tsx)

<details open>
<summary>Penjelasan code:</summary>

Pada code conditional rendering `{!disabledNavbar.includes(pathname) && <Navbar />}` akan diperiksa apakah `pathname` saat ini (page yang sedang di-render) sama atau tidak dengan path yang ada dalam array `disabledNavbar`. Jika tidak sama, maka Navbar akan ditampilkan di dalam page saat ini. Ini digunakan untuk mengendalikan apakah Navbar akan muncul atau tidak berdasarkan path saat ini.

</details>
