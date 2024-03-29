use anchor_lang::solana_program::{system_program, sysvar};
use anchor_lang::{InstructionData, ToAccountMetas};
use blockmesh_program::accounts as blockmesh_program_account;
use blockmesh_program::instruction as blockmesh_program_instruction;
use solana_sdk::instruction::Instruction;
use solana_sdk::pubkey::Pubkey;

pub fn create_endpoint_node(
    program_id: Pubkey,
    signer: Pubkey,
    endpoint_node: Pubkey,
) -> Instruction {
    let accounts = blockmesh_program_account::CreateEndpointNodeContext {
        signer,
        endpoint_node,
        system_program: system_program::ID,
        rent: sysvar::rent::ID,
    };
    let accounts = accounts.to_account_metas(None);
    let args = blockmesh_program_instruction::CreateEndpointNode {};
    Instruction {
        program_id,
        accounts,
        data: args.data(),
    }
}
