class ProposalMailer < ApplicationMailer
  def email(proposal)
    @proposal = proposal
    mail(to: @proposal.client_email, suject: "You're received a new proposal")
  end
end
