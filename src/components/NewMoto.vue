<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Motorcycle } from '../motorcycle.ts';

const newMotoName = ref<string>('');
const newMotoBrand = ref<string>('');
const newMotoCategory = ref<string>('');
const newMotoEngineSize = ref<string>('');
const newMotoPrice = ref<string>('');
const newMotoDescription = ref<string>('');
const newMotoQuantity = ref<string>('');

const validateForm = computed(() => {
    return !newMotoName.value.trim()
        || !newMotoBrand.value.trim()
        || !newMotoCategory.value.trim()
        || !newMotoEngineSize.value.trim()
        || !newMotoPrice.value.trim()
        || !newMotoDescription.value.trim()
        || !newMotoQuantity.value.trim();
});

const newMoto = computed<Motorcycle>(() => ({
    id: 0,
    name: newMotoName.value.trim(),
    brand: newMotoBrand.value.trim(),
    category: newMotoCategory.value.trim(),
    engineSize: Number(newMotoEngineSize.value.trim()),
    price: Number(newMotoPrice.value.trim()),
    description: newMotoDescription.value.trim(),
    quantity: Number(newMotoQuantity.value.trim())
}));

</script>

<template>
    <div class="card bg-dark text-light p-4 shadow-lg">
        <h2 class="text-warning text-center">Ajouter une moto</h2>
        <div class="mb-3">
            <input v-model="newMotoName" class="form-control" placeholder="Nom de la moto" />
        </div>
        <div class="mb-3">
            <input v-model="newMotoBrand" class="form-control" placeholder="Marque" />
        </div>
        <div class="mb-3">
            <input v-model="newMotoCategory" class="form-control" placeholder="Catégorie" />
        </div>
        <div class="mb-3">
            <input v-model="newMotoEngineSize" class="form-control" placeholder="Moteur (cm³)" />
        </div>
        <div class="mb-3">
            <input v-model="newMotoPrice" class="form-control" placeholder="Prix" />
        </div>
        <div class="mb-3">
            <textarea v-model="newMotoDescription" class="form-control" placeholder="Description"></textarea>
        </div>
        <div class="mb-3">
            <input v-model="newMotoQuantity" class="form-control" placeholder="Quantité" />
        </div>
        <button class="btn btn-success w-100" @click="$emit('addMoto', newMoto)" :disabled="validateForm">Ajouter</button>
    </div>
</template>

<style scoped>
.card {
    max-width: 600px;
    margin: auto;
    border: 2px solid #ffd700;
}
</style>