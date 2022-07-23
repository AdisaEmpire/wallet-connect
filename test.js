var account;

    // https://docs.walletconnect.com/quick-start/dapps/web3-provider
    var provider = new WalletConnectProvider.default({
      rpc: {
        1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
        137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
        // ...

      },
      // bridge: 'https://bridge.walletconnect.org',
    });

    var connectWC = async () => {
      await provider.enable();

      //  Create Web3 instance
      const web3 = new Web3(provider);
      window.w3 = web3

      var accounts  = await web3.eth.getAccounts(); // get all connected accounts
      account = accounts[0]; // get the primary account
    }


const authButton = document.getElementById('connectWC');
const enableButton = document.getElementById('btn-enable');
const logoutButton = document.getElementById('btn-logout');
const callButton = document.getElementById('btn-call');
const subheader = document.getElementById('subheader');
const resultBox = document.getElementById('result');


let user;
let web3;
let result = '';

function renderApp() {
    user = Moralis.User.current();
  
    if (user) {
      authButton.style.display = 'none';
      logoutButton.style.display = 'inline-block';
      subheader.innerText = `Welcome ${user.get('username')}`;
  
      if (web3) {
        callButton.style.display = 'inline-block';
        enableButton.style.display = 'none';
      } else {
        callButton.style.display = 'none';
        enableButton.style.display = 'inline-block';
      }
    } else {
      authButton.style.display = 'inline-block';
      callButton.style.display = 'none';
      logoutButton.style.display = 'none';
      subheader.innerText = '';
      enableButton.style.display = 'none';
    }
  
    resultBox.innerText = result;
  }

  