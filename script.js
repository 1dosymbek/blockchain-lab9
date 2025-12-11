// Connecting to the contract
const contractAddress = "0xc660458Ef9b8fF67F760Af516a3BB86FAe827C19"; 

// ABI of the contract
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_note",
				"type": "string"
			}
		],
		"name": "setNote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNote",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Connecting to the web3 provider (MetaMask)
const provider = new ethers.providers.Web3Provider(window.ethereum, 97);

let signer;
let contract;

// Request accounts and connect
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(contract);
    });
});

// Calling setNote() in the smart contract
async function setNote() {
    const note = document.getElementById("note").value;
    const setNote = await contract.setNote(note);
}

// Calling getNote() in the smart contract and showing it to the user
async function getNote() {
    const note = await contract.getNote();
    console.log(getNote);
    document.getElementById("result").innerText = note;
}