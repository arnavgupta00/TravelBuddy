import { NEXT_AUTH_CONFIG } from "@/auth/authConfig";
import ChatRoom from "@/components/chat";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page(params: { params: { roomid: string } }) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log(session);
  console.log(params.params.roomid);
  if (!session) {
    redirect("/signin");
  }

  const authenticated = session?.user?.name ? true : false;
  var user = session?.user?.name?.split(" ");

  user?.length >= 1
    ? (user = user[0]?.charAt(0).toUpperCase() + user[0]?.slice(1))
    : (user = "Guest");

  return <ChatRoom session={session} roomid={params.params.roomid}/>;
}
