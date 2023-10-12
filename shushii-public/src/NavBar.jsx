import React, {useState} from 'react';
import {Box, Flex, Button} from '@chakra-ui/react';


const NavBar = ({accounts, setCurrentAccount})=>{
    const isConnected = Boolean(accounts[0]);
    async function connectAccount() {
    if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' ,});
    console.log('Found authorized Account: ', accounts[0])
    setCurrentAccount(accounts[0]);
}}
    
const [getNetwork, setCorrectNetwork] = useState(false);
    async function checkCorrectNetwork () {
    const getNetwork = await window.ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + getNetwork)
    const ChainId = '0x1'
    const devChainId = 1337
    const localhostChainId = `0x${Number(devChainId).toString(16)}`

    if (getNetwork !== ChainId && getNetwork !== localhostChainId) {
        alert('Please switch your network to Ethereum Mainet! ')
        setCorrectNetwork(false)
    } else {
        setCorrectNetwork(true)
    }
}

    return(
        <Box align="right" padding="30px" >
           

            { getNetwork ? (
                isConnected ? (
                <Box margin="0.15px"
                fontSize="24px"
                >Connected</Box>
                 ):(
                <Button
                backgroundColor="#F2BA1B"
                borderRadius="5px"
                box="0px 2px 2px 1px #d9d9d9"
                color="Black"
                cursor="pointer"
                fontSize="24px"
                fontFamily="inherit"
                padding="15px"
                margin="0.15px"
                onClick={connectAccount}>Connect Wallet</Button> 
                )
                ):(
                    <Button
                backgroundColor="#F2BA1B"
                borderRadius="5px"
                box="0px 2px 2px 1px #d9d9d9"
                color="Black"
                cursor="pointer"
                fontSize="24px"
                fontFamily="inherit"
                padding="15px"
                margin="0.15px"
                onClick={checkCorrectNetwork}>Connect Wallet</Button> )
                }

</Box>
      
    );
};

export default NavBar;