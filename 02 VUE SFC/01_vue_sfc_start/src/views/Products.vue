<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
s
<template>
  <Navbar />
  <div class="container">
    <div class="product-card">
      <img
        src="https://via.placeholder.com/300"
        alt="Produk 1"
        class="product-image"
      />
      <h2 class="product-name">Produk 1</h2>
      <p class="product-description">
        Deskripsi singkat untuk produk 1. Fitur unggulan dan kelebihan produk
        ini.
      </p>
      <span class="product-price">Rp 100.000</span>
      <button class="buy-button">Beli Sekarang</button>
    </div>

    <div class="product-card">
      <img
        src="https://via.placeholder.com/300"
        alt="Produk 2"
        class="product-image"
      />
      <h2 class="product-name">Produk 2</h2>
      <p class="product-description">
        Deskripsi singkat untuk produk 2. Menawarkan keunggulan yang menarik.
      </p>
      <span class="product-price">Rp 150.000</span>
      <button class="buy-button">Beli Sekarang</button>
    </div>

    <div class="product-card">
      <img
        src="https://via.placeholder.com/300"
        alt="Produk 3"
        class="product-image"
      />
      <h2 class="product-name">Produk 3</h2>
      <p class="product-description">
        Deskripsi singkat untuk produk 3. Solusi terbaik untuk kebutuhan Anda.
      </p>
      <span class="product-price">Rp 200.000</span>
      <button class="buy-button">Beli Sekarang</button>
    </div>
  </div>
</template>
