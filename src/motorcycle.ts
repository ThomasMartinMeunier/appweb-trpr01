export interface Motorcycle{
    id: number,
    name: string,
    brand: string,
    category: string,
    price: number,
    engineSize: number,
    description: string,
    quantity: number
}

export const KawaNinja : Motorcycle ={
    id: 1,
    name: "NINJA 650",
    brand: "Kawasaki",
    category: "sport",
    price: 8799,
    engineSize: 649,
    description: "Une performance sportive indéniable s'allie à une position de conduite droite pour des trajets quotidiens excitants, tandis qu'un niveau suprême d'attitude vous rappelle son héritage légendaire.",
    quantity: 5
}

export const DucatiSuper : Motorcycle = {
    id: 2,
    name: "SuperSport 950",
    brand: "Ducati",
    category: "sport",
    price: 17395,
    engineSize: 937,
    description: "Un style dynamique et des volumes compacts. Avec l'élégance de ses lignes et de ses proportions typiques des motos sportives Panigale, la SuperSport 950 est la moto sportive de route de Ducati.",
    quantity: 12
}

export const BMWS : Motorcycle = {
    id: 3,
    name: "BMW S 1000 RR",
    brand: "BMW",
    category: "sport",
    price: 20000,
    engineSize: 999,
    description: "La RR : axée avec précision sur la performance. Là où elle évolue, le pilotage est un travail de haute précision. C’est pourquoi nous perfectionnons sans relâche cette Superbike.",
    quantity: 0
}