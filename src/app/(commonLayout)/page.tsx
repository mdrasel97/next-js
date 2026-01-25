import { userService } from "@/services/user.service";




export default async function Home() {
  // const session = await authClient.getSession()
  // console.log(session)

  const {data} = await userService.getSession()

  console.log(data)


  return (
<div>
  <h1>amar sonar bangla</h1>
</div>
  );
}
