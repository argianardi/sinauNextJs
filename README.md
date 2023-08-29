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
