// SPDX-License-Identifier: MIT

pragma solidity ^0.6;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";


contract Token is ERC20Burnable, Ownable {

    constructor (string memory name_, string memory symbol_) public ERC20(name_,symbol_) {
    }
    
    function mint(address account, uint amount) public onlyOwner {
        _mint(account,amount);
    }
    
}