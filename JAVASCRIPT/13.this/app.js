const pokemon = {
  name: "Pikachu",
  attack: function () {
    console.log(this.name + " lanza un rayo!")
  },
}
//Esto me muestra "Pikachu" porque está en el mismo ámbito
pokemon.attack()
//Me acabo de salir del ambito
console.log(this.name)
console.log(pokemon.name)
