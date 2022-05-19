# 👽 Welcome!

Why is this boilerplate the best? Because all the top eth boilerplates on github right now are created by companies who integrate every aspect of their product/service into the boilerplate, making it all but unusable unless you sign up for their service!

<img width="1437" alt="Screen Shot 2022-03-04 at 12 02 01 AM" src="https://user-images.githubusercontent.com/100057052/156702502-2882bdb6-4860-44ac-99fe-34056e8f356d.png">

## ⭐️ Star this repo!
If this boilerplate helps you build Ethereum dapps faster - please star this project, every star makes me very happy!

## 🤝 Need help?
If you need help with setting up the boilerplate or have other questions - reach out on [twitter](https://twitter.com/ilyxium)

## 🚀 Quick Start

```bash
git clone https://github.com/ilyxium/eth-nextjs-boilerplate.git
# then
npm install
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 What's under the hood

This boilerplate uses the following open source libraries to bring you a fully functional, mobile optimized dApp:

- [next.js](https://nextjs.org/docs)
- [react.js](https://reactjs.org/)
- [wagmi](https://wagmi-xyz.vercel.app/)
- [ethers.js](https://docs.ethers.io/v5/)
- [chakra](https://chakra-ui.com/)

## 💎 What you get

- Connect Wallet + One example transaction 💲
- Scalable header + mobile menu ↔️
- Mobile friendly 📱

<img width="492" alt="Screen Shot 2022-03-04 at 2 37 24 AM" src="https://user-images.githubusercontent.com/100057052/156723802-2c9763e9-9fae-4221-ab83-5506c2b78c37.png">

- 3 pages, including a 404 page, and routing done ✅
- Examples of buttons and links 👽

## 🔌 Add Wallet Connections

The boilerplate already has an injected wallet [metamask] integrated. The code for this can be found in ```src/components/Header/index.js```:

```
const [{ data: connectData, error: connectError, loading: connectLoading }, connect] = useConnect()

...

const connector = new InjectedConnector({
  chains: [...defaultChains, ...defaultL2Chains],
})

...

 <NavButton ml="30px" onClick={() => connect(connector)}>

...
```

However, you may want to use a different wallet connector, such as WalletConnect or WalletLink. For that, I have already included the code for the connectors:

```
const walletConnector = new WalletConnectConnector({
  options: {
    qrcode: true,
  },
})

const linkConnector = new WalletLinkConnector({
  options: {
    appName: 'Mirror.xyz',
    jsonRpcUrl: 'https://mainnet.infura.io/v3',
  },
})
```

You just need to pass your desired connector to ``connect()`` here:

``
   <NavButton ml="30px" onClick={() => connect(connector)}>
``

If you want to offer multiple connectors, you can do something like this:

```
{data.connectors.map((x) => (
  <button key={x.name} onClick={() => connect(x)}>
    {x.name}
  </button>
))}
```

More information on connectors can be found [here](https://wagmi-xyz.vercel.app/docs/hooks/useConnect).

## 😃 Connect with me
Feel free to reach out on twitter [@ilyxium](https://twitter.com/ilyxium) and drop your questions, comments or suggestions on how I can improve this!

# Enjoy 
