import { menu_list } from "../../assets/assets";
import "./Menu.css";

const Menu = ({category,setcategory}) => {
  return (
    <>
      <section className="menu-sec" id='page-2'>
        <h1>Explore our menu</h1>
        <p className="menu-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat
          nam aperiam iusto blanditiis ratione ex maxime iure quis cupiditate!
        </p>
        <div className="menu-list-container">
          {menu_list.map((v, i) => {
            return (
 <div key={i} onClick={()=> setcategory(previous => previous===v.menu_name ? "All" : v.menu_name) } className="menu-item">
   <img className={category===v.menu_name ? 'active': ''} src={v.menu_image} alt="" />
      <p>{v.menu_name}</p>
 </div>
            );
          })}
        </div>
        <hr />
      </section>
    </>
  );
};

export default Menu;
