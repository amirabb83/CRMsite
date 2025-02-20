import { FaUserGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { HiOutlineClipboardList } from "react-icons/hi";

 let informationreport =[
    {id:1,
        icon: <HiOutlineClipboardList className="iconreport"/>,
        title:'کل شرکت ها ',
        count:'نفر : 0'
    },
    {id:2,
        icon: <FaUser className="iconreport"/>,
        title:'مشتریان امروز  ',
        count:'نفر : 0'
    },
    {id:3,
        icon: <FaUserTie className="iconreport"/>,
        title:'کل بازاریابان  ',
        count:'نفر : 0'
    },
    {id:4,
        icon: <FaUserGroup className="iconreport"/>,
        title:'کل مشتریان ',
        count:'نفر : 0'
    },
 ]
 export  {informationreport}