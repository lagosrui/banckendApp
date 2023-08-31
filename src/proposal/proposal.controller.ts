import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { Proposal } from '../schema/proposal.schema';
import { ProposalService } from './proposal.service';

@Controller('proposals')
export class ProposalController {
  constructor(private readonly proposalService: ProposalService) {}

  @Post()
  async createProposal(@Body() proposal: Proposal): Promise<Proposal> {
    return this.proposalService.createProposal(proposal);
  }

  @Get()
  async getAllProposals(): Promise<Proposal[]> {
    return this.proposalService.getAllProposals();
  }

  @Get(':id')
  async getProposalById(@Param('id') id: string): Promise<Proposal> {
    return this.proposalService.getProposalById(id);
  }

  @Put(':id')
  async updateProposal(@Param('id') id: string, @Body() proposal: Proposal): Promise<Proposal> {
    return this.proposalService.updateProposal(id, proposal);
  }

  @Delete(':id')
  async deleteProposal(@Param('id') id: string): Promise<Proposal> {
    return this.proposalService.deleteProposal(id);
  }
}
