## Key Word

- <details open>
    <a href="#atomic-design">Atomic Desigin</a>
  </details>
- <details open>
       <summary><a href="#routing">Routing</a></summary>
       <ul>
         <li><a href="#basic-routes">Basic Route</a></li>
         <li><a href="#nested-routes">Nested Route</a></li>
         <li><a href="#dynamic-routes-dan-nested-dinamic-routes">Dynamic Route dan Nested Dinamic Routes</a></li>
         <li><a href="#catch-all-routes">Catch All Routes</a></li>
         <li><a href="#nested-dynamic-routes">Nested Dinamic Route</a></li>
         <li><a href="#link">Link</a></li>
         <li><a href="#nested-dynamic-routes">Nested Dinamic Route</a></li>
         <li><a href="#imperative-routing">Imperative Routing</a></li>
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
- <details open>
       <summary><a href="#custom-error-page">Custom Error Page</a></summary>
       <ul>
         <li><a href="#buat-error-page">Buat Error Page</a></li>
         <li><a href="#menangkap-pathname-error-page">Menangkap Pathname Error Page</a></li>
         <li><a href="#menangkap-aspath-error-page">Menangkap asPath Error Page</a></li>
         <li><a href="#problem-dalam-penggunaan-aspath">Problem Dalam Penggunaan asPath</a></li>
       </ul>
  </details>
- <details open>
  <summary><a href="#api-routes">API Routes</a></summary>
  <ul>
     <li><a href="#pembuatan-api-routes-sisi-backend">Buat API Routes (Sisi Backend)</a></li>
      <li><a href="#fetch-api-dari-api-rotes-sisi-front-end">Fetch API dari API Routes (sisi Front End)</a></li>
  </ul>
  </details>
- <a href="#client-side-rendering">Client Side Rendering (CSR)</a>
- <a href="#server-side-rendering">Server Side Rendering (SSR)</a>
- <details open>
    <summary><a href="#kumpulan-fitur">Kumpulan Fitur</a></summary>
     <ul>
       <li><a href="#conditional-rendering-sebuah-component-di-page-tertentu">Conditional Rendering Komponen di pages Tertentu</a></li>
       <li><a href="#membuat-title-page-dinamis-berganti-sesuai-page-yang-dibuka">Membuat Title Page Dinamis Suai Page yang Dibuka </a></li> 
      </ul>
  </details>

## Istilah - Istilah Di Dunia Software Development

- Compiling <br/>
  Merupakan proses mentransformasi kode dari bahasa satu ke dalam bahasa lain atau versi dari bahasa tersebut.
- Minifying <br/>
  Proses menghapus formatting dan komentar yang tidak digunakan tanpa mengubah fungsionalitas kode dengan tujuan untuk meningkatkan kinerja aplikasi dengan mengurangi ukuran file.

- Bundling <br/>
  Proses menggabungkan file ke dalam bundel yang dioptimalkan untuk browser, dengan tujuan mengurangi jumlah permintaan file saat pengguna mengunjungi halaman web.
- Code Spliting <br/>
  Proses pemisahan bundel menjadi bagian - bagian kecil yang dibutuhkan oleh setiap entry point (url/path) dengna tujuan untuk meningkatkan initial load time aplikasi dengan hanya memuat kode yang diperlukan untuk menjalankan halaman tersebut.
- Build Time <br/>
  Mengacu pada waktu dimana saat aplikasi sedang di-build (mentransformasi kode menjadi production environment) hingga akhirnya aplikasi siap digunakan.
- Runtime <br/>
  Mengacu pada waktu saat aplikasi sudah selesai di-build dan di-deploy.
- Client <br/>
  Merujuk ke browser pada perangkat pengguna yang mengirimkan request ke server yang kemudian diterjemahkan menjadi UI.
- Server <br/>
  Mengacu pada perangkat yang menyimpan kode aplikasi yang menerima permintaan dari client, melakukan komputasi, dan mengirimkan kembali respons yang sesuai.
