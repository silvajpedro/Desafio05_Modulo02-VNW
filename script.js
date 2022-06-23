// Crie um array que receba 5 itens e exiba no console.

let names = [ 'joão', 'débora', 'jordan', 'leandro','stéfanny']

// Utilize um método para adicionar um nome ao inicio do array.
names.unshift("leno")
console.log(names)
// Utilize um método para remover o último nome do array.
names.pop()
console.log(names)
// Utilize um método para adicionar dois nomes ao fim do array.
names.splice(5,2 ,"aline","pamela")

// Utilize um método para remover o primeiro nome do array.
 names.shift()
 console.log(names)

// Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return a-b
})

    console.log(numbers)