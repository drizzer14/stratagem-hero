# Stratagem Hero

![Stratagem Hero](https://raw.githubusercontent.com/drizzer14/stratagem-hero/main/assets/preview-1.png)

This is my attempt at recreating original Stratagem Hero arcade from the Helldivers 2 game.
The intent was to replicate it as closely as possible in looks and behaviour.

## How to play

![Stratagem Hero](https://raw.githubusercontent.com/drizzer14/stratagem-hero/main/assets/preview-2.png)

- Visit the [website](https://drizzer14.github.io/stratagem-hero).
- Press any Stratagem Input (WASD or arrow keys) to start the game.
- All stratagems from the Helldivers 2 game are evenly divided into rounds of 8 stratagems per round – you need to input their codes as quickly as possible to advance further until either no stratagems left, or the timer is up.
- Each correct stratagem adds its code length to your score and grants you additional time. E.g., correctly entering Reinforce stratagem code (⬆️⬇️➡️⬅️⬆️) will grant you 5 points and some more time.
- Each error forces you to start entering the code from the beginning.
- In the end your score will be saved and displayed along with your previous high score.

![Stratagem Hero](https://raw.githubusercontent.com/drizzer14/stratagem-hero/main/assets/preview-3.png)

## Important

1. Since it's difficult to correctly infer timer behaviour from the original Stratagem Hero arcade I decided to implement my own behaviour for it that should at least somewhat resemble the original.
2. The same thing goes for scoring, although it's not that important.
3. This implementation was not designed to work on mobile devices since we don't play Helldivers 2 on phones/tablets, right?

## Stack

Built with React 18 and TypeScript 5 just for funsies.

---

If you liked this project – [consider supporting Ukraine](https://u24.gov.ua/) in our war against ruzzian aggression.
