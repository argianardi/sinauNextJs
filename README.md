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
       </ul>
  </details>
- <details open>
       <summary><a href="#custom-error-page">Custom Error Page</a></summary>
       <ul>
         <li><a href="#buat-error-page">Buat Error Page</a></li>
         <li><a href="#menangkap-pathname-error-page">Menangkap Pathname Error Page</a></li>
         <li><a href="#menangkap-aspath-error-page">Menangkap asPath Error Page</a></li>
         <li><a href="#problem-dalam-penggunaan-aspath">Problem Dalam Penggunaan asPath</a></li>
       </ul>
  </details>
- <a href="#client-side-rendering">Client Side Rendering (CSR)</a>
- <a href="#server-side-rendering">Server Side Rendering (SSR)</a>
- <details open>
       <summary><a href="#rendering-dynamic-routes">Rendering Dynamic Routes</a></summary>
       <ul>
         <li><a href="#dynamic-api-routes">Dynamic API Routes</a></li>
         <li><a href="#membuat-dynamic-api-route">Membuat Dynamic API Route</a></li>
         <li><a href="#mengakses-parameter">Mengakses Parameter</a></li>
         <li><a href="#mengakses-dynamic-api-route-untuk-ui--front-end">Mengakses Dynamic API Route (Untuk UI / Front End)</a></li>
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

Global CSS adalah metode styling di mana kita dapat membuat dan mengaplikasikan styling (kelas dan properti css) yang berlaku secara global untuk seluruh aplikasi web kita. Ini berarti kelas dan properti css yang kita definisikan dalam file CSS global akan memengaruhi atau diterapkan ke semua halaman dan komponen dalam proyek Next JS kita. Berikut penerapannya di coding:

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
  Buat file CSS dengan ekstensi `.module.css`. Misalnya, jika kita memiliki komponen `MyComponent.jsx`, maka buat css module jadi `MyComponent.module.css`.

  ```
  // MyComponent.module.css

  .button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  ```

  Berikut skema struktur filenya

  ```
  my-nextjs-app/
  |-- components/
  |   |-- MyComponent.js
  |-- pages/
  |   |-- index.js
  |-- styles/
  |   |-- MyComponent.module.css
  |-- .babelrc
  |-- package.json
  |-- next.config.js
  |-- ...
  ```

- Import CSS Modul di file jsx/tsx <br/>
  Import CSS Module di komponen kita (misalnya, `MyComponent.tsx`), kita dapat mengimpor dan menggunakan kelas-kelas CSS dari modul tersebut.

  ```
  // MyComponent.jsx

  import React from 'react';
  import styles from './MyComponent.module.css';

  function MyComponent() {
    return (
      <button className={styles.button}>Tombol</button>
    );
  }

  export default MyComponent;
  ```

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

## Custom Error Page

Error page adalah halaman khusus yang ditampilkan ketika terjadi kesalahan, yaitu ketika user mengakses halaman dengan path yang tidak tersedia di dalam routing di aplikasi web kita. Berikut contoh penggunaannya di coding:

### Buat Error Page

