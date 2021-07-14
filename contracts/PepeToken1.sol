pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract PepeToken1 is ERC20Detailed, ERC20 {
    constructor() ERC20Detailed('Pepe Token1', 'PT1', 18) public {
        
    }
}