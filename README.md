# 👽 Welcome!

Why is this boilerplate the best? 

- Only open source libraries used!
- Easy Setup [3 lines!]
- Uses the latest stack
- Not dependent on any paid product or service
- It works really fucking well

<img width="1435" alt="Screen Shot 2022-07-06 at 3 07 26 PM" src="https://user-images.githubusercontent.com/100057052/177624635-bf983ec8-38fb-422a-8e23-10d08c229e76.png">

## 💻 Latest Updates [July 6th, 2022]

- Integrated Rainbowkit
- Updated Wagmi
- Cleaned up the Nav code

## ⭐️ Star this repo!
If this boilerplate helps you build Ethereum dapps faster - please star this project, every star helps!

## 🤝 Need help?
If you need help with setting up the boilerplate or have other questions - reach out on [twitter](https://twitter.com/ilyxium)

## 🚀 Quick Start

```bash
git clone https://github.com/ilyxium/eth-nextjs-boilerplate.git
# then
npm install
# then
npm run dev
```

Please note: Some users have mentioned issues with using yarn, so I recommend using NPM

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 What's under the hood

This boilerplate uses the following open source libraries to bring you a fully functional, mobile optimized dApp:

- [next.js](https://nextjs.org/docs)
- [react.js](https://reactjs.org/)
- [wagmi](https://wagmi-xyz.vercel.app/)
- [ethers.js](https://docs.ethers.io/v5/)
- [chakra](https://chakra-ui.com/)
- [rainbowkit](https://www.rainbowkit.com/docs/introduction)

## 💎 What you get

- Connect Wallet + One example transaction 💲
- Scalable header + mobile menu ↔️
- Mobile friendly 📱

<img width="492" alt="Screen Shot 2022-03-04 at 2 37 24 AM" src="https://user-images.githubusercontent.com/100057052/156723802-2c9763e9-9fae-4221-ab83-5506c2b78c37.png">

- 3 pages, including a 404 page, and routing done ✅
- Examples of buttons and links 👽

## 🔌 Connectors

The boilerplate now uses [rainbowkit](https://www.rainbowkit.com/docs/introduction). They make it super easy to configure the connector, and allows you to choose chains, styling, and more. 

Change your chains in app.tsx:

```
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      alchemyProvider(),
      publicProvider()
    ]
  );
```


## 😃 Connect with me
Feel free to reach out on twitter [@ilyxium](https://twitter.com/ilyxium) and drop your questions, comments or suggestions on how I can improve this!

# Enjoy 