- Buat file Error Page <br/>
  Buat file error page di dalam direktori pages dengan nama yang sesuai, Misalnya, 404.jsx atau 404.tsx. Berikut skema struktur foldernya:

  ```
  my-nextjs-app/
  |-- components/
  |   |-- ...
  |-- pages/
  |   |-- index.tsx
  |   |-- 404.tsx (Halaman Error 404 Kustom)
  |-- styles/
  |   |-- ...
  |-- .babelrc
  |-- package.json
  |-- next.config.js
  |-- ...
  ```

  Berikut contoh penggunaannya dicoding:

  ```
    import React, { useEffect, useState } from 'react';
  import styles from '@/styles/404.module.scss';
  import { useRouter } from 'next/router';

  const Custom404 = () => {
    const { asPath } = useRouter();
    const cleanAsPath = asPath.startsWith('/') ? asPath.slice(1) : asPath;
    console.log({ cleanAsPath });

    const [asPathclientRendered, setAsPathclientRendered] = useState('');

    useEffect(() => {
      setAsPathclientRendered(cleanAsPath);
    }, [asPath]);

    return (
      <div className={styles.error}>
        <img src="/404.png" alt="404" className={styles.error__image} />
        <p>
          Halaman <span className={styles.pageText}> {asPathclientRendered}</span>{' '}
          tidak ditemukan
        </p>
      </div>
    );
  };

  export default Custom404;
  ```

  [Source Code](https://github.com/argianardi/sinauNextJs/blob/errorPage/src/pages/404.tsx)

### Menangkap Pathname Error Page

Pathname adalah bagian dari URL yang mengacu pada jalur atau rute aktual dari halaman yang sedang dibuka. Singkatnya pathname ini akan mengambil path berdasarkan nama file di dalam folder pages di aplikasi next js kita. Sebagai contoh, misalnya kita akses URL dengan Pathname di error page yang kita buat filenya dengan nama `404.tsx`, berikut skema struktur filenya:

```
  my-nextjs-app/
  |-- ...
  |-- pages/
  |   |-- product.tsx
  |   |-- 404.tsx
  |-- ...
```

Kita coba akses URL `https://www.base-domain.com/best-product`, maka kita akan dapatkan value pathname `'/404'`

Contoh pengaplikasian Pathname di error page dapat dimanfaatkan untuk mencegah rendering component `Navbar` di error page. Kita bisa atur itu di component `Layout`. Berikut contoh penerapannya di coding:

```
import Navbar from '@/components/fragments/Header';
import { useRouter } from 'next/router';
import React from 'react';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  //-------------------------------------------------------------------
  const { pathname } = useRouter();
  const disabledNavbar = ['/auth/login', '/auth/register', '/404'];
  //-------------------------------------------------------------------

  return (
    <main>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
```

[Source Code](https://github.com/argianardi/sinauNextJs/blob/errorPage/src/components/layouts/AppShell/index.tsx)

### Menangkap asPath Error Page

asPath adalah keseluruhan URL lengkap dari halaman yang sedang ditampilkan, termasuk domain dan query string (jika ada). Sederhananya `asPath` ini akan menangkap seluruh url (kecuali base domain) yang ada di search bar browser yang telah diakses untuk mendapatkan page yang diinginkan. Sebagai contoh, misalnya kita akses URL dengan `asPath` di error page yang kita buat filenya dengan nama `404.tsx`, berikut skema struktur filenya:

```
  my-nextjs-app/
  |-- ...
  |-- pages/
  |   |-- product.tsx
  |   |-- 404.tsx
  |-- ...
```

Ketika kita coba akses URL `https://www.base-domain.com/best-product`, maka kita akan dapatkan value asPath `'/404'`.

Pemanfaatan asPath di error page dapat diaplikasikan untuk menangkap lokasi page yang dituju user (di mana page tersebut tidak terdaftar di dalam daftar route di aplikasi kita) sebagai keterangan tambahan di error page agar lebih informatif untuk user. Berikut contoh penggunaannya di coding:

```
import React, { useEffect, useState } from 'react';
import styles from '@/styles/404.module.scss';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const { asPath } = useRouter();
  const cleanAsPath = asPath.startsWith('/') ? asPath.slice(1) : asPath;
  console.log({ cleanAsPath });

  const [asPathclientRendered, setAsPathclientRendered] = useState('');

  useEffect(() => {
    setAsPathclientRendered(cleanAsPath);
  }, [asPath]);

  return (
    <div className={styles.error}>
      <img src="/404.png" alt="404" className={styles.error__image} />
      <p>
        Halaman <span className={styles.pageText}> {asPathclientRendered}</span>{' '}
        tidak ditemukan
      </p>
    </div>
  );
};

export default Custom404;
```

[Source Code](https://github.com/argianardi/sinauNextJs/blob/errorPage/src/pages/404.tsx)

### Problem Dalam Penggunaan asPath

Dalam Penggunaan `asPath` kita harus menggunakan `useEffect`, jika kita langsung mengambil `asPath` tanpa melibatkan `useEffect` seperti ini:

```
import React from 'react';
import styles from '@/styles/404.module.scss';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className={styles.error}>
      <img src="/404.png" alt="404" className={styles.error__image} />
       <div>{asPath} </div>
      {asPath}
    </div>
  );
};

export default Custom404;
```

Jika kita langsung mengambil dan menggunakan `asPath` tanpa `useEffect` seperti code di atas kita akan mengalami error yang terkait dengan Server-side Rendering (SSR) atau Hydration. Pesan ini muncul ketika ada perbedaan antara teks konten yang dihasilkan oleh server saat merender halaman pertama kali dan teks konten yang dihasilkan oleh client (browser) saat merender halaman selanjutnya. Misalnya kita coba akses page yang tidak terdaftar dalam routing aplikasi web kita dengan path `https://basedomain.com/best-product` maka akan muncul message erronya seperti ini:

- Error Message <br/>
  "Text content does not match server-rendered HTML", Ini mengindikasikan bahwa teks konten yang dihasilkan oleh server tidak cocok dengan teks konten yang dihasilkan oleh klien.
- Warning Message <br/>
  "Warning: Text content did not match. Server: "/404" Client: "/best-product"", Ini memberikan informasi lebih lanjut tentang perbedaan yang terdeteksi. Misalnya, dalam contoh ini teks konten yang dihasilkan oleh server adalah "/404" sedangkan teks konten yang dihasilkan oleh klien adalah "/best-product".
  `/404` dihasilkan dari nama file dalam aplikasi web kita, sedangkan `/best-product` dihasilkan dari path `https://basedomain.com/best-product` yang kita akses tadi.

Kedua error message di atas mengacu pada konsep hydrasi dalam SSR. Ketika halaman SSR pertama kali dimuat oleh server, Next js akan menciptakan tampilan HTML awal dan mengirimkannya ke klien. Kemudian, ketika halaman dimuat ulang oleh klien, Next.js akan mencoba menghidrasi (mengembalikan keadaan) komponen yang ada pada tampilan tersebut.

Perbedaan teks konten ini mungkin disebabkan oleh perbedaan dalam logika render atau perbedaan dalam data yang digunakan oleh server dan klien. Penting untuk memeriksa perbedaan tersebut dan memastikan bahwa teks konten yang dihasilkan oleh server dan klien sesuai. Ini bisa melibatkan pengecekan logika render pada sisi server dan klien, serta pemastian bahwa data yang digunakan konsisten.

Lebih lanjut, pesan kesalahan ini seringkali tidak menyebabkan masalah yang serius dalam pengembangan, namun perlu diwaspadai untuk memastikan kualitas render halaman yang konsisten antara server dan klien. Jika pesan kesalahan ini mengacu pada perbedaan yang tidak relevan atau yang tidak memengaruhi pengalaman pengguna, kita bisa mengabaikannya.

Untuk mengatasi error tersebut kita dapat menggunakan pendekatan client-side rendering (CSR) untuk menampilkan bagian dari halaman yang bergantung pada data yang hanya tersedia di sisi klien.

Dalam kasus kita, asPath adalah informasi yang bergantung pada routing di sisi klien, dan itu bukan masalah yang serius jika terdapat perbedaan dengan konten yang dihasilkan di sisi server.
kita dapat melakukan CSR untuk menampilkan asPath dengan menggunakan Hook useEffect. Tempatkan tampilan yang bergantung pada data klien di dalam useEffect. Ini akan memastikan bahwa tampilan ini hanya dimuat setelah komponen di-render di sisi klien. Berikut Contoh penggunaannya di coding:

```
import React, { useEffect, useState } from 'react';
import styles from '@/styles/404.module.scss';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const { asPath } = useRouter();
  const cleanAsPath = asPath.startsWith('/') ? asPath.slice(1) : asPath;
  console.log({ cleanAsPath });

  const [asPathclientRendered, setAsPathclientRendered] = useState('');

  useEffect(() => {
    setAsPathclientRendered(cleanAsPath);
  }, [asPath]);

  return (
    <div className={styles.error}>
      <img src="/404.png" alt="404" className={styles.error__image} />
      <p>
        Halaman <span className={styles.pageText}> {asPathclientRendered}</span>{' '}
        tidak ditemukan
      </p>
    </div>
  );
};

export default Custom404;
```

[Source Code](https://github.com/argianardi/sinauNextJs/blob/errorPage/src/pages/404.tsx)

## API Routes

API Routes adalah salah satu fitur yang powerfull di Next.js yang memungkinkan kita untuk membuat endpoint API langsung dari project Next js kita. API routes ini memungkinkan kita untuk mengekspos fungsi-fungsi yang dapat diakses melalui HTTP, seperti pengambilan data dari database, pemrosesan data, atau operasi lainnya. API Routes biasanya digunakan untuk menyediakan data untuk halaman web kita atau digunakan sebagai back-end untuk aplikasi client.

### Pengaplikasian API Routes

Berikut contoh penggunaannya di coding:

- Buat Folder pages/api <br/>
  Pertama kita harus membuat folder dengan nama `api` di dalam folder pages di project Next.js kita. Semua file yang kita letakkan di dalam folder `api` ini akan menjadi API Routes.
- Buat File API Route <br/>
  Buat file JavaScript atau TypeScript di dalam folder `pages/api`. Nama file ini akan menjadi bagian dari URL API kita. Misalnya, jika kita membuat file users.js, API akan dapat diakses melalui `base-domain/api/users`.
- Buat Logic API <br/>
  Di dalam file API Route tersebut, kita dapat menyediakan logika untuk API kita. Kita dapat mengimpor modul, mengambil data dari database, melakukan operasi tertentu, dan kemudian mengembalikan respons dalam format JSON. Berikut contoh penggunaannya di coding:

  ```
  import { NextApiRequest, NextApiResponse } from 'next';

  // Definisikan tipe data yang akan digunakan untuk respon API (untuk typescript)
  type Data = {
    status: boolean;
    statusCode: number;
    data: {
      id: number;
      name: string;
      price: number;
      size: string;
    }[];
  };

  // Export sebuah fungsi bernama handler yang akan menangani API request
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    // Data produk yang akan dikirim sebagai respon API
    const data = [
      {
        id: 101,
        name: 'Sepatu Olahraga Nike Air Zoom Pegasus 38',
        price: 120.0,
        size: '42',
      },
      {
        id: 202,
        name: 'Kamera DSLR Canon EOS 5D Mark IV',
        price: 2499.99,
        size: 'N/A',
      },
    ];

    // Mengirim respon JSON dengan status 200 (OK) dan data produk
    res.status(200).json({ status: true, statusCode: 200, data });
  }
  ```

  - `Export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) { ... }` <br/>
    Ini adalah eksport dari fungsi yang akan menangani API request. Fungsi handler menerima dua parameter:
    - req (NextApiRequest): Objek yang mewakili HTTP request yang masuk.
    - res (NextApiResponse<Data>): Objek yang digunakan untuk mengirim respon HTTP kembali ke client dengan tipe data Data yang telah didefinisikan sebelumnya.
  - Di dalam fungsi handler, ada deklarasi variabel `data` yang berisi array of objek produk yang akan digunakan sebagai data respon API.
  - `res.status(200).json({ status: true, statusCode: 200, data });` <br/>
    Ini adalah code yang mengirim respon JSON ke client:
    - Fungsi status(200) digunakan untuk mengatur kode status HTTP menjadi 200 (OK)
    - Kemudian json({ ... }) digunakan untuk mengirim data dalam format JSON sebagai respon. Data yang dikirimkan termasuk status, code status, dan array produk yang sudah didefinisikan sebelumnya.

- Lakukan integrasi API di Halaman/komponen kita (sisi front end) <br/>
  Kita dapat melakukan integrasi API yang telah kita buat di halaman Next.js kita, dengan menggunakan fetch atau library HTTP lainnya.

Berikut skema struktur folder untuk API routes di next js

```
project-root/
  ├─ pages/
  │   ├─ api/
  │   │   ├─ users.js
  │   │   ├─ products.js
  │   │   ├─ ...
  ├─ ...
```

### Kapan Menggunakan API Routes

Kita dapat menggunakan API Routes di Next.js dalam berbagai situasi, termasuk:

- Mengambil data dari database dan menyediakannya ke halaman web Kita.
- Menyediakan endpoint untuk aplikasi klien yang memerlukan data dinamis.
- Melakukan operasi otentikasi atau otorisasi sebelum memberikan respons.
- Menjalankan tugas-tugas terjadwal (cron jobs) di server.

## Client Side Rendering

Pengambilan data eksternal dan transformasi code menjadi representasi HTML dari sebuah UI yang terjadi di client (client-side). Pada client side rendering biasanya browser akan menerima struktur HTML kosong serti tag html, body dan div kemudian server akan mengirimkan serangkaian instruksi javascript untuk mengkonstrak atau membangun sebuah UI selanjutnya akan dilakukan rendering di sisi client. Ini berarti semua proses rendering tersebut dilakukan di device user (client-side).

```
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/product.module.scss';
import useSWR from 'swr';
import { fetcher } from '@/utils/swr/fetcher';

type productType = {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
};

const ProductPage = () => {
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     const response = await axios.get('api/products');
  //     // console.log(response.data.data);
  //     setProducts(response.data.data);
  //   } catch (error) {
  //     console.log('terjadi kesalahan: ', error);
  //   }
  // };

  const { data, error, isLoading } = useSWR('/api/products', fetcher);

  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>
      <div className={styles.product__content}>
        {isLoading ? (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        ) : (
          <>
            {data.data?.map((product: productType) => (
              <div key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
```

[Source Code](https://github.com/argianardi/sinauNextJs/blob/server-side-rendering/src/pages/product/csr.tsx)

## Server Side Rendering

- Pengambilan data eksternal dan transformasi kode menjadi representasi HTML dari sebuah UI terjadi sebelum hasilnya dikirim ke client.
- HTML akan di-generate kemudian HTML, data, dan javascript dikirim ke client. Proses ini dilakukan saat run time.
- HTML digunkaan untuk menampilkan halaman tapi belum interaktif, kemudian react akan melakukan proses hydration dengan menggunakan data dan javascript untuk membuat komponen menjadi interaktif.

Berikut contoh penggunaan server side rendering di coding:

```
import React from 'react';
import styles from '@/styles/product.module.scss';
import axios from 'axios';

type productType = {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
};

const ProductPage = ({ products }: { products: productType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>
      <div className={styles.product__content}>
        {products.length > 0 ? (
          <>
            {/* List product */}
            {products?.map((product: productType) => (
              <div key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          // Sekeleton
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/products');

    return {
      props: {
        products: response.data.data,
        apiError: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
```

[Source Code](https://github.com/argianardi/sinauNextJs/blob/server-side-rendering/src/pages/product/ssr.tsx)

Di dalam server side rendering ini bagian skeleton di dalam komponen productPage tersebut tidak akan berguna karena di SSR tidak memerlukan proses loading saat melakukan fetching API. Semua data eksternal dari API akan langsung diberikan secara bersamaan atau satu paket dengan komponen HTML yang kita gunakan.

## Static Site Generation

Static Site Generation (SSG) adalah salah satu teknik utama dalam Next.js yang memungkinkan kita untuk menghasilkan halaman web yang sangat efisien dan cepat dengan merender konten menjadi HTML statis selama build time. pada SSG ini, HTML akan di-generate di server namun hanya di-generate sekali saat build time. Sehingga content yang ditampilkan bersifat statis. Jadi ketika kita melakukan perubahan data di database maka data/content di website kita tidak langsung dirender/berubah, data/content tersebut akan berubah ketika kita melakukan build time (menjalankan perintah `npm run build`). Berikut contoh penggunaannya di coding:

```
import React from 'react';
import styles from '@/styles/product.module.scss';
import axios from 'axios';

type productType = {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
};

const ProductPage = ({ products }: { products: productType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>
      <div className={styles.product__content}>
        {products.length > 0 ? (
          <>
            {/* List product */}
            {products?.map((product: productType) => (
              <div key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          // Sekeleton
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/products');

    return {
      props: {
        products: response.data.data,
      },
    };
  } catch (error) {
    console.error('Terjadi kesalahan dalam mengambil data produk:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}
```

[Source Code](https://github.com/argianardi/sinauNextJs/blob/staticSiteGeneration/src/pages/product/ssg.tsx)

## Rendering Dynamic Routes

### Dynamic API Routes

Dynamic API routes adalah bagian dari aplikasi Next.js yang memungkinkan kita untuk mengatur cara kita meng-handle API request berdasarkan parameter yang diberikan. Ini sangat berguna ketika kita perlu menyajikan atau menerima data dari API berdasarkan nilai parameter tertentu. Misalnya, kita bisa mengambil data produk berdasarkan ID produk yang diberikan oleh user.

#### Membuat Dynamic API Route

Hal pertama langkah yang perlu dilakukan untuk membuat dynamic api route adalah membuat file dynamic api. Buat File Dynamic API di dalam folder api, buat file dengan format `[param].ts` di mana `[param]` adalah nama parameter yang ingin kita handle. Misalnya, jika kita ingin membuat API yang menerima parameter id, kita bisa membuat file dengan nama `[[...productId]].ts`. Berikut skema struktur file dan foldernya:

```
pages/
|-- api/
|   |-- [[...productId]].tsx
|-- ...
```

#### Mengakses Parameter

Di dalam direktori pages/api, kita memiliki file `[[...productId]].tsx`. Ini adalah dynamic API route yang akan menangani request dari rute dinamis. Ketika kita telah membuat dynamic API route, kita akan dapat mengakses nilai parameter dari URL. Berikut contoh penggunaannya di coding:

```
import { retrieveData, retrieveDataById } from '@/utils/db/service';

import { query } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

// Definisikan tipe data yang akan digunakan untuk respon API (untuk typescript)
type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

// Export sebuah fungsi bernama handler yang akan menangani API request
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log(req.query.productId); // if we access baseDomain/api/products/123 will be return ['products', '123']
  console.log(req.query.productId![1]); // if access we access baseDomain/api/products/123 will be return 123

  if (req.query.productId![1]) {
    const data = await retrieveDataById('products', req.query.productId![1]);
    res.status(200).json({ status: true, statusCode: 200, data });
  } else {
    // Data produk yang akan dikirim sebagai respon API
    const data = await retrieveData('products');
    // Mengirim respon JSON dengan status 200 (OK) dan data produk
    res.status(200).json({ status: true, statusCode: 200, data });
  }
}
```

<details open>
<summary>Penjelasan code:</summary>

- Export Function Handler <br/>
  Fungsi handler di-export dan digunakan untuk menangani permintaan API. Ini adalah inti dari dynamic API route. Fungsi ini menerima dua parameter: req (permintaan) dan res (respon).
- Akses Parameter Dinamis <br/>
  Pada code `console.log(req.query.productId![1])` digunakan untuk mengakses parameter dinamis dari URL. Dalam contoh ini parameter dinamis diperoleh dari `req.query.product![1]`, dengan code ini kita bisa mengambil parameter dinamis yang berada pada indeks ke-1 dari array productId. Misalnya kita coba akses menjalankan command `console.log(req.query.productId)` akan menghsilkan `
[ 'products', '123' ]`. Dan jika kita mencoba `http://localhost:3000/api/products/123` di browser, kita akan mendapatkan `123` di terminal.
- Pemeriksaan Parameter Dinamis <br/>
Selanjutnya, ada blok if yang memeriksa apakah ada parameter dinamis yang diberikan dalam URL. Jika ada, kode akan menjalankan retrieveDataById untuk mengambil data berdasarkan ID (diperoleh dari req.query / query request yang diakses oleh user) yang diberikan dan mengirimkannya sebagai respon API dengan status 200.
Conditional if tersebut memanfaatkan `req.query` yang valuenya di dapatkan dari paramater dinamis pada url yang diakses oleh user tadi
</details>

### Mengakses Dynamic Api Route (Untuk UI / Front End)

Setelah membuat dynamic API route, kita dapat untuk kebutuhan UI di sisi Front End. Dalam pengembangan aplikasi web, seringkali kita perlu menangani rute yang dinamis juga di sisi UI, di mana halaman berubah berdasarkan parameter tertentu dalam URL. Next.js menyediakan berbagai cara untuk merender halaman dinamis dengan mudah menggunakan Client-Side Rendering (CSR), Server-Side Rendering (SSR), dan Static Site Generation (SSG).

## Kumpulan Fitur

### Conditional Rendering Sebuah Component di Page Tertentu

Kita bisa membuat conditional rendering untuk membuat sebuah komponen hanya akan tampil di page tertentu saja. Misalnya setelah kita membuat komponen `Layout` yang membuat semua page akan secara otomatis memuat komponen `Navbar`, tapi kita ingin membuat komponen `Navbar` tersebut hanya akan dirender/ditampilkan di semua halaman kecuali di halaman `Login` dan `Register`. Kita bisa melakukannya dengan memanfaatkan `useRouter` dari Next js, tepatnya di key `pathname`. Kita bisa memanfaatkan query parameters yang ada di dalamnya sebagai trigger. Berikut contoh penggunaannya di coding:

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

- get All data/get by id sebaiknya pakai SSR
