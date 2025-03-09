<script setup lang="ts">
import { ref, defineProps } from 'vue';
import type { Motorcycle } from '../motorcycle.ts';
import ModMoto from './ModMoto.vue';

const props = defineProps<{ 
    motorcycle: Motorcycle
}>();

let editMoto = ref<boolean>(false);
let deleteMoto = ref<boolean>(false);
let showDetails = ref<boolean>(false);

const updateMoto = (moto: Motorcycle) => {
    props.motorcycle.name = moto.name;
    props.motorcycle.brand = moto.brand;
    props.motorcycle.category = moto.category;
    props.motorcycle.engineSize = moto.engineSize;
    props.motorcycle.price = moto.price;
    props.motorcycle.description = moto.description;
    props.motorcycle.quantity = moto.quantity;

    editMoto.value = false;
};


</script>

<template>
    <div class="card text-light bg-dark shadow p-3 mb-3">
        <h4 class="card-title">{{ motorcycle.name }}</h4>

        <div>
            <p>Prix: {{ motorcycle.price }}$</p>
            <p>Taille du moteur: {{ motorcycle.engineSize }} cm³</p>
            <p>Quantité en stoque: {{ motorcycle.quantity }}</p>
            <p v-if="motorcycle.quantity <= 0" class="text-danger">⚠️ Rupture de stock !</p>
        </div>
        
        <div v-if="showDetails">
            <p>Marque du véhicule: {{ motorcycle.brand }}</p>
            <p>Type de moto: {{ motorcycle.category }}</p>
            <p>Description: {{ motorcycle.description }}</p>
            <button class="btn btn-primary" @click="showDetails = false">➖ Moins de détailles</button>
        </div>

        <div v-if="editMoto">
            <ModMoto :motorcycle="motorcycle" @updateMoto="updateMoto"/>
            <button class="btn btn-danger" @click="editMoto = false;">Annuler les modifications</button>
        </div>

        <div v-if="deleteMoto">
            <button class="btn btn-warning" @click="$emit('deleteMoto', motorcycle.id); deleteMoto = false;">confirmer la suppression ?</button>
            <button class="btn btn-danger" @click="deleteMoto = false">Annuler</button>
        </div>

        <div class="d-flex justify-content-between mt-3">
            <button v-if="!editMoto" class="btn btn-warning" @click="editMoto = true">🔧 Modifier</button>
            <button v-if="!showDetails" class="btn btn-primary" @click="showDetails = true">➕ Plus de détailles</button>
            <button class="btn btn-secondary" @click="$emit('addMoto', motorcycle)">📋 Dupliquer</button>
            <button v-if="!deleteMoto" class="btn btn-danger" @click="deleteMoto = true">❌ Supprimer</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    max-width: 500px;
    margin: auto;
    border: 2px solid #ffd700;
}
</style>