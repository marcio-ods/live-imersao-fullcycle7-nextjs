import {useRouter} from 'next/router';
// /user/123?param1=value1&param2=value2 ...

interface Props {}

export default function UserGetPage(props: Props) {
    const router=useRouter()
    const {id}=router.query;
   return (
     <div className="">
      <h1>UserGetPage {id}</h1>
     </div>
   );
};