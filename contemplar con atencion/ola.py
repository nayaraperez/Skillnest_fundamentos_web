sinhablarsilencio

si tus problemas fueran codigos con gusto los resolveria

-Atte jose4°A


python


import random
import time

print("🎲 ¡Bienvenido al juego de los dados! 🎲")

# Función para tirar un dado
def tirar_dado():
    return random.randint(1, 6)

jugando = True

while jugando:
    input("Presiona Enter para tirar los dados... ")
    dado1 = tirar_dado()
    dado2 = tirar_dado()
    total = dado1 + dado2

    print(f"Has sacado: {dado1} y {dado2} → Total: {total}")

    if total == 7 or total == 11:
        print("¡Felicidades! ¡Ganaste! 🎉")
    elif total == 2 or total == 3 or total == 12:
        print("¡Oh no! ¡Perdiste! 😢")
    else:
        print("Sigue intentando... 😎")

    respuesta = input("¿Quieres tirar otra vez? (s/n): ").lower()
    if respuesta != 's':
        jugando = False
        print("Gracias por jugar. ¡Hasta la próxima! 👋")