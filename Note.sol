// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Note {

    // Default access modifier = internal
    // state is a variable that is located inside the contract, but not in functions

    string note; // state variable

    // For public getter, the function is created automatically

    // Access Modifiers:
    // internal, external, private, public

    // Types:
    // primitive = int, uint, bool, bytes, address
    // reference = string, array, mapping, struct, contract

    // For all reference and local variable types, you must specify memory or calldata

    function setNote(string memory _note) public {
        note = _note;
    }

    // view and pure = 0 gas
    // view = doesn't change state, can read data
    // pure = doesn't change state and can't even read data

    function getNote() public view returns (string memory) {
        return note;
    }
}