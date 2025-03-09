<script setup lang="ts">
import { ref, computed } from 'vue';
import MotorcycleItems from './MotorcycleItems.vue';
import NewMoto from './NewMoto.vue';
import {type Motorcycle,
    KawaNinja,
    DucatiSuper,
    BMWS
} from '../motorcycle.ts';

const motorcycles = ref<Motorcycle[]>([
    KawaNinja, DucatiSuper, BMWS
]);

//Gestion des motos

const deleteMoto = (id: number) => {
    motorcycles.value = motorcycles.value.filter(moto => moto.id !== id);
};

const addMoto = (moto: Motorcycle) => {
    const newMoto: Motorcycle = {
        id: motorcycles.value.length + 1,
        name: moto.name,
        brand: moto.brand,
        category: moto.category,
        price: moto.price,
        engineSize: moto.engineSize,
        description: moto.description,
        quantity: moto.quantity
    };

    motorcycles.value.push(newMoto);
};

//Recherche

const research = ref<string>('');

//filtrage inspiré de ceci: https://stackoverflow.com/questions/69287834/search-bar-vue-js
const showResearchedMoto = computed(() => {
    return motorcycles.
           value.
           filter(moto => moto.name.toLowerCase().
           includes(research.value.toLowerCase()))
});

//Exporter en CSV
//méthode généré par Chat GPT
const exportToCSV = () => {
    const csvContent = [
        ["ID", "Nom", "Marque", "Catégorie", "Prix", "Taille moteur", "Description", "Quantité"],
        ...motorcycles.value.map(moto => [
            moto.id,
            moto.name,
            moto.brand,
            moto.category,
            moto.price,
            moto.engineSize,
            moto.description,
            moto.quantity
        ])
    ]
    .map(row => row.join(","))
    .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "motos.csv";
    a.click();
    URL.revokeObjectURL(url);
};


</script>

<template>
    <div class="container-fluid bg-dark text-light p-4 text-center">
        <h1 class="display-4 fw-bold">🏍️ Magasin de motocyclette 🏁</h1>
    </div>
    
    <div class="container text-center mt-4">
        <div class="row">
            <img class="col-md-4 img-fluid rounded shadow" src="/src/assets/images/moto.jpg" alt="image du magasin 1" />
            <img class="col-md-4 img-fluid rounded shadow" src="/src/assets/images/moto2.jpg" alt="image du magasin 2" />
            <img class="col-md-4 img-fluid rounded shadow" src="/src/assets/images/moto3.jpg" alt="image du magasin 3" />
        </div>
    </div>

    <div class="container text-center mt-4">
        <button @click="exportToCSV" class="btn btn-success">Exporter le catalogue en CSV</button>
    </div>

    <div class="container mt-5">
        <NewMoto @addMoto="addMoto" />
    </div>

    <div class="container mt-4">
        <h2 class="text-center text-success">🔍 Rechercher une moto</h2>
        <input v-model="research" class="form-control w-50 mx-auto mb-4" type="text" placeholder="Recherche">
    </div>

    <div class="container mt-4">
        <h2 class="text-center text-primary">🏆 Catalogue du magasin 🏆</h2>
        <ul class="list-group">
            <MotorcycleItems v-for="moto of showResearchedMoto" :key="moto.id" :motorcycle="moto" @addMoto="addMoto" @deleteMoto="deleteMoto" />
        </ul>
    </div>
</template>

<style scoped>
.container-fluid {
    background: linear-gradient(to right, #3b2c35, #242424);
}

h1 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
}

.img-fluid {
    border: 3px solid white;
}

.list-group {
    max-width: 800px;
    margin: auto;
}
</style>