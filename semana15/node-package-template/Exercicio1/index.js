
const name = process.argv[2]
const age = Number(process.argv[3])
const newage = 7

if(!name || !age) {
    console.log("Você não está passando os dados corretamente")
} else {
    // console.log("Olá " + name + "! Voce tem " + age + " anos. Em sete anos você terá " + (age + newage) + " anos");
    console.log('\x1b[33m%s\x1b[0m', "Olá " + name + "! Voce tem " + age + " anos. Em sete anos você terá " + (age + newage) + " anos");
}