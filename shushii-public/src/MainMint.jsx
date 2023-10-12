import React, { useState} from 'react';
import {Box, Button, Flex, Input, Spacer, Text} from '@chakra-ui/react';
import abi from "./shushiiAbi.json";
import {ethers, BigNumber} from 'ethers';
const SHUSHIINFTAddress = "0x5DF02cB5d5aD552E5728d3ca20f650CB0d5a94Fb";

const MainMint = ()=> {

    const[mintAmount, setMintAmount]= useState (1);
   
    async function handleMint () {
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                SHUSHIINFTAddress,
                abi,
                signer
        )

       try{ const nftTx = await contract.publicMint(BigNumber.from(mintAmount),{
        value: ethers.utils.parseEther((0.02* mintAmount).toString()),
       });
      
				console.log(
					"Response", nftTx
				)
		} catch (error) {
			console.log('Error minting character', error)
		}
	}}
    

     const handleDecrement=()=>{
        if(mintAmount<=1)return;
        setMintAmount(mintAmount-1);
     };

        const handleIncrement=()=>{
        if(mintAmount>=5)return;
        setMintAmount(mintAmount+1);
     };

 return(
        <Flex justify="center" align="center" padding="40px">
            <Box width="680px" 
            height="560px"
            backgroundColor="White" 
            opacity="0.95"
            border="dashed black 5px"
            borderRadius="30px"
            >
           
                <Text fontSize="44px" font="Concert One"
                >SHUSHII</Text>
               
                    <Text fontSize="28px" 
                    letterSpacing="-5.5%"
                    font="Varela Round"
                    margin="30px"
                    >Public Mint Price: 0.02 Eth</Text>
               
                 <Text fontSize="18px"
                        color="#D6517D"
                        padding="0px 40px 0px 40px"
                 >* You must be connected to mint *
                        <Spacer/>
                    * Make sure you are connected to the Ethereum Mainet * 
                        <Spacer/>
                    * Make sure you have enough money in your wallet * 
                    </Text> 
               
            
                
                <Flex align="center" justify="center">
                    <Button 
                     backgroundColor="#F2BA1B"
                     borderRadius="5px"
                     box="0px 2px 2px 1px #d9d9d9"
                     color="Black"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="12px"
                     marginTop="10px"
                     marginRight="10px"
                     fontSize="18px"
                    onClick={handleDecrement}> - </Button>
                   
                   <Input readOnly
                     fontFamily="inherit"
                     width="100px"
                     height="40px"
                     textAlign="center"
                     paddingLeft="19px"
                     marginTop="10px"
                    type="number"
                    fontSize="18px"

                     value={mintAmount} />
                   
                    <Button 
                     backgroundColor="#F2BA1B"
                     borderRadius="5px"
                     box="0px 2px 2px 1px #d9d9d9"
                     color="Black"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="12px"
                     marginTop="10px"
                     marginLeft="10px"
                     fontSize="18px"
                    onClick={handleIncrement}> + </Button>
        
                  </Flex>
                    <Button 
                     backgroundColor="#F2BA1B"
                     borderRadius="5px"
                     box="0px 2px 2px 1px #d9d9d9"
                     color="Black"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="15px"
                     marginTop="25px"
                     fontSize="24px"
                     
                      onClick={handleMint}> Mint Now </Button>
              

            </Box>
        </Flex>
  
    );
};

export default MainMint;

