import { getMenus } from './service';
import {SmileOutlined} from '@ant-design/icons';


const mapIcon = {
    'smile': <SmileOutlined />,
}

function loopMenus(menus){
  return menus.map(d=>{
    const {icon, routes, ...other} = d;
    return {
      ...other,
      icon: mapIcon[icon],
      routes: routes&&loopMenus(routes)
    }
  })
}

export const layout = () => {
  return {
    menu: {
      request: async () => {
        const menuData = await getMenus();
        const menus = loopMenus(menuData);
        console.log(menus,'menus');
        
        return menus;
      },
    },
  };
};
