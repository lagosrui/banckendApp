import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proposal, ProposalDocument } from '../schema/proposal.schema';

@Injectable()
export class ProposalService {
  constructor(@InjectModel(Proposal.name) private proposalModel: Model<ProposalDocument>) {}

  async createProposal(proposal: Proposal): Promise<Proposal> {
    const newProposal = new this.proposalModel(proposal);
    return newProposal.save();
  }

  async getAllProposals(): Promise<Proposal[]> {
    return this.proposalModel.find().exec();
  }

  async getProposalById(id: string): Promise<Proposal> {
    return this.proposalModel.findById(id).exec();
  }

  async updateProposal(id: string, proposal: Proposal): Promise<Proposal> {
    return this.proposalModel.findByIdAndUpdate(id, proposal, { new: true }).exec();
  }

  async deleteProposal(id: string): Promise<Proposal> {
    return this.proposalModel.findByIdAndDelete(id).exec();
  }
}
