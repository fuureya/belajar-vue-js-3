<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="cards">
      <div class="card">
        <img src="https://source.unsplash.com/300x200/?product" alt="Produk" />
        <h3>Total Produk</h3>
        <p>150</p>
      </div>
      <div class="card">
        <img src="https://source.unsplash.com/300x200/?sales" alt="Penjualan" />
        <h3>Penjualan Hari Ini</h3>
        <p>25</p>
      </div>
      <div class="card">
        <img
          src="https://source.unsplash.com/300x200/?visitor"
          alt="Pengunjung"
        />
        <h3>Pengunjung Bulan Ini</h3>
        <p>300</p>
      </div>
    </div>
  </div>
</template>
