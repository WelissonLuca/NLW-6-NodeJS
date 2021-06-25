import { inject, injectable } from 'tsyringe';

import { IComplimentRepository } from '@modules/accounts/repositories/IComplimentRepository';

@injectable()
class ListUserReceiveComplimentsUseCase {
  constructor(
    @inject('ComplimentRepository')
    private complimentRepository: IComplimentRepository
  ) {}
  async execute(user_id: string) {
    const compliments = await this.complimentRepository.list({
      where: {
        user_receiver: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsUseCase };
