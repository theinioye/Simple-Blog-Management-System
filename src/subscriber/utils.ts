import { SubscriberService } from "./subscriber.service"


export async  findexistinggsubscriber(username:string) {

const existingUser = await this.subscriberRepository.findOne({username})

return existingUser
}