- Rendering <br/>
  Proses mengonversi kode menjadi representasi HTML dari sebuah UI yang dapat dilakukan di client maupun di server dan dapat terjadi pada saat build time maupun runtime.
- Client Side Rendering <br/>
  Pengambilan data external dan transformasi kode menjadi representasi HTML dari sebuah UI terjadi di client.
- Pre-Rendering (Server Side Rendering & Static Site Generation) <br/>
  - Pengambilan data eksternal (dari api) dan transformasi kode menjadi representasi HTML dari sebuah UI terjadi sebelum hasilnya dikirim ke client.
  - HTML akan di-generate kemudian HTML, data dan javascript dikirim ke client.
  - HTML digunakan untuk menampilkan UI tapi belum interaktif, sedangkan react akan melakukan proses hydration dengan menggunakan data dan javascript untuk membuat komponen menjadi interaktif.
- Server Side Rendering <br/>
  HTML akan di-generate kemudian HTML, data dan javascript dikirm ke client yang dilakukan saat run time.
- Static Site Generation <br/>
  HTML akan di generate di server namun hanya di-generate sekali saat build time. Sehingga content yang ditampilkan bersifat statis.


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

Routing adalah bagian penting dari pengembangan aplikasi web yang memungkinkan user berpindah dari satu halaman ke halaman lainnya. Routing di Next js dibahas lebih lengkap [di sini](https://nextjs.org/docs/pages/building-your-application/routing).

Di Next js, routing berfokus pada folder pages. Setiap file yang dibuat di dalam folder pages secara otomatis menjadi rute yang dapat diakses di aplikasi kita. Misalnya, file pages/index.js akan menjadi halaman utama, dan pages/about.js akan menjadi halaman "About". Ini sangat memudahkan pengaturan dan pemeliharaan rute, karena kita tidak perlu mengkonfigurasi rute secara manual seperti pada beberapa frame work lain.

Nextjs mendukung berbagai jenis rute:

### Basic Routes

Kita dapat membuat rute dasar hanya dengan membuat file/folder di dalam folder pages. Misalnya, `pages/contact.tsx` atau `pages/contact/index.tsx` akan menghasilkan URL `baseDomain/contact`. Basic routes dibahas lebih lengkap [disini](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts). <br/>
Berikut struktur filenya:

```
pages/
|-- about/
|   |  |-- index.tsx  // page about
|-- index.tsx         // Beranda
|-- contact.tsx       // page contact
|-- ...
```

[[source code](https://github.com/argianardi/sinauNextJs/tree/routes/src/pages)]

Sehingga jika user ingin mengakses page contact, dapat dilakukan menggunakan url `baseDomain/contact`.

### Nested Routes

Merupakan cara untuk mengatur beberpa halaman yang diletakkan di halaman lain. Ini membantu membuat struktur navigasi yang lebih dalam dan terorganisir. Nested routes dibahas lebih lengkap [disini](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts). Misalnya kita ingin membangun situs artikel dengan struktur berikut:

```
pages/
|-- index.tsx             // Beranda
|-- category/
|   |   |-- index.tsx     // Daftar semua category artikel
|   |   |-- news.tsx      // Daftar semua artikel yang ber-category news
|   |   |-- sports.tsx    // Daftar semua artikel yang ber-category sports
|-- ...
```

[[source code](https://github.com/argianardi/sinauNextJs/tree/routes/src/pages)]

URL yang dihasilkan dari struktur file di atas adalah:

- pages/index.tsx <br/>
  - Merupakan Halaman Beranda.
  - Url: `/`,
  - Contoh penggunaan url: `https://www.basedomain.com/`
- pages/category/index.tsx <br/>
  - Merupakan page category menampilkan daftar category artikel.
  - Url: `/category`,
  - Contoh penggunaan url: `https://www.basedomain.com/category`
- pages/category/news <br/>
  - Merupakan page news yaitu salah satu category yang ada di dalam page category, menampilkan daftar artikel yang dikategorikan sebagai news.
  - Url: `/category/news`,
  - Contoh penggunaan url `https://www.basedomain.com/category/news`
- pages/category/sports <br/>
  - Merupakan page sports yaitu salah satu category yang ada di dalam page category, menampilkan daftar artikel yang dikategorikan sebagai sports.
  - Url: `/category/sports`
  - Contoh penggunaan url `https://www.basedomain.com/category/sports`.

### Dynamic Routes dan Nested Dinamic Routes

Next.js memungkinkan kita untuk membuat rute dinamis menggunakan tanda kurung siku `[]`. Dynamic Routes memungkinkan kita membuat rute dinamis berdasarkan nilai parameter yang diberikan dalam URL. Dynamic routes dibahas lebih lengkap [disini](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#convention). Misalnya kita ingin membuat halaman movie, berikut contoh struktur filenya:

```
pages/
|-- movies/
|   |-- index.tsx              // Halaman daftar semua film
|   |-- [genre]/
|       |-- index.tsx          // Halaman daftar film berdasarkan genre
|       |-- [movieTitle].tsx         // Halaman detail film berdasarkan
|       |-- review/
|           |-- [reviewId].tsx // Halaman detail review film berdasarkan reviewId
|--...
```

[[soruce code](https://github.com/argianardi/sinauNextJs/tree/routes/src/pages/movies)]

URL yang dihasilkan dari struktur file di atas adalah:

- movies/index.tsx <br/>
  - Merupakan page yang menampilkan daftar semua genre movie.
  - Url: `/movies`,
  - Contoh penggunaan url: `https://www.basedomain.com/movies`
- movies/[genre]/index.tsx <br/>
  - Menampilkan daftar movie berdasarkan genre tertentu.
  - Url: `/movies/{parameter bebas}`.
  - Contoh penggunaan url: `https://www.basedomain.com/movies/comedy`
- movies/[genre]/[movieTitle].tsx:
  - Halaman ini menampilkan detail movie berdasarkan judul movie.
  - Url: `/movies/{parameter bebas}/{parameter bebas}`.
  - Contoh penggunaan url: /movies/comedy/inception, /movies/drama/shawshank-redemption, dst.
- movies/[genre]/review/[reviewId].tsx:
  - Nested dynamic route untuk menampilkan halaman detail review movie berdasarkan reviewId.
  - Url: `/movies/{parameter bebas}/review/{parameter bebas}`.
  - Contoh penggunaan url: /movies/comedy/inception/review/123, /movies/drama/shawshank-redemption/review/456, dst.

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

Berikut code di file `[...slug].tsx`:

```
import { useRouter } from 'next/router';
import React from 'react';

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string[] };
  //if access baseDomain.com/sports/monday/3 hottest news today
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

- pages/index.tsx, adalah halaman beranda situs kita.
- pages/blog/index.tsx, adalah halaman daftar kategori di blog.
- pages/blog/[...slug].tsx,
  - Catch-All Routes yang akan menangani segmen path setelah /blog/. Ini adalah tempat utama di mana kita akan mengambil semua kategori dan artikel.
  - Url: `/blog/{parameter bebas}/{parameter bebas}/{parameter bebas}/{parameter bebas}/{parameter bebas}`
  - Contoh Penggunaan: baseDomain.com/sports/footbal/top-headline

### Optional Catch-All Routes

Optional Catch-All Routes dapat dijadikan opsional dengan menyertakan parameter dalam tanda kurung siku ganda `[[...segmen]]`. Berikut contoh struktur filenya:

```
- pages/
  - sop/
    - [[...slug]].tsx
```

[[source code](https://github.com/argianardi/sinauNextJs/tree/routes/src/pages/shop)]

`pages/shop/[[...slug]].tsx` akan cocok dengan paramter kosong seperti `/shop`, dan juga url yang disertai parameter seperti `/shop/clothes`, `/shop/clothes/tops` dan `/shop/clothes/tops/t-shirts`.

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

## Custom Error Page

Error page adalah halaman khusus yang ditampilkan ketika terjadi kesalahan, yaitu ketika user mengakses halaman dengan path yang tidak tersedia di dalam routing di aplikasi web kita. Berikut contoh penggunaannya di coding:

### Buat Error Page

- Buat file Error Page <br/>
  Buat file error page di dalam direktori pages dengan nama yang sesuai, Misalnya, 404.tsx atau 404.jsx, \_error.tsx atau \_error.jsx. Berikut skema struktur foldernya:

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

### Pembuatan API Routes (Sisi Backend)

Berikut contoh penggunaannya di coding:

- Buat Folder pages/api <br/>
  Pertama kita harus membuat folder dengan nama `api` di dalam folder pages di project Next.js kita. Semua file yang kita letakkan di dalam folder `api` ini akan menjadi API Routes.
- Buat File API Route <br/>
  Buat file JavaScript atau TypeScript di dalam folder `pages/api`. Nama file ini akan menjadi end point untuk API kita. Misalnya, jika kita membuat file dengan nama products-data-local.ts, API yang kita dapat diakses melalui url `base-domain/api/products-data-local`.
- Buat Logic API <br/>
  Di dalam file API Route tersebut, kita dapat menyediakan logika untuk API kita. Kita dapat mengimpor modul, mengambil data dari database (untuk contoh ini kita menggunakan fake data yang kita asign sendiri), melakukan operasi tertentu, dan kemudian mengembalikan respons dalam format JSON.
  Berikut skema struktur folder untuk API routes di next js

  ```
  project-root/
    ├─ pages/
    │   ├─ api/
    │   │   ├─ hello.ts
    |   |   ├─ products-data-local.ts
    │   │   ├─ products.ts
    │   │   ├─ ...
    ├─ ...
  ```

  Berikut contoh penggunaannya di coding:

  ```
  import { NextApiRequest, NextApiResponse } from 'next';

  // Define tipe data untuk respon API (khusus untuk typescript)
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
        price: 120000,
        size: '42',
      },
      {
        id: 202,
        name: 'Kamera DSLR Canon EOS 200D',
        price: 249000,
        size: 'N/A',
      },
    ];

    // Mengirim respon JSON dengan status 200 (OK) dan data produk
    res.status(200).json({ status: true, statusCode: 200, data });
  }
  ```

  [[source code](https://github.com/argianardi/sinauNextJs/blob/API-Route/src/pages/api/products-data-local.ts)]

- `Export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) { ... }` <br/>
  Ini adalah eksport dari fungsi yang akan menangani API request. Fungsi handler menerima dua parameter:
  - req (NextApiRequest): Objek yang mewakili HTTP request yang masuk.
  - res (NextApiResponse<Data>): Objek yang digunakan untuk mengirim respon HTTP kembali ke client dengan tipe data Data yang telah didefinisikan sebelumnya.
- Di dalam fungsi handler, ada deklarasi variabel `data` yang berisi array of objek produk yang akan digunakan sebagai data respon API.
- `res.status(200).json({ status: true, statusCode: 200, data });` <br/>
  Ini adalah code yang mengirim respon JSON ke client:
  - Fungsi status(200) digunakan untuk mengatur kode status HTTP menjadi 200 (OK)
  - Kemudian json({ ... }) digunakan untuk mengirim data dalam format JSON sebagai respon. Data yang dikirimkan termasuk status, code status, dan array produk yang sudah didefinisikan sebelumnya.
- Selanjutnya coba tes api yang kita buat, di browser dengan url `baseDomain/api/namaFile`.

[[source code](https://github.com/argianardi/sinauNextJs/tree/API-Route/src/pages/api)]

### Fetch API dari API Rotes (Sisi Front End)

Setelah berhasil membuat API selanjutnya kita buat consume api tersebut di sisi front end, berikut langkah - langkahnya:

- Buat Komponen view di dalam folder view, berikut contoh penggunaannnya di coding:

  ```
  import React from 'react';

  type Product = {
    id: number;
    name: string;
    price: number;
    size: string;
  };

  const ProductView = ({ products }: { products: Product[] }) => {
    return (
      <div>
        <h2>Daftar Produk</h2>
        <ul>
          {products?.map((product) => (
            <li>
              {product.name} - {`Size: ${product.size}`}
              <br />
              Harga: Rp {product.price.toLocaleString('id-ID')}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default ProductView;
  ```

  [[source code]](https://github.com/argianardi/sinauNextJs/blob/API-Route/src/views/Product/ProductView.tsx)

  - Selanjutnya buat file page, lakukan fetching api dari api routes yang kita buat, import komponen view yang kita buat tadi dan kirimkan data hasil fetch api dari api routes ke komponen view melalui prop. Berikut contoh penggunaannya di coding:

    ```
    import ProductView from '@/views/Product/ProductView';
    import React, { useEffect, useState } from 'react';

    const ProductDataLocalPage = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch('/api/products-data-local')
          .then((res) => res.json())
          .then((data) => {
            setProducts(data?.data);
          });
      }, []);

      return <ProductView products={products} />;
    };

    export default ProductDataLocalPage;
    ```

    [[source code](https://github.com/argianardi/sinauNextJs/blob/API-Route/src/pages/product-data-local/index.tsx)]

Berikut contoh struktur filenya:

```
project-root/
  ├─ pages/
  │   ├─ api/
  │   │   ├─ hello.ts
  |   |   ├─ products-data-local.ts
  │   │   ├─ products.ts
  │   ├─ product-data-local/
  |   |   ├─ index.tsx
  ├─ views/
  |   ├─ Product
  │   │   ├─ ProductView.tsx
  │   │   ├─ ...
  ├─ ...
```

[[source code](https://github.com/argianardi/sinauNextJs/tree/API-Route/src)]

### Kapan Menggunakan API Routes

Kita dapat menggunakan API Routes di Next.js dalam berbagai situasi, termasuk:

- Mengambil data dari database dan menyediakannya ke halaman web Kita.
- Menyediakan endpoint untuk aplikasi klien yang memerlukan data dinamis.
- Melakukan operasi otentikasi atau otorisasi sebelum memberikan respons.
- Menjalankan tugas-tugas terjadwal (cron jobs) di server.

## Client Side Rendering

Pengambilan data eksternal dan transformasi code menjadi representasi HTML dari sebuah UI yang terjadi di client (client-side). Pada client side rendering biasanya browser akan menerima struktur HTML kosong serti tag html, body dan div kemudian server akan mengirimkan serangkaian instruksi javascript untuk mengkonstrak atau membangun sebuah UI selanjutnya akan dilakukan rendering di sisi client. Ini berarti semua proses rendering tersebut dilakukan di device user (client-side).

Misalnya kita ingin melakaukan fetch api product dari server menggunakan Client Side Rendering, dapat dilakukan dengan langkah - langkah berikut:

- Buat file component view product, berikut contoh penggunaannya dicoding:

  ```
  //src/views/ProductFromServer.tsx

  import React from 'react';

  import styles from '@/views/Product/Product.module.scss';

  type product = {
    category: string;
    id: string;
    image: string;
    name: string;
    price: number;
  };

  const ProductFromServer = ({ products }: { products: product[] }) => {
    return (
      <div className={styles.product}>
        <h1 className={styles.product__title}>Product Page</h1>
        <div className={styles.product__content}>
          {products.length === 0 ? (
            <div className={styles.product__content__skeleton}>
              <div className={styles.product__content__skeleton__image} />
              <div className={styles.product__content__skeleton__name} />
              <div className={styles.product__content__skeleton__category} />
              <div className={styles.product__content__skeleton__price} />
            </div>
          ) : (
            <>
              {products?.map((product: product) => (
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
                  <p
                    className={`text-sm ${styles.product__content__item__price}`}
                  >
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

  export default ProductFromServer;
  ```

  [[source code](https://github.com/argianardi/sinauNextJs/blob/client-side-rendering/src/views/Product/ProductFromServer.tsx)]

- Buat file page product, tempat untuk fetch api

  ```
  // src/pages/product/csr.tsx

  import axios from 'axios';
  import React, { useEffect, useState } from 'react';
  import styles from '@/styles/product.module.scss';
  import useSWR from 'swr';
  import { fetcher } from '@/utils/swr/fetcher';
  import ProductFromServer from '@/views/Product/ProductFromServer';

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

    return <ProductFromServer products={isLoading ? [] : data.data} />;
  };

  export default ProductPage;
  ```

  [[Source Code](https://github.com/argianardi/sinauNextJs/blob/client-side-rendering/src/pages/product/csr.tsx)]

Berikut skema struktur keseluruhan filenya:

```
project-root/
  ├─ pages/
  │   ├─ api/
  │   │   ├─ hello.ts
  |   |   ├─ products-data-local.ts
  │   │   ├─ products.ts
  │   ├─ product-data-local/
  |   |   ├─ index.tsx
  │   ├─ product/
  |   |   ├─ csr.tsx
  ├─ views/
  |   ├─ Product
  │   │   ├─ ProductFromServer.tsx
  │   │   ├─ ProductView.tsx
  │   │   ├─ ...
  ├─ ...
```

[[Source Code](https://github.com/argianardi/sinauNextJs/tree/client-side-rendering/src)]

## Server Side Rendering

- Pengambilan data eksternal dan transformasi kode menjadi representasi HTML dari sebuah UI terjadi sebelum hasilnya dikirim ke client.
- HTML akan di-generate kemudian HTML, data, dan javascript dikirim ke client. Proses ini dilakukan saat run time.
- HTML digunkaan untuk menampilkan halaman tapi belum interaktif, kemudian react akan melakukan proses hydration dengan menggunakan data dan javascript untuk membuat komponen menjadi interaktif.

Misalnya kita ingin melakaukan fetch api product dari server menggunakan Server Side Rendering, dapat dilakukan dengan langkah - langkah berikut:

- Buat file component view product, berikut contoh penggunaannya dicoding:

  ```
  import React from 'react';

  import styles from '@/views/Product/Product.module.scss';
  import { productType } from '@/types/product.type';

  const ProductFromServer = ({
    products,
    title,
  }: {
    products: productType[];
    title: string;
  }) => {
    return (
      <div className={styles.product}>
        <h1 className={styles.product__title}>{title}</h1>
        <div className={styles.product__content}>
          {products.length === 0 ? (
            <div className={styles.product__content__skeleton}>
              <div className={styles.product__content__skeleton__image} />
              <div className={styles.product__content__skeleton__name} />
              <div className={styles.product__content__skeleton__category} />
              <div className={styles.product__content__skeleton__category} />
              <div className={styles.product__content__skeleton__price} />
            </div>
          ) : (
            <>
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
                  <p
                    className={`text-sm ${styles.product__content__item__price}`}
                  >
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

  export default ProductFromServer;
  ```
  [Source Code](https://github.com/argianardi/sinauNextJs/blob/server-side-rendering/src/views/Product/ProductFromServer.tsx)

- Buat file page product di folder `pages`, tempat untuk fetch api. Berikut contoh penggunaannya di coding:

  ```
  import React from 'react';
  import axios from 'axios';
  import ProductFromServer from '@/views/Product/ProductFromServer';
  import { productType } from '@/types/product.type';

  const ProductPage = ({ products }: { products: productType[] }) => {
    return <ProductFromServer products={products} title={'Product Page (SSR)'} />;
  };

  export default ProductPage;

  // Function getServerSideProps Di panggil setiap melakukan request (setiap halamannya dibuka)
  // Menggunakan axios
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

  // Menggunakan fetch default javascript
  // export async function getServerSideProps() {
  //   try {
  //     const res = await fetch('http://localhost:3000/api/products');
  //     const response = await res.json();
  //     return {
  //       props: {
  //         products: response.data,
  //         apiError: null,
  //       },
  //     };

  //     console.log(res);
  //   } catch (error) {
  //     return {
  //       props: {
  //         data: null,
  //       },
  //     };
  //   }
  // }
  ```

  [[Source Code]](https://github.com/argianardi/sinauNextJs/blob/server-side-rendering/src/pages/product/ssr.tsx)

Berikut skema struktur filenya:

```
project-root/
  ├─ pages/
  │   ├─ api/
  │   │   ├─ hello.ts
  |   |   ├─ products-data-local.ts
  │   │   ├─ products.ts
  │   ├─ product-data-local/
  |   |   ├─ index.tsx
  │   ├─ product/
  |   |   ├─ csr.tsx
  |   |   ├─ ssr.tsx
  ├─ views/
  |   ├─ Product
  │   │   ├─ ProductFromServer.tsx
  │   │   ├─ ProductView.tsx
  │   │   ├─ ...
  ├─ ...
```

[[Source Code](https://github.com/argianardi/sinauNextJs/tree/server-side-rendering/src)]
Pada component `ProductFromServe` terdapat bagian skeleton, untuk SSR skeleton tersebut tidak akan berguna karena di SSR tidak memerlukan proses loading saat melakukan fetching API. Semua data eksternal dari API akan langsung diberikan secara bersamaan atau satu paket dengan komponen HTML yang kita gunakan.

## Static Site Generation
Static Site Generation (SSG) adalah salah satu teknik utama dalam Next.js yang memungkinkan kita untuk menghasilkan halaman web yang sangat efisien dan cepat dengan merender konten menjadi HTML statis selama build time. pada SSG ini, HTML akan di-generate di server namun hanya di-generate sekali saat build time. Sehingga content yang ditampilkan bersifat statis. Berikut contoh penggunaannya di coding:  
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

[Source Code](https://github.com/argianardi/sinauNextJs/blob/staticSiteGeneration/src/pages/product/ssg.tsx).


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

### Membuat Title Page Dinamis Berganti Sesuai Page yang dibuka

Berikut langkah - langkah untuk membuatnya:

- Buat code view page yang ingin dibuat dinamis titlenya didalam folder `src/views`, berikut contoh penggunaannya di coding:

  ```
  src/views/TitlePage/index.tsx

  import Head from 'next/head';
  import React from 'react';

  const ViewTitlePage: React.FC<{
    titleOfContent: string;
    pageOfTitle: string;
  }> = ({ titleOfContent, pageOfTitle }) => {
    return (
      <>
        <Head>
          <title>Sinau NextJS | {pageOfTitle} </title>
        </Head>
        <div>{titleOfContent}</div>
      </>
    );
  };

  export default ViewTitlePage;
  ```

  [[soruce code](https://github.com/argianardi/sinauNextJs/blob/errorPage/src/views/TitlePage/index.tsx)]

- Buat file page yang ingin dibuat dinamis titlenya kemudian import view page tadi dan isikan prop title konten dan title pagenya, berikut contoh penggunaannya di coding:

  ```
  src/pages/title/page1.tsx

  import ViewTitlePage from '@/views/TitlePage';
  import React from 'react';

  const Page1 = () => {
    return (
      <ViewTitlePage
        titleOfContent="Belajar title page Halaman 1"
        pageOfTitle="title page 1"
      />
    );
  };

  export default Page1;
  ```

  [[source code](https://github.com/argianardi/sinauNextJs/blob/errorPage/src/pages/title/page1.tsx)]

Sehingga ketika user membuka url `baseDomain/title/page1`, akan terbuka page1 dengan title `sinau nextJS | page 1`.
