import { Chat } from "@/app/product/Chat";
import { faker } from "@faker-js/faker";

export default function ProductPage() {
  return <Chat author={faker.person.firstName()} />;
}
