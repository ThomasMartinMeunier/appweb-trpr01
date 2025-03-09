<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import type { Motorcycle } from '../motorcycle.ts';

const props = defineProps<{ 
    motorcycle: Motorcycle 
}>();

const editMotoName = ref<string>(props.motorcycle.name);
const editMotoBrand = ref<string>(props.motorcycle.brand);
const editMotoCategory = ref<string>(props.motorcycle.category);
const editMotoEngineSize = ref<string>(String(props.motorcycle.engineSize));
const editMotoPrice = ref<string>(String(props.motorcycle.price));
const editMotoDescription = ref<string>(props.motorcycle.description);
const editMotoQuantity = ref<string>(String(props.motorcycle.quantity));

const validateForm = computed(() => {
  return !editMotoName.value.trim()
      || !editMotoBrand.value.trim()
      || !editMotoCategory.value.trim()
      || !editMotoEngineSize.value.trim()
      || !editMotoPrice.value.trim()
      || !editMotoDescription.value.trim()
      || !editMotoQuantity.value.trim();
});

const editedMoto = computed<Motorcycle>(() => ({
    id: props.motorcycle.id,
    name: editMotoName.value.trim(),
    brand: editMotoBrand.value.trim(),
    category: editMotoCategory.value.trim(),
    engineSize: Number(editMotoEngineSize.value.trim()),
    price: Number(editMotoPrice.value.trim()),
    description: editMotoDescription.value.trim(),
    quantity: Number(editMotoQuantity.value.trim())
}));
</script>

<template>
  <div>
    <input v-model="editMotoName" placeholder="Nom de la moto" />
    <input v-model="editMotoBrand" placeholder="Marque de la moto" />
    <input v-model="editMotoCategory" placeholder="Catégorie de la moto" />
    <input v-model="editMotoEngineSize" placeholder="Taille du moteur en cm³" />
    <input v-model="editMotoPrice" placeholder="Prix de la moto" />
    <input v-model="editMotoDescription" placeholder="Description de la moto" />
    <input v-model="editMotoQuantity" placeholder="Quantité en stock" />
    <button class="btn btn-warning" @click="$emit('updateMoto', editedMoto)" :disabled="validateForm">Mettre à jour</button>
  </div>
</template>
